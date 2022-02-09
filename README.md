# Simulator

2022 is FIFA world Cup year. As a big fan of soccer I decided to build this project to help me play with the possible results.

The **_first phase_** is to have a functional prototype with the current edition of the world cup by the end of february 2022.

The **_second phase_** is to have a world cup draw simulator as a tab in the application by the end of march.

The **_third phase_** is to update the app because the format of the competiton is changing after the 2022 edition.

The project will use Vue.Js in the frontend, Sass to help with CSS and json-server to act as a mock backend.

## Project setup

```
npm install
npm run serve
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### January 26, 2022:

-   Created repo and setup the project.
-   Setup Sass.

### January 27, 2022:

-   Installed **_Json Server_**.

### January 28, 2022:

-   Making global Sass.

### January 29, 2022:

-   Figured out the best way to add country flags to the project. Tried **_flag-icons_** but it didn't work. Decided to go with basic png flaticons.

### January 30, 2022:

-   Added **_global.scss_**.
-   Created **_Match_** component.
-   Created **_mixins.scss_** to help with standard styles.
-   Added basic style to **_Match_** component.

### February 06, 2022:

-   Added grid to **_Match_** component.
-   Structured **_Match_** component to receive external data.

### February 07, 2022:

-   Small adjustments.
-   Added edit button to **_Match_** component.
-   Installed **_feather-icons_**.
-   Added edit icon to edit button.
-   Added edit logic to the component.
-   Edition is working.
-   Added confirm icon to edit button when editing.
-   Handled some small usability issues like the possibility to leave the input blank.

![Match component](https://github.com/ClaudioKamoda/World-Cup-Simulator/blob/main/src/assets/progressGifs/feb0722.gif)

### February 08, 2022:

-   Created **_NavBar_** component.
-   Setup **_Vuex_**.
