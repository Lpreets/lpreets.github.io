(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(83)},50:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(5),r=a(7),c=a(6),i=a(1),o=a.n(i),s=a(40),m=a.n(s),u=(a(50),a(2)),d=Object(u.f)((function(e){return Object(i.useEffect)((function(){window.scrollTo(0,0)})),e.children})),E=a(21),g=a.n(E),p=a(9),b=a(42),h=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.Helmet,null,o.a.createElement("title",null,this.props.pageTitle," "),o.a.createElement("meta",{name:"description",content:"Portfolio Website for Lovepreet Zelenkov Singh"})))}}]),a}(i.Component),v=a(44),f=a(16),y=a(14),w=a(43),N=a.n(w),k=[{Social:o.a.createElement(y.a,null),link:"https://www.facebook.com/Lpreets/"},{Social:o.a.createElement(y.c,null),link:"https://www.linkedin.com/in/lpreet/"},{Social:o.a.createElement(y.b,null),link:"https://github.com/Lpreets"},{Social:o.a.createElement(y.d,null),link:"https://twitter.com/Lpreetsh"}],S=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).menuTrigger=l.menuTrigger.bind(Object(f.a)(l)),l.CLoseMenuTrigger=l.CLoseMenuTrigger.bind(Object(f.a)(l)),l.stickyHeader=l.stickyHeader.bind(Object(f.a)(l)),window.addEventListener("load",(function(){console.log("All assets are loaded")})),l}return Object(l.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",(function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")}));var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});return o.a.createElement("header",{className:"header-area header-style-two header--fixed"},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",{className:"header-left d-flex align-items-center"},o.a.createElement("div",{className:"logo"},o.a.createElement("a",{href:this.props.homeLink},"")),o.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},o.a.createElement(N.a,{className:"mainmenu",items:["home","about","service","portfolio","blog","contact"],currentClassName:"is-current",offset:-200},o.a.createElement("li",null,o.a.createElement("a",{href:"#home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"#about"},"About")),o.a.createElement("li",null,o.a.createElement("a",{href:"#service"},"Services")),o.a.createElement("li",null,o.a.createElement("a",{href:"#portfolio"},"Portfolio")),o.a.createElement("li",null,o.a.createElement("a",{href:"#blog"},"Latest")),o.a.createElement("li",null,o.a.createElement("a",{href:"#contact"},"Contact"))))),o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{className:"social-share-inner"},o.a.createElement("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},k.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"".concat(e.link)},e.Social))})))),o.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},o.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},o.a.createElement(p.d,null))),o.a.createElement("div",{className:"close-menu d-block d-lg-none"},o.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},o.a.createElement(p.h,null))))))}}]),a}(i.Component),j=[{Social:o.a.createElement(y.a,null),link:"https://www.facebook.com/Lpreets/"},{Social:o.a.createElement(y.c,null),link:"https://www.linkedin.com/in/lpreet/"},{Social:o.a.createElement(y.b,null),link:"https://github.com/Lpreets"},{Social:o.a.createElement(y.d,null),link:"https://twitter.com/Lpreetsh"}],C=function(){return o.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},o.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},o.a.createElement("div",{className:"row align-items-center justify-content-between"},o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20"},o.a.createElement("a",{href:"/home-one"})))),o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner text-center"},o.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},j.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"".concat(e.link)},e.Social))}))))),o.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20"},o.a.createElement("div",{className:"text"},o.a.createElement("p",null)))))))},x=a(13),L=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.tabStyle;return o.a.createElement("div",null,o.a.createElement("div",{className:"tabs-area"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(x.d,null,o.a.createElement(x.b,{className:"".concat(e)},o.a.createElement(x.a,null,"Who am I?"),o.a.createElement(x.a,null,"Technical Skills"),o.a.createElement(x.a,null,"Education & Certification"),o.a.createElement(x.a,null,"Experience")),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h6",null,"Passion"),"I am a Full-Stack Software Engineer driven by a passion for technology, learning, and development. My enthusiasm for technology began early in my life when I built my first PC at the age of 13, and since then, I've been interested in coding and databases.",o.a.createElement("br",null),"However, it wasn't until recently that I decided to turn my hobby into a career and pursue software development more seriously."),o.a.createElement("li",null,o.a.createElement("h6",null,"Hobbies"),"I love working out, playing games and learning new things.",o.a.createElement("br",null),"I'm driven by a passion for technology, learning, and development.",o.a.createElement("br",null),"I view every day as an opportunity to learn something new and grow as a person.")))),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h6",null,"Languages"),"HTML",o.a.createElement("br",null),"CSS: Bootstrap, Tailwind",o.a.createElement("br",null),"JavaScript: React",o.a.createElement("br",null),"TypeScript",o.a.createElement("br",null),"Python: Django",o.a.createElement("br",null),"C#",o.a.createElement("br",null),"SQL",o.a.createElement("br",null)),o.a.createElement("li",null,o.a.createElement("h6",null,"Databases"),"SQL: MySQL, SQLite",o.a.createElement("br",null),"NoSQL: MongoDB",o.a.createElement("br",null)),o.a.createElement("li",null,o.a.createElement("h6",null,"API"),"Django Rest Framework(DRF)",o.a.createElement("br",null),"Express",o.a.createElement("br",null),"Next.js",o.a.createElement("br",null),"Insomnia",o.a.createElement("br",null)),o.a.createElement("li",null,o.a.createElement("h6",null,"Full-Stack / Back-End"),"Django",o.a.createElement("br",null),"Node.js",o.a.createElement("br",null),"Next.jst",o.a.createElement("br",null)),o.a.createElement("li",null,o.a.createElement("h6",null,"Various"),"Figma",o.a.createElement("br",null),"GitHub",o.a.createElement("br",null),"Visual Studio",o.a.createElement("br",null),"Visual Studio Code",o.a.createElement("br",null))))),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h6",null,"HarvardX"),"CS50's Computer Science for Artifical Intelligence - Current ",o.a.createElement("br",null),"CS50's Introduction to Programming with Python - Current"),o.a.createElement("li",null,o.a.createElement("h6",null,"Coursera"),"Microsoft Azure AI Fundamentals AI-900 Exam Prep Specialization - Current",o.a.createElement("a",{href:"https://www.credly.com/badges/f9a6f169-1eaf-49b3-a6a9-a05547c0c8c3"},"Meta Full-Stack Software Engineer Certificate "),o.a.createElement("a",{href:"https://www.credly.com/badges/1577eef6-d928-45d2-89f1-a74b41a24276"},"Meta Back-End Developer Profesional Certificate "),o.a.createElement("a",{href:"https://www.credly.com/badges/e9433593-6ccd-42e1-a152-1e540b39aead"},"Meta Front-End Developer Profesional Certificate")),o.a.createElement("li",null,o.a.createElement("h6",null,"Udemy"),o.a.createElement("a",{href:"https://www.udemy.com/certificate/UC-b7fcbc1f-2d20-48c7-8c50-bc9ddc87454b/"},"Understanding TypeScript"),"Design Patterns in C# and .NET - Current ",o.a.createElement("br",null),"Mastering LINQ with C# and .NET - Current ",o.a.createElement("br",null),"Complete C# Masterclass - Current ",o.a.createElement("br",null),"C# Advanced Topics: Prepare for Technical Interviews - Current",o.a.createElement("a",{href:"https://www.udemy.com/certificate/UC-9776cdd8-1203-42e3-93b6-d800d9e34c19/"},"C# Intermediate: Classes, Interfaces and OOP"),o.a.createElement("a",{href:"https://www.udemy.com/certificate/UC-0275f880-c92e-47de-86ef-f6be318f4be8/"},"C# Basics for Beginners: Learn C# Fundamentals by Coding")),o.a.createElement("li",null,o.a.createElement("h6",null,"edX"),"IBM Introduction to Blockchain")))),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h6",null,"Upcoming")))))))))))}}]),a}(i.Component),I=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={rnName:"",rnEmail:"",rnSubject:"",rnMessage:""},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"contact-form--1"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 align-items-start"},o.a.createElement("div",{className:"col-lg-6 order-2 order-lg-1"},o.a.createElement("div",{className:"section-title text-left mb--50"},o.a.createElement("h2",{className:"title"},this.props.contactTitle),o.a.createElement("p",{className:"description"},"Feel free to reach me out on any of the social media platforms or leave me a message here and I will get back to you!",o.a.createElement("a",{href:"tel:40613736"}," 40613736")," or email:",o.a.createElement("a",{href:"mailto:lpreet.business@gmail.com"}," ","lpreet.business@gmail.com")," ")),o.a.createElement("div",{className:"form-wrapper"},o.a.createElement("form",null,o.a.createElement("label",{htmlFor:"item01"},o.a.createElement("input",{type:"text",name:"name",id:"item01",value:this.state.rnName,onChange:function(t){e.setState({rnName:t.target.value})},placeholder:"Your Name *"})),o.a.createElement("label",{htmlFor:"item02"},o.a.createElement("input",{type:"text",name:"email",id:"item02",value:this.state.rnEmail,onChange:function(t){e.setState({rnEmail:t.target.value})},placeholder:"Your email *"})),o.a.createElement("label",{htmlFor:"item03"},o.a.createElement("input",{type:"text",name:"subject",id:"item03",value:this.state.rnSubject,onChange:function(t){e.setState({rnSubject:t.target.value})},placeholder:"Write a Subject"})),o.a.createElement("label",{htmlFor:"item04"},o.a.createElement("textarea",{type:"text",id:"item04",name:"message",value:this.state.rnMessage,onChange:function(t){e.setState({rnMessage:t.target.value})},placeholder:"Your Message"})),o.a.createElement("button",{className:"rn-button-style--2 btn-solid",type:"submit",value:"submit",name:"submit",id:"mc-embedded-subscribe"},"Submit")))),o.a.createElement("div",{className:"col-lg-6 order-1 order-lg-2"},o.a.createElement("div",{className:"thumbnail mb_md--30 mb_sm--30"},o.a.createElement("img",{src:"".concat(this.props.contactImages),alt:"trydo"}))))))}}]),a}(i.Component),O=a(18),P=[{image:"image-1",category:"Meta Front-End Developer",title:"Little Lemon",link:"https://lpreets.github.io/meta-frontendcapstone"},{image:"image-2",category:"Meta Back-End Developer",title:"Little Lemon API",link:"https://lpreet.pythonanywhere.com"},{image:"image-3",category:"Projects",title:"MovieWorld",link:"https://lpreets.github.io/movieworld"},{image:"image-4",category:"Upcoming Projects",title:"Makroner&Co"},{image:"image-5",category:"Upcoming Projects",title:"NordlysBakeriet"},{image:"image-5",category:"Upcoming Projects",title:"Baby World"}],T=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.column,a=e.styevariation,n=P.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,n.map((function(e,n){return o.a.createElement("div",{className:"".concat(t),key:n},o.a.createElement("div",{className:"portfolio ".concat(a)},o.a.createElement("div",{className:"thumbnail-inner"},o.a.createElement("div",{className:"thumbnail ".concat(e.image)}),o.a.createElement("div",{className:"bg-blr-image ".concat(e.image)})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,e.category),o.a.createElement("h4",null,o.a.createElement("a",{href:e.link},e.title)),o.a.createElement("div",{className:"portfolio-button"},o.a.createElement("a",{className:"rn-btn",href:e.link},"View")))),o.a.createElement(O.b,{className:"link-overlay",to:e.link})))})))}}]),a}(i.Component),M=[{icon:o.a.createElement(p.g,null),title:"Custom Web Application Development",description:"Empower your business with tailor-made web applications designed to streamline operations and enhance user engagement. My expertise in full-stack development enables me to craft high-performance applications that are perfectly aligned with your business goals."},{icon:o.a.createElement(p.c,null),title:"Responsive Website Design & Development",description:"Capture your audience's attention with stunning and responsive websites. I utilize cutting-edge UX/UI design principles and the latest web technologies to create websites that not only look great but also perform exceptionally across all devices."},{icon:o.a.createElement(p.f,null),title:"API Development & Integration",description:"Unlock the full potential of your software systems through seamless integration. With my in-depth knowledge of RESTful API development, I can create and integrate APIs that facilitate efficient communication between different systems, enriching functionality and user experience."},{icon:o.a.createElement(p.b,null),title:"Database Design & Management",description:"Safeguard your critical business data with robust database solutions. By leveraging SQL or NoSQL databases like MySQL, MongoDB, I design and manage databases that ensure data integrity, security, and optimized performance, making your data work for you."},{icon:o.a.createElement(p.i,null),title:"Performance Optimization & Scalability",description:"Propel your web applications to new heights with optimization and scalability solutions. I employ advanced computer science principles to analyze and optimize your applications, ensuring they are poised for growth and can handle increased traffic with ease."},{icon:o.a.createElement(p.e,null),title:"Technical Consulting & Problem-Solving",description:"Navigate the complex landscape of technology with confidence. As a full-stack developer, I provide expert advice and innovative solutions to technical challenges, helping you overcome hurdles and maximize the potential of your current systems."}],A=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.column,t=M.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},t.map((function(t,a){return o.a.createElement("div",{className:"".concat(e),key:a},o.a.createElement("div",{className:"service service__style--2"},o.a.createElement("div",{className:"icon"},t.icon),o.a.createElement("div",{className:"content"},o.a.createElement("h3",{className:"title"},t.title),o.a.createElement("p",null,t.description))))}))))}}]),a}(i.Component),D=[{images:"02",title:"Upcoming",category:"Upcoming"},{images:"02",title:"Upcoming",category:"Upcoming"},{images:"02",title:"Upcoming",category:"Upcoming"},{images:"04",title:" Getting tickets to the big show",category:"Development"},{images:"01",title:"A big ticket gone to be an interesting ",category:"Management"},{images:"02",title:"The Home of the Future Could Bebes",category:"Design"}],U=[{textPosition:"text-left",category:"Welcome to my journey!",description:"",buttonText:"",buttonLink:""}],_=function(){var e=D.slice(0,3);return o.a.createElement("div",{className:"active-dark"},o.a.createElement(h,{pageTitle:"Lovepreet Zelenkov Singh"}),o.a.createElement(S,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),o.a.createElement("div",{id:"home",className:"fix"},o.a.createElement("div",{className:"slider-wrapper"},U.map((function(e,t){return o.a.createElement("div",{className:"slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25",key:t},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.category?o.a.createElement("span",null,e.category):"",o.a.createElement("h1",{className:"title"},"Lovepreet",o.a.createElement("br",null),"Zelenkov Singh",o.a.createElement("br",null),o.a.createElement(v.a,null,o.a.createElement("span",null," UX/UI Design"),o.a.createElement("span",null," React Developer"),o.a.createElement("span",null," RESTful APIs"),o.a.createElement("span",null," Databases"),o.a.createElement("span",null," Django"))," "),e.description?o.a.createElement("p",{className:"description"},e.description):"",e.buttonText?o.a.createElement("div",{className:"slide-btn"},o.a.createElement("a",{className:"rn-button-style--2 btn-primary-color",href:"".concat(e.buttonLink)},e.buttonText)):"")))))})))),o.a.createElement("div",{id:"about",className:"fix"},o.a.createElement("div",{className:"about-area ptb--120  bg_color--1"},o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 align-items-center"},o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("div",{className:"thumbnail"},o.a.createElement("img",{className:"w-100",src:"/assets/images/about/about-8.jpg",alt:"About Images"}))),o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("div",{className:"about-inner inner"},o.a.createElement("div",{className:"section-title"},o.a.createElement("h2",{className:"title"},"About Me"),o.a.createElement("p",{className:"description"},"")),o.a.createElement("div",{className:"row mt--30"},o.a.createElement(L,{tabStyle:"tab-style--1"}))))))))),o.a.createElement("div",{id:"service",className:"fix"},o.a.createElement("div",{className:"service-area creative-service-wrapper ptb--120 bg_color--5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"Services"),o.a.createElement("p",null,"Choose me as your technology partner and experience the transformation that expertly crafted web solutions can bring to your business.",o.a.createElement("br",null),"Let's collaborate to make your vision a reality.")))),o.a.createElement("div",{className:"row creative-service"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(A,{item:"6",column:"col-lg-4 col-md-6 col-sm-6 col-12 text-left"})))))),o.a.createElement("div",{id:"portfolio",className:"fix"},o.a.createElement("div",{className:"portfolio-area ptb--120 bg_color--1"},o.a.createElement("div",{className:"portfolio-sacousel-inner"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"Projects"),o.a.createElement("p",null,"Here is a overview of current and upcoming projects")))),o.a.createElement("div",{className:"row"},o.a.createElement(T,{styevariation:"text-center mt--40",column:"col-lg-4 col-md-6 col-sm-6 col-12",item:"6"})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"view-more-btn mt--60 mt_sm--30 text-center"},o.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/"},o.a.createElement("span",null,"View More"))))))))),o.a.createElement("div",{id:"blog",className:"fix"},o.a.createElement("div",{className:"rn-blog-area ptb--120 bg_color--5 mb-dec--30"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-end"},o.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"section-title text-center"},o.a.createElement("h2",null,"Latest"),o.a.createElement("p",null,"What I'm working lately or what interest I have lately will be posted here",o.a.createElement("br",null),"If you want to know what I'm up to lately, you can check it out here!")))),o.a.createElement("div",{className:"row mt--60 mt_sm--40"},e.map((function(e,t){return o.a.createElement("div",{className:"col-lg-4 col-md-6 col-12",key:t},o.a.createElement("div",{className:"blog blog-style--1"},o.a.createElement("div",{className:"thumbnail"},o.a.createElement("a",{href:"/blog-details"},o.a.createElement("img",{className:"w-100",src:"/assets/images/blog/blog-".concat(e.images,".jpg"),alt:"Blog Images"}))),o.a.createElement("div",{className:"content"},o.a.createElement("p",{className:"blogtype"},e.category),o.a.createElement("h4",{className:"title"},o.a.createElement("a",{href:"/"},e.title)),o.a.createElement("div",{className:"blog-btn"},o.a.createElement("a",{className:"rn-btn text-white",href:"/"},"Read More")))))})))))),o.a.createElement("div",{id:"contact",className:"fix"},o.a.createElement("div",{className:"rn-contact-area ptb--120 bg_color--1"},o.a.createElement(I,{contactImages:"/assets/images/about/about-9.jpg",contactTitle:"Let's connect!"}))),o.a.createElement(C,null),o.a.createElement("div",{className:"backto-top"},o.a.createElement(g.a,{showUnder:160},o.a.createElement(p.a,null))))},F=(i.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(O.a,{basename:"/"},o.a.createElement(d,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"".concat("","/"),component:_}))))}}]),a}(i.Component);m.a.render(o.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");F?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.828a9ed8.chunk.js.map