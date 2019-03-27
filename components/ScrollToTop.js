import Scroll from '../functions/Scroll';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronUp);

const ScrollToTop = () => {
  return (
    <div onClick={() => Scroll('nav')} className="scroll-to-top">
      <FontAwesomeIcon icon={faChevronUp}/>
    </div>
  )
};

export default ScrollToTop;