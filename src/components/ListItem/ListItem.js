import React from "react";
import "./ListItem.scss";
import {
  selectViewState,
  selectPeopleWithVideo,
  selectLanguage,
} from "../../redux/appSlice";
import { useSelector } from "react-redux";
import { Video } from "../UI/Video/Video";
import { Flipped } from "react-flip-toolkit";
import { FavBtn } from "../UI/FavBtn/FavBtn";

export const ListItem = (props) => {
  const viewState = useSelector(selectViewState);
  const peopleWithVideo = useSelector(selectPeopleWithVideo);
  const dict = useSelector(selectLanguage);

  const generateAge = (age) => {
    let txt;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      txt = `${age} лет`;
    } else {
      count = count % 10;
      if (count === 1) {
        txt = `${age} год`;
      } else if (count >= 2 && count <= 4) {
        txt = `${age} года`;
      } else {
        txt = `${age} лет`;
      }
    }
    return txt;
  };

  return (
    <Flipped
      flipId={props.info.id}
      onAppear={props.onAppear}
      onExit={props.onExit}
    >
      <div
        className={
          peopleWithVideo.includes(props.info.id)
            ? `ListItem  ${viewState} withVideo `
            : `ListItem  ${viewState} `
        }
      >
        <div className="info">
          <div className="credentials">
            <img src={`/img/avatars/${props.info.image}.svg`} alt="" />
            <p>{props.info.name}</p>
          </div>
          <FavBtn userId={props.info.id} className="star" />
          <p className="age">
            {dict.state === "Ru"
              ? generateAge(props.info.age)
              : `${props.info.age} years`}
          </p>
          <p className="phone">{props.info.phone}</p>
          <p className="phrase">
            {viewState === "preview" ? props.info.phrase : null}
          </p>
        </div>
        {props.info.video && viewState === "preview" ? (
          <Video videoSrc={props.info.video} />
        ) : null}
      </div>
    </Flipped>
  );
};
