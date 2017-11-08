<template>
    <div class="accounts-wrapper">
        <div class="row at-row top-row">
            <div class="col-sm-24">
                <div class="banner">
                    <img class="hierarchy-image" src="../assets/hierarchy.png">
                    <span class="treeforce-title">TreeForce</span>
                </div>
            </div>
        </div>
        <div class="row at-row">
            <AccountFilters></AccountFilters>
        </div>
        <div class="row at-row">
            <div class="accounts">
                <div
                    v-for="account in filteredAccounts"
                    class="account row at-row"
                    :key="account.id"
                >
                    <!-- <at-input
                        class="edit-account account-input"
                        placeholder="...press enter to remove"
                        size="large"
                        :value="account.text"
                        :disabled="account.done ? 'disabled': null"
                        @keyup.enter.native="editAccount(account, $event)"
                    /> -->
                    <!-- @blur="editAccount(account, $event)" -->
                    <!-- <at-button
                        class="action-button"
                        type="primary"
                        icon="icon-check"
                        size="large"
                        circle
                        :hollow="!account.done ? 'hollow': null"
                        @click="toggleDone(account)"
                    />
                    /> -->
                    <router-link :to="{ name: 'account', params: { id: account.sfid }}">
                        <at-button type="primary" size="large" hollow>{{account.name}}</at-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'underscore'
import AccountFilters from './AccountFilters'

export default {
    name: 'accounts',
    components: {
        AccountFilters
    },
    created () {
        this.$store.dispatch('fetchAccounts')
    },
    computed: mapState({
        filteredAccounts (state) {
            if (state.accountSearch) {
                return _.filter(state.accounts, a => a.name.toLowerCase().indexOf(state.accountSearch.toLowerCase()) > -1)
            }
            return state.accounts
        }
    }),
    methods: {
        // addaccount (e) {
        //     var text = e.target.value
        //     if (text.trim()) {
        //         this.$store.dispatch('addaccount', {
        //             text: e.target.value,
        //             done: false
        //         }).then(() => {
        //             this.$Message.info('Task added')
        //         }, this.errorMessage)
        //     }
        //     e.target.value = ''
        // },
        // editaccount (account, e) {
        //     var text = e.target.value
        //     if (text.trim()) {
        //         this.$store.dispatch('editaccount', {
        //             account,
        //             updatedText: text
        //         }).then(() => {
        //             this.$Message.info('Task edited')
        //         }, this.errorMessage)
        //     } else {
        //         this.removeaccount(account)
        //     }
        // },
        // removeaccount (account) {
        //     this.$store.dispatch('removeaccount', account).then(() => {
        //         this.$Message.warning('Task removed')
        //     }, this.errorMessage)
        // },
        // toggleDone (account) {
        //     this.$store.dispatch('toggleDone', account).then((updatedaccount) => {
        //         updatedaccount.done ? this.$Message.success('Task completed :)') : this.$Message.error('Task undone :(')
        //     }, this.errorMessage)
        // },
        // errorMessage () {
        //     this.$Message.error('Server error')
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.accounts-wrapper {
    .top-row {
        padding-bottom: 20px;

        .banner {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            .hierarchy-image {
                width: 60px;
                height: 60px;
                margin-right: 10px;
            }

            .treeforce-title {
                font-size: 1.5rem;
                // font-style: italic;
                font-weight: 300;
            }
        }
    }

    .accounts {
        margin-bottom: 30px;
        .account {
            margin-bottom: 10px;

            .action-button {
                width: 36px;
                height: 36px;
                margin-left: 10px;
            }

            .account-input {
                flex-grow: 3;
            }
        }
    }
}

</style>
