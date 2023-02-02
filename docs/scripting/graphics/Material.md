# Material
# Properties
---

mainTex (string)   
normalTex (string)   
specularTex (string)   
specularLighting (bool)   
useNormalMap (bool)   
useSpecularMap (bool)   
useDisplacementMap (bool)   
reflectivity (float)   
shineDamper (float)   
normalMapStrength (float)   
displacementMapStrength (float)   
color ([Color](./Color.md))

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **setMainTex(mainTex : string)**
Sets the main texture of the material.

## **setNormalTex(normalTex : string)**
Sets the normal map of the material.

## **setSpecularTex(specularTex : string)**
Sets the specular map of the material.

## **setDisplacementTex(displacementMap : string)**
Sets the displacement map of the material.

## **setSpecularLighting(specularLighting : bool)**
Sets whether or not the material should use specular lighting.

## **setUseNormalMap(useNormalMap : bool)**
Sets whether or not the material should use a normal map.

## **setUseSpecularMap(useSpecularMap : bool)**
Sets whether or not the material should use a specular map.

## **setUseDisplacementMap(useDisplacementMap : bool)**
Sets whether or not the material should use a displacement map.

## **setReflectivity(reflectivity : float)**
Sets the reflectivity of the material.

## **setShineDamper(shineDamper : float)**
Sets the shine damper of the material.

## **setNormalMapStrength(strength : float)**
Sets the strength of the normal map, if one is applied.

## **setDisplacementMapStrength(strength : float)**
Sets the strength of the displcaement map, if one is applied.

## **setColor(color : [Color](./Color.md))**
Sets the color of the material.