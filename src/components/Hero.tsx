import HeroProps from "../interfaces/HeroProps";

export default function Hero(props: HeroProps) {
  return (
    <section
      className="container rounded-3 hero"
      style={{ backgroundImage: `url(./${props.cover})` }}
    >
      <div className="hero-story">
        {props.titleTag === "h1" ? (
          <h1>{props.title}</h1>
        ) : (
          <h2>{props.title}</h2>
        )}
        {/* Display HTML Tags with dangerouslySetInnerHTML attribute */}
        <p
          className="col-md-8"
          dangerouslySetInnerHTML={{ __html: props.subtitle }}
        ></p>
      </div>
    </section>
  );
}
