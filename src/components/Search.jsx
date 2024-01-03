import { Container, Form, Input } from 'semantic-ui-react'

import { useState } from 'react'

const Search = ({ setSearchedQuery }) => {
	const [value, setValue] = useState('')
	const onFormSubmit = () => {
		setSearchedQuery(value)
	}
	return (
		<div>
			<Container textAlign="center" className="search-box">
				<h2 className="search-heading">
					Search Recipes with <span style={{ color: 'red' }}> My Recipes</span>
				</h2>

				<Form onSubmit={onFormSubmit}>
					<Input
						placeholder="pizza,pasta,tomato..."
						action={{ icon: 'search', color: 'red' }}
						onChange={(e) => setValue(e.target.value)}
						value={value}
					/>
				</Form>
				<h4 className="h4">Input recipes separated by comma</h4>
			</Container>
		</div>
	)
}

export default Search
