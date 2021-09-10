import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme,{
    initialColorModeName: `light`,
    config: {
    useCustomProperties: true,
    },
    colors: {
        modes: {
        dark: {
            primary: `#F6B352`,
            secondary: `#7f8ea3`,
            background: `#1F2124`,
            divide: `#383A3F`,
        },
        },
    },
    fonts: {
        body: `"Montserrat", "Nanum Gothic" ,-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    },
});

export default theme;