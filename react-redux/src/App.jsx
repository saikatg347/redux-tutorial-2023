import CakeView from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'

function App() {
	return (
		<div className='flex flex-col gap-5 text-center'>
			<CakeView />
			<IcecreamView />
			<UserView />
		</div>
	)
}
export default App
