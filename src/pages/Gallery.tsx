import { useState, Suspense } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import angkotImage from '@/images/angkot.jpeg';
import ballImage from '@/images/ball.jpeg';
import bandungImage from '@/images/bandung.jpeg';
import boxpImage from '@/images/boxp.jpeg';
import coupleImage from '@/images/couple.jpeg';
import cuteImage from '@/images/cute.jpeg';
import cute2Image from '@/images/cute2.jpeg';
import discoImage from '@/images/disco.jpeg';
import eatingImage from '@/images/eating.jpeg';
import elevatorImage from '@/images/elevator.jpeg';
import filmImage from '@/images/film.jpeg';
import firstDateImage from '@/images/first-date.jpeg';
import funnyImage from '@/images/funny.jpeg';
import funny2Image from '@/images/funny2.jpeg';
import groupieImage from '@/images/groupie.jpeg';
import icecreamImage from '@/images/icecream.jpeg';
import latestImage from '@/images/latest.jpeg';
import moviesImage from '@/images/movies.jpeg';
import ojekImage from '@/images/ojek.jpeg';
import runningImage from '@/images/running.jpeg';
import weddingImage from '@/images/wedding.jpeg';
import wedding2Image from '@/images/wedding2.jpeg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: angkotImage, caption: 'Our Angkot Adventure' },
    { id: 2, src: ballImage, caption: 'Distorted' },
    { id: 3, src: bandungImage, caption: 'Bandung Trip' },
    { id: 5, src: boxpImage, caption: 'Photobox Time' },
    { id: 6, src: coupleImage, caption: 'Us ❤️' },
    { id: 7, src: cuteImage, caption: 'Cute Moments' },
    { id: 8, src: cute2Image, caption: 'More Cuteness' },
    { id: 9, src: discoImage, caption: 'Dance Night' },
    { id: 10, src: eatingImage, caption: 'Food Adventures' },
    { id: 11, src: elevatorImage, caption: 'Elevator Selfies' },
    { id: 12, src: filmImage, caption: 'Movie Date' },
    { id: 13, src: firstDateImage, caption: 'Our First Date' },
    { id: 14, src: funnyImage, caption: 'Silly Times' },
    { id: 15, src: funny2Image, caption: 'More Laughs' },
    { id: 16, src: groupieImage, caption: 'Group Photo' },
    { id: 18, src: icecreamImage, caption: 'Ice Cream Date' },
    { id: 19, src: latestImage, caption: 'Recent Memory' },
    { id: 20, src: moviesImage, caption: 'Cinema Time' },
    { id: 21, src: ojekImage, caption: 'Ojek Ride' },
    { id: 22, src: runningImage, caption: 'Running Together' },
    { id: 23, src: weddingImage, caption: 'Wedding Moments' },
    { id: 24, src: wedding2Image, caption: 'More Wedding Joy' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-pink-100 p-6">
      <h3 className="text-2xl font-bold text-gray-800 my-8 text-center">
        Photo Gallery
      </h3>
      <Card className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl bg-white">
        <div className="relative h-[500px]">
          <div className="relative h-full">
            <Suspense
              fallback={
                <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
              }
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].caption}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
              />
            </Suspense>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xl font-semibold text-center">
                {images[currentIndex].caption}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div> */}
        </div>

        <div className="flex gap-2 p-4 bg-gray-50 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden 
              ${
                index === currentIndex ? 'ring-2 ring-pink-500' : 'opacity-70'
              }`}
            >
              <img
                loading="lazy"
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Gallery;
