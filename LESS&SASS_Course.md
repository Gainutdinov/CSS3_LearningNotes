# What is Less?

Dynamic Style Sheet Language
"Compiles" to CSS
Introduces programming features to CSS
Looks and Feels like CSS

PreProcess file

## Example of using LESS
```
<head>
    <link rel="stylesheet/less" type="text/css" href="css/my.less">
    <script> src="js/less.js" type="text/javascript"</script>
</head>
```
## Example how to announce new LESS variable:
@main-variable: Pink


LESS on the Server: Node.JS, ASP.NET

LESS Basics
    LESS is meant to feel like CSS but better
        All CSS is valid...really
            Remaiming your .css to .less works
        LESS adds to CSS
LESS Basics(2)
```
@baseFontSize:14px;
/* Comments */
// Comments too
#main
{
    h1
    {
        fomt-size: @baseFontSize;
    }
}
```

## Variables:
```
@myColor: #ffeedd;
//They are Constants, this doesn't work
@myColor: @myColor + 5%; //this not going to work because you alread announced variable
@a: Black; //Color
@b: 4px; //Units
@c: 1.0em;
@d: helvectica, sans serif; //Strings
@e: 1px #000 Solid 0 0; // Comples type
```
## Operations in LESS
```
//Operations Just Work
font-size:4px + 4; //8px
font-size:20px * .8; //16px;
color:#FFF/4; //#404040;
width: (100%/2) + 25%; //75%
```
## Color Functions
```
color: lighten(@color, 10%);
color: darken(@color, 10%);
color: saturate(@color, 10%);
color: fadein(@color, 10%);
color: fadeout(@color, 10%);
color: fade(@color, 10%);
color: spin(@color, 10%);
color: mix(@color, 10%);
```
## More Functions
```
@hue: hue(@color);
@sat: saturation(@color);
@ligth: lighteness(@color);
@alpha: alpha(@color);
@alpha: hsl(20%, 30%, 40%);
```

## Math
```
@rnd: rount(3.14);
@top: ceil(3.14);
@bot: floor(3.14);
@per: percentage(.14);
```


## Mixins

* Repeatable sections
* Feel like funcitons
* But insert more than one name/value pair
* Can accept parameters, defaults and overloads

```
.rounded-corners-all(@size) {
    border-radius: @size;
    -webkit-border-radius: @size;
    -moz-border-radius: @size;
}
#form
{
    .rounded-corners-all(5px);
}

//Defaul Values
.rounded-corners-all(@size:5px) {
    border-radius: @size;
    -webkit-border-radius: @size;
    -moz-border-radius: @size;
}
#form
{
    .rounded-corners-all(5px);
}
// Using overloads
.color(@color) {
    color: @color;
}

//Using overloads
.color(@color, @factor) {
    color: @color;
}

.color(@color, @factor) {
    color: lighten(@color, @factor);
}

#form
{
    .color(#888, 20%); //Uses 2nd overload
}

//Using guards, in this case if color is lighter that 50% of browser will use Black color and etc.
.color(@color) when (alpha(@color) >= 50%) {
    color: Black;
}

.color(@color) when (alpha(@color) < 50%) {
    color: transparent;
}

#form
{
    .color(@mainColor); //Uses 1st overload
}

//Using type guards
.width(@size) when (isnumber(@size)) {
    width: @size * 2;
}

.width(@size) when (ispercentage(@size)) {
    width: @size;
}

#form
{
    .width(50%); //Uses 2nd overload
}
```
## Nested Rules
Allows you to structure rules in a logical way
    Heirarchies imply the cascading/specificity
    LESS then deconstructs it into CSS for you
```
/* CSS */                                       
nav {
    font-size:14px;
    font-weight: bold;
    float: right;
}
nav ul {
    list-style-type:none;
}
nav ul li {
    float: left;
    maring: 2px;
}

// LESS Nested Rules
nav {
    font-size:14px;
    font-weight: bold;
    float: right;
    ul {        //Makes "nav ul {...}"
        list-style-type:none;
        li {    //Makes "nav ul li {...}"
        float: left;
        margin: 2px;   
        }
    }
}

// Use Combinator (&) to mix with parent:
a {
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}

// Results in
a { text-decoration: none; }
a:hover { text-decoration: underline; }
```


## Namespaces

```
// Namespacing for organizational grouping
#my-forms {
    .set-button {
        font-size: 14px;
        text-align: center;
    }
}

#submit-button {
    #my-forms > .set-button; //create variable inside #my-forms namespace
}
```

## Scoping
```
// Variables/Mixins are Scoped

@size: 24px;

#form {
    @size:18px;
    .button {
        font-size: @size; // 18px;
    }
}
```
##String Interpolation
```
// Can use Ruby/PHP style string insertion
@root: "/images/";

#form {
    background: url("@{root}background.jpg");
}
```
String Interploation
```
// Can use Ruby/PHP style string insertion

@root: "/images/";

#form {
    background:url("@{root}background.jpg");
    //  Becomes url("/images/background.jpg")
}
```
## Using JS
```
// Embed with back-quotes to execute JS
@root: "/images";
@app-root: `"@{root}".toUpperCase()`;

#form {
    // Becomes url("/IMAGES/back.jpg");
    backgroud: url("@{app-root}/back.jpg");
}
```

### Less is More:
* Less allows you to bring your developer head to design
* LESS improves reuse and readability
* LESS allows you to structure and modularize your designs
* LESS is more capable version of CSS

