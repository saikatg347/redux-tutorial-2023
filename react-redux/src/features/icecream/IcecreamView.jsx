import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
	const { noOfIcecreams } = useSelector((state) => state.icecream)
	const dispatch = useDispatch()

	return (
		<div>
			<h2 className='text-2xl'>Number of icecreams - {noOfIcecreams}</h2>
			<div className='flex mt-2 gap-5 justify-center'>
				<button
					onClick={() => dispatch(ordered())}
					className='px-3 py-2 bg-slate-400 rounded-lg'
				>
					Order Icecream
				</button>
				<button
					onClick={() => dispatch(restocked())}
					className='px-3 py-2 bg-slate-400 rounded-lg'
				>
					Restock Icecream
				</button>
			</div>
		</div>
	)
}
export default IcecreamView
