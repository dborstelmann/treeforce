<template>
    <div class="account-wrapper">
        <div class="row at-row">
            <div class="banner">
                <div class="header">
                    <router-link to="/">
                        <at-button type="primary" icon="icon-arrow-left" hollow>Back</at-button>
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
            <div class="col-xs-24 col-md-6 col-lg-4">
                <ContactFilters></ContactFilters>
                <div class="contact-list">
                    <div v-for="contact in filteredContacts" :key="contact.id" class="contact">
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
                            <at-modal v-model="editModals[contact.id]" :title="contact.name" @on-confirm="editContact(editModalsData[contact.id], true)" okText="Save">
                                <ContactModal :contact="editModalsData[contact.id]" :contactSearch="contactSearch(contact.id)"></ContactModal>
                            </at-modal>
                        </div>
                        <div class="title">
                            {{contact.titleOverride || contact.title}}
                        </div>
                        <div class="tags" v-if="checkForRoot(contact)">
                            <at-tag class="tag" color="primary">Root</at-tag>
                        </div>
                        <at-select v-else v-model="contact.parentId" @on-change="editContact(contact)" filterable placeholder="Reports to..." size="small" notFoundText="No matching contact">
                            <at-option v-for="c in contactSearch(contact.id)" :key="c.id" :value="c.id">{{c.name}}</at-option>
                        </at-select>
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
                    <at-modal v-model="newContactModal" title="New Contact" @on-confirm="createContact" okText="Save">
                        <ContactModal :contact="newContact" :contactSearch="contactSearch()"></ContactModal>
                    </at-modal>
                </div>
            </div>
            <div class="col-xs-24 col-md-18 col-lg-20">
                <TreeThree :contacts="contacts"></TreeThree>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'underscore'
import ContactModal from './ContactModal'
import ContactFilters from './ContactFilters'
import TreeThree from './TreeThree'

const contactSchema = {
    firstname: '',
    lastname: '',
    name: '',
    titleOverride: '',
    email: '',
    phone: '',
    mobilephone: '',
    accountid: '',
    uploadedImageUrl: '',
    colorCode: '',
    createdLocally: true
}

export default {
    name: 'accounts',
    components: {
        ContactModal,
        ContactFilters,
        TreeThree
    },
    data () {
        return {
            contacts: [],
            contactMap: {},
            salesforceContactMap: {},
            account: {},
            newContactModal: false,
            newContact: _.extend({}, contactSchema),
            editModals: {},
            editModalsData: {}
        }
    },
    created () {
        this.$store.dispatch('search', { searchKey: 'contactSearch', searchText: '' })
        if (!this.$store.state.accounts.length) {
            this.$store.dispatch('fetchAccounts').then(this.mapAccount)
        } else {
            this.mapAccount()
        }
        this.$store.dispatch('fetchContacts', this.$route.params.id).then(this.updateContacts)
    },
    computed: mapState({
        accounts: 'accounts',
        filteredContacts (state) {
            if (state.contactSearch) {
                return _.filter(this.contacts, c => c.name.toLowerCase().indexOf(state.contactSearch.toLowerCase()) > -1)
            }
            return _.sortBy(this.contacts, c => c.name.toLowerCase())
        }
    }),
    methods: {
        updateContacts (contacts) {
            this.contacts = contacts
            _.each(contacts, (c) => {
                this.contactMap[c.id] = c.name
                if (c.sfid) {
                    this.salesforceContactMap[c.sfid] = c.name
                }
                this.$set(this.editModals, c.id, false)
                this.$set(this.editModalsData, c.id, _.extend({}, c))
            })
        },
        contactSearch (id) {
            return _.sortBy(_.reject(this.contacts, c => c.id === id), c => c.name.toLowerCase())
        },
        checkForRoot (contact) {
            return (!contact.parentId && !contact.reportstoid) && (_.findWhere(this.contacts, {parentId: contact.id}) || (contact.sfid && _.findWhere(this.contacts, {reportstoid: contact.sfid})))
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
            this.editModalsData[newContact.id] = _.extend({}, newContact)
            this.newContact = _.extend({}, contactSchema)
            this.$Message.success('Contact created!')
        },
        editContact (updatedContact, fromModal) {
            if (fromModal) {
                updatedContact = _.extend(_.findWhere(this.contacts, {id: updatedContact.id}), updatedContact)
            }
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
            this.editModalsData[editedContact.id] = _.extend({}, editedContact)
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

// body {
//     overflow: hidden;
// }
.account-wrapper {
    .no-cloud {
        color: #FF4949;
    }

    .banner {
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;

            .legend {
                align-items: flex-end;
                text-align: right;
            }
        }

        .legend {
            display: flex;
            flex-direction: column;

            .legend-item {
            }
        }

        .account-name {
            margin-left: 10px;
            font-size: 1.3rem;
            margin-top: 10px;

            @media screen and (max-width: 480px) {
                display: block;
                margin-left: 0;
            }
        }
    }

    .account {
        margin-top: 20px;

        .contact-list {
            @media screen and (min-width: 480px) {
                overflow: scroll;
                height: calc(~'100vh - 84px - 85px - 52px');
            }

            @media screen and (min-width: 835px) {
                height: calc(~'100vh - 63px - 85px - 52px');
            }

            .contact {
                margin-top: 10px;
                border: 1px solid #c5d9e8;
                border-radius: 4px;
                color: #6190e8;
                transition: background .2s;
                padding: 6px 10px;

                .title {
                    color: #3f536e;
                    font-size: 0.8rem;
                    margin-bottom: 2px;
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
                //         color: #                        v-bind:class="[!treeView ? activeClass : '']">
;
                //     }
                // }
            }
        }

        .new-contact-button {
            margin-top: 10px;

            // &:hover {
            //     color: #fff;
            //     background-color: #6190e8;
            // }
        }

        .button-group {
            float: right;

            .button {
                border-color: #6190e8;
                color: #6190e8;
            }

            .rotate-90 {
                transform: rotate(90deg);
                display: inline-block;
            }

            .active {
                background-color: #6190e8;
                color: #fff;
            }
        }
    }
}

</style>
