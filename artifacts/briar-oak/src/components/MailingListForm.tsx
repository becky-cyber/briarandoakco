import { useState, type FormEvent } from "react";
import { useSubscribeToMailingList } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

export function MailingListForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const mutation = useSubscribeToMailingList();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    mutation.mutate(
      { data: { email: email.trim() } },
      {
        onSuccess: () => {
          setSubmitted(true);
          setEmail("");
        },
        onError: () => {
          toast({
            title: "Something went wrong",
            description: "Please try again in a moment.",
            variant: "destructive",
          });
        },
      },
    );
  };

  if (submitted) {
    return (
      <div className="bg-background p-8 md:p-10 text-foreground shadow-2xl text-center">
        <p className="text-primary font-serif text-2xl mb-2">You're on the list.</p>
        <p className="text-foreground/70 text-sm">
          We will let you know as soon as we open the doors.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background p-8 md:p-10 text-foreground shadow-2xl flex flex-col sm:flex-row gap-4"
    >
      <label htmlFor="mailing-list-email" className="sr-only">
        Email address
      </label>
      <input
        id="mailing-list-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 px-5 py-4 border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-accent text-accent-foreground px-8 py-4 uppercase font-bold tracking-widest text-sm hover:bg-primary transition-colors duration-300 disabled:opacity-70 whitespace-nowrap"
      >
        {mutation.isPending ? "Joining..." : "Subscribe"}
      </button>
    </form>
  );
}
