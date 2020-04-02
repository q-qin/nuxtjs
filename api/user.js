import request from '@/plugins/request';
export const login = (data) => {
  return request({
    url: '/api/token',
    method: 'post',
    data
  });
};
