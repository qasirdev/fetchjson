//To create new application with Github - ANSWER 33
https://stackoverflow.com/questions/65173291/git-push-error-src-refspec-main-does-not-match-any-on-linux1- git remote add origin https://github.com/xxxxxx/xxxxx.git
2- git remote -v
3- origin https://github.com/xxxx/xxxx.git (fetch)
origin https://github.com/xxxx/xxxx.git (push)
…. so on

To run Typescript on browser
npm install -g parcel-bundler
parcel index.html //to run typescript in browser

### Faker library

npm install faker@5.5.3
npm install @types/faker@5.5.9

A community fork of Faker was made to save the project and they are actively working on some fixes and a fresh v6 release:

https://github.com/faker-js/faker

If you wish to use this library instead, you can install it by running:

npm install @faker-js/faker

You'll then need to update your imports:

import { faker } from "@faker-js/faker";

As of their v6 release, TS support is now native and does not require installing the @types declarations.

https://github.com/faker-js/faker#typescript-support

### Google Maps Key

If you do not have a credit card tied to your Google account, or do not want to add one, then please use this pre-generated API key instead:

AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU

You can skip the entire next video. After the next video, your index.html file should look like this:

<html>
  <body>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU"></script>
    <script src="./src/index.ts"></script>
  </body>
</html>

### types/googlemaps

npm install @types/google.maps

Also, you will still see a TS error in your code editor:

Cannot find name 'google'.ts(2304)

As the very first line in the index.ts file, you will need to add a triple slash directive:

/// <reference types="@types/google.maps" />
You can read about this in the official docs here:

https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import

### create react with typescript

npx create-react-app my-app --template typescript

### Redux typescript redux-ts

npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0
