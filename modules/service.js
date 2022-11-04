let response;

export const callSwapiPeople = (inputValue, section) => {
  fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
    .then((res) => res.json())
    .then((res) => {
      response = res;
      console.log(res);
      res.results.forEach((item) => {
        section.insertAdjacentHTML(
          "beforeend",
          `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Height:</span>
              <span class="height" id="height_1">${item.height}</span>              
              </div>

            <div>
              <span class="properties">Mass:</span>
              <span class="signing" id="mass_1">${item.mass}</span>
             </div>

            <div>
              <span class="properties">Hair color:</span>
              <span class="signing" id="hair_color_1">${item.hair_color}</span>
            </div>

            <div>
              <span class="properties">Skin color:</span>
              <span class="signing" id="skin_color_1">${item.skin_color}</span>
            </div>

            <div>
              <span class="properties">Eye color:</span>
              <span class="signing" id="eye_color_1">${item.eye_color}</span>
            </div>

            <div>
              <span class="properties">Birth year:</span>
              <span class="signing" id="birth_year_1">${item.birth_year}</span>
            </div>

            <div>
              <span class="properties">Gender:</span>
              <span class="signing" id="gender_1">${item.gender}</span>
            </div>
          </li>
        `
        );
      });
    })
    .catch((err) => {
      alert(err);
    });
};

export const callSwapiFilms = (inputValue, section) => {
  fetch(`https://swapi.dev/api/films/?search=${inputValue}`)
    .then((res) => res.json())
    .then((res) => {
      response = res;
      section.innerHTML = "";
      console.log(res);
      res.results.forEach((item) => {
        section.insertAdjacentHTML(
          "beforeend",
          `
          <li>
            <h2 class="title">${item.title}</h2>
            <div>
              <span class="properties">Episode:</span>
              
              <span class="height" id="episode_id">${item.episode_id}</span>
             
              </div>

            <div>
              <span class="properties">Opening crawl:</span>
              <span class="signing" id="opening_crawl">${item.opening_crawl}</span>
             </div>

            <div>
              <span class="properties">Director:</span>
              <span class="signing" id="director">${item.director}</span>
            </div>

            <div>
              <span class="properties">Producer:</span>
              <span class="signing" id="producer">${item.producer}</span>
            </div>

          </li>
        `
        );
      });
    })
    .catch((err) => {
      alert(err);
    });
};

export const callSwapiPlanets = (inputValue, section) => {
  fetch(`https://swapi.dev/api/planets/?search=${inputValue}`)
    .then((res) => res.json())
    .then((res) => {
      response = res;
      section.innerHTML = "";
      console.log(response);
      res.results.forEach((item) => {
        section.insertAdjacentHTML(
          "beforeend",
          `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Rotation period:</span>
              <span class="rotation_period" id="rotation_period">${item.rotation_period}</span>
            </div>

            <div>
              <span class="properties">Orbital period:</span>
              <span class="orbital_period" id="opening_cr">${item.orbital_period}</span>
            </div>
            <div>
              <span class="properties">Diameter:</span>
              <span class="diameter" id="diameter">${item.diameter}</span>
            </div>

            <div>
              <span class="properties">Climate:</span>
              <span class="climate" id="climate">${item.climate}</span>
            </div>

            <div>
              <span class="properties">Gravity:</span>
              <span class="gravity" id="gravity">${item.gravity}</span>
            </div>

            <div>
              <span class="properties">Terrain:</span>
              <span class="terrain" id="terrain">${item.terrain}</span>
            </div>

            <div>
              <span class="properties">Surface water:</span>
              <span class="surface_water" id="surface_water">${item.surface_water}</span>
            </div>

            <div>
              <span class="properties">Population:</span>
              <span class="population" id="population">${item.population}</span>
            </div>
          </li>
        `
        );
      });
    })
    .catch((err) => {
      alert(err);
    });
};

