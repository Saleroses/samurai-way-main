import React from 'react';
import {friendsDataType} from "../../../Redux/Store";


export const FriendsName = (props: friendsDataType) => {
    return (
        <div>
            {props.name}
        </div>
    );
};
