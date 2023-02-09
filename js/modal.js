$(function () {
    //初期設定
    var stop;
    var human;
    var cross;
    var voiceType=localStorage.getItem("voiceType");
    var stopColor=localStorage.getItem("stopColor");
    var humanColor=localStorage.getItem("humanColor");
    var crossColor=localStorage.getItem("crossColor");
    if(stopColor == ""){
        stopColor = "#ff0000";
    }
    if(humanColor == ""){
        humanColor = "#00ff00";
    }
    if(crossColor == ""){
        crossColor = "#0000ff";
    }

    $(".colorPickerStop").val(stopColor);
    $(".colorPickerHuman").val(humanColor);
    $(".colorPickerCross").val(crossColor);

    if (voiceType == 0) {
        $('.normal').css('border', 'solid 10px #0067c0');
    } else if (voiceType == 1) {
        $('.hiroyuki').css('border', 'solid 10px #0067c0');
    } else if (voiceType == 2) {
        $('.yukkuri').css('border', 'solid 10px #0067c0');
    }


    // 「.setting」をクリックしたらモーダルと黒い背景を表示する
    $('.setting').click(function () {
        const camera = document.getElementById("camera");
        camera.pause();

        // 黒い背景をbody内に追加
        $('body').append('<div class="modal_bg"></div>');
        $('.modal_bg').fadeIn();

        // data-targetの内容をIDにしてmodalに代入
        var modal = '#' + $(this).attr('data-target');

        stopColor = localStorage.getItem("stopColor");
        humanColor = localStorage.getItem("humanColor");
        crossColor = localStorage.getItem("crossColor");
        $(".selectColorStop").css("border", "solid 10px "+stopColor);
        $(".selectColorHuman").css("border", "solid 10px "+humanColor);
        $(".selectColorCross").css("border", "solid 10px "+crossColor);

        // モーダルをウィンドウの中央に配置する
        function modalResize() {
            var w = $(window).width();
            var h = $(window).height();

            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;

            $(modal).css({
                'left': x + 'px',
                'top': y + 'px'
            });
        }

        // modalResizeを実行
        modalResize();

        // modalをフェードインで表示
        $(modal).fadeIn();

        // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
        $('.modal_bg, .modal_close').off().click(function () {
            $('.modal_box').fadeOut();
            $('.modal_bg').fadeOut('slow', function () {
                $('.modal_bg').remove();
            });
            camera.play();
        });

        // ウィンドウがリサイズされたらモーダルの位置を再計算する
        $(window).on('resize', function () {
            modalResize();
        });

        // .modal_switchを押すとモーダルを切り替える
        $('.modal_switch').click(function () {

            // モーダルをウィンドウの中央に配置する
            function modalResize() {
                var w = $(window).width();
                var h = $(window).height();

                var x = (w - $(modal).outerWidth(true)) / 2;
                var y = (h - $(modal).outerHeight(true)) / 2;

                $(modal).css({
                    'left': x + 'px',
                    'top': y + 'px'
                });
            }

            var id = $(this).attr('id');
            if(id=="guideChangeEnter" && (stop==1 || human==1 || cross==1)){
                localStorage.setItem("stop", stop);
                localStorage.setItem("human", human);
                localStorage.setItem("cross", cross);

                var guidance = document.getElementById("guidance");
                var stopImg = document.getElementById("guidance1");
                var humanImg = document.getElementById("guidance2");
                var crossImg = document.getElementById("guidance3");

                while (guidance.firstChild) {
                    guidance.removeChild(guidance.firstChild);
                }

                guidance.appendChild(stopImg);
                guidance.appendChild(humanImg);
                guidance.appendChild(crossImg);

                var stopJudge = stop;
                var humanJudge = human;
                var crossJudge = cross;

                stopImg.style.display = stopJudge == 0 ? "none" : "block";
                humanImg.style.display = humanJudge == 0 ? "none" : "block";
                crossImg.style.display = crossJudge == 0 ? "none" : "block";

                if(stopJudge==1 && humanJudge==1 && crossJudge==1){

                }else if(stopJudge==1 && humanJudge==1 && crossJudge==0){

                }else if(stopJudge==1 && humanJudge==0 && crossJudge==1){
                    crossImg.parentNode.insertBefore(crossImg, humanImg);
                }else if(stopJudge==0 && humanJudge==1 && crossJudge==1){
                    humanImg.parentNode.insertBefore(humanImg, stopImg);
                    crossImg.parentNode.insertBefore(crossImg, humanImg);
                }else if(stopJudge==1 && humanJudge==0 && crossJudge==0){

                }else if(stopJudge==0 && humanJudge==1 && crossJudge==0){
                    humanImg.parentNode.insertBefore(humanImg, stopImg);
                }else if(stopJudge==0 && humanJudge==0 && crossJudge==1){
                    crossImg.parentNode.insertBefore(crossImg, stopImg);
                }

                // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
                $(this).parents('.modal_box').fadeOut();

                // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
                var modal = '#' + $(this).attr('data-target');

                // modalResizeを実行
                modalResize();

                $(modal).fadeIn();

                // ウィンドウがリサイズされたらモーダルの位置を再計算する
                $(window).on('resize', function () {
                    modalResize();
                });
            }else if(id != "guideChangeEnter"){
                // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
                $(this).parents('.modal_box').fadeOut();

                // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
                var modal = '#' + $(this).attr('data-target');

                // modalResizeを実行
                modalResize();

                $(modal).fadeIn();

                // ウィンドウがリサイズされたらモーダルの位置を再計算する
                $(window).on('resize', function () {
                    modalResize();
                });
            }else{
                alert("1つ以上選択してください");
            }
        });
    });

    $('#guideChange').click(function () {
        stop=localStorage.getItem("stop");
        human=localStorage.getItem("human");
        cross=localStorage.getItem("cross");
        if (stop == 1) {
            $('.img1').css('border', 'solid 10px #0067c0');
        }else{
            $('.img1').css('border', 'solid 10px #000');
        }
        if (human == 1) {
            $('.img2').css('border', 'solid 10px #0067c0');
        }else{
            $('.img2').css('border', 'solid 10px #000');
        }
        if (cross == 1) {
            $('.img3').css('border', 'solid 10px #0067c0');
        }else{
            $('.img3').css('border', 'solid 10px #000');
        }
    });

    //案内変更画面
    $('.img1').click(function () {
        if (stop == 0) {
            $('.img1').css('border', 'solid 10px #0067c0');
            stop = 1;
        } else {
            $('.img1').css('border', 'solid 10px #000');
            stop = 0;
        }
    });
    $('.img2').click(function () {
        if (human == 0) {
            $('.img2').css('border', 'solid 10px #0067c0');
            human = 1;
        } else {
            $('.img2').css('border', 'solid 10px #000');
            human = 0;
        }
    });
    $('.img3').click(function () {
        if (cross == 0) {
            $('.img3').css('border', 'solid 10px #0067c0');
            cross = 1;
        } else {
            $('.img3').css('border', 'solid 10px #000');
            cross = 0;
        }
    });

    //ボイス変更画面
    $('.normal').click(function () {
        if (voiceType != 0) {
            localStorage.setItem("voiceType", 0)
            voiceType = 0;
            $('.normal').css('border', 'solid 10px #0067c0');
            $('.hiroyuki').css('border', 'solid 10px #000');
            $('.yukkuri').css('border', 'solid 10px #000');
        }
    });
    $('.hiroyuki').click(function () {
        if (voiceType != 1) {
            localStorage.setItem("voiceType", 1)
            voiceType = 1;
            $('.normal').css('border', 'solid 10px #000');
            $('.hiroyuki').css('border', 'solid 10px #0067c0');
            $('.yukkuri').css('border', 'solid 10px #000');
        }
    });
    $('.yukkuri').click(function () {
        if (voiceType != 2) {
            localStorage.setItem("voiceType", 2)
            voiceType = 2;
            $('.normal').css('border', 'solid 10px #000');
            $('.hiroyuki').css('border', 'solid 10px #000');
            $('.yukkuri').css('border', 'solid 10px #0067c0');
        }
    });

    //色変更画面
    $('#stopColorOk').click(function () {
        stopColor=$(".colorPickerStop").val();
        localStorage.setItem("stopColor", stopColor);
        $(".selectColorStop").css("border", "solid 10px "+stopColor);
        $(".colorPickerStop").val(stopColor);
    });
    $('#humanColorOk').click(function () {
        humanColor=$(".colorPickerHuman").val();
        localStorage.setItem("humanColor", humanColor);
        $(".selectColorHuman").css("border", "solid 10px "+humanColor);
        $(".colorPickerHuman").val(humanColor);
    });
    $('#crossColorOk').click(function () {
        crossColor=$(".colorPickerCross").val();
        localStorage.setItem("crossColor", crossColor);
        $(".selectColorCross").css("border", "solid 10px "+crossColor);
        $(".colorPickerCross").val(crossColor);
    });
});
