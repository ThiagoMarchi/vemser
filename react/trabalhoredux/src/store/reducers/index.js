import { combineReducers } from "redux";

import pessoaReducer from './PessoaReducer'
import authReducer from "./AuthReducer";
import loadingReducer from './LoadingReducer';

export default combineReducers({
  authReducer,
  pessoaReducer,
  loadingReducer
})