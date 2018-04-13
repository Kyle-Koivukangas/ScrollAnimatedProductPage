<template>
  <div class="wrapper">
        
        <!-- 
            If this were more serious, I'd refactor it so that there wouldn't be any repeated code,
            I'd put all the navigation in one component rather than split it up as I did. This was just 
            made to quickly test out and showcase various animations in both jQuery and Vue.js. Really,
            you would likely only need to choose one or the other to avoid bloat, this is just me
            having fun and showing different ways of accomplishing the same thing.
        -->

        <!-- for vue transition animated navbar -->
        <!-- <vue-fixed-nav 
            :showfixednav="{showNav}"
            style="z-index: 999;" /> -->
        
        <section class="subnav">

            <div v-if="true" class="header">
                <div class="banner">
                    <div class="navbar content" > 
                        <div class="nav-left">
                            <a class="navbtn"  @click="scrollTo('.navbar')">Home</a>
                            <a class="navbtn"  @click="scrollTo('.overview')">Overview</a>
                            <a class="navbtn"  @click="scrollTo('.features')">Features</a>
                            <a class="navbtn"  @click="scrollTo('.specifications')">Buy</a>
                            <a class="navbtn"  @click="scrollTo('.footer')">About</a>
                        </div>
                        <div class="nav-right">
                            <a class="navbtn" href="">Sign In</a>
                            <a class="navbtn" href="">Kyle</a>
                        </div>
                    </div>
                </div>
            </div>



            <div class="subnav-image">
                <!-- <vue-ani-background></vue-ani-background> -->
                <div>
                    <h1 class="main-title">
                        <span>B</span>
                        <span>e</span>
                        <span>s</span>
                        <span>t</span>
                        <span>-</span>
                        <span>P</span>
                        <span>r</span>
                        <span>o</span>
                        <span>d</span>
                        <span>u</span>
                        <span>c</span>
                        <span>t</span>
                    </h1>
                    <p>The best product in the world!</p>
                </div>
            </div>

        </section>

        <section class="overview grid-wrap-4">

            <div class="content pad-vert-medium  grid-wrap-4">
                
                <div class="item invisible"
                     v-observe-visibility="(isVisible, entry) => fadeUp(isVisible, entry, 100)">
                    <img src="../assets/handsSprout.jpg" alt="">
                    <div>
                        <p>Eco Friendly Solution.</p>
                    </div>
                </div>
                <div class="item invisible"
                    v-observe-visibility="(isVisible, entry) => fadeUp(isVisible, entry, 200)">
                    <img src="../assets/lightbulb2.jpg" alt="">
                    <div>
                        <p>Great Ideas all day, as easy as flicking a switch!</p>

                    </div>
                </div>
                <div class="item invisible"
                    v-observe-visibility="(isVisible, entry) => fadeUp(isVisible, entry, 300)">
                    <!-- <img src="../assets/shutterstock-shippingBoxOpen.jpg" alt=""> -->
                    <img src="../assets/logo.png" alt="">
                    <div>
                        <p>Vue.js FTW!<br>Fast, easy development with a Javascript framework.</p>
                    </div>
                </div>
                <div class="item invisible"
                    v-observe-visibility="(isVisible, entry) => fadeUp(isVisible, entry, 400)">
                    <img src="../assets/thumbsupFlipped.jpg" alt="">
                    <div>
                        <p>This thumb says 'UP'!</p>
                    </div>
                </div>

            </div>

        </section>

        <section class="features">
            <div class="content pad-vert-medium">
                
                <div v-scroll-reveal.noreset="{rotate: {z: -100}, delay: 300, reset: false}" class="feature-thumb"></div>

                <div class="title">
                    <h1>Features</h1>
                </div>

                <div>
                    <div class="feature-list align-left">
                        <h4 class="invisible" v-observe-visibility="(isVisible, entry) => fadeInRight(isVisible, entry, 100)">Best thing Ever</h4>
                        <p class="invisible" v-observe-visibility="(isVisible, entry) => fadeInRight(isVisible, entry, 300)">There's a whole lotta stuff to be had here, no product is quite like this one, you won't believe your eyes—and no, it is not a scam! </p>
                        <p class="invisible" v-observe-visibility="(isVisible, entry) => fadeInRight(isVisible, entry, 300)">(By the way, try clicking those nav buttons, I animated those, too.)</p>
                        <h5 class="invisible" v-observe-visibility="(isVisible, entry) => fadeInRight(isVisible, entry, 100)">Free yourself</h5>
                        <p class="invisible" v-observe-visibility="(isVisible, entry) => fadeInRight(isVisible, entry, 300)">Free yourself from the chains of material bondage, give us your money, become enlightened!</p>
                        <h5 class="invisible" v-observe-visibility="(isVisible, entry) => fadeInRight(isVisible, entry, 100)">Get 'em while they're hot!</h5>
                        <p class="invisible" v-observe-visibility="(isVisible, entry) => fadeInRight(isVisible, entry, 300)">Hot off the press! Time's running out, if you don't hurry up and take this offer now, you may miss your chance forever! <br> <span class="alert-text">Time left: {{ timeLeft }}</span><button>BUYBUYBUY!</button></p>
                    </div>
                </div>

            </div>


        </section>

        <section class="feature1">

            <transition @enter="fadeInRight">
            <div class="content pad-vert-medium ">
                <div class="flex-panel reverse-flex">
                    <div class="right-panel align-right">
                        <h1 class="invisible" v-observe-visibility="fadeUp">This Product's Primary Feature</h1>
                        <p class="invisible" v-observe-visibility="fadeUp">There is so much to say about this product, but I'm not sure what to say about it. So, I will avoid using contractions and favor larger word choices in an effort to take up more space with a long-winded, circumlocutory, run-on sentence—because I want it to take up more room than what I'm able to come up with at the moment.</p>
                        <h2 class="invisible" v-observe-visibility="fadeUp">More about this feature</h2>
                        <p class="invisible" v-observe-visibility="fadeUp">More things about this great feature that can make your life easier. No joke, no lie, this feature will do your job for you, just buy it already!</p>
                        <h3 class="invisible" v-observe-visibility="fadeUp">hmmmmmmm</h3>
                        <p class="invisible" v-observe-visibility="fadeUp">What were we talking about? Oh, yeah! The main feature! Well, that's about it for this feature.</p>
                    </div>
                    <div class="left-panel feature1-pic"></div>
                </div>
            </div>
            </transition>

        </section>

        <section class="feature2">
            <div class="content pad-vert-medium">
                <div class="flex-panel">
                    <div class="left-panel align-left">
                        <h1 class="invisible" v-observe-visibility="fadeUp">Another Super Nice Feature</h1>
                        <p class="invisible" v-observe-visibility="fadeUp">Nobody can deny that this, too, is a great feature. A feature that would leave many speechless—that's a fact!<b>*</b></p>
                        <p class="invisible" v-observe-visibility="fadeUp">Accepting credit, debit, bitcoin and Paypal; hell, I'll even take cheques.</p>
                        <h3 class="invisible" v-observe-visibility="fadeUp">lorem ipsum?</h3>
                        <p class="invisible" v-observe-visibility="fadeUp">I could use lorem ipsum, but where's the fun in that?</p>
                        <h3 class="invisible" v-observe-visibility="fadeUp"></h3>

                        <br>
                        <p class="invisible" v-observe-visibility="fadeUp"><b>*</b><span class="fine-print">My friends were pretty speechless.</span></p>
                    </div>
                    <div class="left-panel feature2-pic"></div>
                </div>
            </div>

        </section>

        <section class="feature3">
            <div class="content pad-vert-medium ">
                <div class="flex-panel reverse-flex">
                    <div class="right-panel align-right">
                        <h1 class="invisible" v-observe-visibility="fadeUp">The Last Feature</h1>
                        <p class="invisible" v-observe-visibility="fadeUp">Last feature to round this product's description off nicely. This product really has it all, folks. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita assumenda natus dolore aliquam, iste nulla quas quidem, dolor, voluptatum ipsa culpa iure. Delectus ducimus repudiandae praesentium, nemo modi dolor.</p>
                        <h2 class="invisible" v-observe-visibility="fadeUp">what else is there to say?</h2>
                        <p class="invisible" v-observe-visibility="fadeUp">Not much. Just buy it already! (I got lazy thinking up stuff and used lorem ipsum)</p>
                        <p class="invisible" v-observe-visibility="fadeUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis quas labore dolorem, accusamus libero facere reprehenderit ullam vitae obcaecati deleniti, possimus, quibusdam commodi culpa qui est quo alias voluptatem.</p>
                    </div>
                    <div class="left-panel feature1-pic"></div>
                </div>
            </div>
        </section>

        <section class="specifications">
            <div class="content pad-vert-medium ">
                <div class="flex-panel">
                    <div class="left-panel"></div>
                    <div class="left-panel align-left">
                        <h1 class="invisible" v-observe-visibility="fadeUp">Specifications</h1>
                        <p class="invisible" v-observe-visibility="fadeUp">Incase you've somehow made it this far without feeling the overwhelming urge to buy the product, let's see if the impressive specs change that.</p>
                        
                        <ul>
                            <li class="invisible" v-observe-visibility="fadeUp">Spec A: all the speed</li>
                            <li class="invisible" v-observe-visibility="fadeUp">Spec B: hmm</li>
                            <li class="invisible" v-observe-visibility="fadeUp">Spec C: contains infinity itself?</li>
                            <li class="invisible" v-observe-visibility="fadeUp">The exact dimensions you need it to be, it is intangible</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="buy">
            <div class="content pad-vert-medium ">
                <div class="flex-panel">
                    <div class="left-panel"></div>
                    <div class="left-panel align-left">
                        <h1 class="invisible" v-observe-visibility="fadeUp">Order now</h1>

                        <div v-if="!showComplete" class="orderform">
                            <div>
                                <label>Order</label>
                            </div>
                                <!-- <label>Order</label> -->
                            <input type="number" placeholder="Quantity">
                            <button @click="purchaseAnimation" class="btn">Purchase</button>
                        </div>

                        <transition 
                            mode="out-in"
                            name="fade">
                            <div v-if="showComplete" class="complete">
                                <h4>Purchase Complete!</h4>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </section>

        <vue-footer></vue-footer>

    
        <div v-if="false" class="palette">
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
import AniBackground from "./AniBackground.vue";
import Footer from "./Footer";
import FixedNav from "./FixedNav";

