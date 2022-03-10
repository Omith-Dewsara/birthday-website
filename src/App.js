import './App.css';
import birthdayHatImg from "./assets/birthday-hat-img.png";
import birthdayFlags from "./assets/birthday-flags.png";
import birthdayCake from "./assets/birthday-cake.jpg";
import birthdayRocket from "./assets/birthday-rocket.png";
import txt2BdayHat from "./assets/text2-birthday-hat.png";
import chooseGiftboxImg from "./assets/choose-gift-box-img.png";
import moderlDonutImg from "./assets/model-donut-img.png";
import modelCupCakeImg from "./assets/model-cupcake-img.png";
import modelCookies from "./assets/model-cookies.png";
import model1GiftBoxes from "./assets/model1-gift-boxes.png";
import section3Img from "./assets/section-3-img.png";
import beforeContainerImg from "./assets/website-before-img.jpg";
import happyBirthdaySong from "./assets/happy-birthday-song-1.mp3";
import friendImg1 from "./assets/friends-1.jpg";
import { useState, useEffect } from "react";
import soundTrack from "./assets/hover-sound.mp3";
import clickSound from "./assets/click-sound.mp3";
import "./Section3.css";

function App() {
  const [text1, setText1] = useState("Hey you");

  const [model1Active, setModel1Active] = useState(false);

  const [giftCode, setGiftCode] = useState(3);

  const [model2Active, setModel2Active] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setText1("Yes you")
    }, 2000);

    setTimeout(() => {
      setText1("Wait")
    }, 4000);

    document.addEventListener("click", (e) => {
      if (e.target.classList[0] === "app__model") {
        setModel1Active(false);
        setModel2Active(false);
      }
    })

    const hoverSound = document.querySelector(".app__hoverSound");
    const giftBoxes = document.querySelectorAll(".app__section2__right__giftBoxes");
    giftBoxes.forEach(giftBox => {
      giftBox.addEventListener("mouseover", () => {
        hoverSound.play();
      })
    })
  }, [])

  const selectGift = (code) => {
    setGiftCode(code);
    setModel2Active(true);
    console.log("lol")
  }

  const clickedYes = () => {
    setModel1Active(false);
    const section2 = document.querySelector(".app__section2");
    const clickSound = document.querySelector(".app__clickSound");
    clickSound.play();
    section2.scrollIntoView();
  }

  const click2 = () => {
    setModel2Active(false);
    const section2 = document.querySelector(".app__section3");
    const clickSound = document.querySelector(".app__clickSound");
    clickSound.play();
    section2.scrollIntoView();
  }

  const clickMe = () => {
    const clickSound = document.querySelector(".app__clickSound");
    clickSound.play();
    setModel1Active(true);
  }

  const playHappyBirthday = () => {
    const happyBirthdaySong = document.querySelector(".app__happyBirthdaySong");
    if (happyBirthdaySong.duration > 0 && !happyBirthdaySong.paused) {
      happyBirthdaySong.pause();
    } else {
      happyBirthdaySong.play();
    }
  }

  return (
    <div className="app">
      <audio className="app__happyBirthdaySong">
        <source src="horse.ogg" type="audio/ogg" />
        <source src={happyBirthdaySong} type="audio/mpeg" />
      </audio>
      <audio controls className="app__clickSound">
        <source src="horse.ogg" type="audio/ogg" />
        <source src={clickSound} type="audio/mpeg" />
      </audio>
      <audio controls className="app__hoverSound">
        <source src="horse.ogg" type="audio/ogg" />
        <source src={soundTrack} type="audio/mpeg" />
      </audio>
      <audio src={soundTrack}></audio>
      <div className={`app__model ${model1Active ? "active" : ""}`}>
        <div className={`app__model__container ${model1Active ? "active" : ""}`}>
          <div className="app__model__container__top">
            <img
              src={model1GiftBoxes}
              alt=""
              className="app__model__container__top__img"
            />
          </div>
          <div className="app__model__container__txt1">
            Wondering what's this pop up for??
            <br />
            Is for nothing lol, but I got a little suprise for you
            <br />
            You excited?
          </div>
          <button className="app__model__container__btn" onClick={clickedYes}> Yes I am </button>
        </div>
      </div>
      <div className={`app__model ${model2Active ? "active" : ""}`}>
        <div className={`app__model__container ${model2Active ? "active" : ""} model-2`}>
          <div className="app__model__container__giftContainer">
            {
              giftCode === 1 ? (
                <img
                  src={moderlDonutImg}
                  alt=""
                  className="app__model__container__giftContainer__img"
                />
              ) : giftCode === 2 ? (
                <img
                  src={modelCupCakeImg}
                  alt=""
                  className="app__model__container__giftContainer__img"
                />
              ) : (
                <img
                  src={modelCookies}
                  alt=""
                  className="app__model__container__giftContainer__img"
                />
              )
            }
          </div>
          <div className="app__model__container__giftContainer__msg">
            {
              giftCode === 3 ? <> Here are some cookies from me </> : (
                <>
                  Here is a {giftCode === 1 ? "dounut" : giftCode === 2 ? "cup cake" : ""} from me
                </>
              )
            }
            <br />
            Enjoy :)
          </div>
          <div className="app__model__container__circle1" />
          <div className="app__model__container__circle2" />
          <div className="app__model__container__circle3" />
          <div className="app__model__container__circle4" />
          <div className="app__model__container__circle5" />
          <div className="app__model__container__circle6" />
          <button className="app__model__container__btn1" onClick={click2}> Can u click me? </button>
        </div>
      </div>
      <div className="app__beforeContainer">
        <div className="app__beforeContainer__txt txt-1"> {text1} </div>
        <img
          src={beforeContainerImg}
          alt=""
          className="app__beforeContainer__img"
        />
      </div>
      <div className="app__section1">
        <img
          src={birthdayRocket}
          alt=""
          className="app__section1__img1"
        />
        <div className="app__section1__left">
          <div className="app__section1__left__container">
            <img
              src={birthdayHatImg}
              alt=""
              className="app__section1__left__container__bdHat"
            />
            <div className="app__section1__left__container__cakeContainer">
              <img
                src={birthdayCake}
                alt=""
                className="app__section1__left__container__cake"
                onClick={playHappyBirthday}
              />
              <div className="app__section1__left__container__cakeContainer__txt"> Click me first </div>
            </div>
            <img
              src={birthdayFlags}
              alt=""
              className="app__section1__left__container__bdFlags"
            />
          </div>
        </div>
        <div className="app__section1__right">
          <div className="app__section1__right__top">
            <div className="app__section1__right__top__txt1">
              Wishing you a happy
            </div>
            <div className="app__section1__right__top__txt2">
              {/* <img
                src={txt2BdayHat}
                alt=""
                className="app__section1__right__top__txt1__img"
              /> */}
              Birthday
            </div>
            <div className="app__section1__right__top__txt3">
              full of
            </div>
            <div className="app__section1__right__top__txt4">
              happiness,
            </div>
            <div className="app__section1__right__top__txt5">
              love and joy
            </div>
            <button className="app__section1__right__top__button" onClick={clickMe}> Click me </button>
          </div>
        </div>
      </div>
      <div className="app__section2">
        <div className="app__section2__left">
          <div className="app__section2__left__txt1">
            <div className="app__section2__left__txt1__title"> Here is a little suprise! </div>
            <div className="app__section2__left__txt1__desktopTxt"> If you can see the three gift boxes in the right side of the site, </div>
            <div className="app__section2__left__txt1__mobileTxt"> If you scroll down you will see three gift boxes </div>
            go ahead and click on one of them. There are three different <br /> gifts
            in each gift box.
          </div>
        </div>
        <div className="app__section2__right">
          <div className="app__section2__right__giftBoxes" onClick={() => selectGift(1)}>
            <img
              src={chooseGiftboxImg}
              alt=""
              className="app__section2__right__giftBoxes__giftImgs"
            />
            <div className="app__section2__right__giftBoxes__circle" />
          </div>
          <div className="app__section2__right__giftBoxes" onClick={() => selectGift(2)}>
            <img
              src={chooseGiftboxImg}
              alt=""
              className="app__section2__right__giftBoxes__giftImgs"
            />
            <div className="app__section2__right__giftBoxes__circle" />
          </div>
          <div className="app__section2__right__giftBoxes" onClick={() => selectGift(3)}>
            <img
              src={chooseGiftboxImg}
              alt=""
              className="app__section2__right__giftBoxes__giftImgs"
            />
            <div className="app__section2__right__giftBoxes__circle" />
          </div>
        </div>
      </div>
      <div className="app__section3">
        <div className="app__section3__left">
          <div className="app__section3__left__container">
            <img
              src={section3Img}
              alt=""
              className="app__section3__left__container__img"
            />
          </div>
        </div>
        <div className="app__section3__right">
          <div className="app__section3__right__txt1"> Happy Birthday </div>
          <p className="app__section3__right__txt2">
            This world needs more people like you, kind
            <br />
            hearted, hardworking, and sweet. I feel so lucky to
            <br />
            have a friend like you. who always has my back.
            <br />
            Happy birthday Caitlyn! 🥳 🥳 🥳
          </p>
          <p className="app__section3__right__txt2Mobile">
            This world needs more people like you, kind
            hearted, hardworking, and sweet. I feel so lucky to
            have a friend like you. who always has my back.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
