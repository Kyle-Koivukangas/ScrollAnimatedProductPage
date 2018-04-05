<template>
  <div class="wrapper">

        <div class="header">
            <div class="banner">
                <div class="navbar">
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

        <section class="subnav">

        </section>

        <section class="overview">

        </section>

        <section class="features">

        </section>

        <section class="feature1">

        </section>

        <section class="feature2">

        </section>

        <section class="feature3">

        </section>


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

//misc variables
$shadeDarkenAmnt: 6;

section:nth-child(2n) {
    background-color: $secondary;
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
    background-color: $primary;
    width: 100%;
}
.navbar {
    background-color: lighten($primary, 3); //remove lighten
    max-width: 900px;
    height: 60px;
    margin: auto;
    display: flex;
    justify-content: space-between;
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
    background-color: lighten($primary, 5); //remove lighten
    width: 90px;
    height: 100%;
    margin: auto;
    list-style-type: none;

    //vertically align link text
    height: 60px;
    line-height: 60px;
    & a {
        text-align: center;
        display: inline-block;
        text-decoration: none !important;
        color: $secondary !important;
    }
}

.subnav {
    // background-color: $primary;
    background-color: darken($primary, $shadeDarkenAmnt) !important;
    height: 500px;
}

.overview {
    width: 100%;
    height: 400px;
}

.features {
    width: 100%;
    height: 500px;
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
</style>