#SASS
* Dynamical Style Sheet Language (Syntactically Awesome StyleSheets)
* "Compiles" to CSS
* Introduces programming features to CSS
* SASS has two syntaxes:
### SASS and SCSS
```
/* SASS */
$baseFontSize: 14px;

#main
    h1
        font-size: $baseFontSize

/* SCSS */
$baseFontSize: 14px;

$main
{
    h1
    {
        font-size: $baseFontSize;
    }
}
```
Support on servers: ASP.NET, Node.js

### Variables
```
$myColor: #ffeedd;

$a: Black; //Color
$b: 4px;
$c: 1.0em;
$d: Helvetica, sans-serif;
$e: 1px #000 Solid 0 0; //Also Lists
```
### Operations
```
//Operations Just Work
font-size: 4px + 4; //8px
font-size: 20px * .8; //16px;
color: #FFF/4 //#404040;
width: (100% / 2) + 25%; //75%
```

### Color Functions

```
color: lighten($color, 10%);
color: darken($color, 10%);

color: sature($color, 10%);
color: desaturate($color, 10%);

color: fade_in($color, .1);
color: fade_out($color, .1);.3

color: invert($color);
color: complement($color);
```

### More Functions
```
$quoted: quote($sometext);
$unquoted: unquote($sometext);

$value: if(true, $color1, $color2);

$rnd: round(3.14);
$top: ceil(3.14);
$bot: floor(3.14);
$per: percentage(.14);
```

### String Interpolation
```
// Can use Ruby/PHP style string insertion
$root: "/images/";

#form {
    background: url("#{$root}background.jpg");
    // Becomes url("/images/background.jpg");
}

//Also
$name: "my-class";
.#{$name} {
    color: Blue;
}
```

### Rules in SASS
* Allows you to structure rules in a logical way:
    1. Hierarchies imply the cascading/specificity
    2. SASS then deconstructs it into CSS for you

```
/* CSS */
nav {
    font-size: 14px;
    font-weight: bold;
    float: right;
}
nav ul {
    list-style-type: none;
}
nav ul li {
    float: left;
    margin: 2px;
}

//SCSS
nav {
    font-size: 14px;
    font-weight: bold;
    float: right;
    ul {        // Makes "nav ul {...}"
        list-style-type: none;
        li {    // Makes "nav ul li {...}"
            float: left;
            margin: 2px;
        }
    }
}


//Use Parent Selector (&) to mix with parent:
a {
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}

// Results in
a { text-decoration: none; }
a:hover { text-decoration: underline;}



// Nested properties too
. button {
    font: {
        family: Verdana, Helvetica, sans-serif;
        size: 14px;
    }
}

// Results in
.button {
    font-family: Verdana, Helvetica, sans-serif;
    font-size: 14px;
}
```

### Directives
* Operations on the CSS:
        @import,
        @extend,
        @mixin,
        @function

### @import
```
@import "foo.css";  // Emits CSS import
                    //  @import url(foo.css);
@import "foo.scss"; // Embeds in result
@import "foo";      // Also Embeds

// Nested Import too
#main {
    @import "colors";
}
```

### @extend
```
//Inherits Styles from another
.button {
    color: Black;
}
.submit-button {
    @extend .button;
    border: 1px Black solid;
}
// Emits
.submit-button { border: 1px solid Black;}
.button, .submit-button {
    color: Black;
}
//multiple inheritance too
.submit-button {
    @extend a:hover; // inherit from any rule
    @extend .button; // multiple rules
    border: 1px Black solid;
}
```
### @mixin
* Repeatable sections
    1. Feel like functions
    2. User insert one or more that one name/value pair
    3. Can accept parameters, defaults and overloads
```
@mixin font-large {
    font: {
        size: 14px;
        family: san-serif;
        weight: bold;
    }
}

#form {
    @nclude font-large;
}

// Parameters
@mixin rounded-corners-all($size) {
    border-radius: $size;
    -webkit-border-radius: $size;
    -moz-border-radius: $size;
}
#form {
    @include rounded-corners-all(5px);
}

// Default Parameter Value
@mixin rounded-corners-all($size: 5px) {
    border-radius: $size;
    -webkit-border-radius: $size;
    -moz-border-radius: $size;
}
#form {
    @include rounded-corners-all;   // Optional
}
```
### @function
```
// Value calculations
$app-width: 900px;
@function column-width($cols) {
    @return ($app-width / $cols) - ($cols * 5px);
}

.col2 {
    width: column-width(2);
}

.col3 {
    width: column-width(3);
}
```
### Control Directives
* For Control flow:
        @if,
        @for,
        @each,
        @while

### @if        
```
h1 {
    @if $size > 14px {
        color: Blue;
    }
    @else if $size < 14px {
        color: Red;
    }
    @else {
        color: Green;
    }
}
```
### @for
```
@page-width: 1000px;

@for $col from 1 through 4 {
    .col#{$col} {
        width: $page-width / $col;
    }
}
```
### @each and @while
```
@each $item in first, seconf, third, fourth {
    .#{$item} {
        background-url: url(/images/#{$item}.jpg);
    }
}

$i: 1;
@while $i < 5 {
    h#{$i} {
        font-size: $i * 4px;
        $i: $i + 1;
    }
}
```
# Summary
* Staying SASSy
* SASS allows you to bring your developer head to design
* SASS improves reuse and readability
* SASS allows you to structure and modularize your designs
* SASS enables control flow, templating and more to your styling

