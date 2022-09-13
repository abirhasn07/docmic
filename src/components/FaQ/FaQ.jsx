import React, { useState } from 'react';
import { Data } from '../../Data/FaQData.js';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FaQ.css';

import faq_img from '../../images/thinking.png'
import bulb from '../../images/light.png'
const FaQ = () => {
	// console.log(Data);
	const [clicked, setClicked] = useState(false);
	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	};


	return (
		<section className="faQ">
			<div className="container flex-regular">
                <div className="FaQ-container">
                    <h6 className="section-title">FAQ Questions</h6>
                    <h2 className="secondary-title">Get Your General Answer </h2>
					{Data.map((item) => {
						return (
                            <div className='accordion' key={item.id}>
                                <div className="question" onClick={()=>toggle(item.id)}>
                                    <p>
                                    {item.question} 

                                    </p>
                                    <span>{clicked===item.id?<FaMinus color='#2d89ff'/>:<FaPlus color='#2d89ff'/>}</span>
                                </div>
                                {
                                    clicked === item.id ? (
                                        
                                <div className='answer active'>
                                    <p>
                                    {item.answer}
                                    </p>
                                </div>
                                    ) : (
                                       null
                                    )
                                }
                            </div>
						);
					})}
                </div>
                <div className="faQ-content">
                    <img src={faq_img} alt="doctor thinking something" className="faQ-image" />
                    <div className="faQ-Content-info">
                        <img src={bulb} alt="idea bulb" />
                        <p>Get Solutions From Our Experts</p>
                    </div>
                </div>
			</div>
		</section>
	);
};

export default FaQ;
