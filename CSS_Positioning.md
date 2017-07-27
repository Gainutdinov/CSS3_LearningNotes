###Css Positioning course

fixed positioning
```
.DummyContainer {
    background: #627da0;
    position: fixed; /* Fixed positioning ’fixes‘ the position of an element relative to the browser window. The element always stays fixed in place, even when scrolling. */
    top:150px;
    bottom:150px;
}
```
absolute positioning
```
.DummyContainer {
    background: #627da0;
    position: absolute;
    bottom:50px;
}
/*Absolute positioning takes an element out of document flow, meaning the browser acts as if the element has no width and height, and the other elements on the page move up as if it was never there. The position of the element is then fixed relative to the top level container, or the closest parent with a set positioning.*/
```
relative positioning
```
.DummyContainer {
    background: #627da0;
    position: relative;
    bottom:50px;
}
/*Relative positioning sets the position of an element relative to its original position. The element's original width and height is retained in document flow and other elements behave as if it was in its original position.*/
```
static positioning
```
.blueBox {
    background: #627da0;
    position: static;
    top: 100px;
}
Static positioning is the default behavior of elements. Inherited positioning tells an element to inherit its positioning from its parent element. Z-index controls the vertical stacking order of elements. Elements must have a set positioning for z-index to work.
Static is default behaviour of the element positioning and don't respond to any top, bottom and etc. styles.
```
inherit positioning
```
.blueBox {
    background: #627da0;
    position: inherit;
    top: 100px;
}
Inherited positioning tells an element to inherit its positioning from its parent element.
Static is default behaviour of the element positioning and don't respond to any top, bottom and etc. styles.
```
z-index positioning
```
.blueBox {
    background: #627da0;
    z-index:2;
    top: 100px;
}
default value:1;
depends from selection complexity
Z-index controls the vertical stacking order of elements. Elements must have a set positioning for z-index to work.
can be negative (-1,-2..etc)
```
float (poplavok) positioning
```
.blueBox {
    background: #627da0;
    float: left;
    top: 100px;
}
Floating left removes an element from normal document flow. It then takes that element and pushes it to the far left as possible. Other elements will move up as far as possible to flow around the element and take its orginal space.
.blueBox {
    background: #627da0;
    float: right;
    top: 100px;
}
Floating right removes an element from normal document flow. It then pushes the element to the far right as possible. Other elements will move up as far as possible to flow around the element and take its orginal space.
```

float (poplavok) positioning for multiple elements
```
.blueBox {
    background: #627da0;
    float: left;
    top: 100px;
}
Floating left removes an element from normal document flow. It then takes that element and pushes it to the far left as possible. Other elements will move up as far as possible to flow around the element and take its orginal space.
.blueBox {
    background: #627da0;
    float: right;
    top: 100px;
}
Floating positions an element according to document flow, and then moves it to the far left or right as possible. Elements following a floated element will move up as far as possible.
```

center elements
```
.blueBox {
    margin: 0px auto; /* top,bottom margins= 0px; left,right margins = auto  */
}
One of the most commonly asked questions is how to center elements since there is no option to float center. But by thinking carefully about how elements behave, we can use positioning to achieve the same result.
```