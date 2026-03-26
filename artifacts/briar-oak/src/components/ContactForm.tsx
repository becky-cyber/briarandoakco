const HONEYBOOK_URL = "https://briarandoakco.hbportal.co/public/69c4489698c3e1003040eea1";

export function ContactForm() {
  return (
    <div className="bg-background p-8 md:p-12 text-foreground shadow-2xl space-y-6 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />
      <div className="space-y-6">
        <p className="text-foreground/80 text-sm leading-relaxed">
          Ready to start planning? Click below to fill out our inquiry form and we will be in touch within 1-2 business days to schedule your free consultation.
        </p>
        <a
          href={HONEYBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-accent text-accent-foreground py-4 mt-4 uppercase font-bold tracking-widest hover:bg-primary transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2 group"
        >
          Start My Inquiry
        </a>
        <p className="text-[11px] uppercase text-center text-secondary tracking-widest opacity-70">
          We'll respond within 1–2 business days
        </p>
      </div>
    </div>
  );
}
