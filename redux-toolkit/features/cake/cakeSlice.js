const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
	noOfCakes: 10,
}

const cakeSlice = createSlice({
	name: 'cake',
	initialState,
	reducers: {
		ordered: (state, action) => {
            state.noOfCakes -= action.payload || 1
		},
		restocked: (state, action) => {
            state.noOfCakes += action.payload || 1
		},
	},
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
