import React, { useEffect, useMemo } from "react";
import { ListItem } from "../ListItem/ListItem";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  selectData,
  selectIsFetching,
  selectIsEmpty,
  selectFilterWord,
  selectSortType,
  selectSortDirection,
  selectViewState,
} from "../../redux/appSlice";
import "./List.scss";
import { Flipper } from "react-flip-toolkit";
import anime from "animejs";

const simultaneousAnimations = ({
  hideEnteringElements,
  animateEnteringElements,
  animateExitingElements,
  animateFlippedElements,
}) => {
  hideEnteringElements();
  animateExitingElements();
  animateFlippedElements();
  animateEnteringElements();
};

const animateElementIn = (el, i) => {
  anime({
    targets: el,
    opacity: 1,
    delay: i * 5,
    easing: "easeInQuad",
  });
};

const animateElementOut = (el, i, onComplete) => {
  anime({
    backgroundColor: "#FF7566",
    targets: el,
    opacity: 0,
    delay: i * 5,
    easing: "easeInQuad",
    complete: onComplete,
  });
};

export const List = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const filterWord = useSelector(selectFilterWord);
  const isFetching = useSelector(selectIsFetching);
  const isEmpty = useSelector(selectIsEmpty);
  const sortType = useSelector(selectSortType);
  const sortDirection = useSelector(selectSortDirection);
  const viewState = useSelector(selectViewState);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const list = useMemo(() => {
    return [...data]
      .filter((item) =>
        item.name.toLowerCase().includes(filterWord.toLowerCase())
      )
      .sort((a, b) => {
        const order = sortDirection === "ascending" ? 1 : -1;
        const value =
          sortType === "name"
            ? a[sortType].localeCompare(b[sortType])
            : a[sortType] - b[sortType];
        return order * value;
      })
      .map((item, index) => {
        return (
          <ListItem
            key={item.id}
            onAppear={animateElementIn}
            onExit={animateElementOut}
            index={index}
            info={item}
            flipId={item.id}
          />
        );
      });
  }, [data, filterWord, sortDirection, sortType]);

  return (
    <>
      {isFetching === false && isEmpty === false && data.length > 0 && (
        <Flipper
          handleEnterUpdateDelete={simultaneousAnimations}
          className="enter-update-delete-list"
          applyTransformOrigin="false"
          spring={{
            config: {
              damping: 25,
              stiffness: 1000,
              overshootClamping: false,
            },
            values: {
              translateY: [-15, 0],
              opacity: [0, 1],
            },
            delay: 1000,
          }}
          staggerConfig={{
            default: {
              reverse: true,
              speed: 1,
            },
          }}
          flipKey={`${sortType}-${sortDirection}-${filterWord}`}
          decisionData={data}
        >
          <div
            className={viewState === "table" ? "List table" : "List preview"}
          >
            {list}
          </div>
        </Flipper>
      )}
    </>
  );
};
