addCss('/assets/style.css');
intrand = Math.floor(Math.random() * 5);
chooseCursor(intrand)
function addCss(fileName) {
    // adds css to head
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
    head.appendChild(link);
}
function chooseCursor(intrand) {
    // yandere dev style choosing of cursor :trol:
    if (intrand == 0){addCss('/assets/cursor/FlameSword.css')}
    else if (intrand == 1){addCss('/assets/cursor/FlamingArrowGlitterPurple.css')}
    else if (intrand == 2){addCss('/assets/cursor/LightningElectricity.css')}
    else if (intrand == 3){addCss('/assets/cursor/LightsOfHeaven.css')}
    else if (intrand == 4){addCss('/assets/cursor/TurqouiseElectricityLightning.css')}
}
load_script = function (src) {
    // Initialize scripts queue
    if (load_script.scripts === undefined) {
        load_script.scripts = [];
        load_script.index = -1;
        load_script.loading = false;
        load_script.next = function () {
            if (load_script.loading) return;
            // Load the next queue item
            load_script.loading = true;
            var item = load_script.scripts[++load_script.index];
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = item.src;
            // When complete, start next item in queue and resolve this item's promise
            script.onload = () => {
                load_script.loading = false;
                if (load_script.index < load_script.scripts.length - 1) load_script.next();
                item.resolve();
            };
            head.appendChild(script);
        };
    };
    // Adding a script to the queue
    if (src) {
        // Check if already added
        for (var i = 0; i < load_script.scripts.length; i++) {
            if (load_script.scripts[i].src == src) return load_script.scripts[i].promise;
        }
        // Add to the queue
        var item = {
            src: src
        };
        item.promise = new Promise(resolve => {
            item.resolve = resolve;
        });
        load_script.scripts.push(item);
        load_script.next();
    }

    // Return the promise of the last queue item
    return load_script.scripts[load_script.scripts.length - 1].promise;
};

['https://unpkg.com/typewriter-effect@latest/dist/core.js',
    'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
    'https://unpkg.com/swup@latest/dist/swup.min.js',
    'https://cdn.jsdelivr.net/gh/swup/overlay-theme@latest/dist/SwupOverlayTheme.min.js',
    'https://cdn.jsdelivr.net/gh/swup/body-class-plugin@latest/dist/SwupBodyClassPlugin.min.js',
    'https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js',
    '/assets/script.js'
].forEach(load_script);