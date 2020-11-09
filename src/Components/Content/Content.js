import React from 'react'
import './Content.css'
 const Content = (props) => {
    return(
        <main className="Content"> 
        <section className="First">
          <h3><span className="Heading">About Me</span></h3>
            
            <p style={{marginTop:'2rem'}} className="Paragraph">
            Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.
              </p>
              <p className="Paragraph">  
            Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.
            </p>
        </section>
        <section className="Fourth">
        <h3><span className="Heading">Experience</span></h3>
        <main className="Experience">
            <div className="Divv">
            <p>
            <span className="Headz">
            <strong>Bellatrix Technologies Ltd (Aug 2020-Till-to-Date)</strong>
            </span>
            </p>
            <p>
           <span className="Bod">Full-Stack (React js/Firebase) Developer</span>
           </p>
            </div>
        </main>
        </section>
        <section className="Second">
        <h3><span className="Heading" style={{color:'black',fontSize:'18px'}}>Education</span></h3>
        <main className="Educations">
        <div className="Div">
           <p>
           <span className="Headz">
           <strong>Bacholer in Computer Science (2015-2019)</strong>
           </span>
           </p>
           <p>
           <span className="Bod">COMSATS University (WAH CAMPUS)</span>
           </p> 
        </div>
        <div className="Div">
        <p>
           <span className="Headz">
           <strong>Intermediate (2012-2014)</strong>
           </span>
           </p>
           <p>
           <span className="Bod">Dr. Rashad Degree College Khaur Company</span>
           </p>
        </div>
        <div className="Div">
        <p>
           <span className="Headz">
           <strong>Marticulation 2012</strong>
           </span>
           </p>
           <p>
           <span className="Bod">P.O.L Modal Seccondary School Khaur Company</span>
           </p>
        </div>
        </main>
        </section>
        <section className="Third">
        <h3><span className="Heading">Skills</span></h3>
        <p style={{marginTop:'2rem'}}><span className="Skillo">HTML5 & CSS3</span></p>
        <div className="Percante">
        <div className="Firsto">
        <hr style={{border:'2px solid #425CBB',marginTop:'0px'}}/> 
        </div>
        <div className="Secondo">
        <hr style={{border:'2px solid #DFDFDF',marginTop:'0px'}}/>
        </div>
        </div>
        <p><span className="Skillo">ES6</span></p>
        <div className="Percante">
        <div className="Firstoo">
        <hr style={{border:'2px solid #425CBB',marginTop:'0px'}}/> 
        </div>
        <div className="Secondoo">
        <hr style={{border:'2px solid #DFDFDF',marginTop:'0px'}}/>
        </div>
        </div>
        <p><span className="Skillo">React js</span></p>
        <div className="Percante">
        <div className="Firstooo">
        <hr style={{border:'2px solid #425CBB',marginTop:'0px'}}/> 
        </div>
        <div className="Secondooo">
        <hr style={{border:'2px solid #DFDFDF',marginTop:'0px'}}/>
        </div>
        </div>
        <p><span className="Skillo">React-Redux</span></p>
        <div className="Percante">
        <div className="Firstoooo">
        <hr style={{border:'2px solid #425CBB',marginTop:'0px'}}/> 
        </div>
        <div className="Secondoooo">
        <hr style={{border:'2px solid #DFDFDF',marginTop:'0px'}}/>
        </div>
        </div>
        <p><span className="Skillo">Firebase</span></p>
        <div className="Percante">
        <div className="Firstooooo">
        <hr style={{border:'2px solid #425CBB',marginTop:'0px'}}/> 
        </div>
        <div className="Secondooooo">
        <hr style={{border:'2px solid #DFDFDF',marginTop:'0px'}}/>
        </div>
        </div>
        </section>
        </main>
    )
}

export default Content;