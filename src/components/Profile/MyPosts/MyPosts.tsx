import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../Redux/State";




type myPostProps = {
    postsData: Array<PostsDataType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: myPostProps) => {

    let post = props.postsData.map( (p) => <Post message={p.message} likeCounter={p.likeCounter}/>)

    let newPostElementRef = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = newPostElementRef.current?.value
        props.addPost(text);
    }



    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea ref={newPostElementRef}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
                {post}
        </div>
    );
};

export default MyPosts;