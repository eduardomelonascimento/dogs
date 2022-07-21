import { useState } from "react";

export default function Image({ src, alt }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    if (document.querySelector(".pointer-events-none")) {
      document
        .querySelector(".pointer-events-none")
        .classList.remove("pointer-events-none");
    }
    target.style.opacity = 1;
    setSkeleton(false);
  }

  return (
    <div className="skeleton-container">
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} src={src} alt={alt} />
    </div>
  );
}
