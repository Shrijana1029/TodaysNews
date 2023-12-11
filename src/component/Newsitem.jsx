import React from "react";

const Newsitem = ({ title, description, src, myurl }) => {
  return (
    <>
      <div className="card mx-2 my-5" style={{ height: "31rem", width: "20rem" }}>
        <img
          src={src}
          className="card-img-top"
          
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">{description}....</p>
          <a href={myurl} className="btn btn-danger btn btn-primary btn-sm">
            Explore
          </a>
        </div>
      </div>
    </>
  );
};

export default Newsitem;
