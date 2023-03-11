import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ava from "../../img/avatar/ava.jpg"
import profileImg from "../../img/profile_img/profile_img.jpg"



const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.profileImg} src={profileImg}/>
            <div>
                AVA + description
                <img className={s.ava} src={ava}/>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
