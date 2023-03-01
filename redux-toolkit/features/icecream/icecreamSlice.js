const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
	noOfIcecreams: 20,
}

const icecreamSlice = createSlice({
	name: 'icecream',
	initialState,
	reducers: {
		ordered: (state, action) => {
			state.noOfIcecreams -= action.payload || 1
		},
		restocked: (state, action) => {
			state.noOfIcecreams += action.payload || 1
		},
	},
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
