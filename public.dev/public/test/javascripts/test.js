(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o,t)}},u=function(e,t){var r={id:e,exports:{}};return n[e]=r,t(r.exports,o(e),r),r.exports},a=function(e,s){var o=i(e,".");s==null&&(s="/");if(r(n,o))return n[o].exports;if(r(t,o))return u(o,t[o]);var a=i(o,"./index");if(r(n,a))return n[a].exports;if(r(t,a))return u(a,t[a]);throw new Error('Cannot find module "'+e+'" from '+'"'+s+'"')},f=function(e,n){if(typeof e=="object")for(var i in e)r(e,i)&&(t[i]=e[i]);else t[e]=n},l=function(){var e=[];for(var n in t)r(t,n)&&e.push(n);return e};e.require=a,e.require.define=f,e.require.register=f,e.require.list=l,e.require.brunch=!0})(),require.register("test/test-helpers",function(e,t,n){var r=t("chai"),i=t("sinon-chai");r.use(i),n.exports={expect:r.expect,sinon:t("sinon")}}),require.register("test/views/HomeView_test",function(e,t,n){var r=t("views/HomeView"),i;describe("HomeView",function(){beforeEach(function(){i=new r,i.render()}),afterEach(function(){i.remove()}),it("Should display an artist",function(){expect(i.$el.find("#artist")).to.have.length(1)}),it("The artist should be Robert Ashley",function(){expect(i.$el.find("#artist").text()).to.equal("Robert Ashley")}),it("Should list nine operas",function(){expect(i.$el.find("#operas").find("li")).to.have.length(9)})})})