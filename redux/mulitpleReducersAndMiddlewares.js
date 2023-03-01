const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

/* Action creators */
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOKED = 'CAKE_RESTOKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOKED = 'ICECREAM_RESTOKED'

function orderCake(qty = 1) {
	return {
		type: CAKE_ORDERED,
		payload: qty,
	}
}

function restokeCake(qty = 1) {
	return {
		type: CAKE_RESTOKED,
		payload: qty,
	}
}

function orderIceCream(qty = 1) {
	return {
		type: ICECREAM_ORDERED,
		payload: qty,
	}
}

function restockIceCream(qty = 1) {
	return {
		type: ICECREAM_RESTOKED,
		payload: qty,
	}
}

/* Creating Reducer */
const initialCakeState = {
	numOfCakes: 10,
}

const initialIceCreamState = {
	numOfIceCreams: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case ICECREAM_ORDERED:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - action.payload,
			}
		case ICECREAM_RESTOKED:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams + action.payload,
			}
		default:
			return state
	}
}

/* Configuring store */
const rootReducer = redux.combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
})

const store = redux.createStore(rootReducer, redux.applyMiddleware(logger)) // creating the store

/* Binding action creators with dispatch */
const actions = redux.bindActionCreators(
	{
		orderCake,
		restokeCake,
		orderIceCream,
		restockIceCream,
	},
	store.dispatch
)
actions.orderCake()
actions.orderCake()
actions.restokeCake(3)
actions.orderCake(2)
actions.orderIceCream(2)
actions.restockIceCream(5)
