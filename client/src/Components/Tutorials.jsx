import data from '../data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
function Tutorials({ value }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className='text-center font-bold text-2xl p-10 text-blue-700'>Packages</h1>
      <div className='sm:mx-20 mx-8 '>
        <Slider {...settings}>
          {data.tutorials && data.tutorials.filter((item) => item.id ===value).map((item) => (
            <div key={item.id} className=''>
              <div className='flex flex-col items-center gap-10 pb-10'>
                {/* Set a CSS class on the iframe */}
                {/* <iframe className="responsive-iframe" src={item.url}  allowFullScreen autoPlay={false}></iframe> */}
                <img src={item.url} alt='package' className='h-[300px] w-[500px]'/>
              </div>
            </div>
          ))}
        </Slider>
        <style>{`
          /* Left Arrow */
          .slick-prev:before {
            color: #9C1137;
          }

          /* Right Arrow */
          .slick-next:before {
            color: #9C1137;
          }

          /* Media queries to adjust iframe width */
          @media (max-width: 768px) {
            .responsive-iframe {
              width: 100%;
              height:40vh;
            }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .responsive-iframe {
              width: 80%;
              height:40vh;
            }
          }

          @media (min-width: 1025px) {
            .responsive-iframe {
              width: 80%;
              height:50vh;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default Tutorials;
