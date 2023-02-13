import { publicrequest } from "../requestMethods"
import {loginFailure,loginStart,loginSuccess,logOut} from "./userRedux"
export const login = async(dispatch,user)=>{
    dispatch(loginStart())
    // console.log(user);
    try {
        const res =await publicrequest.post("/auth/login",user);
        // console.log(res);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logout = async(dispatch)=>{
    try {
        dispatch(logOut())
        
    } catch (error) {
        dispatch(loginFailure())
    }
}