import React from 'react';
import {friendsDataType} from "../../../Redux/State";


export const FriendsName = (props: friendsDataType) => {
    return (
        <div>
            {props.name}
        </div>
    );
};
