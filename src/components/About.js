// import React, { useState } from 'react'
import React from 'react'


export default function About(props) {

    // const [myStyle, setMyStyle] = useState ({
    //     color: 'black',
    //     backgroundColor: 'white',
    // }) 

    let myStyle = {
        color: props.mode ==='dark' ? 'white' : '#042743',
        backgroundColor: props.mode ==='dark' ? 'rgb(36 74 104)' : 'white', 
    }

    

    return (
        <div className='container'>
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}} >About Us</h1>

            <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> About TextUtils </strong>
                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This is a simple text converter application built with React. It allows users to perform various text conversion operations such as converting text to uppercase, lowercase, etc.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Our Mission </strong>
                        </button>
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Our mission is to make text conversion effortless and accessible to individuals, businesses, and organizations around the world. We believe that the ability to manipulate text should be straightforward and free of unnecessary complexities. Our commitment to simplicity and functionality drives us to continually enhance our service to meet your needs.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Analyze Your text </strong>
                        </button>
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <strong> Explore TextUtils  </strong>
                    </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Thank you for choosing Text Converter for your text conversion needs. We're here to simplify your workflow and help you achieve your goals with ease. Feel free to explore our tool and reach out to us with any feedback or suggestions – we'd love to hear from you!
                    </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
