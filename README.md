 # drag-n-drop
 
 <div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/drag-n-drop.png?branch=master)](https://travis-ci.org/Sylvain59650/drag-n-drop)
![version](https://img.shields.io/npm/v/drag-n-drop.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/drag-n-drop.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/drag-n-drop.svg)
![minified](https://img.shields.io/bundlephobia/min/drag-n-drop.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![license](https://img.shields.io/npm/l/drag-n-drop.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/drag-n-drop.svg)](http://hits.dwyl.com/Sylvain59650/drag-n-drop)
</div>
 
 
 <div class="Note" style="color:orange;font-style:italic">
 
The lastest version of this document is available on [Github > drag-n-drop](https://github.com/Sylvain59650/drag-n-drop/blob/master/README.md)
</div>

## Installation

    npm install drag-n-drop --save

or

    yarn add drag-n-drop --save


## Prerequisites for browser

    <script src="node_modules/drag-n-drop/distrib/drag-n-drop.min.js"></script>

## Availables Operations

    - DND.makeDroppable(container) : create the container droppable, elements draggables can be drop on this zone. 
    - DND.makeDraggable(container) : declare all children of container as element draggable

## Specials Events
    - DND.drag : called when the drag operation start
    - DND.drop : called when the drop operation end


## usage 
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


**Note See all examples on github**