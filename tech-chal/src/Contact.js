import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import logo from './assets/Logo.png'
import './contact.css';
import './contactMedia.css';

function Contact() {
    // const [name, setName] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert('The name you entered was: ${name}')
    // }

    return (
        <div className='background'>
            <div className='header'>
                <img src={logo} alt='Midwestern Logo' />
                <Link to='/' className='link'>home</Link>
            </div>
            <div className='contact'>
                <div className='left'>
                    <h1>Heading One</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aleque.</p>
                    <br />
                    <p>Proin sagittis nisl rhocus mattis rhoncus. At augue eget acrcu dictum varius duis at consectetur lorem.</p>
                </div>
                <div className='right'>
                    <h2 className='contactH2'>Heading Two</h2>
                    <form /*onSubmit={handleSubmit}*/>
                        <label>
                            <input
                                type='text'
                                placeholder='First Name'
                                // value={name}
                                // onChange={(e)=> setName(e.target.value)}
                                />
                        </label>
                        <label>
                            <input
                                type='text'
                                placeholder='Last Name'
                                />
                        </label>
                        <label>
                            <input
                                type='text'
                                placeholder='Title'
                                />
                        </label>
                        <label>
                            <input
                                type='text'
                                placeholder='Email'
                                />
                        </label>
                        <label className="message">
                            <input
                                type='textarea'
                                placeholder='Message'
                                />
                        </label>
                        <button type='submit'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact()