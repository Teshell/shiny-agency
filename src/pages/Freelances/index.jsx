import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "DevOps",
    picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
];

const Freelances = () => {
  return (
    <div>
      <h1>Voici les Freelances</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  );
};

export default Freelances;
