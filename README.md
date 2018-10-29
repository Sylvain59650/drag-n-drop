 # htmlelement-dnd
 
  <div style="display:inline">
    <a target="_blank" title="build" href="https://travis-ci.org/Sylvain59650/htmlelement-dnd"><img src="https://travis-ci.org/Sylvain59650/htmlelement-dnd.png?branch=master" /></a>
    <a target="_blank" title="version" href="https://www.npmjs.com/package/htmlelement-dnd"><img src="https://img.shields.io/npm/v/htmlelement-dnd.svg" /></a>
    <a target="_blank" title="package" href="https://github.com/Sylvain59650/htmlelement-dnd"><img src="https://img.shields.io/github/package-json/v/Sylvain59650/htmlelement-dnd.svg" /></a>
    <a target="_blank" title="dependencies" href="https://david-dm.org/Sylvain59650/htmlelement-dnd"><img src="https://img.shields.io/david/Sylvain59650/htmlelement-dnd.svg" /></a>
    <a target="_blank" title="dependencies graph" href="http://npm.anvaka.com/#/view/2d/htmlelement-dnd"><img src="https://img.shields.io/badge/dependencies-graph-blue.svg" /></a>
    <img src="https://img.shields.io/bundlephobia/min/htmlelement-dnd.svg" />
    <img src="https://img.shields.io/badge/eslint-ok-blue.svg" />
    <a target="_blank" title="tests" href="https://sylvain59650.github.io/htmlelement-dnd/"><img src="https://img.shields.io/badge/tests-passing-brightgreen.svg" /></a>
    <a href="https://codeclimate.com/github/Sylvain59650/htmlelement-dnd/maintainability"><img src="https://api.codeclimate.com/v1/badges/0758766d5576a6488588/maintainability" /></a><a target="_blank" title="downloads" href="https://www.jsdelivr.com/package/npm/htmlelement-dnd"><img src="https://data.jsdelivr.com/v1/package/npm/htmlelement-dnd/badge" /></a>
    <a target="_blank" title="cdn" href="https://cdn.jsdelivr.net/npm/htmlelement-dnd/distrib/htmlelement-dnd.min.js"><img src="https://img.shields.io/badge/cdn-jsdeliv-black.svg" /></a>
    <img src="https://img.shields.io/npm/l/htmlelement-dnd.svg" />
    <img src="https://hits.dwyl.com/Sylvain59650/htmlelement-dnd.svg" />
  </div>
 
 
 <div class="Note" style="color:orange;font-style:italic">
 
The lastest version of this document is available on [Github > htmlelement-dnd](https://github.com/Sylvain59650/htmlelement-dnd/blob/master/README.md)
</div>

## Installation

    npm install htmlelement-dnd --save

or

    yarn add htmlelement-dnd --save

## Without installation
```html
    <script src="https://cdn.jsdelivr.net/npm/htmlelement-dnd/distrib/htmlelement-dnd.min.js"></script>
```

## Prerequisites for browser
```html
    <script src="node_modules/htmlelement-dnd/distrib/htmlelement-dnd.min.js"></script>
```

## Availables Operations

    - DND.makeDroppable(container,options) : create the container droppable, elements draggables can be drop on this zone. 
        - options : set remove property to true to remove element on drop 
    - DND.makeDraggable(container) : declare all children of container as element draggable

    - DND.allowDropCallback : function called to allow/disallow drop dragging element. Must return boolean.



## Specials Events
    - DND.drag : called when the drag operation start
    - DND.drop : called when the drop operation end


## example 
```html
    <div id="left">
        <div class="card"><img src="img/bear.jpg" /></div>
        <div class="card"><img src="img/cat.jpg" /></div>
        <div class="card"><img src="img/cerf.jpg" /></div>
        <div class="card"><img src="img/fish.png" /></div>
        <div class="card"><img src="img/horse.jpg" /></div>
        <div class="card"><img src="img/lion.jpg" /></div>
        <div class="card"><img src="img/monkey.jpg" /></div>
    </div>

    <div id="right">

    </div>

    <script>
        var ul1 = qsi("left");
        var ul2 = qsi("right");
        DND.makeDroppable(ul1);
        DND.makeDraggable(ul1);

        DND.makeDroppable(ul2);
        DND.makeDraggable(ul2);

        function trace(ev) {
        console.log(ev.type, ev.detail);
        }

        document.on("DND.drag", trace);
        document.on("DND.drop", trace);
    </script>
```


# Usage
  <a href="https://sylvain59650.github.io/htmlelement-dnd/">API &amp; DEMO</a>
