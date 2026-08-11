import { Home, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="bg-ink-950 py-32">
        <Container className="flex flex-col items-center text-center">
          <span className="font-display text-7xl font-bold text-accent-500">404</span>
          <h1 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h1>
          <p className="mt-3 max-w-md text-steel-400">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/" variant="primary" size="lg" icon={Home} iconPosition="left">
              Back to Home
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              icon={ArrowRight}
              className="border-white/25 text-white hover:border-white"
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
