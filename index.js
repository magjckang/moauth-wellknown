
var qs = require('querystring')

exports.weibo = {
  authorizeUrl: 'https://api.weibo.com/oauth2/authorize',
  tokenUrl: 'https://api.weibo.com/oauth2/access_token',
  refreshUrl: 'https://api.weibo.com/oauth2/refresh_token',
  profileUrl: 'https://api.weibo.com/2/users/show.json'
}

exports.wechat = {
  authorizeUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
  tokenUrl: 'https://api.weixin.qq.com/sns/oauth2/access_token',
  refreshUrl: 'https://api.weixin.qq.com/sns/oauth2/refresh_token',
  profileUrl: 'https://api.weixin.qq.com/sns/userinfo',
  idKey: 'appid',
  secretKey: 'secret',
  uidKey: 'openid',
  qrcodeAuthorizeUrl: 'https://open.weixin.qq.com/connect/qrconnect',
  getQrcodeAuthorizeUrl: function () {
    var params = {
      response_type: 'code',
      scope: 'snsapi_login',
      redirect_uri: this.redirect_uri,
      appid: this.client_id
    }

    return this.qrcodeAuthorizeUrl + '?' + qs.stringify(params)
  }
}
