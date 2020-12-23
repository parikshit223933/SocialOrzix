# SocialOrzix
<img src="https://img.shields.io/github/issues/parikshit223933/SocialOrzix"> <img src="https://img.shields.io/badge/Dev-Complete-green">

A social media website using REACT JS, REDUX (using <a href="http://codeial.com:8000/">CODEIAL</a> API)

## Tools and libraries used
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width=200><img src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png" width=125><img src="https://img-a.udemycdn.com/course/750x422/1934362_ca3c.jpg" width=200><img src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png" width=200><img src="https://ourcodeworld.com/public-media/articles/articleocw-562bb367bbee4.png" width=200>
1. React
2. Redux
3. Socket.io
4. JWT-Decode
5. Jquery

## Features and Screenshots
### 1. Front Component (Entry page)
<img src="https://github.com/parikshit223933/SocialOrzix/blob/master/src/images/1.PNG" width=500>

### 2. Login Component
<img src="https://github.com/parikshit223933/SocialOrzix/blob/master/src/images/2.PNG" width=500>

### 3. SignUp Component
<img src="https://github.com/parikshit223933/SocialOrzix/blob/master/src/images/3.PNG" width=500>

### 4. Chat and Friends components shows up after signing in
<img src="https://github.com/parikshit223933/SocialOrzix/blob/master/src/images/4.PNG" width=500>

### 5. Fully functional chat box component
<img src="https://github.com/parikshit223933/SocialOrzix/blob/master/src/images/5.PNG" width=300>

### 6. SearchBar Component for searching users
<img src="https://github.com/parikshit223933/SocialOrzix/blob/master/src/images/6.PNG" width=500>

### 7. User profile component and functionality for adding or removing a user as a friend
<img src="https://github.com/parikshit223933/SocialOrzix/blob/master/src/images/7.PNG" width=200>


## File Structure
```
src
│   chat.css
│   index.css
│   index.js
│   website logo.png
│
├───actions<br>
│       actionTypes.js
│       auth.js
│       friends.js
│       posts.js
│       profile.js
│       search.js
│
├───components
│       App.js
│       Chat.js
│       Comment.js
│       CreatePost.js
│       FriendsList.js
│       FriendsListItem.js
│       Home.js
│       index.js
│       Login.js
│       Navbar.js
│       Page404.js
│       Post.js
│       PostsList.js
│       Settings.js
│       Signup.js
│       UserProfile.js
│
├───helpers
│       urls.js
│       utils.js
│
├───images
│       1.PNG
│       2.PNG
│       3.PNG
│       4.PNG
│       5.PNG
│       6.PNG
│       7.PNG
│
├───reducers
│       auth.js
│       friends.js
│       index.js
│       posts.js
│       profile.js
│       search.js
│
└───store
        index.js
```
<hr>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
