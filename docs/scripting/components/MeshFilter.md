# MeshFilter
# Properties
---

material ([Material](../graphics/Material.md))   
mesh ([Mesh](../graphics/Mesh.md))

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **updateMaterial()**
Updates the materials properties.

## **setMaterial(material : [Material](../graphics/Material.md))**
Sets the material of the mesh.

## **setMesh(mesh : [Mesh](../graphics/Mesh.md))**
Sets the mesh of the mesh filter.

## **setMesh(mesh : string)**
Sets the mesh primitive of the mesh filter. Anything other than the valid types will be set to an empty mesh. Valid types include:   
- Cube
- Sphere
- Cone
- Torus