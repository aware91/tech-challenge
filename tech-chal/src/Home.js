import React, { useState } from 'react';
import logo from './assets/Logo.png';
import talkie from './assets/Talkie.png';
import rabbit from './assets/Rabbit.png';
import shield from './assets/Shield.png';
import {Link} from 'react-router-dom'
import './App.css';
import './homeMedia.css';

function Home() {
    const [clicked, setClicked] = useState(false);

    const removeDupes = () => {
        const object1 = ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcom']
        const object2 = ['Matt Johnson', 'Bart Paden', 'Jodan Heigle', 'Tyler Viles']

        let comboArray = object1.concat(object2);
        let newArray = [];
        for (let i = 0; i < comboArray.length; i++) {
            if (!newArray.includes(comboArray[i])) {
                newArray.push(comboArray[i]);
                }
            }
        setClicked(true);
        alert(newArray);
    };

    return( 
        <div className='backgournd'>
            <div className='header'>
                <img src={logo} alt='Midwestern Logo' />
                <Link to='/contact' className='link'>contact</Link>
            </div>
            <div className='triple'>
                <div className='bodies'>
                    <div className='image'>
                        <img src={talkie} alt='talkie' />
                    </div>
                    <h2>Heading Two</h2>
                    <p>Interger accumson molesite nist, id faucibus uma accumson quis. Proin vulputale, mauris semper maximus.</p>
                    <button className='button2'>Learn More</button>
                </div>
                <div className='bodies'>
                    <div className='image'>
                        <img src={rabbit} alt='rabbit' className='rabbit' />
                    </div>
                    <h2>Heading Two</h2>
                    <p>Interger accumson molesite nist, id faucibus uma accumson quis. Proin vulputale, mauris semper maximus.</p>
                    <button className='button2'>Learn More</button>
                </div>
                <div className='bodies'>
                    <div className='image'>
                        <img src={shield} alt='shield' />
                    </div>
                    <h2>Heading Two</h2>
                    <p>Interger accumson molesite nist, id faucibus uma accumson quis. Proin vulputale, mauris semper maximus.</p>
                    <button className='button2'>Learn More</button>
                </div>
            </div>
            <div className='head1'>
                <h1>Heading One</h1>
                <hr />
                <p>Remove the duplicated in 2 Javascript objects and output the list of distinct names in a unordered list when  
                    <a 
                        href="#"
                            onClick={
                                    clicked
                                        ? alert(
                                            "Sorry, you can't click this again (see console for the answer)"
                                        )
                                        : removeDupes
                                    }
                    >
                        this link
                    </a> 
                is clicked. if the operation has been completed already notify the user that this has already been done.</p>
            </div>
        </div>
    )
}

export default Home;