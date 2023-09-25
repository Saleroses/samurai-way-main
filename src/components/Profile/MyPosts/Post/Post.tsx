import React, {MouseEventHandler} from 'react';
import s from "./Post.module.css";
import ava from "../../../../img//avatar/ava.jpeg";
import {useDispatch} from "react-redux";
import {LikePostAC} from "../../../../Redux/Profile-reducer";


type postType = {
    id: string
    message: string
    likeCounter: number
}

export const Post = (props: postType) => {
    let dispatch = useDispatch()

    let likePost = () => {
        dispatch(LikePostAC(props.id))
    }

    return (
        <div className={s.item} key={props.id}>

            <div className={s.messageWrap}>
                <div className={s.ava}>
                    <img src={ava}/>
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
            <div className={s.likeCounter}>
                {props.likeCounter}
                <button onClick={likePost}> Like </button>
            </div>
        </div>
    );
};

