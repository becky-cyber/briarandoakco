declare module "@mailchimp/mailchimp_marketing" {
  interface MailchimpConfig {
    apiKey: string;
    server: string;
  }

  interface MailchimpApiErrorResponse {
    status: number;
    response?: {
      body?: {
        title?: string;
        detail?: string;
        status?: number;
      };
    };
  }

  interface ListMembersAddResponse {
    id: string;
    email_address: string;
    status: string;
  }

  interface Lists {
    addListMember(
      listId: string,
      body: {
        email_address: string;
        status: "subscribed" | "pending" | "unsubscribed" | "cleaned";
      },
    ): Promise<ListMembersAddResponse>;
  }

  const mailchimp: {
    setConfig(config: MailchimpConfig): void;
    lists: Lists;
  };

  export default mailchimp;
  export type { MailchimpApiErrorResponse };
}
