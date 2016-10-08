$(window).load(function () {
    var img = $("#slideshow").children("img"), // 画像を取得
        num = img.length, // 画像の数を数える
        count = 0, // 現在何枚目を表示しているかのカウンター
        interval = 5000; // 次の画像に切り替わるまでの時間(1/1000秒)
    img.eq(0).addClass("show"); // 最初の画像にshowクラス付与
    setTimeout(slide, interval); // slide関数をタイマーセット
    function slide() {
        img.eq(count).removeClass("show"); // 現在表示している画像からshowクラスを取り除く
        count++; // カウンターを一個進める
        if (count >= num) {
            count = 0; // カウンターが画像の数より大きければリセット
        }
        img.eq(count).addClass("show"); // 次の画像にshowクラス付与
        setTimeout(slide, interval); // 再びタイマーセット
    }
});
$(function () {
    $("#box6 .col-lg-4").hover(function () {
        $(this).stop().animate({
            "opacity": "1"
            , "font-weight": "bold"
            , "margin-top": "-15px"
        });
    }, function () {
        $(this).stop().animate({
            "opacity": "0.6"
            , "font-weight": "normal"
            , "margin-top": "0px"
        });
    });
});
$(function () {
    $("#box6 .col-md-4").hover(function () {
        $(this).stop().animate({
            "opacity": "1"
            , "font-weight": "bold"
            , "margin-top": "-15px"
        });
    }, function () {
        $(this).stop().animate({
            "opacity": "0.6"
            , "font-weight": "normal"
            , "margin-top": "0px"
        });
    });
});
$(function () {
    $("#box6 .col-sm-4").hover(function () {
        $(this).stop().animate({
            "opacity": "1"
            , "font-weight": "bold"
            , "margin-top": "-15px"
        });
    }, function () {
        $(this).stop().animate({
            "opacity": "0.6"
            , "font-weight": "normal"
            , "margin-top": "0px"
        });
    });
});
$(function () {
    $("#box6 .col-xs-4").hover(function () {
        $(this).stop().animate({
            "opacity": "1"
            , "font-weight": "bold"
            , "margin-top": "-15px"
        });
    }, function () {
        $(this).stop().animate({
            "opacity": "0.6"
            , "font-weight": "normal"
            , "margin-top": "0px"
        });
    });
});
var elemVideo = document.getElementById('js-video');
var elemCanvas = document.getElementById('js-canvas');
var canvasDrawTimer;
var lastTime;
var videoPlay = function () {
    canvasDrawTimer = setInterval(function () {
        // 前回の描画時間との差分を取り、currentTimeを設定
        var nowTime = Date.now();
        var diffTime = (nowTime - lastTime) / 1000;
        lastTime = nowTime;
        elemVideo.currentTime = elemVideo.currentTime + diffTime;
        // canvasへの描画を実行
        canvasDraw();
    }, 1000 / 24); // 24fpsで描画する
}

function canvasDraw() {
    // 動画の縦横サイズ・アスペクト比を取得しcanvasの縦横サイズを変更
    var aspectRatio = elemVideo.videoHeight / elemVideo.videoWidth;
    var canvasWidth = elemCanvas.clientWidth;
    var canvasHeight = Math.floor(canvasWidth * aspectRatio);
    elemCanvas.setAttribute("width", canvasWidth.toString());
    elemCanvas.setAttribute("height", canvasHeight.toString());
    // canvasに描画
    var ctx = elemCanvas.getContext('2d');
    ctx.drawImage(elemVideo, 0, 0, elemVideo.videoWidth, elemVideo.videoHeight, 0, 0, canvasWidth, canvasHeight);
    // 総再生時間と現在の再生時間を比較し再生を終了
    var currentTime = (Math.round(parseFloat(elemVideo.currentTime) * 10000) / 10000);
    var duration = (Math.round(parseFloat(elemVideo.duration) * 10000) / 10000);
    if (duration >= 1 && currentTime >= duration) {
        clearInterval(canvasDrawTimer);
    }
}