import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Recipe = () => {
  let params = useParams()
  const [details, setDetails] = useState({})

  const getDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailsData = await data.json()
    setDetails(detailsData)
    console.log(detailsData)
  }

  useEffect(() => {
    getDetails()
    // eslint-disable-next-line
  }, [params.name])
   


  return (
    <>
    <div className='grid-cols-2 lg:grid'>
      <div className='p-10'>
        <h2 className='pb-5 text-3xl text-white'>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>

      <div className='mt-10'>
         <Tabs className="pr-4 sm:p-10">
          <TabList>
            <Tab>Instructions</Tab>
            <Tab>Ingredients</Tab>
          </TabList>

          <TabPanel>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions}}></h3>
          </TabPanel>
          <TabPanel>
              {details.extendedIngredients?.map((item, index) => 
                <li key={index}>{item.original}</li>
              )}
          </TabPanel>
        </Tabs>
      </div>

    </div>
    </>
  )
}

export default Recipe
