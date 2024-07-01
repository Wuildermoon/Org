import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Form from "./components/Form";
import MyOrg from "./components/MyOrg";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [collaborators, setCollaborators] = useState(
    [
      {
        id: uuidv4(),
        name: "Wuilderman Berrios",
        job: "Desarrollador de Org y estudiante de Alura",
        photo: "https://github.com/Wuildermoon.png",
        team: "Front End",
        fav: true
      },
      {
        id: uuidv4(),
        name: "Genesys Rondón",
        job: "Desarrolladora de software e instructora",
        photo: "https://github.com/genesysR-dev.png",
        team: "Programación",
        fav: false
      },
      {
        id: uuidv4(),
        name: "Jeanmarie Quijada",
        job: "Instructora en Alura Latam",
        photo: "https://github.com/JeanmarieAluraLatam.png",
        team: "UX y Diseño",
        fav: false
      },
      {
        id: uuidv4(),
        name: "Christian Velasco",
        job: "Head de Alura e instructor",
        photo: "https://github.com/christianpva.png",
        team: "Data Science",
        fav: false
      },
      {
        id: uuidv4(),
        name: "Jose Gonzalez",
        job: "Dev. FullStack",
        photo: "https://github.com/JoseDarioGonzalezCha.png",
        team: "Móvil",
        fav: false
      },
      {
        id: uuidv4(),
        name: "Harland Lohora",
        job: "Ingeniero en sistemas e instructor",
        photo: "https://github.com/harlandlohora.png",
        team: "Devops",
        fav: true
      }
    ]
  )
  const [teams, setTeams] = useState(
    [
      {
        id: uuidv4(),
        title: "Programación",
        primaryColor: "#57C278",
        secondaryColor: "#D9F7E9"
      },
      {
        id: uuidv4(),
        title: "Front End",
        primaryColor: "#82CFFA",
        secondaryColor: "#E8F8FF"
      },
      {
        id: uuidv4(),
        title: "Data Science",
        primaryColor: "#A6D157",
        secondaryColor: "#F0F8E2"
      },
      {
        id: uuidv4(),
        title: "Devops",
        primaryColor: "#E06B69",
        secondaryColor: "#FDE7E8"
      },
      {
        id: uuidv4(),
        title: "UX y Diseño",
        primaryColor: "#DB6EBF",
        secondaryColor: "#FAE9F5"
      },
      {
        id: uuidv4(),
        title: "Móvil",
        primaryColor: "#FFBA05",
        secondaryColor: "#FFF5D9"
      },
      {
        id: uuidv4(),
        title: "Innovación y Gestión",
        primaryColor: "#FF8A29",
        secondaryColor: "#FFEEDF"
      }
    ]
  )

  //  ternario --> condition ? case1 : case2;
  //  corto circuito --> condicion && case;

  const updateShowForm = () => {
    setShowForm(!showForm);
  }

  //  register collaborator
  const registerCollaborator = (collaborator) => {
    console.log("Nuevo colaborador:", collaborator);
    //  spreed operator ...array create a copy of an array
    setCollaborators([...collaborators, collaborator]);
  }

  //  delete collaborator
  const deleteCollaborator = (id) => {
    console.log("Eliminar colaborador");
    const updatedCollaborator = collaborators.filter((collaborator) => collaborator.id !== id);
    console.log(updatedCollaborator);
    setCollaborators(updatedCollaborator);
  }

  //  update team color
  const updateColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });
    setTeams(updatedTeams);
  }

  const createTeam = (newTeam) => {
    console.log(newTeam);
    //  spreed operator ...array create a copy of an array
    setTeams([...teams, { ...newTeam, id: uuidv4() }])
  }

  const like = (id) => {
    console.log("Like", id);
    const updatedCollaborator = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    });
    setCollaborators(updatedCollaborator);
  }

  return (
    <div className="App">
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header />

      {/* {showForm ? <Form /> : <></>} */}
      {
        showForm && <Form
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
          createTeam={createTeam}
        />
      }

      <MyOrg updateShowForm={updateShowForm} />

      {
        teams.map((team) => <Team
          data={team}
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          like={like}
        />
        )
      }

      <Footer />
    </div>
  );
}

export default App;
