# General Utilities
# Methods
---

## **getDepth()**
Returns the depth unnormalized.
   
   
**Returns: Depth**
   
**Return Type: float**

## **getLinearDepth()**
Linearize the depth.
   
   
**Returns:**
``` glsl
float depth = getDepth();
return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - (depth * 2.0f - 1.0f) * (farPlane - nearPlane));
```
**Return Type: float**

## **getLogisticDepth(float steepness, float offset)**
**Returns:**
``` glsl
float depth = getLinearDepth();
return (1 / (1 + exp(-steepness * (depth - offset))));
```
**Return Type: float**

## **getLogisticDepth()**
**Returns: getLogisticDepth(0.5f, 5.0f)**
**Return Type: float**

## **screenspace()**
Returns the UV coordinates of the screen. E.g. the top left corner is (0, 1). OpenGL uses the bottom left corner as (0, 0).
   
   
**Returns: Screenspace Coordinate**
   
**Return Type: vec2**