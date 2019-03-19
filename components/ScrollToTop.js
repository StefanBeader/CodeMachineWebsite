import Scroll from '../functions/Scroll';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronCircleUp} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronCircleUp);

const ScrollToTop = () => {
  return (
    <div onClick={() => Scroll('nav')} className="scroll-to-top">
      <FontAwesomeIcon icon={faChevronCircleUp}/>
    </div>
  )
};

export default ScrollToTop;