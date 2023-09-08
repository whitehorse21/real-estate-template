import Title from "./Title";
import TeamItem from "./TeamItem";

const TeamList = () => {
  const title = {
    text: "Our Agents Here",
    description: "We are always here to support you 24/7",
  };
  return (
    <section className="section-teams">
      <div className="container">
        <Title title={title.text} description={title.description} />
        <div className="row">
          <TeamItem
            avatar="/img/team1.jpeg"
            name="Anna Drobot"
            position="Head of Sales Department"
          />
          <TeamItem
            avatar="/img/team2.jpeg"
            name="Emin Ozedemir"
            position="Office Manager"
          />
          <TeamItem
            avatar="/img/team3.jpeg"
            name="Taner Demira"
            position="Accountant"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamList;
