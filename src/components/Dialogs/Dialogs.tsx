import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrei
                </div>
                <div className={s.dialog}>
                    Petya
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Hiii</div>
                <div className={s.message}>Kyky</div>
                <div className={s.message}>4e kogo</div>
                <div className={s.message}>Go home?</div>
                <div className={s.message}>How are you?</div>
            </div>
        </div>

    );
};

export default Dialogs;