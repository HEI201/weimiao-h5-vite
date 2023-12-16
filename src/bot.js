/* global BotApp */

// 初始化botApp对象（益智乐园和游戏中心场景无需该步骤）
const botApp = new BotApp({
    random1: '3691308f2a4c2f6983f2880d32e29c84', // 随机字符串，长度不限，由开发者自己生成
    signature1: 'd85f5cfffe5450fe7855fec1fcfe0b16', // 将(random1 + 签名Key)的字符串拼接后做MD5运算得出
    random2: 'dc468c70fb574ebd07287b38d0d0676d', // 随机字符串，长度不限，由开发者自己生成
    signature2: '61dc2b99967e0b326e82e80b05571d22', // 将(random2 + 签名Key)的字符串拼接后做MD5运算得出
    skillID: 'd9146076-ad95-958d-c4c0-4b44c38aef5f' // 必填字段，技能ID。填写本字段后SDK会在初始化阶段调用BotApp.requireShipping(小度有屏音箱环境)方法。
});
var $log = document.getElementById('log');

function log(data) {
    let type = typeof data;
    if (typeof data === 'object') {
        try {
            data = JSON.stringify(data);
        } catch (e) {
            data = JSON.stringify(e);
        }
    }
    var now = new Date();
    var hour = now.getHours();
    var minu = now.getMinutes();
    var sec = now.getSeconds();
    var milSec = now.getMilliseconds();
    var dateStr = '<br>[' + hour + ':' + minu + ':' + sec + '.' + milSec + '] ';
    // var dateStr = '<br>[' + formatTime(Date.now()) + ']';
    $log.innerHTML += dateStr + type + ' ' + data;
}

if (!botApp.isInApp()) {
    botApp.onDialogStateChanged(function (err, data) {
        log('收到 onDialogStateChanged 调用');
        log(err);
        log(data);
    });
    botApp.onHandleUnknowUtterance(function (err, data) {
        log('收到 onHandleUnknowUtterance 调用');
        log(err);
        log(data);
    });
}

botApp.onHandleIntent(function (data) {
    log('收到 onHandleIntent 调用');
    console.log(data);
    log(data);
});

botApp.onClickLink(function (data) {
    log('收到 onClickLink 调用');
    console.log(data);
    log(data);
});

botApp.onHandleScreenNavigatorEvent(function (data) {
    log('收到 onHandleScreenNavigatorEvent 调用');
    console.log(data);
    log(data);
});

botApp.onBuyStatusChange(function (data) {
    log('收到 onBuyStatusChange 调用');
    console.log(data);
    log(data);
});

botApp.listen();


botApp.speak('我要早点下班', function () {
    log('TTS播报完毕');
});