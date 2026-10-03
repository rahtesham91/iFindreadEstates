# What is real and what is theme demo on ifindrealestates.com

The old site is WordPress with the Houzez theme. Of the 97 public pages crawled, only a small part is genuine company content. The rest is Houzez demo content (lorem ipsum, Miami contact details, layout demo pages).

## REAL company content (usable)

| Page | File | What it contains |
|---|---|---|
| About | `pages/about.md` | Company intro, Founder & CEO **Mr. Avaid Lateef**, 10 team members with bios, services list, old tagline |
| Home | `pages/home.md` | Welcome text, "Live Where It Matters" intro, 4 featured listings |
| Developers | `pages/developers.md` | 12 developers: Dubai Properties, Emaar, Damac, Sobha, Nshama, Azizi, Reportage, BNW, Fakhr-al-Din Properties, Danube, BT Properties, Binghatti (logos are image files on the old site) |
| 7 property listings | `properties/*.md` | Al Haseen Residence 3 (1BR, 2BR), Princess Tower 1BHK, Creek Edge Tower 1 2BR, La Vie JBR 2BR+Maid, Six Senses Residences 4BR Sky Villa, Palm Jumeirah Frond K Garden Home Villa |
| 4 agent profiles | `agents/*.md` | Bios are real (Waqar Shah, Essam Nabil, Nyi Linn Htet, Ekaterina). **Their contact/licence fields are theme demo data, do not use** |
| Blog (3 posts) | `posts/how-to-find-property-in-uae.md`, `affordable-office-building-for-rent-in-dubai.md`, `light-and-modern-apartment-in-uae-for-rent*.md` | Short genuine posts |
| Company email | everywhere | info@ifindrealestates.com |

### Team listed on the old About page
Abid Khan (Managing Director), Muzamal Hameed (Sales Manager), Waqar Shah (Real Estate Expert), Meher Ahmed (Luxury Properties Specialist), Farwa Khan (Associate Director), Ekaterina (Real Estate Expert), Essam Nabil (Real Estate Expert), Nyi Linn Htet (Real Estate Expert), Umar Bin Masood (Admin & Accounts), Fahad Ahmed (Marketing Director).

## DEMO / placeholder content (do not reuse)
- **Contact page**: Houzez template text with a Miami address and `@houzez.com` emails.
- **FAQ, Privacy Policy, Terms and Conditions**: lorem ipsum.
- **12 blog posts** (business development, "10 quick tips", etc.): lorem ipsum.
- **Testimonials (4)** and **partners (6, "Envato")**: theme demo.
- **Agent licence/tax numbers and phone numbers** on agent pages (e.g. 092-212-0987, 321 456 9874): theme demo, not real BRNs.
- About page's six "Services" cards (Property Management, Financial Reporting, Capital Improvements, Business Development, Finance Real Estate, Recover Asset Value): look like theme defaults.
- ~35 layout demo pages (grid/list/map variants, typography, packages, my-profile, etc.): duplicates of the Home template.

## Things to decide before any of it is reused
1. **Old tagline** "Wealthy Choices. Prosperous Future." conflicts with the agreed tagline. Not used.
2. **"Property Management"** and similar service cards conflict with "we do not have a management licence". Not used.
3. Claims such as "over 8 years of experience" need the company's confirmation before they go on the new site.
4. Listing prices and details are from April-May 2025 and may be out of date. The new site does not list properties.
5. Typos on the old About page ("Cheif Executuve officer") would be corrected.

## Not crawled on purpose
- 170 `houzez_invoice` URLs (client billing records).
- Taxonomy and archive pages (categories, tags, property types, areas): no unique content.
