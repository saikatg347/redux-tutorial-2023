import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
	const { loading, users, error } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	return (
		<div>
			<h2 className='text-2xl'>List of users</h2>
			{loading && <div>Loading...</div>}
			{!loading && error ? <div>Error: {error}</div> : null}
			{!loading && users.length ? (
				<ul>
					{users.map((user, idx) => (
						<li key={idx}>{user.name}</li>
					))}
				</ul>
			) : null}
		</div>
	)
}
export default UserView
