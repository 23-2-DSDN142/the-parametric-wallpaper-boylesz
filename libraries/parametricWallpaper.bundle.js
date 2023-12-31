! function (e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = n, t.d = function (e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(i, o, function (n) {
                return e[n]
            }.bind(null, o));
        return i
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 0)
}([function (e, n, t) {
    e.exports = t(1)
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var i = function e() {
        ! function (e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.cell_width = 100, this.cell_height = 100, this.row_offset = 0
    };

    function o(e, n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var r = function () {
        function e() {
            ! function (e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.grid_settings = new i
        }
        var n, t, r;
        return n = e, (t = [{
            key: "resolution",
            value: function (e) {
                if (void 0 === e) return this._resolution;
                this._resolution = e(), console.log(this._resolution), setup_new_canvas(this._resolution.x, this._resolution.y)
            }
        }, {
            key: "show_guide",
            value: function (e) {
                if (void 0 === e) return this._show_guide;
                this._show_guide = e
            }
        }, {
            key: "output_mode",
            value: function (e) {
                this._output_function = e
            }
        }, {
            key: "draw",
            value: function () {
                this._output_function()
            }
        }]) && o(n.prototype, t), r && o(n, r), e
    }();
    var a = new function () {
            this.parametricWallpaper = void 0, this.p5 = void 0, this.gfx = void 0, this.canvas = void 0
        },
        s = function (e, n, t, i) {
            var o = a.gfx;
            o.save(), o.strokeStyle = "#777777", o.beginPath(), o.setLineDash([5, 8]), o.moveTo(e, n), o.lineTo(e + t, n), o.lineTo(e + t, n + i), o.lineTo(e, n + i), o.lineTo(e, n), o.stroke(), o.restore()
        },
        u = function (e) {
            var n;
            window.DEVELOP_GLYPH = (n = e, function () {
                var e = n.grid_settings.cell_width,
                    t = n.grid_settings.cell_height;
                push(), scale(n.resolution().scale), translate(width / 2, height / 2), scale(3), translate(-e / 2, -t / 2), push(), s(0, 0, e, t), my_symbol(0, 0), pop(), pop()
            }), window.GRID_WALLPAPER = function (e) {
                return function () {
                    var n = e.grid_settings.cell_width,
                        t = e.grid_settings.cell_height,
                        i = e.grid_settings.row_offset;
                    push(), scale(e.resolution().scale);
                    for (var o = -n; o < width + n; o += n)
                        for (var r = 0, a = -t; a < height + t; a += t) {
                            var u = r % 2 == 0 ? 0 : i;
                            push(), translate(o + u, a), my_symbol(0, 0), e.show_guide() && s(0, 0, n, t), pop(), r++
                        }
                    pop()
                }
            }(e), window.GLIDE_WALLPAPER = function (e) {
                return function () {
                    var n = e.grid_settings.cell_width,
                        t = e.grid_settings.cell_height,
                        i = e.grid_settings.row_offset;

                    function o() {
                        my_symbol(0, 0), e.show_guide() && s(0, 0, n, t)
                    }
                    push(), scale(e.resolution().scale);
                    for (var r = 2 * -n; r < width + 2 * n; r += 2 * n)
                        for (var a = -t; a < height + t; a += t) push(), translate(r, a), o(), translate(2 * n, i), scale(-1, 1), o(), pop();
                    pop()
                }
            }(e), window.FIT_TO_SCREEN = function () {
                return window.addEventListener("resize", function () {
                    e.resolution(function () {
                        return {
                            x: window.innerWidth,
                            y: window.innerHeight,
                            scale: 1
                        }
                    })
                }), {
                    x: window.innerWidth,
                    y: window.innerHeight,
                    scale: 1
                }
            }, window.NINE_LANDSCAPE = function () {
                return {
                    x: 2e3,
                    y: 1e3,
                    scale: 1
                }
            }, window.NINE_PORTRAIT = function () {
                return {
                    x: 1e3,
                    y: 2e3,
                    scale: 1
                }
            }, window.A4 = function () {
                return {
                    x: 2480,
                    y: 3508,
                    scale: 300 / 72
                }
            }, window.A3 = function () {
                return {
                    x: 3508,
                    y: 4960,
                    scale: 300 / 72
                }
            }
        },
        l = new p5;
    window.setup = function () {
        angleMode(DEGREES), imageMode(CENTER), pixelDensity(1), a.parametricWallpaper = new r({
            x: 1e3,
            y: 2e3
        }), u(a.parametricWallpaper), setup_wallpaper(a.parametricWallpaper)
    }, window.draw = function () {
        background(255), wallpaper_background(), a.parametricWallpaper.draw(), noLoop()
    }, window.setup_new_canvas = function (e, n) {
        console.log(e, n), a.p5 = l, a.gfx = createCanvas(e, n).drawingContext, a.canvas = a.gfx.canvas, loop()
    }
}]);