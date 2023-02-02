# First Script
You will learn how to use the python scripting system to make a simple script. This script will be able to control the movement of a game object. It will use keyboard input and will move the game object in the direction of the arrow keys. You can see the [final result](./first-script.md#final-product) down at the bottom of the page.

# Notes
Make sure you have a project created. If you don't know how to do this, refer to the creating a project section of the [Installing Radium](../install.md#creating-a-project) guide.
   
   
Also after updating your script, make sure to go to the inspector window and click update scripts button on the python scripting component.

# Creating the Script
Create an empty game object by using the Scene Hierarchy and select it. This will bring up all of the components and properties inside of the Inspector window. At the bottom of all the components you will find the add component button. Then find under scripting, the python scripting component. We then need to create our script. Go to your project and create a new file. You can name it anything, just make sure it has the extension `.py`. Next under your python scripting component, you will find the add script button. This button will open a file explorer, choose your newly created file.

# Setting Up the Script
Open up your script in some sort of editor. You can use a text editor such as VSCode or even notepad. The first things we need to define are the start and update methods. In your script write:
``` python
def start():
    pass

def update():
    pass
```
The start method is called once when the game starts. The update method is called every frame. 

# Getting Keyboard Input
We now need to get the keyboard input. We can do this by calling `Input.isKeyDown()` This method takes in a string as a parameter. This will return a bool, true if the key is down, false if it is not. We can show this by logging it to the console. Write in your update method:
``` python
log(Input.isKeyDown("w"))
```
This will print out true if the w key is down, false if it is not.

# Using Keyboard Input
We can alter the position of the game object by using the keyboard data. To add to the position of the game object, refer to the [`GameObject.translate()`](../scripting/core/gameobject#translatetranslation--vector3) method. It takes in a [Vector3](../scripting/math/Vector3.md) as a parameter. The vector3 is the amount of units to move the game object. We can use the keyboard to move the game object up, down, left, or right. Delete the last line logging whether a key is down and write this in your update method:
``` python
if Input.isKeyDown("w"):
    gameObject.translate(Vector3(0, 1, 0))
```
While this will work, it will not work as intented. The game object will fly off very fast. There is an easy work around to this.

# Delta Time
If we tell our script to change the position one unit every frame, the position will change a lot more in one second than one unit. If our game is running 60fps, this means it is moving 60 units in a second. A way we can fix this is by multiplying our speed by deltaTime. Delta time is the time between frames. If we run 60fps, delta time will be equal to 1/60 or 0.016. Since our game is running at 60fps, multiplying it by 1/60 will make our object move 1 unit every second instead of every frame. Change your code to:
``` python
if Input.isKeyDown("w"):
    gameObject.translate(Vector3(0, Time.deltaTime(), 0))
```
Now our object will move up 1 unit every second.

# Changing the Speed
We can change the speed of our object by multiplying Time.deltaTime() with a number. If I multiply it by 3, my object will move 3 units every second. Change your update function to:
``` python
if Input.isKeyDown("w"):
    gameObject.translate(Vector3(0, Time.deltaTime() * 3, 0))
```


# Adding Other Inputs
This process is straight forward for all the other inputs. We can add more inputs by adding more if statements. For example, if we want to move the game object left and right, we can add another if statement. Write this in your update method:
``` python
if Input.isKeyDown("w"):
    gameObject.translate(Vector3(0, Time.deltaTime() * 3, 0))
if Input.isKeyDown("a"):
    gameObject.translate(Vector3(Time.deltaTime() * 3, 0, 0))
if Input.isKeyDown("s"):
    gameObject.translate(Vector3(0, -Time.deltaTime() * 3, 0))
if Input.isKeyDown("d"):
    gameObject.translate(Vector3(-Time.deltaTime() * 3, 0, 0))
```

# Final Script
Your final script should look something like this:
``` python
def start():
    pass

def update():
    if Input.isKeyDown("w"):
        gameObject.translate(Vector3(0, Time.deltaTime() * 3, 0))
    if Input.isKeyDown("a"):
        gameObject.translate(Vector3(Time.deltaTime() * 3, 0, 0))
    if Input.isKeyDown("s"):
        gameObject.translate(Vector3(0, -Time.deltaTime() * 3, 0))
    if Input.isKeyDown("d"):
        gameObject.translate(Vector3(-Time.deltaTime() * 3, 0, 0))
```