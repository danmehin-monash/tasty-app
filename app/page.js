"use client"
import { useState, useEffect } from 'react'
import Card from './components/Card'

export default function Home() {
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '547e2d6e53msh27a5edd2da3080dp15fb56jsncd8844bfefd0',
          'x-rapidapi-host': 'tasty.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result.results)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [data])

  return (
    <div className="container mx-auto p-6">
      <h1 className='text-4xl text-center text-blue-900 mb-8'>My recipe app</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        data.length ? 
          data.map((item, index) => {
            return <Card 
              key={index}                   
              image={item.thumbnail_url}
              name={item.name}
              description={item.description}
              country={item.country}
              yieldValue={item.yields}
          />
          })
          : "Loading...                                                                                                      "
      }
      </div>
    </div>
  );
}
