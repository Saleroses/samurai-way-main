import React from 'react';
import s from "../Components-CSS/Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src={"https://nashaplaneta.su/_nw/658/81414252.jpg"}/>
            <div>
                AVA + description
                <img src={"https://cache3.youla.io/files/images/780_780/5b/57/5b5782172138bb21b54e76b2.jpg"}/>
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                    <div className={s.item}>
                        Post 3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;