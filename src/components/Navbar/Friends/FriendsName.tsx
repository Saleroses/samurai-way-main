import React from 'react';
import {friendsDataType} from "../../../Redux/SideBar-reducer";


export const FriendsName = (props: friendsDataType) => {
    return (
        <div>
            {props.name}
        </div>
    );
};
