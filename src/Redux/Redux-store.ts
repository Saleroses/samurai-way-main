

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import {combineReducers, createStore} from "redux";
import DialogsReducer from "./Dialogs-reducer";
import ProfileReducer from "./Profile-reducer";
import SideBarReducer from "./SideBar-reducer";

const rootReducer = combineReducers({
    profilePage: DialogsReducer,
    dialogsPage: ProfileReducer,
    sideBar: SideBarReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store