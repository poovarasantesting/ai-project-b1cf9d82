import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our App</h1>
        <p className="text-slate-600 text-center mb-8">
          Please login or register to continue to your dashboard.
        </p>
        <div className="flex flex-col space-y-4">
          <Link to="/login" className="w-full">
            <Button className="w-full" variant="default">
              Login
            </Button>
          </Link>
          <Link to="/register" className="w-full">
            <Button className="w-full" variant="outline">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}