define(["require"],function(e){(function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=e})();var t=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,n=navigator.userAgent.toLowerCase().indexOf("android")>-1;return{force_redraw:function(e){t&&n&&(rafId=window.requestAnimationFrame(function(){var t=document.createTextNode(" ");e.appendChild(t),t.parentNode.removeChild(t),window.mozCancelRequestAnimationFrame(rafId)}))}}})