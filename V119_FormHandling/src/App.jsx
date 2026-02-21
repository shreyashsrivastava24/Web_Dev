import { useState } from 'react'
import './App.css'
//import useform
import { useForm } from "react-hook-form"

//react me form normally bnane k liye bht sare functions like handleChange etc bnane pdenge isliye we are using react hook form
//Bde form me kon hi likhna chahega handlesubmit handle change wagera...
//React hook form makes form handling easy
//npm install react-hook-form 

function App() {
  //fn component k andr ye line dalni hogi
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  //simulating network delay to show form is getting submitted
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // console.log(data)
    await delay(2) // simulating network delay

    //server side error handling, custom errror
    // if (data.username !== "shubham") {
    //   setError("myform", { message: "Your form is not in good order because credentials are invalid" })
    // }
    // if (data.username === "rohan") {
    //   setError("blocked", { message: "Sorry this user is blocked" })
    // }

    //iss trh se hm form ko backend ko submit krenge
    //form submit hone pe jo data object mila usse mai post krunga express app me fetch api ki help se
    //actual data submission
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password'  {...register("password", { minLength: { value: 7, message: "Min length of password is 7" }, })} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {/* server side error handling */}
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App