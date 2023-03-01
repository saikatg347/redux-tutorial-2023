import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
	const { noOfCakes } = useSelector((state) => state.cake)
	const dispatch = useDispatch()

	return (
		<div>
			<h2 className='text-2xl'>Number of cakes - {noOfCakes}</h2>
			<div className='flex mt-2 gap-5 justify-center'>
				<button
					onClick={() => dispatch(ordered())}
					className='px-3 py-2 bg-slate-400 rounded-lg'
				>
					Order Cake
				</button>
				<button
					onClick={() => dispatch(restocked())}
					className='px-3 py-2 bg-slate-400 rounded-lg'
				>
					Restock Cake
				</button>
			</div>
		</div>
	)
}
export default CakeView
