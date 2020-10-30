import React from "react";
import { List } from "../List/List";
import { Panels } from "../Panels/Panels";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSortDirection,
  selectSortType,
  selectViewState,
  setSortDirection,
  setSortType,
  setViewState,
} from "../../redux/appSlice";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export const Main = ({ history }) => {
  const dispatch = useDispatch();
  const sortDir = useSelector(selectSortDirection);
  const sortType = useSelector(selectSortType);
  const viewState = useSelector(selectViewState);
  const location = useLocation();
  useEffect(() => {
    console.log(history);
    const { sd, st, v } = queryString.parse(location.search);
    if (
      sd !== "" &&
      st !== "" &&
      v !== "" &&
      sd !== undefined &&
      st !== undefined &&
      v !== undefined &&
      (sd === "ascending" || sd === "descending") &&
      (st === "id" || st === "name" || st === "age") &&
      (v === "table" || v === "preview")
    ) {
      dispatch(setSortDirection(sd));
      dispatch(setSortType(st));
      dispatch(setViewState(v));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    history.push(`?sd=${sortDir}&v=${viewState}&st=${sortType}`);
    // eslint-disable-next-line
  }, [viewState, sortDir, sortType]);
  return (
    <>
      <Panels />
      <List />
    </>
  );
};
