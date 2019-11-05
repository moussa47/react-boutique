import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from './context';
import {ButtonContainer} from './button';
import {Link } from 'react-router-dom';
// import {ModalContainer} from './button';



export default class Modal extends Component {
    render() {
        return (
            <>
           <ProductConsumer>
               {(value)=>{
                const {modalOpen,closeModal}=value;
                const {img,title,price}=value.modalProduct;
                if(!modalOpen){
                    return null;
                }else{
                  return ( 
                       <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize p-5">

                                    <h5>élément ajouté</h5>
                                    <img src={img} className="img-fluid" alt="img"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price : ${price}</h5>
                                    <Link to='/'>
                                        <ButtonContainer
                                        onClick={()=>closeModal()}
                                        >
                                            continuer vos achats
                                        </ButtonContainer>
                                    </Link>
                                    <Link to='/cart'>
                                        <ButtonContainer
                                        onClick={()=>closeModal()}
                                        cart >
                                            aller dans le panier
                                        </ButtonContainer>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                  )
                }
            
               }}
           </ProductConsumer>
           
           </>
        );
    }

}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content: center;
#modal{
    background: var(--mainWhite);
}



`;
