import React, { useState } from 'react'
// mui input field
import TextField from '@mui/material/TextField';
// mui input field
import protocolimg2 from '../img/Location.png'
import protocolimg3 from '../img/Phone-(2).png'
import protocolimg4 from '../img/Email.png'
// social-icon 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Circles } from 'react-loader-spinner';
import { Button } from '@mui/material';
import axios from 'axios'
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ContactSection = styled.section`
    fieldset{
        border: none !important;
    }
`

function Contact() {
    const mystyle = {
        backgroundColor: "#fff",
        borderRadius: "30px",
        marginBottom: "20px"
    }
    const myunderline = { disableUnderline: true }


    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        content: ""
    })
    const changeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault()

        if (!Object.values(data).every(Boolean)) {

            toast.warning("Make sure all fields have value!")
            return
        }
        setLoading(true)
        axios.post('/api/v1/contacts/', data)
            .then(({ status }) => {

                if (status === 201) {
                    toast.success("Message sent!")
                    setData(Object.fromEntries(Object.keys(data).map(f => [f, ""])))
                }
                else
                    toast.error('Some error occured! Try again later')

            })
            .catch(e => console.log(e))
            .finally(f => setLoading(false))
    }
    return (
        <>
            <Header />
            <section className='bg-contact'>
                <div className="text-contact text-center py-5">
                    <button className='title-button'>Contact us</button>
                    <h1 className='text-white fw-bold pt-5'>Any time, we are open 24/7</h1>
                </div>
                <div className="container">
                    <div className="protocol-component-body">
                        <div className="row">
                            <div className="col-12 col-lg-4 my-2 my-md-0" >
                                <div className="protocol-component-item protocol-component-item2">
                                    <div className="protocol-component-shape-box">
                                        <img src={protocolimg2} alt="" className='protocol-img1' height={51} width={51} />
                                    </div>
                                    <h5 className='caption-protocol-component'>Location</h5>
                                    <p className='text-protocol-component ff'>
                                        Canada, Montreal, Quebec, 270 chemin
                                        Hudson H4J 1M9
                                    </p>
                                </div>

                            </div>
                            <div className="col-12 col-lg-4 my-2 my-md-0" >
                                <div className="protocol-component-item protocol-component-item2">
                                    <div className="protocol-component-shape-box">
                                        <img src={protocolimg3} alt="" className='protocol-img1' height={51} width={51} />

                                    </div>
                                    <h5 className='caption-protocol-component'>Phone Numbers</h5>
                                    <p className='text-protocol-component ff'>
                                        001 234 567 8910 - 001 234 567 8910 <br />
                                        001 234 567 8910
                                    </p>
                                </div>

                            </div>
                            <div className="col-12 col-lg-4 my-2 my-md-0" >
                                <div className="protocol-component-item protocol-component-item2">
                                    <div className="protocol-component-shape-box">
                                        <img src={protocolimg4} alt="" className='protocol-img1' height={51} width={51} />

                                    </div>
                                    <h5 className='caption-protocol-component'>Email</h5>
                                    <p className='text-protocol-component ff'>
                                        Info@Intelligentbroker.com <br />
                                        Support@Intelligentbroker.com
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <ContactSection className='form-contact'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 left-sec-ab">
                            <div className="title-form-contact">
                                <p className='fw-bold'>Get In Touch</p>
                                <h4 className='fw-bold mb-4'>Have Any Questions?</h4>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    <br /> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </span>
                            </div>
                            <div className="social-network social-network2">
                                <div className="socail-media-item">
                                    <a href="" className='socail-media-link'><LinkedInIcon /></a>
                                    <a href="" className='socail-media-link'><TelegramIcon /></a>
                                    <a href="" className='socail-media-link'><TwitterIcon /></a>
                                    <a href="" className='socail-media-link'><YouTubeIcon /></a>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={submit} className="col-lg-8  row justify-content-end ">
                            <div className="col-lg-6 col-12">

                                <TextField
                                    placeholder='Your name'
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    variant="filled"
                                    style={mystyle}
                                    InputProps={myunderline}
                                    fullWidth
                                    name={"name"}
                                    value={data.name}
                                    onChange={changeData}

                                />
                            </div>
                            <div className="col-lg-6 col-12">

                                <TextField
                                    fullWidth
                                    placeholder='Your email'
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    variant="filled"
                                    InputProps={myunderline}
                                    style={mystyle}
                                    name={"email"}
                                    value={data.email}
                                    onChange={changeData}
                                    type={"email"}
                                />
                            </div>
                            <div className="col-lg-12 col-12">

                                <TextField
                                    fullWidth
                                    placeholder='Subject'
                                    hiddenLabel
                                    disableUnderline={true}

                                    id="filled-hidden-label-normal"
                                    variant="filled"
                                    InputProps={myunderline}
                                    style={mystyle}
                                    name={"subject"}
                                    value={data.subject}
                                    onChange={changeData}
                                />
                            </div>
                            <div className="col-lg-12 col-12">
                                <TextField
                                    placeholder="Message"
                                    multiline
                                    rows={6}
                                    maxRows={5}

                                    InputProps={myunderline}
                                    style={{
                                        ...mystyle,
                                        width: "100%",
                                        outline: "none"
                                        , border: "none"
                                    }}
                                    name={"content"}
                                    value={data.content}
                                    onChange={changeData}
                                />
                            </div>
                            <div className="send-message">
                                <Button type={'submit'} variant="contained" sx={{ minWidth: 200 }}>
                                    {!loading ? "Send message" : <Circles color='white' width={15} height={15} />}
                                </Button>
                            </div>
                        </form>
                        {/* <div className="col-lg-12 d-flex justify-content-between py-3"></div> */}
                    </div>
                </div>
            </ContactSection>
            <Footer />
        </>
    )
}

export default Contact