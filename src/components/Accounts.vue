<template>
    <div class="account-wrapper">
        <div class="accounts">
            <div
                v-for="account in accounts"
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
                <at-button
                    class="action-button"
                    type="error"
                    icon="icon-x"
                    size="large"
                    circle
                    hollow
                    @click="removeAccount(account)"
                /> -->
                <span>{{account.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'accounts',
    created () {
        this.$store.dispatch('fetchAccounts')
    },
    computed: mapState([
        'accounts'
    ]),
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

.account-wrapper {
    padding: 10vh 10vw;
    .accounts {
        .account {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
