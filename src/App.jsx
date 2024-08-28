import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

const App = () => {
  const [category, setCategory] = useState('')
  const [query, setQuery] = useState('');
  return (
    <div>
      <Navbar setQuery={setQuery} setCategory={setCategory} />
      <NewsBoard query={query} category={category}/>
    </div>
  )
}

export default App
