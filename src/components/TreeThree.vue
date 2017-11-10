<template>
  <div class="tree">
  </div>
</template>

<script>
import _ from 'underscore'
import Tree from './dndTree'

export default {
    name: 'tree-three',
    props: ['contacts'],
    mounted () {
        this.buildTree()
    },
    watch: {
        contacts: function () {
            this.buildTree()
        }
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
        root () {
            let root = {}
            _.each(_.keys(this.parentMap), (p) => {
                if (!this.parentMap[parseInt(p)].parentId && !this.parentMap[p].reportstoid) {
                    root = this.parentMap[parseInt(p)]
                }
            })
            return root
        },
        contactsInTree () {
            return _.filter(this.contacts, c => this.parentMap[c.id || c.sfid] || c.parentId || c.reportstoid)
        }
    },
    methods: {
        hierarchyContacts (node) {
            return {
                // name: node.name + ' - ' + (node.titleOverride || node.title),
                name: node.name,
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
                    // name: c.name + ' - ' + (c.titleOverride || c.title),
                    name: c.name,
                    children: this.findChildren(c)
                })
            })
            return childNodes
        },
        buildTree () {
            if (this.contacts.length) {
                Tree(this.hierarchyContacts(this.root), this.$el)
            }
        }
    }
}
</script>

<style lang="less">
.tree {
    width: 100%;
    height: 100vh;

    @media screen and (min-width: 480px) {
        height: calc(~'100vh - 150px');
    }

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
        // fill: #fff;
    }

    .link {
        fill: none;
        stroke: #ccc;
        stroke-width: 2px;
    }

}
</style>
