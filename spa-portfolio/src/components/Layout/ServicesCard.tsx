interface ServicesCardProps {
  title: string;
  image: string;
  className: string;
  imageClassName: string;
}

export default function ServicesCard(props: ServicesCardProps) {
  return (
    <div className={props.className}>
      <img src={props.image} alt={props.title} className={props.imageClassName} />
      <h2 className="portfolio-card-title">{props.title}</h2>
    </div>
  )
};