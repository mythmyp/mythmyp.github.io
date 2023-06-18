import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { cut } from "nodejs-jieba";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "myp's blog",
  description: "myp's blog",

  theme,

  // plugins
  plugins: [
    searchProPlugin({
      // 配置选项
      indexContent: true,
      indexOptions: {
        // 使用 nodejs-jieba 进行分词
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    }),
  ],
});
