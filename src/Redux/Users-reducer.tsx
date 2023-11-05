import {v1} from "uuid";
import {AddPostAT, LikePostAT, UpdateNewPostTextAT} from "./Profile-reducer";

export type UserDataType = {
    id: string
    avaUrl: string
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
export type SetUsersAT = ReturnType<typeof SetUsersAC>

export type ActionType = FollowAT | UnFollowAT | SetUsersAT



let initialState: UsersPageType = {
    users: [
        {id: v1(), avaUrl: 'https://cs6.pikabu.ru/avatars/1782/v1782200-838218673.jpg', followed: false, fullName: "name1", status: "I'm a boss", location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), avaUrl: 'https://cs6.pikabu.ru/avatars/1782/v1782200-838218673.jpg', followed: true, fullName: "name2", status: "status", location: {city: 'SPb', country: 'Russia'}},
        {id: v1(),  avaUrl: 'https://cs6.pikabu.ru/avatars/1782/v1782200-838218673.jpg', followed: true, fullName: "name3", status: "i'm fine", location: {city: 'Moscow', country: 'Russia'}},
    ]}

export const usersReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case 'FOLLOW':
            return (
                {...state,
                    users: state.users.map( (u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
                }
            )

        case 'UNFOLLOW':
            return (
                {...state,
                    users: state.users.map( (u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
            )

        case "SET-USERS":
            return (
                {...state, users: [...state.users, ...action.users]}
            )


        default:
            return state
    }
}



export const FollowAC = (userId: string) => {
    return {type: 'FOLLOW', userId} as const
}

export const UnFollowAC = (userId: string) => {
    return {type: 'UNFOLLOW', userId} as const
}

export const SetUsersAC = (users: Array<UserDataType>) => {
    return {type: 'SET-USERS', users} as const
}

