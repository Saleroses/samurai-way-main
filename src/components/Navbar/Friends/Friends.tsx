import React from 'react';
import {friendsDataType} from "../../../Redux/State";
import {FriendsAva} from "./FriendsAva";
import {FriendsName} from "./FriendsName";
import s from "./Friends.module.css";

export type friendsPropsType = {
    state: Array<friendsDataType>
}

export const Friends = (props: friendsPropsType) => {

    let friendsAva = props.state.map((avatar) =>
        <FriendsAva avatar={avatar.name}/>)

    let friendsName = props.state.map((name) =>
        <FriendsName name={name.name} id={name.id}/>)

    return (
        <div>
            <div className={s.myFriendsItem}>Мои друзья</div>

            <div className={s.friends}>
                <div className={s.friendAvatar}>
                    {friendsAva}
                </div>
                <div className={s.friendName}>
                    {friendsName}
                </div>
            </div>
        </div>
    );
};
