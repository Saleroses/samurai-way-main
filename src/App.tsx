import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {dialogsDataType, messagesDataType, postsDataType} from "./index";


type appType = {
    postsData: Array<postsDataType>
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}

const App = (props: appType) => {
    return (
        <BrowserRouter>
            <div className="app">
                <div className={"app-wrapper"}>
                    <Header/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Route path={'/dialogs'} render={() => <Dialogs
                            dialogsData={props.dialogsData}
                            messagesData={props.messagesData}
                        />}/>
                        <Route path={'/profile'} render={() => <Profile
                            postsData={props.postsData}/>}/>
                        {/*<Route path={'/news'} component={News}/>*/}
                        {/*<Route path={'/music'} component={Music}/>*/}
                        {/*<Route path={'/settings'} component={Settings}/>*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
