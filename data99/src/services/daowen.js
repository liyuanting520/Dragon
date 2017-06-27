import request from '../utils/request';
import qs from 'qs';

export async function daowenquery(params) {
  return request('mtc/wxreport/savereport', {
    method: 'post',
    mode: 'cors',
    headers: {
            'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(params)
  });
}
