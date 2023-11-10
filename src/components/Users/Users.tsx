import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../../Redux/Redux-store";
import {FollowAC, UnFollowAC, UsersPageType} from "../../Redux/Users-reducer";
import s from './Users.module.css'

type UsersType = {
    userPage: UsersPageType
}

export const Users = (props: UsersType) => {
    const dispatch = useDispatch()
    const usersState = useSelector<AppRootStateType, UsersPageType>(state => state.usersPage)


    return (
        <div className={s.wrapper}>
            {usersState.users.map((u) => <div key={u.id}>
                <div className={s.user}>
                    <div className={s.userPhoto}>
                        <div>{<img src={u.avaUrl} className={s.ava} alt=""/>}
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.name}>{u.fullName}</div>
                        <div className={s.status}>{u.status}</div>
                        <div className={s.sendButton}>Send message</div>
                    </div>
                    <div className={s.geoInfo}>
                        <div>{u.location.country + ", "}</div>
                        <div>{u.location.city}</div>
                    </div>
                    <div className={s.btnContainer}>
                        {u.followed ? <button className={s.unfollowBtn} onClick={() => {
                                dispatch(UnFollowAC(u.id))
                            }}>Unfollow</button>
                            : <button className={s.followBtn} onClick={() => {
                                dispatch(FollowAC(u.id))
                            }}>Follow</button>
                        }
                    </div>
                </div>
            </div>)}
        </div>
    );
};

