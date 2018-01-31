import React, {Component} from 'react';
import bs from './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import nb from './../../css/Navigation.css';

class Header extends Component {
  render() {
    return (
        <div>
            <h1>Heyyy</h1>
            <nav className={bs.navbar bs.navbar-light bs.navbar-expand-md nb.navigation-clean-button}>
                <div className={bs.container}><a className={bs.navbar-brand} href="#">Strolle </a><button className={bs.navbar-toggler} data-toggle="collapse" data-target="#navcol-1"><span className={bs.sr-only}>Toggle navigation</span><span className={bs.navbar-toggler-icon}></span></button>
                    <div className={bs.collapse navbar-collapse}
                        id="navcol-1">
                        <ul className={bs.nav bs.navbar-nav bs.mr-auto}>
                            <li className={nb.nav-item} role="presentation"><a className={nb.nav-link active} href="#">First Item</a></li>
                            <li className={nb.nav-item} role="presentation"><a className={nb.nav-link} href="#">Second Item</a></li>
                        </ul><span className={nb.navbar-text actions}> <a href="#" className={nb.login}>Log In</a><a className={bs.btn bs.btn-light bs.action-button} role="button" href="#" style="background-color:#007bff;">Sign Up</a></span></div>
                </div>
            </nav>
        </div>
    );
  }
}

export default Header;
