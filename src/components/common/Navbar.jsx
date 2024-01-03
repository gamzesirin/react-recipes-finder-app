import { Menu, MenuItem } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import { logo } from '../../constants/constant'

const Navbar = () => {
	return (
		<div>
			<Menu borderless fixed="top">
				<MenuItem>
					<img src={logo} alt="logo" style={{ width: 100 }}></img>
				</MenuItem>
				<Menu.Item name="Home" as={Link} to="/" />
				<Menu.Item name="Recipes" as={Link} to="/recipes" />
			</Menu>
		</div>
	)
}

export default Navbar
