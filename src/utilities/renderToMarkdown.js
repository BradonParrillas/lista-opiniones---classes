import { marked } from "marked";

const renderToMarkdown = (markdownText) => {
  const htmlText = marked.parse(
    markdownText,
    {
      sanitize: true
    }
  );
  return htmlText
};

export default renderToMarkdown;