import { renderToStaticMarkup } from "react-dom/server";
import cssContent from "./styles.css";
import App from "./App";

function render() {
  const content = renderToStaticMarkup(<App />);
  return `<!DOCTYPE html>${content}`;
}

export { render, cssContent };
