import Button from "../Buttons/Button";
import ProfileImage from '../../assets/image-amy.webp';


export default function About() {
    return (
        <section className="about">
            <img src={ProfileImage} alt="" />
            <h2 className="about-title">I'm Amy, and I'd love to work on your next project</h2>
            <p className="about-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button text="Free Consltation" className="button-light button" />
        </section>
    )
}