import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img src={"https://www.shareicon.net/data/2015/10/07/114068_media_512x512.png"}/>
            </header>

            <nav className={"nav"}>
                <div><a>Profile</a></div>
                <div><a>Massages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>

            <div className={"content"}>
                <img src={"https://nashaplaneta.su/_nw/658/81414252.jpg"}/>
                <img src={"https://cache3.youla.io/files/images/780_780/5b/57/5b5782172138bb21b54e76b2.jpg"}/>
            </div>

        </div>
    );
}
export default App;
