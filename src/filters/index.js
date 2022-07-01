import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
// 批量创建过滤器
// 好处：创建新的过滤器
// 代码汇编简单，作业写一个普通的函数且按需导出即可
export const datefomart = (time) => {
  return dayjs(time).fromNow()
}
