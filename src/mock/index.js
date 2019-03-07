import Mock from 'mockjs'
import userInfo from './usermock'
Mock.mock('/userInfo', 'post', userInfo.getUserInfo())