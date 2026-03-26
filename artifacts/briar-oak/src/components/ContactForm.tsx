const HONEYBOOK_URL = "https://briarandoakco.hbportal.co/public/69c4489698c3e1003040eea1";

export function ContactForm() {
  return (
    <div className="bg-background p-8 md:p-12 text-foreground shadow-2xl space-y-6 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name*"
          className="form-input-organic"
        />
        <input
          type="text"
          placeholder="Last Name*"
          className="form-input-organic"
        />
      </div>

      <input
        type="email"
        placeholder="Email Address*"
        className="form-input-organic"
      />

      <div className="relative">
        <select className="form-input-organic appearance-none cursor-pointer text-muted-foreground/70">
          <option value="" disabled selected>Event Type*</option>
          <option>Birthday Party</option>
          <option>Baby Shower</option>
          <option>Bridal Shower</option>
          <option>Milestone Celebration</option>
          <option>Other Occasion</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select className="form-input-organic appearance-none cursor-pointer text-muted-foreground/70">
          <option value="" disabled selected>Estimated Guest Count</option>
          <option>Under 20</option>
          <option>20 to 40</option>
          <option>40 to 80</option>
          <option>80 or more</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <textarea
        placeholder="What kind of vibe are you dreaming of? (Optional)"
        rows={4}
        className="form-input-organic resize-none"
      />

      <a
        href={HONEYBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-accent text-accent-foreground py-4 text-center uppercase font-bold tracking-widest hover:bg-primary transition-colors duration-300 group/btn"
      >
        Send My Inquiry
        <span className="inline-block ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">→</span>
      </a>

      <p className="text-[11px] uppercase text-center text-secondary tracking-widest opacity-70">
        We'll respond within 1–2 business days
      </p>
    </div>
  );
}
