// 封装websocket消息通道
import { Message } from 'element-ui'
let websock = null  //websocket实例
let messageback = null //消息回调
let errorback = null //错误回调
let wsURL = ''  //连接地址
const URL = 'ws://localhost:8081'


// 建立连接
export function createSocket() {
    if (!wsURL) {
        console.log('开始建立消息通道')
        Socket = new WebSocket(URL)
        Socket.onopen = onopenWS
        Socket.onmessage = onmessageWS
        Socket.onerror = onerrorWS
        Socket.onclose = oncloseWS
    } else {
        console.log('消息通道已建立')
    }
}