export default {
    components: {
        VueAniBackground: AniBackground,
        VueFooter: Footer,
        VueFixedNav: FixedNav,
    },
    data() {
        return {
            // a dictionary that stores booleans of which elements that have been revealed.
            revealed: {},
            date: "11:34",
            showNav: false,
            showComplete: false,
        };
    },
    computed: {
        timeLeft() {
            // calculates time difference for time left timer
            var endDate = new Date(2018, 1, 1, 10, 0, 0, 0);
            return this.millisToMinutesAndSeconds(this.date - endDate);
        },
    },
    methods: {
        purchaseAnimation() {
            //example of animations with jquery/velocity instead of vueJS transitions.
            console.log($(".orderform").children());
            const vm = this;
            var elementList = $(".orderform")
                .children()
                .toArray()
                .reverse();

            var skewF = function(elements, percentComplete, timeRemaining, timeStart, tween) {
                // Also demonstrating multiple ways of animating via vue JS
                // This shows how to animate with a custom progress function that called via Velocity.
                var degrees = 55 * percentComplete;
                var distance = 500 * percentComplete;
                var scaleX = 1.2 * percentComplete + 1;
                var scaleY = 1 - (percentComplete/2)
                var translateX = -200 * (percentComplete/2);
                elements[0].style.transform =   "scale(" + scaleY + ", " + scaleX + ")" + 
                                                " skew(" + degrees + "deg," + 0 + "deg)" +
                                                " translateX(" + translateX + "px)";
            };

            $(elementList).each(function(index, el) {
                var delay = index * 200
                $(el)
                    .velocity({
                        color: "black",
                    }, {duration: 200, delay: delay, easing: "easeOutQuart", progress: skewF})
                    .velocity({
                        scaleX: [2, 0.5],
                        scaleY: [ .5, 2],
                        translateX: [0, -80],
                        skewX: [30,50],
                    }, {duration: 100, easing: "easeInQuart"})
                    .velocity(
                        {
                            opacity: [-0.5, 1],
                            scaleY: [0, .7],
                            scaleX: [10, 1],
                            translateX: 3000,
                        },
                        { duration: 500, complete: function() {
                            setTimeout(function(){
                                vm.showComplete = true 
                            }, 500) 
                        } }
                    )
            });


        },
        scrollTo(elName) {
            $(elName).scrollView();
        },
        revealFixedNav(isVisible, entry) {
            //this is for passing state to vue transition animated navbar, jquery animated will be located in the app component.
            console.log(isVisible);

            if (!isVisible) {
                this.showNav = true;
                console.log("showing Fixed Nav");
            } else {
                // this.showNav = false;
                console.log("hiding fixed nav");
            }
        },
        millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return seconds == 60 ? minutes + 1 + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        },
        isInViewport(element) {
            var rect = element.getBoundingClientRect();
            var html = document.documentElement;
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || html.clientHeight) &&
                rect.right <= (window.innerWidth || html.clientWidth)
            );
        },
        fadeUp(isVisible, entry, delay = 250) {
            var revealed = !entry.target.classList.contains("invisible");

            if (isVisible && !revealed) {
                $(entry.target).velocity(
                    {
                        opacity: [1, 0.0],
                        translateY: [0, "30px"],
                    },
                    {
                        duration: 500,
                        delay: delay,
                        easing: "easeOutQuart",
                        complete: function() {
                            entry.target.classList.remove("invisible");
                        },
                    }
                );
            }
        },
        fadeInRight(isVisible, entry, delay = 250) {
            var revealed = !entry.target.classList.contains("invisible");

            if (isVisible && !revealed) {
                $(entry.target).velocity(
                    {
                        opacity: [1, 0.0],
                        translateX: [0, "-40px"],
                        // translateY: [0, "50px"],
                    },
                    {
                        duration: 500,
                        delay: delay,
                        easing: "easeOutExpo",
                        //remove 'invisible' class once completed.
                        complete: function() {
                            entry.target.classList.remove("invisible");
                        },
                    }
                );
            }
        },
        fadeInLeft(isVisible, entry, delay = 250) {
            var revealed = !entry.target.classList.contains("invisible");

            if (isVisible && !revealed) {
                $(entry.target).velocity(
                    {
                        opacity: [1, 0.0],
                        translateX: [0, "100px"],
                        // translateY: [0, "50px"],
                    },
                    {
                        duration: 500,
                        delay: delay,
                        easing: "easeOutExpo",
                        //remove 'invisible' class once completed.
                        complete: function() {
                            entry.target.classList.remove("invisible");
                        },
                    }
                );
            }
        },
        visibilityChanged(isVisible, entry) {
            console.log(entry);
        },
    },
    created() {
        console.log("created:");
    },
    mounted() {
        console.log("mounted: ");
        // var elements = $("*");
        // console.log(elements);

        //populated the 'revealed' object, this object keeps track of which elements have been revealed.
        // for (var i = 0; i < elements.length; i++) {
        //     if (elements[i].dataset.revealkey) {
        //         this.revealed[elements[i].dataset.revealkey] = false;
        //         // console.log(elements[i].dataset.revealkey);
        //     }
        // }
        this.date = new Date(2018, 1, 1, 10, 13, 0, 0);
        const vm = this;
        setInterval(function() {
            vm.date = new Date(vm.date.getTime() - 1000);
        }, 1000);

        // jquery scroll-to-element function
        $.fn.scrollView = function() {
            return this.each(function() {
                $("html, body").animate(
                    {
                        scrollTop: $(this).offset().top,
                    },
                    1000
                );
            });
        };
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

section:nth-child(4n-1) {
    background-color: $secondary;
}
section:nth-child(4n + 1) {
    background-color: $primary;
}
body,
p {
    font-family: "Roboto Condensed", sans-serif;
    // font-family: 'Do Hyeon', sans-serif;
}
h3,
h4,
h5,
h6,
button {
    font-family: "Roboto", sans-serif;
}

.wrapper {
    background-color: $neutral;
    max-width: 1700px;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0;
}
.header {
    width: 100%;
}
.banner {
    width: 100%;
}
.navbar {
    @include respond-to(xsmall) {
        //TODO: collapse nav buttons at xsmall size
    }

    height: 60px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    // font-family: 'Do Hyeon', sans-serif;
    font-family: "Gugi", cursive;
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
        cursor: pointer;
    }
}
.btn {
    border-radius: 10px;
    border: none;
    padding: 10px;
    background-color: #cc2929;
    &:hover {
        background-color: lighten(#cc2929, 10);
    }
    &:active {
        background-color: darken(#cc2929, 10);
    }
}

.subnav {
    // background-color: $primary;
    // background-color: darken($primary, $shadeDarkenAmnt) !important;
    height: 500px;
    // font-family: 'Do Hyeon', sans-serif;
    font-family: "Gugi", cursive;
}
.subnav-image {
    height: 500px;
    color: darken($neutral, $shadeDarkenAmnt);
    text-shadow: 1px 1px 8px darken($secondary, 40);

    background-image: url("../assets/largeBackgroundMain.jpg");
    background-position: top;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: initial;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    grid-auto-rows: auto;
    grid-template-areas:
        "a a a a a a a a"
        "b b c c c c d d"
        "b b c c c c d d"
        "e e e e e e e e";
    align-items: center;

    & div {
        margin: auto;
        width: 600px;
        grid-area: c;
        @include respond-to(xsmall-screens) {
            width: 100%;
            & h1 {
                font-size: 1.3rem !important;
            }
            & p {
                font-size: 0.8rem;
            }
        }
        @include respond-to(small-screens) {
            width: 100%;
            & h1 {
                font-size: 1.6rem !important;
            }
            & p {
                font-size: 0.9rem;
            }
        }
        @include respond-to(medium-screens) {
            // font-size: 3rem;
            width: 100%;
            & h1 {
                font-size: 2.6rem !important;
            }
        }
        & h1 {
            color: $neutral;
            font-size: 60px;
            font-family: "Do Hyeon", sans-serif;
            text-shadow: 2px 2px 15px darken($secondary, 30);
        }
    }
}

.overview {
    width: 100%;
    height: 420px;
    margin: auto;
    display: inline-block;
    font-family: "Roboto", sans-serif;

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
    overflow: hidden;

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

            background-image: url("../assets/featurethumb.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: auto 100%;

            transform-origin: top right;
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
    padding: 0px 50px 0 15px;
    z-index: 12;

    & p {
        & button {
            padding: 6px;
            background: linear-gradient($secondary, darken($secondary, 10));
            border-color: lighten($secondary, 10);
            color: $neutral;
            margin: 5px 0 0 10px;
            font-weight: 600;
            border-radius: 20px;
        }
        & button:hover {
            background: linear-gradient(lighten($secondary, 10), darken($secondary, 5));
        }
    }
}

.feature1 {
    width: 100%;
    height: auto;
}
.feature1-pic {
    // position: absolute;
    top: 50;
    left: 10%;
    margin: auto;
    height: 400px !important;
    width: 300px !important;
    background-image: url("../assets/mysterybox.png");
    background-size: cover;
    background-position: center;

    @include respond-to(xsmall-screens) {
        display: none;
    }
    @include respond-to(small-screens) {
        display: none;
    }
    @include respond-to(medium-screens) {
        // top: 50px;
        // left: 60px;
        height: 200px !important;
        width: 200px !important;
        background-size: contain;
        background-repeat: no-repeat;
    }
}

.feature2 {
    width: 100%;
    height: auto;
}
.feature2-pic {
    // position: absolute;
    top: 50;
    left: 10%;
    margin: auto;
    height: 300px !important;
    width: 300px !important;
    background-image: url("../assets/loremIpsum.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @include respond-to(xsmall-screens) {
        display: none;
    }
    @include respond-to(small-screens) {
        display: none;
    }
    @include respond-to(medium-screens) {
        // top: 50px;
        // left: 60px;
        height: 200px !important;
        width: 200px !important;
        background-size: contain;
        background-repeat: no-repeat;
    }
}

.feature3 {
    width: 100%;
    height: auto;
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
.orderform {

    & div {
        display: inline-block;
    }
}
.buy {
    height: 250px;
}

.flex-panel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.left-panel {
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
    height: 100%;
    // height: 500px;
    padding: 0px 50px 0 15px;
    text-align: left;
    // flex: 1 0 auto;
}
.right-panel {
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
    height: 100%;
    padding: 0px 15px 0 50px;
    text-align: right;
    // flex: 0 1 auto;
}
.reverse-flex {
    flex-direction: row-reverse;
}
.align-left {
    text-align: left;
}
.align-right {
    text-align: right;
    @include respond-to(xsmall-screens) {
        text-align: left !important;
    }
}
.invisible {
    opacity: 0;
}
.title {
    margin: 0 0 50px 0;
}

.fine-print {
    font-size: 0.6rem;
}
.alert-text {
    color: rgb(221, 0, 0);
    text-shadow: 1px 1px 5px black;
}
.pad-vert-medium {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
