# Tracking Plan

## Google Analytics 4 (GA4)

- Add measurement ID to environment variable: `GA_MEASUREMENT_ID`
- Initialise GA4 script in the root layout

### Events

| Event Name       | Trigger                          | Parameters              |
| ---------------- | -------------------------------- | ----------------------- |
| `section_view`   | Section scrolls into viewport    | `section_name`, `depth` |
| `cta_click`      | User clicks a CTA button         | `button_label`, `location` |
| `accordion_open` | User expands an accordion item   | `item_label`, `section` |
| `form_submit`    | Contact/CTA form submitted       | `form_name`             |

### Conversion Goals

| Goal                      | Mapped Event   |
| ------------------------- | -------------- |
| Strategy session booking  | `cta_click` (book strategy session) |
| Email inquiry             | `form_submit` or `cta_click` (email link) |

## Vercel Analytics

Built-in page view and Web Vitals tracking. Enable in the Vercel dashboard under **Project Settings > Analytics**. No code changes required.

## Implementation Notes

- Event tracking is not yet wired up. Add GA4 and event calls once the measurement ID is available.
- Scroll-depth tracking can use an `IntersectionObserver` on each section wrapper.
- CTA click tracking should fire before navigation or form submission.
