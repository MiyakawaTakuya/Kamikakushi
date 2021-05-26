setTimeout(function () {
    typewriter({
        el: "#typewriter", //要素
        string: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", //文字列
        speed: 50 //速度
    });
}, 2000);  //2秒後に実行する

//タイプライター風の文字生成の流れ
// 文字列を出力する要素を指定する
// タイプライター風に表示する文字列を指定する
// 文字列を出力する要素を取得する
// 文字列を一文字ずつ分割して配列に格納する
// 配列内の文字を一定の秒間隔で一文字ずつ指定要素に出力する
const typewriter = (param) => {
    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");
    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
};

//何かキーが押された時に発火
document.addEventListener("keydown", keyDownFunc);

function keyDownFunc(event) {
    let key_code = event.keyCode;
    if (key_code === 13) {
        const time_out = function () {
            window.location.href = 'field.html?' + user_name;
        };
        setTimeout(time_out, 1500);
    };
}
// function onKeydown(e) {
//     if (e.keyCode == 13) {
//         // const time_out = function () {
//             window.location.href = 'field.html?' + user_name;
//         };
//         // setTimeout(time_out, 1500);
// };

// function onKeyPress(e) {
//     if (e.keyCode !== 13 || (e.keyCode === 13 && (e.shiftKey === true || e.ctrlKey === true || e.altKey === true))) { // Enterキー除外
//         return false;
//     }
//     const time_out = function () {
//         window.location.href = 'field.html?' + user_name;
//     };
//     setTimeout(time_out, 1500);
// };