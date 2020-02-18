import React from "react";
import "./Article.css";

const Article = props => {
  const { title, author, text } = props.article;
  return (
    <>
      <div className="article">
        <h1 className="article__title">{title}</h1>
        <h5 className="article__author">{author}</h5>
        <p className="article__text">{text}</p>
      </div>
    </>
  );
};

export default Article;
