# Gatsby with styled-components

This project demonstrates a simple application using React, Gatsby, and styled-components. Notable dependencies are..

- `react-responsive`
  - Provides various components for dynamically rendering based on media query style conditions.
- `react-tabs`
  - An accessible ARIA compliant tab component.
- `react-select`
  - An accessible ARIA compliant select component.
- `react-notifications`
  - Some simple, pretty notifications.
- `styled-components`
  - A CSS in JS solution that tightly couples your styles to your components, allowing for enhanced reusability and scalability.

The project is structured as follows..

    .src
    // contains standalone, functional components
    ├── components
    // containers are used to style or compose components
    ├── containers
    // routes for the application, for this we only need an index and 404
    ├── pages
    // constants to be used throughout the project
    ├── constants.js

To run locally, run `npm install -g gatsby-cli` then cd into the project and run `gatsby develop`.
Some mobile design exploration can be seen [here](https://www.figma.com/file/UkgRIj9eGAJdrS2qfy05RhI8/Untitled?node-id=0%3A1). Live demo [here](https://gatsby-styled-components-demo.netlify.com/).

If given design input I would definitely darken the lightest grey (#cecece), which only has a contrast ratio of 1.57. To meet WCAGAA I would darken this to #767575, which would bring the contrast ratio up to 4.59, giving the page AA compliance.
