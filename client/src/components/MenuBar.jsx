import axios from "axios";
import { useEffect, useState } from "react";

function MenuBar() {
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((response) => {
        const { bodies } = response.data;
        const options = bodies.map((body) => ({
          id: body.id,
          name: body.name,
          englishName: body.englishName,
          semimajorAxis: body.semimajorAxis,
          perihelion: body.perihelion,
          aphelion: body.aphelion,
          eccentricity: body.eccentricity,
          inclination: body.inclination,
          density: body.density,
          gravity: body.gravity,
          escape: body.escape,
          meanRadius: body.meanRadius,
          equaRadius: body.equaRadius,
          polarRadius: body.polarRadius,
          flattening: body.flattening,
          sideralOrbit: body.sideralOrbit,
          sideralRotation: body.sideralRotation,
        }));
        // Affiche le premier élément du tableaux par défaut
        setDropdownOptions(options);
        if (options.length > 0) {
          setSelect(options[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlechange = (event) => {
    const selectId = event.target.value;
    if (selectId === "") {
      // Si "Select a planet" est sélectionné, afficher le premier élément du tableau
      setSelect(dropdownOptions[0]);
    } else {
      const selectBody = dropdownOptions.find(
        (option) => option.id === selectId
      );
      setSelect(selectBody);
    }
  };
  return (
    <div className="AllMenuBar">
      <h1>Pour en savoir plus</h1>
      <section className="MenuBar">
        <select className="DropdownMenu" onChange={handlechange}>
          <option className="option" value="">
            Select a planet
          </option>
          {dropdownOptions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <ul>
          <li>
            {select && (
              <p>
                <span className="Description">Nom de l'astre en français:</span>{" "}
                {select.name}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Nom de l'astre en Anglais:</span>{" "}
                {select.englishName}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Demi grand axe en km:</span>{" "}
                {select.semimajorAxis}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Périhélie en km:</span>{" "}
                {select.perihelion}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Aphélie en km:</span>{" "}
                {select.aphelion}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Excentricité orbitale:</span>{" "}
                {select.eccentricity}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">
                  Inclinaison orbitale en degrés:
                </span>{" "}
                {select.inclination}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">
                  Dentité de l'astre en g.cm3:
                </span>{" "}
                {select.density}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">
                  Gravité de surface en m.s-2:
                </span>{" "}
                {select.gravity}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">
                  Vitesse d'échappement en m.s-1:
                </span>{" "}
                {select.escape}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Rayon moyen en km:</span>{" "}
                {select.meanRadius}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Rayon équatorial en km:</span>{" "}
                {select.equaRadius}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Rayon polaire en km:</span>{" "}
                {select.polarRadius}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">Aplatissement:</span>{" "}
                {select.flattening}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">
                  Période le révolution de l'astre autour d'un autre astre (le
                  Soleil ou une planète) en jours terrestres:
                </span>{" "}
                {select.sideralOrbit}
              </p>
            )}
          </li>
          <li>
            {select && (
              <p>
                <span className="Description">
                  Période de rotation de l'astre (temps nécessaire à l'astre
                  pour réaliser un tour sur lui même) en heure :
                </span>{" "}
                {select.sideralRotation}
              </p>
            )}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MenuBar;
