import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../Redux/State";




type myPostProps = {
    postsData: Array<PostsDataType>
}

const MyPosts = (props: myPostProps) => {

    let post = props.postsData.map( (p) => <Post message={p.message} likeCounter={p.likeCounter}/>)


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
                {post}
        </div>
    );
};

export default MyPosts;