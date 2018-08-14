import React, { Component } from 'react';
import {observer} from 'mobx-react';
@observer
class Table extends Component {
	addNewProduct(){
		const {store}=this.props;
		const name=prompt('enter product name');
		const price= parseInt(prompt('enter product price'));
		store.addProduct(name,price);
	}
  render() {
  	const {store}=this.props;
    return (
      <div>
      <div>{store.ProductCount}</div>
      <table>
      <thead>
      	<tr>
      		<td>Product</td>
      		<td>Price</td>
      	</tr>
      </thead>
      <tbody>
      {
      store.productList.map((p,i)=>{
      	return(
      		<tr key={i}>
      			<td>{p.name}</td>
      			<td>{p.price}</td>
      		</tr>
	      		);
	      })
	  }
	  </tbody>
      </table>
      <div> totalPrice{store.totalPrice}</div>
      <div>
      <button onClick={()=>{this.addNewProduct()
      }}>Add Product</button>

      </div>

      </div>
    );
  }
}

Table =observer(Table);
export default Table;
