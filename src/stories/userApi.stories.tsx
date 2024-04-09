import {useEffect, useState} from "react";
import {UserApi} from "../api/user-api";

import React from 'react';

// const GetUsers = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         UserApi.getUsers()
//             .then((res)=>{
//                 setState(res.data)
//             })
//
//     }, [])
//     return <div>{JSON.stringify(state)}</div>
// }

// export default GetUsers