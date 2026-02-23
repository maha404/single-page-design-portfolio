import { useState } from "react";
import "../../App.css";
import ArrowButton from "../Buttons/ArrowButton";

export default function MyWork() {
    const images = [
        "src/assets/image-slide-1.jpg",
        "src/assets/image-slide-2.jpg",
        "src/assets/image-slide-3.jpg",
        "src/assets/image-slide-4.jpg",
        "src/assets/image-slide-5.jpg",
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