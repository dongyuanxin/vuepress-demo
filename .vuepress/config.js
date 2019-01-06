module.exports = {
  base: "/web-interview/",
  title: "GodBMW",
  description: "Just a demo to learn vuepress",
  markdown: {
    lineNumbers: true,
    // anchor: { permalink: false },
    toc: { includeLevel: [1, 2, 3] }
  },
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    sidebar: [
      {
        title: "foo",
        collapsable: false,
        children: ["/foo/", "/foo/one", "/foo/two"]
      },
      {
        title: "bar",
        collapsable: false,
        children: ["/bar/", "/bar/three", "/bar/four"]
      }
    ],
    // 添加导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/about" },
      { text: "联系", link: "/contact" },
      {
        text: "更多",
        items: [
          {
            text: "博客",
            link: "https://godbmw.com/"
          },
          {
            text: "掘金",
            link: "https://juejin.im/user/5b91fcf06fb9a05d3c7fd4a5"
          }
        ]
      }
    ]
  }
};
