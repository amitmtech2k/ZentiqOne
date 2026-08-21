# Copy fix: "not X, not Y, but Z" phrasing (needs Papa's sign-off)

Shayla flagged this cadence as reading AI-generated (it's actually already on our own `ai.md` banned-patterns list, under Copy: "Aphoristic-cadence copy: 'Not a feature. A platform.' style manufactured contrast"). This is wording, so per `content-approval-rules.md` it can't ship without Papa's approval, even though the meaning doesn't change. Four spots found site-wide with this exact stacked-negation pattern (the many other "rather than" sentences elsewhere are normal technical contrast in the explainer articles, not this tell, and are left alone).

**1. Homepage FAQ + About page + FAQ schema (same line, 3 places)**
Now: "No. ZentiqOne is a specialized Banking & Payment Technology Engineering Platform, not a general software development or IT Platform. Every engagement is built around payments and banking domain expertise rather than generic application development."
Proposed: "ZentiqOne specializes exclusively in banking and payment technology engineering. Every engagement is built around payments and banking domain expertise, not generic application development."
Appears in: index.html FAQ answer + JSON-LD FAQ schema (same text, both spots).

**2. About page positioning paragraph**
Now: "ZentiqOne is not a general software development Platform, and it is not a generic IT services provider. Every engagement..."
Proposed: "ZentiqOne is a specialized Banking & Payment Technology Engineering Platform, not a general software development shop or IT services provider. Every engagement..."
(Leads with the affirmative claim instead of two stacked "is not" clauses; rest of the paragraph is unchanged.)

**3. ISO 8583 vs ISO 20022 article, two sentences**
Now: "For banks and PSPs, the choice is not philosophical, it is operational."
Proposed: "For banks and PSPs, this comes down to operational reality, not philosophy."

Now: "This is one of the more overlooked engineering challenges in payments infrastructure - not choosing a standard, but building and maintaining the translation layers, field mappings, and validation logic that let both standards coexist reliably."
Proposed: "One of the more overlooked engineering challenges in payments infrastructure is building and maintaining the translation layers, field mappings, and validation logic that let both standards coexist reliably."

**4. Payment Orchestration FAQ (visible answer + FAQ schema, same line, 2 places)**
Now: "No. Orchestration sits above payment gateways and acquiring banks, not instead of them. A business using orchestration typically still has relationships with multiple underlying gateways or banks; the orchestration layer manages and routes across them rather than replacing any of them."
Proposed: "Orchestration sits above your existing payment gateways and acquiring banks rather than replacing them. A business using orchestration typically still has relationships with multiple underlying gateways or banks; the orchestration layer manages and routes across them."

→ Ship these four rewrites, or leave the current wording?
