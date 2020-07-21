import {request} from "./request";
export function getMultiDate() {
  return request({
    url:'/home/multidata'
  })
}
