import React from 'react'
import { Link } from '@mui/material';

export default function NavBarType() {
  const styles = {
    linkStyle: {
      color: "#fff"
    },
    searchDiv: {
      marginRight: "35rem",
      width: "25rem"
    },
    navDesign: {
      padding: "0.8rem"
    },
    searchStyle: {
      background: "transparent",
      width: "100%", 
      fontSize: "1rem", 
      padding:"10px 15px",
      color: "#fff",
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={styles.navDesign}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="" style={styles.linkStyle}>Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" style={styles.linkStyle} to="">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="" style={styles.linkStyle}>Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="" style={styles.linkStyle}>Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="" style={styles.linkStyle}>About</Link>
          </li>
        </ul>
        <form className="d-flex" role="search" style={styles.searchDiv}>
          <input style={styles.searchStyle} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
  );
}
