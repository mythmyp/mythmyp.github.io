import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "数理基础",
    icon: "percent",
    children: [

    ],
  },
  {
    text: "计算机基础",
    icon: "computer",
    children: [
      {
        text: "个人电脑配置",
        link: "compBasic/pcConfig/",
      },
    ],
  },
  {
    text: "编程技术",
    icon: "code",
    children: [

    ],
  },
  "/demo/",
]);
