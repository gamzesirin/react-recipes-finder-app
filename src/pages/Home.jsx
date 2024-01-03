import { Button } from 'semantic-ui-react'
import Header from '../components/common/Header'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<Header title="My Recipes" bgClass="bgImage">
				<Button content="Search Recipes" as={Link} to="/recipes" size="big" />
			</Header>
		</div>
	)
}

export default Home
