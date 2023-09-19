import PropTypes from "prop-types";
const HighlightCourses = ({ course, totalcreditHours, totalPrice, remainingCreditHour }) => {
  // console.log(course);
  // const {course_title, credit_hours, total_price} = course
  // console.log(course_title)

  return (
    <div className="w-1/3 flex items-start flex-col">
      <h3 className="font-bold">Total selected course: {course.length}</h3>
      <h2 className="text-xl font-bold text-blue-600 border-b-2 border-b-gray-700 mb-2">
        Credit Hour remaining : {remainingCreditHour} Hrs
      </h2>
      <div className="border-b-2 border-b-gray-700">
        <h3 className="font-bold text-2xl">Course Name : </h3>

        {course.map((item, idx) => (
          <div key={idx}>
            <div>
              <ol className="font-semibold">{item.course_title}</ol>
            </div>
          </div>
        ))}
      </div>
         <h1 className="text-lg font-bold mb-3 border-b-2 border-b-slate-400">Total Credit Hours: {totalcreditHours}</h1>
         <h3 className="text-lg ">Total Price: {totalPrice} USD</h3>
      <div className="bg-slate-500">
      </div>
    </div>
  );
};

HighlightCourses.propTypes = {
  course: PropTypes.array.isRequired,
  totalcreditHours: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  remainingCreditHour: PropTypes.number.isRequired
};
export default HighlightCourses;
