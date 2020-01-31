# Videowiki Test Task:
## Required technologies:
    -Nodejs
    -React
    -Redux
    -Socket.io
    -Mongodb
    -JWT
    -Basic knowledge in docker/docker-compose is prefferred

## Task Details:
### Lets make a simple blog app with only the home page functional. a user should be able to:
    -Register using email & password ( use JWT for authentication )
    -Login
    -Create a post
    -See all posts from other users on home page ( sorted from most recent )
    -Pagination for post
    -Like/Dislike a post
    -see how many likes/dislikes a post have in realtime ( using socketio )

## Evaluation metrics:
    -Code hygiene
    -App Scalability
    -Is the code structure scalable?

### To keep the strcture simple, use the `server` directory to have the server side code

## Submitting the task

#### Please fork this repo, work on a separate branch ( dev branch ) and once done submit a PR to this repo

## Available Scripts

In the project directory, you can run:

### `npm run dev:front`

Runs the frontend in the development mode.<br />

### `npm run dev:server`

Runs the backend in development mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
