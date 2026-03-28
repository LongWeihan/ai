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
          description: "近期重点 Agent 系统与既有研究工程作品。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/zh/projects/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected agent systems and research engineering work.",
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
          description: "下载 PDF 简历。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai/zh/cv/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download CV (PDF).",
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
        },{id: "projects-codex-long-running-harness",
          title: 'codex-long-running-harness',
          description: "Codex-first harness for long-running app development with sprint planning, evaluator loops, and benchmark snapshots.",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/codex-long-running-harness/";
            },},{id: "projects-codex-long-running-harness",
          title: 'codex-long-running-harness',
          description: "面向长时运行应用开发的 Codex-first harness，强调 sprint 规划、评估闭环和 benchmark 快照。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/codex-long-running-harness/";
            },},{id: "projects-crewai-rs",
          title: 'crewai-rs',
          description: "Rust-native multi-agent orchestration with typed tasks, deterministic flow control, and deployment-friendly runtime design.",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/crewai-rs/";
            },},{id: "projects-crewai-rs",
          title: 'crewai-rs',
          description: "Rust 原生多 Agent 编排框架，强调类型化任务、确定性流程控制与更适合部署的运行时设计。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/crewai-rs/";
            },},{id: "projects-flashtoken",
          title: 'FlashToken',
          description: "Tokenizer-side prefix caching for low-latency LLM systems, with 27x-37x speedups on reusable prompts.",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/flashtoken/";
            },},{id: "projects-flashtoken",
          title: 'FlashToken',
          description: "面向低延迟 LLM 系统的 Tokenizer 端前缀缓存，在可复用提示上可达 27x-37x 提速。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/flashtoken/";
            },},{id: "projects-orderguard",
          title: 'OrderGuard',
          description: "Permutation-marginalized LLM judging, reranking, and tool selection that reduces order sensitivity at inference time.",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/orderguard/";
            },},{id: "projects-orderguard",
          title: 'OrderGuard',
          description: "通过置换边缘化降低 LLM 判题、重排和工具选择对候选顺序的敏感性。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/orderguard/";
            },},{id: "projects-oversearchguard",
          title: 'OverSearchGuard',
          description: "Conflict-aware evidence thinning for agentic RAG, with cost-aware robustness to duplicated noise.",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/oversearchguard/";
            },},{id: "projects-oversearchguard",
          title: 'OverSearchGuard',
          description: "面向 Agentic RAG 的冲突感知证据裁剪层，兼顾鲁棒性与 token 成本。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/oversearchguard/";
            },},{id: "projects-taskcaptain",
          title: 'TaskCaptain',
          description: "Supervised execution platform for real workspaces, with transparent agent runs, task state, and local-first control.",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/taskcaptain/";
            },},{id: "projects-taskcaptain",
          title: 'TaskCaptain',
          description: "面向真实工作区的可监督 Agent 执行平台，强调任务状态透明、运行过程可见、控制权本地优先。",
          section: "Projects",handler: () => {
              window.location.href = "/ai/zh/projects/taskcaptain/";
            },},{id: "projects-turbo-softmax",
          title: 'Turbo-Softmax',
          description: "Fast high-precision Softmax kernels in C for resource-constrained CPUs and MCUs.",
          section: "Projects",handler: () => {
              window.location.href = "/ai/projects/turbo-softmax/";
            },},{id: "projects-turbo-softmax",
          title: 'Turbo-Softmax',
          description: "面向资源受限 CPU 与 MCU 的高精度快速 Softmax C 内核实现。",
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
