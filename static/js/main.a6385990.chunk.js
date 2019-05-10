(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),r=n.n(o),s=n(1),c=n(2),d=n(4),l=n(3),m=n(5),p=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("textarea",{name:"editor",id:"editor",value:this.props.markdownSource,onChange:this.props.onEditorContentsModified}))}}]),t}(a.Component),u=window.marked,h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).markedRenderer=new window.marked.Renderer,n.markedRenderer.link=function(e,t,n){return"\n        <a href=".concat(e," target='_blank'>").concat(n,"</a>\n      ")},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"componentDidUpdate",value:function(){var e=document.querySelector("#preview");u.setOptions({breaks:!0}),e.innerHTML=u(this.props.markdownSource,{renderer:this.markedRenderer})}},{key:"render",value:function(){return i.a.createElement("div",{id:"preview"})}}]),t}(a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=document.getElementsByClassName("pane-expand-icon")[0];this.props.isMaximized?e.classList.add("pane-titlebar-icon-disabled"):e.classList.remove("pane-titlebar-icon-disabled")}},{key:"render",value:function(){var e="pane-titlebar-".concat(this.props.title),t=this.props.isMaximized?"fa-window-minimize":"fa-window-maximize",n=this.props.isExpanded?"fa-caret-down":"fa-caret-right";return i.a.createElement("div",{className:"pane-titlebar",id:e},i.a.createElement("div",{className:"pane-expand-icon",onClick:this.props.toggleExpanded},i.a.createElement("i",{className:"pane-titlebar-icon fas ".concat(n," fa-2x")})),i.a.createElement("h2",{className:"title-bar-title"},this.props.title),i.a.createElement("div",{className:"pane-titlebar-icon-container"},i.a.createElement("div",{className:"pane-titlebar-icon pane-titlebar-icon-minmax",onClick:this.props.toggleMaximized},i.a.createElement("i",{className:"far ".concat(t," fa-2x")}))))}}]),t}(a.Component),b=(n(14),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).toggleMaximized=function(){console.log("max");var e=!n.state.isMaximized;n.setState({isMaximized:e})},n.toggleExpanded=function(){var e=!n.state.isExpanded;n.setState({isExpanded:e})},n.state={isExpanded:!0,isMaximized:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.name?"pane-".concat(this.props.name.toLowerCase()):"",t=document.getElementById(e),n=Array.from(document.getElementsByClassName("pane")).filter(function(t){return t.id!==e});this.state.isMaximized?(this.state.isExpanded||this.setState({isExpanded:!0}),n.forEach(function(e){return e.classList.add("pane-hidden")}),t.classList.add("pane-maximized")):(n.forEach(function(e){return e.classList.remove("pane-hidden")}),t.classList.remove("pane-maximized"))}},{key:"render",value:function(){var e=this.props.name?"pane-".concat(this.props.name.toLowerCase()):"",t=this.state.isExpanded?i.a.createElement("div",{className:"pane-content-component"},this.props.contentComponent):i.a.createElement("div",null);return i.a.createElement("div",{className:"pane",id:e},i.a.createElement(f,{title:this.props.title,isMaximized:this.state.isMaximized,toggleMaximized:this.toggleMaximized,isExpanded:this.state.isExpanded,toggleExpanded:this.toggleExpanded}),t)}}]),t}(a.Component)),v="\n# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n",E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).onEditorContentsModified=function(e){var t=e.target.value;n.setState({markdownSource:t})},n.state={markdownSource:v},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=i.a.createElement(p,{markdownSource:this.state.markdownSource,onEditorContentsModified:this.onEditorContentsModified}),t=i.a.createElement(h,{markdownSource:this.state.markdownSource});return i.a.createElement("div",{id:"app-container"},i.a.createElement(b,{name:"Editor",title:"Editor",contentComponent:e}),i.a.createElement(b,{name:"Previewer",title:"Preview",contentComponent:t}))}}]),t}(a.Component);n(15);r.a.render(i.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a6385990.chunk.js.map