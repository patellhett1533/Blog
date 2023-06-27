import React, { useState } from "react";
import ReactHighlight from "react-highlight";

const CodeShow = () => {
  const [copy, setCopy] = useState(false);

  setTimeout(() => {
    if (copy) {
      setCopy(false);
    }
  }, 3000);

  const codeOf = `<article class="container">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits
     of eating garlic bread with cheese
    to their children with the food earning such
    an iconic status in our culture that kids will
    often dress up as warm cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated
    appetizer may be linked to a series of rabies
    cases springing up around the country.
  </p>
</article>`;

  const copyClipboard = () => {
    navigator.clipboard.writeText(codeOf);
    setCopy(true);
  };

  return (
    <div className="relative mb-3">
      <div className="copy-btn absolute top-2 right-3">
        {!copy ? (
          <svg
            width="24"
            className="cursor-pointer"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={copyClipboard}
          >
            <path
              d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
              stroke="rgb(156 163 175)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
              stroke="rgb(156 163 175)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />{" "}
          </svg>
        ) : (
          <svg
            width="24"
            className="cursor-pointer"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={copyClipboard}
          >
            <path
              opacity="0.4"
              d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
              stroke="rgb(156 163 175)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
              stroke="rgb(156 163 175)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.08008 14.9998L8.03008 16.9498L11.9201 13.0498"
              stroke="rgb(156 163 175)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
      <ReactHighlight className="html p-6 rounded-lg">{codeOf}</ReactHighlight>
    </div>
  );
};

export default CodeShow;
