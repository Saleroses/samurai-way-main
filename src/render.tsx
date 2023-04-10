import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, AddPostPropsType, RootStateType, state, updateNewPostText} from "./Redux/State";



export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}
