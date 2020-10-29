import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ViewPanel.scss";
import { selectViewState, setViewState } from "../../redux/appSlice";
import { selectLanguage } from "../../redux/appSlice";
import { Button } from "../UI/Button/Button";
export const ViewPanel = () => {
  const dispatch = useDispatch();
  const dict = useSelector(selectLanguage);
  const viewState = useSelector(selectViewState);
  return (
    <div className="ViewPanel">
      <Button
        to={(location) => `${location.pathname}?v=table`}
        className={viewState === "table" ? "active" : ""}
        title={
          dict.state === "Ru"
            ? dict.dictionaryRu.view.table
            : dict.dictionaryEng.view.table
        }
        onClick={() => {
          dispatch(setViewState("table"));
        }}
      />
      <Button
        to={(location) => `${location.pathname}?v=preview`}
        className={viewState === "preview" ? "active" : ""}
        title={
          dict.state === "Ru"
            ? dict.dictionaryRu.view.preview
            : dict.dictionaryEng.view.preview
        }
        onClick={() => {
          dispatch(setViewState("preview"));
        }}
      />
    </div>
  );
};
