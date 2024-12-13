import FileUpload from "./features/file-upload/components/FileUpload";
import DataTable from "./features/data-table/components/DataTable";
import { DataProvider } from "./features/data-table/context/DataContext";

function App() {
  return (
    <div className="p-4">
      <header className="App-header">File Uploading</header>
      <main>
        <DataProvider>
          <FileUpload />
          <DataTable />
        </DataProvider>
      </main>
    </div>
  );
}

export default App;
