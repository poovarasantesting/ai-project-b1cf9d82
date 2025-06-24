import { Toaster } from "@/components/ui/toaster";
import RegisterForm from "@/components/RegisterForm";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4">
      <RegisterForm />
      <Toaster />
    </main>
  );
}