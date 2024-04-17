const eventAstro = [
  {
    date: "28 juin 2023",
    événement: "Éclipse lunaire partielle",
    type: "Éclipse lunaire",
  },
  {
    date: "16 janvier 2024",
    événement: "Éclipse lunaire partielle",
    type: "Éclipse lunaire",
  },
  {
    date: "31 janvier 2024",
    événement: "Éclipse solaire annulaire",
    type: "Éclipse solaire",
  },
  {
    date: "27 juin 2024",
    événement: "Éclipse lunaire partielle",
    type: "Éclipse lunaire",
  },
  {
    date: "15 juillet 2024",
    événement: "Éclipse solaire partielle",
    type: "Éclipse solaire",
  },
  {
    date: "20 décembre 2024",
    événement: "Éclipse lunaire totale",
    type: "Éclipse lunaire",
  },
];

function Tableau() {
  return (
    <section className="Tableau">
      <h2>Evenement Stellaire</h2>
      <table className="TableEvent">
        <thead>
          <tr>
            <th>Date</th>
            <th>Événement</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {eventAstro.map((event) => (
            <tr key={event.date}>
              <td>{event.date}</td>
              <td>{event.événement}</td>
              <td>{event.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Tableau;
