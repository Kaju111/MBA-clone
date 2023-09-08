import React from "react";
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import freshTopicImg from "./assets/academy.png";
import data from "./data/data.json";
import freshTopic2Img from "./assets/story.png";
import tedTalkImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";


import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

const App = () => {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  return (
    <div>
      <IntroVideo />
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnText={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnText={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnText={tedTalks.btn}
        imgSrc={tedTalkImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnText={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />

      <Section
        h3={courses.heading}
        text={courses.text}
        btnText={courses.btn}
        imgSrc={coursesImg }
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
    </div>
  );
};

export default App;
