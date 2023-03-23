import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../Redux/State";



export const DialogItem = (props: DialogsDataType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
