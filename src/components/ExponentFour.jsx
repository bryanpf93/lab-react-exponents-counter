const ExponentFour = ({counter, power}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{counter}<sup>{power}</sup></p>
    <p className="exponent-result">{Array(power).fill(counter).join(" * ")} = <span className="total">{counter**power}</span></p>
  </div>
);

export default ExponentFour;