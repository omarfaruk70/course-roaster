import PropTypes from 'prop-types';
const Course = ({singleData, handleSelectBtn}) => {
    const {course_title, cover, credit_hours, description, total_price} = singleData;
    // console.log(singleData);
   
    return (
        <div>
            <img src={cover} alt="course-cover" />
            <h3 className="text-lg font-bold">{course_title}</h3>
            <p className="font-thin">{description}</p>
            <div className="flex justify-between">
                <p className="font-semibold">Price: {total_price} $</p>
                <p className="font-bold italic">Credit: {credit_hours} Hrs</p>
            </div>
           <div className="mt-5 mx-2">
           <button onClick={()=> handleSelectBtn(singleData)} className="w-full py-2 text-white rounded-lg  bg-blue-800">Select</button>
           </div>
        </div>
    );
};

Course.propTypes = {
    singleData: PropTypes.object.isRequired,
    handleSelectBtn: PropTypes.func.isRequired

}
export default Course;