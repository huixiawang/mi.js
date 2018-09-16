window.onload = function () {
    // 为你推荐
    let button1 = document.querySelector(".for-you .box1");
    let button2 = document.querySelector(".for-you .box2");
    // let container=document.querySelector(".for-you .container");
    let ul = document.querySelector(".for-you ul");
    let w = parseInt(getComputedStyle(ul, null).width) / 3;
    let times = 0;
    console.log(ul);
    button1.onclick = function () {
        times++;
        if (times == 3) {
            times = 2;
        }
        ul.style.transform = `translate(${(-w * times)}px)`;
    }
    button2.onclick = function () {
        times--;
        if (times == -1) {
            times = 0;
        }
        ul.style.transform = `translate(${(-w * times)}px)`;
    }

    // 开始闪购
    let button = document.querySelectorAll(".xm-flashover .box-hd .con");
    // let container=document.querySelector(".for-you .container");
    let ull = document.querySelector(".xm-flashover .box-bd ul");
    let ws = parseInt(getComputedStyle(ull, null).width) / 3;
    let time = 0;
    button[0].onclick = function () {
        time++;
        if (time == 2) {
            time = 1;
        }
        ull.style.transform = `translate(${(-ws * time)}px)`;
    }
    button[1].onclick = function () {
        time--;
        if (time == -1) {
            time = 0;
        }
        ull.style.transform = `translate(${(-ws * time)}px)`;
    }

    // 顶部banner轮播
    let imgs = document.querySelectorAll(".banner .picture img");
    let dots = document.querySelectorAll(".banner ol li");
    let banner = document.querySelector(".banner .container");
    let leftBtn = document.querySelector(".banner .direction-left");
    let rightBtn = document.querySelector(".banner .direction-right")
    console.log(imgs);
    let t = setInterval(move, 2000);
    let now = 0;
    let next = 0;
    let flag = true;
    imgs[0].style.opacity = 1;
    dots[0].classList.add("active");

    function move() {
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        animate(imgs[now], {opacity: 0});
        animate(imgs[next], {opacity: 1}, function () {
            flag = true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now = next;
    }

    function movel() {
        next--;
        if (next == -1) {
            next = imgs.length - 1;
        }
        animate(imgs[now], {opacity: 0});
        animate(imgs[next], {opacity: 1}, function () {
            flag = true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now = next;
    }

    leftBtn.onclick = function () {
        if (flag == false) {
            return;
        }
        flag = false;
        movel();
    }
    rightBtn.onclick = function () {
        if (flag == false) {
            return;
        }
        flag = false;
        move();
    }
    banner.onmouseenter = function () {
        clearInterval(t);
    }
    banner.onmouseleave = function () {
        t = setInterval(move, 2000);
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = function () {
            for (let j = 0; j < dots.length; j++) {
                imgs[j].style.opacity = 0;
                dots[j].classList.remove("active");
            }
            imgs[i].style.opacity = 1;
            dots[i].classList.add("active");
            now = next = i;
        }
    }

    //////////////////////////////////////////////
    // 内容轮播图
    let lis = document.querySelector(".content ul li");
    let hook = document.querySelectorAll(".content .booh .first");
    let dot1 = document.querySelectorAll(".content ul li .pages .ctrile.aa");
    let leftb = document.querySelector(".content ul li .leftb.aa");
    let rightb = document.querySelector(".content ul li .rightb.aa");
    let widtha = parseInt(getComputedStyle(lis, null).width);
    console.log(hook, dot1, leftb, rightb, widtha);

    function frist(hook, dot1, leftb, rightb, widtha) {
        hook[0].style.left = 0;
        dot1[0].classList.add("active");
        let p_flag = true;
        let current = down = 0;

        // let tt=setInterval(moveLeft,2000);
        function moveR() {
            down++;
            if (down == hook.length) {
                down = 0;
            }
            hook[down].style.left = `${widtha}px`;
            animate(hook[current], {left: -widtha});
            animate(hook[down], {left: 0}, function () {
                p_flag = true;
            });
            dot1[current].classList.remove("active");
            dot1[down].classList.add("active");
            current = down;
        }

        function moveLeft() {
            down--;
            if (down == -1) {
                down = hook.length - 1;
            }
            hook[down].style.left = `-${widtha}px`;
            animate(hook[current], {left: widtha});
            animate(hook[down], {left: 0}, function () {
                p_flag = true;
            });
            dot1[current].classList.remove("active");
            dot1[down].classList.add("active");
            current = down;
        }

        leftb.onclick = function () {
            if (p_flag == false) {
                return;
            }
            p_flag = false;
            if (down == 0) {
                p_flag = true;
                return;
            }
            moveLeft();
        };
        rightb.onclick = function () {
            if (p_flag == false) {
                return;
            }
            p_flag = false;
            if (down == hook.length - 1) {
                p_flag = true;
                return;
            }
            moveR();
        };
        for (let i = 0; i < dot1.length; i++) {
            dot1[i].onclick = function () {
                for (let j = 0; j < dot1.length; j++) {
                    dot1[j].classList.remove("active");
                    hook[j].style.left = `${widtha}px`;
                }
                dot1[i].classList.add("active");
                hook[i].style.left = 0;
                current = down = i;
            }
        }
    }

    frist(hook, dot1, leftb, rightb, widtha);
    let hook1 = document.querySelectorAll(".content .hoop .first1");
    let dot2 = document.querySelectorAll(".content ul li .pages.a .ctrile.a");
    let leftb1 = document.querySelector(".content ul li .leftb.a");
    let rightb1 = document.querySelector(".content ul li .rightb.a");
    frist(hook1, dot2, leftb1, rightb1, widtha);
    let hook2 = document.querySelectorAll(".content .hook1 .first2");
    let dot3 = document.querySelectorAll(".content ul li .ctrile.x");
    let leftb2 = document.querySelector(".content ul li .leftb.x");
    let rightb2 = document.querySelector(".content ul li .rightb.x");
    frist(hook2, dot3, leftb2, rightb2, widtha);
    let hook3 = document.querySelectorAll(".content .hoop1 .first3");
    let dot4 = document.querySelectorAll(".content ul li .ctrile.c");
    let leftb3 = document.querySelector(".content ul li .leftb.c");
    let rightb3 = document.querySelector(".content ul li .rightb.c");
    frist(hook3, dot4, leftb3, rightb3, widtha);


    // 家电选项卡
    let num = document.querySelectorAll(".tv .title ul li");
    let son = document.querySelectorAll(".tv ul .right");
    console.log(num, son);
    for (let i = 0; i < num.length; i++) {
        num[i].onmouseover = function () {
            for (let j = 0; j < num.length; j++) {
                son[j].style.display = "none";
                num[j].classList.remove("active");
            }
            son[i].style.display = "block";
            num[i].classList.add("active");
        }
    }

    // 导航选项卡
    let tt = document.querySelectorAll(".top-nav ul li a");
    let white = document.querySelectorAll(".top-nav .white-box");
    console.log(tt);
    for (let i = 0; i < tt.length; i++) {
        tt[i].onmouseenter = function () {
            for (let j = 0; j < tt.length; j++) {
                white[j].style.height = `${230}px`;
                white[j].style.zIndex = 1;
                tt[j].classList.remove("active");
                white[j].style.borderTop = "1px solid #e0e0e0";
            }
            white[i].style.height = `${230}px`;
            white[i].style.borderTop = "1px solid #e0e0e0";
            tt[i].classList.add("active");
            white[i].style.zIndex = 999;
        }
        tt[i].onmouseleave = function () {
            for (let i = 0; i < tt.length; i++) {
                white[i].style.height = 0;
                tt[i].classList.remove("active");
                white[i].style.borderTop = "none";
            }
        }
    }

    // 返回顶部
    let backs = document.querySelector(".bartop ul li.back");
    console.log(backs);
    backs.style.display = "none";
    backs.onclick = function () {
        animate(document.body, {scrollTop: 0});
        animate(document.documentElement, {scrollTop: 0});
    }
    document.onscroll = function () {
        if (document.body.scrollTop || document.documentElement.scrollTop >= 1000) {
            backs.style.display = "block";
        } else {
            backs.style.display = "none";
        }
    }

}
