import request from '@/utils/request'
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
