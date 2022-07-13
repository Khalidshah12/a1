function Slide(props) {
  return (
    <div className="slide-container" data-testid="slide">
      <h3 data-testid="title">{props.details[props.count].title}</h3>
      <p data-testid="description"> {props.details[props.count].description}</p>
    </div>
  );
}

export default Slide;
