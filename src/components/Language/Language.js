import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Language.scss";
import { setLanguage } from "../../redux/appSlice";
import { selectLanguage } from "../../redux/appSlice";

export const Language = () => {
  const dispatch = useDispatch();
  const dict = useSelector(selectLanguage);
  return (
    <div className="Language">
      <p>
        {dict.state === "Ru"
          ? dict.dictionaryRu.language
          : dict.dictionaryEng.language}
      </p>
      <button
        className={dict.state === "Ru" ? "active" : null}
        onClick={() => {
          dispatch(setLanguage("Ru"));
        }}
      >
        Rus
      </button>
      <button
        className={dict.state === "Eng" ? "active" : null}
        onClick={() => {
          dispatch(setLanguage("Eng"));
        }}
      >
        Eng
      </button>
    </div>
  );
};
