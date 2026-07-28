/* ========================================================================== 
   AbhyasLab — FINAL UNIT 1 COURSE CONTENT
   26 chapters + interactive notes + quizzes + coding practice + final test
   ========================================================================== */

const COURSE = [
{
  unit: "Unit 1",
  unitTitle: "Introduction, Python Environment and Programming Basics",
  topics: [

  /* ====================== CHAPTER 1 ====================== */
  {
    id: "u1t01",
    title: "Welcome to Python",
    summary: "Meet Python, its creator, its name, and the places where people use it.",
    notebookLM: "",
    notes: `
      <h4>Python is a friendly way to talk to a computer</h4>
      <p>A computer understands tiny electrical signals. People do not want to write millions of
      <code>1</code>s and <code>0</code>s. Python gives us simple words and symbols instead.</p>
      <p>Think of Python as a <strong>translator</strong>. You write an easy instruction. Python turns
      it into work the computer can do.</p>

      <svg class="fig" viewBox="0 0 700 205" role="img" aria-label="A student writes simple Python code, the Python interpreter translates it, and the computer shows output.">
        <rect class="box" x="12" y="52" width="190" height="92" rx="10"/>
        <text x="107" y="82" text-anchor="middle" class="lbl">Student writes</text>
        <text x="107" y="116" text-anchor="middle" class="mono">print(&quot;Hello&quot;)</text>
        <path class="arrow" d="M214 98 h78"/><path class="accent" d="M304 98 l-14 -8 v16 z"/>
        <rect class="box box--dark" x="312" y="52" width="160" height="92" rx="10"/>
        <text x="392" y="82" text-anchor="middle" class="lbl on-dark">Python</text>
        <text x="392" y="116" text-anchor="middle" class="mono accent">translates</text>
        <path class="arrow" d="M484 98 h78"/><path class="accent" d="M574 98 l-14 -8 v16 z"/>
        <rect class="box" x="582" y="52" width="106" height="92" rx="10"/>
        <text x="635" y="82" text-anchor="middle" class="lbl">Screen</text>
        <text x="635" y="116" text-anchor="middle" class="mono">Hello</text>
        <circle cx="392" cy="170" r="7" class="accent"><animate attributeName="cx" values="322;462;322" dur="3s" repeatCount="indefinite"/></circle>
        <text x="350" y="198" text-anchor="middle" class="figcap">Simple code moves through the interpreter and becomes output.</text>
      </svg>

      <h4>Who made Python?</h4>
      <p><strong>Guido van Rossum</strong> created Python. The first public release came in
      <strong>1991</strong>.</p>
      <p>The name did not come from the snake. Guido liked a British comedy show called
      <em>Monty Python's Flying Circus</em>. He wanted a short and memorable name.</p>

      <div class="w-time">
        <div class="w-time__i"><b>1989</b><span>Guido starts working on Python.</span></div>
        <div class="w-time__i"><b>1991</b><span>Python is released to the public.</span></div>
        <div class="w-time__i"><b>Today</b><span>Students, scientists, teachers and companies use it.</span></div>
      </div>

      <h4>Where is Python used?</h4>
      <ul>
        <li><strong>Websites:</strong> Python can run hidden work behind a website.</li>
        <li><strong>Artificial intelligence:</strong> It helps computers learn from data.</li>
        <li><strong>Automation:</strong> It can repeat boring computer work.</li>
        <li><strong>Science and space:</strong> It can study large amounts of information.</li>
        <li><strong>Education:</strong> Its simple style makes it a good first language.</li>
      </ul>

      <div class="w">
        <span class="w__k">Tap to reveal</span>
        <div class="w-flip">
          <button class="w-flip__card"><span class="w-flip__front">High-level language</span><span class="w-flip__back">A language closer to human words than machine code.</span></button>
          <button class="w-flip__card"><span class="w-flip__front">General-purpose language</span><span class="w-flip__back">A language that can do many kinds of work.</span></button>
          <button class="w-flip__card"><span class="w-flip__front">Python's creator</span><span class="w-flip__back">Guido van Rossum.</span></button>
        </div>
      </div>

      <div class="callout"><strong>Mini activity:</strong> Think of one boring task on a computer.
      Write one sentence about how a program could make that task easier.</div>
    `,
    mcqs: [
      { q:"Why is Python called a high-level language?", options:["It only runs on costly computers","It looks closer to human language","It uses only 1s and 0s","It is used only by experts"], answer:1, why:"High-level code is easier for people to read because it hides most machine details." },
      { q:"Who created Python?", options:["Guido van Rossum","Dennis Ritchie","James Gosling","Tim Berners-Lee"], answer:0, why:"Guido van Rossum created Python and released it publicly in 1991." },
      { q:"Where did the name Python come from?", options:["A snake book","A British comedy show","A space mission","A maths formula"], answer:1, why:"The name came from Monty Python's Flying Circus, not from the snake." },
      { q:"Which is a common use of Python?", options:["AI and data work","Only drawing pictures","Only typing documents","Only making phone calls"], answer:0, why:"Python is used for AI, data, websites, automation and science." }
    ],
    tasks: [
      { id:"u1t01a", kind:"confirm", title:"Chapter 1 mini activity", brief:"Complete this after reading the chapter.", label:"I can name Python's creator, release year, and two real-world uses of Python." }
    ]
  },

  /* ====================== CHAPTER 2 ====================== */
  {
    id: "u1t02",
    title: "Why Python Is Popular",
    summary: "Learn Python's features, advantages, limits, and the difference between Python 2 and 3.",
    notebookLM: "",
    notes: `
      <h4>Python removes unnecessary difficulty</h4>
      <p>Python uses clear words such as <code>and</code>, <code>or</code> and <code>not</code>.
      It often needs fewer lines than older languages.</p>

      <svg class="fig" viewBox="0 0 700 230" role="img" aria-label="A Python toolbox already contains useful tools, showing the batteries included idea.">
        <rect class="box" x="70" y="72" width="560" height="120" rx="14"/>
        <rect x="90" y="40" width="520" height="52" rx="10" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.4"/>
        <text x="350" y="73" text-anchor="middle" style="font-size:22px;font-weight:700">PYTHON TOOLBOX</text>
        <rect class="box box--dark" x="105" y="112" width="110" height="52" rx="8"/><text x="160" y="143" text-anchor="middle" class="on-dark">math</text>
        <rect class="box box--dark" x="240" y="112" width="110" height="52" rx="8"/><text x="295" y="143" text-anchor="middle" class="on-dark">files</text>
        <rect class="box box--dark" x="375" y="112" width="110" height="52" rx="8"/><text x="430" y="143" text-anchor="middle" class="on-dark">dates</text>
        <rect class="box box--dark" x="510" y="112" width="85" height="52" rx="8"/><text x="552" y="143" text-anchor="middle" class="on-dark">random</text>
        <text x="350" y="220" text-anchor="middle" class="figcap">“Batteries included” means useful tools arrive with Python.</text>
      </svg>

      <h4>Important features</h4>
      <ul>
        <li><strong>Easy to read:</strong> code often looks like simple English.</li>
        <li><strong>Batteries included:</strong> Python brings a large standard library.</li>
        <li><strong>Free and open source:</strong> anyone can use it without paying.</li>
        <li><strong>Large community:</strong> many people share help and packages.</li>
        <li><strong>Less code:</strong> a small program can still do useful work.</li>
      </ul>

      <h4>Interpreted and compiled languages</h4>
      <p>A compiled language is like translating a full book before giving it to the reader.
      An interpreted language is like a live translator who works one line at a time.</p>
      <table>
        <tr><th>Point</th><th>Compiled</th><th>Interpreted</th></tr>
        <tr><td>Translation</td><td>Whole program first</td><td>Runs step by step</td></tr>
        <tr><td>Speed</td><td>Usually faster</td><td>Usually slower</td></tr>
        <tr><td>Error appears</td><td>Often before running</td><td>When the line is reached</td></tr>
      </table>

      <div class="w w-match">
        <span class="w__k">Feature match game</span><p class="w__q">Match each idea with its meaning.</p>
        <div class="w-match__grid">
          <div class="w-match__col"><button data-pair="a">Open source</button><button data-pair="b">Interpreted</button><button data-pair="c">Batteries included</button><button data-pair="d">Large community</button></div>
          <div class="w-match__col"><button data-pair="c">Many built-in tools</button><button data-pair="a">Free to use and improve</button><button data-pair="d">Many people can help</button><button data-pair="b">Runs code step by step</button></div>
        </div><p class="w__why">These ideas explain why Python is friendly for beginners.</p>
      </div>

      <h4>Python also has limits</h4>
      <p>Python is not always the fastest language. It is also not the usual first choice for native
      Android or iPhone applications. A good programmer chooses a language for the job.</p>

      <h4>Python 2 and Python 3</h4>
      <p>Python 2 is the old family. Its official support ended in 2020. Python 3 is the modern
      family used in this course. Old Python 2 code may need changes before it works in Python 3.</p>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Choose the better tool</span><p class="w__q">A medical device needs the smallest possible delay. Speed matters more than easy code. Which choice is more suitable?</p>
        <div class="w-guess__opts"><button data-o="0">Any interpreted language</button><button data-o="1">A fast compiled language</button><button data-o="2">A word processor</button></div>
        <p class="w__why">A compiled language is often chosen when very low delay is the main goal.</p>
      </div>

      <div class="callout"><strong>Mini activity:</strong> Make two columns. Write three Python
      advantages on the left and two limitations on the right.</div>
    `,
    mcqs: [
      { q:"What does 'batteries included' mean?", options:["Python needs real batteries","Python has many built-in tools","Python runs only on laptops","Python cannot use packages"], answer:1, why:"Python includes a large standard library." },
      { q:"How does an interpreted language usually run code?", options:["One step at a time","Only after printing a book","Without reading code","Only on mobile phones"], answer:0, why:"An interpreter reads and runs code step by step." },
      { q:"Which is a limitation of Python?", options:["It costs a lot","It has no community","It can be slower than compiled languages","It cannot print text"], answer:2, why:"Python is easy to write, but pure Python can run more slowly than compiled code." },
      { q:"Which version should new learners use?", options:["Python 1","Python 2","Python 3","Every version is identical"], answer:2, why:"Python 3 is used for modern learning and development." }
    ],
    tasks: [
      { id:"u1t02a", kind:"confirm", title:"Chapter 2 decision card", brief:"Complete the advantages and limits activity, then confirm.", label:"I wrote three advantages, two limitations, and explained why this course uses Python 3." }
    ]
  },

  /* ====================== CHAPTER 3 ====================== */
  {
    id: "u1t03",
    title: "Install Python and Understand PATH",
    summary: "Install Python on Windows or macOS, add it to PATH, and check the version.",
    notebookLM: "",
    notes: `
      <h4>Python is the engine</h4>
      <p>Before you write programs, your computer needs the Python interpreter. Download it from
      <code>python.org/downloads</code>.</p>

      <svg class="fig" viewBox="0 0 700 215" role="img" aria-label="The operating system searches folders in PATH until it finds Python.">
        <rect class="box box--dark" x="12" y="70" width="150" height="74" rx="8"/><text x="87" y="101" text-anchor="middle" class="mono on-dark">python</text><text x="87" y="126" text-anchor="middle" class="lbl on-dark">command</text>
        <path class="arrow" d="M174 107 h48"/><path class="accent" d="M234 107 l-13 -7 v14 z"/>
        <rect class="box" x="242" y="28" width="430" height="38" rx="7"/><text x="260" y="52" class="mono">1. C:\\Windows</text><text x="648" y="52" text-anchor="end">not here</text>
        <rect class="box" x="242" y="78" width="430" height="38" rx="7"/><text x="260" y="102" class="mono">2. C:\\Program Files</text><text x="648" y="102" text-anchor="end">not here</text>
        <rect x="242" y="128" width="430" height="38" rx="7" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.4"/><text x="260" y="152" class="mono">3. C:\\Python313</text><text x="648" y="152" text-anchor="end" class="accent">found</text>
        <circle cx="260" cy="188" r="6" class="accent"><animate attributeName="cx" values="260;650;260" dur="4s" repeatCount="indefinite"/></circle>
        <text x="457" y="210" text-anchor="middle" class="figcap">PATH is the map that tells the system where programs live.</text>
      </svg>

      <h4>Windows steps</h4>
      <ol><li>Open <code>python.org/downloads</code>.</li><li>Download Python 3.</li><li>Open the installer.</li><li><strong>Tick “Add python.exe to PATH”.</strong></li><li>Click <strong>Install Now</strong>.</li></ol>
      <h4>macOS steps</h4>
      <ol><li>Download the macOS <code>.pkg</code> file.</li><li>Open it and follow the screens.</li><li>Use your password or Touch ID if asked.</li></ol>

      <h4>Check the installation</h4>
      <pre><code>python --version</code></pre>
      <p>Some Mac and Linux systems use <code>python3 --version</code>. A result such as
      <code>Python 3.13.1</code> means the terminal can find Python.</p>

      <div class="w w-spot"><span class="w__k">Installation detective</span><p class="w__q">Which forgotten step often causes “python is not recognized”?</p>
        <div class="w-spot__line"><button>Download</button><button data-bad>Skip PATH</button><button>Install</button><button>Check version</button></div>
        <p class="w__why">Python may be installed, but the terminal cannot find it when its folder is missing from PATH.</p>
      </div>
      <div class="callout"><strong>Mini activity:</strong> Write your exact Python version and whether your command was <code>python</code> or <code>python3</code>.</div>
    `,
    mcqs: [
      { q:"What is the most important Windows installer checkbox?", options:["Create a game","Add python.exe to PATH","Delete old files","Use dark mode"], answer:1, why:"The PATH checkbox lets the terminal find Python." },
      { q:"What does PATH do?", options:["Stores photos","Lists folders where the system searches for programs","Makes code faster","Connects Python to Wi-Fi"], answer:1, why:"PATH is a list of folders checked when you type a command." },
      { q:"Which command checks the Python version?", options:["python --version","python start","show python","version --python"], answer:0, why:"The standard check is python --version." },
      { q:"What does a visible Python 3 version number mean?", options:["The installation command works","Python was deleted","The internet is off","VS Code is installed"], answer:0, why:"The terminal can find and start Python." }
    ],
    tasks: [
      { id:"u1t03a", kind:"confirm", title:"Setup check — Verify Python", brief:"Do this on your own computer.", label:"I ran <code>python --version</code> or <code>python3 --version</code> and saw a Python 3 version." }
    ]
  },

  /* ====================== CHAPTER 4 ====================== */
  {
    id: "u1t04",
    title: "IDLE, VS Code and Jupyter Notebook",
    summary: "Choose a place to write Python and install the official VS Code Python extension.",
    notebookLM: "",
    notes: `
      <h4>A code editor is your work table</h4>
      <p>Python is the engine. A code editor is the place where you write, save and run instructions.</p>
      <svg class="fig" viewBox="0 0 700 235" role="img" aria-label="IDLE is for quick tests, VS Code is for full projects, and Jupyter mixes code with notes and charts.">
        <rect class="box" x="20" y="50" width="200" height="130" rx="10"/><text x="120" y="80" text-anchor="middle" style="font-weight:700">IDLE</text><text x="120" y="112" text-anchor="middle" class="mono">&gt;&gt;&gt; 5 + 10</text><text x="120" y="139" text-anchor="middle" class="mono accent">15</text><text x="120" y="204" text-anchor="middle" class="figcap">Quick and simple</text>
        <rect class="box box--dark" x="250" y="50" width="200" height="130" rx="10"/><text x="350" y="80" text-anchor="middle" class="on-dark" style="font-weight:700">VS Code</text><path class="good" d="M285 105 h120 M285 126 h90 M285 147 h110"/><text x="350" y="204" text-anchor="middle" class="figcap">Full projects</text>
        <rect class="box" x="480" y="50" width="200" height="130" rx="10"/><text x="580" y="80" text-anchor="middle" style="font-weight:700">Jupyter</text><rect x="515" y="96" width="130" height="25" rx="5" fill="rgba(242,160,61,.16)"/><rect x="515" y="132" width="130" height="25" rx="5" fill="rgba(22,157,147,.12)"/><text x="580" y="204" text-anchor="middle" class="figcap">Notes + code + charts</text>
      </svg>

      <h4>IDLE</h4><p>IDLE comes with many Python installations. It has a shell for quick commands and an editor for <code>.py</code> files.</p>
      <h4>Visual Studio Code</h4><ol><li>Download VS Code.</li><li>Open Extensions.</li><li>Search for <strong>Python</strong>.</li><li>Install the extension published by <strong>Microsoft</strong>.</li></ol>
      <p>The extension adds colours, run tools, suggestions and debugging help.</p>
      <h4>Jupyter Notebook</h4><p>Jupyter uses cells. One cell can have text, one can have Python, and one can show a chart. It is useful for data science and AI.</p>

      <div class="w w-match"><span class="w__k">Choose the workspace</span><p class="w__q">Match the learner with the best tool.</p>
        <div class="w-match__grid"><div class="w-match__col"><button data-pair="a">One quick calculation</button><button data-pair="b">A large software project</button><button data-pair="c">Code, notes and a chart</button></div><div class="w-match__col"><button data-pair="c">Jupyter Notebook</button><button data-pair="a">IDLE Shell</button><button data-pair="b">VS Code</button></div></div>
        <p class="w__why">The tools overlap, but each one has a common strength.</p>
      </div>
      <div class="callout"><strong>Mini activity:</strong> Open one tool. Find where code is written and where output appears.</div>
    `,
    mcqs: [
      { q:"Which tool commonly comes with Python?", options:["IDLE","Photoshop","Excel","Chrome"], answer:0, why:"IDLE is a simple Python learning environment." },
      { q:"Who publishes the official Python extension for VS Code?", options:["NASA","Microsoft","Python students","Apple"], answer:1, why:"Install the Python extension published by Microsoft." },
      { q:"Which tool mixes text, Python code and charts?", options:["Command Prompt","Jupyter Notebook","Calculator","Notepad only"], answer:1, why:"Jupyter uses different cells for text, code and output." },
      { q:"What does the VS Code Python extension add?", options:["Python language support","A new operating system","Free internet","A spreadsheet"], answer:0, why:"It helps VS Code understand, run and debug Python." }
    ],
    tasks: [
      { id:"u1t04a", kind:"confirm", title:"Workspace check", brief:"Open IDLE or VS Code and complete the setup.", label:"I opened IDLE or VS Code. If I used VS Code, I installed the Microsoft Python extension." }
    ]
  },

  /* ====================== CHAPTER 5 ====================== */
  {
    id: "u1t05",
    title: "PIP and Python Packages",
    summary: "Use pip like an app store to install, list and remove extra Python tools.",
    notebookLM: "",
    notes: `
      <h4>A package is extra ready-made code</h4>
      <p>Python already has many tools. Sometimes you need something extra. A package can add colours, web requests, data tools, games and more.</p>
      <p><strong>pip</strong> is the package installer for Python. Think of it as an app store for code.</p>
      <svg class="fig" viewBox="0 0 700 220" role="img" aria-label="Pip downloads a package and places it inside Python.">
        <rect class="box box--dark" x="14" y="68" width="210" height="80" rx="9"/><text x="119" y="101" text-anchor="middle" class="mono on-dark">pip install cowsay</text><text x="119" y="128" text-anchor="middle" class="lbl on-dark">your command</text>
        <path class="arrow" d="M236 108 h54"/><path class="accent" d="M302 108 l-13 -7 v14 z"/>
        <rect class="box" x="310" y="32" width="160" height="150" rx="12"/><text x="390" y="62" text-anchor="middle" style="font-weight:700">Package shelf</text><rect x="337" y="80" width="106" height="25" rx="5" fill="rgba(242,160,61,.16)"/><rect x="337" y="116" width="106" height="25" rx="5" fill="rgba(22,157,147,.12)"/>
        <path class="arrow" d="M482 108 h54"/><path class="accent" d="M548 108 l-13 -7 v14 z"/>
        <rect class="box" x="556" y="68" width="130" height="80" rx="9"/><text x="621" y="101" text-anchor="middle" style="font-weight:700">Python</text><text x="621" y="128" text-anchor="middle" class="lbl">package added</text>
        <text x="350" y="212" text-anchor="middle" class="figcap">pip manages packages made by the Python community.</text>
      </svg>

      <h4>Three important commands</h4>
      <pre><code>pip install colorama
pip list
pip uninstall colorama</code></pre>
      <ul><li><code>install</code> adds a package.</li><li><code>list</code> shows installed packages and versions.</li><li><code>uninstall</code> removes a package.</li></ul>

      <div class="w w-guess" data-answer="2"><span class="w__k">Command challenge</span><p class="w__q">Which command installs <code>requests</code>?</p>
        <div class="w-guess__opts"><button data-o="0">python get requests</button><button data-o="1">download requests</button><button data-o="2">pip install requests</button></div>
        <p class="w__why"><code>pip install package_name</code> is the normal pattern.</p>
      </div>
      <div class="callout"><strong>Mini activity:</strong> Say the commands in this order: install, list, uninstall. Explain each one.</div>
    `,
    mcqs: [
      { q:"What is pip?", options:["A Python package installer","A code editor","A data type","A web browser"], answer:0, why:"pip installs and manages extra Python packages." },
      { q:"Which command shows installed packages?", options:["pip list","pip open","python packages","list pip now"], answer:0, why:"pip list shows package names and versions." },
      { q:"Which command removes colorama?", options:["pip remove all","pip uninstall colorama","delete colorama","python stop colorama"], answer:1, why:"Use pip uninstall followed by the package name." },
      { q:"Why do people use packages?", options:["To add ready-made tools","To turn off Python","To rename the keyboard","To remove all code"], answer:0, why:"Packages save time by giving us ready-made code." }
    ],
    tasks: [
      { id:"u1t05a", kind:"confirm", title:"Package practice", brief:"Use a terminal on your computer.", label:"I ran <code>pip list</code>. I also installed and removed one safe practice package chosen by my teacher." }
    ]
  },

  /* ====================== CHAPTER 6 ====================== */
  {
    id: "u1t06",
    title: "Virtual Environments and requirements.txt",
    summary: "Keep project tools separate with venv, understand Conda, and share a package recipe.",
    notebookLM: "",
    notes: `
      <h4>Different projects need different toolboxes</h4>
      <p>A website and an AI project may need different package versions. Mixing every package in one place can cause problems.</p>
      <p>A <strong>virtual environment</strong> is a private toolbox for one project.</p>
      <svg class="fig" viewBox="0 0 700 240" role="img" aria-label="Two project rooms contain different packages without touching each other.">
        <rect class="box" x="35" y="44" width="280" height="150" rx="12"/><text x="175" y="73" text-anchor="middle" style="font-weight:700">Website room</text><rect class="box box--dark" x="72" y="96" width="96" height="52" rx="7"/><text x="120" y="128" text-anchor="middle" class="on-dark">Django</text><rect class="box box--dark" x="184" y="96" width="96" height="52" rx="7"/><text x="232" y="128" text-anchor="middle" class="on-dark">v5</text>
        <rect class="box" x="385" y="44" width="280" height="150" rx="12"/><text x="525" y="73" text-anchor="middle" style="font-weight:700">AI room</text><rect class="box box--dark" x="422" y="96" width="96" height="52" rx="7"/><text x="470" y="128" text-anchor="middle" class="on-dark">NumPy</text><rect class="box box--dark" x="534" y="96" width="96" height="52" rx="7"/><text x="582" y="128" text-anchor="middle" class="on-dark">v2</text>
        <path class="good" d="M350 35 v170"/><text x="350" y="228" text-anchor="middle" class="figcap">The wall stops package conflicts.</text>
      </svg>

      <h4>Create and activate a venv</h4>
      <pre><code>python -m venv my_test_env</code></pre>
      <table><tr><th>System</th><th>Activation command</th></tr><tr><td>Windows</td><td><code>my_test_env\\Scripts\\activate</code></td></tr><tr><td>macOS / Linux</td><td><code>source my_test_env/bin/activate</code></td></tr></table>
      <p>The environment name normally appears at the start of the terminal. Leave it with <code>deactivate</code>.</p>

      <h4>Conda</h4>
      <p>Conda is another package and environment manager. It is common in data science. Remember: <code>pip + venv</code> is the normal Python path, while Conda is an all-in-one alternative.</p>

      <h4>The recipe card</h4>
      <pre><code>pip freeze &gt; requirements.txt
pip install -r requirements.txt</code></pre>
      <p>The first command saves package names and versions. The second command installs the same tools on another computer.</p>

      <div class="w w-match"><span class="w__k">Toolbox match</span><p class="w__q">Match the command with its job.</p>
        <div class="w-match__grid"><div class="w-match__col"><button data-pair="a"><code>python -m venv room</code></button><button data-pair="b"><code>deactivate</code></button><button data-pair="c"><code>pip freeze &gt; requirements.txt</code></button><button data-pair="d"><code>pip install -r requirements.txt</code></button></div><div class="w-match__col"><button data-pair="c">Save the package recipe</button><button data-pair="a">Create a private environment</button><button data-pair="d">Install from the recipe</button><button data-pair="b">Leave the environment</button></div></div>
        <p class="w__why">These commands form the basic project setup cycle.</p>
      </div>
      <div class="callout"><strong>Mini activity:</strong> Draw two rooms. Put “web packages” in one and “AI packages” in the other. Explain why the wall is useful.</div>
    `,
    mcqs: [
      { q:"Why use a virtual environment?", options:["To keep project packages separate","To make the monitor brighter","To write only HTML","To delete Python"], answer:0, why:"It stops one project's packages from interfering with another." },
      { q:"Which command creates my_test_env?", options:["python -m venv my_test_env","pip list my_test_env","create python room","venv start"], answer:0, why:"python -m venv followed by the name creates the environment." },
      { q:"What is requirements.txt?", options:["A list of project packages","A list of errors","A password file","A Python image"], answer:0, why:"It records the packages a project needs." },
      { q:"What is Conda?", options:["An environment and package manager","A Python keyword","A comment symbol","A text editor"], answer:0, why:"Conda manages packages and environments." }
    ],
    tasks: [
      { id:"u1t06a", kind:"confirm", title:"Environment practice", brief:"Create a small environment.", label:"I created <code>my_test_env</code>, activated it, saw its name, and then used <code>deactivate</code>." },
      { id:"u1t06b", kind:"confirm", title:"Recipe practice", brief:"Create the package recipe.", label:"I ran <code>pip freeze &gt; requirements.txt</code> and opened the file." }
    ]
  },

  /* ====================== CHAPTER 7 ====================== */
  {
    id: "u1t07",
    title: "Python Shell and Hello, World!",
    summary: "Use interactive mode, recognise the >>> prompt, and write your first output.",
    notebookLM: "",
    notes: `
      <h4>The shell is like a live chat</h4>
      <p>Open a terminal and type <code>python</code> or <code>python3</code>. The prompt <code>&gt;&gt;&gt;</code> means Python is listening.</p>
      <svg class="fig" viewBox="0 0 700 230" role="img" aria-label="A chat diagram shows the user sending one Python command and the shell replying.">
        <rect class="box" x="40" y="45" width="260" height="62" rx="24"/><text x="170" y="82" text-anchor="middle" class="mono">&gt;&gt;&gt; 5 + 5</text>
        <rect class="box box--dark" x="400" y="125" width="260" height="62" rx="24"/><text x="530" y="162" text-anchor="middle" class="mono accent">10</text>
        <circle cx="320" cy="112" r="8" class="accent"><animate attributeName="cx" values="320;385;320" dur="1.8s" repeatCount="indefinite"/></circle>
        <text x="350" y="218" text-anchor="middle" class="figcap">One command goes in. One answer comes back.</text>
      </svg>

      <h4>Your first program line</h4>
      <pre><code>print("Hello, World!")</code></pre>
      <p><code>print()</code> tells Python to show something. Text goes inside quotes.</p>
      <ul><li>Interactive mode runs one line at a time.</li><li>It shows the answer immediately.</li><li>It is useful for quick tests.</li><li>It does not save your work when you close it.</li></ul>
      <p>Leave the shell with <code>exit()</code>.</p>

      <div class="w w-guess" data-answer="1"><span class="w__k">Guess the reply</span><p class="w__q">What does the shell show?</p><pre><code>&gt;&gt;&gt; 50 * 2</code></pre><div class="w-guess__opts"><button data-o="0">50 * 2</button><button data-o="1">100</button><button data-o="2">Nothing</button></div><p class="w__why">The shell immediately evaluates the expression.</p></div>
      <div class="w w-spot"><span class="w__k">Spot the mistake</span><p class="w__q">Tap the part that causes a problem.</p><div class="w-spot__line"><button data-bad>Print</button><button>(</button><button>"Hello"</button><button>)</button></div><p class="w__why">Python is case-sensitive. The function is lowercase <code>print</code>.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Try <code>7 + 8</code>, <code>9 * 3</code> and <code>print("I can talk to Python")</code>.</div>
    `,
    mcqs: [
      { q:"What does >>> mean?", options:["Python is waiting for a command","The computer has a virus","The file is saved","Python is closed"], answer:0, why:"The arrows are the interactive Python prompt." },
      { q:"Which line correctly prints Hello, World!?", options:["Print(Hello)","print(\"Hello, World!\")","say Hello","print Hello"], answer:1, why:"Use lowercase print, parentheses and quotes." },
      { q:"What is interactive mode best for?", options:["Quick tests","Saving a large project","Making a PDF","Installing Windows"], answer:0, why:"It gives immediate answers for small experiments." },
      { q:"How can you leave the Python shell?", options:["exit()","close_python_word","stop all","end[]"], answer:0, why:"Typing exit() ends the session." }
    ],
    tasks: [
      { id:"u1t07a", kind:"code", title:"Task 7.1 — Hello, World!", brief:"Print exactly: Hello, World!", starter:"# Write your first Python line\n", checks:[{type:"stdoutEquals",value:"Hello, World!"},{type:"sourceIncludes",value:"print",message:"Use print()"}] },
      { id:"u1t07b", kind:"code", title:"Task 7.2 — Three friendly lines", brief:"Print Welcome, your name, and I am learning Python on three separate lines.", starter:"# Write three print statements\n", checks:[{type:"stdoutMinLines",value:3,message:"Print at least three non-empty lines"}] }
    ]
  },

  /* ====================== CHAPTER 8 ====================== */
  {
    id: "u1t08",
    title: "Python Scripts and Terminals",
    summary: "Save .py files and run them from VS Code or a terminal.",
    notebookLM: "",
    notes: `
      <h4>A script is saved work</h4>
      <p>A Python script is a text file that ends with <code>.py</code>, such as <code>hello.py</code>.</p>
      <svg class="fig" viewBox="0 0 700 225" role="img" aria-label="A Python file is saved, the terminal runs it, and output appears.">
        <rect class="box" x="22" y="58" width="170" height="108" rx="10"/><path class="good" d="M50 87 h90 M50 108 h112 M50 129 h76"/><text x="107" y="190" text-anchor="middle" class="mono">hello.py</text>
        <path class="arrow" d="M204 112 h62"/><path class="accent" d="M278 112 l-13 -7 v14 z"/>
        <rect class="box box--dark" x="286" y="58" width="245" height="108" rx="10"/><text x="309" y="99" class="mono on-dark">python hello.py</text><text x="309" y="134" class="mono accent">I am running!</text>
        <path class="arrow" d="M543 112 h52"/><path class="accent" d="M607 112 l-13 -7 v14 z"/><rect class="box" x="615" y="74" width="70" height="76" rx="10"/><text x="650" y="117" text-anchor="middle" class="lbl">done</text>
        <text x="350" y="218" text-anchor="middle" class="figcap">Save the file, move to its folder, then run it.</text>
      </svg>

      <h4>Create a script</h4><ol><li>Open IDLE or VS Code.</li><li>Create a new file.</li><li>Write <code>print("I am running a script!")</code>.</li><li>Save it as <code>hello.py</code>.</li></ol>
      <h4>Run it</h4><p>Use the VS Code play button, or type:</p><pre><code>python hello.py</code></pre>
      <p>To move to the correct folder, use <code>cd</code>, meaning <strong>change directory</strong>.</p><pre><code>cd Desktop
python hello.py</code></pre>

      <div class="w w-match"><span class="w__k">Script journey</span><p class="w__q">Match the item with its purpose.</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a"><code>.py</code></button><button data-pair="b"><code>cd</code></button><button data-pair="c"><code>python hello.py</code></button><button data-pair="d">Play button</button></div><div class="w-match__col"><button data-pair="b">Move to a folder</button><button data-pair="d">Run from the editor</button><button data-pair="a">Python file ending</button><button data-pair="c">Run the saved script</button></div></div><p class="w__why">A saved file can be run again, fixed and submitted.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Create <code>my_first_script.py</code> with two print lines. Run it from the editor and terminal.</div>
    `,
    mcqs: [
      { q:"What ending identifies a Python script?", options:[".txt",".py",".python",".script"], answer:1, why:"Python source files normally end with .py." },
      { q:"What does cd mean?", options:["Create data","Change directory","Close document","Copy design"], answer:1, why:"cd moves the terminal into another folder." },
      { q:"Which command runs game.py?", options:["python game.py","open game","run game word","game.py start"], answer:0, why:"Use python followed by the file name." },
      { q:"Why is script mode useful?", options:["The work is saved","It removes all errors","It needs no Python","It cannot print"], answer:0, why:"A script remains as a file that can be edited and submitted." }
    ],
    tasks: [
      { id:"u1t08a", kind:"code", title:"Task 8.1 — Script-style output", brief:"Print exactly two lines: My first script and Saved as a .py file", starter:"# Imagine this is practice.py\n", checks:[{type:"stdoutEquals",value:"My first script\nSaved as a .py file"}] },
      { id:"u1t08b", kind:"confirm", title:"Local script check", brief:"Practice the real terminal workflow.", label:"I saved a <code>.py</code> file and ran it using <code>python filename.py</code> or <code>python3 filename.py</code>." }
    ]
  },

  /* ====================== CHAPTER 9 ====================== */
  {
    id: "u1t09",
    title: "Statements, Expressions and Comments",
    summary: "See the building blocks of a program and write notes that Python ignores.",
    notebookLM: "",
    notes: `
      <h4>Statements are full instructions</h4><pre><code>name = "Asha"
print(name)</code></pre>
      <h4>Expressions produce values</h4><pre><code>10 + 5
"Hello" + " World"</code></pre><p>A statement can contain an expression: <code>answer = 10 + 5</code>.</p>
      <svg class="fig" viewBox="0 0 700 220" role="img" aria-label="An expression produces 15 and a statement stores it in answer.">
        <rect class="box" x="35" y="68" width="190" height="80" rx="10"/><text x="130" y="116" text-anchor="middle" class="mono">10 + 5</text><text x="130" y="174" text-anchor="middle" class="lbl">expression</text>
        <path class="arrow" d="M237 108 h68"/><path class="accent" d="M317 108 l-13 -7 v14 z"/><circle cx="360" cy="108" r="36" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.4"/><text x="360" y="116" text-anchor="middle" class="mono">15</text>
        <path class="arrow" d="M408 108 h68"/><path class="accent" d="M488 108 l-13 -7 v14 z"/><rect class="box box--dark" x="496" y="60" width="170" height="96" rx="10"/><text x="581" y="96" text-anchor="middle" class="mono on-dark">answer = 15</text><text x="581" y="128" text-anchor="middle" class="lbl on-dark">statement</text>
        <text x="350" y="214" text-anchor="middle" class="figcap">An expression's value can be used inside a statement.</text>
      </svg>

      <h4>Comments are notes for people</h4><pre><code># This line explains the next step
price = 50 + 20</code></pre><p>Python ignores everything after <code>#</code> on that line.</p>
      <h4>Long notes and docstrings</h4><pre><code>"""
Student marks program
Created for Unit 1 practice
"""
print("Ready")</code></pre><p>A triple-quoted string at the top of a file, function or class is a <strong>docstring</strong>.</p>

      <div class="w w-guess" data-answer="0"><span class="w__k">Statement or expression?</span><p class="w__q">Which item only produces a value?</p><div class="w-guess__opts"><button data-o="0"><code>50 * 2</code></button><button data-o="1"><code>score = 100</code></button><button data-o="2"><code>print(score)</code></button></div><p class="w__why"><code>50 * 2</code> becomes 100. The other two are full instructions.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Write one useful comment that explains why a line exists.</div>
    `,
    mcqs: [
      { q:"What does an expression do?", options:["Produces a value","Closes Python","Installs a package","Creates a folder"], answer:0, why:"An expression is evaluated to produce a value." },
      { q:"Which symbol begins a comment?", options:["//","#","--","<!--"], answer:1, why:"Python uses the hash symbol." },
      { q:"What does Python do with a comment?", options:["Prints it","Ignores it while running","Translates it","Saves it as a package"], answer:1, why:"Comments are skipped by the interpreter." },
      { q:"What is a docstring?", options:["A documentation string","A maths operator","A package manager","A file extension"], answer:0, why:"A docstring explains a file, function or class." }
    ],
    tasks: [
      { id:"u1t09a", kind:"code", title:"Task 9.1 — Commented favourite", brief:"Write a comment, create favorite_color = \"Blue\", and print it.", starter:"# Explain why this variable is useful\n", checks:[{type:"stdoutEquals",value:"Blue"},{type:"sourceRegex",pattern:"(^|\\n)\\s*#",message:"Include a # comment"},{type:"sourceIncludes",value:"favorite_color",message:"Create favorite_color"}] },
      { id:"u1t09b", kind:"code", title:"Task 9.2 — A tiny file manual", brief:"Start with a triple-quoted docstring, then print exactly: Program ready", starter:"# Replace this with a docstring\n", checks:[{type:"stdoutEquals",value:"Program ready"},{type:"sourceRegex",pattern:"'''|\"\"\"",message:"Use triple quotes"}] }
    ]
  },

  /* ====================== CHAPTER 10 ====================== */
  {
    id: "u1t10",
    title: "Indentation, Errors and Debugging",
    summary: "Group code with spaces, read a traceback, use print checks, and pause with breakpoints.",
    notebookLM: "",
    notes: `
      <h4>Indentation shows which lines belong together</h4>
      <p>Python uses spaces at the start of a line to create a block. Most code uses <strong>four spaces</strong> for one level.</p>
      <pre><code>if 5 &gt; 2:
    print("Five is bigger")</code></pre>
      <svg class="fig" viewBox="0 0 700 235" role="img" aria-label="An indented line belongs inside an if block.">
        <rect class="box box--dark" x="60" y="38" width="580" height="150" rx="10"/><text x="95" y="78" class="mono on-dark">if score &gt;= 60:</text><text x="145" y="112" class="mono accent">print("Pass")</text><text x="95" y="154" class="mono on-dark">print("Finished")</text><path class="good" d="M118 92 h-18 v35 h18"/><text x="660" y="112" text-anchor="end" class="lbl on-dark">inside</text><text x="660" y="154" text-anchor="end" class="lbl on-dark">outside</text><text x="350" y="222" text-anchor="middle" class="figcap">The spaces are part of Python's meaning.</text>
      </svg>

      <h4>Common problems</h4><ul><li>Forgetting to indent a line in a block.</li><li>Adding spaces where no block exists.</li><li>Mixing tabs and spaces.</li></ul>
      <h4>Read the traceback</h4><p>Start with the last line. It usually gives the error name. Then look for the file and line number.</p><pre><code>File "game.py", line 14
NameError: name 'score' is not defined</code></pre>
      <h4>Debug with print()</h4><pre><code>wallet = 100
print("After start:", wallet)
wallet = wallet - 20
print("After purchase:", wallet)</code></pre>
      <p>A breakpoint pauses the program at a chosen line so you can inspect values.</p>

      <div class="w w-spot"><span class="w__k">Fix the block</span><p class="w__q">Which line must move four spaces right?</p><div class="w-spot__line"><button>if</button><button>True</button><button>:</button><button data-bad>print("Go")</button></div><p class="w__why">The print line belongs inside the if block.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Follow this order: bottom line, error name, line number, marked code.</div>
    `,
    mcqs: [
      { q:"Why does Python use indentation?", options:["To group related code","Only to look pretty","To make the font larger","To install packages"], answer:0, why:"Indentation tells Python which statements belong inside a block." },
      { q:"Where should a beginner first look in a traceback?", options:["At the last line","At the desktop","At the first letter","At the internet icon"], answer:0, why:"The last line usually names the error." },
      { q:"What is debugging?", options:["Finding and fixing problems","Deleting all code","Changing wallpaper","Installing Python"], answer:0, why:"Debugging means locating and correcting problems." },
      { q:"What does a breakpoint do?", options:["Pauses execution at a line","Deletes a line","Prints every file","Turns Python off"], answer:0, why:"A breakpoint pauses the program so values can be inspected." }
    ],
    tasks: [
      { id:"u1t10a", kind:"code", title:"Task 10.1 — Repair indentation", brief:"Fix the code so it prints exactly: Indentation fixed", starter:"if True:\nprint(\"Indentation fixed\")\n", checks:[{type:"stdoutEquals",value:"Indentation fixed"}] },
      { id:"u1t10b", kind:"code", title:"Task 10.2 — Leave breadcrumbs", brief:"Create wallet = 100, subtract 25, and print before and after. Output: 100 then 75.", starter:"wallet = 100\n# Add two print checks\n", checks:[{type:"stdoutEquals",value:"100\n75"},{type:"sourceMinMatches",pattern:"print\\s*\\(",count:2,message:"Use print() twice"}] }
    ]
  },

  /* ====================== CHAPTER 11 ====================== */
  {
    id: "u1t11",
    title: "Getting Help with help() and dir()",
    summary: "Ask Python for an explanation or look inside an object for available tools.",
    notebookLM: "",
    notes: `
      <h4>Good programmers do not memorise everything</h4>
      <p>They know how to find information. Python can explain its own built-in tools.</p>
      <svg class="fig" viewBox="0 0 700 220" role="img" aria-label="help acts like a dictionary and dir acts like an x-ray.">
        <rect class="box" x="45" y="48" width="270" height="135" rx="12"/><text x="180" y="80" text-anchor="middle" style="font-weight:700">help()</text><path class="good" d="M90 105 h180 M90 128 h150 M90 151 h120"/><text x="180" y="205" text-anchor="middle" class="figcap">Detailed explanation</text>
        <rect class="box box--dark" x="385" y="48" width="270" height="135" rx="12"/><text x="520" y="80" text-anchor="middle" class="on-dark" style="font-weight:700">dir()</text><text x="420" y="115" class="mono accent">upper</text><text x="500" y="115" class="mono accent">lower</text><text x="580" y="115" class="mono accent">strip</text><text x="452" y="148" class="mono accent">find</text><text x="548" y="148" class="mono accent">replace</text><text x="520" y="205" text-anchor="middle" class="figcap">Quick list of names</text>
      </svg>

      <h4>help()</h4><p>Use <code>help()</code> when you want a description and usage information.</p><pre><code>help(print)
help(len)</code></pre>
      <p>Read the simple description first. Advanced words can wait.</p>
      <h4>dir()</h4><p>Use <code>dir()</code> when you want a list of things an object contains or can do.</p><pre><code>dir("Hello")
dir(10)</code></pre>
      <p>You may see many names. You do not need to understand all of them yet.</p>

      <div class="w w-match"><span class="w__k">Help tool match</span><p class="w__q">Which tool should you choose?</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a">Explain <code>len</code></button><button data-pair="b">List string actions</button><button data-pair="c">Read arguments of <code>print</code></button><button data-pair="d">See names inside <code>math</code></button></div><div class="w-match__col"><button data-pair="b"><code>dir("text")</code></button><button data-pair="a"><code>help(len)</code></button><button data-pair="d"><code>dir(math)</code></button><button data-pair="c"><code>help(print)</code></button></div></div><p class="w__why"><code>help</code> explains. <code>dir</code> lists.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Run <code>help(len)</code>. Find the first simple sentence and explain it.</div>
    `,
    mcqs: [
      { q:"Which function gives a detailed explanation?", options:["help()","dir()","print()","input()"], answer:0, why:"help() displays documentation." },
      { q:"Which function gives a list of available names?", options:["ask()","dir()","show()","list_help()"], answer:1, why:"dir() lists names and actions available on an object." },
      { q:"What should a beginner do when help text looks advanced?", options:["Read the simple description first","Delete Python","Memorise every line","Never ask for help"], answer:0, why:"Use only the clear part you need now." },
      { q:"What does dir(\"Hello\") show?", options:["String-related names and tools","Only Hello","The Python version","Installed packages"], answer:0, why:"dir() looks inside the string object." }
    ],
    tasks: [
      { id:"u1t11a", kind:"code", title:"Task 11.1 — Use Python's x-ray", brief:"Print whether upper exists in dir(\"Hello\"). Output: True", starter:"# Use dir() and in\n", checks:[{type:"stdoutEquals",value:"True"},{type:"sourceIncludes",value:"dir(",message:"Use dir()"}] },
      { id:"u1t11b", kind:"confirm", title:"Read one help page", brief:"Use the Python shell or IDLE.", label:"I ran <code>help(len)</code> and found that it returns the number of items." }
    ]
  },

  /* ====================== CHAPTER 12 ====================== */
  {
    id: "u1t12",
    title: "Documentation and the Standard Library",
    summary: "Use the official manual and invite built-in modules with import.",
    notebookLM: "",
    notes: `
      <h4>The official instruction manual</h4>
      <p>The official Python documentation is at <code>docs.python.org</code>. It contains guides, definitions and examples.</p>
      <svg class="fig" viewBox="0 0 700 225" role="img" aria-label="A large manual points to standard library modules.">
        <rect class="box" x="38" y="45" width="230" height="145" rx="12"/><text x="153" y="78" text-anchor="middle" style="font-weight:700">docs.python.org</text><path class="good" d="M76 104 h154 M76 128 h120 M76 152 h142"/>
        <path class="arrow" d="M280 116 h70"/><path class="accent" d="M362 116 l-13 -7 v14 z"/>
        <rect class="box box--dark" x="370" y="36" width="110" height="58" rx="8"/><text x="425" y="71" text-anchor="middle" class="on-dark">math</text><rect class="box box--dark" x="500" y="83" width="110" height="58" rx="8"/><text x="555" y="118" text-anchor="middle" class="on-dark">random</text><rect class="box box--dark" x="370" y="148" width="140" height="58" rx="8"/><text x="440" y="183" text-anchor="middle" class="on-dark">datetime</text>
        <text x="350" y="222" text-anchor="middle" class="figcap">Documentation explains the language and library.</text>
      </svg>

      <h4>The standard library</h4><p>Python arrives with many modules. This is why people say it has “batteries included”.</p>
      <ul><li><code>math</code> gives extra maths tools.</li><li><code>random</code> chooses random values.</li><li><code>datetime</code> works with dates and times.</li><li><code>statistics</code> summarises numbers.</li></ul>
      <h4>Use import</h4><pre><code>import math
print(math.sqrt(25))</code></pre><p>The first line brings the toolbox into the file. The second uses one tool.</p>

      <div class="w w-guess" data-answer="1"><span class="w__k">Open the toolbox</span><p class="w__q">How do you make math available?</p><div class="w-guess__opts"><button data-o="0">download math</button><button data-o="1">import math</button><button data-o="2">open math</button></div><p class="w__why"><code>import</code> brings a module into the program.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Open <code>docs.python.org</code>, search for <code>print</code>, and compare it with <code>help(print)</code>.</div>
    `,
    mcqs: [
      { q:"Where is the official Python documentation?", options:["docs.python.org","python-help.fake","code-only.net","mail.python"], answer:0, why:"docs.python.org is the official manual." },
      { q:"What is the standard library?", options:["Modules that come with Python","Only books","Paid mobile apps","Passwords"], answer:0, why:"It is a collection of modules installed with Python." },
      { q:"Which keyword brings in a module?", options:["download","start","import","bring"], answer:2, why:"Use import followed by the module name." },
      { q:"Which module works with dates and times?", options:["datetime","random","paint","keyboard"], answer:0, why:"datetime provides date and time tools." }
    ],
    tasks: [
      { id:"u1t12a", kind:"code", title:"Task 12.1 — Invite math", brief:"Import math and print math.sqrt(49). Output: 7.0", starter:"# Import the module\n", checks:[{type:"stdoutEquals",value:"7.0"},{type:"sourceIncludes",value:"import math",message:"Import math"}] },
      { id:"u1t12b", kind:"code", title:"Task 12.2 — Look inside math", brief:"Import math and print whether sqrt exists in dir(math).", starter:"import math\n", checks:[{type:"stdoutEquals",value:"True"},{type:"sourceIncludes",value:"dir(math)",message:"Use dir(math)"}] }
    ]
  },

  /* ====================== CHAPTER 13 ====================== */
  {
    id: "u1t13",
    title: "Identifiers and Keywords",
    summary: "Create legal names for variables and avoid Python's reserved words.",
    notebookLM: "",
    notes: `
      <h4>An identifier is a name tag</h4><p>Identifiers are names we give to variables, functions and classes.</p>
      <svg class="fig" viewBox="0 0 700 220" role="img" aria-label="Valid and invalid Python names are compared.">
        <rect x="35" y="45" width="290" height="135" rx="12" fill="rgba(22,157,147,.10)" stroke="#169D93" stroke-width="2.4"/><text x="180" y="75" text-anchor="middle" style="font-weight:700">Valid names</text><text x="88" y="112" class="mono">player_1</text><text x="88" y="143" class="mono">first_name</text><text x="220" y="112" class="mono">score</text><text x="220" y="143" class="mono">MAX_SPEED</text>
        <rect x="375" y="45" width="290" height="135" rx="12" fill="rgba(210,70,70,.08)" stroke="#B84A4A" stroke-width="2.4"/><text x="520" y="75" text-anchor="middle" style="font-weight:700">Invalid names</text><text x="420" y="112" class="mono">1score</text><text x="420" y="143" class="mono">first name</text><text x="550" y="112" class="mono">user-name</text><text x="550" y="143" class="mono">class</text>
        <text x="350" y="212" text-anchor="middle" class="figcap">A good name follows rules and describes the data.</text>
      </svg>

      <h4>Naming rules</h4><ol><li>Use letters, numbers and underscores only.</li><li>Do not start with a number.</li><li>Do not use spaces.</li><li>Python is case-sensitive.</li><li>Use clear <code>snake_case</code> names.</li></ol>
      <h4>Keywords are reserved</h4><p>Words such as <code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>True</code>, <code>False</code> and <code>import</code> already have special meanings.</p>

      <div class="w w-match"><span class="w__k">Name inspector</span><p class="w__q">Match each name with its result.</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a"><code>total_amount</code></button><button data-pair="b"><code>3_cats</code></button><button data-pair="c"><code>account balance</code></button><button data-pair="d"><code>for</code></button></div><div class="w-match__col"><button data-pair="c">Invalid: space</button><button data-pair="a">Valid</button><button data-pair="d">Invalid: keyword</button><button data-pair="b">Invalid: starts with number</button></div></div><p class="w__why">Names must be legal and easy to understand.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Replace the name <code>x</code> in a marks program with a clear name.</div>
    `,
    mcqs: [
      { q:"What is an identifier?", options:["A name used in a program","A Python installer","A comment","A package list"], answer:0, why:"Identifiers name variables, functions and other objects." },
      { q:"Which is a valid identifier?", options:["1st_score","my score","player_score_1","user-name"], answer:2, why:"It uses legal characters and does not start with a number." },
      { q:"Why can you not use if as a variable name?", options:["It is a Python keyword","It is too short","It has a number","It must be uppercase"], answer:0, why:"if is reserved for Python syntax." },
      { q:"Are age and Age the same?", options:["Yes","No","Only on Windows","Only in IDLE"], answer:1, why:"Python is case-sensitive." }
    ],
    tasks: [
      { id:"u1t13a", kind:"code", title:"Task 13.1 — Clear legal names", brief:"Create student_name = \"Riya\" and test_score = 88. Print both.", starter:"# Use snake_case names\n", checks:[{type:"stdoutEquals",value:"Riya\n88"},{type:"sourceIncludes",value:"student_name",message:"Use student_name"},{type:"sourceIncludes",value:"test_score",message:"Use test_score"}] },
      { id:"u1t13b", kind:"code", title:"Task 13.2 — Repair invalid names", brief:"Fix the code so it prints 25 and Blue.", starter:"2age = 25\nfavorite color = \"Blue\"\nprint(2age)\nprint(favorite color)\n", checks:[{type:"stdoutEquals",value:"25\nBlue"}] }
    ]
  },

  /* ====================== CHAPTER 14 ====================== */
  {
    id: "u1t14",
    title: "Variables, Assignment and Swapping",
    summary: "Store data in named boxes, assign many values at once, and swap two values.",
    notebookLM: "",
    notes: `
      <h4>A variable is a named storage box</h4><p>The name goes on the left. The value goes on the right. The equals sign stores the value.</p><pre><code>score = 100
player_name = "Mario"</code></pre>
      <svg class="fig" viewBox="0 0 700 235" role="img" aria-label="Values are placed into named variable boxes.">
        <text x="105" y="48" text-anchor="middle" class="mono">100</text><path class="arrow" d="M105 60 v42"/><path class="accent" d="M105 114 l-7 -13 h14 z"/><rect class="box" x="35" y="120" width="140" height="70" rx="10"/><text x="105" y="151" text-anchor="middle" class="mono">100</text><text x="105" y="213" text-anchor="middle" class="lbl">score</text>
        <text x="515" y="48" text-anchor="middle" class="mono">"Mario"</text><path class="arrow" d="M515 60 v42"/><path class="accent" d="M515 114 l-7 -13 h14 z"/><rect class="box box--dark" x="425" y="120" width="180" height="70" rx="10"/><text x="515" y="158" text-anchor="middle" class="mono accent">Mario</text><text x="515" y="213" text-anchor="middle" class="lbl">player_name</text>
      </svg>

      <h4>Multiple assignment</h4><pre><code>x, y, z = 10, 20, 30</code></pre><p>The order matters. Each name receives the value in the same position.</p>
      <h4>Swap two variables</h4><pre><code>a = "Milk"
b = "Juice"
a, b = b, a</code></pre><p>After the last line, <code>a</code> holds Juice and <code>b</code> holds Milk.</p>

      <div class="w w-guess" data-answer="2"><span class="w__k">Follow the boxes</span><p class="w__q">What is printed?</p><pre><code>a = "red"
b = "blue"
a, b = b, a
print(a)</code></pre><div class="w-guess__opts"><button data-o="0">red</button><button data-o="1">red blue</button><button data-o="2">blue</button></div><p class="w__why">The values are swapped.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Use two cups labelled a and b. Swap their contents while reading <code>a, b = b, a</code>.</div>
    `,
    mcqs: [
      { q:"What does = do in score = 100?", options:["Stores 100 in score","Compares values","Prints score","Deletes score"], answer:0, why:"Assignment stores the right value in the left name." },
      { q:"What does x, y = 5, 9 do?", options:["x gets 5 and y gets 9","Both get 5","Both get 9","Always an error"], answer:0, why:"Multiple assignment matches by position." },
      { q:"What does a, b = b, a do?", options:["Adds values","Swaps values","Deletes both","Prints both"], answer:1, why:"Python exchanges the values." },
      { q:"Which side normally has the variable name?", options:["Left","Right only","Both must be numbers","No side"], answer:0, why:"The name is on the left in basic assignment." }
    ],
    tasks: [
      { id:"u1t14a", kind:"code", title:"Task 14.1 — Three boxes", brief:"Create my_age = 18, favorite_color = \"Green\", is_learning = True. Print each.", starter:"# Create variables\n", checks:[{type:"stdoutEquals",value:"18\nGreen\nTrue"},{type:"sourceIncludes",value:"my_age",message:"Create my_age"},{type:"sourceIncludes",value:"favorite_color",message:"Create favorite_color"}] },
      { id:"u1t14b", kind:"code", title:"Task 14.2 — Assign and swap", brief:"Set a, b, c to 1, 2, 3 on one line. Swap a and c. Print 3, 2, 1.", starter:"# Use multiple assignment\n", checks:[{type:"stdoutEquals",value:"3\n2\n1"},{type:"sourceRegex",pattern:"a\\s*,\\s*b\\s*,\\s*c\\s*=",message:"Use multiple assignment"}] }
    ]
  },

  /* ====================== CHAPTER 15 ====================== */
  {
    id: "u1t15",
    title: "Constants, type() and Dynamic Typing",
    summary: "Use uppercase constant names, avoid NameError, inspect types, and understand flexible variables.",
    notebookLM: "",
    notes: `
      <h4>Constants are a shared promise</h4><p>Python does not lock a value. Programmers use uppercase names to say, “Please do not change this.”</p><pre><code>PI = 3.14
MAX_SPEED = 120</code></pre>
      <h4>NameError means Python cannot find the name</h4><pre><code>score = 50
print(Score)</code></pre><p>This fails because <code>score</code> and <code>Score</code> are different.</p>
      <svg class="fig" viewBox="0 0 700 230" role="img" aria-label="A variable changes from a number to text, showing dynamic typing.">
        <rect class="box" x="65" y="70" width="190" height="100" rx="12"/><text x="160" y="105" text-anchor="middle" class="lbl">my_box</text><text x="160" y="145" text-anchor="middle" class="mono">10</text>
        <path class="arrow" d="M270 120 h150"/><path class="accent" d="M432 120 l-13 -7 v14 z"/><text x="350" y="104" text-anchor="middle" class="lbl">new assignment</text>
        <rect class="box box--dark" x="447" y="70" width="190" height="100" rx="12"/><text x="542" y="105" text-anchor="middle" class="lbl on-dark">my_box</text><text x="542" y="145" text-anchor="middle" class="mono accent">Apple</text>
        <text x="350" y="216" text-anchor="middle" class="figcap">The same name can later point to another type.</text>
      </svg>

      <h4>Use type()</h4><pre><code>age = 20
print(type(age))</code></pre><p>The result is <code>&lt;class 'int'&gt;</code>.</p>
      <h4>Dynamic typing</h4><pre><code>my_box = 10
my_box = "Apple"</code></pre><p>Python allows this. Clear programs still avoid changing types without a good reason.</p>
      <p>Numbers, strings, lists, tuples and dictionaries are all Python objects with types.</p>

      <div class="w w-spot"><span class="w__k">Find the ghost name</span><p class="w__q">Which name does not exist?</p><div class="w-spot__line"><button>score</button><button>=</button><button>50</button><button>;</button><button>print(</button><button data-bad>Score</button><button>)</button></div><p class="w__why">Only lowercase <code>score</code> was created.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Predict the type after <code>item = 5</code>, then <code>item = "five"</code>, then <code>item = True</code>.</div>
    `,
    mcqs: [
      { q:"How is a constant normally named?", options:["ALL_CAPITALS","with spaces","starting with a number","using a keyword"], answer:0, why:"Uppercase names warn readers not to change the value." },
      { q:"What causes NameError?", options:["Using a missing or misspelled name","Adding integers","Writing a comment","Importing math"], answer:0, why:"Python cannot find the requested name." },
      { q:"What does type() tell you?", options:["The data type","Internet speed","File size","Password"], answer:0, why:"type() returns the class of a value." },
      { q:"What is dynamic typing?", options:["A name can later point to a different type","Every type must be declared","Code moves on screen","Typing must be fast"], answer:0, why:"Python determines the type from the current value." }
    ],
    tasks: [
      { id:"u1t15a", kind:"code", title:"Task 15.1 — Inspect changing data", brief:"Create mystery = 10 and print its type name. Change it to \"Ten\" and print its type name.", starter:"mystery = 10\n", checks:[{type:"stdoutEquals",value:"int\nstr"},{type:"sourceIncludes",value:"type(",message:"Use type()"}] },
      { id:"u1t15b", kind:"code", title:"Task 15.2 — Fix NameError", brief:"Repair the code so it prints 50.", starter:"total_coins = 50\nprint(total_coin)\n", checks:[{type:"stdoutEquals",value:"50"}] }
    ]
  },

  /* ====================== CHAPTER 16 ====================== */
  {
    id: "u1t16",
    title: "Core Data Types",
    summary: "Use integers, floats, strings, booleans, complex numbers and None.",
    notebookLM: "",
    notes: `
      <h4>Different data needs different containers</h4><p>A number, a word and a yes/no answer are different. Python gives each kind a type.</p>
      <svg class="fig" viewBox="0 0 700 270" role="img" aria-label="Six bins show integer, float, string, boolean, complex and None values.">
        <rect class="box" x="25" y="38" width="200" height="75" rx="10"/><text x="55" y="68" class="lbl">int</text><text x="125" y="90" text-anchor="middle" class="mono">18</text>
        <rect class="box" x="250" y="38" width="200" height="75" rx="10"/><text x="280" y="68" class="lbl">float</text><text x="350" y="90" text-anchor="middle" class="mono">19.99</text>
        <rect class="box" x="475" y="38" width="200" height="75" rx="10"/><text x="505" y="68" class="lbl">str</text><text x="575" y="90" text-anchor="middle" class="mono">"Asha"</text>
        <rect class="box box--dark" x="25" y="140" width="200" height="75" rx="10"/><text x="55" y="170" class="lbl on-dark">bool</text><text x="125" y="192" text-anchor="middle" class="mono accent">True</text>
        <rect class="box box--dark" x="250" y="140" width="200" height="75" rx="10"/><text x="280" y="170" class="lbl on-dark">complex</text><text x="350" y="192" text-anchor="middle" class="mono accent">3 + 5j</text>
        <rect class="box box--dark" x="475" y="140" width="200" height="75" rx="10"/><text x="505" y="170" class="lbl on-dark">None</text><text x="575" y="192" text-anchor="middle" class="mono accent">empty</text>
        <text x="350" y="255" text-anchor="middle" class="figcap">The type tells Python what kind of value it has.</text>
      </svg>

      <table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr><tr><td><code>int</code></td><td>Whole number</td><td><code>-5</code>, <code>0</code>, <code>18</code></td></tr><tr><td><code>float</code></td><td>Decimal</td><td><code>3.5</code></td></tr><tr><td><code>str</code></td><td>Text in quotes</td><td><code>"Hello"</code></td></tr><tr><td><code>bool</code></td><td>True or False</td><td><code>True</code></td></tr><tr><td><code>complex</code></td><td>Real and imaginary parts</td><td><code>3 + 5j</code></td></tr><tr><td><code>None</code></td><td>No value yet</td><td><code>winner = None</code></td></tr></table>
      <p>Quotes change the meaning. <code>100</code> is an integer. <code>"100"</code> is text.</p>

      <div class="w w-match"><span class="w__k">Sorting game</span><p class="w__q">Match every value with its type.</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a"><code>99.9</code></button><button data-pair="b"><code>"Hello"</code></button><button data-pair="c"><code>False</code></button><button data-pair="d"><code>42</code></button><button data-pair="e"><code>None</code></button></div><div class="w-match__col"><button data-pair="d">Integer</button><button data-pair="b">String</button><button data-pair="e">No value</button><button data-pair="a">Float</button><button data-pair="c">Boolean</button></div></div><p class="w__why">Look for decimals, quotes and True or False.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Find one real-life example for int, float, string, boolean and None.</div>
    `,
    mcqs: [
      { q:"Which type stores a whole number?", options:["int","float","str","bool"], answer:0, why:"int stores whole numbers." },
      { q:"Which value is a Boolean?", options:["true","\"False\"","True","Yes"], answer:2, why:"Python booleans are True and False with capital first letters." },
      { q:"What type is \"100\"?", options:["Integer","Float","String","Boolean"], answer:2, why:"Quotes make it text." },
      { q:"What does None represent?", options:["No value yet","The number zero","The word false","An error"], answer:0, why:"None represents absence of a value." }
    ],
    tasks: [
      { id:"u1t16a", kind:"code", title:"Task 16.1 — Build the type shelf", brief:"Create age=18, price=9.5, name=\"Ravi\", is_ready=True, winner=None. Print each type name.", starter:"# Use type(value).__name__\n", checks:[{type:"stdoutEquals",value:"int\nfloat\nstr\nbool\nNoneType"},{type:"sourceIncludes",value:"type(",message:"Use type()"}] },
      { id:"u1t16b", kind:"code", title:"Task 16.2 — A complex value", brief:"Create signal = 3 + 5j and print its type name. Output: complex", starter:"", checks:[{type:"stdoutEquals",value:"complex"},{type:"sourceIncludes",value:"j",message:"Use a complex number"}] }
    ]
  },

  /* ====================== CHAPTER 17 ====================== */
  {
    id: "u1t17",
    title: "Type Conversion and Lists",
    summary: "Change data types safely and group many values inside one list.",
    notebookLM: "",
    notes: `
      <h4>Type conversion changes the form of data</h4><p>Sometimes a number arrives as text. Convert it before doing number maths.</p>
      <svg class="fig" viewBox="0 0 700 230" role="img" aria-label="The string 50 becomes the integer 50 and a list carries many values.">
        <rect class="box" x="30" y="50" width="120" height="70" rx="10"/><text x="90" y="92" text-anchor="middle" class="mono">"50"</text><path class="arrow" d="M162 85 h70"/><path class="accent" d="M244 85 l-13 -7 v14 z"/><rect class="box box--dark" x="252" y="50" width="100" height="70" rx="10"/><text x="302" y="92" text-anchor="middle" class="mono accent">int()</text><path class="arrow" d="M364 85 h70"/><path class="accent" d="M446 85 l-13 -7 v14 z"/><rect class="box" x="454" y="50" width="120" height="70" rx="10"/><text x="514" y="92" text-anchor="middle" class="mono">50</text>
        <rect x="100" y="155" width="500" height="50" rx="14" fill="rgba(242,160,61,.14)" stroke="#D67F19" stroke-width="2.4"/><line x1="225" y1="155" x2="225" y2="205" stroke="#D67F19"/><line x1="350" y1="155" x2="350" y2="205" stroke="#D67F19"/><line x1="475" y1="155" x2="475" y2="205" stroke="#D67F19"/><text x="162" y="186" text-anchor="middle" class="mono">7</text><text x="287" y="186" text-anchor="middle" class="mono">"Pizza"</text><text x="412" y="186" text-anchor="middle" class="mono">True</text><text x="537" y="186" text-anchor="middle" class="mono">2.5</text>
        <text x="350" y="226" text-anchor="middle" class="figcap">Conversion changes one value; a list stores many.</text>
      </svg>

      <h4>Implicit conversion</h4><p>Python sometimes converts automatically. <code>5 + 2.5</code> becomes the float <code>7.5</code>.</p>
      <h4>Explicit conversion</h4><pre><code>int("50")
float("9.5")
str(100)</code></pre><p>This is also called type casting.</p>
      <h4>Lists</h4><pre><code>grocery_list = ["Apples", "Milk", "Bread"]
student_profile = [15, "John", 98.5]</code></pre><p>A list uses square brackets and commas. It can hold many values.</p>

      <div class="w w-guess" data-answer="2"><span class="w__k">The string trap</span><p class="w__q">What is printed?</p><pre><code>a = "5"
b = "5"
print(a + b)</code></pre><div class="w-guess__opts"><button data-o="0">10</button><button data-o="1">Error</button><button data-o="2">55</button></div><p class="w__why">String addition joins text.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Choose the conversion for <code>"18"</code> for age maths, <code>9.5</code> for a message, and <code>"4.25"</code> for price maths.</div>
    `,
    mcqs: [
      { q:"What is implicit conversion?", options:["Python converts automatically","The user deletes a type","A list is created","A package is installed"], answer:0, why:"Python performs it automatically." },
      { q:"Which function converts 9.99 to text?", options:["text()","str()","int()","list()"], answer:1, why:"str() creates text." },
      { q:"Which symbols create a list?", options:["( )","{ }","[ ]","< >"], answer:2, why:"Lists use square brackets." },
      { q:"What does \"5\" + \"5\" produce?", options:["10","55","0","Always an error"], answer:1, why:"The strings are joined." }
    ],
    tasks: [
      { id:"u1t17a", kind:"code", title:"Task 17.1 — Convert a shoe size", brief:"Start with shoe_size = \"10\". Convert to int, add 2, and print 12.", starter:"shoe_size = \"10\"\n", checks:[{type:"stdoutEquals",value:"12"},{type:"sourceIncludes",value:"int(",message:"Use int()"}] },
      { id:"u1t17b", kind:"code", title:"Task 17.2 — Pack a favourites list", brief:"Create my_favorites = [7, \"Pizza\", True] and print the list.", starter:"", checks:[{type:"stdoutEquals",value:"[7, 'Pizza', True]"},{type:"sourceIncludes",value:"[",message:"Create a list"}] }
    ]
  },

  /* ====================== CHAPTER 18 ====================== */
  {
    id: "u1t18",
    title: "print(), input(), sep and end",
    summary: "Create a conversation with the user and control how output is arranged.",
    notebookLM: "",
    notes: `
      <h4>Output is the computer talking</h4><pre><code>print("Welcome to Python")
print(100)</code></pre>
      <h4>sep controls the gap</h4><pre><code>print(10, 20, 30, sep="-")</code></pre><p>Output: <code>10-20-30</code></p>
      <h4>end controls what comes next</h4><pre><code>print("Good", end="")
print("Morning")</code></pre><p>Output: <code>GoodMorning</code></p>
      <svg class="fig" viewBox="0 0 700 240" role="img" aria-label="Input asks a question, a student types a name, and print returns a greeting.">
        <rect class="box box--dark" x="35" y="52" width="210" height="72" rx="22"/><text x="140" y="95" text-anchor="middle" class="mono on-dark">What is your name?</text><path class="arrow" d="M257 88 h60"/><path class="accent" d="M329 88 l-13 -7 v14 z"/><rect class="box" x="337" y="52" width="130" height="72" rx="22"/><text x="402" y="95" text-anchor="middle" class="mono">Riya</text><path class="arrow" d="M479 88 h60"/><path class="accent" d="M551 88 l-13 -7 v14 z"/><rect class="box box--dark" x="559" y="52" width="125" height="72" rx="22"/><text x="621" y="95" text-anchor="middle" class="mono accent">Hello Riya</text><path class="good" d="M621 140 C621 210 140 210 140 140"/><circle cx="500" cy="194" r="7" class="accent"><animate attributeName="cx" values="590;155;590" dur="4s" repeatCount="indefinite"/></circle><text x="350" y="230" text-anchor="middle" class="figcap">input listens and print answers.</text>
      </svg>

      <h4>input() listens</h4><pre><code>user_name = input("What is your name? ")
print("Hello", user_name)</code></pre><p><code>input()</code> always returns a string. Convert it before number maths.</p><pre><code>age = int(input("Enter your age: "))
price = float(input("Enter a price: "))</code></pre>

      <div class="w w-guess" data-answer="1"><span class="w__k">Separator challenge</span><p class="w__q">What is printed?</p><pre><code>print("Python", "is", "fun", sep="#")</code></pre><div class="w-guess__opts"><button data-o="0">Python is fun</button><button data-o="1">Python#is#fun</button><button data-o="2">Pythonisfun#</button></div><p class="w__why"><code>sep</code> goes between every item.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Ask a classmate for a number. Decide whether it needs <code>int()</code> or <code>float()</code>.</div>
    `,
    mcqs: [
      { q:"What does input() always return?", options:["A string","An integer","A float","A Boolean"], answer:0, why:"Even number-looking input arrives as text." },
      { q:"What does sep do?", options:["Sets text between items","Stops the program","Changes a type","Installs a package"], answer:0, why:"sep replaces the normal space." },
      { q:"What does end control?", options:["What is printed after a print call","The first character","The Python version","The input type"], answer:0, why:"end changes the normal newline." },
      { q:"Which code reads a decimal price?", options:["price = float(input(\"Price: \"))","price = int(\"Price\")","price = print(input)","price = bool(input)"], answer:0, why:"float() converts input text to a decimal." }
    ],
    tasks: [
      { id:"u1t18a", kind:"code", title:"Task 18.1 — Custom separator", brief:"Print Python#is#fun using sep.", starter:"", checks:[{type:"stdoutEquals",value:"Python#is#fun"},{type:"sourceIncludes",value:"sep=",message:"Use sep="}] },
      { id:"u1t18b", kind:"code", title:"Task 18.2 — No new line", brief:"Use two print statements to produce GoodMorning.", starter:"", checks:[{type:"stdoutEquals",value:"GoodMorning"},{type:"sourceIncludes",value:"end=",message:"Use end="}] },
      { id:"u1t18c", kind:"code", title:"Task 18.3 — Apple maths", brief:"Ask how many apples. Enter 4. Convert to int, add 2, and print 6.", starter:"# Use input() and int()\n", checks:[{type:"stdoutEquals",value:"6"},{type:"sourceIncludes",value:"input(",message:"Use input()"},{type:"sourceIncludes",value:"int(",message:"Use int()"}] }
    ]
  },

  /* ====================== CHAPTER 19 ====================== */
  {
    id: "u1t19",
    title: "String Formatting",
    summary: "Place variables inside messages using %, .format(), and modern f-strings.",
    notebookLM: "",
    notes: `
      <h4>Formatting is fill-in-the-blank</h4><p>A program often mixes fixed text with changing values.</p>
      <svg class="fig" viewBox="0 0 700 225" role="img" aria-label="Name and score values fill the blanks in an f-string.">
        <rect class="box" x="40" y="48" width="620" height="72" rx="12"/><text x="350" y="91" text-anchor="middle" class="mono">f"{name} scored {score} marks"</text><rect x="120" y="151" width="130" height="52" rx="10" fill="rgba(242,160,61,.16)" stroke="#D67F19" stroke-width="2.4"/><text x="185" y="183" text-anchor="middle" class="mono">Asha</text><rect x="450" y="151" width="130" height="52" rx="10" fill="rgba(22,157,147,.12)" stroke="#169D93" stroke-width="2.4"/><text x="515" y="183" text-anchor="middle" class="mono">92</text><path class="arrow" d="M185 144 v-20"/><path class="arrow" d="M515 144 v-20"/><text x="350" y="220" text-anchor="middle" class="figcap">Curly brackets show where values go.</text>
      </svg>

      <h4>Old % style</h4><pre><code>name = "John"
age = 20
print("My name is %s and I am %d years old." % (name, age))</code></pre>
      <h4>.format() style</h4><pre><code>item = "Pizza"
price = 15.99
print("I bought a {} for {} dollars.".format(item, price))</code></pre>
      <h4>Modern f-strings</h4><pre><code>player = "Mario"
score = 500
print(f"{player} scored {score} points.")</code></pre><p>Put <code>f</code> before the opening quote. Maths can also go inside braces.</p><pre><code>base_price = 10
print(f"Total: {base_price + 2}")</code></pre>

      <div class="w w-match"><span class="w__k">Formatting timeline</span><p class="w__q">Match the style with its sign.</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a">Percent style</button><button data-pair="b"><code>.format()</code></button><button data-pair="c">f-string</button></div><div class="w-match__col"><button data-pair="c"><code>f"{name}"</code></button><button data-pair="a"><code>%s</code> and <code>%d</code></button><button data-pair="b"><code>"{}".format(value)</code></button></div></div><p class="w__why">All work, but f-strings are usually clearest.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Make a one-line story with an animal and an action inside an f-string.</div>
    `,
    mcqs: [
      { q:"Which is the newest common formatting style?", options:["f-strings","Only %s","Manual spaces","No formatting"], answer:0, why:"f-strings put variables directly inside readable text." },
      { q:"Where does f go?", options:["Before the opening quote","After the closing quote","Inside every bracket","At the end of the file"], answer:0, why:"The f prefix appears before the quote." },
      { q:"Which method fills {} placeholders?", options:[".format()",".join_only()",".input()",".type()"], answer:0, why:".format() sends values into braces." },
      { q:"Can f-strings do maths inside braces?", options:["Yes","No","Only on macOS","Only with strings"], answer:0, why:"Python evaluates expressions inside braces." }
    ],
    tasks: [
      { id:"u1t19a", kind:"code", title:"Task 19.1 — Modern message", brief:"Create hero=\"Batman\" and city=\"Gotham\". Use an f-string to print: Batman is the protector of Gotham.", starter:"hero = \"Batman\"\ncity = \"Gotham\"\n", checks:[{type:"stdoutEquals",value:"Batman is the protector of Gotham."},{type:"sourceRegex",pattern:"f['\"]",message:"Use an f-string"}] },
      { id:"u1t19b", kind:"code", title:"Task 19.2 — Maths in braces", brief:"Create base_price=10. Print: The total with tax is 12. Do +2 inside braces.", starter:"base_price = 10\n", checks:[{type:"stdoutEquals",value:"The total with tax is 12."},{type:"sourceRegex",pattern:"\\{[^}]*\\+[^}]*\\}",message:"Do addition inside braces"}] },
      { id:"u1t19c", kind:"code", title:"Task 19.3 — Use .format()", brief:"Create city=\"Paris\" and print: I want to visit Paris next year.", starter:"city = \"Paris\"\n", checks:[{type:"stdoutEquals",value:"I want to visit Paris next year."},{type:"sourceIncludes",value:".format(",message:"Use .format()"}] }
    ]
  },

  /* ====================== CHAPTER 20 ====================== */
  {
    id: "u1t20",
    title: "sys and Command-Line Arguments",
    summary: "Pass information to a script when it starts and read it from sys.argv.",
    notebookLM: "",
    notes: `
      <h4>The sys module connects Python to the system</h4><pre><code>import sys</code></pre>
      <p>A command-line argument is data given before a program starts.</p><pre><code>python mission.py open_door 25</code></pre>
      <svg class="fig" viewBox="0 0 700 245" role="img" aria-label="A terminal command is packed into the sys.argv list.">
        <rect class="box box--dark" x="35" y="35" width="630" height="70" rx="10"/><text x="350" y="78" text-anchor="middle" class="mono on-dark">python mission.py open_door 25</text><path class="arrow" d="M350 117 v35"/><path class="accent" d="M350 164 l-7 -13 h14 z"/>
        <rect class="box" x="55" y="172" width="180" height="52" rx="8"/><text x="145" y="194" text-anchor="middle" class="mono">mission.py</text><text x="145" y="217" text-anchor="middle" class="lbl">sys.argv[0]</text><rect class="box" x="260" y="172" width="180" height="52" rx="8"/><text x="350" y="194" text-anchor="middle" class="mono">open_door</text><text x="350" y="217" text-anchor="middle" class="lbl">sys.argv[1]</text><rect class="box" x="465" y="172" width="180" height="52" rx="8"/><text x="555" y="194" text-anchor="middle" class="mono">25</text><text x="555" y="217" text-anchor="middle" class="lbl">sys.argv[2]</text>
        <text x="350" y="242" text-anchor="middle" class="figcap">Item zero is always the script name.</text>
      </svg>

      <h4>Read the briefcase</h4><pre><code>import sys
print(sys.argv)
print(sys.argv[0])
print(sys.argv[1])</code></pre>
      <p>Extra arguments are strings. Convert them before number maths.</p><pre><code>number = int(sys.argv[1])
print(number * 10)</code></pre>

      <div class="w w-guess" data-answer="1"><span class="w__k">Open the briefcase</span><p class="w__q">For <code>python test.py Sarah</code>, what is <code>sys.argv[1]</code>?</p><div class="w-guess__opts"><button data-o="0">test.py</button><button data-o="1">Sarah</button><button data-o="2">python</button></div><p class="w__why">Item zero is the file name. The first extra value is item one.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Draw the list for <code>python game.py Ravi 5</code> and label indexes 0, 1 and 2.</div>
    `,
    mcqs: [
      { q:"Which line imports the system module?", options:["import sys","start sys","download system","open sys"], answer:0, why:"Use import sys." },
      { q:"What is a command-line argument?", options:["Data supplied when launching a script","An error","A comment","A package"], answer:0, why:"It is written after the file name in the command." },
      { q:"What is sys.argv[0]?", options:["The script file name","The first password","Always zero","The Python version"], answer:0, why:"Item zero stores the script name." },
      { q:"What type are argument values?", options:["Strings","Always integers","Always floats","Booleans only"], answer:0, why:"Terminal arguments arrive as text." }
    ],
    tasks: [
      { id:"u1t20a", kind:"code", title:"Task 20.1 — Inspect argv", brief:"Import sys and print the type name of sys.argv. Output: list", starter:"", checks:[{type:"stdoutEquals",value:"list"},{type:"sourceIncludes",value:"import sys",message:"Import sys"},{type:"sourceIncludes",value:"sys.argv",message:"Use sys.argv"}] },
      { id:"u1t20b", kind:"confirm", title:"Local argument mission", brief:"Use a saved .py file and terminal.", label:"I created a script that prints <code>sys.argv</code> and ran it with my name after the file name." }
    ]
  },

  /* ====================== CHAPTER 21 ====================== */
  {
    id: "u1t21",
    title: "Arithmetic and Assignment Operators",
    summary: "Use Python's maths tools and update stored values with short assignment operators.",
    notebookLM: "",
    notes: `
      <h4>Operators are action tools</h4>
      <p>In <code>5 + 10</code>, the numbers <code>5</code> and <code>10</code> are
      <strong>operands</strong>. The symbol <code>+</code> is the <strong>operator</strong>.</p>

      <h4>Basic arithmetic operators</h4>
      <table><thead><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Answer</th></tr></thead><tbody>
        <tr><td><code>+</code></td><td>Add</td><td><code>5 + 2</code></td><td>7</td></tr>
        <tr><td><code>-</code></td><td>Subtract</td><td><code>5 - 2</code></td><td>3</td></tr>
        <tr><td><code>*</code></td><td>Multiply</td><td><code>5 * 2</code></td><td>10</td></tr>
        <tr><td><code>/</code></td><td>Normal division</td><td><code>5 / 2</code></td><td>2.5</td></tr>
        <tr><td><code>//</code></td><td>Whole-number division</td><td><code>5 // 2</code></td><td>2</td></tr>
        <tr><td><code>%</code></td><td>Remainder</td><td><code>5 % 2</code></td><td>1</td></tr>
        <tr><td><code>**</code></td><td>Power</td><td><code>5 ** 2</code></td><td>25</td></tr>
      </tbody></table>

      <svg class="fig" viewBox="0 0 700 285" role="img" aria-label="Four friends share fourteen pizza slices. Each gets three slices and two slices remain.">
        <text x="350" y="28" text-anchor="middle" class="lbl">14 pizza slices shared by 4 friends</text>
        <g transform="translate(85,80)"><circle cx="0" cy="0" r="48" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="3"/><path d="M0 0L48 0M0 0L0 48M0 0L-48 0" stroke="#D67F19" stroke-width="2"/><text x="0" y="76" text-anchor="middle" class="lbl">Friend 1: 3</text></g>
        <g transform="translate(260,80)"><circle cx="0" cy="0" r="48" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="3"/><path d="M0 0L48 0M0 0L0 48M0 0L-48 0" stroke="#D67F19" stroke-width="2"/><text x="0" y="76" text-anchor="middle" class="lbl">Friend 2: 3</text></g>
        <g transform="translate(440,80)"><circle cx="0" cy="0" r="48" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="3"/><path d="M0 0L48 0M0 0L0 48M0 0L-48 0" stroke="#D67F19" stroke-width="2"/><text x="0" y="76" text-anchor="middle" class="lbl">Friend 3: 3</text></g>
        <g transform="translate(615,80)"><circle cx="0" cy="0" r="48" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="3"/><path d="M0 0L48 0M0 0L0 48M0 0L-48 0" stroke="#D67F19" stroke-width="2"/><text x="0" y="76" text-anchor="middle" class="lbl">Friend 4: 3</text></g>
        <rect class="box" x="160" y="190" width="180" height="62" rx="10"/><text x="250" y="218" text-anchor="middle" class="mono">14 // 4 = 3</text><text x="250" y="241" text-anchor="middle" class="lbl">whole slices each</text>
        <rect class="box" x="365" y="190" width="180" height="62" rx="10"/><text x="455" y="218" text-anchor="middle" class="mono">14 % 4 = 2</text><text x="455" y="241" text-anchor="middle" class="lbl">slices left</text>
        <text x="350" y="278" text-anchor="middle" class="figcap">Floor division shares whole items. Modulus finds leftovers.</text>
      </svg>

      <h4>Assignment shortcuts</h4>
      <p>These update a variable and save the new value.</p>
      <pre><code>wallet = 10
wallet += 5   # wallet is now 15
wallet -= 2   # wallet is now 13
wallet *= 2   # wallet is now 26</code></pre>

      <div class="w w-guess" data-answer="1"><span class="w__k">Remainder challenge</span><p class="w__q">What is <code>10 % 3</code>?</p><div class="w-guess__opts"><button data-o="0">3.33</button><button data-o="1">1</button><button data-o="2">3</button></div><p class="w__why">Three fits inside ten three full times. One remains.</p></div>
      <div class="w w-match"><span class="w__k">Operator garage</span><p class="w__q">Match each operator to its job.</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a"><code>//</code></button><button data-pair="b"><code>%</code></button><button data-pair="c"><code>**</code></button></div><div class="w-match__col"><button data-pair="c">Power</button><button data-pair="a">Whole division</button><button data-pair="b">Remainder</button></div></div><p class="w__why">These three operators solve different number problems.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Imagine 23 chocolates shared by 5 students. Predict <code>23 // 5</code> and <code>23 % 5</code>, then test them.</div>
    `,
    mcqs: [
      { q:"In 10 * 4, what is *?", options:["An operator","An operand","A variable","A comment"], answer:0, why:"The operator performs an action on operands." },
      { q:"What is 14 // 4?", options:["3","3.5","2","4"], answer:0, why:"Floor division keeps only the whole result." },
      { q:"What is 14 % 4?", options:["2","3","3.5","4"], answer:0, why:"Two slices remain after equal sharing." },
      { q:"What does score += 10 do?", options:["Adds 10 and saves the result","Makes score exactly 10","Checks equality","Deletes score"], answer:0, why:"It is short for score = score + 10." }
    ],
    tasks: [
      { id:"u1t21a", kind:"code", title:"Task 21.1 — Pizza sharing", brief:"Print how many whole slices each friend gets from 14 slices shared by 4 people. On the next line, print the leftover slices. Output must be 3 and 2.", starter:"slices = 14\nfriends = 4\n", checks:[{type:"stdoutEquals",value:"3\n2"},{type:"sourceIncludes",value:"//",message:"Use floor division //"},{type:"sourceIncludes",value:"%",message:"Use modulus %"}] },
      { id:"u1t21b", kind:"code", title:"Task 21.2 — Score power-up", brief:"Start score at 5. Use *= 2, then += 3, and print 13. On the next line print 3 to the power of 4, which is 81.", starter:"score = 5\n", checks:[{type:"stdoutEquals",value:"13\n81"},{type:"sourceIncludes",value:"*=",message:"Use *="},{type:"sourceIncludes",value:"+=",message:"Use +="},{type:"sourceIncludes",value:"**",message:"Use **"}] }
    ]
  },

  /* ====================== CHAPTER 22 ====================== */
  {
    id: "u1t22",
    title: "Comparison, Logical, Identity and Membership Operators",
    summary: "Ask Python true-or-false questions and check values, conditions, objects and collections.",
    notebookLM: "",
    notes: `
      <h4>Comparison operators ask questions</h4>
      <table><thead><tr><th>Operator</th><th>Question</th><th>Example</th></tr></thead><tbody>
        <tr><td><code>==</code></td><td>Are they equal?</td><td><code>5 == 5</code> gives <code>True</code></td></tr>
        <tr><td><code>!=</code></td><td>Are they different?</td><td><code>5 != 8</code> gives <code>True</code></td></tr>
        <tr><td><code>&gt;</code></td><td>Is the left side greater?</td><td><code>10 &gt; 4</code></td></tr>
        <tr><td><code>&lt;</code></td><td>Is the left side smaller?</td><td><code>2 &lt; 8</code></td></tr>
        <tr><td><code>&gt;=</code></td><td>Greater or equal?</td><td><code>18 &gt;= 18</code></td></tr>
        <tr><td><code>&lt;=</code></td><td>Smaller or equal?</td><td><code>6 &lt;= 9</code></td></tr>
      </tbody></table>
      <div class="callout"><strong>Remember:</strong> One <code>=</code> stores a value. Two <code>==</code> signs compare values.</div>

      <h4>Logical operators join questions</h4>
      <svg class="fig" viewBox="0 0 700 270" role="img" aria-label="AND needs both conditions, while OR needs at least one condition.">
        <rect class="box" x="35" y="35" width="280" height="190" rx="14"/><text x="175" y="68" text-anchor="middle" class="lbl">AND gate</text><circle cx="100" cy="112" r="26" fill="rgba(22,157,147,.16)" stroke="#169D93" stroke-width="3"/><text x="100" y="118" text-anchor="middle" class="mono">T</text><circle cx="100" cy="176" r="26" fill="rgba(22,157,147,.16)" stroke="#169D93" stroke-width="3"/><text x="100" y="182" text-anchor="middle" class="mono">T</text><path class="arrow" d="M136 112 h60 M136 176 h60 M196 112 v64 M196 144 h48"/><circle cx="267" cy="144" r="29" fill="rgba(22,157,147,.18)" stroke="#169D93" stroke-width="3"/><text x="267" y="150" text-anchor="middle" class="mono">True</text>
        <rect class="box" x="385" y="35" width="280" height="190" rx="14"/><text x="525" y="68" text-anchor="middle" class="lbl">OR gate</text><circle cx="450" cy="112" r="26" fill="rgba(220,80,80,.12)" stroke="#C94C4C" stroke-width="3"/><text x="450" y="118" text-anchor="middle" class="mono">F</text><circle cx="450" cy="176" r="26" fill="rgba(22,157,147,.16)" stroke="#169D93" stroke-width="3"/><text x="450" y="182" text-anchor="middle" class="mono">T</text><path class="arrow" d="M486 112 h60 M486 176 h60 M546 112 v64 M546 144 h48"/><circle cx="617" cy="144" r="29" fill="rgba(22,157,147,.18)" stroke="#169D93" stroke-width="3"/><text x="617" y="150" text-anchor="middle" class="mono">True</text><text x="350" y="258" text-anchor="middle" class="figcap">and needs both. or needs at least one. not flips the answer.</text>
      </svg>
      <ul><li><code>and</code>: both sides must be true.</li><li><code>or</code>: one or both sides may be true.</li><li><code>not</code>: changes <code>True</code> to <code>False</code>, or the reverse.</li></ul>

      <h4>Identity checks the exact object</h4>
      <p><code>is</code> and <code>is not</code> check whether two names point to the same object in memory. For normal value comparison, usually use <code>==</code>.</p>
      <h4>Membership checks inside a collection</h4>
      <pre><code>name = "Batman"
print("Bat" in name)       # True
print("Joker" not in name) # True</code></pre>

      <div class="w w-guess" data-answer="1"><span class="w__k">Double condition</span><p class="w__q">What is <code>(5 &gt; 2) and (10 &lt; 5)</code>?</p><div class="w-guess__opts"><button data-o="0">True</button><button data-o="1">False</button><button data-o="2">10</button></div><p class="w__why">The second comparison is false. and needs both comparisons to be true.</p></div>
      <div class="w w-spot"><span class="w__k">Spot the mistake</span><p class="w__q">Which line tries to compare but uses assignment?</p><div class="w-spot__line"><button>age = 18</button><button data-bad>print(age = 18)</button><button>print(age == 18)</button></div><p class="w__why">Use <code>==</code> to ask whether two values are equal.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Make two cards: “has ticket” and “has ID.” Try every True/False combination with <code>and</code>.</div>
    `,
    mcqs: [
      { q:"What is the difference between = and ==?", options:["= assigns; == compares","They are identical","== assigns; = compares","Both print values"], answer:0, why:"One equals sign stores. Two ask an equality question." },
      { q:"When is A and B true?", options:["When both are true","When only A is true","When either is true","Never"], answer:0, why:"and needs every condition to be true." },
      { q:"Which operator checks whether a letter is inside a word?", options:["in","is","=","**"], answer:0, why:"Membership uses in or not in." },
      { q:"What does not True produce?", options:["False","True","0 only","An error"], answer:0, why:"not flips a Boolean value." }
    ],
    tasks: [
      { id:"u1t22a", kind:"code", title:"Task 22.1 — Double check", brief:"Print the result of checking that 100 equals 100 AND 50 is not equal to 40. Output: True", starter:"", checks:[{type:"stdoutEquals",value:"True"},{type:"sourceIncludes",value:"and",message:"Use and"},{type:"sourceIncludes",value:"==",message:"Use =="},{type:"sourceIncludes",value:"!=",message:"Use !="}] },
      { id:"u1t22b", kind:"code", title:"Task 22.2 — Discount access", brief:"Set is_vip=False and has_coupon=True. Print whether either condition gives a discount. Output: True", starter:"is_vip = False\nhas_coupon = True\n", checks:[{type:"stdoutEquals",value:"True"},{type:"sourceIncludes",value:"or",message:"Use or"}] },
      { id:"u1t22c", kind:"code", title:"Task 22.3 — Membership guard", brief:"Set vowels='aeiou'. Print whether e is in vowels. On the next line print whether dog is not in 'I love my cat'. Both lines must be True.", starter:"vowels = \"aeiou\"\n", checks:[{type:"stdoutEquals",value:"True\nTrue"},{type:"sourceIncludes",value:" in ",message:"Use in"},{type:"sourceIncludes",value:"not in",message:"Use not in"}] }
    ]
  },

  /* ====================== CHAPTER 23 ====================== */
  {
    id: "u1t23",
    title: "Bitwise Operators, Precedence and Expression Rules",
    summary: "Know which operation Python performs first and how larger expressions are solved.",
    notebookLM: "",
    notes: `
      <h4>A quick look at bitwise operators</h4>
      <p>Computers store data as <code>1</code>s and <code>0</code>s. Bitwise operators work directly with those bits.</p>
      <p>Examples are <code>&amp;</code> (bitwise AND), <code>|</code> (bitwise OR), <code>~</code> (bitwise NOT), and <code>&lt;&lt;</code> (left shift). Beginners do not use them often, but it is useful to know they exist.</p>

      <h4>Precedence means “who goes first?”</h4>
      <svg class="fig" viewBox="0 0 700 300" role="img" aria-label="A traffic light shows Python's order of operations from parentheses to addition and subtraction.">
        <rect x="225" y="18" width="250" height="246" rx="28" fill="rgba(30,39,52,.95)"/>
        <circle cx="285" cy="78" r="36" fill="#D95A52"><animate attributeName="opacity" values="1;.45;1" dur="2.6s" repeatCount="indefinite"/></circle><text x="350" y="72" class="on-dark lbl">1. Parentheses ( )</text><text x="350" y="93" class="on-dark lbl">2. Powers **</text>
        <circle cx="285" cy="143" r="36" fill="#E4B544"><animate attributeName="opacity" values=".45;1;.45" dur="2.6s" repeatCount="indefinite"/></circle><text x="350" y="137" class="on-dark lbl">3. *, /, //, %</text><text x="350" y="158" class="on-dark lbl">same level</text>
        <circle cx="285" cy="208" r="36" fill="#39A96B"><animate attributeName="opacity" values="1;.5;1" dur="2.6s" repeatCount="indefinite"/></circle><text x="350" y="203" class="on-dark lbl">4. + and -</text><text x="350" y="224" class="on-dark lbl">after multiplication</text>
        <text x="350" y="293" text-anchor="middle" class="figcap">Parentheses can change the normal order.</text>
      </svg>
      <ol><li>Parentheses <code>()</code></li><li>Exponents <code>**</code></li><li>Multiplication, division, floor division and modulus</li><li>Addition and subtraction</li></ol>
      <pre><code>print(5 + 2 * 3)     # 11
print((5 + 2) * 3)   # 21</code></pre>

      <h4>Associativity breaks a tie</h4>
      <p>Most operators at the same level run from left to right.</p><pre><code>50 - 10 - 5   # (50 - 10) - 5 = 35</code></pre>
      <p>Powers are an important exception. They group from right to left.</p><pre><code>2 ** 3 ** 2   # 2 ** (3 ** 2) = 512</code></pre>

      <h4>Composition joins small expressions</h4>
      <pre><code>result = (5 + 5) >= 10 and (20 % 2) == 0
print(result)  # True</code></pre>
      <div class="w w-guess" data-answer="1"><span class="w__k">Traffic-light test</span><p class="w__q">What is <code>5 + 2 * 3</code>?</p><div class="w-guess__opts"><button data-o="0">21</button><button data-o="1">11</button><button data-o="2">10</button></div><p class="w__why">Multiplication happens before addition.</p></div>
      <div class="w"><span class="w__k">Tap to reveal</span><p class="w__q">How can you force addition to happen first?</p><div class="w-flip"><button class="w-flip__card"><span class="w-flip__front">Reveal the tool</span><span class="w-flip__back">Use parentheses: <code>(5 + 2) * 3</code>.</span></button></div></div>
      <div class="callout"><strong>Mini activity:</strong> Create two expressions using the same three numbers but different parentheses. Make the answers different.</div>
    `,
    mcqs: [
      { q:"What is 5 + 2 * 3?", options:["11","21","10","30"], answer:0, why:"Multiplication runs before addition." },
      { q:"What forces an operation to run first?", options:["Parentheses","A comment","A space","A comma"], answer:0, why:"Parentheses have the highest priority here." },
      { q:"What do bitwise operators work with?", options:["Binary bits","Only sentences","Web colours","File names"], answer:0, why:"They manipulate 1s and 0s at a low level." },
      { q:"Most operators of equal priority are evaluated in which direction?", options:["Left to right","Right to left only","Randomly","Top to bottom"], answer:0, why:"Left-to-right is the common associativity rule." }
    ],
    tasks: [
      { id:"u1t23a", kind:"code", title:"Task 23.1 — Change the order", brief:"First print 4 * 5 + 10. Then use parentheses to add 5 and 10 first and multiply by 4. Output: 30 then 60.", starter:"", checks:[{type:"stdoutEquals",value:"30\n60"},{type:"sourceIncludes",value:"(",message:"Use parentheses"}] },
      { id:"u1t23b", kind:"code", title:"Task 23.2 — Expression castle", brief:"Print whether 10*2 equals 20 AND 50/2 is greater than 10. Output: True", starter:"", checks:[{type:"stdoutEquals",value:"True"},{type:"sourceIncludes",value:"and",message:"Use and"},{type:"sourceIncludes",value:"==",message:"Use =="},{type:"sourceIncludes",value:">",message:"Use >"}] },
      { id:"u1t23c", kind:"code", title:"Task 23.3 — Tie breakers", brief:"Print 50 - 10 - 5. On the next line print 2 ** 3 ** 2. Output: 35 and 512.", starter:"", checks:[{type:"stdoutEquals",value:"35\n512"},{type:"sourceIncludes",value:"**",message:"Use exponentiation"}] }
    ]
  },

  /* ====================== CHAPTER 24 ====================== */
  {
    id: "u1t24",
    title: "Built-in Number Functions",
    summary: "Use ready-made Python functions for distance, rounding, totals, limits and powers.",
    notebookLM: "",
    notes: `
      <h4>Python already has a pocket calculator</h4>
      <p>These functions are built in. You can use them without importing a module.</p>
      <svg class="fig" viewBox="0 0 700 290" role="img" aria-label="A pocket calculator shows Python's built-in number functions.">
        <rect x="190" y="18" width="320" height="246" rx="25" fill="rgba(30,39,52,.96)"/><rect x="220" y="45" width="260" height="55" rx="8" fill="#EAF6EF"/><text x="350" y="80" text-anchor="middle" class="mono">abs  round  min  max</text>
        <g class="mono"><rect x="225" y="122" width="72" height="45" rx="8" fill="#F5F6F8"/><text x="261" y="151" text-anchor="middle">sum</text><rect x="314" y="122" width="72" height="45" rx="8" fill="#F5F6F8"/><text x="350" y="151" text-anchor="middle">pow</text><rect x="403" y="122" width="72" height="45" rx="8" fill="#F5F6F8"/><text x="439" y="151" text-anchor="middle">max</text><rect x="225" y="183" width="72" height="45" rx="8" fill="#F5F6F8"/><text x="261" y="212" text-anchor="middle">abs</text><rect x="314" y="183" width="72" height="45" rx="8" fill="#F5F6F8"/><text x="350" y="212" text-anchor="middle">min</text><rect x="403" y="183" width="72" height="45" rx="8" fill="#F5F6F8"/><text x="439" y="212" text-anchor="middle">round</text></g>
        <text x="350" y="286" text-anchor="middle" class="figcap">Built-in means ready immediately.</text>
      </svg>
      <table><thead><tr><th>Function</th><th>Simple job</th><th>Example</th></tr></thead><tbody>
        <tr><td><code>abs()</code></td><td>Positive distance from zero</td><td><code>abs(-10)</code> gives 10</td></tr>
        <tr><td><code>round()</code></td><td>Round a number</td><td><code>round(8.7)</code> gives 9</td></tr>
        <tr><td><code>min()</code></td><td>Smallest value</td><td><code>min(8, 2, 5)</code> gives 2</td></tr>
        <tr><td><code>max()</code></td><td>Largest value</td><td><code>max(8, 2, 5)</code> gives 8</td></tr>
        <tr><td><code>sum()</code></td><td>Add a collection</td><td><code>sum([10, 20, 30])</code> gives 60</td></tr>
        <tr><td><code>pow()</code></td><td>Raise to a power</td><td><code>pow(3, 2)</code> gives 9</td></tr>
      </tbody></table>
      <div class="w w-match"><span class="w__k">Calculator buttons</span><p class="w__q">Match each function to its result.</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a"><code>abs(-7)</code></button><button data-pair="b"><code>max(3, 9, 4)</code></button><button data-pair="c"><code>sum([2, 3, 5])</code></button></div><div class="w-match__col"><button data-pair="c">10</button><button data-pair="a">7</button><button data-pair="b">9</button></div></div><p class="w__why">Each function has one clear job.</p></div>
      <div class="w w-guess" data-answer="2"><span class="w__k">Round the bill</span><p class="w__q">What is <code>round(24.51)</code>?</p><div class="w-guess__opts"><button data-o="0">24.51</button><button data-o="1">24</button><button data-o="2">25</button></div><p class="w__why">24.51 is closer to 25 than to 24.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Write five scores on paper. Predict their minimum, maximum and sum before asking Python.</div>
    `,
    mcqs: [
      { q:"Which function finds the highest value?", options:["max()","high()","top()","sum()"], answer:0, why:"max means maximum." },
      { q:"What does abs(-15) return?", options:["15","-15","0","An error"], answer:0, why:"Absolute value gives positive distance from zero." },
      { q:"What must sum() usually receive here?", options:["A collection such as a list","Only a string","A comment","A file name"], answer:0, why:"sum adds numbers from an iterable collection." },
      { q:"Which call means 5 to the power of 3?", options:["pow(5, 3)","power[5, 3]","5 pow 3","sum(5, 3)"], answer:0, why:"pow(base, exponent) raises the base to the exponent." }
    ],
    tasks: [
      { id:"u1t24a", kind:"code", title:"Task 24.1 — Number toolkit", brief:"Print abs(-15), round(24.51), the maximum of 450, 900, 150, and the minimum of those scores. Output: 15, 25, 900, 150 on separate lines.", starter:"", checks:[{type:"stdoutEquals",value:"15\n25\n900\n150"},{type:"sourceIncludes",value:"abs(",message:"Use abs()"},{type:"sourceIncludes",value:"round(",message:"Use round()"},{type:"sourceIncludes",value:"max(",message:"Use max()"},{type:"sourceIncludes",value:"min(",message:"Use min()"}] },
      { id:"u1t24b", kind:"code", title:"Task 24.2 — Cart and power", brief:"Create cart=[5,10,15]. Print its sum. On the next line print 5 to the power of 3 using pow(). Output: 30 and 125.", starter:"cart = [5, 10, 15]\n", checks:[{type:"stdoutEquals",value:"30\n125"},{type:"sourceIncludes",value:"sum(",message:"Use sum()"},{type:"sourceIncludes",value:"pow(",message:"Use pow()"}] }
    ]
  },

  /* ====================== CHAPTER 25 ====================== */
  {
    id: "u1t25",
    title: "The math Module",
    summary: "Open Python's scientific calculator for square roots, rounding, angles and formulas.",
    notebookLM: "",
    notes: `
      <h4>Import the scientific calculator</h4>
      <pre><code>import math</code></pre>
      <p>After importing, write <code>math.</code> before a tool name.</p>
      <svg class="fig" viewBox="0 0 700 310" role="img" aria-label="A scientific calculator displays sqrt, ceil, floor, log, sine, cosine and tangent.">
        <rect x="180" y="16" width="340" height="270" rx="24" fill="rgba(30,39,52,.96)"/><rect x="215" y="42" width="270" height="58" rx="8" fill="#EAF6EF"/><text x="350" y="78" text-anchor="middle" class="mono">math.sqrt(81) = 9.0</text>
        <g class="mono"><rect x="215" y="120" width="78" height="42" rx="7" fill="#F4F5F7"/><text x="254" y="147" text-anchor="middle">sqrt</text><rect x="311" y="120" width="78" height="42" rx="7" fill="#F4F5F7"/><text x="350" y="147" text-anchor="middle">ceil</text><rect x="407" y="120" width="78" height="42" rx="7" fill="#F4F5F7"/><text x="446" y="147" text-anchor="middle">floor</text><rect x="215" y="180" width="78" height="42" rx="7" fill="#F4F5F7"/><text x="254" y="207" text-anchor="middle">sin</text><rect x="311" y="180" width="78" height="42" rx="7" fill="#F4F5F7"/><text x="350" y="207" text-anchor="middle">cos</text><rect x="407" y="180" width="78" height="42" rx="7" fill="#F4F5F7"/><text x="446" y="207" text-anchor="middle">log</text></g>
        <text x="350" y="270" text-anchor="middle" class="on-dark lbl">First import math</text><text x="350" y="307" text-anchor="middle" class="figcap">The module adds advanced mathematical tools.</text>
      </svg>

      <h4>Important tools</h4>
      <ul>
        <li><code>math.sqrt(25)</code> gives <code>5.0</code>.</li>
        <li><code>math.ceil(3.1)</code> always rounds up to <code>4</code>.</li>
        <li><code>math.floor(3.9)</code> always rounds down to <code>3</code>.</li>
        <li><code>math.log()</code> works with logarithms.</li>
        <li><code>math.sin()</code>, <code>math.cos()</code> and <code>math.tan()</code> work with angles.</li>
      </ul>
      <h4>Write a polynomial as an expression</h4>
      <pre><code># 2x² + 3x + 1 when x is 4
x = 4
answer = 2 * (x ** 2) + (3 * x) + 1
print(answer)</code></pre>

      <div class="w w-guess" data-answer="2"><span class="w__k">Paint-can challenge</span><p class="w__q">You need 5.01 cans. What is <code>math.ceil(5.01)</code>?</p><div class="w-guess__opts"><button data-o="0">5.01</button><button data-o="1">5</button><button data-o="2">6</button></div><p class="w__why">Ceiling always moves up to the next whole number.</p></div>
      <div class="w w-match"><span class="w__k">Scientific toolbox</span><p class="w__q">Match the tool to the real problem.</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a"><code>sqrt</code></button><button data-pair="b"><code>ceil</code></button><button data-pair="c"><code>floor</code></button></div><div class="w-match__col"><button data-pair="c">Whole slices you can afford</button><button data-pair="a">Side of a square</button><button data-pair="b">Whole paint cans to buy</button></div></div><p class="w__why">The context tells us whether to find a root, round up, or round down.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Draw a square with area 64. Predict its side, then check using <code>math.sqrt(64)</code>.</div>
    `,
    mcqs: [
      { q:"What must appear before math.sqrt()?", options:["import math","start calculator","pip install sqrt","open math"], answer:0, why:"math is in the standard library and must be imported." },
      { q:"What is math.ceil(8.2)?", options:["9","8","8.2","7"], answer:0, why:"ceil always rounds upward." },
      { q:"What is math.floor(8.9)?", options:["8","9","8.9","10"], answer:0, why:"floor always rounds downward." },
      { q:"Which tools help calculate angles?", options:["sin, cos and tan","ceil and floor only","print and input","min and max only"], answer:0, why:"Trigonometric functions work with angles and triangles." }
    ],
    tasks: [
      { id:"u1t25a", kind:"code", title:"Task 25.1 — Scientific tools", brief:"Import math. Print sqrt(81), ceil(5.01), and floor(19.99) on separate lines. Output: 9.0, 6, 19.", starter:"import math\n", checks:[{type:"stdoutEquals",value:"9.0\n6\n19"},{type:"sourceIncludes",value:"math.sqrt(",message:"Use math.sqrt()"},{type:"sourceIncludes",value:"math.ceil(",message:"Use math.ceil()"},{type:"sourceIncludes",value:"math.floor(",message:"Use math.floor()"}] },
      { id:"u1t25b", kind:"code", title:"Task 25.2 — Polynomial", brief:"Set x=3. Calculate x squared plus 5 times x. Print 24.", starter:"x = 3\n", checks:[{type:"stdoutEquals",value:"24"},{type:"sourceIncludes",value:"**",message:"Use ** for the square"},{type:"sourceIncludes",value:"*",message:"Use multiplication"}] }
    ]
  },

  /* ====================== CHAPTER 26 ====================== */
  {
    id: "u1t26",
    title: "The statistics Module",
    summary: "Turn a group of numbers into a simple story using mean, median, mode and spread.",
    notebookLM: "",
    notes: `
      <h4>Statistics makes a crowd easier to understand</h4>
      <p>Import the toolbox first.</p><pre><code>import statistics</code></pre>
      <ul>
        <li><strong>Mean:</strong> add all values and divide by the number of values.</li>
        <li><strong>Median:</strong> the middle value after sorting.</li>
        <li><strong>Mode:</strong> the value seen most often.</li>
        <li><strong>Variance and standard deviation:</strong> show how spread out values are.</li>
      </ul>
      <svg class="fig" viewBox="0 0 700 310" role="img" aria-label="Shoe sizes 8, 9, 9, 10 and 12 are summarized by mean 9.6, median 9 and mode 9.">
        <text x="350" y="27" text-anchor="middle" class="lbl">Shoe sizes</text>
        <g><rect class="box" x="65" y="55" width="90" height="70" rx="12"/><text x="110" y="99" text-anchor="middle" class="mono">8</text><rect class="box" x="185" y="55" width="90" height="70" rx="12"/><text x="230" y="99" text-anchor="middle" class="mono">9</text><rect x="305" y="55" width="90" height="70" rx="12" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="3"/><text x="350" y="99" text-anchor="middle" class="mono">9</text><rect class="box" x="425" y="55" width="90" height="70" rx="12"/><text x="470" y="99" text-anchor="middle" class="mono">10</text><rect class="box" x="545" y="55" width="90" height="70" rx="12"/><text x="590" y="99" text-anchor="middle" class="mono">12</text></g>
        <path class="arrow" d="M350 137 v35"/><path class="accent" d="M350 184 l-7 -13 h14 z"/>
        <rect class="box" x="55" y="196" width="175" height="70" rx="12"/><text x="142" y="225" text-anchor="middle" class="lbl">Mean</text><text x="142" y="251" text-anchor="middle" class="mono">9.6</text><rect class="box" x="262" y="196" width="175" height="70" rx="12"/><text x="349" y="225" text-anchor="middle" class="lbl">Median</text><text x="349" y="251" text-anchor="middle" class="mono">9</text><rect class="box" x="470" y="196" width="175" height="70" rx="12"/><text x="557" y="225" text-anchor="middle" class="lbl">Mode</text><text x="557" y="251" text-anchor="middle" class="mono">9</text>
        <text x="350" y="302" text-anchor="middle" class="figcap">The middle and most common value are both 9.</text>
      </svg>
      <pre><code>import statistics
shoe_sizes = [8, 9, 9, 10, 12]
print(statistics.mean(shoe_sizes))
print(statistics.median(shoe_sizes))
print(statistics.mode(shoe_sizes))</code></pre>

      <h4>Understanding spread</h4>
      <p>Class A scores <code>[70, 70, 70]</code> have no spread. Class B scores <code>[40, 70, 100]</code> have a large spread, even though both classes have mean 70.</p>
      <p><code>statistics.pstdev()</code> can measure population standard deviation.</p>

      <div class="w w-match"><span class="w__k">Three-M game</span><p class="w__q">Match each word to its meaning.</p><div class="w-match__grid"><div class="w-match__col"><button data-pair="a">Mean</button><button data-pair="b">Median</button><button data-pair="c">Mode</button></div><div class="w-match__col"><button data-pair="c">Most common</button><button data-pair="a">Average</button><button data-pair="b">Middle</button></div></div><p class="w__why">Mean, median and mode describe different parts of the same data.</p></div>
      <div class="w w-guess" data-answer="2"><span class="w__k">Spread detector</span><p class="w__q">What does a high standard deviation usually mean?</p><div class="w-guess__opts"><button data-o="0">All numbers are equal</button><button data-o="1">The mean is zero</button><button data-o="2">The numbers are widely spread</button></div><p class="w__why">High standard deviation means many values are far from the mean.</p></div>
      <div class="callout"><strong>Mini activity:</strong> Ask five classmates for a shoe size. Find the mean, median and mode by hand, then verify with Python.</div>
    `,
    mcqs: [
      { q:"Which function finds the average?", options:["statistics.mean()","statistics.mode()","statistics.middle()","statistics.total()"], answer:0, why:"Mean is the arithmetic average." },
      { q:"What does mode mean?", options:["Most common value","Highest value","Total value","First value"], answer:0, why:"Mode is the value with the greatest frequency." },
      { q:"What does median mean?", options:["Middle value after sorting","Average only","Largest value","Spread"], answer:0, why:"The median is the central ordered value." },
      { q:"What does high standard deviation suggest?", options:["Values are widely spread","All values are identical","No data exists","The program failed"], answer:0, why:"Large spread creates a larger standard deviation." }
    ],
    tasks: [
      { id:"u1t26a", kind:"code", title:"Task 26.1 — Shoe-size report", brief:"Import statistics and create shoe_sizes=[8,9,9,10,12]. Print mean, median and mode. Output: 9.6, 9, 9.", starter:"import statistics\nshoe_sizes = [8, 9, 9, 10, 12]\n", checks:[{type:"stdoutEquals",value:"9.6\n9\n9"},{type:"sourceIncludes",value:"statistics.mean(",message:"Use statistics.mean()"},{type:"sourceIncludes",value:"statistics.median(",message:"Use statistics.median()"},{type:"sourceIncludes",value:"statistics.mode(",message:"Use statistics.mode()"}] },
      { id:"u1t26b", kind:"code", title:"Task 26.2 — Compare spread", brief:"Print the population standard deviation of [70,70,70]. Then print the population standard deviation of [40,70,100] rounded to 2 decimal places. Output: 0.0 and 24.49.", starter:"import statistics\n", checks:[{type:"stdoutEquals",value:"0.0\n24.49"},{type:"sourceIncludes",value:"statistics.pstdev(",message:"Use statistics.pstdev()"},{type:"sourceIncludes",value:"round(",message:"Round the second value"}] }
    ]
  }
  ],

  /* ========================== FINAL UNIT TEST ========================== */
  test: {
    title: "Unit 1 Final Test",
    marksPerQuestion: 2,
    durationMinutes: 45,
    questions: [
      { q:"Why is Python called a high-level language?", options:["It runs only on tall computers","It is closer to human language","It uses only 1s and 0s","It is only for experts"], answer:1 },
      { q:"Who created Python?", options:["James Gosling","Guido van Rossum","Dennis Ritchie","Bill Gates"], answer:1 },
      { q:"Where did the name Python come from?", options:["A British comedy show","A snake farm","A space mission","A maths formula"], answer:0 },
      { q:"Which is a limitation of Python?", options:["It costs a lot","It has no community","It can be slower than compiled languages","It cannot print text"], answer:2 },
      { q:"Which version should this course use?", options:["Python 1","Python 2 only","Python 3","No version"], answer:2 },
      { q:"What important Windows installer option helps the terminal find Python?", options:["Install games","Add Python to PATH","Use dark mode","Delete old files"], answer:1 },
      { q:"Which command checks the installed Python version?", options:["python --version","show python","python list","version install"], answer:0 },
      { q:"Which simple editor usually comes with Python?", options:["Photoshop","IDLE","Excel","JupyterLab only"], answer:1 },
      { q:"Which tool is best known for mixing text cells, code cells and graphs?", options:["Command Prompt","IDLE only","Jupyter Notebook","Notepad"], answer:2 },
      { q:"Which command installs the requests package?", options:["pip install requests","python get requests","download requests","pip list requests"], answer:0 },
      { q:"Why use separate virtual environments?", options:["To make the screen brighter","To isolate project packages","To remove Python","To avoid saving files"], answer:1 },
      { q:"What is requirements.txt mainly used for?", options:["Storing passwords","Listing project packages","Writing test answers","Saving screenshots"], answer:1 },
      { q:"What do the >>> arrows show?", options:["Python Shell is waiting","A virus is active","A file is deleted","The computer is off"], answer:0 },
      { q:"Which file extension marks a Python script?", options:[".txt",".docx",".py",".html"], answer:2 },
      { q:"How do you run hello.py from a terminal in its folder?", options:["open hello","python hello.py","run.py hello","pip hello.py"], answer:1 },
      { q:"Which is an expression?", options:["10 + 5","# a note","import only","A file name"], answer:0 },
      { q:"Which symbol starts a single-line comment?", options:["//","#","<!--","**"], answer:1 },
      { q:"What is indentation used for in Python?", options:["Making text colourful","Grouping code blocks","Downloading packages","Changing file names"], answer:1 },
      { q:"Which function gives a detailed explanation of a Python tool?", options:["dir()","help()","type()","sum()"], answer:1 },
      { q:"Which function lists names and abilities inside an object?", options:["dir()","ask()","print_only()","pip()"], answer:0 },
      { q:"Which word brings a module into a program?", options:["invite","download","import","attach"], answer:2 },
      { q:"Which is a valid identifier?", options:["1student","student score","student_score_1","student-score"], answer:2 },
      { q:"Which line swaps a and b in Python?", options:["a = b only","a, b = b, a","swap(a b)","a == b"], answer:1 },
      { q:"What does type(10) report?", options:["str","float","int","bool"], answer:2 },
      { q:"What type is the value \"100\"?", options:["int","str","float","bool"], answer:1 },
      { q:"Which expression converts \"25\" to a whole number?", options:["str(25)","float_only(25)","int(\"25\")","list(25)"], answer:2 },
      { q:"Which symbols create a list?", options:["( )","[ ]","{ }","< >"], answer:1 },
      { q:"What type does input() return?", options:["Always str","Always int","Always float","Always bool"], answer:0 },
      { q:"What does sep specify in print()?", options:["The value between printed items","The Python version","The file name","The variable type"], answer:0 },
      { q:"Which is a correct f-string?", options:["f\"Hello {name}\"","\"Hello\" f(name)","format f name","%f{name}"], answer:0 },
      { q:"What does sys.argv[0] normally contain?", options:["The first extra word","The script file name","Always the number zero","The user's age"], answer:1 },
      { q:"What is 14 // 4?", options:["3.5","2","3","4"], answer:2 },
      { q:"What is 14 % 4?", options:["3","2","3.5","0"], answer:1 },
      { q:"Which operator asks whether two values are equal?", options:["=","==","+=","is always"], answer:1 },
      { q:"When does A and B become True?", options:["When both are True","When only one is True","When both are False","Always"], answer:0 },
      { q:"What is 5 + 2 * 3?", options:["21","11","10","30"], answer:1 },
      { q:"Which function finds the largest number?", options:["min()","sum()","max()","abs()"], answer:2 },
      { q:"What is math.ceil(5.01)?", options:["5","5.01","6","4"], answer:2 },
      { q:"What is the median?", options:["The total","The middle ordered value","The most common value","The largest value"], answer:1 },
      { q:"What does a high standard deviation usually mean?", options:["Values are widely spread","All values are equal","There is no mean","Python is not installed"], answer:0 }
    ]
  },

  /* ========================== UNIT PROJECT ========================== */
  project: {
    title: "Unit 1 Project — Student Learning Report Generator",
    summary: "Build one useful Python program that collects student details and marks, performs calculations, and prints a clear learning report.",
    brief: `
      <h4>Your mission</h4>
      <p>Create a Python file named <code>student_learning_report.py</code>. It will ask for a student's details and five subject marks, calculate useful values, and print an attractive report.</p>

      <h4>Files to submit</h4>
      <ol>
        <li><code>student_learning_report.py</code></li>
        <li><code>README.md</code> with setup and run steps</li>
        <li><code>requirements.txt</code></li>
        <li>One screenshot showing a complete successful run</li>
      </ol>

      <h4>Required Python features</h4>
      <ol>
        <li>Start with a triple-quoted <strong>docstring</strong> explaining the program.</li>
        <li>Add at least <strong>four useful # comments</strong>.</li>
        <li>Create the constant <code>PASS_MARK = 60</code> using capital letters.</li>
        <li>Use <code>input()</code> to ask for name, roll number, age, and five marks.</li>
        <li>Convert age and marks to the correct number types.</li>
        <li>Store the five marks in one <strong>list</strong>.</li>
        <li>Use <code>sum()</code>, <code>min()</code>, <code>max()</code>, <code>statistics.mean()</code>, <code>statistics.median()</code>, and <code>statistics.mode()</code>.</li>
        <li>Use arithmetic operators and at least one assignment shortcut such as <code>+=</code>.</li>
        <li>Use comparison and logical operators to create Boolean values such as <code>has_passed</code> and <code>all_marks_valid</code>.</li>
        <li>Use a membership check such as <code>"Python" in favourite_subject</code>.</li>
        <li>Use <code>math.ceil()</code> to calculate how many study sessions are needed when one session covers 20 marks of improvement.</li>
        <li>Use an f-string for the main report. Also use <code>sep=</code> and <code>end=</code> at least once.</li>
        <li>Print at least 15 readable output lines.</li>
      </ol>

      <h4>Environment work</h4>
      <ol>
        <li>Create a virtual environment named <code>unit1_env</code>.</li>
        <li>Activate it using the command for your operating system.</li>
        <li>Your main project can use only standard-library modules, so no extra package is required.</li>
        <li>Run <code>pip freeze &gt; requirements.txt</code>. An empty file is acceptable when no external package is used.</li>
      </ol>

      <h4>Example report</h4>
      <pre><code>========================================
       STUDENT LEARNING REPORT
========================================
Name        : Asha Verma
Roll Number : 26CS014
Age         : 18
Marks       : 72 | 65 | 88 | 72 | 91
Total       : 388
Mean        : 77.6
Median      : 72
Mode        : 72
Lowest      : 65
Highest     : 91
Passed      : True
========================================</code></pre>

      <h4>Optional bonus</h4>
      <ul>
        <li>Read the student's name from <code>sys.argv</code> when it is supplied.</li>
        <li>Install and use <code>colorama</code> for coloured terminal output, then ensure it appears in <code>requirements.txt</code>.</li>
      </ul>

      <h4>Marking guide</h4>
      <ul>
        <li><strong>30% - Correctness:</strong> the program runs and calculations are correct.</li>
        <li><strong>25% - Unit 1 concepts:</strong> the required Python features are present.</li>
        <li><strong>20% - Input and output:</strong> prompts and report are clear and friendly.</li>
        <li><strong>15% - Code quality:</strong> useful names, comments, docstring and clean structure.</li>
        <li><strong>10% - Submission quality:</strong> README, requirements file, screenshot and working link.</li>
      </ul>

      <h4>How to submit</h4>
      <p>Upload the complete project folder to a public GitHub repository, or to Google Drive with access set to <em>Anyone with the link</em>. Test the link in a private browser window before submitting it below.</p>
    `
  }
}
];
