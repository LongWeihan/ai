// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/ai/";
    },
  },{id: "nav-项目",
          title: "项目",
          description: "我的开源项目与系统实验。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/zh/projects/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected open-source work and experiments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/projects/";
          },
        },{id: "nav-github",
          title: "GitHub",
          description: "我的 GitHub 主页与部分仓库。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/zh/repositories/";
          },
        },{id: "nav-github",
          title: "GitHub",
          description: "Selected repositories and profile cards.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/repositories/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "我的教育背景、技能、项目与奖项。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/zh/cv/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, skills, projects, and honors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/cv/";
          },
        },{id: "nav-友情链接",
          title: "友情链接",
          description: "朋友与友情链接。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/zh/friends/";
          },
        },{id: "nav-friends",
          title: "Friends",
          description: "Friends and links.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/friends/";
          },
        },{id: "projects-flashtoken",
          title: 'FlashToken',
          description: "Tokenizer-side prefix caching for low-latency LLM systems (tiktoken).",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/flashtoken/";
            },},{id: "projects-flashtoken",
          title: 'FlashToken',
          description: "Tokenizer 端前缀缓存：让低延迟 LLM 系统的 tokenization 更快（tiktoken）。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/flashtoken/";
            },},{id: "projects-oversearchguard",
          title: 'OverSearchGuard',
          description: "Conflict-aware evidence thinning for search-augmented LLMs (RAG / agents).",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/oversearchguard/";
            },},{id: "projects-oversearchguard",
          title: 'OverSearchGuard',
          description: "面向 RAG / Agent 的冲突感知证据裁剪（evidence thinning）。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/oversearchguard/";
            },},{id: "projects-turbo-softmax",
          title: 'Turbo-Softmax',
          description: "High-precision fast Softmax in C for generic MCUs (IEEE-754 tricks + poly exp).",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/turbo-softmax/";
            },},{id: "projects-turbo-softmax",
          title: 'Turbo-Softmax',
          description: "面向通用 MCU 的高精度快速 Softmax（IEEE-754 位操作 + 多项式 exp）。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/turbo-softmax/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%65%69%68%61%6E%6C%6F%6E%67@%73%74%64.%75%65%73%74%63.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LongWeihan", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
