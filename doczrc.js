// https://github.com/nicholasess/docz-example

const isProduction = process.env.NODE_ENV === "production";

export default {
  title: "Ableneo modules",
  description: "Monorepo with modules used on our projects",
  ignore: [],
  themeConfig: {
    colors: {
      primary: "#166977",
    },
  },
  propsParser: true,
  typescript: true,
  codeSandbox: true,

  menu: ["Readme"],
  base: isProduction ? "/modules/" : "",
};
