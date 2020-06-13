# ootrr-tracker
Item tracker for Ocarina of Time Randomizer, with Firebase support based on Xopar's Extended + Keysanity item tracker in Emotracker.

Use it: https://ootr-random-settings-tracker.web.app/

This project was originally forked from https://github.com/stochaztic/lttp-tracker.

If you want to set up your own instance rather than using the public one above, you will need to acquire and set up a Firebase project. You will need to enable anonymous authentication on that project. The "Use Tourney Configuration" button expects a room called 'tourney-layout' to exist, and just uses the layout of that room, so you will also need to create that room and push a layout to it.