// const pageTopBtn = document.getElementById('pagetop');
// pageTopBtn.addEventListener("click", function () {
//   const me = arguments.callee;
//   const nowY = window.pageYOffset;
//   window.scrollTo(0, Math.floor(nowY * 0.8));
//   if (nowY > 0) {
//     window.setTimeout(me, 10);
//   }
// });

var toTop = document.getElementById('toTop');

window.onclick = function ()  {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.getElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// mouse cursor

// var $circle = $('.circle');

// function moveCircle(e) {
// 	TweenLite.to($circle, 0.3, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }

// $(window).on('mousemove', moveCircle);