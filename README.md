# Microgame "Who wants to be a millionaire":moneybag:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


If you want to try to become a millionaire, you need to download
this repository to your laptop and install all required dependencies.

## Used technologies:
- **React**, **JSX**, **ES6**
- **[Prop-types](https://github.com/facebook/prop-types)** (in the future should be replaced by TypeScript) 
  for prop validation
- **[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)** for routing
  between Home, Score, Game and Greeting pages
    
- **Eslint** and **Prettier** for making code more readable

## Step by step instructions how you should do this:
1. Open directory where you want to download the game.
2. Open Command Prompt/Terminal and navigate to this folder by command:  
`cd folder_name`


3. To download gitlab repo:
`git clone https://github.com/IrynaBakal/Who-wants-to-be-a-Millionaire.git`
   
4. For installing all needed dependencies:
`npm install`

5. For launching game in your web browser:
`npm start`
This step should automatically open [http://localhost:3000/](http://localhost:3000/), 
   but if this does not happen, open this link by yourself.

That's all! Now you can safely try to get your first million:tada::money_with_wings:


## Encountered problems during development proccess:
1. For validation props and function arguments will be more
   effective to replace Prop-types by TypeScript

2. Layout for mobile screens is far from ideal, this is espacially true
   for polygon items.

3. Not covered cases if backend sends invalid data in game config.

4. It is worth to add scrollbar for cases if config will have more
   than 12 questions or height of mobile/tablet devices will be too small.

5. For utils and jsx is good approach to add unit tests and shallow testing.



