import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {AppRootStateType, store} from "./Redux/Redux-store";

import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";

export type appStateType = {
    store: AppRootStateType
}

const App = () => {

    const state = store.getState()

    return (
        <BrowserRouter>
            <div className="app">
                <div className={"app-wrapper"}>
                    <Header/>
                    <Navbar state={state.sideBar.friendsData}/>
                    <div className={"app-wrapper-content"}>
                        <Route path={'/dialogs'} render={() =>
                            <Dialogs state={state.dialogsPage}
                            />}/>
                        <Route path={'/profile'} render={() => <Profile
                            profilePage={state.profilePage}
                            />}/>
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
