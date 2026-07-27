/* ==========================================================================
   AbhyasLab — COURSE CONTENT
   Add topics here. Nothing else in the project needs to change.
   Read ADDING-CONTENT.md for the full recipe.
   ========================================================================== */

const COURSE = [
{
  unit: "Unit 1",
  unitTitle: "Foundations of Python",
  topics: [

  /* ====================== TOPIC 1 ====================== */
  {
    id: "u1t1",
    title: "Installing Python & IDLE",
    summary: "Get Python onto a machine, meet IDLE, and understand what PATH is actually doing.",
    notebookLM: "",           // paste a NotebookLM share link here later
    notes: `
      <h4>What you are installing</h4>
      <p>Python is two things at once: a <em>language</em> you write, and an <em>interpreter</em>
      — a program named <code>python</code> that reads your file line by line and does what it says.
      Installing Python means putting that interpreter on the computer.</p>

      <h4>The download</h4>
      <p>Everything official lives at <code>python.org/downloads</code>. Take the latest stable
      release for your operating system. On Windows the installer is a <code>.exe</code>; on macOS
      a <code>.pkg</code>; most Linux systems already ship with Python 3.</p>

      <div class="callout">
        <strong>The one checkbox that matters.</strong> On the first screen of the Windows installer,
        tick <em>"Add python.exe to PATH"</em> before clicking Install. Miss it and your terminal will
        answer <code>'python' is not recognized</code> every single time.
      </div>

      <h4>What PATH means</h4>
      <p>PATH is a list of folders your operating system searches when you type a command.
      Type <code>python</code> and the system walks that list looking for a matching program.
      If Python's folder was never added to the list, the system finds nothing — the interpreter is
      installed perfectly well, the shell just doesn't know where to look.</p>

      <h4>Checking it worked</h4>
      <pre><code>C:\\Users\\You&gt; python --version
Python 3.12.4</code></pre>
      <p>A version number back means you're done. On some systems the command is <code>python3</code>.</p>

      <h4>Meet IDLE</h4>
      <p>IDLE — <strong>I</strong>ntegrated <strong>D</strong>evelopment and <strong>L</strong>earning
      <strong>E</strong>nvironment — ships free with Python. It gives you two windows:</p>
      <table>
        <tr><th>Window</th><th>What it's for</th></tr>
        <tr><td>Shell</td><td>Type one line, press Enter, see the answer immediately. Good for trying things out.</td></tr>
        <tr><td>Editor</td><td><em>File → New File.</em> Write a whole program, save it, press F5 to run it.</td></tr>
      </table>
      <p>Python source files are saved with the <code>.py</code> extension. That extension is how
      the interpreter, your editor, and your teacher all recognise the file as Python.</p>

      <div class="callout">
        <strong>Nothing to install for this site.</strong> AbhyasLab runs Python inside your browser,
        so you can finish every task here on a phone. Install Python on your own machine anyway —
        you'll need it for lab exams and for anything larger than a practice snippet.
      </div>
    `,
    mcqs: [
      { q: "What does IDLE stand for?",
        options: ["Integrated Development and Learning Environment",
                  "Interactive Data Logic Engine",
                  "Internal Debugging and Linking Editor",
                  "Integrated Design Language Editor"],
        answer: 0,
        why: "IDLE is Python's bundled Integrated Development and Learning Environment — it arrives with the interpreter, no separate download." },

      { q: "Which extension is used for Python source files?",
        options: [".pt", ".py", ".pyt", ".pn"],
        answer: 1,
        why: "Python files end in .py. Compiled bytecode files you may spot later end in .pyc — you never write those by hand." },

      { q: "You installed Python but the terminal says 'python is not recognized'. Most likely cause?",
        options: ["Python failed to install",
                  "The .py file is corrupted",
                  "Python's folder was not added to the PATH variable",
                  "IDLE must be opened before using the terminal"],
        answer: 2,
        why: "The interpreter is there — the shell just can't find it, because its folder isn't in the PATH list the system searches. Re-run the installer and tick 'Add python.exe to PATH'." },

      { q: "Which IDLE window would you use to write and save a full program?",
        options: ["The Shell window", "The Editor window (File → New File)", "The PATH window", "The Terminal window"],
        answer: 1,
        why: "The Shell runs one line at a time. For a program you keep and re-run, open the Editor with File → New File, save as .py, then press F5." }
    ],
    tasks: [
      { id: "u1t1a", kind: "confirm",
        title: "Confirm your setup",
        brief: "Do this on your own laptop or the lab machine, then tick the box.",
        label: "I opened a terminal, ran <code>python --version</code>, and got a version number back — and I can open IDLE's Shell window." }
    ]
  },

  /* ====================== TOPIC 2 ====================== */
  {
    id: "u1t2",
    title: "Your first Hello, World!",
    summary: "print(), quotes, and the reason Python cares so much about capital letters.",
    notebookLM: "",
    notes: `
      <h4>One line, one program</h4>
      <pre><code>print("Hello, World!")</code></pre>
      <p>That is a complete Python program. No headers, no <code>main</code> function, no semicolon.
      Run it and the interpreter prints the text and stops.</p>

      <h4>Reading the line</h4>
      <ul>
        <li><code>print</code> — a built-in function that writes to the screen.</li>
        <li><code>( )</code> — the call. Whatever goes inside the brackets gets handed to the function.</li>
        <li><code>"Hello, World!"</code> — a <strong>string literal</strong>: text wrapped in quotes.</li>
      </ul>

      <h4>Quotes: single or double, pick one and close it</h4>
      <p>Python treats <code>'Hello'</code> and <code>"Hello"</code> as identical. Having both is useful
      when the text itself contains a quote:</p>
      <pre><code>print("It's raining")     # apostrophe inside double quotes
print('She said "hi"')    # double quotes inside single quotes</code></pre>
      <p>Three quotes let a single string run across several lines:</p>
      <pre><code>print("""Line one
Line two""")</code></pre>

      <div class="callout">
        <strong>Case sensitivity.</strong> <code>print</code> works. <code>Print</code> and
        <code>PRINT</code> do not. Python looks up the exact name you typed, finds nothing called
        <code>Print</code>, and raises <code>NameError: name 'Print' is not defined</code>.
      </div>

      <h4>Reading an error instead of fearing it</h4>
      <pre><code>&gt;&gt;&gt; Print("Hello")
Traceback (most recent call last):
  File "&lt;stdin&gt;", line 1, in &lt;module&gt;
NameError: name 'Print' is not defined</code></pre>
      <p>Read errors bottom-up. The last line names the problem and the thing that caused it.
      Here: a name Python has never heard of. Two common ones at this stage:</p>
      <table>
        <tr><th>Error</th><th>Usually means</th></tr>
        <tr><td><code>NameError</code></td><td>A misspelled or miscapitalised name — <code>Print</code>, <code>pirnt</code>.</td></tr>
        <tr><td><code>SyntaxError</code></td><td>A missing bracket or an unclosed quote — <code>print("Hello)</code>.</td></tr>
      </table>

      <h4>Printing more than one thing</h4>
      <pre><code>print("Roll", 42)          # Roll 42  — a space is added between items
print("A", "B", sep="-")   # A-B      — choose your own separator</code></pre>
    `,
    mcqs: [
      { q: "Which line prints Hello, World! correctly?",
        options: ['Print("Hello, World!")', 'print(Hello, World!)', 'print("Hello, World!")', 'PRINT("Hello, World!")'],
        answer: 2,
        why: "Lowercase print, brackets, and the text inside quotes. Without quotes Python reads Hello as a variable name it has never seen." },

      { q: "What does Python raise for  Print(\"Hi\")  ?",
        options: ["SyntaxError", "NameError", "TypeError", "Nothing — it prints Hi"],
        answer: 1,
        why: "The syntax is perfectly formed, so it isn't a SyntaxError. Python looks for a function literally named Print, doesn't find one, and raises NameError." },

      { q: "Which statement about quotes is true?",
        options: ["Only double quotes are allowed for strings",
                  "Single and double quotes both work, but a string must end with the same one it started with",
                  "Single quotes are only for single characters",
                  "Quotes are optional if the text has no spaces"],
        answer: 1,
        why: "Python treats ' and \" the same. The rule is only that the closing quote must match the opening quote." },

      { q: "What does  print(\"A\", \"B\")  display?",
        options: ["AB", "A B", "A,B", "A\\nB"],
        answer: 1,
        why: "print separates multiple items with a single space by default. Pass sep=\"\" to remove it, or sep=\"-\" to change it." }
    ],
    tasks: [
      { id: "u1t2a", kind: "code",
        title: "Task 2.1 — Print the exact line",
        brief: "Output exactly: Hello, World!  — the comma and the exclamation mark count.",
        starter: '# Write one print statement below\n',
        checks: [
          { type: "stdoutEquals", value: "Hello, World!" },
          { type: "sourceIncludes", value: "print", message: "Use the print() function" }
        ] },

      { id: "u1t2b", kind: "code",
        title: "Task 2.2 — Fix the capital letters",
        brief: "This code is broken by case sensitivity. Repair it so it prints Python is case sensitive.",
        starter: 'Print("Python is case sensitive")\n',
        checks: [
          { type: "stdoutEquals", value: "Python is case sensitive" }
        ] },

      { id: "u1t2c", kind: "code",
        title: "Task 2.3 — Three lines, three quote styles",
        brief: "Print these three lines. Use double quotes for the first, single quotes for the second, and a triple-quoted string for the third.",
        starter: '# Line 1: My name is Sam\n# Line 2: It\'s my first program\n# Line 3: Concept To Code\n',
        checks: [
          { type: "stdoutEquals", value: "My name is Sam\nIt's my first program\nConcept To Code" },
          { type: "sourceRegex", pattern: "'''|\"\"\"", message: "Use a triple-quoted string somewhere" }
        ] }
    ]
  },

  /* ====================== TOPIC 3 ====================== */
  {
    id: "u1t3",
    title: "Commands & execution modes",
    summary: "Shell mode versus script mode, and how to leave notes for the next human.",
    notebookLM: "",
    notes: `
      <h4>Two ways to run Python</h4>
      <table>
        <tr><th></th><th>Interactive (Shell) mode</th><th>Script mode</th></tr>
        <tr><td>How you start it</td><td>Type <code>python</code> in a terminal, or open IDLE's Shell</td><td>Save a <code>.py</code> file and run <code>python file.py</code></td></tr>
        <tr><td>The prompt</td><td><code>&gt;&gt;&gt;</code></td><td>No prompt — the file just runs</td></tr>
        <tr><td>Runs</td><td>One statement at a time, immediately</td><td>The whole file, top to bottom</td></tr>
        <tr><td>Kept after closing</td><td>No</td><td>Yes — it's a file</td></tr>
        <tr><td>Good for</td><td>Testing an idea, checking what a function does</td><td>Assignments, anything you'll run twice</td></tr>
      </table>

      <div class="callout">
        <strong>The shell echoes, a script does not.</strong> Type <code>5 + 3</code> at the
        <code>&gt;&gt;&gt;</code> prompt and you see <code>8</code> straight away. Put the same
        <code>5 + 3</code> in a file and you see nothing — the value is calculated and thrown away.
        A script only shows what you explicitly <code>print()</code>.
      </div>

      <h4>Comments</h4>
      <p>A comment is a note for people. Python skips it entirely.</p>
      <pre><code># This whole line is ignored
print("Total")        # so is everything after the hash</code></pre>
      <p>Python has no true multi-line comment. What everyone uses instead is a triple-quoted
      string sitting on its own — Python builds the string, nobody uses it, and it is discarded:</p>
      <pre><code>'''
Author : Ananya
Purpose: prints student details
'''</code></pre>
      <p>Placed as the very first thing inside a file, function, or class, that same triple-quoted
      string becomes a <strong>docstring</strong> — real documentation the language keeps hold of.</p>

      <h4>Write comments worth reading</h4>
      <p>A comment that repeats the code earns nothing:</p>
      <pre><code>x = x + 1    # add 1 to x        &lt;- useless
x = x + 1    # count this attempt  &lt;- says why</code></pre>

      <h4>Leaving the shell</h4>
      <p><code>exit()</code> or <code>quit()</code>, or Ctrl+Z then Enter on Windows / Ctrl+D on Linux and macOS.</p>
    `,
    mcqs: [
      { q: "You type  7 * 6  and press Enter at the >>> prompt. What happens?",
        options: ["Nothing is displayed", "42 is displayed immediately", "SyntaxError", "It waits for a print statement"],
        answer: 1,
        why: "Interactive mode evaluates each line and echoes the result. The same line inside a .py file would compute 42 and display nothing." },

      { q: "Which symbol begins a single-line comment?",
        options: ["//", "#", "--", "/*"],
        answer: 1,
        why: "Python uses #. The // and /* forms belong to C, Java and JavaScript." },

      { q: "How do programmers usually write a multi-line comment in Python?",
        options: ["/* ... */",
                  "A triple-quoted string that isn't assigned to anything",
                  "A # on every line is the only possible way",
                  "&lt;!-- ... --&gt;"],
        answer: 1,
        why: "Python has no dedicated multi-line comment. A free-standing ''' ... ''' string is created and discarded, which achieves the same thing — and becomes a docstring when placed at the top of a file or function." },

      { q: "Which is the strongest reason to use script mode for an assignment?",
        options: ["Script mode runs faster",
                  "The code is saved in a file, so it can be re-run and submitted",
                  "Comments only work in script mode",
                  "print() only works in script mode"],
        answer: 1,
        why: "Both modes run the same interpreter at the same speed. The real difference is that a script survives — you can re-run it, fix it, and hand it in." }
    ],
    tasks: [
      { id: "u1t3a", kind: "code",
        title: "Task 3.1 — Student details, properly commented",
        brief: "Print your name, roll number and branch on three separate lines. Include at least two comments explaining what the code does.",
        starter: '# Purpose: \n\n',
        checks: [
          { type: "stdoutMinLines", value: 3, message: "Print at least three lines" },
          { type: "sourceMinMatches", pattern: "(^|\\n)\\s*#", count: 2, message: "Include at least two comment lines starting with #" }
        ] },

      { id: "u1t3b", kind: "code",
        title: "Task 3.2 — Prove that a script stays silent",
        brief: "Write a program that calculates 15 + 27 on its own line without printing it, then prints exactly: The script printed only this line",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "The script printed only this line" },
          { type: "sourceRegex", pattern: "15\\s*\\+\\s*27", message: "Include the calculation 15 + 27 in your code" }
        ] }
    ]
  }

  ]
}
];
