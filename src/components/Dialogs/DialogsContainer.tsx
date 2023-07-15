import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {ActionTypes, RootStateType} from "../../Redux/Store";
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../Redux/Dialogs-reducer";




const mapStateToProps = (state: RootStateType) => {
  return {
      dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        onNewMassageChange: (body: string)=>{dispatch(updateNewMassageBodyCreator(body))},
        onSendMassageClick: ()=>{dispatch(sendMassageCreator())},
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
