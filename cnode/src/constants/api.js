const ROOTPATH = 'https://cnodejs.org/api/v1'
const API = {
  /// 获取主题首页 GET
  topics: ROOTPATH + '/topics',
  /// 获取话题详情 GET
  topic: ROOTPATH + '/topic',
  /// 验证用户 Token POST
  userToken: ROOTPATH + '/accesstoken',
  /// 获取用户信息 GET
  userInfo: ROOTPATH + '/user/'
}
export default API
