import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {
    ActionTypes,
    addPostCreator,
    ProfilePageType,
    updateNewPostTextCreator,
} from "../../../Redux/State";




type myPostProps = {
    posts: ProfilePageType
    //addPost: (postMessage: string) => void
    newPostText: string
    //updateNewPostText: (newPostText: string) => void
    dispatch: (action: ActionTypes) => void
}


const MyPosts = (props: myPostProps) => {

    let post = props.posts.postsData.map( (p) =>
        <Post key={p.id} message={p.message} likeCounter={p.likeCounter}/>)

    let newPostElementRef = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = newPostElementRef.current!.value;
        props.dispatch( addPostCreator(text))


        // if(text) {props.addPost(text)};
        // props.updateNewPostText ('');
    }

    let onPostChange = () => {
        let text = newPostElementRef.current!.value;
        props.dispatch(updateNewPostTextCreator(text))

        // props.updateNewPostText(text);
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