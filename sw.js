"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"5931913d70abdf424cfb3f2737d4cfa8",url:"./404.html"},{revision:"5a03c08a66d2cd5d29be54fa674caa10",url:"./about/index.html"},{revision:"472e48c65028a9cd94c6a84d24ed1984",url:"./archives/2020/05/index.html"},{revision:"b9653781488826a1ed20f3a9b4415532",url:"./archives/2020/07/index.html"},{revision:"cb3ac762c494ab8376b0bdb345b448f1",url:"./archives/2020/08/index.html"},{revision:"3b83b7bdae0bc5f129903d5b4710adea",url:"./archives/2020/index.html"},{revision:"a701242b06790f383cc7c6037b8f8582",url:"./archives/index.html"},{revision:"ede0fcd0f11de640388e541e45d20c3c",url:"./baidu_verify_zqxQAohuoC.html"},{revision:"8d2da4c7514f75e32dcbea96240345d7",url:"./categories/CS-GO/index.html"},{revision:"aa5df22588696f6d38ba5f8f40d339c8",url:"./categories/index.html"},{revision:"5189f134de660ae8b60b568c77ccc85e",url:"./categories/博客创建日志/index.html"},{revision:"63712643e766fc5d920d23d88b166140",url:"./categories/泰拉瑞亚（Terraria）/index.html"},{revision:"8a9d45445ca21d73bcdb315a2115522d",url:"./comment/index.html"},{revision:"4a8e689ad9131cf7ade6782f0b43b2bb",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"0a8737befc74bc652b59128110cc1b40",url:"./index.html"},{revision:"cec5bf97482a26159b5f2b6aaef1f908",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0176913a28754a766910352489a24a69",url:"./js/tw_cn.js"},{revision:"ed14620aa57998a9d3f887c1989f5365",url:"./js/utils.js"},{revision:"d7f91a8271ad9cc75d36f81ae7c4e42b",url:"./links/index.html"},{revision:"a872addd42918421c7ebbc4ef37c859c",url:"./manifest.json"},{revision:"046fb9174eeaca6d099283c832782a53",url:"./photos/index.html"},{revision:"60222333736d2673de13faf3f1beb17d",url:"./posts/158bbb86.html"},{revision:"bca712755f23ee9ca16214e9570ebff1",url:"./posts/19167.html"},{revision:"ce45611d825167dee278f3755b6a8342",url:"./posts/33791.html"},{revision:"8366c3b4dd2c0ea8fb9b321a40abe2de",url:"./posts/38408.html"},{revision:"2457f5176b9c5307327f75668fdaa35d",url:"./posts/3ba13446.html"},{revision:"16d16c70b07110d3482d1b51ab0aa382",url:"./posts/53457.html"},{revision:"508c155cf234599b0ebb8300fb0bedbd",url:"./posts/56251.html"},{revision:"b8598dd4dac3741625713ea477c55561",url:"./posts/60952.html"},{revision:"ba152444327da4487cba352328f36228",url:"./posts/61016.html"},{revision:"4a0517194e4379c38dc8f777373df487",url:"./posts/777a8137.html"},{revision:"99e93ca0033e6f78413ed5ee71615dfc",url:"./shuoshuo/index.html"},{revision:"7ddbf8edf5c269d14c94d2483a72734a",url:"./tages/index.html"},{revision:"4347386a0333e844cd97fac2f9def040",url:"./tags/CS-GO/index.html"},{revision:"cdc3446db401f1f15a8eb9eae7bfd183",url:"./tags/博客创建日志/index.html"},{revision:"847784e13d2b883ad7db3676e6e987c1",url:"./tags/泰拉瑞亚（Terraria）/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();