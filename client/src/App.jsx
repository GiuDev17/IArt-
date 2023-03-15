import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets'
import {Home, CreatePost} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-around items-center bg-[#80e3d3] sm:px-8 px-4 py-5 border-b border-b-[#80e3d3]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-40.1 object-contain" />
        </Link>
  
        <Link to="/create-post" className="font-inter font-medium bg-black text-white text-lg px-6 py-4 hover:px-8 rounded-xl shadow-lg hover:shadow-black ease-in duration-300">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#071e26] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App