const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function () {
    charactersAPI.getAllCharacters().then((charactersList) => {
      const charactersContainer = document.querySelector(".characters-container");
      charactersContainer.innerHTML = "";
      charactersList.forEach((character) => {
        charactersContainer.innerHTML += `
          <div class="character-info">
            <div class="name">Character Name: ${character.name}</div>
            <div class="occupation">Character Occupation: ${character.occupation}</div>
            <div class="cartoon">
            <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
            <div class="weapon">Character Weapon: ${character.weapon}</div>
          </div>`;
      });
    }).catch(error => {
      console.error('Error fetching all characters:', error);
    });
  });

  document.getElementById("fetch-one").addEventListener("click", function (event) {
    const characterId = document.querySelector("input[name='character-id']").value;
    charactersAPI.getCharacterById(characterId).then((character) => {
      const charactersContainer = document.querySelector(".characters-container");
      charactersContainer.innerHTML = `
        <div class="character-info">
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>`;
    }).catch(error => {
      console.error('Error fetching character by ID:', error);
    });
  });

  document.getElementById('delete-one').addEventListener('click', function () {
    const characterId = document.querySelector("input[name='character-id-delete']").value;
    const deleteButton = document.getElementById("delete-one");
    charactersAPI.deleteCharacterById(characterId).then(() => {
      console.log("Character deleted");
      deleteButton.style.backgroundColor = "green";
    }).catch(() => {
      deleteButton.style.backgroundColor = "red";
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterId = document.querySelector("input[name='chr-id']").value;
    const characterInfo = {
      name: document.querySelector("input[name='name']").value,
      occupation: document.querySelector("input[name='occupation']").value,
      weapon: document.querySelector("input[name='weapon']").value,
      cartoon: document.querySelector("input[name='cartoon']").checked,
    };
    const editButton = document.getElementById("edit-character-form").querySelector("button");
    charactersAPI.editCharacterById(characterId, characterInfo).then(() => {
      console.log("Character updated");
      editButton.style.backgroundColor = "green";
    }).catch(() => {
      editButton.style.backgroundColor = "red";
    });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterInfo = {
      name: document.querySelector("input[name='name']").value,
      occupation: document.querySelector("input[name='occupation']").value,
      weapon: document.querySelector("input[name='weapon']").value,
      cartoon: document.querySelector("input[name='cartoon']").checked,
    };
    const createButton = document.getElementById("new-character-form").querySelector("button");
    charactersAPI.createCharacter(characterInfo).then(() => {
      console.log("Character created");
      createButton.style.backgroundColor = "green";
    }).catch(() => {
      createButton.style.backgroundColor = "red";
    });
  });
});
