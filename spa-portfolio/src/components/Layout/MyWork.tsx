import { useState } from "react";
import { ArrowButton } from '../Buttons';
import imageSlide1 from "../../assets/image-slide-1.jpg";
import imageSlide2 from "../../assets/image-slide-2.jpg";
import imageSlide3 from "../../assets/image-slide-3.jpg";
import imageSlide4 from "../../assets/image-slide-4.jpg";
import imageSlide5 from "../../assets/image-slide-5.jpg";

export default function MyWork() {
    const images = [
        imageSlide1,
        imageSlide2,
        imageSlide3,
        imageSlide4,
        imageSlide5
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="my-work">
            <h2>My Work</h2>
            <div className="carousel">
                <img
                    className="carousel-image"
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            <div className="carousel-controls">
                <ArrowButton onClick={handlePrev} iconType="left" altText="Previous Slide" />
                <ArrowButton onClick={handleNext} iconType="right" altText="Next Slide" />
            </div>
        </div>
    );
}