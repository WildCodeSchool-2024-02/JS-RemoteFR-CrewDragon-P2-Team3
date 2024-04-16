const teamlist = [
  {
    name: "Darras",
    firstName: "Sacha",
    gitHub: "https://github.com/Sachdarras",
    Avatar: "/src/assets/AvatarFooter/AvatarSacha.jpg",
  },
  {
    name: "Chetot",
    firstName: "Aurélien",
    gitHub: "https://github.com/Sachdarras",
    Avatar: "/src/assets/AvatarFooter/AvatarAUREL.jpg",
  },
  {
    name: "Herpoux",
    firstName: "Franck",
    gitHub: "https://github.com/Moonlow31",
    Avatar: "/src/assets/AvatarFooter/AvatarFranck.jpg",
  },
  {
    name: "Laquerriere",
    firstName: "Fabien",
    gitHub: "https://github.com/FabienLqr",
    Avatar: "/src/assets/AvatarFooter/AvatarFab.jpg",
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
