import React, { Component } from 'react'
import axios from 'axios'
class ProductForm extends Component {
  state={name:'',price:''}

    registerProduct = ({ serialized, fields, form }) => {
      axios.post('/api/products/create', {
        name:this.state.name,
        price:this.state.price
      })
    }
    handleName = (event) => {
      this.setState({name: event.target.value});
    }
    handlePrice = (event) => {
      this.setState({price: event.target.value});
    }
    render(){
        return(
            <div style={styles.container}>
<form onSubmit={this.registerProduct}  >
        <input name="name"  label="Name"  value={this.state.name} onChange={this.handleName} required />
        <input name="price"  label="Price" value={this.state.price} onChange={this.handlePrice} required />
       

        <button primary>Register</button>
      </form>
 

            </div>
        )
    }
}
const styles = {
container :{
  display: 'flex',
  justifyContent:'center',
  alignItems:'center', 
  height: '100vh'
  }
}

export default ProductForm;