import axios from "axios";
import {UserApi} from "../api/user-api";
import {log} from "util";
import {useState} from "react";


export type UserDataType = {
    name: string,
    id: number,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string,
    followed: boolean
}

export type UsersPageType = {
    items: UserDataType[]
    totalCount: number,
    error: string | null
}

export type FollowAT = ReturnType<typeof FollowAC>
export type UnFollowAT = ReturnType<typeof UnFollowAC>
export type SetUsersAT = ReturnType<typeof SetUsersAC>
export type GetUsersAT = ReturnType<typeof GetUsersAC>

export type ActionType = FollowAT | UnFollowAT | SetUsersAT | GetUsersAT


export let initialState: UsersPageType = {
        items:
            [
                // {
                //     name: 'Egor',
                //     id: 1,
                //     photos: {
                //         small: null,
                //         large: null,
                //     },
                //     status: 'Status',
                //     followed: true
                // }
            ],
    totalCount: 0,
    error: null
}

export const usersReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case 'FOLLOW':
            return (
                {
                    ...state,
                    users: state.items.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
                }
            )

        case 'UNFOLLOW':
            return (
                {
                    ...state,
                    users: state.items.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
            )

        case "SET-USERS":
            return (
                {...state, users: [...state.items, ...action.users]}
            )

        case "GET-USERS":
          const newData =  UserApi.getUsers()
                .then((res)=> res.data.items)
            return (
                {
                    ...state,
                    items: newData
                }
            )

        default:
            return state
    }
}


export const FollowAC = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}

export const UnFollowAC = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}

export const SetUsersAC = (users: Array<UserDataType>) => {
    return {type: 'SET-USERS', users} as const
}

export const GetUsersAC = () => {
    return {type: 'GET-USERS'} as const
}