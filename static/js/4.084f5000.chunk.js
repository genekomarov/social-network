(this["webpackJsonpreact-kamasutra-1"]=this["webpackJsonpreact-kamasutra-1"]||[]).push([[4],{285:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(48),s=a(49),r=a(50),o=a(51),l=a(0),i=a.n(l),u=a(27),c=a(19),g=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(l,t);var a=Object(r.a)(l);function l(){return Object(n.a)(this,l),a.apply(this,arguments)}return Object(s.a)(l,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),l}(i.a.Component);return Object(c.b)(g)(t)}},288:function(e,t,a){e.exports={users:"Users_users__3F8EN"}},289:function(e,t,a){e.exports={pages:"Paginator_pages__356mH",selectedPage:"Paginator_selectedPage__3BebR"}},290:function(e,t,a){e.exports={avatar:"User_avatar__2IPkN",followBtn:"User_followBtn__1GsWg",user:"User_user__8qnxk",right:"User_right__3x87Y",firstName:"User_firstName__2db3i",location:"User_location__6nQtS",status:"User_status__39JbP"}},291:function(e,t,a){e.exports=a.p+"static/media/user.0ec44ea3.webp"},299:function(e,t,a){"use strict";a.r(t);var n=a(48),s=a(49),r=a(50),o=a(51),l=a(19),i=a(125),u=a(0),c=a.n(u),g=a(126),p=a(288),f=a.n(p),m=a(88),h=a(289),d=a.n(h),w=function(e){for(var t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,s=e.onPageChanged,r=Math.ceil(t/a),o=[],l=function(e){o.push(c.a.createElement("span",{key:e,className:e===n&&d.a.selectedPage,onClick:function(){s(e)}}," ",e," "))},i=n-3>0?n-3:1;i<=(n+3<=r?n+3:r);i++)l(i);return c.a.createElement("div",{className:d.a.pages},o)},P=a(290),_=a.n(P),b=a(17),v=a(291),E=a.n(v),C=function(e){var t=e.id,a=e.photos,n=e.name,s=e.status,r=e.followed,o=e.isFollowing,l=e.follow,i=e.unfollow;return c.a.createElement("div",{key:t,className:_.a.user},c.a.createElement("div",{className:_.a.left},c.a.createElement(b.b,{to:"/profile/"+t},c.a.createElement("img",{src:null!=a.small?a.small:E.a,alt:"",className:_.a.avatar})),r?c.a.createElement("button",{disabled:o.some((function(e){return e===t})),className:_.a.followBtn,onClick:function(){i(t)}},"Follow"):c.a.createElement("button",{disabled:o.some((function(e){return e===t})),className:_.a.followBtn,onClick:function(){l(t)}},"Unfollow")),c.a.createElement("div",{className:_.a.right},c.a.createElement("div",{className:_.a.firstName},n),c.a.createElement("div",{className:_.a.location},"props.location.country",c.a.createElement("br",null),"props.location.city"),c.a.createElement("div",{className:_.a.status},s)))},F=function(e){var t=e.users,a=e.isFollowing,n=e.unfollow,s=e.follow,r=e.isFetching,o=e.totalUsersCount,l=e.pageSize,i=e.currentPage,u=e.onPageChanged;Object(g.a)(e,["users","isFollowing","unfollow","follow","isFetching","totalUsersCount","pageSize","currentPage","onPageChanged"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(w,{totalUsersCount:o,pageSize:l,currentPage:i,onPageChanged:u}),c.a.createElement("div",null,r&&c.a.createElement(m.a,null)),c.a.createElement("div",{className:f.a.users},!r&&t.map((function(e){return c.a.createElement(C,{id:e.id,photos:e.photos,name:e.name,status:e.status,followed:e.followed,isFollowing:a,follow:s,unfollow:n})}))))},U=a(285),N=a(7),k=function(e){return e.usersPage.users},j=function(e){return e.usersPage.pageSize},O=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},y=function(e){return e.usersPage.isFetching},z=function(e){return e.usersPage.isFollowing},x=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var a=e.props.pageSize;e.props.setCurrentPage(t),e.props.requestUsers(t,a)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,a=e.pageSize;this.props.requestUsers(t,a)}},{key:"render",value:function(){return c.a.createElement(F,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,isFetching:this.props.isFetching,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,isFollowing:this.props.isFollowing,toggleFollowing:this.props.toggleFollowing})}}]),a}(c.a.Component),B={follow:i.b,unfollow:i.f,setCurrentPage:i.d,toggleFollowing:i.e,requestUsers:i.c};t.default=Object(N.d)(Object(l.b)((function(e){return{users:k(e),pageSize:j(e),totalUsersCount:O(e),currentPage:S(e),isFetching:y(e),isFollowing:z(e)}}),B),U.a)(x)}}]);
//# sourceMappingURL=4.084f5000.chunk.js.map