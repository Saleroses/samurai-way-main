import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../Redux/State";

type ProfileType = {
    state: Array<PostsDataType>
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo  />
            <MyPosts postsData={props.state}/>
        </div>
    );
};

export default Profile;
