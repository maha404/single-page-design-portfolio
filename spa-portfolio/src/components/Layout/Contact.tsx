import Button from "../Buttons/Button"

export default function Contact() {
    return (
        <section className="contact">
            <div className="contact-text-container">
                <h2>Book a call with me</h2>
                <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
            </div>
            <Button text="Free Consultation" className="button-light button" />
        </section>
    )
}