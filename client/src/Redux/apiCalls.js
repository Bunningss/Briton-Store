import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure())
    }
}