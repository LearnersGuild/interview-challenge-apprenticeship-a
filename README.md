# Restorant

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

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Create PostgreSQL database `resto_rant`: `$ npm run db:create`
1. Set up database tables from `schema.sql`: `$ npm run db:schema`
1. Load seed data from `albums.sql`: `$ npm run db:seed`

### Setting up your config

Run the command in the terminal so that the config loads correctly
`$ cp .env.template .env`

### Installing your dependencies

Run the following command in the terminal:
`$ npm install`

### Starting your development server

Run the following command in the terminal:
`$ npm start`


# Coding Challenge

During the interview you will have 60 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed.

Each requirement is assigned a point value. A fully complete requirement will earn you full points; partially complete requirements get partial points; incomplete requirements get no points. Overall completeness is determined by dividing the total points earned by the total points available. There is a requirement of completion of 80% of the specs to secure a passing result.

# Existing functionality

- Navigating to `/sign-up`, loads the sign up page.
- Navigating to `/sign-in`, loads the sign in page.
- Navigating to `/restaurants`, loads the index page for all restaurants
- Navigating to `/restaurants/<RESTAURANT ID>`, loads the detail page for a restaurant


# Specs

## Create restaurant rants

Routes:
- [ ] __20:__ Navigating to `/restaurants/<RESTAURANT ID>/rants/new` loads the new rant page
- [ ] __20:__ Sending a POST request to `/restaurants/<RESTAURANT ID>/rants` creates a new rant for the restaurant

Users can:
- [ ] __30:__ Create a new rant for an restaurant. The rant has a `title`, `body`. The rant should belong to a user and a restaurant. Creating a new rant redirects the user back to the restaurant page (`/restaurants/<RESTAURANT ID>`)
- [ ] __20:__ See all the rants of an restaurant by navigating to the restaurant detail page `/restaurants/<RESTAURANT ID>`.

Users cannot:
- [ ] __10:__ Create a rant if they are not signed in.

## Delete restaurant rants

Routes:
- [ ] __30:__ Sending a DELETE request to `/restaurants/<RESTAURANT ID>/rants/<RANT ID>` deletes the rant

Users can:
- [ ] __30:__ Delete a rant by clicking on the `trash` icon for the corresponding rant.

## Redirect user back to previous page

Going to a new rant page(`/restaurants/<RESTAURANT ID>/rants/new`) without having signed in, redirects a user back to the `/sign-in` page. On successful sign in, the user is redirected to the restaurants page (`/restaurants`). Instead of the default behavior of redirecting to the restaurants page, the user should go back to the new rant page (since that was the original page the user wanted to visit). Don't worry about any displaying any error messages on the front end.

Users can:
- [ ] __50:__ Successfully go back to the original URL on sign up

## Testing

- [ ] __30:__ Write a test for the `addRant` action using Mocha. This test should check that a new rant is added to the database when the action is initiated.
