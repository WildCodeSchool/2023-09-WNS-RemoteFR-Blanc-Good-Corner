type AddCardProps = {
  title: string;
  picture: string;
  price: number;
  link: string;
}

export default function AddCard({ title, picture, price, link }: AddCardProps) {
  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={link}>
        <img className="ad-card-image" src={picture} />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price}</div>
        </div>
      </a>
    </div>
  );
}