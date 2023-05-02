import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {ActionTypes, StoreType} from "./Redux/State";

export type appStateType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}


const App: React.FC<appStateType> = (props) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app">
                <div className={"app-wrapper"}>
                    <Header/>
                    <Navbar state={state.sideBar.friendsData}/>
                    <div className={"app-wrapper-content"}>
                        <Route path={'/dialogs'} render={() => <Dialogs dispatch={props.dispatch} state={state.dialogsPage}/>}/>
                        <Route path={'/profile'} render={() => <Profile
                            profilePage={state.profilePage}
                            dispatch={props.dispatch}
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
