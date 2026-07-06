import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { MailingListForm } from "@/components/MailingListForm";

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
            Something new is <br />
            <span className="italic font-light text-primary/90">
              growing at Briar & Oak.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-foreground/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We're reworking things behind the scenes to bring you two ways to
            celebrate: full event planning for the moments that deserve it,
            and a new lineup of easy, pick-up-and-go party rentals for the
            ones that don't need a whole production. Same local,
            community-rooted care. A little more flexibility for however you
            want to host.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-secondary text-base md:text-lg mb-8 font-medium"
          >
            Want to be the first to know when we open the doors? Join our
            mailing list below.
          </motion.p>

          <motion.div
            id="mailing-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-lg mx-auto scroll-mt-24"
          >
            <MailingListForm />
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
            <motion.h2 variants={fadeUp} className="text-primary text-4xl md:text-5xl font-serif font-semibold mb-8 leading-tight">
              We handle the details. You enjoy the party.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-foreground/90 text-lg mb-6 leading-relaxed">
              Birthdays, baby showers, bridal showers, backyard parties, milestone dinners, and everything in between. If it's a gathering worth celebrating, we can plan it.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/80 text-lg mb-10 italic">
              We focus on social events in Magnolia and the surrounding areas. No weddings, no corporate gigs. That focus means every client gets our full attention.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { 
                  title: "Built Around You", 
                  desc: "Every plan starts with a real conversation about what you want, who's coming, and what matters most to you." 
                },
                { 
                  title: "Calm on Event Day", 
                  desc: "You show up. We handle the details so you can enjoy your people and the party." 
                },
                { 
                  title: "Local Since 2020", 
                  desc: "We live and work in Magnolia. We know the area, the spaces people use, and the kind of gatherings families host here." 
                }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-muted/40 p-6 border-l-4 border-accent hover:bg-muted/80 transition-colors duration-300">
                  <h3 className="font-sans font-bold text-primary uppercase text-sm tracking-widest mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
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
            Host like a guest.
          </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-6 font-light space-y-5 text-center mx-auto max-w-3xl"
        >
          <p>
            Before I started Briar & Oak, I spent years in tech managing complex programs with tight deadlines and a lot of moving parts. I was good at it. But my favorite projects were always the ones that happened outside of work: the birthday dinners, the family gatherings, the events where people actually showed up and stayed too long.
          </p>
          <p>
            I started this business because I wanted to do that for other people. Show up, handle the details, and make it easier for you to be present with the people you're celebrating with.
          </p>
          <p>
            We focus on social events only: birthdays, baby showers, bridal showers, backyard parties, and milestone celebrations in Magnolia and the surrounding areas. No weddings, no corporate work. That keeps my schedule and my attention where they belong.
          </p>
          <p>
            Whether you want full support or just the right pieces to pull it off yourself, I'll help you get there.
          </p>
        </motion.div>

          <motion.div           initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-secondary uppercase text-xs tracking-[0.2em] font-bold border-t border-border pt-12"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>{" "}
              Details Handled Well
            </div>
            <div className="hidden md:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Your
              Style, Not Mine
            </div>
            <div className="hidden md:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Real
              Life Over Perfect
            </div>
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
            Magnolia and Surrounding Areas
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
