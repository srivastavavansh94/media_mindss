import React, { useState } from 'react'

const Navbar = ({setQuery, setCategory}) => {

  const [searchterm, setSearchterm] = useState('');
  const [activeLink, setActiveLink] = useState('home');

  const removeQuery = () => {
    setQuery('')
    setSearchterm('')
  }

  const handleLink = (link) => {
    setActiveLink(link);
  }

  const handelSearch = (e) => {
    e.preventDefault();
    setQuery(searchterm)
  }

  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand ps-lg-5"><span className='badge bg-light text-dark fs-4'>Media Minds</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className={`nav-link btn ${activeLink==='home' ? 'active' : 'unactive'}`} aria-current="page" onClick={()=>{ setCategory('')
          removeQuery()
          handleLink('home') }}>General</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link btn ${activeLink==='business' ? 'active' : 'unactive'}`} onClick={()=>{setCategory('business') 
            removeQuery()
            handleLink('business') }}>Business</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link btn ${activeLink==='sports' ? 'active' : 'unactive'}`} onClick={()=>{setCategory("sports") 
            removeQuery()
            handleLink('sports') }}>Sports</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link btn ${activeLink==='technology' ? 'active' : 'unactive'}`} onClick={()=>{setCategory("technology")
            removeQuery()
            handleLink('technology') }}>Technology</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link btn ${activeLink==='entertainment' ? 'active' : 'unactive'}`} onClick={()=>{setCategory("entertainment")
            removeQuery()
            handleLink('entertainment') }}>Entertainment</div>
        </li>
      </ul>
      <form className="d-flex px-5" role="search" onSubmit={handelSearch} >
        <input className="form-control me-2" type="search" placeholder="Search for news" value={searchterm} onChange={(e) => setSearchterm(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
