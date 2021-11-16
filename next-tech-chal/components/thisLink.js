
import { useState } from 'react'

export default function ThisLink() {
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

    return (
        <>
            <button
                className='button1'
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
            </button>
            <style jsx>{`
                .button1 {
                    background: #222222;
                    color: #debf79;
                    border: 0 solid #222222;
                    font-size: 1.2em;
                }
            `}</style>
        </>
    )
}