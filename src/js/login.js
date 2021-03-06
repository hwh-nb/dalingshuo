//将字符串转为对象
function convertStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}
let arr = [false,false];
//前端正则验证
$('#uname').blur(function(){
    let re = /^[\u4e00-\u9fa5]{2,}$/;
    if (re.test($(this).val())) {
        arr[0] = true;
        $(this).css('background-color', '#ec6083');
        $(this).next().css('opacity', '0');
    } else {
        arr[0] = false;
        $(this).css('background-color', 'gray');
        $(this).next().css('opacity', '1');
    }
})
$('#upwd').blur(function(){
    let re = /^\w+$/;
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
$('.sub').click(function(){
    if(arr.indexOf(false) === -1){
        //后端 检测 
        let uname = $('#uname').val();
        let upwd = $('#upwd').val();
        //获取cookie
        let cookie_str = $.cookie('users') ? $.cookie('users') : '';
        //转对象
        let cookie_obj = convertStrToObj(cookie_str);
        console.log(cookie_obj);
        // 判断是否存在 
        if(uname in cookie_obj){
            //判断密码是否正确
            if(upwd == cookie_obj[uname]){
                alert('登录成功！');
                location.href = 'product.html';
            }else{
                alert('密码错误！');
            }
        }else{
            alert('用户名不存在！');
        }
    }else{
        alert('信息不完整！');
    }
})
$('#go').click(()=>{
    location.href = 'registor.html';
})			