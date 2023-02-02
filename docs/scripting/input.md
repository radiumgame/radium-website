# Input
# Notes
---
This class cannot be created. Do not instantiate, will throw an error.

# Class Methods
---

## **isKeyDown(key : string)**
Tests to see if a key on the keyboard is down. Valid keys are:

- A
- B
- C
- D
- E
- F
- G
- H
- I
- J
- K
- L
- M
- N
- O
- P
- Q
- R
- S
- T
- U
- V
- W
- X
- Y
- Z
- F1
- F2
- F3
- F4
- F5
- F6
- F7
- F8
- F9
- F10
- F11
- F12
- Tab
- CapsLock
- LeftShift
- LeftCtrl
- LeftAlt
- Space
- RightAlt
- RightCtrl
- RightShift
- Enter
- Slash
- BackSlash
- Escape
- Comma
- Period
- SemiColon
- Insert
- Home
- PageUp
- Delete
- End
- PageDown
- Backspace
- ArrowUp
- ArrowLeft
- ArrowDown
- ArrowRight
- Number1
- Number2
- Number3
- Number4
- Number5
- Number6
- Number7
- Number8
- Number9
- Minus
- Equal

**Returns: If key is down**
   
**Return Type: bool**

## **isMouseDown(button : string)**
Tests to see if a mouse button is down. Valid buttons are:
- left
- right
- middle

**Returns: If button is down**
   
**Return Type: bool**

## **isMouseReleased(button : string)**
Tests to see if a mouse button has been released. Valid buttons are:
- left
- right
- middle

**Returns: If button has been released**
   
**Return Type: bool**

## **isMousePressed(button : string)**
Tests to see if a mouse button has been pressed. Valid buttons are:
- left
- right
- middle

**Returns: If button has been pressed**
   
**Return Type: bool**

## **getMousePosition()**
Returns the mouse position compared to window. Will use editor window as window, not viewport if in editor.

**Returns: Mouse position**
   
**Return Type: [Vector2](./math/Vector2.md)

## **getMousePositionX()**
Returns the mouse positions x coordinate compared to window. Will use editor window as window, not viewport if in editor.

**Returns: Mouse position x**
   
**Return Type: float**

## **getMousePositionY()**
Returns the mouse positions y coordinate compared to window. Will use editor window as window, not viewport if in editor.

**Returns: Mouse position y**
   
**Return Type: float**

## **getMouseDelta()**
Returns the distance the mouse has moved since last frame.

**Returns: Mouse delta**
   
**Return Type: [Vector2](./math/Vector2.md)**

## **getMouseDeltaX()**
Returns the distance the mouse has moved since last frame on the x axis.

**Returns: Mouse delta x**
   
**Return Type: float**

## **getMouseDeltaY()**
Returns the distance the mouse has moved since last frame on the y axis.

**Returns: Mouse delta y**
   
**Return Type: float**

## **showMouse()**
Shows the mouse if hidden

## **hideMouse()**
Hides the mouse from view and will not let it leave the window.