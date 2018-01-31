import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
        <div>
            <h1>Heyyy</h1>
            <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                <div className="container"><a className="navbar-brand" href="#">Strolle </a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse"
                        id="navcol-1">
                        <ul className="nav navbar-nav mr-auto">
                            <li className="nav-item" role="presentation"><a className="nav-link active" href="#">First Item</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Second Item</a></li>
                            <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li>
                        </ul><span className="navbar-text actions"> <a href="#" className="login">Log In</a><a className="btn btn-light action-button" role="button" href="#" style="background-color:#007bff;">Sign Up</a></span></div>
                </div>
            </nav>
        </div>
    );
  }
}

export default Header;
