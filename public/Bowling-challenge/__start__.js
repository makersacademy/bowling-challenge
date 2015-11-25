(function () {
    var CONFIG_FILENAME = 'config.json';
    var CANVAS_ID = 'application-canvas';

    var canvas, devices, app;

    var createCanvas = function () {
        canvas = document.createElement('canvas');
        canvas.setAttribute('id', CANVAS_ID);
        canvas.setAttribute('tabindex', 0);
        // canvas.style.visibility = 'hidden';

        // Disable I-bar cursor on click+drag
        canvas.onselectstart = function () { return false; };

        document.body.appendChild(canvas);

        return canvas;
    };

    var createInputDevices = function (canvas) {
        var devices = {
            keyboard: new pc.Keyboard(window),
            mouse: new pc.Mouse(canvas),
            gamepads: new pc.GamePads(),
        };
        if ('ontouchstart' in window) {
            devices.touch = new pc.TouchDevice(canvas);
        }

        return devices;
    };

    var configureCss = function (fillMode, width, height) {
        // Configure resolution and resize event
        if (canvas.classList) {
            canvas.classList.add('fill-mode-' + fillMode);
        }

        // css media query for aspect ratio changes
        var css  = "@media screen and (min-aspect-ratio: " + width + "/" + height + ") {";
            css += "    #application-canvas.fill-mode-KEEP_ASPECT {";
            css += "        width: auto;";
            css += "        height: 100%;";
            css += "        margin: 0 auto;";
            css += "    }";
            css += "}";

        // append css to style
        if (document.head.querySelector) {
            document.head.querySelector('style').innerHTML += css;
        }
    };

    var reflow = function () {
        var size = app.resizeCanvas(canvas.width, canvas.height);
        canvas.style.width = '';
        canvas.style.height = '';

        var fillMode = app._fillMode;

        if (fillMode == pc.FILLMODE_NONE || fillMode == pc.FILLMODE_KEEP_ASPECT) {
            if ((fillMode == pc.FILLMODE_NONE && canvas.clientHeight < window.innerHeight) || (canvas.clientWidth / canvas.clientHeight >= window.innerWidth / window.innerHeight)) {
                canvas.style.marginTop = Math.floor((window.innerHeight - canvas.clientHeight) / 2) + 'px';
            } else {
                canvas.style.marginTop = '';
            }
        }
    };

    var displayError = function (html) {
        var div = document.createElement('div');

        div.innerHTML  = [
            '<table style="background-color: #8CE; width: 100%; height: 100%;">',
            '  <tr>',
            '      <td align="center">',
            '          <div style="display: table-cell; vertical-align: middle;">',
            '              <div style="">' + html + '</div>',
            '          </div>',
            '      </td>',
            '  </tr>',
            '</table>'
        ].join('\n');

        document.body.appendChild(div);
    };

    canvas = createCanvas();
    devices = createInputDevices(canvas);

    try {
        app = new pc.Application(canvas, {
            keyboard: devices.keyboard,
            mouse: devices.mouse,
            gamepads: devices.gamepads,
            touch: devices.touch
        });
    } catch (e) {
        if (e instanceof pc.UnsupportedBrowserError) {
            displayError('This page requires a browser that supports WebGL.<br/>' +
                    '<a href="http://get.webgl.org">Click here to find out more.</a>');
        } else if (e instanceof pc.ContextCreationError) {
            displayError("It doesn't appear your computer can support WebGL.<br/>" +
                    '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>');
        } else {
            displayError('Could not initialize application. Error: ' + e);
        }

        return;
    }

    app.configure(CONFIG_FILENAME, function (err) {
        if (err) {
            console.error(err);
        }

        configureCss(app._fillMode, app._width, app._height);
        reflow();

        app.preload(function (err) {
            if (err) {
                console.error(err);
            }

            app.loadScene(SCENE_PATH, function (err, scene) {
                if (err) {
                    console.error(err);
                }

                app.start();
            });
        });
    });

    window.addEventListener('resize', reflow, false);
    window.addEventListener('orientationchange', reflow, false);
}());
