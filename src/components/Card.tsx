type Props = {
  imgSrc: string;
  title: string;
  description: string;
  actionText?: string;
};

const Card = ({ imgSrc, title, description, actionText }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {actionText && (
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{actionText}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
