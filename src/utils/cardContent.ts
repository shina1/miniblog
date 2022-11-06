const sportImg = 'https://images.unsplash.com/photo-1624880357913-a8539238245b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const animeImg = 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const techImg = 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

interface cardInterface{
    id: number,
    lText: string,
    sText: string,
    image: string
}
export const cardContent: cardInterface[] =[ 
    {
    id: 1,
    lText: "Latest Sport News",
    sText: "Through 8/26",
    image: sportImg 
  },
  {
    id: 2,
    lText: "Trending Anime Posts",
    sText: "Added Daily",
    image: animeImg 
  },
  {
    id: 3,
    lText: "Explore The World of Tech ",
    sText: "Stay Updated",
    image: techImg 
  }
]