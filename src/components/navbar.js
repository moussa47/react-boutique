import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {MdAddShoppingCart} from 'react-icons/md'
import styled from 'styled-components';
import {ButtonContainer} from '../components/button';
import {NavWrapper} from '../components/button';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5 fixed-top ">
                <Link to='/'>
                    <img src={logo} alt="logo" className="nabar-brand"/>
                </Link>

                <ul className="navbar-nav align-items-center">
                    {/* <li className="nav-item ml5">
                       <Link to='/' className="nav-link">
                       produits
                       </Link>
                    </li> */}
                    <li className="nav-item ml5">
                       <Link to='/' className="nav-link">
                       diouf-business
                       </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                <ButtonContainer >
                <span className="mr-2">
                <MdAddShoppingCart />
                </span>
               panier
                </ButtonContainer>
                </Link>

            </NavWrapper>
        )
    }
}




