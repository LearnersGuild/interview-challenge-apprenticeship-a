# RestoRant

A community for restaurant haters to rant about their worst experiences.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
public/               # static assets
src/
  actions/            # async server actions (e.g. data CRUD)
  data/               # db schema & seed data
  db/                 # database client & utils
  routes/             # express routes
  views/              # html templates
test/                 # test files for the source files
```

### Setting up your config

Run the command in the terminal so that the config loads correctly
`$ cp .env.template .env`

### Installing your dependencies

Run the following command in the terminal:
`$ npm install`

### Setting Up The Remote Database

Use the following commands to set up and seed your database:

1. Set up database tables from `schema.sql`: `$ npm run db:schema`
1. Load seed data from `restaurants.sql`: `$ npm run db:seed`

Note: These commands will only work if you have your `.env` file correctly setup.

### Starting your development server

Run the following command in the terminal:
`$ npm start`


### Accessing the Database

A database connection string has been set in the `.env` file at the top level of this repository. You can use this to connect to the database using any client you wish.

If you would like to use [Postico](https://eggerapps.at/postico) to access the database you can simply use the `.pgfav` file in the interview root directory to automatically add the database connection configuration. Use the following command:

```sh
open RestoRant.pgfav
```

# Coding Challenge

During the interview you will have 75 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed.

Each requirement is assigned a point value. A fully complete requirement will earn you full points; partially complete requirements get partial points; incomplete requirements get no points. Overall completeness is determined by dividing the total points earned by the total points available. There is a requirement of completion of 80% of the specs to secure a passing result.

# Existing functionality

- Navigating to `/sign-up`, loads the sign up page.
- Navigating to `/sign-in`, loads the sign in page.
- Navigating to `/restaurants`, loads the index page for all restaurants
- Navigating to `/restaurants/<RESTAURANT ID>`, loads the detail page for a restaurant.
- The `user` object is available to you in the request via `request.user`.
- In you change the `schema.sql` file, remember to reload the schema by running `npm run db:schema`.
- `public/script.js` is the file which contains client side JavaScript.
# Specs

## Create restaurant rants

Routes:
- [ ] __20:__ Navigating to `/restaurants/<RESTAURANT ID>` loads the restaurant detail page. You should modify this page to add a form to create a new `rant` for the restaurant.
- [ ] __20:__ Sending a POST request to `/restaurants/<RESTAURANT ID>/rants` creates a new rant for the restaurant.

Users can:
- [ ] __30:__ Create a new rant for an restaurant.
  - The rant has a `title`, `body`.
  - The rant should belong to a user and a restaurant.
  - Creating a new rant should happen via AJAX (page should not refresh on form submission)
  - Once the user clicks the `Create Rant` button, the newly created rant should be added to the list of rants on the restaurant detail page(`/restaurants/<RESTAURANT ID>`) via client side JavaScript.

## Redirect user back to previous page

For example, going to a restaurant detail page(`/restaurants/<RESTAURANT ID>`) without having signed in, redirects a user back to the `/sign-in` page. On successful sign in, the current behaviour of the application is to redirect the user to the restaurants page (`/restaurants`). Change the behavior such that the user is redirected back to the restaurant detail page. (since that was the original page the user wanted to visit)

Users can:
- [ ] __50:__ Successfully go back to the original URL on sign up

## Testing

- [ ] __30:__ Write a test for the `addRant` action using Mocha. This test should check that a new rant is added to the database when the action is initiated. Running `npm test` passes all tests.

## Uninstall after the interview

1. Stop any running express servers
2. Remove Postico entry for the database (if applicable)
3. Remove command line entry/ies for the database (delete from `~/.zsh_history` or `~/.bash_history`)
4. cd out of the usb drive from the terminal
5. Close the IDE / text editor window(s) with the challenge files
6. Eject the USB drive
