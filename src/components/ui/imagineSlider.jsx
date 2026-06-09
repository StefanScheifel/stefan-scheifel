import Image from "next/image";
import Slider from "react-slick"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = []


for (let i = 1; i < 30; i++) {
images.push({
    url: `/images/slider/${i}.jpeg`,
  })
}




export default function MyGallery() {

      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96" style={{width:"700px", }}>
    <Slider {...settings}>
        {images.map((item)=><img alt="Gartenpflege Service" src={`${item.url}`}className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover" />)}
    </Slider>

        {/* <Slider {...settings}>
        {images.map((item)=> <Image width={1000} height={1000} key={item.url} src={item.url} alt="" className="object-cover"></Image>)}
    </Slider> */}
    
    
    </div>
  )
}



