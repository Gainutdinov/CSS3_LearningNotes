# Responsive Websites With Bootstrap 3

### Introduction

### Responsive Patterns

### Navigation

### Responsive Images and Video

### Scrolling Features

### Animated Elements

----------------------------

### Responsive Patterns

#### Introduction

 * Mostly Fluid
 * Column Drop
 * Layout Shifter
 * Tiny Tweaks

#### Bootstrap's Grid Classes

```
.container or .container-fluid
    .row /* 12 col only */
```

| Name                        | ABBR | Resolution|
|------------------------------|----|----------|
| Extra-small devices (phones) | xs | <768px   |
| Small devices (tablets)      | sm | >=768px  |
| Meduim devices (desktops)    | md | >=992px  |
| Large devices (desktops))    | lg | >=1200px |

Bootstrap technology means - mobile 1st


#### Summary

* Mobile 1st
* Bootstrap's 12 column grid system
* Mostly Fluid Pattern (Maintin three column layout)
* Column Drop Pattern (pattern allowed us to start with a 3 column layout, then move down to a 2 col. layout on a smaller device size, and finally down to a single-column layout on the smallest device size)
* Layout Shifter Pattern (pattern was used to turn a single column of icons into a horizontal row of icons for a smaller device size. This pattern is very flexible and allows the web designer to place any element anywhere for any device size)
* Content Reflow Pattern ( pattern we used media queries and changed CSS display property of several items. This allowed us to reposition image titles based upon the device size)
* Same-sized columns for web page layout ( the need to make all columns the same height, we solve this without JS by modifying the display property of several page elements)


### Responsive Navigation

#### Introduction

* Bootstrap 3's Navbar
    * Styling
    * Add a logo image
    * Responsive
* Animating the Navbar
    * Based on scrolling position of page
    * Uses CSS transition property for animations
    * Verify on older browsers

#### Bootstrap's Navbar Classes

* Classes:
    * Navbar-nav
    * navbar-header
    * navbar-brand
    * navbar-toggle

#### Summary

* Used Bootstrap 3's Navbar
* Worked with Navbar classes
    * .navbar-right (to align our links to the right side)
    * .navbar-inverse (to swithc from the default light styling over to dark styling)
    * .navbar-fixed-top (to fix our navbar in the top of the screen)
* Inserted an image in the brand area
* Animated the Navbar based on scroll position
    * Used gihub project cbpAnimatedHeader
    * Also used classie.js
    * CSS transitions used for animating padding and opacity

### Responsive Images and Video

#### Introduction

* Bootstrap's responsive image class, img-responsive
* Media queries and responsive images
* Styling responsive images with Bootstrap and CSS
* Full screen background images
* Static background images
* Full screen background videos, from video files or YouTube

#### Summary

* Bootstrap's responsive image class
    * img-responsive
* Bootstrap image styling
    * img-rounded, img-circle, img-thumbnail
* Media queries to change responsivness (we saw how make our logo non-responsive for larger devices, and responsive for smaller devices, using a media query)
* Full screen image as wallpaper (we added a wallpaper image to the top of our web page using standard css properties, PSB)
    * background-size: cover
    * background-position
* Fixed background images
    * background-attachment: fixed
    * background-attachment: scroll (for smaller devices)
* Video wallpaper
    * gihub.com/formstone/Wallpaper (used to add a video to our webpage)

### Scrolling Features

#### Introduction

* Add page content
* Decorate the page top
* Bootstrap's Scrollspy
* Smooth scrolling
* Parallax scrolling

##### Summary

* Added page content and decorated page top
* Integrated Bootstrap's Scrollspy component
* Smooth scrolling
    * used jQuery Easing Plugin: http://gsgd.co.uk/sandbox/jquery/easing/
    * jQuery's animate() function, setting scrollTop property
* Parallax scrolling
    * Used Stellar.js
    * URL: http://markdalgleish.com/projects/stellar.js/

### Animated Page Elements

#### Introduction

* Animate elements into view
* Bootstrrap's image courusel component
* An image gallery: nanoGallery






