import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo  />
            <MyPosts
                posts={props.profilePage}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;
