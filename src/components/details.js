import React, { Component } from 'react';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button';

export default class Details extends Component {
    render() {
        
        return (
           <ProductConsumer>
               {value=>{
                   const {id,title,company,img,info,price,inCart} =
                   value.detailProduct;
                   return(
                       <div className="container py-5 details">
                            {/* title */}
                            <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={img}  className="img-fluid" alt="image"/>
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>model: {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        fabriqué par : <span className="text-uppercase">
                                            {company}
                                        </span>
                                        <strong>
                                            price: 
                                            {price} <span>frcs</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        informations du produit:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* link */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                               retourner 
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addCart(id);
                                            value.openModal(id);

                                        }}
                                        >
                                            {inCart?"déja pris":"ajouter dans le panier"}
                                        </ButtonContainer>
                                    </div>
                            </div>

                            </div>
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
