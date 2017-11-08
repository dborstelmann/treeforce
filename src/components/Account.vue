<template>
    <div class="account-wrapper">
        <div class="row at-row">
            <div class="banner">
                <div class="header">
                    <router-link to="/">
                        <at-button type="primary" icon="icon-arrow-left" size="large" hollow>Back</at-button>
                    </router-link>
                    <span class="account-name" v-if="account">{{account.name}}</span>
                </div>
                <div class="legend">
                    <div class="legend-item">
                        <i class="icon icon-download"></i> Synced From Salesforce
                    </div>
                    <div class="legend-item">
                        <i class="icon icon-cloud-off no-cloud"></i> Created in TreeForce
                    </div>
                    <div class="legend-item">
                        <strong>Note:</strong> Changes made in TreeForce will not persist to Salesforce
                    </div>
                </div>
            </div>
        </div>
        <div class="row at-row account">
            <div class="col-sm-24 col-md-6 col-lg-4">
                <div v-for="contact in contacts" :key="contact.id" class="contact">
                    <div class="name">
                        {{contact.firstname}} {{contact.lastname}}
                        <i v-if="contact.sfid" class="icon icon-download"></i>
                        <i v-if="!contact.sfid" class="icon icon-cloud-off no-cloud"></i>
                        <at-button
                            class="edit-button"
                            icon="icon-edit"
                            circle
                            size="small"
                            @click="editModals[contact.id]=true"
                        ></at-button>
                        <at-modal v-model="editModals[contact.id]" :title="contact.name" @on-confirm="editContact(contact)">
                            <ContactModal :contact="contact"></ContactModal>
                        </at-modal>
                    </div>
                    <div class="title">
                        {{contact.titleOverride || contact.title}}
                    </div>
                    <div class="tags">
                        <at-tag class="tag" v-if="contact.parentId || contact.reportstoid" color="primary">Reports to: {{findParent(contact)}}</at-tag>
                    </div>
                </div>
                <div class="new-contact">
                    <at-button
                        class="new-contact-button"
                        type="primary"
                        icon="icon-user-plus"
                        size="large"
                        hollow
                        @click="newContactModal=true"
                    >
                        New Contact
                    </at-button>
                    <at-modal v-model="newContactModal" title="New Contact" @on-confirm="createContact">
                        <ContactModal :contact="newContact"></ContactModal>
                    </at-modal>
                </div>
            </div>
        </div>
        </div>
            <!-- <draggable v-model="contacts" @start="drag=true" @end="drag=false"> -->

            <!-- </draggable> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'underscore'
import ContactModal from './ContactModal'

const contactSchema = {
    firstname: '',
    lastname: '',
    name: '',
    titleOverride: '',
    email: '',
    phone: '',
    mobilephone: '',
    accountid: '',
    createdLocally: true
}

export default {
    name: 'accounts',
    components: {
        ContactModal
    },
    data () {
        return {
            contacts: [],
            contactMap: {},
            salesforceContactMap: {},
            account: {},
            newContactModal: false,
            newContact: _.extend({}, contactSchema),
            editModals: {}
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
            _.each(contacts, (c) => {
                this.contactMap[c.id] = c.name
                if (c.sfid) {
                    this.salesforceContactMap[c.sfid] = c.name
                }
                this.$set(this.editModals, c.id, false)
            })
        },
        mapAccount () {
            this.account = _.findWhere(this.$store.state.accounts, { sfid: this.$route.params.id })
        },
        findParent (contact) {
            return contact.parentId ? this.contactMap[contact.parentId] : this.salesforceContactMap[contact.reportstoid]
        },
        createContact () {
            if (this.newContact.firstname && this.newContact.lastname && this.newContact.titleOverride) {
                this.newContact.name = this.newContact.firstname + ' ' + this.newContact.lastname
                this.newContact.accountid = this.account.sfid
                this.$store.dispatch('createContact', this.newContact).then(this.createdContact, this.errorMessage)
            } else {
                this.$Message.warning('Please input a first name, last name, and title.')
            }
        },
        createdContact (newContact) {
            this.contacts.push(newContact)
            this.contactMap[newContact.id] = newContact.name
            this.newContact = _.extend({}, contactSchema)
            this.$Message.success('Contact created!')
        },
        editContact (updatedContact) {
            if (updatedContact.firstname && updatedContact.lastname && (updatedContact.titleOverride || updatedContact.title)) {
                updatedContact.name = updatedContact.firstname + ' ' + updatedContact.lastname
                this.$store.dispatch('editContact', updatedContact).then(
                    (editedContact) => this.editedContact(editedContact, updatedContact),
                    this.errorMessage
                )
            } else {
                this.$Message.warning('Please input a first name, last name, and title.')
            }
        },
        editedContact (editedContact, originalContact) {
            originalContact = editedContact
            this.contactMap[editedContact.id] = editedContact.name
            this.$Message.success('Contact edited!')
        },
        errorMessage () {
            this.$Message.error('Server error')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.account-wrapper {
    .no-cloud {
        color: #FF4949;
    }

    .banner {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .legend {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .legend-item {
                text-align: right;
            }
        }

        .account-name {
            margin-left: 10px;
            font-size: 1.5rem;
        }
    }

    .account {
        margin-top: 20px;

        .contact {
            margin-top: 10px;
            border: 1px solid #c5d9e8;
            border-radius: 4px;
            color: #6190e8;
            cursor: pointer;
            transition: background .2s;
            padding: 6px 10px;

            .title {
                color: #3f536e;
                font-size: 0.8rem;
            }

            .edit-button {
                float: right;
            }

            // &:hover {
            //     color: #fff;
            //     background-color: #6190e8;
            //
            //     .title {
            //         color: #fff;
            //     }
            //
            //     .tag {
            //         color: #6190e8;
            //         background-color: #fff;
            //     }
            //
            //     .edit-button {
            //         color: #6190e8;
            //     }
            // }
        }

        .new-contact-button {
            margin-top: 10px;

            // &:hover {
            //     color: #fff;
            //     background-color: #6190e8;
            // }
        }
    }
}

</style>
