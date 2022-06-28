import request from '@/utils/request'
// vue组件文件里才能同this.￥store，在js中没有this
import store from '@/store'

// 获取短信验证码
export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}

// 登录接口
export const login = ({ mobile, code }) => { // 解构赋值
  return request({
    method: 'POST',
    url: '/authorizations',
    data: {
      mobile,
      code
    }
  })
}

// 获取用户个人资料
export const getUserInfo = () => {
  return request({
    url: 'user',
    headers: {
      Authorization: 'Bearer ' + store.state.user.token
    }
  })
}

// 解构赋值
// function fn (obj) {
//   console.log(obj.a)
//   console.log(obj.b)
// }
// fn({ a: 2, b: 3 })
// 可写成:
// function fn (a, b) {
//   console.log(a)
//   console.log(b)
// }
// fn(2, 3)
