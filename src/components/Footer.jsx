import Pagelink from './PageLink'
import SocialLink from './SocialLink'
const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelink parentClass={'footer-links'} itemClass={'footer-link'} />
      <SocialLink parentClass={'footer-icons'} itemClass={'footer-icon'} />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
