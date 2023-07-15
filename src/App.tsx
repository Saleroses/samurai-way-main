import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import store, {ActionTypes, StoreType} from "./Redux/Store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type appStateType = {
    // store: StoreType
    // dispatch: (action: ActionTypes) => void
}


const App: React.FC<appStateType> = (appStateType ) => {
    const state = store.getState()

    return (
        <BrowserRouter>
            <div className="app">
                <div className={"app-wrapper"}>
                    <Header/>
                    <Navbar state={state.sideBar.friendsData}/>
                    <div className={"app-wrapper-content"}>
                        <Route path={'/dialogs'} render={() =>
                            <DialogsContainer state={state.dialogsPage}
                                              dispatch={store.dispatch}
                            />}/>
                        <Route path={'/profile'} render={() => <Profile
                            profilePage={state.profilePage}
                            dispatch={store.dispatch}
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
