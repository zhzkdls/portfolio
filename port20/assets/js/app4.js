//text split function

const textArraySplit = textDocument => {
  const textArray = Array.prototype.slice.call(textDocument);
  const textStr = textArray.map(text => text.textContent);
  const textSplit = textStr.map(text => text.split(""));

  textArray.map(text => (text.textContent = ""));

  textSplit.map((text, index) =>
    text.map(split => {
      textArray[index].innerHTML += `<span>${split}</span>`;
    })
  );
};

//curser Effect

const curser = document.querySelector(".curser");
const follow = document.querySelector(".curser_follow");

const moveCircle = e => {
  gsap.to(curser, 0.3, { x: e.clientX, y: e.clientY });
  gsap.to(follow, 0.7, { x: e.clientX, y: e.clientY });
};

window.addEventListener("mousemove", moveCircle);

/*
 *
 * GSAP Animation
 *
 *
 */

const controller = new ScrollMagic.Controller();

/*
 *
 *  Header Animation
 *
 *
 */

const header = document.querySelector(".header");

const headerColor = type => {
  const headerTl = gsap.timeline();

  switch (type) {
    case "onDesktop": {
      headerTl.to(header, 0.3, {
        backgroundColor: "transparent",
        ease: Power1.easeInOut
      });
      break;
    }
    case "onMobile": {
      headerTl.to(header, 0.3, {
        backgroundColor: "#1c1c1c",
        ease: Power1.easeInOut
      });
      break;
    }
  }
};

const headerSlideDown = type => {
  const headerTl = gsap.timeline();

  switch (type) {
    case "onload": {
      headerTl.from(
        header,
        1.5,
        {
          y: "-10vh",
          ease: Power2.easeInOut
        },
        "+=1.5"
      );
      break;
    }
    case "scrollTop": {
      headerTl.to(header, 0.7, {
        y: "0",
        backgroundColor: "transparent",
        ease: Power2.easeInOut
      });
      break;
    }
    case "scrollUp": {
      headerTl.to(header, 0.5, {
        y: "0",
        backgroundColor: "rgba(255,255,255,0.5)",
        ease: Power2.easeInOut
      });
      break;
    }
    case "toMoblie": {
      headerTl.to(header, 0.7, {
        y: "0",
        backgroundColor: "#1c1c1c",
        ease: Power2.easeInOut
      });
      break;
    }
  }
};

const headerSlideUp = type => {
  const headerTl = gsap.timeline();

  switch (type) {
    case "onload": {
      headerTl.fromTo(
        header,
        1,
        { y: "-10vh" },
        {
          y: "-10vh",
          ease: Power2.easeInOut
        }
      );
      break;
    }
    case "scrollDown": {
      headerTl.to(header, 0.3, {
        y: "-10vh",
        backgroundColor: "transparent",
        ease: Power2.easeInOut
      });
      break;
    }
  }
};

/*
 *
 *  Profile Animation
 *
 *
 */
const profile = document.querySelector(".profile");
const profileBg = profile.querySelector(".profile_slider");
const profilePhoto = profile.querySelector(".profile_photo");
const profileTitleBox = profile.querySelector(".profile_title_box");
const profileTitle = profileTitleBox.querySelectorAll(".title span");
const profileDesc = profileTitleBox.querySelector(".desc");
const profileMobile = profileTitleBox.querySelector(".mobile_desc");

textArraySplit(profileTitle);

//profile Timeline

const profileOnload = () => {
  const profileTl = gsap.timeline();

  profileTl
    .fromTo(
      //photo animation
      profilePhoto,
      1.5,
      { opacity: 0, scale: "1.3" },
      { opacity: 1, scale: "1", ease: Power2.easeInOut }
    )
    .fromTo(
      //bg animation
      profileBg,
      1.5,
      { width: "0%" },
      { width: "100%", ease: Power2.easeInOut }
    )
    .fromTo(
      //title box animation
      profileTitleBox,
      1.5,
      { width: "0%", padding: "0%" },
      { width: "100%", padding: "10% 5%", ease: Power2.easeInOut },
      "-=1.5"
    )
    .fromTo(
      //title animation1
      profileTitle[0].children,
      1,
      { scale: 1.2, opacity: 0, display: "inline-block" },
      { scale: 1, opacity: 1, stagger: 0.05, ease: Power2.easeInOut }
    )
    .fromTo(
      //title animation2
      profileTitle[1].children,
      1,
      { scale: 1.2, opacity: 0, display: "inline-block" },
      { scale: 1, opacity: 1, stagger: 0.05, ease: Power2.easeInOut },
      "-=0.7"
    )

    .fromTo(
      profileDesc,
      1,
      { x: -30, opacity: 0, display: "inline-block" },
      { x: 0, opacity: 1, ease: Power2.easeInOut },
      "-=1"
    );
};
//profile photo location

const profilePhotoTl = gsap.timeline();

profilePhotoTl.to(profilePhoto, {
  y: "-30vh"
});

const profileScroll = new ScrollMagic.Scene({
  triggerElement: profile,
  triggerHook: 0,
  duration: "70%"
})
  .setPin(profile)
  .setTween(profilePhotoTl)
  .addIndicators({
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "blue",
    indent: 40
  })
  .addTo(controller);

// about photo hover effect
const aboutPhoto = document.querySelector(".about_photo");
const aboutText = document.querySelector(".about_text");
const aboutDesc = aboutText.querySelector(".about_desc");

