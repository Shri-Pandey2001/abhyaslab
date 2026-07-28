# Adding topics

Everything students read and answer lives in one file: **`assets/js/content.js`**.
Add to it, commit, and the site updates. No other file changes, ever.

Set `lockingEnabled: false` in `config.js` while you write, so you can open any topic
directly. Turn it back on before class.

---

## The shape of a topic

```js
{
  id: "u1t4",                    // must be unique across the whole course
  title: "Variables and data types",
  summary: "One line shown on the card and under the heading.",
  notebookLM: "",                // paste a share link, or leave empty for no button

  notes: `
    <h4>A heading</h4>
    <p>A paragraph. Use <code>inline code</code> for anything typed.</p>
    <pre><code>print("a code block")</code></pre>
    <div class="callout"><strong>A tip.</strong> Use these sparingly.</div>
    <ul><li>A list item</li></ul>
    <table><tr><th>Column</th></tr><tr><td>Cell</td></tr></table>
  `,

  mcqs: [ /* see below */ ],
  tasks: [ /* see below */ ]
}
```

Paste it inside the `topics: [ ... ]` array, after the last topic, with a comma between
topics. Order in the array is the order students unlock them.

### Writing `notes`

The notes are HTML inside backticks. Only four things can break it:

| Don't | Do |
|---|---|
| A backtick `` ` `` inside the notes | Use `<code>` tags instead |
| `${` anywhere | Write `$&#123;` |
| A single backslash `\` | Double it: `\\` |
| A raw `<` in prose, e.g. `a < b` | Write `a &lt; b` |

Tags that are already styled for you: `<h4> <p> <ul> <ol> <li> <code> <pre> <table>`
and `<div class="callout">`.

---

## Questions

```js
mcqs: [
  {
    q: "What does the input() function always return?",
    options: ["An integer", "A string", "A float", "It depends on what was typed"],
    answer: 1,                   // 0 = first option, 1 = second, and so on
    why: "input() hands back a string every time. Wrap it in int() to do maths with it."
  }
]
```

`why` is shown after the student answers, whether they were right or wrong — so write it
as a real explanation, not just "correct".

Pass mark is `mcqPassPercent` in `config.js` (60% by default). Students can retry freely;
their best score is kept.

---

## Code tasks

```js
tasks: [
  {
    id: "u1t4a",                 // unique
    kind: "code",
    title: "Task 4.1 — Add two numbers",
    brief: "Ask nothing. Store 7 and 5 in variables, print their sum.",
    starter: "# your code here\n",
    checks: [
      { type: "stdoutEquals", value: "12" }
    ]
  }
]
```

A task passes when **every** check passes.

### Available checks

| Type | Passes when | Example |
|---|---|---|
| `stdoutEquals` | The printed output matches exactly | `{ type:"stdoutEquals", value:"Hello" }` |
| `stdoutContains` | The output contains this text | `{ type:"stdoutContains", value:"Total" }` |
| `stdoutMinLines` | At least this many non-empty lines printed | `{ type:"stdoutMinLines", value:3 }` |
| `sourceIncludes` | The student's code contains this text | `{ type:"sourceIncludes", value:"for " }` |
| `sourceRegex` | The code matches this regular expression | `{ type:"sourceRegex", pattern:"def\\s+\\w+" }` |
| `sourceMinMatches` | The code matches the pattern at least *n* times | `{ type:"sourceMinMatches", pattern:"^\\s*#", count:2 }` |

Add `message: "..."` to any check to control the wording shown in the results list.
Without it, the student sees a generated description.

Trailing spaces and blank lines at the end are ignored, so students aren't failed on
whitespace. Everything else is compared exactly, including capital letters.

**In `pattern`, every backslash must be doubled.** `\d` becomes `"\\d"`.

### The tick-box task

For anything that happens off the site — installing software, opening a file:

```js
{
  id: "u1t4z",
  kind: "confirm",
  title: "Confirm your setup",
  brief: "Do this on your own machine, then tick the box.",
  label: "I ran <code>python --version</code> and got a version number."
}
```

---

## Interactive widgets

Drop any of these straight into a topic's `notes`. They are practice only — nothing here
affects a student's score or unlocks anything. Mix two or three into a long topic to break
up the reading.

### Guess the output

```html
<div class="w w-guess" data-answer="1">
  <span class="w__k">Guess the output</span>
  <p class="w__q">What appears on screen?</p>
  <pre><code>print(5 // 2)</code></pre>
  <div class="w-guess__opts">
    <button data-o="0">2.5</button>
    <button data-o="1">2</button>
    <button data-o="2">Error</button>
  </div>
  <p class="w__why">Two slashes is floor division — it throws away the remainder.</p>
</div>
```

`data-answer` is the `data-o` number of the right button. One attempt, then it locks and
shows the explanation.

### Tap to reveal cards

```html
<div class="w">
  <span class="w__k">Tap to reveal</span>
  <div class="w-flip">
    <button class="w-flip__card">
      <span class="w-flip__front">What does len() return?</span>
      <span class="w-flip__back">The number of items — characters in a string, elements in a list.</span>
    </button>
  </div>
</div>
```

Add as many cards as you like; they arrange themselves into a grid. Good for definitions,
shortcuts and facts.

### Match the pairs

```html
<div class="w w-match">
  <span class="w__k">Match the pairs</span>
  <p class="w__q">Tap one on the left, then its partner on the right.</p>
  <div class="w-match__grid">
    <div class="w-match__col">
      <button data-pair="a"><code>int</code></button>
      <button data-pair="b"><code>str</code></button>
    </div>
    <div class="w-match__col">
      <button data-pair="b">Text</button>
      <button data-pair="a">Whole numbers</button>
    </div>
  </div>
  <p class="w__why">Shown once every pair is matched.</p>
</div>
```

Each `data-pair` value must appear **exactly twice — once in each column**. Shuffle the
right-hand column so the answers aren't in order. Wrong pairs flash red and reset.

### Spot the mistake

```html
<div class="w w-spot">
  <span class="w__k">Spot the mistake</span>
  <p class="w__q">One piece of this line stops it running. Tap it.</p>
  <div class="w-spot__line">
    <button data-bad>Print</button><button>(</button><button>"Hi"</button><button>)</button>
  </div>
  <p class="w__why">Capital P. Python has no function called <code>Print</code>.</p>
</div>
```

Put `data-bad` on **exactly one** button. Wrong taps flash red and let them try again.

### Timeline

```html
<div class="w-time">
  <div class="w-time__i"><b>1991</b><span>Python is released.</span></div>
  <div class="w-time__i"><b>2008</b><span>Python 3 arrives.</span></div>
</div>
```

---

## Diagrams

Diagrams are inline SVG — no image files to upload, nothing to break, and they stay sharp
on any screen. Copy an existing one from `content.js` and change the labels; that is far
faster than drawing a new one.

The classes you have available inside `<svg class="fig">`:

| Class | Gives you |
|---|---|
| `box` | A white box with a dark outline |
| `box--dark` | A filled navy box (a terminal or a black box) |
| `on-dark` | Text that sits on top of a `box--dark` |
| `mono` | Monospace text, for code and filenames |
| `lbl` | Small uppercase caption text |
| `arrow` | An orange connector line |
| `accent` | Orange fill — used for arrowheads and highlighted output |
| `good` | A thin teal outline, for brackets and underlines |

Always add `role="img"` and an `aria-label` describing the diagram in a sentence, so
screen readers and students on slow connections still get the point. Add
`<span class="figcap">…</span>` underneath for a caption.

Working coordinate space is `viewBox="0 0 700 H"` — pick whatever height you need; the
diagram scales to fit the page automatically.

---

## Adding a whole new unit

At the bottom of `content.js`, add a second object to the `COURSE` array:

```js
const COURSE = [
  { unit: "Unit 1", unitTitle: "Foundations of Python", topics: [ ... ] },
  { unit: "Unit 2", unitTitle: "Control Flow",          topics: [ ... ] }
];
```

Topics flow on in one continuous sequence, so the last topic of Unit 1 unlocks the first
of Unit 2.

---

## The unit test

Sits inside the unit object, after `topics`. It appears once every topic is complete.

```js
{
  unit: "Unit 2",
  unitTitle: "Control Flow",
  topics: [ ... ],

  test: {
    title: "Unit 2 Test",
    marksPerQuestion: 3,
    durationMinutes: 30,
    questions: [
      { q: "Which keyword starts a conditional block?",
        options: ["when", "if", "check", "case"], answer: 1 }
    ]
  },

  project: { ... }
}
```

Total marks are `questions.length × marksPerQuestion`, so 20 × 3 gives 60. The pass mark
is `testPassPercent` in `config.js` (60% by default). Test questions take no `why` field —
nothing is explained until the paper is submitted, and then the review screen shows the
correct option for every question.

Keep roughly a quarter of the questions from each topic so the paper covers the whole unit.

## The unit project

Opens once the test is passed. Submitting a link completes the unit and unlocks the next.

```js
project: {
  title: "Unit 2 Project — Number Analyser",
  summary: "One line shown under the heading and on the home screen.",
  brief: `
    <h4>What to build</h4>
    <p>…</p>
    <h4>What it must contain</h4>
    <ol><li>…</li></ol>
    <h4>How you are marked</h4>
    <ul><li>…</li></ul>
  `
}
```

`brief` takes the same HTML as a topic's notes, with the same four rules about backticks,
`${`, backslashes and raw `<`.

Nothing is auto-graded here — the site records the link and the timestamp in the
`Project_Submissions` tab, and you mark it yourself. Students may submit a **GitHub** or
**Google Drive** link only; edit `projectHosts` in `config.js` to change that.

Write the requirements as a numbered list of things you can tick off. "Use at least four
comments" can be checked in ten seconds; "write clean code" cannot.

---

## Before you commit

1. Open `index.html` locally.
2. Click **Switch student** to clear the old progress, then register again.
3. Walk your new topic exactly as a student would — read, answer every question, run
   every task, and confirm the next topic unlocks.
4. If the page comes up blank, you have a typo in `content.js`. Press **F12**, open the
   **Console** tab, and it will name the line.

A missing comma between topics is the single most common mistake.

---

## Writing tasks students can actually pass

- Say exactly what the output should be, character for character, in the `brief`.
  If a check demands `Hello, World!`, the brief must show `Hello, World!`.
- One idea per task. Three small tasks beat one big one.
- Prefer `stdoutEquals` for early topics and looser checks later, once students are
  writing code with more than one right answer.
- Write the solution yourself and run it on the page before you publish the task.
