/* ==========================================================================
   AbhyasLab — COURSE CONTENT
   Add topics here. Nothing else in the project needs to change.
   ADDING-CONTENT.md documents every tag and widget used below:
   reveal cards, guess-the-output, match-the-pairs, spot-the-mistake.
   ========================================================================== */

const COURSE = [
{
  unit: "Unit 1",
  unitTitle: "Foundations of Python",
  topics: [

  /* ============ TOPIC 1 — orientation, questions only, no code ============ */
  {
    id: "u1t0",
    title: "What is Python?",
    summary: "Where it came from, who made it, why the name is a joke, and why half the world writes it.",
    notebookLM: "",
    notes: `
      <h4>A language, and the program that reads it</h4>
      <p>Python is two things sharing one name. It is a <strong>language</strong> — a set of rules
      for writing instructions a human can read. It is also an <strong>interpreter</strong> — a
      program that opens your file, reads one line, does what it says, then reads the next.</p>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="Your Python file is read by the interpreter, which produces output on screen.">
        <text x="98" y="26" text-anchor="middle" class="lbl">You write</text>
        <rect class="box" x="8" y="42" width="180" height="100" rx="8"/>
        <path class="good" d="M36 70 h64 M36 88 h100 M36 106 h78 M36 124 h52"/>
        <text x="98" y="168" text-anchor="middle" class="mono">hello.py</text>

        <path class="arrow" d="M198 92 h46"/>
        <path class="accent" d="M256 92 l-13 -7 v14 z"/>

        <text x="350" y="26" text-anchor="middle" class="lbl">It reads and runs</text>
        <rect class="box box--dark" x="262" y="42" width="176" height="100" rx="8"/>
        <text x="350" y="88" text-anchor="middle" class="on-dark">Python</text>
        <text x="350" y="110" text-anchor="middle" class="on-dark">interpreter</text>
        <text x="350" y="168" text-anchor="middle" class="mono">python.exe</text>

        <path class="arrow" d="M448 92 h46"/>
        <path class="accent" d="M506 92 l-13 -7 v14 z"/>

        <text x="602" y="26" text-anchor="middle" class="lbl">You see</text>
        <rect class="box box--dark" x="512" y="42" width="180" height="100" rx="8"/>
        <text x="538" y="88" class="mono on-dark">&gt; python hello.py</text>
        <text x="538" y="114" class="mono accent">Hello!</text>
        <text x="602" y="168" text-anchor="middle" class="mono">your screen</text>
      </svg>
      <span class="figcap">Nothing magic happens. A program reads your file and does what it says.</span>

      <h4>Where it came from</h4>
      <p>In December 1989, a Dutch programmer named <strong>Guido van Rossum</strong> was stuck at
      home over the Christmas holidays with his office closed. Looking for, in his words, "a hobby
      programming project that would keep me occupied," he started building a language. He released
      it publicly in <strong>February 1991</strong>.</p>

      <div class="w-time">
        <div class="w-time__i"><b>December 1989</b><span>Guido van Rossum starts Python as a holiday project at CWI in Amsterdam.</span></div>
        <div class="w-time__i"><b>February 1991</b><span>Version 0.9.0 is released to the public.</span></div>
        <div class="w-time__i"><b>January 1994</b><span>Python 1.0.</span></div>
        <div class="w-time__i"><b>October 2000</b><span>Python 2.0.</span></div>
        <div class="w-time__i"><b>December 2008</b><span>Python 3.0 — deliberately not backward compatible, so old design mistakes could finally be fixed.</span></div>
        <div class="w-time__i"><b>1 January 2020</b><span>Python 2 reaches end of life. Everything written today is Python 3.</span></div>
      </div>

      <h4>Why "Python"?</h4>
      <p>Not the snake. Guido was reading scripts from <em>Monty Python's Flying Circus</em>, a
      British comedy show from the 1970s, and wanted a name that was "short, unique, and slightly
      mysterious." The snake logo came years later — the joke came first.</p>

      <p>The humour is still buried in the language. Type <code>import this</code> into Python and
      it prints a poem about how code ought to be written. Type <code>import antigravity</code> and
      it opens a webcomic in your browser.</p>

      <div class="w">
        <span class="w__k">Tap to reveal</span>
        <div class="w-flip">
          <button class="w-flip__card">
            <span class="w-flip__front">Who created Python, and where?</span>
            <span class="w-flip__back">Guido van Rossum, at CWI in Amsterdam, the Netherlands.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">What was he called for nearly 30 years?</span>
            <span class="w-flip__back"><strong>BDFL</strong> — Benevolent Dictator For Life. He stepped down in July 2018.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">What does <code>import this</code> do?</span>
            <span class="w-flip__back">Prints <em>The Zen of Python</em> — 19 lines of style advice. "Simple is better than complex."</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">Which came first: the name or the snake?</span>
            <span class="w-flip__back">The name. It is from Monty Python. The snake logo was adopted much later.</span>
          </button>
        </div>
      </div>

      <h4>Why so many people choose it</h4>
      <p>Here is printing one line, in Java and in Python:</p>
      <pre><code>// Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}</code></pre>
      <pre><code># Python
print("Hello")</code></pre>
      <p>Same result. One line instead of five, and no words you must memorise before you can
      understand any of them. That gap is the entire argument for teaching Python first.</p>
      <ul>
        <li><strong>Reads close to English.</strong> No semicolons, no curly braces, very little punctuation.</li>
        <li><strong>Free and open source.</strong> No licence to buy, ever, for anyone.</li>
        <li><strong>Runs everywhere.</strong> The same file works on Windows, Linux, macOS and Android.</li>
        <li><strong>An enormous library.</strong> Hundreds of thousands of ready-made packages for data, web, hardware and games.</li>
        <li><strong>It is where the work is.</strong> Data science, machine learning, automation, backend web, testing.</li>
      </ul>

      <div class="callout">
        <strong>The honest trade-off.</strong> Python is slower than C or Java at heavy number
        crunching, because it interprets your code line by line instead of translating the whole
        program into machine code first. For everything you write this year you will never notice.
        Where it does matter, the demanding parts are written in C and called from Python — which is
        exactly how the big data and machine-learning libraries work.
      </div>

      <h4>Interpreted, not compiled</h4>
      <table>
        <tr><th></th><th>Compiled (C, C++, Java)</th><th>Interpreted (Python)</th></tr>
        <tr><td>Before running</td><td>The whole program is translated first</td><td>Nothing — it just starts</td></tr>
        <tr><td>Errors appear</td><td>At compile time, before anything runs</td><td>When that line is reached</td></tr>
        <tr><td>Speed</td><td>Faster</td><td>Slower, but fast enough</td></tr>
        <tr><td>Fixing a typo</td><td>Rebuild the whole thing</td><td>Save and run again</td></tr>
      </table>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Tap one on the left, then its partner on the right.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Guido van Rossum</button>
            <button data-pair="b">1991</button>
            <button data-pair="c">Monty Python</button>
            <button data-pair="d">2020</button>
            <button data-pair="e"><code>import this</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">The year Python 2 was retired</button>
            <button data-pair="a">The person who created Python</button>
            <button data-pair="e">Prints the Zen of Python</button>
            <button data-pair="b">The year Python was first released</button>
            <button data-pair="c">The comedy show behind the name</button>
          </div>
        </div>
        <p class="w-match__hint">Five pairs. A wrong pair flashes red and resets.</p>
        <p class="w__why"><strong>All five.</strong> That is the history of Python on one screen — and
        every one of those facts turns up in viva questions.</p>
      </div>

      <h4>What people actually build with it</h4>
      <ul>
        <li><strong>Instagram</strong> runs one of the largest Python codebases in the world.</li>
        <li><strong>Spotify</strong> uses it for data analysis and recommendations.</li>
        <li><strong>Dropbox</strong> was built on Python — Guido himself worked there for six years.</li>
        <li><strong>NASA</strong> uses it throughout its scientific pipelines.</li>
        <li>Nearly every machine-learning tool you have heard of — TensorFlow, PyTorch, scikit-learn — is driven from Python.</li>
      </ul>

      <div class="callout">
        <strong>No code in this topic.</strong> Clear the questions below and Topic 2 opens, where you
        get Python onto a machine. From Topic 3 onward you write and run real code on this page.
      </div>
    `,
    mcqs: [
      { q: "Who created Python?",
        options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"],
        answer: 2,
        why: "Guido van Rossum, in the Netherlands. The other three created C, Java and C++ — worth learning as a set, because this exact question appears in almost every paper." },

      { q: "Python is named after…",
        options: ["The python snake", "Monty Python's Flying Circus, a comedy show",
                  "An acronym for Programming Your Own Notation", "A river in the Netherlands"],
        answer: 1,
        why: "Guido was reading Monty Python scripts and wanted a short, slightly mysterious name. The snake logo was adopted long afterwards." },

      { q: "In which year was Python first released to the public?",
        options: ["1989", "1991", "1994", "2000"],
        answer: 1,
        why: "He began building it in December 1989, but version 0.9.0 reached the public in February 1991. The question almost always asks for the release year: 1991." },

      { q: "Python is best described as which kind of language?",
        options: ["A low-level, compiled language",
                  "A high-level, interpreted language",
                  "A markup language",
                  "An assembly language"],
        answer: 1,
        why: "High-level because it hides memory and hardware details from you, and interpreted because it runs your file line by line instead of translating it all in advance." },

      { q: "What happened on 1 January 2020?",
        options: ["Python 3 was released", "Python became open source",
                  "Official support for Python 2 ended", "Guido van Rossum created Python"],
        answer: 2,
        why: "Python 2 reached end of life — no more fixes, not even security ones. Everything is Python 3 now, which is why any Python 2 tutorial you stumble across online should be closed." },

      { q: "Which of these is NOT a reason Python is usually preferred for beginners?",
        options: ["Its syntax reads close to plain English",
                  "It is free and runs on every major operating system",
                  "It runs faster than C for heavy calculations",
                  "It has a very large collection of ready-made libraries"],
        answer: 2,
        why: "Speed is Python's weak point, not its strength. Being interpreted makes it slower than C — that is the trade you accept in return for how quickly you can write and read it." }
    ],
    tasks: []
  },

  /* ====================== TOPIC 2 ====================== */
  {
    id: "u1t1",
    title: "Installing Python & IDLE",
    summary: "Get Python onto a machine, meet IDLE, and understand what PATH is actually doing.",
    notebookLM: "",
    notes: `
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
      Type <code>python</code> and the system walks that list, folder by folder, looking for a
      matching program. If Python's folder was never added to the list, the system finds nothing —
      the interpreter is installed perfectly well, the shell just does not know where to look.</p>

      <svg class="fig" viewBox="0 0 700 200" role="img" aria-label="Typing python makes the system search each folder in the PATH list until it finds python dot exe.">
        <rect class="box box--dark" x="8" y="66" width="168" height="70" rx="8"/>
        <text x="30" y="98" class="mono on-dark">&gt; python</text>
        <text x="30" y="122" class="mono accent">_</text>
        <text x="92" y="158" text-anchor="middle" class="lbl">You type this</text>

        <path class="arrow" d="M186 100 h42"/>
        <path class="accent" d="M240 100 l-13 -7 v14 z"/>

        <text x="470" y="28" text-anchor="middle" class="lbl">The system searches PATH, top to bottom</text>
        <rect class="box" x="256" y="40" width="428" height="34" rx="6"/>
        <text x="274" y="62" class="mono">C:\\Windows\\system32</text>
        <text x="666" y="62" text-anchor="end" class="mono">nope</text>

        <rect class="box" x="256" y="82" width="428" height="34" rx="6"/>
        <text x="274" y="104" class="mono">C:\\Windows</text>
        <text x="666" y="104" text-anchor="end" class="mono">nope</text>

        <rect x="256" y="124" width="428" height="34" rx="6" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.4"/>
        <text x="274" y="146" class="mono">C:\\Python312\\python.exe</text>
        <text x="666" y="146" text-anchor="end" class="mono accent">found</text>
        <text x="470" y="186" text-anchor="middle" class="lbl">Leave that last line out and Python "disappears"</text>
      </svg>

      <h4>Checking it worked</h4>
      <pre><code>C:\\Users\\You&gt; python --version
Python 3.12.4</code></pre>
      <p>A version number back means you are done. On some systems the command is <code>python3</code>.</p>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Every one of these lands on somebody's screen in the first week. Match the message to what it means.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>'python' is not recognized</code></button>
            <button data-pair="b"><code>Python 3.12.4</code></button>
            <button data-pair="c"><code>SyntaxError: invalid syntax</code></button>
            <button data-pair="d"><code>No such file or directory</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Python ran, but your line breaks its rules</button>
            <button data-pair="a">Python is installed, but not on PATH</button>
            <button data-pair="d">Wrong folder, or the filename is misspelt</button>
            <button data-pair="b">Everything is working</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Reading the message instead of panicking is most
        of what debugging actually is.</p>
      </div>

      <h4>Meet IDLE</h4>
      <p>IDLE — <strong>I</strong>ntegrated <strong>D</strong>evelopment and <strong>L</strong>earning
      <strong>E</strong>nvironment — ships free with Python. It gives you two windows:</p>
      <table>
        <tr><th>Window</th><th>What it is for</th></tr>
        <tr><td>Shell</td><td>Type one line, press Enter, see the answer immediately. Good for trying things out.</td></tr>
        <tr><td>Editor</td><td><em>File → New File.</em> Write a whole program, save it, press F5 to run it.</td></tr>
      </table>
      <p>Python source files are saved with the <code>.py</code> extension. That extension is how
      the interpreter, your editor and your teacher all recognise the file as Python.</p>

      <div class="w">
        <span class="w__k">Tap to reveal</span>
        <div class="w-flip">
          <button class="w-flip__card">
            <span class="w-flip__front">Which key runs your file in IDLE?</span>
            <span class="w-flip__back"><strong>F5</strong>. IDLE saves the file first, then runs it.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">What does IDLE stand for?</span>
            <span class="w-flip__back">Integrated Development and Learning Environment.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">How do you leave the Python shell?</span>
            <span class="w-flip__back"><code>exit()</code> or <code>quit()</code>. Or Ctrl+Z then Enter on Windows, Ctrl+D on Linux and macOS.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">Do you need to install anything for AbhyasLab?</span>
            <span class="w-flip__back">No. Python runs inside this browser tab. Install it on your own machine anyway — you will need it for lab exams.</span>
          </button>
        </div>
      </div>

      <div class="callout">
        <strong>Nothing to install for this site.</strong> AbhyasLab runs Python inside your browser,
        so you can finish every task here on a phone. Install Python on your own machine anyway —
        you will need it for lab exams and for anything larger than a practice snippet.
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
        why: "The interpreter is there — the shell just cannot find it, because its folder is not in the PATH list the system searches. Re-run the installer and tick 'Add python.exe to PATH'." },

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

  /* ====================== TOPIC 3 ====================== */
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

      <h4>Reading the line, piece by piece</h4>
      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="print is the function, the brackets are the call, and the quoted text is a string literal.">
        <text class="mono" x="30" y="46" style="font-size:24px">print("Hello, World!")</text>

        <path class="good" d="M30 60 v12 H102 v-12"/>
        <text x="66" y="92" text-anchor="middle" class="lbl">the function</text>
        <text x="66" y="110" text-anchor="middle" style="font-size:12px">writes to the screen</text>

        <path class="good" d="M118 60 v40 M334 60 v40 M118 100 H334"/>
        <text x="226" y="122" text-anchor="middle" class="lbl">the call brackets</text>
        <text x="226" y="140" text-anchor="middle" style="font-size:12px">whatever sits inside is handed to the function</text>

        <path class="good" stroke="#D67F19" d="M122 150 v12 H330 v-12"/>
        <text x="226" y="180" text-anchor="middle" class="lbl">a string literal</text>
        <text x="452" y="180" text-anchor="middle" style="font-size:12px">text in quotes — printed exactly as written</text>
      </svg>

      <h4>Quotes: single or double, pick one and close it</h4>
      <p>Python treats <code>'Hello'</code> and <code>"Hello"</code> as identical. Having both is useful
      when the text itself contains a quote:</p>
      <pre><code>print("It's raining")     # apostrophe inside double quotes
print('She said "hi"')    # double quotes inside single quotes</code></pre>
      <p>Three quotes let a single string run across several lines:</p>
      <pre><code>print("""Line one
Line two""")</code></pre>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What appears on screen?</p>
        <pre><code>print('She said "hi"')</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">She said hi</button>
          <button data-o="1">She said "hi"</button>
          <button data-o="2">SyntaxError</button>
        </div>
        <p class="w__why">The string opened with a single quote, so Python only stops at the next
        single quote. The double quotes in the middle are ordinary characters, and get printed.</p>
      </div>

      <div class="callout">
        <strong>Case sensitivity.</strong> <code>print</code> works. <code>Print</code> and
        <code>PRINT</code> do not. Python looks up the exact name you typed, finds nothing called
        <code>Print</code>, and raises <code>NameError: name 'Print' is not defined</code>.
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">One piece of this line stops it running. Tap it.</p>
        <div class="w-spot__line">
          <button data-bad>Print</button><button>(</button><button>"Hello"</button><button>)</button>
        </div>
        <p class="w__why">Capital <strong>P</strong>. Python has a function called <code>print</code>
        and nothing called <code>Print</code>, so it raises <code>NameError</code>. The brackets and
        the quoted text were all perfectly fine.</p>
      </div>

      <h4>Reading an error instead of fearing it</h4>
      <pre><code>&gt;&gt;&gt; Print("Hello")
Traceback (most recent call last):
  File "&lt;stdin&gt;", line 1, in &lt;module&gt;
NameError: name 'Print' is not defined</code></pre>
      <p>Read errors from the bottom up. The last line names the problem and the thing that caused
      it. Here: a name Python has never heard of. Two you will meet constantly at this stage:</p>
      <table>
        <tr><th>Error</th><th>Usually means</th></tr>
        <tr><td><code>NameError</code></td><td>A misspelled or miscapitalised name — <code>Print</code>, <code>pirnt</code>.</td></tr>
        <tr><td><code>SyntaxError</code></td><td>A missing bracket or an unclosed quote — <code>print("Hello)</code>.</td></tr>
      </table>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">This one is a SyntaxError. Which piece is wrong?</p>
        <div class="w-spot__line">
          <button>print</button><button>(</button><button data-bad>"Hello</button><button>)</button>
        </div>
        <p class="w__why">The string opens with a quote and never closes. Python reads to the end of
        the line still waiting for the matching <code>"</code> and gives up with
        <code>SyntaxError: unterminated string literal</code>.</p>
      </div>

      <h4>Printing more than one thing</h4>
      <pre><code>print("Roll", 42)          # Roll 42  — a space is added between items
print("A", "B", sep="-")   # A-B      — choose your own separator</code></pre>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">Careful with this one.</p>
        <pre><code>print("Total", "=", 100)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">Total=100</button>
          <button data-o="1">Total,=,100</button>
          <button data-o="2">Total = 100</button>
        </div>
        <p class="w__why">Commas separate the items you hand to <code>print</code>. It joins them with
        a single space each, giving <code>Total = 100</code> — the commas themselves are never
        printed.</p>
      </div>
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
        title: "Task 3.1 — Print the exact line",
        brief: "Output exactly: Hello, World!  — the comma and the exclamation mark count.",
        starter: '# Write one print statement below\n',
        checks: [
          { type: "stdoutEquals", value: "Hello, World!" },
          { type: "sourceIncludes", value: "print", message: "Use the print() function" }
        ] },

      { id: "u1t2b", kind: "code",
        title: "Task 3.2 — Fix the capital letters",
        brief: "This code is broken by case sensitivity. Repair it so it prints Python is case sensitive.",
        starter: 'Print("Python is case sensitive")\n',
        checks: [
          { type: "stdoutEquals", value: "Python is case sensitive" }
        ] },

      { id: "u1t2c", kind: "code",
        title: "Task 3.3 — Three lines, three quote styles",
        brief: "Print these three lines. Use double quotes for the first, single quotes for the second, and a triple-quoted string for the third.",
        starter: '# Line 1: My name is Sam\n# Line 2: It\'s my first program\n# Line 3: Concept To Code\n',
        checks: [
          { type: "stdoutEquals", value: "My name is Sam\nIt's my first program\nConcept To Code" },
          { type: "sourceRegex", pattern: "'''|\"\"\"", message: "Use a triple-quoted string somewhere" }
        ] }
    ]
  },

  /* ====================== TOPIC 4 ====================== */
  {
    id: "u1t3",
    title: "Commands & execution modes",
    summary: "Shell mode versus script mode, and how to leave notes for the next human.",
    notebookLM: "",
    notes: `
      <h4>Two ways to run Python</h4>
      <svg class="fig" viewBox="0 0 700 235" role="img" aria-label="The shell echoes every result; a script stays silent unless you print.">
        <text x="168" y="26" text-anchor="middle" class="lbl">Interactive shell</text>
        <rect class="box box--dark" x="8" y="38" width="320" height="150" rx="8"/>
        <text x="32" y="74" class="mono on-dark">&gt;&gt;&gt; 5 + 3</text>
        <text x="32" y="100" class="mono accent">8</text>
        <text x="32" y="132" class="mono on-dark">&gt;&gt;&gt; "hi".upper()</text>
        <text x="32" y="158" class="mono accent">'HI'</text>
        <text x="168" y="214" text-anchor="middle" style="font-size:12.5px">It answers back. Every time.</text>

        <text x="532" y="26" text-anchor="middle" class="lbl">Script mode</text>
        <rect class="box box--dark" x="372" y="38" width="320" height="150" rx="8"/>
        <text x="396" y="74" class="mono on-dark">5 + 3</text>
        <text x="396" y="100" class="mono on-dark">"hi".upper()</text>
        <text x="396" y="126" class="mono on-dark">print("done")</text>
        <text x="396" y="160" class="mono accent">done</text>
        <text x="532" y="214" text-anchor="middle" style="font-size:12.5px">Silent unless you print. Only one line appears.</text>
      </svg>

      <table>
        <tr><th></th><th>Interactive (Shell) mode</th><th>Script mode</th></tr>
        <tr><td>How you start it</td><td>Type <code>python</code> in a terminal, or open IDLE's Shell</td><td>Save a <code>.py</code> file and run <code>python file.py</code></td></tr>
        <tr><td>The prompt</td><td><code>&gt;&gt;&gt;</code></td><td>No prompt — the file just runs</td></tr>
        <tr><td>Runs</td><td>One statement at a time, immediately</td><td>The whole file, top to bottom</td></tr>
        <tr><td>Kept after closing</td><td>No</td><td>Yes — it is a file</td></tr>
        <tr><td>Good for</td><td>Testing an idea, checking what a function does</td><td>Assignments, anything you will run twice</td></tr>
      </table>

      <div class="callout">
        <strong>The shell echoes, a script does not.</strong> Type <code>5 + 3</code> at the
        <code>&gt;&gt;&gt;</code> prompt and you see <code>8</code> straight away. Put the same
        <code>5 + 3</code> in a file and you see nothing — the value is calculated and thrown away.
        A script shows only what you explicitly <code>print()</code>.
      </div>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the output</span>
        <p class="w__q">Saved as <code>test.py</code> and run with <code>python test.py</code>. What appears?</p>
        <pre><code>10 * 5
print("A")
20 + 1</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">Just A</button>
          <button data-o="1">50, then A, then 21</button>
          <button data-o="2">Nothing at all</button>
        </div>
        <p class="w__why">All three lines run. Python works out 50 and 21 perfectly well, then throws
        both away, because nothing asked for them. Only the <code>print</code> reaches the screen.
        Type the same three lines into the shell and you would see all three.</p>
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
      <p>Placed as the very first thing inside a file, function or class, that same triple-quoted
      string becomes a <strong>docstring</strong> — real documentation the language keeps hold of.</p>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which language does each comment style belong to?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code># note here</code></button>
            <button data-pair="b"><code>// note here</code></button>
            <button data-pair="c"><code>/* note here */</code></button>
            <button data-pair="d"><code>&lt;!-- note here --&gt;</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">C-style block comment</button>
            <button data-pair="a">Python single-line comment</button>
            <button data-pair="d">HTML comment</button>
            <button data-pair="b">Java / JavaScript single-line</button>
          </div>
        </div>
        <p class="w__why"><strong>Done.</strong> Only <code>#</code> works in Python. Every other style
        here is a <code>SyntaxError</code> if you type it into a <code>.py</code> file.</p>
      </div>

      <h4>Write comments worth reading</h4>
      <p>A comment that repeats the code earns nothing:</p>
      <pre><code>x = x + 1    # add 1 to x        &lt;- useless
x = x + 1    # count this attempt  &lt;- says why</code></pre>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">A student wrote this in a <code>.py</code> file and it would not run. Tap the problem.</p>
        <div class="w-spot__line">
          <button data-bad>//</button><button>print</button><button>(</button><button>"marks"</button><button>)</button>
        </div>
        <p class="w__why"><code>//</code> starts a comment in Java and C, but in Python it is the
        floor-division operator — and beginning a line with it is a <code>SyntaxError</code>. Python
        comments use <code>#</code>.</p>
      </div>

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
        title: "Task 4.1 — Student details, properly commented",
        brief: "Print your name, roll number and branch on three separate lines. Include at least two comments explaining what the code does.",
        starter: '# Purpose: \n\n',
        checks: [
          { type: "stdoutMinLines", value: 3, message: "Print at least three lines" },
          { type: "sourceMinMatches", pattern: "(^|\\n)\\s*#", count: 2, message: "Include at least two comment lines starting with #" }
        ] },

      { id: "u1t3b", kind: "code",
        title: "Task 4.2 — Prove that a script stays silent",
        brief: "Write a program that calculates 15 + 27 on its own line without printing it, then prints exactly: The script printed only this line",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "The script printed only this line" },
          { type: "sourceRegex", pattern: "15\\s*\\+\\s*27", message: "Include the calculation 15 + 27 in your code" }
        ] }
    ]
  }

  ],

  /* ============================ UNIT TEST ============================
     20 questions, 3 marks each, 60 marks total. Unlocks once every topic
     in this unit is complete. Feedback is held back until submission. */
  test: {
    title: "Unit 1 Test",
    marksPerQuestion: 3,
    durationMinutes: 30,
    questions: [
      { q: "Who created Python?",
        options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"], answer: 1 },

      { q: "In which year was Python first released to the public?",
        options: ["1989", "1991", "1994", "2000"], answer: 1 },

      { q: "The name 'Python' comes from:",
        options: ["The snake species", "Monty Python's Flying Circus",
                  "An acronym for Programmable Notation", "The creator's pet"], answer: 1 },

      { q: "Official support for Python 2 ended on:",
        options: ["1 January 2018", "1 January 2020", "31 December 2015", "1 January 2022"], answer: 1 },

      { q: "Python is best classified as:",
        options: ["A low-level compiled language", "A high-level interpreted language",
                  "A markup language", "An assembly language"], answer: 1 },

      { q: "Which of the following is NOT an advantage of Python?",
        options: ["Free and open source", "Runs on all major operating systems",
                  "Fastest execution speed of any language", "Very large standard library"], answer: 2 },

      { q: "Typing  import this  into Python displays:",
        options: ["The version number", "The Zen of Python",
                  "A list of installed modules", "The installation path"], answer: 1 },

      { q: "IDLE stands for:",
        options: ["Integrated Development and Learning Environment",
                  "Interactive Debugger for Learning Errors",
                  "Internal Development Language Editor",
                  "Integrated Data Logic Environment"], answer: 0 },

      { q: "The correct extension for a Python source file is:",
        options: [".pt", ".pyt", ".py", ".pyn"], answer: 2 },

      { q: "A terminal replies 'python is not recognized'. The most likely reason is:",
        options: ["Python was never installed", "Python's folder is missing from PATH",
                  "The .py file is corrupt", "IDLE is already running"], answer: 1 },

      { q: "Which key runs the current file in IDLE's editor?",
        options: ["F1", "F5", "F9", "Ctrl + R"], answer: 1 },

      { q: "Which line correctly prints Hello, World! ?",
        options: ['Print("Hello, World!")', 'print(Hello, World!)',
                  'print("Hello, World!")', 'PRINT("Hello, World!")'], answer: 2 },

      { q: "Running  Print(\"Hi\")  raises:",
        options: ["SyntaxError", "NameError", "TypeError", "ValueError"], answer: 1 },

      { q: "Running  print(\"Hello)  raises:",
        options: ["NameError", "SyntaxError", "IndexError", "Nothing — it prints Hello"], answer: 1 },

      { q: "What does  print(\"A\", \"B\")  display?",
        options: ["AB", "A B", "A,B", "A-B"], answer: 1 },

      { q: "What does  print(\"A\", \"B\", sep=\"-\")  display?",
        options: ["A B", "A-B", "AB-", "A - B"], answer: 1 },

      { q: "Which of these is a valid Python string?",
        options: ["Only 'text' with single quotes", "Only \"text\" with double quotes",
                  "Single, double and triple quotes are all valid",
                  "Strings do not need quotes if they have no spaces"], answer: 2 },

      { q: "You type  7 * 6  at the >>> prompt and press Enter. What happens?",
        options: ["Nothing is displayed", "42 is displayed immediately",
                  "SyntaxError", "It waits for a print statement"], answer: 1 },

      { q: "Which symbol starts a single-line comment in Python?",
        options: ["//", "#", "/*", "--"], answer: 1 },

      { q: "How is a multi-line comment normally written in Python?",
        options: ["/* ... */", "A triple-quoted string that is not assigned to anything",
                  "<!-- ... -->", "Python does not allow multi-line notes at all"], answer: 1 }
    ]
  },

  /* ========================== UNIT PROJECT ==========================
     Unlocks once the test is passed. Submitting the link completes the
     unit and opens the next one. */
  project: {
    title: "Unit 1 Project — Digital Student ID Card",
    summary: "One Python program that uses everything from Unit 1. Push it to GitHub or Drive and submit the link.",
    brief: `
      <h4>What to build</h4>
      <p>A single Python file, <code>student_id_card.py</code>, that prints a tidy student ID
      card to the screen. No input, no calculations — this unit is about writing clean,
      correct, well-commented output.</p>

      <h4>What it must contain</h4>
      <ol>
        <li>A <strong>triple-quoted block</strong> at the very top holding your name, roll number and the purpose of the file.</li>
        <li>At least <strong>four single-line comments</strong> starting with <code>#</code>, each explaining <em>why</em> a section exists — not repeating what it does.</li>
        <li>A printed card with a <strong>border</strong> made of repeated characters, and your name, roll number, branch, college and email inside it.</li>
        <li>At least one <code>print()</code> using <strong>double quotes</strong>, one using <strong>single quotes</strong>, and one using a <strong>triple-quoted string</strong>.</li>
        <li>At least one <code>print()</code> that passes <strong>several items separated by commas</strong>, and one that uses <code>sep=</code>.</li>
        <li>Twelve or more lines of output, and it must run without a single error on Python 3.</li>
      </ol>

      <h4>Roughly what it should look like</h4>
      <pre><code>==================================
        SHRI KHUSHAL DAS UNIVERSITY
==================================
 Name    : Ananya Verma
 Roll No : 2026_CS_02
 Branch  : Computer Science
==================================</code></pre>

      <h4>How you are marked</h4>
      <ul>
        <li>It runs with no errors — the first thing checked</li>
        <li>Every requirement above is present</li>
        <li>Comments explain reasons, not the obvious</li>
        <li>The output is neatly aligned and readable</li>
      </ul>

      <h4>How to submit</h4>
      <p>Push the file to a public GitHub repository, or upload it to Google Drive and set
      sharing to <em>Anyone with the link</em>. Paste that link below. Check it opens in a
      private window first — a link nobody else can open counts as not submitted.</p>
    `
  }
}
];
