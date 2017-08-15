## __CSS3 In-Depth__

## CSS: from Knowledgable to Ninja

### Introduction

* Slides are here estelle.github.com/CSS-Workshop

### Basic Selectors, Relational Selectors

* Source  http://estelle.github.io/selectors/#slide1

```
ul li,
ol li
```

descendant selector matches nested <li>s 
```
ol > li
```

child selector matches < li >s in < ol > but not nested < ul >

```
li.hasaclass + li
```

adjacent sibling 

```
li.hasaclass ~ li
```

general sibling selector matches later siblings, but not nested. 

### Attribute Selectors

```
img[alt] {}
```

< img src="image.jpg" __alt="accessible"__ >

```
input form[type] { }
```

< input __type__=date >

```
E[attr]
```

Element E that has the attribute attr with any value.

```
E[attr="val"]
```
Element E that has the attribute attr with the exact, case-sensitive if attribute is case sensitive, value val.

```
E[attr|=val]
```

Element E whose attribute attr has a value val or begins with val- ("val" plus "-").

__p[lang|="en"]{/* < p lang="en-us">  < p lang="en-uk" > */ }__

```
E[attr~=val]
```

Element E whose attribute attr has within its value the space-separated full word val.

### UI Pseudo-Classes

* http://estelle.github.io/selectors/#slide22

### Structural UI Pseudo-Classes

* http://estelle.github.io/selectors/#slide27

### Demo: Structural UI Pseudo-Classes

* http://estelle.github.io/selectors/#slide32

### Navigation and Empty Pseudo-Classes

* http://estelle.github.io/selectors/#slide37

### Other Pseudo-Classes

* http://estelle.github.io/selectors/#slide40

### Pseudo-Elements

* http://estelle.github.io/selectors/#slide53

##  Understanding Specificity

* http://estelle.github.io/selectors/#slide48

## Generated Content

### Generated Content

* http://estelle.github.io/CSS-Workshop/part_03_generated.html#slide5

### CSS3 In-Depth

* http://estelle.github.io/CSS-Workshop/part_03_generated.html#slide9

### Use-Cases for Generated Content

* http://estelle.github.io/CSS-Workshop/part_03_generated.html#slide12

### Generated Content Example by Chris Coyer

* http://estelle.github.io/CSS-Workshop/part_03_generated.html#slide17

### Generated Content Code Example

* http://estelle.github.io/CSS-Workshop/part_03_generated.html#slide19

## Media Queries

### Introduction to Media Queries

* http://estelle.github.io/CSS-Workshop/part_04_media.html#slide3

### The Viewport

* http://estelle.github.io/CSS-Workshop/part_04_media.html#slide9

* https://mediaqueri.es/

## Debugging

### Debugging in the Browser

* http://estelle.github.io/CSS-Workshop/part_04_media.html#slide16

### Debugging Mobile Browsers

* http://estelle.github.io/CSS-Workshop/part_04_media.html#slide16

## Colors

### CSS Color Formats

* http://estelle.github.io/CSS-Workshop/part_06_colors.html#slide4

### Transparency and Color Tips

* http://estelle.github.io/CSS-Workshop/part_06_colors.html#slide8

## Fonts, Shadows and Text Effects

### CSS Fonts

* http://estelle.github.io/CSS-Workshop/part_07_fonts.html#slide4

### Font Services

* http://estelle.github.io/CSS-Workshop/part_07_fonts.html#slide7

### Text Shadows and Box Shadows

* http://estelle.github.io/CSS-Workshop/part_07_fonts.html#slide11

## Borders and Backgrounds

### Background Images

*


