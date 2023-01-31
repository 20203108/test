$(function () {
    // $('#modalArea').fadeIn();
    // $(".back").hide();

    var teishi=0;
    var human=0;
    var oudan=0;

    // $("#img1").click(function(){
    //     if($("#choiceBack1C").is(":hidden")){
    //         // $("#choiceBack1C").show();
    //         teishi=1;
    //     }else if($("#choiceBack1C").is(":visible")){
    //         // $("#choiceBack1C").hide();
    //         teishi=0;
    //     }
    // });

    // $("#img2").click(function(){
    //     if($("#choiceBack2C").is(":hidden")){
    //         $("#choiceBack2C").show();
    //         human=1;
    //     }else if($("#choiceBack2C").is(":visible")){
    //         $("#choiceBack2C").hide();
    //         human=0;
    //     }
    // });

    // $("#img3").click(function(){
    //     if($("#choiceBack3C").is(":hidden")){
    //         $("#choiceBack3C").show();
    //         oudan=1;
    //     }else if($("#choiceBack3C").is(":visible")){
    //         $("#choiceBack3C").hide();
    //         oudan=0;
    //     }
    // });

    // var normal=1;
    // var hiroyuki=0;
    // var yukkuri=0;

    // $("#choiceBack2V").hide();
    // $("#choiceBack3V").hide();

    // $("#choice1V").click(function(){
    //     normal=1;
    //     hiroyuki=0;
    //     yukkuri=0;
    //     if($("#choiceBack1V").is(":hidden")){
    //         $("#choiceBack1V").show();
    //         $("#choiceBack2V").hide();
    //         $("#choiceBack3V").hide();
    //     }
    // });

    // $("#choice2V").click(function(){
    //     normal=0;
    //     hiroyuki=1;
    //     yukkuri=0;
    //     if($("#choiceBack2V").is(":hidden")){
    //         $("#choiceBack1V").hide();
    //         $("#choiceBack2V").show();
    //         $("#choiceBack3V").hide();
    //     }
    // });

    // $("#choice3V").click(function(){
    //     normal=0;
    //     hiroyuki=0;
    //     yukkuri=1;
    //     if($("#choiceBack3V").is(":hidden")){
    //         $("#choiceBack1V").hide();
    //         $("#choiceBack2V").hide();
    //         $("#choiceBack3V").show();
    //     }
    // });

    $("#endBtn").click(function(){
        teishi=0;
        human=0;
        oudan=0;
        normal=1;
        hiroyuki=0;
        yukkuri=0;
        $(".back").hide();
        $("#choiceBack1V").show();
        $("#choiceBack2V").hide();
        $("#choiceBack3V").hide();
        $('#modalArea').fadeOut();
    });

    // $("#startBtn").click(function(){
    //     if(teishi==0 && human==0 && oudan==0){
    //         alert("1つ以上選択してください。");
    //     }else{
    //         //ボイス判別
    //         if(normal==1){
    //             localStorage.setItem("voiceType", 0);
    //         }else if(hiroyuki==1){
    //             localStorage.setItem("voiceType", 1);
    //         }else if(yukkuri==1){
    //             localStorage.setItem("voiceType", 2);
    //         }
    //         localStorage.setItem("stop", teishi);
    //         localStorage.setItem("cross", oudan);
    //         localStorage.setItem("human", human);
    //         $('.modalBg').fadeOut();
    //         $('.modalArea').fadeOut(200, function () {
    //             $('.modalArea').remove();
    //         });
    //         // window.location.href = "./index.html";
    // }
    // });




    //初期設定
    var stop=localStorage.getItem("stop");
    var human=localStorage.getItem("human");
    var cross=localStorage.getItem("cross");
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
    if (stop == 1) {
        $('.img1').css('border', 'solid 10px #0067c0');
    }
    if (human == 1) {
        $('.img2').css('border', 'solid 10px #0067c0');
    }
    if (cross == 1) {
        $('.img3').css('border', 'solid 10px #0067c0');
    }
    if (voiceType == 0) {
        $('.normal').css('border', 'solid 10px #0067c0');
    } else if (voiceType == 1) {
        $('.hiroyuki').css('border', 'solid 10px #0067c0');
    } else if (voiceType == 2) {
        $('.yukkuri').css('border', 'solid 10px #0067c0');
    }


    // 「.setting」をクリックしたらモーダルと黒い背景を表示する
    $('.setting').click(function () {
        const video = document.getElementById("video");
        video.pause();

        // 黒い背景をbody内に追加
        $('body').append('<div class="modal_bg"></div>');
        $('.modal_bg').fadeIn();

        // data-targetの内容をIDにしてmodalに代入
        var modal = '#' + $(this).attr('data-target');

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
            video.play();
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
            if(stop==1 || human==1 || cross==1){

                if(id == "guideChange"){
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
            }else{
                alert("1つ以上選択してください");
            }
        });
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
        $(".colorPickerStop").val(stopColor);
    });
    $('#humanColorOk').click(function () {
        humanColor=$(".colorPickerHuman").val();
        localStorage.setItem("humanColor", humanColor);
        $(".colorPickerHuman").val(humanColor);
    });
    $('#crossColorOk').click(function () {
        crossColor=$(".colorPickerCross").val();
        localStorage.setItem("crossColor", crossColor);
        $(".colorPickerCross").val(crossColor);
    });
});
