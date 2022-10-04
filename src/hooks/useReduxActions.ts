import {authActions} from "../store/crm/auth/auth.slice";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";

const actions = {
  ...authActions,
}

export const useReduxActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}