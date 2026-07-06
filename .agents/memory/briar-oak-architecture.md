---
name: Briar & Oak site architecture
description: The Briar & Oak (artifacts/briar-oak) site is a single-page app with anchor-scrolled sections, not separate routed pages for About/Services/Contact.
---

`artifacts/briar-oak` renders everything from one route (`/` → `Home.tsx`). "About", "Services & Packages", and "Contact" are not separate pages/routes — they are `<section id="...">` blocks within the same `Home.tsx`, and nav links use smooth-scroll (`scrollTo(id)`) rather than routing.

**Why this matters:** Requests like "hide the Contact page" or "remove the Services page" can't be done by deleting a route — they require locating and removing the specific `<section>` block (and any nav/footer/button references to its anchor id) inside `Home.tsx`.

**How to apply:** Before restructuring nav or hiding a "page", grep `Home.tsx` for the section's `id="..."` and any `scrollTo("...")` calls referencing it, and check `Navigation.tsx` for matching anchor links. There is a separate `ContactForm.tsx`-style embedded component pattern for forms within sections (e.g. mailing-list signup lives in its own component, imported into `Home.tsx`).

Backend: mailing-list-style forms follow the existing contract-first pattern — add the table to `lib/db/src/schema/`, the endpoint to `lib/api-spec/openapi.yaml`, run `pnpm --filter @workspace/api-spec run codegen`, then wire the generated Zod schema into an Express route and the generated React Query hook into the frontend component.
