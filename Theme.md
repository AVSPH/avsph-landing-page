# AVSPH Careers - Theme & Styling Philosophy

## 1. Styling Philosophy
The AVSPH Careers page inherits the modern, corporate trust aesthetic of the AVSPH Main page but shifts the focus to emphasize stability, professionalism, and authority. 

While the AVSPH Main page relies heavily on white and light backgrounds (`#FFFFFF`, `#F8FAFC`) to feel open and welcoming to prospective clients, **the Careers page will be styled to use the Primary Dark Blue (`#044465`) much more prominently**.

This darker, solid approach establishes a strong employer brand. It communicates reliability and creates a focused, premium environment that naturally guides candidates through the company culture, job listings, and application forms.

## 2. Core Color Palette (Derived from Main AVSPH)

### Primary Colors (Prominent in Careers)
The Careers page should use these colors for main backgrounds, navigation, hero sections, and prominent UI wrappers.
- **Primary:** `#044465` (*Main brand dark blue - dominant color for the Careers theme*)
- **Primary Light:** `#0A5C87` (*Use for hover states or active navigational items*)
- **Primary Dark:** `#022D42` (*Use for deep contrast structural elements, like footers*)

### Secondary Colors
Used to create subtle gradients or depth when paired with the Primary colors.
- **Secondary:** `#003f62`
- **Secondary Light:** `#004E7A`
- **Secondary Dark:** `#002B45`

### Accent Colors (For Conversion / Actions)
Use these colors strategically to draw attention to critical actions, such as "Apply Now" buttons, badges, or important alerts, ensuring they pop against the dark blue backgrounds.
- **Accent (Orange):** `#F97316` (*Primary call-to-action color, highly visible against dark blue*)
- **Accent Light:** `#FB923C`
- **Accent Dark:** `#C2410C`

### Background & Surface Colors 
While the primary blue is prominent, light modes and whitespace are still necessary for reading intensive areas (e.g., inside job description cards).
- **Background (Light):** `#F8FAFC` (*For content areas requiring high legibility*)
- **Background Section:** `#cdd9e0` (*Subtle dividers or secondary sections*)
- **Background Alt:** `#EEF2F6` (*From logo light grayish blue*)
- **Card:** `#FFFFFF` (*Used for Job listing cards and application forms to contrast against the blue*)

### Typography (Fonts & Weights)
The Careers page utilizes the same modern font stack as the main site, optimizing for both impact and extreme legibility for reading longer job descriptions.
- **Heading Font (`--font-heading`):** `Lexend`
  - *Weights:* 700 (Standard Headings `h2`-`h6`), 800 (Extra Bold for Main `h1` Hero headings)
  - *Line Height:* 1.2 (Tight and punchy)
  - *Subsets:* Latin (`display: swap`)
- **Body Font (`--font-body`):** `Source Sans 3`
  - *Weights:* 400 (Regular for standard reading), 500/600 (Medium/Semibold for UI elements or emphasis)
  - *Line Height:* 1.6 (Spacious, optimized for reading paragraphs of text like responsibilities/requirements)
  - *Subsets:* Latin (`display: swap`)
- **Hero/Display Font (`--font-hero`):** `Plus Jakarta Sans`
  - *Weights:* 400, 500, 600, 700, 800
  - *Subsets:* Latin (`display: swap`)

### Text Colors
When using the dark blue background, text must be inverted. On light cards, use the standard dark text.
- **Foreground (Main Text on Light):** `#1E293B`
- **Foreground Light:** `#475569`
- **Muted Text:** `#64748B`
- **Inverted Text (On Primary/Secondary Blue):** `#FFFFFF` or `#F8FAFC`

### Borders
- **Border:** `#E2E8F0`
- **Border Light:** `#F1F5F9`

## 3. Application Guidelines for the Careers Page

- **Hero & Header Sections:** Instead of a white/light hero, use the Primary Blue (`#044465`) or a sleek gradient down to `--primary-dark`. Use white typography (`#FFFFFF`). Add the Orange Accent (`#F97316`) for the main "View Openings" or "Join Us" button.
- **Job Listing Cards:** Maintain a clean, legible look using `#FFFFFF` for the card background. These white cards will stand out handsomely when placed over a blue or subtly grayish-blue (`#EEF2F6`) section background. Use the primary blue (`#044465`) for the job title text to maintain hierarchy.
- **Buttons:**
  - *Primary Action (Apply Now):* Gradient or solid orange (`#F97316`) to contrast strongly against the blue theme.
  - *Secondary Action (Learn More/Read JD):* Empty with a white border and text if placed on a dark background. Deep blue (`#044465`) if placed inside a white card.
- **Trust & Benefits Badges:** Leverage the gradient utilities (e.g., `bg-gradient-secondary`) for icons/badges representing company benefits (Healthcare, Remote Work, etc.) to give a premium 3D feel.
- **Shadows:** Use the established shadow system (`--shadow-md`, `--shadow-xl`) to lift the white application/job cards off the darker or muted backgrounds.
