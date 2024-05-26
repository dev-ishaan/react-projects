import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand">{props.title}</a>
            <form className="d-flex" role="search">
            <div className={`form-check form-switch text-${props.mode == 'light' ? 'dark' : 'light'}`}>
              <input className={`form-check-input my-4 `} onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="dark-btn" forHtml="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" rows="7"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
    </div>
  )
}
