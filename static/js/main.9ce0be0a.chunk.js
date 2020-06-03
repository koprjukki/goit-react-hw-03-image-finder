(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{20:function(e,t,a){e.exports=a(65)},25:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a(7),l=a(3),i=a(4),s=a(6),u=a(5),m=(a(25),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCloseModal=function(t){(0,e.props.onClose)()},e.handleEscCloseModal=function(t){var a=e.props.onClose;"Escape"===t.key&&a()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscCloseModal)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"Overlay",onClick:this.handleCloseModal},r.a.createElement("div",{className:"Modal"},e))}}]),a}(n.Component)),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isModalOpen:!1},e.handleOpenModal=function(){e.setState({isModalOpen:!0})},e.handleCloseModal=function(){return e.setState({isModalOpen:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data,t=this.state.isModalOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"ImageGalleryItem",onClick:this.handleOpenModal},r.a.createElement("img",{id:e.id,src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image"})),t&&r.a.createElement(m,{onClose:this.handleCloseModal},r.a.createElement("img",{src:e.largeImageURL,alt:e.tags})))}}]),a}(n.Component),h=function(e){var t=e.data;return r.a.createElement("ul",{className:"ImageGallery"},t.length>0&&t.map((function(e){return r.a.createElement(d,{data:e,key:e.id})})))},p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.reset=function(){e.setState({inputValue:""})},e.handleChange=function(t){var a=t.target.value;e.setState({inputValue:a})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.inputValue),e.reset()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{type:"text",autoFocus:!0,autoComplete:"off",placeholder:"Search images and photos",className:"SearchForm-input",onChange:this.handleChange,value:e})))}}]),a}(n.Component),f=function(e){var t=e.onClick;return r.a.createElement("div",{className:"ButtonContainer"},r.a.createElement("button",{className:"Button",onClick:t},"Load More"))},g=a(18),v=a.n(g),y=(a(47),function(){return r.a.createElement(v.a,{className:"Loader",type:"Oval",color:"#3f51b5",height:300,width:300})}),b=a(19),E=a.n(b),O=function(e){var t=e.query,a=e.page,n=void 0===a?0:a;return E.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=").concat("16796543-1ef82ab592812296a1965d7ca","&image_type=photo&orientation=horizontal&per_page=12"))},C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={dataFromQuery:[],page:0,query:"",isLoading:!1},e.handleOnClick=function(){var t=e.state.page;e.setState({page:t+1})},e.handleOnSubmit=function(t){e.setState({dataFromQuery:[],query:t,page:1})},e.getData=function(t){var a=t.query,n=t.page,r=e.state.dataFromQuery,o=document.documentElement.scrollHeight-120;return e.setState({isLoading:!0}),O({query:a,page:n}).then((function(t){var a=t.data;return e.setState({dataFromQuery:[].concat(Object(c.a)(r),Object(c.a)(a.hits))})})).catch((function(e){return console.error(e)})).finally((function(){e.setState({isLoading:!1}),n>1&&window.scrollTo({top:o,behavior:"smooth"})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.page,r=a.query;t.page===n&&t.query===r||""!==r&&this.getData({page:n,query:r})}},{key:"render",value:function(){var e=this.state,t=e.dataFromQuery,a=e.isLoading;return r.a.createElement("div",{className:"App"},r.a.createElement(p,{onSubmit:this.handleOnSubmit}),r.a.createElement(h,{data:t}),a&&r.a.createElement(y,null),t.length>0&&r.a.createElement(f,{onClick:this.handleOnClick}))}}]),a}(n.Component);Object(o.render)(r.a.createElement(C,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9ce0be0a.chunk.js.map