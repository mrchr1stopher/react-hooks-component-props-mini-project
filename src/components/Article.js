import React from "react";

function Article({ title, date, preview }) {
  if (!date) {
    date = "January 1, 1970";
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
