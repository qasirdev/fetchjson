//To create new application with Github - ANSWER 33
https://stackoverflow.com/questions/65173291/git-push-error-src-refspec-main-does-not-match-any-on-linux 1- git remote add origin https://github.com/xxxxxx/xxxxx.git
2- git remote -v
3- origin https://github.com/xxxx/xxxx.git (fetch)
origin https://github.com/xxxx/xxxx.git (push)
…. so on

To run Typescript on browser
npm install -g parcel-bundler

Faker library
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
