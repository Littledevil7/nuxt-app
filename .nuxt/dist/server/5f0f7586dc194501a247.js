exports.ids=[1],exports.modules={27:function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return m})),r.d(e,"e",(function(){return v}));var c=r(6);const n=t=>Object(c.b)({method:"GET",url:"/api/articles",params:t}),o=t=>Object(c.b)({method:"GET",url:"/api/articles/feed",params:t}),l=t=>Object(c.b)({method:"POST",url:`/api/articles/${t}/favorite`}),d=t=>Object(c.b)({method:"DELETE",url:`/api/articles/${t}/favorite`}),m=t=>Object(c.b)({method:"GET",url:"/api/articles/"+t}),v=t=>Object(c.b)({method:"GET",url:`/api/articles/${t}/comments`})},28:function(t,e,r){"use strict";r.r(e);var c=r(27),n=r(26),o=r.n(n),l={name:"ArticleMeta",props:{article:{type:Object,required:!0}}},d=r(1);var m=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._ssrNode(" "),t._ssrNode('<div class="info">',"</div>",[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v("\n      "+t._s(t.article.author.username)+"\n    ")]),t._ssrNode(' <span class="date">'+t._ssrEscape(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),t._ssrNode(" <button"+t._ssrClass("btn btn-sm btn-outline-secondary",{active:t.article.author.following})+'><i class="ion-plus-round"></i>\n     \n    Follow Eric Simons <span class="counter">(10)</span></button>\n    \n  <button'+t._ssrClass("btn btn-sm btn-outline-primary",{active:t.article.favorited})+'><i class="ion-heart"></i>\n     \n    Favorite Post <span class="counter">(29)</span></button>')],2)}),[],!1,(function(t){}),null,"59eb55b0").exports,v={name:"ArticleComments",props:{article:{type:Object,required:!0}},data:()=>({comments:[]}),async mounted(){const{data:data}=await Object(c.e)(this.article.slug);this.comments=data.comments}};var _={name:"ArticleIndex",async asyncData({params:t}){const{data:data}=await Object(c.c)(t.slug),{article:article}=data,e=new o.a;return article.body=e.render(article.body),{article:article}},components:{ArticleMeta:m,ArticleComments:Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<form class="card comment-form"><div class="card-block"><textarea placeholder="Write a comment..." rows="3" class="form-control"></textarea></div> <div class="card-footer"><img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img"> <button class="btn btn-sm btn-primary">\n      Post Comment\n      </button></div></form> '),t._l(t.comments,(function(e){return t._ssrNode('<div class="card">',"</div>",[t._ssrNode('<div class="card-block"><p class="card-text">'+t._ssrEscape(t._s(e.body))+"</p></div> "),t._ssrNode('<div class="card-footer">',"</div>",[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._ssrNode("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v("\n        "+t._s(e.author.username)+"\n      ")]),t._ssrNode(' <span class="date-posted">'+t._ssrEscape(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))+"</span>")],2)],2)}))],2)}),[],!1,(function(t){}),null,"60931017").exports},head(){return{title:this.article.title+" - RealWorld",meta:[{hid:"description",name:"description",content:this.article.description}]}}};var f=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[t._ssrNode('<div class="banner">',"</div>",[t._ssrNode('<div class="container">',"</div>",[t._ssrNode("<h1>"+t._ssrEscape(t._s(t.article.title))+"</h1> "),r("article-meta",{attrs:{article:t.article}})],2)]),t._ssrNode(" "),t._ssrNode('<div class="container page">',"</div>",[t._ssrNode('<div class="row article-content"><div class="col-md-12">'+t._s(t.article.body)+"</div></div> <hr> "),t._ssrNode('<div class="article-actions">',"</div>",[r("article-meta",{attrs:{article:t.article}})],1),t._ssrNode(" "),t._ssrNode('<div class="row">',"</div>",[t._ssrNode('<div class="col-xs-12 col-md-8 offset-md-2">',"</div>",[r("article-comments",{attrs:{article:t.article}})],1)])],2)],2)}),[],!1,(function(t){}),null,"78d02d36");e.default=f.exports}};