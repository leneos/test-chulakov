import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLanguage,
  selectSortType,
  setSortType,
} from "../../redux/appSlice";
import { Button } from "../UI/Button/Button";
import "./FilterPanel.scss";
export const FilterPanel = () => {
  const dispatch = useDispatch();
  const dict = useSelector(selectLanguage);
  const sortType = useSelector(selectSortType);
  return (
    <div className="FilterPanel">
      <Button
        className={sortType === "id" ? "active" : ""}
        title={
          dict.state === "Ru" ? dict.dictionaryRu.id : dict.dictionaryEng.id
        }
        onClick={() => {
          dispatch(setSortType("id"));
        }}
      />

      <Button
        className={sortType === "name" ? "active" : ""}
        title={
          dict.state === "Ru" ? dict.dictionaryRu.name : dict.dictionaryEng.name
        }
        onClick={() => {
          dispatch(setSortType("name"));
        }}
      />
      <Button
        className={sortType === "age" ? "active" : ""}
        title={
          dict.state === "Ru" ? dict.dictionaryRu.age : dict.dictionaryEng.age
        }
        onClick={() => {
          dispatch(setSortType("age"));
        }}
      />
    </div>
  );
};
