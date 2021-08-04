import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import apiClient from "../services/apiClient"
import { useAuthContext } from "../Contexts/auth"


export const useRegistrationForm=()=>{
    const {user, setUser} = useAuthContext()
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      email: "",
      first_name: "",
      last_name: "",
      age:"",
      zip_code:"",
      username: "",
      password: ""
    })
    const [hide, show] = useState(true)
    useEffect(() => {
      // if user is already logged in,
      // redirect them to the home page
      if (user?.email) {
        navigate("/profile")
      }
    }, [user, navigate])
  
    const handleOnChange = (event) => {
      if (event.target.name === "email") {
        if (event.target.value.indexOf("@") === -1) {
          setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        } else {
          setErrors((e) => ({ ...e, email: null }))
        }
      }
  
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const showPasswordBox = () =>{
      show(hide ? false : true)
}

    const handleOnSubmit = async () => {
      setIsProcessing(true)
      setErrors((e) => ({ ...e, form: null }))
  
      const { data, error } = await apiClient.signupUser({
        email: form.email,
        username: form.username,
        age: form.age,
        zip_code: form.zip_code,
        password: form.password,
        first_name: form.first_name,
        last_name: form.last_name,
      })
      if (error) setErrors((e) => ({ ...e, form: error }))
      if (data) {
        setUser(data.user)
        apiClient.setToken(data.token)
        console.log("user=", data.user)
        console.log("token", data.token)
        localStorage.setItem("beauty_token", data.token)
      }
  
      setIsProcessing(false)
    }
    return {
        handleOnChange, handleOnSubmit, errors, isProcessing, form, showPasswordBox, hide
    }
  }