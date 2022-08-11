import React from 'react'
// mui input field
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// mui input field
import protocolimg2 from '../img/Location.png'
import protocolimg3 from '../img/Phone-(2).png'
import protocolimg4 from '../img/Email.png'
// social-icon 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Link } from 'react-router-dom';
function Contact() {
    const mystyle = {
        backgroundColor: "#fff",
        borderRadius: "30px",
        marginBottom: "20px"
    }
    const myunderline = { disableUnderline: true }
    return (
        <>
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
            <section className='form-contact'>
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
                                    <a href="" className='socail-media-link'><InstagramIcon /></a>
                                    <a href="" className='socail-media-link'><YouTubeIcon /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex justify-content-end flex-wrap">
                            <div className="col-lg-6 col-12">
                                <Stack
                                    component="form"
                                    sx={{
                                        width: '100%',
                                    }}
                                    spacing={2}
                                    noValidate
                                    autoComplete="off"

                                >
                                    <TextField
                                        placeholder='Your name'
                                        hiddenLabel
                                        id="filled-hidden-label-normal"
                                        variant="filled"
                                        style={mystyle}
                                        InputProps={myunderline}

                                    />
                                </Stack>
                            </div>
                            <div className="col-lg-6 col-12">
                                <Stack
                                    component="form"
                                    sx={{
                                        width: '100%',
                                    }}
                                    spacing={2}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        placeholder='Your email'
                                        hiddenLabel
                                        id="filled-hidden-label-normal"
                                        variant="filled"
                                        InputProps={myunderline}
                                        style={mystyle}
                                    />
                                </Stack>
                            </div>
                            <div className="col-lg-12 col-12">
                                <Stack
                                    component="form"
                                    sx={{
                                        width: '100%',
                                    }}
                                    spacing={2}
                                    noValidate

                                    autoComplete="off"
                                >
                                    <TextField
                                        placeholder='Subject'
                                        hiddenLabel
                                        disableUnderline={true}

                                        id="filled-hidden-label-normal"
                                        variant="filled"
                                        InputProps={myunderline}
                                        style={mystyle}
                                    />
                                </Stack>
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
                                />
                            </div>
                            <div className="send-message">
                                <Link to="#">
                                    Send message
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-12 d-flex justify-content-between py-3"></div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact