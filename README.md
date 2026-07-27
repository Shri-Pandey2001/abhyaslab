# AbhyasLab · Concept To Code

A practice portal for first-year computer science students. Read a concept, answer the
self-check questions, then write Python and run it — all inside the browser, nothing to install.

Runs as a plain static site. No server, no database bill, no build step.

| Piece | What it does |
|---|---|
| HTML / CSS / JS | The whole interface. No framework, no bundler. |
| Pyodide (WebAssembly) | Runs real Python inside the student's browser. |
| Google Apps Script | Receives registrations, scores and doubts. Also holds your Gemini key. |
| Google Sheets | Your database and faculty dashboard. |
| Gemini (optional) | Powers the "Ask a doubt" panel, proxied through Apps Script. |

---

## Try it first

Open `index.html` in a browser. Everything works immediately — registration, quizzes,
the Python runner — with progress saved in the browser. Nothing is logged to a Sheet
until you finish Part B below.

---

## Part A — Put it on the internet (10 minutes)

### GitHub Pages

1. Create a new repository on GitHub, e.g. `abhyaslab`. Make it **Public**.
2. Upload every file and folder from this project into it, keeping the structure.
3. Go to **Settings → Pages**.
4. Under *Build and deployment*, set Source to **Deploy from a branch**, branch **main**,
   folder **/ (root)**. Save.
5. Wait about a minute. Your site is at
   `https://<your-username>.github.io/abhyaslab/`

### Vercel (alternative)

Import the repository at vercel.com, choose **Other** as the framework, leave build
settings empty, and deploy. It works because there is nothing to build.

---

## Part B — Connect the Google Sheet (15 minutes)

### 1. Create the Sheet

Make a new Google Sheet and name it `AbhyasLab Database`.

### 2. Add the script

1. In that Sheet: **Extensions → Apps Script**.
2. Delete whatever is in `Code.gs` and paste the entire contents of
   `apps-script/Code.gs` from this project.
3. Save (the disk icon).
4. In the function dropdown at the top, pick **setUp** and click **Run**.
   Google will ask for permission the first time — choose your account, click
   *Advanced → Go to (project name)*, then **Allow**. This warning is normal for
   your own scripts.
5. Go back to the Sheet. Three tabs now exist: `Students_Master`, `Activity_Log`, `Doubt_Log`.

### 3. Publish it as a web app

1. In the Apps Script editor: **Deploy → New deployment**.
2. Click the gear next to *Select type* and choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** **Anyone** ← this matters. "Anyone with Google account" will not work.
4. **Deploy**, then copy the **Web app URL**. It ends in `/exec`.

### 4. Tell the site about it

Open `assets/js/config.js` and paste the URL:

```js
endpoint: "https://script.google.com/macros/s/AKfy..../exec",
```

Commit that change. Registrations and scores now land in your Sheet in real time.

> **Every time you edit the Apps Script**, you must **Deploy → Manage deployments →
> edit (pencil) → Version: New version → Deploy**. Saving alone does not update the
> live URL. This trips up nearly everyone once.

---

## Part C — Turn on the AI doubt panel (5 minutes)

The Gemini key lives inside Apps Script, never in the website. Students cannot see it or
steal it, and you keep one key for the whole college.

> **Note:** a Gemini app subscription is *not* an API key. You need a separate — and free —
> key from Google AI Studio. The free tier is generous enough for a classroom.

1. Go to **aistudio.google.com/apikey** and create an API key.
2. In the Apps Script editor: **Project Settings** (gear, left side) →
   **Script Properties** → **Add script property**.
3. Property: `GEMINI_API_KEY` — Value: your key. Save.
4. Optional: add `GEMINI_MODEL` if you want a specific model. Default is `gemini-2.5-flash`.
5. **Deploy → Manage deployments → New version → Deploy.**

Make sure `aiEnabled: true` in `config.js`. Set it to `false` to remove the panel entirely.

The assistant is instructed to explain concepts and point at mistakes, but to refuse to
write the practice task answers for students. Every question and answer is logged to the
`Doubt_Log` tab, so you can see exactly what your class is struggling with.

---

## Part D — NotebookLM links

Each topic has a `notebookLM` field in `assets/js/content.js`, empty by default:

```js
notebookLM: "",
```

Leave it empty and no button appears. Paste a share link and an
**"Explore this topic in NotebookLM"** button shows up at the end of that topic's notes.

To make one: open NotebookLM, create a notebook, add your PDF or notes as sources, then
**Share → Anyone with the link → Copy link**. Paste that link between the quotes.

---

## Adding topics

See **ADDING-CONTENT.md**. Short version: everything students read lives in
`assets/js/content.js`, and nothing else needs to change.

While you're writing new topics, set `lockingEnabled: false` in `config.js` so you can
jump straight to any topic without clearing the earlier ones. Set it back to `true`
before students use it.

---

## Reading the data

- **Students_Master** — one row per student, with their furthest topic and last-seen time.
- **Activity_Log** — one row per quiz attempt, task pass and topic completion.
- **Doubt_Log** — every AI question and answer.

For a faculty dashboard, select `Activity_Log` and use **Insert → Pivot table**, or connect
the Sheet to Looker Studio (free) for charts.

---

## Things worth knowing

- **First Python run is slow.** Pyodide downloads about 10 MB the first time a student runs
  code. After that it is cached by the browser and starts instantly.
- **Progress lives in the browser.** A student on a different machine starts fresh locally,
  but their Sheet history is intact. This is the trade-off of having no login system.
- **Apps Script free quota** is 20,000 URL fetches per day. A cohort of 300 students will
  not come close.
- **Ctrl+Enter** runs the code in whichever editor has focus.

## Project layout

```
index.html                  the whole interface
assets/css/style.css        all styling
assets/js/config.js         ← your settings
assets/js/content.js        ← your notes, quizzes and tasks
assets/js/api.js            talks to Apps Script
assets/js/app.js            application logic
apps-script/Code.gs         paste this into Apps Script
ADDING-CONTENT.md           how to add topics
```
