import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectBtn}) => {
    // state for all data 
    const [data, setdata] = useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setdata(data))
    }, [])

    return (
        <div className="w-2/3">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {
            data.map((singleData, idx) => <Course key={idx} handleSelectBtn={handleSelectBtn} singleData={singleData}></Course>)
        }
        </div>

        </div>
    );
};


Courses.propTypes = {
    handleSelectBtn: PropTypes.func.isRequired
}
export default Courses;