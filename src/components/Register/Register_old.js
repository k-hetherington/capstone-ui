import "./Register.css"
//import { useRegistrationForm } from "../../hooks/useRegistrationForm"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

export default function Register({ setAppState }){
 //   const {form, errors, isProcessing, handleOnChange, handleOnSubmit} = useRegistrationForm()
 const navigate = useNavigate()
 const [isLoading, setIsLoading] = useState(false)
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
 
 const handleOnChange = (event) =>{
    if (event.target.name === "email") {
        if (event.target.value.indexOf("@") === -1) {
          setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        } else {
          setErrors((e) => ({ ...e, email: null }))
        }
      }
  
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
 
 const handleOnSubmit = async () => {
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
        const res = await axios.post("http://localhost:3001/auth/register", {
          date: form.date,
          location: form.location,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        })
  
        if (res?.data?.user) {
          setAppState(res.data)
          setIsLoading(false)
          navigate("/")
        } else {
          setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
          setIsLoading(false)
        }
      } catch (err) {
        console.log(err)
        const message = err?.response?.data?.error?.message
        setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
        setIsLoading(false)
      }
 }
 
    return (
        <div className = "Register">
            <div className = "container">
                    <h2>Register</h2>
                    {errors?.form && <span className="error">{errors.form}</span>}
                    <br />
                    <div className="form">
                        <div className="split-input">
                            <div className="input-field">
                                <label htmlFor="name">First Name</label>
                                <input type="text" name ="first_name" placeholder="name" value={form.first_name} onChange = {handleOnChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="name">Last Name</label>
                                <input type="text" name="last_name" placeholder="name" value = {form.last_name} onChange={handleOnChange}/>
                            </div>
                        </div>
                        <br />
                        <div className="split-input">
                            <div className="input-field">
                                <label htmlFor="name">Age</label>
                                <input type="text" name="age" placeholder="age" value = {form.age} onChange={handleOnChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="name">Zip Code</label>
                                <input type ="text" name="zip_code" placeholder="zip code" value={form.zip_code} onChange={handleOnChange}/>
                            </div>
                        </div>
                        <br />
                        <div className="input-field">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" value={form.username} onChange={handleOnChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" value={form.email} onChange={handleOnChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Password</label>
                            <input type="password" name="password" placeholder="password" value={form.password} onChange={handleOnChange}/>
                        </div>
                        <Button variant ="contained" color="primary" disabled={isLoading} onClick={handleOnSubmit}>
                            {isLoading ? "Loading..." : "Create Account"}
                        </Button>
                      </div>
                      <div className="footer">
          <p>
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div>
     </div>
    </div>
    )
}

