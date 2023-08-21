'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e096f426defbf0ff41cb5fdf7b0f6ef1",
"index.html": "cd2752414d74a50b2803d584469041e6",
"/": "cd2752414d74a50b2803d584469041e6",
"main.dart.js": "bf0fb69697fc09cec58e770b7b932064",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/app_launcher_icon.png": "57696719f3fff43fd714a6c14bffce10",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d1209d8b952405fa867d6b6fd90ddb4d",
"Hearing_Traning.png": "624d75c2ff168ec84fb2eee625357873",
"assets/AssetManifest.json": "05af21c19602079dbcf3befdb178e7bc",
"assets/NOTICES": "fb04cdbfde63da5d871a6c9048a204e6",
"assets/FontManifest.json": "6b837421e135ec3e623d600c4f165479",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "60114762957c6a50d2e0cd7d2c5b7b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "41c635d5785f8156ac8d8c1144f23b99",
"assets/fonts/MaterialIcons-Regular.otf": "0c0388472dcbf844677a4b472d3d89f3",
"assets/assets/audios/consonant.mp3": "6c47b82c3ed20c69237984501cb321bd",
"assets/assets/audios/A.mp3": "3151a145ba6ede81240c179fc0dbb1fc",
"assets/assets/audios/u_short.m4a": "009e8b3d2c1bdc39804025239fad0813",
"assets/assets/audios/sh_long.m4a": "8ba4f61393ff0df5b866d86e339ae24e",
"assets/assets/audios/um_short.m4a": "8c27d57b292a78b80082212d745afae0",
"assets/assets/audios/u_long.m4a": "7828373dd0cdf289c92d07fac3128da6",
"assets/assets/audios/s_short.m4a": "11dfc41860cd5bf90c9a89a0b6b85722",
"assets/assets/audios/sh_short.m4a": "e6eab1c7fab45b93a334cf7f264ecbe0",
"assets/assets/audios/ling6.mp3": "7d1ff45cb8e9f62ba7cf80052312c42f",
"assets/assets/audios/a_long.m4a": "b05aaea98308736b9170a566ad442231",
"assets/assets/audios/s.mp3": "61d1fd9d3ce1c98ea1b9197f04191657",
"assets/assets/audios/E.mp3": "c5074e4c1e4731dde730510ac6b720af",
"assets/assets/audios/a_short.m4a": "7306dd120b12a19bada5b9de6d75da94",
"assets/assets/audios/sh.mp3": "80d09972d75cbc6298f34e6c3c4a1d6c",
"assets/assets/audios/s_long.m4a": "bcf0d6a5795a15793ffb1e537d5ec741",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/audios/i_long.m4a": "5d7e6bc271e05ea68ef909e6cdaef122",
"assets/assets/audios/i_short.m4a": "3a9508c72ee42787d6958c969e82bdcb",
"assets/assets/audios/woo.mp3": "ba8830c390e00a354a23eb5e514ef258",
"assets/assets/audios/um_long.m4a": "b782dd9ebbcf1f24b6f82129610153ea",
"assets/assets/audios/m.mp3": "486bbeceae1c6abd7694f6c5a36537e1",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/logo-02Wh.png": "f6eb33647d32aceda57bd3a0d8244ee3",
"assets/assets/images/Main2-Allactive3.png": "680f1efc67b1f593e4a54be34c9aca40",
"assets/assets/images/Flag.png": "564edac98cbbce555f4b561d59e6a95f",
"assets/assets/images/logo-02.png": "27f5d0bf4a561fbb95bd908ffaaea78d",
"assets/assets/images/road.png": "c3b860466ef3271783f87d809b7d8bfe",
"assets/assets/images/label.png": "294fe42b2ab835173845ccb7aca48347",
"assets/assets/images/_2023-04-11__11.05.10.png": "98952b9339117b87431d131e824ca64b",
"assets/assets/images/_2023-04-11__11.04.50.png": "0cee6e5a093158c2cdab1860b59d74b8",
"assets/assets/images/onsonant.png": "0df45b9a6e0913f1369ac683aee3f4b0",
"assets/assets/images/__1.png": "4b8213566261ac967352b9ef208307ef",
"assets/assets/images/_2023-04-11__11.06.50.png": "b9d285e53fd7b9e4b77e5c6a00260e9b",
"assets/assets/images/app_launcher_icon.png": "57696719f3fff43fd714a6c14bffce10",
"assets/assets/images/label_Lank.png": "b559507a635a12162f4a9c54e73aa66f",
"assets/assets/images/earth.png": "4508280a6892cee92e1690423b80a6c8",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/_2023-04-11__11.05.35.png": "e1a5097f879179a39923422922139add",
"assets/assets/images/Category_listen.png": "3926e98d7ba274343e1d5116f45b08ff",
"assets/assets/images/Hearing_Traning2.png": "77e9fbae388e9cee134b67dd343a6149",
"assets/assets/images/Hearing_Traning.png": "624d75c2ff168ec84fb2eee625357873",
"assets/assets/images/20230410_170849.jpg": "6f7fce0b0662a0c802e78b4042ef088a",
"assets/assets/images/20230410_170915.jpg": "781c45127e6d98b2bbd793b95bd3cbe3",
"assets/assets/images/_2023-04-11__11.01.21.png": "905699555661c78885f94a9421fa4ec2",
"assets/assets/images/_2023-04-11__11.14.14.png": "7a873afcccf30631f2a546f114e30ca8",
"assets/assets/images/_2@4x.png": "7ff9645f0f1732ba02c7b0ac0e0cb51e",
"assets/assets/images/marks.png": "dce2cf475999d8049431a492a7b661c9",
"assets/assets/images/Vowel_Background.png": "7f3b98b4bf97583c2d54115c1112c3c9",
"assets/assets/lottie_animations/103831-circle-x.json": "391acd928da6246773788e19aafb7b15",
"assets/assets/lottie_animations/112854-congratulations.json": "1030f9666b0a44fa5d90aa6c70326426",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/_1.json": "3c3c69142a1873be17485b5599181e2b",
"assets/assets/lottie_animations/animation_lkc4irqt.json": "15f64fc9b40b867028b74d8a5d48bba7",
"assets/assets/lottie_animations/66376-correct-teal-colour.json": "f0641fe7023944d0e87da33d807b040b",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/icons/speaker.gif": "3dc60267c6b094f3b46137d6611cb04c",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/GmarketSansLight.otf": "84cd2c3f2cd25d958fde6d8d7aed89bc",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/MyFlutterApp.ttf": "cab2ee88d79f9137c62d99512d1576c0",
"assets/assets/fonts/MyFlutterApp5.ttf": "1d68deba854d844caa1b0d18b98505c3",
"assets/assets/fonts/GmarketSansBold.otf": "d49f46d24559ebb5f147e61e2082498d",
"assets/assets/fonts/GmarketSansMedium.otf": "dcdb13e415566997f4a392e29ddfdd90",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
