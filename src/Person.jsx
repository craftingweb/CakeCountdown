const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} style={{ width: "100px", height: "100px" }} />
      <div>
        <h4>{name}</h4>
        <p> {age} years old</p>
      </div>
    </article>
  );
};
export default Person;
