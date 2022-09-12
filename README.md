# **Play 21**

The purpose of this project is to provide a simple, easy to use card style game for users. The aim of the game is to stay below but as close to 21. As cards are dealt to the computer and player it is a game of chance but also skill to determine when to press hold and when to hit for another card.  

A simple and eye catching design that does not distract from the overall game and that will work across various screen sizes was required. This aims to attract more users and also to make it easier for current uses to enjoy the game. 

[View the live project here](https://lauralola.github.io/PP2/) 

## Contents

* **[Design](#design)**
* **[User Experience](#user-experience)**
* **[Features](#features)**
   * Initial Game Alert 
   * Computer area
   * Play area
   * Player area
   * Score Area
* **[Future Features](#future-features)**
* **[Technologies Used](#technologies-used)**
* **[Testing](#testing)**
* **[Bugs](#bugs)**
* **[Validator Testing](#validator-testing)**
* **[Deployment](#deployment)**
* **[Credits](#credits)**

## Design

The overall design was intended to simple and easy to use without too many distractions. Upon opening the page, the overall design of the page should assist in the user quickly becoming aware of the premise of the game.

Tha background and colour scheme was chosen to give the feeling and ambiance of a card table in a casino with black, red and silver being the primary chosen colours and an image of a man dealing cards. The font again was chosen to invoke that feeling of the Wild West and old time card saloons and is large enough in size to be legible to users.  A fall-back font of Sans-Serif should the browser be unable to access the google fonts was used. One font was used to ensure consistency. 

Icons from font awesome were also utilised to add some extra focus for clients. 

Upon opening the game an alert appears to explain the basic instructions for the game and how to play. This is short and concise so as to keep users engaged.

![Website](./assets/images/read-me-images/website.png)

[Back to top](#contents)

## User Experience

#### First Time Users
 The goal for first time users is for the game to be easily understood. The user should from opening of the site be able to read the short instructions and be able to play the game. The design is simple in structure so as not to have too many elements to confuse a first time user.  

 #### Existing Users
 Existing users should also be able to quickly and easily navigate the game to keep them engaged and interested in the product. 

## Features  

#### Initial Game Alert 
The inital alert is deigned to easily explain how the game is played. It is designed to upon loading of the page pop up to assist the user and can then be closed to procede with the game. The aim of the game is to beat the computer. The sum total of the players cards should stay below 21 but as close to 21 as possible. 

![Initial Game Alert](./assets/images/read-me-images/nav.png)

#### Computer area
  
The computer area displays a '?' for most of the game as the player is unable to see what numbers the computer is being dealt. Once the computer and the player both select to hold, the total sum of the computer cards is displayed. Once the reset button is selected, this area returns to displaying a '?'. On smaller screen sizes the display and font reduce in size, however the overall look appears the same as on larger devices. 

![Computer Area](./assets/images/read-me-images/nav.png)

#### Play area

The play area contains three buttons with different functions. Firstly the reset button resets the game so player and computer are both back to '0'.

The hit button, when selected, will deal a card to the player and the computer (if the computer score is below 19). 

The hold button, when selected by the player means no card is dealt to the player but the computer recieves cards if below 19. Once the computer score reaches 19 it will also display an alert that the computer holds and the game ends. The winner is then revealed.

On larger screen sizes the buttons are displayed side by side horizontally but for smaller screen sizes they are stacked vertically for ease of use. 

![Play area](./assets/images/read-me-images/practice.png)

#### Player area

The player area again is kept simple in design. It initially displays a '0' and each time the player selects hit and a card is dealt the total score for the player is displayed for them. This should help them decide if they want another card to add to this or to hold their score. Once the reset button is selected, this area returns to displaying a '0'. On smaller screen sizes the display and font reduce in size, however the overall look appears the same as on larger devices. 

![Player Area](./assets/images/read-me-images/footer.png)

#### Score Area 

The score area records the winners and losers of the games overall. Every time the computer wins a game the computer score increases by one and the same for player score. 

![Score Area](./assets/images/read-me-images/table.png)

## Features left to implement

Additional features could be to build out the game to include a suit of cards. Currently the player recieves a random number between 1 and 12. This could be expanded to include a deck of cards.

The current layout with three potential card areas for both the player and computer could be modified so that individual cards are dealt and held in each separate div. 

[Back to top](#contents)

## Technologies Used
* HTML5 
* CSS
* JavaScript
* Gitpod
* GitHub
* Google Fonts
* Font Awesome
* Google Chrome DevTools

## Testing

This page was tested in different browsers including Safari and Chrome with the full site and links tested across the different platforms. It was tested across several devices including a laptop, iPad and iPhone. 

All buttons were tested to ensure functionality. The game was run several times to ensure accuracy of functions. Responsiveness was tested and edited using DevTools and then media queries. Responsive design was checked with the 'Am I Responsive' site. 

![Am I Responsive Result](./assets/images/read-me-images/responsive-design.png)

The colour scheme used was identified to be easy to read with contrasting colours and this was tested along with general accessibilty results using the Lighthouse feature on Google Dev Tools. 

![Accessibility](./assets/images/read-me-images/lighthouse.png)

[Back to top](#contents)

## Validator Testing
HTML
No errors were returned when passing through the official W3C validator

![HTML testing](./assets/images/read-me-images/html.png)

CSS
No errors were found when passing through the official (Jigsaw) validator

![CSS testing](./assets/images/read-me-images/css.png)

JavaScript
No errors were found when passing through the official  validator


[Back to top](#contents)

## Bugs
Through the course of the project several issues were identified and recitified. 

* Font awesome icons were not displaying initially, however it soon came to attention that the style link to this had an error within. 

* An error within the practice section regarding an extra closing div element was making the link elements and breaks in this section display differently between the three sections. This was identified using the HTTP validator. 

* Lighthouse accessibilty was reduced due to inappropriate aria-label for main image. This was rectified using a role of image for the div element containing the image. 

* A white vertical stripe was displaying on the right side of my page across devices. This was rectified using Dev Tools to fix an overflow issue. 

* An issue with the form settings on the contact page and linking this with the response page was identified. The action of the form was incorrect with 'push' being used in error rather than 'get'. Once rectified, this solved the issue. 

* There were issues with displaying the timetable on smaller devices and readibilty. After discussion with my mentor, a div to contain a simplified version of the data for smaller screen was identified as a solution with the display alternating for media queries.

* An issue with the image loading times reducing performance was identified on Lighthouse testing. Images were compressed using tinyPNG and birme.net and this has improved performance. 

* Several aria-labels were initally missing for links and images. This was flagged after revisiting some of the HTML lessons. 
 

[Back to top](#contents)

## Deployment

The site was deployed using GitHub pages. This was performed by navigating to the settings page within the repository. The pages tab on the menu to the left of the screen was opened and the source drop-down menu was changed to main. This generated a link to the site after a few minutes. 

[Back to top](#contents)

## Credits

The love running project was used as a guide for setting the main page image, header and navigation. 

Issue with image display settings rectified by modifying code accessed at stackoverflow. (https://stackoverflow.com/questions/29463586/why-is-my-container-background-image-so-zoomed-in)

[Back to top](#contents)

## Content
Images were accessed from Pexels (https://www.pexels.com). 

Icons for the practice section and footer were accessed at Font Awesome.

Fonts were accessed from Google Fonts. 

The map was generated and imbedded using Google Maps

Laura Walsh 2022








    how to change function on click
    https://stackoverflow.com/questions/67247841/can-i-create-up-to-5-different-actions-on-each-click-on-a-single-button-in-javas

    Generating non repeating random number
    https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js

    https://www.google.com/search?q=creating+a+card+game+javascript&rlz=1C5CHFA_enIE970IE970&oq=creating+online+poker+game+javasc&aqs=chrome.1.69i57j0i22i30l2.12859j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_tY4LY8_KL4uTgAbF8KaoDA_18

    why is text inner not pulling to html- returning global variable not returned value
    issue with score originally had if((player1 > 21) || (player2 > player1), however did not realise this would include if computer over 21 so changed to if((player1 > 21) || ((player2 <21) +++ (player2 > player1)). 

    error with play2- should not be dealing once over 19 but once you hit hold button and then computer hold every time click an alert message card gets dealt to computer even after computer hold- why??

    So I have clicked hold and click on computer holds alert- deals them a card so if should have won they dont. If computer holding and I continue to get cards then doesnt deal to computer. But if computer holding and I then click hold deals a final card to computer when computer hold alert pops up. 