
// Inline SVG placeholders (small, colorful) used for demo without external image files
const svg = (bg, text) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <rect width='100%' height='100%' fill='${bg}' />
      <text x='50%' y='50%' font-size='48' fill='white' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif'>${text}</text>
    </svg>
  `)}`;

/* Coffee images */
import espressoImg from '../assets/images/espresso.jpeg';
import latteImg from '../assets/images/latte.jpeg';
import cappuccinoImg from '../assets/images/cappuccino.jpeg';
import mochaImg from '../assets/images/mocha.jpeg';
import americanoImg from '../assets/images/americano.jpeg';

const items = [
  { 
    id: 'espresso',
    name: 'Espresso',
    price: 150,
    image: espressoImg,
    description: 'Rich and bold single shot espresso, perfectly extracted for maximum flavor.'
  },
  {
    id: 'latte',
    name: 'Caffe Latte',
    price: 180,
    image: latteImg,
    description: 'Smooth espresso combined with steamed milk and a delicate layer of foam.'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 200,
    image: cappuccinoImg,
    description: 'Equal parts espresso, steamed milk, and milk foam, topped with cocoa powder.'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    price: 220,
    image: mochaImg,
    description: 'Rich espresso with chocolate, steamed milk, and whipped cream on top.'
  },
  {
    id: 'americano',
    name: 'Americano',
    price: 250,
    image: americanoImg,
    description: 'Espresso diluted with hot water for a rich cup similar to regular coffee.'
  }
];

export default items;
