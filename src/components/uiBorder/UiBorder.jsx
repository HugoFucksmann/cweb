import React, { useEffect, useState } from "react";
import "./styles.scss";
import "./style.js";
import home from "../../assets/icons/home.png";
import user from "../../assets/icons/user.png";
import config from "../../assets/icons/config.png";
import pause from "../../assets/icons/pause.png";
import play from "../../assets/icons/play.png";
import check from "../../assets/icons/check.png";

const UiBorder = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    const clock = () => {
      let today = new Date();
      let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
      let m = today.getMinutes(); // 0 - 59
      let s = today.getSeconds(); // 0 - 59

      h *= 30; // 12 * 30 = 360deg
      m *= 6;
      s *= 6; // 60 * 6 = 360deg

      rotation(document.querySelector(".hours"), h);
      rotation(document.querySelector(".minutes"), m);
      rotation(document.querySelector(".seconds"), s);

      // call every second
      setTimeout(clock, 500);
    };

    const rotation = (target, val) => {
      if (target) {
        target.style.transform = `rotate(${val}deg)`;
      }
    };

    const dragElement = (target, btn) => {
      const onMouseMove = (e) => {
        e.preventDefault();
        let targetRect = target.getBoundingClientRect();
        let x = e.pageX - targetRect.left + 10;
        if (x > targetRect.width) {
          x = targetRect.width;
        }
        if (x < 0) {
          x = 0;
        }
        btn.x = x - 10;
        btn.style.left = btn.x + "px";

        // get the position of the button inside the container (%)
        let percentPosition = ((btn.x + 10) / targetRect.width) * 100;

        // color width = position of button (%)
        document.querySelector(".slider__color").style.width =
          percentPosition + "%";

        // move the tooltip when button moves, and show the tooltip
        document.querySelector(".slider__tooltip").style.left =
          btn.x - 5 + "px";
        document.querySelector(".slider__tooltip").style.opacity = 1;

        // show the percentage in the tooltip
        document.querySelector(".slider__tooltip").textContent =
          Math.round(percentPosition) + "%";
      };

      const onMouseUp = (e) => {
        window.removeEventListener("mousemove", onMouseMove);
        document.querySelector(".slider__tooltip").style.opacity = 0;

        btn.addEventListener("mouseover", function () {
          document.querySelector(".slider__tooltip").style.opacity = 1;
        });

        btn.addEventListener("mouseout", function () {
          document.querySelector(".slider__tooltip").style.opacity = 0;
        });
      };

      target.addEventListener("mousedown", (e) => {
        onMouseMove(e);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      });
    };

    clock();
    dragElement(
      document.querySelector(".slider__box"),
      document.querySelector(".slider__btn")
    );
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div style={{ backgroundColor: "#fff", borderRadius: 12 }}>
      <div className="components">
        <div className="switch">
          <div className="switch__1">
            <input id="switch-1" type="checkbox" />
            <label htmlFor="switch-1"></label>
          </div>

          <div className="switch__2">
            <input id="switch-2" type="checkbox" checked />
            <label htmlFor="switch-2"></label>
          </div>
        </div>

        <div className="checkbox">
          <div className="checkbox__1">
            <input id="checkbox-1" type="checkbox" />
            <label htmlFor="checkbox-1">
              <img alt="ic1" height={"20px"} src={check} />
            </label>
          </div>
          <div className="checkbox__2">
            <input id="checkbox-2" type="checkbox" checked />
            <label htmlFor="checkbox-2">
              <img alt="ic1" height={"20px"} src={check} />
            </label>
          </div>
        </div>

        <div className="radio">
          <div className="radio__1">
            <input id="radio-1" type="radio" name="radio" value="1" />
            <label htmlFor="radio-1"></label>
          </div>

          <div className="radio__2">
            <input id="radio-2" type="radio" name="radio" value="2" checked />
            <label htmlFor="radio-2"></label>
          </div>
        </div>

        <div className="btn btn__primary">
          <p>Button</p>
        </div>
        <div className="btn btn__secondary">
          <p>Button</p>
        </div>

        <div className="clock">
          <div className="hand hours"></div>
          <div className="hand minutes"></div>
          <div className="hand seconds"></div>
          <div className="point"></div>
          <div className="marker">
            <span className="marker__1"></span>
            <span className="marker__2"></span>
            <span className="marker__3"></span>
            <span className="marker__4"></span>
          </div>
        </div>

        <div className="chip">
          <div className="chip__icon">
            <ion-icon name="color-palette"></ion-icon>
          </div>
          <p>Neumorphic Design</p>
          <div className="chip__close">
            <ion-icon name="close"></ion-icon>
          </div>
        </div>

        <div className="circle" onClick={handlePlayButtonClick}>
          <span className="circle__btn">
            {isPlaying ? (
              <img className="pause" alt="pause" height="20px" src={pause} />
            ) : (
              <img className="play" alt="play" height="20px" src={play} />
            )}
          </span>
          <span className="circle__back-1"></span>
          <span className="circle__back-2"></span>
        </div>

        <div className="form">
          <input
            type="text"
            className="form__input"
            placeholder="Type anything..."
          />
        </div>

        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search..."
          />
          <div className="search__icon">
            <ion-icon name="search"></ion-icon>
          </div>
        </div>

        <div className="segmented-control">
          <input
            type="radio"
            name="radio2"
            value="3"
            id="tab-1"
            checked={activeTab === "tab-1"}
            onChange={() => handleTabChange("tab-1")}
          />
          <label htmlFor="tab-1" className="segmented-control__1">
            <p>Tab 1</p>
          </label>

          <input
            type="radio"
            name="radio2"
            value="4"
            id="tab-2"
            checked={activeTab === "tab-2"}
            onChange={() => handleTabChange("tab-2")}
          />
          <label htmlFor="tab-2" className="segmented-control__2">
            <p>Tab 2</p>
          </label>

          <input
            type="radio"
            name="radio2"
            value="5"
            id="tab-3"
            checked={activeTab === "tab-3"}
            onChange={() => handleTabChange("tab-3")}
          />
          <label htmlFor="tab-3" className="segmented-control__3">
            <p>Tab 3</p>
          </label>

          <div className="segmented-control__color"></div>
        </div>

        <div className="icon">
          <div class="icon__home">
            <img alt="ic1" height={"20px"} src={user} />
          </div>
          <div class="icon__account">
            <img alt="ic1" height={"20px"} src={home} />
          </div>
          <div class="icon__settings">
            <img alt="ic1" height={"20px"} src={config} />
          </div>
        </div>

        <div className="slider">
          <div class="slider__box">
            <span class="slider__btn" id="find"></span>
            <span class="slider__color"></span>
            <span class="slider__tooltip">50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiBorder;
