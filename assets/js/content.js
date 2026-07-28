/* ==========================================================================
   AbhyasLab — COURSE CONTENT
   Unit 1: Introduction, Python Environment and Programming Basics
   Every "Part" from the syllabus is its own topic here.
   ADDING-CONTENT.md documents every tag and widget used below.
   ========================================================================== */

const COURSE = [
{
  unit: "Unit 1",
  unitTitle: "Python Basics",
  topics: [

  /* ============================== TOPIC 1 ============================== */
  {
    id: "u1t01",
    title: "What is Python?",
    summary: "A friendly translator between you and the computer — plus where it came from.",
    notebookLM: "",
    notes: `
      <h4>The robot who speaks alien</h4>
      <p>Imagine you own a robot. The robot only understands one language: 1s and 0s.</p>
      <p>You want a cup of tea. To ask for it, you would have to type a million 1s and 0s.
      Just to say "boil the water". You would be there all day.</p>

      <p><strong>Python is a friendly translator.</strong> You write a short line that looks
      like English. Python turns it into 1s and 0s for you.</p>

      <svg class="fig" viewBox="0 0 700 170" role="img" aria-label="You write English-like code, Python translates it, the computer runs it.">
        <text x="90" y="26" text-anchor="middle" class="lbl">You write</text>
        <rect class="box" x="8" y="40" width="164" height="82" rx="8"/>
        <text x="90" y="88" text-anchor="middle" class="mono">print("Tea")</text>

        <path class="arrow" d="M182 82 h44"/><path class="accent" d="M236 82 l-13 -7 v14 z"/>

        <text x="350" y="26" text-anchor="middle" class="lbl">Python translates</text>
        <rect class="box box--dark" x="244" y="40" width="212" height="82" rx="8"/>
        <text x="350" y="78" text-anchor="middle" class="on-dark">Python</text>
        <text x="350" y="100" text-anchor="middle" class="on-dark">the translator</text>

        <path class="arrow" d="M466 82 h44"/><path class="accent" d="M520 82 l-13 -7 v14 z"/>

        <text x="610" y="26" text-anchor="middle" class="lbl">Computer understands</text>
        <rect class="box" x="528" y="40" width="164" height="82" rx="8"/>
        <text x="610" y="76" text-anchor="middle" class="mono">01010100</text>
        <text x="610" y="98" text-anchor="middle" class="mono">01100101</text>
      </svg>
      <span class="figcap">You never see the 1s and 0s. That is the whole point.</span>

      <h4>What "high-level" means</h4>
      <p>Python is called a <strong>high-level language</strong>. That sounds fancy. It only
      means one thing: it is close to human language, and far from machine language.</p>
      <p>High level = easy for people. Low level = easy for machines.</p>

      <h4>Programming is for everyone now</h4>
      <p>Long ago, only scientists and mathematicians wrote code. It was hard and ugly.</p>
      <p>Today code is like electricity. It is everywhere. Doctors, artists, shopkeepers and
      teachers all use Python to make their own work faster. You do not need to be a
      "computer genius" any more.</p>

      <h4>Who made Python?</h4>
      <p>A man from the Netherlands named <strong>Guido van Rossum</strong>. He started
      building it in December 1989, during his Christmas holidays, because his office was shut
      and he was bored. He gave it to the world in <strong>1991</strong>.</p>

      <div class="callout">
        <strong>The name is a joke.</strong> Python is not named after the snake. Guido was
        watching a funny British comedy show called <em>Monty Python's Flying Circus</em>. He
        wanted a name that was short, different and a little bit mysterious. The snake picture
        came many years later.
      </div>

      <div class="w">
        <span class="w__k">Tap to reveal</span>
        <div class="w-flip">
          <button class="w-flip__card">
            <span class="w-flip__front">Who made Python?</span>
            <span class="w-flip__back">Guido van Rossum, in the Netherlands.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">Which year did it come out?</span>
            <span class="w-flip__back">1991. He started writing it in 1989.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">Where does the name come from?</span>
            <span class="w-flip__back">A comedy show, <em>Monty Python's Flying Circus</em>. Not the snake.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">What does "high-level" mean?</span>
            <span class="w-flip__back">The code looks like English, not like machine code.</span>
          </button>
        </div>
      </div>

      <h4>Where is Python used?</h4>
      <p>Python is a <strong>general-purpose</strong> language. That means you can build
      almost anything with it.</p>
      <ul>
        <li><strong>Websites</strong> — Instagram, Spotify and Netflix use Python behind the screen.</li>
        <li><strong>Artificial Intelligence</strong> — when a phone recognises your face, or a
        car stops at a red light by itself, Python is usually the brain.</li>
        <li><strong>Space</strong> — NASA uses Python to handle data coming from space.</li>
        <li><strong>Daily work</strong> — renaming 500 files, or reading a big Excel sheet, in seconds.</li>
      </ul>

      <div class="callout">
        <strong>Where Python is weak.</strong> Python is not the usual choice for building
        mobile phone apps. Android apps are normally written in Kotlin or Java, and iPhone apps
        in Swift. Python is brilliant almost everywhere else.
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">A real problem on the left. The Python feature that solves it on the right.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">You have no money to buy software.</button>
            <button data-pair="b">You want to do hard maths, but not build a calculator yourself.</button>
            <button data-pair="c">You made a mistake on line 5 and want to be told at once.</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">It is interpreted — a live translator</button>
            <button data-pair="a">It is free and open source</button>
            <button data-pair="b">"Batteries included" — a huge ready-made library</button>
          </div>
        </div>
        <p class="w__why"><strong>All three.</strong> These are the three reasons colleges pick
        Python for the first year. You will meet all of them again in the next topic.</p>
      </div>

      <div class="callout">
        <strong>No coding in this topic.</strong> Answer the questions below and Topic 2 opens.
        You start writing real code in Topic 7 — and you will not need to install anything.
      </div>
    `,
    mcqs: [
      { q: "Why is Python called a \"high-level\" language?",
        options: ["It only runs on expensive, powerful computers",
                  "It is written in 1s and 0s",
                  "Its code looks very close to human language",
                  "It was made by high-level mathematicians"],
        answer: 2,
        why: "\"High-level\" is about how close the code is to English, not about the price of your computer. Low-level languages sit close to the machine; Python sits close to you." },

      { q: "Where does the name \"Python\" come from?",
        options: ["A large snake", "A British comedy show", "A Greek god", "A random word generator"],
        answer: 1,
        why: "Guido was watching Monty Python's Flying Circus. He wanted a short, unusual name. The snake logo was added much later." },

      { q: "Which of these is NOT a common use of Python?",
        options: ["Building the brain of an AI",
                  "Running websites like Instagram",
                  "Building fast mobile apps for the Apple App Store",
                  "Helping NASA study space data"],
        answer: 2,
        why: "iPhone apps are normally written in Swift, and Android apps in Kotlin or Java. Python is excellent for the other three." },

      { q: "In which year was Python released to the public?",
        options: ["1989", "1991", "1995", "2000"],
        answer: 1,
        why: "He started building it in December 1989, but the world got it in 1991. Exams almost always ask for 1991." }
    ],
    tasks: []
  },

  /* ============================== TOPIC 2 ============================== */
  {
    id: "u1t02",
    title: "How Python Works",
    summary: "Batteries included, live translation, and why we all use Python 3.",
    notebookLM: "",
    notes: `
      <h4>It uses real words</h4>
      <p>Many languages use strange symbols to join two conditions: <code>&amp;&amp;</code>
      for "and", <code>||</code> for "or". Python just uses the words <code>and</code> and
      <code>or</code>. You can read Python code out loud and it almost makes sense.</p>

      <h4>"Batteries included"</h4>
      <p>Think of buying a toy. Some boxes say <em>batteries not included</em> — so you have
      to go out and buy more. Python's box comes with everything already inside.</p>
      <p>Want to do hard maths? A tool is waiting. Want random numbers for a dice game? A tool
      is waiting. Want today's date? A tool is waiting. This big pile of ready-made tools is
      called the <strong>Standard Library</strong>.</p>

      <h4>Free and open source</h4>
      <p>Python costs nothing. Not for you, not for your college, not for a company. And the
      code of Python itself is public, so anybody in the world can help improve it.</p>

      <h4>The good and the bad</h4>
      <table>
        <tr><th>Good</th><th>Bad</th></tr>
        <tr>
          <td>Easy to read and easy to learn</td>
          <td>Slower than C or C++ for heavy maths</td>
        </tr>
        <tr>
          <td>A huge community — millions of people online to help you</td>
          <td>Not the normal choice for phone apps</td>
        </tr>
        <tr>
          <td>You write less code to do more</td>
          <td>Uses more memory than older languages</td>
        </tr>
      </table>

      <h4>Interpreted or compiled?</h4>
      <p>This is an important idea. Think about translating a book from English to Hindi.
      There are two ways.</p>

      <svg class="fig" viewBox="0 0 700 220" role="img" aria-label="A compiled language translates the whole book first; an interpreted language translates line by line as you read.">
        <text x="168" y="26" text-anchor="middle" class="lbl">Compiled — C, C++, Java</text>
        <rect class="box" x="8" y="38" width="320" height="140" rx="8"/>
        <text x="30" y="70" style="font-size:12.5px">1. Translate the whole book</text>
        <text x="30" y="94" style="font-size:12.5px">2. Print the finished book</text>
        <text x="30" y="118" style="font-size:12.5px">3. Now the reader may read it</text>
        <text x="30" y="150" class="mono accent">Fast to read. Slow to fix.</text>
        <text x="168" y="200" text-anchor="middle" style="font-size:12px">A mistake on page 2 means printing it all again.</text>

        <text x="532" y="26" text-anchor="middle" class="lbl">Interpreted — Python</text>
        <rect class="box box--dark" x="372" y="38" width="320" height="140" rx="8"/>
        <text x="394" y="70" class="on-dark" style="font-size:12.5px">1. Read one sentence</text>
        <text x="394" y="94" class="on-dark" style="font-size:12.5px">2. Say it in Hindi at once</text>
        <text x="394" y="118" class="on-dark" style="font-size:12.5px">3. Move to the next sentence</text>
        <text x="394" y="150" class="mono accent">Slower to read. Easy to fix.</text>
        <text x="532" y="200" text-anchor="middle" style="font-size:12px">A mistake stops you right there, on that line.</text>
      </svg>

      <p>Python is <strong>interpreted</strong>. A live translator sits beside you. It reads
      one line, does it, and moves on. That is why Python tells you about a mistake the moment
      it reaches it — which is very kind when you are learning.</p>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">A hospital machine must watch a heartbeat with zero delay. Speed is the
        only thing that matters. Which type of language should the engineers pick?</p>
        <div class="w-guess__opts">
          <button data-o="0">Interpreted, like Python</button>
          <button data-o="1">Compiled, like C</button>
          <button data-o="2">It makes no difference</button>
        </div>
        <p class="w__why">Compiled. The whole program is turned into machine code before it
        runs, so nothing is translated while the patient is being monitored. Python is
        wonderful — but when every millisecond counts, compiled wins.</p>
      </div>

      <h4>Python 2 and Python 3</h4>
      <p>Think of PlayStation 2 and PlayStation 3.</p>
      <ul>
        <li><strong>Python 2</strong> is the old one. It retired on 1 January 2020. Nobody fixes it any more.</li>
        <li><strong>Python 3</strong> is the current one. Better, cleaner, still growing.</li>
        <li>A PS3 game will not run on a PS2. In the same way, Python 3 code often will not run
        on Python 2. <strong>We use only Python 3.</strong></li>
      </ul>

      <div class="callout">
        <strong>Careful when you search online.</strong> Some old tutorials use Python 2. The
        easy way to spot one: it writes <code>print "Hello"</code> with no brackets. Python 3
        always uses brackets — <code>print("Hello")</code>. If you see the first form, close
        the page.
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which side does each sentence belong to?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Translates the whole program first</button>
            <button data-pair="b">Stops at the exact line where the mistake is</button>
            <button data-pair="c">Retired on 1 January 2020</button>
            <button data-pair="d">The version we use in this course</button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">Python 3</button>
            <button data-pair="a">A compiled language</button>
            <button data-pair="c">Python 2</button>
            <button data-pair="b">An interpreted language</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> These four facts cover almost every exam
        question on this topic.</p>
      </div>
    `,
    mcqs: [
      { q: "How does an interpreted language handle your code?",
        options: ["It runs the code line by line, like a live translator",
                  "It translates the whole program before running anything",
                  "It refuses to run unless you compile it first",
                  "It turns the code into a PDF"],
        answer: 0,
        why: "One line at a time, translated and run on the spot. That is why Python can stop and tell you about line 5 while line 6 has not even been looked at yet." },

      { q: "Which of these is a real limitation of Python?",
        options: ["It costs too much to buy",
                  "The code is hard for beginners to read",
                  "It runs slower than compiled languages like C++",
                  "It has no ready-made tools"],
        answer: 2,
        why: "Speed is the honest weak point. Everything else in the list is the opposite of true — Python is free, easy to read, and packed with ready-made tools." },

      { q: "You find old code written in Python 2. Will it run perfectly in Python 3?",
        options: ["Yes, always",
                  "No — Python 3 is different and the old code often needs changes",
                  "Yes, but only on a Mac",
                  "Python 2 and Python 3 are the same thing"],
        answer: 1,
        why: "Python 3 was deliberately made incompatible so that old design mistakes could be fixed. A PS3 game will not play on a PS2." },

      { q: "What does \"batteries included\" mean?",
        options: ["Python drains your laptop battery",
                  "Python comes with a big library of ready-made tools",
                  "You must buy batteries to run Python",
                  "Python only works on laptops, not desktops"],
        answer: 1,
        why: "It means the Standard Library — maths tools, random numbers, dates and hundreds more — arrives with Python. Nothing extra to download." }
    ],
    tasks: []
  },

  /* ============================== TOPIC 3 ============================== */
  {
    id: "u1t03",
    title: "Installing Python",
    summary: "Put the engine in the car, and give the computer a map to find it.",
    notebookLM: "",
    notes: `
      <h4>The engine and the map</h4>
      <p>You want to build a car. First you buy an <strong>engine</strong> — that is
      downloading Python.</p>
      <p>But an engine sitting in the garage is useless. The car must know where it is. That
      map, telling your computer where Python lives, is called the <strong>PATH</strong>.</p>

      <h4>Installing on Windows</h4>
      <ol>
        <li>Open a browser and go to <code>python.org/downloads</code>.</li>
        <li>Click the big yellow <strong>Download Python</strong> button. The site knows you are on Windows.</li>
        <li>Open the file you downloaded.</li>
        <li><strong>Tick the box at the bottom that says "Add python.exe to PATH".</strong></li>
        <li>Click <strong>Install Now</strong> and wait for the green bar.</li>
      </ol>

      <div class="callout">
        <strong>Step 4 is the one everybody forgets.</strong> That little box at the bottom is
        easy to miss, and missing it causes the most common error in the whole first week.
        Tick it <em>before</em> you click Install.
      </div>

      <h4>Installing on a Mac</h4>
      <ol>
        <li>Go to the same site, <code>python.org/downloads</code>.</li>
        <li>Click Download. The site gives you a <code>.pkg</code> file.</li>
        <li>Open it, click Continue, Agree, Install.</li>
        <li>Type your Mac password or use Touch ID.</li>
      </ol>
      <p>Macs normally sort out the PATH by themselves.</p>

      <h4>What PATH actually does</h4>
      <p>PATH is a list of folders. When you type a command, your computer walks down that
      list, folder by folder, looking for a matching program.</p>

      <svg class="fig" viewBox="0 0 700 200" role="img" aria-label="Typing python makes the computer search each folder in the PATH list until it finds python.exe.">
        <rect class="box box--dark" x="8" y="66" width="168" height="70" rx="8"/>
        <text x="30" y="98" class="mono on-dark">&gt; python</text>
        <text x="30" y="122" class="mono accent">_</text>
        <text x="92" y="158" text-anchor="middle" class="lbl">You type this</text>

        <path class="arrow" d="M186 100 h42"/><path class="accent" d="M240 100 l-13 -7 v14 z"/>

        <text x="470" y="28" text-anchor="middle" class="lbl">The computer checks each folder</text>
        <rect class="box" x="256" y="40" width="428" height="34" rx="6"/>
        <text x="274" y="62" class="mono">C:\\Windows\\system32</text>
        <text x="666" y="62" text-anchor="end" class="mono">not here</text>

        <rect class="box" x="256" y="82" width="428" height="34" rx="6"/>
        <text x="274" y="104" class="mono">C:\\Windows</text>
        <text x="666" y="104" text-anchor="end" class="mono">not here</text>

        <rect x="256" y="124" width="428" height="34" rx="6" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.4"/>
        <text x="274" y="146" class="mono">C:\\Python312\\python.exe</text>
        <text x="666" y="146" text-anchor="end" class="mono accent">found it</text>
        <text x="470" y="186" text-anchor="middle" class="lbl">Leave that last line out and Python seems to vanish</text>
      </svg>

      <p>If you forgot the box on Windows, do not panic. Open the installer again, choose
      <strong>Modify</strong>, and tick it this time.</p>

      <h4>Did it work?</h4>
      <p>Ask the computer.</p>
      <ul>
        <li><strong>Windows:</strong> search the Start menu for <code>cmd</code> and open Command Prompt.</li>
        <li><strong>Mac:</strong> press Command + Space and search for <code>Terminal</code>.</li>
      </ul>
      <pre><code>C:\\Users\\You&gt; python --version
Python 3.12.4</code></pre>
      <p>A version number means you are done. On some Macs the command is
      <code>python3 --version</code>.</p>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">A student typed this to check the version and it did not work. Tap the wrong part.</p>
        <div class="w-spot__line">
          <button>python</button><button data-bad>-version</button>
        </div>
        <p class="w__why">It needs <strong>two</strong> dashes: <code>--version</code>. One
        dash means something else entirely. Little details like this matter in the terminal.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Every one of these messages appears on somebody's screen in week one.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>'python' is not recognized</code></button>
            <button data-pair="b"><code>Python 3.12.4</code></button>
            <button data-pair="c"><code>No such file or directory</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="b">Everything is working</button>
            <button data-pair="c">Wrong folder, or the file name is spelt wrong</button>
            <button data-pair="a">Python is installed but not on PATH</button>
          </div>
        </div>
        <p class="w__why"><strong>Done.</strong> Reading the message instead of panicking is
        most of what fixing errors really is.</p>
      </div>

      <div class="callout">
        <strong>You do not need any of this for AbhyasLab.</strong> Python already runs inside
        this browser tab, even on a phone. But install it on your own machine anyway — your lab
        exam will not be in a browser.
      </div>
    `,
    mcqs: [
      { q: "What is the most important step when installing Python on Windows?",
        options: ["Paying the installation fee",
                  "Ticking the box that says \"Add python.exe to PATH\"",
                  "Restarting your router",
                  "Buying a new keyboard"],
        answer: 1,
        why: "Python is free, so there is no fee. That one checkbox at the bottom of the first screen saves you from the most common error of the whole first week." },

      { q: "What does adding Python to the PATH actually do?",
        options: ["It makes a desktop shortcut",
                  "It makes Python run faster",
                  "It tells the computer which folder to look in when you type a command",
                  "It connects your computer to the internet"],
        answer: 2,
        why: "PATH is just a list of folders the system searches. Python's folder has to be on that list, or typing python finds nothing." },

      { q: "Which command checks whether Python is installed?",
        options: ["show python", "python --version", "run python", "start python"],
        answer: 1,
        why: "python --version, with two dashes. On some Macs you need python3 --version instead." },

      { q: "Your friend gets 'python is not recognized' on Windows. What did they most likely forget?",
        options: ["To buy a licence",
                  "To tick \"Add python.exe to PATH\" during installation",
                  "To restart the computer three times",
                  "To install a code editor"],
        answer: 1,
        why: "Python is installed fine — the shell just cannot find it. Run the installer again, choose Modify, and tick the box." }
    ],
    tasks: [
      { id: "u1t03a", kind: "confirm",
        title: "Check it on your own machine",
        brief: "Do this on your laptop or a lab computer, then tick the box.",
        label: "I opened Command Prompt or Terminal, typed <code>python --version</code>, and a version number came back." }
    ]
  },

  /* ============================== TOPIC 4 ============================== */
  {
    id: "u1t04",
    title: "Choosing a Code Editor",
    summary: "IDLE, VS Code and Jupyter — three different vehicles for the same engine.",
    notebookLM: "",
    notes: `
      <h4>The engine and the vehicle</h4>
      <p>Python is the engine. But you do not pour petrol straight onto an engine. You sit in
      a seat, hold a steering wheel and look at a dashboard.</p>
      <p>A <strong>code editor</strong> is that vehicle. It gives you a comfortable, colourful
      screen to type your instructions into.</p>
      <p>There are three you should know about.</p>

      <h4>1. IDLE — the bicycle</h4>
      <p>Simple, reliable, and already yours. IDLE arrives free with Python; you do not
      download it separately. Search your computer for <code>IDLE</code> and open it.</p>
      <p>You get a window with <code>&gt;&gt;&gt;</code> in it. Type a line, press Enter, get
      an answer straight away. Perfect for a quick test.</p>

      <h4>2. VS Code — the sports car</h4>
      <p>Visual Studio Code is made by Microsoft, is completely free, and is the most popular
      code editor in the world. Professionals use it every day.</p>
      <ol>
        <li>Go to <code>code.visualstudio.com</code>.</li>
        <li>Click the big Download button.</li>
        <li>Open the file and keep clicking Next.</li>
      </ol>

      <p><strong>Then teach it Python.</strong> VS Code can read dozens of languages, but it
      needs to be told about each one:</p>
      <ol>
        <li>Open VS Code.</li>
        <li>On the far left, find the icon made of four small blocks, with one flying away. That is <strong>Extensions</strong>. Click it.</li>
        <li>Type <code>Python</code> in the search box.</li>
        <li>The first result is called <strong>Python</strong> and is published by <strong>Microsoft</strong>. Click the blue Install button.</li>
      </ol>
      <p>Now VS Code colours your Python words and points at your mistakes before you even run
      the file.</p>

      <h4>3. Jupyter Notebook — the scientist's diary</h4>
      <p>Normally a program is one long file. Jupyter breaks it into <strong>cells</strong>.
      You can have a cell of English text, then a cell of Python code, then a colourful graph,
      then more text — all in one page.</p>
      <p>This is why Jupyter rules Data Science and AI. If you ever have a huge sheet of data
      and want to draw charts from it, Jupyter is the right tool.</p>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="IDLE is simple and free with Python, VS Code is the professional editor, Jupyter mixes text code and charts.">
        <rect class="box" x="8" y="34" width="212" height="120" rx="8"/>
        <text x="114" y="62" text-anchor="middle" style="font-size:14px;font-weight:700">IDLE</text>
        <text x="114" y="86" text-anchor="middle" style="font-size:12px">Comes with Python</text>
        <text x="114" y="106" text-anchor="middle" style="font-size:12px">One line at a time</text>
        <text x="114" y="132" text-anchor="middle" class="mono accent">quick tests</text>

        <rect class="box box--dark" x="244" y="34" width="212" height="120" rx="8"/>
        <text x="350" y="62" text-anchor="middle" class="on-dark" style="font-size:14px;font-weight:700">VS Code</text>
        <text x="350" y="86" text-anchor="middle" class="on-dark" style="font-size:12px">Free, from Microsoft</text>
        <text x="350" y="106" text-anchor="middle" class="on-dark" style="font-size:12px">Needs the Python extension</text>
        <text x="350" y="132" text-anchor="middle" class="mono accent">real projects</text>

        <rect class="box" x="480" y="34" width="212" height="120" rx="8"/>
        <text x="586" y="62" text-anchor="middle" style="font-size:14px;font-weight:700">Jupyter</text>
        <text x="586" y="86" text-anchor="middle" style="font-size:12px">Text + code + charts</text>
        <text x="586" y="106" text-anchor="middle" style="font-size:12px">Works in cells</text>
        <text x="586" y="132" text-anchor="middle" class="mono accent">data and AI</text>
      </svg>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Three students, three different needs. Give each one the right tool.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Wants to use what professionals use, to build a big app</button>
            <button data-pair="b">Wants to do one quick sum without downloading anything</button>
            <button data-pair="c">Wants to study exam marks and draw a pie chart</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Jupyter Notebook</button>
            <button data-pair="a">VS Code</button>
            <button data-pair="b">IDLE</button>
          </div>
        </div>
        <p class="w__why"><strong>Correct.</strong> There is no single "best" editor. There is
        only the right tool for the job in front of you.</p>
      </div>

      <div class="w">
        <span class="w__k">Tap to reveal</span>
        <div class="w-flip">
          <button class="w-flip__card">
            <span class="w-flip__front">Who publishes the official Python extension for VS Code?</span>
            <span class="w-flip__back"><strong>Microsoft.</strong> If the publisher is anybody else, it is the wrong one.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">Which editor do you not have to download?</span>
            <span class="w-flip__back"><strong>IDLE.</strong> It installs together with Python itself.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">Which key runs your file in IDLE?</span>
            <span class="w-flip__back"><strong>F5.</strong> It saves the file first, then runs it.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">What is a Jupyter "cell"?</span>
            <span class="w-flip__back">A block you can run on its own. Some cells hold text, some hold code, some show charts.</span>
          </button>
        </div>
      </div>
    `,
    mcqs: [
      { q: "Which tool installs automatically with Python and lets you write code straight away?",
        options: ["VS Code", "IDLE", "Jupyter Notebook", "Command Prompt"],
        answer: 1,
        why: "IDLE arrives with Python. VS Code and Jupyter are separate downloads, and Command Prompt is not an editor at all." },

      { q: "How do you teach VS Code to understand Python properly?",
        options: ["Pay a monthly subscription",
                  "Install the Python extension from the Extensions menu",
                  "It already knows Python, nothing is needed",
                  "Type all your code in capital letters"],
        answer: 1,
        why: "VS Code is a blank canvas that reads many languages. The Python extension, published by Microsoft, is what adds the colours and the error checking." },

      { q: "You want one document holding English text, Python code and colourful graphs together. Which do you choose?",
        options: ["Jupyter Notebook", "IDLE", "Command Prompt", "Microsoft Word"],
        answer: 0,
        why: "Jupyter works in cells, so text, code and charts can sit side by side in one page. That is exactly why data scientists live in it." },

      { q: "Who publishes the official Python extension for VS Code?",
        options: ["Google", "Microsoft", "Guido van Rossum", "Apple"],
        answer: 1,
        why: "Microsoft — the same company that makes VS Code. There are copies by other publishers; the official one says Microsoft underneath the name." }
    ],
    tasks: [
      { id: "u1t04a", kind: "confirm",
        title: "Open IDLE and try one line",
        brief: "Do this on your own machine, then tick the box.",
        label: "I opened IDLE, saw the <code>&gt;&gt;&gt;</code> prompt, typed <code>5 + 10</code>, pressed Enter, and it printed <code>15</code>." }
    ]
  },

  /* ============================== TOPIC 5 ============================== */
  {
    id: "u1t05",
    title: "PIP — the App Store for Python",
    summary: "Why projects need separate rooms, and how to download extra tools.",
    notebookLM: "",
    notes: `
      <h4>What is a Python environment?</h4>
      <p>Think of your computer as a big house. A <strong>Python environment</strong> is one
      room in that house, set up for one job. Inside that room you keep the Python engine and
      only the tools that job needs.</p>

      <h4>Why keep rooms separate?</h4>
      <p>Imagine you love baking cakes. You also love fixing oily car engines.</p>
      <p>Would you keep your flour and sugar in the same toolbox as your greasy spanners? Of
      course not. You would ruin the cake.</p>
      <p>Programming is the same. Today you build a website, which needs website tools.
      Tomorrow you build an AI, which needs AI tools. If everything goes in one big pile, the
      tools start fighting each other and things break.</p>
      <p>Separate environments are a separate kitchen and a separate garage.</p>

      <h4>PIP — the App Store</h4>
      <p>A new phone comes with a camera and a phone app. If you want a game, you go to the
      App Store.</p>
      <p>Python is the same. It comes with a lot built in, but not everything. <strong>PIP</strong>
      is Python's App Store. The name stands for <em>Pip Installs Packages</em>.</p>

      <svg class="fig" viewBox="0 0 700 160" role="img" aria-label="PIP downloads a package from the internet and installs it onto your computer.">
        <rect class="box box--dark" x="8" y="40" width="190" height="76" rx="8"/>
        <text x="30" y="72" class="mono on-dark">&gt; pip install</text>
        <text x="30" y="96" class="mono accent">colorama</text>
        <text x="103" y="140" text-anchor="middle" class="lbl">You ask</text>

        <path class="arrow" d="M208 78 h48"/><path class="accent" d="M266 78 l-13 -7 v14 z"/>

        <rect class="box" x="274" y="40" width="160" height="76" rx="8"/>
        <text x="354" y="72" text-anchor="middle" style="font-size:12.5px">The internet</text>
        <text x="354" y="94" text-anchor="middle" style="font-size:12.5px">(PyPI store)</text>
        <text x="354" y="140" text-anchor="middle" class="lbl">PIP fetches it</text>

        <path class="arrow" d="M444 78 h48"/><path class="accent" d="M502 78 l-13 -7 v14 z"/>

        <rect class="box" x="510" y="40" width="182" height="76" rx="8"/>
        <text x="601" y="78" text-anchor="middle" style="font-size:12.5px">Installed and ready</text>
        <text x="601" y="98" text-anchor="middle" class="mono accent">import colorama</text>
        <text x="601" y="140" text-anchor="middle" class="lbl">You use it</text>
      </svg>

      <h4>The three commands you need</h4>
      <p>All of these go in Command Prompt or Terminal — <em>not</em> inside a Python file.</p>
      <table>
        <tr><th>Command</th><th>What it does</th></tr>
        <tr><td><code>pip install colorama</code></td><td>Downloads and installs a package</td></tr>
        <tr><td><code>pip list</code></td><td>Shows every package you already have, with version numbers</td></tr>
        <tr><td><code>pip uninstall colorama</code></td><td>Removes it. Type <code>Y</code> when it asks</td></tr>
      </table>

      <div class="callout">
        <strong>A common mix-up.</strong> <code>pip install</code> goes in the terminal.
        <code>import</code> goes inside your Python file. They are two different steps: first
        you buy the tool, then you pick it up.
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">A student wants to install a package called <code>requests</code>. Tap the wrong word.</p>
        <div class="w-spot__line">
          <button data-bad>python</button><button>install</button><button>requests</button>
        </div>
        <p class="w__why">The word should be <code>pip</code>, not <code>python</code>. The
        full command is <code>pip install requests</code>. <code>python</code> starts the
        interpreter; <code>pip</code> fetches packages.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which command does which job?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>pip install cowsay</code></button>
            <button data-pair="b"><code>pip list</code></button>
            <button data-pair="c"><code>pip uninstall cowsay</code></button>
            <button data-pair="d"><code>import cowsay</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Remove a package you no longer want</button>
            <button data-pair="a">Download and install a package</button>
            <button data-pair="d">Use the package inside your Python file</button>
            <button data-pair="b">See everything you already have</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Notice the odd one out — only
        <code>import</code> goes inside a <code>.py</code> file. The other three are terminal
        commands.</p>
      </div>
    `,
    mcqs: [
      { q: "Why keep separate Python environments for different projects?",
        options: ["It saves electricity",
                  "It stops the tools of one project from breaking another project",
                  "Python refuses to run with fewer than three environments",
                  "It makes code run ten times faster"],
        answer: 1,
        why: "Flour and sugar in one box, oily spanners in another. Different projects need different versions of tools, and mixing them causes conflicts." },

      { q: "PIP is best compared to what?",
        options: ["An App Store where you download extra tools",
                  "Antivirus software",
                  "A code editor",
                  "The engine that turns code into 1s and 0s"],
        answer: 0,
        why: "PIP searches, downloads and installs packages written by people all over the world. Exactly like an App Store." },

      { q: "Which command lists every package you have installed?",
        options: ["pip show all", "python show packages", "pip list", "list pip"],
        answer: 2,
        why: "pip list prints a neat table of package names and version numbers." },

      { q: "You want to install a package called requests. What do you type?",
        options: ["download requests", "pip install requests", "python get requests", "install pip requests"],
        answer: 1,
        why: "pip install requests — the tool first, then the action, then the name. And it goes in the terminal, not inside a .py file." }
    ],
    tasks: [
      { id: "u1t05a", kind: "confirm",
        title: "Install your first package",
        brief: "In Command Prompt or Terminal, run: pip install cowsay — then run pip list and find it. (cowsay makes a text cow speak.)",
        label: "I ran <code>pip install cowsay</code>, then <code>pip list</code>, and I could see cowsay in the list with a version number." }
    ]
  },

  /* ============================== TOPIC 6 ============================== */
  {
    id: "u1t06",
    title: "Virtual Environments",
    summary: "Build the separate room, step inside it, and write down the recipe.",
    notebookLM: "",
    notes: `
      <h4>Building the room</h4>
      <p>Last topic we said each project should have its own room. A <strong>virtual
      environment</strong> (short name: <code>venv</code>) is how you actually build one.</p>
      <p>Python makes a small fresh copy of itself inside your project folder. Anything you
      install there stays there. The rest of your computer is untouched.</p>

      <h4>Step 1 — create it</h4>
      <pre><code>python -m venv my_first_room</code></pre>
      <p>A new folder called <code>my_first_room</code> appears. The name is your choice —
      <code>my_project</code> or <code>test_env</code> work just as well.</p>

      <h4>Step 2 — walk inside</h4>
      <p>Building a room is not the same as being in it. You have to step in.</p>
      <table>
        <tr><th>Your computer</th><th>Type this</th></tr>
        <tr><td>Windows</td><td><code>my_first_room\\Scripts\\activate</code></td></tr>
        <tr><td>Mac or Linux</td><td><code>source my_first_room/bin/activate</code></td></tr>
      </table>

      <p><strong>How do you know it worked?</strong> The room's name appears in brackets on
      the left of your typing line:</p>
      <pre><code>(my_first_room) C:\\Users\\You&gt; _</code></pre>
      <p>To leave the room later, just type <code>deactivate</code>.</p>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">You created a virtual environment and installed a package inside it.
        Then you typed <code>deactivate</code> and ran <code>pip list</code>. Is the package there?</p>
        <div class="w-guess__opts">
          <button data-o="0">Yes, it is everywhere now</button>
          <button data-o="1">The computer crashes</button>
          <button data-o="2">No — it only lives inside that room</button>
        </div>
        <p class="w__why">That isolation is the whole point. What you install inside a virtual
        environment stays inside it. Step out, and your main Python has no idea it exists.</p>
      </div>

      <h4>Conda — the other option</h4>
      <p><code>pip</code> and <code>venv</code> are the normal, built-in way. There is also a
      popular alternative called <strong>Conda</strong>.</p>
      <p>Think of Conda as a huge shopping mall. It handles Python packages, but it can manage
      software for other languages too. Data Science and AI people love it. For now, just know
      it exists: <em>Conda is a heavy-duty alternative to PIP</em>.</p>

      <h4>The recipe card — requirements.txt</h4>
      <p>You build a great game using five packages. You want to share it with a friend.</p>
      <p>Do you send five separate messages listing every package name? No. You send a
      <strong>recipe card</strong>. In Python that card is a plain text file called
      <code>requirements.txt</code>.</p>

      <table>
        <tr><th>You want to…</th><th>Type this</th></tr>
        <tr><td>Write the recipe card</td><td><code>pip freeze &gt; requirements.txt</code></td></tr>
        <tr><td>Cook from someone's card</td><td><code>pip install -r requirements.txt</code></td></tr>
      </table>
      <p><code>freeze</code> means "take a photo of everything installed". The <code>-r</code>
      simply means "read this file".</p>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">Your friend sent you a project with a recipe card. Tap the wrong part of this command.</p>
        <div class="w-spot__line">
          <button>pip</button><button>install</button><button data-bad>-f</button><button>requirements.txt</button>
        </div>
        <p class="w__why">It is <code>-r</code>, for <em>read</em>. Small letters matter a lot
        in the terminal — <code>-f</code> means something completely different.</p>
      </div>

      <div class="w">
        <span class="w__k">Tap to reveal</span>
        <div class="w-flip">
          <button class="w-flip__card">
            <span class="w-flip__front">How do you leave a virtual environment?</span>
            <span class="w-flip__back">Type <code>deactivate</code> and press Enter.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">What shows that you are inside one?</span>
            <span class="w-flip__back">Its name appears in brackets, like <code>(my_first_room)</code>, at the start of the line.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">What is Conda?</span>
            <span class="w-flip__back">A bigger alternative to PIP, popular in Data Science. It can manage other languages too.</span>
          </button>
          <button class="w-flip__card">
            <span class="w-flip__front">What does <code>pip freeze</code> do?</span>
            <span class="w-flip__back">Takes a photo of every installed package, so you can save the list to a file.</span>
          </button>
        </div>
      </div>
    `,
    mcqs: [
      { q: "How does the computer show you that a virtual environment is active?",
        options: ["The screen turns green",
                  "A picture of a snake appears",
                  "The environment name shows in brackets at the start of your command line",
                  "It prints \"Welcome to the room!\""],
        answer: 2,
        why: "Something like (my_first_room) appears before the prompt. If you cannot see it, you are not inside — and anything you install will land in the wrong place." },

      { q: "What is a requirements.txt file for?",
        options: ["Listing every error in your code",
                  "Acting as a recipe card, so another computer knows exactly which packages to install",
                  "Writing a letter to the creator of Python",
                  "Storing passwords"],
        answer: 1,
        why: "One plain text file listing every package your project needs. Send it with your code and anyone can rebuild your setup in one command." },

      { q: "Which command installs everything listed in a requirements.txt file?",
        options: ["pip download requirements.txt",
                  "install list.txt",
                  "python run requirements",
                  "pip install -r requirements.txt"],
        answer: 3,
        why: "The -r means read. PIP opens the file, reads every line, and installs all of them for you." },

      { q: "What is Conda?",
        options: ["A snake that eats Pythons",
                  "A heavy-duty alternative to PIP, used a lot in Data Science",
                  "A new operating system from Microsoft",
                  "A command that deletes files"],
        answer: 1,
        why: "Conda manages packages and environments, and unlike PIP it can handle software for other languages too. It is very common in AI and data work." }
    ],
    tasks: [
      { id: "u1t06a", kind: "confirm",
        title: "Build a room and step inside",
        brief: "In your terminal run: python -m venv my_test_env — then activate it, and type deactivate to leave.",
        label: "I created <code>my_test_env</code>, activated it, saw <code>(my_test_env)</code> appear on my screen, then typed <code>deactivate</code>." }
    ]
  },

  /* ============================== TOPIC 7 ============================== */
  {
    id: "u1t07",
    title: "Talking to Python: Shell Mode",
    summary: "Your first real code. Type one line, get one answer, straight away.",
    notebookLM: "",
    notes: `
      <h4>Like sending a text message</h4>
      <p>You text a friend. You send one short message, they reply at once. Then you send
      another.</p>
      <p>The <strong>Python Shell</strong> works exactly like that. Type one line, press
      Enter, get the answer instantly. It is also called <strong>Interactive Mode</strong>.</p>

      <h4>How to open it</h4>
      <ol>
        <li>Open Command Prompt (Windows) or Terminal (Mac).</li>
        <li>Type <code>python</code> and press Enter. On some Macs, <code>python3</code>.</li>
        <li>You see three arrows: <code>&gt;&gt;&gt;</code>. That means "I am listening".</li>
        <li>Type <code>5 + 5</code>, press Enter. Python replies <code>10</code>.</li>
      </ol>
      <p>To leave, type <code>exit()</code> and press Enter.</p>

      <div class="callout">
        <strong>The shell forgets everything.</strong> Close the window and your work is gone.
        Shell mode is for trying things out, not for keeping them.
      </div>

      <h4>Scripting mode — writing a film script</h4>
      <p>A film director does not tell the actors what to do one second at a time. A writer
      writes the whole script first. Then the actors perform it from start to end.</p>
      <p><strong>Scripting mode</strong> is that. You write many lines in a file, save it, and
      then run the whole file at once. Your work is saved. This is what real projects use.</p>

      <svg class="fig" viewBox="0 0 700 215" role="img" aria-label="Shell mode answers each line at once; script mode runs a saved file from top to bottom.">
        <text x="168" y="26" text-anchor="middle" class="lbl">Shell mode — a live chat</text>
        <rect class="box box--dark" x="8" y="38" width="320" height="132" rx="8"/>
        <text x="32" y="72" class="mono on-dark">&gt;&gt;&gt; 5 + 5</text>
        <text x="32" y="98" class="mono accent">10</text>
        <text x="32" y="128" class="mono on-dark">&gt;&gt;&gt; 20 * 3</text>
        <text x="32" y="154" class="mono accent">60</text>
        <text x="168" y="198" text-anchor="middle" style="font-size:12.5px">Instant answers. Nothing is saved.</text>

        <text x="532" y="26" text-anchor="middle" class="lbl">Script mode — a saved file</text>
        <rect class="box box--dark" x="372" y="38" width="320" height="132" rx="8"/>
        <text x="394" y="68" class="mono on-dark">print("Line one")</text>
        <text x="394" y="92" class="mono on-dark">print("Line two")</text>
        <text x="394" y="116" class="mono on-dark">print("Line three")</text>
        <text x="394" y="150" class="mono accent">runs all three, top to bottom</text>
        <text x="532" y="198" text-anchor="middle" style="font-size:12.5px">Saved forever. Run it again any time.</text>
      </svg>

      <h4>Which one should you use?</h4>
      <table>
        <tr><th></th><th>Shell mode</th><th>Script mode</th></tr>
        <tr><td>How you start</td><td>Type <code>python</code></td><td>Run <code>python myfile.py</code></td></tr>
        <tr><td>Prompt</td><td><code>&gt;&gt;&gt;</code></td><td>none — it just runs</td></tr>
        <tr><td>Runs</td><td>One line at a time</td><td>The whole file</td></tr>
        <tr><td>Saved?</td><td>No</td><td>Yes</td></tr>
        <tr><td>Good for</td><td>Testing an idea</td><td>Assignments and real projects</td></tr>
      </table>

      <h4>Hello, World!</h4>
      <p>There is an old tradition in programming. Your very first program should make the
      computer say hello to the world.</p>
      <pre><code>print("Hello, World!")</code></pre>
      <p>That is a complete Python program. One line. Let us look at the pieces:</p>
      <ul>
        <li><code>print</code> — the tool that writes on the screen.</li>
        <li><code>( )</code> — brackets. Whatever is inside gets given to the tool.</li>
        <li><code>"Hello, World!"</code> — text in quotes. Python prints it exactly as written.</li>
      </ul>

      <div class="callout">
        <strong>Small letters only.</strong> <code>print</code> works. <code>Print</code> and
        <code>PRINT</code> do not. Python is <em>case sensitive</em> — it looks for the exact
        name you typed, and there is no tool called <code>Print</code>.
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">One piece of this line stops it working. Tap it.</p>
        <div class="w-spot__line">
          <button data-bad>Print</button><button>(</button><button>"Hello"</button><button>)</button>
        </div>
        <p class="w__why">The capital <strong>P</strong>. Python has <code>print</code> and
        nothing called <code>Print</code>, so it says
        <code>NameError: name 'Print' is not defined</code>.</p>
      </div>

      <div class="callout">
        <strong>Now it is your turn.</strong> The boxes below run real Python inside this page.
        Type the code yourself — pasting is switched off, because typing is how your fingers
        learn. The first run takes a few seconds while Python loads.
      </div>
    `,
    mcqs: [
      { q: "What do the three arrows >>> mean?",
        options: ["Your computer has a virus",
                  "You are in the Python Shell and Python is waiting for your command",
                  "You should press the right arrow key",
                  "The program has finished"],
        answer: 1,
        why: "It is Python saying \"I am listening\". Type a line, press Enter, and you get an answer straight away." },

      { q: "Which mode saves your work so you can run it again tomorrow?",
        options: ["Scripting mode", "Interactive mode", "Shell mode", "Quick mode"],
        answer: 0,
        why: "Scripting mode puts your code in a .py file. Shell mode and interactive mode are two names for the same thing, and both forget everything when you close the window." },

      { q: "You want to test 100 / 4 very quickly. Which is fastest?",
        options: ["Scripting mode", "The Python Shell", "Writing a full project", "Saving a .py file first"],
        answer: 1,
        why: "For a one-off sum, opening the shell and typing it is far quicker than creating, saving and running a file." },

      { q: "What happens when you run Print(\"Hi\") with a capital P?",
        options: ["It prints Hi", "SyntaxError", "NameError", "It prints PRINT"],
        answer: 2,
        why: "The shape of the line is fine, so it is not a SyntaxError. Python looks for a tool named Print, finds none, and raises NameError." }
    ],
    tasks: [
      { id: "u1t07a", kind: "code",
        title: "Task 7.1 — Hello, World!",
        brief: "Print exactly: Hello, World!  — the comma and the exclamation mark both count.",
        starter: '# Write one print statement below\n',
        checks: [
          { type: "stdoutEquals", value: "Hello, World!" },
          { type: "sourceIncludes", value: "print", message: "Use the print() tool" }
        ] },

      { id: "u1t07b", kind: "code",
        title: "Task 7.2 — Fix the capital letter",
        brief: "This line is broken. Repair it so it prints: Python is case sensitive",
        starter: 'Print("Python is case sensitive")\n',
        checks: [
          { type: "stdoutEquals", value: "Python is case sensitive" }
        ] },

      { id: "u1t07c", kind: "code",
        title: "Task 7.3 — Say your own name",
        brief: "Print two lines. First line: your name. Second line exactly: I am learning Python",
        starter: '# Line 1 — your name\n# Line 2 — I am learning Python\n',
        checks: [
          { type: "stdoutMinLines", value: 2, message: "Print two separate lines" },
          { type: "stdoutContains", value: "I am learning Python", message: "Second line says: I am learning Python" }
        ] }
    ]
  },

  /* ============================== TOPIC 8 ============================== */
  {
    id: "u1t08",
    title: "Running a Python File",
    summary: "Make a .py file, then run it three different ways.",
    notebookLM: "",
    notes: `
      <h4>What is a Python script?</h4>
      <p>A Python script is an ordinary text file. The only special thing about it is the
      ending: <code>.py</code> instead of <code>.txt</code> or <code>.docx</code>.</p>
      <p>That ending is how your computer, your editor and your teacher all know it is Python.</p>

      <h4>Making one</h4>
      <ol>
        <li>Open VS Code (or IDLE).</li>
        <li><strong>File → New File.</strong></li>
        <li>Save it and name it <code>hello.py</code>.</li>
        <li>Type inside: <code>print("I am running a script!")</code></li>
        <li>Save again — Ctrl+S on Windows, Cmd+S on Mac.</li>
      </ol>

      <div class="callout">
        <strong>Save before you run.</strong> Every editor runs the <em>saved</em> file, not
        what is on your screen. If your changes seem to do nothing, you probably forgot to save.
      </div>

      <h4>Way 1 — the Play button</h4>
      <p>In VS Code, look at the top right corner. There is a small triangle, like a play
      button. Click it. A panel opens at the bottom and your message appears there.</p>
      <p>This is the easiest way, and the one you will use most.</p>

      <h4>Way 2 — the built-in terminal</h4>
      <p>That panel at the bottom of VS Code is called the <strong>Console</strong> or
      <strong>Integrated Terminal</strong>. You can type in it yourself.</p>
      <ol>
        <li>Top menu → <strong>Terminal</strong> → <strong>New Terminal</strong>.</li>
        <li>Type <code>python hello.py</code> and press Enter.</li>
      </ol>

      <h4>Way 3 — your computer's own terminal</h4>
      <p>You do not need VS Code at all. But now you must tell the computer <em>where</em> the
      file is. Think of giving a driver the map.</p>
      <ol>
        <li>Open Command Prompt or Terminal.</li>
        <li>Use <code>cd</code> — <em>change directory</em> — to walk to the right folder.
        If the file is on your desktop: <code>cd Desktop</code></li>
        <li>Then type: <code>python hello.py</code></li>
      </ol>

      <svg class="fig" viewBox="0 0 700 200" role="img" aria-label="Three ways to run a file: the play button, the built-in terminal, and your computer's own terminal.">
        <rect class="box" x="8" y="40" width="212" height="112" rx="8"/>
        <text x="114" y="70" text-anchor="middle" style="font-size:13.5px;font-weight:700">1. Play button</text>
        <text x="114" y="96" text-anchor="middle" style="font-size:12px">Top right of VS Code</text>
        <text x="114" y="126" text-anchor="middle" class="mono accent">easiest</text>

        <rect class="box" x="244" y="40" width="212" height="112" rx="8"/>
        <text x="350" y="70" text-anchor="middle" style="font-size:13.5px;font-weight:700">2. Built-in terminal</text>
        <text x="350" y="96" text-anchor="middle" class="mono">python hello.py</text>
        <text x="350" y="126" text-anchor="middle" class="mono accent">inside VS Code</text>

        <rect class="box box--dark" x="480" y="40" width="212" height="112" rx="8"/>
        <text x="586" y="70" text-anchor="middle" class="on-dark" style="font-size:13.5px;font-weight:700">3. Your own terminal</text>
        <text x="586" y="96" text-anchor="middle" class="mono on-dark">cd Desktop</text>
        <text x="586" y="118" text-anchor="middle" class="mono on-dark">python hello.py</text>
        <text x="586" y="144" text-anchor="middle" class="mono accent">no editor needed</text>
      </svg>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">A student wrote Python code but saved the file as <code>test_code.txt</code>.
        Then they typed <code>python test_code.txt</code>. What is wrong?</p>
        <div class="w-guess__opts">
          <button data-o="0">Nothing — it works fine</button>
          <button data-o="1">The file must end in .py, not .txt</button>
          <button data-o="2">Python files must be saved on the Desktop</button>
        </div>
        <p class="w__why">Python files end in <code>.py</code>. The fix is simple: rename the
        file to <code>test_code.py</code>. Watch out on Windows — it sometimes hides file
        endings, so a file that looks like <code>test_code</code> may really be
        <code>test_code.txt</code>.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">What does each command do?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>cd Desktop</code></button>
            <button data-pair="b"><code>python game.py</code></button>
            <button data-pair="c"><code>python</code></button>
            <button data-pair="d"><code>exit()</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Open the shell, with the &gt;&gt;&gt; prompt</button>
            <button data-pair="a">Move into the Desktop folder</button>
            <button data-pair="d">Leave the shell</button>
            <button data-pair="b">Run a saved file from top to bottom</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> These are the commands you will type most
        often for the rest of the year.</p>
      </div>

      <div class="callout">
        <strong>On this site</strong> there is no file to save and no terminal to open — the
        Run button does all three jobs at once. But you must still know these three ways for
        your lab exam.
      </div>
    `,
    mcqs: [
      { q: "What must a Python file's name end with?",
        options: [".txt", ".python", ".py", ".script"],
        answer: 2,
        why: "Just .py. That ending is how everything — the interpreter, your editor, your teacher — recognises the file as Python." },

      { q: "What is the easiest way to run a Python file in VS Code?",
        options: ["Click the Play button in the top right corner",
                  "Email it to yourself",
                  "Double-click the file on your desktop",
                  "Drag it into a web browser"],
        answer: 0,
        why: "The small triangle at the top right saves and runs the file, and shows the output at the bottom of the screen." },

      { q: "You saved a file named game.py. What do you type in the terminal to run it?",
        options: ["run game", "start game.py", "python game.py", "open game"],
        answer: 2,
        why: "python game.py — the interpreter first, then the file name. And you must already be in the folder where the file is." },

      { q: "What does the cd command do?",
        options: ["Copies a document", "Changes directory — moves you into a different folder",
                  "Closes the terminal", "Creates a new file"],
        answer: 1,
        why: "cd is short for change directory. Python can only run a file if you are standing in the folder that holds it." }
    ],
    tasks: [
      { id: "u1t08a", kind: "code",
        title: "Task 8.1 — Three lines in one script",
        brief: "A script runs every line from top to bottom. Print these three lines, in this order: Line one / Line two / Line three",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "Line one\nLine two\nLine three" }
        ] },

      { id: "u1t08b", kind: "confirm",
        title: "Task 8.2 — Do it on your own machine",
        brief: "Create a real file called my_first_script.py on your Desktop with two print lines inside. Run it with the Play button, then again from the terminal.",
        label: "I saved <code>my_first_script.py</code>, ran it with the Play button, then opened a terminal, typed <code>cd Desktop</code> and <code>python my_first_script.py</code>, and it worked both ways." }
    ]
  },

  /* ============================== TOPIC 9 ============================== */
  {
    id: "u1t09",
    title: "Statements, Expressions and Comments",
    summary: "The bricks your programs are built from, and how to leave notes for people.",
    notebookLM: "",
    notes: `
      <h4>A statement is a full command</h4>
      <p>If you say to a dog, "Sit down!" — that is a complete instruction.</p>
      <p>A <strong>statement</strong> is one complete line of code that tells the computer to
      do something.</p>
      <pre><code>name = "John"      # a statement: make a box called name
print(name)        # a statement: show what is in it</code></pre>

      <h4>An expression produces a value</h4>
      <p>If I say "5 + 5", I have not given you a command. I have given you a small sum that
      works out to 10.</p>
      <p>An <strong>expression</strong> is a piece of code that produces a value. It does not
      do an action by itself — it just calculates.</p>
      <pre><code>10 + 5             # an expression, worth 15
"Hello" + "World"  # an expression, worth HelloWorld</code></pre>

      <div class="callout">
        <strong>They live together.</strong> Statements very often contain expressions.
        In <code>answer = 10 + 5</code>, the whole line is a statement, and
        <code>10 + 5</code> is the expression sitting inside it.
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Statement or expression?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>50 * 2</code></button>
            <button data-pair="b"><code>age = 20</code></button>
            <button data-pair="c"><code>print("Hi")</code></button>
            <button data-pair="d"><code>"a" + "b"</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="b">Statement — it makes a variable</button>
            <button data-pair="d">Expression — it works out to "ab"</button>
            <button data-pair="a">Expression — it works out to 100</button>
            <button data-pair="c">Statement — it performs an action</button>
          </div>
        </div>
        <p class="w__why"><strong>Correct.</strong> The quick test: does it <em>do</em>
        something (statement), or does it just <em>work out to</em> something (expression)?</p>
      </div>

      <h4>Comments — sticky notes on the fridge</h4>
      <p>When you write code, you want to leave notes explaining <em>why</em> you did
      something, so that future-you is not confused.</p>
      <p><strong>Comments</strong> are messages for human eyes only. When Python runs your
      file, it skips them completely.</p>

      <h4>Single-line comments</h4>
      <p>Use the hash symbol <code>#</code>. Everything after it on that line is invisible to
      Python.</p>
      <pre><code># This works out the total price of the shoes
total = 50 + 20

print(total)   # a comment can also sit at the end of a line</code></pre>

      <h4>Multi-line comments</h4>
      <p>Need a whole paragraph? You could put <code>#</code> on every line. Or you can wrap
      the paragraph in three single quotes.</p>
      <pre><code>'''
I am writing a long note here.
This program checks the weather.
It was written in 2026.
'''
print("Hello")</code></pre>

      <h4>Docstrings — the instruction manual</h4>
      <p>A <strong>docstring</strong> is a special multi-line note using three
      <em>double</em> quotes. You put it at the very top of a file or a tool, as a manual for
      whoever reads your code next.</p>
      <pre><code>"""
Welcome to the Calculator Program.
This file adds and subtracts numbers.
"""</code></pre>

      <div class="callout">
        <strong>Write comments worth reading.</strong><br>
        <code>x = x + 1&nbsp;&nbsp;&nbsp;# add 1 to x</code> — useless, the code already says that.<br>
        <code>x = x + 1&nbsp;&nbsp;&nbsp;# count this wrong attempt</code> — useful, it says <em>why</em>.
      </div>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this program print?</p>
        <pre><code># print("First")
print("Second")</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">Second</button>
          <button data-o="1">First then Second</button>
          <button data-o="2">Nothing</button>
        </div>
        <p class="w__why">The first line starts with <code>#</code>, so Python never sees it.
        Only <code>Second</code> is printed. Turning a line into a comment like this is a very
        common trick for switching code off without deleting it.</p>
      </div>
    `,
    mcqs: [
      { q: "What is the difference between a statement and an expression?",
        options: ["An expression gives a command, a statement does maths",
                  "An expression produces a value; a statement is a complete instruction that does something",
                  "Statements are invisible to the computer",
                  "There is no difference"],
        answer: 1,
        why: "5 + 5 works out to a value — expression. age = 20 performs an action — statement. Statements often have expressions inside them." },

      { q: "Which symbol starts a single-line comment in Python?",
        options: ["//", "*", "#", "<!--"],
        answer: 2,
        why: "The hash, #. The others belong to Java, C and HTML — typing them in a .py file gives you a SyntaxError." },

      { q: "What does Python do when it reaches a comment?",
        options: ["Translates it", "Prints it on the screen", "Ignores it completely", "Stops with an error"],
        answer: 2,
        why: "It skips it entirely. Comments exist only for the humans reading your code." },

      { q: "Which one is a docstring?",
        options: ["# A note", "''' A note '''", "\"\"\" A note \"\"\"", "// A note"],
        answer: 2,
        why: "Three double quotes. Placed at the very top of a file or tool it becomes real documentation that Python keeps hold of, not just a comment." }
    ],
    tasks: [
      { id: "u1t09a", kind: "code",
        title: "Task 9.1 — A note above your code",
        brief: "Print your favourite colour. Above that line, write a single-line comment saying what the code is about to do.",
        starter: '',
        checks: [
          { type: "sourceMinMatches", pattern: "(^|\\n)\\s*#", count: 1, message: "Write a comment line starting with #" },
          { type: "stdoutMinLines", value: 1, message: "Print something" },
          { type: "sourceIncludes", value: "print", message: "Use print()" }
        ] },

      { id: "u1t09b", kind: "code",
        title: "Task 9.2 — Write the manual",
        brief: "Write a docstring using three double quotes at the top of the file, then print exactly: Space Invaders is loading",
        starter: '',
        checks: [
          { type: "sourceRegex", pattern: '"""', message: "Use a docstring with three double quotes" },
          { type: "stdoutEquals", value: "Space Invaders is loading" }
        ] },

      { id: "u1t09c", kind: "code",
        title: "Task 9.3 — Switch a line off",
        brief: "Two print lines are given. Turn the first one into a comment so only the second one runs.",
        starter: 'print("This line should NOT appear")\nprint("Only this line appears")\n',
        checks: [
          { type: "stdoutEquals", value: "Only this line appears" },
          { type: "sourceMinMatches", pattern: "(^|\\n)\\s*#", count: 1, message: "Comment out the first line with #" }
        ] }
    ]
  },

  /* ============================== TOPIC 10 ============================== */
  {
    id: "u1t10",
    title: "Indentation and Fixing Errors",
    summary: "In Python, spaces are the law. Plus how to read an error instead of fearing it.",
    notebookLM: "",
    notes: `
      <h4>Why we indent</h4>
      <p>A book with no paragraphs and no spacing would hurt your eyes. We indent paragraphs
      to show where a new thought begins.</p>
      <p>Most languages group code with curly brackets <code>{ }</code>. Python uses
      <strong>empty space</strong> instead. You press Tab (or the spacebar four times) to push
      a line to the right.</p>

      <h4>In Python, indentation is not decoration</h4>
      <p>It is the law. Pushing a line to the right tells Python: <em>this line belongs
      inside the line above it.</em></p>
      <pre><code>if 5 > 2:
    print("Five is bigger!")</code></pre>
      <p>That indented line belongs to the <code>if</code>. Remove the space and Python does
      not just look untidy — it stops and refuses to run.</p>

      <svg class="fig" viewBox="0 0 700 180" role="img" aria-label="Correct indentation groups a line under the if statement; missing indentation causes an error.">
        <text x="168" y="26" text-anchor="middle" class="lbl">Correct</text>
        <rect class="box box--dark" x="8" y="38" width="320" height="96" rx="8"/>
        <text x="30" y="72" class="mono on-dark">if 5 &gt; 2:</text>
        <text x="30" y="98" class="mono accent">    print("Bigger!")</text>
        <path class="good" stroke="#3FD0B8" d="M40 108 v10 h150"/>
        <text x="168" y="158" text-anchor="middle" style="font-size:12px">The pushed-in line belongs to the if</text>

        <text x="532" y="26" text-anchor="middle" class="lbl">Broken</text>
        <rect class="box box--dark" x="372" y="38" width="320" height="96" rx="8"/>
        <text x="394" y="72" class="mono on-dark">if 5 &gt; 2:</text>
        <text x="394" y="98" class="mono" fill="#FF9A8E">print("Bigger!")</text>
        <text x="532" y="158" text-anchor="middle" style="font-size:12px">IndentationError — nothing is inside the if</text>
      </svg>

      <h4>The classic mistake</h4>
      <p>Pressing the spacebar a few times on one line, and the Tab key on the next. They
      look identical on screen, but Python counts them differently.</p>
      <div class="callout">
        <strong>The rule:</strong> pick one and never mix. Most people use the Tab key.
        If you mix them, Python shouts
        <code>IndentationError: unexpected indent</code> or
        <code>TabError: inconsistent use of tabs and spaces</code>.
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">These two lines are not inside anything. Tap the part that breaks it.</p>
        <div class="w-spot__line">
          <button>print("Hello")</button><button data-bad>&nbsp;&nbsp;&nbsp;&nbsp;print("World")</button>
        </div>
        <p class="w__why">The second line has spaces in front of it for no reason. Nothing
        above it opened a block, so Python has no idea what the line is supposed to be inside.
        Both lines should start at the far left.</p>
      </div>

      <h4>Reading an error message</h4>
      <p>When your car's check-engine light comes on, you do not throw the car away. You read
      the code and find the broken part.</p>
      <p>When Python breaks it prints a big block of red text called a <strong>Traceback</strong>.
      Most of it does not matter to you.</p>

      <pre><code>Traceback (most recent call last):
  File "game.py", line 14, in &lt;module&gt;
NameError: name 'score' is not defined</code></pre>

      <div class="callout">
        <strong>The secret: read from the bottom up.</strong> The last line gives you the
        <em>name of the error</em> and <em>what caused it</em>. The line just above gives you
        the <em>line number</em>. Everything else can be ignored while you are learning.
      </div>

      <p>Here that means: go to line 14, and something called <code>score</code> does not
      exist. Probably a spelling mistake, or you forgot to create it.</p>

      <table>
        <tr><th>Error</th><th>Usually means</th></tr>
        <tr><td><code>NameError</code></td><td>A name that does not exist — misspelt, or wrong capital letter</td></tr>
        <tr><td><code>SyntaxError</code></td><td>A missing bracket or an unclosed quote</td></tr>
        <tr><td><code>IndentationError</code></td><td>Spaces in the wrong place</td></tr>
        <tr><td><code>TypeError</code></td><td>You mixed two kinds of data that do not go together</td></tr>
      </table>

      <h4>Debugging with print()</h4>
      <p>Walking through a dark forest, you drop breadcrumbs so you know where you have been.</p>
      <p><strong>Debugging</strong> means squashing bugs. The simplest way is to scatter
      <code>print()</code> lines through your code and watch what the computer is really
      thinking at each step.</p>
      <pre><code>wallet = 100
print(wallet)      # 100 — good so far
wallet = wallet - 20
print(wallet)      # 80  — still fine
wallet = wallet * 2
print(wallet)      # 160 — found it! this line is wrong</code></pre>

      <h4>Breakpoints in VS Code</h4>
      <p>Sometimes code runs too fast to watch. In VS Code you can hover over the line numbers
      on the left and click to place a small <strong>red dot</strong>. That is a
      <strong>breakpoint</strong> — a pause button.</p>
      <p>Run in Debug Mode and the program races along until it hits the red dot, then
      freezes. You can look inside every variable before pressing play again.</p>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">You see: <code>File "shop.py", line 22</code> then
        <code>NameError: name 'totl' is not defined</code>. What is wrong?</p>
        <div class="w-guess__opts">
          <button data-o="0">Python is broken, reinstall it</button>
          <button data-o="1">Line 22 is missing a bracket</button>
          <button data-o="2">A spelling mistake — it should probably be "total"</button>
        </div>
        <p class="w__why"><code>NameError</code> means Python has never heard that name.
        <code>totl</code> is missing an "a". Nine times out of ten a NameError is a typing
        mistake or a wrong capital letter.</p>
      </div>
    `,
    mcqs: [
      { q: "Why does Python use indentation?",
        options: ["Only to look tidy for the teacher",
                  "To show that a block of code belongs inside the line above it",
                  "Because the spacebar is fun",
                  "To hide secret messages"],
        answer: 1,
        why: "Other languages use curly brackets for this. Python uses space, which is why getting it wrong stops the program completely." },

      { q: "Python gives you a huge red error. Where do you look first?",
        options: ["The very top line",
                  "The very bottom line, which names the error and the line number",
                  "The middle",
                  "Nowhere — delete the file and start again"],
        answer: 1,
        why: "Read a traceback from the bottom up. The last line tells you what went wrong, and the line above it tells you where." },

      { q: "What does a breakpoint in VS Code do?",
        options: ["Deletes your code",
                  "Switches on dark mode",
                  "Pauses the program at that exact line so you can look inside",
                  "Prints a red dot on the screen"],
        answer: 2,
        why: "It is a pause button. The program runs at full speed until it reaches the red dot, then freezes so you can inspect every variable." },

      { q: "Which error means you spelt a variable name wrongly?",
        options: ["SyntaxError", "NameError", "IndentationError", "TypeError"],
        answer: 1,
        why: "NameError means Python has never heard of that name. Check your spelling and your capital letters." }
    ],
    tasks: [
      { id: "u1t10a", kind: "code",
        title: "Task 10.1 — Fix the indentation",
        brief: "This code has a space where it should not. Remove it so the program prints both lines.",
        starter: 'print("Hello")\n    print("World")\n',
        checks: [
          { type: "stdoutEquals", value: "Hello\nWorld" }
        ] },

      { id: "u1t10b", kind: "code",
        title: "Task 10.2 — Fix the NameError",
        brief: "This code crashes with a NameError. Find the spelling mistake and fix it so it prints 50.",
        starter: 'total_coins = 50\nprint(total_coin)\n',
        checks: [
          { type: "stdoutEquals", value: "50" }
        ] },

      { id: "u1t10c", kind: "code",
        title: "Task 10.3 — Drop some breadcrumbs",
        brief: "A wallet starts at 100. Take away 20, then take away 30. Print the wallet after every single change, so you can see three numbers appear.",
        starter: 'wallet = 100\n# print it, change it, print it again...\n',
        checks: [
          { type: "stdoutEquals", value: "100\n80\n50" }
        ] }
    ]
  },

  /* ============================== TOPIC 11 ============================== */
  {
    id: "u1t11",
    title: "Asking Python for Help",
    summary: "help() is a dictionary. dir() is an X-ray machine. Nobody memorises everything.",
    notebookLM: "",
    notes: `
      <h4>Nobody remembers it all</h4>
      <p>Even programmers with twenty years of experience forget things every single day.
      Memorising every Python command is impossible, and trying to is a waste of your time.</p>
      <p>Good programmers do not memorise. They know <em>how to look things up</em>.</p>

      <h4>help() — the built-in dictionary</h4>
      <p>Reading a book and hit a word you do not know? You look it up in a dictionary.</p>
      <p>Python has a dictionary built in. Give <code>help()</code> the name of anything and
      it explains what that thing does.</p>
      <pre><code>help(print)</code></pre>
      <p>Python prints a paragraph telling you exactly what <code>print</code> does and how to
      use it.</p>

      <h4>dir() — the X-ray machine</h4>
      <p>Someone hands you a locked toolbox. You cannot open it. But with an X-ray machine you
      could see a hammer, a spanner and a screwdriver inside.</p>
      <p><code>dir()</code> is that X-ray. It does not explain anything — it just lists
      everything an object contains or can do. The name is short for <em>directory</em>.</p>
      <pre><code>dir("Hello")</code></pre>
      <p>That prints a long list of every action you can perform on a piece of text — turning
      it upper case, lower case, splitting it, and dozens more.</p>

      <svg class="fig" viewBox="0 0 700 165" role="img" aria-label="help gives a written explanation, dir gives a list of what is available.">
        <rect class="box" x="8" y="34" width="326" height="112" rx="8"/>
        <text x="171" y="62" text-anchor="middle" class="mono" style="font-size:15px">help(print)</text>
        <text x="171" y="90" text-anchor="middle" style="font-size:12.5px">A dictionary</text>
        <text x="171" y="112" text-anchor="middle" style="font-size:12.5px">Explains, in sentences</text>
        <text x="171" y="134" text-anchor="middle" class="mono accent">"what does this do?"</text>

        <rect class="box box--dark" x="366" y="34" width="326" height="112" rx="8"/>
        <text x="529" y="62" text-anchor="middle" class="mono on-dark" style="font-size:15px">dir("Hello")</text>
        <text x="529" y="90" text-anchor="middle" class="on-dark" style="font-size:12.5px">An X-ray</text>
        <text x="529" y="112" text-anchor="middle" class="on-dark" style="font-size:12.5px">Lists, without explaining</text>
        <text x="529" y="134" text-anchor="middle" class="mono accent">"what is in there?"</text>
      </svg>

      <h4>Reading the documentation</h4>
      <p>When you run <code>help()</code>, what comes out is called
      <strong>documentation</strong> — the docstrings we met in Topic 9. It can look scary.
      Here is how to read it:</p>
      <ul>
        <li><strong>The top line</strong> names the tool and describes it in one plain sentence.</li>
        <li><strong>The middle</strong> lists what you are allowed to put inside the brackets.</li>
        <li><strong>The rest</strong> may look like gibberish. That is completely normal.</li>
      </ul>

      <div class="callout">
        <strong>Do not panic at the technical words.</strong> Read the first sentence, take
        what you need, ignore the rest. You will understand more of it every month.
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which tool answers which question?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">"What does <code>len</code> actually do?"</button>
            <button data-pair="b">"What can I do to a piece of text?"</button>
            <button data-pair="c">"What tools are inside the math module?"</button>
          </div>
          <div class="w-match__col">
            <button data-pair="b"><code>dir("Hello")</code></button>
            <button data-pair="c"><code>dir(math)</code></button>
            <button data-pair="a"><code>help(len)</code></button>
          </div>
        </div>
        <p class="w__why"><strong>Correct.</strong> Use <code>help()</code> when you want an
        explanation, and <code>dir()</code> when you want to know what is available.</p>
      </div>

      <div class="callout">
        <strong>Try it below.</strong> Both tools work inside this page. <code>dir()</code>
        gives a long list, so wrap it in <code>print()</code> to see it.
      </div>
    `,
    mcqs: [
      { q: "You want a detailed explanation of what a command does. Which do you use?",
        options: ["ask()", "dir()", "help()", "explain()"],
        answer: 2,
        why: "help() prints the documentation in sentences. dir() only gives a bare list of names." },

      { q: "What is dir() best compared to?",
        options: ["A dictionary that explains a word",
                  "An X-ray machine that shows you a list of what is inside",
                  "A calculator",
                  "A pause button"],
        answer: 1,
        why: "It looks inside and lists what is there, without explaining any of it. The name is short for directory." },

      { q: "Some of the words in help() output confuse you. What should you do?",
        options: ["Uninstall Python",
                  "Read the plain English description at the top and ignore the advanced parts for now",
                  "Memorise every technical word today",
                  "Never use help() again"],
        answer: 1,
        why: "Documentation is written for everyone, including experts. Take the first sentence and move on — the rest will make sense later." },

      { q: "What does len() do?",
        options: ["Makes text longer",
                  "Returns how many items are in something",
                  "Deletes the last item",
                  "Turns text into a number"],
        answer: 1,
        why: "len is short for length. It counts items — letters in a piece of text, or things in a list." }
    ],
    tasks: [
      { id: "u1t11a", kind: "code",
        title: "Task 11.1 — Look inside a piece of text",
        brief: "Use print() and dir() together to list everything you can do to the text \"Hello\". You will see a long list — that is correct.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "dir(", message: "Use the dir() tool" },
          { type: "stdoutContains", value: "upper", message: "The list should include upper" }
        ] },

      { id: "u1t11b", kind: "code",
        title: "Task 11.2 — Count the letters",
        brief: "Use len() to count the letters in the word Python, and print just that number.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "6" },
          { type: "sourceIncludes", value: "len(", message: "Use the len() tool" }
        ] },

      { id: "u1t11c", kind: "code",
        title: "Task 11.3 — Read the manual",
        brief: "Use help() on the len tool. Its explanation will be printed for you to read.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "help(", message: "Use the help() tool" },
          { type: "stdoutContains", value: "len", message: "The help text should mention len" }
        ] }
    ]
  },

  /* ============================== TOPIC 12 ============================== */
  {
    id: "u1t12",
    title: "The Standard Library",
    summary: "Hundreds of free tools already on your computer, waiting for one word: import.",
    notebookLM: "",
    notes: `
      <h4>The official manual</h4>
      <p>A new TV comes with a thick instruction booklet. Python has one too, and it lives at
      <code>docs.python.org</code>.</p>
      <p><code>help()</code> is great for a quick reminder. The website gives you full
      paragraphs, examples you can copy, and beginner guides.</p>

      <div class="callout">
        <strong>The fastest trick in programming.</strong> When you get an error you do not
        understand, copy the last line of it and paste it straight into Google. Somebody has
        already had that exact error and somebody has already answered it.
      </div>

      <h4>Batteries included, again</h4>
      <p>Some toys say <em>batteries not included</em> — you have to go and buy them. Python
      is famous for being the opposite.</p>
      <p>The <strong>Standard Library</strong> is a huge pile of ready-made tools that land on
      your computer the moment you install Python. Nothing to download. Nothing to pay for.</p>

      <table>
        <tr><th>Module</th><th>What is inside</th></tr>
        <tr><td><code>math</code></td><td>Square roots, rounding up and down, geometry</td></tr>
        <tr><td><code>random</code></td><td>Rolling dice, shuffling, picking a random winner</td></tr>
        <tr><td><code>datetime</code></td><td>Today's date, the time, working out how many days between two dates</td></tr>
        <tr><td><code>statistics</code></td><td>Averages, middle values, most common values</td></tr>
      </table>

      <h4>The magic word: import</h4>
      <p>These tools sit in the background to save memory. To use one, you have to invite it
      into your file with <code>import</code>.</p>
      <pre><code>import math

print(math.sqrt(25))     # 5.0</code></pre>

      <svg class="fig" viewBox="0 0 700 170" role="img" aria-label="The standard library sits on your computer; import brings one module into your file.">
        <text x="150" y="26" text-anchor="middle" class="lbl">Already on your computer</text>
        <rect class="box" x="8" y="38" width="284" height="104" rx="8"/>
        <text x="60" y="66" class="mono" style="font-size:12.5px">math</text>
        <text x="150" y="66" class="mono" style="font-size:12.5px">random</text>
        <text x="248" y="66" class="mono" style="font-size:12.5px">datetime</text>
        <text x="60" y="92" class="mono" style="font-size:12.5px">json</text>
        <text x="150" y="92" class="mono" style="font-size:12.5px">statistics</text>
        <text x="248" y="92" class="mono" style="font-size:12.5px">time</text>
        <text x="150" y="122" text-anchor="middle" style="font-size:12px">…and hundreds more, asleep</text>

        <path class="arrow" d="M302 90 h56"/><path class="accent" d="M368 90 l-13 -7 v14 z"/>
        <text x="332" y="76" text-anchor="middle" class="mono accent" style="font-size:11px">import</text>

        <text x="530" y="26" text-anchor="middle" class="lbl">Your file</text>
        <rect class="box box--dark" x="376" y="38" width="316" height="104" rx="8"/>
        <text x="400" y="72" class="mono on-dark">import math</text>
        <text x="400" y="98" class="mono on-dark">print(math.sqrt(25))</text>
        <text x="400" y="124" class="mono accent">5.0</text>
      </svg>

      <div class="callout">
        <strong>Two different things.</strong> <code>pip install</code> downloads something
        new from the internet. <code>import</code> wakes up something already on your machine.
        Standard Library modules never need <code>pip</code>.
      </div>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">You want to use <code>math</code>. Do you need to run
        <code>pip install math</code> first?</p>
        <div class="w-guess__opts">
          <button data-o="0">Yes, every module needs installing</button>
          <button data-o="1">No — math comes with Python already</button>
          <button data-o="2">Only on Windows</button>
        </div>
        <p class="w__why"><code>math</code> is part of the Standard Library, so it is already
        there. Just <code>import math</code>. You only need <code>pip</code> for packages
        written by other people, like <code>colorama</code> or <code>requests</code>.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which module would you import for each job?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Roll a dice for a game</button>
            <button data-pair="b">Find the square root of 144</button>
            <button data-pair="c">Print today's date</button>
            <button data-pair="d">Find the average of ten marks</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c"><code>datetime</code></button>
            <button data-pair="a"><code>random</code></button>
            <button data-pair="d"><code>statistics</code></button>
            <button data-pair="b"><code>math</code></button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> You will use <code>math</code> and
        <code>statistics</code> yourself in the last two topics of this unit.</p>
      </div>
    `,
    mcqs: [
      { q: "Where is the official Python instruction manual?",
        options: ["python-help.com", "google.com", "docs.python.org", "manual.python.edu"],
        answer: 2,
        why: "docs.python.org is the official documentation, written by the people who make Python." },

      { q: "What does \"batteries included\" mean?",
        options: ["Python drains your laptop battery",
                  "Python comes with a big Standard Library of ready-made tools",
                  "You must buy batteries",
                  "Python only works on battery-powered devices"],
        answer: 1,
        why: "The Standard Library — maths, random numbers, dates and hundreds more — installs together with Python. No downloads, no cost." },

      { q: "Which word invites a Standard Library tool into your file?",
        options: ["download", "start", "bring", "import"],
        answer: 3,
        why: "import math, import random, import statistics. One word, and the whole module is yours." },

      { q: "Do you need pip install math before using the math module?",
        options: ["Yes, always",
                  "No — math is part of the Standard Library and is already installed",
                  "Only on Mac",
                  "Only if your file is bigger than 100 lines"],
        answer: 1,
        why: "pip is for packages written by other people. Standard Library modules are already on your machine — just import them." }
    ],
    tasks: [
      { id: "u1t12a", kind: "code",
        title: "Task 12.1 — Invite the math tools in",
        brief: "Import the math module, then print the square root of 64. (Use math.sqrt)",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "import math", message: "Import the math module" },
          { type: "stdoutEquals", value: "8.0" }
        ] },

      { id: "u1t12b", kind: "code",
        title: "Task 12.2 — X-ray the math module",
        brief: "Import math, then use print() and dir() to list everything inside it. Look for pi, sin and cos in the list.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "import math", message: "Import the math module" },
          { type: "sourceIncludes", value: "dir(", message: "Use dir()" },
          { type: "stdoutContains", value: "sqrt", message: "The list should include sqrt" }
        ] },

      { id: "u1t12c", kind: "code",
        title: "Task 12.3 — The value of pi",
        brief: "Import math and print the value of pi. It is stored as math.pi — no brackets needed.",
        starter: '',
        checks: [
          { type: "stdoutContains", value: "3.14159", message: "Print the value of math.pi" },
          { type: "sourceIncludes", value: "math.pi", message: "Use math.pi" }
        ] }
    ]
  },

  /* ============================== TOPIC 13 ============================== */
  {
    id: "u1t13",
    title: "Identifiers and Keywords",
    summary: "The rules for naming things, and the words Python has already reserved.",
    notebookLM: "",
    notes: `
      <h4>Name tags</h4>
      <p>At a big conference everybody wears a name tag so you know who they are.</p>
      <p>An <strong>identifier</strong> is just the programming word for a name tag. It is the
      name you choose for a variable, a function or a class. When you write
      <code>age = 20</code>, the word <code>age</code> is the identifier.</p>

      <h4>Four rules for naming</h4>
      <p>You cannot use just any name. Break a rule and Python gives you a
      <code>SyntaxError</code>.</p>
      <table>
        <tr><th>Rule</th><th>Good</th><th>Bad</th></tr>
        <tr><td>Only letters, numbers and underscore</td><td><code>player_1</code></td><td><code>player-1!</code></td></tr>
        <tr><td>Never start with a number</td><td><code>player_1st</code></td><td><code>1st_player</code></td></tr>
        <tr><td>No spaces</td><td><code>first_name</code></td><td><code>first name</code></td></tr>
        <tr><td>Capitals matter</td><td colspan="2"><code>age</code>, <code>Age</code> and <code>AGE</code> are three <em>different</em> names</td></tr>
      </table>

      <div class="callout">
        <strong>snake_case.</strong> When a name needs two words, Python programmers join them
        with an underscore: <code>first_name</code>, <code>total_marks</code>,
        <code>student_id</code>. It is called snake_case, and it is what your teacher expects
        to see.
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">Four names. Tap the one Python will refuse.</p>
        <div class="w-spot__line">
          <button>totalAmount</button><button data-bad>3_blind_mice</button><button>first_name</button><button>score2</button>
        </div>
        <p class="w__why">A name can never <em>start</em> with a number.
        <code>3_blind_mice</code> is illegal, but <code>blind_mice_3</code> would be perfectly
        fine. Numbers are allowed anywhere except the very first character.</p>
      </div>

      <h4>Keywords — the reserved seats</h4>
      <p>At a stadium some seats say "Reserved for VIPs". You are not allowed to sit there.</p>
      <p><strong>Keywords</strong> are words Python has kept for itself. You can never use one
      as your own name. If you try to call a variable <code>False</code>, Python gets very
      confused, because <code>False</code> already means something to it.</p>

      <pre><code>True    False   None    if      else    elif
for     while   break   import  def     return
and     or      not     in      is      class</code></pre>

      <div class="callout">
        <strong>Do not memorise these.</strong> Your editor colours them differently from
        everything else. If a word you typed suddenly changes colour, it is a keyword — pick a
        different name.
      </div>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">Which of these will Python accept as a variable name?</p>
        <div class="w-guess__opts">
          <button data-o="0">student_marks</button>
          <button data-o="1">class</button>
          <button data-o="2">2nd_place</button>
        </div>
        <p class="w__why"><code>class</code> is a reserved keyword, and <code>2nd_place</code>
        starts with a number. Only <code>student_marks</code> follows every rule — letters, an
        underscore, and it starts with a letter.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Each bad name breaks one rule. Which one?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>my score</code></button>
            <button data-pair="b"><code>1st_rank</code></button>
            <button data-pair="c"><code>user-name</code></button>
            <button data-pair="d"><code>import</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">It is a reserved keyword</button>
            <button data-pair="a">It has a space in it</button>
            <button data-pair="c">It uses a dash instead of an underscore</button>
            <button data-pair="b">It starts with a number</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> These are the four ways a name can be
        wrong. Everything else is allowed.</p>
      </div>
    `,
    mcqs: [
      { q: "What is an identifier in Python?",
        options: ["A password to open Python",
                  "The name you give to a variable or function",
                  "A tool that finds viruses",
                  "A built-in calculator"],
        answer: 1,
        why: "It is a name tag. When you write score = 100, the word score is the identifier." },

      { q: "Which of these is a VALID identifier?",
        options: ["1st_score", "my score", "player_score_1", "user-name"],
        answer: 2,
        why: "The first starts with a number, the second has a space, the fourth uses a dash. Only player_score_1 obeys all four rules." },

      { q: "Why can't you name a variable if or True?",
        options: ["They are too short",
                  "They are keywords, reserved by Python for its own use",
                  "They must be in capital letters",
                  "They contain numbers"],
        answer: 1,
        why: "Keywords already mean something to Python. Your editor colours them differently, which is the easiest way to spot one." },

      { q: "Are age, Age and AGE the same variable?",
        options: ["Yes, Python ignores capitals",
                  "No — Python is case sensitive, so they are three different names",
                  "Only if you write them on the same line",
                  "Only in Python 2"],
        answer: 1,
        why: "Python treats capital and small letters as completely different. This causes a lot of NameErrors in the first month — check your capitals." }
    ],
    tasks: [
      { id: "u1t13a", kind: "code",
        title: "Task 13.1 — Legal names only",
        brief: "Make a variable called student_name holding your name, and one called total_marks holding the number 95. Print total_marks.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "student_name", message: "Create a variable called student_name" },
          { type: "sourceIncludes", value: "total_marks", message: "Create a variable called total_marks" },
          { type: "stdoutEquals", value: "95" }
        ] },

      { id: "u1t13b", kind: "code",
        title: "Task 13.2 — Repair the illegal names",
        brief: "Both names below break a rule. Rename them properly (snake_case) so the code runs and prints 10 then 20.",
        starter: '1st_place = 10\nmy score = 20\nprint(1st_place)\nprint(my score)\n',
        checks: [
          { type: "stdoutEquals", value: "10\n20" }
        ] }
    ]
  },

  /* ============================== TOPIC 14 ============================== */
  {
    id: "u1t14",
    title: "Variables",
    summary: "Storage boxes with name tags. The single most important idea in programming.",
    notebookLM: "",
    notes: `
      <h4>A box with a label</h4>
      <p>You are moving house. You take a cardboard box, put your books inside, and write
      <em>BOOKS</em> on the side with a marker.</p>
      <p>A <strong>variable</strong> is exactly that, inside the computer's memory:</p>
      <ol>
        <li>You make a box.</li>
        <li>You put data inside it.</li>
        <li>You stick a name tag on it, so you can find it later.</li>
      </ol>

      <h4>Making one</h4>
      <p>You use the equals sign. <strong>The name goes on the left. The data goes on the right.</strong></p>
      <pre><code>score = 100
player_name = "Mario"</code></pre>

      <svg class="fig" viewBox="0 0 700 160" role="img" aria-label="The name on the left, the equals sign, and the data that goes into the box on the right.">
        <text class="mono" x="150" y="60" style="font-size:26px">score</text>
        <text class="mono accent" x="278" y="60" style="font-size:26px">=</text>
        <text class="mono" x="330" y="60" style="font-size:26px">100</text>

        <path class="good" d="M150 74 v12 h96 v-12"/>
        <text x="198" y="106" text-anchor="middle" class="lbl">the name tag</text>
        <text x="198" y="126" text-anchor="middle" style="font-size:12px">what you will call it later</text>

        <path class="good" stroke="#D67F19" d="M330 74 v12 h74 v-12"/>
        <text x="392" y="106" text-anchor="middle" class="lbl">the data</text>
        <text x="392" y="126" text-anchor="middle" style="font-size:12px">what goes inside the box</text>

        <text x="596" y="52" text-anchor="middle" class="lbl">Read it as</text>
        <text x="596" y="80" text-anchor="middle" style="font-size:12.5px">"put 100 into a box</text>
        <text x="596" y="100" text-anchor="middle" style="font-size:12.5px">named score"</text>
      </svg>

      <div class="callout">
        <strong>It is not a maths equation.</strong> <code>score = 100</code> does not ask
        "is score equal to 100?". It <em>puts</em> 100 into score. Asking a question needs two
        equals signs, <code>==</code>, which you meet in Topic 22.
      </div>

      <h4>Using what is in the box</h4>
      <pre><code>player_name = "Mario"
print(player_name)      # Mario
print("player_name")    # player_name</code></pre>
      <p>Look carefully. Without quotes, Python opens the box and shows you what is inside.
      With quotes, it just prints the words you typed.</p>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this print?</p>
        <pre><code>city = "Delhi"
print("city")</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">Delhi</button>
          <button data-o="1">An error</button>
          <button data-o="2">city</button>
        </div>
        <p class="w__why">The quotes turn it into plain text. Python prints the four letters
        c-i-t-y, and never looks inside the box. Remove the quotes and you would get
        <code>Delhi</code>.</p>
      </div>

      <h4>Making several boxes at once</h4>
      <p>You have three friends in a line and you hand out three name tags together. Python
      lets you do the same, separating everything with commas.</p>
      <pre><code>x, y, z = 10, 20, 30</code></pre>
      <p>Python matches them up in order: <code>x</code> gets 10, <code>y</code> gets 20,
      <code>z</code> gets 30.</p>

      <h4>Swapping — Python's magic trick</h4>
      <p>You have a glass of milk and a glass of juice, and you want to swap them. In real
      life you need a third empty glass to hold the milk for a moment. Most programming
      languages need that third glass too.</p>
      <p>Python does not.</p>
      <pre><code>a = "Milk"
b = "Juice"

a, b = b, a      # done. one line.

print(a)         # Juice
print(b)         # Milk</code></pre>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">What does each line do?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>lives = 3</code></button>
            <button data-pair="b"><code>a, b = 1, 2</code></button>
            <button data-pair="c"><code>a, b = b, a</code></button>
            <button data-pair="d"><code>print(lives)</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Swaps what is in two boxes</button>
            <button data-pair="a">Puts 3 into a box called lives</button>
            <button data-pair="d">Shows what is inside the box</button>
            <button data-pair="b">Makes two boxes on one line</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Everything you will write for the rest of
        the year is built on top of these four moves.</p>
      </div>
    `,
    mcqs: [
      { q: "What is the best real-world picture of a variable?",
        options: ["A microwave that cooks code",
                  "A storage box with a name tag, holding data",
                  "A dictionary that translates languages",
                  "A pair of scissors"],
        answer: 1,
        why: "Make the box, put something in it, label it. That is all a variable is." },

      { q: "Which symbol puts data into a variable?",
        options: ["+", "*", "=", "=="],
        answer: 2,
        why: "One equals sign assigns. Two equals signs (==) ask a question, which is a completely different job." },

      { q: "What does lives = 3 do?",
        options: ["Asks whether lives equals 3",
                  "Creates a variable named lives holding the number 3",
                  "Prints the word lives three times",
                  "Causes an error"],
        answer: 1,
        why: "Name on the left, data on the right. Read it as: put 3 into a box called lives." },

      { q: "After a = 5 and b = 9, what does a, b = b, a do?",
        options: ["Nothing", "Makes both of them 9",
                  "Swaps them, so a becomes 9 and b becomes 5",
                  "Causes an error"],
        answer: 2,
        why: "Python's one-line swap. Most other languages need a third temporary variable to do this." }
    ],
    tasks: [
      { id: "u1t14a", kind: "code",
        title: "Task 14.1 — Make three boxes",
        brief: "Create my_age holding the number 18, and favourite_colour holding the text Blue. Print favourite_colour only.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "Blue" },
          { type: "sourceIncludes", value: "my_age", message: "Create a variable called my_age" },
          { type: "sourceIncludes", value: "favourite_colour", message: "Create a variable called favourite_colour" }
        ] },

      { id: "u1t14b", kind: "code",
        title: "Task 14.2 — Three boxes on one line",
        brief: "Use the shortcut to create a, b and c holding 1, 2 and 3 on a single line. Then print all three, each on its own line.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "1\n2\n3" },
          { type: "sourceRegex", pattern: "a\\s*,\\s*b\\s*,\\s*c\\s*=", message: "Create all three on one line, like a, b, c = ..." }
        ] },

      { id: "u1t14c", kind: "code",
        title: "Task 14.3 — The magic swap",
        brief: "Two variables are given. Swap them in ONE line, then print them so Juice appears first and Milk second.",
        starter: 'a = "Milk"\nb = "Juice"\n# swap them in one line here\n\nprint(a)\nprint(b)\n',
        checks: [
          { type: "stdoutEquals", value: "Juice\nMilk" },
          { type: "sourceRegex", pattern: "a\\s*,\\s*b\\s*=\\s*b\\s*,\\s*a", message: "Do the swap in one line: a, b = b, a" }
        ] }
    ]
  },

  /* ============================== TOPIC 15 ============================== */
  {
    id: "u1t15",
    title: "Constants, Types and NameError",
    summary: "Boxes that should not change, the X-ray for data, and Python's magic boxes.",
    notebookLM: "",
    notes: `
      <h4>Constants — the permanent marker</h4>
      <p>Some values should never change. Pi is always 3.14. The maximum speed of a car is
      fixed. You would write those in permanent marker.</p>
      <p>Some languages let you lock a box shut. <strong>Python does not.</strong> Instead we
      use a <em>convention</em> — a polite agreement between programmers.</p>
      <div class="callout">
        <strong>The agreement:</strong> if a variable should never change, write its name in
        ALL CAPITAL LETTERS. <code>PI = 3.14</code>, <code>MAX_SPEED = 120</code>.
        Python will not stop you changing it. But every programmer who reads it knows: leave
        this alone.
      </div>

      <h4>NameError — shouting for a ghost</h4>
      <p>You walk into a room and shout "Bob, catch!" But there is nobody called Bob in the
      room. The ball hits the floor.</p>
      <p>A <strong>NameError</strong> happens when you ask Python for a variable that does not
      exist — usually because you spelt it wrong or used the wrong capital letter.</p>
      <pre><code>score = 50
print(Score)     # NameError — capital S, so Python has never heard of it</code></pre>

      <h4>type() — the X-ray for data</h4>
      <p>Variables hold numbers, or text, or other things. Python treats these as completely
      different species. If you are not sure what is in a box, ask.</p>
      <pre><code>age = 20
print(type(age))        # &lt;class 'int'&gt;

name = "Ravi"
print(type(name))       # &lt;class 'str'&gt;

price = 9.99
print(type(price))      # &lt;class 'float'&gt;</code></pre>
      <p><code>int</code> means whole number. <code>str</code> means text (a "string").
      <code>float</code> means a number with a decimal point.</p>

      <h4>Dynamic typing — the magic box</h4>
      <p>In older languages like Java or C++, once you write BOOKS on a box, only books may go
      in it. Ever. Put a shoe in and the program crashes. That is called
      <em>static typing</em>.</p>
      <p>Python uses <strong>dynamic typing</strong>. Its boxes are magic. Put a number in
      today, empty it and put a word in tomorrow — Python does not mind at all.</p>
      <pre><code>my_box = 10        # right now it is a number
my_box = "Apple"   # now it is text. Python is fine with this.</code></pre>

      <svg class="fig" viewBox="0 0 700 180" role="img" aria-label="Static typing locks a box to one kind of data; dynamic typing lets the same box hold anything.">
        <text x="168" y="26" text-anchor="middle" class="lbl">Static typing — Java, C++</text>
        <rect class="box" x="8" y="38" width="320" height="104" rx="8"/>
        <text x="30" y="70" class="mono" style="font-size:12.5px">int box = 10;</text>
        <text x="30" y="96" class="mono" fill="#CF4A3C" style="font-size:12.5px">box = "Apple";  ← crash</text>
        <text x="168" y="128" text-anchor="middle" style="font-size:12px">The box is locked to numbers forever</text>

        <text x="532" y="26" text-anchor="middle" class="lbl">Dynamic typing — Python</text>
        <rect class="box box--dark" x="372" y="38" width="320" height="104" rx="8"/>
        <text x="394" y="70" class="mono on-dark" style="font-size:12.5px">my_box = 10</text>
        <text x="394" y="96" class="mono accent" style="font-size:12.5px">my_box = "Apple"   ← fine</text>
        <text x="532" y="128" text-anchor="middle" class="on-dark" style="font-size:12px">The same box will hold anything</text>
      </svg>

      <div class="callout">
        <strong>Freedom has a price.</strong> Dynamic typing makes Python quick to write. It
        also means a mistake — putting text where you meant a number — is not caught until
        that line actually runs. This is why <code>type()</code> is such a useful habit.
      </div>

      <h4>The core objects</h4>
      <p>Everything in Python is an object. These are the building blocks you will meet:</p>
      <ul>
        <li><strong>Numbers</strong> — <code>int</code> (whole) and <code>float</code> (decimal)</li>
        <li><strong>Strings</strong> — text</li>
        <li><strong>Lists and Tuples</strong> — many items kept together</li>
        <li><strong>Dictionaries</strong> — data stored under names you choose</li>
      </ul>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this print?</p>
        <pre><code>total_coins = 50
print(total_coin)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">50</button>
          <button data-o="1">A NameError</button>
          <button data-o="2">total_coin</button>
        </div>
        <p class="w__why">The <strong>s</strong> is missing on the last line. The box is called
        <code>total_coins</code>, and Python has never heard of <code>total_coin</code>. This
        is the single most common beginner error.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">What type is each value?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>42</code></button>
            <button data-pair="b"><code>3.14</code></button>
            <button data-pair="c"><code>"42"</code></button>
            <button data-pair="d"><code>True</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c"><code>str</code> — the quotes make it text</button>
            <button data-pair="a"><code>int</code></button>
            <button data-pair="d"><code>bool</code></button>
            <button data-pair="b"><code>float</code></button>
          </div>
        </div>
        <p class="w__why"><strong>Watch the third one.</strong> <code>"42"</code> looks like a
        number but the quotes make it text. That difference causes real bugs, and we deal with
        it properly in the next topic.</p>
      </div>
    `,
    mcqs: [
      { q: "How do you show that a variable is meant to be a constant?",
        options: ["Put a # in front of it",
                  "Write its name in ALL CAPITAL LETTERS",
                  "Write it backwards",
                  "Python does not allow constants at all"],
        answer: 1,
        why: "It is a convention, not a rule. Python will happily let you change it — but capitals tell every human reader not to." },

      { q: "What causes a NameError?",
        options: ["Asking for a variable that does not exist, or spelling it wrongly",
                  "Starting a name with a number",
                  "Using a keyword as a name",
                  "Forgetting to install Python"],
        answer: 0,
        why: "Python looks for the exact name you typed. If nothing with that name exists, you get a NameError. Check spelling and capitals first." },

      { q: "What does dynamic typing mean?",
        options: ["You must type quickly",
                  "A variable can hold a number now and text later",
                  "You can never change what is in a variable",
                  "The text moves around on screen"],
        answer: 1,
        why: "Python boxes are not locked to one kind of data. Java and C++ lock them; Python does not." },

      { q: "What does print(type(9.99)) show?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"],
        answer: 1,
        why: "A decimal point makes it a float. Without the decimal, 9 on its own would be an int." }
    ],
    tasks: [
      { id: "u1t15a", kind: "code",
        title: "Task 15.1 — The X-ray machine",
        brief: "A variable is given. Print its type using type() — the answer should be a str.",
        starter: 'mystery_data = "Hello World"\n# print the type of mystery_data\n',
        checks: [
          { type: "stdoutContains", value: "str", message: "The output should show it is a str" },
          { type: "sourceIncludes", value: "type(", message: "Use the type() tool" }
        ] },

      { id: "u1t15b", kind: "code",
        title: "Task 15.2 — Catch the ghost",
        brief: "This code crashes with a NameError. Fix the spelling so it prints 50.",
        starter: 'total_coins = 50\nprint("You have this many coins:")\nprint(total_coin)\n',
        checks: [
          { type: "stdoutEquals", value: "You have this many coins:\n50" }
        ] },

      { id: "u1t15c", kind: "code",
        title: "Task 15.3 — Watch a box change type",
        brief: "Make a variable my_box holding 10, print its type. Then put the text Apple in the SAME variable and print its type again.",
        starter: '',
        checks: [
          { type: "stdoutContains", value: "int", message: "First type should be int" },
          { type: "stdoutContains", value: "str", message: "Second type should be str" },
          { type: "stdoutMinLines", value: 2, message: "Print both types, on two lines" }
        ] },

      { id: "u1t15d", kind: "code",
        title: "Task 15.4 — Write a constant",
        brief: "Make a constant for pi using the naming convention for constants, holding 3.14. Print it.",
        starter: '',
        checks: [
          { type: "sourceRegex", pattern: "^[A-Z_]{2,}\\s*=", message: "Name your constant in ALL CAPITALS" },
          { type: "stdoutEquals", value: "3.14" }
        ] }
    ]
  },

  /* ============================== TOPIC 16 ============================== */
  {
    id: "u1t16",
    title: "Basic Data Types",
    summary: "Sorting the recycling: whole numbers, decimals, text, true/false, and nothing.",
    notebookLM: "",
    notes: `
      <h4>Sorting the recycling</h4>
      <p>At home you have different bins: glass, plastic, paper. You cannot treat them the
      same. Try folding glass like paper and it shatters.</p>
      <p>Python is the same. It needs to know what <em>type</em> of data is in a box, so it
      knows what is allowed. You can multiply numbers. You cannot multiply a word by a word.</p>

      <h4>1. Integer — <code>int</code></h4>
      <p>A whole number. No decimal point. Can be positive, negative or zero.</p>
      <p>Counting people in a room: you can have 5 people, never 5.5 people.</p>
      <pre><code>age = 18
temperature = -5
lives = 0</code></pre>

      <h4>2. Float — <code>float</code></h4>
      <p>A number <em>with</em> a decimal point. Short for "floating-point number".</p>
      <p>Money and measurements. A snack costs ₹19.50. You weigh 60.5 kg.</p>
      <pre><code>price = 19.99
pi_value = 3.14159</code></pre>

      <h4>3. String — <code>str</code></h4>
      <p>Text. Letters, symbols, anything. It must be wrapped in quotes — single
      <code>'</code> or double <code>"</code>, as long as both ends match.</p>
      <pre><code>first_name = "Sarah"
secret_code = '12345!'</code></pre>
      <p>Look at that second one. Those are digits, but the quotes make Python treat them as
      <em>text</em> — like a phone number, which you would never do maths with.</p>

      <h4>4. Boolean — <code>bool</code></h4>
      <p>Only two possible values: <code>True</code> or <code>False</code>. Capital T,
      capital F.</p>
      <p>A light switch. Fully on, or fully off. Nothing in between.</p>
      <pre><code>is_raining = False
game_over = True</code></pre>

      <h4>5. Complex numbers</h4>
      <p>An advanced maths type with a real part and an imaginary part, marked with
      <code>j</code>. Engineers use them for electrical currents.</p>
      <pre><code>problem = 3 + 5j</code></pre>
      <p>You will almost certainly never need these in first year. Just know they exist.</p>

      <h4>6. None</h4>
      <p><code>None</code> means nothing, or empty. Not zero, not blank text —
      <em>nothing yet</em>.</p>
      <p>An empty cardboard box. It is a real box. There is just nothing in it, because you
      are saving it for later.</p>
      <pre><code>winner_name = None      # the match has not finished yet</code></pre>

      <svg class="fig" viewBox="0 0 700 200" role="img" aria-label="Six data types with an example of each: int, float, str, bool, complex and None.">
        <rect class="box" x="8" y="34" width="216" height="68" rx="7"/>
        <text x="24" y="60" class="mono accent" style="font-size:13px">int</text>
        <text x="24" y="86" class="mono" style="font-size:12.5px">18   -5   0</text>

        <rect class="box" x="242" y="34" width="216" height="68" rx="7"/>
        <text x="258" y="60" class="mono accent" style="font-size:13px">float</text>
        <text x="258" y="86" class="mono" style="font-size:12.5px">19.99   3.14</text>

        <rect class="box" x="476" y="34" width="216" height="68" rx="7"/>
        <text x="492" y="60" class="mono accent" style="font-size:13px">str</text>
        <text x="492" y="86" class="mono" style="font-size:12.5px">"Sarah"   '42'</text>

        <rect class="box" x="8" y="112" width="216" height="68" rx="7"/>
        <text x="24" y="138" class="mono accent" style="font-size:13px">bool</text>
        <text x="24" y="164" class="mono" style="font-size:12.5px">True   False</text>

        <rect class="box" x="242" y="112" width="216" height="68" rx="7"/>
        <text x="258" y="138" class="mono accent" style="font-size:13px">complex</text>
        <text x="258" y="164" class="mono" style="font-size:12.5px">3 + 5j</text>

        <rect class="box" x="476" y="112" width="216" height="68" rx="7"/>
        <text x="492" y="138" class="mono accent" style="font-size:13px">None</text>
        <text x="492" y="164" class="mono" style="font-size:12.5px">nothing, yet</text>
      </svg>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">A classic trap. What appears?</p>
        <pre><code>a = "5"
b = "5"
print(a + b)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">10</button>
          <button data-o="1">An error</button>
          <button data-o="2">55</button>
        </div>
        <p class="w__why">Both are <strong>strings</strong>, because of the quotes. On text,
        <code>+</code> does not add — it glues. So "5" and "5" become "55". Remove the quotes
        and you would get 10.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Sort each value into the right bin.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>99.9</code></button>
            <button data-pair="b"><code>"Hello World"</code></button>
            <button data-pair="c"><code>False</code></button>
            <button data-pair="d"><code>42</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">Integer</button>
            <button data-pair="c">Boolean</button>
            <button data-pair="a">Float</button>
            <button data-pair="b">String</button>
          </div>
        </div>
        <p class="w__why"><strong>All four sorted.</strong> The decimal point makes a float,
        the quotes make a string, and True/False are always booleans.</p>
      </div>
    `,
    mcqs: [
      { q: "You want to store the price of a coffee, ₹3.50. Which type?",
        options: ["Integer", "Float", "String", "Boolean"],
        answer: 1,
        why: "It has a decimal point, so it is a float. Integers are whole numbers only." },

      { q: "Which of these is a correctly written Boolean?",
        options: ["true", "\"False\"", "True", "Yes"],
        answer: 2,
        why: "Capital T. Lowercase true is a NameError, \"False\" in quotes is a string, and Yes means nothing to Python." },

      { q: "What happens if you put numbers inside quotes, like \"100\"?",
        options: ["Python treats it as an integer",
                  "Python treats it as a float",
                  "Python treats it as a string",
                  "Python crashes"],
        answer: 2,
        why: "Quotes always make text. \"100\" + \"100\" gives \"100100\", not 200." },

      { q: "What does None mean?",
        options: ["The number zero", "Empty text", "Nothing — no value yet", "An error"],
        answer: 2,
        why: "None is its own type. Zero is a number and \"\" is empty text; None means there is nothing there at all." }
    ],
    tasks: [
      { id: "u1t16a", kind: "code",
        title: "Task 16.1 — One of each",
        brief: "Make three variables: my_wallet holding a decimal number, my_pet holding a name as text, and is_tired holding True or False. Print all three, each on its own line.",
        starter: '',
        checks: [
          { type: "stdoutMinLines", value: 3, message: "Print all three, on three lines" },
          { type: "sourceIncludes", value: "my_wallet", message: "Create my_wallet" },
          { type: "sourceIncludes", value: "my_pet", message: "Create my_pet" },
          { type: "sourceIncludes", value: "is_tired", message: "Create is_tired" },
          { type: "sourceRegex", pattern: "\\d+\\.\\d+", message: "my_wallet should hold a decimal number" }
        ] },

      { id: "u1t16b", kind: "code",
        title: "Task 16.2 — Prove the trap",
        brief: "Print \"5\" + \"5\" (both in quotes) and then 5 + 5 (no quotes), on two lines, so you can see the difference.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "55\n10" }
        ] },

      { id: "u1t16c", kind: "code",
        title: "Task 16.3 — Sort the bins",
        brief: "Print the type of each of these four values, one per line, in this order: 99.9 then \"Hello\" then False then 42",
        starter: '',
        checks: [
          { type: "stdoutMinLines", value: 4, message: "Print four lines" },
          { type: "stdoutContains", value: "float", message: "First should be a float" },
          { type: "stdoutContains", value: "bool", message: "Third should be a bool" },
          { type: "sourceMinMatches", pattern: "type\\(", count: 4, message: "Use type() four times" }
        ] }
    ]
  },

  /* ============================== TOPIC 17 ============================== */
  {
    id: "u1t17",
    title: "Type Conversion and Lists",
    summary: "Changing money at the bank, and the train that carries many things at once.",
    notebookLM: "",
    notes: `
      <h4>The currency exchange</h4>
      <p>You travel from India to Japan. You have rupees, but the shops want yen. You go to a
      counter and change one into the other.</p>
      <p>Data needs the same treatment. Somebody types their age on a website and the computer
      saves it as the <em>text</em> <code>"18"</code>, not the <em>number</em> 18. Try to do
      maths with text and Python refuses.</p>
      <p>Changing one type into another is called <strong>type conversion</strong>, or
      <strong>type casting</strong>.</p>

      <h4>Automatic — implicit conversion</h4>
      <p>Sometimes Python is clever enough to do it for you, without being asked.</p>
      <pre><code>result = 5 + 2.5
print(result)          # 7.5
print(type(result))    # float</code></pre>
      <p>You added a whole number to a decimal. Python knew the answer needed a decimal point,
      so it quietly turned the 5 into 5.0 first. Nothing was lost.</p>

      <h4>Forced — explicit conversion</h4>
      <p>When Python cannot guess, you tell it. Three tools do almost all the work:</p>
      <table>
        <tr><th>Tool</th><th>Turns something into…</th><th>Example</th></tr>
        <tr><td><code>int()</code></td><td>a whole number</td><td><code>int("50")</code> → 50</td></tr>
        <tr><td><code>float()</code></td><td>a decimal number</td><td><code>float("2.5")</code> → 2.5</td></tr>
        <tr><td><code>str()</code></td><td>text</td><td><code>str(50)</code> → "50"</td></tr>
      </table>

      <pre><code># Python thinks this is text, because of the quotes
fake_number = "50"

# force it to become a real number
real_number = int(fake_number)

print(real_number + 10)     # 60</code></pre>

      <svg class="fig" viewBox="0 0 700 160" role="img" aria-label="int converts text to a whole number, float to a decimal, str back to text.">
        <rect class="box" x="8" y="52" width="150" height="60" rx="7"/>
        <text x="83" y="88" text-anchor="middle" class="mono">"50"</text>
        <text x="83" y="132" text-anchor="middle" class="lbl">text</text>

        <path class="arrow" d="M168 82 h56"/><path class="accent" d="M234 82 l-13 -7 v14 z"/>
        <text x="196" y="68" text-anchor="middle" class="mono accent" style="font-size:11px">int()</text>

        <rect class="box box--dark" x="244" y="52" width="150" height="60" rx="7"/>
        <text x="319" y="88" text-anchor="middle" class="mono on-dark">50</text>
        <text x="319" y="132" text-anchor="middle" class="lbl">whole number</text>

        <path class="arrow" d="M404 82 h56"/><path class="accent" d="M470 82 l-13 -7 v14 z"/>
        <text x="432" y="68" text-anchor="middle" class="mono accent" style="font-size:11px">str()</text>

        <rect class="box" x="480" y="52" width="150" height="60" rx="7"/>
        <text x="555" y="88" text-anchor="middle" class="mono">"50"</text>
        <text x="555" y="132" text-anchor="middle" class="lbl">text again</text>
      </svg>

      <div class="callout">
        <strong>Careful with int().</strong> <code>int("hello")</code> crashes — there is no
        number in there to find. And <code>int(9.99)</code> gives <code>9</code>, not 10; it
        chops the decimal off rather than rounding.
      </div>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this print?</p>
        <pre><code>print(int(7.9))</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">7</button>
          <button data-o="1">8</button>
          <button data-o="2">7.9</button>
        </div>
        <p class="w__why"><code>int()</code> chops, it does not round. Everything after the
        decimal point is thrown away, so 7.9 becomes 7. If you want proper rounding you need
        <code>round()</code>, which you meet in Topic 24.</p>
      </div>

      <h4>Lists — the train</h4>
      <p>A variable so far is like a bicycle. It carries one person — one piece of data.</p>
      <p>What if you need to carry fifty people? You need a train with many carriages.</p>
      <p>A <strong>list</strong> holds many pieces of data together under one name.</p>
      <ul>
        <li>Use square brackets <code>[ ]</code>.</li>
        <li>Separate every item with a comma.</li>
        <li>A list can hold different types at the same time.</li>
      </ul>

      <pre><code>grocery_list = ["Apples", "Milk", "Bread"]

student_profile = [15, "John", 98.5]      # int, str and float together</code></pre>

      <p>You reach an item by its position number, and Python starts counting at
      <strong>zero</strong>:</p>
      <pre><code>fruits = ["Apple", "Mango", "Kiwi"]

print(fruits[0])       # Apple
print(fruits[2])       # Kiwi
print(len(fruits))     # 3</code></pre>

      <div class="callout">
        <strong>Counting from zero surprises everybody.</strong> The first item is number 0,
        the second is number 1. In a list of 3 things the last one is number 2. Asking for
        <code>fruits[3]</code> gives you an <code>IndexError</code>.
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Using <code>colours = ["Red", "Green", "Blue"]</code>, what does each line give?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>colours[0]</code></button>
            <button data-pair="b"><code>colours[2]</code></button>
            <button data-pair="c"><code>len(colours)</code></button>
            <button data-pair="d"><code>colours[3]</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">3</button>
            <button data-pair="d">An IndexError</button>
            <button data-pair="a">Red</button>
            <button data-pair="b">Blue</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Three items means positions 0, 1 and 2.
        There is no position 3, so asking for it is an error.</p>
      </div>
    `,
    mcqs: [
      { q: "You add the integer 10 to the float 5.5 and Python gives 15.5 automatically. What is that called?",
        options: ["Explicit type conversion", "Implicit type conversion", "Type deletion", "String formatting"],
        answer: 1,
        why: "Implicit means Python did it by itself, without being asked, so that nothing was lost." },

      { q: "Which tool forces the number 9.99 to become text?",
        options: ["text()", "int()", "str()", "list()"],
        answer: 2,
        why: "str() turns anything into text. int() would chop it to 9, and text() does not exist in Python." },

      { q: "Which brackets create a List?",
        options: ["Parentheses ( )", "Quotation marks \" \"", "Curly brackets { }", "Square brackets [ ]"],
        answer: 3,
        why: "Square brackets, with commas between the items: [\"Apple\", \"Mango\"]." },

      { q: "In the list ['a', 'b', 'c'], what is at position 0?",
        options: ["'a'", "'b'", "'c'", "Nothing — counting starts at 1"],
        answer: 0,
        why: "Python counts from zero, so position 0 is the first item. The last one here is position 2." }
    ],
    tasks: [
      { id: "u1t17a", kind: "code",
        title: "Task 17.1 — The currency exchange",
        brief: "A shoe size is stored as text. Convert it to a whole number in a variable called real_shoe_size, then print that number plus 2.",
        starter: 'shoe_size = "10"\n# convert it, then print real_shoe_size + 2\n',
        checks: [
          { type: "stdoutEquals", value: "12" },
          { type: "sourceIncludes", value: "int(", message: "Use int() to convert it" },
          { type: "sourceIncludes", value: "real_shoe_size", message: "Store it in real_shoe_size" }
        ] },

      { id: "u1t17b", kind: "code",
        title: "Task 17.2 — Pack the train",
        brief: "Make a list called my_favourites holding three things: a whole number, a food as text, and True. Print the whole list, then print how many items it has.",
        starter: '',
        checks: [
          { type: "sourceRegex", pattern: "my_favourites\\s*=\\s*\\[", message: "Create a list with square brackets" },
          { type: "sourceIncludes", value: "len(", message: "Use len() to count the items" },
          { type: "stdoutContains", value: "True", message: "The list should contain True" },
          { type: "stdoutContains", value: "3", message: "Print how many items there are" }
        ] },

      { id: "u1t17c", kind: "code",
        title: "Task 17.3 — Pick items out",
        brief: "A list is given. Print the FIRST item, then the LAST item, on two lines. Remember Python counts from zero.",
        starter: 'fruits = ["Apple", "Mango", "Kiwi"]\n',
        checks: [
          { type: "stdoutEquals", value: "Apple\nKiwi" },
          { type: "sourceIncludes", value: "fruits[", message: "Use square brackets to reach into the list" }
        ] }
    ]
  },

  /* ============================== TOPIC 18 ============================== */
  {
    id: "u1t18",
    title: "Output and Input",
    summary: "The computer talks to you with print(). You talk back with input().",
    notebookLM: "",
    notes: `
      <h4>A conversation</h4>
      <p>Programming is a conversation between you and the computer.</p>
      <ul>
        <li><strong>Output</strong> — the computer talking to you.</li>
        <li><strong>Input</strong> — the computer listening to you.</li>
      </ul>

      <h4>print() does more than you think</h4>
      <p>You can pass several things at once, separated by commas. Python puts a single space
      between them.</p>
      <pre><code>print("Roll", 42)          # Roll 42
print("Total", "=", 100)   # Total = 100</code></pre>
      <p>The commas are not printed. They just separate the items.</p>

      <h4>sep — choose your own separator</h4>
      <p>Do not want a space? Tell <code>print</code> what to use instead.</p>
      <pre><code>print(10, 20, 30, sep="-")      # 10-20-30
print("a", "b", sep="")         # ab
print("Python", "is", "fun", sep="#")   # Python#is#fun</code></pre>

      <h4>end — choose what comes after</h4>
      <p>Normally <code>print</code> jumps to a new line when it finishes. That is because its
      hidden default is <code>end="\\n"</code>, and <code>\\n</code> means "new line".</p>
      <pre><code>print("Good", end=" ")
print("Morning")

# Both appear on ONE line:  Good Morning</code></pre>

      <svg class="fig" viewBox="0 0 700 180" role="img" aria-label="sep controls what goes between the items, end controls what goes after the last one.">
        <text class="mono" x="34" y="52" style="font-size:17px">print(</text>
        <text class="mono accent" x="106" y="52" style="font-size:17px">10</text>
        <text class="mono" x="134" y="52" style="font-size:17px">,</text>
        <text class="mono accent" x="152" y="52" style="font-size:17px">20</text>
        <text class="mono" x="180" y="52" style="font-size:17px">,</text>
        <text class="mono accent" x="198" y="52" style="font-size:17px">30</text>
        <text class="mono" x="226" y="52" style="font-size:17px">, sep="-", end="!")</text>

        <path class="good" d="M120 62 v14 h44 v-14"/>
        <text x="142" y="98" text-anchor="middle" class="lbl">sep goes here</text>
        <text x="142" y="118" text-anchor="middle" style="font-size:12px">between every item</text>

        <path class="good" stroke="#D67F19" d="M320 62 v40 h120 v-14"/>
        <text x="470" y="112" class="lbl">end goes at the very end</text>

        <rect class="box box--dark" x="34" y="130" width="240" height="36" rx="6"/>
        <text x="154" y="154" text-anchor="middle" class="mono accent">10-20-30!</text>
      </svg>

      <h4>input() — the computer listens</h4>
      <p>When you sign up to a website, a box appears asking for your name. Nothing happens
      until you type something.</p>
      <p><code>input()</code> does exactly that. It pauses the program, shows a question, and
      waits.</p>
      <pre><code>user_name = input("What is your name? ")
print("Hello", user_name)</code></pre>

      <h4>The big trap</h4>
      <div class="callout">
        <strong>input() ALWAYS gives you text.</strong> Always. Even if the user types 5,
        Python receives the string <code>"5"</code>. Try to do maths with it and your program
        breaks or behaves very strangely.
      </div>

      <pre><code># WRONG
age = input("Enter your age: ")
print(age + 5)            # crashes — you cannot add a number to text

# RIGHT
age = input("Enter your age: ")
real_age = int(age)
print(real_age + 5)

# SHORTCUT — wrap it all in one line
price = float(input("Enter the price: "))</code></pre>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">The user types <code>7</code>. What appears?</p>
        <pre><code>n = input("Number: ")
print(n + n)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">14</button>
          <button data-o="1">77</button>
          <button data-o="2">An error</button>
        </div>
        <p class="w__why"><code>input()</code> gave text, so <code>n</code> holds
        <code>"7"</code>. Adding text glues it together: <code>"77"</code>. Wrap it in
        <code>int()</code> and you would get 14.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">What does each line print?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>print("A", "B")</code></button>
            <button data-pair="b"><code>print("A", "B", sep="")</code></button>
            <button data-pair="c"><code>print("A", "B", sep="-")</code></button>
            <button data-pair="d"><code>print(1, 2, 3, sep=", ")</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">A-B</button>
            <button data-pair="a">A B</button>
            <button data-pair="d">1, 2, 3</button>
            <button data-pair="b">AB</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Remember the default: one single space.
        Everything else you have to ask for.</p>
      </div>

      <div class="callout">
        <strong>About input() in these tasks.</strong> The tasks below do not use
        <code>input()</code>, because a checker cannot type an answer for you. Practise
        <code>input()</code> on your own machine — it is very likely to appear in your lab exam.
      </div>
    `,
    mcqs: [
      { q: "What does print(\"Apple\", \"Banana\", sep=\"***\") show?",
        options: ["Apple***Banana", "Apple Banana", "AppleBanana", "***Apple Banana***"],
        answer: 0,
        why: "sep replaces the space that normally sits between items. It goes between them, not around them." },

      { q: "What type does input() always give back?",
        options: ["Integer", "Float", "String", "Boolean"],
        answer: 2,
        why: "Always a string, no matter what the user types. This is the single most common source of bugs for beginners." },

      { q: "The user must type a price like 10.50 and you need to do maths with it. What do you wrap around input()?",
        options: ["text()", "float()", "int()", "number()"],
        answer: 1,
        why: "float() keeps the decimal part. int() would chop it off, and text() does not exist." },

      { q: "What does the end parameter control?",
        options: ["What goes between the items",
                  "What is printed after the last item, instead of moving to a new line",
                  "Where the program stops",
                  "The colour of the text"],
        answer: 1,
        why: "The default is end=\"\\n\", a new line. Change it to a space and the next print lands on the same line." }
    ],
    tasks: [
      { id: "u1t18a", kind: "code",
        title: "Task 18.1 — Your own separator",
        brief: "In ONE print statement, print the three words Python, is, fun with a # between each word instead of a space.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "Python#is#fun" },
          { type: "sourceIncludes", value: "sep=", message: "Use the sep setting" }
        ] },

      { id: "u1t18b", kind: "code",
        title: "Task 18.2 — Two prints, one line",
        brief: "Use TWO print statements. The first prints Good, the second prints Morning. Use end so they appear on one line as: Good Morning",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "Good Morning" },
          { type: "sourceIncludes", value: "end=", message: "Use the end setting on the first print" },
          { type: "sourceMinMatches", pattern: "print\\(", count: 2, message: "Use two separate print statements" }
        ] },

      { id: "u1t18c", kind: "code",
        title: "Task 18.3 — Escape the trap",
        brief: "A number arrived as text, the way input() would give it. Convert it and print the answer of that number plus 2.",
        starter: 'apples = "7"\n# they want 2 more apples — print the total\n',
        checks: [
          { type: "stdoutEquals", value: "9" },
          { type: "sourceIncludes", value: "int(", message: "Convert the text with int()" }
        ] }
    ]
  },

  /* ============================== TOPIC 19 ============================== */
  {
    id: "u1t19",
    title: "String Formatting",
    summary: "Fill in the blanks — three ways, and one clear winner.",
    notebookLM: "",
    notes: `
      <h4>A fill-in-the-blank game</h4>
      <p>You have played the game where a story has blank spaces and you fill them in with
      names and words.</p>
      <p><strong>String formatting</strong> is that game. You write a sentence with blanks,
      and Python drops your variables into them.</p>
      <p>There are three ways. They arrived in this order, and each one is easier than the
      last.</p>

      <h4>Way 1 — the % method (very old)</h4>
      <p>Old Python code used <code>%</code> as the blank space.</p>
      <ul>
        <li><code>%s</code> means "put a string here"</li>
        <li><code>%d</code> means "put a digit here"</li>
      </ul>
      <pre><code>name = "John"
age = 20

print("My name is %s and I am %d years old." % (name, age))</code></pre>
      <p>You will almost never write this yourself. But you need to recognise it, because you
      will find it in older code.</p>

      <h4>Way 2 — the .format() method (better)</h4>
      <p>Instead of remembering <code>%s</code> and <code>%d</code>, you just put empty curly
      brackets <code>{}</code> wherever you want a blank.</p>
      <pre><code>item = "Pizza"
price = 15.99

print("I bought a {} for {} rupees.".format(item, price))</code></pre>

      <h4>Way 3 — f-strings (the best, use this one)</h4>
      <p>Python 3.6 added <strong>f-strings</strong>. Put the letter <code>f</code> just
      before the opening quote, then write your variables straight inside the curly brackets.</p>
      <pre><code>player = "Mario"
score = 500

print(f"Game Over! {player} got a score of {score}.")</code></pre>

      <div class="callout">
        <strong>Why f-strings win.</strong> With the old ways you had to look at the end of
        the line to find out which variable went in which blank. With an f-string you read it
        straight through, left to right, like a sentence.
      </div>

      <svg class="fig" viewBox="0 0 700 200" role="img" aria-label="The percent method, the format method and f-strings all produce the same sentence.">
        <text x="24" y="34" class="lbl">Old</text>
        <rect class="box" x="8" y="42" width="684" height="38" rx="6"/>
        <text x="26" y="66" class="mono" style="font-size:12.5px">"My name is %s" % (name)</text>
        <text x="674" y="66" text-anchor="end" style="font-size:11.5px">look at the end to find the variable</text>

        <text x="24" y="104" class="lbl">Better</text>
        <rect class="box" x="8" y="112" width="684" height="38" rx="6"/>
        <text x="26" y="136" class="mono" style="font-size:12.5px">"My name is {}".format(name)</text>
        <text x="674" y="136" text-anchor="end" style="font-size:11.5px">still at the end</text>

        <text x="24" y="174" class="lbl accent">Best</text>
        <rect x="8" y="156" width="684" height="38" rx="6" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.2"/>
        <text x="26" y="180" class="mono" style="font-size:12.5px">f"My name is {name}"</text>
        <text x="674" y="180" text-anchor="end" style="font-size:11.5px">read it straight through</text>
      </svg>

      <h4>Maths inside the brackets</h4>
      <p>An f-string will happily do a calculation for you, right where it stands.</p>
      <pre><code>base_price = 10

print(f"The total with 2 rupees tax is {base_price + 2}.")
# The total with 2 rupees tax is 12.</code></pre>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">This f-string does not work. Tap the problem.</p>
        <div class="w-spot__line">
          <button data-bad>"</button><button>Hello</button><button>{name}</button><button>"</button>
        </div>
        <p class="w__why">The letter <code>f</code> is missing before the opening quote.
        Without it, Python prints the curly brackets and the word <em>name</em> exactly as
        typed, instead of filling in the blank.</p>
      </div>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this print?</p>
        <pre><code>x = 5
print(f"{x} plus {x} is {x + x}")</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">x plus x is x + x</button>
          <button data-o="1">5 plus 5 is 55</button>
          <button data-o="2">5 plus 5 is 10</button>
        </div>
        <p class="w__why">Each pair of brackets is worked out separately. The last one is a
        real sum on real numbers, so it gives 10 — not "55", because <code>x</code> holds the
        number 5, not the text "5".</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which method is which?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>"Hi %s" % name</code></button>
            <button data-pair="b"><code>"Hi {}".format(name)</code></button>
            <button data-pair="c"><code>f"Hi {name}"</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Newest and easiest — use this</button>
            <button data-pair="a">The oldest way, from Python 2 days</button>
            <button data-pair="b">The middle child, still common</button>
          </div>
        </div>
        <p class="w__why"><strong>Correct.</strong> All three give the same sentence. Write
        f-strings yourself, and recognise the other two when you meet them in someone else's code.</p>
      </div>
    `,
    mcqs: [
      { q: "Which formatting method is the newest and easiest?",
        options: ["The %s method", "The format() method", "f-strings", "The glue() method"],
        answer: 2,
        why: "f-strings arrived in Python 3.6 and are now what almost everyone writes. You read them straight through, like a normal sentence." },

      { q: "Where must the letter f go in an f-string?",
        options: ["At the very end of the sentence",
                  "Inside the curly brackets",
                  "Right before the opening quotation mark",
                  "Between every word"],
        answer: 2,
        why: "f\"Hello {name}\". Forget it and Python prints the curly brackets and the variable name exactly as you typed them." },

      { q: "Fill in the blank: print(\"I have {} dogs\".______(3))",
        options: [".fill", ".format", ".add", "%s"],
        answer: 1,
        why: ".format(3) drops the 3 into the empty curly brackets." },

      { q: "What does f\"{2 + 3} apples\" print?",
        options: ["2 + 3 apples", "5 apples", "{2 + 3} apples", "An error"],
        answer: 1,
        why: "An f-string works out whatever is inside the brackets first. Real maths is allowed in there." }
    ],
    tasks: [
      { id: "u1t19a", kind: "code",
        title: "Task 19.1 — The modern way",
        brief: "Make two variables: hero holding Batman and city holding Gotham. Use an f-string to print exactly: Batman is the protector of Gotham",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "Batman is the protector of Gotham" },
          { type: "sourceRegex", pattern: 'f"|f\'', message: "Use an f-string" }
        ] },

      { id: "u1t19b", kind: "code",
        title: "Task 19.2 — The middle child",
        brief: "Make a variable city holding Paris. Use the .format() method with curly brackets to print exactly: I want to visit Paris next year",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "I want to visit Paris next year" },
          { type: "sourceIncludes", value: ".format(", message: "Use the .format() method" }
        ] },

      { id: "u1t19c", kind: "code",
        title: "Task 19.3 — Maths inside the brackets",
        brief: "Make base_price holding 10. Using ONE f-string, print exactly: The total with 2 tax is 12  — and do the + 2 inside the curly brackets.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "The total with 2 tax is 12" },
          { type: "sourceRegex", pattern: "\\{[^}]*base_price[^}]*\\+[^}]*\\}", message: "Do the addition inside the curly brackets" }
        ] }
    ]
  },

  /* ============================== TOPIC 20 ============================== */
  {
    id: "u1t20",
    title: "The sys Module and Command-Line Arguments",
    summary: "Handing your program a briefcase of instructions before it even starts.",
    notebookLM: "",
    notes: `
      <h4>The toolbox for talking to the system</h4>
      <p>Think of your operating system as a house, and Python as a worker inside it. By
      default the worker has only basic tools. To talk to the house itself, it needs a special
      toolbox.</p>
      <p>That toolbox is called <strong>sys</strong>, short for system. Open it the usual way:</p>
      <pre><code>import sys</code></pre>

      <h4>The briefcase</h4>
      <p>A secret agent is leaving on a mission. Before he walks out, his boss hands him a
      briefcase of instructions. He does not have to stop and phone in to ask what to do — he
      already has everything.</p>
      <p><strong>Command-line arguments</strong> are that briefcase. You hand data to your
      program at the moment you start it.</p>

      <p>Normally you run a file like this:</p>
      <pre><code>python script.py</code></pre>
      <p>But you can hand it extra words:</p>
      <pre><code>python script.py Sarah 25</code></pre>

      <h4>Opening the briefcase — sys.argv</h4>
      <p>Inside your code, those words arrive in a list called <code>sys.argv</code>, short
      for <em>argument values</em>.</p>

      <pre><code>import sys

print(sys.argv[0])     # script.py   ← always the file name
print(sys.argv[1])     # Sarah
print(sys.argv[2])     # 25</code></pre>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="Words typed after the file name arrive inside the sys.argv list, starting with the file name at position zero.">
        <rect class="box box--dark" x="8" y="34" width="684" height="46" rx="7"/>
        <text x="28" y="63" class="mono on-dark" style="font-size:14px">&gt; python script.py Sarah 25</text>

        <path class="arrow" d="M200 86 v22"/><path class="accent" d="M200 118 l-7 -13 h14 z"/>
        <path class="arrow" d="M330 86 v22"/><path class="accent" d="M330 118 l-7 -13 h14 z"/>
        <path class="arrow" d="M420 86 v22"/><path class="accent" d="M420 118 l-7 -13 h14 z"/>

        <rect class="box" x="128" y="124" width="150" height="46" rx="6"/>
        <text x="203" y="146" text-anchor="middle" class="mono" style="font-size:12px">sys.argv[0]</text>
        <text x="203" y="163" text-anchor="middle" style="font-size:11px">the file name</text>

        <rect class="box" x="288" y="124" width="118" height="46" rx="6"/>
        <text x="347" y="146" text-anchor="middle" class="mono" style="font-size:12px">sys.argv[1]</text>
        <text x="347" y="163" text-anchor="middle" style="font-size:11px">"Sarah"</text>

        <rect class="box" x="416" y="124" width="118" height="46" rx="6"/>
        <text x="475" y="146" text-anchor="middle" class="mono" style="font-size:12px">sys.argv[2]</text>
        <text x="475" y="163" text-anchor="middle" style="font-size:11px">"25"</text>
      </svg>

      <div class="callout">
        <strong>Two things to remember.</strong> Position <strong>0</strong> is always the file
        name itself, never your first word. And everything arrives as <strong>text</strong> —
        exactly like <code>input()</code> — so <code>sys.argv[2]</code> above holds
        <code>"25"</code>, not the number 25. Wrap it in <code>int()</code> to do maths.
      </div>

      <h4>Who uses this?</h4>
      <p>Mostly system administrators, and anyone automating a job. A program that resizes
      1000 photos should not stop and ask a question 1000 times. You hand it the folder name
      once, at the start, and walk away.</p>
      <p>As a beginner you will use <code>input()</code> far more often. But you should know
      this exists.</p>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">You run <code>python test.py Ravi</code>. What is in
        <code>sys.argv[0]</code>?</p>
        <div class="w-guess__opts">
          <button data-o="0">Ravi</button>
          <button data-o="1">test.py</button>
          <button data-o="2">Nothing — the list is empty</button>
        </div>
        <p class="w__why">Position 0 is always the name of the file being run. Your first real
        argument, <code>Ravi</code>, sits at position 1. This catches almost everyone the first
        time.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">You ran: <code>python app.py open 42</code></p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>sys.argv[0]</code></button>
            <button data-pair="b"><code>sys.argv[1]</code></button>
            <button data-pair="c"><code>sys.argv[2]</code></button>
            <button data-pair="d"><code>len(sys.argv)</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">"42" — as text, not a number</button>
            <button data-pair="a">"app.py"</button>
            <button data-pair="d">3</button>
            <button data-pair="b">"open"</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Three items in the list, counted from
        zero, with the file name always first.</p>
      </div>

      <div class="callout">
        <strong>Why there is no code task here.</strong> Command-line arguments only exist when
        you run a real file from a real terminal. This page has no terminal. Do the confirm
        task below on your own machine instead — that is the only way to see it work.
      </div>
    `,
    mcqs: [
      { q: "What must you write to use tools that talk to your computer's system?",
        options: ["start system", "import sys", "download sys", "open_toolbox"],
        answer: 1,
        why: "import sys, at the top of the file. sys is part of the Standard Library, so nothing needs installing." },

      { q: "What is a command-line argument?",
        options: ["An argument you have with the computer when code crashes",
                  "Words you type after the file name, to give the program instructions before it starts",
                  "A way to make text bold",
                  "A mathematical formula"],
        answer: 1,
        why: "python script.py Sarah 25 — those extra words are handed to the program at the moment it starts, with no need to stop and ask." },

      { q: "In sys.argv, what does position 0 always hold?",
        options: ["The user's password", "The word True", "The name of the Python file itself", "The number 100"],
        answer: 2,
        why: "Always the file name. Your first real argument is at position 1, which surprises nearly everybody the first time." },

      { q: "You run python app.py 25 and want to do maths with the 25. What must you do first?",
        options: ["Nothing, it is already a number",
                  "Convert it with int(), because arguments arrive as text",
                  "Restart the terminal",
                  "Save the file again"],
        answer: 1,
        why: "Just like input(), everything from the command line arrives as a string. int(sys.argv[1]) turns it into a real number." }
    ],
    tasks: [
      { id: "u1t20a", kind: "confirm",
        title: "Task 20.1 — Hand your program a briefcase",
        brief: "On your own machine, make a file test.py containing: import sys  then  print(sys.argv)  — run it as python test.py, then again as python test.py Sarah.",
        label: "I ran it both ways. Plain, the list held only the file name. With <code>Sarah</code> added, the list held two items — and I could see the file name was still first." }
    ]
  },

  /* ============================== TOPIC 21 ============================== */
  {
    id: "u1t21",
    title: "Arithmetic and Assignment Operators",
    summary: "Python as a calculator — including the two dividing tricks nobody expects.",
    notebookLM: "",
    notes: `
      <h4>Nouns and verbs</h4>
      <p>In English, a noun is a thing and a verb is an action. "John kicks the ball."</p>
      <p>In Python:</p>
      <ul>
        <li><strong>Operands</strong> are the nouns — the data.</li>
        <li><strong>Operators</strong> are the verbs — the symbols that act on it.</li>
      </ul>
      <p>In <code>5 + 10</code>: the <code>5</code> and <code>10</code> are operands, and
      <code>+</code> is the operator. Put together they form an <strong>expression</strong>.</p>

      <h4>The everyday maths</h4>
      <table>
        <tr><th>Symbol</th><th>Name</th><th>Example</th><th>Answer</th></tr>
        <tr><td><code>+</code></td><td>Add</td><td><code>5 + 2</code></td><td>7</td></tr>
        <tr><td><code>-</code></td><td>Subtract</td><td><code>5 - 2</code></td><td>3</td></tr>
        <tr><td><code>*</code></td><td>Multiply</td><td><code>5 * 2</code></td><td>10</td></tr>
        <tr><td><code>/</code></td><td>Divide</td><td><code>5 / 2</code></td><td>2.5</td></tr>
      </table>

      <div class="callout">
        <strong>Notice.</strong> <code>/</code> always gives a decimal, even when it divides
        perfectly. <code>10 / 2</code> gives <code>5.0</code>, not <code>5</code>.
      </div>

      <h4>The three special ones</h4>
      <p>These are the ones exams love, and beginners forget.</p>

      <p><strong><code>//</code> — floor division.</strong> Divides, then throws away the
      decimal. How many <em>whole</em> times does 2 go into 5? Twice.</p>
      <pre><code>print(5 // 2)      # 2
print(14 // 4)     # 3</code></pre>

      <p><strong><code>%</code> — modulus, the remainder.</strong> You have 5 slices of pizza
      and 2 people. Each gets 2 slices, and 1 slice is left in the box. That leftover is the
      modulus.</p>
      <pre><code>print(5 % 2)       # 1
print(14 % 4)      # 2</code></pre>

      <p><strong><code>**</code> — power.</strong> <code>5 ** 2</code> means 5 squared.</p>
      <pre><code>print(5 ** 2)      # 25
print(3 ** 4)      # 81</code></pre>

      <svg class="fig" viewBox="0 0 700 175" role="img" aria-label="Fourteen slices shared between four friends: three whole slices each with two left over.">
        <text x="350" y="26" text-anchor="middle" class="lbl">14 slices shared between 4 friends</text>
        <rect class="box" x="8" y="40" width="330" height="72" rx="8"/>
        <text x="173" y="70" text-anchor="middle" class="mono" style="font-size:15px">14 // 4  =  3</text>
        <text x="173" y="96" text-anchor="middle" style="font-size:12.5px">each friend gets 3 whole slices</text>

        <rect x="362" y="40" width="330" height="72" rx="8" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.2"/>
        <text x="527" y="70" text-anchor="middle" class="mono" style="font-size:15px">14 % 4  =  2</text>
        <text x="527" y="96" text-anchor="middle" style="font-size:12.5px">2 slices are left in the box</text>

        <text x="350" y="145" text-anchor="middle" style="font-size:12.5px">Together they tell the whole story: 4 × 3 = 12, and 12 + 2 = 14</text>
      </svg>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What appears?</p>
        <pre><code>print(17 % 5)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">3</button>
          <button data-o="1">2</button>
          <button data-o="2">3.4</button>
        </div>
        <p class="w__why">5 goes into 17 three times, which makes 15, and 2 are left over.
        <code>%</code> gives you the leftover, so the answer is 2. If you wanted the 3, you
        would use <code>17 // 5</code>.</p>
      </div>

      <div class="callout">
        <strong>A trick worth knowing.</strong> <code>%</code> is how programmers test whether
        a number is even. Any even number divided by 2 leaves nothing behind, so
        <code>n % 2 == 0</code> means "n is even".
      </div>

      <h4>Assignment shortcuts</h4>
      <p>You already know <code>=</code> puts data into a box. But suppose you earn 5 rupees.
      You could write <code>wallet = wallet + 5</code>. Programmers are lazy, so there is a
      shortcut.</p>
      <table>
        <tr><th>Shortcut</th><th>Means the same as</th></tr>
        <tr><td><code>wallet += 5</code></td><td><code>wallet = wallet + 5</code></td></tr>
        <tr><td><code>wallet -= 2</code></td><td><code>wallet = wallet - 2</code></td></tr>
        <tr><td><code>wallet *= 2</code></td><td><code>wallet = wallet * 2</code></td></tr>
        <tr><td><code>wallet /= 4</code></td><td><code>wallet = wallet / 4</code></td></tr>
      </table>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Start with <code>n = 10</code>. What does each line leave behind?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>n += 5</code></button>
            <button data-pair="b"><code>n *= 3</code></button>
            <button data-pair="c"><code>n -= 10</code></button>
            <button data-pair="d"><code>n /= 4</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">2.5</button>
            <button data-pair="a">15</button>
            <button data-pair="c">0</button>
            <button data-pair="b">30</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Notice the last one gives 2.5, not 2 —
        because <code>/</code> always produces a decimal.</p>
      </div>
    `,
    mcqs: [
      { q: "In 10 * 4, what is the * called?",
        options: ["The operand", "The operator", "The expression", "The variable"],
        answer: 1,
        why: "The operator is the verb — the symbol doing the work. The 10 and the 4 are the operands." },

      { q: "What is 10 % 3?",
        options: ["3.33", "9", "1", "13"],
        answer: 2,
        why: "3 goes into 10 three times, making 9, and 1 is left over. % gives you the leftover." },

      { q: "What does score += 10 do?",
        options: ["Checks whether score is 10",
                  "Adds 10 to whatever score currently holds",
                  "Sets score to exactly 10",
                  "Crashes the program"],
        answer: 1,
        why: "It is a shortcut for score = score + 10." },

      { q: "What is 7 // 2?",
        options: ["3.5", "3", "4", "1"],
        answer: 1,
        why: "Floor division throws the decimal away. 7 / 2 would be 3.5, but // chops it down to 3." }
    ],
    tasks: [
      { id: "u1t21a", kind: "code",
        title: "Task 21.1 — The pizza party",
        brief: "14 slices, 4 friends. On two lines print: how many WHOLE slices each friend gets, then how many slices are left in the box.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "3\n2" },
          { type: "sourceIncludes", value: "//", message: "Use floor division //" },
          { type: "sourceIncludes", value: "%", message: "Use modulus %" }
        ] },

      { id: "u1t21b", kind: "code",
        title: "Task 21.2 — Power up",
        brief: "Print 3 to the power of 4 (that is 3 × 3 × 3 × 3) using the power operator.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "81" },
          { type: "sourceIncludes", value: "**", message: "Use the ** operator" }
        ] },

      { id: "u1t21c", kind: "code",
        title: "Task 21.3 — The bank account",
        brief: "Start with bank_balance = 100. Use a shortcut operator to take away 40. Then use another shortcut to double what is left. Print the final balance.",
        starter: 'bank_balance = 100\n',
        checks: [
          { type: "stdoutEquals", value: "120" },
          { type: "sourceIncludes", value: "-=", message: "Use the -= shortcut" },
          { type: "sourceIncludes", value: "*=", message: "Use the *= shortcut" }
        ] }
    ]
  },

  /* ============================== TOPIC 22 ============================== */
  {
    id: "u1t22",
    title: "Comparison and Logical Operators",
    summary: "Asking Python questions. Every answer is True or False.",
    notebookLM: "",
    notes: `
      <h4>The rollercoaster sign</h4>
      <p>At a theme park a sign says: <em>you must be taller than 120 cm to ride</em>. The
      attendant compares your height to the sign, and the answer is yes or no.</p>
      <p>Every operator in this topic gives you exactly one of two answers:
      <code>True</code> or <code>False</code>.</p>

      <h4>Comparison operators</h4>
      <table>
        <tr><th>Symbol</th><th>Question it asks</th><th>Example</th><th>Answer</th></tr>
        <tr><td><code>==</code></td><td>Are these equal?</td><td><code>5 == 5</code></td><td>True</td></tr>
        <tr><td><code>!=</code></td><td>Are these different?</td><td><code>5 != 10</code></td><td>True</td></tr>
        <tr><td><code>&gt;</code></td><td>Is the left one bigger?</td><td><code>10 &gt; 5</code></td><td>True</td></tr>
        <tr><td><code>&lt;</code></td><td>Is the left one smaller?</td><td><code>2 &lt; 8</code></td><td>True</td></tr>
        <tr><td><code>&gt;=</code></td><td>Bigger, or the same?</td><td><code>18 &gt;= 18</code></td><td>True</td></tr>
        <tr><td><code>&lt;=</code></td><td>Smaller, or the same?</td><td><code>3 &lt;= 2</code></td><td>False</td></tr>
      </table>

      <div class="callout">
        <strong>One equals sign or two?</strong> This is the most common mix-up in
        programming.<br>
        <code>age = 18</code> — one sign. <em>Puts</em> 18 into age.<br>
        <code>age == 18</code> — two signs. <em>Asks</em> whether age is 18.
      </div>

      <h4>Logical operators</h4>
      <p>Often you need to check more than one thing at once.</p>

      <p><strong><code>and</code></strong> — <em>both</em> sides must be True. You need a
      ticket <em>and</em> an ID to enter the concert.</p>
      <p><strong><code>or</code></strong> — only <em>one</em> side needs to be True. You may
      pay by cash <em>or</em> by card.</p>
      <p><strong><code>not</code></strong> — flips the answer over.</p>

      <svg class="fig" viewBox="0 0 700 180" role="img" aria-label="Truth tables for and, or, and not.">
        <text x="120" y="26" text-anchor="middle" class="lbl">and — both</text>
        <rect class="box" x="8" y="36" width="224" height="128" rx="7"/>
        <text x="30" y="62" class="mono" style="font-size:12px">True  and True  = True</text>
        <text x="30" y="86" class="mono" style="font-size:12px">True  and False = False</text>
        <text x="30" y="110" class="mono" style="font-size:12px">False and True  = False</text>
        <text x="30" y="134" class="mono" style="font-size:12px">False and False = False</text>

        <text x="350" y="26" text-anchor="middle" class="lbl">or — either</text>
        <rect class="box" x="238" y="36" width="224" height="128" rx="7"/>
        <text x="260" y="62" class="mono" style="font-size:12px">True  or True  = True</text>
        <text x="260" y="86" class="mono" style="font-size:12px">True  or False = True</text>
        <text x="260" y="110" class="mono" style="font-size:12px">False or True  = True</text>
        <text x="260" y="134" class="mono" style="font-size:12px">False or False = False</text>

        <text x="580" y="26" text-anchor="middle" class="lbl">not — flip</text>
        <rect class="box box--dark" x="468" y="36" width="224" height="128" rx="7"/>
        <text x="490" y="80" class="mono on-dark" style="font-size:12px">not True  = False</text>
        <text x="490" y="112" class="mono on-dark" style="font-size:12px">not False = True</text>
      </svg>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What is the final answer?</p>
        <pre><code>print((5 > 2) and (10 < 5))</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">True</button>
          <button data-o="1">False</button>
          <button data-o="2">An error</button>
        </div>
        <p class="w__why">The first half is True, but 10 is not less than 5, so the second half
        is False. <code>and</code> needs <em>both</em> sides to be True — so the whole thing is
        False.</p>
      </div>

      <h4>Identity — <code>is</code> and <code>is not</code></h4>
      <p>Think of identical twins. They look exactly the same, so they are <em>equal</em>. But
      they are not the <em>same person</em>.</p>
      <p><code>==</code> asks "do these look the same?". <code>is</code> asks "are these
      literally the same object in memory?".</p>
      <p>For now, the rule of thumb: use <code>==</code> for comparing values, and keep
      <code>is</code> for checking <code>None</code>, like <code>if winner is None:</code>.</p>

      <h4>Membership — <code>in</code> and <code>not in</code></h4>
      <p>You are at the door of a party with a guest list. You look at a name and check
      whether it is on the list.</p>
      <pre><code>name = "Batman"

print("Bat" in name)         # True
print("Joker" in name)       # False

fruits = ["Apple", "Mango"]
print("Mango" in fruits)     # True
print("Kiwi" not in fruits)  # True</code></pre>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">What is each expression's answer?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>18 &gt;= 21</code></button>
            <button data-pair="b"><code>100 == 100 and 50 != 40</code></button>
            <button data-pair="c"><code>False or True</code></button>
            <button data-pair="d"><code>not (5 &gt; 3)</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">True — or only needs one side</button>
            <button data-pair="a">False — 18 is not 21 or more</button>
            <button data-pair="d">False — it flips a True</button>
            <button data-pair="b">True — both sides are true</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Work out each side first, then apply the
        <code>and</code>, <code>or</code> or <code>not</code>.</p>
      </div>
    `,
    mcqs: [
      { q: "What is the difference between = and == ?",
        options: ["There is no difference",
                  "= checks equality, == creates a variable",
                  "= puts data into a variable, == asks whether two things are equal",
                  "== is only used for maths"],
        answer: 2,
        why: "One sign assigns, two signs ask a question. Mixing them up is the most common beginner mistake in every language that has both." },

      { q: "What is the answer to (5 > 2) and (10 < 5)?",
        options: ["True", "False", "10", "An error"],
        answer: 1,
        why: "The second half is false, and 'and' demands that both halves are true. So the whole expression is False." },

      { q: "You want to check whether the letter 'a' appears inside the word 'Apple'. Which operator?",
        options: ["is", "==", "in", "has"],
        answer: 2,
        why: "The membership operator, in. It works on text and on lists." },

      { q: "What does not False give?",
        options: ["False", "True", "None", "An error"],
        answer: 1,
        why: "not simply flips the answer over. not True gives False, and not False gives True." }
    ],
    tasks: [
      { id: "u1t22a", kind: "code",
        title: "Task 22.1 — The bouncer",
        brief: "Print the answer to the question: is 18 greater than or equal to 21? (It should print False.)",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "False" },
          { type: "sourceIncludes", value: ">=", message: "Use the >= operator" }
        ] },

      { id: "u1t22b", kind: "code",
        title: "Task 22.2 — Two checks at once",
        brief: "In one print statement, check whether 100 equals 100 AND 50 is different from 40.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "True" },
          { type: "sourceIncludes", value: "and", message: "Use the and operator" },
          { type: "sourceIncludes", value: "!=", message: "Use the != operator" }
        ] },

      { id: "u1t22c", kind: "code",
        title: "Task 22.3 — The guest list",
        brief: "Make a variable vowels holding the text aeiou. Print whether the letter e is in it, then print whether the letter z is NOT in it. Two lines, both should be True.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "True\nTrue" },
          { type: "sourceIncludes", value: "in ", message: "Use the in operator" },
          { type: "sourceIncludes", value: "not in", message: "Use not in for the second line" }
        ] }
    ]
  },

  /* ============================== TOPIC 23 ============================== */
  {
    id: "u1t23",
    title: "Operator Precedence",
    summary: "Who goes first at the crossroads — and the brackets that overrule everyone.",
    notebookLM: "",
    notes: `
      <h4>Bitwise operators — a quick look</h4>
      <p>Deep inside your computer everything is 1s and 0s. <strong>Bitwise operators</strong>
      let you reach in and flip those individual switches.</p>
      <p>The symbols are <code>&amp;</code>, <code>|</code>, <code>~</code>,
      <code>&lt;&lt;</code> and <code>&gt;&gt;</code>.</p>
      <div class="callout">
        <strong>You will almost never use these in first year.</strong> They belong to
        engineers writing code for hardware and robotics. Just know they exist, and do not
        confuse <code>&amp;</code> with <code>and</code>, or <code>|</code> with <code>or</code>.
      </div>

      <h4>The traffic light</h4>
      <p>Four cars reach a crossroads at the same moment. Who goes first? Without rules there
      is a crash.</p>
      <p>Maths has the same problem, and the same answer: <strong>an order of
      operations</strong>. You may know it as BODMAS. Python follows exactly the same rules.</p>

      <table>
        <tr><th>Order</th><th>What</th></tr>
        <tr><td>1st</td><td>Brackets <code>( )</code></td></tr>
        <tr><td>2nd</td><td>Powers <code>**</code></td></tr>
        <tr><td>3rd</td><td>Multiply <code>*</code>, divide <code>/</code>, floor <code>//</code>, modulus <code>%</code></td></tr>
        <tr><td>4th</td><td>Add <code>+</code> and subtract <code>-</code></td></tr>
        <tr><td>5th</td><td>Comparisons <code>&lt;</code> <code>&gt;</code> <code>==</code> <code>!=</code></td></tr>
        <tr><td>6th</td><td><code>not</code>, then <code>and</code>, then <code>or</code></td></tr>
      </table>

      <pre><code>print(10 + 5 * 2)      # 20, not 30</code></pre>
      <p>Python multiplies <code>5 * 2</code> first, getting 10, then adds the other 10. If it
      simply read left to right the answer would have been 30 — and that would be wrong.</p>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="Without brackets multiplication happens first; with brackets the addition happens first.">
        <text x="168" y="26" text-anchor="middle" class="lbl">No brackets</text>
        <rect class="box" x="8" y="38" width="320" height="118" rx="8"/>
        <text x="168" y="70" text-anchor="middle" class="mono" style="font-size:15px">10 + 5 * 2</text>
        <text x="168" y="98" text-anchor="middle" style="font-size:12px">multiply first → 10 + 10</text>
        <text x="168" y="130" text-anchor="middle" class="mono accent" style="font-size:17px">20</text>

        <text x="532" y="26" text-anchor="middle" class="lbl">With brackets</text>
        <rect x="372" y="38" width="320" height="118" rx="8" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.2"/>
        <text x="532" y="70" text-anchor="middle" class="mono" style="font-size:15px">(10 + 5) * 2</text>
        <text x="532" y="98" text-anchor="middle" style="font-size:12px">brackets first → 15 * 2</text>
        <text x="532" y="130" text-anchor="middle" class="mono accent" style="font-size:17px">30</text>
      </svg>

      <div class="callout">
        <strong>The professional habit.</strong> Experienced programmers add brackets even when
        the rules do not require them, just to make the meaning obvious to the next reader.
        <code>(a * b) + c</code> is never wrong, and never confusing.
      </div>

      <h4>Associativity — the tie-breaker</h4>
      <p>What if two operators have the same rank? <code>100 / 10 / 2</code> — division ties
      with division.</p>
      <p><strong>Almost everything reads left to right</strong>, like a book. So Python does
      <code>100 / 10</code> first, giving 10, then <code>10 / 2</code>, giving 5.0.</p>
      <p><strong>Powers are the exception</strong> — they read right to left.
      <code>2 ** 3 ** 2</code> is <code>2 ** 9</code>, which is 512, not 64.</p>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What appears?</p>
        <pre><code>print(100 / (10 + 10) * 2)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">10.0</button>
          <button data-o="1">2.5</button>
          <button data-o="2">250.0</button>
        </div>
        <p class="w__why">Brackets first: 10 + 10 = 20. Then left to right: 100 / 20 = 5.0,
        then 5.0 × 2 = 10.0. The decimal point is there because <code>/</code> always makes a
        float.</p>
      </div>

      <h4>Building bigger expressions</h4>
      <p>One small Lego brick is fine. Snap a hundred together and you have a castle.</p>
      <p>You can combine everything you have learnt into one long expression, and Python will
      patiently work through it using the traffic-light rules.</p>
      <pre><code>result = (5 + 5) >= 10 and (20 % 2) == 0

# step 1: brackets     → 10 >= 10 and 0 == 0
# step 2: comparisons  → True and True
# step 3: the and      → True</code></pre>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Same numbers, different brackets. Match each to its answer.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>2 + 3 * 4</code></button>
            <button data-pair="b"><code>(2 + 3) * 4</code></button>
            <button data-pair="c"><code>2 * 3 ** 2</code></button>
            <button data-pair="d"><code>(2 * 3) ** 2</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">36</button>
            <button data-pair="a">14</button>
            <button data-pair="c">18</button>
            <button data-pair="b">20</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Look at the last two closely. Without
        brackets the power runs first (3² = 9, then ×2 = 18). With brackets the multiply runs
        first (2×3 = 6, then squared = 36).</p>
      </div>
    `,
    mcqs: [
      { q: "What is the answer to 5 + 2 * 3?",
        options: ["21", "11", "10", "30"],
        answer: 1,
        why: "Multiplication comes before addition, so 2 * 3 = 6 happens first, then 5 + 6 = 11." },

      { q: "How do you force the addition to happen first in 5 + 2 * 3?",
        options: ["Use a bitwise operator",
                  "Put the addition in brackets: (5 + 2) * 3",
                  "Put a # next to it",
                  "You cannot change the order"],
        answer: 1,
        why: "Brackets always win. They sit at the very top of the order of operations." },

      { q: "What are bitwise operators mostly used for?",
        options: ["Making text bold",
                  "Building web pages",
                  "Low-level work with 1s and 0s, in hardware and robotics",
                  "Opening files"],
        answer: 2,
        why: "They flip individual bits. Very useful for engineers, and almost never needed in a first-year course." },

      { q: "What is 50 - 10 - 5?",
        options: ["45", "35", "55", "30"],
        answer: 1,
        why: "Same rank, so read left to right: 50 - 10 = 40, then 40 - 5 = 35." }
    ],
    tasks: [
      { id: "u1t23a", kind: "code",
        title: "Task 23.1 — Let the rules decide",
        brief: "Without using any brackets, write one print that multiplies 4 by 5 and then adds 10.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "30" },
          { type: "sourceRegex", pattern: "print\\([^()]*\\)", message: "Do not use brackets around the maths" }
        ] },

      { id: "u1t23b", kind: "code",
        title: "Task 23.2 — Break the rules",
        brief: "Same three numbers — 4, 5 and 10. Use brackets to force 5 + 10 to happen FIRST, then multiply that answer by 4.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "60" },
          { type: "sourceRegex", pattern: "\\([^()]*\\+[^()]*\\)", message: "Put the addition inside brackets" }
        ] },

      { id: "u1t23c", kind: "code",
        title: "Task 23.3 — The grand composition",
        brief: "In one print statement, check whether (10 * 2) is equal to 20 AND (50 / 2) is greater than 10.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "True" },
          { type: "sourceIncludes", value: "and", message: "Use the and operator" },
          { type: "sourceIncludes", value: "==", message: "Use == to compare" }
        ] }
    ]
  },

  /* ============================== TOPIC 24 ============================== */
  {
    id: "u1t24",
    title: "Built-in Number Tools",
    summary: "The pocket calculator that is always switched on. No import needed.",
    notebookLM: "",
    notes: `
      <h4>The pocket calculator</h4>
      <p>At a shop you do not need a supercomputer to add up your bill. A small calculator
      that adds, rounds and finds the biggest number is enough.</p>
      <p>Python has a handful of number tools that are <strong>always ready</strong>. You do
      not import anything. They simply work.</p>

      <h4>abs() — the distance</h4>
      <p>Walk 5 steps forward or 5 steps backward, and either way you walked 5 steps.
      <code>abs()</code> removes the minus sign and gives you the plain distance.</p>
      <pre><code>print(abs(-10))     # 10
print(abs(10))      # 10</code></pre>

      <h4>round() — paying with cash</h4>
      <p>Your bill is ₹4.99, so you think of it as ₹5.</p>
      <pre><code>print(round(4.6))       # 5
print(round(4.2))       # 4
print(round(3.14159, 2))# 3.14   ← keep 2 decimal places</code></pre>

      <h4>min() and max() — the winner and the loser</h4>
      <pre><code>print(max(10, 50, 5))    # 50
print(min(10, 50, 5))    # 5</code></pre>

      <h4>sum() — the shopping cart</h4>
      <p>Give it a <strong>list</strong> and it adds everything up. The square brackets are
      required.</p>
      <pre><code>print(sum([10, 20, 30]))    # 60</code></pre>

      <h4>pow() — power</h4>
      <p><code>pow(x, y)</code> means x to the power of y. It does exactly the same job as the
      <code>**</code> operator.</p>
      <pre><code>print(pow(3, 2))     # 9
print(3 ** 2)        # 9  — same answer</code></pre>

      <svg class="fig" viewBox="0 0 700 200" role="img" aria-label="Five built-in number tools with an example of each.">
        <rect class="box" x="8" y="34" width="216" height="66" rx="7"/>
        <text x="24" y="60" class="mono accent" style="font-size:13px">abs(-10)</text>
        <text x="24" y="84" class="mono" style="font-size:12.5px">→ 10</text>

        <rect class="box" x="242" y="34" width="216" height="66" rx="7"/>
        <text x="258" y="60" class="mono accent" style="font-size:13px">round(4.6)</text>
        <text x="258" y="84" class="mono" style="font-size:12.5px">→ 5</text>

        <rect class="box" x="476" y="34" width="216" height="66" rx="7"/>
        <text x="492" y="60" class="mono accent" style="font-size:13px">max(10, 50, 5)</text>
        <text x="492" y="84" class="mono" style="font-size:12.5px">→ 50</text>

        <rect class="box" x="8" y="110" width="216" height="66" rx="7"/>
        <text x="24" y="136" class="mono accent" style="font-size:13px">min(10, 50, 5)</text>
        <text x="24" y="160" class="mono" style="font-size:12.5px">→ 5</text>

        <rect class="box" x="242" y="110" width="216" height="66" rx="7"/>
        <text x="258" y="136" class="mono accent" style="font-size:13px">sum([10, 20, 30])</text>
        <text x="258" y="160" class="mono" style="font-size:12.5px">→ 60</text>

        <rect class="box" x="476" y="110" width="216" height="66" rx="7"/>
        <text x="492" y="136" class="mono accent" style="font-size:13px">pow(3, 2)</text>
        <text x="492" y="160" class="mono" style="font-size:12.5px">→ 9</text>
      </svg>

      <div class="callout">
        <strong>Watch the brackets on sum().</strong> <code>sum(10, 20, 30)</code> fails.
        It needs a list: <code>sum([10, 20, 30])</code>. <code>max</code> and <code>min</code>
        accept either form.
      </div>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What appears?</p>
        <pre><code>print(round(2.675, 2))</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">2.68</button>
          <button data-o="1">2.67</button>
          <button data-o="2">2.7</button>
        </div>
        <p class="w__why">A famous surprise. Computers store decimals in binary, and 2.675 is
        really stored as something a whisker below 2.675 — so it rounds down. You do not need
        to fix this now, but remember it exists when money is involved.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which tool does each job?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Find the top score in a group</button>
            <button data-pair="b">Turn -15 into 15</button>
            <button data-pair="c">Add up a shopping list of prices</button>
            <button data-pair="d">Turn 8.7 into 9</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c"><code>sum()</code></button>
            <button data-pair="a"><code>max()</code></button>
            <button data-pair="d"><code>round()</code></button>
            <button data-pair="b"><code>abs()</code></button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> None of these need an import — they are
        built into Python itself.</p>
      </div>
    `,
    mcqs: [
      { q: "Which tool finds the highest number in a group?",
        options: ["top()", "max()", "high()", "sum()"],
        answer: 1,
        why: "max() gives the biggest, min() gives the smallest. Both are built in." },

      { q: "What does round(8.7) give?",
        options: ["8.7", "8", "9", "An error"],
        answer: 2,
        why: "0.7 is more than halfway, so it rounds up to 9." },

      { q: "Why are abs(), max() and round() called \"built-in\"?",
        options: ["They only work indoors",
                  "They are built into the keyboard",
                  "Python always has them ready — no import needed",
                  "They are used to build websites"],
        answer: 2,
        why: "Unlike math.sqrt() or statistics.mean(), these need no import line at all." },

      { q: "Which is written correctly?",
        options: ["sum(10, 20, 30)", "sum([10, 20, 30])", "sum{10, 20, 30}", "sum = 10 + 20 + 30"],
        answer: 1,
        why: "sum() wants one list, so the numbers go inside square brackets." }
    ],
    tasks: [
      { id: "u1t24a", kind: "code",
        title: "Task 24.1 — The robot's distance",
        brief: "A robot moved -15 steps. Print the plain distance it travelled, as a positive number.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "15" },
          { type: "sourceIncludes", value: "abs(", message: "Use abs()" }
        ] },

      { id: "u1t24b", kind: "code",
        title: "Task 24.2 — The high score",
        brief: "Three scores are given. Print the highest one, then the lowest one, on two lines.",
        starter: 'score1 = 450\nscore2 = 900\nscore3 = 150\n',
        checks: [
          { type: "stdoutEquals", value: "900\n150" },
          { type: "sourceIncludes", value: "max(", message: "Use max()" },
          { type: "sourceIncludes", value: "min(", message: "Use min()" }
        ] },

      { id: "u1t24c", kind: "code",
        title: "Task 24.3 — The shopping cart",
        brief: "Make a list called cart holding 5, 10 and 15. Print the total using sum(). Then on the next line print the total rounded... it is already whole, so just print how many items are in the cart.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "30\n3" },
          { type: "sourceIncludes", value: "sum(", message: "Use sum()" },
          { type: "sourceIncludes", value: "len(", message: "Use len() for the item count" }
        ] },

      { id: "u1t24d", kind: "code",
        title: "Task 24.4 — Round the bill",
        brief: "A bill is 24.51. Print it rounded to the nearest whole number.",
        starter: 'bill = 24.51\n',
        checks: [
          { type: "stdoutEquals", value: "25" },
          { type: "sourceIncludes", value: "round(", message: "Use round()" }
        ] }
    ]
  },

  /* ============================== TOPIC 25 ============================== */
  {
    id: "u1t25",
    title: "The math Module",
    summary: "The scientific calculator. Square roots, and the two ways to round on purpose.",
    notebookLM: "",
    notes: `
      <h4>Upgrading the calculator</h4>
      <p>Last topic gave you a pocket calculator. Sometimes you need a scientific one — square
      roots, geometry, angles.</p>
      <p>Python keeps those in the <strong>math</strong> module. It is a heavy toolbox, so it
      stays shut until you ask for it:</p>
      <pre><code>import math</code></pre>
      <p>After that, every tool is <code>math.</code> followed by its name.</p>

      <h4>math.sqrt() — the square root</h4>
      <p>A square room has an area of 25 square metres. How long is one wall? Five metres.</p>
      <pre><code>import math
print(math.sqrt(25))      # 5.0
print(math.sqrt(81))      # 9.0</code></pre>
      <p>Notice it always gives a float — <code>5.0</code>, not <code>5</code>.</p>

      <h4>math.ceil() — always round UP</h4>
      <p>You worked out that you need 3.1 tins of paint. You cannot buy 0.1 of a tin. You must
      buy 4, or you run out.</p>
      <pre><code>print(math.ceil(3.1))     # 4
print(math.ceil(3.9))     # 4
print(math.ceil(3.0))     # 3</code></pre>

      <h4>math.floor() — always round DOWN</h4>
      <p>You have money for 3.9 slices of pizza. The shop will not give you 4. You get 3.</p>
      <pre><code>print(math.floor(3.9))    # 3
print(math.floor(3.1))    # 3</code></pre>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="ceil always rounds up, floor always rounds down, round goes to the nearest.">
        <text x="120" y="26" text-anchor="middle" class="lbl">math.ceil</text>
        <rect class="box" x="8" y="38" width="216" height="120" rx="8"/>
        <text x="116" y="70" text-anchor="middle" class="mono" style="font-size:13px">3.1 → 4</text>
        <text x="116" y="96" text-anchor="middle" class="mono" style="font-size:13px">3.9 → 4</text>
        <text x="116" y="130" text-anchor="middle" class="mono accent" style="font-size:12px">always UP</text>

        <text x="350" y="26" text-anchor="middle" class="lbl">math.floor</text>
        <rect class="box" x="242" y="38" width="216" height="120" rx="8"/>
        <text x="350" y="70" text-anchor="middle" class="mono" style="font-size:13px">3.1 → 3</text>
        <text x="350" y="96" text-anchor="middle" class="mono" style="font-size:13px">3.9 → 3</text>
        <text x="350" y="130" text-anchor="middle" class="mono accent" style="font-size:12px">always DOWN</text>

        <text x="580" y="26" text-anchor="middle" class="lbl">round</text>
        <rect class="box box--dark" x="476" y="38" width="216" height="120" rx="8"/>
        <text x="584" y="70" text-anchor="middle" class="mono on-dark" style="font-size:13px">3.1 → 3</text>
        <text x="584" y="96" text-anchor="middle" class="mono on-dark" style="font-size:13px">3.9 → 4</text>
        <text x="584" y="130" text-anchor="middle" class="mono accent" style="font-size:12px">to the NEAREST</text>
      </svg>

      <div class="callout">
        <strong>Three different jobs.</strong> <code>round()</code> goes to whichever side is
        closer. <code>ceil()</code> and <code>floor()</code> ignore closeness completely —
        one always goes up, the other always goes down. Choose by what the real situation
        needs, not by which number looks nicer.
      </div>

      <h4>The rest of the toolbox</h4>
      <table>
        <tr><th>Tool</th><th>What it does</th><th>Used for</th></tr>
        <tr><td><code>math.pi</code></td><td>3.14159… (no brackets — it is a value, not a tool)</td><td>Circles</td></tr>
        <tr><td><code>math.pow(3, 2)</code></td><td>3 to the power of 2</td><td>Same as <code>**</code></td></tr>
        <tr><td><code>math.log()</code></td><td>Logarithms</td><td>Earthquakes, sound levels</td></tr>
        <tr><td><code>math.sin()</code>, <code>math.cos()</code>, <code>math.tan()</code></td><td>Trigonometry</td><td>Angles — very common in game programming</td></tr>
      </table>

      <h4>Polynomials</h4>
      <p>A polynomial is just an expression with a variable and powers in it, like
      2x² + 3x + 1. Python needs no special tool — ordinary operators do the job.</p>
      <pre><code>x = 4
answer = 2 * (x ** 2) + (3 * x) + 1
print(answer)      # 45</code></pre>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">You need 5.01 tins of paint. Which tool gives you the number of tins to buy?</p>
        <div class="w-guess__opts">
          <button data-o="0">math.ceil — gives 6</button>
          <button data-o="1">math.floor — gives 5</button>
          <button data-o="2">round — gives 5</button>
        </div>
        <p class="w__why">Both <code>floor</code> and <code>round</code> give 5, and you would
        run out of paint with a tiny patch of wall left bare. Whenever running short is not an
        option, use <code>ceil</code>.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which tool for which real problem?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">How many buses for 130 students, 50 per bus?</button>
            <button data-pair="b">How long is one wall of a 144 m² square room?</button>
            <button data-pair="c">How many whole pizzas can I afford with 3.8 pizzas of money?</button>
            <button data-pair="d">What is the circumference of a circle?</button>
          </div>
          <div class="w-match__col">
            <button data-pair="b"><code>math.sqrt()</code></button>
            <button data-pair="d"><code>math.pi</code></button>
            <button data-pair="a"><code>math.ceil()</code></button>
            <button data-pair="c"><code>math.floor()</code></button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> The bus one matters: 130 ÷ 50 is 2.6
        buses, and you cannot send 0.6 of a bus — so you book 3.</p>
      </div>
    `,
    mcqs: [
      { q: "What must you write before using sqrt() or ceil()?",
        options: ["start math", "import math", "open calculator", "math.on()"],
        answer: 1,
        why: "import math, at the top of the file. It is part of the Standard Library, so nothing needs downloading." },

      { q: "What does math.ceil(8.2) give?",
        options: ["8.2", "8", "9", "8.5"],
        answer: 2,
        why: "ceil always rounds up, however small the decimal part is. Even 8.001 becomes 9." },

      { q: "Which tools are used in game programming to work out angles and rotation?",
        options: ["math.floor()", "math.sin() and math.cos()", "math.log()", "math.ceil()"],
        answer: 1,
        why: "Trigonometry. Every time a character turns or a bullet arcs through the air, sin and cos are doing the work." },

      { q: "What does math.sqrt(81) give?",
        options: ["9", "9.0", "81.0", "An error"],
        answer: 1,
        why: "9.0 — math.sqrt always returns a float, even when the answer is a whole number." }
    ],
    tasks: [
      { id: "u1t25a", kind: "code",
        title: "Task 25.1 — Measure the room",
        brief: "A square room is 81 square metres. Import math and print the length of one wall.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "9.0" },
          { type: "sourceIncludes", value: "math.sqrt", message: "Use math.sqrt()" }
        ] },

      { id: "u1t25b", kind: "code",
        title: "Task 25.2 — Paint tins and pizza slices",
        brief: "You need 5.01 tins of paint, and you can afford 3.9 slices of pizza. Print how many tins you must buy, then how many whole slices you get. Two lines.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "6\n3" },
          { type: "sourceIncludes", value: "math.ceil", message: "Use math.ceil() for the paint" },
          { type: "sourceIncludes", value: "math.floor", message: "Use math.floor() for the pizza" }
        ] },

      { id: "u1t25c", kind: "code",
        title: "Task 25.3 — Solve the polynomial",
        brief: "With x = 3, work out x squared plus 5 times x, and print the answer.",
        starter: 'x = 3\n',
        checks: [
          { type: "stdoutEquals", value: "24" },
          { type: "sourceIncludes", value: "x", message: "Use the variable x in your calculation" }
        ] }
    ]
  },

  /* ============================== TOPIC 26 ============================== */
  {
    id: "u1t26",
    title: "The statistics Module",
    summary: "Turning a pile of numbers into one sentence a human can understand.",
    notebookLM: "",
    notes: `
      <h4>Making sense of a crowd</h4>
      <p>A teacher has the marks of 100 students. Staring at 100 numbers tells you nothing.
      What she wants to know is: what was the average? What was the most common mark? Were the
      students all close together, or all over the place?</p>
      <p>That is <strong>statistics</strong> — squeezing a big pile of data into a few numbers
      a human can hold in their head.</p>

      <h4>The three Ms</h4>
      <p>Take these five marks: <code>50, 70, 70, 80, 100</code></p>

      <p><strong>Mean — the average.</strong> Add them all, divide by how many there are.
      50+70+70+80+100 = 370, divided by 5 = <strong>74</strong>.</p>

      <p><strong>Median — the middle.</strong> Line everyone up in order and point at the
      person standing exactly in the middle. Here that is <strong>70</strong>.</p>

      <p><strong>Mode — the most popular.</strong> Which value appears most often? 70 appears
      twice, everything else once. So the mode is <strong>70</strong>.</p>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="Five marks lined up in order, showing the mean, median and mode.">
        <text x="350" y="26" text-anchor="middle" class="lbl">50   70   70   80   100</text>

        <rect class="box" x="8" y="42" width="216" height="112" rx="8"/>
        <text x="116" y="72" text-anchor="middle" style="font-size:13.5px;font-weight:700">Mean</text>
        <text x="116" y="98" text-anchor="middle" style="font-size:12px">370 ÷ 5</text>
        <text x="116" y="128" text-anchor="middle" class="mono accent" style="font-size:17px">74</text>

        <rect class="box" x="242" y="42" width="216" height="112" rx="8"/>
        <text x="350" y="72" text-anchor="middle" style="font-size:13.5px;font-weight:700">Median</text>
        <text x="350" y="98" text-anchor="middle" style="font-size:12px">the one in the middle</text>
        <text x="350" y="128" text-anchor="middle" class="mono accent" style="font-size:17px">70</text>

        <rect class="box" x="476" y="42" width="216" height="112" rx="8"/>
        <text x="584" y="72" text-anchor="middle" style="font-size:13.5px;font-weight:700">Mode</text>
        <text x="584" y="98" text-anchor="middle" style="font-size:12px">appears most often</text>
        <text x="584" y="128" text-anchor="middle" class="mono accent" style="font-size:17px">70</text>
      </svg>

      <h4>Spread — the rollercoaster and the train</h4>
      <p>Two classes sit the same test. Both have an average of 70%.</p>
      <ul>
        <li><strong>Class A:</strong> every single student scored exactly 70.</li>
        <li><strong>Class B:</strong> half scored 100, half scored 40.</li>
      </ul>
      <p>The average is identical, but the classes are nothing alike. <strong>Variance</strong>
      and <strong>standard deviation</strong> measure how spread out the numbers are.</p>
      <p>A <em>low</em> standard deviation means everyone is close to the average, like the
      train. A <em>high</em> one means the numbers are wild, like the rollercoaster.</p>

      <div class="callout">
        <strong>Why a teacher cares.</strong> A high standard deviation means the class has
        split into two groups — some students racing ahead while others are lost. The average
        alone would have hidden that completely.
      </div>

      <h4>Doing it in Python</h4>
      <pre><code>import statistics

grades = [80, 90, 90, 100]

print(statistics.mean(grades))     # 90
print(statistics.median(grades))   # 90.0
print(statistics.mode(grades))     # 90
print(statistics.stdev(grades))    # 8.16...</code></pre>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">Two classes both average 70%. Class A has a standard deviation of 2.
        Class B has 30. What does that tell the teacher?</p>
        <div class="w-guess__opts">
          <button data-o="0">Class B did better</button>
          <button data-o="1">Class A did better</button>
          <button data-o="2">Class B is split — some very high, some very low</button>
        </div>
        <p class="w__why">Neither class "did better" — the averages are the same. But Class B's
        marks are scattered far from that average, so it holds two very different groups of
        students who need very different help.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">For the list <code>[8, 9, 9, 10, 12]</code>, match each tool to its answer.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>statistics.mean()</code></button>
            <button data-pair="b"><code>statistics.median()</code></button>
            <button data-pair="c"><code>statistics.mode()</code></button>
            <button data-pair="d"><code>len()</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">9 — it appears twice</button>
            <button data-pair="a">9.6 — the average</button>
            <button data-pair="d">5 — how many numbers there are</button>
            <button data-pair="b">9 — the one in the middle</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Notice that mean, median and mode can all
        be different numbers — which is exactly why you need all three.</p>
      </div>

      <div class="callout">
        <strong>This is the end of Unit 1.</strong> Finish the tasks below and the unit test
        opens: 30 questions, 60 marks, 45 minutes. After that comes your project.
      </div>
    `,
    mcqs: [
      { q: "Which tool finds the average?",
        options: ["statistics.middle()", "statistics.mean()", "statistics.mode()", "statistics.average()"],
        answer: 1,
        why: "mean is the proper name for the average. There is no tool called average() in Python." },

      { q: "What does the Mode tell you?",
        options: ["The highest number", "The number in the middle",
                  "The number that appears most often", "The total of all numbers"],
        answer: 2,
        why: "Most frequent. If twenty students wear size 9 and five wear size 10, the mode is 9." },

      { q: "A set of marks has a very HIGH standard deviation. What does that mean?",
        options: ["Every mark is the same",
                  "The marks are spread far away from the average",
                  "The computer made a mistake",
                  "The average is zero"],
        answer: 1,
        why: "High spread means the numbers are scattered. Two classes can share an average and be nothing alike." },

      { q: "For the list [8, 9, 9, 10, 12], what is the median?",
        options: ["9", "9.6", "12", "5"],
        answer: 0,
        why: "The list is already in order and there are five numbers, so the middle one is the third: 9. The mean is 9.6 — a different answer." }
    ],
    tasks: [
      { id: "u1t26a", kind: "code",
        title: "Task 26.1 — Shoe sizes",
        brief: "Make a list called shoe_sizes holding 8, 9, 9, 10, 12. Import statistics and print the mean, then the median, then the mode — three lines.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "9.6\n9\n9" },
          { type: "sourceIncludes", value: "import statistics", message: "Import the statistics module" },
          { type: "sourceIncludes", value: "shoe_sizes", message: "Name your list shoe_sizes" }
        ] },

      { id: "u1t26b", kind: "code",
        title: "Task 26.2 — The class average",
        brief: "Five marks are given. Print the average, then the highest, then the lowest — three lines. Use statistics for the average and built-in tools for the other two.",
        starter: 'marks = [50, 70, 70, 80, 100]\n',
        checks: [
          { type: "stdoutEquals", value: "74\n100\n50" },
          { type: "sourceIncludes", value: "mean(", message: "Use statistics.mean()" },
          { type: "sourceIncludes", value: "max(", message: "Use max()" },
          { type: "sourceIncludes", value: "min(", message: "Use min()" }
        ] },

      { id: "u1t26c", kind: "code",
        title: "Task 26.3 — Put it all together",
        brief: "Using the marks list, print exactly one line with an f-string: The class of 5 students averaged 74",
        starter: 'import statistics\nmarks = [50, 70, 70, 80, 100]\n',
        checks: [
          { type: "stdoutEquals", value: "The class of 5 students averaged 74" },
          { type: "sourceRegex", pattern: 'f"|f\'', message: "Use an f-string" },
          { type: "sourceIncludes", value: "len(", message: "Work out the 5 with len()" },
          { type: "sourceIncludes", value: "mean(", message: "Work out the 74 with statistics.mean()" }
        ] }
    ]
  }

  ],

  /* ============================== UNIT TEST ==============================
     30 questions, 2 marks each, 60 marks total. Opens once every topic is
     complete. No feedback until the paper is submitted. */
  test: {
    title: "Unit 1 Test",
    marksPerQuestion: 2,
    durationMinutes: 45,
    questions: [
      { q: "Who created Python?",
        options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"], answer: 1 },

      { q: "The name \"Python\" comes from:",
        options: ["The snake", "A British comedy show", "An acronym", "A Greek god"], answer: 1 },

      { q: "Python was first released to the public in:",
        options: ["1989", "1991", "1994", "2000"], answer: 1 },

      { q: "\"High-level language\" means:",
        options: ["It needs an expensive computer",
                  "Its code is close to human language",
                  "It is written in 1s and 0s",
                  "It only runs on servers"], answer: 1 },

      { q: "Which is a real limitation of Python?",
        options: ["It costs money", "It is hard to read",
                  "It runs slower than compiled languages like C++", "It has no libraries"], answer: 2 },

      { q: "An interpreted language:",
        options: ["Translates the whole program before running it",
                  "Runs the code line by line as it goes",
                  "Cannot report errors",
                  "Must be compiled first"], answer: 1 },

      { q: "Support for Python 2 officially ended on:",
        options: ["1 January 2018", "1 January 2020", "31 December 2015", "1 January 2022"], answer: 1 },

      { q: "The most important step when installing Python on Windows is:",
        options: ["Paying the fee", "Ticking \"Add python.exe to PATH\"",
                  "Restarting the router", "Installing VS Code first"], answer: 1 },

      { q: "PATH is:",
        options: ["A desktop shortcut",
                  "A list of folders the computer searches when you type a command",
                  "A speed setting", "An internet connection"], answer: 1 },

      { q: "Which command checks the installed version?",
        options: ["show python", "python --version", "run python", "start python"], answer: 1 },

      { q: "IDLE stands for:",
        options: ["Integrated Development and Learning Environment",
                  "Interactive Data Logic Engine",
                  "Internal Debugging Language Editor",
                  "Integrated Design Layout Editor"], answer: 0 },

      { q: "Who publishes the official Python extension for VS Code?",
        options: ["Google", "Microsoft", "Apple", "The Python Foundation"], answer: 1 },

      { q: "Which tool is best for mixing text, code and charts in one document?",
        options: ["IDLE", "Command Prompt", "Jupyter Notebook", "Notepad"], answer: 2 },

      { q: "PIP is best compared to:",
        options: ["An App Store", "Antivirus software", "A code editor", "A compiler"], answer: 0 },

      { q: "Which command installs a package called requests?",
        options: ["download requests", "pip install requests",
                  "python get requests", "import requests"], answer: 1 },

      { q: "What is the purpose of requirements.txt?",
        options: ["Listing errors",
                  "A recipe card of every package the project needs",
                  "Storing passwords", "Holding your code"], answer: 1 },

      { q: "How do you know a virtual environment is active?",
        options: ["The screen turns green",
                  "Its name appears in brackets on the command line",
                  "Python prints a welcome message", "A snake icon appears"], answer: 1 },

      { q: "A Python source file must end with:",
        options: [".txt", ".py", ".python", ".script"], answer: 1 },

      { q: "Which symbol starts a single-line comment?",
        options: ["//", "#", "/*", "--"], answer: 1 },

      { q: "Why does Python use indentation?",
        options: ["Only to look tidy",
                  "To show which lines belong inside a block",
                  "To make code run faster", "It is optional decoration"], answer: 1 },

      { q: "When Python prints a big red error, where do you look first?",
        options: ["The top line", "The bottom line, which names the error and line number",
                  "The middle", "The file name only"], answer: 1 },

      { q: "Which function gives a written explanation of a tool?",
        options: ["dir()", "help()", "type()", "print()"], answer: 1 },

      { q: "Which of these is a VALID identifier?",
        options: ["1st_score", "my score", "player_score_1", "user-name"], answer: 2 },

      { q: "What does dynamic typing mean?",
        options: ["You must type quickly",
                  "A variable can hold a number now and text later",
                  "Variables can never change", "Types must be declared first"], answer: 1 },

      { q: "What type is the value \"100\" (with quotes)?",
        options: ["int", "float", "str", "bool"], answer: 2 },

      { q: "What does input() always return?",
        options: ["Integer", "Float", "String", "Boolean"], answer: 2 },

      { q: "What does print(\"A\", \"B\", sep=\"-\") display?",
        options: ["A B", "A-B", "AB", "A,B"], answer: 1 },

      { q: "Which is the modern way to build a sentence from variables?",
        options: ["The % method", "The .format() method", "f-strings", "The join() method"], answer: 2 },

      { q: "What is 17 % 5?",
        options: ["3", "2", "3.4", "12"], answer: 1 },

      { q: "What is 5 + 2 * 3?",
        options: ["21", "11", "10", "30"], answer: 1 }
    ]
  },

  /* ============================= UNIT PROJECT =============================
     Opens once the test is passed. Submitting the link completes the unit. */
  project: {
    title: "Unit 1 Project — Student Report Card",
    summary: "One Python program that uses everything from Unit 1. Put it on GitHub or Drive and submit the link.",
    brief: `
      <h4>What to build</h4>
      <p>One Python file called <code>report_card.py</code>. When it runs, it prints a neat
      report card for one student to the screen.</p>
      <p>No <code>input()</code> is needed — put the marks in the file yourself. This project
      is about writing clean, correct, well-commented code that uses everything you learnt in
      this unit.</p>

      <h4>What it must contain</h4>
      <ol>
        <li>A <strong>docstring</strong> at the very top (three double quotes) holding your
        name, roll number and what the file does.</li>

        <li>At least <strong>four single-line comments</strong> starting with <code>#</code>,
        each explaining <em>why</em> a section exists — not repeating what the code obviously does.</li>

        <li>A <strong>constant</strong> named in ALL CAPITALS, such as
        <code>COLLEGE_NAME</code> or <code>PASS_MARK</code>.</li>

        <li>Variables for the student's <strong>name</strong> (a string), <strong>roll
        number</strong> (a string), and <strong>age</strong> (an integer).</li>

        <li>A <strong>list</strong> holding marks for at least <strong>five subjects</strong>.</li>

        <li>Use <code>sum()</code> and <code>len()</code> to work out the <strong>total</strong>
        and the <strong>average</strong>.</li>

        <li>Use <code>max()</code> and <code>min()</code> to show the <strong>best and worst</strong> mark.</li>

        <li>Use <code>statistics.mean()</code> <em>or</em> <code>statistics.median()</code> —
        which means an <code>import</code> line at the top.</li>

        <li>Use <code>round()</code> so the average shows at most 2 decimal places.</li>

        <li>Use a <strong>comparison operator</strong> to decide Pass or Fail against your
        constant, and print the result.</li>

        <li>Print at least one line using an <strong>f-string</strong>.</li>

        <li>Use <code>sep=</code> or <code>end=</code> at least once.</li>

        <li>A border made of repeated characters, and <strong>twelve or more lines of
        output</strong> in total.</li>

        <li>It must run on Python 3 with <strong>no errors at all</strong>.</li>
      </ol>

      <h4>Roughly what the output should look like</h4>
      <pre><code>========================================
       SHRI KHUSHAL DAS UNIVERSITY
              REPORT CARD
========================================
 Name    : Ananya Verma
 Roll No : 2026_CS_02
 Age     : 18
----------------------------------------
 Marks   : 78, 85, 62, 91, 70
 Total   : 386
 Average : 77.2
 Highest : 91
 Lowest  : 62
----------------------------------------
 Result  : PASS
========================================</code></pre>

      <h4>How it will be marked</h4>
      <ul>
        <li><strong>It runs with no errors</strong> — checked first, before anything else.</li>
        <li>Every item on the list above is present.</li>
        <li>Comments explain reasons, not the obvious.</li>
        <li>Names follow snake_case, and the constant is in capitals.</li>
        <li>The output is tidy and lines up neatly.</li>
      </ul>

      <div class="callout">
        <strong>Test it before you submit.</strong> Run the file on your own machine and read
        the output line by line. A program that crashes scores nothing, however good the code
        looks.
      </div>

      <h4>How to submit</h4>
      <p>Push the file to a <strong>public GitHub repository</strong>, or upload it to
      <strong>Google Drive</strong> with sharing set to <em>Anyone with the link</em>. Paste
      that link below.</p>
      <p>Open your own link in a private browsing window first. If it does not open there, it
      will not open for your teacher either — and that counts as not submitted.</p>
    `
  }
}
];
