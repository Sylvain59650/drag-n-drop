/* global qsi isDef */

var DND = {
  num: 0
};

DND.allowDrop = function(ev) {
  ev.preventDefault();
  DND.action = "none";
  var accept = true;
  if (isDef(DND.srcElement) && DND.srcElement.draggable === true) {
    if (DND.allowDropCallback) {
      accept = DND.allowDropCallback(ev);
    }
    if (accept) {
      if (ev.ctrlKey) {
        DND.action = "copy";
      } else {
        DND.action = "move";
      }
    }
  }
  ev.dataTransfer.dropEffect = DND.action;
  return accept;
}

DND.nextId = function(prefix) {
  DND.num++;
  return (prefix || "i_") + DND.num;
}

DND.drag = function(ev) {
  var src = ev.target;
  while (src.attr("draggable") !== "true") {
    src = src.parentElement;
  }
  if (src.id === "") {
    src.id = DND.nextId();
  }
  ev.dataTransfer.setData("text", src.id);
  DND.srcElement = src;
  document.trigger("DND.drag", { src: DND.srcElement });
}

DND.cloneNode = function(elem) {
  var clone = document.importNode(elem, true);
  clone.id = DND.nextId();
  return clone;
}

DND.drop = function(ev) {
  ev.preventDefault();
  if (DND.action === "none") {
    return;
  }
  var id = ev.dataTransfer.getData("text");
  var src = qsi(id);
  // while (src.attr("draggable") !== "true") {
  //   src = src.parentElement;
  // }
  var target = ev.target;

  while (target.attr("droppable") !== "true" && target.attr("draggable") !== "true") {
    target = target.parentElement;
  }


  if (target.attr("droppable")) {
    if (isDef(target.dnd)) {
      if (target.dnd.remove) {
        DND.action = "remove";
      }
    }
    if (DND.action === "remove") {
      src.parentElement.removeChild(src);
    } else if (DND.action === "copy") {
      src = DND.cloneNode(src);
      target.beforeEnd(src);
    } else if (DND.action === "move") {
      target.beforeEnd(src);
    }

  } else {
    if (DND.action === "copy") {
      src = DND.cloneNode(src);
    }
    target.beforeBegin(src);
  }
  document.trigger("DND.drop", { src: src, target: target });
}

DND.removeDraggableChild = function(child) {
  child.attr("draggable", "false");
}

DND.addDraggableChild = function(child) {
  child.attr("draggable", "true");
  child.on("dragstart", DND.drag);
}

DND.makeDraggable = function(elem) {
  for (var i = 0; i < elem.children.length; i++) {
    var child = elem.children[i];
    child.attr("draggable", "true");
    child.on("dragstart", DND.drag);
  }
}

DND.makeDroppable = function(elem, options) {
  elem.on("drop", DND.drop);
  elem.attr("droppable", "true");
  if (isDef(options)) {
    elem.dnd = options;
  }
  elem.on("dragover", DND.allowDrop);
}