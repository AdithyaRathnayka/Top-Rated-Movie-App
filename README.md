# Most Popular Movies App

This is a React Native application that displays a list of popular movies fetched from The Movie Database API. Users can view details of each movie by navigating to a dedicated details screen.

## Features

- Fetches popular movies from TMDb API.
- Displays a list of movies with their posters, titles, and overviews.
- Allows users to navigate to a detailed screen for each movie.
- Shows additional movie details including language, popularity, and release date.

## Installation

1. **Clone the repository:**
    git clone https://github.com/yourusername/popular-movies-app.git
    cd popular-movies-app
    

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Link dependencies (if using older versions of React Native):**
    ```bash
    npx react-native link
    ```

4. **Start the Metro bundler:**
    ```bash
    npx react-native start
    ```

5. **Run the app on an Android or iOS device:**
    ```bash
    npx react-native run-android  # for Android
    npx react-native run-ios      # for iOS
    ```

## Usage

1. **Home Screen:**
   - Displays a list of popular movies.
   - Each movie item shows the poster, title, and overview.
   - Tap on a movie to navigate to the details screen.

2. **Movie Details Screen:**
   - Displays detailed information about the selected movie.
   - Shows the movie's poster, overview, language, popularity, and release date.

## Screens

- **HomeScreen.js:**
  Fetches and displays a list of popular movies.
- **MovieScreen.js:**
  Displays detailed information about a selected movie.
- **MovieScreenNavigation.js:**
  Sets up the navigation between the Home screen and the Movie Details screen.

## Dependencies

- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TMDb API](https://developers.themoviedb.org/3)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
