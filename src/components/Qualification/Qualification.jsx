import { useState } from "react"
import "./qualification.css"


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="qualification section">
       <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div onClick={()=>toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
              <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>

            <div onClick={()=>toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
              <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div>
          </div>

          <div className="qualification__sections">
            
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">Scrimba</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">UI/UX Design</h3>
                  <span className="qualification__subtitle">Scrimba</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2023
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Project Management</h3>
                  <span className="qualification__subtitle">Codecademy</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Graphic Design</h3>
                  <span className="qualification__subtitle">Udemy</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
                  </div>
                </div>
              </div>

              
            </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Platform Manager</h3>
                  <span className="qualification__subtitle">CabAfrica App</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Operations Manager</h3>
                  <span className="qualification__subtitle">Dhanjal Brothers</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Digital Content Manager</h3>
                  <span className="qualification__subtitle">Tapas Cielo</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2013 - 2017
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              
            </div>


          </div>
        </div>
    </section>
  )
}

export default Qualification