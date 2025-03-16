import HeroProps from "../interfaces/HeroProps";

export default function Hero(props: HeroProps) {
  return (
    <section className="container rounded-3 hero">
      <img src={`./${props.cover}`} alt="Fundal" />
      <div className="row hero-story">
        <div className="col-12">
          {props.titleTag === "h1" ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}
          {/* Display HTML Tags with dangerouslySetInnerHTML attribute */}
          <p className="col-md-12 col-lg-8" dangerouslySetInnerHTML={{ __html: props.subtitle }}></p>
        </div>
      </div>
    </section>
  );
}
