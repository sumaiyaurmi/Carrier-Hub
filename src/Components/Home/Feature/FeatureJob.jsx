import { Link } from "react-router-dom";

const FeatureJob = ({ job }) => {
  const {id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="card-actions ">
            <Link to={`/job/${id}`}>
              
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureJob;
