import{_ as r,M as e,p as D,q as i,R as s,t as l,N as n,V as o}from"./framework-5866ffd3.js";const p={},y=s("h1",{id:"github-actions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#github-actions","aria-hidden":"true"},"#"),l(" Github Actions")],-1),u=s("p",null,"Github Actions 是一套基于 github 的自动化执行框架，可以自定义各种 workflow 及工具来满足 CI, CD 相关的各种需求。",-1),d=s("h2",{id:"创建一个容器的-action",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建一个容器的-action","aria-hidden":"true"},"#"),l(" 创建一个容器的 action")],-1),m={href:"https://github.com/airdb/actions",target:"_blank",rel:"noopener noreferrer"},C={href:"https://help.github.com/en/actions/creating-actions/creating-a-docker-container-action",target:"_blank",rel:"noopener noreferrer"},b=s("p",null,"主体思路：",-1),v=s("p",null,"通过执行 docker run 命令实现 actions 操作。",-1),h=s("p",null,"Workflow:",-1),_=s("ol",null,[s("li",null,"action.yml 中配置, 启用自定义的 action , 增加 input 变量作为 docker run 参数"),s("li",null,"调用自定义的 action , 从 env 中获取 GITHUB_EVENT_PATH, 读取 event.json 全部内容"),s("li",null,"代码中进行自定义操作"),s("li",null,'设置输出, 如 echo "::set-output name=time::$time"')],-1),E=s("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Deploy Docs")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"on"),s("span",{style:{color:"#D4D4D4"}},": ["),s("span",{style:{color:"#CE9178"}},"push"),s("span",{style:{color:"#D4D4D4"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"jobs"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#569CD6"}},"deploy-gh-pages"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#569CD6"}},"runs-on"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"ubuntu-latest")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#569CD6"}},"steps"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Checkout")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"uses"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"actions/checkout@v3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"with"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"fetch-depth"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"0")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Setup Node.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"uses"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"actions/setup-node@v3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"with"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"node-version"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"18")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Build Docs")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"env"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"NODE_OPTIONS"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"--max_old_space_size=4096")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"run"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#C586C0"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CE9178"}},"          make build")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Deploy")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"uses"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"peaceiris/actions-gh-pages@v3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"with"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"github_token"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"${{ secrets.GITHUBBOTTOKEN }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"publish_branch"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"gh-pages")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"publish_dir"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"./docs/.vuepress/dist")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Go")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"on"),s("span",{style:{color:"#D4D4D4"}},": ["),s("span",{style:{color:"#CE9178"}},"push"),s("span",{style:{color:"#D4D4D4"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"jobs"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#569CD6"}},"build"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Build")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#569CD6"}},"runs-on"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"ubuntu-latest")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#569CD6"}},"steps"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Set up Go")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"uses"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"actions/setup-go@v2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"with"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"stable"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"'true'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"go-version"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"1.18")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"id"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"go")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Checkout")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"uses"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"actions/checkout@v3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"with"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#569CD6"}},"fetch-depth"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"0")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Lint")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"run"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#C586C0"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CE9178"}},"          make lint")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Test")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"run"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"make test")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      - "),s("span",{style:{color:"#569CD6"}},"name"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"Build")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"run"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"make Build")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function k(f,B){const a=e("ExternalLinkIcon"),c=e("CodeGroupItem"),t=e("CodeGroup");return D(),i("div",null,[y,u,d,s("p",null,[l("Github Demo: "),s("a",m,[l("airdb actions"),n(a)])]),s("p",null,[l("Refer: "),s("a",C,[l("https://help.github.com/en/actions/creating-actions/creating-a-docker-container-action"),n(a)])]),b,v,h,_,n(t,null,{default:o(()=>[n(c,{title:"Nodejs",active:""},{default:o(()=>[E]),_:1}),n(c,{title:"Golang"},{default:o(()=>[g]),_:1})]),_:1})])}const G=r(p,[["render",k],["__file","actions.html.vue"]]);export{G as default};
