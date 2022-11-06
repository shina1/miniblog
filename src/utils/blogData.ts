export interface blogDataType{
    id: number,
    name: string,
    category: string,
    featured: boolean,
    image: string,
    content: string
}

export const blogMenuData: blogDataType[] = [
    {
        id: 1,
        name: 'Fast Food',
        category: 'anime',
        featured: true,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' ,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
            },
    {
        id: 2,
        name: 'Double CheeseBurger',
        category: 'anime',
        featured: false,
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 3,
        name: 'Mushroom Burger',
        category: 'technology',
        featured: true,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 4,
        name: 'Loaded Burger',
        category: 'anime',
        featured: true,
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 5,
        name: 'Ewedu and Gbegiri',
        category: 'technology',
        featured: false,
        image: 'https://914731.smushcdn.com/2252062/wp-content/uploads/2020/03/gbegiri-recipe-abula-img-1.jpg?lossy=0&strip=0&webp=1',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
            },
    {
        id: 6,
        name: 'Soy Salad',
        category: 'sports',
        featured: true,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
            },
    {
        id: 7,
        name: 'Chicken Pizza',
        category: 'sports',
        featured: false,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 8,
        name: 'RaspBerry Cake',
        category: 'anime',
        featured: true,
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 9,
        name: 'Eyin Bibo Pelu Ewe',
        category: 'technology',
        featured: false,
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 10,
        name: 'Vegan',
        category: 'technology',
        featured: true,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
            },
    {
        id: 11,
        name: 'Grilled Chicken',
        category: 'sports',
        featured: true,
        image: 'https://static.toiimg.com/thumb/53222760.cms?imgsize=312586&width=509&height=340',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 12,
        name: 'Juice Grilled Chicken',
        category: 'sports',
        featured: true,
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2021/06/Grilled-Chicken-Recipe-5-1200.jpg',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 13,
        name: 'Baked Snacks',
        category: 'anime',
        featured: false,
        image: 'https://thumbs.dreamstime.com/b/nigerian-meat-pie-puff-fish-roll-stick-gizzard-pastries-small-chops-white-saucer-break-breakfast-snack-food-concept-137033450.jpg',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 14,
        name: 'Nigerian Jolof',
        category: 'technology',
        featured: true,
        image: 'https://restaurantclicks.com/wp-content/uploads/2022/06/Popular-Nigerian-Food.jpg',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 15,
        name: 'Efo Riro',
        category: 'sports',
        featured: true,
        image: 'https://www.forksandfingers.co.uk/wp-content/uploads/2019/06/Plate-of-edikang-ikong.-Photo-Twitter-e1527115824269-860x483-1.jpg',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 16,
        name: 'Fried Dodo',
        category: 'anime',
        featured: true,
        image: 'https://thumbs.dreamstime.com/b/nigerian-food-delicious-fried-plantain-red-chilli-sauce-table-lunch-tasty-african-cuisine-nigerian-food-delicious-185024971.jpg',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 17,
        name: 'Pap and MoiMoi',
        category: 'technology',
        featured: true,
        image: 'https://thumbs.dreamstime.com/b/tasty-meal-nigerian-moi-moi-tasty-cereal-pap-tray-three-metal-cups-beans-cake-nigerian-moi-moi-served-191917082.jpg',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
        
    },
    {
        id: 18,
        name: 'K K',
        category: 'sports',
        featured: false,
        image: 'https://thumbs.dreamstime.com/b/nigerian-snack-kuli-kuli-made-gari-ground-nuts-its-savory-dish-prepared-women-south-western-parts-76320010.jpg',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem ad natus explicabo, odit nemo dolorum fugiat suscipit minima illo reprehenderit magnam officiis esse iste, qui assumenda similique veritatis sunt.
                Dicta, incidunt iure officia quam dolorum nihil deleniti fuga vitae tempora nisi quis dolorem officiis quibusdam eum. Neque excepturi atque enim, sit odit expedita impedit aperiam sequi dolor tempore quos?
                Iusto eaque mollitia perspiciatis quasi cupiditate inventore minima cum dolor. Explicabo similique voluptatem ad id alias voluptates vero. Error quod vitae nesciunt atque nobis quaerat molestiae nihil accusantium tenetur tempore.`
            },
]

export const categories = [
    {
        id:'1',
        name:'sports',
        images:'https://www.forksandfingers.co.uk/wp-content/uploads/2019/06/Plate-of-edikang-ikong.-Photo-Twitter-e1527115824269-860x483-1.jpg'
    },
    {
        id:'2',
        name:'anime',
        images:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        id:'3',
        name:'technology',
        images:'https://www.inspiredtaste.net/wp-content/uploads/2021/06/Grilled-Chicken-Recipe-5-1200.jpg'
    },
]