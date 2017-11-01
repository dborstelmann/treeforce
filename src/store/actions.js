import Vue from 'vue'
const graphURL = 'https://trees-graph.herokuapp.com/graphql'

export default {
    async fetchAccounts ({ commit }) {
        try {
            const response = await Vue.http.post(
                graphURL,
                {
                    query: `
                        query {
                            allAccounts {
                                nodes {
                                    name
                                    id
                                    sfid
                                    nodeId
                                    createddate
                                    isdeleted
                                    systemmodstamp
                                }
                            }
                        }
                    `
                }
            )
            commit('fetchAccounts', response.body.data.allAccounts.nodes)
        } catch (e) {
            throw e
        }
    },
    async fetchContacts ({ commit }, sfid) {
        try {
            const response = await Vue.http.post(
                graphURL,
                {
                    query: `
                        query {
                            allContacts (condition: {accountid: "${sfid}"}) {
                                nodes {
                                    lastname
                                    accountid
                                    name
                                    mobilephone
                                    phone
                                    isdeleted
                                    homephone
                                    systemmodstamp
                                    reportstoid
                                    createddate
                                    salutation
                                    title
                                    firstname
                                    email
                                    description
                                    photourl
                                    sfid
                                    id
                                    _hcLastop
                                    _hcErr
                                }
                            }
                        }
                    `
                }
            )
            // commit('fetchAccount', {
            //     sfid,
            //     contacts: response.body.data.allContacts.nodes
            // })
            return response.body.data.allContacts.nodes
        } catch (e) {
            throw e
        }
    }
    // async addTodo ({ commit }, todo) {
    //     try {
    //         const response = await Vue.http.post(
    //             graphURL,
    //             {
    //                 query: `
    //                     mutation {
    //                         add (text: "${todo.text}") {
    //                             id
    //                             text
    //                             done
    //                         }
    //                     }
    //                 `
    //             }
    //         )
    //         commit('addTodo', response.body.data.add)
    //     } catch (e) {
    //         throw e
    //     }
    // },
    // async editTodo ({ commit }, { todo, updatedText }) {
    //     try {
    //         const response = await Vue.http.post(
    //             graphURL,
    //             {
    //                 query: `
    //                     mutation {
    //                         edit (id: "${todo.id}", text: "${updatedText}") {
    //                             id
    //                             text
    //                             done
    //                         }
    //                     }
    //                 `
    //             }
    //         )
    //         commit('editTodo', { todo, updatedTodo: response.body.data.edit })
    //     } catch (e) {
    //         throw e
    //     }
    // },
    // async removeTodo ({ commit }, todo) {
    //     try {
    //         await Vue.http.post(
    //             graphURL,
    //             {
    //                 query: `
    //                     mutation {
    //                         remove (id: "${todo.id}") {
    //                             id
    //                             text
    //                             done
    //                         }
    //                     }
    //                 `
    //             }
    //         )
    //         commit('removeTodo', todo)
    //     } catch (e) {
    //         throw e
    //     }
    // },
    // async toggleDone ({ commit }, todo) {
    //     try {
    //         await Vue.http.post(
    //             graphURL,
    //             {
    //                 query: `
    //                     mutation {
    //                         toggle (id: "${todo.id}") {
    //                             id
    //                             text
    //                             done
    //                         }
    //                     }
    //                 `
    //             }
    //         )
    //         commit('toggleDone', todo)
    //         return todo
    //     } catch (e) {
    //         throw e
    //     }
    // }
}
