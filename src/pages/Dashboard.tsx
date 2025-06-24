import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Calendar, Settings, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useAuthStatus } from "@/lib/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated, user } = useAuthStatus();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      toast({
        title: "Authentication required",
        description: "Please log in to access the dashboard",
        variant: "destructive",
      });
    }
  }, [isAuthenticated, navigate, toast]);

  const quickLinks = [
    { 
      title: "Analytics", 
      description: "View your site analytics and performance metrics", 
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      onClick: () => toast({ title: "Analytics coming soon!" })
    },
    { 
      title: "Users", 
      description: "Manage user accounts and permissions", 
      icon: <Users className="h-6 w-6 text-primary" />,
      onClick: () => toast({ title: "User management coming soon!" })
    },
    { 
      title: "Calendar", 
      description: "Schedule and manage your appointments", 
      icon: <Calendar className="h-6 w-6 text-primary" />,
      onClick: () => toast({ title: "Calendar coming soon!" })
    },
    { 
      title: "Settings", 
      description: "Configure your account preferences", 
      icon: <Settings className="h-6 w-6 text-primary" />,
      onClick: () => toast({ title: "Settings coming soon!" })
    },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="flex flex-col gap-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.name || "User"}!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your account today.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">{link.title}</CardTitle>
                {link.icon}
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[40px]">{link.description}</CardDescription>
                <Button 
                  variant="ghost" 
                  className="mt-2 p-0 h-auto font-medium" 
                  onClick={link.onClick}
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your most recent activities and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <p className="text-muted-foreground">No recent activities to display</p>
                <Button className="mt-4" onClick={() => toast({ title: "Activity history coming soon!" })}>
                  View all activity
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}