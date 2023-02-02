# Image
# Properties
---

position ([Vector2](../math/Vector2.md))   
size ([Vector2](../math/Vector2.md))   
color ([Color](../graphics/Color.md))   
texture (string)   
layer (int)

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **setPosition(position : [Vector2](../math/Vector2.md))**
Sets the position of the sprite. The framebuffer is 1920 x 1080 pixels. The position is relative to the top left corner of the framebuffer.

## **setSize(size : [Vector2](../math/Vector2.md))**
Sets the size of the sprite. The framebuffer is 1920 x 1080 pixels. The size is relative to this aspect ratio.

## **setColor(color : Color)**
Sets the color of the sprite.

## **setTexture(texture : string)**
Sets the texture of the sprite. The path begins in the Assets/ folder.

## **setLayer(layer : int)**
Sets the layer of the sprite. The layer is used to determine the order of the sprite in the UI.