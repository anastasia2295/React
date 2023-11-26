import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handlerStartAddProject() {
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null
      }
    })
  }
  let content;

  if(projectState.selectedProjectId === null){
    content = <NewProject></NewProject>
  }else if (projectState.selectedProjectId ===undefined){
    content = <NoProjectSelected onStartAddProject={handlerStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8" >
      <ProjectsSidebar onStartAddProject={handlerStartAddProject}/>
      {content}
      
    </main>
  );
}

export default App;
