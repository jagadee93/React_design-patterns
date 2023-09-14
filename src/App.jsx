import { useState } from 'react'
import { SplitScreenInput } from './LayoutComponents/SplitScreen/SplitScreenInput';
import DisplayLists from './LayoutComponents/ListItems/regularlist/DisplayLists';
import DisplayNumberedList from './LayoutComponents/ListItems/NumberedList/DisplayNumberedList';

function App() {

  return (
    <>
      <DisplayLists />
      <DisplayNumberedList />
    </>
  )
}

export default App
