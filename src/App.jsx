import { useState } from 'react'
import { SplitScreenInput } from './LayoutComponents/SplitScreen/SplitScreenInput';
import DisplayLists from './LayoutComponents/ListItems/regularlist/DisplayLists';
import DisplayNumberedList from './LayoutComponents/ListItems/NumberedList/DisplayNumberedList';
import DisplayModal from './LayoutComponents/Modal/DisplayModal';

function App() {

  return (
    <>
      <DisplayLists />
      <DisplayNumberedList />
      <DisplayModal />
    </>
  )
}

export default App
