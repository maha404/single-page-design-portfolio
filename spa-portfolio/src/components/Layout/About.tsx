import Button from "../Buttons/Button";
import ProfileImage from '../../assets/image-amy.webp';


export default function About() {
    return (
        <section className="about">
            <img src={ProfileImage} alt="" />
            <div className="about-text">
                <h2 className="about-title">I'm Amy, and I'd love to work on your next project</h2>
                <p className="about-description">
                    I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!
                </p>
                <Button text="Free Consultation" className="button-light button" />
            </div>
        </section>
    )
}