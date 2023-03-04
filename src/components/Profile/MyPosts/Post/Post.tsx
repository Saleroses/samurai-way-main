import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src={"https://cache3.youla.io/files/images/780_780/5b/57/5b5782172138bb21b54e76b2.jpg"}/>

            Post 1
        </div>
    );
};

export default Post;