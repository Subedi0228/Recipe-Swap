# Recipe-Swap

A website to share and view recipes. It uses AI to fill/validate nutritional information so browsers do not need to worry about misinformation regarding nutritional information of their meals

## Installing Node.js Modules

If you've cloned or downloaded this project repository and the `node_modules` directory is not present due to it being excluded in the `.gitignore` file, you can follow these steps to install the required Node.js modules:

**Prerequisites** Ensure that you have Node.js and npm installed on your local machine. [Node.js website](https://nodejs.org/).

**Navigate to Project Directory** Open your terminal or command prompt and navigate to the /frontend or /backend for the respective ends.

**Install Dependencies** Run the command "npm install" on both ends to install the necessary dependencies listed in the `package.json` file:

## Commit Messages

We follow subject-first style of commit messages because it helps developers find commits that correspond to the subject of what they're looking for more easily.

For example: instead of "fixed recipe-search", you could say "recipe-search is fixed" which would make finding the specific commit about recipe-search easier because many things could have been fixed.

If there is a version change, be explicit about both versions, i.e: "package x increased from 1.9.2 to 2.0"

## Component Convention

When creating new components, place the jsx inside their own directory within /frontend/components so that we can include any style sheet (scss) or other static files that the component uses inside that folder.
