import React from 'react';
import {FriendsAva} from "./FriendsAva";
import {FriendsName} from "./FriendsName";
import s from "./Friends.module.css";
import avaUser from "../../../img/ava-users/ava-user.jpg";
import {friendsDataType} from "../../../Redux/SideBar-reducer";

export type friendsPropsType = {
    state: Array<friendsDataType>
}

export const Friends = (props: friendsPropsType) => {

    const friendsName = props.state.filter( name => { return <div key={name.id}>{name.id === "3"}</div>})
    console.log(friendsName)
    return (
        <div>
            <div className={s.myFriendsItem}>Лучшие друзья</div>

            <div className={s.friendsWrap}>
                <div className={s.friends}>
                    <div className={s.friendAvatar}>
                        <img className={s.avatar} src={avaUser}/>
                    </div>
                    <div className={s.friendName}>
                        {props.state.filter( (name) => name.name.startsWith('D'))}
                    </div>
                </div>
            </div>
        </div>
    );
};
