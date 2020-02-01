import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TopNav = () => {
    return (
        <Nav>
            <NavList>
                <NavItem>
                    {/* <StyledNavLink activeClassName="active" exact to="/"> */}
                        <NavText className="navText">Home</NavText>
                    {/* </StyledNavLink> */}
                </NavItem>
                <NavItem>
                        <NavText className="navText">About Me</NavText>
                </NavItem>
                <NavItem>
                        <NavText className="navText">Projects</NavText>
                </NavItem>
                <NavItem>
                        <NavText className="navText">Resume</NavText>
                </NavItem>
            </NavList>
        </Nav>
    )

}

const Nav = styled.nav`
    display: flex; 
    justify-content: flex-end;
    width: 100vw;
    height: 8vh;
    background-color: darkblue;
`;

// const StyledNavLink = styled.NavLink`
//     color: red;
// `;

const NavList = styled.ul`
    display: flex;
    // flex-flow: column nowrap;
    justify-content: space-evenly;
    box-sixing: border-box;
    width: 100vw;
    align-items: center;
`;

const NavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    box-sizing: border-box;
`;


const NavText = styled.h4`
    font-size: 1rem;
    box-sizing: border-box;
    color: whitesmoke;
`;

export default TopNav;