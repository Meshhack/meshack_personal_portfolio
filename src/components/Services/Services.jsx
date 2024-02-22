import { useState } from "react"
import "./services.css"
// remember to add things like pitchdeck design & more in the visual design

const Services = () => {
    const [toggleStates, setToggleStates] = useState([false, false, false]);

  const toggleTab = (index) => {
    setToggleStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );}
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Web/App <br/> Design</h3>
            

            <span className="services__button" onClick={()=>toggleTab(0)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleStates[0] ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
 
                    <h3 className="services__modal-title">Web/App Design</h3>
                    <p className="services__modal-description">Craft Visually Captivating Websites & WebApps that Deliver Results</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info"> Design user-friendly and visually stunning websites & webapps tailored to your brand and target audience.</p>
                        </li>

                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info">Expertise in various design styles, functionalities, and responsive layouts.</p>
                        </li>

                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info">I optimize your website for speed, ensuring quick load times and an overall positive user experience.</p>
                        </li>
                    </ul>

                    
                </div>
            </div>

            </div>

            <div className="services__content">
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">Technology <br/> Consultance </h3>
            

                <span className="services__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

<div className={toggleStates[1] ? "services__modal active-modal" : "services__modal"}>
    <div className="services__modal-content">
        <i onClick={()=>toggleTab(1)} className="uil uil-times services__modal-close"></i>
 
                    <h3 className="services__modal-title">Technology Consultance</h3>
                    <p className="services__modal-description">Navigate the Tech Landscape with Confidence.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info">Provide expert guidance on selecting the right technology solutions for your needs.</p>
                        </li>

                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info">Analyze technological trends and their potential impact on your business.</p>
                        </li>

                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info">Offer comprehensive assessments and recommendations for technology implementation.</p>
                        </li>
                    </ul>

                    
                </div>
            </div>

            </div>

            <div className="services__content">
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Startup <br/> Pitch</h3>
            

                <span className="services__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

<div className={toggleStates[2] ? "services__modal active-modal" : "services__modal"}>
    <div className="services__modal-content">
        <i onClick={()=>toggleTab(2)} className="uil uil-times services__modal-close"></i>
 
                    <h3 className="services__modal-title">Startup Pitch</h3>
                    <p className="services__modal-description">Secure Funding with Compelling Startup Pitches</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info">Craft captivating pitches that effectively communicate your startup's vision, value proposition, and market potential.</p>
                        </li>

                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info">Develop clear and concise messaging that resonates with investors and stakeholders.</p>
                        </li>

                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon "></i>
                            <p className="services__modal-info">Help refine your pitch deck and delivery style for maximum impact.</p>
                        </li>
                    </ul>

                    
                </div>
            </div>

            </div>
        </div>

    </section>
  )
}

export default Services