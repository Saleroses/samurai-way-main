import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {
    ActionTypes,
    ProfilePageType,
} from "../../../Redux/Store";
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/Profile-reducer";




// type myPostProps = {
//     posts: ProfilePageType
//     addPost: (postMessage: string) => void
//     updateNewPostText: (newPostText: string) => void
//     dispatch: (action: ActionTypes) => void
// }


const MyPosts = () => {

    let post = posts.postsData.map( (p) =>
        <Post key={p.id} message={p.message} likeCounter={p.likeCounter}/>)

    let newPostElementRef = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = newPostElementRef.current!.value;
        dispatch( addPostCreator(text))
    }

    let onPostChange = () => {
        let text = newPostElementRef.current!.value;
        dispatch(updateNewPostTextCreator(text))
        // props.updateNewPostText(text);
    }



    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea onChange={onPostChange} ref={newPostElementRef} value={posts.newPostText}/>
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