import React from "react";
import SearchContainer from "./SearchContainer";
import Trending from "./Trending.js";
import RandomGif from "./RandomGif.js";
import Tabs from "./library/Tabs";

const Layout = () => {
  return (
    <div className="flex-container">
      <SearchContainer />

      <Tabs>
        <div label="TRENDINGS">
          <Trending />
        </div>
        <div label="RANDOM">
          <RandomGif />
        </div>
      </Tabs>
    </div>
  );
};

export default Layout;
