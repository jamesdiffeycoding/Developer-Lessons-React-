// IMPORT - COMPONENTS
import ProjectExplanation from './ProjectExplanation.jsx'
import HeaderBar from './HeaderBar.jsx'
import NewResourceForm from './NewResourceForm.jsx'
import ResourceList from './ResourceList.jsx'

// IMPORTS - OTHER
import './styles.css'
import {v4 as uuidv4} from 'uuid'
import { useState, useEffect } from 'react'

// COMPONENT DECLARATION
function App() {
  const initialValues = [  {
    "id": "ad36cbe1-940e-4a50-8617-411c2e99ff61",
    "description": "While James made this project.",
    "information": "Even in small projects like this, separating out components into sub-components can help with code clarity.",
    "link": "",
    "favourite": false
},
{
    "id": "7cc50960-054d-4b00-99c6-e2071a8b4f0d",
    "description": "David Weinberger's talks about his book \"Small Pieces Loosely Joined\".",
    "information": "Systems built with small, loosely joined components are often more scalable and maintainable. Adding new functionality, scaling the system, maintenance and troubleshooting all become easier and less disruptive.",
    "link": "https://www.youtube.com/watch?v=gLNRJb0rSYE&ab_channel=LivingInnovation-EUProjectH2020",
    "favourite": true
},
{
    "id": "f0226075-e3b8-4ba0-b6bf-8db14f7364d6",
    "description": "Building an app for a homeless shelter in four weeks.",
    "information": "User research and feedback play a crucial role in guiding development priorities. ",
    "link": "https://shelterapp-homehorizon.onrender.com/",
    "favourite": false
},
{
    "id": "b33d20b8-9d6b-482a-991b-6f86c10770bf",
    "description": "CSS best-practice class names tutorial.",
    "information": "Take the time to plan your naming conventions and document them for your team. Ensure the classes are named clearly and descriptively, and well-organised in the file structure. This ensures consistency and helps onboard new team members quickly. \n",
    "link": "https://www.youtube.com/watch?v=fYq5PXgSsbE&ab_channel=WebDevSimplified",
    "favourite": false
},
{
    "id": "994d9663-c0cd-422d-8de0-32509d410fbb",
    "description": "Martin Fowler's book on refactoring.",
    "information": "Once your code is functional, refactoring is the process of improving the design of existing code without changing its behavior. Learning about refactoring techniques can help you write cleaner, more maintainable code and improve the overall quality of your software.",
    "link": "https://martinfowler.com/books/refactoring.html",
    "favourite": true
},
{
    "id": "949da8dc-4650-4447-97d2-edc765848578",
    "description": "The Agile Manifesto (outlines the core principles and values of Agile software development).",
    "information": "Some highlights to me are: (1) promoting effective collaboration among team members, (2) focusing on delivering working software that meets customer needs, (3) involving customers throughout the development process to ensure satisfaction, and (4) continuously adapting and learning from feedback.",
    "link": "https://agilemanifesto.org/",
    "favourite": true
},
{
    "id": "22f26fc9-cc12-4cef-bbba-ea0b7530d894",
    "description": "Judy Brewer work on the Web Accessibility Initiative.",
    "information": "Accessibility is a fundamental aspect of inclusive design. It is not just aobut compliance with guidelines, but about ensuring that everyone can most easily access and engage with technology. Best practices include meaningful descriptive text alternatives, clear use of semantic html for screen readers, and easy keyboard-only navigation for desktop sites.",
    "link": "https://www.youtube.com/watch?v=Wb2X9kYEvXc&ab_channel=TEDxTalks",
    "favourite": true
}
]
// CORE FUNCTIONALITY (view, add, delete)
  // On first render, initiate local storage with initial values
  useEffect(()=>{ localStorage.setItem("resourceList", JSON.stringify(initialValues))}, []);

  // create State for updating the list
  const [updatedList, setUpdatedList] = useState(() => {
    const storedValues = JSON.parse(localStorage.getItem("resourceList"));
    console.log(storedValues)
    if(storedValues == null) {return initialValues}
    return storedValues}
  );


  // update the stored Values whenever the updatedList changes
  useEffect(()=>{ localStorage.setItem("resourceList", JSON.stringify(updatedList))}, [updatedList]) 

  // add function that updates the list
  function addResource(item, info, link) {
    setUpdatedList(updatedList => [...updatedList, {id: uuidv4(), description: item, information: info, link: link, favourite: false}]);
   }

  function changeFavourite(id, favouriteStatus) {
    setUpdatedList(updatedList => updatedList.map(resource => resource.id === id ?
      { ...resource, favourite: !favouriteStatus } : resource ));
    localStorage.setItem("resourceList", JSON.stringify(updatedList)); }

  function deleteItemById(id) {
    setUpdatedList(updatedList => updatedList.filter(resource => resource.id !== id)) }

// FILTER TOGGLE
  const [filterState, setFilterState] = useState(true)
  function toggleFilter() {{setFilterState(filterState => !filterState) }}

// COLOUR THEME
  const [darkMode, setDarkMode] = useState(true);
  function toggleColourTheme () { setDarkMode(darkMode => !darkMode);
    console.log(darkMode ? ("dark mode off") : ("dark mode on"))
  }

  useEffect (() => {
    document.body.style={color: darkMode ? '#F5DEB3' : '#F5DEB3',
      backgroundColor: darkMode ?'#141414' : '#008B8B'}}, [darkMode]
    )


  return (<>
      <main className="contents-container" style={{ 
      backgroundColor: darkMode ?'#141414' : '#003030'
    }}>
      <section className="contents-container" style={{ 
        backgroundColor: darkMode ?'#141414' : '#003030'
      }}>
        <div className="width80pc-margin10pc">
          <HeaderBar toggleFilter={toggleFilter} toggleColourTheme={toggleColourTheme}/>
        </div>
      </section>

      <section className="contents-container" style={{ 
        backgroundColor: darkMode ?'#606060' : '#008080'
      }}>
        <div className="width80pc-margin10pc">
          <NewResourceForm addResource={addResource} />
        </div>
      </section>
      <section className="contents-container" style={{ 
        backgroundColor: darkMode ?'#353535' : '#007070'
      }}>
        <div className="width80pc-margin10pc">
          <ResourceList list={updatedList} changeFavourite={changeFavourite} deleteItemById={deleteItemById} filterState={filterState}/>
          </div>
      </section>


      <section className="contents-container" style={{ 
        backgroundColor: darkMode ?'#101010' : '#003030'
      }}>
        <div className="width80pc-margin10pc">
        </div>
      </section>

      <section className="contents-container" style={{ 
        backgroundColor: darkMode ?'#252525' : '#005050'
      }}>
        <div className="width80pc-margin10pc">
          <ProjectExplanation/>
        </div>
      </section>
    </main>

      </>
  )
}

export default App
