import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src={"https://www.shareicon.net/data/2015/10/07/114068_media_512x512.png"} />
        </header>
    );
};

export default Header;