import { aboutUs } from '../data'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      {aboutUs.map((about) => {
        return (
          <div className="section-center about-center">
            <div className="about-img">
              <img src={about.img} className="about-photo" alt="awesome beach" />
            </div>
            <article className="about-info">
              <h3>{about.title}</h3>
              <p>{about.text}</p>
              <a href="facebook.com" className="btn">
                {about.button}
              </a>
            </article>
          </div>
        )
      })}
    </section>
  )
}
export default About
