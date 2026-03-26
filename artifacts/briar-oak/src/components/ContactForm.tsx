const HONEYBOOK_URL = "https://briarandoakco.hbportal.co/public/69c4489698c3e1003040eea1";

export function ContactForm() {
  return (
    <div className="bg-background p-8 md:p-12 text-foreground shadow-2xl space-y-8 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>

      <div className="space-y-4">
        <h3 className="font-serif text-2xl text-primary">Ready to get started?</h3>
        <p className="text-muted-foreground leading-relaxed">
          Fill out our quick inquiry form and we'll be in touch within 1–2 business days to schedule your free consultation.
        </p>
      </div>

      <a
        href={HONEYBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-accent text-accent-foreground py-4 text-center uppercase font-bold tracking-widest hover:bg-primary transition-colors duration-300 group/btn"
      >
        Start My Inquiry
        <span className="inline-block ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">→</span>
      </a>

      <p className="text-[11px] uppercase text-center text-secondary tracking-widest opacity-70">
        We'll respond within 1–2 business days
      </p>
    </div>
  );
}
