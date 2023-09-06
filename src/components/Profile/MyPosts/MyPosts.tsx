import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionType, AddPostAC, ProfilePageType, UpdateNewPostTextAC} from "../../../Redux/Profile-reducer";
import {useDispatch} from "react-redux";




type myPostProps = {
    posts: ProfilePageType
}


const MyPosts = (props: myPostProps) => {
    let dispatch = useDispatch()
    let post = props.posts.postsData.map( (p) =>
        <Post key={p.id} message={p.message} likeCounter={p.likeCounter}/>)

    let newPostElementRef = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = newPostElementRef.current!.value;
        dispatch(AddPostAC(text))
        console.log(text)
    }

    let onPostChange = () => {
        let text = newPostElementRef.current!.value;
        dispatch(UpdateNewPostTextAC(text))
        console.log(newPostElementRef.current!.value)
    }



    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea onChange={onPostChange} ref={newPostElementRef} value={props.posts.newPostText}/>
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