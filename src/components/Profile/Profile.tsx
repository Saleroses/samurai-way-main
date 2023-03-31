import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../Redux/State";

type ProfileType = {
    state: Array<PostsDataType>
    addPost: (postMessage: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo  />
            <MyPosts postsData={props.state} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;
