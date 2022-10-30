import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {

    return (

      <div >
        <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid">
    {/* <Link to="/forlinkingtry" className="navbar-brand" style={{color:'whitesmoke'}}>------------------------</Link> */}
    <Link to="/forlinkingtry" className="navbar-brand" style={{marginLeft:'90px'}}>Home</Link>
    {/* <Link to="/forlinkingtry" className="navbar-brand" style={{color:'whitesmoke'}}>----------</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/forlinkingtry" className="nav-link active" aria-current="page" style={{marginLeft:'10px'}}>Home2</Link>
        </li>
        <li className="nav-item">
          <Link to="/forlinkingtry" className="nav-link" style={{marginLeft:'10px'}}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/forlinkingtry" className="nav-link" style={{marginLeft:'10px'}}>Particular Section</Link>
        </li>
        <li className="nav-item">
          <Link to="/forlinkingtry" className="nav-link" style={{marginLeft:'10px'}}>extra</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search by disease" aria-label="Search" style={{paddingLeft: "50px !important"}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
      </div>
      
    );
  };
  
  export default Navigation;