import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../Redux/State";
import avaUser from "../../../img/ava-users/ava-user.jpg";


export const DialogItem = (props: DialogsDataType) => {
    return (
        <div className={s.dialogsItems}>
            <div className={s.user}>
                <img className={s.avatar} src={avaUser}/>
            </div>
            <div className={s.dialogNames}>
                <NavLink className={s.dialogName + ' ' + s.active} to={"/dialog/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}
