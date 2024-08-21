import axios from 'axios';
import React, {useState } from 'react'
import { IoTicket } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const GenerateQr = () => {

    const navigate = useNavigate()
    const [ inputs, setInputs ] = useState({})
    const [ responseMessage, setResponseMessage ] = useState("")

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value
        })
        console.log(inputs)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        const id = uuidv4()
        console.log(id)

        const dataToSend = {
            ...inputs,
            "id":id,
            "scanned":"no"
        }
        setInputs({
            ...inputs,
            "id":id,
            "scanned":"no"
        })
        console.log(inputs)
        
        try {
            const response = await axios.post("https://sheetdb.io/api/v1/fuf18jrh3leh8?return_values=true",dataToSend)
            console.log (response.status)
            if(response.data.created === 1 && response.status===200){
                setResponseMessage("Form Successfully submitted")
                navigate("/qr",{state:{id:dataToSend.id, name:dataToSend.name, class:dataToSend.class, section:dataToSend.section}})
            }else{
                setResponseMessage("Please try submitting form again")
            }
            
        } catch (error) {
            console.log("Form cannot be submitted")
            setResponseMessage("Please try submitting form again")
        }
        

    }



  return (
    <div className='pt-20 pb-4'>
        <h1 className='text-white font-bold  text-center text-2xl mb-3'>Generate Ticket</h1>
        <form onSubmit={handleSubmit} className='bg-neutral-800 lg:w-2/5 w-4/5 mx-auto py-5 px-5 rounded'>
            <IoTicket className='mx-auto text-4xl'/>
            <div className='my-4'>
                <div className='mb-4'>

                <label>Name</label>
                    <input type="text" 
                        name="name" 
                        value={inputs.name}
                        placeholder="Enter name " 
                        onChange={handleChange}
                        className='w-full rounded bg-neutral-900 border-2 border-gray-300/50 py-2 px-2 outline-slate-300'/>
                </div>

                <div className='mb-4'>

                    <label className='px-1'>Class</label>
                    <select name="class" value={inputs.class} onChange={handleChange} className='w-full rounded bg-neutral-900 border-2 border-gray-300/50 py-2 px-2 outline-slate-300'>
                        <option value={""} disabled selected className='text-slate-400/50'>select class</option>
                        <option value={12}>12</option>
                        <option value={11}>11</option>
                        <option value={10}>10</option>
                    </select>
                </div>

                <div className='mb-4'>

                    <label className='px-1'>Section</label>
                    <select name="section" value={inputs.section} onChange={handleChange} className='w-full rounded bg-neutral-900 border-2 border-gray-300/50 py-2 px-2 outline-slate-300'>
                        <option value="" disabled selected className='text-slate-400/50'>select section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>

                <div className='mb-4'>

                    <label className='px-1'>Age</label>
                    <input type="text"  
                        name="age"
                        value={inputs.age}
                        onChange={handleChange}
                        placeholder="Enter age " 
                        className='w-full rounded bg-neutral-900 border-2 border-gray-300/50 py-2 px-2 outline-slate-300'/>
                </div>
                <div className='mb-4'>
                    
                    <label className='px-1'>Number</label>
                    <input type="text" 
                        name="phone" 
                        value={inputs.phone}
                        onChange={handleChange}
                        placeholder="Enter number " 
                        className='w-full rounded bg-neutral-900 border-2 border-gray-300/50 py-2 px-2 outline-slate-300'/>
                </div>
                <div className='text-center'>

                <button className='mt-4 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded'>Generate QR Code</button>
                </div>
            </div>
        </form>
        
        {responseMessage && <p className='mt-4 text-center text-white font-semibold'>{responseMessage}</p>}
        
        
    </div>
  )
}

export default GenerateQr