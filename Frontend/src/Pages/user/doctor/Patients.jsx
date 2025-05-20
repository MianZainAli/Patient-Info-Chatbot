import { useEffect, useState } from "react";
import { fetchUsers } from "../../../Utils/Data";


const Patients=()=>{
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
      const loadDoctors = async () => {
          try {
              const data = await fetchUsers(); 
              const filteredDoctors = data.filter(user => user.role === 'patient'); // Filter doctors based on role
              setDoctors(filteredDoctors);
          } catch (err) {
              console.error(err);
          } finally {
          }
      };

      loadDoctors();
  }, []);

    return(
        <>
        <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
  <h5 className="mb-0">Patients List</h5>
  <div className="row">
  {doctors.map((doctor) => (
                            <div key={doctor.id} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="card team border-0 rounded shadow overflow-hidden">
                                    <div className="team-img position-relative">
                                        <img
                                            src={"../assets/images/default.jpg"} // Fallback to default image
                                            className="img-fluid"
                                            alt={doctor.first_name}
                                        />
                                    </div>
                                    <div className="card-body content text-center">
                                        <a href="#" className="title text-dark h5 d-block mb-0">
                                            {doctor.first_name} {doctor.last_name}
                                        </a>
                                        <small className="text-muted speciality">{doctor.speciality}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
    {/*end col*/}
  </div>
  {/*end row*/}
  <div className="row text-center">
    <div className="col-12 mt-4 pt-2">
      <ul className="pagination justify-content-center mb-0 list-unstyled">
        <li className="page-item">
          <a
            className="page-link"
            href="javascript:void(0)"
            aria-label="Previous"
          >
            Prev
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="javascript:void(0)">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="javascript:void(0)">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="javascript:void(0)">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="javascript:void(0)" aria-label="Next">
            Next
          </a>
        </li>
      </ul>
      {/*end pagination*/}
    </div>
    {/*end col*/}
  </div>
  {/*end row*/}
</div>

        </>
    )
}

export default Patients