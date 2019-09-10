import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SuervyNew from './SuervyNew';
import ProductsPage from './ProductsPage';
import ProductForm from './ProductForm';




class App extends Component{

    componentDidMount(){
         this.props.fetchUser();
    }

render(){
    return(
<div >
<BrowserRouter>
<div>
<Header/>
<Route exact={true} path='/' component={Landing}/>
<Route path='/Survey' component={Dashboard}/>
<Route path='/Survey/New' component={SuervyNew}/>
<Route path='/Products' component={ProductsPage}/>
<Route path='/Products/New' component={ProductForm}/>
</div>
</BrowserRouter>
</div>
    )
    }
};


export default connect(null,actions) (App);

