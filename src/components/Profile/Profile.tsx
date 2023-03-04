import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://uniglobecarefreetravel.com/content/1594149432_original.jpeg-20210730135458.jpg"/>
            <div>
                AVA + description
                <img src={"https://cache3.youla.io/files/images/780_780/5b/57/5b5782172138bb21b54e76b2.jpg"}/>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;