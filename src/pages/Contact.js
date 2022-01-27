import React,{useState} from 'react'
import axios from 'axios'
import contact_img from '../assets/images/contact.png'
function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendMessage = ()=>{
       
        let data = {name, email, phone, subject, message}

        axios.post("http://synviseinfo.tech:3000/send_message", data).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log("error while submitting data")
        })
        resetForm()
    }

   const resetForm = ()=>{
    setName("")
    setEmail("")
    setPhone("")
    setSubject("")
    setMessage("")
   }
        return (
            <div className='contact pt-100' id='contact'>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src= {contact_img} alt="" className='img-fluid mt-3' />
                        </div>
                        <div className="col-md-6">
                            <div className="contact_area">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className=' pt-4'>Get in Touch</h2>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col-md-6 pt-4">
                                        <input type="text" placeholder="Your Name" className="form-control" value={name}  onChange={(e)=>setName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 pt-4">
                                        <input type="email" placeholder="Your email address" className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-md-12 pt-4">
                                      <input type="number" placeholder="Your phone number" className="form-control" value={phone}  onChange={(e)=>setPhone(e.target.value)} />
                                    </div>
                                    <div className="col-md-12 pt-4">
                                      <input type="text" placeholder="Your Subject" className="form-control" value={subject}  onChange={(e)=>setSubject(e.target.value)} />
                                    </div>
                                    <div className="col-md-12 pt-4">
                                      <textarea placeholder="Write your message..." className="form-control" value={message}  onChange={(e)=>setMessage(e.target.value)} />
                                    </div>
                                    <div className="col-md-12 pt-5
                                    ">
                                        <button className='btn btn-danger' onClick={sendMessage}>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Contact
