import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {friendsDataType} from "../../Redux/SideBar-reducer";

type NavbarPropsType = {
    state: Array<friendsDataType>
}

const Navbar = (props: NavbarPropsType) => {
    return (
        <div className={s.leftcolums}>
            <nav className={s.nav}>
                <div className={s.item}><NavLink to={"/profile"} activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink to={"/users"} activeClassName={s.activeLink}>Users</NavLink></div>
                <div className={s.item}><NavLink to={"/dialogs"} activeClassName={s.activeLink}>Massages</NavLink></div>
                <div className={s.item}><NavLink to={"/news"} activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink to={"/music"} activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink to={"/settings"} activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
            {/*<div className={s.friendslist}><Users state={props.state}/></div>*/}
        </div>
    );
};

export default Navbar;