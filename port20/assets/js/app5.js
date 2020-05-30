//Element

const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const overlayClose = overlay.querySelector(".js-close");
const overlayLink = overlay.querySelector("iframe");

overlayClose.addEventListener("click", () => {
  overlay.classList.remove("open");
  overlayLink.className = "";
});

// setTimeout(() => {
//   body.classList.add("dom-is-loaded");
// }, 500);

/*
 *
 * Loading
 *
 */

window.addEventListener("load", () => {
  body.classList.add("dom-is-loaded");
  randomColor(5, 1);
});

const randomColor = (max, min) => {
  const rNum = Math.floor(Math.random() * (max - min + 1)) + min;
  body.classList.add(`theme-${rNum}`);
};

/*
 *
 * MathUti Function
 *
 */
{
  const MathUtils = {
    // map number x from range [a, b] to [c, d]
    map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
    // linear interpolation
    lerp: (a, b, n) => (1 - n) * a + n * b,
    // Random float
    getRandomFloat: (min, max) =>
      (Math.random() * (max - min) + min).toFixed(2),
  };

  /*
   *
   * calculate the viewport size
   * (창의 크기 관리)
   *
   */

  let winsize;
  let docsize;
  const calcSize = () => {
    winsize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    docsize = {
      height: document.body.clientHeight,
    };
    console.log(`doc size: ${docsize.height}`);
  };
  calcSize(); // 최초 창의 크기 초기화

  window.addEventListener("resize", calcSize);
  // 창의 크기 변경시 창의 크기 측정

  /*
   *
   * Scroll position
   * (스크롤 위치값 관리)
   *
   */

  let docScroll;
  let lastScroll;
  let linkScroll;
  let scrollingSpeed = 0;

  const getPageYScroll = () => {
    docScroll = window.pageYOffset || document.documentElement.scrollTop;
    linkScroll = [
      docScroll + document.querySelector("#sec2").getBoundingClientRect().top,
      docScroll + document.querySelector("#sec3").getBoundingClientRect().top,
      docScroll + document.querySelector("#sec4").getBoundingClientRect().top,
      docScroll + document.querySelector("#sec5").getBoundingClientRect().top,
      docScroll + document.querySelector("#footer").getBoundingClientRect().top,
    ];
    console.log(`Scroll : ${docScroll}`);
  };

  getPageYScroll();

  window.addEventListener("scroll", getPageYScroll);
  //스크롤 움직일 때, 스크롤의 위치값 설정

  /*
   *
   * SVG Path function
   *
   */

  const svgPath = (el) => {
    const paths = el.querySelectorAll("path");
    paths.forEach((path) => {
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeDashoffset = path.getTotalLength();
    });
  };

  /*
   *
   * header Item
   *
   */

  const header = document.querySelector(".header");
  const headerStroke = header.querySelector(".js-class-show");

  const addClassHeader = () => {
    if (docScroll > 800) {
      headerStroke.classList.add("is-show");
    } else {
      headerStroke.classList.remove("is-show");
    }
    console.log(docsize.height, winsize.height);
    if (docScroll > 0.98 * (docsize.height - winsize.height)) {
      console.log("header hide");
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  };

  window.addEventListener("scroll", addClassHeader);

  //Change Theme

  const bodyColor = document.querySelectorAll(".js-color-change");
  let themeNum = 1;

  const changeColorTheme = () => {
    body.classList.remove(
      `theme-1`,
      `theme-2`,
      `theme-3`,
      `theme-4`,
      `theme-5`
    );
    if (themeNum === 5) {
      themeNum = 1;
    } else {
      themeNum++;
    }
    body.classList.add(`theme-${themeNum}`);
  };

  bodyColor.forEach((colorDom) => {
    colorDom.addEventListener("click", changeColorTheme);
  });

  // scroll href

  const headerLink = header.querySelectorAll(".js-link");

  const clickLink = (dom, scroll) => {
    dom.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo(0, scroll);
    });
  };

  const AddlinkActive = (link) => {
    const svg = link.querySelector("svg");
    svg.classList.add("active");
  };

  const RemovelinkActive = (links) => {
    links.forEach((link) => {
      const svg = link.querySelector("svg");
      svg.classList.remove("active");
    });
  };

  linkScroll.map((sec, index) => {
    clickLink(headerLink[index], sec);
  });

  /*
   *
   * intro Item
   *
   */

  class Intro {
    constructor() {
      this.DOM = {
        intro: document.querySelector(".intro"),
        show: document.querySelector(".intro.js-class-show"),
      };
      this.DOM.titles = this.DOM.intro.querySelectorAll(".intro_fixed");
      this.DOM.image = this.DOM.intro.querySelector(".intro_img");
      this.DOM.imgPara = this.DOM.intro.querySelector(".intro_img_parallax");
      this.DOM.btnWrap = this.DOM.intro.querySelector(".intro_btn_wrap");

      //intro link
      this.DOM.link = this.DOM.intro.querySelector(".js-link");

      clickLink(this.DOM.link, linkScroll[0]);

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => (this.isVisible = entry.isIntersecting));
      });
      this.observer.observe(this.DOM.intro.parentNode);
    }

    update(sValue) {
      this.layout(sValue);
    }

    render(sValue) {
      this.layout(sValue);
    }

    layout(scrollValue) {
      this.DOM.titles.forEach((title) => {
        title.style.transform = `translate3d(0, ${scrollValue}px, 0)`;
      });
      this.DOM.image.style.transform = `translate3d(0, ${
        scrollValue / 10
      }px, 0)`;
      this.DOM.imgPara.style.transform = `translate3d(0, ${
        (-1 * scrollValue) / 10
      }px, 0)`;
      this.DOM.btnWrap.style.transform = `translate3d(0, ${
        scrollValue / 20
      }px, 0)`;
    }
    class() {
      this.DOM.show.classList.add("is-show");
    }
  }

  /*
   *
   * about Item
   *
   */

  class About {
    constructor() {
      this.DOM = {
        about: document.querySelector(".about"),
        show: document.querySelector(".about.js-class-show"),
      };

      this.DOM.image = this.DOM.about.querySelector(".js-anim-img");
      this.DOM.title = this.DOM.about.querySelector(".js-anim-title");

      //intro link
      this.DOM.link = this.DOM.about.querySelector(".js-link");

      clickLink(this.DOM.link, linkScroll[2]);
      //
      this.renderedStyles = {
        imageScale: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // current value setter
          setValue: () => {
            const toValue = 1.5;
            const fromValue = 1;
            const val = MathUtils.map(
              this.props.top - docScroll,
              winsize.height,
              -1 * this.props.height,
              fromValue,
              toValue
            );
            return Math.max(Math.min(val, toValue), fromValue);
          },
        },
        titleTranslationY: {
          previous: 0,
          current: 0,
          ease: 0.1,
          fromValue: Number(MathUtils.getRandomFloat(30, 70)),
          setValue: () => {
            const fromValue = this.renderedStyles.titleTranslationY.fromValue;
            const toValue = -1 * fromValue;
            const val = MathUtils.map(
              this.props.top - docScroll,
              winsize.height,
              -1 * this.props.height,
              fromValue,
              toValue
            );
            return fromValue < 0
              ? Math.min(Math.max(val, fromValue), toValue)
              : Math.max(Math.min(val, fromValue), toValue);
          },
        },
      };

      this.getSize();

      this.update();

      this.getImgTop();

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => (this.isVisible = entry.intersectionRatio > 0)
        );
      });

      this.observer.observe(this.DOM.about);

      this.initEvents();
    }

    update() {
      // sets the initial value (no interpolation)
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[
          key
        ].previous = this.renderedStyles[key].setValue();
      }
      // apply changes/styles
      this.layout();
    }
    getSize() {
      const rect = this.DOM.about.getBoundingClientRect();
      this.props = {
        // item's height
        height: rect.height,
        // offset top relative to the document
        top: docScroll + rect.top,
      };
    }
    getImgTop() {
      const imgRect = this.DOM.image.getBoundingClientRect();
      this.imgTop = imgRect.top;
    }
    initEvents() {
      window.addEventListener("resize", () => this.resize());
    }
    resize() {
      // gets the item's height and top (relative to the document)
      this.getSize();
      // on resize reset sizes and update styles
      this.update();
    }
    render() {
      // update the current and interpolated values
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].ease
        );
      }
      // and apply changes
      this.layout();
      this.getImgTop();

      if (this.imgTop < 700) {
        this.class();
      }
    }
    layout() {
      // scale the image
      this.DOM.image.style.transform = `scale3d(${this.renderedStyles.imageScale.previous},${this.renderedStyles.imageScale.previous},1)`;
      // translate the title
      this.DOM.title.style.transform = `translate3d(0,${this.renderedStyles.titleTranslationY.previous}px,0)`;
    }
    class() {
      this.DOM.show.classList.add("is-show");
    }
  }

  /*
   *
   * Skill class
   *
   */

  class Skill {
    constructor() {
      this.DOM = {
        skill: document.querySelector(".skill"),
        show: document.querySelector(".skill.js-class-show"),
      };
      this.DOM.titleH = this.DOM.skill.querySelector(
        '.js-title-anim[data-horizontal="true"]'
      );
      this.DOM.title = this.DOM.skill.querySelector(
        '.js-title-anim[data-horizontal="false"]'
      );
      this.DOM.skills = this.DOM.skill.querySelector(".js-skills");
      this.DOM.skillItem = this.DOM.skill.querySelectorAll(".skill_item");
      this.DOM.svgs = this.DOM.skill.querySelectorAll(".js-svg");
      this.DOM.svgPaths = [];
      this.DOM.svgs.forEach((svg) => {
        this.DOM.svgPaths.push(svg.querySelectorAll("path"));
        svgPath(svg);
      });

      this.DOM.skillItem.forEach((item) => {
        const itemPath = item.querySelectorAll("path");
        item.addEventListener("mouseenter", () => {
          itemPath.forEach((path) => {
            path.style.strokeDashoffset = path.getTotalLength();
          });
        });
        item.addEventListener("mouseleave", () => {
          itemPath.forEach((path) => {
            path.style.strokeDashoffset = 0;
          });
        });
      });

      this.renderedStyles = {
        titleTranslation: {
          previous: 0,
          current: 0,
          ease: 0.1,
          fromValue: Number(MathUtils.getRandomFloat(50, 80)),
          setValue: () => {
            const fromValue = this.renderedStyles.titleTranslation.fromValue;
            const toValue = -1 * fromValue;
            const val = MathUtils.map(
              this.props.top - docScroll,
              winsize.height,
              -1 * this.props.height,
              fromValue,
              toValue
            );
            return fromValue < 0
              ? Math.min(Math.max(val, fromValue), toValue)
              : Math.max(Math.min(val, fromValue), toValue);
          },
        },
      };

      this.getSize();

      this.update();

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => (this.isVisible = entry.intersectionRatio > 0)
        );
      });

      this.observer.observe(this.DOM.skill);

      this.initEvents();
    } //constructor

    update() {
      // sets the initial value (no interpolation)
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[
          key
        ].previous = this.renderedStyles[key].setValue();
      }
      // apply changes/styles
      this.layout();
    }

    getSize() {
      const rect = this.DOM.titleH.getBoundingClientRect();
      this.props = {
        // item's height
        height: rect.height,
        // offset top relative to the document
        top: docScroll + rect.top,
      };
    }
    initEvents() {
      window.addEventListener("resize", () => this.resize());
    }
    resize() {
      // gets the item's height and top (relative to the document)
      this.getSize();
      // on resize reset sizes and update styles
      this.update();
    }

    render() {
      // update the current and interpolated values
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].ease
        );
      }
      // and apply changes
      this.layout();
    }
    layout() {
      this.DOM.titleH.style.transform = `translate3d(${
        -1 * this.renderedStyles.titleTranslation.previous
      }px,0,0)`;
      this.DOM.title.style.transform = `translate3d(0,${
        -1 * this.renderedStyles.titleTranslation.previous
      }px,0)`;
    }
    class() {
      this.DOM.show.classList.add("is-show");
    }
    layoutSVG() {
      this.DOM.svgPaths.forEach((paths) => {
        paths.forEach((path) => {
          path.style.strokeDashoffset = 0;
        });
      });
    }
  }

  /*
   *
   * project Item
   *
   */

  class Project {
    constructor() {
      this.DOM = {
        project: document.querySelector(".project"),
      };
      this.DOM.proHeader = this.DOM.project.querySelector(".project_header");
      this.DOM.imgFirstLine = this.DOM.project.querySelectorAll(
        ".js-first-line"
      );
      this.DOM.imgSecondLine = this.DOM.project.querySelectorAll(
        ".js-second-line"
      );

      this.DOM.firstShow = this.DOM.project.querySelectorAll(".js-first-show");
      this.DOM.secondShow = this.DOM.project.querySelectorAll(
        ".js-second-show"
      );

      this.renderedStyles = {
        titleTranslation: {
          previous: 0,
          current: 0,
          ease: 0.1,
          fromValue: Number(MathUtils.getRandomFloat(70, 80)),
          setValue: () => {
            const fromValue = this.renderedStyles.titleTranslation.fromValue;
            const toValue = -1 * fromValue;
            const val = MathUtils.map(
              this.props.top - docScroll,
              winsize.height,
              -1 * this.props.height,
              fromValue,
              toValue
            );
            return fromValue < 0
              ? Math.min(Math.max(val, fromValue), toValue)
              : Math.max(Math.min(val, fromValue), toValue);
          },
        },
      };

      this.getSize();
      this.getPos();

      this.update();

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => (this.isVisible = entry.intersectionRatio > 0)
        );
      });

      this.observer.observe(this.DOM.project);

      this.initEvents();
    }

    update() {
      // sets the initial value (no interpolation)
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[
          key
        ].previous = this.renderedStyles[key].setValue();
      }
      // apply changes/styles

      this.imgLayout("first");
      this.imgLayout("second");
    }

    getSize() {
      const rect = this.DOM.project.getBoundingClientRect();
      this.props = {
        // item's height
        height: rect.height,
        // offset top relative to the document
        top: docScroll + rect.top,
      };
    }
    initEvents() {
      window.addEventListener("resize", () => this.resize());
    }
    resize() {
      // gets the item's height and top (relative to the document)
      this.getSize();
      // on resize reset sizes and update styles
      this.update();
    }

    getPos() {
      const rect = this.DOM.project.getBoundingClientRect();
      const imgFirstRect = this.DOM.imgFirstLine[0].getBoundingClientRect();
      const imgSecondRect = this.DOM.imgSecondLine[0].getBoundingClientRect();

      this.topPos = {
        top: rect.top,
        imgFirstTop: imgFirstRect.top,
        imgSecondTop: imgSecondRect.top,
      };
    }

    render() {
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].ease
        );
      }

      this.getPos();
      if (this.topPos.top <= 10) {
        this.layout();
      } //header fixed

      if (this.topPos.imgFirstTop < 700 && this.topPos.imgFirstTop > -700) {
        this.imgLayout("first");
        this.class("first");
      } // first line img show
      if (this.topPos.imgSecondTop < 700 && this.topPos.imgSecondTop > -700) {
        this.imgLayout("second");
        this.class("second");
      } // second line img show
    }

    layout() {
      this.DOM.proHeader.style.transform = `translate3d(0,${
        -1 * this.topPos.top
      }px,0)`;
    }

    imgLayout(order) {
      switch (order) {
        case "first": {
          this.DOM.imgFirstLine.forEach((dom, index) => {
            if (index % 2 === 0)
              dom.style.transform = `translate3d(0,${this.renderedStyles.titleTranslation.previous}px,0)`;
            else
              dom.style.transform = `translate3d(0,${
                -2 * this.renderedStyles.titleTranslation.previous
              }px,0)`;
          });
          break;
        } //first
        case "second": {
          this.DOM.imgSecondLine.forEach((dom, index) => {
            if (index % 2 === 0)
              dom.style.transform = `translate3d(0,${
                -1 * this.renderedStyles.titleTranslation.previous
              }px,0)`;
            else
              dom.style.transform = `translate3d(0,${
                2 * this.renderedStyles.titleTranslation.previous
              }px,0)`;
          });
          break;
        } //second
      } //switch
    }

    class(order) {
      switch (order) {
        case "first": {
          this.DOM.firstShow.forEach((dom) => {
            dom.classList.add("is-show");
          });
          break;
        } //first
        case "second": {
          this.DOM.secondShow.forEach((dom) => {
            dom.classList.add("is-show");
          });
          break;
        } //second
      } //switch
    } //class
  }

  /*
   *
   * Mini class
   *
   */

  class Mini {
    constructor() {
      this.DOM = {
        mini: document.querySelector(".mini"),
        show: document.querySelector(".mini.js-class-show"),
      };
      this.DOM.items = this.DOM.mini.querySelectorAll(".mini_item");
      this.DOM.links = this.DOM.mini.querySelectorAll(".mini_link");

      this.DOM.links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const { src, name } = e.path[4].dataset;
          console.log(src, name);
          overlay.classList.add("open");
          overlayLink.classList.add(`${name}`);
          overlayLink.src = `${src}`;
          if (name === "kakao") {
            overlayLink.parentNode.classList.add("kakao");
          }
        });
      });

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => (this.isVisible = entry.intersectionRatio > 0)
        );
      });

      this.observer.observe(this.DOM.mini);
    }

    getPos() {
      const rect = this.DOM.mini.getBoundingClientRect();
      this.props = {
        top: rect.top,
      };
    }

    render() {
      this.getPos();
      if (this.props.top <= 10) {
        this.layout();
        this.class();
      }
    }

    layout() {
      this.DOM.items.forEach((item, index) => {
        if (index % 2 === 0) {
          item.style.transform = `translate3d(0,${
            (-1 * this.props.top) / 7
          }px,0)`;
        } else {
          item.style.transform = `translate3d(0,${this.props.top / 7}px,0)`;
        }
      });
    }

    class() {
      this.DOM.show.classList.add("is-show");
    }
  }

  /*
   *
   * Contact class
   *
   */

  class Contact {
    constructor() {
      this.DOM = {
        contact: document.querySelector(".contact"),
        show: document.querySelector(".contact.js-class-show"),
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => (this.isVisible = entry.intersectionRatio > 0)
        );
      });

      this.observer.observe(this.DOM.contact);
    }

    render() {
      this.class();
    }

    class() {
      this.DOM.show.classList.add("is-show");
    }
  }

  /*
   *
   * Smooth Scroll
   *
   */

  class SmoothScroll {
    constructor() {
      //Smooth Scroll의 최초 설정

      //스크롤의 대상 설정
      this.DOM = { main: document.querySelector("main") };
      this.DOM.scrollable = this.DOM.main.querySelector("div[data-scroll]");
      this.intro = new Intro();
      this.about = new About();
      this.skill = new Skill();
      this.project = new Project();
      this.mini = new Mini();
      this.contact = new Contact();

      // 적용할 스타일 목록
      this.renderedStyles = {
        translationY: {
          previous: 0,
          current: 0,
          ease: 0.1,
          setValue: () => docScroll,
        },
      };
      this.setSize();
      this.update();
      this.style();
      this.initEvent();
      requestAnimationFrame(() => this.render());
    }
    update() {
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[
          key
        ].previous = this.renderedStyles[key].setValue();
        //최솟값 0 보정
        if (this.renderedStyles[key].previous < 0.1)
          this.renderedStyles[key].previous = 0;
      }
      //scroll element에 효과 부여
      this.layout();
    }

    layout() {
      this.DOM.scrollable.style.transform = `translate3d(0,${
        -1 * this.renderedStyles.translationY.previous
      }px,0)`;
    }

    setSize() {
      body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
    }

    style() {
      this.DOM.main.style.position = "fixed";
      this.DOM.main.style.width = this.DOM.main.style.height = "100%";
      this.DOM.main.style.top = this.DOM.main.style.left = 0;
      this.DOM.main.style.overflow = "hidden";
    }

    initEvent() {
      window.addEventListener("resize", () => this.setSize());
    }
    render() {
      scrollingSpeed = Math.abs(docScroll - lastScroll);
      lastScroll = docScroll;

      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].ease
        );
        //최솟값 0 보정
        if (this.renderedStyles[key].previous < 0.1)
          this.renderedStyles[key].previous = 0;
      }
      this.layout();

      //intro observer

      if (this.intro.isVisible) {
        if (this.intro.insideViewport) {
          RemovelinkActive(headerLink);
          this.intro.render(this.renderedStyles.translationY.previous);
        } else {
          this.intro.insideViewport = true;
          this.intro.update(this.renderedStyles.translationY.previous);
          this.intro.class();
        }
      } else {
        this.intro.insideViewport = false;
      }

      //about observer
      if (this.about.isVisible) {
        RemovelinkActive(headerLink);
        AddlinkActive(headerLink[0]);
        if (this.about.insideViewport) {
          this.about.render();
        } else {
          this.about.insideViewport = true;
          this.about.update();
        }
      } else {
        this.about.insideViewport = false;
      }

      //skill observer
      if (this.skill.isVisible) {
        if (this.skill.insideViewport) {
          RemovelinkActive(headerLink);
          AddlinkActive(headerLink[1]);
          this.skill.render();
        } else {
          this.skill.insideViewport = true;
          this.skill.update();
          this.skill.class();
          this.skill.layoutSVG();
        }
      } else {
        this.skill.insideViewport = false;
      }

      //project observer
      if (this.project.isVisible) {
        if (this.project.insideViewport) {
          RemovelinkActive(headerLink);
          AddlinkActive(headerLink[2]);
          this.project.render();
        } else {
          this.project.insideViewport = true;
          this.project.render();
          this.project.class();
        }
      } else {
        this.project.insideViewport = false;
      }

      //mini observer
      if (this.mini.isVisible) {
        RemovelinkActive(headerLink);
        AddlinkActive(headerLink[3]);
        this.mini.render();
      } else {
      }

      //contact observer
      if (this.contact.isVisible) {
        this.contact.render();
      } else {
      }

      requestAnimationFrame(() => this.render());
    }
  }

  getPageYScroll();
  lastScroll = docScroll;
  new SmoothScroll();
}

// //Text Word split

// const textWordSplit = (dom) => {
//   const textStr = dom.innerText;
//   console.log(`textStr : ${textStr}`);
//   const textWord = textStr.split(" ");
//   console.log(`textStr : ${textWord}`);

//   dom.textContent = "";
//   textWord.map((word) => {
//     const newWord = document.createElement("div");
//     newWord.classList.add("text-word");
//     newWord.innerText = ` ${word}`;

//     console.log(newWord);
//     dom.append(newWord);
//   });
// };

// textWordSplit(document.querySelector(".skill_title"));
