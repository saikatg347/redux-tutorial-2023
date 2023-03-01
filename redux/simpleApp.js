const redux = require('redux')

/* Action creators */
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOKED = 'CAKE_RESTOKED'

function orderCake(quantity = 1) {
	return {
		type: CAKE_ORDERED,
		payload: quantity,
	}
}

function restokeCake(quantity = 1) {
	return {
		type: CAKE_RESTOKED,
		payload: quantity,
	}
}

/* Creating Reducer */
const initialState = {
	numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				...state,
				numOfCakes: state.numOfCakes - action.payload,
			}
		case CAKE_RESTOKED:
			return {
				...state,
				numOfCakes: state.numOfCakes + action.payload,
			}
		default:
			return state
	}
}

/* Configuring store */
const store = redux.createStore(reducer) // creating the store

console.log('Initial State:', store.getState()) // getState() returns the current state in the store

const unsubscribe = store.subscribe(() =>
	console.log('Updated State:', store.getState())
) // listner gets called everytime the state changes

/* Some actions dispatched */
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restokeCake(3))
// store.dispatch(orderCake(2))

/* Binding action creators with dispatch */
const actions = redux.bindActionCreators(
	{
		orderCake,
		restokeCake,
	},
	store.dispatch
)
actions.orderCake()
actions.orderCake()
actions.restokeCake(3)
actions.orderCake(2)

unsubscribe() // unsubscribing the listners
