import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Sertificas.module.css";

const SertificaList = () => {
  const settings = {
    dots: window.innerWidth > 640,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const certificates = [
    {
      id: 1,
      image: "/sertifica/sertifica1.jpg",
      alt: "Sertifika 1",
    },
    {
      id: 2,
      image: "/sertifica/sertifica2.jpg",
      alt: "Sertifika 2",
    },
    {
      id: 3,
      image: "/sertifica/sertifica3.jpg",
      alt: "Sertifika 3",
    },
    {
      id: 4,
      image: "/sertifica/sertifica4.jpg",
      alt: "Sertifika 4",
    },
   
   
  ];

  return (
    <div className="container  mx-auto pt-20">
     
      <div className={`w-full ${styles.sliderContainer}`}>
        <Slider {...settings}>
          {certificates.map((certificate) => (
            <div key={certificate.id} className="p-2 sm:p-4 md:p-6">
              <div className="p-2 sm:p-4 transition-all duration-500 transform bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] ">
                <div className="overflow-hidden rounded-xl ring-1 ring-black/5">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    className="object-contain w-full h-[500px] md:h-[400px] lg:h-[500px] xl:h-[600px] transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SertificaList;