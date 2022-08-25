import React from "react";

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} height={250} />
      <p>{title}</p>
    </div>
  );
};
