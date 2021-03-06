//将字符串转为对象
function convertStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}
let arr = [false, false, false,];
//前端正则验证
$('#email').blur(function () {
    let re = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
    if (re.test($(this).val())) {
        $(this).next().css('opacity', '0');
        $(this).css('background-color', '#ec6083');
        arr[0] = true;
    }else {
        $(this).next().css('opacity', '1');
        $(this).css('background-color', 'gray');
        arr[0] = false;
    }
})
$('#uname').blur(function () {
    let re = /^[\u4e00-\u9fa5]{2,}$/;
    if (re.test($(this).val())) {
        arr[1] = true;
        $(this).css('background-color', '#ec6083');
        $(this).next().css('opacity', '0');
    } else {
        arr[1] = false;
        $(this).css('background-color', 'gray');
        $(this).next().css('opacity', '1');
    }
})
$('#upwd').blur(function () {
    let re = /^\w+$/;
    if (re.test($(this).val())) {
        arr[2] = true;
        $(this).css('background-color', '#ec6083');
        $(this).next().css('opacity', '0');
    } else {
        arr[2] = false;
        $(this).css('background-color', 'gray');
        $(this).next().css('opacity', '1');
    }
})
$('#upwds').blur(function () {
    if ($('#upwd').val() === $('#upwds').val()) {
        $(this).css('background-color', '#ec6083');
        $(this).next().css('opacity', '0');
    } else {
        $(this).css('background-color', 'gray');
        $(this).next().css('opacity', '1');
    }
})
function sj() {
    //x上限，y下限     
    var x = 9999;
    var y = 1000;
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    $('#yzmsc').html("").append(rand);
}
$(".new_code").click(function() {
    sj();
});
$('#yzm').blur(function () {
    if ($('#yzm').val() === $('#yzmsc').html()) {
        $(this).css('background-color', '#ec6083');
        $(this).next().next().next().css('opacity', '0');
    } else {
        $(this).css('background-color', 'gray');
        $(this).next().next().next().css('opacity', '1');
    }
})
$('.sub').click(function () {
    if ($('#upwd').val() !== $('#upwds').val()) {
        alert('请保持密码一致')
    } else {
        if (arr.indexOf(false) === -1) {
            //后端验证
            let email = $('#email').val();
            let uname = $('#uname').val();
            let upwd = $('#upwd').val();
            //获取cookie
            let cookie_str = $.cookie('users') ? $.cookie('users') : '';
            //转为对象
            let cookie_obj = convertStrToObj(cookie_str);
            //判断对象中是否存在当前的用户
            if (uname in cookie_obj) {
                alert('用户名已存在！');
                return;
            } else {
                cookie_obj[uname] = upwd;
                location.href = 'login.html';
            }
            //加入cookie
            $.cookie('users', JSON.stringify(cookie_obj), { expires: 2, path: '/' });
        } else {
            $(this).next().css('opacity', '1');
        }
    }
})