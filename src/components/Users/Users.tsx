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
    const usersState = useSelector <AppRootStateType, UsersPageType>(state => state.usersPage)



    return (
        <div>
            {usersState.users.map( (u) => <div key={u.id}>
                <div>
                    <div>{<img src={u.avaUrl} className={s.ava} alt=""/>}
                        </div>

                    <div>
                        {u.followed ? <button onClick={()=>{dispatch(UnFollowAC(u.id))}}>Unfollow</button>
                        : <button onClick={()=>{dispatch(FollowAC(u.id))}}>Follow</button>
                        }
                        </div>
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>)}
        </div>
    );
};

