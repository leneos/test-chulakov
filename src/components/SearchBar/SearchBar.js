import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, selectLanguage } from "../../redux/appSlice";
import "./SearchBar.scss";
export const SearchBar = () => {
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    dispatch(filterData(e.target.value.trim()));
  };
  const dict = useSelector(selectLanguage);

  return (
    <input
      placeholder={
        dict.state === "Ru"
          ? dict.dictionaryRu.inputPlaceholder
          : dict.dictionaryEng.inputPlaceholder
      }
      onChange={inputHandler}
      className="SearchBar"
      type="text"
    />
  );
};
