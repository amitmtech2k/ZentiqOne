# Reverted Content, Pending Your Dad's Review

These were live on zentiqone.com without going through approval first. Reverted back to the original approved wording on August 18, 2026. Keeping the proposed replacement text here in case your dad wants to approve any of it later, nothing has been thrown away.

## 1. Title tags, meta descriptions, JSON-LD description (all 25 pages)

**Original (restored, live now again):** one generic title/description reused site-wide, e.g. homepage title "ZentiqOne | Banking, Payments & FinTech Engineering Platform and Digital Transformation Suite".

**Proposed (reverted, not live):** a unique, page-specific title and meta description per page. Example, homepage:
- Title: "ZentiqOne | Banking & Payment Technology Partner"
- Description: "ZentiqOne is a technology and consulting partner for banks, FinTechs, NBFCs, and enterprises, building and integrating banking and payment platforms."

Full page-by-page versions are still sitting in each file's git history; ask me to regenerate the full list if your dad wants to review it properly rather than just the example.

## 2. Homepage hero positioning statement + FAQ answer

**Original (restored, live now again):** "ZentiqOne is a Banking & Payment Technology Engineering Platform that helps Banks, FinTechs, NBFCs, Payment Aggregators, Payment Gateways, and Enterprises design, build, integrate, launch, and scale digital payment and banking solutions."

**Proposed (reverted, not live):** "ZentiqOne is a technology and consulting partner, not a bank, Payment Aggregator, or Payment Gateway. We work alongside India's licensed banks and NBFCs, building the platforms they run on."

Note: the original text had a small grammar bug (a stray period: "...Platform. that helps...") in the JSON-LD FAQ copy only. Fixed that typo while reverting, no wording changed beyond removing the stray period.

## 3. Glossary: 6 new terms (glossary.html)

Removed from both the visible glossary and the page's structured data. Proposed definitions, if your dad wants to add these later:

- **Chargeback**: A reversal of a card payment initiated by the cardholder's issuing bank, typically after a dispute, with the amount debited back from the merchant or acquirer that received the original payment.
- **Exception Management**: The process of identifying, investigating, and resolving transactions that fail to reconcile automatically, such as mismatched amounts, missing records, or duplicate entries, before the books can be closed.
- **Nostro/Vostro Account**: A pair of terms for the same cross-border account viewed from two sides: a bank calls it a nostro account when referring to its own funds held with a foreign bank, and the foreign bank calls that same account a vostro account, referring to funds it holds on the first bank's behalf.
- **Reconciliation**: The process of matching transaction records across two or more systems, such as a payment processor and a bank statement, to confirm every transaction is accounted for consistently and to flag mismatches for investigation.
- **Settlement Cycle (T+0/T+1)**: The time between when a transaction is authorized and when the corresponding funds actually move to the merchant's or beneficiary's account, expressed as T+0 for same-day settlement or T+1 for settlement the following business day.
- **Settlement File**: A structured batch file, typically generated at the end of a settlement cycle, listing every transaction to be paid out, its amount, and the destination account, used by banks and processors to execute bulk fund transfers.

## 4. Settlement & Escrow article: reconciliation section + 2 FAQs (learn-settlement-escrow-models.html)

Removed a "Reconciliation and Exception Management in Practice" section (4 paragraphs) plus 2 FAQ entries, plus a Managed Technology Services link that referenced it. This was separate from, and added after, the already-approved escrow account-opening content from Aug 12-13 (the 7-step process, documents list, and 3 FAQs from that merge are untouched and still live).

Proposed section, if useful later:
> Reconciliation is the process of matching transaction records held in different systems, typically the payment gateway or processor's own ledger, the bank's settlement file, and the merchant's or platform's internal order records, to confirm that every transaction is accounted for consistently across all three. When the records agree, the transaction reconciles cleanly. When they don't, it becomes an exception that needs investigation before the books can be closed.
>
> Exceptions arise for a range of ordinary reasons: a transaction the gateway shows as successful but the settlement file omits, a duplicate entry created by a retried API call, an amount mismatch caused by a partial refund processed after settlement, or a transaction still pending on one side while marked complete on another.
>
> A well-run exception management process typically involves automatically flagging mismatches as reconciliation runs (commonly daily, against the settlement file), categorizing each exception by type, routing it to the right team or system for investigation, and tracking it through to closure with an audit trail.

Proposed FAQs:
- "What's the difference between settlement and reconciliation?" / Settlement is the movement of funds from the acquirer or aggregator to the merchant's account. Reconciliation is a separate check that confirms the transaction records across the payment gateway, bank statement, and internal systems all agree, run alongside or after settlement to catch mismatches.
- "What causes most reconciliation exceptions?" / Common causes include timing differences between systems, duplicate entries from retried transactions, partial refunds processed after settlement, and transactions that complete on one system but not another.

## 5. Learn hub topic-tag renames (7 articles)

Reverted these back to their original tags, no article body content was touched:

| Article | Reverted to | Proposed rename |
|---|---|---|
| How UPI Works | Payments 101 | UPI & Rails |
| Core Banking / API Banking | Technology | Core Banking |
| ISO 8583 vs ISO 20022 | Technology | Messaging Standards |
| KYC / Video KYC | Compliance | KYC & Onboarding |
| NPCI Payment Rails | Payments 101 | Payment Rails |
| Payment Aggregator License India | Compliance | Licensing |
| Payment Orchestration | Payments 101 | Orchestration |

Low-stakes either way, reverted for consistency since there was no record of these being approved.

## What's untouched (already-confirmed work, left as is)

- The Aug 12-13 escrow-account-opening merge into learn-settlement-escrow-models.html (7-step process, documents list, release conditions, use cases, 3 FAQs, and the matching learn.html hub blurb update): confirmed with Shayla at the time, per the working notes.
- All design/theme work (orange/black rebrand, logo swap, de-templated card grids, homepage service timeline, stats bar icons, LinkedIn footer link, bug fixes): no copy changes, already discussed and approved directly.
