import React from 'react';
import {
    Nav,
    NavLink,
    // Bars,
    NavMenu,
    // NavBtn,
    // NavBtnLink,
} from './NavbarElements';

const Navbar2 = () => {
    return (
        <>
            <Nav>
                {/*<Bars />*/}

                <NavMenu>
                    <NavLink to='/' >
                        Home
                    </NavLink>
                    <NavLink to='/voting' >
                        Voting
                    </NavLink>
                    <a href={"https://docs.playtheatria.com/"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Wiki
                    </a>
                    <a href={"https://discord.com/invite/xegrV85Au4"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Discord
                    </a>
                    <a href={"https://store.playtheatria.com/"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Features
                    </a>
                    <a href={"https://map.playtheatria.com/"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Dynmap
                    </a>
                    <a href={"https://www.instagram.com/theatriaofficial/"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Instagram
                    </a>
                    <a href={"https://shopdb.playtheatria.com/home"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        ShopDB
                    </a>

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to='/signin'>Sign In</NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
};
export default Navbar2;