import React from "react";

const writeUp = {
  main_heading: "About",
  description:
    "WICit and findwic.com are not affiliated with any federal or state WIC programs.",
  block1: {
    description:
      " WICit was created to help Californians access WIC more easily by ",
    link: "https://codeforsacramento.org/",
    linkname: "Code for Sacramento.",
  },
  block2: {
    description:
      " If you're interested in deploying WICit in your state, check out the ",
    link: "https://github.com/code4sac/wicit-react",
    linkname: "WICit GitHub repo.",
  },
};

export default function AboutContainer() {
  return (
    <section className="about-container">
      <div className="about-container__main">
        <h2 className="heading-secondary u-center-text u-font-large">
          {writeUp.main_heading}
        </h2>
        <p className="paragraph">
          {writeUp.description}
          <span className="about-container__block">
            {writeUp.block1.description}
            <a className="about-container__link" href={writeUp.block1.link}>
              {writeUp.block1.linkname}
            </a>
          </span>
          <span className="about-container__block">
            {writeUp.block2.description}
            <a className="about-container__link" href={writeUp.block2.link}>
              {writeUp.block2.linkname}
            </a>
          </span>
        </p>
      </div>
    </section>
  );
}
