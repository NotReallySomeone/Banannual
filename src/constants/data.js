import images from './images'
import {
  FaPaperPlane,
  FaEdit,
  FaRocket,
  FaShoppingCart,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { BiDollarCircle } from 'react-icons/bi'
import { ImMagicWand } from 'react-icons/im'
import { AiOutlineReload } from 'react-icons/ai'

const gradient = 'url(#blue-gradient)'

const services = [
  {
    id: 1,
    icon: <FaPaperPlane style={{ fill: gradient }} />,
    title: 'Digital Marketing',
    text: 'Bullshit text placeholder'
  },
  {
    id: 2,
    icon: <BiDollarCircle style={{ fill: gradient }} />,
    title: 'Trade Shows',
    text: 'Bullshit text placeholder'
  },
  {
    id: 3,
    icon: <FaRocket style={{ fill: gradient }} />,
    title: 'Branding',
    text: 'Bullshit text placeholder'
  },
  {
    id: 4,
    icon: <FaEdit style={{ fill: gradient }} />,
    title: 'Content Creation',
    text: 'Bullshit text placeholder'
  },
  {
    id: 5,
    icon: <ImMagicWand style={{ fill: gradient }} />,
    title: 'Grpahic Design',
    text: 'Bullshit text placeholder'
  },
  {
    id: 6,
    icon: <FaShoppingCart style={{ fill: gradient }} />,
    title: 'Media Buying',
    text: 'Bullshit text placeholder'
  }
]

const about = [
  {
    id: 7,
    text: 'Bullshit text placeholder'
  }
]

const qualities = [
  {
    id: 8,
    icon: <FaFileAlt style={{ fill: gradient }} />,
    title: 'Ideas & Plans',
    text: 'Bullshit text placeholder'
  },
  {
    id: 9,
    icon: <AiOutlineReload style={{ fill: gradient }} />,
    title: 'Prompt Strategies',
    text: 'Bullshit text placeholder'
  }
]

const features = [
  {
    id: 10,
    title: 'Digital Marketing',
    text: 'Bullshit text placeholder'
  },
  {
    id: 11,
    title: 'Trade Shows',
    text: 'Bullshit text placeholder'
  },
  {
    id: 12,
    title: 'Branding',
    text: 'Bullshit text placeholder'
  },
  {
    id: 13,
    title: 'Content Creation',
    text: 'Bullshit text placeholder'
  },
  {
    id: 14,
    title: 'Graphic Design',
    text: 'Bullshit text placeholder'
  },
  {
    id: 15,
    title: 'Media Buying',
    text: 'Bullshit text placeholder'
  }
]

const portfolio = [
  {
    id: 16,
    title: 'Bullshit text placeholder',
    text: 'Bullshit text placeholder',
    image: images.portfolio_img_1
  },
  {
    id: 17,
    title: 'Bullshit text placeholder',
    text: 'Bullshit text placeholder',
    image: images.portfolio_img_2
  },
  {
    id: 18,
    title: 'Bullshit text placeholder',
    text: 'Bullshit text placeholder',
    image: images.portfolio_img_3
  }
]

const testimonials = [
  {
    id: 19,
    name: 'Marie Jordan',
    text: 'Bullshit text placeholder',
    image: images.customer_img_1,
    rating: 3
  },
  {
    id: 20,
    name: 'Ann Brown',
    text: 'Bullshit text placeholder',
    image: images.customer_img_2,
    rating: 5
  },
  {
    id: 21,
    name: 'Andrew Bill',
    text: 'Bullshit text placeholder',
    image: images.customer_img_3,
    rating: 2
  },
  {
    id: 22,
    name: 'Jason Stawer',
    text: 'Bullshit text placeholder',
    image: images.customer_img_4,
    rating: 4
  },
  {
    id: 23,
    name: 'Lisa Green',
    text: 'Bullshit text placeholder',
    image: images.customer_img_5,
    rating: 2
  },
  {
    id: 24,
    name: 'Anna Doe',
    text: 'Bullshit text placeholder',
    image: images.customer_img_6,
    rating: 4
  }
]

const contact = [
  {
    id: 25,
    icon: <FaPhoneAlt style={{ fill: gradient }} />,
    info: '+425 235 712',
    text: 'Bullshit text placeholder'
  },
  {
    id: 26,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    info: 'solnhub@info.com',
    text: 'Bullshit text placeholder'
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: 'United Kingdom, New Street',
    text: 'Bullshit text placeholder'
  }
]

const sections = {
  services,
  about,
  qualities,
  features,
  portfolio,
  testimonials,
  contact
}

export default sections
