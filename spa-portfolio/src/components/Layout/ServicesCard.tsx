interface ServicesCardProps {
  title: string;
  image: string;
  className: string;
}

export default function ServicesCard(props: ServicesCardProps) {
  return (
    <div className={props.className}>
      <img src={props.image} alt={props.title} className="portfolio-card-image" />
      <h2 className="portfolio-card-title">{props.title}</h2>
    </div>
  )
};