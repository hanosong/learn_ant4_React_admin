import * as actionType from './constants'
const setUserInfoAction = (userInfo) => ({
    type: actionType.SET_USERINFO,
    userInfo,
})


export {
    setUserInfoAction,
}