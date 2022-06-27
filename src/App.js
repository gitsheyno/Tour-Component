import { GlobalStyles } from './component/styles/Global'
import { useState, useEffect } from 'react'
import Tours from './component/Tours'
import Logo from './component/Logo'
function App() {
  const url = 'https://course-api.com/react-tours-project'
  const [data, setData] = useState([])
  const [isLoad, setIsLoad] = useState(true)
  const handleDelete = (id) => {
    const listItems = data.filter(item => (
      item.id !== id
    ))

    console.log(listItems)
    setData(listItems)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const jsonData = await res.json()

        setData(jsonData)
        console.log(jsonData)
      } catch (err) {
        console.log(err.message)
      } finally {
        setIsLoad(false)
      }
    }

    setTimeout(() => {
      fetchData()
    }, 3000)

  }, [])
  return (
    <>
      <GlobalStyles />
      {isLoad && <p className='alert'>LOADING ...</p>}
      {!isLoad &&
        <div className="App">
          <Logo />
          {data.length > 0 ? (
            <Tours
              data={data}
              handleDelete={handleDelete}
            />
          ) : (
            <p className='alert'>There Is No Tour To Show</p>
          )}

        </div>
      }
    </>
  );
}

export default App;
