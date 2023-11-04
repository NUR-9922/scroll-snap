// smooth scroll 
gsap.registerPlugin(ScrollSmoother)
ScrollSmoother.create({
  smooth: 1,
  effects: true,
  wrapper: ".mein",
  content: ".content",

})
// page 1 gsap 
function pageOneleft() {
  gsap.from("nav , nav .logo, nav ul li", {
    y: -100,
    duration: 1,
    stagger: 0.2
  })
  gsap.to("#page-1 .center-part .left ", {
    y: 200,
    width: "70%",
    delay: 1.5,
    duration: 1,
    stagger: 0.2,
  })

  gsap.to("#page-1 .center-part .left h1 span", {
    fontSize: "60px",
    opacity: 1,
    delay: 1.5,
    duration: 1,
    stagger: 0.2,
  })
  gsap.to("#page-1 .center-part .left #h1 span", {
    delay: 3,
    fontSize: "50px",
    duration: 1,
    stagger: 0.2,
  });


  gsap.to("#page-1 .center-part .left ", {
    left: "0",
    top: "20%",
    width: "auto",
    transform: "translate(0%,0%)",
    width: "60%",
    delay: 5,
    duration: 1,
    stagger: 0.2,
    onComplete: function () {
      pageOneRight()
    }
  })

  gsap.to("#page-1 .center-part  .left .h2-parent h2 , #page-1 .center-part  .left .h2-parent h2 span", {
    marginTop: "0%",
    opacity: 1,
    delay: 6,
    duration: 1.5,
    stagger: 0.2,
  })
  gsap.to("#page-1 .center-part .left p span", {
    duration: .5,
    opacity: .5,
    delay: 6.5,
    stagger: 0.1,
  })


  gsap.to("#page-1 .center-part .left #h1 .span-1", {
    color: "yellow",
    delay: 7,
    duration: 0.5,
  })

}
pageOneleft()

// pageOneRight
function pageOneRight() {
  gsap.from("#page-1 .center-part .right .image-container", {
    opacity: 1,
  })
  gsap.from("#page-1 .center-part .right .image-container", {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger: 0.3
  })
}



// page 2 gsap 
// page 2 dot 
document.getElementById("page-2").addEventListener("mousemove", function (event) {
  const x = event.clientX;
  const y = event.clientY;
  let dot = document.getElementById("dot");
  dot.style.transform = `translateX(${x - 650}px) translateY(${y - 300}px)`;
});
document.getElementById("page-2").addEventListener("mouseleave", function () {
  let dot = document.getElementById("dot");
  dot.style.scale = "0";
});
document.getElementById("page-2").addEventListener("mouseenter", function () {
  let dot = document.getElementById("dot");
  dot.style.scale = "1";
});


// page 2 gsap 
gsap.to('#page-2', {
  duration: 1,
  color: "#fff",
  ease: "power3",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page-2",
    start: "20% 70%",
    end: "80% 80%",
    toggleActions: "restart",
    scrub: 2,
  }
})

gsap.to('.row-1 h2', {
  scale: 2,
  opacity: 1,
  x: 800,
  scrollTrigger: {
    trigger: "#page-2",
    start: "20% 70%",
    end: "80% 80%",
    scrub: 4,
  }
})

gsap.to('.row-3 h2', {
  scale: 2,
  opacity: 1,
  x: -800,
  scrollTrigger: {
    trigger: "#page-2",
    start: "20% 70%",
    end: "80% 80%",
    scrub: 4,
  }
})


gsap.from(".row-2 h3", {
  opacity: 0,
  duration: 1,
  x: -800,
  color: "#fff",
  scrollTrigger: {
    trigger: "#page-2",
    start: "20% 70%",
    end: "80% 80%",

  }
})
gsap.from(".row-2 .img-container", {
  opacity: 0,
  delay: 1,
  duration: 1,
  color: "#fff",
  scrollTrigger: {
    trigger: "#page-2",
    start: "20% 70%",
    end: "80% 80%",
  }
})



