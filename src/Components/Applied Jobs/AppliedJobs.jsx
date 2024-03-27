// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { getStoredJobAplication } from "../Utility/localStorage";

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobAplication } from "../Utility/localStorage";

// const AppliedJobs = () => {
//   const jobs = useLoaderData();
// const [appliedJobs,setAplliedJobs]=useState([]);
// const [displayJobs,setDisplayJobs]=useState([]);


    
//   useEffect(() => {
//     const storedJobsIds = getStoredJobAplication();
//     if (jobs.length > 0) {
//       const aplliedJob = jobs.filter((job) => storedJobsIds.includes(job.id));
      
// setAplliedJobs(aplliedJob)



//     }
//   }, [jobs]);

//   return (<div className="text-2xl">
//    <h2> Jobs I Applied {appliedJobs.length}</h2>
//    <details className="dropdown">
//   <summary className="m-1 btn">open or close</summary>
//   <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//     <li><a>All</a></li>
//     <li><a>Remote</a></li>
//     <li><a>Onsite</a></li>
//   </ul>
// </details>

//     <ul>
//     {
//         appliedJobs.map(job => <li key={job.id}>
//             <span> {job.job_title} : {job.company_name} : {job.remote_or_onsite}</span>
//              </li>)
//     }
//     </ul>
//   </div>
//   )
// };

// export default AppliedJobs;
const AppliedJobs = () => {

    const jobs=useLoaderData()
    const [appliedJobs,setAplliedJobs]=useState([])
    const [displayJobs,setDisplayJobs]=useState([])

    const handleFilterJobs=(filter)=>{

if (filter=== "ALL"){
    setDisplayJobs(appliedJobs)
}
else if ( filter == 'Remote'){
const remotejobs =appliedJobs.filter( job => job.remote_or_onsite== "Remote")
setDisplayJobs(remotejobs)
}
else if ( filter == 'OnSite'){
const onSitejobs =appliedJobs.filter( job => job.remote_or_onsite== "Onsite")
setDisplayJobs(onSitejobs)
}

    }
    
    useEffect( ()=>{

        const storedJobsID=getStoredJobAplication();
        if(jobs.length >0){

            const jobApplied= jobs.filter(job => storedJobsID.includes(job.id))
            setAplliedJobs(jobApplied);

            setDisplayJobs(jobApplied)
        }


    },[jobs])

    return (
        <div>
            <h3>Applied job : {appliedJobs.length}</h3>
            <details className="dropdown">
  <summary className="m-1 btn">Filter JOBS</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=> handleFilterJobs('All')}><a>All</a></li>
    <li onClick={() => handleFilterJobs ('Remote')}><a>Remote</a></li>
    <li onClick={() => handleFilterJobs ('OnSite')}><a>OnSite</a></li>
  </ul>
</details>
<ul>
    {
        displayJobs.map( job => <li key={job}>
            <span> {job.job_title} : {job.company_name} : {job.remote_or_onsite}</span>
        </li>)
    }
</ul>

        </div>
    );
};

export default AppliedJobs;
