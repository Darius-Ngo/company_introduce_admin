import http from "./index"
import {
  apiBusinessRegister,
  apiChangePassword,
  apiForgotPassword,
  apiLogin,
  apiLogout,
  apiRegister,
  apiVerifyCode,
  apiLoginGoole,
  apiCallBackLoginGoole,
  apiLoginFB,
} from "./apiRouter"

const login = body => http.post(apiLogin, body)
const register = body => http.post(apiRegister, body)
const forgotPass = body => http.post(apiForgotPassword, body)
const verifyCode = body => http.post(apiVerifyCode, body)
const changePassword = body => http.post(apiChangePassword, body)

const logout = () => http.get(apiLogout)
const loginGG = () => http.get(apiLoginGoole)
const loginFB = () => http.get(apiLoginFB)

const callbackGG = params => http.get(apiCallBackLoginGoole, { params })

const businessRegister = body => http.post(apiBusinessRegister, body)

const AuthService = {
  loginGG,
  callbackGG,
  login,
  logout,
  register,
  forgotPass,
  verifyCode,
  businessRegister,
  changePassword,
  loginFB,
}
export default AuthService
