const button = document.querySelector(".btn-link");
const title = document.querySelector(".btn-title");
const ripple = document.querySelectorAll(".btn-ripple");
function loadAnimation() {
  const tl = gsap.timeline();
  tl.set(
    button,
    {
      willChange: "transform",
    },
    0
  );

  tl.from(
    button,
    {
      opacity: 0,
      duration: 0.1,
    },
    0
  );

  tl.from(
    button,
    {
      scaleX: 0.3,
      duration: 1.6,
      ease: "elastic.out(0.4, 0.3)",
      force3D: true,
    },
    0
  );
  tl.from(
    title,
    {
      opacity: 0,
      duration: 0.2,
    },
    0.2
  );
  tl.set(title, {
    willChange: "auto",
  });
}

function hoverAnimation() {
  const t1 = gsap.timeline();
  t1.set(ripple, {
    display: "block",
  });
  t1.set(button, {
    willChange: "transform",
    scale: 1,
  });
  t1.to(
    button,
    {
      scaleX: 1.03,
      scaleY: 0.98,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      force3D: !0,
    },
    0
  );
  t1.set(button, {
    willChange: "auto",
  });

  t1.set(ripple, {
    willChange: "transform",
  });
  t1.fromTo(
    ripple,
    {
      xPercent: -100,
    },
    {
      xPercent: 0,
      stagger: {
        each: 0.2,
      },
      duration: 1,
      ease: "expo.out",
      force3D: !0,
    },
    0
  );
  t1.set(ripple, {
    willChange: "auto",
  });
}
function hoverAnimationReset() {
  const t2 = gsap.timeline();

  t2.set(
    button,
    {
      scaleX: 1.03,
      scaleY: 0.98,
      willChange: "transform",
    },
    0
  );
  t2.to(
    button,
    {
      scaleX: 1,
      scaleY: 1,
      ease: "elastic.out(1, 0.3)",
      duration: 1,
      force3D: !0,
    },
    0
  );
  t2.set(button, {
    willChange: "auto",
  });

  t2.set(
    ripple,
    {
      willChange: "transform",
      xPercent: 0,
    },
    0
  );
  t2.to(
    ripple,
    {
      xPercent: 100,
      stagger: {
        each: 0.2,
        from: "end",
      },
      duration: 1,
      ease: "expo.out",
      immediateRender: !1,
      force3D: !0,
    },
    0
  );
  t2.set(ripple, {
    willChange: "auto",
  });
}
window.addEventListener("load", loadAnimation);
button.addEventListener("mouseenter", hoverAnimation);
button.addEventListener("mouseleave", hoverAnimationReset);

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "170px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -7%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.set("#Cbse img, #cbse-text", {
  y: 50, // Move down by 50px initially
  opacity: 0, // Initially invisible
});
gsap.to("#Cbse img,#cbse-text", {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#Cbse",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.set(".card", {
  opacity: 0, // Initially invisible
});
gsap.to(".card", {
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#cards-container",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.set("#coder", {
  y: 50,
  opacity: 0, // Initially invisible
});
gsap.to("#coder", {
  y: 0,
  opacity: 1,
  duration: 2,

  stagger: 0.4,
  scrollTrigger: {
    trigger: "#offer",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.set("#domains", {
  y: 50,
  opacity: 0, // Initially invisible
});
gsap.to("#domains", {
  y: 0,
  opacity: 1,
  duration: 2,

  stagger: 0.4,
  scrollTrigger: {
    trigger: "#teach",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.from(".colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});
gsap.from(".colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".colon2",
    scroll: "body",
    //markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from("#a, #b, #c, #d, #e, #f", {
  opacity: 1,
  rotation: 90,
  duration: 5,
  scrollTrigger: {
    trigger: "#follow",
    scroller: "body",
    start: "top 10%",
    end: "top 100%",
    scrub: 3,
    // markers: true,
  },
});
gsap.set(".grey img", {
  y: 50,
  opacity: 0, // Initially invisible
});
gsap.to(".grey img", {
  y: 0,
  opacity: 1,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#deliver",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.set("#use img", {
  y: 50,
  opacity: 0, // Initially invisible
});
gsap.to("#use img", {
  y: 0,
  opacity: 1,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#use",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.set("#approach img", {
  y: 50,
  opacity: 0, // Initially invisible
});
gsap.to("#approach img", {
  y: 0,
  opacity: 1,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#approach",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 35%",
    scrub: 2,
  },
});
const container = document.querySelector(".image-container");

// Clone all the images to create a seamless loop effect
const images = document.querySelectorAll(".image-container img");
images.forEach((img) => {
  const clone = img.cloneNode(true);
  container.appendChild(clone);
});

let scrollSpeed = 1; // Speed of the scroll (higher means faster)

function startScroll() {
  container.style.transform = `translateX(-${scrollSpeed}px)`;
  scrollSpeed += 1; // Increment to create continuous movement

  // Reset position when the first set of images has completely scrolled
  if (scrollSpeed > container.scrollWidth / 2) {
    scrollSpeed = 1;
  }

  requestAnimationFrame(startScroll); // Loop the animation
}

// Start the animation
startScroll();
