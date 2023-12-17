interface ProductProps {
  id: number,
  name: string,
  url: string | null | undefined,
  description: string,
  price: number | null,
  stars: number,
  discount: string | null,
  discountPrice: number | null,
  added: boolean,
  new: boolean,
  category: string[],
  color: string[],
  size: string[],
}

export const products: ProductProps[] = [
  {
    id: 1,
    name: "Christmas Tree Decoration",
    url: "/images/iCodeMas/tree.png",
    description: "Perfect for adding a festive touch to any space, this miniature tree brings the magic of Christmas right into your home. Crated with care, its a delightful addition to your Christmas furniture.",
    price: 19.99,
    stars: 4,
    discount: null,
    discountPrice: null,
    added: false,
    new: true,
    category: ['ornaments'],
    color: ['green'],
    size: ['large'],
  },
  {
    id: 2,
    name: "Gift Box",
    url: "/images/iCodeMas/gift.png",
    description: "A surprise secret Santa gift wrapped with love and care with the festive season.",
    price: 19.99,
    stars: 4,
    discount: "-23%",
    discountPrice: 9.99,
    added: false,
    new: false,
    category: ['ornaments'],
    color: ['red', 'white'],
    size: ['medium'],
  },
  {
    id: 3,
    name: "Gingerbread Man Cookie",
    url: "/images/iCodeMas/gingerbread_cookie.png",
    description: "Perfect for the festive holidays. You can enjoy them with your favourite hot cococa sitting beside the fireplace, feeling the warmth of the family bond during this Christmas Season.",
    price: 12.99,
    stars: 5,
    discount: null,
    discountPrice: null,
    added: true,
    new: false,
    category: ['cookies', 'ornaments'],
    color: ['brown'],
    size: ['small'],
  },
  {
    id: 4,
    name: "Snowflake Decoration",
    url: "/images/iCodeMas/snowflake.png",
    description: "Perfect for the festive holidays. You can enjoy them with your favourite hot cococa sitting beside the fireplace, feeling the warmth of the family bond during this Christmas Season",
    price: 4.99,
    stars: 3,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['ornaments'],
    color: ['white'],
    size: ['small'],
  },
  {
    id: 5,
    name: "Star-shaped Cookie",
    url: "/images/iCodeMas/star_cookie.png",
    description: "",
    price: 12.99,
    stars: 5,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['cookies', 'ornaments'],
    color: ['brown'],
    size: ['small'],
  },
  {
    id: 6,
    name: "Santa Hat",
    url: "/images/iCodeMas/santa_hat.png",
    description: "",
    price: 39.99,
    stars: 5,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['accessories'],
    color: ['red', 'white'],
    size: ['medium'],
  },
  {
    id: 7,
    name: "Candy Cane",
    url: "/images/iCodeMas/candy_cane.png",
    description: "",
    price: 8.99,
    stars: 2,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['candles', 'ornaments'],
    color: ['red', 'white'],
    size: ['large'],
  },
  {
    id: 8,
    name: "Snowman Decoration",
    url: "/images/iCodeMas/snowman_deco.png",
    description: "",
    price: 39.99,
    stars: 4,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['candles', 'ornaments'],
    color: ['red', 'white'],
    size: ['large'],
  },
  {
    id: 9,
    name: "Christmas Ball",
    url: "/images/iCodeMas/christmas_ball.png",
    description: "",
    price: 4.99,
    stars: 5,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['ornaments'],
    color: ['red', 'white'],
    size: ['small'],
  },
  {
    id: 10,
    name: "Christmas Red Socks",
    url: "/images/iCodeMas/christmas_sock.png",
    description: "",
    price: 29.99,
    stars: 2,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['ornaments'],
    color: ['red', 'white'],
    size: ['medium'],
  },
  {
    id: 11,
    name: "Red Ribbon",
    url: "/images/iCodeMas/red_ribbon.png",
    description: "",
    price: 3.99,
    stars: 3,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['accessories'],
    color: ['red'],
    size: ['small'],
  },
  {
    id: 12,
    name: "Christmas Tree Cookie",
    url: "/images/iCodeMas/tree_cookie.png",
    description: "",
    price: 13.99,
    stars: 5,
    discount: null,
    discountPrice: null,
    added: false,
    new: false,
    category: ['cookies', 'ornaments'],
    color: ['red', 'green', 'white', 'brown'],
    size: ['small'],
  },
];

export type FilterProps = {
  label: string;
  value: string | number;
};

export interface FilterCategory {
  type: string;
  title: string;
  items: FilterProps[];
}

export const filters: FilterCategory[] = [
  {
    type: 'category',
    title: 'Category',
    items: [
      { label: 'Cookies', value: 'cookies' },
      { label: 'Candles', value: 'candles' },
      { label: 'Ornaments', value: 'ornaments' },
      { label: 'Accessories', value: 'accessories' },
    ],
  },
  {
    type: 'color',
    title: 'Color',
    items: [
      { label: 'Red', value: 'red' },
      { label: 'White', value: 'white' },
      { label: 'Green', value: 'green' },
      { label: 'Brown', value: 'brown' },
    ],
  },
  {
    type: 'size',
    title: 'Size',
    items: [
      { label: 'Small', value: 'small' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large' },
    ],
  },
];