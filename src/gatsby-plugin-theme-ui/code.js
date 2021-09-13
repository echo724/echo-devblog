import { merge } from "theme-ui";
import originalCodeTheme from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code";

const code = merge(originalCodeTheme,{
    ".code-title": {
        backgroundColor: `#FFCB6B`,
    },
    ".prism-code": {
        backgroundColor: `#212121`,
      },
    ".highlight-line": {
        backgroundColor: `#FFCB6B`,
        borderLeft: `4px solid #F6B352`,
    }
});

export default code;