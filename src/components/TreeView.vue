<template>
  <div>
      <tree class="tree" layoutType="euclidean" :zoomable="true" v-for="contact in rootList" :key="contact.id" :data="hierarchyContacts(contact)" node-text="name"></tree>
  </div>
</template>

<script>
import _ from 'underscore'
import { tree } from 'vued3tree'

export default {
    name: 'tree-view',
    components: {
        tree
    },
    props: ['contacts'],
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
    width: 100%;
    height: 100vh;

    @media screen and (min-width: 480px) {
        height: calc(~'100vh - 84px - 36px - 52px');
    }

    @media screen and (min-width: 835px) {
        height: calc(~'100vh - 63px - 36px - 52px');
    }
}
</style>
