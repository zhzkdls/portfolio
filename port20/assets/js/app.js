//document
const scrollShow = document.querySelector(".scroll_show");

//header
const header = document.querySelector("#header");

//intro
const intro = document.querySelector(".intro");
const introFixed = intro.querySelectorAll(".intro_fixed");
const introTitle = intro.querySelectorAll(".intro_title");
const introTitleLine1 = introTitle[0].querySelectorAll(".intro_title_line");
const introTitleLine2 = introTitle[1].querySelectorAll(".intro_title_line");
const introAnim = intro.querySelector(".img_anim");
const introImg = intro.querySelector(".intro_img");
const introImgURL = introImg.querySelector(".img");

//about

const about = document.querySelector(".about");
const aboutAnim = about.querySelector(".img_anim");
const aboutText = document.querySelector(".about_desc");

//skill part
const skill = document.querySelector(".skill");
const skillTitle = skill.querySelector(".skill_title");
const skillContents = skill.querySelector(".skill_contents");
const skillContTitle = skill.querySelector(".skill_contents .title");
const skillItemLines = skill.querySelectorAll(".skill_item_wrap");

//project part

const project = document.querySelector(".project");
const projectHeader = project.querySelector(".project_header");
const projectTitleWrap = project.querySelector(".project_title_wrap");
const projectItems = project.querySelectorAll(".project_item");
const projectImg = project.querySelectorAll(".img_anim");

// mini part

const mini = document.querySelector(".mini");
const miLeft = mini.querySelectorAll(".mini_item_left");
const miRight = mini.querySelectorAll(".mini_item_right");

//onload effect

const body = document.querySelector("body");

window.onload = () => {
  body.classList.add("is-loaded");
  intro.classList.add("is-show");
  introAnim.classList.add("is-show");
};

//scroll effect

window.addEventListener("scroll", () => {
  const wScroll = Math.round(this.scrollY);
  const wScrollSlow = slow => wScroll / slow;
  scrollShow.innerHTML = `${wScroll}`;

  //skill Scrolling

  // scroll

  if (wScroll < 1000) {
    //intro scrolling
    introFixed.forEach(fixed => {
      //fixed.style.transform = `translate3d(0,${2 * wScroll}px,0)`;
    });

    introImg.style.transform = `translate3d(0,${wScrollSlow(10)}px,0)`;
    introAnim.style.transform = `translate3d(0,${-wScrollSlow(10)}px,0)`;
  }

  if (wScroll >= 100) {
    aboutAnim.classList.add("is-show");
  }
  //qbout scrolling
  if (wScroll >= 200 && wScroll < 900) {
    const aboutTextPos = aboutText.getBoundingClientRect().top - wScroll;

    aboutText.style.transform = `translate3d(0,${aboutTextPos / 15}px,0)`;
  }

  if (wScroll >= 400) {
    header.classList.add("is-show");
  }
  if (wScroll < 400) {
    header.classList.remove("is-show");
  }
  //skill scrolling
  if (wScroll >= 1200) {
    const skillTitlePos = skillTitle.getBoundingClientRect().top;
    const skilltrans = skillTitlePos - 350;

    skillTitle.style.transform = `translate3d(${-skilltrans /
      10}px,${-skillTitlePos / 10}px,0)`;
  }

  if (wScroll >= 2000) {
    skillContTitle.classList.add("is-show");
    skillItemLines.forEach(line => {
      line.classList.add("is-show");
    });
  }

  if (wScroll >= 3000) {
    // project_title.style.transform = `translate3d(0,${2 *
    //   (wScroll - 1850)}px,0)`;

    projectHeaderOffset = projectHeader.getBoundingClientRect().top;

    if (projectHeaderOffset < 0) {
      projectTitleWrap.classList.add("sticky");
    } else {
      projectTitleWrap.classList.remove("sticky");
    }

    if (wScroll > 6000) {
      projectTitleWrap.classList.remove("sticky");
    }

    projectImg.forEach(img => {
      img.classList.add("is-show");
    });

    //intro fixed 해제
    introFixed.forEach(fixed => {
      fixed.classList.add("hide");
    });
  } else {
    introFixed.forEach(fixed => {
      fixed.classList.remove("hide");
    });
  }

  //mini scroll

  if (wScroll >= 5500) {
    const moveMini = wScroll - 5500;
    miLeft.forEach(item => {
      item.style.transform = `translate3d(0,${moveMini / 10}px,0)`;
    });
    miRight.forEach(item => {
      item.style.transform = `translate3d(0,${-moveMini / 10}px,0)`;
    });
  }

  if (wScroll >= 7800) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
});

//intro image

let index = 1;
setInterval(() => {
  introImgURL.style.backgroundImage = `url(./assets/img/intro${index}.jpg)`;
  console.log(index);

  index < 4 ? index++ : (index = 1);
}, 2000);
