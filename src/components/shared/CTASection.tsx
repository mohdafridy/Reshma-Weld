import { ArrowRight, FileText } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Looking for the right welding or industrial equipment?",
  description = "Tell us what you need. Our team will help you find a suitable solution.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-accent-500">
      <div className="absolute -right-24 -top-24 h-72 w-72 rotate-45 bg-white/10" />
      <div className="absolute -bottom-24 left-[-5%] h-64 w-64 rotate-12 bg-white/10" />

      <Container className="relative py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          {description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/contact" variant="dark" size="lg" icon={ArrowRight}>
            Send an Enquiry
          </Button>
          <Button
            to="/contact?type=quote"
            variant="outline"
            size="lg"
            icon={FileText}
            className="border-white/40 text-white hover:border-white hover:bg-white/10"
          >
            Request a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
