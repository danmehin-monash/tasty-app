"use client"
import { useState, useEffect } from 'react'

const Weather = () => {
  const [city, setCity] = useState('')
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async() => {
      const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '547e2d6e53msh27a5edd2da3080dp15fb56jsncd8844bfefd0',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        setData(result)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData()
  }, [city])

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <div>
      <input type='text' value={city} onChange={handleChange} />
    </div>
  )
} 

export default Weather