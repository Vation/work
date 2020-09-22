//= require libs/pure-1.0.0/menus.js
//= require libs/axios-0.16.2/axios.min.js
//= require libs/vuelidate-0.6.1/vuelidate.min.js
//= require libs/vuelidate-0.6.1/validators.min.js
//= require libs/vue-countdown.min.js
//= require_self


// rails csrf 支持，需要将Rails的CSRF Token 放入 Axios Header 中
// document.getElementsByName('csrf-token')[0].getAttribute('content')
var csrf_token = document.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.common['X-CSRF-Token'] = csrf_token
axios.defaults.headers.common['Accept'] = 'application/json'


// 表单校验 https://github.com/monterail/vuelidate
Vue.use(window.vuelidate.default)


// 倒计时
Vue.component('countdown', VueCountdown);


// 判断IE版本: https://github.com/nioteam/jquery-plugins/issues/12
var isIE = function(ver){
  var b = document.createElement('b')
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
  return b.getElementsByTagName('i').length === 1
}
if(isIE(6) || isIE(7) || isIE(8)){
  alert("您的浏览器版本过低，无法支持，请尝试更换其他浏览器")
}


// 回到顶部按钮
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("gotop").style.display = "block";
  } else {
    document.getElementById("gotop").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}