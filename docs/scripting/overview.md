# Overview
Script in Python®, an easy to learn language. Scripting reference will go over all of the functions implemented by Radium.

# Python Notes
Radium uses Python 2.7 via <a href="https://www.jython.org/" target="_blank">Jython</a>, which does not support all features modern python supports. Also PIP libraries do not work. If there is a library you would like to see implemented, please <a href="https://github.com/radiumgame/radium/issues/new?assignees=&labels=suggestion&template=feature_request.md&title=" target="_blank">open an issue</a> on Github.

# Radium Scripting Notes
There are a few small things that should be kept in mind when writing python with Radium. 
1. You should not use the `import` keyword for any Radium related imports. This is because it is not supported by Radium, and everything is already automatically imported. 
2. You cannot import other files you have written into your program. There might be a fix soon, but for now, everything must be contained inside one file.
3. Do not edit any variables directly in a class. Instead use the dedicated getter and setter methods. And if there is no getter or setter method for the field, it should not be changed at all.