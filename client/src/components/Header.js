import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Header extends React.Component {

  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Sign In with Google</a></li>
      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }
  render(){
      console.log(this.props)
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to={this.props.auth ? '/surways': '/'} className="brand-logo">Logo</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                { this.renderContent() }
              </ul>
            </div>
          </nav>
        )
  }
}

const mapStateToProps = (state) => {
  return {auth : state.auth};
}

export default connect(mapStateToProps)(Header);