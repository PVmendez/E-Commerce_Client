import "./Services.css"

export const Services = () => {
  return (
    <div className="services mb-5">
        <h1>TECNOLOGIAS</h1>
        <div className="cen">
          <div className="service">
            <i className="fa-brands fa-react"></i>
            <h2>REACT JS</h2>

          </div>

          <div className="service">
            <i className="fa-brands fa-html5"></i>
            &ensp;
            <i className="fa-brands fa-css3-alt"></i>
            <h2>HTML & CSS</h2>
 
          </div>

          <div className="service">
          <i className="fa-solid fa-database"></i>
            <h2>SQL</h2>
          </div>
        </div>
      </div>
  )
}