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
  const [list, setList] = useState(initialValues)
  const storedList = localStorage.getItem("resourceList"); 
  const [initialLoad, setInitialLoad] = useState(true)
  if (initialLoad) {setList(JSON.parse(storedList)); setInitialLoad(false) } // function that runs on startup only

  useEffect(()=>{ localStorage.setItem("resourceList", JSON.stringify(list)) }, [list]) // ensure local storage doesn't end up 'one step behind'

  function addResource(item, info, link) {
    setList(list => [...list, {id: uuidv4(), description: item, information: info, link: link, favourite: false}]) }

  function changeFavourite(id, favouriteStatus) {
    setList(list => list.map(resource => resource.id === id ?
      { ...resource, favourite: !favouriteStatus } : resource ));
    localStorage.setItem("resourceList", JSON.stringify(list)); }

  function deleteItemById(id) {
    setList(list => list.filter(resource => resource.id !== id)) }

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
          <ResourceList list={list} changeFavourite={changeFavourite} deleteItemById={deleteItemById} filterState={filterState}/>
          </div>
      </section>


      <section className="contents-container" style={{ 
        backgroundColor: darkMode ?'#101010' : '#003030'
      }}>
        <div className="width80pc-margin10pc">
          {/* <ProjectExplanation/> */}
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
