import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from "./Redux/State";



let rerenderEntireTree = (props: RootStateType) => {
    ReactDOM.render(
        <App
            store={store}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(()=>rerenderEntireTree(store.getState()));
