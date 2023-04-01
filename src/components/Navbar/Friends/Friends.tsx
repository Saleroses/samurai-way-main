import React from 'react';
import {friendsDataType} from "../../../Redux/State";
import {FriendsAva} from "./FriendsAva";
import {FriendsName} from "./FriendsName";
import s from "./Friends.module.css";
import avaUser from "../../../img/ava-users/ava-user.jpg";

export type friendsPropsType = {
    state: Array<friendsDataType>
}

export const Friends = (props: friendsPropsType) => {

    // let friendsAva = props.state.map((avatar) =>
    //     <FriendsAva avatar={avatar.name} key={avatar.id}/>)
    //
    //
    // let friendsName = props.state.map((name) =>
    //     <FriendsName name={name.name} id={name.id} key={name.id}/>)

    const friendsName = props.state.filter( name => { return <div key={name.id}>{name.id === 3}</div>})
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
