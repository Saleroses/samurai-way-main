import React from 'react';
import s from "./Post.module.css";
import ava from "../../../../img//avatar/ava.jpeg";


type postType = {
    message: string
    likeCounter: number
}

export const Post = (props: postType) => {
    return (
        <div className={s.item}>
            <img src={ava}/>
            {props.message}
            <div>
                {props.likeCounter}
                <button>Like </button>
            </div>
        </div>
    );
};

