
    let splite1 = $(".main-text h1").text().split("").join("</span><span>");
        splite1 ="<span>" + splite1 + "</span>";
        $(".main-text h1").html(splite1);



        function loading(){
            let progress = $(".progress"),
                progressText = progress.find(".progress-text"),
                imgLoad = imagesLoaded("body"),
                imgTotal = imgLoad.images.length,
                imgLoaded = 0,
                imgCurrent = 0,
                progressTimer = setInterval(updateProgress, 1000 / 60);

            imgLoad.on("progress", function(){
                imgLoaded++;
            });

            function updateProgress(){
                let target = (imgLoaded / imgTotal) * 100;

                imgCurrent += ( target -  imgCurrent ) * 0.1;
                progressText.text( Math.floor(imgCurrent) + "%" );

                if(imgCurrent >= 100){
                    clearInterval(progressTimer);
                    progress.delay(1000).animate({ top: "-130%" },500);

                $("body").addClass("show");
                    
                let tl = new TimelineMax();
                 tl.staggerTo(".main-text h1 span", 0.8, {ease: Back.easeOut.config(1.7), delay: 2, opacity:1, y: 0},0.09)
                 tl.staggerTo(".main-text .t1", 0.8, {ease: Back.easeOut.config(1.7), delay: 0.3, opacity:1, y: 0},0.09)
                 tl.staggerTo(".main-text p", 0.8, {ease: Back.easeOut.config(1.7),  delay: 0.3,opacity:1, y: 0},0.09)
                 tl.staggerTo("#header", 0.8, {ease: Back.easeOut.config(1.7), delay: 0.3, opacity:1, y: 0},0.09)

                  
                }

                if(imgCurrent > 99){
                    imgCurrent = 100;
                }
            }
        }
        loading()