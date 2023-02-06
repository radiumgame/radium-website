# Animation
# Properties
---

speed (float)
loop (bool)
playOnAwake (bool)

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **play()**
Plays the animation

## **stop()**
Stops the animation and resets it to the beginning

## **pause()**
Pauses the animation

## **setSpeed(speed : float)**
Sets the speed at which the clip is played

## **setLoop(loop : bool)**
Sets whether to loop the clip when finished

## **setPlayOnAwake(poa : bool)**
When the component is added, play the clip automatically

## **setAnimationClip(path : string)**
Sets the clip to play. The path is based from the assets directory, just add what comes after the assets directory in the path.