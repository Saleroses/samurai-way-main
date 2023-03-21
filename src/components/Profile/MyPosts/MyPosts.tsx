import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


type myPostProps = {}

const MyPosts = (props: myPostProps) => {

    let postsData = [
        {id: 1, message: "How are you?", likeCounter: 12},
        {id: 2, message: "First post ;)", likeCounter: 32},
        {id: 3, message: "First first post)", likeCounter: 16},
    ]

    let posts = postsData.map((p) => <Post message={p.message} likeCounter={p.likeCounter}/>)


    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
                {posts}
        </div>
    );
};

export default MyPosts;