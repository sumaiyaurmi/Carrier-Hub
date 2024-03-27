import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveJobAplication } from "../../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);

  const job = jobs.find((job) => job.id === intId);
//   console.log(job);

  const handleApplyBtn =()=>{

saveJobAplication(intId)

    toast("Applied Successfully")

  }

  return (
    <div>
      <h1 className="text-center mx-auto my-6 text-4xl font-semibold">
        {" "}
        Details of {job.job_title}
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 border">
          Dtails Here<h3></h3>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h4>Side thinfs here</h4>
          <button  onClick={handleApplyBtn} className="btn btn-success">Apply Now</button>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
