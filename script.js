function clickMe() {
    alert("感谢点击，真的谢谢");
}

//检查3个文件是否有更新
let lastUpdateTime1 = null;
let lastUpdateTime2 = null;
let lastUpdateTime3 = null;

function checkForUpdate1() {
    fetch('web.html', { method: 'HEAD' }) // 只请求头部信息
    .then(response => {
        let updateTime = response.headers.get('Last-Modified');

        if(lastUpdateTime1 && updateTime !== lastUpdateTime1) {
            // 文件1已更新
            console.log('File 1 updated');
            location.reload(); // 重新加载页面
        }

        lastUpdateTime1 = updateTime;
    })
    .catch(console.error)
    .finally(() => {
        setTimeout(checkForUpdate1, 5000); // 每5秒检查一次
    });
}

function checkForUpdate2() {
    fetch('script.js', { method: 'HEAD' }) // 只请求头部信息
    .then(response => {
        let updateTime = response.headers.get('Last-Modified');

        if(lastUpdateTime2 && updateTime !== lastUpdateTime2) {
            // 文件2已更新
            console.log('File 2 updated');
            location.reload(); // 重新加载页面
        }

        lastUpdateTime2 = updateTime;
    })
    .catch(console.error)
    .finally(() => {
        setTimeout(checkForUpdate2, 5000); // 每5秒检查一次
    });
}

function checkForUpdate3() {
    fetch('styles.css', { method: 'HEAD' }) // 只请求头部信息
    .then(response => {
        let updateTime = response.headers.get('Last-Modified');

        if(lastUpdateTime3 && updateTime !== lastUpdateTime3) {
            // 文件3已更新
            console.log('File 3 updated');
            location.reload(); // 重新加载页面
        }

        lastUpdateTime3 = updateTime;
    })
    .catch(console.error)
    .finally(() => {
        setTimeout(checkForUpdate3, 5000); // 每5秒检查一次
    });
}

checkForUpdate1();
checkForUpdate2();
checkForUpdate3();