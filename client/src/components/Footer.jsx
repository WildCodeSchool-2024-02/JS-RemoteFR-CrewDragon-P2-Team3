import sacha from "../assets/AvatarFooter/AvatarSacha.jpg";
import Aurel from "../assets/AvatarFooter/AvatarAUREL.jpg";
import Franck from "../assets/AvatarFooter/AvatarFranck.jpg";
import Fabien from "../assets/AvatarFooter/AvatarFab.jpg";

const teamlist = [
  {
    name: "Darras",
    firstName: "Sacha",
    gitHub: "https://github.com/Sachdarras",
    Avatar: { sacha },
  },
  {
    name: "Chetot",
    firstName: "Aurélien",
    gitHub: "https://github.com/AurelienChetot",
    Avatar: { Aurel },
  },
  {
    name: "Herpoux",
    firstName: "Franck",
    gitHub: "https://github.com/Moonlow31",
    Avatar: { Franck },
  },
  {
    name: "Laquerriere",
    firstName: "Fabien",
    gitHub: "https://github.com/FabienLqr",
    Avatar: { Fabien },
  },
];

function Footer() {
  return (
    <footer>
      <h3>Team</h3>
      <div className="teamcontainer">
        {teamlist.map((team, index) => (
          <section className={index} key={[index]}>
            <ul>
              <li>
                <img
                  className="avatar"
                  src={team.Avatar}
                  alt={team.firstName}
                />

                <li>{team.name}</li>

                <li>{team.firstName}</li>
                <li>
                  <a href={team.gitHub}>
                    <img
                      className="github"
                      src="/src/assets/icons8-github-50.png"
                      alt="logo github"
                    />
                  </a>
                </li>
              </li>
            </ul>
          </section>
        ))}
      </div>
      <p> &#xA9; Copyright, Crédit by team SFAF</p>
    </footer>
  );
}

export default Footer;
