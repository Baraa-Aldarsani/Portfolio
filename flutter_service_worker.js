'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "decbc8825cf64263e2e3ed46daf09e47",
"assets/AssetManifest.bin.json": "350618070ca6e1f7e1c20beae0406ead",
"assets/AssetManifest.json": "911758b6e777e6feca203f1f9718a5c8",
"assets/assets/employeParking/1.png": "d55930ebdfdd0e1f7df7fa4288066aca",
"assets/assets/employeParking/2.png": "3610340b7e667222295600389f07283c",
"assets/assets/employeParking/4.png": "e1e639030989d175b9b62a15dbe83471",
"assets/assets/employeParking/5.png": "d4e8def486f337f1640e7b6f8c8278b6",
"assets/assets/employeParking/add%2520customer.PNG": "eeb4112c88b3d90c45ad97fd4f4112e8",
"assets/assets/employeParking/drawer.png": "c81076b16f34bec40135d8e0d4615a7e",
"assets/assets/employeParking/home.jpg": "dffa9967418e5b5a4501c1b5961e8b86",
"assets/assets/employeParking/login.PNG": "b7d7a9919fc195411fb175851c9b7c1f",
"assets/assets/employeParking/scanner.PNG": "93ea37989176c411fd5a71730508e446",
"assets/assets/employeParking/settings.PNG": "eb4416d0c8a76417f389c4186fdacedb",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/CSH1.png": "92246f936360109aec23f57bffd8942a",
"assets/assets/images/CSH2.png": "56e4269f8440654634b90b98a614d519",
"assets/assets/images/CSH3.png": "ce1f3779cbd951814ede546c5fd836f0",
"assets/assets/images/CSH4.png": "ce580e1ad94109f0787e9ae9ef7e0295",
"assets/assets/images/CSH5.png": "abe16eb214b2117765b0069032323f7b",
"assets/assets/images/CSH6.png": "52bd0dcada9dba64254843072aaf907d",
"assets/assets/images/CSH7.png": "92b1f8c1a3b18fe3a8d8bc9d96a999f8",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/profile.jpg": "0cbeb9a79ebbeb369c4daccb44367c24",
"assets/assets/images/profile.png": "b63daeffb4e92f674d1d886c67d3da98",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/parkit/auth/1.PNG": "260d304f4f266f7be7241c9740d1c97f",
"assets/assets/parkit/auth/2.PNG": "cce6db4afe169610b1006147ecc06e0c",
"assets/assets/parkit/Boarding/1.PNG": "56cbdb8b5d168ccf312e60da718c3efe",
"assets/assets/parkit/Boarding/2.PNG": "6da870448a53515c55c3819a337a8d2b",
"assets/assets/parkit/Boarding/3.PNG": "524fd3d94e46778c3b51a1a4325e30d3",
"assets/assets/parkit/Bokking/1.PNG": "aa95a9558427d86197dd90193dd5c2f4",
"assets/assets/parkit/Bokking/2.PNG": "5c2519eee33a106524bdb6afd01aac9a",
"assets/assets/parkit/Bokking/3.PNG": "ac52c115b3b8ecf621c60acffea44a36",
"assets/assets/parkit/Bokking/4.PNG": "d71b2e2eea10f010a57f3f46b6787fbd",
"assets/assets/parkit/Bokking/5.PNG": "d8a8a07d137de4726c64815be65ff56e",
"assets/assets/parkit/Bokking/6.PNG": "5854031a4c0d0a5944d6befbac2d7385",
"assets/assets/parkit/Cars/1.PNG": "69554b9383ce25c223c58e04e2b17e8d",
"assets/assets/parkit/Cars/2.PNG": "5206f40cf3c29a6bc102cc808c93d1c7",
"assets/assets/parkit/Cars/3.PNG": "16c909854a10f343ece89c085f217d91",
"assets/assets/parkit/main/1.PNG": "7d381d87d7c4510fed08021c53662a3c",
"assets/assets/parkit/main/2.PNG": "27151eb56aa310f75c9b2d3b8f56dbf2",
"assets/assets/parkit/main/4.1.PNG": "6df1b5bea8fbc9304579b3395e04d080",
"assets/assets/parkit/main/4.2.PNG": "7434143e12ada9a06932e206c5a17ab8",
"assets/assets/parkit/main/5.PNG": "c61c4330904d6a607558c0cfda5d4952",
"assets/assets/parkit/other/1.PNG": "d671f75f6401b0c380189e9ddd422545",
"assets/assets/parkit/other/2.PNG": "9f1fa28722cd88e8f8039a03d2db8062",
"assets/assets/parkit/other/Capture.PNG": "1e132b3a2f9d7b35435b08dfbe42d9f0",
"assets/assets/parkit/other/fav.PNG": "f779a55d017ec46b934ce12ed76cab53",
"assets/assets/parkit/other/sevice.PNG": "078cd71e329b434d15c18957731c4b57",
"assets/FontManifest.json": "966a866ae19991bd6c6685f0e338af18",
"assets/fonts/MaterialIcons-Regular.otf": "217bba2a208ba60607aa9ac24e27f72b",
"assets/NOTICES": "33fa374a4a4190296fbb29eb3dbbeb0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a18d15b9cf93e44f98ad7354f6bfa3e",
"assets/packages/dev_icons/fonts/devicon.ttf": "1dede8d498067ea893dc79a5bfd7692c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1e5d47a0bc1559e57273e04652e4751f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b023a4502f2132e9191d0f60b61ad2f8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "09020bfadc3dcba35b099496f9ace8a3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c14a6bd3bb9e2a2470e46923788fdfd5",
"/": "c14a6bd3bb9e2a2470e46923788fdfd5",
"main.dart.js": "820afdd69996e5349899d8cc0097d465",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
