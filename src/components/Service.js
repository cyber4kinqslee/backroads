import { services } from '../data'
const Service = () => {
  return (
    <div className="section-center services-center">
      {services.map((link) => {
        return (
          <article key={link.id} className="service">
            <span className="service-icon">
              <i className={link.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{link.title}</h4>
              <p className="service-text">{link.text}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
export default Service
