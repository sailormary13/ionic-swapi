(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{P0Ww:function(n,t,e){"use strict";function o(n,t){n.addEventListener("statusTap",function(){t.read(function(){var e=n.document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(e){var o=e.closest("ion-content");o&&o.componentOnReady().then(function(){t.write(function(){return o.scrollToTop(300)})})}})})}e.r(t),e.d(t,"startStatusTap",function(){return o})}}]);