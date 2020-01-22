import React from 'react';
import { Link } from 'react-router-dom'
import ButtonContainer from './Button'
import styled from 'styled-components'

export default () => {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/" >
            <i className="fas fa-book"></i>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link" >
                    products
                    </Link>
                </li>
            </ul>
             <Link to="/cart" className="ml-auto" >
                <ButtonContainer>
                    <span className="mr-2" />
                    <i className="fas fa fa-cart-plus" />
                    <span className="ml-2" />
                    my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>

    );
};

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
}

`