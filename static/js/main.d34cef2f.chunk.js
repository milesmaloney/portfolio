(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),o=i(8),r=i.n(o),c=(i(13),i(14),i(2)),a=i(3),h=i(6),l=i(5),d=i(4),p=(i(15),i(16),i(0)),g=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={},s}return Object(a.a)(i,[{key:"render",value:function(){var e={},t={},i={};if(this.props.divs[0]){if(this.props.divs[1])return this.props.divs[2]?(e={left:"0%",width:"33%",height:"100%",position:"absolute"},t={left:"33%",width:"34%",height:"100%",position:"absolute"},i={left:"67%",width:"33%",height:"100%",position:"absolute"},Object(p.jsxs)("div",{id:"header",style:this.props.style,children:[Object(p.jsx)("div",{id:"headerLeft",style:e,children:this.props.content[0]}),Object(p.jsx)("div",{id:"headerMid",style:t,children:this.props.content[1]}),Object(p.jsx)("div",{id:"headerRight",style:i,children:this.props.content[2]})]})):(e={left:"0%",width:"33%",height:"100%",position:"absolute"},t={left:"33%",width:"67%",height:"100%",position:"absolute"},Object(p.jsxs)("div",{id:"header",style:this.props.style,children:[Object(p.jsx)("div",{id:"headerLeft",style:e,children:this.props.content[0]}),Object(p.jsx)("div",{id:"headerMid",style:t,children:this.props.content[1]})]}));if(this.props.divs[2])return e={left:"0%",width:"50%",height:"100%",position:"absolute"},i={left:"50%",width:"50%",height:"100%",position:"absolute"},Object(p.jsxs)("div",{id:"header",style:this.props.style,children:[Object(p.jsx)("div",{id:"headerLeft",style:e,children:this.props.content[0]}),Object(p.jsx)("div",{id:"headerRight",style:i,children:this.props.content[1]})]})}else{if(!this.props.divs[1])return t={left:"0%",width:"100%",height:"100%",position:"absolute"},Object(p.jsx)("div",{id:"header",style:this.props.style,children:Object(p.jsx)("div",{id:"headerMid",style:t,children:this.props.content[0]})});if(this.props.divs[2])return t={left:"0%",width:"67%",height:"100%",position:"absolute"},i={left:"67%",width:"33%",height:"100%",position:"absolute"},Object(p.jsxs)("div",{id:"header",style:this.props.style,children:[Object(p.jsx)("div",{id:"headerMid",style:t,children:this.props.content[0]}),Object(p.jsx)("div",{id:"headerRight",style:i,children:this.props.content[1]})]})}}}]),i}(n.a.Component),b=(i(18),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={},s}return Object(a.a)(i,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"sidebarEntry",children:[Object(p.jsx)("div",{id:"sidebarBackground",style:this.props.bgStyle}),this.props.content]})}}]),i}(n.a.Component)),u=(i(19),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={},s.bgImages=[{src:"https://nineplanets.org/wp-content/uploads/2019/09/earth.png",height:50,width:50},{src:"https://nineplanets.org/wp-content/uploads/2019/09/mars.png",height:30,width:30},{src:"https://nineplanets.org/wp-content/uploads/2019/09/jupiter.png",height:80,width:80},{src:"https://nineplanets.org/wp-content/uploads/2019/09/saturn.png",height:70,width:70},{src:"https://nineplanets.org/wp-content/uploads/2019/09/uranus.png",height:60,width:60}],s}return Object(a.a)(i,[{key:"render",value:function(){for(var e=[],t=100/this.props.content.length,i=0;i<this.props.content.length;i++){var s={top:"".concat((0+t*i).toString(),"%"),left:"0%",height:"".concat(t.toString(),"%"),width:"100%",position:"absolute"};e.push(Object(p.jsx)("li",{style:s,children:Object(p.jsx)(b,{content:this.props.content[i],bgStyle:{top:"".concat(Math.floor(Math.random()*(100-this.bgImages[i].height)),"%"),left:"".concat(Math.floor(Math.random()*(100-this.bgImages[i].width)),"%"),height:"".concat(String(this.bgImages[i].height),"%"),width:"".concat(String(this.bgImages[i].width),"%"),backgroundImage:"url(".concat(this.bgImages[i].src,")"),backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"absolute"}})},i))}return Object(p.jsx)("div",{id:"sidebar",style:this.props.style,children:Object(p.jsx)("ul",{children:e})})}}]),i}(n.a.Component)),j=(i(20),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={},s}return Object(a.a)(i,[{key:"render",value:function(){var e={},t={},i={};if(this.props.divs[0]){if(this.props.divs[1])return this.props.divs[2]?(e={left:"0%",width:"33%",height:"100%",position:"absolute"},t={left:"33%",width:"34%",height:"100%",position:"absolute"},i={left:"67%",width:"33%",height:"100%",position:"absolute"},Object(p.jsxs)("div",{id:"footer",style:this.props.style,children:[Object(p.jsx)("div",{id:"footerLeft",style:e,children:this.props.content[0]}),Object(p.jsx)("div",{id:"footerMid",style:t,children:this.props.content[1]}),Object(p.jsx)("div",{id:"footerRight",style:i,children:this.props.content[2]})]})):(e={left:"0%",width:"33%",height:"100%",position:"absolute"},t={left:"33%",width:"67%",height:"100%",position:"absolute"},Object(p.jsxs)("div",{id:"footer",style:this.props.style,children:[Object(p.jsx)("div",{id:"footerLeft",style:e,children:this.props.content[0]}),Object(p.jsx)("div",{id:"footerMid",style:t,children:this.props.content[1]})]}));if(this.props.divs[2])return e={left:"0%",width:"50%",height:"100%",position:"absolute"},i={left:"50%",width:"50%",height:"100%",position:"absolute"},Object(p.jsxs)("div",{id:"footer",style:this.props.style,children:[Object(p.jsx)("div",{id:"footerLeft",style:e,children:this.props.content[0]}),Object(p.jsx)("div",{id:"footerRight",style:i,children:this.props.content[1]})]})}else{if(!this.props.divs[1]){for(var s=[],n=100/this.props.content[0].length,o=0;o<this.props.content[0].length;o++)s.push(Object(p.jsx)("li",{style:{left:"".concat(0+n*o,"%"),width:"".concat(n,"%")},children:this.props.content[0][o]},o));return Object(p.jsx)("div",{id:"footer",style:this.props.style,children:Object(p.jsx)("ul",{children:s})})}if(this.props.divs[2])return t={left:"0%",width:"67%",height:"100%",position:"absolute"},i={left:"67%",width:"33%",height:"100%",position:"absolute"},Object(p.jsxs)("div",{id:"footer",style:this.props.style,children:[Object(p.jsx)("div",{id:"footerMid",style:t,children:this.props.content[0]}),Object(p.jsx)("div",{id:"footerRight",style:i,children:this.props.content[1]})]})}}}]),i}(n.a.Component)),m=(i(21),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={demoMode:!1},s.toggleDemoMode=s.toggleDemoMode.bind(Object(h.a)(s)),s}return Object(a.a)(i,[{key:"render",value:function(){if(this.state.demoMode)return Object(p.jsx)("div",{id:"projectEntry",style:this.props.style,children:Object(p.jsxs)("div",{id:"demoEntry",children:[Object(p.jsx)("div",{id:"demo",children:this.props.demo}),Object(p.jsx)("div",{id:"returnText",children:Object(p.jsxs)("h3",{style:{fontSize:"".concat(this.props.mobile?"".concat("portrait"===this.props.orientation?"3vw":"1vw"):"2vw")},children:["Click ",Object(p.jsx)("a",{href:"#projects",rel:"noreferrer",onClick:this.toggleDemoMode,title:"Return to the description for ".concat(this.props.title),children:"here"})," to return to the description of ",this.props.title]})})]})});var e=this.props.demo?Object(p.jsxs)("h3",{style:{fontSize:"".concat(this.props.mobile?"".concat("portrait"===this.props.orientation?"3vw":"1vw"):"2vw")},children:["Click ",Object(p.jsx)("a",{href:"#projects",rel:"noreferrer",onClick:this.toggleDemoMode,title:"View the demo for ".concat(this.props.title),children:"here"})," to view a demo of the ",this.props.title," project"]}):null,t={top:"20%",left:"0%",height:"".concat(this.props.demo?"70":"80","%"),width:"100%"},i=this.props.demo?{bottom:"0%",left:"0%",height:"10%",width:"100%"}:{height:"0%",width:"0%"},s=[];if(this.props.imgLinks)for(var n=100/this.props.imgLinks.length,o=0;o<this.props.imgLinks.length;o++)s.push(Object(p.jsx)("div",{id:"image",style:{left:"".concat(0+n*o,"%"),width:"".concat(n,"%"),backgroundImage:"url(".concat(this.props.imgLinks[o],")"),backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},o));return Object(p.jsxs)("div",{id:"projectEntry",style:this.props.style,children:[Object(p.jsx)("div",{id:"images",children:s}),Object(p.jsx)("div",{id:"title",children:Object(p.jsx)("h1",{title:"View source code for ".concat(this.props.title),children:Object(p.jsx)("a",{style:{fontSize:"".concat(this.props.mobile?"".concat("portrait"===this.props.orientation?"6vw":"4vw"):"4vw")},href:this.props.srcLink,target:"_blank",rel:"noreferrer",children:this.props.title})})}),Object(p.jsx)("div",{id:"description",style:t,children:Object(p.jsx)("h3",{style:{fontSize:"".concat(this.props.mobile?"".concat("portrait"===this.props.orientation?"3.5vw":"1vw"):"2vw")},children:this.props.description})}),Object(p.jsx)("div",{id:"demoText",style:i,children:e})]})}},{key:"toggleDemoMode",value:function(){this.state.demoMode?this.setState({demoMode:!1}):this.setState({demoMode:!0})}}]),i}(n.a.Component)),f=(i(22),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={},s}return Object(a.a)(i,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.listEntries.length;t++){var i={top:"".concat(0+50*t,"%"),left:"0%",height:"".concat(50,"%"),width:"100%",position:"absolute"};e.push(Object(p.jsx)("li",{children:Object(p.jsx)(m,{title:this.props.listEntries[t].title,srcLink:this.props.listEntries[t].srcLink,demo:this.props.listEntries[t].demo,imgLinks:this.props.listEntries[t].imgLinks,description:this.props.listEntries[t].description,style:i,mobile:this.props.mobile,orientation:this.props.orientation})},t))}return Object(p.jsxs)("div",{id:"projectMain",children:[Object(p.jsx)("a",{target:"_blank",href:"https://github.com/milesmaloney",rel:"noreferrer",children:Object(p.jsx)("div",{id:"ghicon",title:"Redirect to Github"})}),Object(p.jsx)("ul",{children:e})]})}}]),i}(n.a.Component)),v=(i(23),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={date:new Date,timeOrDate:"time"},s.changeState=s.changeState.bind(Object(h.a)(s)),s}return Object(a.a)(i,[{key:"render",value:function(){for(var e=[],t=0;t<10;t++)e.push({bottom:"0%",left:"".concat(0+7.5*t,"%"),height:"100%",width:"7.5%",position:"absolute",fontSize:"".concat(this.props.fontSize)});for(var i="time"===this.state.timeOrDate?this.state.date.toLocaleTimeString().replace(" ","").split(":"):this.state.date.toLocaleDateString().split("/"),s=0;s<i.length;s++)i[s].length%2===1&&(i[s]="0"+i[s]);var n=i.join("").split("");return Object(p.jsx)("div",{id:"clock",onClick:this.changeState,title:"Change clock to ".concat("time"===this.state.timeOrDate?"date":"time"),children:Object(p.jsxs)("div",{id:"digits",children:[Object(p.jsx)("div",{id:"digitOne",style:e[0],children:Object(p.jsx)("h4",{children:n[0]})}),Object(p.jsx)("div",{id:"digitTwo",style:e[1],children:Object(p.jsx)("h4",{children:n[1]})}),Object(p.jsx)("div",{id:"digitThree",style:e[2],children:Object(p.jsx)("h4",{children:"time"===this.state.timeOrDate?":":"/"})}),Object(p.jsx)("div",{id:"digitFour",style:e[3],children:Object(p.jsx)("h4",{children:n[2]})}),Object(p.jsx)("div",{id:"digitFive",style:e[4],children:Object(p.jsx)("h4",{children:n[3]})}),Object(p.jsx)("div",{id:"digitSix",style:e[5],children:Object(p.jsx)("h4",{children:"time"===this.state.timeOrDate?":":"/"})}),Object(p.jsx)("div",{id:"digitSeven",style:e[6],children:Object(p.jsx)("h4",{children:n[4]})}),Object(p.jsx)("div",{id:"digitEight",style:e[7],children:Object(p.jsx)("h4",{children:n[5]})}),Object(p.jsx)("div",{id:"digitNine",style:e[8],children:Object(p.jsx)("h4",{children:n[6]})}),Object(p.jsx)("div",{id:"digitTen",style:e[9],children:Object(p.jsx)("h4",{children:n[7]})})]})})}},{key:"componentDidMount",value:function(){var e=this;this.timeIntervalID=setInterval((function(){e.setState({date:new Date})}),1e3),this.changeState()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeIntervalID),clearInterval(this.transitionIntervalID),clearTimeout(this.clockIntervalID)}},{key:"changeState",value:function(){clearTimeout(this.clockIntervalID),"time"===this.state.timeOrDate?(this.setState({timeOrDate:"date"}),this.clockIntervalID=setTimeout(this.changeState,5e3)):(this.setState({timeOrDate:"time"}),this.clockIntervalID=setTimeout(this.changeState,1e4))}}]),i}(n.a.Component)),y=(i(24),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={currentPicture:0,shuffle:s.props.shuffle},s.changeImage=s.changeImage.bind(Object(h.a)(s)),s.toggleShuffle=s.toggleShuffle.bind(Object(h.a)(s)),s}return Object(a.a)(i,[{key:"render",value:function(){var e,t,i={backgroundImage:"url(".concat(this.props.images[this.state.currentPicture],")"),backgroundSize:"".concat(this.props.mobile?"contain":"cover")},s={backgroundColor:"".concat(this.state.shuffle?"rgba(0,0,0,0.5)":"rgba(256,256,256,0.5)"),left:"".concat(this.state.shuffle?"80":"0","%")};return t=this.state.shuffle?{backgroundColor:"rgba(256,256,256,0.5)",color:"rgba(0,0,0,0.5)"}:{backgroundColor:"rgba(0,0,0,0.5)",color:"rgba(256, 256, 256, 0.5)"},e=this.state.shuffle?Object(p.jsx)("div",{id:"shuffleTexture",style:t,title:"Turn off shuffle",children:Object(p.jsx)("h2",{children:"ON"})}):Object(p.jsx)("div",{id:"shuffleTexture",style:t,title:"Turn on shuffle",children:Object(p.jsx)("h1",{children:"OFF"})}),Object(p.jsxs)("div",{id:"imageScrollerBackground",style:{backgroundImage:"url(".concat(this.props.bgSrc,")")},children:[Object(p.jsx)("div",{id:"loadingBg",children:Object(p.jsx)("h1",{style:{fontSize:"".concat(this.props.mobile?"5vw":"10vw")},children:"Loading..."})}),Object(p.jsx)("div",{id:"ImageScroller",style:i,onClick:this.changeImage,title:"Continue to next image",children:Object(p.jsxs)("div",{id:"shuffleButton",onClick:this.toggleShuffle,children:[Object(p.jsx)("div",{id:"shuffleSlider",style:s}),e]})})]})}},{key:"componentDidMount",value:function(){this.imageIntervalID=setInterval(this.changeImage,3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.imageIntervalID)}},{key:"changeImage",value:function(){var e=this.state.shuffle?Math.floor(Math.random()*this.props.images.length):this.state.currentPicture===this.props.images.length-1?0:this.state.currentPicture+1;e+=0===e&&this.props.mobile&&"landscape"===this.props.orientation?1:0,this.setState({currentPicture:e}),clearInterval(this.imageIntervalID),this.imageIntervalID=setInterval(this.changeImage,3e3)}},{key:"toggleShuffle",value:function(){this.state.shuffle?this.setState({shuffle:0}):this.setState({shuffle:1})}}]),i}(n.a.Component)),w=i.p+"static/media/img0.0535866c.jpg",O=i.p+"static/media/img1.16ace0ce.jpg",x=i.p+"static/media/img2.ee2d3c91.jpg",k=i.p+"static/media/img3.141d8096.jpg",S=i.p+"static/media/img4.2ea9a74a.jpg",I=i.p+"static/media/img5.4c15162a.jpg",M=i.p+"static/media/img6.83556862.jpg",z=i.p+"static/media/siteImg.d83318e1.png",C=i.p+"static/media/warden.c1e293ed.png",T=i.p+"static/media/warrior.384055ef.png",P=i.p+"static/media/skeleton.dc3f322c.png",D=i.p+"static/media/cultist.bd9b6018.png",L=i.p+"static/media/pArcaneMage.1f79caca.png",R=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={pageType:s.props.pageType,dimensions:"".concat(document.querySelector("#width"),"x").concat(document.querySelector("#height"))},s.changePageType=s.changePageType.bind(Object(h.a)(s)),s.intervalIdCollection=[],s}return Object(a.a)(i,[{key:"render",value:function(){var e=this,t=this.getScreenOrientation(),i=[Object(p.jsx)("a",{style:{fontSize:"".concat(this.props.mobile&"portrait"===t?"4vw":"3vw")},href:"#home",onClick:function(){return e.changePageType("home")},children:Object(p.jsx)("h3",{style:{fontSize:"".concat(this.props.mobile&"portrait"===t?"4vw":"3vw")},title:"Return to home page",children:"Home"})}),Object(p.jsx)("a",{style:{fontSize:"".concat(this.props.mobile&"portrait"===t?"4vw":"3vw")},href:"https://www.linkedin.com/in/miles-maloney-0783051b9/",target:"_blank",rel:"noreferrer",title:"View Miles's LinkedIn profile",children:"LinkedIn"}),Object(p.jsx)("a",{style:{fontSize:"".concat(this.props.mobile&"portrait"===t?"4vw":"3vw")},href:"https://github.com/milesmaloney",target:"_blank",rel:"noreferrer",title:"View Miles's Github profile",children:"Github"}),Object(p.jsx)("a",{style:{fontSize:"".concat(this.props.mobile&"portrait"===t?"4vw":"3vw")},href:"#projects",onClick:function(){return e.changePageType("projects")},children:Object(p.jsx)("h3",{style:{fontSize:"".concat(this.props.mobile&"portrait"===t?"4vw":"3vw")},title:"Learn about Miles's projects",children:"Projects"})}),Object(p.jsx)("a",{style:{fontSize:"".concat(this.props.mobile&"portrait"===t?"4vw":"3vw")},href:"#aboutme",onClick:function(){return e.changePageType("about me")},children:Object(p.jsx)("h3",{style:{fontSize:"".concat(this.props.mobile&"portrait"===t?"4vw":"3vw")},title:"Learn about Miles's background",children:"About Me"})})];return"home"===this.state.pageType?this.props.mobile?this.getHomePage(i,t,!0):this.getHomePage(i,t):"about me"===this.state.pageType?this.props.mobile?this.getAboutMePage(i,t,!0):this.getAboutMePage(i,t):"projects"===this.state.pageType?this.props.mobile?this.getProjectsPage(i,t,!0):this.getProjectsPage(i,t):void 0}},{key:"componentDidMount",value:function(){var e=this;this.intervalIdCollection.push(setInterval((function(){e.state.dimensions!=="".concat(window.innerWidth,"x").concat(window.innerHeight)&&e.setState({dimensions:"".concat(window.innerWidth,"x").concat(window.innerHeight)})}),500))}},{key:"componentWillUnmount",value:function(){for(var e=0;e<this.intervalIdCollection.length;e++)clearInterval(this.intervalIdCollection[e])}},{key:"getHomePage",value:function(e,t){var i=this,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=[w,O,x,k,S,I],o={},r={left:"0%",top:"0%",width:"100%",height:"10%"};if(this.props.mobile)return o={left:"0%",top:"10%",width:"100%",height:"80%"},Object(p.jsxs)("div",{id:"page",children:[Object(p.jsx)(g,{divs:[1,1,0],content:[Object(p.jsx)(v,{fontSize:"3vw"}),Object(p.jsx)("h1",{style:{fontSize:"".concat(s&"portrait"===t?"9.5vw":"5vw")},onClick:function(){return i.changePageType("about me")},children:"Miles Maloney"})],style:r}),Object(p.jsx)("div",{id:"main",style:o,children:Object(p.jsx)(y,{shuffle:0,images:n,bgSrc:"https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",mobile:!0,orientation:t})}),Object(p.jsx)(j,{divs:[0,0,1],content:[e]})]});o={left:"20%",top:"10%",width:"80%",height:"90%"};var c={left:"0%",top:"10%",width:"20%",height:"90%",borderRight:"5px groove rgba(0,0,0,1)"};return Object(p.jsxs)("div",{id:"page",children:[Object(p.jsx)(g,{divs:[1,1,0],content:[Object(p.jsx)(v,{fontSize:"3vw"}),Object(p.jsx)("h1",{style:{fontSize:"6vw"},onClick:function(){return i.changePageType("about me")},children:"Miles Maloney"})],style:r}),Object(p.jsx)(u,{content:e,style:c}),Object(p.jsx)("div",{id:"main",style:o,children:Object(p.jsx)(y,{shuffle:0,images:n,bgSrc:"https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"})})]})}},{key:"getAboutMePage",value:function(e,t){var i=this,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={},o={left:"0%",top:"0%",width:"100%",height:"10%"},r=this.props.mobile?{fontSize:"".concat("portrait"===t?"3.5vw":"1vw")}:{},c=[Object(p.jsxs)("p",{style:r,children:["\t","Hello! My name is Miles Maloney, and I am a recent graduate (May 2021) of the B.S. Computer Science program at University of San Diego with a major in Computer Science and a minor in Theatre Arts. This website is a hub for you to find everything you might want to learn about my background as a software engineer. You can click the embedded links or the links in the sidebar to view my ",Object(p.jsx)("a",{href:"https://www.linkedin.com/in/miles-maloney-0783051b9/",target:"_blank",rel:"noreferrer",title:"View Miles's LinkedIn profile",children:"LinkedIn"})," and ",Object(p.jsx)("a",{href:"https://github.com/milesmaloney",target:"_blank",rel:"noreferrer",title:"View Miles's Github profile",children:"Github"})," profiles as well as visit the ",Object(p.jsx)("a",{href:"#projects",onClick:function(){return i.changePageType("projects")},title:"Learn about Miles's projects",children:"projects"})," page to check out some of the projects I have worked on. I hope you have a nice day!"]},"aboutMeContent")],a=[Object(p.jsxs)("div",{id:"images",children:[Object(p.jsx)("div",{style:{right:"0%",width:"".concat(s&"portrait"===t?"50%":"35%"),backgroundImage:"url(".concat(M,")"),backgroundSize:"cover"}}),Object(p.jsx)("div",{style:{right:"".concat(s&"portrait"===t?"50%":"35%"),width:"".concat(s?"35%":"25%"),backgroundImage:"url(https://www.sandiego.edu/assets/global/images/logos/usd-logo-stacked-inverse.png)",backgroundSize:"contain"}})]})];if(this.props.mobile){n={left:"0%",top:"10%",height:"80%",width:"100%"};var h={height:"50%",width:"90%"};return Object(p.jsxs)("div",{id:"page",children:[Object(p.jsx)(g,{divs:[1,1,1],content:[Object(p.jsx)(v,{fontSize:"3vw"}),Object(p.jsx)("h1",{style:{fontSize:"".concat(s&"portrait"===t?"8vw":"5vw")},onClick:function(){return i.changePageType("about me")},children:"Miles Maloney"}),a[0]],style:o}),Object(p.jsx)("div",{id:"main",style:n,children:Object(p.jsx)("div",{id:"aboutMe",style:h,children:c})}),Object(p.jsx)(j,{divs:[0,0,1],content:[e]})]})}n={left:"20%",top:"10%",height:"90%",width:"80%"};var l={left:"0%",top:"10%",width:"20%",height:"90%"};return Object(p.jsxs)("div",{id:"page",children:[Object(p.jsx)(g,{divs:[1,1,1],content:[Object(p.jsx)(v,{fontSize:"3vw"}),Object(p.jsx)("h1",{style:{fontSize:"5.5vw"},onClick:function(){return i.changePageType("about me")},children:"Miles Maloney"}),a[0]],style:o}),Object(p.jsx)(u,{content:e,style:l}),Object(p.jsx)("div",{id:"main",style:n,children:Object(p.jsx)("div",{id:"aboutMe",children:c})})]})}},{key:"getProjectsPage",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s={},n=[{title:"Cubic Voice AI",srcLink:"https://github.com/milesmaloney/virtual-ticket-agent",demo:Object(p.jsx)("iframe",{width:"100%",height:"98%",src:"https://www.youtube.com/embed/_1iAEM2Z0rE",title:"Cubic Voice AI Demo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",SameSite:"none",Secure:!0,allowFullScreen:!0}),imgLinks:["https://mycroft.ai/wp-content/uploads/2018/01/Mycroft-Logo-Square-Web-thumb.png","https://www.sandiego.edu/assets/global/images/logos/usd-logo-stacked-inverse.png","https://www.servicenow.com/content/dam/servicenow/images/customers-asset/details/logo/logo-cubic-transportation.png.imgw.720.720.jpg"],description:"\tIn this industry-sponsored project, three fellow students from University of San Diego and I created a conversational ticket agent using natural language processing engine Mycroft AI. This virtual ticket agent was built in Python on Raspberry Pi hardware, and used SQLite3 for database purposes. It has the functionalities of creating an account, buying a pass, routing you to your destination via transit, and checking your account balance."},{title:"Turn-based Game",srcLink:"https://github.com/milesmaloney/Game-Builder",demo:Object(p.jsxs)("h1",{style:{fontSize:"".concat(i?"".concat("portrait"===t?"5vw":"2vw"):"4vw")},children:["\t","The demo for this project is currently unavailable due to an in-progress conversion from a command line interface to a React.js interface. In the meantime, you can run this project through the command line by following the instructions in the ",Object(p.jsx)("a",{href:"https://github.com/milesmaloney/Game-Builder",target:"_blank",rel:"noreferrer",children:"source code repository"}),"'s README file."]}),imgLinks:[C,T,L,P,D],description:"\tIn this javascript project, I decided to create a game in order to further develop my programming skills and learn more about javascript. This turn-based game allows a user to select a name and class and battle alongside AI allies against AI enemies. I plan to include a demo when I am finished making the game compatible with React. In the meantime, you may view the source code by clicking the title and run the game from the command line if you'd like."},{title:"React Portfolio Website",srcLink:"https://github.com/milesmaloney/React-Website",demo:Object(p.jsxs)("h1",{style:{fontSize:"".concat(i?"".concat("portrait"===t?"5vw":"2vw"):"4vw")},children:["\t","You are currently browsing the React Portfolio Website project. To view its functionalities in more detail, you can explore the website and see what happens when you click or hover on each and every part of the site."]}),imgLinks:["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",z],description:"\tI created this React website in response to the surprising amount of demand for web developers in the current job market. I found that this project was very helpful in understanding front-end technologies and the challenges that come with them, as well as the surprising convenience of many features of React. You are currently viewing this exact website, which was built from scratch using React.js."}];if(this.props.mobile){s={left:"0%",top:"10%",width:"100%",height:"80%",backgroundImage:"url(https://prod-discovery.edx-cdn.org/media/programs/card_images/e0de6882-c5d1-43f3-99e0-17e386489dca-9c3bda2df48f.jpg)",backgroundSize:"cover",backgroundPosition:"left"};var o={left:"0%",top:"0%",width:"100%",height:"10%"};return Object(p.jsxs)("div",{id:"page",children:[Object(p.jsx)(g,{divs:[0,0,1],content:[Object(p.jsx)("h1",{style:{fontSize:i?"".concat("portrait"===t?"13vw":"6vw"):"8vw"},children:"Projects"})],style:o}),Object(p.jsx)("div",{id:"main",style:s,children:Object(p.jsx)(f,{listEntries:n,mobile:!0,orientation:t})}),Object(p.jsx)(j,{divs:[0,0,1],content:[e]})]})}s={left:"20%",top:"0%",width:"80%",height:"100%",backgroundImage:"url(https://prod-discovery.edx-cdn.org/media/programs/card_images/e0de6882-c5d1-43f3-99e0-17e386489dca-9c3bda2df48f.jpg)",backgroundSize:"cover",backgroundPosition:"left"};var r={left:"0%",top:"0%",width:"20%",height:"100%",outline:"2px groove rgba(128, 0, 256, 0.75)"};return Object(p.jsxs)("div",{id:"page",children:[Object(p.jsx)(u,{content:e,style:r}),Object(p.jsx)("div",{id:"main",style:s,children:Object(p.jsx)(f,{listEntries:n})})]})}},{key:"changePageType",value:function(e){switch(e){case"home":this.setState({pageType:"home"});break;case"about me":this.setState({pageType:"about me"});break;case"projects":this.setState({pageType:"projects"})}}},{key:"getScreenOrientation",value:function(){return window.innerHeight>window.innerWidth?"portrait":"landscape"}}]),i}(n.a.Component);window.mobileCheck=function(){console.log("Checking for device type...");var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};var E=function(){console.log("Rendering app...");try{return window.mobileCheck()?Object(p.jsx)("div",{id:"App",children:Object(p.jsx)(R,{pageType:"home",mobile:!0})}):Object(p.jsx)("div",{id:"App",children:Object(p.jsx)(R,{pageType:"home",mobile:!1})})}catch(e){alert(e.message)}},A=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,26)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),s(e),n(e),o(e),r(e)}))};try{r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}catch(_){alert(_.message)}A(console.log)}],[[25,1,2]]]);
//# sourceMappingURL=main.d34cef2f.chunk.js.map