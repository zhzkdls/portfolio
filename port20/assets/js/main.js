const controller = new ScrollMagic.Controller();

const tl = new TimelineMax();

tl.fromTo(
  "section.skill",
  1,
  { xPercent: 100 },
  { xPercent: 0, ease: Linear.easeNone },
  "+=1"
);

tl.fromTo(
  "section.project",
  1,
  { xPercent: 100 },
  { xPercent: 0, ease: Linear.easeNone },
  "+=1"
);

tl.fromTo(
  "section.mini",
  1,
  { yPercent: 100 },
  { yPercent: 0, ease: Linear.easeNone },
  "+=1"
);

new ScrollMagic.Scene({
  triggerElement: "#scrollPin",
  triggerHook: "onLeave",
  duration: "150%"
})
  .setPin("#scrollPin")
  .setTween(tl)
  .addTo(controller);

/*
 * -----------------------------
 * GSAP Effect
 * -----------------------------
 */

//about_title
gsap.to(".about_title", { x: "-7vw", duration: 2, ease: "expo" });

//intro
// const intro_tl = gsap.timeline();

// intro_tl.from(".intro_photo", { y: "10vw", duration: 2 });
// intro_tl.from(".intro_title", { x: "-5vw", duration: 1 }, "-=1");

/*
 *
 * follow mouse
 *
 */
