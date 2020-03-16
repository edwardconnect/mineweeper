This task was implemented with ReactJS.

I use reducer to do the state management.

Although I cannot finish it, I have idea on implementing the features of this game. 

##### 1. Handle the refresh 
In order to make the game date persists, I will store the data and a threat that indicates whether the game in process into localstorage whenever the component is destoried. And everytime the component is init, it will read the localstorage to determine it's a new game or ongoing game.
##### 2. Boom position allocation
Whenever that game start, it will read the settings object to calculate the boom positions by generating a unique position index.
