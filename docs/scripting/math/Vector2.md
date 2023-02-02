# Vector2
# Properties
---

x (float)   
y (float)

   

# Constructor
---
[Vector2](./Vector2.md)(x : float, y : float)

   

# Operations
---

+, -, *, /, +=, -=, *=, /=, ==, !=

   

# Methods
---

## **array()**
Returns the vector as an array.
   
**Returns: [x, y]**
   
**Return Type: Array[2]**

## **length()**
Returns the length of the vector. Simply, the square root of the sum of the squares of the components.
   
**Returns: `sqrt(x^2 + y^2)`**
   
**Return Type: float**

## **normalize()**
Returns the vector / length of the vector. Making the value between 0 and 1.
   
**Returns: `Vector2(x / length, y / length)`**
   
**Return Type: [Vector2](./Vector2.md)**
vector`
## **lerp(other : [Vector2](./Vector2.md), t : float)**
Returns the transition between two vectors by t. t is between 0 and 1.
   
**Returns: `Vector2(x + (other.x - x) * t, y + (other.y - y) * t)`**
   
**Return Type: [Vector2](./Vector2.md)**

## **dot(other : [Vector2](./Vector2.md))**
Returns the dot product of two vectors. The dot product is the sum of the products of the components.
   
**Returns: `x * other.x + y * other.y`**
   
**Return Type: float**

## **distance(other : [Vector2](./Vector2.md))**
Returns the distance between two vectors.
   
**Returns: `sqrt((x - other.x)^2 + (y - other.y)^2)`**
   
**Return Type: float**

## **cross(other : [Vector2](./Vector2.md))**
Returns the cross product of two vectors.
   
**Returns: `Vector2(x * other.y - y * other.x, y * other.x - x * other.y)`**
   
**Return Type: [Vector2](./Vector2.md)**

   

# Class Methods
---

## **zero()**
Returns a zero vector.
   
**Returns: `Vector2(0, 0, 0)`**
   
**Return Type: [Vector2](./Vector2.md)**

## **one()**
Returns a one vector.
   
**Returns: `Vector2(1, 1, 1)`**
   
**Return Type: [Vector2](./Vector2.md)**