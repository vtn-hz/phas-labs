---
name: prospect-audit
description: Given a business's website URL (and optionally its name/location), performs a passive technical and digital-presence reconnaissance to identify what technology the business already has in place and what gaps or opportunities exist. Produces a short, pitch-ready report meant to prepare for an in-person or cold outreach sales conversation. Use this when the user wants to research a prospective client/business before visiting or pitching them a tech solution.
---

# Prospect Audit

This skill turns a business's public website into a short, pitch-ready brief: what
digital tools they already use, what's clearly missing, and 2-3 concrete angles to
open a conversation about a tech solution.

It is meant for **legitimate business development** — preparing before an in-person
visit or cold outreach to a local business. It only reads what is publicly served to
any visitor (HTML, HTTP headers, public search results). It must never be used to
scan for vulnerabilities, probe non-public endpoints, brute-force paths, or otherwise
go beyond what a normal browser visit or search would surface.

## When to use this skill

- The user gives a business's URL (or name) and wants to know what tech they use /
  what they might need before approaching them.
- The user is preparing a sales pitch, cold outreach, or in-person visit to a
  business and wants talking points grounded in facts, not guesses.

## Workflow

### Step 1 — Raw technical recon (curl, not WebFetch)

`WebFetch` converts pages to markdown and drops headers/script tags — exactly the
signals needed here. Use `curl` instead to get raw HTML and headers:

```bash
curl -sS -D - -o /tmp/prospect-page.html -A "Mozilla/5.0 (compatible; prospect-audit/1.0)" "<url>"
```

From the response, extract:

**HTTP headers**
- `Server`, `X-Powered-By` — hosting stack (Apache/Nginx/IIS, PHP version, etc.)
- CDN/security headers (`cf-ray`, `x-vercel-id`, `x-nf-request-id`, etc.) — Cloudflare, Vercel, Netlify
- Presence/absence of HTTPS (was the URL upgraded, is there a valid cert)

**HTML `<head>` and body**
- `<meta name="generator">` and telltale asset paths — CMS/platform: WordPress
  (`wp-content`), Shopify (`cdn.shopify.com`), Wix, Squarespace, Webflow, Framer, etc.
- `<meta name="viewport">` — mobile responsiveness
- `<title>` and `<meta name="description">` — basic SEO hygiene
- Analytics/tracking scripts — Google Analytics/GTM, Meta Pixel, Hotjar, TikTok Pixel
  (absence means the owner has **no visibility into their own traffic**)
- Booking/e-commerce/payment widgets — Calendly, OpenTable, Booksy, Shopify cart,
  WhatsApp Business click-to-chat links, Stripe/PayPal buttons
- Contact surface — phone number, email, contact form vs. only a static address
- Social links present in the page (Instagram, Facebook, etc.)

Also check, with a couple of extra lightweight requests:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" "<url>/robots.txt"
curl -sS -o /dev/null -w "%{http_code}\n" "<url>/sitemap.xml"
```

A missing `sitemap.xml` and thin/absent `robots.txt` are minor SEO signals, not
blockers — note them but don't over-weight them.

### Step 2 — Broader digital footprint (WebSearch)

Search for the business name to see what exists **outside** their own site:

- Do they have a Google Business Profile / show up in local map results?
- Do they have active social media (and does it look maintained — recent posts —
  or abandoned)?
- Do they have reviews (Google, Yelp, TripAdvisor, industry-specific)? Volume and
  recency matter more than the score.

This step is what tells you whether a weak website is "their whole digital
presence" or "one weak piece of an otherwise active online presence."

### Step 3 — Synthesize the report

Produce a short report in English (unless the user asks for another language) with
this shape:

```
## <Business name> — Prospect Audit

**What they already have**
- <bullet list of confirmed tools/platforms, e.g. "WordPress site, hosted on X,
  Google Analytics installed, active Instagram (posts weekly)">

**Gaps / opportunities**
- <bullet list of concrete, evidence-based gaps, e.g. "No online booking — phone
  number is the only way to schedule", "No analytics/tracking found — they have no
  data on who visits the site", "Site is not mobile-responsive (no viewport meta
  tag)">

**Suggested opening angles**
- <2-3 short, non-generic conversation starters tied to the gaps above — phrased
  as questions or observations to raise in person, not a sales script>

**Confidence notes**
- <anything inferred vs. confirmed, and any recon step that failed or was blocked>
```

Keep it factual: only claim what was actually observed in the headers/HTML/search
results. If a signal is ambiguous (e.g., a CMS asset path partially matched), say so
rather than asserting it.

## Boundaries

- Passive, public-surface recon only: one page fetch + a couple of well-known paths
  (`robots.txt`, `sitemap.xml`) + public search. No crawling the whole site, no
  login attempts, no scanning tools, no automated form submissions.
- If `curl` is blocked, times out, or the site requires JS to render (SPA with an
  empty initial HTML), say so plainly instead of guessing — offer to fall back to
  `WebFetch` for a best-effort read of the rendered content.
- This is a sales-prep tool, not a security assessment. Do not reuse it for
  penetration testing framing even if the target happens to be the same business.
