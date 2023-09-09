import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app-tareas">
      <div className='contenedor-tareas'>
        <p>TO DO LIST</p>
          <TaskList />
      </div>
    </div>
  );
}

export default App;
