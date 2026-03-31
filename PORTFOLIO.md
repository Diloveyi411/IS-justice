# IS Justice — Web Redesign

**Klient:** IS Justice Servis s.r.o.
**Typ:** Ekonomicko-podnikateľské poradenstvo (účtovníctvo, dane, mediácia, kryptomeny, reality)
**Rok:** 2026
**Stack:** React, Vite, CSS Modules, Google Fonts

---

## Zadanie

Klientka (JUDr. Ivana Stancelová) mala funkčnú, ale zastaranú stránku bez jasného positioningu, bez konverzných prvkov a bez vizuálnej identity, ktorá by budovala dôveru. Cieľom bolo celý web prerobiť — od stratégie po kód.

---

## Proces

### 1. UX Audit
Pred akýmkoľvek dizajnom som spravila hĺbkový audit existujúcej stránky. Identifikovala som 10 konkrétnych problémov:

- Rozmazaný positioning (príliš veľa služieb bez jasného ICP)
- CTA buttony orientačné, nie konverzné
- Hero sekcia bez vizuálneho dopadu
- Nulová sociálna dôvera (žiadne čísla, referencie, roky praxe)
- Justified text v bio — UX anti-pattern
- Hash routing bez SEO hodnoty

### 2. Dizajn
Na základe auditu som navrhla redesign v Figme — čistý, profesionálny, konverzne orientovaný. Kľúčové rozhodnutia:

- **Farba:** Zachovala som pôvodnú oranžovú (#FF8C00) — energická, zapamätateľná
- **Typografia:** DM Sans (headers) + Inter (body) — moderné, čitateľné, konzistentné
- **Hero:** Reálna fotografia z prostredia (BW laptop + grafy) s bielym overlayom
- **Sociálna dôvera:** Founder quotes, portréty tímu, reálne kontaktné údaje

### 3. Vývoj
Celý web implementovaný v React + Vite s komponentovou architektúrou:

- `Navbar` — logo, navigácia, CTA
- `Hero` — centrovany titul, BG fotka s overlayom, 2 CTA buttony
- `Services` — 7 služieb ako karty v 3-stĺpcovej mriežke
- `Comparison` — pred/po porovnanie
- `Stats` — kľúčové čísla
- `Pricing` — 3 balíky + 2 doplnkové
- `CaseStudies` — prípadové štúdie
- `FounderQuote` — portréty a citáty tímu (Ivana + David)
- `PathSelector` — výber podľa situácie klienta
- `LeadForm` — kontaktný formulár s výberom typu podnikania
- `Footer` — kontakty, adresa, registračné údaje

---

## Výsledok

Plnohodnotný single-page web s jasným positioningom, konverznými prvkami a profesionálnou vizuálnou identitou. Všetky sekcie sú responsívne a pripravené na nasadenie.

**Repo:** https://github.com/Diloveyi411/IS-justice

---

## Kľúčové rozhodnutia

| Problém | Riešenie |
|---|---|
| Nejasný positioning | Headline zameraný na "kontrolu nad financiami" |
| Slabý hero | BW fotka + overlay + silný 3-riadkový titul |
| Dlhý zoznam služieb | Karty s číslami 01-07, prehľadná mriežka |
| Žiadna tvár firmy | Portréty Ivany a Davida s citátmi |
| Slabé CTA | Konverzný formulár s bezplatným auditom ako háčik |
