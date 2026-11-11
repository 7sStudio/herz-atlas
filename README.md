# Herz-Atlas 3D

**[English](#english) · [Deutsch](#deutsch)**

**Live:** <https://7sstudio.github.io/herz-atlas/>

---

## English

Herz-Atlas 3D is an interactive 3D atlas of cardiac anatomy for cardiology. It runs entirely in the browser: a single HTML file, no account and no server-side backend. You can rotate, cut and explore a detailed heart model. Every structure links to its definition, normal values and clinical relevance, and dedicated modules cover imaging, ECG, haemodynamics, pathology and interventions. The app interface is in German.

### Features

- **3D heart model**
  - 52 anatomical structures in 8 layers: chambers and atria, valves, septa and valve apparatus, great vessels, coronary arteries, cardiac veins, conduction system, pericardium
  - Realistic rendering with myocardial fibre texture, epicardial fat along the coronaries and sulci, and true-to-scale vessel calibres
  - Tap or click any structure to open a finding card with definition, anatomy, normal values, clinical relevance and related structures
  - Isolate a single structure, toggle layers on and off, centre the view
- **View & tools**
  - Standard views and anatomical specimen presets
  - Cutting planes and opacity control
  - Distance measurement in mm
  - Notes pinned to the model (saved locally)
  - Save the current view as an image, or share a link to the exact view
- **Imaging**: standard echocardiography (TTE), TEE, CT and MRI planes shown on the 3D model, with a "fly to plane" camera
- **Coronaries**: AHA 17-segment model, perfusion territories, angiographic projections, anatomical variants
- **ECG & electrophysiology**: 12-lead ECG, rhythms, bundle-branch block patterns, activation maps (isochrones) with propagation playback
- **Cardiac cycle & haemodynamics**: beating-heart animation, Wiggers diagram, pressure-volume loop, heart sounds
- **Pathology**: valvular disease with adjustable severity (mild / moderate / severe) and Doppler profiles, cardiomyopathies, complications and shunts, plus a one-click reset to normal
- **Interventions & devices**: TAVI (balloon-expandable and self-expanding), TEER, PCI, ablation, pacemakers, LAA occluders
- **Learning & patient education**
  - Case quiz and structure quiz
  - Guided tours
  - Patient mode that switches to plain language
  - Normal values and cut-offs, sources and references

### Install as an app (smartphone and PC)

Herz-Atlas 3D is a Progressive Web App (PWA). Once installed it gets its own icon, opens full-screen without browser bars and **works offline**: a service worker caches the app after the first visit and updates it in the background, with a notice when a new version is available.

- **Smartphone and tablet**
  - Built for touch: one finger rotates, two fingers zoom and pan
  - Bottom sheets with a peek state and swipe gestures, landscape layout, 44 px touch targets, no iOS zoom on text input
  - The Android back button closes open sheets, and images can be shared through the system share sheet
  - Rendering slows down while idle to save battery
- **iPhone / iPad (Safari):** tap **Share** and then **Add to Home Screen**
- **Android (Chrome, Edge, Samsung Internet):** open the browser menu and choose **Install app** or **Add to Home screen**. In supported browsers, the app's **Module** menu also has an **Installieren** (Install) button.
- **PC / Mac**
  - **Chrome and Edge** (Windows, macOS, Linux): click the install icon in the address bar, or use the **Installieren** button in the app's **Module** menu. The atlas then runs in its own window and can be launched from the Start menu, Dock or desktop.
  - **Safari on macOS (Sonoma or later):** choose **File > Add to Dock**

> Open the app once with an internet connection. After that it works offline.

### Run locally

Open `index.html` in any modern browser. No build step, no server, no installation needed.

Offline mode and installing as an app only work when the page is served over HTTPS. The [GitHub Pages link](https://7sstudio.github.io/herz-atlas/) already does this.

### Disclaimer

Herz-Atlas 3D is for education and training. It is not a medical device and must not be used for diagnosis or treatment decisions.

---

## Deutsch

Herz-Atlas 3D ist ein interaktiver 3D-Atlas der Herzanatomie für die Kardiologie. Er läuft vollständig im Browser: eine einzige HTML-Datei, ohne Konto und ohne Server-Backend. Das detaillierte Herzmodell lässt sich drehen, schneiden und erkunden. Jede Struktur ist mit Definition, Normwerten und klinischer Relevanz verknüpft, und eigene Module decken Bildgebung, EKG, Hämodynamik, Pathologie und Interventionen ab.

### Funktionen

- **3D-Herzmodell**
  - 52 anatomische Strukturen in 8 Schichten: Kammern und Vorhöfe, Herzklappen, Septen und Klappenapparat, große Gefäße, Koronararterien, Herzvenen, Erregungsleitung, Perikard
  - Realistische Darstellung mit Myokardfasern, epikardialem Fett entlang der Koronarien und Sulci sowie maßstabsgetreuen Gefäßkalibern
  - Struktur antippen oder anklicken: Die Befundkarte zeigt Definition, Anatomie, Normwerte, Klinik und verwandte Strukturen
  - Einzelne Strukturen isolieren, Schichten ein- und ausblenden, Ansicht zentrieren
- **Ansicht & Werkzeuge**
  - Standardansichten und Präparate
  - Schnittebenen und Deckkraft
  - Messen in mm
  - Notizen am Modell (lokal gespeichert)
  - Aktuelle Ansicht als Bild speichern oder als Link teilen
- **Bildgebung**: Standardebenen für Echo (TTE), TEE, CT und MRT am 3D-Modell, mit „Zur Ebene fliegen“
- **Koronarien**: AHA-17-Segment-Modell, Versorgungsgebiete, Projektionen, Varianten
- **EKG & Elektrophysiologie**: 12-Kanal-EKG, Rhythmen, Blockbilder, Aktivierungskarten (Isochronen) mit abspielbarer Ausbreitung
- **Herzzyklus & Hämodynamik**: Herzschlag-Animation, Wiggers-Diagramm, Druck-Volumen-Schleife, Herztöne
- **Pathologie**: Klappenvitien mit einstellbarem Schweregrad (leicht / mittel / schwer) und Doppler-Profil, Kardiomyopathien, Komplikationen und Shunts, dazu Zurücksetzen auf Normalbefund
- **Intervention & Devices**: TAVI (ballonexpandierbar und selbstexpandierend), TEER, PCI, Ablation, Schrittmacher, LAA-Okkluder
- **Lernen & Aufklärung**
  - Fallquiz und Strukturquiz
  - Geführte Touren
  - Patientenmodus in einfacher Sprache
  - Normwerte und Grenzwerte, Quellen und Hinweise

### Als App installieren (Smartphone und PC)

Herz-Atlas 3D ist eine Progressive Web App (PWA). Installiert bekommt der Atlas ein eigenes Symbol, startet im Vollbild ohne Browserleisten und **funktioniert offline**: Ein Service Worker speichert die App nach dem ersten Aufruf und aktualisiert sie im Hintergrund. Liegt eine neue Version vor, erscheint ein Hinweis.

- **Smartphone und Tablet**
  - Für Touch gebaut: ein Finger dreht, zwei Finger zoomen und verschieben
  - Bottom-Sheets mit Peek-Stufe und Wischgesten, Querformat-Layout, 44-px-Touchziele, kein iOS-Zoom bei Eingaben
  - Die Android-Zurück-Taste schließt offene Sheets, Bilder lassen sich über das System-Teilen-Menü teilen
  - Im Leerlauf wird das Rendering gedrosselt, das schont den Akku
- **iPhone / iPad (Safari):** auf **Teilen** tippen und **„Zum Home-Bildschirm“** wählen
- **Android (Chrome, Edge, Samsung Internet):** im Browser-Menü **„App installieren“** oder **„Zum Startbildschirm hinzufügen“** wählen. In unterstützten Browsern gibt es außerdem im Menü **Module** der App den Knopf **Installieren**.
- **PC / Mac**
  - **Chrome und Edge** (Windows, macOS, Linux): auf das Installationssymbol in der Adressleiste klicken oder im Menü **Module** der App auf **Installieren**. Der Atlas läuft dann in einem eigenen Fenster und lässt sich über Startmenü, Dock oder Desktop starten.
  - **Safari unter macOS (ab Sonoma):** **Ablage > Zum Dock hinzufügen**

> Die App einmal mit Internetverbindung öffnen. Danach funktioniert sie auch offline.

### Lokal starten

`index.html` einfach in einem aktuellen Browser öffnen. Kein Build-Schritt, kein Server, keine Installation nötig.

Offline-Betrieb und Installation als App funktionieren nur, wenn die Seite über HTTPS ausgeliefert wird. Der [GitHub-Pages-Link](https://7sstudio.github.io/herz-atlas/) erledigt das bereits.

### Hinweis

Herz-Atlas 3D dient der Aus- und Weiterbildung. Er ist kein Medizinprodukt und nicht für Diagnose- oder Therapieentscheidungen bestimmt.
