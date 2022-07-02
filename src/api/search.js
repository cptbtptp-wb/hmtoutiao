import request from '@/utils/request'

// 搜索联想数据列表
export const getSuggestList = q => {
  return request({
    url: 'suggestion',
    params: {
      q
    }
  })
}

// 搜索结果列表
// eslint-disable-next-line camelcase
/**
 *
 * @param page:当前时第几页，per_page:每页数量；q：搜索关键字
 * @returns
 */
// eslint-disable-next-line camelcase
export const getSearchResult = ({ page = 1, per_page, q }) => {
  return request({
    url: 'search',
    params: {
      page, per_page, q
    }
  })
}
