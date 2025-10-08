import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import TestimonialCard from './TestimoinalCard';

export default function TestimonialSection() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-black text-white py-20">
        <div className="container px-10">
          <div className="heading-text text-center">
            <h2 className="text-3xl md:text-6xl font-medium">What People Say</h2>
            <p className="paratext mt-1 md:mt-3 max-w-xl mx-auto">Based on the description of Metro Solver and the image provided, here is a 6-step process that</p>
          </div>
          <Slider className="py-20 max-w-6xl mx-auto" {...settings}>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
