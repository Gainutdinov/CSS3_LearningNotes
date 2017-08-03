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


