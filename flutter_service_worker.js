'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d21b2caec60e4e9a640176d4efa08e54",
"version.json": "9f7478e3af2eeb923711f414b9392105",
"index.html": "306064ea7532498ba1278cefae8912b6",
"/": "306064ea7532498ba1278cefae8912b6",
"main.dart.js": "319373a596c6e20d45321845e2a75e30",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "d15337606be6caf444d1dd88ec247bec",
"icons/Icon-192.png": "db5f41194283ddb604d9803ebd9d45b1",
"icons/Icon-maskable-192.png": "db5f41194283ddb604d9803ebd9d45b1",
"icons/Icon-maskable-512.png": "bda51c932cf91e8e4809a89ff576243d",
"icons/Icon-512.png": "bda51c932cf91e8e4809a89ff576243d",
"coi-serviceworker.js": "4d788bc256c08b6c151c71e7e3ed59d5",
"manifest.json": "afc1a7d92e81db41a9330fb13942ec20",
"assets/NOTICES": "f0b534b3d261671fe228409b0e0cff5c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "af5d35952f31e97ac3b940689064ffcc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "fe9e5451b89960d326c8044922f998c8",
"assets/fonts/MaterialIcons-Regular.otf": "1baacbd1141e38450d32fff2229a4ba5",
"assets/assets/background/8.png": "45721f0308baff929e9b664a5d52841f",
"assets/assets/background/9.png": "ffdcf3d24b2a7448964edabebe356ef5",
"assets/assets/background/4.png": "0e7e0e582335e2c44ea69e1a6959b157",
"assets/assets/background/5.png": "0a415abaa22eecbd36add7782cf1b78e",
"assets/assets/background/7.png": "568168dcf88779ecd0b60a944a9b436f",
"assets/assets/background/6.png": "b570ca07cd5ca02712be0f482e7e04f2",
"assets/assets/background/2.png": "969de91274a4732f0d6dd0f68167a40c",
"assets/assets/background/3.png": "8aa6f661ed6ea831bcf2f91ececa98d9",
"assets/assets/background/1.png": "51ef62830d9a09e35ffbe0e54fcda19d",
"assets/assets/background/0.png": "10f5f4ad5154b31e11a5e4c8831ee36c",
"assets/assets/etc/google.svg": "edd0e34f60d7ca4a2f4ece79cff21ae3",
"assets/assets/monster/boss/demon_king.png": "7a8bcb13eed8d2ad8cbb9be84f914a59",
"assets/assets/monster/boss/colossus.png": "e91cc8b7fb621e5055e6487f63176867",
"assets/assets/monster/boss/necromancer.png": "6af50b8a4b280896449d4ddf106517f5",
"assets/assets/monster/boss/dragon.png": "fa094c64f5cef55b5de8ab2d45c2fb90",
"assets/assets/monster/boss/behemoth.png": "cbe2fbb1353ce4486f0835bf547faa57",
"assets/assets/monster/normal/spider.png": "4cd4f70152a2eed572d5d7d8910f0ef8",
"assets/assets/monster/normal/harpy.png": "42cd7a825271eed1fb77cb715c75380a",
"assets/assets/monster/normal/shoom.png": "626bb126c06694715163ecdb8992a5f0",
"assets/assets/monster/normal/treant.png": "7c64f881e8ab2451501f6a92ad797c44",
"assets/assets/monster/normal/orc.png": "79ab66ef59fbe6e08ee1f6758b45da1b",
"assets/assets/monster/normal/corpse.png": "52475e7b7529a317aeb0477d20e1f14c",
"assets/assets/monster/normal/rat.png": "0253bdfc642bfdd04c6ac2147d371f43",
"assets/assets/monster/normal/mummy.png": "2e6ba59810ec4c6b8d51ce0f13001bf5",
"assets/assets/monster/normal/slime.png": "a96c21f7f974806b7bbc82d2e76b9090",
"assets/assets/monster/normal/griffin.png": "328099cb7fdf71cc679dade0c7e234f8",
"assets/assets/monster/normal/imp.png": "df53a8c4f3884a8cc39f0dbd46cc2bab",
"assets/assets/monster/normal/ghost.png": "fd657fc9097788efb4902d6900cb3fc9",
"assets/assets/monster/normal/wolf.png": "bf959bd4b7562f31cafbfc3d41317646",
"assets/assets/monster/normal/cave_worm.png": "574f25a5ee73f2970b223d87893be9b0",
"assets/assets/monster/normal/cyclops.png": "81bed3a88d84af195fa2653e70c03b37",
"assets/assets/monster/normal/devil.png": "3e21df49b472f3a4af4d310632e69ab2",
"assets/assets/monster/normal/zombie.png": "a3d9e3f5667d99f7ed6329d116a3ed18",
"assets/assets/monster/normal/goblin.png": "e54eff0d5fbc11c35ee95ff5b2dfff98",
"assets/assets/monster/normal/poop.png": "7b0918c1bf0acf1f6c98a727cdfa39eb",
"assets/assets/monster/normal/basilisk.png": "59e273bb57a3216eb016937b5312bde4",
"assets/assets/monster/normal/ghoul.png": "c1575e591933c1c6230811d9d5efb69f",
"assets/assets/monster/normal/elemental.png": "9685c34941611ddd057bf4608849e159",
"assets/assets/monster/normal/bandit.png": "c3fa442d1b5af1767199761a91365dfd",
"assets/assets/monster/normal/skeleton.png": "801b3c877376a5655c27e1113d172973",
"assets/assets/monster/elite/minotaur.png": "e020453d3789675f5eead424cc4f16e6",
"assets/assets/monster/elite/dark_wanderer.png": "3bb164af9f7caa985ecd1dbf070d4ce4",
"assets/assets/monster/elite/skeleton_knight.png": "6bf621173658e0778c82a0cbb7168a11",
"assets/assets/monster/elite/hydra.png": "0153b71d3560a67e12595a7ea64eca43",
"assets/assets/monster/elite/dark_hood.png": "3d612cbb7e8bede4ca14b8e63e66cb06",
"assets/assets/monster/elite/ripper.png": "b156682a44555b47bcbf294a804368f9",
"assets/assets/monster/elite/banshee.png": "f573979b6af807f1f857bcebc1546bff",
"assets/assets/companion/0/acolyte.png": "82663a4cf04adf0db284fca9cb448a50",
"assets/assets/companion/0/soldier.png": "17d7252ddcac2ccce0d154581262196b",
"assets/assets/companion/0/miner.png": "0513a7333b81c18cae15fc7b9f1c1c8a",
"assets/assets/companion/0/thief.png": "bee8dbf82375fdb3e15bc928bd7407c2",
"assets/assets/companion/0/blacksmith.png": "de47c0a1f9332df76c92f7583feb055b",
"assets/assets/companion/0/hunter.png": "10ca5db2309d15906a725bc1d3748ea3",
"assets/assets/companion/0/cultist.png": "f78b9717ce723d0e1506cb36a38b7da6",
"assets/assets/companion/0/scholar.png": "fb47f087ca01b1563bd325b21fe96384",
"assets/assets/companion/0/farmer.png": "70d3afffe245e56dea29f2b204557a58",
"assets/assets/companion/0/citizen.png": "27f577ca1713127d449e815e3873ede9",
"assets/assets/companion/1/berserker.png": "98efc9940e536c956f843756411ba6b7",
"assets/assets/companion/1/magician.png": "30ae023951f85a487b63fa0c43525b40",
"assets/assets/companion/1/warrior.png": "792001f7b96c9c4142012080724e604b",
"assets/assets/companion/1/cleric.png": "d518dd2489beeb863b55e144b5c110e2",
"assets/assets/companion/1/outcast.png": "72484e31a3bf3b8489ecce586371db9e",
"assets/assets/companion/1/merchant.png": "8239727cf378755e6536f06b4b17417d",
"assets/assets/companion/1/bard.png": "5b81987ca991def397a11446a2523346",
"assets/assets/companion/1/archer.png": "10f0c7cdb27d5c5a1a081cd20a28c72b",
"assets/assets/companion/1/warlock.png": "534270d4fa60d70f00a87c7b08e4f893",
"assets/assets/companion/1/herbalist.png": "6eee38742fdd6a56a76082ba0674d4a5",
"assets/assets/companion/3/archmage.png": "8df3af40b28321b43c372d5340b613a9",
"assets/assets/companion/3/holy_knight.png": "2fa8aa3250a5f424f1587cf0b02ae82a",
"assets/assets/companion/3/dark_knight.png": "38783a49ccb4a258775e4d63c940f5a2",
"assets/assets/companion/2/assassin.png": "2627d3e953fd176f9d8533ec1461f977",
"assets/assets/companion/2/master_merchant.png": "0e27ef4b207a1f95b3137937e5a8d1d3",
"assets/assets/companion/2/knight.png": "c2ee07dbb53acb5cb0ea64ea1b2331fd",
"assets/assets/companion/2/alchemist.png": "a169be33ad17f991c9db48f1dcf1f9f6",
"assets/assets/companion/2/white_mage.png": "b8fea589eb3aa647d68dc26562d35402",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
