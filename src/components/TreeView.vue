<template>
  <div>
      <tree style="transform: rotate(90deg); height: 60vw; width: 70vh;" layoutType="euclidean" :zoomable="true" v-for="contact in rootList" :key="contact.id" :data="hierarchyContacts(contact)" node-text="name"></tree>
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
                    name: c.name,
                    children: this.findChildren(c)
                })
            })
            return childNodes
        }
    }
}
</script>

<style lang="less" scoped>

</style>
