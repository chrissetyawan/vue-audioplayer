(function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VFileUpload = t() : e.VFileUpload = t()
})(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = ".", t(t.s = 7)
    }([function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    r(this, e), this.url = t, this.headers = n, this.onProgress = o
                }
                return o(e, [{
                    key: "upload",
                    value: function(e) {
                        var t = new XMLHttpRequest;
                        t.responseType = "json", t.open("POST", this.url, !0), this._setXhrHeaders(t), t.upload.addEventListener("progress", this.onProgress, !1);
                        var n = new Promise(function(e, n) {
                                t.onload = function(r) {
                                    return t.status >= 200 && t.status < 400 ? e(r) : n(r)
                                }, t.onerror = function(e) {
                                    return n(e)
                                }
                            }),
                            r = new FormData;
                        return r.append("file", e), t.send(r), n
                    }
                }, {
                    key: "_setXhrHeaders",
                    value: function(e) {
                        var t = this;
                        Object.keys(this.headers).forEach(function(n) {
                            return e.setRequestHeader(n, t.headers[n])
                        })
                    }
                }]), e
            }();
        t.default = i
    }, function(e, t, n) {
        var r = n(4),
            o = n(0);
        r.install = function(e) {
            return e.component("file-upload", r)
        }, r.version = "3.0.3", e.exports = {
            FileUpload: r,
            FileUploadService: o
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0);
        t.default = {
            props: {
                url: {
                    type: String,
                    required: !0
                },
                thumbUrl: {
                    type: Function,
                    default: function() {}
                },
                accept: {
                    type: String,
                    default: ".png,.jpg"
                },
                headers: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                btnLabel: {
                    type: String,
                    default: "Select a file"
                },
                btnUploadingLabel: {
                    type: String,
                    default: "Uploading file"
                },
                maxSize: {
                    type: Number,
                    default: 15360
                }
            },
            data: function() {
                return {
                    progress: 0,
                    anexo: {}
                }
            },
            computed: {
                uploading: function() {
                    return this.progress > 0
                },
                progressStyle: function() {
                    return {
                        width: this.progress + "%",
                        display: this.uploading ? "block" : "none"
                    }
                },
                inputWrapperStyle: function() {
                    return {
                        opacity: this.uploading ? "0.7" : "1"
                    }
                }
            },
            methods: {
                onChangeInputFile: function(e) {
                    var t = e.target.files || e.dataTransfer.files;
                    if (t.length) {
                        var n = t[0];
                        if (n.size > this.maxSize) return void this.$emit("error", {
                            code: "max_size_exceded",
                            message: "File max size exceded, upload a file smaller than " + this.maxSize
                        });
                        this.upload(n)
                    }
                },
                upload: function(e) {
                    var t = this;
                    this.progress = .1, new r.default(this.url, this.headers, this.onProgress).upload(e).then(function(e) {
                        t.anexo = e.target.response, t.onChangeAnexo(), t.$emit("success", e), t.progress = 0, t.cleanInput()
                    }).catch(function(e) {
                        t.$emit("error", e), t.progress = 0, t.cleanInput()
                    })
                },
                cleanInput: function() {
                    var e = window.document.getElementById("file-upload-input");
                    e && (e.value = "")
                },
                onProgress: function(e) {
                    this.progress = parseInt(100 * e.loaded / e.total), this.$emit("progress", this.progress)
                },
                onChangeAnexo: function() {
                    this.$emit("change", this.anexo)
                }
            }
        }
    }, function(e, t) {}, function(e, t, n) {
        n(3);
        var r = n(5)(n(2), n(6), null, null);
        e.exports = r.exports
    }, function(e, t) {
        e.exports = function(e, t, n, r) {
            var o, i = e = e || {},
                s = typeof e.default;
            "object" !== s && "function" !== s || (o = e, i = e.default);
            var a = "function" == typeof i ? i.options : i;
            if (t && (a.render = t.render, a.staticRenderFns = t.staticRenderFns), n && (a._scopeId = n), r) {
                var u = a.computed || (a.computed = {});
                Object.keys(r).forEach(function(e) {
                    var t = r[e];
                    u[e] = function() {
                        return t
                    }
                })
            }
            return {
                esModule: o,
                exports: i,
                options: a
            }
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "file-upload"
                }, [e.thumbUrl(e.anexo) ? n("div", {
                    staticClass: "thumb-preview"
                }, [n("div", {
                    staticClass: "thumb-preview-item"
                }, [n("img", {
                    attrs: {
                        src: e.thumbUrl(e.anexo)
                    }
                })])]) : e._e(), n("div", {
                    staticClass: "input-wrapper",
                    style: e.inputWrapperStyle
                }, [n("input", {
                    attrs: {
                        id: "file-upload-input",
                        type: "file",
                        name: "file",
                        accept: e.accept,
                        multiple: !1,
                        disabled: e.uploading
                    },
                    on: {
                        change: e.onChangeInputFile
                    }
                }), n("label", {
                    staticClass: "file-upload-label",
                    attrs: {
                        for: "file-upload-input"
                    }
                }, [n("div", [e._v(e._s(e.uploading ? e.btnUploadingLabel : e.btnLabel))])]), n("div", {
                    staticClass: "file-upload-progress",
                    style: e.progressStyle
                })])])
            },
            staticRenderFns: []
        }
    }, function(e, t, n) {
        e.exports = n(1)
    }])
});