import React from "react";

const bodyPadding = {
    padding: "30px"
};

const Navigation = () =>
    <body style={bodyPadding}>
    <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">WhiteBoard</a>
            <button className="navbar-toggler" data-target="#navbarNavDropdown"
                    data-toggle="collapse" type="button">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Profile
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </body>;

export default Navigation;