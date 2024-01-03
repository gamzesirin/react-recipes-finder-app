import { Container, Grid, Header } from 'semantic-ui-react'

import RecipeListItem from './RecipeListItem'

const RecipeList = ({ recipes, searchedQuery }) => {
	return (
		<div>
			<Container>
				<Header size="huge" content={`Recipe List For ${searchedQuery}`} textAlign="center" />
				<Grid columns={4} doubling>
					{recipes &&
						recipes.map((recipe) => (
							<Grid.Column key={recipe.recipe_id}>
								<RecipeListItem recipe={recipe} />
							</Grid.Column>
						))}
				</Grid>
			</Container>
		</div>
	)
}

export default RecipeList
