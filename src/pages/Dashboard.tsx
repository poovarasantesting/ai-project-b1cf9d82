import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LogOut, User, Settings, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Application Dashboard</h1>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Welcome back!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Home className="h-5 w-5 mr-2 text-blue-500" />
                Dashboard Home
              </CardTitle>
              <CardDescription>Overview of your account</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                This is your main dashboard where you can see your account information and activity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <User className="h-5 w-5 mr-2 text-green-500" />
                Profile
              </CardTitle>
              <CardDescription>Manage your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Update your personal information, change your password, and manage your account settings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Settings className="h-5 w-5 mr-2 text-purple-500" />
                Settings
              </CardTitle>
              <CardDescription>Configure your preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Adjust your notification preferences, privacy settings, and other account configurations.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}