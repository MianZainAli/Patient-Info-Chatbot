const About = () => {
    return (
        <>
            <section
                className="bg-half-170 d-table w-100"
                style={{ background: 'url("../assets/images/bg/about.jpg") center center' }}
            >
                <div className="bg-overlay bg-overlay-dark" />
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="sub-title mb-4 text-white title-dark">About us</h3>
                                <p className="para-desc mx-auto text-white-50">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                    <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Doctris</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            About us
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>


            <div className="position-relative">
                <div className="shape overflow-hidden text-color-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>


            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="position-relative">
                                <img
                                    src="../assets/images/about/about-2.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="play-icon">
                                    <a
                                        href="#!"
                                        data-type="youtube"
                                        data-id="yba7hPeTSjk"
                                        className="play-btn lightbox video-play-icon"
                                    >
                                        <i className="mdi mdi-play text-primary rounded-circle shadow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                            <div className="ms-lg-4">
                                <div className="section-title me-lg-5">
                                    <span className="badge rounded-pill bg-soft-primary">
                                        About Doctris
                                    </span>
                                    <h4 className="title mt-3 mb-4">
                                        Good Services And Better <br /> Health By Our Specialists
                                    </h4>
                                    <p className="para-desc text-muted">
                                        Great doctor if you need your family member to get effective
                                        immediate assistance, emergency treatment or a simple
                                        consultation.
                                    </p>
                                    <p className="para-desc text-muted">
                                        The most well-known dummy text is the 'Lorem Ipsum', which is said
                                        to have originated in the 16th century. Lorem Ipsum is composed in
                                        a pseudo-Latin language which more or less corresponds to 'proper'
                                        Latin. It contains a series of real Latin words.
                                    </p>
                                    <div className="mt-4">
                                        <a href="javascript:void(0)" className="btn btn-soft-primary">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge rounded-pill bg-soft-primary mb-3">
                                    Departments
                                </span>
                                <h4 className="title mb-4">Our Medical Services</h4>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row">
                        <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-eye-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="#" className="title text-dark h5">
                                        Eye Care
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="#" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-psychotherapy-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="#" className="title text-dark h5">
                                        Psychotherapy
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="#" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-stethoscope-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="#" className="title text-dark h5">
                                        Primary Care
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="#" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-capsule-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="#" className="title text-dark h5">
                                        Dental Care
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="#" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-microscope-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="#" className="title text-dark h5">
                                        Orthopedic
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="#" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-pulse-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="#" className="title text-dark h5">
                                        Cardiology
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="#" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-empathize-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="#" className="title text-dark h5">
                                        Gynecology
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="#" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-mind-map h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="#" className="title text-dark h5">
                                        Neurology
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="#" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                
                {/*end container*/}
            </section>

        </>
    )
}

export default About