# Responsive Web Design (RWD)

## RWD 101
### A Fluid Foundation

* Goal is to make web page is more not fixed but fluid based not on pixel sizes but on %
FIXED-WIDHT
```
.span-1 {
    width: 90px;
}
```
FLUID
```
.span-1 {
    widht: 30%;
}
```
_90 / 300 = .3_

_target / context = %_


### __IE & Rounding__

IE behaves differently in comparison with modern browsers, mainly modern browsers round to less.

### __Flexible Content__

Once we have a grid which is based on proportions, the content we put in that grid must also respond.


### __Media Queries__

When our content and our design are no longer working in harmony, we need to make a larger shift in layout

Media Queries
```
<link media="(min-width: 30em)" ...
<link media="screen and (min-width: 30em)" ...

@media (min-width: 30em) { ... }
@media screen and (min-width: 30em) { ... }
```
Media Types
```
<link media="(min-width: 30em)" ...
<link media="screen and (min-width: 30em)" ...

@media (min-width: 30em) { ... }
@media print (min-width: 30em) { ... }
```
Media Features
```
<link media="(min-width: 30em)" ...
<link media="screen and (min-width: 30em)" ...

@media (orientation: portrait) { ... }
@media screen and (color) { ... }
```
Media Queries
```
@media (min-width: 600px) {
    /* Styles for 600px and up here */
}

@media (max-width: 38em) {
    /* styles for 38 em and down here */
}
```
Large Resolution first (Subtractive CSS)
```
/* Large Resolution First CSS file Structure */
/* largest resolution layouts here */
@media (max-width: 62em) {
    /* styles for and down here */
}
@media (max-width: 40em) {
    /* styles for 40em and down here */
}
```
Small Resolution first (Additive CSS)
```
/* Small Resolution First CSS file Structure */
/* smallest resolution layouts here */
@media (max-width: 62em) {
    /* styles for and up here */
}
@media (max-width: 53em) {
    /* styles for 53em and up here */
}
```

Large Rez First
* Easy support for old IE
* Small devices load all assets

Small Rez First
* More logical (build up vs tear down)
* Old IE is tricky


## RWD Process

__A Better Midnset__

Deliverables that best serve the organization and prioritization of content and function across multiple resolutions.


## Applying RWD Styles

### The Basic Structure

HTML (index.html)

```
<head>
    <meta name=”viewport” content=”width=device-­‐width, initial-­‐scale=1.0”>
        <link rel=”stylesheet” href=”c/base.css”>
        <link rel=”stylesheet” media=”not print” href=”c/mq.css”>
        <!-­‐-­‐[if    (lte    IE    8)&(!IEMobile)] this is just FYI no exact info>
        <link rel=”stylesheet” media=”screen” href=”c/nomq.css”>
        <![endif]-­‐-­‐>
</head>
```
SCSS (base.css)
```
@-­‐ms-­‐viewport {
    width: device-­‐width;
}

@import “reset”;
@import “smallest”;

@media print {
    @import “print”;
}
```
SCSS (mq.css)
``` 
@media (min-­‐width : 30em) {
    @include “min-­‐width-­‐30em”;
}

@media (min-­‐width : 60em) {
    @include “min-­‐width-­‐60em”;
}
```
SCSS for older version of IE (nomq.css)
```
@include "min-width-30em";
@include "min-width-60em";
```

### Implementing RWD Styles

### Using EM-Based Media Queries

* A more proportional measurement
* Layout adjusts based on font-size
* Adheres more to the pronciples of RWD

### RWD Patterns: Navigation

### RWD Patterns: Table and Images

### RWD Patterns: Off-Canvas Layout


## RWD Retrofitting

### From Fixed to Fluid

### Retrofitting Twitter.com

Main idea was to tranfrom all DOM objects from px sizes to percentages (%)

target / context = result

302 / 837 = 36.08%
```
* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
```

### Retrofitting Tables

### Retrofitting Images

Small Resolution First, Capped

```
<html class=”no-­‐js”>

<head>
    <script src=”/js/modernizr.js”></script>
    <script>
        yepnope({
            test: Modernizr.mq(‘(min - ­‐width: 0 px)’),
            yep: ‘base.css’,
            nope: ‘original.css’
        });
    </script>
    <noscript>
        <link rel="stylesheet" href="original.css">
    </noscript>
</head>
```
Code below is show exact __Small Resolution First__ principle
```
@media (max-width: 979px) {
    @import "small";
}
@media (min-width: 661px) and (max-width: 979px) {
    @import "medium";
}
@media (min-width: 980px) {
    @import "original";
}
```

### Client Interaction






