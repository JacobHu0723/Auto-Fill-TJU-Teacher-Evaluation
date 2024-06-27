let btn_id = ['option_451_4', 'option_442_4', 'option_453_4', 'option_496_4', 'option_455_4', 'option_498_4', 'option_499_4', 'option_449_4', 'option_500_4', 'option_502_4'];
for (var i = 0; i < 10; i++) {
    const btn = document.getElementById(btn_id[i]);
    btn.click();
}
document.getElementsByClassName('answer answer-textarea')[0].value = '学到了很多东西';
document.getElementsByClassName('answer answer-textarea')[1].value = '无';
const btn_sub = document.getElementById("sub");
setTimeout("btn_sub.click();", 500 )
