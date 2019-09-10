import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payment from './Payment';
class Header extends Component {
renderContent(){
switch(this.props.auth){
    case null :
return;
    case false:
return      <li ><a href="/auth/google">Sign in using Google</a></li>;
    default:
    return ([
        <li key="0"><Payment /></li>,
    <li key="1" style={{margin:'0 10px'}}>credits:{this.props.auth.credits}</li>,
    <li key="2"><a href="/api/log_out">Logout</a></li>
]);
    
    
}
}
    render(){
        console.log(this.props);
        return(
            <nav>
            <div className="nav-wrapper">
              <Link 
              to={this.props.auth? '/survey': '/'}  
              className="left brand-logo"
              >Montaha</Link>

              <ul  className="right">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        )
    }
}
function mapStateToProps ({auth}){
    return {auth};
}

export default connect(mapStateToProps) (Header) ;