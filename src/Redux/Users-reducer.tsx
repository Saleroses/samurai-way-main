import {v1} from "uuid";
import {AddPostAT, LikePostAT, UpdateNewPostTextAT} from "./Profile-reducer";

export type UserDataType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string,
        country: string,
    }

}

export type UsersPageType = {
    users: Array<UserDataType>
}

export type FollowAT = ReturnType<typeof FollowAC>
export type UnFollowAT = ReturnType<typeof UnFollowAC>

export type ActionType = FollowAT | UnFollowAT



let initialState: UsersPageType = {
    users: [
        {id: v1(), followed: false, fullName: "name1", status: "I'm a boss", location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: true, fullName: "name2", status: "status", location: {city: 'SPb', country: 'Russia'}},
        {id: v1(), followed: true, fullName: "name3", status: "i'm fine", location: {city: 'Moscow', country: 'Russia'}},
    ]}

export const usersReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {

        default:
            return state
    }
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

export const FollowAC = () => {
    return {type: FOLLOW} as const
}

export const UnFollowAC = () => {
    return {type: UNFOLLOW} as const
}

