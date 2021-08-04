import { useState } from "react"
import apiClient from "../services/apiClient"
import { useAuthContext } from "../Contexts/auth"


export const useModalForm=()=>{
    const { picture, setPicture } = useAuthContext()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      profile_pic: "",
    })

    const handleOnChange = (event) => {
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
      setIsProcessing(true)
      setErrors((e) => ({ ...e, form: null }))
  //profile
      const { data, error } = await apiClient.addPic({
        profile_pic: form.profile_pic
      })

      if (error) setErrors((e) => ({ ...e, form: error }))
      if (data) {
        setPicture(data.profile_pic)
      }
  
      setIsProcessing(false)
    }
    return {
        handleOnChange, handleOnSubmit, errors, isProcessing, form, setForm
    }
  }