setTimeout(function () {
    typewriter({
        el: "#typewriter1", //要素
        string: "今日は2021年5月27日",
        speed: 40 //速度
    });
}, 2000);  //2秒後に実行する
setTimeout(function () {
    typewriter({
        el: "#typewriter2", //要素
        string: "-----",
        speed: 30 //速度
    });
}, 3000);
setTimeout(function () {
    typewriter({
        el: "#typewriter3", //要素
        string: "俺が通ってるG'sアカデミーっていう学校で, 今日はなんと課題発表があるのだ.",
        speed: 40 //速度
    });
}, 4000);
setTimeout(function () {
    typewriter({
        el: "#typewriter4", //要素
        string: "------",
        speed: 40 //速度
    });
}, 6000);
setTimeout(function () {
    typewriter({
        el: "#typewriter5", //要素
        string: "正直, 課題の進捗があまり良くなく, 発表するのがすごく鬱だ.",
        speed: 40 //速度
    });
}, 8000);
setTimeout(function () {
    typewriter({
        el: "#typewriter6", //要素
        string: "------",
        speed: 40 //速度
    });
}, 10000);
setTimeout(function () {
    typewriter({
        el: "#typewriter7", //要素
        string: "この際, 今日は学校を休んで雀荘にでもいって麻雀やりてぇな.... ",
        speed: 40 //速度
    });
}, 12000);
setTimeout(function () {
    typewriter({
        el: "#typewriter8", //要素
        string: "あああぁぁ.....兎に角ギャンブルがしたい.....!!",
        speed: 40 //速度
    });
}, 14000);
setTimeout(function () {
    typewriter({
        el: "#typewriter9", //要素
        string: "------",
        speed: 40 //速度
    });
}, 15000);
setTimeout(function () {
    typewriter({
        el: "#typewriter10", //要素
        string: "そう... 俺は根っからのギャンブラーなのだ.",
        speed: 40 //速度
    });
}, 16000);
setTimeout(function () {
    typewriter({
        el: "#typewriter11", //要素
        string: "------",
        speed: 40 //速度
    });
}, 17000);
setTimeout(function () {
    typewriter({
        el: "#typewriter12", //要素
        string: "今日も世界中のギャンブルが俺を求めている....     そんな気がしてしょうがない ",
        speed: 40 //速度
    });
}, 18000);
setTimeout(function () {
    typewriter({
        el: "#typewriter13", //要素
        string: "------",
        speed: 40 //速度
    });
}, 19000);
setTimeout(function () {
    typewriter({
        el: "#typewriter14", //要素
        string: "とは言っても発表しないことには卒業できないし.......... ",
        speed: 40 //速度
    });
}, 21000);
setTimeout(function () {
    typewriter({
        el: "#typewriter15", //要素
        string: "------",
        speed: 65 //速度
    });
}, 22000);
setTimeout(function () {
    typewriter({
        el: "#typewriter16", //要素
        string: "よし....   ここはちょいと踏ん張って....    頑張ろう！！....     覚悟を決めて入るとするか..... ",
        speed: 70 //速度
    });
}, 23000);


// setTimeout(function () {
//     typewriter({
//         el: "#typewriter", //要素
//         string: "fdfdfdfd",
//         speed: 30 //速度
//     });
// }, 5000);

// setTimeout(function () {
//     typewriter({
//         el: "#typewriter", //要素
//         string: "趣味はギャンブルだ             \n三度の飯よりギャンブルが好きだ      \n",
//         speed: 30 //速度
//     });
// }, 10000);


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