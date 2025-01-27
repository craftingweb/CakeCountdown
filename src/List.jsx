import Person from "./Person";

export const List = (props) => {
  return (
    <section>
      {props.people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
