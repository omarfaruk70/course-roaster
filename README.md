# React + Vite

#### Three Features of the course Registration assignment: 
- You can select any course what you want.
- Once you have selected any course, You can't select at the same course
- You can select multiple course for totally 20 credits. If you cross your limited credit (20 credits or under 0), You will have a warning notification named Toast message.  


### how I  managed a State in this project .

First of all state is a build in React object which contain data for a certain period of time.
State has 1 varriable and 2 function . the varriable contain initial value and the second one is a function like setter function. setter function work with the initial value.. if someone is changing something , the setter function hold it and by passing the value to the varriable. and the value will change in this certain time. however the varriable catch the value from setter function. here is the example,


const [value, setValue] = useState(0);
setValue(value + newValue);
