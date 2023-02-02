# Notes
---
These are variables imported from the editor and vertex shader.

# Variables
---

## position : vec3
Vertex position in world space.

## uv : vec2
Vertex UV coordinates.

## normal : vec3
Vertex normal in world space. Same as [worldPosition](./variables.md#worldPosition).xyz

## tangent : vec3
Vertex tangent.

## worldPosition : vec4
Vertex position in world space as vec4. `worldPosition = modelMatrix * vec4(position(object space), 1.0);`

## modelMatrix : mat4
The transformation matrix.

## viewMatrix : mat4
The camera matrix.

## projectionMatrix : mat4
The projection matrix. Near planes, far planes, and FOV may vary, but the aspect ratio is always 16.0f / 9.0f.

## eye : vec3
The camera position.

## gameObject : [GameObject](./data-types/GameObject.md)
The [GameObject](./data-types/GameObject.md) being rendered.

## screen : sampler2D
Fully rendered image of screen.

## time : float
Time in seconds since the start of the game.

## deltaTime : float
Time in seconds since the last frame.

## resolution : vec2
Screen resolution which is always `vec2(1920, 1080)`.

## nearPlane : float
Near plane of the camera.

## farPlane : float
Far plane of the camera.

## viewDirection : vec3
View direction of the camera between 0 and 1.

## lightCount : int
Number of lights in the scene.

## lights : [Light](./data-types/Light.md)[]
All the lights in the scene.

## PI : float
`const float PI = 3.1415926535897932384626433832795;`

## PHI : float
`const float PHI = (1.0 + sqrt(5.0)) / 2.0;`

## PI180 : float
`const float PI180 = float(PI / 180.0)`

## myt : mat2
`const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);`

## mys : vec2
`const vec2 mys = vec2(1e4, 1e6);`