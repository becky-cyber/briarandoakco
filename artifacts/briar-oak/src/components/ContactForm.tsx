import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitInquiry } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Mirroring the backend schema requirements
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  eventType: z.string().min(1, "Please select an event type"),
  guestCount: z.string().optional(),
  vibe: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      eventType: "",
      guestCount: "",
      vibe: "",
    },
  });

  const onSubmit = (data: FormData) => {
    submitInquiry(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Inquiry Sent Successfully",
            description: "We'll be in touch within 1-2 business days to schedule your consultation.",
            duration: 5000,
          });
          form.reset();
        },
        onError: (error) => {
          toast({
            title: "Submission Failed",
            description: error.message || "There was a problem sending your inquiry. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="bg-background p-8 md:p-12 text-foreground shadow-2xl space-y-6 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <input 
            {...form.register("firstName")}
            type="text" 
            placeholder="First Name*" 
            className="form-input-organic"
            disabled={isPending}
          />
          {form.formState.errors.firstName && (
            <p className="text-destructive text-xs font-medium pl-1 mt-1 animate-in slide-in-from-top-1">
              {form.formState.errors.firstName.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <input 
            {...form.register("lastName")}
            type="text" 
            placeholder="Last Name*" 
            className="form-input-organic"
            disabled={isPending}
          />
          {form.formState.errors.lastName && (
            <p className="text-destructive text-xs font-medium pl-1 mt-1 animate-in slide-in-from-top-1">
              {form.formState.errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <input 
          {...form.register("email")}
          type="email" 
          placeholder="Email Address*" 
          className="form-input-organic"
          disabled={isPending}
        />
        {form.formState.errors.email && (
          <p className="text-destructive text-xs font-medium pl-1 mt-1 animate-in slide-in-from-top-1">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1 relative">
        <select 
          {...form.register("eventType")}
          className={`form-input-organic appearance-none cursor-pointer ${form.watch("eventType") === "" ? "text-muted-foreground/70" : "text-foreground"}`}
          disabled={isPending}
        >
          <option value="" disabled>Event Type*</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Baby Shower">Baby Shower</option>
          <option value="Bridal Shower">Bridal Shower</option>
          <option value="Milestone Celebration">Milestone Celebration</option>
          <option value="Other">Other Occasion</option>
        </select>
        {form.formState.errors.eventType && (
          <p className="text-destructive text-xs font-medium pl-1 mt-1 animate-in slide-in-from-top-1">
            {form.formState.errors.eventType.message}
          </p>
        )}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 pt-1 text-muted-foreground">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>

      <div className="space-y-1 relative">
        <select 
          {...form.register("guestCount")}
          className={`form-input-organic appearance-none cursor-pointer ${form.watch("guestCount") === "" ? "text-muted-foreground/70" : "text-foreground"}`}
          disabled={isPending}
        >
          <option value="" disabled>Estimated Guest Count</option>
          <option value="Under 20">Under 20</option>
          <option value="20 to 40">20 to 40</option>
          <option value="40 to 80">40 to 80</option>
          <option value="80 or more">80 or more</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 pt-1 text-muted-foreground">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>

      <div className="space-y-1">
        <textarea 
          {...form.register("vibe")}
          placeholder="What kind of vibe are you dreaming of? (Optional)" 
          rows={4} 
          className="form-input-organic resize-none"
          disabled={isPending}
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isPending}
        className="w-full bg-accent text-accent-foreground py-4 mt-4 uppercase font-bold tracking-widest hover:bg-primary transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2 group"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send My Inquiry
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </>
        )}
      </button>
      
      <p className="text-[11px] uppercase text-center text-secondary tracking-widest mt-6 opacity-70">
        We'll respond within 1-2 business days
      </p>
    </form>
  );
}
