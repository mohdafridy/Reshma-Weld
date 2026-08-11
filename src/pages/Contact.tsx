import { Phone, Mail, MapPin, Clock, MapPinned, MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/contact/ContactForm";
import { siteConfig } from "../config/site";

function telHref(number: string) {
  return `tel:${number.replace(/\s/g, "")}`;
}

function whatsappHref(number: string) {
  return `https://wa.me/${number.replace(/[\s+]/g, "")}`;
}

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Reshma Weld Trading Corporation for welding and industrial equipment sales, rental, service and technical support enquiries across India."
      />

      <PageHero
        kicker="Contact"
        title="Looking for Equipment Across India? Tell Us Your Requirement."
        description="Share a few details about what you need and our team will get back to you with the right solution."
      />

      <section className="bg-paper-50 py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-xl font-semibold text-ink-950">Contact Details</h2>
                  <p className="mt-2 text-sm leading-relaxed text-steel-500">
                    Reach out directly, or use the enquiry form and we'll respond as soon as
                    possible.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink-950 text-accent-400">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">Phone</p>
                      <p className="text-sm font-medium text-ink-900">
                        <a href={telHref(contact.phonePrimary)} className="hover:text-accent-600">
                          {contact.phonePrimary}
                        </a>
                        {" / "}
                        <a href={telHref(contact.phoneSecondary)} className="hover:text-accent-600">
                          {contact.phoneSecondary}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink-950 text-accent-400">
                      <MessageCircle size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">WhatsApp</p>
                      <p className="text-sm font-medium text-ink-900">
                        <a
                          href={whatsappHref(contact.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent-600"
                        >
                          {contact.whatsapp}
                        </a>
                        {" / "}
                        <a
                          href={whatsappHref(contact.whatsappSecondary)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent-600"
                        >
                          {contact.whatsappSecondary}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink-950 text-accent-400">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">Email</p>
                      <p className="text-sm font-medium text-ink-900">
                        <a href={`mailto:${contact.email}`} className="hover:text-accent-600">
                          {contact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink-950 text-accent-400">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">Address</p>
                      <p className="text-sm font-medium text-ink-900">
                        {contact.address.line1}, {contact.address.line2}, {contact.address.city},{" "}
                        {contact.address.state} — {contact.address.pincode}, {contact.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink-950 text-accent-400">
                      <Clock size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">
                        Business Hours
                      </p>
                      <p className="text-sm font-medium text-ink-900">{contact.businessHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink-950 text-accent-400">
                      <MapPinned size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">
                        Service Area
                      </p>
                      <p className="text-sm font-medium text-ink-900">
                        Enquiries accepted from customers across India
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-steel-500">GSTIN: {contact.gstNumber}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
