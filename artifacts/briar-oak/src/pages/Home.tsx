import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-background text-foreground font-sans"
    >
      <Navigation />

      {/* Hero Section */}
      <main className="relative pt-40 pb-32 px-6 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-2/3 h-[600px] bg-gradient-to-bl from-muted/40 to-transparent rounded-bl-full -z-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-secondary uppercase text-sm font-bold mb-6 block"
          >
            Magnolia, Texas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary text-5xl md:text-7xl lg:text-8xl font-serif font-semibold leading-[1.1] mb-8"
          >
            Relaxed gatherings, <br />
            <span className="italic font-light text-primary/90">
              thoughtfully planned
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-foreground/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Briar & Oak Co. is a boutique event planning company based in
            Magnolia, Texas. We specialize in birthdays, baby showers, bridal
            showers, and milestone celebrations for families across the greater
            Houston area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <button
              onClick={scrollTo("services")}
              className="border border-primary text-primary px-8 py-3.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold tracking-wide text-sm uppercase rounded-sm"
            >
              Explore Packages
            </button>
            <a
              href="https://briarandoakco.hbportal.co/public/69c4489698c3e1003040eea1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary/90 hover:shadow-lg transition-all duration-300 font-semibold tracking-wide text-sm uppercase rounded-sm hover:-translate-y-0.5"
            >
              Book a Free Consult
            </a>
          </motion.div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-primary text-4xl md:text-5xl font-serif font-semibold mb-8 leading-tight"
            >
              You bring the people you love. We'll handle everything else.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-foreground/90 text-lg mb-6 leading-relaxed"
            >
              We specialize in the gatherings that matter most: birthday
              parties, baby showers, bridal showers, milestone celebrations, and
              everything in between.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-foreground/80 text-lg mb-10 italic"
            >
              No weddings. No corporate events. Just meaningful occasions
              planned with care, right here in your neighborhood.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "Thoughtfully Personal",
                  desc: "Every detail is shaped around your style, your guests, and your vision. Always one of a kind.",
                },
                {
                  title: "Stress-Free Day-Of Coordination",
                  desc: "You show up, soak it in, and enjoy your people. We run the timeline so you never have to.",
                },
                {
                  title: "Rooted in Community",
                  desc: "Based in Magnolia since 2020, we know and love this area. We are proud to plan for the families who call it home.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-muted/40 p-6 border-l-4 border-accent hover:bg-muted/80 transition-colors duration-300"
                >
                  <h3 className="font-sans font-bold text-primary uppercase text-sm tracking-widest mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[700px] w-full"
          >
            <div className="absolute inset-0 bg-primary/5 -translate-x-4 -translate-y-4 border border-accent/20"></div>
            <img
              src={`${import.meta.env.BASE_URL}images/warm-candid-gathering.png`}
              alt="Warm candid gathering"
              className="w-full h-full object-cover shadow-xl relative z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-secondary uppercase text-sm font-bold tracking-[0.2em] mb-4 block"
          >
            Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-primary text-4xl md:text-5xl font-serif font-semibold mb-6"
          >
            Services &amp; Packages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            One signature planning experience plus a lighter design-only option,
            so you can choose the level of support that fits your gathering and
            your budget.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-sm text-secondary font-bold uppercase tracking-widest"
          >
            All bookings require a 50% non-refundable retainer
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8 items-start text-left"
          >
            {/* The Briar – primary package */}
            <motion.div
              variants={fadeUp}
              className="bg-background p-8 lg:p-10 flex flex-col h-full relative border-2 border-primary shadow-xl lg:-translate-y-2"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[.2em] px-4 py-1.5 shadow-sm whitespace-nowrap">
                Signature Service
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">
                Partial Planning &amp; Event Direction
              </span>
              <h3 className="text-primary text-3xl font-serif mb-2">
                The Briar
              </h3>
              <p className="text-2xl font-serif text-accent mb-4 italic">
                Starting at $1,500
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/60 mb-6">
                Best for intimate gatherings where you want planning support
                before the event and a calm, capable lead on the day itself.
              </p>

              <ul className="text-sm space-y-4 mb-8 flex-grow text-foreground/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    90-minute kickoff planning session to map your vision,
                    priorities, and budget.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    Custom design and styling plan with mood board plus
                    suggested shopping list or rental recommendations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    Vendor sourcing and coordination for up to 3 key vendors,
                    such as catering, rentals, balloons or decor, bar, or
                    entertainment.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    Detailed event timeline and run-of-show shared with your
                    vendor team.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    One venue or home walkthrough before the event.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    Up to 6 hours of event-day direction focused on setup,
                    vendor management, and keeping the event running smoothly.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    Light decor styling for up to 4 guest tables, one bar or
                    drink station, and one entry area using items you own or
                    rent.
                  </span>
                </li>
              </ul>

              <p className="text-sm italic mb-6 text-foreground/60 border-t border-border pt-4">
                Designed for intimate, highly personal gatherings where you want
                to feel like a guest at your own event — not the coordinator.
              </p>

              <button
                onClick={scrollTo("contact")}
                className="block w-full text-center py-4 text-xs font-bold uppercase tracking-[0.2em] bg-accent text-accent-foreground hover:bg-primary transition-all duration-300"
              >
                Inquire About The Briar
              </button>
            </motion.div>

            {/* The Seedling – design & game plan */}
            <motion.div
              variants={fadeUp}
              className="bg-background p-8 lg:p-10 flex flex-col h-full border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">
                Planning Only
              </span>
              <h3 className="text-primary text-3xl font-serif mb-2">
                The Seedling
              </h3>
              <p className="text-2xl font-serif text-accent mb-4 italic">
                Flat fee around $400–$600
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/60 mb-6">
                Best for DIY hosts who want a professional plan, then handle
                setup and vendors themselves.
              </p>

              <ul className="text-sm space-y-4 mb-8 flex-grow text-foreground/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    60–90 minute planning and design session, virtual or in-home
                    if local.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    Personalized event concept with color palette, decor
                    direction, and practical recommendations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    Simple layout and setup guide so you know what goes where on
                    event day.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    Basic event-day timeline for you to follow, host-facing
                    rather than vendor coordination.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    One follow-up email for refinements or questions after you
                    review your plan.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="leading-snug">
                    No onsite coordination or event-day management included.
                  </span>
                </li>
              </ul>

              <p className="text-sm italic mb-6 text-foreground/60 border-t border-border pt-4">
                Perfect if you love hosting and do not mind the hands-on work,
                but want a clear, cohesive plan from a pro.
              </p>

              <button
                onClick={scrollTo("contact")}
                className="block w-full text-center py-4 text-xs font-bold uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Inquire About The Seedling
              </button>
            </motion.div>
          </motion.div>
      </div>
    </section>

      <section className="py-24 md:py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-background shadow-lg"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/becky-portrait.jpg`}
              alt="Becky, owner of Briar & Oak"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-4xl md:text-5xl font-serif font-semibold mb-4"
          >
            Hi, I'm Becky
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="text-secondary text-xl md:text-2xl font-serif italic mb-8"
          >
            Host like a Guest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-6 font-light space-y-5"
          >
            <p>
              I spent years in tech as a Program Management professional,
              mastering logistics, wrangling timelines, and making sure the
              details that mattered most were handled quietly, without anyone
              noticing the work. But my favorite projects were never in a
              boardroom. They were happening around my dining room table.
            </p>
            <p>
              Briar & Oak Co. is built for the milestones that actually make up
              a life: the 40th birthdays, the sprinkle showers, the celebrations
              that deserve more than a paper plate. By focusing exclusively on
              social gatherings and intentionally skipping the wedding industry,
              every client gets the full-budget attention their celebration
              deserves.
            </p>
            <p>
              I bring a project manager's precision and a hostess's warmth to
              your event. You just have to show up and raise a glass.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-secondary uppercase text-xs tracking-[0.2em] font-bold border-t border-border pt-12"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>{" "}
              Details Done Quietly
            </div>
            <div className="hidden md:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Your
              Style, Not Mine
            </div>
            <div className="hidden md:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Real
              Over Perfect
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-primary text-primary-foreground py-24 md:py-32 px-6"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 leading-tight"
            >
              Let's plan something{" "}
              <span className="italic text-accent">beautiful.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-primary-foreground/80 text-lg mb-12 font-light leading-relaxed max-w-md"
            >
              Tell us a little about your event and we'll reach out within 1 to
              2 business days to set up a short, no-pressure consultation call.
            </motion.p>

            <div className="space-y-8">
              {[
                { step: "1", text: "Fill out the inquiry form" },
                { step: "2", text: "We'll reach out within 1-2 business days" },
                { step: "3", text: "Free consultation call to find your fit" },
                { step: "4", text: "Secure your date with a 50% retainer" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-10 h-10 rounded-full border border-accent/50 group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center text-sm font-serif transition-all duration-300">
                    {item.step}
                  </div>
                  <p className="text-base tracking-wide font-light">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-20 pb-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <a
            href="#top"
            onClick={scrollTo("top")}
            className="inline-block text-primary font-serif text-3xl font-semibold mb-4 tracking-wider hover:text-accent transition-colors duration-300"
          >
            BRIAR & OAK CO.
          </a>
          <p className="text-secondary text-xs mb-10 uppercase tracking-[0.2em] font-bold">
            Magnolia • Tomball • The Woodlands • Spring • Cypress
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.76-6.98 6.279-.059 1.28-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 1.76 6.78 6.279 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.762 6.979-6.279.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-1.778-6.78-6.279-6.98-1.28-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </a>
          </div>

          <div className="text-[10px] text-foreground/40 uppercase tracking-widest border-t border-border pt-8">
            © {new Date().getFullYear()} Briar & Oak Co. LLC. All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
