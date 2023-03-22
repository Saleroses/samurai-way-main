import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type postsDataType = {
    id: number
    message: string
    likeCounter: number
}

export type dialogsDataType = {
    id: number
    name: string
}

export type messagesDataType = {
    id: number
    message: string
}

let postsData = [
    {id: 1, message: "How are you?", likeCounter: 12},
    {id: 2, message: "First post", likeCounter: 32},
    {id: 3, message: "First first post)", likeCounter: 16},
]
let dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"},
]
let messagesData = [
    {id: 1, message: "Yooo"},
    {id: 2, message: "Hi bro!"},
    {id: 3, message: "Hey"},
    {id: 4, message: "Wazzzzzzzuuup"},
    {id: 5, message: "Salam"},
    {id: 6, message: "Dobreishego"},
]


ReactDOM.render(
    <App postsData={postsData}
         dialogsData={dialogsData}
         messagesData={messagesData}/>,
    document.getElementById('root')
);
