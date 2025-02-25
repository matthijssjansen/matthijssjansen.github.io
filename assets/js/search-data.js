// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Projects I have been involved in over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-columbo",
          title: 'Columbo',
          description: "A reasoning framework for Kubernetes&#39; configuration space. Explore and optimize the configuration of your Kubernetes cluster for fast application deployment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/columbo/";
            },},{id: "projects-continuum",
          title: 'Continuum',
          description: "Automate cloud-edge infrastructure deployments and benchmarks with Continuum. Deploy and test your software on local and remote hardware through a simple interface.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/continuum/";
            },},{id: "projects-ddlbench",
          title: 'DDLBench',
          description: "Distributed deep learning benchmark suite. Compare state-of-the-art data-, model-, and pipeline-parallel algorithms for distributing your deep learning tasks across GPUs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ddlbench/";
            },},{id: "projects-metabench",
          title: 'MetaBench',
          description: "Performance benchmark of Meta&#39;s flagship virtual reality (VR) hardware. Explore the network- and energy-usage of virtual reality applications in wired and wireless offloading scenarios for VR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/metaverse/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/283/1489.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%74%74%68%69%6A%73.%73.%6A%61%6E%73%65%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/matthijssjansen", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/matthijs-jansen-6411a81bb", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=klNSpT8AAAAJ", "_blank");
        },
      },];
