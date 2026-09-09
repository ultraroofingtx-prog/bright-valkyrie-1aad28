# Paste-Ready Snippets for A2P 10DLC Compliance

## 1. Booking Form Consent Checkbox

Add this directly below the phone number field in the booking form component. Keep it **unchecked by default** — a pre-checked box is a common cause of rejection.

```jsx
<div className="sms-consent">
  <label>
    <input
      type="checkbox"
      name="smsConsent"
      required
      // do NOT set defaultChecked — must start unchecked
    />
    <span>
      I agree to receive text messages from Ultra Roofing LLC about my
      appointment, quote, or service updates. Message frequency varies.
      Message and data rates may apply. Reply STOP to opt out, HELP for help.
      View our <a href="/privacy-policy">Privacy Policy</a> and{" "}
      <a href="/sms-terms">SMS Terms</a>.
    </span>
  </label>
</div>
```

Plain HTML version if the form isn't React-based:

```html
<div class="sms-consent">
  <label>
    <input type="checkbox" name="smsConsent" required>
    I agree to receive text messages from Ultra Roofing LLC about my
    appointment, quote, or service updates. Message frequency varies.
    Message and data rates may apply. Reply STOP to opt out, HELP for help.
    View our <a href="/privacy-policy">Privacy Policy</a> and
    <a href="/sms-terms">SMS Terms</a>.
  </label>
</div>
```

**Important:** If you ever plan to send promotional/marketing texts (discounts, seasonal offers) in addition to appointment/service texts, add a **second, separate** checkbox for that — bundling transactional and marketing consent into one checkbox is a common rejection reason.

## 2. Footer Links (every page)

Add to the shared footer component so it propagates across all layouts — home, service pages, blog posts, service-area pages, and city pages:

```jsx
<div className="footer-legal-links">
  <a href="/privacy-policy">Privacy Policy</a>
  <span> | </span>
  <a href="/sms-terms">SMS Terms</a>
</div>
```

**Watch for:** blog post templates sometimes use a different footer partial than top-level pages. Since your site has 12 blog posts, 27 city pages, 30 service-area pages, and 5 commercial guides across multiple layout files, check each layout file individually rather than assuming one footer edit covers all of them.

## 3. Routes to Create

- `/privacy-policy` → renders `privacy-policy.md`
- `/sms-terms` → renders `sms-terms.md`

Both should be indexable (no `noindex`) and reachable without JavaScript — since this is an Astro static build, that's already handled as long as they're built as standard `.astro` or `.md` pages, not client-rendered.

## 4. Fields to Fill In Before Publishing

Both policy documents and this snippet reference placeholders — replace before going live:

- `[INSERT DATE]` — effective date
- `[BUSINESS ADDRESS]` — Ultra Roofing LLC's registered business address
- `(833) 356-7233` — main business line
- `office@ultraroofingtx.com` — support/contact email
