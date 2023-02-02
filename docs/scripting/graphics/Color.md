# Color
# Properties
---

r (float)  
g (float)  
b (float)  
a (float)  

   

# Constructor
---
[Color](./Color.md)(r : float, g : float, b : float, a = 1.0 : float)
   
a is an optional field and will be set to 1.0 by default.

   
   

# Methods
---

## **lerp(other : [Color](./Color.md), t : float)**
Interpolates between two colors by t. t is clamped between 0 and 1.
   
   
**Returns: Interpolated [Color](./Color.md)**
   
**Return Type: [Color](./Color.md)**