# Portfolio Développeur - Philosophie de Design

## Approche Choisie : **Élégance Minimaliste Moderne**

### Design Movement
**Minimalisme Technologique** - Inspiré par les portfolios professionnels de développeurs reconnus (Bruno Simon, Brittany Chiang, Adham Dannaway). Combine la simplicité épurée avec des micro-interactions sophistiquées et une typographie intentionnelle.

### Core Principles
1. **Clarté Hiérarchique** - La structure prime sur la décoration. Chaque élément a un objectif.
2. **Espace Respirant** - Whitespace généreux crée de la sophistication et de la lisibilité.
3. **Interactions Fluides** - Les animations sont subtiles mais perceptibles, jamais distrayantes.
4. **Accessibilité Premium** - Le design épuré ne sacrifie jamais l'accessibilité ou la performance.

### Color Philosophy
- **Palette Principale** : Fond blanc/très clair (#FAFAFA) avec texte charbon foncé (#1F2937)
- **Accent Primaire** : Bleu professionnel (#2563EB) pour les CTA et les éléments interactifs
- **Accents Secondaires** : Gris subtils (#E5E7EB, #D1D5DB) pour les séparations et les bordures
- **Raison** : Cette palette évoque la confiance, la professionnalité et la clarté. Le bleu est la couleur des développeurs tech modernes.

### Layout Paradigm
- **Navigation Sticky** : Header épuré avec navigation horizontale, reste visible au scroll
- **Sections Asymétriques** : Hero avec texte à gauche + image/illustration à droite
- **Grille Flexible** : Les projets utilisent une grille 2-3 colonnes responsive, pas de centrage systématique
- **Espacement Rythmé** : Utilise un système de spacing cohérent (4px, 8px, 16px, 24px, 32px)

### Signature Elements
1. **Ligne Accent Animée** - Une fine ligne qui se dessine sous les titres lors du scroll
2. **Cartes de Projet Élevées** - Ombre douce + border subtle + hover lift effect
3. **Badges de Compétences** - Petits éléments arrondis avec fond léger et texte bleu

### Interaction Philosophy
- Les boutons répondent immédiatement avec un léger scale-down (0.97)
- Les cartes se soulèvent légèrement au survol (transform: translateY)
- Les transitions sont fluides (200-300ms) mais jamais lentes
- Les liens ont un underline animé qui apparaît au hover

### Animation Guidelines
- **Entrance** : Les sections se révèlent au scroll avec une légère opacité + translateY (fade-up)
- **Hover** : Tous les éléments interactifs ont un feedback immédiat (100-150ms)
- **Transitions** : Utilise `cubic-bezier(0.23, 1, 0.32, 1)` pour un effet snappy
- **Respect Motion** : Toutes les animations respectent `prefers-reduced-motion`

### Typography System
- **Display Font** : `Geist` (bold, 700) pour les titres H1 et H2 - moderne, géométrique
- **Body Font** : `Inter` (400, 500, 600) pour le corps et les éléments UI - lisible et neutre
- **Hiérarchie** :
  - H1 : 48px / 700 weight / line-height 1.2
  - H2 : 32px / 600 weight / line-height 1.3
  - Body : 16px / 400 weight / line-height 1.6
  - Small : 14px / 400 weight / line-height 1.5

### Brand Essence
**Positionnement** : Un portfolio qui prouve que le code peut être beau - pour les développeurs qui prennent leur craft au sérieux.

**Personnalité** : Professionnel, Innovant, Accessible

### Brand Voice
- **Tone** : Direct, confiant, sans jargon inutile
- **Exemples de Microcopy** :
  - CTA : "Voir mes projets" (pas "Get started today")
  - Section Compétences : "Outils que je maîtrise" (pas "My Skills")
  - Contact : "Discutons de votre projet" (pas "Contact me")

### Logo & Favicon
- **Concept** : Un symbole géométrique minimaliste représentant le code et l'innovation
- **Style** : Monochrome, épuré, fonctionne bien en petit (favicon)
- **Placement** : Header gauche, navigation sticky

### Signature Brand Color
**Bleu Professionnel** : `#2563EB` - Couleur primaire utilisée pour les CTA, les accents et les interactions. C'est la couleur qui identifie immédiatement ce portfolio.

---

## Sections du Portfolio

1. **Hero Section** - Titre accrocheur + CTA principal + image/illustration
2. **À Propos** - Biographie courte + compétences principales
3. **Projets Vedettes** - 3-4 projets avec images, descriptions et liens
4. **Compétences & Outils** - Badges des technologies maîtrisées
5. **Expérience** - Timeline ou liste des expériences professionnelles
6. **Contact** - Formulaire simple + liens sociaux

## Notes d'Implémentation
- Utiliser Tailwind 4 + shadcn/ui pour la cohérence
- Framer Motion pour les animations
- Responsive design mobile-first
- Performance: lazy loading des images, code splitting
