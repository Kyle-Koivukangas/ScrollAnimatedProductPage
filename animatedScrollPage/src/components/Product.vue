<template>
  <div class="wrapper">
        

        <section class="subnav">

            <div class="header">
                <div class="banner">
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
            </div>

            <div class="subnav-image">

            </div>

        </section>

        <section class="overview grid-wrap-4">

            <div class="content pad-vert-medium  grid-wrap-4">
                
                <div class="item">
                    <img src="../assets/handsSprout.jpg" alt="">
                    <div>
                        <p>Eco Friendly Solutions. Don't you worry about harming those pesky trees!</p>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/lightbulb2.jpg" alt="">
                    <div>
                        <p>Great Ideas All DAY, As easy as flicking a switch!</p>

                    </div>
                </div>
                <div class="item">
                    <!-- <img src="../assets/shutterstock-shippingBoxOpen.jpg" alt=""> -->
                    <img src="../assets/logo.png" alt="">
                    <div>
                        <p>Vue JS FTW! <br>Fast easy development with a Javascript framework.</p>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/thumbsupFlipped.jpg" alt="">
                    <div>
                        <p>This thumb says 'UP'!</p>
                    </div>
                </div>

            </div>

        </section>

        <section class="features">
            <div class="content pad-vert-medium">

                <div class="title">
                    <h1>Features</h1>
                </div>

                <div>
                    <div class="feature-list">
                        <h4>Let me tell you why you need a green thumb!</h4>
                        <p>Your yard is a septic field you say? No problem! Put those nutrients to good use! With a green thumb, you can grow the best tasting food you've ever eaten no matter where you grow, I guarantee it! </p>
                        <h5>Free yourself</h5>
                        <p>Grow all the food you could ever dream of! Free yourself from that grocery bondage, become self-sufficient and grow your own food!</p>
                        <h5>Get 'em while they're hot off the press!</h5>
                        <p>Time's running out, if you don't hurry up and grab one now, you may miss your chance to take advantage of this golden opportunity forever!</p>
                    </div>
                </div>

                <div class="feature-thumb"></div>
            </div>


        </section>

        <section class="feature1">
            <div class="content pad-vert-medium">

            </div>

        </section>

        <section class="feature2">

        </section>

        <section class="feature3">

        </section>


    
        <div class="palette">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
// Color palette
$neutral: #eff4f6;
$neutralDark: #dce1d6;
$highlight: #40edd8;
$primary: #588b8b;
$secondary: #40798c;

$btnHoverLighten: rgba(255, 255, 255, 0.2);
$btnHoverDarken: rgba(0, 0, 0, 0.2);

//misc variables
$shadeDarkenAmnt: 6;

//size variables
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

section:nth-child(4n-1) {
    background-color: $secondary;
}
section:nth-child(4n+1) {
    background-color: $primary;
}

