
# Web Application Development 2

This is a website that was created for the practical assessment for Web Application Development 2 module, utilising templating and the MVC architecture.

## Coursework Specification

A small, independent restaurant prides itself on its use of fresh local produce and its constantly changing
menu and wishes to obtain a website which showcases this.

It envisages a site which will allow prospective customers and other members of the general public to
view its current lunch and dinner menus and which will allow members of its staff to login and update
the menus on a daily basis.

The proposed system should thus allow:

* Users who are not logged in to access an About Us page with details of the restaurant and its philosophy, and view details of the current menus, including:
    * the name of each dish
    *  a description of the dish
    * ingredients and allergy advice for each dish
    * prices
* Members of staff to login to the system and:
    * Enter details of new dishes
    * Update the menus displayed
* Although the restaurant constantly updates its menus there are a number of chef’s specials whichrecur regularly. It would therefore save staff time if dishes could be retained on the system and made available/unavailable as required.

## Design Changes

In the original design, there were to be four dishes per row in the menu and no functionality for editing ingredients once added.

In the final version of the website, there are three dishes per row as it looked more aesthetically pleasing and functionality was added to edit ingredients as spelling errors may happen and staff may wish to change the allergen status of an ingredient.

## Data Structure Changes

Originally, the ingredients were to be marked as vegan, vegetarian, pescetarian, and gluten free.

This was changed as the logic was more complex to determine if all ingredients in a dish were one of the available categories rather than marking a dish as one of the above.

### Dish model
```json
    Dish: {
        name: string,
        section: string,
        description: string,
        price: number,
        visible: boolean,
        ingredients: [string],
        vegan: boolean,
        vegetarian: boolean,
        pescetarian: boolean,
        glutenFree: boolean
    }
```

### Ingredient model
```json
    Ingredient: {
        name: string,
        allergen: boolean
    }
```

## Templating Engine Change

Embedded JavaScript (EJS) was used instead of Mustache.

This was due to a combination of prior experience using EJS for templating and the functionality offered by EJS.

EJS allowed full use of JavaScript logic to determine the layout and would direct you to the line errors occurred on.

While Mustache is lightweight, and easy to learn, it is logic-less by design. Logic was needed to determine the layout on screen, for example, displaying all dishes in a section.

## Extending the Specification

An additional feature of a contact form was implemented which emails a dummy account using nodemailer.

To access this account:

Email | Password
| :--- | :--- |
| thisisadummyforuni@outlook.com | Welcome22! |

## Website

Access the live website here:

https://wad2emmagillespie.herokuapp.com/

## Local set up

### Get files

Clone the GitHub repo: https://github.com/EmmaG500/FinishedCW

Request access from: EGILLE205@caledonian.ac.uk

### Initialise

* Run ```npm install``` from terminal to install packages
* Run ```nodemon``` if you have nodemon installed or ```node index``` to start local server
* Go to [localhost:3000](localhost:3000) to view website
* To log in, use of the following accounts:
    * Username | Password
        | :--- | :--- |
        | Molly.Ringwald | password |
        | Jon.Snow | password |
    * Log in token will expire after 8 minutes and 20 seconds and you will need to sign in again
## Authors

- Emma Gillespie

