const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions =
	require('./features/icecream/icecreamSlice').icecreamActions

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked())

// store.dispatch(icecreamActions.ordered())

const fetchUsers = require('./features/user/userSlice').fetchUsers

store.dispatch(fetchUsers())