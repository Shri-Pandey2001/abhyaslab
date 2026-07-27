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
