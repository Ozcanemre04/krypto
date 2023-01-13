import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import  {Pagination,Navigation,A11y} from 'swiper'
import evan from '../../assets/evan.png'
import jessica from '../../assets/jessica.png'
import olivia from '../../assets/olivia.png'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './testimonials.scss'


const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <span>testimonials</span>
      <h3>read what others have to say</h3>
      <div className='testimonials'>
        <Swiper
        modules={[Navigation,A11y,Pagination]}
        spaceBetween={27}
         slidesPerView={1}
         pagination={{clickable:true}}
         >
          <SwiperSlide>
             <div className='each-slide'>
              <img src={olivia} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
              <span>olivia cole</span>
             </div>
          </SwiperSlide>

          <SwiperSlide>
             <div className='each-slide'>
              <img src={evan} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
              <span>evan white</span>
             </div>
          </SwiperSlide>

          <SwiperSlide>
             <div className='each-slide'>
              <img src={jessica} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
              <span>jessica page</span>
             </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials