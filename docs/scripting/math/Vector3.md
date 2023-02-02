# Vector3
# Properties
---

x (float)   
y (float)   
z (float)

   

# Constructor
---
[Vector3](./Vector3.md)(x : float, y : float, z : float)

   

# Operations
---

+, -, *, /, +=, -=, *=, /=, ==, !=

   

# Methods
---

## **array()**
Returns the vector as an array.
   
**Returns: [x, y, z]**
   
**Return Type: Array[3]**

## **length()**
Returns the length of the vector. Simply, the square root of the sum of the squares of the components.
   
**Returns: `sqrt(x^2 + y^2 + z^2)`**
   
**Return Type: float**

## **normalize()**
Returns the vector / length of the vector. Making the value between 0 and 1.
   
**Returns: `Vector3(x / length, y / length, z / length)`**
   
**Return Type: [Vector3](./Vector3.md)**
vector`
## **lerp(other : [Vector3](./Vector3.md), t : float)**
Returns the transition between two vectors by t. t is between 0 and 1.
   
**Returns: `Vector3(x + (other.x - x) * t, y + (other.y - y) * t, z + (other.z - z) * t)`**
   
**Return Type: [Vector3](./Vector3.md)**

## **dot(other : [Vector3](./Vector3.md))**
Returns the dot product of two vectors. The dot product is the sum of the products of the components.
   
**Returns: `x * other.x + y * other.y + z * other.z`**
   
**Return Type: float**

## **distance(other : [Vector3](./Vector3.md))**
Returns the distance between two vectors.
   
**Returns: `sqrt((x - other.x)^2 + (y - other.y)^2 + (z - other.z)^2)`**
   
**Return Type: float**

## **cross(other : [Vector3](./Vector3.md))**
Returns the cross product of two vectors.
   
**Returns: `Vector3(y * other.z - z * other.y, z * other.x - x * other.z, x * other.y - y * other.x)`**
   
**Return Type: [Vector3](./Vector3.md)**

   

# Class Methods
---

## **zero()**
Returns a zero vector.
   
**Returns: `Vector3(0, 0, 0)`**
   
**Return Type: [Vector3](./Vector3.md)**

## **one()**
Returns a one vector.
   
**Returns: `Vector3(1, 1, 1)`**
   
**Return Type: [Vector3](./Vector3.md)**