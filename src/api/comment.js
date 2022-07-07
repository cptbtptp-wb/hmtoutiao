import request from '@/utils/request'

/**
 *
 * @param {type} 评论类型，a(对文章评论)，c(对评论区评论)
 * @param {source} 评论/评论id
 * @param {offset} 偏移量
 * @param {limit} 每一页评论的数量
 * @returns
 */
export const getCommentList = ({ type, source, offset, limit }) => {
  return request({
    url: 'comments',
    params: {
      type,
      source,
      offset,
      limit
    }
  })
}

/**
 *点赞
 * @param {点赞的文章id} target
 * @returns
 */
export const addLike = (target) => {
  return request({
    method: 'POST',
    url: 'comment/likings',
    data: {
      target
    }
  })
}

/**
 *取消点赞
 * @param {要取消点赞的评论id或评论回复id} target
 * @returns
 */
export const delLike = (target) => {
  return request({
    method: 'DELETE',
    url: `comment/likings/${target}`// 路径参数，注意模板字符串拼接
  })
}

/**
 *target:文章id或者评论id
 content：内容
 art_id:文章id，对评论内容发表回复时，需要传递此参数，表明所属文章id，对文章进行评论时不穿此参数
 * @param {*} data
 * @returns
 */
export const addComment = (data) => {
  return request({
    method: 'POST',
    url: 'comments',
    data
  })
}
