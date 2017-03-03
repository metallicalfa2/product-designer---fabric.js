$(function() {
    $(".cropDone").on("click", function() {
        function n() {
            u = parseInt($("#hue").val()),
            p = parseInt($("#contrast").val()),
            f = parseInt($("#vibrance").val()),
            g = parseInt($("#sepia").val()),
            v = parseInt($("#brightness").val()),
            m = parseInt($("#exposure").val()),
            b = parseInt($("#saturation").val()),
            d = parseInt($("#noise").val()),
            Caman(C, function() {
                this.revert(!1)
            }),
            I(l),
            Caman(C, function() {
                this.hue(u).contrast(p).vibrance(f).sepia(g).brightness(v).noise(d).saturation(b).exposure(m),
                this.render()
            })
        }
        var t = $("#image");
        console.log(t),
        imgCropData = t.cropper("getData");
        var a = document.getElementById("image2")
          , e = a.getContext("2d")
          , i = new Image;
        i.crossOrigin = "",
        i.src = imgPath;
        var s = imgCropData
          , o = HorV;
        console.log(s),
        i.onload = function() {
            var n = s.height
              , t = s.width
              , r = s.x
              , c = s.y;
            "v" === o ? (a.width = 281,
            a.height = 500,
            e.drawImage(i, r, c, t, n, 0, 0, 281, 500)) : (a.width = 500,
            a.height = 281,
            e.drawImage(i, r, c, t, n, 0, 0, 500, 281))
        }
        ,
        Caman.Filter.register("oldpaper", function() {
            this.pinhole(),
            this.noise(10),
            this.orangePeel(),
            this.render()
        }),
        Caman.Filter.register("pleasant", function() {
            this.colorize(60, 105, 218, 10),
            this.contrast(10),
            this.sunrise(),
            this.hazyDays(),
            this.render()
        }),
        Caman.Filter.register("hdr", function() {
            this.contrast(10),
            this.jarques(),
            this.render()
        }),
        $(window).bind("load", function() {
            $("#resetbtn").click()
        });
        var r = $("#resetbtn"), c = $("#resetFiltersbtn"), h = $("#savebtn"), l = "none", u, p, f, g, v, m, b, d, C = "#image2";
        r.on("click", function(n) {
            l = "none",
            u = 0,
            p = 0,
            f = 0,
            g = 0,
            v = 0,
            m = 0,
            b = 0,
            d = 0,
            $(".singleButton").prop("disabled", !1),
            $(".singleButton").removeClass("active"),
            $("input[type=range]").val(0),
            Caman(C, function() {
                this.revert(!1),
                this.render()
            })
        }),
        c.on("click", function(n) {
            l = "none",
            u = parseInt($("#hue").val()),
            p = parseInt($("#contrast").val()),
            f = parseInt($("#vibrance").val()),
            g = parseInt($("#sepia").val()),
            v = parseInt($("#brightness").val()),
            m = parseInt($("#exposure").val()),
            b = parseInt($("#saturation").val()),
            d = parseInt($("#noise").val()),
            $(".singleButton").prop("disabled", !1),
            $(".singleButton").removeClass("active"),
            Caman(C, function() {
                this.revert(!1),
                this.hue(u).contrast(p).vibrance(f).sepia(g).brightness(v).noise(d).saturation(b).exposure(m).render()
            })
        }),
        h.on("click", function(n) {
            Caman(C, function() {
                this.render(function() {
                    this.save("png")
                })
            })
        }),
        $("input[type=range]").change(n),
        $(".filterbtn").click(function() {
            console.log("fddfdfd"),
            l = this.id,
            u = parseInt($("#hue").val()),
            p = parseInt($("#contrast").val()),
            f = parseInt($("#vibrance").val()),
            g = parseInt($("#sepia").val()),
            v = parseInt($("#brightness").val()),
            m = parseInt($("#exposure").val()),
            b = parseInt($("#saturation").val()),
            d = parseInt($("#noise").val()),
            Caman(C, function() {
                this.revert(!1)
            }),
            Caman(C, function() {
                this.hue(u).contrast(p).vibrance(f).sepia(g).brightness(v).noise(d).saturation(b).exposure(m),
                this.render()
            })
        }),
        $("#cropbtn").click(function() {
            Caman(C, function() {
                this.revert(!1)
            }),
            Caman(C, function() {
                this.crop($("#width").val(), $("#height").val())
            })
        });
        var I = function(n) {
            "vintagebtn" === n ? Caman("#image2", function() {
                this.vintage()
            }) : "lomobtn" === n ? Caman(C, function() {
                this.lomo()
            }) : "embossbtn" === n ? Caman(C, function() {
                this.emboss()
            }) : "tiltshiftbtn" === n ? Caman(C, function() {
                this.tiltShift({
                    angle: 90,
                    focusWidth: 600
                })
            }) : "radialblurbtn" === n ? Caman(C, function() {
                this.radialBlur()
            }) : "edgeenhancebtn" === n ? Caman(C, function() {
                this.edgeEnhance()
            }) : "posterizebtn" === n ? Caman(C, function() {
                this.posterize(8, 8)
            }) : "claritybtn" === n ? Caman(C, function() {
                this.clarity()
            }) : "orangepeelbtn" === n ? Caman(C, function() {
                this.orangePeel()
            }) : "sincitybtn" === n ? Caman(C, function() {
                this.sinCity()
            }) : "sunrisebtn" === n ? Caman(C, function() {
                this.sunrise()
            }) : "crossprocessbtn" === n ? Caman(C, function() {
                this.crossProcess()
            }) : "hazydaysbtn" === n ? Caman(C, function() {
                this.hazyDays()
            }) : "lovebtn" === n ? Caman(C, function() {
                this.love()
            }) : "grungybtn" === n ? Caman(C, function() {
                this.grungy()
            }) : "jarquesbtn" === n ? Caman(C, function() {
                this.jarques()
            }) : "pinholebtn" === n ? Caman(C, function() {
                this.pinhole()
            }) : "oldbootbtn" === n ? Caman(C, function() {
                this.oldBoot()
            }) : "glowingsunbtn" === n ? Caman(C, function() {
                this.glowingSun()
            }) : "hdrbtn" === n ? Caman(C, function() {
                this.hdr()
            }) : "oldpaperbtn" === n ? Caman(C, function() {
                this.oldpaper()
            }) : "pleasantbtn" === n ? Caman(C, function() {
                this.pleasant()
            }) : "colorbtn" === n ? Caman(C, function() {
                this.colorize(60, 105, 218, 10)()
            }) : "none" === n || console.log("Undefined button")
        }
    })
});
