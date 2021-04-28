// 暂时性随机生成token

export function genToken(leng) {
   leng = leng == undefined ? 32 : leng	//如果没设置token长度自动为32位
   //预设随机字符串
   let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz23456789'
   let token = ''
   //以长度单位进行循环
   for (let i = 0; i < leng; ++i) {
      token += chars.charAt(Math.floor(Math.random() * chars.length))
   }
   return token
}
