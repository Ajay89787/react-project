function App () {
    const URL = 'https://jsonplaceholder.typicode.com/users'

    const [ usersData, setUsersData] = useState([])
     const fetchUsersData = async (apiUrl) => {
      const responce = await fetch(apiURL)
      const data = await responce.json()
      setUsersData(data)
     }
     useEffect(()=>{
      fetchUsersData(URL)
     },[])
  }
    