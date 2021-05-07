### Video demo:


# Movie_UX 

Movie_UX is a simple single web application that uses React.js to implement
- search movie data from OMDB API.
- add movie to my list.
- remove movie from my list.
- display message when list full.

## Technical requirements

[x] Search results com from OMDB's API.

[x] Each search list movie title, year, image and a button to nominate.

[x] Update search terms updates result list.

[] Each movie from the search list can be added and removed from the nomination list.

[x] Disable the button if that movie already in the nominate list.

[] Display mssage when the user has 5 nominations.

## Extras requirements

[] Save nomination lists if the user leaves the page.

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
- create git hub repo to upload.
- install all packages and libraries to project.

[x] Project accesses OMDB API to fetch movie data
- get personal OMDB API key.
- create env.local file to store personal API key.
- fetch movie data from API.

[x] Update search terms updates result list.
- create search bar component in the React project and able to search movie.
- create movie list component in the project to display movies.
- consider boundary cases, movie data with out poster, year, too many movie result.
- each movie in the movie list has a add button.

[x] Add a movie to the nominate list
- create a nominate list component.
- use a global storeage to store movie data for share data with react components.
- use local storage to store data avoid data lose after refresh the webpage/user leaves website.
- nominate list has accesses to movie data that stored.
- avoid same movie been added twuice(disable add button after being added).


[] display added movies in nominate list.

[] Display mssage when the user has 5 nominations.
[] Styling 
[] Deploy project to online
- find a free host.
- find a free domain.
- find a tool to monitor website, get intant feedbacks.
