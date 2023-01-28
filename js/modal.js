$(function () {
    console.log("a");
    //下行は連結時に消す
    // var stop = 0;
    // var human = 0;
    // var cross = 0;
    // var voiceType = 0;
    var stopColor = "#ff0000";
    var humanColor = "#00ff00";
    var crossColor = "#0000ff";


    //初期設定
       var stop=localStorage.getItem("stop");
       var human=localStorage.getItem("human");
       var cross=localStorage.getItem("cross");
       var voiceType=localStorage.getItem("voiceType");
    //    var stopColor=localStorage.getItem("stopColor");
    //    var humanColor=localStorage.getItem("humanColor");
    //    var crossColor=localStorage.getItem("crossColor");

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
        console.log("b");
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
        });

        // ウィンドウがリサイズされたらモーダルの位置を再計算する
        $(window).on('resize', function () {
            modalResize();
        });

        // .modal_switchを押すとモーダルを切り替える
        $('.modal_switch').click(function () {

            // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
            $(this).parents('.modal_box').fadeOut();

            // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
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

            $(modal).fadeIn();

            // ウィンドウがリサイズされたらモーダルの位置を再計算する
            $(window).on('resize', function () {
                modalResize();
            });
        });
    });



    //案内変更画面
    $('.img1').click(function () {
        if (stop == 0) {
            localStorage.setItem("stop", 1);
            $('.img1').css('border', 'solid 10px #0067c0');
            stop = 1;
        } else {
            localStorage.setItem("stop", 0);
            $('.img1').css('border', 'solid 10px #000');
            stop = 0;
        }
    });
    $('.img2').click(function () {
        if (human == 0) {
            localStorage.setItem("human", 1);
            $('.img2').css('border', 'solid 10px #0067c0');
            human = 1;
        } else {
            localStorage.setItem("human", 0);
            $('.img2').css('border', 'solid 10px #000');
            human = 0;
        }
    });
    $('.img3').click(function () {
        if (cross == 0) {
            localStorage.setItem("cross", 1);
            $('.img3').css('border', 'solid 10px #0067c0');
            cross = 1;
        } else {
            localStorage.setItem("cross", 0);
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
        stopColor=$("#stopColorOk").val();
        localStorage.setItem("stopColor", stopColor);
    });
    $('#humanColorOk').click(function () {
        humanColor=$("#humanColorOk").val();
        localStorage.setItem("humanColor", humanColor);
    });
    $('#crossColorOk').click(function () {
        crossColor=$("#crossColorOk").val();
        localStorage.setItem("crossColor", crossColor);
    });
});
