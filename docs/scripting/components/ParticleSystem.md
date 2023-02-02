# ParticleSystem
# Properties
---

particleOffset ([Vector3](../math/Vector3.md))   
randomOffset (bool)   
offsetRange1 ([Vector3](../math/Vector3.md))   
offsetRange2 ([Vector3](../math/Vector3.md))   
particleRotation (float)   
randomRotation (bool)   
rotationRange ([Vector2](../math/Vector2.md))   
particleSize ([Vector2](../math/Vector2.md))
randomSize (bool)   
sizeRange ([Vector2](../math/Vector2.md))   
lifetime (float)   
randomLifetime (bool)   
lifetimeRange ([Vector2](../math/Vector2.md))   
emissionRate (float)   
particleSpeed ([Vector3](../math/Vector3.md))
randomSpeed (bool)   
speedRange1 ([Vector3](../math/Vector3.md))   
speedRange2 ([Vector3](../math/Vector3.md))   
blendType (string)   
transparent (bool)   
atlasSize ([Vector2](../math/Vector2.md))   
color ([Color](../graphics/Color.md))   
maxParticles (int)

   

# Constructor
---
Empty constructor

   
   

# Methods
---

## **setParticleOffset(offset : [Vector3](../math/Vector3.md))**
Sets the position offset from the base position of the [GameObject](../core/gameobject.md).

## **setRandomOffset(randomOffset : bool)**
Decides whether the position offset should be random or not. The range is based off of offsetRange1 and offsetRange2.

## **setOffsetRange(offset1 : [Vector3](../math/Vector3.md), offset2 : [Vector3](../math/Vector3.md))**
Sets the range of the position offset. This is only used if randomOffset is set to true.

## **setParticleRotation(rotation : float)**
Sets the rotation of the particle.

## **setRandomRotation(randomRotation : bool)**
Decides whether the rotation should be random or not. The range is based off of rotationRange.

## **setRotationRange(rotationRange : [Vector2](../math/Vector2.md))**
Sets the range of the rotation. This is only used if randomRotation is set to true.

## **setParticleSize(size : [Vector2](../math/Vector2.md))**
Sets the size of the particle.

## **setRandomSize(randomSize : bool)**
Decides whether the size should be random or not. The range is based off of sizeRange.

## **setSizeRange(sizeRange : [Vector2](../math/Vector2.md))**
Sets the range of the size. This is only used if randomSize is set to true.

## **setLifetime(lifetime : float)**
Sets the lifetime of the particle in seconds.

## **setRandomLifetime(randomLifetime : bool)**
Decides whether the lifetime should be random or not. The range is based off of lifetimeRange.

## **setLifetimeRange(lifetimeRange : [Vector2](../math/Vector2.md))**
Sets the range of the lifetime. This is only used if randomLifetime is set to true.

## **setEmissionRate(emissionRate : float)**
Sets the emission rate of the particle in particles per second.

## **setParticleSpeed(speed : [Vector3](../math/Vector3.md))**
Sets the speed of the particle in 3 directions.

## **setRandomSpeed(randomSpeed : bool)**
Decides whether the speed should be random or not. The range is based off of speedRange1 and speedRange2.

## **setSpeedRange(speedRange1 : [Vector3](../math/Vector3.md), speedRange2 : [Vector3](../math/Vector3.md))**
Sets the range of the speed. This is only used if randomSpeed is set to true.

## **setBlendType(blendType : string)**
Sets the blend type of the particle. Valid blend types are:   
- Alpha
- Additive

## **setTransparent(transparent : bool)**
Sets whether the particle should be transparent or not. This determines the render order of the particles.

## **setAtlasSize(atlasSize : [Vector2](../math/Vector2.md))**
Sets the size of the texture atlas.

## **setColor(color : [Color](../graphics/Color.md))**
Sets the color of the particle.

## **setMaxParticles(maxParticles : int)**
Sets the maximum number of particles. If the number of particles exceeds this number, the oldest particles will be destroyed.