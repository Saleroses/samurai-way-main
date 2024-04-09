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
    currentPage: number
}

export type FollowAT = ReturnType<typeof FollowAC>
export type UnFollowAT = ReturnType<typeof UnFollowAC>
export type SetUsersAT = ReturnType<typeof SetUsersAC>
export type GetUsersAT = ReturnType<typeof GetUsersAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>

export type ActionType = FollowAT | UnFollowAT | SetUsersAT | GetUsersAT | SetCurrentPageAT


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
    error: null,
    currentPage: 1
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

        case "SET-CURRENT-PAGE":
            return (
                {...state, currentPage: action.currentPage}
            )

        case "GET-USERS":
            return (
                {}
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

export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}