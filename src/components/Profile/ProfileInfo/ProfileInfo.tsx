import React from 'react';
import ava from "../../../img/avatar/ava.jpeg";
import profileImg from "../../../img/profile_img/profile_img.jpg";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={s.profileWrap}>
            <img className={s.ava} src={ava}/>
            <img className={s.profileImg} src={profileImg}/>
            <div className={s.descriptionBlock}>
                description
            </div>
        </div>
    );
};

export default ProfileInfo;