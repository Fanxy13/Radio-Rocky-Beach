# Radio Rocky Beach

Ein kleiner Webplayer für GTA-Radiosender. Reines HTML, CSS und JavaScript, ohne Framework und ohne Build-Schritt.

## Funktionen

- Startseite mit Suche und den drei beliebtesten Sendern (nach Hörerzahl)
- Seite mit allen Sendern als Logo-Raster, alphabetisch sortiert
- Player mit Cover, aktuellem Songtitel, Play/Pause, vorherigem/nächstem Sender und Lautstärke
- Anzeige im Kontrollzentrum bzw. bei den Medientasten (Media Session API)

## Lokal starten

Die Seiten nutzen JavaScript-Module und müssen über einen lokalen Server geöffnet werden, nicht per Doppelklick:

```bash
npx serve .
```

Oder in VS Code mit der Erweiterung «Live Server».

## Bekannte Einschränkung

Die Audio-Streams laufen über `http`. Auf einer `https`-Seite (z. B. GitHub Pages) blockiert der Browser sie als Mixed Content. Senderliste, Logos und Songtitel funktionieren dort, der Ton nur lokal.

## Quellen und Rechte

- Senderdaten und Streams: gtaradio.net (inoffiziell, ohne Gewähr)
- Logos: [Fanxy13/GTA-Radio-Images](https://github.com/Fanxy13/GTA-Radio-Images) via jsDelivr
- Icons: [Google Material Symbols](https://fonts.google.com/icons), Apache License 2.0, geladen über Google Fonts
- GTA, die Sendernamen und Logos gehören Rockstar Games / Take-Two Interactive. Nicht-kommerzielles Fanprojekt ohne Verbindung zu Rockstar.
