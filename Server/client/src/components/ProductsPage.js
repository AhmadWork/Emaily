import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios'
import *  as actions from '../actions';

class ProductsPage extends Component {
componentDidMount(){
 axios.get('/api/products').then(res => {
    console.log(res.data);
  });

}
  renderProducts(){
console.log(this.props.products);
  }
render(){

    return(
        <div>
          
       
        </div>
    )
}
}

function mapStateToProps ({products}){
    return {products};
}

export default connect(mapStateToProps,actions) (ProductsPage);