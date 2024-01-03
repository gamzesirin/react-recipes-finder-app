import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import RecipeDetails from './components/RecipeDetails'
import Recipes from './pages/Recipes'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/recipes/:recipeId" element={<RecipeDetails />} />
			</Routes>
		</Router>
	)
}

export default App
