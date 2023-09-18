// import { useState } from 'react'
// import { SplitScreenInput } from './LayoutComponents/SplitScreen/SplitScreenInput';
// import DisplayLists from './LayoutComponents/ListItems/regularlist/DisplayLists';
// import DisplayNumberedList from './LayoutComponents/ListItems/NumberedList/DisplayNumberedList';
// import DisplayModal from './LayoutComponents/Modal/DisplayModal';
// import DisplayCurrentUser from './ContainerComponents/DisplayUserData';

import DisplayControlledForms from "./ControlledComponents/DisplayControlledForms"
import DisplayModal from "./ControlledComponents/DisplayModal"
import DisplayUncontrolledForm from "./unControlledComponents/DisplayUncontrolledForm"


function App() {
  return (
    <div className='app'>
      <DisplayUncontrolledForm />
      <DisplayControlledForms />
      <DisplayModal />
    </div>
  )
}

export default App
