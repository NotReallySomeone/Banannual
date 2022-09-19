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
    text: 'Advertisements with high number of traffic is included, even in the Starter Pack, traffic to your website will be ensured through the method know as SPAMMING.'
  },
  {
    id: 2,
    icon: <BiDollarCircle style={{ fill: gradient }} />,
    title: 'Trade Shows',
    text: 'Code embbeding is easier with the embbeding provided, the products you sell are displayed together with similiar stores in the first pages of search engines.'
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
    text: 'Not sure about what exactly you want in your website? Choose from thousand of website templates, from Basic to the Deluxe package.'
  },
  {
    id: 5,
    icon: <ImMagicWand style={{ fill: gradient }} />,
    title: 'Grpahic Design',
    text: 'Our dev make sure your project looks the same in all devices, both from potato-mode and eyecandy.'
  },
  {
    id: 6,
    icon: <FaShoppingCart style={{ fill: gradient }} />,
    title: 'Media Buying',
    text: "You don't have to start from strach, low price BOTS are available."
  }
]

const about = [
  {
    id: 7,
    text: 'Constant upgrade and research with the lastest codes to ensure that your website will need very few manuctention over time.'
  }
]

const qualities = [
  {
    id: 8,
    icon: <FaFileAlt style={{ fill: gradient }} />,
    title: 'Ideas & Plans',
    text: 'Cryptocoins and bananas are now accepted as payment methods.'
  },
  {
    id: 9,
    icon: <AiOutlineReload style={{ fill: gradient }} />,
    title: 'Prompt Strategies',
    text: 'With the current nature friendly methods, it is scheduled to ensure that our food comes from renewable sources, such as road-kill meat.'
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
    name: 'Otto Hawk',
    text: 'Bullshit text placeholder',
    image: images.customer_img_3,
    rating: 2
  },
  {
    id: 22,
    name: 'Chris P. Bacon',
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
    name: 'Cheeseburger',
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
    info: 'Bannanual@info.com',
    text: 'Bullshit text placeholder'
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: 'Where the heck am I?, Sea',
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
