"use client";

import { useTheme } from "next-themes";

const Comment = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "github-dark" : "github-light";
    setTheme(newTheme);
  };

  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute("repo", "tamoimi/tami-dev-blog");
        scriptElem.setAttribute("issue-term", "pathname");
        scriptElem.setAttribute("theme", theme === "dark" ? "github-dark" : "github-light");
        scriptElem.setAttribute("label", "blog-comment");
        scriptElem.crossOrigin = "anonymous";
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};

export default Comment;
