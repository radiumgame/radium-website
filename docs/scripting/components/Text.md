# Text
# Properties
---

position ([Vector2](../math/Vector2.md))   
fontSize (int)   
textAlign (string)   
text (string)   
fontBlur (float)   
color ([Color](../graphics/Color.md))   
layer (int)

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **setPosition(position : [Vector2](../math/Vector2.md))**
Sets the position of the text. The framebuffer is 1920 x 1080 pixels. The position is relative to the top left corner of the framebuffer.

## **setFontSize(fontSize : int)**
Sets the font size of the text.

## **setTextAlign(textAlign : string)**
Sets the text alignment of the text. Valid alignments include:   
- Left
- Middle
- Right

## **setText(text : string)**
Sets the content of the text.

## **setFontBlur(fontBlur : float)**
Sets the blur of the text.

## **setColor(color : [Color](../graphics/Color.md))**
Sets the color of the text.

## **setLayer(layer : int)**
Sets the layer of the text. The layer is used to determine the order of the text in the UI.