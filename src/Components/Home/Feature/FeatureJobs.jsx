import { useEffect, useState } from "react";
import FeatureJob from "./FeatureJob";

const FeatureJobs = () => {

    const [jobs,setJobs]=useState([])
const [dataLength,setDataLength]=useState(4);

    useEffect(()=>{
fetch('jobs.json')
.then(res => res.json())
.then (data => setJobs(data))


    } ,[])

    return (
        <div>
            <div className="text-center">
            <h2 className="text-4xl font-semibold"> Featured Jobs :{jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10"> 
                {
jobs.slice(0,dataLength).map( job=> <FeatureJob key={job.id} job={job}></FeatureJob>)

                }
                 </div>
<div className={`text-center my-10 ${dataLength === jobs.length && 'hidden'}`}>
    <button onClick={()=> setDataLength(jobs.length)} className="btn btn-success">Show All </button>
</div>


        </div>
    );
};

export default FeatureJobs;