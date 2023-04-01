import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from "./Redux/State";
import {rerenderEntireTree} from "./render";





rerenderEntireTree(state);
