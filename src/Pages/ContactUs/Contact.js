import React from 'react'
import './Contact.css'
import Navigation from '../../Common/Navigation/Navigation'
import Header from '../../Common/Header/Header'
const Contact = () => {
  return (
    <>   
    <Header/>
    <Navigation/>
    <div className='for_full_page' style={{ fontFamily:'sans-serif', fontStyle:'normal'}}>
   
          <section className='contactUs' >
              <div className='content_contact'  style={{ fontFamily:'sans-serif', fontStyle:'normal',color:'white'}}>
                   <h1 >HOW CAN WE HELP?<br></br></h1>
                   <p><br></br></p>
              </div>
              <div className='container' id='contact_us1'>
                 <div className='contact_info'>
                    
                    <div className='box' id='cub'>
                        <div className='icon' id='cui'><i className="fa-solid fa-phone"></i></div>
                            <div className='text' id='cut'>
                               <h2><b>PHONE NUMBER : </b>7866654367</h2>
                             
                            </div>
                      </div>
                   
                    <div className='box' id='cub'>
                        <div className='icon' id='cui'><i className="fa-solid fa-envelope"></i></div>
                            <div className='text' id='cut'>
                               <h2><b>EMAIL ID : </b>xyz@gmail.com</h2>
                              
                            </div>
                     </div>
                  </div>
                  <div className='contactForm' id='form1'>
                     <form>
                        <h2 >Contact Support</h2>
                        <div className='inputBox' id='ib1'>
                           <textarea id='ta1'></textarea>
                           <span >type here....</span>
                        </div>
                        <div className='inputBox' id='ib2'>
                           <input type='submit'  name='' value='send'/>
                        </div>
                     </form>
                  </div>
              </div>
          </section>
    
           <p className='map_cover'>
             <h3 style={{color:'whitesmoke', fontSize:40}}>Locate your nearby store</h3>
                {/* <iframe src="https://storelocator.site/zM1zcq" id="map"></iframe>  */}
                 {/* <iframe src="https://storelocator.site/2VO_7y" id="map"></iframe>   */}
                  <iframe src="https://storelocator.site/EJuwwC" id="map"></iframe> 
           </p>
       </div>
     </>
  )
}

export default Contact
