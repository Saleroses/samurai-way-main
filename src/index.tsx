import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from "./Redux/State";



let rerenderEntireTree = (props: RootStateType) => {
    ReactDOM.render(
        <App
            store={store}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(()=>rerenderEntireTree(store.getState()));
