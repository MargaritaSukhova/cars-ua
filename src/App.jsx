import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '../src/pages/HomePage'
import CatalogPage from "../src/pages/CatalogPage"
import FavoritesPage from "../src/pages/FavoritesPage"



function App() {
 

  return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/catalog" element={<CatalogPage />} />
				<Route path="/favorites" element={<FavoritesPage />} />
				<Route path="*" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App
