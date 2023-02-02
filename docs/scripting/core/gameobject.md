# GameObject
# Properties
---

transform ([Transform](./transform.md))   
components ([Component](./component.md)[])   
name (string)   
id (string)   
group (string)   
active (bool)   
parent ([GameObject](./gameobject.md))   
destroyed (bool)

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **create()**
Instantiates the [GameObject](./gameobject.md) into the scene. When creating a new [GameObject](./gameobject.md), it is not automatically added to the scene, this must be done manually.
   
   
**Returns: self**
   
**Return Type: [GameObject](./gameobject.md)**

## **destroy()**
Removes the [GameObject](./gameobject.md) from the scene. This will make all the functions of the [GameObject](./gameobject.md) do nothing. The [GameObject](./gameobject.md) will exist in code, but not be able to do anything. Everything is set to `None` in the [GameObject](./gameobject.md).

## **setActive(active : bool)**
Sets the object state to be active or disabled. Components and scripts will not be updated when the object is disabled.

## **addComponent(component : [Component](./component.md))**
Adds a [Component](./component.md) to the [GameObject](./gameobject.md). This will also set the components `gameObject` property to the [GameObject](./gameobject.md).
   
   
**Returns: Created [Component](./component.md)**
   
**Return Type: [Component](./component.md)**

## **getComponent(componentName : string)**
Finds the [Component](./component.md) with the name `componentName` and returns it. For names of all components, visit the [Components](./component.md) page. May return `None` if the [Component](./component.md) is not found
   
   
**Returns: [Component](./component.md) Found**
   
**Return Type: [Component](./component.md)**

## **getScript(scriptName : string)**
Finds the [Script](./script.md) on the [GameObject](./gameobject.md) with the name `scriptName` and returns it.
   
   
**Returns: [Script](./script.md) Found**
   
**Return Type: [Script](./script.md)**

## **removeComponent(component : [Component](./component.md))**
Removes the [Component](./component.md) from the [GameObject](./gameobject.md).

## **setGroup(group : String)**
Sets the game objects group to the new group. If group does not exist, a new group will be created.

## **setName(name : string)**
Sets the name of the [GameObject](./gameobject.md).

## **setPosition(position : [Vector3](../math/Vector3.md))**
Sets the localPosition of the [GameObject](./gameobject.md).

## **setRotation(rotation : [Vector3](../math/Vector3.md))**
Sets the localRotation of the [GameObject](./gameobject.md).

## **setScale(scale : [Vector3](../math/Vector3.md))**
Sets the localScale of the [GameObject](./gameobject.md).

## **translate(translation : [Vector3](../math/Vector3.md))**
Translates the [GameObject](./gameobject.md) position by the given translation.

## **rotate(rotation : [Vector3](../math/Vector3.md))**
Rotates the [GameObject](./gameobject.md) rotation by the given rotation.

## **scale(scale : [Vector3](../math/Vector3.md))**
Scales the [GameObject](./gameobject.md) scale by the given scale.

## **updateAttributes()**
Updates all the [GameObject](./gameobject.md) attributes. This is called in every setter function.

## **setParent(parent : [GameObject](./gameobject.md))**
Sets the [GameObject](./gameobject.md) parent to the given parent.

## **exists()**
Returns `True` if the [GameObject](./gameobject.md) is instantiated in the scene.
   
   
**Returns: If [GameObject](./gameobject.md) exists**
   
**Return Type: bool**

   

# Class Methods
---

## **find(name : string)**
Finds the [GameObject](./gameobject.md) with the name `name` and returns it. May return `None` if the [GameObject](./gameobject.md) is not found.
   
   
**Returns: [GameObject](./gameobject.md) Found**
   
**Return Type: [GameObject](./gameobject.md)**