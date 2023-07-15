import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsDataType, ProfilePageType} from "../../Redux/Store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo  />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
