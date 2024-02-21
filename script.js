const cursr = document.querySelector(".curs");
const cursrBlr = document.querySelector(".curs-blr");
document.addEventListener("mousemove",function (dets) {
	cursr.style.left = dets.x - 7 + "px";
	cursr.style.top = dets.y - 7 + "px";
	cursrBlr.style.left = dets.x - 125 + "px";
	cursrBlr.style.top = dets.y - 125 + "px";
})
const allh4 = document.querySelectorAll(".nav h4");
allh4.forEach(function (elem) {
	elem.addEventListener("mouseenter",function () {
		cursr.style.scale = 3;
		cursr.style.backgroundColor = "transparent";
		cursr.style.border = "1px solid #fff";
	})
	elem.addEventListener("mouseleave",function () {
		cursr.style.scale = 1;
		cursr.style.backgroundColor = "#91B508";
		cursr.style.border = "1px solid #91B508";
	})
})
gsap.to(".nav",{
	backgroundColor: "black",
	duration: 1,
	height: "100px",
	scrollTrigger: {
		trigger: ".nav",
		scroller: "body",
		start: "top -10%",
		end: "top -15%",
		scrub: 2
	}
})
gsap.to(".main",{
	backgroundColor: "black",
	scrollTrigger: {
		trigger: ".main",
		scroller: "body",
		start: "top -25%",
		end: "top -100%",
		scrub: 2
	}
})
gsap.to(".page-3 .colon1",{
	top: 150,
	left: 150,
	duration: 3,
	scrollTrigger: {
		trigger: ".page-3 .colon1",
		scroller: "body",
		scrub: 2
	}
})
gsap.to(".page-3 .colon2",{
	bottom: 150,
	right: 150,
	duration: 3,
	scrollTrigger: {
		trigger: ".page-3 .colon2",
		scroller: "body",
		scrub: 2
	}
})