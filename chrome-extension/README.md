CheckMarc: The team name Auto-Completer
=================

**CheckMarc is chrome extension built to fill boilerplate/repetitive text fields when resolving FCR tickets in Service-Now.** It is a lot more general than a template but that attribute also makes it more *flexible*.

![CheckMarc](https://github.com/yoh786/checkmarc/blob/CSMRR/chrome-extension/icos/gren128.png
"CheckMarc icon")



PRIMARY FUNCTIONS
-----------------

CheckMarc is built to abstract the semi-conscious procedure of:

1. typing/spelling what you want
2. double checking or correcting typing spelling mistakes until you get something with results
3. waiting on the data to load
4. selecting what you want

is a waste of mental processing, *and* is mistake-prone. The goal of this project is to turn that act into a series of keystrokes *( a la perennial favorite Ctrl-Alt-Del )*. Ideally, it would fill in everything that is normally repetitively typed/selected.

**Guiding Values**

- Simplicity and Conciseness are key
- Privacy and Confidentiality are required
- Efficiency is paramount



CURRENT STATE
---

Checkmarc is currently in final testing and packaging for a consumer release.

Bug-fix and feature-add will now be performed on a crowd-effort, rolling basis; there are other branches set up for these development phases.

CheckMarc is licensed under the GNU  General Public License.


------------------


Guide
======
This section details installation, configuration, and usage.

INSTALLATION
-----

1. Download zip file from GitHub
  - Download (clone) as a zip file from this Github Repo: https://github.com/yoh786/checkmarc
  - You can save to any permanent locations (note: folder must not be deleted or the extension will not load, put it somewhere persistent)
  - unzip the archive; it must be unzipped to install in Chrome
2. Access the Extension Settings
  - launch Chrome Browser on your computer
  - Click the 3 dots for the Menu
  - (in Menu) -> click 'More Tools' -> click 'Extensions'
  - You will see a page with the extensions you have installed, and some buttons and a search on top
3. Load the Extension into Chrome
  - Click the button in second row for **"load unpacked extension"**
  - You will need to navigate to the folder you unzipped to earlier; make sure to drill down to the folder containing *manifest.json*
  - Load this folder by accepting; you should see an entry for the extension with a green check icon. You should also see the same icon load in next to your address bar.
  - The extension is now installed
4. Test the extension
  - Load up a new ticket (It needs to be a window without toolbars)
  - To get a ticket without the Toolbars, you can middle click the 'new ticket' link; you can also create a bookmark directly to the required page. (pull out 'nav_to_do' from the URL)
  - Scroll down to the 'Assignment Group' field; place your mouse cursor in the text box
  - Press **Ctrl-Shift-S** so the plugin runs, the field should now be filled in with **"Service De"**
  - *The plug in is confirmed working*

**Configuration**
In its current state, CheckMarc currently requires no user configuration.
*Keyboard combination options may be added in the near future.*

USAGE
-----
There are two use cases: First Call Resolutions and Transfers back to Help Desk / Requests to Close Tickets.

**First Call Resolutions**

1. Finish rest of ticket; (this should be the last step before resolution)

2. Place cursor in Assignment Group field

3. Press **Ctrl-Shift-S** (box should fill in with *"Service De"*), however it probably won't drop down with a list. Your icon will animate to confirm the code fired.

4. press **S** once; box should now say *"Service Des"*. It should also drop down a list you can select from

5. If "service desk" is the only team in recent selections just press tab (you may have to click the entry for Service Desk from the list if it is not in recent)

6. (If you had to click the team, press tab to get to the next box) it should auto load so your name is in the "assigned to" list and you can pick yourself

7. You should have sufficient data to resolve

**Assigning from another group or to close existing**

1. Ticket should be complete and saved already

2. Put mouse cursor in Assignment Group

3. Press **Ctrl-Shift-S** (box should fill in with *"Service De"*), however it probably won't drop down with a list. Your icon will animate to confirm the code fired.

4. press **S** once; box should now say *"Service Des"*. It should also drop down a list you can select from

5. If "service desk" is the only team in recent selections just press tab (you may have to click the entry for Service Desk from the list if it is not in recent)

6. (If you had to click the team, press tab to get to the next box) it should auto load so your name is in the "assigned to" list and you can pick yourself

7. You should have sufficient data to resolve

**NOTE:**
*(Nothing fills in if you have Service Now Navigation Toolbars; the icon still animates but nothing happens)*
*(Sometimes the tab to next box is temperamental, hence the directions flow. I believe this is in relation to the 'recent selections' subset having more than 1 result - but this is not confirmed)*


------------------

Bug Bounties
-------

- Get this thing to work **with** nav toolbar UI

- Figure out why the fast-tab process from before does not work

- Figure out how to fill both fields at once with one click

-----------------

FAQ
=====

**1. Can you add {feature}?**

I would absolutely consider it. Let's talk about what it is and
how it would work, and then we'll get cracking!

**2. Can I Help?**

That would be awesome! All project files are hosted on this GitHub Repo. Feel free to download and change as you see fit. Please 'fork' to your own branch/project if you do this and you can have version control.

**3. Does it do your name in 'assigned'?**

Not currently, there is a synchronous function on assignment_group that really messes with my attempts to do so.

**4. Why doesn't this work with toolbars?**

I apologize for the inconvenience, I was not able to figure that out. What is strange is you can fill in the box by using the console commands for the same JS code in the plugin; I think it has something to do with DOM-tree load.

**5. Why can't you fill in the full team instead of having to hit another key?**

From what I could tell, there is an on-change listener for the assignment_group text box. When fired, it loads a list from what is in the box. It only fires now when it detects a key-press change to the field.

--------------------

Legal
-----
*License:
CheckMarc - Service Now Autocomplete Extension
Copyright (C) 2019  The Com.unity Co.*

*This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.*

*This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.*

*You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.*
