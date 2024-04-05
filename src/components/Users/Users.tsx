import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../../Redux/Redux-store";
import {FollowAC, GetUsersAC, initialState, UnFollowAC, UsersPageType} from "../../Redux/Users-reducer";
import s from './Users.module.css'
import {UserApi} from "../../api/user-api";
import {setProjectAnnotations} from "@storybook/react";


type UsersType = {
    userPage: UsersPageType
}

export const Users = (props: UsersType) => {
    const dispatch = useDispatch()
    const usersState = useSelector<AppRootStateType, UsersPageType>(state => state.usersPage)
    const defaultAva = 'https://tulacity.gosuslugi.ru/netcat_files/285/2177/avatar_600x600_0.png'
    const [users, setUsers] = useState(usersState)

    if (usersState.items.length === 0) {
        UserApi.getUsers()
            .then((res) => {
            setUsers(res.data)
        })
    }
    let pageSize = 300
    let pagesCount = Math.ceil(users.totalCount/pageSize)
    let page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
    let currentPage = 1

    return (
        <div className={s.wrapper}>
            <div>
                {page.map((p) =>
                <span className={currentPage === p ? s.selectedPage: ''}>{p+" "}</span>
                )}
            </div>

            {users.items.map((u) => <div key={u.id}>
                <div className={s.user}>
                    <div className={s.userPhoto}>
                        <div>{<img src={u.photos.small ? u.photos.small : defaultAva} className={s.ava} alt=""/>}
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                        <div className={s.sendButton}>Send message</div>
                    </div>
                    {/*<div className={s.geoInfo}>*/}
                    {/*    <div>{u.location.country + ", "}</div>*/}
                    {/*    <div>{u.location.city}</div>*/}
                    {/*</div>*/}
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
}
