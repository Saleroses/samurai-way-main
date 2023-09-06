import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/Profile-reducer";
import MyPosts from "./MyPosts/MyPosts";
import {useDispatch} from "react-redux";


type ProfileType = {
    profilePage: ProfilePageType
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo  />
            <MyPosts posts={props.profilePage} />
        </div>
    );
};


