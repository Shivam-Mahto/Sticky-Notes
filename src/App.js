import NotesProvider from "./context/NotesContext";
import NotesPage from "./pages/NotesPage";

function App() {
  return (
    <div
      id="app"
      className="h-screen bg-black text-black relative overflow-clip"
    >
      <NotesProvider>
        <NotesPage />
      </NotesProvider>
    </div>
  );
}

export default App;
