/* eslint-disable */
/* Copyright (c) 2013-2016, Rob Schmuecker
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* The name Rob Schmuecker may not be used to endorse or promote products
  derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

import * as d3 from 'd3'
import _ from 'underscore'

// Get JSON data
export default function (treeData, contactsInTree, $el, updateContact) {
    var nodes = null
    var domNode = null
    var x = null
    var y = null
    var scale = null
    var links = null
    var parentLink = null
    var nodePaths = null
    var nodesExit = null
    var relCoords = null
    var dragStarted = null
    var panTimer = null
    // Calculate total nodes, max label length
    var totalNodes = 0
    var maxLabelLength = 0
    // variables for drag/drop
    var selectedNode = null
    var draggingNode = null
    // panning variables
    var panSpeed = 200
    var panBoundary = 20 // Within 20px from edges will pan when dragging.
    // Misc. variables
    var i = 0
    var duration = 750
    var root

    var clientRect = $el.getBoundingClientRect()

    // size of the diagram
    var viewerWidth = clientRect.width
    var viewerHeight = clientRect.height

    var tree = d3.layout.tree()
        .size([viewerHeight, viewerWidth])

    // define a d3 diagonal projection for use by the node paths later on.
    var diagonal = d3.svg.diagonal()
        .projection(function (d) {
            return [d.x, d.y]
        })

    // A recursive helper function for performing some setup by walking through all nodes

    function visit (parent, visitFn, childrenFn) {
        if (!parent) return

        visitFn(parent)

        var children = childrenFn(parent)
        if (children) {
            var count = children.length
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn)
            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(treeData, function (d) {
        totalNodes++
        maxLabelLength = Math.max(d.name.length, maxLabelLength)
    }, function (d) {
        return d.children && d.children.length > 0 ? d.children : null
    })

    // sort the tree according to the node names

    function sortTree () {
        tree.sort(function (a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1
        })
    }
    // Sort the tree initially incase the JSON isn't in a sorted order.
    sortTree()

    // TODO: Pan function, can be better implemented.

    function pan (domNode, direction) {
        var speed = panSpeed
        if (panTimer) {
            clearTimeout(panTimer)
            var translateCoords = d3.transform(svgGroup.attr('transform'))
            var translateX = null
            var translateY = null
            if (direction === 'left' || direction === 'right') {
                translateX = direction === 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed
                translateY = translateCoords.translate[1]
            } else if (direction === 'up' || direction === 'down') {
                translateX = translateCoords.translate[0]
                translateY = direction === 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed
            }
            // var scaleX = translateCoords.scale[0]
            // var scaleY = translateCoords.scale[1]
            var scale = zoomListener.scale()
            svgGroup.transition().attr('transform', 'translate(' + translateX + ',' + translateY + ')scale(' + scale + ')')
            d3.select(domNode).select('g.node').attr('transform', 'translate(' + translateX + ',' + translateY + ')')
            zoomListener.scale(zoomListener.scale())
            zoomListener.translate([translateX, translateY])
            panTimer = setTimeout(function () {
                pan(domNode, speed, direction)
            }, 50)
        }
    }

    // Define the zoom function for the zoomable tree

    function zoom () {
        svgGroup.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')')
    }

    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 10]).on('zoom', zoom)

    function initiateDrag (d, domNode) {
        draggingNode = d
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none')
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show')
        d3.select(domNode).attr('class', 'node activeDrag')

        svgGroup.selectAll('g.node').sort(function (a, b) { // select the parent and sort the path's
            if (a.id !== draggingNode.id) return 1 // a is not the hovered element, send "a" to the back
            else return -1 // a is the hovered element, bring "a" to the front
        })
        // if nodes has children, remove the links and nodes
        if (nodes.length > 1) {
            // remove link paths
            links = tree.links(nodes)
            nodePaths = svgGroup.selectAll('path.link')
                .data(links, function (d) {
                    return d.target.id
                }).remove()
            // remove child nodes
            nodesExit = svgGroup.selectAll('g.node')
                .data(nodes, function (d) {
                    return d.id
                }).filter(function (d, i) {
                    if (d.id === draggingNode.id) {
                        return false
                    }
                    return true
                }).remove()
        }

        // remove parent link
        parentLink = tree.links(tree.nodes(draggingNode.parent))
        svgGroup.selectAll('path.link').filter(function (d, i) {
            if (d.target.id === draggingNode.id) {
                return true
            }
            return false
        }).remove()

        dragStarted = null
    }

    $el.innerHTML = null

    // define the baseSvg, attaching a class for styling and the zoomListener
    var baseSvg = d3.select($el).append('svg')
        .attr('width', viewerWidth)
        .attr('height', viewerHeight)
        .attr('class', 'overlay')
        .call(zoomListener)

    var defs = baseSvg.append('svg:defs')

    // _.each(contactsInTree, (c) => {
    //     defs.append("svg:pattern")
    //       .attr("id", 'image-' + c.id)
    //       .attr("width", 14)
    //       .attr("height", 14)
    //       .attr("patternUnits", "userSpaceOnUse")
    //       .append("svg:image")
    //       .attr("xlink:href", c.uploadedImageUrl)
    //       .attr("width", 14)
    //       .attr("height", 14)
    //       .attr("x", 0)
    //       .attr("y", 0);
    // });

    // Define the drag listeners for drag/drop behaviour of nodes.
    var dragListener = d3.behavior.drag()
        .on('dragstart', function (d) {
            if (d === root) {
                return
            }
            dragStarted = true
            nodes = tree.nodes(d)
            d3.event.sourceEvent.stopPropagation()
            // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
        })
        .on('drag', function (d) {
            if (d === root) {
                return
            }
            if (dragStarted) {
                domNode = this
                initiateDrag(d, domNode)
            }
            // get coords of mouseEvent relative to svg container to allow for panning
            relCoords = d3.mouse(document.getElementsByTagName('svg')[0])
            if (relCoords[0] < panBoundary) {
                panTimer = true
                pan(this, 'left')
            } else if (relCoords[0] > (clientRect.width - panBoundary)) {
                panTimer = true
                pan(this, 'right')
            } else if (relCoords[1] < panBoundary) {
                panTimer = true
                pan(this, 'up')
            } else if (relCoords[1] > (clientRect.height - panBoundary)) {
                panTimer = true
                pan(this, 'down')
            } else {
                try {
                    clearTimeout(panTimer)
                } catch (e) {

                }
            }

            d.x0 += d3.event.dx
            d.y0 += d3.event.dy
            var node = d3.select(this)
            node.attr('transform', 'translate(' + d.x0 + ',' + d.y0 + ')')
            updateTempConnector()
        }).on('dragend', function (d) {
            if (d === root) {
                return
            }
            domNode = this
            if (selectedNode) {
                // now remove the element from the parent, and insert it into the new elements children
                var index = draggingNode.parent.children.indexOf(draggingNode)
                if (index > -1) {
                    draggingNode.parent.children.splice(index, 1)
                }
                if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
                    if (typeof selectedNode.children !== 'undefined') {
                        selectedNode.children.push(draggingNode)
                    } else {
                        selectedNode._children.push(draggingNode)
                    }
                } else {
                    selectedNode.children = []
                    selectedNode.children.push(draggingNode)
                }
                draggingNode.contact.parentId = selectedNode.contact.id
                updateContact(draggingNode.contact)
                // Make sure that the node being added to is expanded so user can see added node is correctly moved
                expand(selectedNode)
                sortTree()
                endDrag()
            } else {
                endDrag()
            }
        })

    function endDrag () {
        selectedNode = null
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle')
        d3.select(domNode).attr('class', 'node')
        // now restore the mouseover event or we won't be able to drag a 2nd time
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', '')
        updateTempConnector()
        if (draggingNode !== null) {
            update(root)
            // centerNode(draggingNode)
            draggingNode = null
        }
    }

    // Helper functions for collapsing and expanding nodes.

    // function collapse (d) {
    //     if (d.children) {
    //         d._children = d.children
    //         d._children.forEach(collapse)
    //         d.children = null
    //     }
    // }

    function expand (d) {
        if (d._children) {
            d.children = d._children
            d.children.forEach(expand)
            d._children = null
        }
    }

    var overCircle = function (d) {
        selectedNode = d
        updateTempConnector()
    }
    var outCircle = function (d) {
        selectedNode = null
        updateTempConnector()
    }

    // Function to update the temporary connector indicating dragging affiliation
    var updateTempConnector = function () {
        var data = []
        if (draggingNode !== null && selectedNode !== null) {
            // have to flip the source coordinates since we did this for the existing connectors on the original tree
            data = [{
                source: {
                    x: selectedNode.x0,
                    y: selectedNode.y0
                },
                target: {
                    x: draggingNode.x0,
                    y: draggingNode.y0
                }
            }]
        }
        var link = svgGroup.selectAll('.templink').data(data)

        link.enter().append('path')
            .attr('class', 'templink')
            .attr('d', d3.svg.diagonal())
            .attr('pointer-events', 'none')

        link.attr('d', d3.svg.diagonal())

        link.exit().remove()
    }

    // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    function centerNode (source) {
        scale = zoomListener.scale()
        x = -source.x0
        y = -source.y0
        x = x * scale + viewerWidth / 2
        y = y * scale + 20
        d3.select('g').transition()
            .duration(duration)
            .attr('transform', 'translate(' + x + ',' + y + ')scale(' + scale + ')')
        zoomListener.scale(scale)
        zoomListener.translate([x, y])
    }

    // Toggle children function

    function toggleChildren (d) {
        if (d.children) {
            d._children = d.children
            d.children = null
        } else if (d._children) {
            d.children = d._children
            d._children = null
        }
        return d
    }

    // Toggle children on click.

    function click (d) {
        if (d3.event.defaultPrevented) return // click suppressed
        d = toggleChildren(d)
        update(d)
        // centerNode(d)
    }

    function update (source) {
        // Compute the new height, function counts total children of root node and sets tree height accordingly.
        // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
        // This makes the layout more consistent.
        var levelWidth = [1]
        var childCount = function (level, n) {
            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0)

                levelWidth[level + 1] += n.children.length
                n.children.forEach(function (d) {
                    childCount(level + 1, d)
                })
            }
        }
        childCount(0, root)
        var newHeight = d3.max(levelWidth) * 35 // 25 pixels per line
        tree = tree.size([newHeight, viewerWidth])

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse()
        var links = tree.links(nodes)

        function getWidthOfText(txt, fontname, fontsize){
            if(getWidthOfText.e === undefined){
                getWidthOfText.e = document.createElement('span');
                getWidthOfText.e.style.visibility = "hidden";
                document.body.appendChild(getWidthOfText.e);
            }
            getWidthOfText.e.style.fontSize = fontsize;
            getWidthOfText.e.style.fontFamily = fontname;
            getWidthOfText.e.innerText = txt;
            return getWidthOfText.e.offsetWidth;
        }

        var heightMap = {}

        var findLength = function () {
            _.each(nodes, function (n) {
                var nodesInLevel = _.where(nodes, { depth: n.depth })
                var maxLength = 0
                _.each(nodesInLevel, function (iN) {
                    maxLength = Math.max(getWidthOfText(iN.name, 'sans-serif', '11px'), maxLength)
                })
                heightMap[n.depth] = maxLength
            })
        }
        findLength()

        var heights = [0]

        _.each(_.keys(heightMap), function (d, idx) {
            heights.push(
                _.reduce(_.values(heightMap).splice(0, idx), function (memo, num) {
                    return memo + num
                }, 0) + heightMap[d]
            )
        })
        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function (d) {
            // console.log((heights[d.depth] * 7))
            d.y = heights[d.depth] + (25 * d.depth) // maxLabelLength * 10px
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        })

        // Update the nodes…
        var node = svgGroup.selectAll('g.node')
            .data(nodes, function (d) {
                return d.id || (d.id = ++i)
            })

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append('g')
            .call(dragListener)
            .attr('class', 'node')
            .attr('transform', function (d) {
                return 'translate(' + source.x0 + ',' + source.y0 + ')'
            })
            .on('click', click)

        nodeEnter.append('circle')
            .attr('class', 'nodeCircle')
            .attr('r', 0)
            .style('fill', function (d) {
                return d._children ? '#3f536e' : '#fff'
            })
            .on("mouseover", function (d) {
                var clientRect = this.getBoundingClientRect()

                var tip = document.createElement('div');
                tip.className = 'tooltip'
                tip.style.left = (clientRect.x - 100) + 'px'
                tip.style.bottom = (window.innerHeight - clientRect.y + 6) + 'px'
                tip.innerHTML = `
                    <div class="pop-title pop-name">${d.contact.name || ''}</div>
                    <div class="pop-title">${d.contact.titleOverride || d.contact.title || ''}</div>
                    <div class="pop-title">${d.contact.email || ''}</div>
                    <div class="pop-title">${d.contact.phone || ''}</div>
                    <div class="pop-title">${d.contact.mobilephone || ''}</div>
                `
                if (d.contact.uploadedImageUrl) {
                  tip.innerHTML = `<img width="80px" src="${d.contact.uploadedImageUrl || ''}">` + tip.innerHTML;
                }
                $el.appendChild(tip);
            })
            .on("mouseout", function() {
                d3.select($el).select('div.tooltip').remove()
            });

        nodeEnter.append('text')
            // .attr('x', function (d) {
            //     return d.children || d._children ? -10 : 10
            // })
            .attr('x', 10)
            .attr('dy', function (d) {
                return d.children || d._children ? '-0.3em' : '.3em'
            })
            // .attr('dy', '.25em')
            .attr('transform', 'rotate(90)')
            .attr('class', 'nodeText')
            // .attr('text-anchor', function (d) {
            //     return d.children || d._children ? 'end' : 'start'
            // })
            .text(function (d) {
                return d.name
            })
            .style('fill-opacity', 0)

        // phantom node to give us mouseover in a radius around it
        nodeEnter.append('circle')
            .attr('class', 'ghostCircle')
            .attr('r', 25)
            .attr('opacity', 0.2) // change this to zero to hide the target area
        .style('fill', '#13CE66')
            .attr('pointer-events', 'mouseover')
            .on('mouseover', function (node) {
                overCircle(node)
            })
            .on('mouseout', function (node) {
                outCircle(node)
            })

        // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr('x', 10)
            // .attr('x', function (d) {
            //     return d.children || d._children ? -10 : 10
            // })
            // .attr('text-anchor', function (d) {
            //     return d.children || d._children ? 'end' : 'start'
            // })
            .text(function (d) {
                return d.name
            })

        // Change the circle fill depending on whether it has children and is collapsed
        node.select('circle.nodeCircle')
            .attr('r', 7)
            // .style("fill", "#fff")
            .style('fill', function (d) {
                // if (d.contact.uploadedImageUrl) {
                //     return `url(#image-${d.contact.id})`;
                // }
                if (d.contact.colorCode && d._children) {
                  return '#' + d.contact.colorCode;
                }
                return d._children ? '#3f536e' : '#fff'
            })
            .style('stroke', function (d) {
                if (d.contact.colorCode) {
                  return '#' + d.contact.colorCode;
                }
                return d.children || d._children ? '#3f536e' : '#ccc'
            })

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr('transform', function (d) {
                return 'translate(' + d.x + ',' + d.y + ')'
            })

        // Fade the text in
        nodeUpdate.select('text')
            .style('fill-opacity', 1)

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr('transform', function (d) {
                return 'translate(' + source.x + ',' + source.y + ')'
            })
            .remove()

        nodeExit.select('circle')
            .attr('r', 0)

        nodeExit.select('text')
            .style('fill-opacity', 0)

        // Update the links…
        var link = svgGroup.selectAll('path.link')
            .data(links, function (d) {
                return d.target.id
            })

        // Enter any new links at the parent's previous position.
        link.enter().insert('path', 'g')
            .attr('class', 'link')
            .attr('d', function (d) {
                var o = {
                    x: source.x0,
                    y: source.y0
                }
                return diagonal({
                    source: o,
                    target: o
                })
            })

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr('d', diagonal)

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr('d', function (d) {
                var o = {
                    x: source.x,
                    y: source.y
                }
                return diagonal({
                    source: o,
                    target: o
                })
            })
            .remove()

        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x
            d.y0 = d.y
        })
    }

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append('g')

    // Define the root
    root = treeData
    root.x0 = viewerHeight / 2
    root.y0 = 0

    // Layout the tree initially and center on the root node.
    update(root)
    centerNode(root)
}
