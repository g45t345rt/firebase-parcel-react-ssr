### FIREBASE PARCEL REACT SSR
This boilerplate bundle client and server code with parcel-bundler and easy deploy to Firebase Cloud function

#### Features
- React for interactive UI
- Parcel to bundle js, css, svg and other files
- Simple configured server with Express
- Firebase for hosting files
- Cloud function to enable server side rendering
- Express used for the server

#### How does it work
- All build files are in `dist` folder
- Client code is bundled with parcel
- Server side code is also bundled with parcel but package.json is copied and installed before running emulator or deploying
 
#### Don't forget to
- Install dependencies `npm install`
- Set your project id in .firebaserc file
- Save your Firebase config object for `firebase.initializeApp(firebaseConfig)`

#### For development
Watch client & server  
`npm run dev`  
Serve files with Firebase emulator  
`npm run server`  

Note: when developing you should run 2 seperate terminals
-  First terminal to watch client & server files `npm run dev`
-  Second terminal to start firebase emulator `npm run serve`

#### Production
Build client & server to dist folder  
`npm run build`  
Deploy hosting and function configuration to firebase  
`npm run deploy`  
