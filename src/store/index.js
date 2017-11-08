import actions from './actions'
import mutations from './mutations'

export default {
    state: {
        accounts: [],
        accountSearch: '',
        contactSearch: ''
    },
    actions: actions,
    mutations: mutations
}
