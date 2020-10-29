import React, { useRef, useState } from "react";
import "./Video.scss";
import VisibilitySensor from "react-visibility-sensor";
import { useDispatch, useSelector } from "react-redux";
import {
  selectVideoWasClicked,
  setVideoClicked,
} from "../../../redux/appSlice";
import useWindowDimensions from "../../../customHooks/useWindowDimensions";
import { useRect } from "../../../customHooks/useRect";
import { useEffect } from "react";

export const Video = ({ videoSrc }) => {
  const dispatch = useDispatch();
  const videoWasClicked = useSelector(selectVideoWasClicked);
  const vidRef = useRef(null);
  const { height: windowHeight } = useWindowDimensions();
  const { height: videoHeight } = useRect(vidRef);
  const [visibilitySensors, setVisibilitySensors] = useState({
    top: 0,
    bottom: 0,
  });
  useEffect(() => {
    setVisibilitySensors({
      top: windowHeight / 2 - videoHeight / 2 - 100,
      bottom: windowHeight / 2 - videoHeight / 2 - 100,
    });
  }, [windowHeight, videoHeight]);
  const onChange = (isVisible) => {
    const playPromise = vidRef.current.play();
    if (isVisible && videoWasClicked === false && playPromise !== undefined) {
      playPromise
        .then((_) => {
          vidRef.current.play();
        })
        .catch((error) => {
          console.log("playback prevented");
        });
    } else {
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            vidRef.current.pause();
          })
          .catch((error) => {
            console.log("playback prevented");
          });
      }
    }
  };

  return (
    <VisibilitySensor
      offset={{ top: visibilitySensors.top, bottom: visibilitySensors.bottom }}
      onChange={onChange}
    >
      {({ isVisible }) => {
        return (
          <video
            className="Video"
            ref={vidRef}
            playsInline={true}
            controls={true}
            muted={true}
            loop={true}
            onClick={(e) => {
              dispatch(setVideoClicked());
            }}
          >
            <source
              src={`/img/videos/${videoSrc}.mp4#t=0.1`}
              type="video/mp4"
            />
          </video>
        );
      }}
    </VisibilitySensor>
  );
};
