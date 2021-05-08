### Video demo: https://youtu.be/93V4qBh2oxw
### live application: http://movie-ux.herokuapp.com/


# Movie_UX 

Movie_UX is a simple single web application that uses React.js to implement. 
User can search movies by movie title and add/remove any movies to Nominate List.

## Technical requirements

[x] Search results com from OMDB's API.

[x] Each search list movie title, year, image and a button to nominate.

[x] Update search terms updates result list.

[x] Each movie from the search list can be added and removed from the nomination list.

[x] Disable the button if that movie already in the nominate list.

[x] Display mssage when the user has 5 nominations.

## Extras requirements

[x] Save nomination lists if the user leaves the page.

## How to run program

### `git clone & npm install`

Clone project to local machine and run 'npm intall' to install related libraries and packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# Project/Task Plan:
 
[x] Set up React and create Development environment
- set up react, node.js, javascript to local machine.
- build a starter react app for start.
- create github repo to upload.
- install all packages and libraries to project.
 
[x] Project accesses OMDB API to fetch movie data
- hard coded personal OMDB API key.
- fetch movie data from API.
 
[x] Update search terms updates result list.
- create a search bar component in the React project and be able to search movies.
- create a movie list component in the project to display movies.
- consider boundary cases, movie data without poster, year, too many movie results.
- each movie in the movie list has an add button.
 
[x] Add a movie to the nominate list
- create a nominate list component.
- use a global storage to store movie data for sharing data with react components.
- use local storage to store data, avoid data loss after refresh the webpage/user leaves the website.
- nominate list has access to movie data that is stored.
- avoid the same movie being added twice(disable add button after being added).
 
[x] display added movies in the nominate list.
- each movie in the nominate list has a remove button.
- when no movie is in the list, show a message that the list is empty add a movie.
 
[x] implement remove button
- clicking the remove button removes that movie from the list.
- if there are no movies in the list a message shows the list is empty.
- after a movie is removed, that movie's add button in the search list available again.
 
[x] Limit 5 movies in the nominate list.
- when 5 movies are in the list, I can not add more movies.
- after reaching 5 movies and trying to add more, show a message that the list is already full.
 
[x] Styling
- search list and nominate list shows side by side
- styled add, remove button
 
[x] Deploy project to online
- find a free host.
- find a free domain.
- find a tool to monitor website, get instant feedback.

## Errors had during the project
1. styling issue, 
2. use https in fetch api since deploy host only support secure URL.

## Furthuer updates
- add more styling.
- multi device friendly.
- animation with button.
- menu bar for more pages.

## Other resources about me!!
- webpage: https://salty-plateau-66836.herokuapp.com/
- youtube: https://www.youtube.com/channel/UCqcV1s_Wo0XHUSpIdX29UDQ
