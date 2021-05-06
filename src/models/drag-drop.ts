// drag and drop interface

// ts feature, not present in JS
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }
  
  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }

  // u can put classes, constants, any code in namespace
  // all this exists inside namespace only
  // unless exported (use export keyword)
}