# Math Utilities
# Methods
---

## **sind(float a)**
**Returns: `sin(a * PI180)`**
   
**Return Type: float**

## **cosd(float a)**
**Returns: `cos(a * PI180)`**
   
**Return Type: float**

## **tand(float a)**
**Returns: `tan(a * PI180)`**
   
**Return Type: float**

## **asind(float a)**
**Returns: `asin(a) * 180 / PI`**
   
**Return Type: float**

## **acosd(float a)**
**Returns: `acos(a) * 180 / PI`**
   
**Return Type: float**

## **atand(float a)**
**Returns: `atan(a) * 180 / PI`**
   
**Return Type: float**

## **lerp(float a, float b, float t)**
**Returns: `a + (b - a) * t`**
   
**Return Type: float**

## **clamp(float a, float min, float max)**
**Returns: `max(min(a, max), min)`**
   
**Return Type: float**

## **smoothstep(float edge1, float edge2, float x)**
**Returns:** 
``` glsl
float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0); 
return t * t * (3.0 - 2.0 * t);
```
**Return Type: float**

## **clamp01(float a)**
**Returns: `clamp(a, 0.0, 1.0)`**
   
**Return Type: float**

## **clamp01(vec2 a)**
**Returns: `vec2(clamp01(a.x), clamp01(a.y))`**
   
**Return Type: vec2**

## **step(float edge, float x)**
**Returns: `x < edge ? 0.0 : 1.0`**
   
**Return Type: float**

## **step(vec2 edge, vec2 x)**
**Returns: `vec2(step(edge.x, x.x), step(edge.y, x.y))`**
   
**Return Type: vec2**

## **step(vec3 edge, vec3 x)**
**Returns: `vec3(step(edge.x, x.x), step(edge.y, x.y), step(edge.z, x.z))`**
   
**Return Type: vec3**

## **random(float seed)**
**Returns: `fract(sin(seed) * 43758.5453123)`**
   
**Return Type: float**

## **random()**
**Returns: `random(time)`**
   
**Return Type: float**

## **random2D(vec2 seed)**
**Returns: `fract(sin(dot(seed.xy, vec2(12.9898, 78.233))) * 43758.5453)`**
   
**Return Type: float**

## **random3D(vec3 seed)**
**Returns: `fract(sin(dot(seed.xyz, vec3(12.9898, 78.233, 144.7272))) * 43758.5453)`**
   
**Return Type: float**

## **toObjectSpace(vec4 vec)**
**Returns: `(vec * inverse(modelMatrix)).xyz`**
   
**Return Type: vec3**

## **toObjectSpace(vec3 vec)**
**Returns: `(vec4(vec, 1.0) * inverse(modelMatrix)).xyz`**
   
**Return Type: vec3**

## **toWorldSpace(vec4 vec)**
**Returns: `modelMatrix * vec`**
   
**Return Type: vec4**

## **toWorldSpace(vec3 vec)**
**Returns: `modelMatrix * vec4(vec, 1.0)`**
   
**Return Type: vec4**

## **fresnel(float bias, float scale, float power)**
**Returns:**
``` glsl
vec3 i = normalize(worldPosition.xyz - eye);
return bias + scale * pow(1.0 + dot(i, normal), power);
```
**Return Type: float**

## **fresnel()**
**Returns: `fresnel(0.25, 0.5, 1.0)`**
   
**Return Type: float**

## **fresnel(float power)**
**Returns: `fresnel(0.25, 0.5, power)`**
   
**Return Type: float**

## **zeroToOne(float a)**
**Returns: `a / 2 + 0.5f`**
   
**Return Type: float**

## **hash(vec3 p)**
**Returns: `fract(sin(vec3(dot(p, vec3(1.0, 57.0, 113.0)), dot(p, vec3(57.0, 113.0, 1.0)), dot(p, vec3(113.0, 1.0, 57.0)))) * 43758.5453)`
   
**Return Type: vec3**

## **rhash(vec2 uv)**
**Returns:**
``` glsl
uv *= myt;
uv *= mys;
return fract(fract(uv / mys) * uv);
```
**Return Type: vec2**