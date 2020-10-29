import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortDirection, selectSortDirection } from "../../redux/appSlice";
import { selectLanguage } from "../../redux/appSlice";
import { Button } from "../UI/Button/Button";
import "./SortPanel.scss";
export const SortPanel = () => {
  const dispatch = useDispatch();
  const dict = useSelector(selectLanguage);
  const sortDirection = useSelector(selectSortDirection);

  return (
    <div className="SortPanel">
      <Button
        onClick={() => {
          dispatch(setSortDirection("ascending"));
        }}
        className={sortDirection === "ascending" ? "active" : ""}
        title={
          dict.state === "Ru"
            ? dict.dictionaryRu.sorting.ascending
            : dict.dictionaryEng.sorting.ascending
        }
      />
      <Button
        onClick={() => {
          dispatch(setSortDirection("descending"));
        }}
        className={sortDirection === "descending" ? "active" : ""}
        title={
          dict.state === "Ru"
            ? dict.dictionaryRu.sorting.descending
            : dict.dictionaryEng.sorting.descending
        }
      />
    </div>
  );
};
