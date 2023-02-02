# MeshRenderer
# Properties
---

cullFaces (bool)   
transparent (bool)   
castShadows (bool)

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **setCullFaces(cullFaces : bool)**
Defines whether the mesh back face is culled.

## **setTransparent(transparent : bool)**
Defines whether the mesh is transparent. And changes render index.

## **setCastShadows(castShadows : bool)**
Defines whether the mesh casts shadows.

## **changeRenderer(renderType : string)**
Changes the renderer type of the mesh renderer. Valid types include:   
- Unlit
- Lit