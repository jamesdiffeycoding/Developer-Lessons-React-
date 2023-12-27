// IMPORT - COMPONENTS
import ProjectExplanation from './ProjectExplanation'
import HeaderBar from './HeaderBar'
import NewResourceForm from './NewResourceForm'
import ResourceList from './ResourceList'

// IMPORTS - OTHER
import './styles.css'
import { initialValues } from './initialValues'
import {v4 as uuidv4} from 'uuid'
import { useState, useEffect } from 'react'

// COMPONENT DECLARATION
function App() {
// CORE FUNCTIONALITY (view, add, delete)
  // On first render, initiate local storage with initial values
  useEffect(()=>{ localStorage.setItem("resourceList", JSON.stringify(initialValues))}, []);


  // let stored Values = local storage data
  let storedValues = JSON.parse(localStorage.getItem("resourceList"));

  // create State for updating the list
  const [updatedList, setUpdatedList] = useState(storedValues);
  useEffect(()=>{
    if(storedValues) {setUpdatedList(storedValues)} else {setUpdatedList([])}}, []);
  
  // update the stored Values whenever the updatedList changes
  useEffect(()=>{ localStorage.setItem("resourceList", JSON.stringify(updatedList)); console.log(`stored values`); console.log(storedValues)}, [updatedList]) 

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
