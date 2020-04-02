import Cookies from 'js-cookie';

const KEY_TOKEN = 'js_pc_nuxt'; // token

// 获取access_token
export function getToken () {
  return Cookies.get(KEY_TOKEN);
}
