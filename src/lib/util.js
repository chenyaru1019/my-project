export const getUser = () => {
    const originalUserInfo = localStorage.getItem('userInfo')
    const userInfo = (originalUserInfo ? JSON.parse(originalUserInfo) : {})
    return userInfo
}