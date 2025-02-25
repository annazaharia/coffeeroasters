export default function Headquarters() {
  return (
    <section className="container headquarters">
      <div className="row">
        <h4>Our headquarters</h4>
      </div>
      <div className="row">
        <div className="col-4">
          <img src="./united-kingdom.svg" />
          <div className="headquarters-description">
          <h3>United Kingdom</h3>
          <p>
          68 Asforby Rd <br/>
          Alcaston <br/>
          SY61YA <br/>
          +441241918425
          </p>
          </div>
        
        </div>
        <div className="col-4">
          <img src="./canada.svg" />
          <div className="headquarters-description" >
          <h3 >Canada</h3>
          <p>
          1528 Eglinton Avenue <br/>
          Toronto <br/>
          Ontario M4P1A6 <br/>
          +1414852997
          </p>
          </div>
       
        </div>
        <div className="col-4">
          <img src="./Combined Shape.svg" />
          <div className="headquarters-description">
            <h3 >Australia</h3>
            <p>
            36 Swanston Street <br/>
            Kewell <br/>
            Victoria <br/>
            +61499283629
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
