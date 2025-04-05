import React from 'react';
import ReactMarkdown from 'react-markdown';

const ClaudeRecipe = (props) => {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2 className="recipe-section-h2">Chef Sela Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