// page 3 gsap 
// Get the races element
gsap.to("#page-3 .overley .box", {
  duration: 1,
  borderRadius: 5,
  scrollTrigger: {
    trigger: "#page-3",
    start: "20% 70%",
    end: "80% 80%",
  }
})

gsap.to("#page-3 .overley .box", {
  width: "300px",
  height: "300px",
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#page-3",
    start: "20% 70%",
    end: "80% 80%",
  }
})

gsap.to("#page-3 .overley .box p", {
  display: "block",
  delay: 2,
  scale: .9,
  duration: .5,
  scrollTrigger: {
    trigger: "#page-3",
    start: "20% 70%",
    end: "80% 80%",
  }
})

document.getElementById("overley-box").addEventListener("mouseover", function () {
  gsap.to("#page-3 video", {
    duration: .5,
    opacity: 1,
  })
})

document.getElementById("overley-box").addEventListener("mouseleave", function () {
  gsap.to("#page-3 video", {
    width: "100%",
    height: "100%",
    duration: .5,
    opacity: 0,
  })
})


// page 4 gsap 


function pageFourAni() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-4",
      start: "50% 50%",
      end: "100% 50%",
      scrub: 3,
      pin: true,

    },
  });

  tl.to(".page-4-top", {
    y: -400,
  }, 'a')
    .to(".page-4-bottom", {
      y: 500,

    }, 'a')
    .to(".page-4-center-left, .page-4-center-left p ", {
      marginLeft: '0px',
      duration: 1,
      opacity: 1,
      stagger: 0.5
    }, 'a')
    .to(".page-4-center-right", {
      marginLeft: '-700px',
      duration: 1,
      opacity: 1,
    }, 'a')
}

pageFourAni()


// page 5 ani 
function PageFiveAni() {
  gsap.from(".page-5-overley-left,.page-5-overley-right", {
    opacity: 0,
    duration: 1,
    y: -1000,
    scrollTrigger: {
      trigger: ".page-5",
      start: "10% 50%",
      end: "10% 50%",
    },

  })

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-5",
      start: "50% 50%",
      end: "100% 50%",
      scrub: 5,
      pin: true,
      
    },
  });

  tl.to(".page-5-overley-right .row-1", {
    y: -1100,

  }, 'a')
  tl.to(".page-5-overley-2", {
    y: -3120,
    transform: "scale(1)",
  
  }, 'a');

gsap.from(".page-5-overley-2",{
  delay:2 ,
  onComplete:pageSixAni,
})

}
PageFiveAni();

function pageSixAni() {
document.querySelector(".page-6").style.display = "flex"
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-6",
      start: "70% 70%",
      end: "100% -100",
      scrub: 5,
      pin: true,
    },
  });

  function onInnerWidthUpdate() {
    const lineWidth = document.getElementById("page-6-row-2-line-inner").offsetWidth;
    var backgroundWidthForTextContent = (lineWidth * 0.1);
    document.getElementById("page-6-row-1-round").style.background = `conic-gradient(darkred ${backgroundWidthForTextContent}%, 0, rgb(150, 113, 113))`;
    document.getElementById("row-1-round-inner-font").textContent = Math.floor(backgroundWidthForTextContent);
  }



  tl.to(".page-6-row-2 .front-h1", {
    scale: 200,
  }, "a");
  tl.to(".page-6-row-2 .front-h1", {
    y: -500,
  });

  tl.to(".row-1-line .inner", {
    width: "1000",
    onUpdate: onInnerWidthUpdate,
  }, "a");

  tl.to(".page-6-row-2 .page-6-row-2-back h1", {
    marginTop: "-100px",
    transform: "scale(2)",
    delay: 0.5,
    visibility: "visible",
  }, "a");
}


// pageSixAni()