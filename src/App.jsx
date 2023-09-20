

import { UserInfoForm } from "./HigherOrderComponents/UserInfoForm";
import { UserInfoFormWithResource } from "./HigherOrderComponents/UserInfoFormWithResource";
function App() {
  return (
    <div className='app'>
      <UserInfoFormWithResource />
      <UserInfoForm />
    </div>
  )
}

export default App
