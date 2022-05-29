## Inspiration
Writing a Todo everyday consistently can get tedious pretty quickly but instead what if we just write journal and your todo appears just like that, Tada!
## What it does
At every night the user needs to write journal like they usually do. And if they want to make a todo list for future they can just write it normally like a journal and by using a simple syntax. For, example writing " Tomorrow I need \todo{Go for a jog} will create a todo list with it's title being "Go for a jog". And the timing, description, etc.., can also be set by using respective simple syntaxes.
## How we built it
This website was built using MERN stack and also used twilio API for messaging.

## Video Link
https://drive.google.com/drive/folders/1LD0iObHCldaWd9uML4W3zAO8dN0VINtO?usp=sharing

# Features

## ToDo
- The ToDo feature helps us to create the task list for the day
- It has the option to add the title, description, start-time, end-time, tags, importance and urgency, for which the syntax is \todo{},  \desc{}, \start-time{}, \end-time{}, \tags{}, \importance{} and \urgency{}
- the importance and urgency feature are used to show the user the best way to go by the day's tasks i.e the most
prioirtised tasks are the one which are important and urgent
- Search by tags helps the user to search through his list of tasks for the day using tags

## Diary 
- This feature helps the user to write his goals for the day in the form of a journal
- latex like syntax is used to make ToDo tasks within the diary
- Showing the previous incomplete tasks of yesterday's tasks, the user can make decisions on the tasks to complete today
- Using Twillo API, we provide the user to show gratitude for a person, and send it to him via SMS while writing his journal

## Installations

### Node

* For Linux:
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```

* For Mac:
```
brew install node
```

### MongoDB

Install the community edition [here](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials).


### React

```
npm install -g create-react-app
```

* To create a new React app:
```
create-react-app name_of_app
```

* To run the app, cd into the directory and do:
```
npm start
```

## Running the boilerplate

* Run Mongo daemon:
```
sudo mongod
```
Mongo will be running on port 27017.


* Run Express Backend:
```
cd backend/
npm install
npm start
```

* Run React Frontend:
```
cd frontend
npm install/
npm start
```

Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.
