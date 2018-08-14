import {decorate,observable,action,computed} from 'mobx';

class Store{
	@observable	productList=[
	{name:'Milk',price:10},
	{name:'Bread',price:5}

	]
	@action addProduct(name,price){
		this.productList.push({
			name:name,
			price:price
		})

	}
	@computed get productCount(){
		return this.productList.length
	}
	@computed	get totalPrice(){
		return this.productList.reduce((n,p)=>{
			return n + p.price;
		},0)
	}

}

// decorate(Store,{
// 	productList :observable,
// 	addProduct:action,
// 	productCount: computed,
// 	totalPrice:computed
// })
const appStore= new Store();
window.appStore=appStore;
export default appStore;