import{S as bt,i as kt,s as vt,l as w,e as T,F as Nt,m as g,h,p as c,G as q,E as V,b as k,H as P,a as y,c as L,C as Tt,I as K,z as wt,J as gt,w as At,n as Mt,x as Et,K as yt,y as Lt,L as St,M as Ct,N as It,f as Y,t as j,B as Dt}from"../chunks/index-dbc437dc.js";function B(f,t,i){const e=f.slice();return e[16]=t[i],e}function H(f,t,i){const e=f.slice();return e[16]=t[i],e}function J(f,t,i){const e=f.slice();return e[21]=t[i],e}function R(f,t,i){const e=f.slice();return e[24]=t[i],e}function Z(f,t,i){const e=f.slice();return e[16]=t[i],e}function Q(f,t,i){const e=f.slice();return e[38]=t[i],e}function W(f,t,i){const e=f.slice();return e[41]=t[i],e}function X(f,t,i){const e=f.slice();return e[44]=t[i],e}function $(f,t,i){const e=f.slice();return e[16]=t[i],e}function x(f,t,i){const e=f.slice();return e[29]=t[i],e}function ee(f,t,i){const e=f.slice();return e[16]=t[i],e}function te(f,t,i){const e=f.slice();return e[29]=t[i],e}function le(f,t,i){const e=f.slice();return e[47]=t[i],e}function ie(f){let t;return{c(){t=w("meta"),this.h()},l(i){t=g(i,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","description"),c(t,"content",f[2])},m(i,e){k(i,t,e)},p(i,e){e[0]&4&&c(t,"content",i[2])},d(i){i&&h(t)}}}function ne(f){let t;return{c(){t=w("link"),this.h()},l(i){t=g(i,"LINK",{rel:!0,href:!0}),this.h()},h(){c(t,"rel","canonical"),c(t,"href",f[8])},m(i,e){k(i,t,e)},p(i,e){e[0]&256&&c(t,"href",i[8])},d(i){i&&h(t)}}}function fe(f){let t,i,e;return{c(){t=w("link"),this.h()},l(l){t=g(l,"LINK",{rel:!0,media:!0,href:!0}),this.h()},h(){c(t,"rel","alternate"),c(t,"media",i=f[3].media),c(t,"href",e=f[3].href)},m(l,o){k(l,t,o)},p(l,o){o[0]&8&&i!==(i=l[3].media)&&c(t,"media",i),o[0]&8&&e!==(e=l[3].href)&&c(t,"href",e)},d(l){l&&h(t)}}}function oe(f){let t,i=f[4],e=[];for(let l=0;l<i.length;l+=1)e[l]=re(le(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&16){i=l[4];let n;for(n=0;n<i.length;n+=1){const u=le(l,i,n);e[n]?e[n].p(u,o):(e[n]=re(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function re(f){let t,i,e;return{c(){t=w("link"),this.h()},l(l){t=g(l,"LINK",{rel:!0,hreflang:!0,href:!0}),this.h()},h(){c(t,"rel","alternate"),c(t,"hreflang",i=f[47].hrefLang),c(t,"href",e=f[47].href)},m(l,o){k(l,t,o)},p(l,o){o[0]&16&&i!==(i=l[47].hrefLang)&&c(t,"hreflang",i),o[0]&16&&e!==(e=l[47].href)&&c(t,"href",e)},d(l){l&&h(t)}}}function _e(f){let t,i,e,l,o,n,u,s=f[5].cardType&&ae(f),r=f[5].site&&ce(f),a=f[5].handle&&ue(f),d=f[5].title&&me(f),b=f[5].description&&se(f),m=f[5].image&&pe(f),p=f[5].imageAlt&&he(f);return{c(){s&&s.c(),t=y(),r&&r.c(),i=y(),a&&a.c(),e=y(),d&&d.c(),l=y(),b&&b.c(),o=y(),m&&m.c(),n=y(),p&&p.c(),u=T()},l(_){s&&s.l(_),t=L(_),r&&r.l(_),i=L(_),a&&a.l(_),e=L(_),d&&d.l(_),l=L(_),b&&b.l(_),o=L(_),m&&m.l(_),n=L(_),p&&p.l(_),u=T()},m(_,N){s&&s.m(_,N),k(_,t,N),r&&r.m(_,N),k(_,i,N),a&&a.m(_,N),k(_,e,N),d&&d.m(_,N),k(_,l,N),b&&b.m(_,N),k(_,o,N),m&&m.m(_,N),k(_,n,N),p&&p.m(_,N),k(_,u,N)},p(_,N){_[5].cardType?s?s.p(_,N):(s=ae(_),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),_[5].site?r?r.p(_,N):(r=ce(_),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),_[5].handle?a?a.p(_,N):(a=ue(_),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),_[5].title?d?d.p(_,N):(d=me(_),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null),_[5].description?b?b.p(_,N):(b=se(_),b.c(),b.m(o.parentNode,o)):b&&(b.d(1),b=null),_[5].image?m?m.p(_,N):(m=pe(_),m.c(),m.m(n.parentNode,n)):m&&(m.d(1),m=null),_[5].imageAlt?p?p.p(_,N):(p=he(_),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},d(_){s&&s.d(_),_&&h(t),r&&r.d(_),_&&h(i),a&&a.d(_),_&&h(e),d&&d.d(_),_&&h(l),b&&b.d(_),_&&h(o),m&&m.d(_),_&&h(n),p&&p.d(_),_&&h(u)}}}function ae(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:card"),c(t,"content",i=f[5].cardType)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].cardType)&&c(t,"content",i)},d(e){e&&h(t)}}}function ce(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:site"),c(t,"content",i=f[5].site)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].site)&&c(t,"content",i)},d(e){e&&h(t)}}}function ue(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:creator"),c(t,"content",i=f[5].handle)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].handle)&&c(t,"content",i)},d(e){e&&h(t)}}}function me(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:title"),c(t,"content",i=f[5].title)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].title)&&c(t,"content",i)},d(e){e&&h(t)}}}function se(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:description"),c(t,"content",i=f[5].description)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].description)&&c(t,"content",i)},d(e){e&&h(t)}}}function pe(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:image"),c(t,"content",i=f[5].image)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].image)&&c(t,"content",i)},d(e){e&&h(t)}}}function he(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{name:!0,content:!0}),this.h()},h(){c(t,"name","twitter:image:alt"),c(t,"content",i=f[5].imageAlt)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].imageAlt)&&c(t,"content",i)},d(e){e&&h(t)}}}function de(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","fb:app_id"),c(t,"content",i=f[6].appId)},m(e,l){k(e,t,l)},p(e,l){l[0]&64&&i!==(i=e[6].appId)&&c(t,"content",i)},d(e){e&&h(t)}}}function be(f){let t,i,e,l,o,n,u,s,r=(f[7].url||f[8])&&ke(f),a=f[7].type&&ve(f),d=(f[7].title||f[12])&&Xe(f),b=(f[7].description||f[2])&&$e(f),m=f[7].images&&f[7].images.length&&xe(f),p=f[7].videos&&f[7].videos.length&&nt(f),_=f[7].locale&&ut(f),N=f[7].site_name&&mt(f);return{c(){r&&r.c(),t=y(),a&&a.c(),i=y(),d&&d.c(),e=y(),b&&b.c(),l=y(),m&&m.c(),o=y(),p&&p.c(),n=y(),_&&_.c(),u=y(),N&&N.c(),s=T()},l(v){r&&r.l(v),t=L(v),a&&a.l(v),i=L(v),d&&d.l(v),e=L(v),b&&b.l(v),l=L(v),m&&m.l(v),o=L(v),p&&p.l(v),n=L(v),_&&_.l(v),u=L(v),N&&N.l(v),s=T()},m(v,E){r&&r.m(v,E),k(v,t,E),a&&a.m(v,E),k(v,i,E),d&&d.m(v,E),k(v,e,E),b&&b.m(v,E),k(v,l,E),m&&m.m(v,E),k(v,o,E),p&&p.m(v,E),k(v,n,E),_&&_.m(v,E),k(v,u,E),N&&N.m(v,E),k(v,s,E)},p(v,E){v[7].url||v[8]?r?r.p(v,E):(r=ke(v),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),v[7].type?a?a.p(v,E):(a=ve(v),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),v[7].title||v[12]?d?d.p(v,E):(d=Xe(v),d.c(),d.m(e.parentNode,e)):d&&(d.d(1),d=null),v[7].description||v[2]?b?b.p(v,E):(b=$e(v),b.c(),b.m(l.parentNode,l)):b&&(b.d(1),b=null),v[7].images&&v[7].images.length?m?m.p(v,E):(m=xe(v),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null),v[7].videos&&v[7].videos.length?p?p.p(v,E):(p=nt(v),p.c(),p.m(n.parentNode,n)):p&&(p.d(1),p=null),v[7].locale?_?_.p(v,E):(_=ut(v),_.c(),_.m(u.parentNode,u)):_&&(_.d(1),_=null),v[7].site_name?N?N.p(v,E):(N=mt(v),N.c(),N.m(s.parentNode,s)):N&&(N.d(1),N=null)},d(v){r&&r.d(v),v&&h(t),a&&a.d(v),v&&h(i),d&&d.d(v),v&&h(e),b&&b.d(v),v&&h(l),m&&m.d(v),v&&h(o),p&&p.d(v),v&&h(n),_&&_.d(v),v&&h(u),N&&N.d(v),v&&h(s)}}}function ke(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:url"),c(t,"content",i=f[7].url||f[8])},m(e,l){k(e,t,l)},p(e,l){l[0]&384&&i!==(i=e[7].url||e[8])&&c(t,"content",i)},d(e){e&&h(t)}}}function ve(f){let t,i,e,l,o,n,u,s;function r(b,m){if(m[0]&128&&(l=null),m[0]&128&&(o=null),m[0]&128&&(n=null),m[0]&128&&(u=null),l==null&&(l=!!(b[7].type.toLowerCase()==="profile"&&b[7].profile)),l)return Ot;if(o==null&&(o=!!(b[7].type.toLowerCase()==="book"&&b[7].book)),o)return qt;if(n==null&&(n=!!(b[7].type.toLowerCase()==="article"&&b[7].article)),n)return Pt;if(u==null&&(u=!!(b[7].type.toLowerCase()==="video.movie"||b[7].type.toLowerCase()==="video.episode"||b[7].type.toLowerCase()==="video.tv_show"||b[7].type.toLowerCase()==="video.other"&&b[7].video)),u)return Gt}let a=r(f,[-1,-1]),d=a&&a(f);return{c(){t=w("meta"),e=y(),d&&d.c(),s=T(),this.h()},l(b){t=g(b,"META",{property:!0,content:!0}),e=L(b),d&&d.l(b),s=T(),this.h()},h(){c(t,"property","og:type"),c(t,"content",i=f[7].type.toLowerCase())},m(b,m){k(b,t,m),k(b,e,m),d&&d.m(b,m),k(b,s,m)},p(b,m){m[0]&128&&i!==(i=b[7].type.toLowerCase())&&c(t,"content",i),a===(a=r(b,m))&&d?d.p(b,m):(d&&d.d(1),d=a&&a(b),d&&(d.c(),d.m(s.parentNode,s)))},d(b){b&&h(t),b&&h(e),d&&d.d(b),b&&h(s)}}}function Gt(f){let t,i,e,l,o,n,u,s=f[7].video.actors&&f[7].video.actors.length&&Ne(f),r=f[7].video.directors&&f[7].video.directors.length&&Ae(f),a=f[7].video.writers&&f[7].video.writers.length&&Ee(f),d=f[7].video.duration&&Le(f),b=f[7].video.releaseDate&&Se(f),m=f[7].video.tags&&f[7].video.tags.length&&Ce(f),p=f[7].video.series&&De(f);return{c(){s&&s.c(),t=y(),r&&r.c(),i=y(),a&&a.c(),e=y(),d&&d.c(),l=y(),b&&b.c(),o=y(),m&&m.c(),n=y(),p&&p.c(),u=T()},l(_){s&&s.l(_),t=L(_),r&&r.l(_),i=L(_),a&&a.l(_),e=L(_),d&&d.l(_),l=L(_),b&&b.l(_),o=L(_),m&&m.l(_),n=L(_),p&&p.l(_),u=T()},m(_,N){s&&s.m(_,N),k(_,t,N),r&&r.m(_,N),k(_,i,N),a&&a.m(_,N),k(_,e,N),d&&d.m(_,N),k(_,l,N),b&&b.m(_,N),k(_,o,N),m&&m.m(_,N),k(_,n,N),p&&p.m(_,N),k(_,u,N)},p(_,N){_[7].video.actors&&_[7].video.actors.length?s?s.p(_,N):(s=Ne(_),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),_[7].video.directors&&_[7].video.directors.length?r?r.p(_,N):(r=Ae(_),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),_[7].video.writers&&_[7].video.writers.length?a?a.p(_,N):(a=Ee(_),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),_[7].video.duration?d?d.p(_,N):(d=Le(_),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null),_[7].video.releaseDate?b?b.p(_,N):(b=Se(_),b.c(),b.m(o.parentNode,o)):b&&(b.d(1),b=null),_[7].video.tags&&_[7].video.tags.length?m?m.p(_,N):(m=Ce(_),m.c(),m.m(n.parentNode,n)):m&&(m.d(1),m=null),_[7].video.series?p?p.p(_,N):(p=De(_),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},d(_){s&&s.d(_),_&&h(t),r&&r.d(_),_&&h(i),a&&a.d(_),_&&h(e),d&&d.d(_),_&&h(l),b&&b.d(_),_&&h(o),m&&m.d(_),_&&h(n),p&&p.d(_),_&&h(u)}}}function Pt(f){let t,i,e,l,o,n,u=f[7].article.publishedTime&&Ge(f),s=f[7].article.modifiedTime&&Pe(f),r=f[7].article.expirationTime&&qe(f),a=f[7].article.authors&&f[7].article.authors.length&&Oe(f),d=f[7].article.section&&Ke(f),b=f[7].article.tags&&f[7].article.tags.length&&Ue(f);return{c(){u&&u.c(),t=y(),s&&s.c(),i=y(),r&&r.c(),e=y(),a&&a.c(),l=y(),d&&d.c(),o=y(),b&&b.c(),n=T()},l(m){u&&u.l(m),t=L(m),s&&s.l(m),i=L(m),r&&r.l(m),e=L(m),a&&a.l(m),l=L(m),d&&d.l(m),o=L(m),b&&b.l(m),n=T()},m(m,p){u&&u.m(m,p),k(m,t,p),s&&s.m(m,p),k(m,i,p),r&&r.m(m,p),k(m,e,p),a&&a.m(m,p),k(m,l,p),d&&d.m(m,p),k(m,o,p),b&&b.m(m,p),k(m,n,p)},p(m,p){m[7].article.publishedTime?u?u.p(m,p):(u=Ge(m),u.c(),u.m(t.parentNode,t)):u&&(u.d(1),u=null),m[7].article.modifiedTime?s?s.p(m,p):(s=Pe(m),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null),m[7].article.expirationTime?r?r.p(m,p):(r=qe(m),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),m[7].article.authors&&m[7].article.authors.length?a?a.p(m,p):(a=Oe(m),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null),m[7].article.section?d?d.p(m,p):(d=Ke(m),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),m[7].article.tags&&m[7].article.tags.length?b?b.p(m,p):(b=Ue(m),b.c(),b.m(n.parentNode,n)):b&&(b.d(1),b=null)},d(m){u&&u.d(m),m&&h(t),s&&s.d(m),m&&h(i),r&&r.d(m),m&&h(e),a&&a.d(m),m&&h(l),d&&d.d(m),m&&h(o),b&&b.d(m),m&&h(n)}}}function qt(f){let t,i,e,l,o=f[7].book.authors&&f[7].book.authors.length&&Ve(f),n=f[7].book.isbn&&je(f),u=f[7].book.releaseDate&&Be(f),s=f[7].book.tags&&f[7].book.tags.length&&He(f);return{c(){o&&o.c(),t=y(),n&&n.c(),i=y(),u&&u.c(),e=y(),s&&s.c(),l=T()},l(r){o&&o.l(r),t=L(r),n&&n.l(r),i=L(r),u&&u.l(r),e=L(r),s&&s.l(r),l=T()},m(r,a){o&&o.m(r,a),k(r,t,a),n&&n.m(r,a),k(r,i,a),u&&u.m(r,a),k(r,e,a),s&&s.m(r,a),k(r,l,a)},p(r,a){r[7].book.authors&&r[7].book.authors.length?o?o.p(r,a):(o=Ve(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),r[7].book.isbn?n?n.p(r,a):(n=je(r),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null),r[7].book.releaseDate?u?u.p(r,a):(u=Be(r),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),r[7].book.tags&&r[7].book.tags.length?s?s.p(r,a):(s=He(r),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(r){o&&o.d(r),r&&h(t),n&&n.d(r),r&&h(i),u&&u.d(r),r&&h(e),s&&s.d(r),r&&h(l)}}}function Ot(f){let t,i,e,l,o=f[7].profile.firstName&&Re(f),n=f[7].profile.lastName&&Ze(f),u=f[7].profile.username&&Qe(f),s=f[7].profile.gender&&We(f);return{c(){o&&o.c(),t=y(),n&&n.c(),i=y(),u&&u.c(),e=y(),s&&s.c(),l=T()},l(r){o&&o.l(r),t=L(r),n&&n.l(r),i=L(r),u&&u.l(r),e=L(r),s&&s.l(r),l=T()},m(r,a){o&&o.m(r,a),k(r,t,a),n&&n.m(r,a),k(r,i,a),u&&u.m(r,a),k(r,e,a),s&&s.m(r,a),k(r,l,a)},p(r,a){r[7].profile.firstName?o?o.p(r,a):(o=Re(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),r[7].profile.lastName?n?n.p(r,a):(n=Ze(r),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null),r[7].profile.username?u?u.p(r,a):(u=Qe(r),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),r[7].profile.gender?s?s.p(r,a):(s=We(r),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(r){o&&o.d(r),r&&h(t),n&&n.d(r),r&&h(i),u&&u.d(r),r&&h(e),s&&s.d(r),r&&h(l)}}}function Ne(f){let t,i=f[7].video.actors,e=[];for(let l=0;l<i.length;l+=1)e[l]=ge(X(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.actors;let n;for(n=0;n<i.length;n+=1){const u=X(l,i,n);e[n]?e[n].p(u,o):(e[n]=ge(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function Te(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:actor"),c(t,"content",i=f[44].profile)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[44].profile)&&c(t,"content",i)},d(e){e&&h(t)}}}function we(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:actor:role"),c(t,"content",i=f[44].role)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[44].role)&&c(t,"content",i)},d(e){e&&h(t)}}}function ge(f){let t,i,e=f[44].profile&&Te(f),l=f[44].role&&we(f);return{c(){e&&e.c(),t=y(),l&&l.c(),i=T()},l(o){e&&e.l(o),t=L(o),l&&l.l(o),i=T()},m(o,n){e&&e.m(o,n),k(o,t,n),l&&l.m(o,n),k(o,i,n)},p(o,n){o[44].profile?e?e.p(o,n):(e=Te(o),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null),o[44].role?l?l.p(o,n):(l=we(o),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},d(o){e&&e.d(o),o&&h(t),l&&l.d(o),o&&h(i)}}}function Ae(f){let t,i=f[7].video.directors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Me(W(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.directors;let n;for(n=0;n<i.length;n+=1){const u=W(l,i,n);e[n]?e[n].p(u,o):(e[n]=Me(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function Me(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:director"),c(t,"content",i=f[41])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[41])&&c(t,"content",i)},d(e){e&&h(t)}}}function Ee(f){let t,i=f[7].video.writers,e=[];for(let l=0;l<i.length;l+=1)e[l]=ye(Q(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.writers;let n;for(n=0;n<i.length;n+=1){const u=Q(l,i,n);e[n]?e[n].p(u,o):(e[n]=ye(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function ye(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:writer"),c(t,"content",i=f[38])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[38])&&c(t,"content",i)},d(e){e&&h(t)}}}function Le(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:duration"),c(t,"content",i=f[7].video.duration.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.duration.toString())&&c(t,"content",i)},d(e){e&&h(t)}}}function Se(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:release_date"),c(t,"content",i=f[7].video.releaseDate)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.releaseDate)&&c(t,"content",i)},d(e){e&&h(t)}}}function Ce(f){let t,i=f[7].video.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=Ie(Z(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.tags;let n;for(n=0;n<i.length;n+=1){const u=Z(l,i,n);e[n]?e[n].p(u,o):(e[n]=Ie(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function Ie(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:tag"),c(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&c(t,"content",i)},d(e){e&&h(t)}}}function De(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","video:series"),c(t,"content",i=f[7].video.series)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.series)&&c(t,"content",i)},d(e){e&&h(t)}}}function Ge(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:published_time"),c(t,"content",i=f[7].article.publishedTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.publishedTime)&&c(t,"content",i)},d(e){e&&h(t)}}}function Pe(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:modified_time"),c(t,"content",i=f[7].article.modifiedTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.modifiedTime)&&c(t,"content",i)},d(e){e&&h(t)}}}function qe(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:expiration_time"),c(t,"content",i=f[7].article.expirationTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.expirationTime)&&c(t,"content",i)},d(e){e&&h(t)}}}function Oe(f){let t,i=f[7].article.authors,e=[];for(let l=0;l<i.length;l+=1)e[l]=ze(x(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].article.authors;let n;for(n=0;n<i.length;n+=1){const u=x(l,i,n);e[n]?e[n].p(u,o):(e[n]=ze(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function ze(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:author"),c(t,"content",i=f[29])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[29])&&c(t,"content",i)},d(e){e&&h(t)}}}function Ke(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:section"),c(t,"content",i=f[7].article.section)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.section)&&c(t,"content",i)},d(e){e&&h(t)}}}function Ue(f){let t,i=f[7].article.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=Fe($(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].article.tags;let n;for(n=0;n<i.length;n+=1){const u=$(l,i,n);e[n]?e[n].p(u,o):(e[n]=Fe(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function Fe(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","article:tag"),c(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&c(t,"content",i)},d(e){e&&h(t)}}}function Ve(f){let t,i=f[7].book.authors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Ye(te(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].book.authors;let n;for(n=0;n<i.length;n+=1){const u=te(l,i,n);e[n]?e[n].p(u,o):(e[n]=Ye(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function Ye(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","book:author"),c(t,"content",i=f[29])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[29])&&c(t,"content",i)},d(e){e&&h(t)}}}function je(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","book:isbn"),c(t,"content",i=f[7].book.isbn)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].book.isbn)&&c(t,"content",i)},d(e){e&&h(t)}}}function Be(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","book:release_date"),c(t,"content",i=f[7].book.releaseDate)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].book.releaseDate)&&c(t,"content",i)},d(e){e&&h(t)}}}function He(f){let t,i=f[7].book.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=Je(ee(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].book.tags;let n;for(n=0;n<i.length;n+=1){const u=ee(l,i,n);e[n]?e[n].p(u,o):(e[n]=Je(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function Je(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","book:tag"),c(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&c(t,"content",i)},d(e){e&&h(t)}}}function Re(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","profile:first_name"),c(t,"content",i=f[7].profile.firstName)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.firstName)&&c(t,"content",i)},d(e){e&&h(t)}}}function Ze(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","profile:last_name"),c(t,"content",i=f[7].profile.lastName)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.lastName)&&c(t,"content",i)},d(e){e&&h(t)}}}function Qe(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","profile:username"),c(t,"content",i=f[7].profile.username)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.username)&&c(t,"content",i)},d(e){e&&h(t)}}}function We(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","profile:gender"),c(t,"content",i=f[7].profile.gender)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.gender)&&c(t,"content",i)},d(e){e&&h(t)}}}function Xe(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:title"),c(t,"content",i=f[7].title||f[12])},m(e,l){k(e,t,l)},p(e,l){l[0]&4224&&i!==(i=e[7].title||e[12])&&c(t,"content",i)},d(e){e&&h(t)}}}function $e(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:description"),c(t,"content",i=f[7].description||f[2])},m(e,l){k(e,t,l)},p(e,l){l[0]&132&&i!==(i=e[7].description||e[2])&&c(t,"content",i)},d(e){e&&h(t)}}}function xe(f){let t,i=f[7].images,e=[];for(let l=0;l<i.length;l+=1)e[l]=it(R(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].images;let n;for(n=0;n<i.length;n+=1){const u=R(l,i,n);e[n]?e[n].p(u,o):(e[n]=it(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function et(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:image:alt"),c(t,"content",i=f[24].alt)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].alt)&&c(t,"content",i)},d(e){e&&h(t)}}}function tt(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:image:width"),c(t,"content",i=f[24].width.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].width.toString())&&c(t,"content",i)},d(e){e&&h(t)}}}function lt(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:image:height"),c(t,"content",i=f[24].height.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].height.toString())&&c(t,"content",i)},d(e){e&&h(t)}}}function it(f){let t,i,e,l,o,n,u=f[24].alt&&et(f),s=f[24].width&&tt(f),r=f[24].height&&lt(f);return{c(){t=w("meta"),e=y(),u&&u.c(),l=y(),s&&s.c(),o=y(),r&&r.c(),n=T(),this.h()},l(a){t=g(a,"META",{property:!0,content:!0}),e=L(a),u&&u.l(a),l=L(a),s&&s.l(a),o=L(a),r&&r.l(a),n=T(),this.h()},h(){c(t,"property","og:image"),c(t,"content",i=f[24].url)},m(a,d){k(a,t,d),k(a,e,d),u&&u.m(a,d),k(a,l,d),s&&s.m(a,d),k(a,o,d),r&&r.m(a,d),k(a,n,d)},p(a,d){d[0]&128&&i!==(i=a[24].url)&&c(t,"content",i),a[24].alt?u?u.p(a,d):(u=et(a),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null),a[24].width?s?s.p(a,d):(s=tt(a),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null),a[24].height?r?r.p(a,d):(r=lt(a),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(a){a&&h(t),a&&h(e),u&&u.d(a),a&&h(l),s&&s.d(a),a&&h(o),r&&r.d(a),a&&h(n)}}}function nt(f){let t,i=f[7].videos,e=[];for(let l=0;l<i.length;l+=1)e[l]=ct(J(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].videos;let n;for(n=0;n<i.length;n+=1){const u=J(l,i,n);e[n]?e[n].p(u,o):(e[n]=ct(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function ft(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:alt"),c(t,"content",i=f[21].alt)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].alt)&&c(t,"content",i)},d(e){e&&h(t)}}}function ot(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:width"),c(t,"content",i=f[21].width.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].width.toString())&&c(t,"content",i)},d(e){e&&h(t)}}}function rt(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:height"),c(t,"content",i=f[21].height.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].height.toString())&&c(t,"content",i)},d(e){e&&h(t)}}}function _t(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:secure_url"),c(t,"content",i=f[21].secureUrl.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].secureUrl.toString())&&c(t,"content",i)},d(e){e&&h(t)}}}function at(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:video:type"),c(t,"content",i=f[21].type.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].type.toString())&&c(t,"content",i)},d(e){e&&h(t)}}}function ct(f){let t,i,e,l,o,n,u,s,r=f[21].alt&&ft(f),a=f[21].width&&ot(f),d=f[21].height&&rt(f),b=f[21].secureUrl&&_t(f),m=f[21].type&&at(f);return{c(){t=w("meta"),e=y(),r&&r.c(),l=y(),a&&a.c(),o=y(),d&&d.c(),n=y(),b&&b.c(),u=y(),m&&m.c(),s=T(),this.h()},l(p){t=g(p,"META",{property:!0,content:!0}),e=L(p),r&&r.l(p),l=L(p),a&&a.l(p),o=L(p),d&&d.l(p),n=L(p),b&&b.l(p),u=L(p),m&&m.l(p),s=T(),this.h()},h(){c(t,"property","og:video"),c(t,"content",i=f[21].url)},m(p,_){k(p,t,_),k(p,e,_),r&&r.m(p,_),k(p,l,_),a&&a.m(p,_),k(p,o,_),d&&d.m(p,_),k(p,n,_),b&&b.m(p,_),k(p,u,_),m&&m.m(p,_),k(p,s,_)},p(p,_){_[0]&128&&i!==(i=p[21].url)&&c(t,"content",i),p[21].alt?r?r.p(p,_):(r=ft(p),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null),p[21].width?a?a.p(p,_):(a=ot(p),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null),p[21].height?d?d.p(p,_):(d=rt(p),d.c(),d.m(n.parentNode,n)):d&&(d.d(1),d=null),p[21].secureUrl?b?b.p(p,_):(b=_t(p),b.c(),b.m(u.parentNode,u)):b&&(b.d(1),b=null),p[21].type?m?m.p(p,_):(m=at(p),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},d(p){p&&h(t),p&&h(e),r&&r.d(p),p&&h(l),a&&a.d(p),p&&h(o),d&&d.d(p),p&&h(n),b&&b.d(p),p&&h(u),m&&m.d(p),p&&h(s)}}}function ut(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:locale"),c(t,"content",i=f[7].locale)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].locale)&&c(t,"content",i)},d(e){e&&h(t)}}}function mt(f){let t,i;return{c(){t=w("meta"),this.h()},l(e){t=g(e,"META",{property:!0,content:!0}),this.h()},h(){c(t,"property","og:site_name"),c(t,"content",i=f[7].site_name)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].site_name)&&c(t,"content",i)},d(e){e&&h(t)}}}function st(f){let t,i=f[9],e=[];for(let l=0;l<i.length;l+=1)e[l]=pt(H(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&512){i=l[9];let n;for(n=0;n<i.length;n+=1){const u=H(l,i,n);e[n]?e[n].p(u,o):(e[n]=pt(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function pt(f){let t,i=[f[16]],e={};for(let l=0;l<i.length;l+=1)e=Tt(e,i[l]);return{c(){t=w("meta"),this.h()},l(l){t=g(l,"META",{}),this.h()},h(){K(t,e)},m(l,o){k(l,t,o)},p(l,o){K(t,e=wt(i,[o[0]&512&&l[16]]))},d(l){l&&h(t)}}}function ht(f){let t,i=f[10],e=[];for(let l=0;l<i.length;l+=1)e[l]=dt(B(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=T()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&1024){i=l[10];let n;for(n=0;n<i.length;n+=1){const u=B(l,i,n);e[n]?e[n].p(u,o):(e[n]=dt(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){P(e,l),l&&h(t)}}}function dt(f){let t,i=[f[16]],e={};for(let l=0;l<i.length;l+=1)e=Tt(e,i[l]);return{c(){t=w("link"),this.h()},l(l){t=g(l,"LINK",{}),this.h()},h(){K(t,e)},m(l,o){k(l,t,o)},p(l,o){K(t,e=wt(i,[o[0]&1024&&l[16]]))},d(l){l&&h(t)}}}function zt(f){var z;let t,i,e,l,o,n,u,s,r,a,d,b,m,p;document.title=t=f[12];let _=f[2]&&ie(f),N=f[8]&&ne(f),v=f[3]&&fe(f),E=f[4]&&f[4].length>0&&oe(f),M=f[5]&&_e(f),C=f[6]&&de(f),I=f[7]&&be(f),D=f[9]&&f[9].length>0&&st(f),G=((z=f[10])==null?void 0:z.length)&&ht(f);return{c(){i=w("meta"),l=w("meta"),_&&_.c(),n=T(),N&&N.c(),u=T(),v&&v.c(),s=T(),E&&E.c(),r=T(),M&&M.c(),a=T(),C&&C.c(),d=T(),I&&I.c(),b=T(),D&&D.c(),m=T(),G&&G.c(),p=T(),this.h()},l(A){const S=Nt('[data-svelte="svelte-1h7w4y4"]',document.head);i=g(S,"META",{name:!0,content:!0}),l=g(S,"META",{name:!0,content:!0}),_&&_.l(S),n=T(),N&&N.l(S),u=T(),v&&v.l(S),s=T(),E&&E.l(S),r=T(),M&&M.l(S),a=T(),C&&C.l(S),d=T(),I&&I.l(S),b=T(),D&&D.l(S),m=T(),G&&G.l(S),p=T(),S.forEach(h),this.h()},h(){c(i,"name","robots"),c(i,"content",e=`${f[0]?"noindex":"index"},${f[1]?"nofollow":"follow"}${f[11]}`),c(l,"name","googlebot"),c(l,"content",o=`${f[0]?"noindex":"index"},${f[1]?"nofollow":"follow"}${f[11]}`)},m(A,S){q(document.head,i),q(document.head,l),_&&_.m(document.head,null),q(document.head,n),N&&N.m(document.head,null),q(document.head,u),v&&v.m(document.head,null),q(document.head,s),E&&E.m(document.head,null),q(document.head,r),M&&M.m(document.head,null),q(document.head,a),C&&C.m(document.head,null),q(document.head,d),I&&I.m(document.head,null),q(document.head,b),D&&D.m(document.head,null),q(document.head,m),G&&G.m(document.head,null),q(document.head,p)},p(A,S){var F;S[0]&4096&&t!==(t=A[12])&&(document.title=t),S[0]&2051&&e!==(e=`${A[0]?"noindex":"index"},${A[1]?"nofollow":"follow"}${A[11]}`)&&c(i,"content",e),S[0]&2051&&o!==(o=`${A[0]?"noindex":"index"},${A[1]?"nofollow":"follow"}${A[11]}`)&&c(l,"content",o),A[2]?_?_.p(A,S):(_=ie(A),_.c(),_.m(n.parentNode,n)):_&&(_.d(1),_=null),A[8]?N?N.p(A,S):(N=ne(A),N.c(),N.m(u.parentNode,u)):N&&(N.d(1),N=null),A[3]?v?v.p(A,S):(v=fe(A),v.c(),v.m(s.parentNode,s)):v&&(v.d(1),v=null),A[4]&&A[4].length>0?E?E.p(A,S):(E=oe(A),E.c(),E.m(r.parentNode,r)):E&&(E.d(1),E=null),A[5]?M?M.p(A,S):(M=_e(A),M.c(),M.m(a.parentNode,a)):M&&(M.d(1),M=null),A[6]?C?C.p(A,S):(C=de(A),C.c(),C.m(d.parentNode,d)):C&&(C.d(1),C=null),A[7]?I?I.p(A,S):(I=be(A),I.c(),I.m(b.parentNode,b)):I&&(I.d(1),I=null),A[9]&&A[9].length>0?D?D.p(A,S):(D=st(A),D.c(),D.m(m.parentNode,m)):D&&(D.d(1),D=null),(F=A[10])!=null&&F.length?G?G.p(A,S):(G=ht(A),G.c(),G.m(p.parentNode,p)):G&&(G.d(1),G=null)},i:V,o:V,d(A){h(i),h(l),_&&_.d(A),h(n),N&&N.d(A),h(u),v&&v.d(A),h(s),E&&E.d(A),h(r),M&&M.d(A),h(a),C&&C.d(A),h(d),I&&I.d(A),h(b),D&&D.d(A),h(m),G&&G.d(A),h(p)}}}function Kt(f,t,i){let e,{title:l=""}=t,{titleTemplate:o=""}=t,{noindex:n=!1}=t,{nofollow:u=!1}=t,{robotsProps:s=void 0}=t,{description:r=void 0}=t,{mobileAlternate:a=void 0}=t,{languageAlternates:d=void 0}=t,{twitter:b=void 0}=t,{facebook:m=void 0}=t,{openGraph:p=void 0}=t,{canonical:_=void 0}=t,{additionalMetaTags:N=void 0}=t,{additionalLinkTags:v=void 0}=t,E="";if(s){const{nosnippet:M,maxSnippet:C,maxImagePreview:I,maxVideoPreview:D,noarchive:G,noimageindex:z,notranslate:A,unavailableAfter:S}=s;E=`${M?",nosnippet":""}${C?`,max-snippet:${C}`:""}${I?`,max-image-preview:${I}`:""}${G?",noarchive":""}${S?`,unavailable_after:${S}`:""}${z?",noimageindex":""}${D?`,max-video-preview:${D}`:""}${A?",notranslate":""}`}return f.$$set=M=>{"title"in M&&i(13,l=M.title),"titleTemplate"in M&&i(14,o=M.titleTemplate),"noindex"in M&&i(0,n=M.noindex),"nofollow"in M&&i(1,u=M.nofollow),"robotsProps"in M&&i(15,s=M.robotsProps),"description"in M&&i(2,r=M.description),"mobileAlternate"in M&&i(3,a=M.mobileAlternate),"languageAlternates"in M&&i(4,d=M.languageAlternates),"twitter"in M&&i(5,b=M.twitter),"facebook"in M&&i(6,m=M.facebook),"openGraph"in M&&i(7,p=M.openGraph),"canonical"in M&&i(8,_=M.canonical),"additionalMetaTags"in M&&i(9,N=M.additionalMetaTags),"additionalLinkTags"in M&&i(10,v=M.additionalLinkTags)},f.$$.update=()=>{f.$$.dirty[0]&24576&&i(12,e=o?o.replace(/%s/g,l):l)},[n,u,r,a,d,b,m,p,_,N,v,E,e,l,o,s]}class Ut extends bt{constructor(t){super(),kt(this,t,Kt,zt,vt,{title:13,titleTemplate:14,noindex:0,nofollow:1,robotsProps:15,description:2,mobileAlternate:3,languageAlternates:4,twitter:5,facebook:6,openGraph:7,canonical:8,additionalMetaTags:9,additionalLinkTags:10},null,[-1,-1])}}function Ft(f){let t,i,e,l,o,n;l=new Ut({props:{title:O,titleTemplate:"%s | Cittadini per l'aria",description:U,",":!0,openGraph:{url:"https://www.cittadiniperlaria.org/milano-2020-sai-cosa-respiri/",title:O,description:U,images:[{url:"https://calib.ro/cpl-no2/saicheariarespiri.png",width:1245,height:700,alt:O}],site_name:"Scopri quanto NO2 respiri a Milano!"},twitter:{site:"https://www.cittadiniperlaria.org/milano-2020-sai-cosa-respiri/",cardType:"summary_large_image",title:O,description:U,image:"https://calib.ro/cpl-no2/saicheariarespiri.png",imageAlt:O}}});const u=f[2].default,s=gt(u,f,f[1],null);return{c(){t=w("script"),e=y(),At(l.$$.fragment),o=y(),s&&s.c(),this.h()},l(r){const a=Nt('[data-svelte="svelte-48cdql"]',document.head);t=g(a,"SCRIPT",{src:!0});var d=Mt(t);d.forEach(h),a.forEach(h),e=L(r),Et(l.$$.fragment,r),o=L(r),s&&s.l(r),this.h()},h(){t.defer=!0,t.async=!0,yt(t.src,i=`https://maps.googleapis.com/maps/api/js?key=${f[0]}`)||c(t,"src",i)},m(r,a){q(document.head,t),k(r,e,a),Lt(l,r,a),k(r,o,a),s&&s.m(r,a),n=!0},p(r,[a]){s&&s.p&&(!n||a&2)&&St(s,u,r,r[1],n?It(u,r[1],a,null):Ct(r[1]),null)},i(r){n||(Y(l.$$.fragment,r),Y(s,r),n=!0)},o(r){j(l.$$.fragment,r),j(s,r),n=!1},d(r){h(t),r&&h(e),Dt(l,r),r&&h(o),s&&s.d(r)}}}const O="Scopri quanto NO2 respiri a Milano!",U="Il biossido di azoto (NO2), che proviene dai veicoli diesel che percorrono le vie di Milano, causa la morte prematura di 1500 persone ogni anno nel capoluogo lombardo. Scopri la concentrazione annua di NO2 inserendo il tuo indirizzo a Milano, quello di dove lavori, o selezionando una scuola.";function Vt(f,t,i){let{$$slots:e={},$$scope:l}=t;const o="AIzaSyDcpULOqwVOKTZgsGFrg4d1c04-8cTw-Yk";return f.$$set=n=>{"$$scope"in n&&i(1,l=n.$$scope)},[o,l,e]}class jt extends bt{constructor(t){super(),kt(this,t,Vt,Ft,vt,{})}}export{jt as default};
