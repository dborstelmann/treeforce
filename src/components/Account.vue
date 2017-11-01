<template>
    <div class="account-wrapper">
        <router-link to="/">Back</router-link>
        <div class="account">
            <h1 v-if="account">{{account.name}}</h1>
            <draggable v-model="contacts" @start="drag=true" @end="drag=false">
                <div v-for="contact in contacts" class="contact">
                    <h4 class="name">
                        {{contact.name}}
                    </h4>
                    <span class="name">
                        {{contact.title}}
                    </span>
                </div>
            </draggable>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'underscore'
import draggable from 'vuedraggable'

export default {
    name: 'accounts',
    components: {
        draggable
    },
    data () {
        return {
            contacts: [],
            account: {}
        }
    },
    created () {
        if (!this.$store.state.accounts.length) {
            this.$store.dispatch('fetchAccounts').then(this.mapAccount)
        } else {
            this.mapAccount()
        }
        this.$store.dispatch('fetchContacts', this.$route.params.id).then(this.updateContacts)
    },
    computed: mapState([
        'accounts'
    ]),
    methods: {
        updateContacts (contacts) {
            this.contacts = contacts
        },
        mapAccount () {
            this.account = _.findWhere(this.$store.state.accounts, { sfid: this.$route.params.id })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.account-wrapper {
    padding: 10vh 10vw;

    .account {
        margin-top: 20px;

        .contact {
            margin-top: 20px;
        }
    }
}

</style>
