import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import HighlightCourses from "./components/Highlights-courses/HighlightCourses";

function App() {

  const [course, setCourse] = useState([]);
  const [totalcreditHours, setTotalCreditHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingCreditHour, setRemainingCreditHour] = useState(20)


  const handleSelectBtn = (courseInfo) => {
    // remove duplicate course Name
    const isExist = course.find(courseName => courseName.course_title === courseInfo.course_title);
    if(isExist){
    return  toast.error('You can not select same course again')
    }

    
    if(totalcreditHours + courseInfo.credit_hours > 20 && remainingCreditHour <= 20){
      return toast.warning('Your remaining credit hour and total credit hour is finished !')
    }
    setCourse([...course, courseInfo]);

    
    
      setTotalCreditHours(totalcreditHours + courseInfo.credit_hours);
      setTotalPrice(totalPrice + courseInfo.total_price)
      setRemainingCreditHour(remainingCreditHour - courseInfo.credit_hours)
    
    
  };
  return (
    <>
      <Header></Header>
      <div className="max-w-7xl  mx-auto flex items-center flex-col md:flex-col md:items-center lg:flex-row lg:items-start gap-5 mt-3">
        <Courses handleSelectBtn={handleSelectBtn}></Courses>
        <HighlightCourses course={course}  totalcreditHours={totalcreditHours} totalPrice={totalPrice} remainingCreditHour={remainingCreditHour}></HighlightCourses>
         <ToastContainer />
      </div>
    </>
  );
}

export default App;
