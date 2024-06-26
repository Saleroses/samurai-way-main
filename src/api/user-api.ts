import axios from "axios";
import {UserDataType} from "../Redux/Users-reducer";
import {number} from "prop-types";


const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
    }
)

export type UserApiType = {
    items: UserDataType[]
    totalCount: number,
    error: string | null
    currentPage: number
}

export type UserType = {
    name: string,
    id: number,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string,
    followed: boolean
}

export const UserApi = {
    getUsers(count: number, page: number) {
        return instance.get<UserApiType>(`/users/?count=${count}&page=${page}` )
    }
}