export const callSwapiSpecies = (inputValue, section) => {
  fetch(`https://swapi.dev/api/species/?search=${inputValue}`)
    .then((res) => res.json())
    .then((res) => {
      response = res;
      section.innerHTML = "";
      console.log(res);
      res.results.forEach((item) => {
        section.insertAdjacentHTML(
          "beforeend",
          `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Classification:</span>
              <span class="classification" id="classification">${item.classification}</span>
            </div>

            <div>
              <span class="properties">Designation:</span>
              <span class="designation" id="opening_cr">${item.designation}</span>
            </div>
            <div>
              <span class="properties">Average height:</span>
              <span class="average_height" id="average_height">${item.average_height}</span>
            </div>

            <div>
              <span class="properties">Skin colors:</span>
              <span class="skin_colors" id="skin_colors">${item.skin_colors}</span>
            </div>

            <div>
              <span class="properties">Hair colors:</span>
              <span class="hair_colors" id="hair_colors">${item.hair_colors}</span>
            </div>

            <div>
              <span class="properties">Eye colors:</span>
              <span class="eye_colors" id="eye_colors">${item.eye_colors}</span>
            </div>

            <div>
              <span class="properties">Average lifespan:</span>
              <span class="average_lifespan" id="average_lifespan">${item.average_lifespan}</span>
            </div>

            <div>
              <span class="properties">Language:</span>
              <span class="language" id="language">${item.language}</span>
            </div>
          </li>
        `
        );
      });
    })
    .catch((err) => {
      alert(err);
    });
};

export const callSwapiStarShips = (inputValue, section) => {
  fetch(`https://swapi.dev/api/starships/?search=${inputValue}`)
    .then((res) => res.json())
    .then((res) => {
      response = res;
      section.innerHTML = "";
      console.log(res);
      res.results.forEach((item) => {
        section.insertAdjacentHTML(
          "beforeend",
          `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Model:</span>
              <span class="model" id="model">${item.model}</span>
            </div>

            <div>
              <span class="properties">Manufacturer:</span>
              <span class="manufacturer" id="manufacturer">${item.manufacturer}</span>
            </div>
            <div>
              <span class="properties">Cost in credits:</span>
              <span class="cost_in_credits" id="cost_in_credits">${item.cost_in_credits}</span>
            </div>

            <div>
              <span class="properties">Length:</span>
              <span class="length" id="length">${item.length}</span>
            </div>

            <div>
              <span class="properties">Max atmosphering speed:</span>
              <span class="max_atmosphering_speed" id="max_atmosphering_speed">${item.max_atmosphering_speed}</span>
            </div>

            <div>
              <span class="properties">Crew:</span>
              <span class="crew" id="crew">${item.crew}</span>
            </div>

            <div>
              <span class="properties">Passengers:</span>
              <span class="passengers" id="passengers">${item.passengers}</span>
            </div>

            <div>
              <span class="properties">Cargo capacity:</span>
              <span class="cargo_capacity" id="cargo_capacity">${item.cargo_capacity}</span>
            </div>

            <div>
            <span class="properties">Consumables:</span>
            <span class="consumables" id="consumables">${item.consumables}</span>
          </div>

          <div>
              <span class="properties">Hyperdrive rating:</span>
              <span class="hyperdrive_rating" id="hyperdrive_rating">${item.hyperdrive_rating}</span>
            </div>

            <div>
              <span class="properties">MGLT:</span>
              <span class="mglt" id="mglt">${item.MGLT}</span>
            </div>

            <div>
              <span class="properties">Starship class:</span>
              <span class="starship_class" id="starship_class">${item.starship_class}</span>
            </div>

            <div>
              <span class="properties">Pilots:</span>
              <span class="pilots" id="pilots">${item.pilots}</span>
            </div>

          </li>
        `
        );
      });
    })
    .catch((err) => {
      alert(err);
    });
};

