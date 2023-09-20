import UserDemo from "./CustomHooks/UserDemo"

function App() {
  return (
    <div className='app'>
      <UserDemo userId={1} />
      <UserDemo userId={3} />

    </div>
  )
}

export default App
