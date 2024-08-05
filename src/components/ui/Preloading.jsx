/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { gsap, Expo } from "gsap";
import styled from "styled-components";

const preloaderWords = [
  "C language",
  "C++ language",
  "Java Core",
  "Python",
  "Html",
  "Css",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Api-Integration",
  //   "MySQL",
  //   "Linux",
  //   "Serenity",
  //   "Android",
];

const Preloading = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 2500; // 2.5 seconds
    const wordDuration = totalDuration / preloaderWords.length;
    const progressStep = 100 / (totalDuration / 25);

    const count = setInterval(() => {
      setCounter((counter) => (counter < 100 ? counter + progressStep : 100));
    }, 25);

    const wordChange = setInterval(() => {
      setWordIndex((prevIndex) =>
        prevIndex < preloaderWords.length - 1 ? prevIndex + 1 : 0
      );
    }, wordDuration);

    setTimeout(() => {
      clearInterval(count);
      clearInterval(wordChange);
      reveal();
    }, totalDuration);

    return () => {
      clearInterval(count);
      clearInterval(wordChange);
    };
  }, []);

  async function reveal() {
    const t1 = gsap.timeline({});

    await t1
      .to(".content", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 1.2,
        delay: 0.5,
      })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 });
    if (!t1.isActive()) {
      await setLoading(false);
    }
  }

  return (
    <AppContainer>
      <Loading>
        <WordContainer>
          <Word>{preloaderWords[wordIndex]}</Word>
        </WordContainer>
        <ProgressBarContainer>
          <ProgressBar
            className="hide"
            id="progress-bar"
            style={{ width: counter + "%" }}
          ></ProgressBar>
          <ProgressText>{Math.round(counter)}%</ProgressText>
        </ProgressBarContainer>
      </Loading>
      <Content className="content"></Content>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  background-color: #000;
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  color: #fff;
  font-size: 2rem;
`;

const ProgressBarContainer = styled.div`
  width: 80%;
  position: relative;
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const ProgressText = styled.div`
  position: absolute;
  top: -25px;
  right: 0;
  font-size: 1rem;
  color: #fff;
`;

const WordContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Word = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0da34e;
  animation: fadeInOut 0.5s infinite;

  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000;
  padding: auto;
  z-index: 2;
  overflow: hidden;
  color: #fff;
`;

export default Preloading;
