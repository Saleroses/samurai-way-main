import React from 'react';
import s from "../../Dialogs/Dialogs.module.css";
import avaUser from "../../../img/ava-users/ava-user.jpg";

type FriendsAvaType = {
    avatar: string
}

export const FriendsAva = (props: FriendsAvaType) => {
    return (
        <div>
            <img className={s.avatar} src={avaUser}/>
        </div>
    );
};
