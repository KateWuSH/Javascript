/* 
   從 Twitch API 取得資料
   1) 先註冊帳號
   2) 到 Twitch Developers 的 dashboard / 應用程式裡註冊一個 API
   3) API 註冊 名稱隨意取，OAuth 打 localhost，分類選  Website Integration，確認後會取得一個 client ID
*/

var clientId = 'snniezz97ia7q8y4r4v5mvfpxe3fl9';
var limit = 2;
// API 網址建議不要寫死，可以用變數去帶入會改變的部分
var apiUrl = 'https://api.twitch.tv/kraken/streams/?client_id=' + clientId + '';
// 確認 API 是否成功，可以直接在網址列上貼上網址，如果有資料出現就是成功

// javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl, true);
// xhr.setRequestHeader('client-id', clientId); 這是另一種傳入 client ID 的方法
xhr.send();

xhr.onreadystatechange = function() {
    switch(this.readyState) {
        case 0:
            console.log('請求初始化');
            break;
        case 1:
            console.log('服务器连接已建立');
            break;
        case 2:
            console.log('请求已接收');
            break;
        case 3:
            console.log('请求处理中');
            break;
        case 4:
            console.log('请求已完成');
            break;
    };
    if (this.readyState === 4 && this.status === 200) {
        var data = JSON.parse(this.responseText);
        console.log('javascript 產生');
        console.log(data);
    }
}

// jquery
$.ajax({
    url: apiUrl,
    success: (response) => {
        console.log('ajax 產生');
        console.log(response);
    }
})

/* 
   當要跨網域存取 API 時，因為同源政策(Same-origin policy)的因素會被擋下，但有些標籤可以跨網域，
   像是 <script> <img> <link> <video> @font-face ...，這種方式稱為 JSONP(JSON with Padding)，
   但是這個方式要 server side 有支援，有的 API 不支援，就算加上 callback 也不會改變。
   BUT 還是不建議使用 JSONP 這個方式來引入 API，因為你將 script 引入，如果對方被駭客入侵，那你的
   網站也會跟著受影響，有安全上的疑慮！！！
*/

// JSONP (callback 後面帶的參數，跟你呼叫的函數名稱要一樣)))
var src = apiUrl + '&callback=hello';
var script = '<script src="' + src + '"></script>';
$(document).ready(function() {
    $('body').append(script);
});

function hello(data) {
    console.log('JSONP 產生');
    console.log(data);
}

