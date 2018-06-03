<template>
    <div class="tree">
    </div>
</template>

<script>
import _ from 'underscore'
import Tree from './dndTree'

export default {
    name: 'tree-three',
    props: ['contacts', 'orientation', 'locked', 'zoomedContact', 'hoveredContact'],
    mounted () {
        this.buildTree()
    },
    data () {
        return {
            currentDiv: null
        }
    },
    watch: {
        contacts: {
            handler (a, b, c) {
                this.buildTree()
            },
            deep: true
        },
        orientation () {
            this.buildTree()
        },
        locked () {
            this.buildTree()
        },
        root () {
            this.buildTree()
        },
        hoveredContact () {
            if (this.hoveredContact) {
                const els = this.$el.getElementsByClassName('highlighted')
                if (els.length) {
                    _.each(els, el => {
                        el.classList.remove('highlighted')
                    })
                }
                const svgDiv = this.$el.querySelector('[data-id="' + String(this.hoveredContact.id) + '"]').children[0]
                svgDiv.classList.add('highlighted')
                this.currentDiv = svgDiv
            } else if (this.currentDiv) {
                this.currentDiv.classList.remove('highlighted')
                this.currentDiv = null
            }
        }
    },
    computed: {
        parentMap () {
            const map = {}
            _.each(this.contacts, (c) => {
                if (c.parentId) {
                    map[c.parentId] = _.findWhere(this.contacts, { id: c.parentId })
                } else if (c.reportstoid) {
                    map[c.reportstoid] = _.findWhere(this.contacts, { sfid: c.reportstoid })
                }
            })
            return map
        },
        root () {
            // let root = {}
            // _.each(_.keys(this.parentMap), (p) => {
            //     if (!this.parentMap[p].parentId && !this.parentMap[p].reportstoid) {
            //         root = this.parentMap[p]
            //     }
            // })
            // console.log(root)
            if (this.zoomedContact) {
                return this.zoomedContact
            }
            return {id: 0, name: 'Root', parentId: null}
        },
        contactsInTree () {
            return _.filter(this.contacts, c => this.parentMap[c.id || c.sfid] || c.parentId || c.reportstoid)
        }
    },
    methods: {
        hierarchyContacts (node) {
            return {
                name: node.name,
                contact: node,
                children: this.findChildren(node)
            }
        },
        findChildren (node) {
            const children = _.where(this.contactsInTree, { parentId: node.id })
            _.each(this.contactsInTree, (c) => {
                if (node.sfid && c.reportstoid === node.sfid && c.parentId === null) {
                    children.push(c)
                }
            })
            const childNodes = []
            _.each(children, (c) => {
                childNodes.push({
                    name: c.name,
                    contact: c,
                    children: this.findChildren(c)
                })
            })
            return childNodes
        },
        buildTree () {
            if (this.contacts.length) {
                Tree(this.hierarchyContacts(this.root), this.$el, this.updateParent, this.orientation, this.locked)
            }
        },
        updateParent (updatedContact) {
            this.$store.dispatch('editContact', updatedContact)
        }
    }
}
</script>

<style lang="less">
.tree {
    border: 1px solid #C5D9E8;
    border-radius: 4px;
    width: 100%;
    height: 100vh;

    @media screen and (min-width: 480px) {
        height: calc(~'100vh - 180px');
    }

    // .node {
    //     cursor: pointer;
    // }
    //
    // .node circle {
    //     /*fill: #fff;
    //     stroke: steelblue;*/
    //     stroke-width: 3px;
    // }
    //
    // .node text {
    //     font: 12px sans-serif;
    //     // fill: #fff;
    // }
    //
    // .link {
    //     fill: none;
    //     stroke: #ccc;
    //     stroke-width: 2px;
    // }

    .node {
        cursor: pointer;
    }

    .highlighted {
        fill: orange !important;
        stroke: orange !important;
        stroke-width: 20px !important;
    }

    .overlay{
        // background-color:#EEE;
    }

    .node circle {
        stroke-width: 2.5px;
    }

    .node text {
        font-size: 11px;
        font-family:sans-serif;
    }

    .link {
        fill: none;
        stroke: #ccc;
        stroke-width: 1.5px;
    }

    .templink {
        fill: none;
        stroke: #3F536E;
        stroke-width: 3px;
    }

    .ghostCircle.show{
        display: block;
    }

    .ghostCircle, .activeDrag .ghostCircle{
        display: none;
    }

    /* Tooltip container */
    .tooltip {
        position: absolute;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        // width: 200px;

        .pop-title {
            font-size: 12px;
            word-wrap: break-word;
        }

        .pop-name {
            color: #6190E8;
            font-size: 16px;
        }
        // display: inline-block;
        // border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
    }

    // /* Tooltip text */
    // .tooltip .tooltiptext {
    //     visibility: hidden;
    //     width: 120px;
    //     background-color: black;
    //     color: #fff;
    //     text-align: center;
    //     padding: 5px 0;
    //     border-radius: 6px;
    //
    //     /* Position the tooltip text - see examples below! */
    //     position: absolute;
    //     z-index: 1;
    // }

    /* Show the tooltip text when you mouse over the tooltip container */
    // .tooltip:hover .tooltiptext {
    //     visibility: visible;
    // }
}
</style>
