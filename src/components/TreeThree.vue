<template>
  <div class="tree">
  </div>
</template>

<script>
import _ from 'underscore'
import Tree from './tree'
// var treeData =
//     {
//         'name': 'BU Head',
//         'children': [
//             {
//                 'name': 'Manager',
//                 'children': [
//                     {
//                         'name': 'Team Lead',
//                         'children': []
//                     },
//                     {
//                         'name': 'Team Lead',
//                         'children': []
//                     }
//                 ]
//             },
//             {
//                 'name': 'Manager',
//                 'children': []
//             }
//         ]
//     }
export default {
    name: 'tree-three',
    props: ['contacts'],
    mounted () {
        Tree(this.hierarchyContacts(this.rootList[0]), this.$el)
    },
    computed: {
        parentMap () {
            const map = {}
            _.each(this.contacts, (c) => {
                if (c.parentId) {
                    map[parseInt(c.parentId)] = _.findWhere(this.contacts, { id: parseInt(c.parentId) })
                } else if (c.reportstoid) {
                    map[c.reportstoid] = _.findWhere(this.contacts, { sfid: c.reportstoid })
                }
            })
            return map
        },
        rootList () {
            const roots = []
            _.each(_.keys(this.parentMap), (p) => {
                if (!this.parentMap[parseInt(p)].parentId && !this.parentMap[p].reportstoid) {
                    roots.push(this.parentMap[parseInt(p)])
                }
            })
            return roots
        },
        contactsInTree () {
            return _.filter(this.contacts, c => this.parentMap[c.id || c.sfid] || c.parentId || c.reportstoid)
        }
    },
    methods: {
        hierarchyContacts (node) {
            return {
                name: node.name + ' - ' + (node.titleOverride || node.title),
                children: this.findChildren(node)
            }
        },
        findChildren (node) {
            const children = _.where(this.contactsInTree, { parentId: node.id.toString() })
            _.each(this.contactsInTree, (c) => {
                if (node.sfid && c.reportstoid === node.sfid && c.parentId === null) {
                    children.push(c)
                }
            })
            const childNodes = []
            _.each(children, (c) => {
                childNodes.push({
                    name: c.name + ' - ' + (c.titleOverride || c.title),
                    children: this.findChildren(c)
                })
            })
            return childNodes
        }
    }
}
</script>

<style lang="less" scoped>
.tree {
    height: 400px;
    width: 400px;

    .node {
            cursor: pointer;
        }

            .node circle {
                /*fill: #fff;
                stroke: steelblue;*/
                stroke-width: 3px;
            }

            .node text {
                font: 12px sans-serif;
                fill: #fff;
            }

        .link {
            fill: none;
            stroke: #ccc;
            stroke-width: 2px;
        }

        .tree {
            margin-bottom: 10px;
            overflow: auto;
        }
}
</style>
