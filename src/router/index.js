import Account from '../components/Account'
import Accounts from '../components/Accounts'

export default [
    { name: 'home', path: '/', component: Accounts },
    { name: 'account', path: '/account/:id', component: Account }
]