export const callStarWarsVehicles = (inputValue, section) => {
  fetch(`https://swapi.dev/api/vehicles/?search=${inputValue}`)
    .then((res) => res.json())
    .then((res) => {
      response = res;
      section.innerHTML = "";
      console.log(res);
      res.results.forEach((item) => {
        section.insertAdjacentHTML(
          "beforeend",
          `
        <li>
          <h2 class="title">${item.name}</h2>
          <div>
            <span class="properties">Model:</span>
            <span class="model" id="model">${item.model}</span>
          </div>

          <div>
            <span class="properties">Manufacturer:</span>
            <span class="manufacturer" id="manufacturer">${item.manufacturer}</span>
          </div>
          <div>
            <span class="properties">Cost in credits:</span>
            <span class="cost_in_credits" id="cost_in_credits">${item.cost_in_credits}</span>
          </div>

          <div>
            <span class="properties">Length:</span>
            <span class="length" id="length">${item.length}</span>
          </div>

          <div>
            <span class="properties">Max atmosphering speed:</span>
            <span class="max_atmosphering_speed" id="max_atmosphering_speed">${item.max_atmosphering_speed}</span>
          </div>

          <div>
            <span class="properties">Crew:</span>
            <span class="crew" id="crew">${item.crew}</span>
          </div>

          <div>
            <span class="properties">Passengers:</span>
            <span class="passengers" id="passengers">${item.passengers}</span>
          </div>

          <div>
            <span class="properties">Cargo capacity:</span>
            <span class="cargo_capacity" id="cargo_capacity">${item.cargo_capacity}</span>
          </div>

          <div>
          <span class="properties">Consumables:</span>
          <span class="consumables" id="consumables">${item.consumables}</span>
        </div>

        <div>
            <span class="properties">Vehicle class:</span>
            <span class="vehicle_class" id="vehicle_class">${item.vehicle_class}</span>
          </div>

          <div>
            <span class="properties">Pilots:</span>
            <span class="pilots" id="pilots">${item.pilots}</span>
          </div>

        </li>
      `
        );
      });
    })
    .catch((err) => {
      alert(err);
    });
};

