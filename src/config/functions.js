import Vue from 'vue'

// 定义POST请求方法
function post (action, params) {
  if (lgetItem(Vue.TOKEN_KEY)) {
    Vue.http.headers.post['token'] = lgetItem(Vue.TOKEN_KEY)
  }
  return Vue.http.get(action, params).then((response) => response.json(), (error) => {
    console.log(error)
    return error
  })
}

function formatDate (date) {
  if (!date) { return '' }
  let dateStr = date.toLocaleDateString()
  let reg = new RegExp('/', 'g')
  return dateStr.replace(reg, '-')
}

function formatFileSize (fileSize) {
  let fs = ''
  if (fileSize < 1024) {
    fs = fileSize + 'Byte'
  } else if (fileSize < 1024 * 1024 && fileSize >= 1024) {
    fs = Math.ceil(fileSize / 1024) + 'KB'
  } else {
    fs = Math.ceil(fileSize / (1024 * 1024)) + 'M'
  }
  return fs
}

function ssetItem (obj, aKey = null) {
  let key = new Date().getTime()
  if (aKey) { key = aKey }
  window.sessionStorage.setItem(key, JSON.stringify(obj))
  return key
}

function sgetItem (key) {
  return JSON.parse(window.sessionStorage.getItem(key))
}

function lsetItem (obj, aKey = null) {
  let key = new Date().getTime()
  if (aKey) { key = aKey }
  window.localStorage.setItem(key, JSON.stringify(obj))
  return key
}

function lgetItem (key) {
  let value = window.localStorage.getItem(key)
  try {
    value = JSON.parse(value)
  } catch (e) {}
  return value
}

function srmItem (key) {
  return window.sessionStorage.removeItem(key)
}

function lrmItem (key) {
  return window.localStorage.removeItem(key)
}

function redirect (path) {
  window.location.href = path
}

function redirectHome () {
  window.location.href = '/'
}

function fileType (extension) {
  if (!extension) {
    return 'other'
  }
  let type = 'other'
  switch (extension.toString().toLowerCase()) {
    case 'pdf':
      type = 'pdf'
      break
    case 'doc':
    case 'docx':
      type = 'doc'
      break
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
      type = 'img'
      break
    case 'mp3':
    case 'wav':
      type = 'audio'
      break
    case 'ppt':
    case 'pptx':
      type = 'ppt'
      break
    case 'mp4':
    case 'rmvb':
    case 'rm':
    case 'avi':
    case 'mpeg4':
    case 'wmv':
    case 'mov':
      type = 'video'
      break
    case 'xls':
    case 'xlsx':
      type = 'xls'
      break
    default:
      break
  }
  return type
}

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.hash.substr(1).match(reg)
  console.log(r)
  if (r != null) return unescape(r[2])
  return null
}

export {
  post, formatDate, formatFileSize, ssetItem, sgetItem, lsetItem, lgetItem, srmItem, lrmItem, redirectHome, fileType, redirect, getQueryString
}
