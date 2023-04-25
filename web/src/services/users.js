import http from './base-api'

 const create = () => http.post('/users')
   .then((res) => res.data)


 export default {
   create
 }