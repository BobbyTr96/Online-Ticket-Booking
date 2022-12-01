import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";

const Intro = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleChange = () => {
    setIsMuted((stateIsMuted) => {
      return !stateIsMuted;
    });
  };

  return (
    <IntroContainer>
      <ReactPlayer
        loop={true}
        className="videoIntro"
        playing={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/707902934"
      />
      <div className="inforIntro">
        <h1 className="heading">Avatar: The Way of Water</h1>
        <p className="overview">
        Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.
        </p>
      </div>
      {isMuted ? (
        <VscMute className="btnVolume" onClick={handleChange} />
      ) : (
        <VscUnmute className="btnVolume" onClick={handleChange} />
      )}
      <div className="fadedBottom"></div>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--color-background);
  position: relative;
  color: var(--color-white);
  padding-top: 56%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .inforIntro {
    position: absolute;
    top: 140px;
    left: 30px;
    @media screen and (max-width: 800px) {
      top: 100px;
      left: 15px;
      
    }
    @media screen and (max-width: 600px) {
      top: 60px;
      left: 15px;
      font-size:15px;
    }

    .heading {
      font-size: 60px;
      transition: all 0.3s ease;
      @media screen and (max-width: 800px) {
        font-size: 35px;
      }

      @media screen and (max-width: 600px) {
        font-size: 20px;
      }
    }

    .overview {
      max-width: 550px;
      width: 100%;
      line-heigh: 1.3;
      padding-top: 25px;
      font-size: 18px;

      @media screen and (max-width: 800px) {
        font-size: 16px;
        max-width: 500px;
      }

      @media screen and (max-width: 600px) {
        font-size: 10px;
        max-width: 240px;
        padding-top: 0;
      }
    }
  }

  .btnVolume {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 45%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: 1px solid #fff;
    transition: all 0.3s ease;
    transform: scale(1);

    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }

    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
      padding: 4px;
    }

    @media screen and (max-width: 600px) {
      height: 20px;
      width: 20px;
      padding: 1px;
    }
  }

  .fadedBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
`;
