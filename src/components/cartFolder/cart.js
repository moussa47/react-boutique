import React, { Component } from 'react';
import Title from '../title';
import CartColumns from '../cartFolder/cartColumns';
import EmptyCart from './emptyCart';
import  {ProductConsumer} from '../context';
import CartList from './cartList';
import CartTotals from './cartTotals'
export default class Cart extends Component {
    render() {
        return (
            <section className="cart1">
                <ProductConsumer>
                    {value=>{
                        const {cart}=value;
                        if(cart.length>0){
                            return(
                                <>
                                <Title  name="your" title="cart"/>
                                <CartColumns/>
                                <CartList value={value}/>
                                 <CartTotals value={value}/>
                                </>
                            );
                        }else{
                            return(
                                
                             <EmptyCart />
                            );
                        }
                    }}
                </ProductConsumer>
                
               
            </section>
        )
    }
}
