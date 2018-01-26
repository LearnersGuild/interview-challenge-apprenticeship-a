# RestoRant

A community for restaurant haters to rant about their worst experiences.

Part of the application has already been built for you. Your job is to take it to completion.

To view this README using markdown preview press `ctrl+shift+M` in Atom or `shift+cmd+V` in VSCode.

## Getting Started

_Before you begin coding, please complete the following steps to setup your interview environment._

### Start the recording

Start the recording according to the directions given to you by your interviewer.

In most cases you will be given a link to a Zoom room. Once you've entered the room click the "Share Screen" button and share your entire desktop.

### Set up your config

Run the command in the terminal so that the config loads correctly
`$ cp .env.template .env`

### Install your dependencies

Run the following command in the terminal:
`$ npm install`

### Set up the local database

Use the following command to create your database and load the schema and seed data:

`$ npm run db:init`

Note: this command will only work if you have your `.env` file correctly setup.

### Starting your development server

Run the following command in the terminal:
`$ npm start`

### Accessing the Database

If you would like to use [Postico](https://eggerapps.at/postico) to access the database, you can run the following command to automatically connect:

`$ open postgres://localhost/interview-apprenticeship-a`

# Coding Challenge

During the interview you will have 75 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed. No other aid is allowed. If you have a question about whether or not a particular form of aid is acceptable, ask your interviewer.

Each requirement is assigned a point value. Completing the requirement will earn you full points. _No partial points will be given._ Overall completeness is determined by dividing the total points earned by the total points available. To pass the interview you must score 80% or higher.

## Existing functionality

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
bin/                  # utility scripts
public/               # static assets
src/
  actions/            # async server actions (e.g. data CRUD)
  data/               # db schema & seed data
  db/                 # database client & utils
  routes/             # express routes
  views/              # html templates
test/                 # test files for the source files
```

- Navigating to `/sign-up`, loads the sign up page.
- Navigating to `/sign-in`, loads the sign in page.
- A user with username `a`, and password `a` exists in the database for easy sign in.
- Navigating to `/restaurants`, loads the index page for all restaurants
- Navigating to `/restaurants/<RESTAURANT ID>`, loads the detail page for a restaurant.
- The `user` object is available to you in the request via `req.user`.
- `public/script.js` is the file which contains client side JavaScript.

## Specs

### Users can add their rants

Navigating to `/restaurants/<RESTAURANT ID>` loads the restaurant detail page. You should modify this page to add a form to create a new `rant` for the restaurant.

- [ ] __10:__ Restaurant detail pages have a form with a button `Create Rant` and two inputs: title and body.
- [ ] __15:__ Clicking `Create Rant` sends an HTTP request to the server without a page refresh
- [ ] __15:__ Sending a POST request to `/restaurants/<RESTAURANT ID>/rants` creates a new rant for the restaurant in the database.
- [ ] __15:__ When the user clicks submit, the rant is added to the page.
- [ ] __10:__ If the HTTP request or database insert fails, the rant is not added to the page.
- [ ] __10:__ A user cannot add rants for any other users, including by editing client-side HTML or JavaScript.

### Database function is tested

- [ ] __10:__ Test passes when a rant is added to the database
- [ ] __10:__ Test fails if rant is not added to the database
- [ ] __10:__ Test can be run multiple times in a row without yielding false positives or negatives.

### Users are redirected back to previous page upon sign-in

For example, going to a restaurant detail page(`/restaurants/<RESTAURANT ID>`) without having signed in, redirects a user back to the `/sign-in` page. On successful sign in, the current behaviour of the application is to redirect the user to the restaurants page (`/restaurants`). Change the behavior such that the user is redirected back to the restaurant detail page. (since that was the original page the user wanted to visit)

- [ ] __10:__ When the user attempts to access a page that requires sign-in and is not signed in, the system captures the URL they were attempting to access and redirects to `/sign-in`.
- [ ] __30:__ On successful sign-in the user is redirected to the URL they were attempting to access.
- [ ] __10:__ If the user navigated directly to `/sign-in`, they are redirected to the restaurants page (`/restaurants`).

# Uninstall after the interview

_Please complete the following steps to close the interview and remove the interview challenge from your computer._

1. Make a commit in the local git repository: `$ git add -Av` and then `$ git commit -m "Completed interview challenge"`
2. Remove the interview database: `$ npm run db:drop`
3. Stop any running express servers
4. Remove Postico entry for the database (if applicable). Press `cmd+N` to open the favorites window and then select `edit > options > delete` to remove the entry.
5. Remove command line entry/ies for the database (if applicable) (delete from `~/.zsh_history` or `~/.bash_history`)
6. Close the IDE / text editor window(s) with the challenge files
7. Use `$ cd ~/` to cd out of the usb drive in any open terminal windows.
8. Eject the USB drive by right-clicking on the drive in Finder
9. Stop the recording
