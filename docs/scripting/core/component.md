# Component
# Notes
---
All components are inherited from this class. All the properties available in this class are available in all the components.

# Properties
---

name (string)   
gameObject ([GameObject](./gameobject.md))   
order (int)   
enabled (bool)

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **enable()**
Enables the [Component](./component.md) which allows for the Start, Update, and other built in functions to be called.

## **disable()**
Disables the [Component](./component.md) which prevents the Start, Update, and other built in functions from being called.

## **setOrder(order : int)**
Sets the order in which the [Component](./component.md) is called. A higher order will be called first.

## **call(methodName : string)**
Calls a method in the Java version of this [Component](./component.md).