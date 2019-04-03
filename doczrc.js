// https://github.com/nicholasess/docz-example
import {css} from "docz-plugin-css";

const isProduction = process.env.NODE_ENV === "production";

export default {
  title: "Ableneo modules",
  description: "Monorepo with modules used on our projects",
  themeConfig: {
    colors: {
      primary: "#166977",
    },
  },
  typescript: true,
  plugins: [
    css({
      preprocessor: "sass",
    }),
  ],
  menu: ["Introduction"],
  base: isProduction ? "/modules/" : "",
};
