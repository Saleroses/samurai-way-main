import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {dialogsDataType, messagesDataType, postsDataType} from "../../index";

type ProfileType = {
    postsData: Array<postsDataType>
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo  />
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};

export default Profile;
