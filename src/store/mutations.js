export default {
    fetchAccounts (state, accounts) {
        state.accounts = accounts
    },
    search (state, { searchKey, searchString }) {
        state[searchKey] = searchString
    }
    // fetchAccount (state, { sfid, contacts }) {
    //     const account = _.findWhere(state.accounts, { sfid })
    //     account.contacts = contacts
    // }
    // addTodo (state, todo) {
    //     state.todos.push(todo)
    // },
    // editTodo (state, { todo, updatedTodo }) {
    //     todo.text = updatedTodo.text
    // },
    // removeTodo (state, todo) {
    //     state.todos = _.reject(state.todos, (t) => t.id === todo.id)
    // },
    // toggleDone (state, todo) {
    //     todo.done = !todo.done
    // }
}
