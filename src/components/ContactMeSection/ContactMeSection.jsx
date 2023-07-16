import React from 'react';
import './ContactMeSection.scss';

import { useInView } from 'react-intersection-observer';

const ContactMeSection = () => {

    const { ref: refContactMeCard, inView: contactMeIsVisible } = useInView();

    return (
        <div className='contactMeSection'>
            <div className={`contactMe ${contactMeIsVisible ? `contactMeAnimate` : ``}`} ref={refContactMeCard}>
                <div className='contactMeHeading'>
                    <div className='contactMeHead' id='cntctMeHd'>Contact Me</div>
                    <div className='contactMeDescrip'>Contact me now to hire and let me build your website.</div>
                </div>
                <form className='contactMeForm'>
                    <div className='contactMeFormTop' id='frmtop'>
                        <div className='contactMeFormRight'>
                            <div className='formInputDiv'>
                                <label>Your Name</label>
                                <input type='text' required></input>
                            </div>
                            <div className='formInputDiv'>
                                <label>Your Email</label>
                                <input type='email' required></input>
                            </div>
                            <div className='formInputDiv'>
                                <label>Your Phone No.</label>
                                <input type='text'></input>
                            </div>
                        </div>
                        <div className='contactMeFormLeft'>
                            <div className='rightInput'>
                                <label>Your Message</label>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='contactMeFormBottom'><button>Send Message</button></div>
                </form>
            </div>
        </div>
    )
}

export default ContactMeSection;