import React from "react";
import "./Panels.scss";
import { SortPanel } from "../SortPanel/SortPanel";
import { ViewPanel } from "../ViewPanel/ViewPanel";
import { FilterPanel } from "../FilterPanel/FilterPanel";
import { Language } from "../Language/Language";
import { SearchBar } from "../SearchBar/SearchBar";
export const Panels = () => {
  return (
    <div className="Panels">
      <Language />
      <div className="listParams">
        <div className="leftPanels">
          <FilterPanel />
          <SortPanel />
        </div>
        <div className="rightPanels">
          <ViewPanel />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};
