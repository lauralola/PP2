# **Play 21**

The purpose of this project is to provide a simple, easy to use card style game for users. The aim of the game is to stay below but as close to 21. As cards are dealt to the computer and player it is a game of chance but also skill to determine when to press hold and when to hit for another card.  

A simple and eye catching design that does not distract from the overall game and that will work across various screen sizes was required. This aims to attract more users and also to make it easier for current uses to enjoy the game. 

[View the live project here](https://lauralola.github.io/PP1/index.html) 

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

The site is structured across three pages with navigtion settings on each. The homepage is the default loading page. The Shanti Yoga header can be clicked across any of the pages to return to the home page. 

![Website](./assets/images/read-me-images/website.png)

[Back to top](#contents)

## User Experience

#### First Time Users
 The goal for first time users was for the purpose of the website to be easily understood. The user should be easily able to navigate through the site to find information on the services offered, teachers and location. It should be easy for the user to contact the studio with questions. The design should be inviting and uncluttered. 

 #### Studio Members
 Studio members should be able to easily stay up to date on class times and prices with our scheduling page and be able to contact the studio. 

## Features

#### Navigation Bar
The navigation bar is present on all three pages of the site and provides an easy way for the user to move between the pages. Links to the Home page, Schedule section and a Contact page are consistent in position and style across the site. This allows th user to navigate across the page without using the back button. The menu highlights the page the user is currently on by displaying a line under this section for easy navigation.  

![Navigation Bar](./assets/images/read-me-images/nav.png)

#### Main Page Image

The main image is designed to catch the eye and provide an image of how attending a class might feel. The color scheme is reflected across the site and some overlay text provides information on the location of the studio. 

#### The Regular Practice Section

This section provides information on the services provided by the studio and the benefit of each. The user will have some basic information on the different options available to them and this may encourage the user to consider joining a class. This also contains links in each case to the relevant pages to access more information.

This is designed to change to column style display on smaller screens to maintain usability. 

![Practice Section](./assets/images/read-me-images/practice.png)

#### The Footer

The footer includes social media links for the studio which open in a new tab. This allows the user to keep our webpage open when navigating away to our social media platforms. 

![Footer](./assets/images/read-me-images/footer.png)

#### Schedule Section

Our timetable section provides information on regular classes so users are aware of when they may attend these. They can easily identify different services and their availability in the studio. A background image of a lady in a yoga pose in the forest is applied to add to the sense of quiet and space on the page.

Again the display style of this will vary between screen sizes for ease of use. On larger devices the full screen table display will be available and this will be simplified to an easy to read section for smaller devices. 

A separate section is provided with information on the various memeberships and costs for classes. This provides information to the user on different packages available to them. 

![Schedule Section](./assets/images/read-me-images/table.png)

#### Teacher Section

This section provides users with information on the teachers, classes they are involved with and their experience and style. A photo of each teacher is also included so that students have an image of the teacher before attending classes. This is designed to help students decide on a class which may suit them and their needs. 

This section is designed to change to a column style display on smaller screens to maintain usability. 

![Schedule Section](./assets/images/read-me-images/teachers.png)

#### Contact Page

This page allows the user to send a message to the studio to ask for more informtation on a service or to book a service. There is also an option to sign up to an email list for free weekly online meditation. The user is asked to provide their name and email address and these must be inputted for the form to be accepted. 

![Contact Page](./assets/images/read-me-images/contact.png)

A google map is imbedded along with address and phone information to assist users in finding the studio. 
![Map](./assets/images/read-me-images/map.png)

On successful completion of the form a response page with a link back to our main page is provided. 
![Response](./assets/images/read-me-images/thanks.png)

[Back to top](#contents)

## Features left to implement

A section to allow students to book into classes could be a potential future feature for the project. Within the timeframe provided this was not possible. 

A section for members to leave reviews and feedback for teachers could also be a future feature. 

[Back to top](#contents)

## Technologies Used
* HTML5 
* CSS
* Gitpod
* GitHub
* Google Fonts
* Font Awesome
* Google Chrome DevTools

## Testing

This page was tested in different browsers including Safari and Chrome with the full site and links tested across the different platforms. It was tested across several devices including a laptop, iPad and iPhone. 

All links were tested to ensure functionality. Responsiveness was tested and edited using DevTools and then media queries. Responsive design was checked with the 'Am I Responsive' site. 

![Am I Responsive Result](./assets/images/read-me-images/responsive-design.png)

The colour scheme used was identified to be easy to read with contrasting colours and this was tested along with general accessibilty results using the Lighthouse feature on Google Dev Tools. 

![Accessibility](./assets/images/read-me-images/lighthouse.png)

The contact form was tested to ensure that all details must be completed before the form will be accepted and that on submit the form is submitted and the response page to this is provided to the user. 

[Back to top](#contents)

## Validator Testing
HTML
No errors were returned when passing through the official W3C validator

![HTML testing](./assets/images/read-me-images/html.png)

CSS
No errors were found when passing through the official (Jigsaw) validator

![CSS testing](./assets/images/read-me-images/css.png)


[Back to top](#contents)

## Bugs
Through the course of the project several issues were identified and recitified. 

* Initially issues with background images were identified with the image being greatly magnified and only a small section displaying on the screen. After research online a solution was identified and ammended with the aid of AndrewL64 on stackoverflow. 
(https://stackoverflow.com/questions/29463586/why-is-my-container-background-image-so-zoomed-in)

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