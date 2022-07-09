self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open("static").then(caches=>{
            return caches.addAll(['./', './style/style.css', './img/logo.png']);
        })
    )
});

self.addEventListener('fetch', e=>{
    console.log(`getting fetch request`)
})