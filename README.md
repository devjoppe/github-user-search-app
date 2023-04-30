# GitHub user search app

This is my solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). 

## The solution

**⭐ Solution URL:** [Link to my GitHub user search app](https://www.github.com/devjoppe)

## Built with

- Mobile-first workflow
- Github API
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend tooling

## Screenshot
![Screenshot](public/screenshot.png)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

### Expected behaviour

- [x]  On first load, show the profile information for my own Github profile.
- [x]  Display an error message (as shown in the design) if no user is found when a new search is made.
- [x]  If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- [x]  If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- [x]  If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- [x]  Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.