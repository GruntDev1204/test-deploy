import { useEffect, useState } from "react"
import baseApi from "./assets/api/baseApi"
import IncidentAPI from "./components/incident/IncidentAPI"
import Loading from "./components/Loading"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/body/auth/Login"
import Home from "./components/body/Home"
import { BrowserRouter } from 'react-router-dom'
import SignUp from "./components/body/auth/Signup"


function App() {
  const [isCheckApi, setIsCheckApi] = useState<boolean>(false)
  const [loading, setIsLoading] = useState<boolean>(true)

  const startUp = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  useEffect(() => {
    startUp()
    checkApi()
  }, [])

  const checkApi = async () => {
    try {
      const check = await baseApi.check()
      setIsCheckApi(check)
    } catch (error) {
      console.error("Failed to check API connection:", error)
      setIsCheckApi(false)
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : isCheckApi ? (
        <IncidentAPI />
      ) : (
        <>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={<Body />}>
                <Route path="" element={<Home />} />

                <Route path="login" element={<Login />} />
                <Route path="sign-up" element={<SignUp />} />
              </Route>
            </Routes>
        </BrowserRouter>
        </>
      )}
    </>
  )
}

export default App
