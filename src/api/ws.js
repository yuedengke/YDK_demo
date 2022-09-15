
/**
 * 模拟服务端,用于websocket前后台数据交互
 */


var webSocketServer = require('ws').Server;
wws = new webSocketServer({ port: 8081 })
console.log('启动成功')
wws.on('connection', (ws, req) => {
    // 接收消息
    ws.on('message', (mes) => {
        console.log('接收到客户端的消息' + mes)
    })
    //关闭消息通道
    ws.on('close', e => {
        console.log('已关闭')
    })
})