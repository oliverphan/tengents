A hackathon project built over the weekend Aug 23-25, at Hackthe6ix 2019.

## Inspiration
We had to cramp for an idea so our idea was about creating ideas.

## What it does

Talk and reply like a real person

Ask user questions to expand the bot's prediction of what user is getting ideas for

Allows user to upload picture to express their ideas, and uses image recognition to further investigate path user wants to be creative through

Detects user's emotions throughout via sentiment analysis

Generates idea after ten texts (thus the name tengents, like tangents but ten-gents) 


## How we built it

Django rest server in the backend which uses AWS comprehend, rekognition and eliza. 

ReactJS front end.

## Challenges we ran into

Having little front end development experience was a liability in setting up the chat service. Routing data from the top of the stack to process in the AWS console was difficult as none of the members have worked with AWS previously.

## Accomplishments that we're proud of

Our chat bot talks like a person and it integrates machine learning and overall works! We are able to successfully display different pictures and results based on the sentiment/image analysis of the hyperlinks and chat.

Developing the concept and working together was also really awesome.

## What we learned

It would be helpful in the future to have more technical experience, not to overlook any parts of the stack. Design criteria needs to be fitted more accordingly to the skill level of the developers, and possibly emphasize a MVP faster in the production timeline.

## What's next for Tengent

There are many other features still missing, such as aggregating insights and visualizing with a word map. We would like to have a dual-pane on the right side of the page to be able to show visuals for the analysis of chat/pictures so users can have more creative cues!

___

######This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
