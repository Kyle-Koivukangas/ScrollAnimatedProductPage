<template>
<div id="animated-bg">

    hi

    <div id="description">

    </div>
    <div id="count">

    </div>
</div>
  
</template>

<script>
// import Velocity from 'velocity-animate';

export default {
    data() {
        return {};
    },
    methods: {
        rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        createDots(dotsCount) {
            var dotsHtml = "";
            var $count = $("#count");
            var $dots;

            for (var i = 0; i < dotsCount; i++) {
                dotsHtml += "<div class='dot'></div>";
            }

            $dots = $(dotsHtml);

            $count.html(dotsCount);

            return $dots, $count
        },
    },
    created() {
        var bg = $("#animated-bg");

        const vm = this;
        setTimeout(function() {
            // $("#animated-bg").velocity({opacity: .2}, {duration: 1000})
            //     .velocity({opacity: 1}, {duration: 1200}).velocity("reverse");


            $.fn.velocity.defaults.easing = "easeInOutSine";
            function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            //creat dots:
            // $dots, $count = vm.createDots(60);
            var dotsCount = 60;
            var dotsHtml = "";
            var $count = $("#count");
            var $dots;

            for (var i = 0; i < dotsCount; i++) {
                dotsHtml += '<div class="dot"></div>';
                
            }

            $dots = $(dotsHtml);

            $count.html(dotsCount);
            
            //animation
            var $container = $("#animated-bg");
            var $description = $("#description");

            // var containerWidth = window.screen.availWidth,
            //     containerHeight = window.screen.availHeight,
            //     chromeHeight = containerHeight - document.documentElement.clientHeight;
            var containerWidth = $container.width(),
                containerHeight = $container.height(),
                chromeHeight = containerHeight - document.documentElement.clientHeight;

            var translateZMin = -725,
                translateZMax = 600;
            
            var offset = 500;

            $container
                .css("perspective-origin", containerWidth/2 +"px " + ((containerHeight * 0.45)) + "px")
                .css("perspective", 30)
                // .velocity({
                //     perspective: [80, 10], opacity: [.8, .4]
                // }, { duration: 10000, loop: 4 })
                // .velocity({
                //     perspective: [100, 50],
                //     opacity: [0.75, 0.55] 
                // }, { duration: 800, loop: 2, delay: 3250 });

            $dots
                .velocity({
                    translateX: [
                        function() { return "+=" + rand(-containerWidth/2.5, containerWidth/2.5) },
                        function() { return rand(0, containerWidth) }
                    ],
                    translateY: [
                        function() { return "+=" + rand((-containerHeight/2.75) , (containerHeight/2.75)) },
                        function() { return rand(0, containerHeight) }
                    ],
                    translateZ: [
                        function() { return "+=" + rand(translateZMin, translateZMax) },
                        function() { return rand(0, translateZMin) }
                    ],
                    opacity: [
                        function() { return Math.random() },
                        function() { return Math.random() + 0.1 }
                    ]
                }, { duration: 10000 })
                //.velocity("reverse", { easing: "easeOutQuad" })
                .appendTo($container);

        }, 1000);
    },
};
</script>

<style>
#animated-bg {
    /* background-color: #123; */
    height: 100%;
    width: 100%;
    overflow: none;
}
.dot {
    background-color: aliceblue;
    color: antiquewhite;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
}
</style>
