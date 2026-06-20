import ServicesCard from "./ServicesCard";
import GraphicDesignimage from "../../assets/pattern-graphic-design.svg";
import UIImage from "../../assets/pattern-ui-ux.svg";
import AppsImage from "../../assets/pattern-apps.svg";
import IllustrationsImage from "../../assets/pattern-illustrations.svg";
import PhotographyImage from "../../assets/pattern-photography.svg";
import MotionGraphicsImage from "../../assets/pattern-motion-graphics.svg";

export default function ServicesSection() {
  return (
    <section className="services-section">
        <ServicesCard title="Graphic Design" image={GraphicDesignimage} className="service-card graphic-design-card" imageClassName="service-card-image service-card-image--large" />
        <ServicesCard title="UI/UX" image={UIImage} className="service-card ui-card" imageClassName="service-card-image service-card-image--large" />
        <ServicesCard title="Apps" image={AppsImage} className="service-card apps-card" imageClassName="service-card-image service-card-image--small" />
        <ServicesCard title="Illustrations" image={IllustrationsImage} className="service-card illustrations-card" imageClassName="service-card-image service-card-image--small" />
        <ServicesCard title="Photography" image={PhotographyImage} className="service-card photography-card" imageClassName="service-card-image service-card-image--small" />
        <ServicesCard title="Motion Graphics" image={MotionGraphicsImage} className="service-card motion-graphics-card" imageClassName="service-card-image service-card-image--small" />
    </section>
  )

}
