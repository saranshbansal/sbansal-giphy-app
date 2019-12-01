import React from "react";

const LOADER = `https://media.giphy.com/media/8F0rJxdTt9xS/giphy.gif`;

const Loader = () => {
  return (
    <div aria-label="loading...">
      <img width="200" height="200" alt="loading..." src={LOADER} />
    </div>
  );
};

export default Loader;
