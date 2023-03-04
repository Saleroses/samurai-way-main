import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="How are you?" likeCounter={"6"}/>
            <Post message="First post ;)" likeCounter={"23"}/>
        </div>
    );
};

export default MyPosts;