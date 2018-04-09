<template>


    <div class="fixed-nav"  >
        <!-- debug toggle button -->
        <!-- <button style="position: fixed; top: 100px; " @click="show = !show">show toggle</button> --> 
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
          >
            <div v-if="show"  id="f-nav" >
                <div class="navbar content">

                    <div class="nav-left">
                        <a class="navbtn" href="">Home</a>
                        <a class="navbtn" href="">Overview</a>
                        <a class="navbtn" href="">Features</a>
                        <a class="navbtn" href="">Buy</a>
                        <a class="navbtn" href="">About</a>
                    </div>

                    <div class="nav-right">
                        <a class="navbtn" href="">Sign In</a>
                        <a class="navbtn" href="">Kyle</a>
                    </div>
                </div>
            </div>
        </transition>
    </div>

</template>

<script>
export default {
    props: ["showfixednav"],
    data() {
        return {
            showNav: true,
            show: false,
        };
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
        },
        enter: function(el, done) {
            $(el).velocity( { opacity: 1 }, { duration: 300 });
            $(el).velocity( { opacity: 1, translateY: "0px" }, { complete: done });
        },
        leave: function(el, done) {
                $(el).velocity( { opacity: 0 }, { duration: 300 });
                $(el).velocity( { opacity: 0, translateY: "-50px" }, { complete: done });

        },
    },
    mounted() {
        $(window).scroll(() => {
            var height = $(window).scrollTop();
            if (height > 80) {
                // console.log("show");
                this.show = true;
            } else {
                // console.log("hide");
                this.show = false;
            }
        });
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon|Gugi|Roboto|Roboto+Condensed");
/* Fonts:
font-family: 'Do Hyeon', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Roboto Condensed', sans-serif;
font-family: 'Gugi', cursive;
*/

// Color palette
$neutral: #eff4f6;
$neutralDark: #dce1d6;
$highlight: #40edd8;
$primary: #588b8b;
$secondary: #40798c;

$btnHoverLighten: rgba(255, 255, 255, 0.2);
$btnHoverDarken: rgba(0, 0, 0, 0.2);

// misc variables
$shadeDarkenAmnt: 6;

// size variables
$contentWidthXSmall: 320px;
$contentWidthSmall: 520px;
$contentWidthMed: 680px;
$contentWidthLarge: 900px;
$contentWidthWide: 1000px;

$break-xsmall: 540px;
$break-small: 740px;
$break-med: 1024px;
$break-large: 1300px;
@mixin respond-to($media) {
    @if $media == xsmall-screens {
        @media only screen and (max-width: $break-xsmall) {
            @content;
        }
    } @else if $media == small-screens {
        @media only screen and (min-width: $break-xsmall + 1) and (max-width: $break-small) {
            @content;
        }
    } @else if $media == medium-screens {
        @media only screen and (min-width: $break-small + 1) and (max-width: $break-med - 1) {
            @content;
        }
    } @else if $media == large-screens {
        @media only screen and (min-width: $break-med + 1) and (max-width: $break-large - 1) {
            @content;
        }
    } @else if $media == wide-screens {
        @media only screen and (min-width: $break-large) {
            @content;
        }
    }
}

#f-nav {
    // visibility: hidden;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    transform: translateY(-50px);
    width: 100% !important;
    height: 60px;
    background-color: $primary; // remove this BG color if you want smaller fixed nav bar that doesn't span entire width of screen
    // background: url("../assets/largeBackgroundMain.jpg");
    background-position: top;
    // border-bottom: 1px solid darken($primary, 15);
    // box-shadow: 1px 1px 5px darken($primary, 20);
}

.fixed-nav {
    position: fixed;
    width: 100%;
}
.navbar {
    // background-color: lighten($primary, 3); //remove lighten
    // max-width: $contentWidthMed;
    @include respond-to(xsmall) {
        //collapse nav buttons at xsmall size
    }

    z-index: 999;
    height: 60px;
    // margin: auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    // font-family: 'Do Hyeon', sans-serif;
    font-family: "Gugi", cursive;

    // background-color: $primary; // smaller inner navbar
    background: linear-gradient(to left, rgba(0,0,0,0) 0%, $primary 50%, rgba(0,0,0,0) 100%);    
    border-radius: 0 0 6px 6px;
}
.nav-left {
    display: flex;
    width: 60%;
}
.nav-right {
    display: flex;
    width: 25%;
}
.navbtn {
    // background-color: lighten($primary, 5); //remove lighten
    width: 90px;
    height: 100%;
    margin: auto;
    list-style-type: none;
    border-radius: 0 0 2px 2px;
    color: darken($neutral, $shadeDarkenAmnt);

    //vertically align link text
    height: 60px;
    line-height: 60px;
    & a {
        text-align: center;
        display: inline-block;
        text-decoration: none !important;
        // color: $secondary !important;
    }
    &:hover {
        background-color: $btnHoverLighten;
    }
}

.content {
    @include respond-to(xsmall-screens) {
        max-width: $contentWidthXSmall;
    }
    @include respond-to(small-screens) {
        max-width: $contentWidthSmall;
    }
    @include respond-to(medium-screens) {
        max-width: $contentWidthMed;
    }
    @include respond-to(large-screens) {
        max-width: $contentWidthLarge;
    }
    @include respond-to(wide-screens) {
        float: none;
        max-width: $contentWidthWide;
    }
    // background-color: #ddd;
    margin: 0 auto;
    // display: inline;
}
</style>
