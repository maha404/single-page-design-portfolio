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
        <ServicesCard title="Graphic Design" image={GraphicDesignimage} className="graphic-design-card" />
         <div className="services-container">
            <ServicesCard title="UI/UX" image={UIImage} className="ui-card" />
            <ServicesCard title="Apps" image={AppsImage} className="apps-card" />
         </div>
        <ServicesCard title="Illustrations" image={IllustrationsImage} className="illustrations-card" />
        <ServicesCard title="Photography" image={PhotographyImage} className="photography-card" />
        <ServicesCard title="Motion Graphics" image={MotionGraphicsImage} className="motion-graphics-card" />
    </section>
  )

}
