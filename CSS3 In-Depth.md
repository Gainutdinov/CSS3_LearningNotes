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





