import React from 'react';
import {useDispatch} from "react-redux";
import {store} from "../../Redux/Redux-store";
import {UsersPageType} from "../../Redux/Users-reducer";

type UsersType = {
    userPage: UsersPageType
}

export const Users = (props: UsersType) => {
    const dispatch = useDispatch()
    const state = store.getState().usersPage


    return (
        <div>
            {props.userPage.users.map( (u) => <div key={u.id}>
                <div>
                    <div>{<img src={u.avaUrl} alt=""/>}
                        </div>

                    <div><button>
                        {'Follow'}
                    </button>
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

