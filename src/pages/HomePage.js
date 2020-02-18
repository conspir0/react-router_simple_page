import React from "react";
import Article from "../components/Article/Article";

const articles = [
  {
    id: 1,
    title: "First Article",
    author: "First Author",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, diam ut tempus luctus. Nunc laoreet urna nibh, a dapibus mi molestie eget. Proin a augue ac ipsum pretium convallis a sit amet eros. Nulla facilisi. In bibendum sem quis sapien accumsan pulvinar."
  },
  {
    id: 2,
    title: "Second Article",
    author: "Second Author",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, diam ut tempus luctus, mauris eros accumsan quam, eu blandit risus leo sit amet turpis. Pellentesque interdum mi a urna sagittis venenatis. Nunc fermentum massa neque, a tempus lorem dictum quis. Nulla luctus est turpis, id pulvinar augue efficitur nec. Sed tincidunt elementum arcu a dictum. Integer consectetur metus eu congue fermentum. Vivamus a imperdiet nunc. Nunc laoreet urna nibh, a dapibus mi molestie eget. Proin a augue ac ipsum pretium convallis a sit amet eros. Nulla facilisi. In bibendum sem quis sapien accumsan pulvinar."
  },
  {
    id: 3,
    title: "Third Article",
    author: "Third Author",
    text:
      "Sed tincidunt elementum arcu a dictum. Integer consectetur metus eu congue fermentum. Vivamus a imperdiet nunc. Nunc laoreet urna nibh, a dapibus mi molestie eget. Proin a augue ac ipsum pretium convallis a sit amet eros. Nulla facilisi. In bibendum sem quis sapien accumsan pulvinar."
  },
  {
    id: 4,
    title: "Fourth Article",
    author: "Fourth Author",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor."
  },
  {
    id: 5,
    title: "Fifth Article",
    author: "Fifth Author",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, diam ut tempus luctus, mauris eros accumsan quam, eu blandit risus leo sit amet turpis. Pellentesque interdum mi a urna sagittis venenatis. Nunc fermentum massa neque, a tempus lorem dictum quis. Nulla luctus est turpis, id pulvinar augue efficitur nec. Sed tincidunt elementum arcu a dictum. Integer consectetur metus eu congue fermentum. Vivamus a imperdiet nunc. Nunc laoreet urna nibh, a dapibus mi molestie eget."
  }
];

const HomePage = () => {
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default HomePage;