.wrapper {
    background-color: $neutral;
    max-width: 1700px;
    width: 100%;
    height: 100%;
    margin: auto;
}
.header {
    width: 100%;
}
.banner {
    // background-color: $primary;
    width: 100%;
}
.navbar {
    // background-color: lighten($primary, 3); //remove lighten
    // max-width: $contentWidthMed;
    @include respond-to(xsmall) {
        //collapse nav buttons at xsmall size
    }
    // @include respond-to(small) {
    //     max-width: $contentWidthSmall;
    // }
    // @include respond-to(medium-screens) {
    //     max-width: $contentWidthMed;
    // }
    // @include respond-to(large-screens) {
    //     max-width: $contentWidthLarge;
    // }
    // @include respond-to(wide-screens) {
    //     float: none;
    //     max-width: $contentWidthWide;
    // }

    height: 60px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
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

.subnav {
    // background-color: $primary;
    // background-color: darken($primary, $shadeDarkenAmnt) !important;
    height: 500px;
}
.subnav-image {
    height: 500px;

    background-image: url("../assets/largeBackgroundMain.jpg");
    background-position: top;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: initial;
}

.overview {
    width: 100%;
    height: 420px;
    margin: auto;
    display: inline-block;

    & div {
        height: 300px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;

        & div.item {
            @include respond-to(xsmall-screens) {
                max-width: 100%;
                margin-bottom: 60px;
            }
            @include respond-to(small-screens) {
                width: 50%;
            }
            @include respond-to(medium-screens) {
                width: 50%;
            }
            @include respond-to(large-screens) {
                width: 25%;
            }
            @include respond-to(wide-screens) {
                width: 25%;
            }
            display: flex;
            flex-direction: column;
            // background-color: $primary;
            & img {
                height: 40%;
                width: auto;
                margin: auto;
                border-radius: 20px;
                border: 1px solid white;
            }
            & div {
                height: auto;
                text-align: center;
                margin: auto;
                & p {
                    margin: auto;
                }
            }
        }
    }
}

.features {
    width: 100%;
    height: auto;
    display: inline-block;

    & .content {
        @include respond-to(xsmall-screens) {
            height: 600px;
        }
        @include respond-to(small-screens) {
            height: 900px;
            margin-left: auto;
            margin-right: auto;
        }
        @include respond-to(medium-screens) {
            height: auto;
        }
        @include respond-to(large-screens) {
            height: auto;
        }
        @include respond-to(wide-screens) {
            height: auto;
        }
        position: relative;

        & .feature-thumb {
            @include respond-to(xsmall-screens) {
                background: none;
            }
            @include respond-to(small-screens) {
                margin-left: auto;
                margin-right: auto;
                bottom: 0;
                right: 40px;
                width: 900px;
            }
            @include respond-to(medium-screens) {
                margin-left: auto;
                margin-right: auto;
                bottom: 10;
                right: -90px;
                overflow: visible;
                width: 900px;
                overflow: visible;
            }
            position: absolute;
            top: auto;
            left: auto;
            bottom: 0;
            right: 50;
            height: 450px;
            width: 100%;
            z-index: 99;

            background-repeat: no-repeat;
            background-position: center;
            background-size: auto 100%;

            background-image: url("../assets/featurethumb.png");
        }
    }
}
.feature-list {
    @include respond-to(xsmall-screens) {
        width: 80%;
        text-align: center;
        padding: 10px;
        margin: auto;
    }
    @include respond-to(small-screens) {
        width: 80%;
        text-align: center;
        padding: 10px;
        margin: auto;
    }
    width: 50%;
    text-align: left;
    padding: 0px 50px 0 15px;
}

.feature1 {
    width: 100%;
    height: 300px;
}

.feature2 {
    width: 100%;
    height: 300px;
}

.feature3 {
    width: 100%;
    height: 300px;
}

$fullPalette: $neutral, $neutralDark, $highlight, $primary, $secondary;
.palette {
    display: flex;
    height: 200px;
    width: 400px;
    margin: auto;
    border-left: #666 2px solid;
    // border-radius: 50%;
    // background: conic-gradient($neutral 20%, $neutralDark 0 20%, $highlight 0 20%, $primary 0 20%, $secondary 0);
    // background: conic-gradient(yellowgreen 40%, gold 0 70%, #f06 0);
    // background-image: conic-gradient(yellowgreen, #f06);//

    @for $i from 1 through length($fullPalette) {
        & div:nth-child(#{length($fullPalette)}n + #{$i}) {
            background: nth($fullPalette, $i);
            height: 100%;
            width: 100%;
        }
    }
}

.title {
    margin: 0 0 50px 0;
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
}
.pad-vert-medium {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
}
.grid-wrap-4 {
    @include respond-to(xsmall-screens) {
        height: 1500px;
    }
    @include respond-to(small-screens) {
        height: 720px;
    }
    @include respond-to(medium-screens) {
        height: 700px;
    }
    @include respond-to(large-screens) {
        height: 420px;
    }
    @include respond-to(wide-screens) {
        height: 420px;
    }
    display: flex;
}
</style>