export const callNextPageVehicles = (section) => {
  if (response.next) {
    fetch(response.next)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        section.innerHTML = "";
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
        <li>
          <h2 class="title">${item.name}</h2>
          <div>
            <span class="properties">Model:</span>
            <span class="model" id="model">${item.model}</span>
          </div>

          <div>
            <span class="properties">Manufacturer:</span>
            <span class="manufacturer" id="manufacturer">${item.manufacturer}</span>
          </div>
          <div>
            <span class="properties">Cost in credits:</span>
            <span class="cost_in_credits" id="cost_in_credits">${item.cost_in_credits}</span>
          </div>

          <div>
            <span class="properties">Length:</span>
            <span class="length" id="length">${item.length}</span>
          </div>

          <div>
            <span class="properties">Max atmosphering speed:</span>
            <span class="max_atmosphering_speed" id="max_atmosphering_speed">${item.max_atmosphering_speed}</span>
          </div>

          <div>
            <span class="properties">Crew:</span>
            <span class="crew" id="crew">${item.crew}</span>
          </div>

          <div>
            <span class="properties">Passengers:</span>
            <span class="passengers" id="passengers">${item.passengers}</span>
          </div>

          <div>
            <span class="properties">Cargo capacity:</span>
            <span class="cargo_capacity" id="cargo_capacity">${item.cargo_capacity}</span>
          </div>

          <div>
          <span class="properties">Consumables:</span>
          <span class="consumables" id="consumables">${item.consumables}</span>
        </div>

        <div>
            <span class="properties">Vehicle class:</span>
            <span class="vehicle_class" id="vehicle_class">${item.vehicle_class}</span>
          </div>

          <div>
            <span class="properties">Pilots:</span>
            <span class="pilots" id="pilots">${item.pilots}</span>
          </div>

        </li>
      `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callPrevPageVehicles = (section) => {
  if (response.previous) {
    fetch(response.previous)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        section.innerHTML = "";
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
        <li>
          <h2 class="title">${item.name}</h2>
          <div>
            <span class="properties">Model:</span>
            <span class="model" id="model">${item.model}</span>
          </div>

          <div>
            <span class="properties">Manufacturer:</span>
            <span class="manufacturer" id="manufacturer">${item.manufacturer}</span>
          </div>
          <div>
            <span class="properties">Cost in credits:</span>
            <span class="cost_in_credits" id="cost_in_credits">${item.cost_in_credits}</span>
          </div>

          <div>
            <span class="properties">Length:</span>
            <span class="length" id="length">${item.length}</span>
          </div>

          <div>
            <span class="properties">Max atmosphering speed:</span>
            <span class="max_atmosphering_speed" id="max_atmosphering_speed">${item.max_atmosphering_speed}</span>
          </div>

          <div>
            <span class="properties">Crew:</span>
            <span class="crew" id="crew">${item.crew}</span>
          </div>

          <div>
            <span class="properties">Passengers:</span>
            <span class="passengers" id="passengers">${item.passengers}</span>
          </div>

          <div>
            <span class="properties">Cargo capacity:</span>
            <span class="cargo_capacity" id="cargo_capacity">${item.cargo_capacity}</span>
          </div>

          <div>
          <span class="properties">Consumables:</span>
          <span class="consumables" id="consumables">${item.consumables}</span>
        </div>

        <div>
            <span class="properties">Vehicle class:</span>
            <span class="vehicle_class" id="vehicle_class">${item.vehicle_class}</span>
          </div>

          <div>
            <span class="properties">Pilots:</span>
            <span class="pilots" id="pilots">${item.pilots}</span>
          </div>

        </li>
      `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callNextPageStarShips = (section) => {
  if (response.next) {
    fetch(response.next)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        section.innerHTML = "";
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Model:</span>
              <span class="model" id="model">${item.model}</span>
            </div>

            <div>
              <span class="properties">Manufacturer:</span>
              <span class="manufacturer" id="manufacturer">${item.manufacturer}</span>
            </div>
            <div>
              <span class="properties">Cost in credits:</span>
              <span class="cost_in_credits" id="cost_in_credits">${item.cost_in_credits}</span>
            </div>

            <div>
              <span class="properties">Length:</span>
              <span class="length" id="length">${item.length}</span>
            </div>

            <div>
              <span class="properties">Max atmosphering speed:</span>
              <span class="max_atmosphering_speed" id="max_atmosphering_speed">${item.max_atmosphering_speed}</span>
            </div>

            <div>
              <span class="properties">Crew:</span>
              <span class="crew" id="crew">${item.crew}</span>
            </div>

            <div>
              <span class="properties">Passengers:</span>
              <span class="passengers" id="passengers">${item.passengers}</span>
            </div>

            <div>
              <span class="properties">Cargo capacity:</span>
              <span class="cargo_capacity" id="cargo_capacity">${item.cargo_capacity}</span>
            </div>

            <div>
            <span class="properties">Consumables:</span>
            <span class="consumables" id="consumables">${item.consumables}</span>
          </div>

          <div>
              <span class="properties">Hyperdrive rating:</span>
              <span class="hyperdrive_rating" id="hyperdrive_rating">${item.hyperdrive_rating}</span>
            </div>

            <div>
              <span class="properties">MGLT:</span>
              <span class="mglt" id="mglt">${item.MGLT}</span>
            </div>

            <div>
              <span class="properties">Starship class:</span>
              <span class="starship_class" id="starship_class">${item.starship_class}</span>
            </div>

            <div>
              <span class="properties">Pilots:</span>
              <span class="pilots" id="pilots">${item.pilots}</span>
            </div>

          </li>
        `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callPrevPageStarShips = (section) => {
  if (response.previous) {
    fetch(response.previous)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        section.innerHTML = "";
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Model:</span>
              <span class="model" id="model">${item.model}</span>
            </div>

            <div>
              <span class="properties">Manufacturer:</span>
              <span class="manufacturer" id="manufacturer">${item.manufacturer}</span>
            </div>
            <div>
              <span class="properties">Cost in credits:</span>
              <span class="cost_in_credits" id="cost_in_credits">${item.cost_in_credits}</span>
            </div>

            <div>
              <span class="properties">Length:</span>
              <span class="length" id="length">${item.length}</span>
            </div>

            <div>
              <span class="properties">Max atmosphering speed:</span>
              <span class="max_atmosphering_speed" id="max_atmosphering_speed">${item.max_atmosphering_speed}</span>
            </div>

            <div>
              <span class="properties">Crew:</span>
              <span class="crew" id="crew">${item.crew}</span>
            </div>

            <div>
              <span class="properties">Passengers:</span>
              <span class="passengers" id="passengers">${item.passengers}</span>
            </div>

            <div>
              <span class="properties">Cargo capacity:</span>
              <span class="cargo_capacity" id="cargo_capacity">${item.cargo_capacity}</span>
            </div>

            <div>
            <span class="properties">Consumables:</span>
            <span class="consumables" id="consumables">${item.consumables}</span>
          </div>

          <div>
              <span class="properties">Hyperdrive rating:</span>
              <span class="hyperdrive_rating" id="hyperdrive_rating">${item.hyperdrive_rating}</span>
            </div>

            <div>
              <span class="properties">MGLT:</span>
              <span class="mglt" id="mglt">${item.MGLT}</span>
            </div>

            <div>
              <span class="properties">Starship class:</span>
              <span class="starship_class" id="starship_class">${item.starship_class}</span>
            </div>

            <div>
              <span class="properties">Pilots:</span>
              <span class="pilots" id="pilots">${item.pilots}</span>
            </div>

          </li>
        `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callNextPageSpecies = (section) => {
  if (response.next) {
    section.innerHTML = "";

    fetch(response.next)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Classification:</span>
              <span class="classification" id="classification">${item.classification}</span>
            </div>

            <div>
              <span class="properties">Designation:</span>
              <span class="designation" id="opening_cr">${item.designation}</span>
            </div>
            <div>
              <span class="properties">Average height:</span>
              <span class="average_height" id="average_height">${item.average_height}</span>
            </div>

            <div>
              <span class="properties">Skin colors:</span>
              <span class="skin_colors" id="skin_colors">${item.skin_colors}</span>
            </div>

            <div>
              <span class="properties">Hair colors:</span>
              <span class="hair_colors" id="hair_colors">${item.hair_colors}</span>
            </div>

            <div>
              <span class="properties">Eye colors:</span>
              <span class="eye_colors" id="eye_colors">${item.eye_colors}</span>
            </div>

            <div>
              <span class="properties">Average lifespan:</span>
              <span class="average_lifespan" id="average_lifespan">${item.average_lifespan}</span>
            </div>

            <div>
              <span class="properties">Language:</span>
              <span class="language" id="language">${item.language}</span>
            </div>
          </li>
        `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callPrevPageSpecies = (section) => {
  if (response.previous) {
    section.innerHTML = "";
    fetch(response.previous)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Classification:</span>
              <span class="classification" id="classification">${item.classification}</span>
            </div>

            <div>
              <span class="properties">Designation:</span>
              <span class="designation" id="opening_cr">${item.designation}</span>
            </div>
            <div>
              <span class="properties">Average height:</span>
              <span class="average_height" id="average_height">${item.average_height}</span>
            </div>

            <div>
              <span class="properties">Skin colors:</span>
              <span class="skin_colors" id="skin_colors">${item.skin_colors}</span>
            </div>

            <div>
              <span class="properties">Hair colors:</span>
              <span class="hair_colors" id="hair_colors">${item.hair_colors}</span>
            </div>

            <div>
              <span class="properties">Eye colors:</span>
              <span class="eye_colors" id="eye_colors">${item.eye_colors}</span>
            </div>

            <div>
              <span class="properties">Average lifespan:</span>
              <span class="average_lifespan" id="average_lifespan">${item.average_lifespan}</span>
            </div>

            <div>
              <span class="properties">Language:</span>
              <span class="language" id="language">${item.language}</span>
            </div>
          </li>
        `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callNextPagePlanets = (section) => {
  if (response.next) {
    section.innerHTML = "";
    fetch(response.next)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Rotation period:</span>
              <span class="rotation_period" id="rotation_period">${item.rotation_period}</span>
            </div>

            <div>
              <span class="properties">Orbital period:</span>
              <span class="orbital_period" id="opening_cr">${item.orbital_period}</span>
            </div>
            <div>
              <span class="properties">Diameter:</span>
              <span class="diameter" id="diameter">${item.diameter}</span>
            </div>

            <div>
              <span class="properties">Climate:</span>
              <span class="climate" id="climate">${item.climate}</span>
            </div>

            <div>
              <span class="properties">Gravity:</span>
              <span class="gravity" id="gravity">${item.gravity}</span>
            </div>

            <div>
              <span class="properties">Terrain:</span>
              <span class="terrain" id="terrain">${item.terrain}</span>
            </div>

            <div>
              <span class="properties">Surface water:</span>
              <span class="surface_water" id="surface_water">${item.surface_water}</span>
            </div>

            <div>
              <span class="properties">Population:</span>
              <span class="population" id="population">${item.population}</span>
            </div>
          </li>
    `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callPrevPagePlanets = (section) => {
  if (response.previous) {
    section.innerHTML = "";

    fetch(response.previous)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
          <li>
            <h2 class="title">${item.name}</h2>
            <div>
              <span class="properties">Rotation period:</span>
              <span class="rotation_period" id="rotation_period">${item.rotation_period}</span>
            </div>

            <div>
              <span class="properties">Orbital period:</span>
              <span class="orbital_period" id="opening_cr">${item.orbital_period}</span>
            </div>
            <div>
              <span class="properties">Diameter:</span>
              <span class="diameter" id="diameter">${item.diameter}</span>
            </div>

            <div>
              <span class="properties">Climate:</span>
              <span class="climate" id="climate">${item.climate}</span>
            </div>

            <div>
              <span class="properties">Gravity:</span>
              <span class="gravity" id="gravity">${item.gravity}</span>
            </div>

            <div>
              <span class="properties">Terrain:</span>
              <span class="terrain" id="terrain">${item.terrain}</span>
            </div>

            <div>
              <span class="properties">Surface water:</span>
              <span class="surface_water" id="surface_water">${item.surface_water}</span>
            </div>

            <div>
              <span class="properties">Population:</span>
              <span class="population" id="population">${item.population}</span>
            </div>
          </li>
        `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callNextPage = (section) => {
  if (response.next) {
    section.innerHTML = "";
    fetch(response.next)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        console.log(response);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
      <li>
        <h2 class="title">${item.name}</h2>
        <div>
          <span class="properties">Height:</span>
          
          <span class="height" id="height_1">${item.height}</span>
          
          </div>

        <div>
          <span class="properties">Mass:</span>
          <span class="signing" id="mass_1">${item.mass}</span>
         </div>

        <div>
          <span class="properties">Hair color:</span>
          <span class="signing" id="hair_color_1">${item.hair_color}</span>
        </div>

        <div>
          <span class="properties">Skin color:</span>
          <span class="signing" id="skin_color_1">${item.skin_color}</span>
        </div>

        <div>
          <span class="properties">Eye color:</span>
          <span class="signing" id="eye_color_1">${item.eye_color}</span>
        </div>

        <div>
          <span class="properties">Birth year:</span>
          <span class="signing" id="birth_year_1">${item.birth_year}</span>
        </div>

        <div>
          <span class="properties">Gender:</span>
          <span class="signing" id="gender_1">${item.gender}</span>
        </div>
      </li>
    `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};

export const callPrevPage = (section) => {
  if (response.previous) {
    section.innerHTML = "";

    fetch(response.previous)
      .then((res) => res.json())
      .then((res) => {
        response = res;
        console.log(res);
        res.results.forEach((item) => {
          section.insertAdjacentHTML(
            "beforeend",
            `
          <li>
            <h2 class="title">${item.name}</h2>
            <div class="info">
              <span class="properties">Height:</span>
              <span class="signing">
              <span class="height" id="height_1">${item.height}</span>
              </span>
              </div>

            <div>
              <span class="properties">Mass:</span>
              <span class="signing" id="mass_1">${item.mass}</span>
             </div>

            <div>
              <span class="properties">Hair color:</span>
              <span class="signing" id="hair_color_1">${item.hair_color}</span>
            </div>

            <div class="info">
              <span class="properties">Skin color:</span>
              <span class="signing" id="skin_color_1">${item.skin_color}</span>
            </div>

            <div>
              <span class="properties">Eye color:</span>
              <span class="signing" id="eye_color_1">${item.eye_color}</span>
            </div>

            <div>
              <span class="properties">Birth year:</span>
              <span class="signing" id="birth_year_1">${item.birth_year}</span>
            </div>

            <div>
              <span class="properties">Gender:</span>
              <span class="signing" id="gender_1">${item.gender}</span>
            </div>
          </li>
        `
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
};
