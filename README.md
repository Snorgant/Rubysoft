# Rubysoft website

Moderne one-page bedrijfswebsite voor Rubysoft Window. De site presenteert de 3D/BIM-oplossing, voordelen, werkwijze, expertise en contactinformatie in een snelle, responsive ervaring.

## Techniek

- Semantische HTML5
- Moderne CSS met responsive layouts en reduced-motion ondersteuning
- Vanilla JavaScript voor navigatie en scroll-animaties
- Dependencyvrije Node.js-scripts voor ontwikkeling, validatie en productiebuilds

## Installatie

Vereist: Node.js 20 of nieuwer.

```bash
npm install
```

## Ontwikkeling

Start de lokale ontwikkelserver:

```bash
npm run dev
```

Open vervolgens `http://localhost:5173`.

## Kwaliteitscontroles

```bash
npm run check
npm run build
```

De productieversie wordt in `dist/` geplaatst. Test die lokaal met:

```bash
npm run preview
```

## Deployment

### Vercel

1. Importeer deze repository in Vercel.
2. Kies framework preset **Other**.
3. Gebruik `npm run build` als build command.
4. Gebruik `dist` als output directory.

### Netlify

1. Koppel deze repository in Netlify.
2. Gebruik `npm run build` als build command.
3. Gebruik `dist` als publish directory.

### Statische hosting

Voer `npm run build` uit en publiceer de volledige inhoud van `dist/` via een statische webserver.

## Projectstructuur

```text
├── assets/           # Logo en productweergave
├── public/           # Favicon
├── scripts/          # Lokale server, checks en productiebuild
├── src/
│   ├── main.js       # Navigatie en animaties
│   └── styles.css    # Design system en responsive styling
├── index.html        # One-page inhoud en SEO-metadata
└── package.json      # Ontwikkel- en buildcommando's
```

## Assets vervangen

De merk- en productafbeeldingen staan in `assets/`. Behoud bij vervanging bij voorkeur dezelfde bestandsnamen om aanpassingen in de markup te voorkomen.
