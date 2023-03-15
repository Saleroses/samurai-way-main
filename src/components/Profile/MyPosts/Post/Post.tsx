import React from 'react';
import s from "./Post.module.css";
import ava from "../../../../img//avatar/ava.jpeg";




const Post = (props: any) => {
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

export default Post;