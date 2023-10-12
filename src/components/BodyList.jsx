import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { books } from "../constants";

const BodyList = ({ searchTerm }) => {
  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.score.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const readMoreLinks = [
    "Top 25 Horror Books",
    "How to use a planner effectively",
    "Books to get back into reading",
    "10 Books you must read in your lifetime",
    "How to be more productive",
    "Top 5 Stephen King Books",
  ];

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <h1 className="display-4 m-2">
            Reviews of Books I've Read: My Literary Journey
          </h1>
          <p className="lead ms-5">By Hugo Mazariego</p>
          <hr></hr>
          <p className="lead mx-5">
            Welcome to 'Reviews of Books I've Read: My Literary Journey.' Join
            me on a captivating voyage through the pages of literature as I
            share my thoughts, insights, and reviews on the books that have
            enriched my life. Whether you're seeking recommendations, eager to
            explore new genres, or simply curious about the world of literature,
            this is your portal to discover and discuss a diverse range of
            literary treasures. Come along as we embark on this literary
            adventure together.
          </p>
          {filteredBooks.map(
            ({ id, name, author, authorBio, image, score, description }) => (
              <div key={id} className="text-center mt-5">
                <h1 className="display-5">{name}</h1>
                <p className="text-center">
                  By{" "}
                  <span>
                    <a
                      href={authorBio}
                      target="_blank"
                      rel="noreferrer"
                      className="text-success fw-bold"
                    >
                      {author}
                    </a>
                  </span>
                </p>
                <img src={image} alt={name} style={{ width: "20rem" }} />
                <p className="lead">{score}</p>
                <p className="ms-5 me-5 pb-4" style={{ fontSize: "1.2rem" }}>
                  {description}
                </p>
                <hr />
              </div>
            )
          )}
        </div>
        <div className="col-md-2 d-none d-sm-block">
          <div className="pt-5">
            <p
              style={{
                fontFamily: "Argent CF",
              }}
              className="fs-5"
            >
              Read More
            </p>
            <ul className="list-unstyled" style={{ paddingLeft: "0" }}>
              {readMoreLinks.map((link, index) => (
                <li key={index} className="my-3">
                  <p
                    style={{ cursor: "pointer" }}
                    className="text-success text-decoration-none"
                  >
                    {link}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyList;
