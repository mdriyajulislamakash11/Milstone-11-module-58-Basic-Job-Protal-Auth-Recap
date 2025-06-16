import { useParams } from "react-router-dom";

const JobApply = () => {
  const { id } = useParams();

  const handleJobApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const github = form.github.value;
    const linkdin = form.linkdin.value;
    const resume = form.resume.value;

    console.log({ github, linkdin, resume });
  };

  return (
    <div className="my-40">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center text-5xl font-bold">Apply Job</h2>
        <form onSubmit={handleJobApply} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub URL</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="Github URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkdin URL</span>
            </label>
            <input
              type="url"
              name="linkdin"
              placeholder="Linkdin URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
