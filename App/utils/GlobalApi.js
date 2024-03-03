import { request, gql } from 'graphql-request'


const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clt84tba3148507uslaes4qb0/master"

const getSlider=async()=>{
   
const query = gql`
query GetSliders {
    slider{
      id,
      name,
      image{
      url
      }
    }
  }
`
const result=await request(MASTER_URL, query)
return result
}

const getCategories=async()=>{
    const query=gql`
    query GetCategories {
  categories{
   id,
    name,
    icon{
    url
    }
  }
}
    `

const result=await request(MASTER_URL, query)
return result
}

const getLatest=async()=>{
   const query=gql`
   query Latest {
    buisnessLists(last: 3) {
      id
    name
    image {
      url
    },
    contactPerson,
    category{
      name
    }
    }
  }
   `
   const result=await request(MASTER_URL, query)
return result
}

const getCategoryBuisness=async(category)=>{
  const query=gql`
 query CategoryBuisness {
  buisnessLists(where: {category:{name: "`+category+`"}}) {
    id,
    name,
    contactPerson,
    address
    category{
    name
    },
    image{
    
    url}
  }
}
  `
  const result=await request(MASTER_URL, query)
return result
}

export default{
    getSlider,
    getCategories,
    getLatest,
    getCategoryBuisness
}
