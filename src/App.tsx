import { RegistrationForm } from "./components/RegistrationForm";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <Toaster position="top-center" richColors />
      <main className="w-full max-w-md">
        <RegistrationForm />
      </main>
    </div>
  );
}

export default App;