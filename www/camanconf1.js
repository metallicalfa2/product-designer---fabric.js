$(function(){

    // $(function () {  

    var $image = $('#image');
    console.log($image);
    imgCropData = $image.cropper('getData');
    console.log(imgCropData);

    var canvas = document.getElementById('image2');
    var ctx = canvas.getContext('2d');      

    var img = new Image();
    img.src ='../plugins/images/large/img1.jpg';
    var cropData = imgCropData;
    var HoV = "h";//HorV;

    console.log(cropData);
    // console.log(imrgVorH);

    img.onload = function() {

        // canvas width: height is 16:9.
        var height = cropData.height;
        var width = cropData.width;
        var x = cropData.x;
        var y = cropData.y;
        //drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

        if (HoV === "v") {
            canvas.width = 281;
            canvas.height = 500;
            ctx.drawImage(img, x, y, width, height, 0, 0, 281, 500);
        } else {
            canvas.width = 500;
            canvas.height = 281;
            ctx.drawImage(img, 0, 0 , 200,200);
        }
    };

    Caman.Filter.register("oldpaper", function() {
        this.pinhole();
        this.noise(10);
        this.orangePeel();
        // this.render();
    });

    Caman.Filter.register("pleasant", function() {
        this.colorize(60, 105, 218, 10);
        this.contrast(10);
        this.sunrise();
        this.hazyDays();
        // this.render();
    });

    Caman.Filter.register("hdr", function() {
        this.contrast(10);
        this.jarques();
        // this.render();
    });

    $(window).bind("load", function() {
        $('#resetbtn').click();

    });


    $( "#filterdone" ).click(function( event ) {

        // Stop form from submitting normally
        event.preventDefault();

        var url = 'api/user/modify';
        var data = {"filterName": buttonId,
            "filterSettings" : {
                "hue" : hue,
                "cntrst" : cntrst,
                "vibr" : vibr,
                "sep" : sep,
                "brightness" : brightness,
                "exposure" : exposure,
                "saturation" : saturation,
                "noise" : noise
            },
            "cropData" : cropData,
            "captionData" : {
                "caption" : $("#captioninp").val(),
                "date" : $("#date").val(),
                "time" : $("#time").val(),
                "palce" : $("#place").val(),
                "occasion": $("#occasion").val()
            }
        };

        // Send the data using post
        var posting = $.post( url, data, function () {
        }, "json");
    });


    var $reset = $('#resetbtn');
    var $resetFilters = $('#normalbtn');
    var $save = $('#savebtn');
    var buttonId = 'none';
    var hue, cntrst, vibr, sep;
    var brightness, exposure, saturation, noise;
    var imageid = '#image2';


    // $(function () {
    // console.log("fdfddfd");
    // Reset image to original image.
    $reset.on('click', function(e) {

        buttonId = 'none';
        hue = 0;
        cntrst = 0;
        vibr = 0;
        sep = 0;
        brightness = 0;
        exposure = 0;
        saturation = 0;
        noise = 0;

        // $('.singleButton').prop('disabled', false);
        // $('.singleButton').removeClass('active');

        $('input[type=range]').val(0);

        Caman(imageid,function(){
            this.revert(false);
            this.render();
        });
    });

    $resetFilters.on('click', function(e) {

        buttonId = 'none';
        hue = parseInt($('#hue').val());
        cntrst = parseInt($('#contrast').val());
        vibr = parseInt($('#vibrance').val());
        sep = parseInt($('#sepia').val());
        brightness = parseInt($('#brightness').val());
        exposure = parseInt($('#exposure').val());
        saturation = parseInt($('#saturation').val());
        noise = parseInt($('#noise').val());

        // $('.singleButton').prop('disabled', false);
        // $('.singleButton').removeClass('active');

        Caman(imageid, function() {
            this.revert(false);

            console.log(hue);

            this.hue(hue)
                .contrast(cntrst)
                .vibrance(vibr)
                .sepia(sep)
                .brightness(brightness)
                .noise(noise)
                .saturation(saturation)
                .exposure(exposure)
                .render();
        });
    });

    /* As soon as slider value changes call applyFilters */
    // $('.editbtn').change(function () {

    //     hue = parseInt($('#hue').val());
    //     cntrst = parseInt($('#contrast').val());
    //     vibr = parseInt($('#vibrance').val());
    //     sep = parseInt($('#sepia').val());
    //     brightness = parseInt($('#brightness').val());
    //     exposure = parseInt($('#exposure').val());
    //     saturation = parseInt($('#saturation').val());
    //     noise = parseInt($('#noise').val());

    //     Caman(imageid, function() {
    //         this.revert(false);

    //         if (buttonId === "vintagebtn") {
    //             this.vintage();
    //         } else if (buttonId === "lomobtn") {
    //             this.lomo();
    //         } else if (buttonId === "embossbtn") {
    //             this.emboss();
    //         } else if (buttonId === "tiltshiftbtn") {
    //             this.tiltShift({
    //                 angle: 90,
    //                 focusWidth: 600
    //             });
    //         } else if (buttonId === "radialblurbtn") {
    //             this.radialBlur();
    //         } else if (buttonId === "edgeenhancebtn") {
    //             this.edgeEnhance();
    //         } else if (buttonId === "posterizebtn") {
    //             this.posterize(8, 8);
    //         } else if (buttonId === "claritybtn") {
    //             this.clarity();
    //         } else if (buttonId === "orangepeelbtn") {
    //             this.orangePeel();
    //         } else if (buttonId === "sincitybtn") {
    //             this.sinCity();
    //         } else if (buttonId === "sunrisebtn") {
    //             this.sunrise();
    //         } else if (buttonId === "crossprocessbtn") {
    //             this.crossProcess();
    //         } else if (buttonId === "hazydaysbtn") {
    //             this.hazyDays();
    //         } else if (buttonId === "lovebtn") {
    //             this.love();
    //         } else if (buttonId === "grungybtn") {
    //             this.grungy();
    //         } else if (buttonId === "jarquesbtn") {
    //             this.jarques();
    //         } else if (buttonId === "pinholebtn") {
    //             this.pinhole();
    //         } else if (buttonId === "oldbootbtn") {
    //             this.oldBoot();
    //         } else if (buttonId === "glowingsunbtn") {
    //             this.glowingSun();
    //         } else if (buttonId === "hdrbtn") {
    //             this.hdr();
    //         } else if (buttonId === "oldpaperbtn") {
    //             this.oldpaper();
    //         } else if (buttonId === "pleasantbtn") {
    //             this.pleasant();
    //         } else if (buttonId === "colorbtn") {
    //             this.colorize(60, 105, 218, 10);
    //         }
    //         this.hue(hue)
    //             .contrast(cntrst)
    //             .vibrance(vibr)
    //             .sepia(sep)
    //             .brightness(brightness)
    //             .noise(noise)
    //             .saturation(saturation)
    //             .exposure(exposure);
    //         this.render();
    //     });

    // });

    // function applyFilters() {
    //     hue = parseInt($('#hue').val());
    //     cntrst = parseInt($('#contrast').val());
    //     vibr = parseInt($('#vibrance').val());
    //     sep = parseInt($('#sepia').val());
    //     brightness = parseInt($('#brightness').val());
    //     exposure = parseInt($('#exposure').val());
    //     saturation = parseInt($('#saturation').val());
    //     noise = parseInt($('#noise').val());
    //
    //     Caman(imageid, function() {
    //         this.revert(false);
    //     });
    //
    //     applyFilterUsingButtonId(buttonId);
    //
    //     Caman(imageid, function() {
    //
    //         this.hue(hue)
    //             .contrast(cntrst)
    //             .vibrance(vibr)
    //             .sepia(sep)
    //             .brightness(brightness)
    //             .noise(noise)
    //             .saturation(saturation)
    //             .exposure(exposure);
    //         this.render();
    //     });
    // }

    // jQuery(function($) {
    //     $('.singleButton').click(function() {
    //         $(this).prop('disabled', true);
    //         $('.singleButton').not(this).removeClass('active').html(function() {
    //             $(this).prop('disabled', false);
    //             return $(this).html();
    //         });
    //         $(this).addClass('active').html(jQuery(this).html());
    //     });
    // });

    $(".filterbtn").click(function() {
       // console.log("hhh");
        buttonId = this.id;
        console.log(buttonId);
        // hue = parseInt($('#hue').val());
        // cntrst = parseInt($('#contrast').val());
        // vibr = parseInt($('#vibrance').val());
        // sep = parseInt($('#sepia').val());
        // brightness = parseInt($('#brightness').val());
        // exposure = parseInt($('#exposure').val());
        // saturation = parseInt($('#saturation').val());
        // noise = parseInt($('#noise').val());
        Caman(imageid, function() {
            this.revert(false);
            if (buttonId === "vintagebtn") {
                    console.log("vintage done");
                    this.vintage();
            } else if (buttonId === "lomobtn") {
                    this.lomo();
            } else if (buttonId === "embossbtn") {
                    this.emboss();
            } else if (buttonId === "tiltshiftbtn") {
                    this.tiltShift({
                        angle: 90,
                        focusWidth: 600
                    });
            } else if (buttonId === "radialblurbtn") {
                    this.radialBlur();
            } else if (buttonId === "edgeenhancebtn") {
                    this.edgeEnhance();
            } else if (buttonId === "posterizebtn") {
                    this.posterize(8, 8);
            } else if (buttonId === "claritybtn") {
                    this.clarity();
            } else if (buttonId === "orangepeelbtn") {
                    this.orangePeel();
            } else if (buttonId === "sincitybtn") {
                    this.sinCity();
            } else if (buttonId === "sunrisebtn") {
                    this.sunrise();
            } else if (buttonId === "crossprocessbtn") {
                    this.crossProcess();
            } else if (buttonId === "hazydaysbtn") {
                    this.hazyDays();
            } else if (buttonId === "lovebtn") {
                    this.love();
            } else if (buttonId === "grungybtn") {
                    this.grungy();
            } else if (buttonId === "jarquesbtn") {
                    this.jarques();
            } else if (buttonId === "pinholebtn") {
                    this.pinhole();
            } else if (buttonId === "oldbootbtn") {
                    this.oldBoot();
            } else if (buttonId === "glowingsunbtn") {
                    this.glowingSun();
            } else if (buttonId === "hdrbtn") {
                    this.hdr();
            } else if (buttonId === "oldpaperbtn") {
                    this.oldpaper();
            } else if (buttonId === "pleasantbtn") {
                    this.pleasant();
            } else if (buttonId === "colorbtn") {
                    this.colorize(60, 105, 218, 10);
            }
            // this.hue(hue)
            //         .contrast(cntrst)
            //         .vibrance(vibr)
            //         .sepia(sep)
            //         .brightness(brightness)
            //         .noise(noise)
            //         .saturation(saturation)
            //         .exposure(exposure);
                this.render();
        });
    });

    // $("#cropbtn").click(function() {

    //     Caman(imageid, function() {
    //         this.revert(false);
    //     });


    //     Caman(imageid, function() {
    //         this.crop($('#width').val(), $('#height').val());
    //        // this.render();
    //     });
    // });

    // var applyFilterUsingButtonId = function(buttonId) {
    //     if (buttonId === "vintagebtn") {
    //         Caman(imageid, function() {
    //             //console.log("here");
    //             this.vintage();
    //         });
    //     } else if (buttonId === "lomobtn") {
    //         Caman(imageid, function() {
    //             this.lomo();
    //         });
    //     } else if (buttonId === "embossbtn") {
    //         Caman(imageid, function() {
    //             this.emboss();
    //         });
    //     } else if (buttonId === "tiltshiftbtn") {
    //         Caman(imageid, function() {
    //             this.tiltShift({
    //                 angle: 90,
    //                 focusWidth: 600
    //             });
    //         });
    //     } else if (buttonId === "radialblurbtn") {
    //         Caman(imageid, function() {
    //             this.radialBlur();
    //         });
    //     } else if (buttonId === "edgeenhancebtn") {
    //         Caman(imageid, function() {
    //             this.edgeEnhance();
    //         });
    //     } else if (buttonId === "posterizebtn") {
    //         Caman(imageid, function() {
    //             this.posterize(8, 8);
    //         });
    //     } else if (buttonId === "claritybtn") {
    //         Caman(imageid, function() {
    //             this.clarity();
    //         });
    //     } else if (buttonId === "orangepeelbtn") {
    //         Caman(imageid, function() {
    //             this.orangePeel();
    //         });
    //     } else if (buttonId === "sincitybtn") {
    //         Caman(imageid, function() {
    //             this.sinCity();
    //         });
    //     } else if (buttonId === "sunrisebtn") {
    //         Caman(imageid, function() {
    //             this.sunrise();
    //         });
    //     } else if (buttonId === "crossprocessbtn") {
    //         Caman(imageid, function() {
    //             this.crossProcess();
    //         });
    //     } else if (buttonId === "hazydaysbtn") {
    //         Caman(imageid, function() {
    //             this.hazyDays();
    //         });
    //     } else if (buttonId === "lovebtn") {
    //         Caman(imageid, function() {
    //             this.love();
    //         });
    //     } else if (buttonId === "grungybtn") {
    //         Caman(imageid, function() {
    //             this.grungy();
    //         });
    //     } else if (buttonId === "jarquesbtn") {
    //         Caman(imageid, function() {
    //             this.jarques();
    //         });
    //     } else if (buttonId === "pinholebtn") {
    //         Caman(imageid, function() {
    //             this.pinhole();
    //         });
    //     } else if (buttonId === "oldbootbtn") {
    //         Caman(imageid, function() {
    //             this.oldBoot();
    //         });
    //     } else if (buttonId === "glowingsunbtn") {
    //         Caman(imageid, function() {
    //             this.glowingSun();
    //         });
    //     } else if (buttonId === "hdrbtn") {
    //         Caman(imageid, function() {
    //             this.hdr();
    //         });
    //     } else if (buttonId === "oldpaperbtn") {
    //         Caman(imageid, function() {
    //             this.oldpaper();
    //         });
    //     } else if (buttonId === "pleasantbtn") {
    //         Caman(imageid, function() {
    //             this.pleasant();
    //         });
    //     } else if (buttonId === "colorbtn")`` {
    //         Caman(imageid, function() {
    //             this.colorize(60, 105, 218, 10);
    //         });
    //     } else if (buttonId === 'none') {} else {
    //         console.log("Undefined button");
    //     }
    // };

    // // Creating custom filters



// $('#vintagebtn').on('click',function(){
//     console.log("asdf");
//         Caman(imageid,function(){this.vintage();this.render();})
//
// });


});


//});

