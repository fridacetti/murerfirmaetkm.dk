# 4 Semester Eksamen – Storyblok Projekt

## Tech Stack
- Next.js
- Storyblok
- TypeScript
- Tailwind CSS

# Storyblok + Next.js Setup Guide

Denne guide forklarer hvordan man:

1. Cloner projektet ned fra GitHub
2. Installerer dependencies
3. Sætter Storyblok op lokalt
4. Starter projektet
5. Forstår de vigtigste Storyblok funktioner i koden

---

# 1. Clone projektet fra GitHub

Åbn terminal og kør:

```bash
git clone https://github.com/pigerne4eksamen/4_semester_eksamen_storyblok.git
```

Gå derefter ind i projektmappen:

```bash
cd 4_semester_eksamen_storyblok
```

---

# 2. Installer dependencies

Kør:

```bash
npm install
```

Det installerer alle packages fra `package.json`.

---

# 3. Installer Storyblok package

Hvis det ikke allerede er installeret:

```bash
npm install @storyblok/react
```

---

# 4. Opret .env.local

I projektets root skal der oprettes en fil der hedder:

```text
.env.local
```

Indsæt:

```env
STORYBLOK_API_TOKEN=DIN_TOKEN_HER
```

Token findes i Storyblok under:

```text
Settings → Access Tokens
```

Brug Preview Token.

---

# 5. Start projektet

Kør:

```bash
npm run dev
```

Åbn derefter:

```text
http://localhost:3000
```

---

# 6. Storyblok struktur

Projektet bruger denne struktur:

```text
Page
└── body
    ├── Hero
    ├── ValuesSection
    ├── Testimonials
    ├── FAQ
    └── osv.
```

Hver Storyblok component har også en React/TSX component.

Eksempel:

```text
Storyblok component:
Hero

React component:
src/components/Hero.tsx
```

---

# 7. storyblok.ts

Fil:

```text
src/lib/storyblok.ts
```

Her registreres alle Storyblok components.

Eksempel:

```ts
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "@/components/Page";
import Hero from "@/components/Hero";

export const initStoryblok = () => {
  storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin],

    components: {
      page: Page,
      hero: Hero,
    },
  });
};
```

---

# 8. Hvad betyder de vigtigste Storyblok funktioner?

## storyblokInit

```ts
storyblokInit()
```

Initialiserer Storyblok i projektet.

Den:

* forbinder til Storyblok API
* registrerer alle React components
* gør Storyblok klar til brug

---

## apiPlugin

```ts
use: [apiPlugin]
```

Giver adgang til Storyblok API.

Det bruges når vi henter data:

```ts
getStoryblokApi()
```

---

## StoryblokComponent

```tsx
<StoryblokComponent blok={blok} />
```

Renderer dynamisk den korrekte React component.

Eksempel:

Hvis Storyblok sender:

```json
{
  "component": "hero"
}
```

så renderer den automatisk:

```tsx
<Hero />
```

baseret på mappingen i `storyblok.ts`.

---

## storyblokEditable

```tsx
<div {...storyblokEditable(blok)}>
```

Bruges for at Storyblok Visual Editor virker.

Det gør at:

* man kan klikke på elementer i editoren
* Storyblok ved hvilken blok der redigeres
* live editing virker korrekt

Det skal typisk sættes på root elementet i en component.

Eksempel:

```tsx
<section {...storyblokEditable(blok)}>
```

---

# 9. Hvordan rendering fungerer

I `Page.tsx` renderer vi alle sections dynamisk:

```tsx
{blok.body?.map((nestedBlok: any) => (
  <StoryblokComponent
    blok={nestedBlok}
    key={nestedBlok._uid}
  />
))}
```

Det betyder:

* Storyblok styrer indholdet
* React styrer designet
* Nye sektioner kan tilføjes direkte i CMS

---

# 10. Vigtigt at huske

## Storyblok = content/data

Storyblok bruges til:

* tekst
* billeder
* struktur
* sektioner
* cards

---

## Next.js = funktionalitet/design

Next.js bruges til:

* styling
* layouts
* sliders
* accordions
* formularer
* animationer
* logik

---

# 11. Hvis nye components ikke virker

Tjek:

1. Er component registreret i `storyblok.ts`?
2. Matcher navnet fra Storyblok?
3. Findes TSX filen?
4. Er der brugt `StoryblokComponent`?
5. Er dev server genstartet?

---

# 12. Git workflow

Når man arbejder på projektet:

## Hent nyeste ændringer

```bash
git pull
```

---

## Push egne ændringer

```bash
git add .
git commit -m "beskrivelse"
git push
```

---

# 13. Projektstruktur

```text
src/
├── app/
├── components/
├── lib/
│   └── storyblok.ts
```

---

# 14. Dynamic routing

Projektet bruger:

```text
src/app/[...slug]/page.tsx
```

Det gør at Storyblok pages automatisk virker som routes.

Eksempel:

```text
Storyblok slug:
/renovering

Bliver til:
localhost:3000/renovering
```

---

# 15. Tips

* Genstart server efter nye components
* Brug variants til små layout ændringer
* Lav nye components til nye sektionstyper
* Hold sections små og genbrugelige
* Cards bør normalt være nested Storyblok blocks
