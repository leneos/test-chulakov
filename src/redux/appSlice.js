import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const counterSlice = createSlice({
  name: "app",
  initialState: {
    data: [],
    favouritePeople: [],
    peopleWithVideo: [],
    isFetching: true,
    isEmpty: true,
    sortDirection: "ascending",
    filterWord: "",
    sortType: "id",
    viewState: "table",
    videoWasClicked: false,
    windowHeight: 0,
    videoHeight: 0,
    language: {
      state: "Ru",
      dictionaryEng: {
        id: "ID",
        name: "Name",
        age: "Age",
        view: { table: "Table", preview: "Preview" },
        inputPlaceholder: "Type name or surname",
        language: "Language",
        sorting: { ascending: "Ascending", descending: "Descending" },
      },
      dictionaryRu: {
        id: "Айди",
        name: "Имя",
        age: "Возраст",
        view: { table: "Таблица", preview: "Превью" },
        inputPlaceholder: "Введите имя или фамилию",
        language: "Язык",
        sorting: { ascending: "По возрастанию", descending: "По убыванию" },
      },
    },
  },
  reducers: {
    addData: (state, { payload }) => {
      state.data = payload;
      state.favouritePeople = state.data
        .filter((item) => item.favourite)
        .map((item) => item.id);
      state.peopleWithVideo = state.data
        .filter((item) => item.video)
        .map((item) => item.id);
      if (state.data.length > 0) {
        state.isEmpty = false;
        state.isFetching = false;
      }
    },
    filterData: (state, { payload }) => {
      state.filterWord = payload;
    },
    setSortType: (state, { payload }) => {
      state.sortType = payload;
    },
    setSortDirection: (state, { payload }) => {
      state.sortDirection = payload;
    },
    setViewState: (state, { payload }) => {
      state.viewState = payload;
    },
    setFavourite: (state, { payload }) => {
      const index = state.favouritePeople.indexOf(payload);
      state.favouritePeople.includes(payload)
        ? state.favouritePeople.splice(index, 1)
        : state.favouritePeople.push(payload);
    },
    setLanguage: (state, { payload }) => {
      state.language.state = payload;
    },
    setVideoClicked: (state) => {
      state.videoWasClicked = true;
    },
    setWindowHeight: (state, { payload }) => {
      state.videoHeight = payload;
    },
  },
});

export const {
  addData,
  filterData,
  setSortType,
  setSortDirection,
  setViewState,
  setFavourite,
  setLanguage,
  setVideoClicked,
  setWindowHeight,
} = counterSlice.actions;

export const fetchData = () => (dispatch) => {
  Axios.get("data.json")
    .then((res) => {
      dispatch(addData(res.data));
    })
    .catch((err) => console.log(err));
};
export const selectPeopleWithVideo = (redux) => redux.app.peopleWithVideo;
export const selectLanguage = (redux) => redux.app.language;
export const selectFavouritePeople = (redux) => redux.app.favouritePeople;
export const selectViewState = (redux) => redux.app.viewState;
export const selectSortDirection = (redux) => redux.app.sortDirection;
export const selectSortType = (redux) => redux.app.sortType;
export const selectFilterWord = (redux) => redux.app.filterWord;
export const selectData = (redux) => redux.app.data;
export const selectIsFetching = (redux) => redux.app.isFetching;
export const selectIsEmpty = (redux) => redux.app.isEmpty;
export const selectVideoWasClicked = (redux) => redux.app.videoWasClicked;
export const selectWindowHeight = (redux) => redux.app.windowHeight;
export default counterSlice.reducer;
