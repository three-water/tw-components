import * as functions from './functions'

// const HOST_SITE = 'http://shencai-inner.s1.natapp.cc/ws'
// const HOST_SITE = 'http://jingbao-frontend.yirimao.com/ws'
// const HOST_SITE = 'http://bucczhjb.com/ws'
// const HOST_SITE = 'http://xuqing.s1.natapp.cc/ws'
// const HOST_SITE = 'http://192.168.199.108:6060/ws'
const HOST_SITE = process.env.NODE_ENV === 'production' ? 'http://101.37.29.108:6060/ws' : 'http://localhost:8082'

// 微信帐号相关常量
const WECHAT_CALLBACK = 'http://nutrition.natapp1.cc/'
const WECHAT_OAUTH_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
const WECHAT_APPID = 'wx39e56d6d3badb174'

// 定义微信id存储key
const WECHAT_OPEN_ID_KEY = 'open_id_dsfdsfdsf'

// 记录重定向地址Key
const REDIRECT_URL_KEY = 'redirect_url_dsfdsf'

// 存储医生信息的Key
const DOCTOR_INFO_KEY = 'doctor_info_dsfdsf'

// 定义状态码
const SUCCESS = 1

// 定义每一页数据
const PAGE_ROWS = 20

const OFFICE_WEB_ID = 11181

const OFFICE_WEB_URL = 'http://ow365.cn/?i=' + OFFICE_WEB_ID + '&furl='

// 用户信息
const TOKEN_KEY = 'com.nutrition.app.dsfsdfldsfdskfdsfldsfk'
const USER_INFO_KEY = 'com.nutrition.app.sdfwekldsfkwfkdsfjlwefkds'
const TOKEN = process.env.NODE_ENV === 'production' ? functions.sgetItem(TOKEN_KEY) : '0ee6820d-3557-48ed-bc9a-8be491af3679'
const USER_INFO = functions.sgetItem(USER_INFO_KEY)

// 富文本上传路径
const EDITOR_UPLOAD_PATH = HOST_SITE + '/file/h5-upload'

// 文件上传路径
const FILE_UPLOAD_PATH = HOST_SITE + '/file/upload'
const FILE_UPLOAD_PATH_EX = HOST_SITE + '/file/upload-file'
const UPLOAD_HEADER = { token: TOKEN }

const USERNAME_KEY = 'com.jingbao.frontend.dsfsdffdsklffdsnf2334sd'
const PASSWORD_KEY = 'com.jingbao.frontend.32dsk23dfjksdnfsdf23dfsf'

export {
  HOST_SITE, SUCCESS, PAGE_ROWS, EDITOR_UPLOAD_PATH, FILE_UPLOAD_PATH, TOKEN_KEY, TOKEN, USER_INFO_KEY, USER_INFO, UPLOAD_HEADER, FILE_UPLOAD_PATH_EX, OFFICE_WEB_ID, OFFICE_WEB_URL, USERNAME_KEY, PASSWORD_KEY, WECHAT_CALLBACK, WECHAT_OAUTH_URL, WECHAT_APPID, WECHAT_OPEN_ID_KEY, REDIRECT_URL_KEY, DOCTOR_INFO_KEY
}
