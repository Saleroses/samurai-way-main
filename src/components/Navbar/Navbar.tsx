import React from 'react';
import s from "./Navbar.module.css";
import Profile from "../Profile/Profile";
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {friendsDataType} from "../../Redux/Store";

type NavbarPropsType = {
    state: Array<friendsDataType>
}

const Navbar = (props: NavbarPropsType) => {
    return (
        <div className={s.leftcolums}>
            <nav className={s.nav}>
                <div className={s.item}><NavLink to={"/profile"} activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink to={"/dialogs"} activeClassName={s.activeLink}>Massages</NavLink></div>
                <div className={s.item}><NavLink to={"/news"} activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink to={"/music"} activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink to={"/settings"} activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
            {/*<div className={s.friendslist}><Friends state={props.state}/></div>*/}
        </div>
    );
};

export default Navbar;