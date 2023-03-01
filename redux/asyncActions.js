const { createStore, applyMiddleware } = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

/* Action Creators */
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

function fetchUsersRequest() {
	return {
		type: FETCH_USERS_REQUESTED,
	}
}

function fetchUsersSucess(users) {
	return {
		type: FETCH_USERS_SUCCEEDED,
		payload: users,
	}
}

function fetchUsersFailure(error) {
	return {
		type: FETCH_USERS_FAILED,
		payload: error,
	}
}

/* Async Action Creators */
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data.map((user) => user.name)
        dispatch(fetchUsersSucess(users))
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err.message))
      })
  }
}

/* Reducers */
const initialState = {
	loading: false,
	data: [],
	error: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUESTED:
			return {
				...state,
				loading: true,
			}
		case FETCH_USERS_SUCCEEDED:
			return {
				loading: false,
				data: action.payload,
				error: '',
			}
		case FETCH_USERS_FAILED:
			return {
				loading: false,
				users: [],
				error: action.payload,
			}
	}
}

/* Store */
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchUsers())
