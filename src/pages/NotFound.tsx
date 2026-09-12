import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container-custom min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center pt-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">404</p>
        <h1 className="font-heading text-4xl md:text-5xl italic mb-6">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
