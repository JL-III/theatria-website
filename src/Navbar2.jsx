import React from 'react';
import {
    Nav,
    NavLink,
    NavAnchor,
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
                    <NavAnchor href={"https://docs.playtheatria.com/"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1vh", textDecoration:"none"}}>
                        Wiki
                    </NavAnchor>
                    <NavAnchor href={"https://discord.com/invite/xegrV85Au4"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Discord
                    </NavAnchor>
                    <NavAnchor href={"https://map.playtheatria.com/"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Dynmap
                    </NavAnchor>
                    <NavAnchor href={"https://store.playtheatria.com/"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Features
                    </NavAnchor>
                    <NavAnchor href={"https://www.instagram.com/theatriaofficial/"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        Instagram
                    </NavAnchor>
                    <NavAnchor href={"https://shopdb.playtheatria.com/home"} target="_blank" rel="noopener noreferrer" style={{color:'#FFFFFF', margin:"1rem", textDecoration:"none"}}>
                        ShopDB
                    </NavAnchor>

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