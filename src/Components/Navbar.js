import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:props.mode==='light'?'#FFFFD0':'#2D033B'}}>
            <div className="container-fluid">
                <h1 className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">{props.heading}</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
