type AdCardProps = {
  title: string;
  picture: string;
  price: number;
  link: string;
}

export default function AdCard({ title, picture, price, link }: AdCardProps) {
  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={link}>
        <img className="ad-card-image" src={picture} />
        <div className="ad-card-text">
          <div data-testid="ad-title" className="ad-card-title">{title}</div>
          <div data-testid="ad-price" className="ad-card-price">{price}</div>
        </div>
      </a>
    </div>
  );
}