new hoverEffect({
  parent: aboutPhoto,
  intensity: 0.2,
  image1: "./assets/img/about.jpg",
  image2: "./assets/img/about2.jpg",
  displacementImage: "./assets/img/displacement/4.png",
  speedIn: 1,
  speedOut: 1,
  easing: Power1.easeInOut
});

//about text split

const aboutTitle = aboutText.querySelectorAll(".about_title span");

textArraySplit(aboutTitle);

//about animation
const aboutTitleTl = gsap.timeline();

aboutTitleTl
  .fromTo(
    aboutTitle[0].children,
    0.7,
    {
      y: 20,
      opacity: 0,
      display: "inline-block"
    },
    { y: 0, opacity: 1, stagger: 0.03, ease: Power2.Out }
  )
  .fromTo(
    aboutTitle[1].children,
    0.7,
    {
      y: 20,
      opacity: 0,
      display: "inline-block"
    },
    { y: 0, opacity: 1, stagger: 0.03, ease: Power2.Out },
    "-=0.5"
  );

const aboutDescTl = gsap.timeline();

aboutDescTl
  .fromTo(
    aboutDesc,
    1.5,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, ease: Power2.Out },
    "-=1"
  )
  .from(
    aboutPhoto,
    1.5,
    {
      opacity: 0,
      x: "-41.4vw"
    },
    "-=1.5"
  );

const aboutScroll1 = new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.75,
  duration: 0
})
  .setTween(aboutTitleTl)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 40
  })
  .addTo(controller);

const aboutScroll2 = new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.5,
  duration: 0
})
  .setTween(aboutDescTl)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 40
  })
  .addTo(controller);

const aboutScreen = new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: "onLeave",
  duration: "200%"
})
  .setPin(".about", { pushFollowers: false })
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 40
  })
  .addTo(controller);

//setTimeout(() => {}, 1000);

// skill part

const skill = document.querySelector(".skill");

const skillItem1 = skill.querySelector(".skill1");
const skillItem2 = skill.querySelector(".skill2");
const skillItem3 = skill.querySelector(".skill3");
const skillItem4 = skill.querySelector(".skill4");
const skillItem5 = skill.querySelector(".skill5");

const skillItemTl = gsap.timeline();

skillItemTl
  .fromTo(skillItem1, { y: "80vh" }, { y: "-50vh" }, 0)
  .fromTo(skillItem2, { y: "-20vh" }, { y: "-100vh" }, 0)
  .fromTo(skillItem3, { y: "100vh" }, { y: "-20vh" }, 0)
  .fromTo(skillItem4, { y: "0vh" }, { y: "-170vh" }, 0)
  .fromTo(skillItem5, { y: "60vh" }, { y: "-80vh" }, 0);

const skillScreen = new ScrollMagic.Scene({
  triggerElement: ".skill",
  triggerHook: "onLeave",
  duration: "200%"
})
  .setPin(".skill", { pushFollowers: false })
  .addIndicators({
    name: "skill",
    colorTrigger: "red",
    colorStart: "red",
    colorEnd: "red",
    indent: 40
  })
  .addTo(controller);

const skillParallax = new ScrollMagic.Scene({
  triggerElement: ".skill",
  triggerHook: 0.35,
  duration: "200%"
})
  .setTween(skillItemTl)
  .addIndicators({
    name: "skill",
    colorTrigger: "pink",
    colorStart: "pink",
    colorEnd: "pink",
    indent: 40
  })
  .addTo(controller);

const project = document.querySelector(".project");

const projectScreen = new ScrollMagic.Scene({
  triggerElement: project,
  triggerHook: "onLeave",
  duration: "200%"
})
  .setPin(project, { pushFollowers: false })

  .addIndicators({
    name: "project",
    colorTrigger: "green",
    colorStart: "green",
    colorEnd: "green",
    indent: 40
  })
  .addTo(controller);

//onload desktop animation

const onloadDesktop = () => {
  profileOnload(); //profile onload
  headerSlideDown("onload"); //header onload
};

/*
 *
 * Window Onload
 *
 *
 */

window.onload = () => {
  const wWidth = window.innerWidth; // loadding시 화면 너비

  // //로드시 스크롤 맨 위로
  // setTimeout(() => {
  //   scrollTo(0, 0);
  // }, 100);

  //너비에 따른 애니메이션 효과 지정
  if (wWidth <= 768) {
    desktopToMobileClass();
  } else {
    onloadDesktop();
  }

  window.onresize = () => {
    const wWidth = window.innerWidth;
    const wScroll = window.scrollY;
    console.log("wW : " + wWidth);
    if (wWidth < 768) {
      headerSlideDown("toMoblie");
    } else {
      headerSlideUp("scrollDown");
    }
  };

  //window scroll

  let lastScrollTop = 0;

  const scrollShow = document.querySelector(".scroll_show");

  window.addEventListener("scroll", () => {
    const wScroll = window.scrollY;
    const wWidth = window.innerWidth;

    scrollShow.innerHTML = `scroll : ${wScroll}`;

    if (wWidth <= 768) {
      headerColor("onMobile");
      headerSlideDown("toMoblie");
    } else {
      if (wScroll == 0) {
        headerSlideDown("scrollTop");
      } else if (wScroll >= lastScrollTop) {
        // Scroll Down 시
        headerSlideUp("scrollDown");
      } else if (wScroll < lastScrollTop) {
        //scroll Up 시
        headerSlideDown("scrollUp");
      }
    }

    lastScrollTop = wScroll;
  });
};
