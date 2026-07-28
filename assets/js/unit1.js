/* ==========================================================================
   AbhyasLab — UNIT 1 — RICH CONTENT EDITION
   Rich visual and interactive content edition.

   Expanded explanations, worked examples, inline SVG images, animations,
   diagrams, student interactions and games. Existing IDs, MCQs, tasks,
   checkpoints, tests and projects are preserved.
   ========================================================================== */

const UNIT_1 = {
  "unit": "Unit 1",
  "unitTitle": "Introduction, Python Environment and Programming Basics — Practice Edition",
  "topics": [
    {
      "id": "u1t01",
      "title": "What is Python?",
      "summary": "A friendly translator between you and the computer — plus where it came from.",
      "notebookLM": "",
      "notes": "\n      <h4>The robot who speaks alien</h4>\n      <p>Imagine you own a robot. The robot only understands one language: 1s and 0s.</p>\n      <p>You want a cup of tea. To ask for it, you would have to type a million 1s and 0s.\n      Just to say \"boil the water\". You would be there all day.</p>\n\n      <p><strong>Python is a friendly translator.</strong> You write a short line that looks\n      like English. Python turns it into 1s and 0s for you.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"You write English-like code, Python translates it, the computer runs it.\">\n        <text x=\"90\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">You write</text>\n        <rect class=\"box\" x=\"8\" y=\"40\" width=\"164\" height=\"82\" rx=\"8\"/>\n        <text x=\"90\" y=\"88\" text-anchor=\"middle\" class=\"mono\">print(\"Tea\")</text>\n\n        <path class=\"arrow\" d=\"M182 82 h44\"/><path class=\"accent\" d=\"M236 82 l-13 -7 v14 z\"/>\n\n        <text x=\"350\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Python translates</text>\n        <rect class=\"box box--dark\" x=\"244\" y=\"40\" width=\"212\" height=\"82\" rx=\"8\"/>\n        <text x=\"350\" y=\"78\" text-anchor=\"middle\" class=\"on-dark\">Python</text>\n        <text x=\"350\" y=\"100\" text-anchor=\"middle\" class=\"on-dark\">the translator</text>\n\n        <path class=\"arrow\" d=\"M466 82 h44\"/><path class=\"accent\" d=\"M520 82 l-13 -7 v14 z\"/>\n\n        <text x=\"610\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Computer understands</text>\n        <rect class=\"box\" x=\"528\" y=\"40\" width=\"164\" height=\"82\" rx=\"8\"/>\n        <text x=\"610\" y=\"76\" text-anchor=\"middle\" class=\"mono\">01010100</text>\n        <text x=\"610\" y=\"98\" text-anchor=\"middle\" class=\"mono\">01100101</text>\n      </svg>\n      <span class=\"figcap\">You never see the 1s and 0s. That is the whole point.</span>\n\n      <h4>What \"high-level\" means</h4>\n      <p>Python is called a <strong>high-level language</strong>. That sounds fancy. It only\n      means one thing: it is close to human language, and far from machine language.</p>\n      <p>High level = easy for people. Low level = easy for machines.</p>\n\n      <h4>Programming is for everyone now</h4>\n      <p>Long ago, only scientists and mathematicians wrote code. It was hard and ugly.</p>\n      <p>Today code is like electricity. It is everywhere. Doctors, artists, shopkeepers and\n      teachers all use Python to make their own work faster. You do not need to be a\n      \"computer genius\" any more.</p>\n\n      <h4>Who made Python?</h4>\n      <p>A man from the Netherlands named <strong>Guido van Rossum</strong>. He started\n      building it in December 1989, during his Christmas holidays, because his office was shut\n      and he was bored. He gave it to the world in <strong>1991</strong>.</p>\n\n      <div class=\"callout\">\n        <strong>The name is a joke.</strong> Python is not named after the snake. Guido was\n        watching a funny British comedy show called <em>Monty Python's Flying Circus</em>. He\n        wanted a name that was short, different and a little bit mysterious. The snake picture\n        came many years later.\n      </div>\n\n      <div class=\"w\">\n        <span class=\"w__k\">Tap to reveal</span>\n        <div class=\"w-flip\">\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">Who made Python?</span>\n            <span class=\"w-flip__back\">Guido van Rossum, in the Netherlands.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">Which year did it come out?</span>\n            <span class=\"w-flip__back\">1991. He started writing it in 1989.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">Where does the name come from?</span>\n            <span class=\"w-flip__back\">A comedy show, <em>Monty Python's Flying Circus</em>. Not the snake.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">What does \"high-level\" mean?</span>\n            <span class=\"w-flip__back\">The code looks like English, not like machine code.</span>\n          </button>\n        </div>\n      </div>\n\n      <h4>Where is Python used?</h4>\n      <p>Python is a <strong>general-purpose</strong> language. That means you can build\n      almost anything with it.</p>\n      <ul>\n        <li><strong>Websites</strong> — Instagram, Spotify and Netflix use Python behind the screen.</li>\n        <li><strong>Artificial Intelligence</strong> — when a phone recognises your face, or a\n        car stops at a red light by itself, Python is usually the brain.</li>\n        <li><strong>Space</strong> — NASA uses Python to handle data coming from space.</li>\n        <li><strong>Daily work</strong> — renaming 500 files, or reading a big Excel sheet, in seconds.</li>\n      </ul>\n\n      <div class=\"callout\">\n        <strong>Where Python is weak.</strong> Python is not the usual choice for building\n        mobile phone apps. Android apps are normally written in Kotlin or Java, and iPhone apps\n        in Swift. Python is brilliant almost everywhere else.\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">A real problem on the left. The Python feature that solves it on the right.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">You have no money to buy software.</button>\n            <button data-pair=\"b\">You want to do hard maths, but not build a calculator yourself.</button>\n            <button data-pair=\"c\">You made a mistake on line 5 and want to be told at once.</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">It is interpreted — a live translator</button>\n            <button data-pair=\"a\">It is free and open source</button>\n            <button data-pair=\"b\">\"Batteries included\" — a huge ready-made library</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All three.</strong> These are the three reasons colleges pick\n        Python for the first year. You will meet all of them again in the next topic.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>No coding in this topic.</strong> Answer the questions below and Topic 2 opens.\n        You start writing real code in Topic 7 — and you will not need to install anything.\n      </div>\n    \n  <h4>Watch one Python instruction travel</h4>\n  <svg class=\"fig\" viewBox=\"0 0 700 145\" role=\"img\" aria-label=\"An animated orange dot carries a Python instruction from the student to Python and then to the computer.\">\n    <line x1=\"90\" y1=\"70\" x2=\"610\" y2=\"70\" stroke=\"#24364B\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <circle cx=\"90\" cy=\"70\" r=\"11\" fill=\"#D67F19\">\n      <animate attributeName=\"cx\" values=\"90;350;610;90\" keyTimes=\"0;0.45;0.9;1\" dur=\"6s\" repeatCount=\"indefinite\"/>\n    </circle>\n    <text x=\"90\" y=\"35\" text-anchor=\"middle\" class=\"lbl\">Student</text>\n    <text x=\"350\" y=\"35\" text-anchor=\"middle\" class=\"lbl\">Python translator</text>\n    <text x=\"610\" y=\"35\" text-anchor=\"middle\" class=\"lbl\">Computer output</text>\n    <text x=\"350\" y=\"115\" text-anchor=\"middle\" class=\"mono\">print(&quot;Hello&quot;) → translation → Hello</text>\n  </svg>\n  <span class=\"figcap\">The orange instruction keeps travelling: write, translate, run, repeat.</span>\n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 7 concept questions and 2 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: From idea to result</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>A program starts as a small human idea. Python gives that idea a clear shape. The computer then follows the instruction exactly. It does not guess what you meant.</p><p>This is why clear instructions matter. A computer is very fast, but it is not a mind reader.</p>\n      <h4>Worked example</h4>\n      <pre><code>message = &quot;Hello from Python&quot;\nprint(message)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A simple idea becomes code, Python reads it, and the screen shows the result.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Human idea</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Python code</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Interpreter</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Screen result</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A simple idea becomes code, Python reads it, and the screen shows the result.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\">Human idea</button><button data-pair=\"p1\"><code>print()</code></button><button data-pair=\"p2\">Interpreter</button><button data-pair=\"p3\">Output</button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p3\">The result shown by the program</button><button data-pair=\"p2\">The tool that reads and runs Python</button><button data-pair=\"p1\">A Python instruction that shows output</button><button data-pair=\"p0\">What you want the computer to do</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "Why is Python called a \"high-level\" language?",
          "options": [
            "It only runs on expensive, powerful computers",
            "It is written in 1s and 0s",
            "Its code looks very close to human language",
            "It was made by high-level mathematicians"
          ],
          "answer": 2,
          "why": "\"High-level\" is about how close the code is to English, not about the price of your computer. Low-level languages sit close to the machine; Python sits close to you."
        },
        {
          "q": "Where does the name \"Python\" come from?",
          "options": [
            "A large snake",
            "A British comedy show",
            "A Greek god",
            "A random word generator"
          ],
          "answer": 1,
          "why": "Guido was watching Monty Python's Flying Circus. He wanted a short, unusual name. The snake logo was added much later."
        },
        {
          "q": "Which of these is NOT a common use of Python?",
          "options": [
            "Building the brain of an AI",
            "Running websites like Instagram",
            "Building fast mobile apps for the Apple App Store",
            "Helping NASA study space data"
          ],
          "answer": 2,
          "why": "iPhone apps are normally written in Swift, and Android apps in Kotlin or Java. Python is excellent for the other three."
        },
        {
          "q": "In which year was Python released to the public?",
          "options": [
            "1989",
            "1991",
            "1995",
            "2000"
          ],
          "answer": 1,
          "why": "He started building it in December 1989, but the world got it in 1991. Exams almost always ask for 1991."
        },
        {
          "q": "Who created Python?",
          "options": [
            "Guido van Rossum",
            "Dennis Ritchie",
            "James Gosling",
            "Tim Berners-Lee"
          ],
          "answer": 0,
          "why": "Guido van Rossum created Python and released it publicly in 1991."
        },
        {
          "q": "What does “general-purpose language” mean?",
          "options": [
            "It can be used for many different kinds of programs",
            "It only works for military programs",
            "It is only for mathematics",
            "It must be used by a general"
          ],
          "answer": 0,
          "why": "General-purpose means Python can be used for websites, automation, AI, data work and many other jobs."
        },
        {
          "q": "Why is Python a friendly first language for a beginner?",
          "options": [
            "It uses English-like words and needs less code",
            "It only runs one command",
            "It has no errors",
            "It writes every program automatically"
          ],
          "answer": 0,
          "why": "Python is readable and lets beginners do useful work with fewer lines. It still requires careful thinking and can still have errors."
        }
      ],
      "tasks": [
        {
          "id": "u1t01p01",
          "kind": "confirm",
          "title": "Chapter 1 mini activity",
          "brief": "Complete this after reading the chapter.",
          "label": "I can name Python's creator, release year, and two real-world uses of Python.",
          "level": "Foundation Practice"
        },
        {
          "kind": "confirm",
          "title": "Python around you",
          "brief": "Look around your phone, college or home and identify real uses of Python.",
          "label": "I listed two real-world uses of Python and explained, in my own words, why Python is called a high-level language.",
          "id": "u1t01p02",
          "level": "Apply the Idea"
        }
      ]
    },
    {
      "id": "u1t02",
      "title": "How Python Works",
      "summary": "Batteries included, live translation, and why we all use Python 3.",
      "notebookLM": "",
      "notes": "\n      <h4>It uses real words</h4>\n      <p>Many languages use strange symbols to join two conditions: <code>&amp;&amp;</code>\n      for \"and\", <code>||</code> for \"or\". Python just uses the words <code>and</code> and\n      <code>or</code>. You can read Python code out loud and it almost makes sense.</p>\n\n      <h4>\"Batteries included\"</h4>\n      <p>Think of buying a toy. Some boxes say <em>batteries not included</em> — so you have\n      to go out and buy more. Python's box comes with everything already inside.</p>\n      <p>Want to do hard maths? A tool is waiting. Want random numbers for a dice game? A tool\n      is waiting. Want today's date? A tool is waiting. This big pile of ready-made tools is\n      called the <strong>Standard Library</strong>.</p>\n\n      <h4>Free and open source</h4>\n      <p>Python costs nothing. Not for you, not for your college, not for a company. And the\n      code of Python itself is public, so anybody in the world can help improve it.</p>\n\n      <h4>The good and the bad</h4>\n      <table>\n        <tr><th>Good</th><th>Bad</th></tr>\n        <tr>\n          <td>Easy to read and easy to learn</td>\n          <td>Slower than C or C++ for heavy maths</td>\n        </tr>\n        <tr>\n          <td>A huge community — millions of people online to help you</td>\n          <td>Not the normal choice for phone apps</td>\n        </tr>\n        <tr>\n          <td>You write less code to do more</td>\n          <td>Uses more memory than older languages</td>\n        </tr>\n      </table>\n\n      <h4>Interpreted or compiled?</h4>\n      <p>This is an important idea. Think about translating a book from English to Hindi.\n      There are two ways.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 220\" role=\"img\" aria-label=\"A compiled language translates the whole book first; an interpreted language translates line by line as you read.\">\n        <text x=\"168\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Compiled — C, C++, Java</text>\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"320\" height=\"140\" rx=\"8\"/>\n        <text x=\"30\" y=\"70\" style=\"font-size:12.5px\">1. Translate the whole book</text>\n        <text x=\"30\" y=\"94\" style=\"font-size:12.5px\">2. Print the finished book</text>\n        <text x=\"30\" y=\"118\" style=\"font-size:12.5px\">3. Now the reader may read it</text>\n        <text x=\"30\" y=\"150\" class=\"mono accent\">Fast to read. Slow to fix.</text>\n        <text x=\"168\" y=\"200\" text-anchor=\"middle\" style=\"font-size:12px\">A mistake on page 2 means printing it all again.</text>\n\n        <text x=\"532\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Interpreted — Python</text>\n        <rect class=\"box box--dark\" x=\"372\" y=\"38\" width=\"320\" height=\"140\" rx=\"8\"/>\n        <text x=\"394\" y=\"70\" class=\"on-dark\" style=\"font-size:12.5px\">1. Read one sentence</text>\n        <text x=\"394\" y=\"94\" class=\"on-dark\" style=\"font-size:12.5px\">2. Say it in Hindi at once</text>\n        <text x=\"394\" y=\"118\" class=\"on-dark\" style=\"font-size:12.5px\">3. Move to the next sentence</text>\n        <text x=\"394\" y=\"150\" class=\"mono accent\">Slower to read. Easy to fix.</text>\n        <text x=\"532\" y=\"200\" text-anchor=\"middle\" style=\"font-size:12px\">A mistake stops you right there, on that line.</text>\n      </svg>\n\n      <p>Python is <strong>interpreted</strong>. A live translator sits beside you. It reads\n      one line, does it, and moves on. That is why Python tells you about a mistake the moment\n      it reaches it — which is very kind when you are learning.</p>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">A hospital machine must watch a heartbeat with zero delay. Speed is the\n        only thing that matters. Which type of language should the engineers pick?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Interpreted, like Python</button>\n          <button data-o=\"1\">Compiled, like C</button>\n          <button data-o=\"2\">It makes no difference</button>\n        </div>\n        <p class=\"w__why\">Compiled. The whole program is turned into machine code before it\n        runs, so nothing is translated while the patient is being monitored. Python is\n        wonderful — but when every millisecond counts, compiled wins.</p>\n      </div>\n\n      <h4>Python 2 and Python 3</h4>\n      <p>Think of PlayStation 2 and PlayStation 3.</p>\n      <ul>\n        <li><strong>Python 2</strong> is the old one. It retired on 1 January 2020. Nobody fixes it any more.</li>\n        <li><strong>Python 3</strong> is the current one. Better, cleaner, still growing.</li>\n        <li>A PS3 game will not run on a PS2. In the same way, Python 3 code often will not run\n        on Python 2. <strong>We use only Python 3.</strong></li>\n      </ul>\n\n      <div class=\"callout\">\n        <strong>Careful when you search online.</strong> Some old tutorials use Python 2. The\n        easy way to spot one: it writes <code>print \"Hello\"</code> with no brackets. Python 3\n        always uses brackets — <code>print(\"Hello\")</code>. If you see the first form, close\n        the page.\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which side does each sentence belong to?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Translates the whole program first</button>\n            <button data-pair=\"b\">Stops at the exact line where the mistake is</button>\n            <button data-pair=\"c\">Retired on 1 January 2020</button>\n            <button data-pair=\"d\">The version we use in this course</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\">Python 3</button>\n            <button data-pair=\"a\">A compiled language</button>\n            <button data-pair=\"c\">Python 2</button>\n            <button data-pair=\"b\">An interpreted language</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> These four facts cover almost every exam\n        question on this topic.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 7 concept questions and 2 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: How Python reads a program</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Python normally starts at the first line and moves downward. It completes one instruction before moving to the next.</p><p>If one line contains an error, Python stops there. The lines below it may never run. This makes the error location easier to find.</p>\n      <h4>Worked example</h4>\n      <pre><code>print(&quot;Line 1&quot;)\nprint(&quot;Line 2&quot;)\nprint(&quot;Line 3&quot;)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Python follows the file in order unless a decision or loop changes the path.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Read line 1</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Run line 1</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Read next line</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Finish program</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Python follows the file in order unless a decision or loop changes the path.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">What appears first?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">Line 3</button><button data-o=\"1\">Line 1</button><button data-o=\"2\">All lines at once</button><button data-o=\"3\">Nothing</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> <code>Line 1</code>. Python starts at the top and moves down.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "How does an interpreted language handle your code?",
          "options": [
            "It runs the code line by line, like a live translator",
            "It translates the whole program before running anything",
            "It refuses to run unless you compile it first",
            "It turns the code into a PDF"
          ],
          "answer": 0,
          "why": "One line at a time, translated and run on the spot. That is why Python can stop and tell you about line 5 while line 6 has not even been looked at yet."
        },
        {
          "q": "Which of these is a real limitation of Python?",
          "options": [
            "It costs too much to buy",
            "The code is hard for beginners to read",
            "It runs slower than compiled languages like C++",
            "It has no ready-made tools"
          ],
          "answer": 2,
          "why": "Speed is the honest weak point. Everything else in the list is the opposite of true — Python is free, easy to read, and packed with ready-made tools."
        },
        {
          "q": "You find old code written in Python 2. Will it run perfectly in Python 3?",
          "options": [
            "Yes, always",
            "No — Python 3 is different and the old code often needs changes",
            "Yes, but only on a Mac",
            "Python 2 and Python 3 are the same thing"
          ],
          "answer": 1,
          "why": "Python 3 was deliberately made incompatible so that old design mistakes could be fixed. A PS3 game will not play on a PS2."
        },
        {
          "q": "What does \"batteries included\" mean?",
          "options": [
            "Python drains your laptop battery",
            "Python comes with a big library of ready-made tools",
            "You must buy batteries to run Python",
            "Python only works on laptops, not desktops"
          ],
          "answer": 1,
          "why": "It means the Standard Library — maths tools, random numbers, dates and hundreds more — arrives with Python. Nothing extra to download."
        },
        {
          "q": "Why can an interpreted language be easier to debug while learning?",
          "options": [
            "It stops close to the line that caused the problem",
            "It never reports errors",
            "It removes every wrong line",
            "It always runs faster than compiled code"
          ],
          "answer": 0,
          "why": "The interpreter works through the program step by step, so it can stop where it meets a problem."
        },
        {
          "q": "Which advantage helps a learner find answers when stuck?",
          "options": [
            "Python has a very large community",
            "Python has no documentation",
            "Python only works offline",
            "Python uses machine code directly"
          ],
          "answer": 0,
          "why": "Millions of learners and professionals use Python, so tutorials, documentation and discussions are widely available."
        },
        {
          "q": "Which version should new learners use?",
          "options": [
            "Python 1",
            "Python 2",
            "Python 3",
            "Every version is identical"
          ],
          "answer": 2,
          "why": "Python 3 is used for modern learning and development."
        }
      ],
      "tasks": [
        {
          "id": "u1t02p01",
          "kind": "confirm",
          "title": "Chapter 2 decision card",
          "brief": "Complete the advantages and limits activity, then confirm.",
          "label": "I wrote three advantages, two limitations, and explained why this course uses Python 3.",
          "level": "Foundation Practice"
        },
        {
          "kind": "confirm",
          "title": "Interpreter or compiler?",
          "brief": "Choose one real system where speed is critical and one where easy development is more important.",
          "label": "I selected a suitable language type for both systems and explained my choices without copying the notes.",
          "id": "u1t02p02",
          "level": "Apply the Idea"
        }
      ]
    },
    {
      "id": "u1t03",
      "title": "Installing Python",
      "summary": "Put the engine in the car, and give the computer a map to find it.",
      "notebookLM": "",
      "notes": "\n      <h4>The engine and the map</h4>\n      <p>You want to build a car. First you buy an <strong>engine</strong> — that is\n      downloading Python.</p>\n      <p>But an engine sitting in the garage is useless. The car must know where it is. That\n      map, telling your computer where Python lives, is called the <strong>PATH</strong>.</p>\n\n      <h4>Installing on Windows</h4>\n      <ol>\n        <li>Open a browser and go to <code>python.org/downloads</code>.</li>\n        <li>Click the big yellow <strong>Download Python</strong> button. The site knows you are on Windows.</li>\n        <li>Open the file you downloaded.</li>\n        <li><strong>Tick the box at the bottom that says \"Add python.exe to PATH\".</strong></li>\n        <li>Click <strong>Install Now</strong> and wait for the green bar.</li>\n      </ol>\n\n      <div class=\"callout\">\n        <strong>Step 4 is the one everybody forgets.</strong> That little box at the bottom is\n        easy to miss, and missing it causes the most common error in the whole first week.\n        Tick it <em>before</em> you click Install.\n      </div>\n\n      <h4>Installing on a Mac</h4>\n      <ol>\n        <li>Go to the same site, <code>python.org/downloads</code>.</li>\n        <li>Click Download. The site gives you a <code>.pkg</code> file.</li>\n        <li>Open it, click Continue, Agree, Install.</li>\n        <li>Type your Mac password or use Touch ID.</li>\n      </ol>\n      <p>Macs normally sort out the PATH by themselves.</p>\n\n      <h4>What PATH actually does</h4>\n      <p>PATH is a list of folders. When you type a command, your computer walks down that\n      list, folder by folder, looking for a matching program.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 200\" role=\"img\" aria-label=\"Typing python makes the computer search each folder in the PATH list until it finds python.exe.\">\n        <rect class=\"box box--dark\" x=\"8\" y=\"66\" width=\"168\" height=\"70\" rx=\"8\"/>\n        <text x=\"30\" y=\"98\" class=\"mono on-dark\">&gt; python</text>\n        <text x=\"30\" y=\"122\" class=\"mono accent\">_</text>\n        <text x=\"92\" y=\"158\" text-anchor=\"middle\" class=\"lbl\">You type this</text>\n\n        <path class=\"arrow\" d=\"M186 100 h42\"/><path class=\"accent\" d=\"M240 100 l-13 -7 v14 z\"/>\n\n        <text x=\"470\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">The computer checks each folder</text>\n        <rect class=\"box\" x=\"256\" y=\"40\" width=\"428\" height=\"34\" rx=\"6\"/>\n        <text x=\"274\" y=\"62\" class=\"mono\">C:\\Windows\\system32</text>\n        <text x=\"666\" y=\"62\" text-anchor=\"end\" class=\"mono\">not here</text>\n\n        <rect class=\"box\" x=\"256\" y=\"82\" width=\"428\" height=\"34\" rx=\"6\"/>\n        <text x=\"274\" y=\"104\" class=\"mono\">C:\\Windows</text>\n        <text x=\"666\" y=\"104\" text-anchor=\"end\" class=\"mono\">not here</text>\n\n        <rect x=\"256\" y=\"124\" width=\"428\" height=\"34\" rx=\"6\" fill=\"rgba(242,160,61,.16)\" stroke=\"#D67F19\" stroke-width=\"2.4\"/>\n        <text x=\"274\" y=\"146\" class=\"mono\">C:\\Python312\\python.exe</text>\n        <text x=\"666\" y=\"146\" text-anchor=\"end\" class=\"mono accent\">found it</text>\n        <text x=\"470\" y=\"186\" text-anchor=\"middle\" class=\"lbl\">Leave that last line out and Python seems to vanish</text>\n      </svg>\n\n      <p>If you forgot the box on Windows, do not panic. Open the installer again, choose\n      <strong>Modify</strong>, and tick it this time.</p>\n\n      <h4>Did it work?</h4>\n      <p>Ask the computer.</p>\n      <ul>\n        <li><strong>Windows:</strong> search the Start menu for <code>cmd</code> and open Command Prompt.</li>\n        <li><strong>Mac:</strong> press Command + Space and search for <code>Terminal</code>.</li>\n      </ul>\n      <pre><code>C:\\Users\\You&gt; python --version\nPython 3.12.4</code></pre>\n      <p>A version number means you are done. On some Macs the command is\n      <code>python3 --version</code>.</p>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">A student typed this to check the version and it did not work. Tap the wrong part.</p>\n        <div class=\"w-spot__line\">\n          <button>python</button><button data-bad>-version</button>\n        </div>\n        <p class=\"w__why\">It needs <strong>two</strong> dashes: <code>--version</code>. One\n        dash means something else entirely. Little details like this matter in the terminal.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Every one of these messages appears on somebody's screen in week one.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>'python' is not recognized</code></button>\n            <button data-pair=\"b\"><code>Python 3.12.4</code></button>\n            <button data-pair=\"c\"><code>No such file or directory</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"b\">Everything is working</button>\n            <button data-pair=\"c\">Wrong folder, or the file name is spelt wrong</button>\n            <button data-pair=\"a\">Python is installed but not on PATH</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>Done.</strong> Reading the message instead of panicking is\n        most of what fixing errors really is.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>You do not need any of this for AbhyasLab.</strong> Python already runs inside\n        this browser tab, even on a phone. But install it on your own machine anyway — your lab\n        exam will not be in a browser.\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 8 concept questions and 2 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Install, connect and verify</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Installation has three separate jobs. First, the Python files are copied to the computer. Second, PATH helps the terminal find Python. Third, a version command proves that everything works.</p><p>Do not skip verification. A successful installer screen does not always mean the terminal can find Python.</p>\n      <h4>Worked example</h4>\n      <pre><code>python --version\n# On some systems:\npython3 --version</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"The setup is complete only when the terminal prints a Python 3 version.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Download</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Install</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Add to PATH</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Verify version</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">The setup is complete only when the terminal prints a Python 3 version.</text>\n      </svg>\n    \n      \n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Debugging game — spot the mistake</span>\n        <p class=\"w__q\">Tap the part that causes the problem</p>\n        <div class=\"w-spot__line\"><button >python</button><button data-bad>-version</button></div>\n        <p class=\"w__why\">Use two dashes: <code>python --version</code>.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What is the most important step when installing Python on Windows?",
          "options": [
            "Paying the installation fee",
            "Ticking the box that says \"Add python.exe to PATH\"",
            "Restarting your router",
            "Buying a new keyboard"
          ],
          "answer": 1,
          "why": "Python is free, so there is no fee. That one checkbox at the bottom of the first screen saves you from the most common error of the whole first week."
        },
        {
          "q": "What does adding Python to the PATH actually do?",
          "options": [
            "It makes a desktop shortcut",
            "It makes Python run faster",
            "It tells the computer which folder to look in when you type a command",
            "It connects your computer to the internet"
          ],
          "answer": 2,
          "why": "PATH is just a list of folders the system searches. Python's folder has to be on that list, or typing python finds nothing."
        },
        {
          "q": "Which command checks whether Python is installed?",
          "options": [
            "show python",
            "python --version",
            "run python",
            "start python"
          ],
          "answer": 1,
          "why": "python --version, with two dashes. On some Macs you need python3 --version instead."
        },
        {
          "q": "Your friend gets 'python is not recognized' on Windows. What did they most likely forget?",
          "options": [
            "To buy a licence",
            "To tick \"Add python.exe to PATH\" during installation",
            "To restart the computer three times",
            "To install a code editor"
          ],
          "answer": 1,
          "why": "Python is installed fine — the shell just cannot find it. Run the installer again, choose Modify, and tick the box."
        },
        {
          "q": "What is the most important Windows installer checkbox?",
          "options": [
            "Create a game",
            "Add python.exe to PATH",
            "Delete old files",
            "Use dark mode"
          ],
          "answer": 1,
          "why": "The PATH checkbox lets the terminal find Python."
        },
        {
          "q": "What does PATH do?",
          "options": [
            "Stores photos",
            "Lists folders where the system searches for programs",
            "Makes code faster",
            "Connects Python to Wi-Fi"
          ],
          "answer": 1,
          "why": "PATH is a list of folders checked when you type a command."
        },
        {
          "q": "Which command checks the Python version?",
          "options": [
            "python --version",
            "python start",
            "show python",
            "version --python"
          ],
          "answer": 0,
          "why": "The standard check is python --version."
        },
        {
          "q": "What does a visible Python 3 version number mean?",
          "options": [
            "The installation command works",
            "Python was deleted",
            "The internet is off",
            "VS Code is installed"
          ],
          "answer": 0,
          "why": "The terminal can find and start Python."
        }
      ],
      "tasks": [
        {
          "id": "u1t03p01",
          "kind": "confirm",
          "title": "Check it on your own machine",
          "brief": "Do this on your laptop or a lab computer, then tick the box.",
          "label": "I opened Command Prompt or Terminal, typed <code>python --version</code>, and a version number came back.",
          "level": "Foundation Practice"
        },
        {
          "kind": "confirm",
          "title": "Repair the PATH problem",
          "brief": "Pretend a friend sees “python is not recognized”. Explain the repair steps, then check them on a Windows machine when available.",
          "label": "I can explain how to reopen the installer, choose Modify, add Python to PATH, and verify the result with python --version.",
          "id": "u1t03p02",
          "level": "Apply the Idea"
        }
      ]
    },
    {
      "id": "u1t04",
      "title": "Choosing a Code Editor",
      "summary": "IDLE, VS Code and Jupyter — three different vehicles for the same engine.",
      "notebookLM": "",
      "notes": "\n      <h4>The engine and the vehicle</h4>\n      <p>Python is the engine. But you do not pour petrol straight onto an engine. You sit in\n      a seat, hold a steering wheel and look at a dashboard.</p>\n      <p>A <strong>code editor</strong> is that vehicle. It gives you a comfortable, colourful\n      screen to type your instructions into.</p>\n      <p>There are three you should know about.</p>\n\n      <h4>1. IDLE — the bicycle</h4>\n      <p>Simple, reliable, and already yours. IDLE arrives free with Python; you do not\n      download it separately. Search your computer for <code>IDLE</code> and open it.</p>\n      <p>You get a window with <code>&gt;&gt;&gt;</code> in it. Type a line, press Enter, get\n      an answer straight away. Perfect for a quick test.</p>\n\n      <h4>2. VS Code — the sports car</h4>\n      <p>Visual Studio Code is made by Microsoft, is completely free, and is the most popular\n      code editor in the world. Professionals use it every day.</p>\n      <ol>\n        <li>Go to <code>code.visualstudio.com</code>.</li>\n        <li>Click the big Download button.</li>\n        <li>Open the file and keep clicking Next.</li>\n      </ol>\n\n      <p><strong>Then teach it Python.</strong> VS Code can read dozens of languages, but it\n      needs to be told about each one:</p>\n      <ol>\n        <li>Open VS Code.</li>\n        <li>On the far left, find the icon made of four small blocks, with one flying away. That is <strong>Extensions</strong>. Click it.</li>\n        <li>Type <code>Python</code> in the search box.</li>\n        <li>The first result is called <strong>Python</strong> and is published by <strong>Microsoft</strong>. Click the blue Install button.</li>\n      </ol>\n      <p>Now VS Code colours your Python words and points at your mistakes before you even run\n      the file.</p>\n\n      <h4>3. Jupyter Notebook — the scientist's diary</h4>\n      <p>Normally a program is one long file. Jupyter breaks it into <strong>cells</strong>.\n      You can have a cell of English text, then a cell of Python code, then a colourful graph,\n      then more text — all in one page.</p>\n      <p>This is why Jupyter rules Data Science and AI. If you ever have a huge sheet of data\n      and want to draw charts from it, Jupyter is the right tool.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"IDLE is simple and free with Python, VS Code is the professional editor, Jupyter mixes text code and charts.\">\n        <rect class=\"box\" x=\"8\" y=\"34\" width=\"212\" height=\"120\" rx=\"8\"/>\n        <text x=\"114\" y=\"62\" text-anchor=\"middle\" style=\"font-size:14px;font-weight:700\">IDLE</text>\n        <text x=\"114\" y=\"86\" text-anchor=\"middle\" style=\"font-size:12px\">Comes with Python</text>\n        <text x=\"114\" y=\"106\" text-anchor=\"middle\" style=\"font-size:12px\">One line at a time</text>\n        <text x=\"114\" y=\"132\" text-anchor=\"middle\" class=\"mono accent\">quick tests</text>\n\n        <rect class=\"box box--dark\" x=\"244\" y=\"34\" width=\"212\" height=\"120\" rx=\"8\"/>\n        <text x=\"350\" y=\"62\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:14px;font-weight:700\">VS Code</text>\n        <text x=\"350\" y=\"86\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Free, from Microsoft</text>\n        <text x=\"350\" y=\"106\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Needs the Python extension</text>\n        <text x=\"350\" y=\"132\" text-anchor=\"middle\" class=\"mono accent\">real projects</text>\n\n        <rect class=\"box\" x=\"480\" y=\"34\" width=\"212\" height=\"120\" rx=\"8\"/>\n        <text x=\"586\" y=\"62\" text-anchor=\"middle\" style=\"font-size:14px;font-weight:700\">Jupyter</text>\n        <text x=\"586\" y=\"86\" text-anchor=\"middle\" style=\"font-size:12px\">Text + code + charts</text>\n        <text x=\"586\" y=\"106\" text-anchor=\"middle\" style=\"font-size:12px\">Works in cells</text>\n        <text x=\"586\" y=\"132\" text-anchor=\"middle\" class=\"mono accent\">data and AI</text>\n      </svg>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Three students, three different needs. Give each one the right tool.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Wants to use what professionals use, to build a big app</button>\n            <button data-pair=\"b\">Wants to do one quick sum without downloading anything</button>\n            <button data-pair=\"c\">Wants to study exam marks and draw a pie chart</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">Jupyter Notebook</button>\n            <button data-pair=\"a\">VS Code</button>\n            <button data-pair=\"b\">IDLE</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>Correct.</strong> There is no single \"best\" editor. There is\n        only the right tool for the job in front of you.</p>\n      </div>\n\n      <div class=\"w\">\n        <span class=\"w__k\">Tap to reveal</span>\n        <div class=\"w-flip\">\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">Who publishes the official Python extension for VS Code?</span>\n            <span class=\"w-flip__back\"><strong>Microsoft.</strong> If the publisher is anybody else, it is the wrong one.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">Which editor do you not have to download?</span>\n            <span class=\"w-flip__back\"><strong>IDLE.</strong> It installs together with Python itself.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">Which key runs your file in IDLE?</span>\n            <span class=\"w-flip__back\"><strong>F5.</strong> It saves the file first, then runs it.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">What is a Jupyter \"cell\"?</span>\n            <span class=\"w-flip__back\">A block you can run on its own. Some cells hold text, some hold code, some show charts.</span>\n          </button>\n        </div>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 7 concept questions and 2 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Choose the right workspace</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>An editor does not change the Python language. It changes how comfortable it is to write, organise and debug code.</p><p>IDLE is simple. VS Code gives more tools. Jupyter is useful when code, notes and output should appear together. The best editor is the one that helps you focus.</p>\n      <h4>Worked example</h4>\n      <pre><code># The same Python code works in many editors\nname = &quot;Asha&quot;\nprint(name)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Editors look different, but the Python instructions remain the same.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Choose editor</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Create file</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Write code</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Run Python</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Editors look different, but the Python instructions remain the same.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\">IDLE</button><button data-pair=\"p1\">VS Code</button><button data-pair=\"p2\">Jupyter</button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p2\">Notebook with code and explanation together</button><button data-pair=\"p1\">Flexible editor with extensions</button><button data-pair=\"p0\">Simple editor included with Python</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "Which tool installs automatically with Python and lets you write code straight away?",
          "options": [
            "VS Code",
            "IDLE",
            "Jupyter Notebook",
            "Command Prompt"
          ],
          "answer": 1,
          "why": "IDLE arrives with Python. VS Code and Jupyter are separate downloads, and Command Prompt is not an editor at all."
        },
        {
          "q": "How do you teach VS Code to understand Python properly?",
          "options": [
            "Pay a monthly subscription",
            "Install the Python extension from the Extensions menu",
            "It already knows Python, nothing is needed",
            "Type all your code in capital letters"
          ],
          "answer": 1,
          "why": "VS Code is a blank canvas that reads many languages. The Python extension, published by Microsoft, is what adds the colours and the error checking."
        },
        {
          "q": "You want one document holding English text, Python code and colourful graphs together. Which do you choose?",
          "options": [
            "Jupyter Notebook",
            "IDLE",
            "Command Prompt",
            "Microsoft Word"
          ],
          "answer": 0,
          "why": "Jupyter works in cells, so text, code and charts can sit side by side in one page. That is exactly why data scientists live in it."
        },
        {
          "q": "Who publishes the official Python extension for VS Code?",
          "options": [
            "Google",
            "Microsoft",
            "Guido van Rossum",
            "Apple"
          ],
          "answer": 1,
          "why": "Microsoft — the same company that makes VS Code. There are copies by other publishers; the official one says Microsoft underneath the name."
        },
        {
          "q": "Which tool commonly comes with Python?",
          "options": [
            "IDLE",
            "Photoshop",
            "Excel",
            "Chrome"
          ],
          "answer": 0,
          "why": "IDLE is a simple Python learning environment."
        },
        {
          "q": "Which tool mixes text, Python code and charts?",
          "options": [
            "Command Prompt",
            "Jupyter Notebook",
            "Calculator",
            "Notepad only"
          ],
          "answer": 1,
          "why": "Jupyter uses different cells for text, code and output."
        },
        {
          "q": "What does the VS Code Python extension add?",
          "options": [
            "Python language support",
            "A new operating system",
            "Free internet",
            "A spreadsheet"
          ],
          "answer": 0,
          "why": "It helps VS Code understand, run and debug Python."
        }
      ],
      "tasks": [
        {
          "id": "u1t04p01",
          "kind": "confirm",
          "title": "Open IDLE and try one line",
          "brief": "Do this on your own machine, then tick the box.",
          "label": "I opened IDLE, saw the <code>&gt;&gt;&gt;</code> prompt, typed <code>5 + 10</code>, pressed Enter, and it printed <code>15</code>.",
          "level": "Foundation Practice"
        },
        {
          "kind": "confirm",
          "title": "VS Code Python extension check",
          "brief": "Open the Extensions panel in VS Code and inspect the official Python extension.",
          "label": "I found the Python extension published by Microsoft and checked that it is installed and enabled.",
          "id": "u1t04p02",
          "level": "Apply the Idea"
        }
      ]
    },
    {
      "id": "u1t05",
      "title": "PIP — the App Store for Python",
      "summary": "Why projects need separate rooms, and how to download extra tools.",
      "notebookLM": "",
      "notes": "\n      <h4>What is a Python environment?</h4>\n      <p>Think of your computer as a big house. A <strong>Python environment</strong> is one\n      room in that house, set up for one job. Inside that room you keep the Python engine and\n      only the tools that job needs.</p>\n\n      <h4>Why keep rooms separate?</h4>\n      <p>Imagine you love baking cakes. You also love fixing oily car engines.</p>\n      <p>Would you keep your flour and sugar in the same toolbox as your greasy spanners? Of\n      course not. You would ruin the cake.</p>\n      <p>Programming is the same. Today you build a website, which needs website tools.\n      Tomorrow you build an AI, which needs AI tools. If everything goes in one big pile, the\n      tools start fighting each other and things break.</p>\n      <p>Separate environments are a separate kitchen and a separate garage.</p>\n\n      <h4>PIP — the App Store</h4>\n      <p>A new phone comes with a camera and a phone app. If you want a game, you go to the\n      App Store.</p>\n      <p>Python is the same. It comes with a lot built in, but not everything. <strong>PIP</strong>\n      is Python's App Store. The name stands for <em>Pip Installs Packages</em>.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 160\" role=\"img\" aria-label=\"PIP downloads a package from the internet and installs it onto your computer.\">\n        <rect class=\"box box--dark\" x=\"8\" y=\"40\" width=\"190\" height=\"76\" rx=\"8\"/>\n        <text x=\"30\" y=\"72\" class=\"mono on-dark\">&gt; pip install</text>\n        <text x=\"30\" y=\"96\" class=\"mono accent\">colorama</text>\n        <text x=\"103\" y=\"140\" text-anchor=\"middle\" class=\"lbl\">You ask</text>\n\n        <path class=\"arrow\" d=\"M208 78 h48\"/><path class=\"accent\" d=\"M266 78 l-13 -7 v14 z\"/>\n\n        <rect class=\"box\" x=\"274\" y=\"40\" width=\"160\" height=\"76\" rx=\"8\"/>\n        <text x=\"354\" y=\"72\" text-anchor=\"middle\" style=\"font-size:12.5px\">The internet</text>\n        <text x=\"354\" y=\"94\" text-anchor=\"middle\" style=\"font-size:12.5px\">(PyPI store)</text>\n        <text x=\"354\" y=\"140\" text-anchor=\"middle\" class=\"lbl\">PIP fetches it</text>\n\n        <path class=\"arrow\" d=\"M444 78 h48\"/><path class=\"accent\" d=\"M502 78 l-13 -7 v14 z\"/>\n\n        <rect class=\"box\" x=\"510\" y=\"40\" width=\"182\" height=\"76\" rx=\"8\"/>\n        <text x=\"601\" y=\"78\" text-anchor=\"middle\" style=\"font-size:12.5px\">Installed and ready</text>\n        <text x=\"601\" y=\"98\" text-anchor=\"middle\" class=\"mono accent\">import colorama</text>\n        <text x=\"601\" y=\"140\" text-anchor=\"middle\" class=\"lbl\">You use it</text>\n      </svg>\n\n      <h4>The three commands you need</h4>\n      <p>All of these go in Command Prompt or Terminal — <em>not</em> inside a Python file.</p>\n      <table>\n        <tr><th>Command</th><th>What it does</th></tr>\n        <tr><td><code>pip install colorama</code></td><td>Downloads and installs a package</td></tr>\n        <tr><td><code>pip list</code></td><td>Shows every package you already have, with version numbers</td></tr>\n        <tr><td><code>pip uninstall colorama</code></td><td>Removes it. Type <code>Y</code> when it asks</td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>A common mix-up.</strong> <code>pip install</code> goes in the terminal.\n        <code>import</code> goes inside your Python file. They are two different steps: first\n        you buy the tool, then you pick it up.\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">A student wants to install a package called <code>requests</code>. Tap the wrong word.</p>\n        <div class=\"w-spot__line\">\n          <button data-bad>python</button><button>install</button><button>requests</button>\n        </div>\n        <p class=\"w__why\">The word should be <code>pip</code>, not <code>python</code>. The\n        full command is <code>pip install requests</code>. <code>python</code> starts the\n        interpreter; <code>pip</code> fetches packages.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which command does which job?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>pip install cowsay</code></button>\n            <button data-pair=\"b\"><code>pip list</code></button>\n            <button data-pair=\"c\"><code>pip uninstall cowsay</code></button>\n            <button data-pair=\"d\"><code>import cowsay</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">Remove a package you no longer want</button>\n            <button data-pair=\"a\">Download and install a package</button>\n            <button data-pair=\"d\">Use the package inside your Python file</button>\n            <button data-pair=\"b\">See everything you already have</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Notice the odd one out — only\n        <code>import</code> goes inside a <code>.py</code> file. The other three are terminal\n        commands.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 8 concept questions and 2 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Packages add new powers</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Python already contains many tools. A package adds more tools created by other developers. <code>pip</code> is the normal package installer.</p><p>The package name used during installation and the name used during import are often the same, but not always. Always read the package documentation.</p>\n      <h4>Worked example</h4>\n      <pre><code>python -m pip install colorama\n\n# Later, inside Python:\nimport colorama</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"pip brings a package into the environment; import makes it available inside a program.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Find package</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Install with pip</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Import package</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Use its tools</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">pip brings a package into the environment; import makes it available inside a program.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">Which command installs a package?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">import requests</button><button data-o=\"1\">python -m pip install requests</button><button data-o=\"2\">print(requests)</button><button data-o=\"3\">requests = True</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> <code>python -m pip install requests</code>.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "Why keep separate Python environments for different projects?",
          "options": [
            "It saves electricity",
            "It stops the tools of one project from breaking another project",
            "Python refuses to run with fewer than three environments",
            "It makes code run ten times faster"
          ],
          "answer": 1,
          "why": "Flour and sugar in one box, oily spanners in another. Different projects need different versions of tools, and mixing them causes conflicts."
        },
        {
          "q": "PIP is best compared to what?",
          "options": [
            "An App Store where you download extra tools",
            "Antivirus software",
            "A code editor",
            "The engine that turns code into 1s and 0s"
          ],
          "answer": 0,
          "why": "PIP searches, downloads and installs packages written by people all over the world. Exactly like an App Store."
        },
        {
          "q": "Which command lists every package you have installed?",
          "options": [
            "pip show all",
            "python show packages",
            "pip list",
            "list pip"
          ],
          "answer": 2,
          "why": "pip list prints a neat table of package names and version numbers."
        },
        {
          "q": "You want to install a package called requests. What do you type?",
          "options": [
            "download requests",
            "pip install requests",
            "python get requests",
            "install pip requests"
          ],
          "answer": 1,
          "why": "pip install requests — the tool first, then the action, then the name. And it goes in the terminal, not inside a .py file."
        },
        {
          "q": "What is pip?",
          "options": [
            "A Python package installer",
            "A code editor",
            "A data type",
            "A web browser"
          ],
          "answer": 0,
          "why": "pip installs and manages extra Python packages."
        },
        {
          "q": "Which command shows installed packages?",
          "options": [
            "pip list",
            "pip open",
            "python packages",
            "list pip now"
          ],
          "answer": 0,
          "why": "pip list shows package names and versions."
        },
        {
          "q": "Which command removes colorama?",
          "options": [
            "pip remove all",
            "pip uninstall colorama",
            "delete colorama",
            "python stop colorama"
          ],
          "answer": 1,
          "why": "Use pip uninstall followed by the package name."
        },
        {
          "q": "Why do people use packages?",
          "options": [
            "To add ready-made tools",
            "To turn off Python",
            "To rename the keyboard",
            "To remove all code"
          ],
          "answer": 0,
          "why": "Packages save time by giving us ready-made code."
        }
      ],
      "tasks": [
        {
          "id": "u1t05p01",
          "kind": "confirm",
          "title": "Install your first package",
          "brief": "In Command Prompt or Terminal, run: pip install cowsay — then run pip list and find it. (cowsay makes a text cow speak.)",
          "label": "I ran <code>pip install cowsay</code>, then <code>pip list</code>, and I could see cowsay in the list with a version number.",
          "level": "Foundation Practice"
        },
        {
          "id": "u1t05p02",
          "kind": "confirm",
          "title": "Package practice",
          "brief": "Use a terminal on your computer.",
          "label": "I ran <code>pip list</code>. I also installed and removed one safe practice package chosen by my teacher.",
          "level": "Apply the Idea"
        }
      ]
    },
    {
      "id": "u1t06",
      "title": "Virtual Environments",
      "summary": "Build the separate room, step inside it, and write down the recipe.",
      "notebookLM": "",
      "notes": "\n      <h4>Building the room</h4>\n      <p>Last topic we said each project should have its own room. A <strong>virtual\n      environment</strong> (short name: <code>venv</code>) is how you actually build one.</p>\n      <p>Python makes a small fresh copy of itself inside your project folder. Anything you\n      install there stays there. The rest of your computer is untouched.</p>\n\n      <h4>Step 1 — create it</h4>\n      <pre><code>python -m venv my_first_room</code></pre>\n      <p>A new folder called <code>my_first_room</code> appears. The name is your choice —\n      <code>my_project</code> or <code>test_env</code> work just as well.</p>\n\n      <h4>Step 2 — walk inside</h4>\n      <p>Building a room is not the same as being in it. You have to step in.</p>\n      <table>\n        <tr><th>Your computer</th><th>Type this</th></tr>\n        <tr><td>Windows</td><td><code>my_first_room\\Scripts\\activate</code></td></tr>\n        <tr><td>Mac or Linux</td><td><code>source my_first_room/bin/activate</code></td></tr>\n      </table>\n\n      <p><strong>How do you know it worked?</strong> The room's name appears in brackets on\n      the left of your typing line:</p>\n      <pre><code>(my_first_room) C:\\Users\\You&gt; _</code></pre>\n      <p>To leave the room later, just type <code>deactivate</code>.</p>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">You created a virtual environment and installed a package inside it.\n        Then you typed <code>deactivate</code> and ran <code>pip list</code>. Is the package there?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Yes, it is everywhere now</button>\n          <button data-o=\"1\">The computer crashes</button>\n          <button data-o=\"2\">No — it only lives inside that room</button>\n        </div>\n        <p class=\"w__why\">That isolation is the whole point. What you install inside a virtual\n        environment stays inside it. Step out, and your main Python has no idea it exists.</p>\n      </div>\n\n      <h4>Conda — the other option</h4>\n      <p><code>pip</code> and <code>venv</code> are the normal, built-in way. There is also a\n      popular alternative called <strong>Conda</strong>.</p>\n      <p>Think of Conda as a huge shopping mall. It handles Python packages, but it can manage\n      software for other languages too. Data Science and AI people love it. For now, just know\n      it exists: <em>Conda is a heavy-duty alternative to PIP</em>.</p>\n\n      <h4>The recipe card — requirements.txt</h4>\n      <p>You build a great game using five packages. You want to share it with a friend.</p>\n      <p>Do you send five separate messages listing every package name? No. You send a\n      <strong>recipe card</strong>. In Python that card is a plain text file called\n      <code>requirements.txt</code>.</p>\n\n      <table>\n        <tr><th>You want to…</th><th>Type this</th></tr>\n        <tr><td>Write the recipe card</td><td><code>pip freeze &gt; requirements.txt</code></td></tr>\n        <tr><td>Cook from someone's card</td><td><code>pip install -r requirements.txt</code></td></tr>\n      </table>\n      <p><code>freeze</code> means \"take a photo of everything installed\". The <code>-r</code>\n      simply means \"read this file\".</p>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">Your friend sent you a project with a recipe card. Tap the wrong part of this command.</p>\n        <div class=\"w-spot__line\">\n          <button>pip</button><button>install</button><button data-bad>-f</button><button>requirements.txt</button>\n        </div>\n        <p class=\"w__why\">It is <code>-r</code>, for <em>read</em>. Small letters matter a lot\n        in the terminal — <code>-f</code> means something completely different.</p>\n      </div>\n\n      <div class=\"w\">\n        <span class=\"w__k\">Tap to reveal</span>\n        <div class=\"w-flip\">\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">How do you leave a virtual environment?</span>\n            <span class=\"w-flip__back\">Type <code>deactivate</code> and press Enter.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">What shows that you are inside one?</span>\n            <span class=\"w-flip__back\">Its name appears in brackets, like <code>(my_first_room)</code>, at the start of the line.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">What is Conda?</span>\n            <span class=\"w-flip__back\">A bigger alternative to PIP, popular in Data Science. It can manage other languages too.</span>\n          </button>\n          <button class=\"w-flip__card\">\n            <span class=\"w-flip__front\">What does <code>pip freeze</code> do?</span>\n            <span class=\"w-flip__back\">Takes a photo of every installed package, so you can save the list to a file.</span>\n          </button>\n        </div>\n      </div>\n    \n<h4>Extra visual recap</h4>\n<svg class=\"fig\" viewBox=\"0 0 700 240\" role=\"img\" aria-label=\"Two project rooms contain different packages without touching each other.\">\n        <rect class=\"box\" x=\"35\" y=\"44\" width=\"280\" height=\"150\" rx=\"12\"/><text x=\"175\" y=\"73\" text-anchor=\"middle\" style=\"font-weight:700\">Website room</text><rect class=\"box box--dark\" x=\"72\" y=\"96\" width=\"96\" height=\"52\" rx=\"7\"/><text x=\"120\" y=\"128\" text-anchor=\"middle\" class=\"on-dark\">Django</text><rect class=\"box box--dark\" x=\"184\" y=\"96\" width=\"96\" height=\"52\" rx=\"7\"/><text x=\"232\" y=\"128\" text-anchor=\"middle\" class=\"on-dark\">v5</text>\n        <rect class=\"box\" x=\"385\" y=\"44\" width=\"280\" height=\"150\" rx=\"12\"/><text x=\"525\" y=\"73\" text-anchor=\"middle\" style=\"font-weight:700\">AI room</text><rect class=\"box box--dark\" x=\"422\" y=\"96\" width=\"96\" height=\"52\" rx=\"7\"/><text x=\"470\" y=\"128\" text-anchor=\"middle\" class=\"on-dark\">NumPy</text><rect class=\"box box--dark\" x=\"534\" y=\"96\" width=\"96\" height=\"52\" rx=\"7\"/><text x=\"582\" y=\"128\" text-anchor=\"middle\" class=\"on-dark\">v2</text>\n        <path class=\"good\" d=\"M350 35 v170\"/><text x=\"350\" y=\"228\" text-anchor=\"middle\" class=\"figcap\">The wall stops package conflicts.</text>\n      </svg>\n<span class=\"figcap\">A second visual explanation from the original AbhyasLab version.</span>\n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 7 concept questions and 2 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: One project, one clean room</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>A virtual environment is a private room for one project. Packages installed in that room do not disturb other projects.</p><p>This matters when two projects need different versions of the same package. Each project can keep the version it needs.</p>\n      <h4>Worked example</h4>\n      <pre><code>python -m venv .venv\n# Windows\n.venv\\Scripts\\activate\n# macOS/Linux\nsource .venv/bin/activate</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A virtual environment separates one project’s packages from another project.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Create project</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Create .venv</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Activate room</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Install safely</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A virtual environment separates one project’s packages from another project.</text>\n      </svg>\n    \n      \n      <div class=\"w\">\n        <span class=\"w__k\">Tap to reveal — memory cards</span>\n        <div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">Why use a virtual environment?</span><span class=\"w-flip__back\">To keep project packages separate.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What does activation do?</span><span class=\"w-flip__back\">It makes the terminal use that environment.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Can two projects use different versions?</span><span class=\"w-flip__back\">Yes. That is one major benefit.</span></button></div>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "How does the computer show you that a virtual environment is active?",
          "options": [
            "The screen turns green",
            "A picture of a snake appears",
            "The environment name shows in brackets at the start of your command line",
            "It prints \"Welcome to the room!\""
          ],
          "answer": 2,
          "why": "Something like (my_first_room) appears before the prompt. If you cannot see it, you are not inside — and anything you install will land in the wrong place."
        },
        {
          "q": "What is a requirements.txt file for?",
          "options": [
            "Listing every error in your code",
            "Acting as a recipe card, so another computer knows exactly which packages to install",
            "Writing a letter to the creator of Python",
            "Storing passwords"
          ],
          "answer": 1,
          "why": "One plain text file listing every package your project needs. Send it with your code and anyone can rebuild your setup in one command."
        },
        {
          "q": "Which command installs everything listed in a requirements.txt file?",
          "options": [
            "pip download requirements.txt",
            "install list.txt",
            "python run requirements",
            "pip install -r requirements.txt"
          ],
          "answer": 3,
          "why": "The -r means read. PIP opens the file, reads every line, and installs all of them for you."
        },
        {
          "q": "What is Conda?",
          "options": [
            "A snake that eats Pythons",
            "A heavy-duty alternative to PIP, used a lot in Data Science",
            "A new operating system from Microsoft",
            "A command that deletes files"
          ],
          "answer": 1,
          "why": "Conda manages packages and environments, and unlike PIP it can handle software for other languages too. It is very common in AI and data work."
        },
        {
          "q": "Why use a virtual environment?",
          "options": [
            "To keep project packages separate",
            "To make the monitor brighter",
            "To write only HTML",
            "To delete Python"
          ],
          "answer": 0,
          "why": "It stops one project's packages from interfering with another."
        },
        {
          "q": "Which command creates my_test_env?",
          "options": [
            "python -m venv my_test_env",
            "pip list my_test_env",
            "create python room",
            "venv start"
          ],
          "answer": 0,
          "why": "python -m venv followed by the name creates the environment."
        },
        {
          "q": "What does the deactivate command do?",
          "options": [
            "Leaves the current virtual environment",
            "Deletes Python",
            "Removes requirements.txt",
            "Turns off the computer"
          ],
          "answer": 0,
          "why": "deactivate takes you out of the active virtual environment without deleting it."
        }
      ],
      "tasks": [
        {
          "id": "u1t06p01",
          "kind": "confirm",
          "title": "Build a room and step inside",
          "brief": "In your terminal run: python -m venv my_test_env — then activate it, and type deactivate to leave.",
          "label": "I created <code>my_test_env</code>, activated it, saw <code>(my_test_env)</code> appear on my screen, then typed <code>deactivate</code>.",
          "level": "Foundation Practice"
        },
        {
          "id": "u1t06p02",
          "kind": "confirm",
          "title": "Recipe practice",
          "brief": "Create the package recipe.",
          "label": "I ran <code>pip freeze &gt; requirements.txt</code> and opened the file.",
          "level": "Apply the Idea"
        }
      ]
    },
    {
      "id": "u1cp01",
      "title": "Revision Checkpoint 1 — Python and Setup",
      "summary": "Review Python, installation, editors, PIP and virtual environments.",
      "notebookLM": "",
      "notes": "\n      <h4>Pause, mix and remember</h4>\n      <p>This checkpoint mixes ideas from <strong>Chapters 1–6</strong>. It does not teach a new syllabus topic. It checks whether the earlier ideas are still clear.</p>\n      <div class=\"callout\"><strong>How to use it:</strong> answer the mixed quiz without reopening earlier chapters. Then complete the activities. When something is difficult, return to only that chapter and try again.</div>\n      <h4>Checkpoint method</h4>\n      <ol><li>Read the full question.</li><li>Predict before running code.</li><li>Run and compare.</li><li>Fix one error at a time.</li></ol>\n    \n              <div class=\"callout\"><strong>Visual revision map.</strong> Use this picture before starting the checkpoint activities. Explain every arrow aloud in your own words.</div>\n              \n      <h4>Python setup journey</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A compact map connecting the ideas revised in this checkpoint.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Python idea</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Install</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Choose editor</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Isolate project</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A compact map connecting the ideas revised in this checkpoint.</text>\n      </svg>\n    \n              \n      <div class=\"w\">\n        <span class=\"w__k\">Checkpoint game — study cards</span>\n        <div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do first?</span><span class=\"w-flip__back\">Read the question and identify the concept.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do before running code?</span><span class=\"w-flip__back\">Predict the result or write the steps on paper.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do after an error?</span><span class=\"w-flip__back\">Read the final error line and fix one issue at a time.</span></button></div>\n      </div>\n    \n            ",
      "mcqs": [
        {
          "q": "A learner wants a free language that is easy to read and can build many kinds of software. Which choice fits best?",
          "options": [
            "Python",
            "Machine code",
            "A spreadsheet only",
            "HTML only"
          ],
          "answer": 0,
          "why": "Python is free, readable and general-purpose."
        },
        {
          "q": "A Windows terminal cannot find python after installation. Which action is most likely to solve it?",
          "options": [
            "Change the monitor",
            "Add Python to PATH",
            "Install a second keyboard",
            "Delete the installer"
          ],
          "answer": 1,
          "why": "PATH tells the terminal where python.exe is stored."
        },
        {
          "q": "Which tool is the simplest choice for one quick Python calculation after installing Python?",
          "options": [
            "A photo editor",
            "GitHub",
            "IDLE",
            "A word processor"
          ],
          "answer": 2,
          "why": "IDLE is included with Python and provides an interactive shell."
        },
        {
          "q": "A data student wants text, code and charts in one document. Which environment suits this?",
          "options": [
            "Command Prompt only",
            "Notepad only",
            "A PDF viewer",
            "Jupyter Notebook"
          ],
          "answer": 3,
          "why": "Jupyter uses cells that can mix explanations, code and output."
        },
        {
          "q": "Which command removes a package named colorama?",
          "options": [
            "pip uninstall colorama",
            "python delete colorama",
            "remove package colorama",
            "pip list colorama"
          ],
          "answer": 0,
          "why": "pip uninstall removes an installed package."
        },
        {
          "q": "Why might two projects use separate virtual environments?",
          "options": [
            "It changes the keyboard layout",
            "They may need different package versions",
            "They need different internet providers",
            "Python cannot open two folders"
          ],
          "answer": 1,
          "why": "Isolation prevents package conflicts."
        },
        {
          "q": "After activation, what visual clue usually appears in the terminal?",
          "options": [
            "A green screen",
            "The file is deleted",
            "The environment name in brackets",
            "A snake image"
          ],
          "answer": 2,
          "why": "The active environment name appears before the prompt."
        },
        {
          "q": "Which command records installed packages in a recipe file?",
          "options": [
            "pip list > python.py",
            "python requirements.txt",
            "deactivate > packages",
            "pip freeze > requirements.txt"
          ],
          "answer": 3,
          "why": "pip freeze writes package versions that can be recreated later."
        }
      ],
      "tasks": [
        {
          "id": "u1cp01p01",
          "kind": "confirm",
          "title": "Setup path check",
          "brief": "Verify one installation command on a real machine.",
          "label": "I ran <code>python --version</code> or <code>python3 --version</code> and recorded the version number.",
          "level": "Revision Checkpoint — Task 1"
        },
        {
          "id": "u1cp01p02",
          "kind": "confirm",
          "title": "Editor choice",
          "brief": "Choose the correct tool for three jobs.",
          "label": "I chose IDLE for a quick line, VS Code for a project, and Jupyter for text + code + charts.",
          "level": "Revision Checkpoint — Task 2"
        },
        {
          "id": "u1cp01p03",
          "kind": "confirm",
          "title": "Package command practice",
          "brief": "Run or write the three essential PIP commands.",
          "label": "I practised <code>pip install</code>, <code>pip list</code> and <code>pip uninstall</code> with a safe package.",
          "level": "Revision Checkpoint — Task 3"
        },
        {
          "id": "u1cp01p04",
          "kind": "confirm",
          "title": "Virtual room practice",
          "brief": "Create, enter and leave a virtual environment.",
          "label": "I created a test environment, activated it, saw its name in brackets, and used <code>deactivate</code>.",
          "level": "Revision Checkpoint — Task 4"
        },
        {
          "id": "u1cp01p05",
          "kind": "confirm",
          "title": "Recipe card check",
          "brief": "Create or inspect a requirements file.",
          "label": "I used <code>pip freeze &gt; requirements.txt</code> and understood how <code>pip install -r requirements.txt</code> rebuilds it.",
          "level": "Revision Checkpoint — Task 5"
        }
      ]
    },
    {
      "id": "u1t07",
      "title": "Talking to Python: Shell Mode",
      "summary": "Your first real code. Type one line, get one answer, straight away.",
      "notebookLM": "",
      "notes": "\n      <h4>Like sending a text message</h4>\n      <p>You text a friend. You send one short message, they reply at once. Then you send\n      another.</p>\n      <p>The <strong>Python Shell</strong> works exactly like that. Type one line, press\n      Enter, get the answer instantly. It is also called <strong>Interactive Mode</strong>.</p>\n\n      <h4>How to open it</h4>\n      <ol>\n        <li>Open Command Prompt (Windows) or Terminal (Mac).</li>\n        <li>Type <code>python</code> and press Enter. On some Macs, <code>python3</code>.</li>\n        <li>You see three arrows: <code>&gt;&gt;&gt;</code>. That means \"I am listening\".</li>\n        <li>Type <code>5 + 5</code>, press Enter. Python replies <code>10</code>.</li>\n      </ol>\n      <p>To leave, type <code>exit()</code> and press Enter.</p>\n\n      <div class=\"callout\">\n        <strong>The shell forgets everything.</strong> Close the window and your work is gone.\n        Shell mode is for trying things out, not for keeping them.\n      </div>\n\n      <h4>Scripting mode — writing a film script</h4>\n      <p>A film director does not tell the actors what to do one second at a time. A writer\n      writes the whole script first. Then the actors perform it from start to end.</p>\n      <p><strong>Scripting mode</strong> is that. You write many lines in a file, save it, and\n      then run the whole file at once. Your work is saved. This is what real projects use.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 215\" role=\"img\" aria-label=\"Shell mode answers each line at once; script mode runs a saved file from top to bottom.\">\n        <text x=\"168\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Shell mode — a live chat</text>\n        <rect class=\"box box--dark\" x=\"8\" y=\"38\" width=\"320\" height=\"132\" rx=\"8\"/>\n        <text x=\"32\" y=\"72\" class=\"mono on-dark\">&gt;&gt;&gt; 5 + 5</text>\n        <text x=\"32\" y=\"98\" class=\"mono accent\">10</text>\n        <text x=\"32\" y=\"128\" class=\"mono on-dark\">&gt;&gt;&gt; 20 * 3</text>\n        <text x=\"32\" y=\"154\" class=\"mono accent\">60</text>\n        <text x=\"168\" y=\"198\" text-anchor=\"middle\" style=\"font-size:12.5px\">Instant answers. Nothing is saved.</text>\n\n        <text x=\"532\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Script mode — a saved file</text>\n        <rect class=\"box box--dark\" x=\"372\" y=\"38\" width=\"320\" height=\"132\" rx=\"8\"/>\n        <text x=\"394\" y=\"68\" class=\"mono on-dark\">print(\"Line one\")</text>\n        <text x=\"394\" y=\"92\" class=\"mono on-dark\">print(\"Line two\")</text>\n        <text x=\"394\" y=\"116\" class=\"mono on-dark\">print(\"Line three\")</text>\n        <text x=\"394\" y=\"150\" class=\"mono accent\">runs all three, top to bottom</text>\n        <text x=\"532\" y=\"198\" text-anchor=\"middle\" style=\"font-size:12.5px\">Saved forever. Run it again any time.</text>\n      </svg>\n\n      <h4>Which one should you use?</h4>\n      <table>\n        <tr><th></th><th>Shell mode</th><th>Script mode</th></tr>\n        <tr><td>How you start</td><td>Type <code>python</code></td><td>Run <code>python myfile.py</code></td></tr>\n        <tr><td>Prompt</td><td><code>&gt;&gt;&gt;</code></td><td>none — it just runs</td></tr>\n        <tr><td>Runs</td><td>One line at a time</td><td>The whole file</td></tr>\n        <tr><td>Saved?</td><td>No</td><td>Yes</td></tr>\n        <tr><td>Good for</td><td>Testing an idea</td><td>Assignments and real projects</td></tr>\n      </table>\n\n      <h4>Hello, World!</h4>\n      <p>There is an old tradition in programming. Your very first program should make the\n      computer say hello to the world.</p>\n      <pre><code>print(\"Hello, World!\")</code></pre>\n      <p>That is a complete Python program. One line. Let us look at the pieces:</p>\n      <ul>\n        <li><code>print</code> — the tool that writes on the screen.</li>\n        <li><code>( )</code> — brackets. Whatever is inside gets given to the tool.</li>\n        <li><code>\"Hello, World!\"</code> — text in quotes. Python prints it exactly as written.</li>\n      </ul>\n\n      <div class=\"callout\">\n        <strong>Small letters only.</strong> <code>print</code> works. <code>Print</code> and\n        <code>PRINT</code> do not. Python is <em>case sensitive</em> — it looks for the exact\n        name you typed, and there is no tool called <code>Print</code>.\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">One piece of this line stops it working. Tap it.</p>\n        <div class=\"w-spot__line\">\n          <button data-bad>Print</button><button>(</button><button>\"Hello\"</button><button>)</button>\n        </div>\n        <p class=\"w__why\">The capital <strong>P</strong>. Python has <code>print</code> and\n        nothing called <code>Print</code>, so it says\n        <code>NameError: name 'Print' is not defined</code>.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>Now it is your turn.</strong> The boxes below run real Python inside this page.\n        Type the code yourself — pasting is switched off, because typing is how your fingers\n        learn. The first run takes a few seconds while Python loads.\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: The shell is a conversation</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>The Python shell follows a simple cycle: read what you type, calculate it, show the result, then wait again.</p><p>Use it for tiny tests. Do not use it as the main home for a long project because the work is not saved like a normal file.</p>\n      <h4>Worked example</h4>\n      <pre><code>&gt;&gt;&gt; 10 + 5\n15\n&gt;&gt;&gt; print(&quot;Ready&quot;)\nReady</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"The shell repeats a read–evaluate–print cycle for every small instruction.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Type at &gt;&gt;&gt;</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Python reads</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Python evaluates</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Shell replies</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">The shell repeats a read–evaluate–print cycle for every small instruction.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">Which job suits the shell best?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">A 500-line application</button><button data-o=\"1\">A quick test of 12 * 4</button><button data-o=\"2\">A saved final project</button><button data-o=\"3\">A website deployment</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> A quick calculation or one-line experiment.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What do the three arrows >>> mean?",
          "options": [
            "Your computer has a virus",
            "You are in the Python Shell and Python is waiting for your command",
            "You should press the right arrow key",
            "The program has finished"
          ],
          "answer": 1,
          "why": "It is Python saying \"I am listening\". Type a line, press Enter, and you get an answer straight away."
        },
        {
          "q": "Which mode saves your work so you can run it again tomorrow?",
          "options": [
            "Scripting mode",
            "Interactive mode",
            "Shell mode",
            "Quick mode"
          ],
          "answer": 0,
          "why": "Scripting mode puts your code in a .py file. Shell mode and interactive mode are two names for the same thing, and both forget everything when you close the window."
        },
        {
          "q": "You want to test 100 / 4 very quickly. Which is fastest?",
          "options": [
            "Scripting mode",
            "The Python Shell",
            "Writing a full project",
            "Saving a .py file first"
          ],
          "answer": 1,
          "why": "For a one-off sum, opening the shell and typing it is far quicker than creating, saving and running a file."
        },
        {
          "q": "What happens when you run Print(\"Hi\") with a capital P?",
          "options": [
            "It prints Hi",
            "SyntaxError",
            "NameError",
            "It prints PRINT"
          ],
          "answer": 2,
          "why": "The shape of the line is fine, so it is not a SyntaxError. Python looks for a tool named Print, finds none, and raises NameError."
        }
      ],
      "tasks": [
        {
          "id": "u1t07p01",
          "kind": "code",
          "title": "Task 7.1 — Hello, World!",
          "brief": "Print exactly: Hello, World!  — the comma and the exclamation mark both count.",
          "starter": "# Write one print statement below\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello, World!"
            },
            {
              "type": "sourceIncludes",
              "value": "print",
              "message": "Use the print() tool"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the print() tool",
            "Your first output line should be: Hello, World!"
          ]
        },
        {
          "id": "u1t07p02",
          "kind": "code",
          "title": "Task 7.2 — Fix the capital letter",
          "brief": "This line is broken. Repair it so it prints: Python is case sensitive",
          "starter": "Print(\"Python is case sensitive\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Python is case sensitive"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: Python is case sensitive"
          ]
        },
        {
          "id": "u1t07p03",
          "kind": "code",
          "title": "Task 7.3 — Say your own name",
          "brief": "Print two lines. First line: your name. Second line exactly: I am learning Python",
          "starter": "# Line 1 — your name\n# Line 2 — I am learning Python\n",
          "checks": [
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print two separate lines"
            },
            {
              "type": "stdoutContains",
              "value": "I am learning Python",
              "message": "Second line says: I am learning Python"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your output must include: I am learning Python"
          ]
        },
        {
          "id": "u1t07p04",
          "kind": "code",
          "title": "Task 7.4 — Python as a quick calculator",
          "brief": "Use print() to show the answers to 12 + 8 and 6 * 7 on two separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20\n42"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 2,
              "message": "Use two print statements"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use two print statements",
            "Your first output line should be: 20"
          ]
        },
        {
          "kind": "code",
          "title": "Fix the unfinished message",
          "brief": "The quote is not closed. Repair the line so it prints exactly: Welcome to Python",
          "starter": "print(\"Welcome to Python)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Welcome to Python"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t07p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: Welcome to Python"
          ]
        },
        {
          "id": "u1t07p06",
          "kind": "code",
          "title": "Task 7.6 — Repair brackets and quotes",
          "brief": "Fix the broken line so it prints exactly: Practice makes progress",
          "starter": "print(\"Practice makes progress\"\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Practice makes progress"
            },
            {
              "type": "sourceRegex",
              "pattern": "print\\(.*\\)",
              "message": "Use a complete print() call"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use a complete print() call",
            "Your first output line should be: Practice makes progress"
          ]
        },
        {
          "id": "u1t07p07",
          "kind": "code",
          "title": "Task 7.7 — Four-line welcome card",
          "brief": "Print exactly four lines: Welcome / to / Python / Practice",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Welcome\nto\nPython\nPractice"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 4,
              "message": "Use four print statements"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Use four print statements",
            "Your first output line should be: Welcome"
          ]
        },
        {
          "id": "u1t07p08",
          "kind": "code",
          "title": "Task 7.8 — Shell practice board",
          "brief": "Create a six-line output: PYTHON SHELL, 5 + 5 = 10, 8 * 3 = 24, One line at a time, Instant answer, Practice complete. Use print() only.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "PYTHON SHELL\n5 + 5 = 10\n8 * 3 = 24\nOne line at a time\nInstant answer\nPractice complete"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 6,
              "message": "Use six print statements"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "input\\(|import\\s",
              "message": "Use only print() in this beginner build"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use six print statements Also remember: use only print() in this beginner build.",
            "Your first output line should be: PYTHON SHELL"
          ]
        }
      ]
    },
    {
      "id": "u1t08",
      "title": "Running a Python File",
      "summary": "Make a .py file, then run it three different ways.",
      "notebookLM": "",
      "notes": "\n      <h4>What is a Python script?</h4>\n      <p>A Python script is an ordinary text file. The only special thing about it is the\n      ending: <code>.py</code> instead of <code>.txt</code> or <code>.docx</code>.</p>\n      <p>That ending is how your computer, your editor and your teacher all know it is Python.</p>\n\n      <h4>Making one</h4>\n      <ol>\n        <li>Open VS Code (or IDLE).</li>\n        <li><strong>File → New File.</strong></li>\n        <li>Save it and name it <code>hello.py</code>.</li>\n        <li>Type inside: <code>print(\"I am running a script!\")</code></li>\n        <li>Save again — Ctrl+S on Windows, Cmd+S on Mac.</li>\n      </ol>\n\n      <div class=\"callout\">\n        <strong>Save before you run.</strong> Every editor runs the <em>saved</em> file, not\n        what is on your screen. If your changes seem to do nothing, you probably forgot to save.\n      </div>\n\n      <h4>Way 1 — the Play button</h4>\n      <p>In VS Code, look at the top right corner. There is a small triangle, like a play\n      button. Click it. A panel opens at the bottom and your message appears there.</p>\n      <p>This is the easiest way, and the one you will use most.</p>\n\n      <h4>Way 2 — the built-in terminal</h4>\n      <p>That panel at the bottom of VS Code is called the <strong>Console</strong> or\n      <strong>Integrated Terminal</strong>. You can type in it yourself.</p>\n      <ol>\n        <li>Top menu → <strong>Terminal</strong> → <strong>New Terminal</strong>.</li>\n        <li>Type <code>python hello.py</code> and press Enter.</li>\n      </ol>\n\n      <h4>Way 3 — your computer's own terminal</h4>\n      <p>You do not need VS Code at all. But now you must tell the computer <em>where</em> the\n      file is. Think of giving a driver the map.</p>\n      <ol>\n        <li>Open Command Prompt or Terminal.</li>\n        <li>Use <code>cd</code> — <em>change directory</em> — to walk to the right folder.\n        If the file is on your desktop: <code>cd Desktop</code></li>\n        <li>Then type: <code>python hello.py</code></li>\n      </ol>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 200\" role=\"img\" aria-label=\"Three ways to run a file: the play button, the built-in terminal, and your computer's own terminal.\">\n        <rect class=\"box\" x=\"8\" y=\"40\" width=\"212\" height=\"112\" rx=\"8\"/>\n        <text x=\"114\" y=\"70\" text-anchor=\"middle\" style=\"font-size:13.5px;font-weight:700\">1. Play button</text>\n        <text x=\"114\" y=\"96\" text-anchor=\"middle\" style=\"font-size:12px\">Top right of VS Code</text>\n        <text x=\"114\" y=\"126\" text-anchor=\"middle\" class=\"mono accent\">easiest</text>\n\n        <rect class=\"box\" x=\"244\" y=\"40\" width=\"212\" height=\"112\" rx=\"8\"/>\n        <text x=\"350\" y=\"70\" text-anchor=\"middle\" style=\"font-size:13.5px;font-weight:700\">2. Built-in terminal</text>\n        <text x=\"350\" y=\"96\" text-anchor=\"middle\" class=\"mono\">python hello.py</text>\n        <text x=\"350\" y=\"126\" text-anchor=\"middle\" class=\"mono accent\">inside VS Code</text>\n\n        <rect class=\"box box--dark\" x=\"480\" y=\"40\" width=\"212\" height=\"112\" rx=\"8\"/>\n        <text x=\"586\" y=\"70\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:13.5px;font-weight:700\">3. Your own terminal</text>\n        <text x=\"586\" y=\"96\" text-anchor=\"middle\" class=\"mono on-dark\">cd Desktop</text>\n        <text x=\"586\" y=\"118\" text-anchor=\"middle\" class=\"mono on-dark\">python hello.py</text>\n        <text x=\"586\" y=\"144\" text-anchor=\"middle\" class=\"mono accent\">no editor needed</text>\n      </svg>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">A student wrote Python code but saved the file as <code>test_code.txt</code>.\n        Then they typed <code>python test_code.txt</code>. What is wrong?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Nothing — it works fine</button>\n          <button data-o=\"1\">The file must end in .py, not .txt</button>\n          <button data-o=\"2\">Python files must be saved on the Desktop</button>\n        </div>\n        <p class=\"w__why\">Python files end in <code>.py</code>. The fix is simple: rename the\n        file to <code>test_code.py</code>. Watch out on Windows — it sometimes hides file\n        endings, so a file that looks like <code>test_code</code> may really be\n        <code>test_code.txt</code>.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">What does each command do?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>cd Desktop</code></button>\n            <button data-pair=\"b\"><code>python game.py</code></button>\n            <button data-pair=\"c\"><code>python</code></button>\n            <button data-pair=\"d\"><code>exit()</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">Open the shell, with the &gt;&gt;&gt; prompt</button>\n            <button data-pair=\"a\">Move into the Desktop folder</button>\n            <button data-pair=\"d\">Leave the shell</button>\n            <button data-pair=\"b\">Run a saved file from top to bottom</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> These are the commands you will type most\n        often for the rest of the year.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>On this site</strong> there is no file to save and no terminal to open — the\n        Run button does all three jobs at once. But you must still know these three ways for\n        your lab exam.\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: The script improvement cycle</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>A script stores instructions in a <code>.py</code> file. You can run it many times without typing the program again.</p><p>Real programming is a cycle: write a little, save, run, read the output, improve, and run again.</p>\n      <h4>Worked example</h4>\n      <pre><code># hello.py\nname = &quot;Ravi&quot;\nprint(&quot;Hello&quot;, name)\n\n# Terminal:\npython hello.py</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A script survives after the terminal closes and can be improved step by step.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Write file</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Save .py</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Run file</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Improve code</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A script survives after the terminal closes and can be improved step by step.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\"><code>.py</code></button><button data-pair=\"p1\"><code>python hello.py</code></button><button data-pair=\"p2\">Save</button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p2\">Stores the newest changes before running</button><button data-pair=\"p1\">Command that runs the saved file</button><button data-pair=\"p0\">Python script file ending</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What must a Python file's name end with?",
          "options": [
            ".txt",
            ".python",
            ".py",
            ".script"
          ],
          "answer": 2,
          "why": "Just .py. That ending is how everything — the interpreter, your editor, your teacher — recognises the file as Python."
        },
        {
          "q": "What is the easiest way to run a Python file in VS Code?",
          "options": [
            "Click the Play button in the top right corner",
            "Email it to yourself",
            "Double-click the file on your desktop",
            "Drag it into a web browser"
          ],
          "answer": 0,
          "why": "The small triangle at the top right saves and runs the file, and shows the output at the bottom of the screen."
        },
        {
          "q": "You saved a file named game.py. What do you type in the terminal to run it?",
          "options": [
            "run game",
            "start game.py",
            "python game.py",
            "open game"
          ],
          "answer": 2,
          "why": "python game.py — the interpreter first, then the file name. And you must already be in the folder where the file is."
        },
        {
          "q": "What does the cd command do?",
          "options": [
            "Copies a document",
            "Changes directory — moves you into a different folder",
            "Closes the terminal",
            "Creates a new file"
          ],
          "answer": 1,
          "why": "cd is short for change directory. Python can only run a file if you are standing in the folder that holds it."
        }
      ],
      "tasks": [
        {
          "id": "u1t08p01",
          "kind": "code",
          "title": "Task 8.1 — Three lines in one script",
          "brief": "A script runs every line from top to bottom. Print these three lines, in this order: Line one / Line two / Line three",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Line one\nLine two\nLine three"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: Line one"
          ]
        },
        {
          "id": "u1t08p02",
          "kind": "confirm",
          "title": "Task 8.2 — Do it on your own machine",
          "brief": "Create a real file called my_first_script.py on your Desktop with two print lines inside. Run it with the Play button, then again from the terminal.",
          "label": "I saved <code>my_first_script.py</code>, ran it with the Play button, then opened a terminal, typed <code>cd Desktop</code> and <code>python my_first_script.py</code>, and it worked both ways.",
          "level": "Level 1 — Follow Me"
        },
        {
          "id": "u1t08p03",
          "kind": "code",
          "title": "Task 8.1 — Script-style output",
          "brief": "Print exactly two lines: My first script and Saved as a .py file",
          "starter": "# Imagine this is practice.py\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "My first script\nSaved as a .py file"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: My first script"
          ]
        },
        {
          "id": "u1t08p04",
          "kind": "code",
          "title": "Task 8.4 — Script order matters",
          "brief": "Four lines are mixed up. Arrange print statements so the output reads Start, Load data, Show result, End.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Start\nLoad data\nShow result\nEnd"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 4,
              "message": "Use four print statements"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use four print statements",
            "Your first output line should be: Start"
          ]
        },
        {
          "kind": "confirm",
          "title": "Extension detective",
          "brief": "Create a practice file, check its full file name, and make sure Windows or macOS has not secretly saved it as .txt.",
          "label": "I checked that my file truly ends in .py, opened it in a code editor, and saw Python syntax highlighting.",
          "id": "u1t08p05",
          "level": "Level 3 — Fix or Apply"
        },
        {
          "id": "u1t08p06",
          "kind": "code",
          "title": "Task 8.6 — Saved-file message",
          "brief": "Print three lines that a saved program might show: File opened / Program running / Program finished",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "File opened\nProgram running\nProgram finished"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 3,
              "message": "Use three print statements"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use three print statements",
            "Your first output line should be: File opened"
          ]
        },
        {
          "id": "u1t08p07",
          "kind": "code",
          "title": "Task 8.7 — Terminal run guide",
          "brief": "Print these three terminal steps exactly, one per line: cd Desktop / python practice.py / Program finished",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "cd Desktop\npython practice.py\nProgram finished"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 3,
              "message": "Print the three steps separately"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Print the three steps separately",
            "Your first output line should be: cd Desktop"
          ]
        },
        {
          "id": "u1t08p08",
          "kind": "code",
          "title": "Task 8.8 — Complete script banner",
          "brief": "Build a five-line script output with a top border, title PYTHON FILE, message Saved with .py, message Running from top to bottom, and a bottom border. Use ========== for both borders.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "==========\nPYTHON FILE\nSaved with .py\nRunning from top to bottom\n=========="
            },
            {
              "type": "stdoutLineCount",
              "value": 5,
              "message": "Print exactly five lines"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 5,
              "message": "Use five print statements"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use five print statements",
            "Your first output line should be: =========="
          ]
        }
      ]
    },
    {
      "id": "u1t09",
      "title": "Statements, Expressions and Comments",
      "summary": "The bricks your programs are built from, and how to leave notes for people.",
      "notebookLM": "",
      "notes": "\n      <h4>A statement is a full command</h4>\n      <p>If you say to a dog, \"Sit down!\" — that is a complete instruction.</p>\n      <p>A <strong>statement</strong> is one complete line of code that tells the computer to\n      do something.</p>\n      <pre><code>name = \"John\"      # a statement: make a box called name\nprint(name)        # a statement: show what is in it</code></pre>\n\n      <h4>An expression produces a value</h4>\n      <p>If I say \"5 + 5\", I have not given you a command. I have given you a small sum that\n      works out to 10.</p>\n      <p>An <strong>expression</strong> is a piece of code that produces a value. It does not\n      do an action by itself — it just calculates.</p>\n      <pre><code>10 + 5             # an expression, worth 15\n\"Hello\" + \"World\"  # an expression, worth HelloWorld</code></pre>\n\n      <div class=\"callout\">\n        <strong>They live together.</strong> Statements very often contain expressions.\n        In <code>answer = 10 + 5</code>, the whole line is a statement, and\n        <code>10 + 5</code> is the expression sitting inside it.\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Statement or expression?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>50 * 2</code></button>\n            <button data-pair=\"b\"><code>age = 20</code></button>\n            <button data-pair=\"c\"><code>print(\"Hi\")</code></button>\n            <button data-pair=\"d\"><code>\"a\" + \"b\"</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"b\">Statement — it makes a variable</button>\n            <button data-pair=\"d\">Expression — it works out to \"ab\"</button>\n            <button data-pair=\"a\">Expression — it works out to 100</button>\n            <button data-pair=\"c\">Statement — it performs an action</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>Correct.</strong> The quick test: does it <em>do</em>\n        something (statement), or does it just <em>work out to</em> something (expression)?</p>\n      </div>\n\n      <h4>Comments — sticky notes on the fridge</h4>\n      <p>When you write code, you want to leave notes explaining <em>why</em> you did\n      something, so that future-you is not confused.</p>\n      <p><strong>Comments</strong> are messages for human eyes only. When Python runs your\n      file, it skips them completely.</p>\n\n      <h4>Single-line comments</h4>\n      <p>Use the hash symbol <code>#</code>. Everything after it on that line is invisible to\n      Python.</p>\n      <pre><code># This works out the total price of the shoes\ntotal = 50 + 20\n\nprint(total)   # a comment can also sit at the end of a line</code></pre>\n\n      <h4>Multi-line comments</h4>\n      <p>Need a whole paragraph? You could put <code>#</code> on every line. Or you can wrap\n      the paragraph in three single quotes.</p>\n      <pre><code>'''\nI am writing a long note here.\nThis program checks the weather.\nIt was written in 2026.\n'''\nprint(\"Hello\")</code></pre>\n\n      <h4>Docstrings — the instruction manual</h4>\n      <p>A <strong>docstring</strong> is a special multi-line note using three\n      <em>double</em> quotes. You put it at the very top of a file or a tool, as a manual for\n      whoever reads your code next.</p>\n      <pre><code>\"\"\"\nWelcome to the Calculator Program.\nThis file adds and subtracts numbers.\n\"\"\"</code></pre>\n\n      <div class=\"callout\">\n        <strong>Write comments worth reading.</strong><br>\n        <code>x = x + 1&nbsp;&nbsp;&nbsp;# add 1 to x</code> — useless, the code already says that.<br>\n        <code>x = x + 1&nbsp;&nbsp;&nbsp;# count this wrong attempt</code> — useful, it says <em>why</em>.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this program print?</p>\n        <pre><code># print(\"First\")\nprint(\"Second\")</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Second</button>\n          <button data-o=\"1\">First then Second</button>\n          <button data-o=\"2\">Nothing</button>\n        </div>\n        <p class=\"w__why\">The first line starts with <code>#</code>, so Python never sees it.\n        Only <code>Second</code> is printed. Turning a line into a comment like this is a very\n        common trick for switching code off without deleting it.</p>\n      </div>\n    \n<h4>Extra visual recap</h4>\n<svg class=\"fig\" viewBox=\"0 0 700 220\" role=\"img\" aria-label=\"An expression produces 15 and a statement stores it in answer.\">\n        <rect class=\"box\" x=\"35\" y=\"68\" width=\"190\" height=\"80\" rx=\"10\"/><text x=\"130\" y=\"116\" text-anchor=\"middle\" class=\"mono\">10 + 5</text><text x=\"130\" y=\"174\" text-anchor=\"middle\" class=\"lbl\">expression</text>\n        <path class=\"arrow\" d=\"M237 108 h68\"/><path class=\"accent\" d=\"M317 108 l-13 -7 v14 z\"/><circle cx=\"360\" cy=\"108\" r=\"36\" fill=\"rgba(242,160,61,.16)\" stroke=\"#D67F19\" stroke-width=\"2.4\"/><text x=\"360\" y=\"116\" text-anchor=\"middle\" class=\"mono\">15</text>\n        <path class=\"arrow\" d=\"M408 108 h68\"/><path class=\"accent\" d=\"M488 108 l-13 -7 v14 z\"/><rect class=\"box box--dark\" x=\"496\" y=\"60\" width=\"170\" height=\"96\" rx=\"10\"/><text x=\"581\" y=\"96\" text-anchor=\"middle\" class=\"mono on-dark\">answer = 15</text><text x=\"581\" y=\"128\" text-anchor=\"middle\" class=\"lbl on-dark\">statement</text>\n        <text x=\"350\" y=\"214\" text-anchor=\"middle\" class=\"figcap\">An expression's value can be used inside a statement.</text>\n      </svg>\n<span class=\"figcap\">A second visual explanation from the original AbhyasLab version.</span>\n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Three building blocks in one file</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>An expression produces a value. A statement performs an action. A comment explains the code to a human.</p><p>One line may contain an expression inside a statement. In <code>total = 4 + 6</code>, <code>4 + 6</code> is the expression and the full assignment is the statement.</p>\n      <h4>Worked example</h4>\n      <pre><code># This is a comment\ntotal = 4 + 6\nprint(total)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Comments help people; expressions create values; statements tell Python what to do.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Comment explains</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Expression calculates</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Statement stores</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Print shows</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Comments help people; expressions create values; statements tell Python what to do.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\"><code>4 + 6</code></button><button data-pair=\"p1\"><code>total = 4 + 6</code></button><button data-pair=\"p2\"><code># add prices</code></button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p2\">Comment</button><button data-pair=\"p1\">Statement</button><button data-pair=\"p0\">Expression</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What is the difference between a statement and an expression?",
          "options": [
            "An expression gives a command, a statement does maths",
            "An expression produces a value; a statement is a complete instruction that does something",
            "Statements are invisible to the computer",
            "There is no difference"
          ],
          "answer": 1,
          "why": "5 + 5 works out to a value — expression. age = 20 performs an action — statement. Statements often have expressions inside them."
        },
        {
          "q": "Which symbol starts a single-line comment in Python?",
          "options": [
            "//",
            "*",
            "#",
            "<!--"
          ],
          "answer": 2,
          "why": "The hash, #. The others belong to Java, C and HTML — typing them in a .py file gives you a SyntaxError."
        },
        {
          "q": "What does Python do when it reaches a comment?",
          "options": [
            "Translates it",
            "Prints it on the screen",
            "Ignores it completely",
            "Stops with an error"
          ],
          "answer": 2,
          "why": "It skips it entirely. Comments exist only for the humans reading your code."
        },
        {
          "q": "Which one is a docstring?",
          "options": [
            "# A note",
            "''' A note '''",
            "\"\"\" A note \"\"\"",
            "// A note"
          ],
          "answer": 2,
          "why": "Three double quotes. Placed at the very top of a file or tool it becomes real documentation that Python keeps hold of, not just a comment."
        }
      ],
      "tasks": [
        {
          "id": "u1t09p01",
          "kind": "code",
          "title": "Task 9.1 — A note above your code",
          "brief": "Print your favourite colour. Above that line, write a single-line comment saying what the code is about to do.",
          "starter": "",
          "checks": [
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 1,
              "message": "Write a comment line starting with #"
            },
            {
              "type": "stdoutMinLines",
              "value": 1,
              "message": "Print something"
            },
            {
              "type": "sourceIncludes",
              "value": "print",
              "message": "Use print()"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Write a comment line starting with # Also remember: use print().",
            "Compare your output carefully with the required capital letters, spaces and line breaks."
          ]
        },
        {
          "id": "u1t09p02",
          "kind": "code",
          "title": "Task 9.2 — Write the manual",
          "brief": "Write a docstring using three double quotes at the top of the file, then print exactly: Space Invaders is loading",
          "starter": "",
          "checks": [
            {
              "type": "sourceRegex",
              "pattern": "\"\"\"",
              "message": "Use a docstring with three double quotes"
            },
            {
              "type": "stdoutEquals",
              "value": "Space Invaders is loading"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use a docstring with three double quotes",
            "Your first output line should be: Space Invaders is loading"
          ]
        },
        {
          "id": "u1t09p03",
          "kind": "code",
          "title": "Task 9.3 — Switch a line off",
          "brief": "Two print lines are given. Turn the first one into a comment so only the second one runs.",
          "starter": "print(\"This line should NOT appear\")\nprint(\"Only this line appears\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Only this line appears"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 1,
              "message": "Comment out the first line with #"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Comment out the first line with #",
            "Your first output line should be: Only this line appears"
          ]
        },
        {
          "kind": "code",
          "title": "Expression inside a statement",
          "brief": "Store the answer to 15 + 27 in a variable called answer, then print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "42"
            },
            {
              "type": "sourceRegex",
              "pattern": "answer\\s*=\\s*15\\s*\\+\\s*27",
              "message": "Put the 15 + 27 expression inside the assignment statement"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*42\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "id": "u1t09p04",
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Put the 15 + 27 expression inside the assignment statement",
            "Your first output line should be: 42"
          ]
        },
        {
          "kind": "code",
          "title": "Two useful notes",
          "brief": "Write at least two comment lines, then print Start and Done on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 2,
              "message": "Write at least two comment lines"
            },
            {
              "type": "stdoutEquals",
              "value": "Start\nDone"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t09p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Write at least two comment lines",
            "Your first output line should be: Start"
          ]
        },
        {
          "id": "u1t09p06",
          "kind": "code",
          "title": "Task 9.6 — Explain a calculation",
          "brief": "Write one useful comment, store 9 * 6 in result, and print result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "54"
            },
            {
              "type": "sourceIncludes",
              "value": "result",
              "message": "Store the expression in result"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 1,
              "message": "Write one comment"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*54\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Store the expression in result Also remember: write one comment.",
            "Your first output line should be: 54"
          ]
        },
        {
          "id": "u1t09p07",
          "kind": "code",
          "title": "Task 9.7 — Commented mini program",
          "brief": "Start with a docstring, add at least three useful # comments, calculate 25 + 17 in a variable, and print: Total: 42",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Total: 42"
            },
            {
              "type": "sourceRegex",
              "pattern": "\"\"\"[\\s\\S]*?\"\"\"",
              "message": "Add a three-double-quote docstring"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 3,
              "message": "Add at least three comment lines"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\w+\\s*=\\s*25\\s*\\+\\s*17",
              "message": "Calculate 25 + 17 in a variable"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Add a three-double-quote docstring Also remember: add at least three comment lines.",
            "Your first output line should be: Total: 42"
          ]
        },
        {
          "id": "u1t09p08",
          "kind": "code",
          "title": "Task 9.8 — Documented calculation card",
          "brief": "Create a small documented program with a docstring, four useful comments, variables price = 50 and delivery = 10, an expression total = price + delivery, and exactly four output lines: BILL, Price: 50, Delivery: 10, Total: 60.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "BILL\nPrice: 50\nDelivery: 10\nTotal: 60"
            },
            {
              "type": "sourceRegex",
              "pattern": "\"\"\"[\\s\\S]*?\"\"\"",
              "message": "Include a docstring"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 4,
              "message": "Include four useful comments"
            },
            {
              "type": "sourceIncludes",
              "value": "total = price + delivery",
              "message": "Calculate total from the two variables"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Include a docstring Also remember: include four useful comments.",
            "Your first output line should be: BILL"
          ]
        }
      ]
    },
    {
      "id": "u1t10",
      "title": "Indentation and Fixing Errors",
      "summary": "In Python, spaces are the law. Plus how to read an error instead of fearing it.",
      "notebookLM": "",
      "notes": "\n      <h4>Why we indent</h4>\n      <p>A book with no paragraphs and no spacing would hurt your eyes. We indent paragraphs\n      to show where a new thought begins.</p>\n      <p>Most languages group code with curly brackets <code>{ }</code>. Python uses\n      <strong>empty space</strong> instead. You press Tab (or the spacebar four times) to push\n      a line to the right.</p>\n\n      <h4>In Python, indentation is not decoration</h4>\n      <p>It is the law. Pushing a line to the right tells Python: <em>this line belongs\n      inside the line above it.</em></p>\n      <pre><code>if 5 > 2:\n    print(\"Five is bigger!\")</code></pre>\n      <p>That indented line belongs to the <code>if</code>. Remove the space and Python does\n      not just look untidy — it stops and refuses to run.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"Correct indentation groups a line under the if statement; missing indentation causes an error.\">\n        <text x=\"168\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Correct</text>\n        <rect class=\"box box--dark\" x=\"8\" y=\"38\" width=\"320\" height=\"96\" rx=\"8\"/>\n        <text x=\"30\" y=\"72\" class=\"mono on-dark\">if 5 &gt; 2:</text>\n        <text x=\"30\" y=\"98\" class=\"mono accent\">    print(\"Bigger!\")</text>\n        <path class=\"good\" stroke=\"#3FD0B8\" d=\"M40 108 v10 h150\"/>\n        <text x=\"168\" y=\"158\" text-anchor=\"middle\" style=\"font-size:12px\">The pushed-in line belongs to the if</text>\n\n        <text x=\"532\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Broken</text>\n        <rect class=\"box box--dark\" x=\"372\" y=\"38\" width=\"320\" height=\"96\" rx=\"8\"/>\n        <text x=\"394\" y=\"72\" class=\"mono on-dark\">if 5 &gt; 2:</text>\n        <text x=\"394\" y=\"98\" class=\"mono\" fill=\"#FF9A8E\">print(\"Bigger!\")</text>\n        <text x=\"532\" y=\"158\" text-anchor=\"middle\" style=\"font-size:12px\">IndentationError — nothing is inside the if</text>\n      </svg>\n\n      <h4>The classic mistake</h4>\n      <p>Pressing the spacebar a few times on one line, and the Tab key on the next. They\n      look identical on screen, but Python counts them differently.</p>\n      <div class=\"callout\">\n        <strong>The rule:</strong> pick one and never mix. Most people use the Tab key.\n        If you mix them, Python shouts\n        <code>IndentationError: unexpected indent</code> or\n        <code>TabError: inconsistent use of tabs and spaces</code>.\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">These two lines are not inside anything. Tap the part that breaks it.</p>\n        <div class=\"w-spot__line\">\n          <button>print(\"Hello\")</button><button data-bad>&nbsp;&nbsp;&nbsp;&nbsp;print(\"World\")</button>\n        </div>\n        <p class=\"w__why\">The second line has spaces in front of it for no reason. Nothing\n        above it opened a block, so Python has no idea what the line is supposed to be inside.\n        Both lines should start at the far left.</p>\n      </div>\n\n      <h4>Reading an error message</h4>\n      <p>When your car's check-engine light comes on, you do not throw the car away. You read\n      the code and find the broken part.</p>\n      <p>When Python breaks it prints a big block of red text called a <strong>Traceback</strong>.\n      Most of it does not matter to you.</p>\n\n      <pre><code>Traceback (most recent call last):\n  File \"game.py\", line 14, in &lt;module&gt;\nNameError: name 'score' is not defined</code></pre>\n\n      <div class=\"callout\">\n        <strong>The secret: read from the bottom up.</strong> The last line gives you the\n        <em>name of the error</em> and <em>what caused it</em>. The line just above gives you\n        the <em>line number</em>. Everything else can be ignored while you are learning.\n      </div>\n\n      <p>Here that means: go to line 14, and something called <code>score</code> does not\n      exist. Probably a spelling mistake, or you forgot to create it.</p>\n\n      <table>\n        <tr><th>Error</th><th>Usually means</th></tr>\n        <tr><td><code>NameError</code></td><td>A name that does not exist — misspelt, or wrong capital letter</td></tr>\n        <tr><td><code>SyntaxError</code></td><td>A missing bracket or an unclosed quote</td></tr>\n        <tr><td><code>IndentationError</code></td><td>Spaces in the wrong place</td></tr>\n        <tr><td><code>TypeError</code></td><td>You mixed two kinds of data that do not go together</td></tr>\n      </table>\n\n      <h4>Debugging with print()</h4>\n      <p>Walking through a dark forest, you drop breadcrumbs so you know where you have been.</p>\n      <p><strong>Debugging</strong> means squashing bugs. The simplest way is to scatter\n      <code>print()</code> lines through your code and watch what the computer is really\n      thinking at each step.</p>\n      <pre><code>wallet = 100\nprint(wallet)      # 100 — good so far\nwallet = wallet - 20\nprint(wallet)      # 80  — still fine\nwallet = wallet * 2\nprint(wallet)      # 160 — found it! this line is wrong</code></pre>\n\n      <h4>Breakpoints in VS Code</h4>\n      <p>Sometimes code runs too fast to watch. In VS Code you can hover over the line numbers\n      on the left and click to place a small <strong>red dot</strong>. That is a\n      <strong>breakpoint</strong> — a pause button.</p>\n      <p>Run in Debug Mode and the program races along until it hits the red dot, then\n      freezes. You can look inside every variable before pressing play again.</p>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">You see: <code>File \"shop.py\", line 22</code> then\n        <code>NameError: name 'totl' is not defined</code>. What is wrong?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Python is broken, reinstall it</button>\n          <button data-o=\"1\">Line 22 is missing a bracket</button>\n          <button data-o=\"2\">A spelling mistake — it should probably be \"total\"</button>\n        </div>\n        <p class=\"w__why\"><code>NameError</code> means Python has never heard that name.\n        <code>totl</code> is missing an \"a\". Nine times out of ten a NameError is a typing\n        mistake or a wrong capital letter.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Indentation draws invisible boxes</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Indented lines belong to a block. Think of the spaces as an invisible box around related instructions.</p><p>Error messages are clues, not punishments. Read the final line first, then look at the named line number.</p>\n      <h4>Worked example</h4>\n      <pre><code>age = 20\nif age &gt;= 18:\n    print(&quot;Adult&quot;)\nprint(&quot;Finished&quot;)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Indentation shows which lines belong inside a decision or other block.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Read condition</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Enter block</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Run indented line</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Leave block</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Indentation shows which lines belong inside a decision or other block.</text>\n      </svg>\n    \n      \n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Debugging game — spot the mistake</span>\n        <p class=\"w__q\">Tap the part that causes the problem</p>\n        <div class=\"w-spot__line\"><button >if age >= 18:</button><button data-bad>print(\"Adult\")</button></div>\n        <p class=\"w__why\">The <code>print()</code> line must move right with four spaces because it belongs inside the <code>if</code> block.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "Why does Python use indentation?",
          "options": [
            "Only to look tidy for the teacher",
            "To show that a block of code belongs inside the line above it",
            "Because the spacebar is fun",
            "To hide secret messages"
          ],
          "answer": 1,
          "why": "Other languages use curly brackets for this. Python uses space, which is why getting it wrong stops the program completely."
        },
        {
          "q": "Python gives you a huge red error. Where do you look first?",
          "options": [
            "The very top line",
            "The very bottom line, which names the error and the line number",
            "The middle",
            "Nowhere — delete the file and start again"
          ],
          "answer": 1,
          "why": "Read a traceback from the bottom up. The last line tells you what went wrong, and the line above it tells you where."
        },
        {
          "q": "What does a breakpoint in VS Code do?",
          "options": [
            "Deletes your code",
            "Switches on dark mode",
            "Pauses the program at that exact line so you can look inside",
            "Prints a red dot on the screen"
          ],
          "answer": 2,
          "why": "It is a pause button. The program runs at full speed until it reaches the red dot, then freezes so you can inspect every variable."
        },
        {
          "q": "Which error means you spelt a variable name wrongly?",
          "options": [
            "SyntaxError",
            "NameError",
            "IndentationError",
            "TypeError"
          ],
          "answer": 1,
          "why": "NameError means Python has never heard of that name. Check your spelling and your capital letters."
        }
      ],
      "tasks": [
        {
          "id": "u1t10p01",
          "kind": "code",
          "title": "Task 10.1 — Fix the indentation",
          "brief": "This code has a space where it should not. Remove it so the program prints both lines.",
          "starter": "print(\"Hello\")\n    print(\"World\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello\nWorld"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: Hello"
          ]
        },
        {
          "id": "u1t10p02",
          "kind": "code",
          "title": "Task 10.2 — Fix the NameError",
          "brief": "This code crashes with a NameError. Find the spelling mistake and fix it so it prints 50.",
          "starter": "total_coins = 50\nprint(total_coin)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "50"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: 50"
          ]
        },
        {
          "id": "u1t10p03",
          "kind": "code",
          "title": "Task 10.3 — Drop some breadcrumbs",
          "brief": "A wallet starts at 100. Take away 20, then take away 30. Print the wallet after every single change, so you can see three numbers appear.",
          "starter": "wallet = 100\n# print it, change it, print it again...\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100\n80\n50"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: 100"
          ]
        },
        {
          "id": "u1t10p04",
          "kind": "code",
          "title": "Task 10.4 — Repair two variable names",
          "brief": "Fix both misspelled names so the program prints 80 and then 50.",
          "starter": "wallet = 100\nwallet = walet - 20\nprint(wallet)\nwallet = wallet - 30\nprint(wallt)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "80\n50"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "\\bwalet\\b|\\bwallt\\b",
              "message": "Remove both misspelled variable names"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Remove both misspelled variable names",
            "Your first output line should be: 80"
          ]
        },
        {
          "kind": "code",
          "title": "Repair the SyntaxError",
          "brief": "The closing quote is missing. Fix the code so it prints exactly: Debugging starts",
          "starter": "print(\"Debugging starts)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Debugging starts"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t10p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: Debugging starts"
          ]
        },
        {
          "id": "u1t10p06",
          "kind": "code",
          "title": "Task 10.6 — Fix three errors",
          "brief": "Repair the code so it prints Hello and then 25. It contains a capital-letter mistake, a missing quote and a misspelled variable.",
          "starter": "Print(\"Hello)\nscore = 25\nprint(scor)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello\n25"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "\\bPrint\\b|\\bscor\\b",
              "message": "Fix the wrong capital letter and variable spelling"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Fix the wrong capital letter and variable spelling",
            "Your first output line should be: Hello"
          ]
        },
        {
          "id": "u1t10p07",
          "kind": "code",
          "title": "Task 10.7 — Trace the wallet",
          "brief": "Start wallet at 150. Print it, subtract 40 and print, then subtract 35 and print. Use the outputs as debugging breadcrumbs.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "150\n110\n75"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 3,
              "message": "Print after every stage"
            },
            {
              "type": "sourceRegex",
              "pattern": "wallet\\s*=\\s*wallet\\s*-\\s*40",
              "message": "Subtract 40 from wallet"
            },
            {
              "type": "sourceRegex",
              "pattern": "wallet\\s*=\\s*wallet\\s*-\\s*35",
              "message": "Subtract 35 from wallet"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Print after every stage Also remember: subtract 40 from wallet.",
            "Your first output line should be: 150"
          ]
        },
        {
          "id": "u1t10p08",
          "kind": "code",
          "title": "Task 10.8 — Debugging rescue mission",
          "brief": "Repair every error in the starter. The final output must be four lines: Debug start / 100 / 70 / Debug end.",
          "starter": "print(\"Debug start\")\n balance = 100\nprint(Balance)\nbalance = balance - 30\nprint(balnce)\nprint(\"Debug end\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Debug start\n100\n70\nDebug end"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "\\bBalance\\b|\\bbalnce\\b",
              "message": "Use the correct variable name everywhere"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "^\\s+balance\\s*=",
              "message": "Remove the unexpected indentation"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use the correct variable name everywhere Also remember: remove the unexpected indentation.",
            "Your first output line should be: Debug start"
          ]
        }
      ]
    },
    {
      "id": "u1t11",
      "title": "Asking Python for Help",
      "summary": "help() is a dictionary. dir() is an X-ray machine. Nobody memorises everything.",
      "notebookLM": "",
      "notes": "\n      <h4>Nobody remembers it all</h4>\n      <p>Even programmers with twenty years of experience forget things every single day.\n      Memorising every Python command is impossible, and trying to is a waste of your time.</p>\n      <p>Good programmers do not memorise. They know <em>how to look things up</em>.</p>\n\n      <h4>help() — the built-in dictionary</h4>\n      <p>Reading a book and hit a word you do not know? You look it up in a dictionary.</p>\n      <p>Python has a dictionary built in. Give <code>help()</code> the name of anything and\n      it explains what that thing does.</p>\n      <pre><code>help(print)</code></pre>\n      <p>Python prints a paragraph telling you exactly what <code>print</code> does and how to\n      use it.</p>\n\n      <h4>dir() — the X-ray machine</h4>\n      <p>Someone hands you a locked toolbox. You cannot open it. But with an X-ray machine you\n      could see a hammer, a spanner and a screwdriver inside.</p>\n      <p><code>dir()</code> is that X-ray. It does not explain anything — it just lists\n      everything an object contains or can do. The name is short for <em>directory</em>.</p>\n      <pre><code>dir(\"Hello\")</code></pre>\n      <p>That prints a long list of every action you can perform on a piece of text — turning\n      it upper case, lower case, splitting it, and dozens more.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 165\" role=\"img\" aria-label=\"help gives a written explanation, dir gives a list of what is available.\">\n        <rect class=\"box\" x=\"8\" y=\"34\" width=\"326\" height=\"112\" rx=\"8\"/>\n        <text x=\"171\" y=\"62\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:15px\">help(print)</text>\n        <text x=\"171\" y=\"90\" text-anchor=\"middle\" style=\"font-size:12.5px\">A dictionary</text>\n        <text x=\"171\" y=\"112\" text-anchor=\"middle\" style=\"font-size:12.5px\">Explains, in sentences</text>\n        <text x=\"171\" y=\"134\" text-anchor=\"middle\" class=\"mono accent\">\"what does this do?\"</text>\n\n        <rect class=\"box box--dark\" x=\"366\" y=\"34\" width=\"326\" height=\"112\" rx=\"8\"/>\n        <text x=\"529\" y=\"62\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:15px\">dir(\"Hello\")</text>\n        <text x=\"529\" y=\"90\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12.5px\">An X-ray</text>\n        <text x=\"529\" y=\"112\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12.5px\">Lists, without explaining</text>\n        <text x=\"529\" y=\"134\" text-anchor=\"middle\" class=\"mono accent\">\"what is in there?\"</text>\n      </svg>\n\n      <h4>Reading the documentation</h4>\n      <p>When you run <code>help()</code>, what comes out is called\n      <strong>documentation</strong> — the docstrings we met in Topic 9. It can look scary.\n      Here is how to read it:</p>\n      <ul>\n        <li><strong>The top line</strong> names the tool and describes it in one plain sentence.</li>\n        <li><strong>The middle</strong> lists what you are allowed to put inside the brackets.</li>\n        <li><strong>The rest</strong> may look like gibberish. That is completely normal.</li>\n      </ul>\n\n      <div class=\"callout\">\n        <strong>Do not panic at the technical words.</strong> Read the first sentence, take\n        what you need, ignore the rest. You will understand more of it every month.\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which tool answers which question?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">\"What does <code>len</code> actually do?\"</button>\n            <button data-pair=\"b\">\"What can I do to a piece of text?\"</button>\n            <button data-pair=\"c\">\"What tools are inside the math module?\"</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"b\"><code>dir(\"Hello\")</code></button>\n            <button data-pair=\"c\"><code>dir(math)</code></button>\n            <button data-pair=\"a\"><code>help(len)</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>Correct.</strong> Use <code>help()</code> when you want an\n        explanation, and <code>dir()</code> when you want to know what is available.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>Try it below.</strong> Both tools work inside this page. <code>dir()</code>\n        gives a long list, so wrap it in <code>print()</code> to see it.\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Ask small questions about code</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>You do not need to memorise every tool. Python can tell you the type of a value, list available names and display help.</p><p>Good programmers ask precise questions: “What type is this?”, “What tools are available?”, and “How does this function work?”</p>\n      <h4>Worked example</h4>\n      <pre><code>value = &quot;Python&quot;\nprint(type(value))\nprint(dir(value))\nhelp(len)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Built-in help tools turn confusion into a small, answerable question.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Choose value</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Ask type/dir</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Read information</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Apply answer</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Built-in help tools turn confusion into a small, answerable question.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\"><code>type(x)</code></button><button data-pair=\"p1\"><code>dir(x)</code></button><button data-pair=\"p2\"><code>help(x)</code></button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p2\">Shows written guidance</button><button data-pair=\"p1\">Lists available names</button><button data-pair=\"p0\">Shows the data type</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "You want a detailed explanation of what a command does. Which do you use?",
          "options": [
            "ask()",
            "dir()",
            "help()",
            "explain()"
          ],
          "answer": 2,
          "why": "help() prints the documentation in sentences. dir() only gives a bare list of names."
        },
        {
          "q": "What is dir() best compared to?",
          "options": [
            "A dictionary that explains a word",
            "An X-ray machine that shows you a list of what is inside",
            "A calculator",
            "A pause button"
          ],
          "answer": 1,
          "why": "It looks inside and lists what is there, without explaining any of it. The name is short for directory."
        },
        {
          "q": "Some of the words in help() output confuse you. What should you do?",
          "options": [
            "Uninstall Python",
            "Read the plain English description at the top and ignore the advanced parts for now",
            "Memorise every technical word today",
            "Never use help() again"
          ],
          "answer": 1,
          "why": "Documentation is written for everyone, including experts. Take the first sentence and move on — the rest will make sense later."
        },
        {
          "q": "What does len() do?",
          "options": [
            "Makes text longer",
            "Returns how many items are in something",
            "Deletes the last item",
            "Turns text into a number"
          ],
          "answer": 1,
          "why": "len is short for length. It counts items — letters in a piece of text, or things in a list."
        }
      ],
      "tasks": [
        {
          "id": "u1t11p01",
          "kind": "code",
          "title": "Task 11.1 — Look inside a piece of text",
          "brief": "Use print() and dir() together to list everything you can do to the text \"Hello\". You will see a long list — that is correct.",
          "starter": "",
          "checks": [
            {
              "type": "sourceIncludes",
              "value": "dir(",
              "message": "Use the dir() tool"
            },
            {
              "type": "stdoutContains",
              "value": "upper",
              "message": "The list should include upper"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the dir() tool",
            "Your output must include: upper"
          ]
        },
        {
          "id": "u1t11p02",
          "kind": "code",
          "title": "Task 11.2 — Count the letters",
          "brief": "Use len() to count the letters in the word Python, and print just that number.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "6"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use the len() tool"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the len() tool",
            "Your first output line should be: 6"
          ]
        },
        {
          "id": "u1t11p03",
          "kind": "code",
          "title": "Task 11.3 — Read the manual",
          "brief": "Use help() on the len tool. Its explanation will be printed for you to read.",
          "starter": "",
          "checks": [
            {
              "type": "sourceIncludes",
              "value": "help(",
              "message": "Use the help() tool"
            },
            {
              "type": "stdoutContains",
              "value": "len",
              "message": "The help text should mention len"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use the help() tool",
            "Your output must include: len"
          ]
        },
        {
          "id": "u1t11p04",
          "kind": "code",
          "title": "Task 11.1 — Use Python's x-ray",
          "brief": "Print whether upper exists in dir(\"Hello\"). Output: True",
          "starter": "# Use dir() and in\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "dir(",
              "message": "Use dir()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use dir()",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t11p05",
          "kind": "confirm",
          "title": "Read one help page",
          "brief": "Use the Python shell or IDLE.",
          "label": "I ran <code>help(len)</code> and found that it returns the number of items.",
          "level": "Level 3 — Fix or Apply"
        },
        {
          "id": "u1t11p06",
          "kind": "code",
          "title": "Task 11.6 — Find a text tool",
          "brief": "Print whether the word lower appears inside dir(\"Python\"). The output must be True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "dir(",
              "message": "Use dir()"
            },
            {
              "type": "sourceRegex",
              "pattern": "[\"\\']lower[\"\\']\\s+in",
              "message": "Check for lower using in"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use dir() Also remember: check for lower using in.",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t11p07",
          "kind": "code",
          "title": "Task 11.7 — Ask about abs",
          "brief": "Use help(abs). Do not print a made-up explanation; let Python show the real documentation.",
          "starter": "",
          "checks": [
            {
              "type": "sourceIncludes",
              "value": "help(abs)",
              "message": "Call help(abs)"
            },
            {
              "type": "stdoutContains",
              "value": "abs",
              "message": "The documentation should mention abs"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Call help(abs)",
            "Your output must include: abs"
          ]
        },
        {
          "id": "u1t11p08",
          "kind": "code",
          "title": "Task 11.8 — Help desk explorer",
          "brief": "Use dir() to check that upper, lower and replace all exist for the text \"AbhyasLab\". Print three Boolean results on three lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nTrue\nTrue"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "dir\\(",
              "count": 3,
              "message": "Use dir() for all three checks"
            },
            {
              "type": "sourceIncludes",
              "value": "replace",
              "message": "Check for replace too"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use dir() for all three checks Also remember: check for replace too.",
            "Your first output line should be: True"
          ]
        }
      ]
    },
    {
      "id": "u1t12",
      "title": "The Standard Library",
      "summary": "Hundreds of free tools already on your computer, waiting for one word: import.",
      "notebookLM": "",
      "notes": "\n      <h4>The official manual</h4>\n      <p>A new TV comes with a thick instruction booklet. Python has one too, and it lives at\n      <code>docs.python.org</code>.</p>\n      <p><code>help()</code> is great for a quick reminder. The website gives you full\n      paragraphs, examples you can copy, and beginner guides.</p>\n\n      <div class=\"callout\">\n        <strong>The fastest trick in programming.</strong> When you get an error you do not\n        understand, copy the last line of it and paste it straight into Google. Somebody has\n        already had that exact error and somebody has already answered it.\n      </div>\n\n      <h4>Batteries included, again</h4>\n      <p>Some toys say <em>batteries not included</em> — you have to go and buy them. Python\n      is famous for being the opposite.</p>\n      <p>The <strong>Standard Library</strong> is a huge pile of ready-made tools that land on\n      your computer the moment you install Python. Nothing to download. Nothing to pay for.</p>\n\n      <table>\n        <tr><th>Module</th><th>What is inside</th></tr>\n        <tr><td><code>math</code></td><td>Square roots, rounding up and down, geometry</td></tr>\n        <tr><td><code>random</code></td><td>Rolling dice, shuffling, picking a random winner</td></tr>\n        <tr><td><code>datetime</code></td><td>Today's date, the time, working out how many days between two dates</td></tr>\n        <tr><td><code>statistics</code></td><td>Averages, middle values, most common values</td></tr>\n      </table>\n\n      <h4>The magic word: import</h4>\n      <p>These tools sit in the background to save memory. To use one, you have to invite it\n      into your file with <code>import</code>.</p>\n      <pre><code>import math\n\nprint(math.sqrt(25))     # 5.0</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"The standard library sits on your computer; import brings one module into your file.\">\n        <text x=\"150\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Already on your computer</text>\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"284\" height=\"104\" rx=\"8\"/>\n        <text x=\"60\" y=\"66\" class=\"mono\" style=\"font-size:12.5px\">math</text>\n        <text x=\"150\" y=\"66\" class=\"mono\" style=\"font-size:12.5px\">random</text>\n        <text x=\"248\" y=\"66\" class=\"mono\" style=\"font-size:12.5px\">datetime</text>\n        <text x=\"60\" y=\"92\" class=\"mono\" style=\"font-size:12.5px\">json</text>\n        <text x=\"150\" y=\"92\" class=\"mono\" style=\"font-size:12.5px\">statistics</text>\n        <text x=\"248\" y=\"92\" class=\"mono\" style=\"font-size:12.5px\">time</text>\n        <text x=\"150\" y=\"122\" text-anchor=\"middle\" style=\"font-size:12px\">…and hundreds more, asleep</text>\n\n        <path class=\"arrow\" d=\"M302 90 h56\"/><path class=\"accent\" d=\"M368 90 l-13 -7 v14 z\"/>\n        <text x=\"332\" y=\"76\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:11px\">import</text>\n\n        <text x=\"530\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Your file</text>\n        <rect class=\"box box--dark\" x=\"376\" y=\"38\" width=\"316\" height=\"104\" rx=\"8\"/>\n        <text x=\"400\" y=\"72\" class=\"mono on-dark\">import math</text>\n        <text x=\"400\" y=\"98\" class=\"mono on-dark\">print(math.sqrt(25))</text>\n        <text x=\"400\" y=\"124\" class=\"mono accent\">5.0</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Two different things.</strong> <code>pip install</code> downloads something\n        new from the internet. <code>import</code> wakes up something already on your machine.\n        Standard Library modules never need <code>pip</code>.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">You want to use <code>math</code>. Do you need to run\n        <code>pip install math</code> first?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Yes, every module needs installing</button>\n          <button data-o=\"1\">No — math comes with Python already</button>\n          <button data-o=\"2\">Only on Windows</button>\n        </div>\n        <p class=\"w__why\"><code>math</code> is part of the Standard Library, so it is already\n        there. Just <code>import math</code>. You only need <code>pip</code> for packages\n        written by other people, like <code>colorama</code> or <code>requests</code>.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which module would you import for each job?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Roll a dice for a game</button>\n            <button data-pair=\"b\">Find the square root of 144</button>\n            <button data-pair=\"c\">Print today's date</button>\n            <button data-pair=\"d\">Find the average of ten marks</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\"><code>datetime</code></button>\n            <button data-pair=\"a\"><code>random</code></button>\n            <button data-pair=\"d\"><code>statistics</code></button>\n            <button data-pair=\"b\"><code>math</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> You will use <code>math</code> and\n        <code>statistics</code> yourself in the last two topics of this unit.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Use tools already in the toolbox</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>The Standard Library comes with Python. It includes modules for maths, dates, random choices, statistics, files and much more.</p><p>A module keeps related tools together. Import only what your program needs, then call the tool with the module name.</p>\n      <h4>Worked example</h4>\n      <pre><code>import math\nimport statistics\n\nprint(math.sqrt(81))\nprint(statistics.mean([10, 20, 30]))</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"The Standard Library saves time because common solutions are already packaged.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Choose job</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Find module</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Import module</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Call tool</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">The Standard Library saves time because common solutions are already packaged.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\">Square root</button><button data-pair=\"p1\">Average marks</button><button data-pair=\"p2\">Dates and time</button><button data-pair=\"p3\">Random choice</button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p3\"><code>random</code></button><button data-pair=\"p2\"><code>datetime</code></button><button data-pair=\"p1\"><code>statistics</code></button><button data-pair=\"p0\"><code>math</code></button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "Where is the official Python instruction manual?",
          "options": [
            "python-help.com",
            "google.com",
            "docs.python.org",
            "manual.python.edu"
          ],
          "answer": 2,
          "why": "docs.python.org is the official documentation, written by the people who make Python."
        },
        {
          "q": "Which Standard Library module would you choose for dates and time?",
          "options": [
            "datetime",
            "colorama",
            "requests",
            "cowsay"
          ],
          "answer": 0,
          "why": "datetime comes with Python and provides tools for dates and times. The other choices are external packages."
        },
        {
          "q": "Which word invites a Standard Library tool into your file?",
          "options": [
            "download",
            "start",
            "bring",
            "import"
          ],
          "answer": 3,
          "why": "import math, import random, import statistics. One word, and the whole module is yours."
        },
        {
          "q": "Do you need pip install math before using the math module?",
          "options": [
            "Yes, always",
            "No — math is part of the Standard Library and is already installed",
            "Only on Mac",
            "Only if your file is bigger than 100 lines"
          ],
          "answer": 1,
          "why": "pip is for packages written by other people. Standard Library modules are already on your machine — just import them."
        }
      ],
      "tasks": [
        {
          "id": "u1t12p01",
          "kind": "code",
          "title": "Task 12.1 — Invite the math tools in",
          "brief": "Import the math module, then print the square root of 64. (Use math.sqrt)",
          "starter": "",
          "checks": [
            {
              "type": "sourceIncludes",
              "value": "import math",
              "message": "Import the math module"
            },
            {
              "type": "stdoutEquals",
              "value": "8.0"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Import the math module",
            "Your first output line should be: 8.0"
          ]
        },
        {
          "id": "u1t12p02",
          "kind": "code",
          "title": "Task 12.2 — X-ray the math module",
          "brief": "Import math, then use print() and dir() to list everything inside it. Look for pi, sin and cos in the list.",
          "starter": "",
          "checks": [
            {
              "type": "sourceIncludes",
              "value": "import math",
              "message": "Import the math module"
            },
            {
              "type": "sourceIncludes",
              "value": "dir(",
              "message": "Use dir()"
            },
            {
              "type": "stdoutContains",
              "value": "sqrt",
              "message": "The list should include sqrt"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Import the math module Also remember: use dir().",
            "Your output must include: sqrt"
          ]
        },
        {
          "id": "u1t12p03",
          "kind": "code",
          "title": "Task 12.3 — The value of pi",
          "brief": "Import math and print the value of pi. It is stored as math.pi — no brackets needed.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutContains",
              "value": "3.14159",
              "message": "Print the value of math.pi"
            },
            {
              "type": "sourceIncludes",
              "value": "math.pi",
              "message": "Use math.pi"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use math.pi",
            "Your output must include: 3.14159"
          ]
        },
        {
          "id": "u1t12p04",
          "kind": "code",
          "title": "Task 12.4 — A repeatable dice roll",
          "brief": "Import random, set random.seed(7), and print one random whole number from 1 to 6.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3"
            },
            {
              "type": "sourceIncludes",
              "value": "import random",
              "message": "Import random"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(7)",
              "message": "Use the given seed"
            },
            {
              "type": "sourceIncludes",
              "value": "random.randint(1, 6)",
              "message": "Use randint from 1 to 6"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*3\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Import random Also remember: use the given seed.",
            "Your first output line should be: 3"
          ]
        },
        {
          "id": "u1t12p05",
          "kind": "code",
          "title": "Task 12.2 — Look inside math",
          "brief": "Import math and print whether sqrt exists in dir(math).",
          "starter": "import math\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "dir(math)",
              "message": "Use dir(math)"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use dir(math)",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t12p06",
          "kind": "code",
          "title": "Task 12.6 — Random choice with a seed",
          "brief": "Import random, use random.seed(2), then print random.choice([\"Red\", \"Blue\", \"Green\"]).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Red"
            },
            {
              "type": "sourceIncludes",
              "value": "import random",
              "message": "Import random"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(2)",
              "message": "Set seed 2"
            },
            {
              "type": "sourceIncludes",
              "value": "random.choice",
              "message": "Use random.choice"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Import random Also remember: set seed 2.",
            "Your first output line should be: Red"
          ]
        },
        {
          "id": "u1t12p07",
          "kind": "code",
          "title": "Task 12.7 — Two tools from math",
          "brief": "Import math. Print math.sqrt(121), then print math.floor(8.9).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "11.0\n8"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sqrt",
              "message": "Use math.sqrt"
            },
            {
              "type": "sourceIncludes",
              "value": "math.floor",
              "message": "Use math.floor"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Use math.sqrt Also remember: use math.floor.",
            "Your first output line should be: 11.0"
          ]
        },
        {
          "id": "u1t12p08",
          "kind": "code",
          "title": "Task 12.8 — Standard Library toolbox card",
          "brief": "Import math and random. Set random.seed(4). Print four lines: the square root of 100, the value of math.pi rounded to 2 places, a random integer from 1 to 5, and whether sqrt is in dir(math).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10.0\n3.14\n2\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "import math",
              "message": "Import math"
            },
            {
              "type": "sourceIncludes",
              "value": "import random",
              "message": "Import random"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(4)",
              "message": "Use the fixed seed"
            },
            {
              "type": "sourceIncludes",
              "value": "dir(math)",
              "message": "Inspect math using dir()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Import math Also remember: import random.",
            "Your first output line should be: 10.0"
          ]
        }
      ]
    },
    {
      "id": "u1cp02",
      "title": "Revision Checkpoint 2 — Running and Debugging",
      "summary": "Mix shell, files, comments, errors, help and imports.",
      "notebookLM": "",
      "notes": "\n      <h4>Pause, mix and remember</h4>\n      <p>This checkpoint mixes ideas from <strong>Chapters 7–12</strong>. It does not teach a new syllabus topic. It checks whether the earlier ideas are still clear.</p>\n      <div class=\"callout\"><strong>How to use it:</strong> answer the mixed quiz without reopening earlier chapters. Then complete the activities. When something is difficult, return to only that chapter and try again.</div>\n      <h4>Checkpoint method</h4>\n      <ol><li>Read the full question.</li><li>Predict before running code.</li><li>Run and compare.</li><li>Fix one error at a time.</li></ol>\n    \n              <div class=\"callout\"><strong>Visual revision map.</strong> Use this picture before starting the checkpoint activities. Explain every arrow aloud in your own words.</div>\n              \n      <h4>Running and debugging journey</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A compact map connecting the ideas revised in this checkpoint.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Shell test</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Save script</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Read error</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Ask help</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A compact map connecting the ideas revised in this checkpoint.</text>\n      </svg>\n    \n              \n      <div class=\"w\">\n        <span class=\"w__k\">Checkpoint game — study cards</span>\n        <div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do first?</span><span class=\"w-flip__back\">Read the question and identify the concept.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do before running code?</span><span class=\"w-flip__back\">Predict the result or write the steps on paper.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do after an error?</span><span class=\"w-flip__back\">Read the final error line and fix one issue at a time.</span></button></div>\n      </div>\n    \n            ",
      "mcqs": [
        {
          "q": "Which output is produced by print(\"A\") followed by print(\"B\")?",
          "options": [
            "A and B on separate lines",
            "AB on one line",
            "Only B",
            "An error"
          ],
          "answer": 0,
          "why": "Each print ends with a new line by default."
        },
        {
          "q": "A line begins with #. What will Python do with it?",
          "options": [
            "Treat it as a variable",
            "Ignore it",
            "Print it",
            "Compile it twice"
          ],
          "answer": 1,
          "why": "# starts a comment for human readers."
        },
        {
          "q": "Which part of a traceback should a beginner read first?",
          "options": [
            "The computer clock",
            "The file size",
            "The last line",
            "Only the first word"
          ],
          "answer": 2,
          "why": "The last line normally names and explains the error."
        },
        {
          "q": "What is the likely problem in print(Score) when only score = 20 exists?",
          "options": [
            "Missing internet",
            "Wrong Python version",
            "Too many comments",
            "Wrong capital letter"
          ],
          "answer": 3,
          "why": "Identifiers are case-sensitive."
        },
        {
          "q": "Which call lists available actions for a string?",
          "options": [
            "dir(\"Hello\")",
            "help = \"Hello\"",
            "list.help()",
            "python --version"
          ],
          "answer": 0,
          "why": "dir() lists attributes and methods."
        },
        {
          "q": "Which call gives a written explanation of len?",
          "options": [
            "len(help)",
            "help(len)",
            "dir = len",
            "explain(len)"
          ],
          "answer": 1,
          "why": "help() displays documentation."
        },
        {
          "q": "Which line makes the math module available?",
          "options": [
            "open math",
            "math = install",
            "import math",
            "pip math"
          ],
          "answer": 2,
          "why": "Standard Library modules are brought in with import."
        },
        {
          "q": "A script should be saved with which ending?",
          "options": [
            ".txt",
            ".jpg",
            ".html",
            ".py"
          ],
          "answer": 3,
          "why": "Python scripts use .py."
        }
      ],
      "tasks": [
        {
          "id": "u1cp02p01",
          "kind": "code",
          "title": "Checkpoint bug fix — quotes",
          "brief": "Repair the code so it prints: Revision ready",
          "starter": "print(\"Revision ready)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Revision ready"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 1",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: Revision ready"
          ]
        },
        {
          "id": "u1cp02p02",
          "kind": "code",
          "title": "Checkpoint bug fix — names",
          "brief": "Repair the variable name so the output is 30.",
          "starter": "total = 30\nprint(Total)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "30"
            },
            {
              "type": "sourceNotIncludes",
              "value": "Total",
              "message": "Use the exact lowercase variable name"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 2",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use the exact lowercase variable name",
            "Your first output line should be: 30"
          ]
        },
        {
          "id": "u1cp02p03",
          "kind": "code",
          "title": "Checkpoint output practice",
          "brief": "Write one comment, then print Start, Working and Done on three lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Start\nWorking\nDone"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 1,
              "message": "Add one comment"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 3",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Add one comment",
            "Your first output line should be: Start"
          ]
        },
        {
          "id": "u1cp02p04",
          "kind": "code",
          "title": "Checkpoint help practice",
          "brief": "Print whether upper exists in dir(\"revision\").",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "dir(",
              "message": "Use dir()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 4",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use dir()",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1cp02p05",
          "kind": "code",
          "title": "Checkpoint challenge — imported tool",
          "brief": "Import math, calculate the square root of 196, and print exactly: Answer: 14.0",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Answer: 14.0"
            },
            {
              "type": "sourceIncludes",
              "value": "import math",
              "message": "Import math"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sqrt(196)",
              "message": "Use math.sqrt on 196"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 5",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Import math Also remember: use math.sqrt on 196.",
            "Your first output line should be: Answer: 14.0"
          ]
        }
      ]
    },
    {
      "id": "u1t13",
      "title": "Identifiers and Keywords",
      "summary": "The rules for naming things, and the words Python has already reserved.",
      "notebookLM": "",
      "notes": "\n      <h4>Name tags</h4>\n      <p>At a big conference everybody wears a name tag so you know who they are.</p>\n      <p>An <strong>identifier</strong> is just the programming word for a name tag. It is the\n      name you choose for a variable, a function or a class. When you write\n      <code>age = 20</code>, the word <code>age</code> is the identifier.</p>\n\n      <h4>Four rules for naming</h4>\n      <p>You cannot use just any name. Break a rule and Python gives you a\n      <code>SyntaxError</code>.</p>\n      <table>\n        <tr><th>Rule</th><th>Good</th><th>Bad</th></tr>\n        <tr><td>Only letters, numbers and underscore</td><td><code>player_1</code></td><td><code>player-1!</code></td></tr>\n        <tr><td>Never start with a number</td><td><code>player_1st</code></td><td><code>1st_player</code></td></tr>\n        <tr><td>No spaces</td><td><code>first_name</code></td><td><code>first name</code></td></tr>\n        <tr><td>Capitals matter</td><td colspan=\"2\"><code>age</code>, <code>Age</code> and <code>AGE</code> are three <em>different</em> names</td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>snake_case.</strong> When a name needs two words, Python programmers join them\n        with an underscore: <code>first_name</code>, <code>total_marks</code>,\n        <code>student_id</code>. It is called snake_case, and it is what your teacher expects\n        to see.\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">Four names. Tap the one Python will refuse.</p>\n        <div class=\"w-spot__line\">\n          <button>totalAmount</button><button data-bad>3_blind_mice</button><button>first_name</button><button>score2</button>\n        </div>\n        <p class=\"w__why\">A name can never <em>start</em> with a number.\n        <code>3_blind_mice</code> is illegal, but <code>blind_mice_3</code> would be perfectly\n        fine. Numbers are allowed anywhere except the very first character.</p>\n      </div>\n\n      <h4>Keywords — the reserved seats</h4>\n      <p>At a stadium some seats say \"Reserved for VIPs\". You are not allowed to sit there.</p>\n      <p><strong>Keywords</strong> are words Python has kept for itself. You can never use one\n      as your own name. If you try to call a variable <code>False</code>, Python gets very\n      confused, because <code>False</code> already means something to it.</p>\n\n      <pre><code>True    False   None    if      else    elif\nfor     while   break   import  def     return\nand     or      not     in      is      class</code></pre>\n\n      <div class=\"callout\">\n        <strong>Do not memorise these.</strong> Your editor colours them differently from\n        everything else. If a word you typed suddenly changes colour, it is a keyword — pick a\n        different name.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">Which of these will Python accept as a variable name?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">student_marks</button>\n          <button data-o=\"1\">class</button>\n          <button data-o=\"2\">2nd_place</button>\n        </div>\n        <p class=\"w__why\"><code>class</code> is a reserved keyword, and <code>2nd_place</code>\n        starts with a number. Only <code>student_marks</code> follows every rule — letters, an\n        underscore, and it starts with a letter.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Each bad name breaks one rule. Which one?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>my score</code></button>\n            <button data-pair=\"b\"><code>1st_rank</code></button>\n            <button data-pair=\"c\"><code>user-name</code></button>\n            <button data-pair=\"d\"><code>import</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\">It is a reserved keyword</button>\n            <button data-pair=\"a\">It has a space in it</button>\n            <button data-pair=\"c\">It uses a dash instead of an underscore</button>\n            <button data-pair=\"b\">It starts with a number</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> These are the four ways a name can be\n        wrong. Everything else is allowed.</p>\n      </div>\n    \n<h4>Extra visual recap</h4>\n<svg class=\"fig\" viewBox=\"0 0 700 220\" role=\"img\" aria-label=\"Valid and invalid Python names are compared.\">\n        <rect x=\"35\" y=\"45\" width=\"290\" height=\"135\" rx=\"12\" fill=\"rgba(22,157,147,.10)\" stroke=\"#169D93\" stroke-width=\"2.4\"/><text x=\"180\" y=\"75\" text-anchor=\"middle\" style=\"font-weight:700\">Valid names</text><text x=\"88\" y=\"112\" class=\"mono\">player_1</text><text x=\"88\" y=\"143\" class=\"mono\">first_name</text><text x=\"220\" y=\"112\" class=\"mono\">score</text><text x=\"220\" y=\"143\" class=\"mono\">MAX_SPEED</text>\n        <rect x=\"375\" y=\"45\" width=\"290\" height=\"135\" rx=\"12\" fill=\"rgba(210,70,70,.08)\" stroke=\"#B84A4A\" stroke-width=\"2.4\"/><text x=\"520\" y=\"75\" text-anchor=\"middle\" style=\"font-weight:700\">Invalid names</text><text x=\"420\" y=\"112\" class=\"mono\">1score</text><text x=\"420\" y=\"143\" class=\"mono\">first name</text><text x=\"550\" y=\"112\" class=\"mono\">user-name</text><text x=\"550\" y=\"143\" class=\"mono\">class</text>\n        <text x=\"350\" y=\"212\" text-anchor=\"middle\" class=\"figcap\">A good name follows rules and describes the data.</text>\n      </svg>\n<span class=\"figcap\">A second visual explanation from the original AbhyasLab version.</span>\n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Names should explain the data</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>An identifier is a name you create. A strong name makes the next line easier to understand.</p><p>Python keywords already have special jobs, so they cannot be used as your own variable names. Use lowercase words joined with underscores for normal variables.</p>\n      <h4>Worked example</h4>\n      <pre><code>student_name = &quot;Meera&quot;\ntotal_marks = 450\n# Avoid unclear names such as x1 or data2</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A useful identifier explains what the stored value means.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Understand value</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Choose clear words</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Use underscores</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Read code easily</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A useful identifier explains what the stored value means.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">Which name is clearest?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">x</button><button data-o=\"1\">a1</button><button data-o=\"2\">student_final_score</button><button data-o=\"3\">thing</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> <code>student_final_score</code> tells the reader exactly what the value represents.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What is an identifier in Python?",
          "options": [
            "A password to open Python",
            "The name you give to a variable or function",
            "A tool that finds viruses",
            "A built-in calculator"
          ],
          "answer": 1,
          "why": "It is a name tag. When you write score = 100, the word score is the identifier."
        },
        {
          "q": "Which of these is a VALID identifier?",
          "options": [
            "1st_score",
            "my score",
            "player_score_1",
            "user-name"
          ],
          "answer": 2,
          "why": "The first starts with a number, the second has a space, the fourth uses a dash. Only player_score_1 obeys all four rules."
        },
        {
          "q": "Why can't you name a variable if or True?",
          "options": [
            "They are too short",
            "They are keywords, reserved by Python for its own use",
            "They must be in capital letters",
            "They contain numbers"
          ],
          "answer": 1,
          "why": "Keywords already mean something to Python. Your editor colours them differently, which is the easiest way to spot one."
        },
        {
          "q": "Are age, Age and AGE the same variable?",
          "options": [
            "Yes, Python ignores capitals",
            "No — Python is case sensitive, so they are three different names",
            "Only if you write them on the same line",
            "Only in Python 2"
          ],
          "answer": 1,
          "why": "Python treats capital and small letters as completely different. This causes a lot of NameErrors in the first month — check your capitals."
        }
      ],
      "tasks": [
        {
          "id": "u1t13p01",
          "kind": "code",
          "title": "Task 13.1 — Legal names only",
          "brief": "Make a variable called student_name holding your name, and one called total_marks holding the number 95. Print total_marks.",
          "starter": "",
          "checks": [
            {
              "type": "sourceIncludes",
              "value": "student_name",
              "message": "Create a variable called student_name"
            },
            {
              "type": "sourceIncludes",
              "value": "total_marks",
              "message": "Create a variable called total_marks"
            },
            {
              "type": "stdoutEquals",
              "value": "95"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Create a variable called student_name Also remember: create a variable called total_marks.",
            "Your first output line should be: 95"
          ]
        },
        {
          "id": "u1t13p02",
          "kind": "code",
          "title": "Task 13.2 — Repair the illegal names",
          "brief": "Both names below break a rule. Rename them properly (snake_case) so the code runs and prints 10 then 20.",
          "starter": "1st_place = 10\nmy score = 20\nprint(1st_place)\nprint(my score)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10\n20"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: 10"
          ]
        },
        {
          "id": "u1t13p03",
          "kind": "code",
          "title": "Task 13.1 — Clear legal names",
          "brief": "Create student_name = \"Riya\" and test_score = 88. Print both.",
          "starter": "# Use snake_case names\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Riya\n88"
            },
            {
              "type": "sourceIncludes",
              "value": "student_name",
              "message": "Use student_name"
            },
            {
              "type": "sourceIncludes",
              "value": "test_score",
              "message": "Use test_score"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use student_name Also remember: use test_score.",
            "Your first output line should be: Riya"
          ]
        },
        {
          "kind": "code",
          "title": "Replace the reserved word",
          "brief": "The word class belongs to Python. Rename the variable to class_name so the code prints A.",
          "starter": "class = \"A\"\nprint(class)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A"
            },
            {
              "type": "sourceIncludes",
              "value": "class_name",
              "message": "Use the valid identifier class_name"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t13p04",
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use the valid identifier class_name",
            "Your first output line should be: A"
          ]
        },
        {
          "kind": "code",
          "title": "Case-sensitive twins",
          "brief": "Create score = 10 and Score = 20. Print them on separate lines to prove they are different identifiers.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10\n20"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t13p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: 10"
          ]
        },
        {
          "id": "u1t13p06",
          "kind": "code",
          "title": "Task 13.6 — Three legal identifiers",
          "brief": "Create player_1 = \"Asha\", _score = 90, and first_name = \"Asha\". Print all three values.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Asha\n90\nAsha"
            },
            {
              "type": "sourceIncludes",
              "value": "player_1",
              "message": "Use player_1"
            },
            {
              "type": "sourceIncludes",
              "value": "_score",
              "message": "Use _score"
            },
            {
              "type": "sourceIncludes",
              "value": "first_name",
              "message": "Use first_name"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use player_1 Also remember: use _score.",
            "Your first output line should be: Asha"
          ]
        },
        {
          "id": "u1t13p07",
          "kind": "code",
          "title": "Task 13.7 — Repair the name list",
          "brief": "Repair all illegal names in the starter using snake_case. The output must be First / 75 / Delhi.",
          "starter": "1st_name = \"First\"\ntest-score = 75\nhome city = \"Delhi\"\nprint(1st_name)\nprint(test-score)\nprint(home city)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "First\n75\nDelhi"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "1st_name|test-score|home city",
              "message": "Replace every illegal identifier"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Replace every illegal identifier",
            "Your first output line should be: First"
          ]
        },
        {
          "id": "u1t13p08",
          "kind": "code",
          "title": "Task 13.8 — Student name-tag board",
          "brief": "Create five clear snake_case identifiers for student name, roll number, course name, total marks and attendance status. Print a five-line board using the values Riya, 24CS101, Python, 87 and True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Riya\n24CS101\nPython\n87\nTrue"
            },
            {
              "type": "sourceRegex",
              "pattern": "student_name\\s*=",
              "message": "Use student_name"
            },
            {
              "type": "sourceRegex",
              "pattern": "roll_number\\s*=",
              "message": "Use roll_number"
            },
            {
              "type": "sourceRegex",
              "pattern": "course_name\\s*=",
              "message": "Use course_name"
            },
            {
              "type": "sourceRegex",
              "pattern": "total_marks\\s*=",
              "message": "Use total_marks"
            },
            {
              "type": "sourceRegex",
              "pattern": "attendance_status\\s*=",
              "message": "Use attendance_status"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use student_name Also remember: use roll_number.",
            "Your first output line should be: Riya"
          ]
        }
      ]
    },
    {
      "id": "u1t14",
      "title": "Variables",
      "summary": "Storage boxes with name tags. The single most important idea in programming.",
      "notebookLM": "",
      "notes": "\n      <h4>A box with a label</h4>\n      <p>You are moving house. You take a cardboard box, put your books inside, and write\n      <em>BOOKS</em> on the side with a marker.</p>\n      <p>A <strong>variable</strong> is exactly that, inside the computer's memory:</p>\n      <ol>\n        <li>You make a box.</li>\n        <li>You put data inside it.</li>\n        <li>You stick a name tag on it, so you can find it later.</li>\n      </ol>\n\n      <h4>Making one</h4>\n      <p>You use the equals sign. <strong>The name goes on the left. The data goes on the right.</strong></p>\n      <pre><code>score = 100\nplayer_name = \"Mario\"</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 160\" role=\"img\" aria-label=\"The name on the left, the equals sign, and the data that goes into the box on the right.\">\n        <text class=\"mono\" x=\"150\" y=\"60\" style=\"font-size:26px\">score</text>\n        <text class=\"mono accent\" x=\"278\" y=\"60\" style=\"font-size:26px\">=</text>\n        <text class=\"mono\" x=\"330\" y=\"60\" style=\"font-size:26px\">100</text>\n\n        <path class=\"good\" d=\"M150 74 v12 h96 v-12\"/>\n        <text x=\"198\" y=\"106\" text-anchor=\"middle\" class=\"lbl\">the name tag</text>\n        <text x=\"198\" y=\"126\" text-anchor=\"middle\" style=\"font-size:12px\">what you will call it later</text>\n\n        <path class=\"good\" stroke=\"#D67F19\" d=\"M330 74 v12 h74 v-12\"/>\n        <text x=\"392\" y=\"106\" text-anchor=\"middle\" class=\"lbl\">the data</text>\n        <text x=\"392\" y=\"126\" text-anchor=\"middle\" style=\"font-size:12px\">what goes inside the box</text>\n\n        <text x=\"596\" y=\"52\" text-anchor=\"middle\" class=\"lbl\">Read it as</text>\n        <text x=\"596\" y=\"80\" text-anchor=\"middle\" style=\"font-size:12.5px\">\"put 100 into a box</text>\n        <text x=\"596\" y=\"100\" text-anchor=\"middle\" style=\"font-size:12.5px\">named score\"</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>It is not a maths equation.</strong> <code>score = 100</code> does not ask\n        \"is score equal to 100?\". It <em>puts</em> 100 into score. Asking a question needs two\n        equals signs, <code>==</code>, which you meet in Topic 22.\n      </div>\n\n      <h4>Using what is in the box</h4>\n      <pre><code>player_name = \"Mario\"\nprint(player_name)      # Mario\nprint(\"player_name\")    # player_name</code></pre>\n      <p>Look carefully. Without quotes, Python opens the box and shows you what is inside.\n      With quotes, it just prints the words you typed.</p>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this print?</p>\n        <pre><code>city = \"Delhi\"\nprint(\"city\")</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Delhi</button>\n          <button data-o=\"1\">An error</button>\n          <button data-o=\"2\">city</button>\n        </div>\n        <p class=\"w__why\">The quotes turn it into plain text. Python prints the four letters\n        c-i-t-y, and never looks inside the box. Remove the quotes and you would get\n        <code>Delhi</code>.</p>\n      </div>\n\n      <h4>Making several boxes at once</h4>\n      <p>You have three friends in a line and you hand out three name tags together. Python\n      lets you do the same, separating everything with commas.</p>\n      <pre><code>x, y, z = 10, 20, 30</code></pre>\n      <p>Python matches them up in order: <code>x</code> gets 10, <code>y</code> gets 20,\n      <code>z</code> gets 30.</p>\n\n      <h4>Swapping — Python's magic trick</h4>\n      <p>You have a glass of milk and a glass of juice, and you want to swap them. In real\n      life you need a third empty glass to hold the milk for a moment. Most programming\n      languages need that third glass too.</p>\n      <p>Python does not.</p>\n      <pre><code>a = \"Milk\"\nb = \"Juice\"\n\na, b = b, a      # done. one line.\n\nprint(a)         # Juice\nprint(b)         # Milk</code></pre>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">What does each line do?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>lives = 3</code></button>\n            <button data-pair=\"b\"><code>a, b = 1, 2</code></button>\n            <button data-pair=\"c\"><code>a, b = b, a</code></button>\n            <button data-pair=\"d\"><code>print(lives)</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">Swaps what is in two boxes</button>\n            <button data-pair=\"a\">Puts 3 into a box called lives</button>\n            <button data-pair=\"d\">Shows what is inside the box</button>\n            <button data-pair=\"b\">Makes two boxes on one line</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Everything you will write for the rest of\n        the year is built on top of these four moves.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Variables are labelled storage</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>A variable connects a name to a value. When you assign a new value, the name now points to the new value.</p><p>Read assignment from right to left: calculate the right side first, then store the result under the name on the left.</p>\n      <h4>Worked example</h4>\n      <pre><code>score = 10\nscore = score + 5\nprint(score)  # 15</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Reassignment replaces the value connected to the variable name.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Read old score</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Calculate + 5</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Store new value</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Print 15</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Reassignment replaces the value connected to the variable name.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">What is printed?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">10</button><button data-o=\"1\">5</button><button data-o=\"2\">15</button><button data-o=\"3\">score + 5</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> The right side becomes 15, then 15 is stored back in <code>score</code>.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What is the best real-world picture of a variable?",
          "options": [
            "A microwave that cooks code",
            "A storage box with a name tag, holding data",
            "A dictionary that translates languages",
            "A pair of scissors"
          ],
          "answer": 1,
          "why": "Make the box, put something in it, label it. That is all a variable is."
        },
        {
          "q": "Which symbol puts data into a variable?",
          "options": [
            "+",
            "*",
            "=",
            "=="
          ],
          "answer": 2,
          "why": "One equals sign assigns. Two equals signs (==) ask a question, which is a completely different job."
        },
        {
          "q": "What does lives = 3 do?",
          "options": [
            "Asks whether lives equals 3",
            "Creates a variable named lives holding the number 3",
            "Prints the word lives three times",
            "Causes an error"
          ],
          "answer": 1,
          "why": "Name on the left, data on the right. Read it as: put 3 into a box called lives."
        },
        {
          "q": "After a = 5 and b = 9, what does a, b = b, a do?",
          "options": [
            "Nothing",
            "Makes both of them 9",
            "Swaps them, so a becomes 9 and b becomes 5",
            "Causes an error"
          ],
          "answer": 2,
          "why": "Python's one-line swap. Most other languages need a third temporary variable to do this."
        }
      ],
      "tasks": [
        {
          "id": "u1t14p01",
          "kind": "code",
          "title": "Task 14.1 — Make three boxes",
          "brief": "Create my_age holding the number 18, and favourite_colour holding the text Blue. Print favourite_colour only.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Blue"
            },
            {
              "type": "sourceIncludes",
              "value": "my_age",
              "message": "Create a variable called my_age"
            },
            {
              "type": "sourceIncludes",
              "value": "favourite_colour",
              "message": "Create a variable called favourite_colour"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Create a variable called my_age Also remember: create a variable called favourite_colour.",
            "Your first output line should be: Blue"
          ]
        },
        {
          "id": "u1t14p02",
          "kind": "code",
          "title": "Task 14.2 — Three boxes on one line",
          "brief": "Use the shortcut to create a, b and c holding 1, 2 and 3 on a single line. Then print all three, each on its own line.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2\n3"
            },
            {
              "type": "sourceRegex",
              "pattern": "a\\s*,\\s*b\\s*,\\s*c\\s*=",
              "message": "Create all three on one line, like a, b, c = ..."
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Create all three on one line, like a, b, c = ...",
            "Your first output line should be: 1"
          ]
        },
        {
          "id": "u1t14p03",
          "kind": "code",
          "title": "Task 14.3 — The magic swap",
          "brief": "Two variables are given. Swap them in ONE line, then print them so Juice appears first and Milk second.",
          "starter": "a = \"Milk\"\nb = \"Juice\"\n# swap them in one line here\n\nprint(a)\nprint(b)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Juice\nMilk"
            },
            {
              "type": "sourceRegex",
              "pattern": "a\\s*,\\s*b\\s*=\\s*b\\s*,\\s*a",
              "message": "Do the swap in one line: a, b = b, a"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Do the swap in one line: a, b = b, a",
            "Your first output line should be: Juice"
          ]
        },
        {
          "id": "u1t14p04",
          "kind": "code",
          "title": "Task 14.4 — Replace the value",
          "brief": "Create score = 10, print it, replace the value with 25, and print it again.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10\n25"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "score\\s*=",
              "count": 2,
              "message": "Assign a value to score twice"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Assign a value to score twice",
            "Your first output line should be: 10"
          ]
        },
        {
          "kind": "code",
          "title": "Update what is inside the box",
          "brief": "Create score = 10. On the next line, replace it with score + 5. Print the new value.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceRegex",
              "pattern": "score\\s*=\\s*score\\s*\\+\\s*5",
              "message": "Update score using its old value"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*15\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "id": "u1t14p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Update score using its old value",
            "Your first output line should be: 15"
          ]
        },
        {
          "id": "u1t14p06",
          "kind": "code",
          "title": "Task 14.6 — Move values between boxes",
          "brief": "Create first = \"Tea\" and second = \"Coffee\". Copy first into backup, replace first with second, and print first then backup.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Coffee\nTea"
            },
            {
              "type": "sourceIncludes",
              "value": "backup = first",
              "message": "Copy first into backup"
            },
            {
              "type": "sourceIncludes",
              "value": "first = second",
              "message": "Replace first with second"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Copy first into backup Also remember: replace first with second.",
            "Your first output line should be: Coffee"
          ]
        },
        {
          "id": "u1t14p07",
          "kind": "code",
          "title": "Task 14.7 — Multiple assignment and swap",
          "brief": "Create x, y, z = 5, 10, 15 in one line. Swap x and z in one line. Print x, y and z.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15\n10\n5"
            },
            {
              "type": "sourceRegex",
              "pattern": "x\\s*,\\s*y\\s*,\\s*z\\s*=\\s*5\\s*,\\s*10\\s*,\\s*15",
              "message": "Create all three in one line"
            },
            {
              "type": "sourceRegex",
              "pattern": "x\\s*,\\s*z\\s*=\\s*z\\s*,\\s*x",
              "message": "Swap x and z in one line"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Create all three in one line Also remember: swap x and z in one line.",
            "Your first output line should be: 15"
          ]
        },
        {
          "id": "u1t14p08",
          "kind": "code",
          "title": "Task 14.8 — Mini scoreboard",
          "brief": "Create player_name = \"Mira\", level = 1, score = 50 and bonus = 25. Update score using score = score + bonus. Print exactly four lines: PLAYER: Mira / LEVEL: 1 / BONUS: 25 / SCORE: 75.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "PLAYER: Mira\nLEVEL: 1\nBONUS: 25\nSCORE: 75"
            },
            {
              "type": "sourceIncludes",
              "value": "score = score + bonus",
              "message": "Update score using the bonus variable"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 4,
              "message": "Print four scoreboard lines"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Update score using the bonus variable Also remember: print four scoreboard lines.",
            "Your first output line should be: PLAYER: Mira"
          ]
        }
      ]
    },
    {
      "id": "u1t15",
      "title": "Constants, Types and NameError",
      "summary": "Boxes that should not change, the X-ray for data, and Python's magic boxes.",
      "notebookLM": "",
      "notes": "\n      <h4>Constants — the permanent marker</h4>\n      <p>Some values should never change. Pi is always 3.14. The maximum speed of a car is\n      fixed. You would write those in permanent marker.</p>\n      <p>Some languages let you lock a box shut. <strong>Python does not.</strong> Instead we\n      use a <em>convention</em> — a polite agreement between programmers.</p>\n      <div class=\"callout\">\n        <strong>The agreement:</strong> if a variable should never change, write its name in\n        ALL CAPITAL LETTERS. <code>PI = 3.14</code>, <code>MAX_SPEED = 120</code>.\n        Python will not stop you changing it. But every programmer who reads it knows: leave\n        this alone.\n      </div>\n\n      <h4>NameError — shouting for a ghost</h4>\n      <p>You walk into a room and shout \"Bob, catch!\" But there is nobody called Bob in the\n      room. The ball hits the floor.</p>\n      <p>A <strong>NameError</strong> happens when you ask Python for a variable that does not\n      exist — usually because you spelt it wrong or used the wrong capital letter.</p>\n      <pre><code>score = 50\nprint(Score)     # NameError — capital S, so Python has never heard of it</code></pre>\n\n      <h4>type() — the X-ray for data</h4>\n      <p>Variables hold numbers, or text, or other things. Python treats these as completely\n      different species. If you are not sure what is in a box, ask.</p>\n      <pre><code>age = 20\nprint(type(age))        # &lt;class 'int'&gt;\n\nname = \"Ravi\"\nprint(type(name))       # &lt;class 'str'&gt;\n\nprice = 9.99\nprint(type(price))      # &lt;class 'float'&gt;</code></pre>\n      <p><code>int</code> means whole number. <code>str</code> means text (a \"string\").\n      <code>float</code> means a number with a decimal point.</p>\n\n      <h4>Dynamic typing — the magic box</h4>\n      <p>In older languages like Java or C++, once you write BOOKS on a box, only books may go\n      in it. Ever. Put a shoe in and the program crashes. That is called\n      <em>static typing</em>.</p>\n      <p>Python uses <strong>dynamic typing</strong>. Its boxes are magic. Put a number in\n      today, empty it and put a word in tomorrow — Python does not mind at all.</p>\n      <pre><code>my_box = 10        # right now it is a number\nmy_box = \"Apple\"   # now it is text. Python is fine with this.</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"Static typing locks a box to one kind of data; dynamic typing lets the same box hold anything.\">\n        <text x=\"168\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Static typing — Java, C++</text>\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"320\" height=\"104\" rx=\"8\"/>\n        <text x=\"30\" y=\"70\" class=\"mono\" style=\"font-size:12.5px\">int box = 10;</text>\n        <text x=\"30\" y=\"96\" class=\"mono\" fill=\"#CF4A3C\" style=\"font-size:12.5px\">box = \"Apple\";  ← crash</text>\n        <text x=\"168\" y=\"128\" text-anchor=\"middle\" style=\"font-size:12px\">The box is locked to numbers forever</text>\n\n        <text x=\"532\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Dynamic typing — Python</text>\n        <rect class=\"box box--dark\" x=\"372\" y=\"38\" width=\"320\" height=\"104\" rx=\"8\"/>\n        <text x=\"394\" y=\"70\" class=\"mono on-dark\" style=\"font-size:12.5px\">my_box = 10</text>\n        <text x=\"394\" y=\"96\" class=\"mono accent\" style=\"font-size:12.5px\">my_box = \"Apple\"   ← fine</text>\n        <text x=\"532\" y=\"128\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">The same box will hold anything</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Freedom has a price.</strong> Dynamic typing makes Python quick to write. It\n        also means a mistake — putting text where you meant a number — is not caught until\n        that line actually runs. This is why <code>type()</code> is such a useful habit.\n      </div>\n\n      <h4>The core objects</h4>\n      <p>Everything in Python is an object. These are the building blocks you will meet:</p>\n      <ul>\n        <li><strong>Numbers</strong> — <code>int</code> (whole) and <code>float</code> (decimal)</li>\n        <li><strong>Strings</strong> — text</li>\n        <li><strong>Lists and Tuples</strong> — many items kept together</li>\n        <li><strong>Dictionaries</strong> — data stored under names you choose</li>\n      </ul>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this print?</p>\n        <pre><code>total_coins = 50\nprint(total_coin)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">50</button>\n          <button data-o=\"1\">A NameError</button>\n          <button data-o=\"2\">total_coin</button>\n        </div>\n        <p class=\"w__why\">The <strong>s</strong> is missing on the last line. The box is called\n        <code>total_coins</code>, and Python has never heard of <code>total_coin</code>. This\n        is the single most common beginner error.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">What type is each value?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>42</code></button>\n            <button data-pair=\"b\"><code>3.14</code></button>\n            <button data-pair=\"c\"><code>\"42\"</code></button>\n            <button data-pair=\"d\"><code>True</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\"><code>str</code> — the quotes make it text</button>\n            <button data-pair=\"a\"><code>int</code></button>\n            <button data-pair=\"d\"><code>bool</code></button>\n            <button data-pair=\"b\"><code>float</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>Watch the third one.</strong> <code>\"42\"</code> looks like a\n        number but the quotes make it text. That difference causes real bugs, and we deal with\n        it properly in the next topic.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Names, types and missing labels</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>A constant is a value you plan not to change. Python does not lock it, so programmers use capital letters as a promise.</p><p>A <code>NameError</code> means Python cannot find the exact name you wrote. Check spelling, capital letters and whether the variable was created before use.</p>\n      <h4>Worked example</h4>\n      <pre><code>PASS_MARK = 40\nstudent_score = 52\nprint(student_score &gt;= PASS_MARK)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Clear names and consistent spelling prevent many beginner errors.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Create constant</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Create variable</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Compare values</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Show result</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Clear names and consistent spelling prevent many beginner errors.</text>\n      </svg>\n    \n      \n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Debugging game — spot the mistake</span>\n        <p class=\"w__q\">Tap the part that causes the problem</p>\n        <div class=\"w-spot__line\"><button >total_coins = 50</button><button data-bad>print(total_coin)</button></div>\n        <p class=\"w__why\">The second line uses <code>total_coin</code>, but the created name is <code>total_coins</code>.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "How do you show that a variable is meant to be a constant?",
          "options": [
            "Put a # in front of it",
            "Write its name in ALL CAPITAL LETTERS",
            "Write it backwards",
            "Python does not allow constants at all"
          ],
          "answer": 1,
          "why": "It is a convention, not a rule. Python will happily let you change it — but capitals tell every human reader not to."
        },
        {
          "q": "What causes a NameError?",
          "options": [
            "Asking for a variable that does not exist, or spelling it wrongly",
            "Starting a name with a number",
            "Using a keyword as a name",
            "Forgetting to install Python"
          ],
          "answer": 0,
          "why": "Python looks for the exact name you typed. If nothing with that name exists, you get a NameError. Check spelling and capitals first."
        },
        {
          "q": "What does dynamic typing mean?",
          "options": [
            "You must type quickly",
            "A variable can hold a number now and text later",
            "You can never change what is in a variable",
            "The text moves around on screen"
          ],
          "answer": 1,
          "why": "Python boxes are not locked to one kind of data. Java and C++ lock them; Python does not."
        },
        {
          "q": "What does print(type(9.99)) show?",
          "options": [
            "<class 'int'>",
            "<class 'float'>",
            "<class 'str'>",
            "<class 'number'>"
          ],
          "answer": 1,
          "why": "A decimal point makes it a float. Without the decimal, 9 on its own would be an int."
        }
      ],
      "tasks": [
        {
          "id": "u1t15p01",
          "kind": "code",
          "title": "Task 15.1 — The X-ray machine",
          "brief": "A variable is given. Print its type using type() — the answer should be a str.",
          "starter": "mystery_data = \"Hello World\"\n# print the type of mystery_data\n",
          "checks": [
            {
              "type": "stdoutContains",
              "value": "str",
              "message": "The output should show it is a str"
            },
            {
              "type": "sourceIncludes",
              "value": "type(",
              "message": "Use the type() tool"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the type() tool",
            "Your output must include: str"
          ]
        },
        {
          "id": "u1t15p02",
          "kind": "code",
          "title": "Task 15.2 — Catch the ghost",
          "brief": "This code crashes with a NameError. Fix the spelling so it prints 50.",
          "starter": "total_coins = 50\nprint(\"You have this many coins:\")\nprint(total_coin)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "You have this many coins:\n50"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: You have this many coins:"
          ]
        },
        {
          "id": "u1t15p03",
          "kind": "code",
          "title": "Task 15.3 — Watch a box change type",
          "brief": "Make a variable my_box holding 10, print its type. Then put the text Apple in the SAME variable and print its type again.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutContains",
              "value": "int",
              "message": "First type should be int"
            },
            {
              "type": "stdoutContains",
              "value": "str",
              "message": "Second type should be str"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print both types, on two lines"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your output must include: int"
          ]
        },
        {
          "id": "u1t15p04",
          "kind": "code",
          "title": "Task 15.4 — Write a constant",
          "brief": "Make a constant for pi using the naming convention for constants, holding 3.14. Print it.",
          "starter": "",
          "checks": [
            {
              "type": "sourceRegex",
              "pattern": "^[A-Z_]{2,}\\s*=",
              "message": "Name your constant in ALL CAPITALS"
            },
            {
              "type": "stdoutEquals",
              "value": "3.14"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*3\\.14\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Name your constant in ALL CAPITALS",
            "Your first output line should be: 3.14"
          ]
        },
        {
          "id": "u1t15p05",
          "kind": "code",
          "title": "Task 15.1 — Inspect changing data",
          "brief": "Create mystery = 10 and print its type name. Change it to \"Ten\" and print its type name.",
          "starter": "mystery = 10\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "int\nstr"
            },
            {
              "type": "sourceIncludes",
              "value": "type(",
              "message": "Use type()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use type()",
            "Your first output line should be: int"
          ]
        },
        {
          "id": "u1t15p06",
          "kind": "code",
          "title": "Task 15.6 — Type and constant check",
          "brief": "Create MAX_USERS = 100 and user_name = \"Aman\". Print the type name of each value on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "int\nstr"
            },
            {
              "type": "sourceRegex",
              "pattern": "MAX_USERS\\s*=\\s*100",
              "message": "Use a capital constant name"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "type\\(",
              "count": 2,
              "message": "Use type() twice"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use a capital constant name Also remember: use type() twice.",
            "Your first output line should be: int"
          ]
        },
        {
          "id": "u1t15p07",
          "kind": "code",
          "title": "Task 15.7 — Dynamic typing timeline",
          "brief": "Use one variable called data. Give it 25, then 2.5, then \"Done\". After each assignment, print type(data).__name__.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "int\nfloat\nstr"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "data\\s*=",
              "count": 3,
              "message": "Assign three different values to the same variable"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "type\\(data\\)",
              "count": 3,
              "message": "Inspect the type after every change"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Assign three different values to the same variable Also remember: inspect the type after every change.",
            "Your first output line should be: int"
          ]
        },
        {
          "id": "u1t15p08",
          "kind": "code",
          "title": "Task 15.8 — Case-sensitive rescue",
          "brief": "Repair all NameErrors. Keep score and Score as two different variables. Final output: 40 / 60 / 100.",
          "starter": "score = 40\nScore = 60\nprint(SCORE)\nprint(score)\nprint(score + Scor)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "40\n60\n100"
            },
            {
              "type": "sourceRegex",
              "pattern": "score\\s*=\\s*40",
              "message": "Keep lowercase score"
            },
            {
              "type": "sourceRegex",
              "pattern": "Score\\s*=\\s*60",
              "message": "Keep capital Score"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "\\bSCORE\\b|\\bScor\\b",
              "message": "Remove the names that do not exist"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Keep lowercase score Also remember: keep capital score.",
            "Your first output line should be: 40"
          ]
        }
      ]
    },
    {
      "id": "u1t16",
      "title": "Basic Data Types",
      "summary": "Sorting the recycling: whole numbers, decimals, text, true/false, and nothing.",
      "notebookLM": "",
      "notes": "\n      <h4>Sorting the recycling</h4>\n      <p>At home you have different bins: glass, plastic, paper. You cannot treat them the\n      same. Try folding glass like paper and it shatters.</p>\n      <p>Python is the same. It needs to know what <em>type</em> of data is in a box, so it\n      knows what is allowed. You can multiply numbers. You cannot multiply a word by a word.</p>\n\n      <h4>1. Integer — <code>int</code></h4>\n      <p>A whole number. No decimal point. Can be positive, negative or zero.</p>\n      <p>Counting people in a room: you can have 5 people, never 5.5 people.</p>\n      <pre><code>age = 18\ntemperature = -5\nlives = 0</code></pre>\n\n      <h4>2. Float — <code>float</code></h4>\n      <p>A number <em>with</em> a decimal point. Short for \"floating-point number\".</p>\n      <p>Money and measurements. A snack costs ₹19.50. You weigh 60.5 kg.</p>\n      <pre><code>price = 19.99\npi_value = 3.14159</code></pre>\n\n      <h4>3. String — <code>str</code></h4>\n      <p>Text. Letters, symbols, anything. It must be wrapped in quotes — single\n      <code>'</code> or double <code>\"</code>, as long as both ends match.</p>\n      <pre><code>first_name = \"Sarah\"\nsecret_code = '12345!'</code></pre>\n      <p>Look at that second one. Those are digits, but the quotes make Python treat them as\n      <em>text</em> — like a phone number, which you would never do maths with.</p>\n\n      <h4>4. Boolean — <code>bool</code></h4>\n      <p>Only two possible values: <code>True</code> or <code>False</code>. Capital T,\n      capital F.</p>\n      <p>A light switch. Fully on, or fully off. Nothing in between.</p>\n      <pre><code>is_raining = False\ngame_over = True</code></pre>\n\n      <h4>5. Complex numbers</h4>\n      <p>An advanced maths type with a real part and an imaginary part, marked with\n      <code>j</code>. Engineers use them for electrical currents.</p>\n      <pre><code>problem = 3 + 5j</code></pre>\n      <p>You will almost certainly never need these in first year. Just know they exist.</p>\n\n      <h4>6. None</h4>\n      <p><code>None</code> means nothing, or empty. Not zero, not blank text —\n      <em>nothing yet</em>.</p>\n      <p>An empty cardboard box. It is a real box. There is just nothing in it, because you\n      are saving it for later.</p>\n      <pre><code>winner_name = None      # the match has not finished yet</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 200\" role=\"img\" aria-label=\"Six data types with an example of each: int, float, str, bool, complex and None.\">\n        <rect class=\"box\" x=\"8\" y=\"34\" width=\"216\" height=\"68\" rx=\"7\"/>\n        <text x=\"24\" y=\"60\" class=\"mono accent\" style=\"font-size:13px\">int</text>\n        <text x=\"24\" y=\"86\" class=\"mono\" style=\"font-size:12.5px\">18   -5   0</text>\n\n        <rect class=\"box\" x=\"242\" y=\"34\" width=\"216\" height=\"68\" rx=\"7\"/>\n        <text x=\"258\" y=\"60\" class=\"mono accent\" style=\"font-size:13px\">float</text>\n        <text x=\"258\" y=\"86\" class=\"mono\" style=\"font-size:12.5px\">19.99   3.14</text>\n\n        <rect class=\"box\" x=\"476\" y=\"34\" width=\"216\" height=\"68\" rx=\"7\"/>\n        <text x=\"492\" y=\"60\" class=\"mono accent\" style=\"font-size:13px\">str</text>\n        <text x=\"492\" y=\"86\" class=\"mono\" style=\"font-size:12.5px\">\"Sarah\"   '42'</text>\n\n        <rect class=\"box\" x=\"8\" y=\"112\" width=\"216\" height=\"68\" rx=\"7\"/>\n        <text x=\"24\" y=\"138\" class=\"mono accent\" style=\"font-size:13px\">bool</text>\n        <text x=\"24\" y=\"164\" class=\"mono\" style=\"font-size:12.5px\">True   False</text>\n\n        <rect class=\"box\" x=\"242\" y=\"112\" width=\"216\" height=\"68\" rx=\"7\"/>\n        <text x=\"258\" y=\"138\" class=\"mono accent\" style=\"font-size:13px\">complex</text>\n        <text x=\"258\" y=\"164\" class=\"mono\" style=\"font-size:12.5px\">3 + 5j</text>\n\n        <rect class=\"box\" x=\"476\" y=\"112\" width=\"216\" height=\"68\" rx=\"7\"/>\n        <text x=\"492\" y=\"138\" class=\"mono accent\" style=\"font-size:13px\">None</text>\n        <text x=\"492\" y=\"164\" class=\"mono\" style=\"font-size:12.5px\">nothing, yet</text>\n      </svg>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">A classic trap. What appears?</p>\n        <pre><code>a = \"5\"\nb = \"5\"\nprint(a + b)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">10</button>\n          <button data-o=\"1\">An error</button>\n          <button data-o=\"2\">55</button>\n        </div>\n        <p class=\"w__why\">Both are <strong>strings</strong>, because of the quotes. On text,\n        <code>+</code> does not add — it glues. So \"5\" and \"5\" become \"55\". Remove the quotes\n        and you would get 10.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Sort each value into the right bin.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>99.9</code></button>\n            <button data-pair=\"b\"><code>\"Hello World\"</code></button>\n            <button data-pair=\"c\"><code>False</code></button>\n            <button data-pair=\"d\"><code>42</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\">Integer</button>\n            <button data-pair=\"c\">Boolean</button>\n            <button data-pair=\"a\">Float</button>\n            <button data-pair=\"b\">String</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four sorted.</strong> The decimal point makes a float,\n        the quotes make a string, and True/False are always booleans.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Data types choose the correct behaviour</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>The type tells Python what a value means and what operations are sensible. Text can be joined. Numbers can be added. Boolean values describe yes/no states.</p><p>Quotes matter. <code>25</code> is a number, but <code>\"25\"</code> is text.</p>\n      <h4>Worked example</h4>\n      <pre><code>age = 25          # int\nprice = 19.5      # float\nname = &quot;Aman&quot;     # str\nis_ready = True   # bool</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"The same symbol can behave differently because the data type is different.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">See value</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Identify type</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Choose operation</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Get valid result</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">The same symbol can behave differently because the data type is different.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\"><code>42</code></button><button data-pair=\"p1\"><code>3.14</code></button><button data-pair=\"p2\"><code>\"42\"</code></button><button data-pair=\"p3\"><code>False</code></button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p3\">Boolean</button><button data-pair=\"p2\">String</button><button data-pair=\"p1\">Float</button><button data-pair=\"p0\">Integer</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "You want to store the price of a coffee, ₹3.50. Which type?",
          "options": [
            "Integer",
            "Float",
            "String",
            "Boolean"
          ],
          "answer": 1,
          "why": "It has a decimal point, so it is a float. Integers are whole numbers only."
        },
        {
          "q": "Which of these is a correctly written Boolean?",
          "options": [
            "true",
            "\"False\"",
            "True",
            "Yes"
          ],
          "answer": 2,
          "why": "Capital T. Lowercase true is a NameError, \"False\" in quotes is a string, and Yes means nothing to Python."
        },
        {
          "q": "What happens if you put numbers inside quotes, like \"100\"?",
          "options": [
            "Python treats it as an integer",
            "Python treats it as a float",
            "Python treats it as a string",
            "Python crashes"
          ],
          "answer": 2,
          "why": "Quotes always make text. \"100\" + \"100\" gives \"100100\", not 200."
        },
        {
          "q": "What does None mean?",
          "options": [
            "The number zero",
            "Empty text",
            "Nothing — no value yet",
            "An error"
          ],
          "answer": 2,
          "why": "None is its own type. Zero is a number and \"\" is empty text; None means there is nothing there at all."
        }
      ],
      "tasks": [
        {
          "id": "u1t16p01",
          "kind": "code",
          "title": "Task 16.1 — One of each",
          "brief": "Make three variables: my_wallet holding a decimal number, my_pet holding a name as text, and is_tired holding True or False. Print all three, each on its own line.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print all three, on three lines"
            },
            {
              "type": "sourceIncludes",
              "value": "my_wallet",
              "message": "Create my_wallet"
            },
            {
              "type": "sourceIncludes",
              "value": "my_pet",
              "message": "Create my_pet"
            },
            {
              "type": "sourceIncludes",
              "value": "is_tired",
              "message": "Create is_tired"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\d+\\.\\d+",
              "message": "my_wallet should hold a decimal number"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Create my_wallet Also remember: create my_pet.",
            "Compare your output carefully with the required capital letters, spaces and line breaks."
          ]
        },
        {
          "id": "u1t16p02",
          "kind": "code",
          "title": "Task 16.2 — Prove the trap",
          "brief": "Print \"5\" + \"5\" (both in quotes) and then 5 + 5 (no quotes), on two lines, so you can see the difference.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "55\n10"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Look for the exact Python function, operator or variable named in the instruction.",
            "Your first output line should be: 55"
          ]
        },
        {
          "id": "u1t16p03",
          "kind": "code",
          "title": "Task 16.3 — Sort the bins",
          "brief": "Print the type of each of these four values, one per line, in this order: 99.9 then \"Hello\" then False then 42",
          "starter": "",
          "checks": [
            {
              "type": "stdoutMinLines",
              "value": 4,
              "message": "Print four lines"
            },
            {
              "type": "stdoutContains",
              "value": "float",
              "message": "First should be a float"
            },
            {
              "type": "stdoutContains",
              "value": "bool",
              "message": "Third should be a bool"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "type\\(",
              "count": 4,
              "message": "Use type() four times"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use type() four times",
            "Your output must include: float"
          ]
        },
        {
          "id": "u1t16p04",
          "kind": "code",
          "title": "Task 16.1 — Build the type shelf",
          "brief": "Create age=18, price=9.5, name=\"Ravi\", is_ready=True, winner=None. Print each type name.",
          "starter": "# Use type(value).__name__\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "int\nfloat\nstr\nbool\nNoneType"
            },
            {
              "type": "sourceIncludes",
              "value": "type(",
              "message": "Use type()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use type()",
            "Your first output line should be: int"
          ]
        },
        {
          "id": "u1t16p05",
          "kind": "code",
          "title": "Task 16.2 — A complex value",
          "brief": "Create signal = 3 + 5j and print its type name. Output: complex",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "complex"
            },
            {
              "type": "sourceIncludes",
              "value": "j",
              "message": "Use a complex number"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use a complex number",
            "Your first output line should be: complex"
          ]
        },
        {
          "id": "u1t16p06",
          "kind": "code",
          "title": "Task 16.6 — Empty and complex boxes",
          "brief": "Create winner = None and signal = 4 + 2j. Print their type names.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "NoneType\ncomplex"
            },
            {
              "type": "sourceIncludes",
              "value": "None",
              "message": "Use None"
            },
            {
              "type": "sourceRegex",
              "pattern": "4\\s*\\+\\s*2j",
              "message": "Create the complex number"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use None Also remember: create the complex number.",
            "Your first output line should be: NoneType"
          ]
        },
        {
          "id": "u1t16p07",
          "kind": "code",
          "title": "Task 16.7 — Same symbols, different types",
          "brief": "Create number_text = \"20\" and number_value = 20. Print each type name, then print number_text + number_text, then number_value + number_value.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "str\nint\n2020\n40"
            },
            {
              "type": "sourceIncludes",
              "value": "number_text",
              "message": "Create number_text"
            },
            {
              "type": "sourceIncludes",
              "value": "number_value",
              "message": "Create number_value"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Create number_text Also remember: create number_value.",
            "Your first output line should be: str"
          ]
        },
        {
          "id": "u1t16p08",
          "kind": "code",
          "title": "Task 16.8 — Data-type passport",
          "brief": "Create six variables containing an int, float, str, bool, complex and None. Print exactly six lines in the form value type-name, using each variable and type(variable).__name__.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutLineCount",
              "value": 6,
              "message": "Print exactly six lines"
            },
            {
              "type": "stdoutContains",
              "value": "int",
              "message": "Include the int type"
            },
            {
              "type": "stdoutContains",
              "value": "float",
              "message": "Include the float type"
            },
            {
              "type": "stdoutContains",
              "value": "str",
              "message": "Include the str type"
            },
            {
              "type": "stdoutContains",
              "value": "bool",
              "message": "Include the bool type"
            },
            {
              "type": "stdoutContains",
              "value": "complex",
              "message": "Include the complex type"
            },
            {
              "type": "stdoutContains",
              "value": "NoneType",
              "message": "Include the NoneType type"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "type\\(",
              "count": 6,
              "message": "Inspect all six variables with type()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Inspect all six variables with type()",
            "Print exactly 6 lines."
          ]
        }
      ]
    },
    {
      "id": "u1t17",
      "title": "Type Conversion and Lists",
      "summary": "Changing money at the bank, and the train that carries many things at once.",
      "notebookLM": "",
      "notes": "\n      <h4>The currency exchange</h4>\n      <p>You travel from India to Japan. You have rupees, but the shops want yen. You go to a\n      counter and change one into the other.</p>\n      <p>Data needs the same treatment. Somebody types their age on a website and the computer\n      saves it as the <em>text</em> <code>\"18\"</code>, not the <em>number</em> 18. Try to do\n      maths with text and Python refuses.</p>\n      <p>Changing one type into another is called <strong>type conversion</strong>, or\n      <strong>type casting</strong>.</p>\n\n      <h4>Automatic — implicit conversion</h4>\n      <p>Sometimes Python is clever enough to do it for you, without being asked.</p>\n      <pre><code>result = 5 + 2.5\nprint(result)          # 7.5\nprint(type(result))    # float</code></pre>\n      <p>You added a whole number to a decimal. Python knew the answer needed a decimal point,\n      so it quietly turned the 5 into 5.0 first. Nothing was lost.</p>\n\n      <h4>Forced — explicit conversion</h4>\n      <p>When Python cannot guess, you tell it. Three tools do almost all the work:</p>\n      <table>\n        <tr><th>Tool</th><th>Turns something into…</th><th>Example</th></tr>\n        <tr><td><code>int()</code></td><td>a whole number</td><td><code>int(\"50\")</code> → 50</td></tr>\n        <tr><td><code>float()</code></td><td>a decimal number</td><td><code>float(\"2.5\")</code> → 2.5</td></tr>\n        <tr><td><code>str()</code></td><td>text</td><td><code>str(50)</code> → \"50\"</td></tr>\n      </table>\n\n      <pre><code># Python thinks this is text, because of the quotes\nfake_number = \"50\"\n\n# force it to become a real number\nreal_number = int(fake_number)\n\nprint(real_number + 10)     # 60</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 160\" role=\"img\" aria-label=\"int converts text to a whole number, float to a decimal, str back to text.\">\n        <rect class=\"box\" x=\"8\" y=\"52\" width=\"150\" height=\"60\" rx=\"7\"/>\n        <text x=\"83\" y=\"88\" text-anchor=\"middle\" class=\"mono\">\"50\"</text>\n        <text x=\"83\" y=\"132\" text-anchor=\"middle\" class=\"lbl\">text</text>\n\n        <path class=\"arrow\" d=\"M168 82 h56\"/><path class=\"accent\" d=\"M234 82 l-13 -7 v14 z\"/>\n        <text x=\"196\" y=\"68\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:11px\">int()</text>\n\n        <rect class=\"box box--dark\" x=\"244\" y=\"52\" width=\"150\" height=\"60\" rx=\"7\"/>\n        <text x=\"319\" y=\"88\" text-anchor=\"middle\" class=\"mono on-dark\">50</text>\n        <text x=\"319\" y=\"132\" text-anchor=\"middle\" class=\"lbl\">whole number</text>\n\n        <path class=\"arrow\" d=\"M404 82 h56\"/><path class=\"accent\" d=\"M470 82 l-13 -7 v14 z\"/>\n        <text x=\"432\" y=\"68\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:11px\">str()</text>\n\n        <rect class=\"box\" x=\"480\" y=\"52\" width=\"150\" height=\"60\" rx=\"7\"/>\n        <text x=\"555\" y=\"88\" text-anchor=\"middle\" class=\"mono\">\"50\"</text>\n        <text x=\"555\" y=\"132\" text-anchor=\"middle\" class=\"lbl\">text again</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Careful with int().</strong> <code>int(\"hello\")</code> crashes — there is no\n        number in there to find. And <code>int(9.99)</code> gives <code>9</code>, not 10; it\n        chops the decimal off rather than rounding.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this print?</p>\n        <pre><code>print(int(7.9))</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">7</button>\n          <button data-o=\"1\">8</button>\n          <button data-o=\"2\">7.9</button>\n        </div>\n        <p class=\"w__why\"><code>int()</code> chops, it does not round. Everything after the\n        decimal point is thrown away, so 7.9 becomes 7. If you want proper rounding you need\n        <code>round()</code>, which you meet in Topic 24.</p>\n      </div>\n\n      <h4>Lists — the train</h4>\n      <p>A variable so far is like a bicycle. It carries one person — one piece of data.</p>\n      <p>What if you need to carry fifty people? You need a train with many carriages.</p>\n      <p>A <strong>list</strong> holds many pieces of data together under one name.</p>\n      <ul>\n        <li>Use square brackets <code>[ ]</code>.</li>\n        <li>Separate every item with a comma.</li>\n        <li>A list can hold different types at the same time.</li>\n      </ul>\n\n      <pre><code>grocery_list = [\"Apples\", \"Milk\", \"Bread\"]\n\nstudent_profile = [15, \"John\", 98.5]      # int, str and float together</code></pre>\n\n      <p>You reach an item by its position number, and Python starts counting at\n      <strong>zero</strong>:</p>\n      <pre><code>fruits = [\"Apple\", \"Mango\", \"Kiwi\"]\n\nprint(fruits[0])       # Apple\nprint(fruits[2])       # Kiwi\nprint(len(fruits))     # 3</code></pre>\n\n      <div class=\"callout\">\n        <strong>Counting from zero surprises everybody.</strong> The first item is number 0,\n        the second is number 1. In a list of 3 things the last one is number 2. Asking for\n        <code>fruits[3]</code> gives you an <code>IndexError</code>.\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Using <code>colours = [\"Red\", \"Green\", \"Blue\"]</code>, what does each line give?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>colours[0]</code></button>\n            <button data-pair=\"b\"><code>colours[2]</code></button>\n            <button data-pair=\"c\"><code>len(colours)</code></button>\n            <button data-pair=\"d\"><code>colours[3]</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">3</button>\n            <button data-pair=\"d\">An IndexError</button>\n            <button data-pair=\"a\">Red</button>\n            <button data-pair=\"b\">Blue</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Three items means positions 0, 1 and 2.\n        There is no position 3, so asking for it is an error.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Convert carefully and group related values</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Input often arrives as text. Convert it before doing number calculations. A list groups many values under one name and preserves their order.</p><p>Conversion should happen only when the text really looks like the target type. <code>int(\"hello\")</code> cannot work.</p>\n      <h4>Worked example</h4>\n      <pre><code>age_text = &quot;20&quot;\nage = int(age_text)\nmarks = [75, 82, 91]\nprint(age + 1)\nprint(marks[0])</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Conversion changes the form of one value; a list keeps several values together.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Receive text</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Convert type</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Store list</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Use values</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Conversion changes the form of one value; a list keeps several values together.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">What does int(&quot;20&quot;) produce?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">The text &quot;20&quot;</button><button data-o=\"1\">The integer 20</button><button data-o=\"2\">The float 20.0</button><button data-o=\"3\">An error</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> It produces the integer <code>20</code>, which can be used in arithmetic.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "You add the integer 10 to the float 5.5 and Python gives 15.5 automatically. What is that called?",
          "options": [
            "Explicit type conversion",
            "Implicit type conversion",
            "Type deletion",
            "String formatting"
          ],
          "answer": 1,
          "why": "Implicit means Python did it by itself, without being asked, so that nothing was lost."
        },
        {
          "q": "Which tool forces the number 9.99 to become text?",
          "options": [
            "text()",
            "int()",
            "str()",
            "list()"
          ],
          "answer": 2,
          "why": "str() turns anything into text. int() would chop it to 9, and text() does not exist in Python."
        },
        {
          "q": "Which brackets create a List?",
          "options": [
            "Parentheses ( )",
            "Quotation marks \" \"",
            "Curly brackets { }",
            "Square brackets [ ]"
          ],
          "answer": 3,
          "why": "Square brackets, with commas between the items: [\"Apple\", \"Mango\"]."
        },
        {
          "q": "In the list ['a', 'b', 'c'], what is at position 0?",
          "options": [
            "'a'",
            "'b'",
            "'c'",
            "Nothing — counting starts at 1"
          ],
          "answer": 0,
          "why": "Python counts from zero, so position 0 is the first item. The last one here is position 2."
        }
      ],
      "tasks": [
        {
          "id": "u1t17p01",
          "kind": "code",
          "title": "Task 17.1 — The currency exchange",
          "brief": "A shoe size is stored as text. Convert it to a whole number in a variable called real_shoe_size, then print that number plus 2.",
          "starter": "shoe_size = \"10\"\n# convert it, then print real_shoe_size + 2\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "12"
            },
            {
              "type": "sourceIncludes",
              "value": "int(",
              "message": "Use int() to convert it"
            },
            {
              "type": "sourceIncludes",
              "value": "real_shoe_size",
              "message": "Store it in real_shoe_size"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use int() to convert it Also remember: store it in real_shoe_size.",
            "Your first output line should be: 12"
          ]
        },
        {
          "id": "u1t17p02",
          "kind": "code",
          "title": "Task 17.2 — Pack the train",
          "brief": "Make a list called my_favourites holding three things: a whole number, a food as text, and True. Print the whole list, then print how many items it has.",
          "starter": "",
          "checks": [
            {
              "type": "sourceRegex",
              "pattern": "my_favourites\\s*=\\s*\\[",
              "message": "Create a list with square brackets"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use len() to count the items"
            },
            {
              "type": "stdoutContains",
              "value": "True",
              "message": "The list should contain True"
            },
            {
              "type": "stdoutContains",
              "value": "3",
              "message": "Print how many items there are"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Create a list with square brackets Also remember: use len() to count the items.",
            "Your output must include: True"
          ]
        },
        {
          "id": "u1t17p03",
          "kind": "code",
          "title": "Task 17.3 — Pick items out",
          "brief": "A list is given. Print the FIRST item, then the LAST item, on two lines. Remember Python counts from zero.",
          "starter": "fruits = [\"Apple\", \"Mango\", \"Kiwi\"]\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Apple\nKiwi"
            },
            {
              "type": "sourceIncludes",
              "value": "fruits[",
              "message": "Use square brackets to reach into the list"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use square brackets to reach into the list",
            "Your first output line should be: Apple"
          ]
        },
        {
          "kind": "code",
          "title": "Convert a decimal price",
          "brief": "Convert the text \"19.5\" into a float, add 0.5, and print 20.0.",
          "starter": "price_text = \"19.5\"\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20.0"
            },
            {
              "type": "sourceIncludes",
              "value": "float(",
              "message": "Use float() for the conversion"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*20\\.0\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "id": "u1t17p04",
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use float() for the conversion",
            "Your first output line should be: 20.0"
          ]
        },
        {
          "kind": "code",
          "title": "Middle carriage and train length",
          "brief": "Create colours = [\"Red\", \"Green\", \"Blue\"]. Print Green, then print the number of items.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Green\n3"
            },
            {
              "type": "sourceIncludes",
              "value": "colours[1]",
              "message": "Use position 1 for the middle item"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use len() to count the items"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t17p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use position 1 for the middle item Also remember: use len() to count the items.",
            "Your first output line should be: Green"
          ]
        },
        {
          "id": "u1t17p06",
          "kind": "code",
          "title": "Task 17.6 — Convert and reach into a list",
          "brief": "Create values = [\"10\", \"20\", \"30\"]. Convert the first and last items to int, add them, and print 40.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "40"
            },
            {
              "type": "sourceRegex",
              "pattern": "values\\s*=\\s*\\[",
              "message": "Create the list"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "int\\(",
              "count": 2,
              "message": "Convert two list items with int()"
            },
            {
              "type": "sourceIncludes",
              "value": "values[0]",
              "message": "Use the first item"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*40\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Create the list Also remember: convert two list items with int().",
            "Your first output line should be: 40"
          ]
        },
        {
          "id": "u1t17p07",
          "kind": "code",
          "title": "Task 17.7 — Mixed carriage report",
          "brief": "Create profile = [18, \"Nina\", 92.5, True]. Print the second item, the fourth item, and the list length.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Nina\nTrue\n4"
            },
            {
              "type": "sourceIncludes",
              "value": "profile[1]",
              "message": "Reach the second item with index 1"
            },
            {
              "type": "sourceIncludes",
              "value": "profile[3]",
              "message": "Reach the fourth item with index 3"
            },
            {
              "type": "sourceIncludes",
              "value": "len(profile)",
              "message": "Count the list"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Reach the second item with index 1 Also remember: reach the fourth item with index 3.",
            "Your first output line should be: Nina"
          ]
        },
        {
          "id": "u1t17p08",
          "kind": "code",
          "title": "Task 17.8 — Conversion and list report",
          "brief": "Create raw_marks = [\"78\", \"85\", \"92\"]. Convert all three items into separate integer variables, store them in marks, then print the marks list, its total using sum(), and its length.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[78, 85, 92]\n255\n3"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "int\\(",
              "count": 3,
              "message": "Convert all three text marks"
            },
            {
              "type": "sourceRegex",
              "pattern": "marks\\s*=\\s*\\[",
              "message": "Store the converted values in marks"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(marks)",
              "message": "Use sum(marks)"
            },
            {
              "type": "sourceIncludes",
              "value": "len(marks)",
              "message": "Use len(marks)"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Convert all three text marks Also remember: store the converted values in marks.",
            "Your first output line should be: [78, 85, 92]"
          ]
        }
      ]
    },
    {
      "id": "u1cp03",
      "title": "Revision Checkpoint 3 — Data and Variables",
      "summary": "Mix identifiers, variables, types, casting and lists.",
      "notebookLM": "",
      "notes": "\n      <h4>Pause, mix and remember</h4>\n      <p>This checkpoint mixes ideas from <strong>Chapters 13–17</strong>. It does not teach a new syllabus topic. It checks whether the earlier ideas are still clear.</p>\n      <div class=\"callout\"><strong>How to use it:</strong> answer the mixed quiz without reopening earlier chapters. Then complete the activities. When something is difficult, return to only that chapter and try again.</div>\n      <h4>Checkpoint method</h4>\n      <ol><li>Read the full question.</li><li>Predict before running code.</li><li>Run and compare.</li><li>Fix one error at a time.</li></ol>\n    \n              <div class=\"callout\"><strong>Visual revision map.</strong> Use this picture before starting the checkpoint activities. Explain every arrow aloud in your own words.</div>\n              \n      <h4>Data journey</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A compact map connecting the ideas revised in this checkpoint.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Choose name</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Store value</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Know type</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Convert/group</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A compact map connecting the ideas revised in this checkpoint.</text>\n      </svg>\n    \n              \n      <div class=\"w\">\n        <span class=\"w__k\">Checkpoint game — study cards</span>\n        <div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do first?</span><span class=\"w-flip__back\">Read the question and identify the concept.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do before running code?</span><span class=\"w-flip__back\">Predict the result or write the steps on paper.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do after an error?</span><span class=\"w-flip__back\">Read the final error line and fix one issue at a time.</span></button></div>\n      </div>\n    \n            ",
      "mcqs": [
        {
          "q": "Which name follows Python identifier rules?",
          "options": [
            "student_score_2",
            "2_student_score",
            "student score",
            "student-score"
          ],
          "answer": 0,
          "why": "Letters, numbers and underscores are allowed, but the name cannot begin with a number."
        },
        {
          "q": "What is stored by value = \"45\"?",
          "options": [
            "A Boolean",
            "Text",
            "An integer",
            "A float"
          ],
          "answer": 1,
          "why": "Quotes make the value a string."
        },
        {
          "q": "What does type(False).__name__ produce?",
          "options": [
            "int",
            "NoneType",
            "bool",
            "str"
          ],
          "answer": 2,
          "why": "False is a Boolean value."
        },
        {
          "q": "What is the result of int(\"12\") + 3?",
          "options": [
            "123",
            "An error",
            "12.3",
            "15"
          ],
          "answer": 3,
          "why": "int converts the text into a whole number before addition."
        },
        {
          "q": "What is the first index of a Python list?",
          "options": [
            "0",
            "1",
            "-1 only",
            "It has no index"
          ],
          "answer": 0,
          "why": "Python list positions begin at zero."
        },
        {
          "q": "What does len([10, 20, 30, 40]) return?",
          "options": [
            "100",
            "4",
            "3",
            "40"
          ],
          "answer": 1,
          "why": "len counts the items."
        },
        {
          "q": "Why might PI be written in capital letters?",
          "options": [
            "To make it faster",
            "To import it",
            "To show it should be treated as a constant",
            "To make it a string"
          ],
          "answer": 2,
          "why": "Capital names are the convention for values that should not change."
        },
        {
          "q": "What happens in x = 10 followed by x = \"ten\"?",
          "options": [
            "Python always crashes",
            "x keeps both values",
            "The second line is a comment",
            "Python allows it because typing is dynamic"
          ],
          "answer": 3,
          "why": "A Python variable can be assigned a value of a different type later."
        }
      ],
      "tasks": [
        {
          "id": "u1cp03p01",
          "kind": "code",
          "title": "Checkpoint bug fix — identifier",
          "brief": "Repair the illegal name so the program prints 88.",
          "starter": "test score = 88\nprint(test score)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "88"
            },
            {
              "type": "sourceNotIncludes",
              "value": "test score",
              "message": "Use a legal identifier such as test_score"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 1",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use a legal identifier such as test_score",
            "Your first output line should be: 88"
          ]
        },
        {
          "id": "u1cp03p02",
          "kind": "code",
          "title": "Checkpoint bug fix — casting",
          "brief": "Fix the code so it prints 25.",
          "starter": "age = \"20\"\nprint(age + 5)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "25"
            },
            {
              "type": "sourceIncludes",
              "value": "int(",
              "message": "Convert the text to int"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 2",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Convert the text to int",
            "Your first output line should be: 25"
          ]
        },
        {
          "id": "u1cp03p03",
          "kind": "code",
          "title": "Checkpoint list practice",
          "brief": "Create colours = [\"Red\", \"Green\", \"Blue\"]. Print Green and then the list length.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Green\n3"
            },
            {
              "type": "sourceIncludes",
              "value": "colours[1]",
              "message": "Use index 1 for Green"
            },
            {
              "type": "sourceIncludes",
              "value": "len(colours)",
              "message": "Count the list"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 3",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use index 1 for Green Also remember: count the list.",
            "Your first output line should be: Green"
          ]
        },
        {
          "id": "u1cp03p04",
          "kind": "code",
          "title": "Checkpoint type practice",
          "brief": "Create one int, float, string and Boolean. Print their type names in that order.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "int\nfloat\nstr\nbool"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "type\\(",
              "count": 4,
              "message": "Inspect all four values"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 4",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Inspect all four values",
            "Your first output line should be: int"
          ]
        },
        {
          "id": "u1cp03p05",
          "kind": "code",
          "title": "Checkpoint challenge — data card",
          "brief": "Create student = [\"Riya\", \"18\", \"91.5\", True]. Convert the age and mark, then print exactly four lines: Riya / 18 / 91.5 / True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Riya\n18\n91.5\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "int(",
              "message": "Convert the age"
            },
            {
              "type": "sourceIncludes",
              "value": "float(",
              "message": "Convert the mark"
            },
            {
              "type": "sourceIncludes",
              "value": "student[",
              "message": "Read values from the list"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 5",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Convert the age Also remember: convert the mark.",
            "Your first output line should be: Riya"
          ]
        }
      ]
    },
    {
      "id": "u1t18",
      "title": "Output and Input",
      "summary": "The computer talks to you with print(). You talk back with input().",
      "notebookLM": "",
      "notes": "\n      <h4>A conversation</h4>\n      <p>Programming is a conversation between you and the computer.</p>\n      <ul>\n        <li><strong>Output</strong> — the computer talking to you.</li>\n        <li><strong>Input</strong> — the computer listening to you.</li>\n      </ul>\n\n      <h4>print() does more than you think</h4>\n      <p>You can pass several things at once, separated by commas. Python puts a single space\n      between them.</p>\n      <pre><code>print(\"Roll\", 42)          # Roll 42\nprint(\"Total\", \"=\", 100)   # Total = 100</code></pre>\n      <p>The commas are not printed. They just separate the items.</p>\n\n      <h4>sep — choose your own separator</h4>\n      <p>Do not want a space? Tell <code>print</code> what to use instead.</p>\n      <pre><code>print(10, 20, 30, sep=\"-\")      # 10-20-30\nprint(\"a\", \"b\", sep=\"\")         # ab\nprint(\"Python\", \"is\", \"fun\", sep=\"#\")   # Python#is#fun</code></pre>\n\n      <h4>end — choose what comes after</h4>\n      <p>Normally <code>print</code> jumps to a new line when it finishes. That is because its\n      hidden default is <code>end=\"\\n\"</code>, and <code>\\n</code> means \"new line\".</p>\n      <pre><code>print(\"Good\", end=\" \")\nprint(\"Morning\")\n\n# Both appear on ONE line:  Good Morning</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"sep controls what goes between the items, end controls what goes after the last one.\">\n        <text class=\"mono\" x=\"34\" y=\"52\" style=\"font-size:17px\">print(</text>\n        <text class=\"mono accent\" x=\"106\" y=\"52\" style=\"font-size:17px\">10</text>\n        <text class=\"mono\" x=\"134\" y=\"52\" style=\"font-size:17px\">,</text>\n        <text class=\"mono accent\" x=\"152\" y=\"52\" style=\"font-size:17px\">20</text>\n        <text class=\"mono\" x=\"180\" y=\"52\" style=\"font-size:17px\">,</text>\n        <text class=\"mono accent\" x=\"198\" y=\"52\" style=\"font-size:17px\">30</text>\n        <text class=\"mono\" x=\"226\" y=\"52\" style=\"font-size:17px\">, sep=\"-\", end=\"!\")</text>\n\n        <path class=\"good\" d=\"M120 62 v14 h44 v-14\"/>\n        <text x=\"142\" y=\"98\" text-anchor=\"middle\" class=\"lbl\">sep goes here</text>\n        <text x=\"142\" y=\"118\" text-anchor=\"middle\" style=\"font-size:12px\">between every item</text>\n\n        <path class=\"good\" stroke=\"#D67F19\" d=\"M320 62 v40 h120 v-14\"/>\n        <text x=\"470\" y=\"112\" class=\"lbl\">end goes at the very end</text>\n\n        <rect class=\"box box--dark\" x=\"34\" y=\"130\" width=\"240\" height=\"36\" rx=\"6\"/>\n        <text x=\"154\" y=\"154\" text-anchor=\"middle\" class=\"mono accent\">10-20-30!</text>\n      </svg>\n\n      <h4>input() — the computer listens</h4>\n      <p>When you sign up to a website, a box appears asking for your name. Nothing happens\n      until you type something.</p>\n      <p><code>input()</code> does exactly that. It pauses the program, shows a question, and\n      waits.</p>\n      <pre><code>user_name = input(\"What is your name? \")\nprint(\"Hello\", user_name)</code></pre>\n\n      <h4>The big trap</h4>\n      <div class=\"callout\">\n        <strong>input() ALWAYS gives you text.</strong> Always. Even if the user types 5,\n        Python receives the string <code>\"5\"</code>. Try to do maths with it and your program\n        breaks or behaves very strangely.\n      </div>\n\n      <pre><code># WRONG\nage = input(\"Enter your age: \")\nprint(age + 5)            # crashes — you cannot add a number to text\n\n# RIGHT\nage = input(\"Enter your age: \")\nreal_age = int(age)\nprint(real_age + 5)\n\n# SHORTCUT — wrap it all in one line\nprice = float(input(\"Enter the price: \"))</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">The user types <code>7</code>. What appears?</p>\n        <pre><code>n = input(\"Number: \")\nprint(n + n)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">14</button>\n          <button data-o=\"1\">77</button>\n          <button data-o=\"2\">An error</button>\n        </div>\n        <p class=\"w__why\"><code>input()</code> gave text, so <code>n</code> holds\n        <code>\"7\"</code>. Adding text glues it together: <code>\"77\"</code>. Wrap it in\n        <code>int()</code> and you would get 14.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">What does each line print?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>print(\"A\", \"B\")</code></button>\n            <button data-pair=\"b\"><code>print(\"A\", \"B\", sep=\"\")</code></button>\n            <button data-pair=\"c\"><code>print(\"A\", \"B\", sep=\"-\")</code></button>\n            <button data-pair=\"d\"><code>print(1, 2, 3, sep=\", \")</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">A-B</button>\n            <button data-pair=\"a\">A B</button>\n            <button data-pair=\"d\">1, 2, 3</button>\n            <button data-pair=\"b\">AB</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Remember the default: one single space.\n        Everything else you have to ask for.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>About input() in these tasks.</strong> The tasks below do not use\n        <code>input()</code>, because a checker cannot type an answer for you. Practise\n        <code>input()</code> on your own machine — it is very likely to appear in your lab exam.\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Programs communicate in three steps</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Many beginner programs follow Input → Process → Output. First collect data, then calculate or change it, then show the answer.</p><p><code>input()</code> returns text. Convert it when the process needs a number.</p>\n      <h4>Worked example</h4>\n      <pre><code>name = input(&quot;Name: &quot;)\nage = int(input(&quot;Age: &quot;))\nnext_age = age + 1\nprint(name, &quot;will be&quot;, next_age)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A clear input–process–output plan makes a program easier to design.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Ask input</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Convert data</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Process value</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Print output</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A clear input–process–output plan makes a program easier to design.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\"><code>input()</code></button><button data-pair=\"p1\"><code>int()</code></button><button data-pair=\"p2\"><code>print()</code></button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p2\">Shows the result</button><button data-pair=\"p1\">Converts text to an integer</button><button data-pair=\"p0\">Collects text from the user</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What does print(\"Apple\", \"Banana\", sep=\"***\") show?",
          "options": [
            "Apple***Banana",
            "Apple Banana",
            "AppleBanana",
            "***Apple Banana***"
          ],
          "answer": 0,
          "why": "sep replaces the space that normally sits between items. It goes between them, not around them."
        },
        {
          "q": "What type does input() always give back?",
          "options": [
            "Integer",
            "Float",
            "String",
            "Boolean"
          ],
          "answer": 2,
          "why": "Always a string, no matter what the user types. This is the single most common source of bugs for beginners."
        },
        {
          "q": "The user must type a price like 10.50 and you need to do maths with it. What do you wrap around input()?",
          "options": [
            "text()",
            "float()",
            "int()",
            "number()"
          ],
          "answer": 1,
          "why": "float() keeps the decimal part. int() would chop it off, and text() does not exist."
        },
        {
          "q": "What does the end parameter control?",
          "options": [
            "What goes between the items",
            "What is printed after the last item, instead of moving to a new line",
            "Where the program stops",
            "The colour of the text"
          ],
          "answer": 1,
          "why": "The default is end=\"\\n\", a new line. Change it to a space and the next print lands on the same line."
        }
      ],
      "tasks": [
        {
          "id": "u1t18p01",
          "kind": "code",
          "title": "Task 18.1 — Your own separator",
          "brief": "In ONE print statement, print the three words Python, is, fun with a # between each word instead of a space.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Python#is#fun"
            },
            {
              "type": "sourceIncludes",
              "value": "sep=",
              "message": "Use the sep setting"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the sep setting",
            "Your first output line should be: Python#is#fun"
          ]
        },
        {
          "id": "u1t18p02",
          "kind": "code",
          "title": "Task 18.2 — Two prints, one line",
          "brief": "Use TWO print statements. The first prints Good, the second prints Morning. Use end so they appear on one line as: Good Morning",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Good Morning"
            },
            {
              "type": "sourceIncludes",
              "value": "end=",
              "message": "Use the end setting on the first print"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 2,
              "message": "Use two separate print statements"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the end setting on the first print Also remember: use two separate print statements.",
            "Your first output line should be: Good Morning"
          ]
        },
        {
          "id": "u1t18p03",
          "kind": "code",
          "title": "Task 18.3 — Escape the trap",
          "brief": "A number arrived as text, the way input() would give it. Convert it and print the answer of that number plus 2.",
          "starter": "apples = \"7\"\n# they want 2 more apples — print the total\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "9"
            },
            {
              "type": "sourceIncludes",
              "value": "int(",
              "message": "Convert the text with int()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*9\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Convert the text with int()",
            "Your first output line should be: 9"
          ]
        },
        {
          "id": "u1t18p04",
          "kind": "code",
          "title": "Task 18.2 — No new line",
          "brief": "Use two print statements to produce GoodMorning.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "GoodMorning"
            },
            {
              "type": "sourceIncludes",
              "value": "end=",
              "message": "Use end="
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use end=",
            "Your first output line should be: GoodMorning"
          ]
        },
        {
          "id": "u1t18p05",
          "kind": "code",
          "title": "Task 18.3 — Apple maths",
          "brief": "Ask how many apples. Enter 4. Convert to int, add 2, and print 6.",
          "starter": "# Use input() and int()\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "6"
            },
            {
              "type": "sourceIncludes",
              "value": "input(",
              "message": "Use input()"
            },
            {
              "type": "sourceIncludes",
              "value": "int(",
              "message": "Use int()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*6\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use input() Also remember: use int().",
            "Your first output line should be: 6"
          ]
        },
        {
          "id": "u1t18p06",
          "kind": "code",
          "title": "Task 18.6 — Ask for a name",
          "brief": "Use input() to ask: Enter your name:  When the prompt appears, enter Ravi. Then print exactly: Hello Ravi",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello Ravi"
            },
            {
              "type": "sourceIncludes",
              "value": "input(",
              "message": "Use input()"
            },
            {
              "type": "sourceRegex",
              "pattern": "print\\([^\\n]*,",
              "message": "Print text and the variable together"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use input() Also remember: print text and the variable together.",
            "Your first output line should be: Hello Ravi"
          ]
        },
        {
          "id": "u1t18p07",
          "kind": "code",
          "title": "Task 18.7 — Price after discount",
          "brief": "Use input() to ask for a price. Enter 50.5 when prompted. Convert it to float, subtract 5.5, and print 45.0.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutNumberEquals",
              "value": 45,
              "tolerance": 0.0001,
              "message": "The numerical output must be 45.0"
            },
            {
              "type": "sourceIncludes",
              "value": "float(",
              "message": "Convert the input with float()"
            },
            {
              "type": "sourceIncludes",
              "value": "input(",
              "message": "Use input()"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*45(?:\\.0)?\\s*\\)",
              "message": "Calculate the answer instead of printing 45 directly"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Convert the input with float() Also remember: use input().",
            "Compare your output carefully with the required capital letters, spaces and line breaks."
          ]
        },
        {
          "id": "u1t18p08",
          "kind": "code",
          "title": "Task 18.8 — Mini conversation",
          "brief": "Ask for a name and an age. Enter Asha and 18 when prompted. Convert age to int. Use sep and end at least once. Final output must be two lines: Student | Asha / Next age: 19",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Student | Asha\nNext age: 19"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "input\\(",
              "count": 2,
              "message": "Ask for two inputs"
            },
            {
              "type": "sourceIncludes",
              "value": "int(",
              "message": "Convert age with int()"
            },
            {
              "type": "sourceIncludes",
              "value": "sep=",
              "message": "Use sep at least once"
            },
            {
              "type": "sourceIncludes",
              "value": "end=",
              "message": "Use end at least once"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Ask for two inputs Also remember: convert age with int().",
            "Your first output line should be: Student | Asha"
          ]
        }
      ]
    },
    {
      "id": "u1t19",
      "title": "String Formatting",
      "summary": "Fill in the blanks — three ways, and one clear winner.",
      "notebookLM": "",
      "notes": "\n      <h4>A fill-in-the-blank game</h4>\n      <p>You have played the game where a story has blank spaces and you fill them in with\n      names and words.</p>\n      <p><strong>String formatting</strong> is that game. You write a sentence with blanks,\n      and Python drops your variables into them.</p>\n      <p>There are three ways. They arrived in this order, and each one is easier than the\n      last.</p>\n\n      <h4>Way 1 — the % method (very old)</h4>\n      <p>Old Python code used <code>%</code> as the blank space.</p>\n      <ul>\n        <li><code>%s</code> means \"put a string here\"</li>\n        <li><code>%d</code> means \"put a digit here\"</li>\n      </ul>\n      <pre><code>name = \"John\"\nage = 20\n\nprint(\"My name is %s and I am %d years old.\" % (name, age))</code></pre>\n      <p>You will almost never write this yourself. But you need to recognise it, because you\n      will find it in older code.</p>\n\n      <h4>Way 2 — the .format() method (better)</h4>\n      <p>Instead of remembering <code>%s</code> and <code>%d</code>, you just put empty curly\n      brackets <code>{}</code> wherever you want a blank.</p>\n      <pre><code>item = \"Pizza\"\nprice = 15.99\n\nprint(\"I bought a {} for {} rupees.\".format(item, price))</code></pre>\n\n      <h4>Way 3 — f-strings (the best, use this one)</h4>\n      <p>Python 3.6 added <strong>f-strings</strong>. Put the letter <code>f</code> just\n      before the opening quote, then write your variables straight inside the curly brackets.</p>\n      <pre><code>player = \"Mario\"\nscore = 500\n\nprint(f\"Game Over! {player} got a score of {score}.\")</code></pre>\n\n      <div class=\"callout\">\n        <strong>Why f-strings win.</strong> With the old ways you had to look at the end of\n        the line to find out which variable went in which blank. With an f-string you read it\n        straight through, left to right, like a sentence.\n      </div>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 200\" role=\"img\" aria-label=\"The percent method, the format method and f-strings all produce the same sentence.\">\n        <text x=\"24\" y=\"34\" class=\"lbl\">Old</text>\n        <rect class=\"box\" x=\"8\" y=\"42\" width=\"684\" height=\"38\" rx=\"6\"/>\n        <text x=\"26\" y=\"66\" class=\"mono\" style=\"font-size:12.5px\">\"My name is %s\" % (name)</text>\n        <text x=\"674\" y=\"66\" text-anchor=\"end\" style=\"font-size:11.5px\">look at the end to find the variable</text>\n\n        <text x=\"24\" y=\"104\" class=\"lbl\">Better</text>\n        <rect class=\"box\" x=\"8\" y=\"112\" width=\"684\" height=\"38\" rx=\"6\"/>\n        <text x=\"26\" y=\"136\" class=\"mono\" style=\"font-size:12.5px\">\"My name is {}\".format(name)</text>\n        <text x=\"674\" y=\"136\" text-anchor=\"end\" style=\"font-size:11.5px\">still at the end</text>\n\n        <text x=\"24\" y=\"174\" class=\"lbl accent\">Best</text>\n        <rect x=\"8\" y=\"156\" width=\"684\" height=\"38\" rx=\"6\" fill=\"rgba(242,160,61,.16)\" stroke=\"#D67F19\" stroke-width=\"2.2\"/>\n        <text x=\"26\" y=\"180\" class=\"mono\" style=\"font-size:12.5px\">f\"My name is {name}\"</text>\n        <text x=\"674\" y=\"180\" text-anchor=\"end\" style=\"font-size:11.5px\">read it straight through</text>\n      </svg>\n\n      <h4>Maths inside the brackets</h4>\n      <p>An f-string will happily do a calculation for you, right where it stands.</p>\n      <pre><code>base_price = 10\n\nprint(f\"The total with 2 rupees tax is {base_price + 2}.\")\n# The total with 2 rupees tax is 12.</code></pre>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">This f-string does not work. Tap the problem.</p>\n        <div class=\"w-spot__line\">\n          <button data-bad>\"</button><button>Hello</button><button>{name}</button><button>\"</button>\n        </div>\n        <p class=\"w__why\">The letter <code>f</code> is missing before the opening quote.\n        Without it, Python prints the curly brackets and the word <em>name</em> exactly as\n        typed, instead of filling in the blank.</p>\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this print?</p>\n        <pre><code>x = 5\nprint(f\"{x} plus {x} is {x + x}\")</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">x plus x is x + x</button>\n          <button data-o=\"1\">5 plus 5 is 55</button>\n          <button data-o=\"2\">5 plus 5 is 10</button>\n        </div>\n        <p class=\"w__why\">Each pair of brackets is worked out separately. The last one is a\n        real sum on real numbers, so it gives 10 — not \"55\", because <code>x</code> holds the\n        number 5, not the text \"5\".</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which method is which?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>\"Hi %s\" % name</code></button>\n            <button data-pair=\"b\"><code>\"Hi {}\".format(name)</code></button>\n            <button data-pair=\"c\"><code>f\"Hi {name}\"</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">Newest and easiest — use this</button>\n            <button data-pair=\"a\">The oldest way, from Python 2 days</button>\n            <button data-pair=\"b\">The middle child, still common</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>Correct.</strong> All three give the same sentence. Write\n        f-strings yourself, and recognise the other two when you meet them in someone else's code.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Formatting turns data into a message</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Formatting controls how values appear to a person. An f-string places variables directly inside a sentence using curly braces.</p><p>Use formatting to make output readable, not only correct. Labels, spacing and decimal control all help.</p>\n      <h4>Worked example</h4>\n      <pre><code>name = &quot;Sara&quot;\naverage = 87.456\nprint(f&quot;{name} scored {average:.2f}%&quot;)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Formatting combines data and words into one clean line of output.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Choose values</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Write f-string</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Apply format</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Read clear message</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Formatting combines data and words into one clean line of output.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">What does :.2f do?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">Adds two values</button><button data-o=\"1\">Shows two decimal places</button><button data-o=\"2\">Repeats text twice</button><button data-o=\"3\">Converts to integer</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> It displays a floating-point value with two digits after the decimal point.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "Which formatting method is the newest and easiest?",
          "options": [
            "The %s method",
            "The format() method",
            "f-strings",
            "The glue() method"
          ],
          "answer": 2,
          "why": "f-strings arrived in Python 3.6 and are now what almost everyone writes. You read them straight through, like a normal sentence."
        },
        {
          "q": "Where must the letter f go in an f-string?",
          "options": [
            "At the very end of the sentence",
            "Inside the curly brackets",
            "Right before the opening quotation mark",
            "Between every word"
          ],
          "answer": 2,
          "why": "f\"Hello {name}\". Forget it and Python prints the curly brackets and the variable name exactly as you typed them."
        },
        {
          "q": "Fill in the blank: print(\"I have {} dogs\".______(3))",
          "options": [
            ".fill",
            ".format",
            ".add",
            "%s"
          ],
          "answer": 1,
          "why": ".format(3) drops the 3 into the empty curly brackets."
        },
        {
          "q": "What does f\"{2 + 3} apples\" print?",
          "options": [
            "2 + 3 apples",
            "5 apples",
            "{2 + 3} apples",
            "An error"
          ],
          "answer": 1,
          "why": "An f-string works out whatever is inside the brackets first. Real maths is allowed in there."
        }
      ],
      "tasks": [
        {
          "id": "u1t19p01",
          "kind": "code",
          "title": "Task 19.1 — The modern way",
          "brief": "Make two variables: hero holding Batman and city holding Gotham. Use an f-string to print exactly: Batman is the protector of Gotham",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Batman is the protector of Gotham"
            },
            {
              "type": "sourceRegex",
              "pattern": "f\"|f'",
              "message": "Use an f-string"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use an f-string",
            "Your first output line should be: Batman is the protector of Gotham"
          ]
        },
        {
          "id": "u1t19p02",
          "kind": "code",
          "title": "Task 19.2 — The middle child",
          "brief": "Make a variable city holding Paris. Use the .format() method with curly brackets to print exactly: I want to visit Paris next year",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "I want to visit Paris next year"
            },
            {
              "type": "sourceIncludes",
              "value": ".format(",
              "message": "Use the .format() method"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the .format() method",
            "Your first output line should be: I want to visit Paris next year"
          ]
        },
        {
          "id": "u1t19p03",
          "kind": "code",
          "title": "Task 19.3 — Maths inside the brackets",
          "brief": "Make base_price holding 10. Using ONE f-string, print exactly: The total with 2 tax is 12  — and do the + 2 inside the curly brackets.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "The total with 2 tax is 12"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\{[^}]*base_price[^}]*\\+[^}]*\\}",
              "message": "Do the addition inside the curly brackets"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Do the addition inside the curly brackets",
            "Your first output line should be: The total with 2 tax is 12"
          ]
        },
        {
          "kind": "code",
          "title": "Read the old style",
          "brief": "Create food = \"Tacos\". Use the old %s method to print exactly: I love eating Tacos",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "I love eating Tacos"
            },
            {
              "type": "sourceIncludes",
              "value": "%s",
              "message": "Use the old %s placeholder"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t19p04",
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use the old %s placeholder",
            "Your first output line should be: I love eating Tacos"
          ]
        },
        {
          "kind": "code",
          "title": "A tiny f-string story",
          "brief": "Create animal = \"rabbit\" and action = \"jumping\". Use an f-string to print exactly: The rabbit is jumping!",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "The rabbit is jumping!"
            },
            {
              "type": "sourceRegex",
              "pattern": "f[\"\\']",
              "message": "Use an f-string"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t19p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use an f-string",
            "Your first output line should be: The rabbit is jumping!"
          ]
        },
        {
          "id": "u1t19p06",
          "kind": "code",
          "title": "Task 19.6 — Three generations",
          "brief": "Create name = \"Asha\". Print Hello Asha three times: first with %, second with .format(), third with an f-string.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello Asha\nHello Asha\nHello Asha"
            },
            {
              "type": "sourceRegex",
              "pattern": "%\\s*name",
              "message": "Use the percent style"
            },
            {
              "type": "sourceIncludes",
              "value": ".format(",
              "message": "Use .format()"
            },
            {
              "type": "sourceRegex",
              "pattern": "f[\"\\']",
              "message": "Use an f-string"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use the percent style Also remember: use .format().",
            "Your first output line should be: Hello Asha"
          ]
        },
        {
          "id": "u1t19p07",
          "kind": "code",
          "title": "Task 19.7 — Calculation inside an f-string",
          "brief": "Create length = 8 and width = 5. Use one f-string to print exactly: Area: 40 square units, doing the multiplication inside {}.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Area: 40 square units"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\{[^}]*length[^}]*\\*[^}]*width[^}]*\\}",
              "message": "Multiply inside the f-string brackets"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Multiply inside the f-string brackets",
            "Your first output line should be: Area: 40 square units"
          ]
        },
        {
          "id": "u1t19p08",
          "kind": "code",
          "title": "Task 19.8 — Formatted student card",
          "brief": "Create name = \"Mira\", course = \"Python\", completed = 12 and total = 15. Use f-strings to print a five-line card: STUDENT CARD / Name: Mira / Course: Python / Progress: 12/15 / Remaining: 3. Calculate remaining inside an f-string.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "STUDENT CARD\nName: Mira\nCourse: Python\nProgress: 12/15\nRemaining: 3"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "f[\"\\']",
              "count": 4,
              "message": "Use f-strings for the detail lines"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\{[^}]*total[^}]*-[^}]*completed[^}]*\\}",
              "message": "Calculate remaining inside {}"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use f-strings for the detail lines Also remember: calculate remaining inside {}.",
            "Your first output line should be: STUDENT CARD"
          ]
        }
      ]
    },
    {
      "id": "u1t20",
      "title": "The sys Module and Command-Line Arguments",
      "summary": "Handing your program a briefcase of instructions before it even starts.",
      "notebookLM": "",
      "notes": "\n      <h4>The toolbox for talking to the system</h4>\n      <p>Think of your operating system as a house, and Python as a worker inside it. By\n      default the worker has only basic tools. To talk to the house itself, it needs a special\n      toolbox.</p>\n      <p>That toolbox is called <strong>sys</strong>, short for system. Open it the usual way:</p>\n      <pre><code>import sys</code></pre>\n\n      <h4>The briefcase</h4>\n      <p>A secret agent is leaving on a mission. Before he walks out, his boss hands him a\n      briefcase of instructions. He does not have to stop and phone in to ask what to do — he\n      already has everything.</p>\n      <p><strong>Command-line arguments</strong> are that briefcase. You hand data to your\n      program at the moment you start it.</p>\n\n      <p>Normally you run a file like this:</p>\n      <pre><code>python script.py</code></pre>\n      <p>But you can hand it extra words:</p>\n      <pre><code>python script.py Sarah 25</code></pre>\n\n      <h4>Opening the briefcase — sys.argv</h4>\n      <p>Inside your code, those words arrive in a list called <code>sys.argv</code>, short\n      for <em>argument values</em>.</p>\n\n      <pre><code>import sys\n\nprint(sys.argv[0])     # script.py   ← always the file name\nprint(sys.argv[1])     # Sarah\nprint(sys.argv[2])     # 25</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Words typed after the file name arrive inside the sys.argv list, starting with the file name at position zero.\">\n        <rect class=\"box box--dark\" x=\"8\" y=\"34\" width=\"684\" height=\"46\" rx=\"7\"/>\n        <text x=\"28\" y=\"63\" class=\"mono on-dark\" style=\"font-size:14px\">&gt; python script.py Sarah 25</text>\n\n        <path class=\"arrow\" d=\"M200 86 v22\"/><path class=\"accent\" d=\"M200 118 l-7 -13 h14 z\"/>\n        <path class=\"arrow\" d=\"M330 86 v22\"/><path class=\"accent\" d=\"M330 118 l-7 -13 h14 z\"/>\n        <path class=\"arrow\" d=\"M420 86 v22\"/><path class=\"accent\" d=\"M420 118 l-7 -13 h14 z\"/>\n\n        <rect class=\"box\" x=\"128\" y=\"124\" width=\"150\" height=\"46\" rx=\"6\"/>\n        <text x=\"203\" y=\"146\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">sys.argv[0]</text>\n        <text x=\"203\" y=\"163\" text-anchor=\"middle\" style=\"font-size:11px\">the file name</text>\n\n        <rect class=\"box\" x=\"288\" y=\"124\" width=\"118\" height=\"46\" rx=\"6\"/>\n        <text x=\"347\" y=\"146\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">sys.argv[1]</text>\n        <text x=\"347\" y=\"163\" text-anchor=\"middle\" style=\"font-size:11px\">\"Sarah\"</text>\n\n        <rect class=\"box\" x=\"416\" y=\"124\" width=\"118\" height=\"46\" rx=\"6\"/>\n        <text x=\"475\" y=\"146\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">sys.argv[2]</text>\n        <text x=\"475\" y=\"163\" text-anchor=\"middle\" style=\"font-size:11px\">\"25\"</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Two things to remember.</strong> Position <strong>0</strong> is always the file\n        name itself, never your first word. And everything arrives as <strong>text</strong> —\n        exactly like <code>input()</code> — so <code>sys.argv[2]</code> above holds\n        <code>\"25\"</code>, not the number 25. Wrap it in <code>int()</code> to do maths.\n      </div>\n\n      <h4>Who uses this?</h4>\n      <p>Mostly system administrators, and anyone automating a job. A program that resizes\n      1000 photos should not stop and ask a question 1000 times. You hand it the folder name\n      once, at the start, and walk away.</p>\n      <p>As a beginner you will use <code>input()</code> far more often. But you should know\n      this exists.</p>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">You run <code>python test.py Ravi</code>. What is in\n        <code>sys.argv[0]</code>?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Ravi</button>\n          <button data-o=\"1\">test.py</button>\n          <button data-o=\"2\">Nothing — the list is empty</button>\n        </div>\n        <p class=\"w__why\">Position 0 is always the name of the file being run. Your first real\n        argument, <code>Ravi</code>, sits at position 1. This catches almost everyone the first\n        time.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">You ran: <code>python app.py open 42</code></p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>sys.argv[0]</code></button>\n            <button data-pair=\"b\"><code>sys.argv[1]</code></button>\n            <button data-pair=\"c\"><code>sys.argv[2]</code></button>\n            <button data-pair=\"d\"><code>len(sys.argv)</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">\"42\" — as text, not a number</button>\n            <button data-pair=\"a\">\"app.py\"</button>\n            <button data-pair=\"d\">3</button>\n            <button data-pair=\"b\">\"open\"</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Three items in the list, counted from\n        zero, with the file name always first.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>Why there is no code task here.</strong> Command-line arguments only exist when\n        you run a real file from a real terminal. This page has no terminal. Do the confirm\n        task below on your own machine instead — that is the only way to see it work.\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 7 concept questions and 2 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Command-line arguments carry starting data</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>A script can receive values when it starts. The <code>sys.argv</code> list stores the script name first, followed by the words typed after it.</p><p>This is useful for automation because the user does not need to answer questions after the program begins.</p>\n      <h4>Worked example</h4>\n      <pre><code># greet.py\nimport sys\nprint(&quot;Script:&quot;, sys.argv[0])\nprint(&quot;Name:&quot;, sys.argv[1])\n\n# Run: python greet.py Riya</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Command-line arguments enter the program before the first Python line runs.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Type command</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">OS starts script</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">sys.argv stores words</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Program reads them</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Command-line arguments enter the program before the first Python line runs.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">In python greet.py Riya, what is sys.argv[1]?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">python</button><button data-o=\"1\">greet.py</button><button data-o=\"2\">Riya</button><button data-o=\"3\">1</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> <code>Riya</code>. Index 0 contains the script name.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What must you write to use tools that talk to your computer's system?",
          "options": [
            "start system",
            "import sys",
            "download sys",
            "open_toolbox"
          ],
          "answer": 1,
          "why": "import sys, at the top of the file. sys is part of the Standard Library, so nothing needs installing."
        },
        {
          "q": "What is a command-line argument?",
          "options": [
            "An argument you have with the computer when code crashes",
            "Words you type after the file name, to give the program instructions before it starts",
            "A way to make text bold",
            "A mathematical formula"
          ],
          "answer": 1,
          "why": "python script.py Sarah 25 — those extra words are handed to the program at the moment it starts, with no need to stop and ask."
        },
        {
          "q": "In sys.argv, what does position 0 always hold?",
          "options": [
            "The user's password",
            "The word True",
            "The name of the Python file itself",
            "The number 100"
          ],
          "answer": 2,
          "why": "Always the file name. Your first real argument is at position 1, which surprises nearly everybody the first time."
        },
        {
          "q": "You run python app.py 25 and want to do maths with the 25. What must you do first?",
          "options": [
            "Nothing, it is already a number",
            "Convert it with int(), because arguments arrive as text",
            "Restart the terminal",
            "Save the file again"
          ],
          "answer": 1,
          "why": "Just like input(), everything from the command line arrives as a string. int(sys.argv[1]) turns it into a real number."
        },
        {
          "q": "Which line imports the system module?",
          "options": [
            "import sys",
            "start sys",
            "download system",
            "open sys"
          ],
          "answer": 0,
          "why": "Use import sys."
        },
        {
          "q": "What is sys.argv[0]?",
          "options": [
            "The script file name",
            "The first password",
            "Always zero",
            "The Python version"
          ],
          "answer": 0,
          "why": "Item zero stores the script name."
        },
        {
          "q": "What type are argument values?",
          "options": [
            "Strings",
            "Always integers",
            "Always floats",
            "Booleans only"
          ],
          "answer": 0,
          "why": "Terminal arguments arrive as text."
        }
      ],
      "tasks": [
        {
          "id": "u1t20p01",
          "kind": "confirm",
          "title": "Task 20.1 — Hand your program a briefcase",
          "brief": "On your own machine, make a file test.py containing: import sys  then  print(sys.argv)  — run it as python test.py, then again as python test.py Sarah.",
          "label": "I ran it both ways. Plain, the list held only the file name. With <code>Sarah</code> added, the list held two items — and I could see the file name was still first.",
          "level": "Foundation Practice"
        },
        {
          "id": "u1t20p02",
          "kind": "code",
          "title": "Task 20.1 — Inspect argv",
          "brief": "Import sys and print the type name of sys.argv. Output: list",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "list"
            },
            {
              "type": "sourceIncludes",
              "value": "import sys",
              "message": "Import sys"
            },
            {
              "type": "sourceIncludes",
              "value": "sys.argv",
              "message": "Use sys.argv"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Apply the Idea",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Import sys Also remember: use sys.argv.",
            "Your first output line should be: list"
          ]
        }
      ]
    },
    {
      "id": "u1t21",
      "title": "Arithmetic and Assignment Operators",
      "summary": "Python as a calculator — including the two dividing tricks nobody expects.",
      "notebookLM": "",
      "notes": "\n      <h4>Nouns and verbs</h4>\n      <p>In English, a noun is a thing and a verb is an action. \"John kicks the ball.\"</p>\n      <p>In Python:</p>\n      <ul>\n        <li><strong>Operands</strong> are the nouns — the data.</li>\n        <li><strong>Operators</strong> are the verbs — the symbols that act on it.</li>\n      </ul>\n      <p>In <code>5 + 10</code>: the <code>5</code> and <code>10</code> are operands, and\n      <code>+</code> is the operator. Put together they form an <strong>expression</strong>.</p>\n\n      <h4>The everyday maths</h4>\n      <table>\n        <tr><th>Symbol</th><th>Name</th><th>Example</th><th>Answer</th></tr>\n        <tr><td><code>+</code></td><td>Add</td><td><code>5 + 2</code></td><td>7</td></tr>\n        <tr><td><code>-</code></td><td>Subtract</td><td><code>5 - 2</code></td><td>3</td></tr>\n        <tr><td><code>*</code></td><td>Multiply</td><td><code>5 * 2</code></td><td>10</td></tr>\n        <tr><td><code>/</code></td><td>Divide</td><td><code>5 / 2</code></td><td>2.5</td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>Notice.</strong> <code>/</code> always gives a decimal, even when it divides\n        perfectly. <code>10 / 2</code> gives <code>5.0</code>, not <code>5</code>.\n      </div>\n\n      <h4>The three special ones</h4>\n      <p>These are the ones exams love, and beginners forget.</p>\n\n      <p><strong><code>//</code> — floor division.</strong> Divides, then throws away the\n      decimal. How many <em>whole</em> times does 2 go into 5? Twice.</p>\n      <pre><code>print(5 // 2)      # 2\nprint(14 // 4)     # 3</code></pre>\n\n      <p><strong><code>%</code> — modulus, the remainder.</strong> You have 5 slices of pizza\n      and 2 people. Each gets 2 slices, and 1 slice is left in the box. That leftover is the\n      modulus.</p>\n      <pre><code>print(5 % 2)       # 1\nprint(14 % 4)      # 2</code></pre>\n\n      <p><strong><code>**</code> — power.</strong> <code>5 ** 2</code> means 5 squared.</p>\n      <pre><code>print(5 ** 2)      # 25\nprint(3 ** 4)      # 81</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 175\" role=\"img\" aria-label=\"Fourteen slices shared between four friends: three whole slices each with two left over.\">\n        <text x=\"350\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">14 slices shared between 4 friends</text>\n        <rect class=\"box\" x=\"8\" y=\"40\" width=\"330\" height=\"72\" rx=\"8\"/>\n        <text x=\"173\" y=\"70\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:15px\">14 // 4  =  3</text>\n        <text x=\"173\" y=\"96\" text-anchor=\"middle\" style=\"font-size:12.5px\">each friend gets 3 whole slices</text>\n\n        <rect x=\"362\" y=\"40\" width=\"330\" height=\"72\" rx=\"8\" fill=\"rgba(242,160,61,.16)\" stroke=\"#D67F19\" stroke-width=\"2.2\"/>\n        <text x=\"527\" y=\"70\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:15px\">14 % 4  =  2</text>\n        <text x=\"527\" y=\"96\" text-anchor=\"middle\" style=\"font-size:12.5px\">2 slices are left in the box</text>\n\n        <text x=\"350\" y=\"145\" text-anchor=\"middle\" style=\"font-size:12.5px\">Together they tell the whole story: 4 × 3 = 12, and 12 + 2 = 14</text>\n      </svg>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What appears?</p>\n        <pre><code>print(17 % 5)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">3</button>\n          <button data-o=\"1\">2</button>\n          <button data-o=\"2\">3.4</button>\n        </div>\n        <p class=\"w__why\">5 goes into 17 three times, which makes 15, and 2 are left over.\n        <code>%</code> gives you the leftover, so the answer is 2. If you wanted the 3, you\n        would use <code>17 // 5</code>.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>A trick worth knowing.</strong> <code>%</code> is how programmers test whether\n        a number is even. Any even number divided by 2 leaves nothing behind, so\n        <code>n % 2 == 0</code> means \"n is even\".\n      </div>\n\n      <h4>Assignment shortcuts</h4>\n      <p>You already know <code>=</code> puts data into a box. But suppose you earn 5 rupees.\n      You could write <code>wallet = wallet + 5</code>. Programmers are lazy, so there is a\n      shortcut.</p>\n      <table>\n        <tr><th>Shortcut</th><th>Means the same as</th></tr>\n        <tr><td><code>wallet += 5</code></td><td><code>wallet = wallet + 5</code></td></tr>\n        <tr><td><code>wallet -= 2</code></td><td><code>wallet = wallet - 2</code></td></tr>\n        <tr><td><code>wallet *= 2</code></td><td><code>wallet = wallet * 2</code></td></tr>\n        <tr><td><code>wallet /= 4</code></td><td><code>wallet = wallet / 4</code></td></tr>\n      </table>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Start with <code>n = 10</code>. What does each line leave behind?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>n += 5</code></button>\n            <button data-pair=\"b\"><code>n *= 3</code></button>\n            <button data-pair=\"c\"><code>n -= 10</code></button>\n            <button data-pair=\"d\"><code>n /= 4</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\">2.5</button>\n            <button data-pair=\"a\">15</button>\n            <button data-pair=\"c\">0</button>\n            <button data-pair=\"b\">30</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Notice the last one gives 2.5, not 2 —\n        because <code>/</code> always produces a decimal.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Operators are small action tools</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Arithmetic operators calculate values. Assignment operators store or update them. The shortcut <code>+=</code> means “take the old value, add something, and store the result back.”</p><p>Use temporary examples to check what each operator does before combining many of them.</p>\n      <h4>Worked example</h4>\n      <pre><code>coins = 10\ncoins += 5\ncoins *= 2\nprint(coins)  # 30</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Assignment shortcuts update the same variable step by step.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Start at 10</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Add 5</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Multiply by 2</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Print 30</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Assignment shortcuts update the same variable step by step.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"3\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">What is the final value?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">15</button><button data-o=\"1\">20</button><button data-o=\"2\">25</button><button data-o=\"3\">30</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> 10 becomes 15, then 15 × 2 becomes 30.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "In 10 * 4, what is the * called?",
          "options": [
            "The operand",
            "The operator",
            "The expression",
            "The variable"
          ],
          "answer": 1,
          "why": "The operator is the verb — the symbol doing the work. The 10 and the 4 are the operands."
        },
        {
          "q": "What is 10 % 3?",
          "options": [
            "3.33",
            "9",
            "1",
            "13"
          ],
          "answer": 2,
          "why": "3 goes into 10 three times, making 9, and 1 is left over. % gives you the leftover."
        },
        {
          "q": "What does score += 10 do?",
          "options": [
            "Checks whether score is 10",
            "Adds 10 to whatever score currently holds",
            "Sets score to exactly 10",
            "Crashes the program"
          ],
          "answer": 1,
          "why": "It is a shortcut for score = score + 10."
        },
        {
          "q": "What is 7 // 2?",
          "options": [
            "3.5",
            "3",
            "4",
            "1"
          ],
          "answer": 1,
          "why": "Floor division throws the decimal away. 7 / 2 would be 3.5, but // chops it down to 3."
        }
      ],
      "tasks": [
        {
          "id": "u1t21p01",
          "kind": "code",
          "title": "Task 21.1 — The pizza party",
          "brief": "14 slices, 4 friends. On two lines print: how many WHOLE slices each friend gets, then how many slices are left in the box.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3\n2"
            },
            {
              "type": "sourceIncludes",
              "value": "//",
              "message": "Use floor division //"
            },
            {
              "type": "sourceIncludes",
              "value": "%",
              "message": "Use modulus %"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use floor division // Also remember: use modulus %.",
            "Your first output line should be: 3"
          ]
        },
        {
          "id": "u1t21p02",
          "kind": "code",
          "title": "Task 21.2 — Power up",
          "brief": "Print 3 to the power of 4 (that is 3 × 3 × 3 × 3) using the power operator.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "81"
            },
            {
              "type": "sourceIncludes",
              "value": "**",
              "message": "Use the ** operator"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the ** operator",
            "Your first output line should be: 81"
          ]
        },
        {
          "id": "u1t21p03",
          "kind": "code",
          "title": "Task 21.3 — The bank account",
          "brief": "Start with bank_balance = 100. Use a shortcut operator to take away 40. Then use another shortcut to double what is left. Print the final balance.",
          "starter": "bank_balance = 100\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "120"
            },
            {
              "type": "sourceIncludes",
              "value": "-=",
              "message": "Use the -= shortcut"
            },
            {
              "type": "sourceIncludes",
              "value": "*=",
              "message": "Use the *= shortcut"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*120\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use the -= shortcut Also remember: use the *= shortcut.",
            "Your first output line should be: 120"
          ]
        },
        {
          "id": "u1t21p04",
          "kind": "code",
          "title": "Task 21.2 — Score power-up",
          "brief": "Start score at 5. Use *= 2, then += 3, and print 13. On the next line print 3 to the power of 4, which is 81.",
          "starter": "score = 5\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "13\n81"
            },
            {
              "type": "sourceIncludes",
              "value": "*=",
              "message": "Use *="
            },
            {
              "type": "sourceIncludes",
              "value": "+=",
              "message": "Use +="
            },
            {
              "type": "sourceIncludes",
              "value": "**",
              "message": "Use **"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use *= Also remember: use +=.",
            "Your first output line should be: 13"
          ]
        },
        {
          "kind": "code",
          "title": "Whole groups and leftovers",
          "brief": "For 28 items packed into groups of 5, print the number of full groups and then the leftover items.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5\n3"
            },
            {
              "type": "sourceIncludes",
              "value": "//",
              "message": "Use floor division"
            },
            {
              "type": "sourceIncludes",
              "value": "%",
              "message": "Use modulus"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t21p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use floor division Also remember: use modulus.",
            "Your first output line should be: 5"
          ]
        },
        {
          "id": "u1t21p06",
          "kind": "code",
          "title": "Task 21.6 — Even-number test",
          "brief": "Create number = 26. Print number % 2, then print number % 2 == 0.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0\nTrue"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "%",
              "count": 2,
              "message": "Use modulus in both checks"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use modulus in both checks",
            "Your first output line should be: 0"
          ]
        },
        {
          "id": "u1t21p07",
          "kind": "code",
          "title": "Task 21.7 — Split the bill",
          "brief": "Create total_bill = 84. Use floor division to print the whole amount for each of 5 friends, then modulus to print the leftover.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "16\n4"
            },
            {
              "type": "sourceIncludes",
              "value": "//",
              "message": "Use floor division"
            },
            {
              "type": "sourceIncludes",
              "value": "%",
              "message": "Use modulus"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*16\\s*\\)|print\\(\\s*4\\s*\\)",
              "message": "Calculate both values from total_bill"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Use floor division Also remember: use modulus.",
            "Your first output line should be: 16"
          ]
        },
        {
          "id": "u1t21p08",
          "kind": "code",
          "title": "Task 21.8 — Operator workout",
          "brief": "Start energy = 10. Use += 5, *= 2, -= 6 and /= 3 in that order. Print the result. Then print 2 ** 5, 37 // 6 and 37 % 6 on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "8.0\n32\n6\n1"
            },
            {
              "type": "sourceIncludes",
              "value": "+=",
              "message": "Use +="
            },
            {
              "type": "sourceIncludes",
              "value": "*=",
              "message": "Use *="
            },
            {
              "type": "sourceIncludes",
              "value": "-=",
              "message": "Use -="
            },
            {
              "type": "sourceIncludes",
              "value": "/=",
              "message": "Use /="
            },
            {
              "type": "sourceIncludes",
              "value": "**",
              "message": "Use exponentiation"
            },
            {
              "type": "sourceIncludes",
              "value": "//",
              "message": "Use floor division"
            },
            {
              "type": "sourceIncludes",
              "value": "%",
              "message": "Use modulus"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use += Also remember: use *=.",
            "Your first output line should be: 8.0"
          ]
        }
      ]
    },
    {
      "id": "u1t22",
      "title": "Comparison and Logical Operators",
      "summary": "Asking Python questions. Every answer is True or False.",
      "notebookLM": "",
      "notes": "\n      <h4>The rollercoaster sign</h4>\n      <p>At a theme park a sign says: <em>you must be taller than 120 cm to ride</em>. The\n      attendant compares your height to the sign, and the answer is yes or no.</p>\n      <p>Every operator in this topic gives you exactly one of two answers:\n      <code>True</code> or <code>False</code>.</p>\n\n      <h4>Comparison operators</h4>\n      <table>\n        <tr><th>Symbol</th><th>Question it asks</th><th>Example</th><th>Answer</th></tr>\n        <tr><td><code>==</code></td><td>Are these equal?</td><td><code>5 == 5</code></td><td>True</td></tr>\n        <tr><td><code>!=</code></td><td>Are these different?</td><td><code>5 != 10</code></td><td>True</td></tr>\n        <tr><td><code>&gt;</code></td><td>Is the left one bigger?</td><td><code>10 &gt; 5</code></td><td>True</td></tr>\n        <tr><td><code>&lt;</code></td><td>Is the left one smaller?</td><td><code>2 &lt; 8</code></td><td>True</td></tr>\n        <tr><td><code>&gt;=</code></td><td>Bigger, or the same?</td><td><code>18 &gt;= 18</code></td><td>True</td></tr>\n        <tr><td><code>&lt;=</code></td><td>Smaller, or the same?</td><td><code>3 &lt;= 2</code></td><td>False</td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>One equals sign or two?</strong> This is the most common mix-up in\n        programming.<br>\n        <code>age = 18</code> — one sign. <em>Puts</em> 18 into age.<br>\n        <code>age == 18</code> — two signs. <em>Asks</em> whether age is 18.\n      </div>\n\n      <h4>Logical operators</h4>\n      <p>Often you need to check more than one thing at once.</p>\n\n      <p><strong><code>and</code></strong> — <em>both</em> sides must be True. You need a\n      ticket <em>and</em> an ID to enter the concert.</p>\n      <p><strong><code>or</code></strong> — only <em>one</em> side needs to be True. You may\n      pay by cash <em>or</em> by card.</p>\n      <p><strong><code>not</code></strong> — flips the answer over.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"Truth tables for and, or, and not.\">\n        <text x=\"120\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">and — both</text>\n        <rect class=\"box\" x=\"8\" y=\"36\" width=\"224\" height=\"128\" rx=\"7\"/>\n        <text x=\"30\" y=\"62\" class=\"mono\" style=\"font-size:12px\">True  and True  = True</text>\n        <text x=\"30\" y=\"86\" class=\"mono\" style=\"font-size:12px\">True  and False = False</text>\n        <text x=\"30\" y=\"110\" class=\"mono\" style=\"font-size:12px\">False and True  = False</text>\n        <text x=\"30\" y=\"134\" class=\"mono\" style=\"font-size:12px\">False and False = False</text>\n\n        <text x=\"350\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">or — either</text>\n        <rect class=\"box\" x=\"238\" y=\"36\" width=\"224\" height=\"128\" rx=\"7\"/>\n        <text x=\"260\" y=\"62\" class=\"mono\" style=\"font-size:12px\">True  or True  = True</text>\n        <text x=\"260\" y=\"86\" class=\"mono\" style=\"font-size:12px\">True  or False = True</text>\n        <text x=\"260\" y=\"110\" class=\"mono\" style=\"font-size:12px\">False or True  = True</text>\n        <text x=\"260\" y=\"134\" class=\"mono\" style=\"font-size:12px\">False or False = False</text>\n\n        <text x=\"580\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">not — flip</text>\n        <rect class=\"box box--dark\" x=\"468\" y=\"36\" width=\"224\" height=\"128\" rx=\"7\"/>\n        <text x=\"490\" y=\"80\" class=\"mono on-dark\" style=\"font-size:12px\">not True  = False</text>\n        <text x=\"490\" y=\"112\" class=\"mono on-dark\" style=\"font-size:12px\">not False = True</text>\n      </svg>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What is the final answer?</p>\n        <pre><code>print((5 > 2) and (10 < 5))</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">True</button>\n          <button data-o=\"1\">False</button>\n          <button data-o=\"2\">An error</button>\n        </div>\n        <p class=\"w__why\">The first half is True, but 10 is not less than 5, so the second half\n        is False. <code>and</code> needs <em>both</em> sides to be True — so the whole thing is\n        False.</p>\n      </div>\n\n      <h4>Identity — <code>is</code> and <code>is not</code></h4>\n      <p>Think of identical twins. They look exactly the same, so they are <em>equal</em>. But\n      they are not the <em>same person</em>.</p>\n      <p><code>==</code> asks \"do these look the same?\". <code>is</code> asks \"are these\n      literally the same object in memory?\".</p>\n      <p>For now, the rule of thumb: use <code>==</code> for comparing values, and keep\n      <code>is</code> for checking <code>None</code>, like <code>if winner is None:</code>.</p>\n\n      <h4>Membership — <code>in</code> and <code>not in</code></h4>\n      <p>You are at the door of a party with a guest list. You look at a name and check\n      whether it is on the list.</p>\n      <pre><code>name = \"Batman\"\n\nprint(\"Bat\" in name)         # True\nprint(\"Joker\" in name)       # False\n\nfruits = [\"Apple\", \"Mango\"]\nprint(\"Mango\" in fruits)     # True\nprint(\"Kiwi\" not in fruits)  # True</code></pre>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">What is each expression's answer?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>18 &gt;= 21</code></button>\n            <button data-pair=\"b\"><code>100 == 100 and 50 != 40</code></button>\n            <button data-pair=\"c\"><code>False or True</code></button>\n            <button data-pair=\"d\"><code>not (5 &gt; 3)</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">True — or only needs one side</button>\n            <button data-pair=\"a\">False — 18 is not 21 or more</button>\n            <button data-pair=\"d\">False — it flips a True</button>\n            <button data-pair=\"b\">True — both sides are true</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Work out each side first, then apply the\n        <code>and</code>, <code>or</code> or <code>not</code>.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Comparisons ask questions</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>A comparison produces <code>True</code> or <code>False</code>. Logical operators combine several questions into one decision.</p><p>Use <code>and</code> when every rule must pass, <code>or</code> when at least one may pass, and <code>not</code> to reverse a Boolean result.</p>\n      <h4>Worked example</h4>\n      <pre><code>age = 20\nhas_id = True\ncan_enter = age &gt;= 18 and has_id\nprint(can_enter)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Comparisons create Boolean answers; logical operators connect those answers.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Check age</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Check ID</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Combine with and</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Return Boolean</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Comparisons create Boolean answers; logical operators connect those answers.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\"><code>and</code></button><button data-pair=\"p1\"><code>or</code></button><button data-pair=\"p2\"><code>not</code></button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p2\">Reverses true and false</button><button data-pair=\"p1\">At least one side must be true</button><button data-pair=\"p0\">Both sides must be true</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What is the difference between = and == ?",
          "options": [
            "There is no difference",
            "= checks equality, == creates a variable",
            "= puts data into a variable, == asks whether two things are equal",
            "== is only used for maths"
          ],
          "answer": 2,
          "why": "One sign assigns, two signs ask a question. Mixing them up is the most common beginner mistake in every language that has both."
        },
        {
          "q": "What is the answer to (5 > 2) and (10 < 5)?",
          "options": [
            "True",
            "False",
            "10",
            "An error"
          ],
          "answer": 1,
          "why": "The second half is false, and 'and' demands that both halves are true. So the whole expression is False."
        },
        {
          "q": "You want to check whether the letter 'a' appears inside the word 'Apple'. Which operator?",
          "options": [
            "is",
            "==",
            "in",
            "has"
          ],
          "answer": 2,
          "why": "The membership operator, in. It works on text and on lists."
        },
        {
          "q": "What does not False give?",
          "options": [
            "False",
            "True",
            "None",
            "An error"
          ],
          "answer": 1,
          "why": "not simply flips the answer over. not True gives False, and not False gives True."
        }
      ],
      "tasks": [
        {
          "id": "u1t22p01",
          "kind": "code",
          "title": "Task 22.1 — The bouncer",
          "brief": "Print the answer to the question: is 18 greater than or equal to 21? (It should print False.)",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": ">=",
              "message": "Use the >= operator"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the >= operator",
            "Your first output line should be: False"
          ]
        },
        {
          "id": "u1t22p02",
          "kind": "code",
          "title": "Task 22.2 — Two checks at once",
          "brief": "In one print statement, check whether 100 equals 100 AND 50 is different from 40.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "and",
              "message": "Use the and operator"
            },
            {
              "type": "sourceIncludes",
              "value": "!=",
              "message": "Use the != operator"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use the and operator Also remember: use the != operator.",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t22p03",
          "kind": "code",
          "title": "Task 22.3 — The guest list",
          "brief": "Make a variable vowels holding the text aeiou. Print whether the letter e is in it, then print whether the letter z is NOT in it. Two lines, both should be True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "in ",
              "message": "Use the in operator"
            },
            {
              "type": "sourceIncludes",
              "value": "not in",
              "message": "Use not in for the second line"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use the in operator Also remember: use not in for the second line.",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t22p04",
          "kind": "code",
          "title": "Task 22.2 — Discount access",
          "brief": "Set is_vip=False and has_coupon=True. Print whether either condition gives a discount. Output: True",
          "starter": "is_vip = False\nhas_coupon = True\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "or",
              "message": "Use or"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use or",
            "Your first output line should be: True"
          ]
        },
        {
          "kind": "code",
          "title": "Flip the answer with not",
          "brief": "Set is_raining = False. Print not is_raining. The output must be True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceRegex",
              "pattern": "not\\s+is_raining",
              "message": "Use the not operator"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "id": "u1t22p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use the not operator",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t22p06",
          "kind": "code",
          "title": "Task 22.6 — Same object or equal value",
          "brief": "Create a = [1, 2], b = a and c = [1, 2]. Print a == c, a is b, and a is c.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nTrue\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "==",
              "message": "Compare equal values"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\sis\\s",
              "count": 2,
              "message": "Use is twice"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Compare equal values Also remember: use is twice.",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t22p07",
          "kind": "code",
          "title": "Task 22.7 — Access check",
          "brief": "Create has_id = True, has_ticket = False and is_vip = True. Print whether a person can enter when they need an ID AND either a ticket OR VIP status.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "and",
              "message": "Use and"
            },
            {
              "type": "sourceIncludes",
              "value": "or",
              "message": "Use or"
            },
            {
              "type": "sourceRegex",
              "pattern": "has_id[^\\n]*and[^\\n]*\\([^\\n]*has_ticket[^\\n]*or[^\\n]*is_vip",
              "message": "Combine the three conditions clearly"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Use and Also remember: use or.",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t22p08",
          "kind": "code",
          "title": "Task 22.8 — Boolean student status",
          "brief": "Create age = 19, marks = 72, attendance = 80 and subjects = [\"Python\", \"Math\"]. Print five lines: age >= 18, marks >= 60, attendance >= 75, \"Python\" in subjects, and the combined result using and for all four checks.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nTrue\nTrue\nTrue\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "in subjects",
              "message": "Use membership on subjects"
            },
            {
              "type": "sourceMinMatches",
              "pattern": ">=",
              "count": 3,
              "message": "Use the three comparison checks"
            },
            {
              "type": "sourceIncludes",
              "value": "and",
              "message": "Combine all checks with and"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use membership on subjects Also remember: use the three comparison checks.",
            "Your first output line should be: True"
          ]
        }
      ]
    },
    {
      "id": "u1t23",
      "title": "Operator Precedence",
      "summary": "Who goes first at the crossroads — and the brackets that overrule everyone.",
      "notebookLM": "",
      "notes": "\n      <h4>Bitwise operators — a quick look</h4>\n      <p>Deep inside your computer everything is 1s and 0s. <strong>Bitwise operators</strong>\n      let you reach in and flip those individual switches.</p>\n      <p>The symbols are <code>&amp;</code>, <code>|</code>, <code>~</code>,\n      <code>&lt;&lt;</code> and <code>&gt;&gt;</code>.</p>\n      <div class=\"callout\">\n        <strong>You will almost never use these in first year.</strong> They belong to\n        engineers writing code for hardware and robotics. Just know they exist, and do not\n        confuse <code>&amp;</code> with <code>and</code>, or <code>|</code> with <code>or</code>.\n      </div>\n\n      <h4>The traffic light</h4>\n      <p>Four cars reach a crossroads at the same moment. Who goes first? Without rules there\n      is a crash.</p>\n      <p>Maths has the same problem, and the same answer: <strong>an order of\n      operations</strong>. You may know it as BODMAS. Python follows exactly the same rules.</p>\n\n      <table>\n        <tr><th>Order</th><th>What</th></tr>\n        <tr><td>1st</td><td>Brackets <code>( )</code></td></tr>\n        <tr><td>2nd</td><td>Powers <code>**</code></td></tr>\n        <tr><td>3rd</td><td>Multiply <code>*</code>, divide <code>/</code>, floor <code>//</code>, modulus <code>%</code></td></tr>\n        <tr><td>4th</td><td>Add <code>+</code> and subtract <code>-</code></td></tr>\n        <tr><td>5th</td><td>Comparisons <code>&lt;</code> <code>&gt;</code> <code>==</code> <code>!=</code></td></tr>\n        <tr><td>6th</td><td><code>not</code>, then <code>and</code>, then <code>or</code></td></tr>\n      </table>\n\n      <pre><code>print(10 + 5 * 2)      # 20, not 30</code></pre>\n      <p>Python multiplies <code>5 * 2</code> first, getting 10, then adds the other 10. If it\n      simply read left to right the answer would have been 30 — and that would be wrong.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Without brackets multiplication happens first; with brackets the addition happens first.\">\n        <text x=\"168\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">No brackets</text>\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"320\" height=\"118\" rx=\"8\"/>\n        <text x=\"168\" y=\"70\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:15px\">10 + 5 * 2</text>\n        <text x=\"168\" y=\"98\" text-anchor=\"middle\" style=\"font-size:12px\">multiply first → 10 + 10</text>\n        <text x=\"168\" y=\"130\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:17px\">20</text>\n\n        <text x=\"532\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">With brackets</text>\n        <rect x=\"372\" y=\"38\" width=\"320\" height=\"118\" rx=\"8\" fill=\"rgba(242,160,61,.16)\" stroke=\"#D67F19\" stroke-width=\"2.2\"/>\n        <text x=\"532\" y=\"70\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:15px\">(10 + 5) * 2</text>\n        <text x=\"532\" y=\"98\" text-anchor=\"middle\" style=\"font-size:12px\">brackets first → 15 * 2</text>\n        <text x=\"532\" y=\"130\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:17px\">30</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>The professional habit.</strong> Experienced programmers add brackets even when\n        the rules do not require them, just to make the meaning obvious to the next reader.\n        <code>(a * b) + c</code> is never wrong, and never confusing.\n      </div>\n\n      <h4>Associativity — the tie-breaker</h4>\n      <p>What if two operators have the same rank? <code>100 / 10 / 2</code> — division ties\n      with division.</p>\n      <p><strong>Almost everything reads left to right</strong>, like a book. So Python does\n      <code>100 / 10</code> first, giving 10, then <code>10 / 2</code>, giving 5.0.</p>\n      <p><strong>Powers are the exception</strong> — they read right to left.\n      <code>2 ** 3 ** 2</code> is <code>2 ** 9</code>, which is 512, not 64.</p>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What appears?</p>\n        <pre><code>print(100 / (10 + 10) * 2)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">10.0</button>\n          <button data-o=\"1\">2.5</button>\n          <button data-o=\"2\">250.0</button>\n        </div>\n        <p class=\"w__why\">Brackets first: 10 + 10 = 20. Then left to right: 100 / 20 = 5.0,\n        then 5.0 × 2 = 10.0. The decimal point is there because <code>/</code> always makes a\n        float.</p>\n      </div>\n\n      <h4>Building bigger expressions</h4>\n      <p>One small Lego brick is fine. Snap a hundred together and you have a castle.</p>\n      <p>You can combine everything you have learnt into one long expression, and Python will\n      patiently work through it using the traffic-light rules.</p>\n      <pre><code>result = (5 + 5) >= 10 and (20 % 2) == 0\n\n# step 1: brackets     → 10 >= 10 and 0 == 0\n# step 2: comparisons  → True and True\n# step 3: the and      → True</code></pre>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Same numbers, different brackets. Match each to its answer.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>2 + 3 * 4</code></button>\n            <button data-pair=\"b\"><code>(2 + 3) * 4</code></button>\n            <button data-pair=\"c\"><code>2 * 3 ** 2</code></button>\n            <button data-pair=\"d\"><code>(2 * 3) ** 2</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\">36</button>\n            <button data-pair=\"a\">14</button>\n            <button data-pair=\"c\">18</button>\n            <button data-pair=\"b\">20</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Look at the last two closely. Without\n        brackets the power runs first (3² = 9, then ×2 = 18). With brackets the multiply runs\n        first (2×3 = 6, then squared = 36).</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Parentheses make the order visible</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Python follows precedence rules, but readers should not be forced to remember a long order. Parentheses show the intended grouping.</p><p>Solve the deepest parentheses first, then powers, multiplication or division, addition or subtraction, comparisons and logical operators.</p>\n      <h4>Worked example</h4>\n      <pre><code>result = (5 + 3) * 2\nprint(result)  # 16</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Parentheses make the calculation order clear to Python and to people.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Find parentheses</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Calculate inside</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Apply next operator</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Get final value</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Parentheses make the calculation order clear to Python and to people.</text>\n      </svg>\n    \n      \n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Quick game — predict first</span>\n        <p class=\"w__q\">What is (5 + 3) * 2?</p>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">11</button><button data-o=\"1\">13</button><button data-o=\"2\">16</button><button data-o=\"3\">20</button></div>\n        <p class=\"w__why\"><strong>Answer:</strong> The parentheses give 8 first, then 8 × 2 gives 16.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What is the answer to 5 + 2 * 3?",
          "options": [
            "21",
            "11",
            "10",
            "30"
          ],
          "answer": 1,
          "why": "Multiplication comes before addition, so 2 * 3 = 6 happens first, then 5 + 6 = 11."
        },
        {
          "q": "How do you force the addition to happen first in 5 + 2 * 3?",
          "options": [
            "Use a bitwise operator",
            "Put the addition in brackets: (5 + 2) * 3",
            "Put a # next to it",
            "You cannot change the order"
          ],
          "answer": 1,
          "why": "Brackets always win. They sit at the very top of the order of operations."
        },
        {
          "q": "What are bitwise operators mostly used for?",
          "options": [
            "Making text bold",
            "Building web pages",
            "Low-level work with 1s and 0s, in hardware and robotics",
            "Opening files"
          ],
          "answer": 2,
          "why": "They flip individual bits. Very useful for engineers, and almost never needed in a first-year course."
        },
        {
          "q": "What is 50 - 10 - 5?",
          "options": [
            "45",
            "35",
            "55",
            "30"
          ],
          "answer": 1,
          "why": "Same rank, so read left to right: 50 - 10 = 40, then 40 - 5 = 35."
        }
      ],
      "tasks": [
        {
          "id": "u1t23p01",
          "kind": "code",
          "title": "Task 23.1 — Let the rules decide",
          "brief": "Without using any brackets, write one print that multiplies 4 by 5 and then adds 10.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "30"
            },
            {
              "type": "sourceRegex",
              "pattern": "print\\([^()]*\\)",
              "message": "Do not use brackets around the maths"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Do not use brackets around the maths",
            "Your first output line should be: 30"
          ]
        },
        {
          "id": "u1t23p02",
          "kind": "code",
          "title": "Task 23.2 — Break the rules",
          "brief": "Same three numbers — 4, 5 and 10. Use brackets to force 5 + 10 to happen FIRST, then multiply that answer by 4.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "60"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\([^()]*\\+[^()]*\\)",
              "message": "Put the addition inside brackets"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Put the addition inside brackets",
            "Your first output line should be: 60"
          ]
        },
        {
          "id": "u1t23p03",
          "kind": "code",
          "title": "Task 23.3 — The grand composition",
          "brief": "In one print statement, check whether (10 * 2) is equal to 20 AND (50 / 2) is greater than 10.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "and",
              "message": "Use the and operator"
            },
            {
              "type": "sourceIncludes",
              "value": "==",
              "message": "Use == to compare"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use the and operator Also remember: use == to compare.",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t23p04",
          "kind": "code",
          "title": "Task 23.3 — Tie breakers",
          "brief": "Print 50 - 10 - 5. On the next line print 2 ** 3 ** 2. Output: 35 and 512.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "35\n512"
            },
            {
              "type": "sourceIncludes",
              "value": "**",
              "message": "Use exponentiation"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use exponentiation",
            "Your first output line should be: 35"
          ]
        },
        {
          "kind": "code",
          "title": "The right-to-left exception",
          "brief": "Print 2 ** 3 ** 2 exactly as written. Python should print 512.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "512"
            },
            {
              "type": "sourceRegex",
              "pattern": "2\\s*\\*\\*\\s*3\\s*\\*\\*\\s*2",
              "message": "Use the chained exponent expression"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*512\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "id": "u1t23p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use the chained exponent expression",
            "Your first output line should be: 512"
          ]
        },
        {
          "id": "u1t23p06",
          "kind": "code",
          "title": "Task 23.6 — Precedence comparison",
          "brief": "Print 10 + 2 * 5, then (10 + 2) * 5, then 100 / 10 / 2.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20\n60\n5.0"
            },
            {
              "type": "sourceRegex",
              "pattern": "10\\s*\\+\\s*2\\s*\\*\\s*5",
              "message": "Write the first expression without brackets"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\(\\s*10\\s*\\+\\s*2\\s*\\)\\s*\\*\\s*5",
              "message": "Use brackets in the second expression"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Write the first expression without brackets Also remember: use brackets in the second expression.",
            "Your first output line should be: 20"
          ]
        },
        {
          "id": "u1t23p07",
          "kind": "code",
          "title": "Task 23.7 — Build one composed check",
          "brief": "Create x = 4. Print one expression that is True only when x squared equals 16 AND x + 6 is greater than 9.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "**",
              "message": "Use exponentiation"
            },
            {
              "type": "sourceIncludes",
              "value": "and",
              "message": "Combine the comparisons with and"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "==|>",
              "count": 2,
              "message": "Use two comparisons"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Use exponentiation Also remember: combine the comparisons with and.",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1t23p08",
          "kind": "code",
          "title": "Task 23.8 — Order-of-operations puzzle board",
          "brief": "Print the results of these five expressions on separate lines: 2 + 3 * 4; (2 + 3) * 4; 2 ** 3 ** 2; (2 ** 3) ** 2; 100 / (10 + 10) * 2.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "14\n20\n512\n64\n10.0"
            },
            {
              "type": "stdoutLineCount",
              "value": 5,
              "message": "Print five results"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\(",
              "count": 7,
              "message": "Use print calls and the required grouping brackets"
            },
            {
              "type": "sourceIncludes",
              "value": "**",
              "message": "Include exponent expressions"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use print calls and the required grouping brackets Also remember: include exponent expressions.",
            "Your first output line should be: 14"
          ]
        }
      ]
    },
    {
      "id": "u1cp04",
      "title": "Revision Checkpoint 4 — Input, Formatting and Operators",
      "summary": "Mix input/output, formatting, sys and operator rules.",
      "notebookLM": "",
      "notes": "\n      <h4>Pause, mix and remember</h4>\n      <p>This checkpoint mixes ideas from <strong>Chapters 18–23</strong>. It does not teach a new syllabus topic. It checks whether the earlier ideas are still clear.</p>\n      <div class=\"callout\"><strong>How to use it:</strong> answer the mixed quiz without reopening earlier chapters. Then complete the activities. When something is difficult, return to only that chapter and try again.</div>\n      <h4>Checkpoint method</h4>\n      <ol><li>Read the full question.</li><li>Predict before running code.</li><li>Run and compare.</li><li>Fix one error at a time.</li></ol>\n    \n              <div class=\"callout\"><strong>Visual revision map.</strong> Use this picture before starting the checkpoint activities. Explain every arrow aloud in your own words.</div>\n              \n      <h4>Communication and operators</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A compact map connecting the ideas revised in this checkpoint.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Input</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Format output</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Calculate</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Compare</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A compact map connecting the ideas revised in this checkpoint.</text>\n      </svg>\n    \n              \n      <div class=\"w\">\n        <span class=\"w__k\">Checkpoint game — study cards</span>\n        <div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do first?</span><span class=\"w-flip__back\">Read the question and identify the concept.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do before running code?</span><span class=\"w-flip__back\">Predict the result or write the steps on paper.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do after an error?</span><span class=\"w-flip__back\">Read the final error line and fix one issue at a time.</span></button></div>\n      </div>\n    \n            ",
      "mcqs": [
        {
          "q": "Which setting controls what print places between several items?",
          "options": [
            "sep",
            "end",
            "input",
            "type"
          ],
          "answer": 0,
          "why": "sep is the separator."
        },
        {
          "q": "Which conversion is suitable for an entered price such as 19.75?",
          "options": [
            "dir()",
            "float()",
            "int() only",
            "bool()"
          ],
          "answer": 1,
          "why": "float keeps the decimal part."
        },
        {
          "q": "Which line is a modern formatted string?",
          "options": [
            "format score",
            "print = score",
            "f\"Score: {score}\"",
            "\"Score: %\""
          ],
          "answer": 2,
          "why": "An f before the quote enables expressions inside braces."
        },
        {
          "q": "After python app.py Ravi, where is Ravi inside sys.argv?",
          "options": [
            "Index 0",
            "Index -2 only",
            "It is not stored",
            "Index 1"
          ],
          "answer": 3,
          "why": "Index 0 is the file name, so the first supplied argument is index 1."
        },
        {
          "q": "What is 23 // 5?",
          "options": [
            "4",
            "3",
            "4.6",
            "5"
          ],
          "answer": 0,
          "why": "Floor division gives the number of complete groups."
        },
        {
          "q": "After making groups of 5 from 23 items, how many items remain?",
          "options": [
            "0",
            "3",
            "4",
            "4.6"
          ],
          "answer": 1,
          "why": "Modulus gives the remainder."
        },
        {
          "q": "Which expression is true?",
          "options": [
            "False or False",
            "not True",
            "(8 > 3) and (2 < 5)",
            "(8 < 3) and True"
          ],
          "answer": 2,
          "why": "Both comparisons in the first expression are true."
        },
        {
          "q": "Which is evaluated first in 4 + 3 * 2?",
          "options": [
            "4 + 3",
            "The left side only",
            "Nothing",
            "3 * 2"
          ],
          "answer": 3,
          "why": "Multiplication has higher precedence than addition."
        }
      ],
      "tasks": [
        {
          "id": "u1cp04p01",
          "kind": "code",
          "title": "Checkpoint bug fix — input type",
          "brief": "The user will enter 7. Fix the program so it prints 14.",
          "starter": "number = input(\"Number: \")\nprint(number + number)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "14"
            },
            {
              "type": "sourceIncludes",
              "value": "int(",
              "message": "Convert the input"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 1",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Convert the input",
            "Your first output line should be: 14"
          ]
        },
        {
          "id": "u1cp04p02",
          "kind": "code",
          "title": "Checkpoint bug fix — f-string",
          "brief": "Fix the line so it prints: Name: Mira",
          "starter": "name = \"Mira\"\nprint(\"Name: {name}\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Name: Mira"
            },
            {
              "type": "sourceRegex",
              "pattern": "f[\"\\']",
              "message": "Add the f before the string"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 2",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Add the f before the string",
            "Your first output line should be: Name: Mira"
          ]
        },
        {
          "id": "u1cp04p03",
          "kind": "code",
          "title": "Checkpoint operator practice",
          "brief": "Print the complete groups and leftover when 47 items are packed in groups of 6.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "7\n5"
            },
            {
              "type": "sourceIncludes",
              "value": "//",
              "message": "Use floor division"
            },
            {
              "type": "sourceIncludes",
              "value": "%",
              "message": "Use modulus"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 3",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use floor division Also remember: use modulus.",
            "Your first output line should be: 7"
          ]
        },
        {
          "id": "u1cp04p04",
          "kind": "code",
          "title": "Checkpoint formatting practice",
          "brief": "Create name = \"Asha\" and score = 82. Use one f-string to print: Asha scored 82 marks.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Asha scored 82 marks"
            },
            {
              "type": "sourceRegex",
              "pattern": "f[\"\\']",
              "message": "Use an f-string"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 4",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use an f-string",
            "Your first output line should be: Asha scored 82 marks"
          ]
        },
        {
          "id": "u1cp04p05",
          "kind": "code",
          "title": "Checkpoint challenge — expression card",
          "brief": "Create x = 5 and y = 3. Print four lines: x + y * 2, (x + y) * 2, x ** y, and whether x > y and y != 0.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "11\n16\n125\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "**",
              "message": "Use exponentiation"
            },
            {
              "type": "sourceIncludes",
              "value": "and",
              "message": "Use and"
            },
            {
              "type": "sourceIncludes",
              "value": "!=",
              "message": "Use !="
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 5",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use exponentiation Also remember: use and.",
            "Your first output line should be: 11"
          ]
        }
      ]
    },
    {
      "id": "u1t24",
      "title": "Built-in Number Tools",
      "summary": "The pocket calculator that is always switched on. No import needed.",
      "notebookLM": "",
      "notes": "\n      <h4>The pocket calculator</h4>\n      <p>At a shop you do not need a supercomputer to add up your bill. A small calculator\n      that adds, rounds and finds the biggest number is enough.</p>\n      <p>Python has a handful of number tools that are <strong>always ready</strong>. You do\n      not import anything. They simply work.</p>\n\n      <h4>abs() — the distance</h4>\n      <p>Walk 5 steps forward or 5 steps backward, and either way you walked 5 steps.\n      <code>abs()</code> removes the minus sign and gives you the plain distance.</p>\n      <pre><code>print(abs(-10))     # 10\nprint(abs(10))      # 10</code></pre>\n\n      <h4>round() — paying with cash</h4>\n      <p>Your bill is ₹4.99, so you think of it as ₹5.</p>\n      <pre><code>print(round(4.6))       # 5\nprint(round(4.2))       # 4\nprint(round(3.14159, 2))# 3.14   ← keep 2 decimal places</code></pre>\n\n      <h4>min() and max() — the winner and the loser</h4>\n      <pre><code>print(max(10, 50, 5))    # 50\nprint(min(10, 50, 5))    # 5</code></pre>\n\n      <h4>sum() — the shopping cart</h4>\n      <p>Give it a <strong>list</strong> and it adds everything up. The square brackets are\n      required.</p>\n      <pre><code>print(sum([10, 20, 30]))    # 60</code></pre>\n\n      <h4>pow() — power</h4>\n      <p><code>pow(x, y)</code> means x to the power of y. It does exactly the same job as the\n      <code>**</code> operator.</p>\n      <pre><code>print(pow(3, 2))     # 9\nprint(3 ** 2)        # 9  — same answer</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 200\" role=\"img\" aria-label=\"Five built-in number tools with an example of each.\">\n        <rect class=\"box\" x=\"8\" y=\"34\" width=\"216\" height=\"66\" rx=\"7\"/>\n        <text x=\"24\" y=\"60\" class=\"mono accent\" style=\"font-size:13px\">abs(-10)</text>\n        <text x=\"24\" y=\"84\" class=\"mono\" style=\"font-size:12.5px\">→ 10</text>\n\n        <rect class=\"box\" x=\"242\" y=\"34\" width=\"216\" height=\"66\" rx=\"7\"/>\n        <text x=\"258\" y=\"60\" class=\"mono accent\" style=\"font-size:13px\">round(4.6)</text>\n        <text x=\"258\" y=\"84\" class=\"mono\" style=\"font-size:12.5px\">→ 5</text>\n\n        <rect class=\"box\" x=\"476\" y=\"34\" width=\"216\" height=\"66\" rx=\"7\"/>\n        <text x=\"492\" y=\"60\" class=\"mono accent\" style=\"font-size:13px\">max(10, 50, 5)</text>\n        <text x=\"492\" y=\"84\" class=\"mono\" style=\"font-size:12.5px\">→ 50</text>\n\n        <rect class=\"box\" x=\"8\" y=\"110\" width=\"216\" height=\"66\" rx=\"7\"/>\n        <text x=\"24\" y=\"136\" class=\"mono accent\" style=\"font-size:13px\">min(10, 50, 5)</text>\n        <text x=\"24\" y=\"160\" class=\"mono\" style=\"font-size:12.5px\">→ 5</text>\n\n        <rect class=\"box\" x=\"242\" y=\"110\" width=\"216\" height=\"66\" rx=\"7\"/>\n        <text x=\"258\" y=\"136\" class=\"mono accent\" style=\"font-size:13px\">sum([10, 20, 30])</text>\n        <text x=\"258\" y=\"160\" class=\"mono\" style=\"font-size:12.5px\">→ 60</text>\n\n        <rect class=\"box\" x=\"476\" y=\"110\" width=\"216\" height=\"66\" rx=\"7\"/>\n        <text x=\"492\" y=\"136\" class=\"mono accent\" style=\"font-size:13px\">pow(3, 2)</text>\n        <text x=\"492\" y=\"160\" class=\"mono\" style=\"font-size:12.5px\">→ 9</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Watch the brackets on sum().</strong> <code>sum(10, 20, 30)</code> fails.\n        It needs a list: <code>sum([10, 20, 30])</code>. <code>max</code> and <code>min</code>\n        accept either form.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What appears?</p>\n        <pre><code>print(round(2.675, 2))</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">2.68</button>\n          <button data-o=\"1\">2.67</button>\n          <button data-o=\"2\">2.7</button>\n        </div>\n        <p class=\"w__why\">A famous surprise. Computers store decimals in binary, and 2.675 is\n        really stored as something a whisker below 2.675 — so it rounds down. You do not need\n        to fix this now, but remember it exists when money is involved.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which tool does each job?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Find the top score in a group</button>\n            <button data-pair=\"b\">Turn -15 into 15</button>\n            <button data-pair=\"c\">Add up a shopping list of prices</button>\n            <button data-pair=\"d\">Turn 8.7 into 9</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\"><code>sum()</code></button>\n            <button data-pair=\"a\"><code>max()</code></button>\n            <button data-pair=\"d\"><code>round()</code></button>\n            <button data-pair=\"b\"><code>abs()</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> None of these need an import — they are\n        built into Python itself.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Built-in tools summarize numbers quickly</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Functions such as <code>min()</code>, <code>max()</code>, <code>sum()</code>, <code>round()</code> and <code>abs()</code> solve common number jobs.</p><p>Choose the tool that matches the question. “What is the total?” suggests <code>sum()</code>. “What is the largest?” suggests <code>max()</code>.</p>\n      <h4>Worked example</h4>\n      <pre><code>marks = [72, 91, 84]\nprint(sum(marks))\nprint(max(marks))\nprint(round(sum(marks) / len(marks), 2))</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Built-in functions replace repeated manual work with one clear call.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Collect numbers</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Choose function</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Calculate result</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Display answer</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Built-in functions replace repeated manual work with one clear call.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\">Largest value</button><button data-pair=\"p1\">Total of values</button><button data-pair=\"p2\">Distance from zero</button><button data-pair=\"p3\">Control decimals</button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p3\"><code>round()</code></button><button data-pair=\"p2\"><code>abs()</code></button><button data-pair=\"p1\"><code>sum()</code></button><button data-pair=\"p0\"><code>max()</code></button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "Which tool finds the highest number in a group?",
          "options": [
            "top()",
            "max()",
            "high()",
            "sum()"
          ],
          "answer": 1,
          "why": "max() gives the biggest, min() gives the smallest. Both are built in."
        },
        {
          "q": "What does round(8.7) give?",
          "options": [
            "8.7",
            "8",
            "9",
            "An error"
          ],
          "answer": 2,
          "why": "0.7 is more than halfway, so it rounds up to 9."
        },
        {
          "q": "Why are abs(), max() and round() called \"built-in\"?",
          "options": [
            "They only work indoors",
            "They are built into the keyboard",
            "Python always has them ready — no import needed",
            "They are used to build websites"
          ],
          "answer": 2,
          "why": "Unlike math.sqrt() or statistics.mean(), these need no import line at all."
        },
        {
          "q": "Which is written correctly?",
          "options": [
            "sum(10, 20, 30)",
            "sum([10, 20, 30])",
            "sum{10, 20, 30}",
            "sum = 10 + 20 + 30"
          ],
          "answer": 1,
          "why": "sum() wants one list, so the numbers go inside square brackets."
        }
      ],
      "tasks": [
        {
          "id": "u1t24p01",
          "kind": "code",
          "title": "Task 24.1 — The robot's distance",
          "brief": "A robot moved -15 steps. Print the plain distance it travelled, as a positive number.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "abs(",
              "message": "Use abs()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use abs()",
            "Your first output line should be: 15"
          ]
        },
        {
          "id": "u1t24p02",
          "kind": "code",
          "title": "Task 24.2 — The high score",
          "brief": "Three scores are given. Print the highest one, then the lowest one, on two lines.",
          "starter": "score1 = 450\nscore2 = 900\nscore3 = 150\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "900\n150"
            },
            {
              "type": "sourceIncludes",
              "value": "max(",
              "message": "Use max()"
            },
            {
              "type": "sourceIncludes",
              "value": "min(",
              "message": "Use min()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use max() Also remember: use min().",
            "Your first output line should be: 900"
          ]
        },
        {
          "id": "u1t24p03",
          "kind": "code",
          "title": "Task 24.3 — The shopping cart",
          "brief": "Make a list called cart holding 5, 10 and 15. Print the total using sum(). Then on the next line print the total rounded... it is already whole, so just print how many items are in the cart.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "30\n3"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(",
              "message": "Use sum()"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use len() for the item count"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use sum() Also remember: use len() for the item count.",
            "Your first output line should be: 30"
          ]
        },
        {
          "id": "u1t24p04",
          "kind": "code",
          "title": "Task 24.4 — Round the bill",
          "brief": "A bill is 24.51. Print it rounded to the nearest whole number.",
          "starter": "bill = 24.51\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "25"
            },
            {
              "type": "sourceIncludes",
              "value": "round(",
              "message": "Use round()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*25\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use round()",
            "Your first output line should be: 25"
          ]
        },
        {
          "id": "u1t24p05",
          "kind": "code",
          "title": "Task 24.2 — Cart and power",
          "brief": "Create cart=[5,10,15]. Print its sum. On the next line print 5 to the power of 3 using pow(). Output: 30 and 125.",
          "starter": "cart = [5, 10, 15]\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "30\n125"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(",
              "message": "Use sum()"
            },
            {
              "type": "sourceIncludes",
              "value": "pow(",
              "message": "Use pow()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use sum() Also remember: use pow().",
            "Your first output line should be: 30"
          ]
        },
        {
          "id": "u1t24p06",
          "kind": "code",
          "title": "Task 24.6 — Number-tool shelf",
          "brief": "Using values = [-12, 4, 9, 15], print abs(values[0]), min(values), max(values) and sum(values), one per line.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "12\n-12\n15\n16"
            },
            {
              "type": "sourceIncludes",
              "value": "abs(",
              "message": "Use abs()"
            },
            {
              "type": "sourceIncludes",
              "value": "min(",
              "message": "Use min()"
            },
            {
              "type": "sourceIncludes",
              "value": "max(",
              "message": "Use max()"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(",
              "message": "Use sum()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use abs() Also remember: use min().",
            "Your first output line should be: 12"
          ]
        },
        {
          "id": "u1t24p07",
          "kind": "code",
          "title": "Task 24.7 — Controlled rounding",
          "brief": "Create value = 12.3456. Print round(value), round(value, 1), and round(value, 2).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "12\n12.3\n12.35"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "round\\(",
              "count": 3,
              "message": "Use round() three ways"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Use round() three ways",
            "Your first output line should be: 12"
          ]
        },
        {
          "id": "u1t24p08",
          "kind": "code",
          "title": "Task 24.8 — Built-in score summary",
          "brief": "Create scores = [72, 88, 91, 65, 84]. Print a six-line summary: count, total, highest, lowest, rounded average, and the absolute difference between highest and lowest. Use only built-in tools and arithmetic.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5\n400\n91\n65\n80\n26"
            },
            {
              "type": "sourceIncludes",
              "value": "len(scores)",
              "message": "Count the scores"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(scores)",
              "message": "Find the total"
            },
            {
              "type": "sourceIncludes",
              "value": "max(scores)",
              "message": "Find the highest"
            },
            {
              "type": "sourceIncludes",
              "value": "min(scores)",
              "message": "Find the lowest"
            },
            {
              "type": "sourceIncludes",
              "value": "round(",
              "message": "Round the average"
            },
            {
              "type": "sourceIncludes",
              "value": "abs(",
              "message": "Use abs() for the difference"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Count the scores Also remember: find the total.",
            "Your first output line should be: 5"
          ]
        }
      ]
    },
    {
      "id": "u1t25",
      "title": "The math Module",
      "summary": "The scientific calculator. Square roots, and the two ways to round on purpose.",
      "notebookLM": "",
      "notes": "\n      <h4>Upgrading the calculator</h4>\n      <p>Last topic gave you a pocket calculator. Sometimes you need a scientific one — square\n      roots, geometry, angles.</p>\n      <p>Python keeps those in the <strong>math</strong> module. It is a heavy toolbox, so it\n      stays shut until you ask for it:</p>\n      <pre><code>import math</code></pre>\n      <p>After that, every tool is <code>math.</code> followed by its name.</p>\n\n      <h4>math.sqrt() — the square root</h4>\n      <p>A square room has an area of 25 square metres. How long is one wall? Five metres.</p>\n      <pre><code>import math\nprint(math.sqrt(25))      # 5.0\nprint(math.sqrt(81))      # 9.0</code></pre>\n      <p>Notice it always gives a float — <code>5.0</code>, not <code>5</code>.</p>\n\n      <h4>math.ceil() — always round UP</h4>\n      <p>You worked out that you need 3.1 tins of paint. You cannot buy 0.1 of a tin. You must\n      buy 4, or you run out.</p>\n      <pre><code>print(math.ceil(3.1))     # 4\nprint(math.ceil(3.9))     # 4\nprint(math.ceil(3.0))     # 3</code></pre>\n\n      <h4>math.floor() — always round DOWN</h4>\n      <p>You have money for 3.9 slices of pizza. The shop will not give you 4. You get 3.</p>\n      <pre><code>print(math.floor(3.9))    # 3\nprint(math.floor(3.1))    # 3</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"ceil always rounds up, floor always rounds down, round goes to the nearest.\">\n        <text x=\"120\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">math.ceil</text>\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"216\" height=\"120\" rx=\"8\"/>\n        <text x=\"116\" y=\"70\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:13px\">3.1 → 4</text>\n        <text x=\"116\" y=\"96\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:13px\">3.9 → 4</text>\n        <text x=\"116\" y=\"130\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12px\">always UP</text>\n\n        <text x=\"350\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">math.floor</text>\n        <rect class=\"box\" x=\"242\" y=\"38\" width=\"216\" height=\"120\" rx=\"8\"/>\n        <text x=\"350\" y=\"70\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:13px\">3.1 → 3</text>\n        <text x=\"350\" y=\"96\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:13px\">3.9 → 3</text>\n        <text x=\"350\" y=\"130\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12px\">always DOWN</text>\n\n        <text x=\"580\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">round</text>\n        <rect class=\"box box--dark\" x=\"476\" y=\"38\" width=\"216\" height=\"120\" rx=\"8\"/>\n        <text x=\"584\" y=\"70\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:13px\">3.1 → 3</text>\n        <text x=\"584\" y=\"96\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:13px\">3.9 → 4</text>\n        <text x=\"584\" y=\"130\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12px\">to the NEAREST</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Three different jobs.</strong> <code>round()</code> goes to whichever side is\n        closer. <code>ceil()</code> and <code>floor()</code> ignore closeness completely —\n        one always goes up, the other always goes down. Choose by what the real situation\n        needs, not by which number looks nicer.\n      </div>\n\n      <h4>The rest of the toolbox</h4>\n      <table>\n        <tr><th>Tool</th><th>What it does</th><th>Used for</th></tr>\n        <tr><td><code>math.pi</code></td><td>3.14159… (no brackets — it is a value, not a tool)</td><td>Circles</td></tr>\n        <tr><td><code>math.pow(3, 2)</code></td><td>3 to the power of 2</td><td>Same as <code>**</code></td></tr>\n        <tr><td><code>math.log()</code></td><td>Logarithms</td><td>Earthquakes, sound levels</td></tr>\n        <tr><td><code>math.sin()</code>, <code>math.cos()</code>, <code>math.tan()</code></td><td>Trigonometry</td><td>Angles — very common in game programming</td></tr>\n      </table>\n\n      <h4>Polynomials</h4>\n      <p>A polynomial is just an expression with a variable and powers in it, like\n      2x² + 3x + 1. Python needs no special tool — ordinary operators do the job.</p>\n      <pre><code>x = 4\nanswer = 2 * (x ** 2) + (3 * x) + 1\nprint(answer)      # 45</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">You need 5.01 tins of paint. Which tool gives you the number of tins to buy?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">math.ceil — gives 6</button>\n          <button data-o=\"1\">math.floor — gives 5</button>\n          <button data-o=\"2\">round — gives 5</button>\n        </div>\n        <p class=\"w__why\">Both <code>floor</code> and <code>round</code> give 5, and you would\n        run out of paint with a tiny patch of wall left bare. Whenever running short is not an\n        option, use <code>ceil</code>.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which tool for which real problem?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">How many buses for 130 students, 50 per bus?</button>\n            <button data-pair=\"b\">How long is one wall of a 144 m² square room?</button>\n            <button data-pair=\"c\">How many whole pizzas can I afford with 3.8 pizzas of money?</button>\n            <button data-pair=\"d\">What is the circumference of a circle?</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"b\"><code>math.sqrt()</code></button>\n            <button data-pair=\"d\"><code>math.pi</code></button>\n            <button data-pair=\"a\"><code>math.ceil()</code></button>\n            <button data-pair=\"c\"><code>math.floor()</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> The bus one matters: 130 ÷ 50 is 2.6\n        buses, and you cannot send 0.6 of a bus — so you book 3.</p>\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: The math module handles scientific calculations</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>The <code>math</code> module contains functions and constants for common mathematical work. Import it once near the top of the file.</p><p>Function names explain the operation: <code>sqrt()</code> finds a square root, <code>ceil()</code> moves up and <code>floor()</code> moves down.</p>\n      <h4>Worked example</h4>\n      <pre><code>import math\nprint(math.sqrt(144))\nprint(math.ceil(4.2))\nprint(math.floor(4.8))\nprint(math.pi)</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A module groups related tools and keeps their names organised.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Import math</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Choose function</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Pass number</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Receive result</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A module groups related tools and keeps their names organised.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\">Square root</button><button data-pair=\"p1\">Round upward</button><button data-pair=\"p2\">Round downward</button><button data-pair=\"p3\">Circle constant</button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p3\"><code>math.pi</code></button><button data-pair=\"p2\"><code>math.floor()</code></button><button data-pair=\"p1\"><code>math.ceil()</code></button><button data-pair=\"p0\"><code>math.sqrt()</code></button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "What must you write before using sqrt() or ceil()?",
          "options": [
            "start math",
            "import math",
            "open calculator",
            "math.on()"
          ],
          "answer": 1,
          "why": "import math, at the top of the file. It is part of the Standard Library, so nothing needs downloading."
        },
        {
          "q": "What does math.ceil(8.2) give?",
          "options": [
            "8.2",
            "8",
            "9",
            "8.5"
          ],
          "answer": 2,
          "why": "ceil always rounds up, however small the decimal part is. Even 8.001 becomes 9."
        },
        {
          "q": "Which tools are used in game programming to work out angles and rotation?",
          "options": [
            "math.floor()",
            "math.sin() and math.cos()",
            "math.log()",
            "math.ceil()"
          ],
          "answer": 1,
          "why": "Trigonometry. Every time a character turns or a bullet arcs through the air, sin and cos are doing the work."
        },
        {
          "q": "What does math.sqrt(81) give?",
          "options": [
            "9",
            "9.0",
            "81.0",
            "An error"
          ],
          "answer": 1,
          "why": "9.0 — math.sqrt always returns a float, even when the answer is a whole number."
        }
      ],
      "tasks": [
        {
          "id": "u1t25p01",
          "kind": "code",
          "title": "Task 25.1 — Measure the room",
          "brief": "A square room is 81 square metres. Import math and print the length of one wall.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "9.0"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sqrt",
              "message": "Use math.sqrt()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use math.sqrt()",
            "Your first output line should be: 9.0"
          ]
        },
        {
          "id": "u1t25p02",
          "kind": "code",
          "title": "Task 25.2 — Paint tins and pizza slices",
          "brief": "You need 5.01 tins of paint, and you can afford 3.9 slices of pizza. Print how many tins you must buy, then how many whole slices you get. Two lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "6\n3"
            },
            {
              "type": "sourceIncludes",
              "value": "math.ceil",
              "message": "Use math.ceil() for the paint"
            },
            {
              "type": "sourceIncludes",
              "value": "math.floor",
              "message": "Use math.floor() for the pizza"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use math.ceil() for the paint Also remember: use math.floor() for the pizza.",
            "Your first output line should be: 6"
          ]
        },
        {
          "id": "u1t25p03",
          "kind": "code",
          "title": "Task 25.3 — Solve the polynomial",
          "brief": "With x = 3, work out x squared plus 5 times x, and print the answer.",
          "starter": "x = 3\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "24"
            },
            {
              "type": "sourceIncludes",
              "value": "x",
              "message": "Use the variable x in your calculation"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*24\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use the variable x in your calculation",
            "Your first output line should be: 24"
          ]
        },
        {
          "kind": "code",
          "title": "A logarithm from the scientific calculator",
          "brief": "Import math and print math.log10(1000). The output must be 3.0.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3.0"
            },
            {
              "type": "sourceIncludes",
              "value": "math.log10",
              "message": "Use math.log10()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*3\\.0\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "id": "u1t25p04",
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use math.log10()",
            "Your first output line should be: 3.0"
          ]
        },
        {
          "kind": "code",
          "title": "A simple trigonometry check",
          "brief": "Import math and print the sine of 90 degrees by using math.sin(math.pi / 2). Round it to 5 places.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1.0"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sin",
              "message": "Use math.sin()"
            },
            {
              "type": "sourceIncludes",
              "value": "math.pi",
              "message": "Use math.pi"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*1\\.0\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "id": "u1t25p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use math.sin() Also remember: use math.pi.",
            "Your first output line should be: 1.0"
          ]
        },
        {
          "id": "u1t25p06",
          "kind": "code",
          "title": "Task 25.6 — Building calculator",
          "brief": "Import math. A square floor has area 144. Print its side length, then print math.ceil(7.01), then math.floor(7.99).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "12.0\n8\n7"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sqrt",
              "message": "Use sqrt"
            },
            {
              "type": "sourceIncludes",
              "value": "math.ceil",
              "message": "Use ceil"
            },
            {
              "type": "sourceIncludes",
              "value": "math.floor",
              "message": "Use floor"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use sqrt Also remember: use ceil.",
            "Your first output line should be: 12.0"
          ]
        },
        {
          "id": "u1t25p07",
          "kind": "code",
          "title": "Task 25.7 — Scientific tools together",
          "brief": "Import math. Print math.log10(10000), round(math.sin(math.pi / 2), 5), and round(math.cos(0), 5).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "4.0\n1.0\n1.0"
            },
            {
              "type": "sourceIncludes",
              "value": "math.log10",
              "message": "Use log10"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sin",
              "message": "Use sin"
            },
            {
              "type": "sourceIncludes",
              "value": "math.cos",
              "message": "Use cos"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Use log10 Also remember: use sin.",
            "Your first output line should be: 4.0"
          ]
        },
        {
          "id": "u1t25p08",
          "kind": "code",
          "title": "Task 25.8 — Math module report",
          "brief": "Import math and create radius = 5. Print five lines: square root of 225, ceiling of 4.01, floor of 4.99, area of a circle rounded to 2 places using math.pi * radius ** 2, and whether sqrt exists in dir(math).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15.0\n5\n4\n78.54\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "math.pi",
              "message": "Use math.pi"
            },
            {
              "type": "sourceIncludes",
              "value": "radius ** 2",
              "message": "Square the radius"
            },
            {
              "type": "sourceIncludes",
              "value": "round(",
              "message": "Round the area"
            },
            {
              "type": "sourceIncludes",
              "value": "dir(math)",
              "message": "Inspect the module"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Use math.pi Also remember: square the radius.",
            "Your first output line should be: 15.0"
          ]
        }
      ]
    },
    {
      "id": "u1t26",
      "title": "The statistics Module",
      "summary": "Turning a pile of numbers into one sentence a human can understand.",
      "notebookLM": "",
      "notes": "\n      <h4>Making sense of a crowd</h4>\n      <p>A teacher has the marks of 100 students. Staring at 100 numbers tells you nothing.\n      What she wants to know is: what was the average? What was the most common mark? Were the\n      students all close together, or all over the place?</p>\n      <p>That is <strong>statistics</strong> — squeezing a big pile of data into a few numbers\n      a human can hold in their head.</p>\n\n      <h4>The three Ms</h4>\n      <p>Take these five marks: <code>50, 70, 70, 80, 100</code></p>\n\n      <p><strong>Mean — the average.</strong> Add them all, divide by how many there are.\n      50+70+70+80+100 = 370, divided by 5 = <strong>74</strong>.</p>\n\n      <p><strong>Median — the middle.</strong> Line everyone up in order and point at the\n      person standing exactly in the middle. Here that is <strong>70</strong>.</p>\n\n      <p><strong>Mode — the most popular.</strong> Which value appears most often? 70 appears\n      twice, everything else once. So the mode is <strong>70</strong>.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Five marks lined up in order, showing the mean, median and mode.\">\n        <text x=\"350\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">50   70   70   80   100</text>\n\n        <rect class=\"box\" x=\"8\" y=\"42\" width=\"216\" height=\"112\" rx=\"8\"/>\n        <text x=\"116\" y=\"72\" text-anchor=\"middle\" style=\"font-size:13.5px;font-weight:700\">Mean</text>\n        <text x=\"116\" y=\"98\" text-anchor=\"middle\" style=\"font-size:12px\">370 ÷ 5</text>\n        <text x=\"116\" y=\"128\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:17px\">74</text>\n\n        <rect class=\"box\" x=\"242\" y=\"42\" width=\"216\" height=\"112\" rx=\"8\"/>\n        <text x=\"350\" y=\"72\" text-anchor=\"middle\" style=\"font-size:13.5px;font-weight:700\">Median</text>\n        <text x=\"350\" y=\"98\" text-anchor=\"middle\" style=\"font-size:12px\">the one in the middle</text>\n        <text x=\"350\" y=\"128\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:17px\">70</text>\n\n        <rect class=\"box\" x=\"476\" y=\"42\" width=\"216\" height=\"112\" rx=\"8\"/>\n        <text x=\"584\" y=\"72\" text-anchor=\"middle\" style=\"font-size:13.5px;font-weight:700\">Mode</text>\n        <text x=\"584\" y=\"98\" text-anchor=\"middle\" style=\"font-size:12px\">appears most often</text>\n        <text x=\"584\" y=\"128\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:17px\">70</text>\n      </svg>\n\n      <h4>Spread — the rollercoaster and the train</h4>\n      <p>Two classes sit the same test. Both have an average of 70%.</p>\n      <ul>\n        <li><strong>Class A:</strong> every single student scored exactly 70.</li>\n        <li><strong>Class B:</strong> half scored 100, half scored 40.</li>\n      </ul>\n      <p>The average is identical, but the classes are nothing alike. <strong>Variance</strong>\n      and <strong>standard deviation</strong> measure how spread out the numbers are.</p>\n      <p>A <em>low</em> standard deviation means everyone is close to the average, like the\n      train. A <em>high</em> one means the numbers are wild, like the rollercoaster.</p>\n\n      <div class=\"callout\">\n        <strong>Why a teacher cares.</strong> A high standard deviation means the class has\n        split into two groups — some students racing ahead while others are lost. The average\n        alone would have hidden that completely.\n      </div>\n\n      <h4>Doing it in Python</h4>\n      <pre><code>import statistics\n\ngrades = [80, 90, 90, 100]\n\nprint(statistics.mean(grades))     # 90\nprint(statistics.median(grades))   # 90.0\nprint(statistics.mode(grades))     # 90\nprint(statistics.stdev(grades))    # 8.16...</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">Two classes both average 70%. Class A has a standard deviation of 2.\n        Class B has 30. What does that tell the teacher?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Class B did better</button>\n          <button data-o=\"1\">Class A did better</button>\n          <button data-o=\"2\">Class B is split — some very high, some very low</button>\n        </div>\n        <p class=\"w__why\">Neither class \"did better\" — the averages are the same. But Class B's\n        marks are scattered far from that average, so it holds two very different groups of\n        students who need very different help.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">For the list <code>[8, 9, 9, 10, 12]</code>, match each tool to its answer.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>statistics.mean()</code></button>\n            <button data-pair=\"b\"><code>statistics.median()</code></button>\n            <button data-pair=\"c\"><code>statistics.mode()</code></button>\n            <button data-pair=\"d\"><code>len()</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">9 — it appears twice</button>\n            <button data-pair=\"a\">9.6 — the average</button>\n            <button data-pair=\"d\">5 — how many numbers there are</button>\n            <button data-pair=\"b\">9 — the one in the middle</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Notice that mean, median and mode can all\n        be different numbers — which is exactly why you need all three.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>This is the end of Unit 1.</strong> Finish the tasks below and the unit test\n        opens: 30 questions, 60 marks, 45 minutes. After that comes your project.\n      </div>\n    \n<div class=\"callout\"><strong>Practice-first rule.</strong> This chapter has 4 concept questions and 5 practice activities. Finish every activity before moving ahead; reading alone is not enough.</div>\n      <div class=\"callout\"><strong>Extra learning lab: Statistics describes a group of values</strong> This section explains the same idea in another way. Read it, follow the picture, then play the short activity.</div>\n      <h4>See the idea from another angle</h4>\n      <p>Statistics helps us understand a complete list, not only one number. The mean uses every value. The median finds the middle. The mode finds the most common.</p><p>Different summaries answer different questions. A very large or very small value can pull the mean, while the median is often more stable.</p>\n      <h4>Worked example</h4>\n      <pre><code>import statistics\nmarks = [40, 45, 45, 50, 100]\nprint(statistics.mean(marks))\nprint(statistics.median(marks))\nprint(statistics.mode(marks))</code></pre>\n      \n      <h4>Picture the process</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Mean, median and mode show different features of the same data.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Collect data</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Choose measure</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Calculate summary</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Explain meaning</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">Mean, median and mode show different features of the same data.</text>\n      </svg>\n    \n      \n      <div class=\"w w-match\">\n        <span class=\"w__k\">Mini game — match the pairs</span>\n        <p class=\"w__q\">Match each idea to its correct meaning</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\"><button data-pair=\"p0\">Average using every value</button><button data-pair=\"p1\">Middle after sorting</button><button data-pair=\"p2\">Most frequent value</button></div>\n          <div class=\"w-match__col\"><button data-pair=\"p2\">Mode</button><button data-pair=\"p1\">Median</button><button data-pair=\"p0\">Mean</button></div>\n        </div>\n        <p class=\"w__why\"><strong>Complete.</strong> You connected every term with the job it performs.</p>\n      </div>\n    \n    ",
      "mcqs": [
        {
          "q": "Which tool finds the average?",
          "options": [
            "statistics.middle()",
            "statistics.mean()",
            "statistics.mode()",
            "statistics.average()"
          ],
          "answer": 1,
          "why": "mean is the proper name for the average. There is no tool called average() in Python."
        },
        {
          "q": "What does the Mode tell you?",
          "options": [
            "The highest number",
            "The number in the middle",
            "The number that appears most often",
            "The total of all numbers"
          ],
          "answer": 2,
          "why": "Most frequent. If twenty students wear size 9 and five wear size 10, the mode is 9."
        },
        {
          "q": "A set of marks has a very HIGH standard deviation. What does that mean?",
          "options": [
            "Every mark is the same",
            "The marks are spread far away from the average",
            "The computer made a mistake",
            "The average is zero"
          ],
          "answer": 1,
          "why": "High spread means the numbers are scattered. Two classes can share an average and be nothing alike."
        },
        {
          "q": "For the list [8, 9, 9, 10, 12], what is the median?",
          "options": [
            "9",
            "9.6",
            "12",
            "5"
          ],
          "answer": 0,
          "why": "The list is already in order and there are five numbers, so the middle one is the third: 9. The mean is 9.6 — a different answer."
        }
      ],
      "tasks": [
        {
          "id": "u1t26p01",
          "kind": "code",
          "title": "Task 26.1 — Shoe sizes",
          "brief": "Make a list called shoe_sizes holding 8, 9, 9, 10, 12. Import statistics and print the mean, then the median, then the mode — three lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "9.6\n9\n9"
            },
            {
              "type": "sourceIncludes",
              "value": "import statistics",
              "message": "Import the statistics module"
            },
            {
              "type": "sourceIncludes",
              "value": "shoe_sizes",
              "message": "Name your list shoe_sizes"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Import the statistics module Also remember: name your list shoe_sizes.",
            "Your first output line should be: 9.6"
          ]
        },
        {
          "id": "u1t26p02",
          "kind": "code",
          "title": "Task 26.2 — The class average",
          "brief": "Five marks are given. Print the average, then the highest, then the lowest — three lines. Use statistics for the average and built-in tools for the other two.",
          "starter": "marks = [50, 70, 70, 80, 100]\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "74\n100\n50"
            },
            {
              "type": "sourceIncludes",
              "value": "mean(",
              "message": "Use statistics.mean()"
            },
            {
              "type": "sourceIncludes",
              "value": "max(",
              "message": "Use max()"
            },
            {
              "type": "sourceIncludes",
              "value": "min(",
              "message": "Use min()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Use statistics.mean() Also remember: use max().",
            "Your first output line should be: 74"
          ]
        },
        {
          "id": "u1t26p03",
          "kind": "code",
          "title": "Task 26.3 — Put it all together",
          "brief": "Using the marks list, print exactly one line with an f-string: The class of 5 students averaged 74",
          "starter": "import statistics\nmarks = [50, 70, 70, 80, 100]\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "The class of 5 students averaged 74"
            },
            {
              "type": "sourceRegex",
              "pattern": "f\"|f'",
              "message": "Use an f-string"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Work out the 5 with len()"
            },
            {
              "type": "sourceIncludes",
              "value": "mean(",
              "message": "Work out the 74 with statistics.mean()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use an f-string Also remember: work out the 5 with len().",
            "Your first output line should be: The class of 5 students averaged 74"
          ]
        },
        {
          "id": "u1t26p04",
          "kind": "code",
          "title": "Task 26.2 — Compare spread",
          "brief": "Print the population standard deviation of [70,70,70]. Then print the population standard deviation of [40,70,100] rounded to 2 decimal places. Output: 0.0 and 24.49.",
          "starter": "import statistics\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0.0\n24.49"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.pstdev(",
              "message": "Use statistics.pstdev()"
            },
            {
              "type": "sourceIncludes",
              "value": "round(",
              "message": "Round the second value"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use statistics.pstdev() Also remember: round the second value.",
            "Your first output line should be: 0.0"
          ]
        },
        {
          "kind": "code",
          "title": "Median of an even-sized list",
          "brief": "Import statistics and print the median of [10, 20, 30, 40]. The two middle values should produce 25.0.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "25.0"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.median",
              "message": "Use statistics.median()"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "print\\(\\s*25\\.0\\s*\\)",
              "message": "Calculate or obtain the answer instead of printing the final number directly"
            }
          ],
          "id": "u1t26p05",
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use statistics.median()",
            "Your first output line should be: 25.0"
          ]
        },
        {
          "id": "u1t26p06",
          "kind": "code",
          "title": "Task 26.6 — Three central values",
          "brief": "Import statistics and use data = [2, 4, 4, 6, 9]. Print the mean, median and mode.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5\n4\n4"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mean",
              "message": "Use mean"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.median",
              "message": "Use median"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mode",
              "message": "Use mode"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Use mean Also remember: use median.",
            "Your first output line should be: 5"
          ]
        },
        {
          "id": "u1t26p07",
          "kind": "code",
          "title": "Task 26.7 — Compare spread",
          "brief": "Import statistics. Print statistics.pvariance and statistics.pstdev for [10, 10, 10], then for [0, 10, 20]. Round each result to 2 places.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0\n0.0\n66.67\n8.16"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "statistics\\.pvariance",
              "count": 2,
              "message": "Calculate both population variances"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "statistics\\.pstdev",
              "count": 2,
              "message": "Calculate both population standard deviations"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "round\\(",
              "count": 4,
              "message": "Round all four results"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Calculate both population variances Also remember: calculate both population standard deviations.",
            "Your first output line should be: 0"
          ]
        },
        {
          "id": "u1t26p08",
          "kind": "code",
          "title": "Task 26.8 — Complete statistics card",
          "brief": "Import statistics and use marks = [65, 72, 72, 80, 91]. Print seven lines: count, total, mean, median, mode, population variance rounded to 2 places, and population standard deviation rounded to 2 places.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5\n380\n76\n72\n72\n78.8\n8.88"
            },
            {
              "type": "sourceIncludes",
              "value": "len(marks)",
              "message": "Count the marks"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(marks)",
              "message": "Total the marks"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mean",
              "message": "Use mean"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.median",
              "message": "Use median"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mode",
              "message": "Use mode"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.pvariance",
              "message": "Use population variance"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.pstdev",
              "message": "Use population standard deviation"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to produce the required output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Count the marks Also remember: total the marks.",
            "Your first output line should be: 5"
          ]
        }
      ]
    },
    {
      "id": "u1cp05",
      "title": "Revision Checkpoint 5 — Numbers, Math and Statistics",
      "summary": "Mix built-in number tools, math and statistics.",
      "notebookLM": "",
      "notes": "\n      <h4>Pause, mix and remember</h4>\n      <p>This checkpoint mixes ideas from <strong>Chapters 24–26</strong>. It does not teach a new syllabus topic. It checks whether the earlier ideas are still clear.</p>\n      <div class=\"callout\"><strong>How to use it:</strong> answer the mixed quiz without reopening earlier chapters. Then complete the activities. When something is difficult, return to only that chapter and try again.</div>\n      <h4>Checkpoint method</h4>\n      <ol><li>Read the full question.</li><li>Predict before running code.</li><li>Run and compare.</li><li>Fix one error at a time.</li></ol>\n    \n              <div class=\"callout\"><strong>Visual revision map.</strong> Use this picture before starting the checkpoint activities. Explain every arrow aloud in your own words.</div>\n              \n      <h4>Number tools journey</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A compact map connecting the ideas revised in this checkpoint.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Built-ins</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">math</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">statistics</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Explain result</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A compact map connecting the ideas revised in this checkpoint.</text>\n      </svg>\n    \n              \n      <div class=\"w\">\n        <span class=\"w__k\">Checkpoint game — study cards</span>\n        <div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do first?</span><span class=\"w-flip__back\">Read the question and identify the concept.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do before running code?</span><span class=\"w-flip__back\">Predict the result or write the steps on paper.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do after an error?</span><span class=\"w-flip__back\">Read the final error line and fix one issue at a time.</span></button></div>\n      </div>\n    \n            ",
      "mcqs": [
        {
          "q": "Which function turns -25 into 25?",
          "options": [
            "abs()",
            "round()",
            "sum()",
            "min()"
          ],
          "answer": 0,
          "why": "abs gives absolute distance from zero."
        },
        {
          "q": "Which function adds every value in [4, 6, 10]?",
          "options": [
            "dir()",
            "sum()",
            "max()",
            "pow()"
          ],
          "answer": 1,
          "why": "sum returns the total."
        },
        {
          "q": "Which math tool always rounds 4.01 upward?",
          "options": [
            "round()",
            "math.sqrt()",
            "math.ceil()",
            "math.floor()"
          ],
          "answer": 2,
          "why": "ceil moves upward to the next integer."
        },
        {
          "q": "Which math tool returns 4 from 4.99?",
          "options": [
            "math.ceil()",
            "math.log()",
            "pow()",
            "math.floor()"
          ],
          "answer": 3,
          "why": "floor moves down."
        },
        {
          "q": "What is math.sqrt(169)?",
          "options": [
            "13.0",
            "84.5",
            "14",
            "169"
          ],
          "answer": 0,
          "why": "13 × 13 is 169."
        },
        {
          "q": "Which statistics tool finds the central ordered value?",
          "options": [
            "statistics.sum()",
            "statistics.median()",
            "statistics.mean()",
            "statistics.mode()"
          ],
          "answer": 1,
          "why": "median is the middle value after ordering."
        },
        {
          "q": "Which value describes how spread out numbers are?",
          "options": [
            "A string",
            "The file name",
            "Standard deviation",
            "Mode only"
          ],
          "answer": 2,
          "why": "Standard deviation measures spread around the mean."
        },
        {
          "q": "For [4, 4, 5, 6], what is the mode?",
          "options": [
            "5",
            "4.75",
            "6",
            "4"
          ],
          "answer": 3,
          "why": "4 occurs most often."
        }
      ],
      "tasks": [
        {
          "id": "u1cp05p01",
          "kind": "code",
          "title": "Checkpoint bug fix — math import",
          "brief": "Fix the program so it prints 9.0.",
          "starter": "print(math.sqrt(81))\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "9.0"
            },
            {
              "type": "sourceIncludes",
              "value": "import math",
              "message": "Import math first"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 1",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Import math first",
            "Your first output line should be: 9.0"
          ]
        },
        {
          "id": "u1cp05p02",
          "kind": "code",
          "title": "Checkpoint bug fix — list for sum",
          "brief": "Fix the program so it prints 60.",
          "starter": "print(sum(10, 20, 30))\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "60"
            },
            {
              "type": "sourceRegex",
              "pattern": "sum\\(\\s*\\[",
              "message": "Give sum() a list"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 2",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Give sum() a list",
            "Your first output line should be: 60"
          ]
        },
        {
          "id": "u1cp05p03",
          "kind": "code",
          "title": "Checkpoint built-in tools",
          "brief": "Use values = [-8, 3, 12, 5]. Print the absolute first value, total, minimum and maximum.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "8\n12\n-8\n12"
            },
            {
              "type": "sourceIncludes",
              "value": "abs(",
              "message": "Use abs"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(",
              "message": "Use sum"
            },
            {
              "type": "sourceIncludes",
              "value": "min(",
              "message": "Use min"
            },
            {
              "type": "sourceIncludes",
              "value": "max(",
              "message": "Use max"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 3",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use abs Also remember: use sum.",
            "Your first output line should be: 8"
          ]
        },
        {
          "id": "u1cp05p04",
          "kind": "code",
          "title": "Checkpoint statistics practice",
          "brief": "Import statistics. For [10, 20, 20, 30], print mean, median and mode.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20\n20.0\n20"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mean",
              "message": "Use mean"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.median",
              "message": "Use median"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mode",
              "message": "Use mode"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 4",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Use mean Also remember: use median.",
            "Your first output line should be: 20"
          ]
        },
        {
          "id": "u1cp05p05",
          "kind": "code",
          "title": "Checkpoint challenge — numerical report",
          "brief": "Import math and statistics. With data = [12, 18, 18, 24], print total, mean, median, mode, square root of total rounded to 2 places, and population standard deviation rounded to 2 places.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "72\n18\n18.0\n18\n8.49\n4.24"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(data)",
              "message": "Calculate total"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mean",
              "message": "Use mean"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.median",
              "message": "Use median"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mode",
              "message": "Use mode"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sqrt",
              "message": "Use square root"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.pstdev",
              "message": "Use population standard deviation"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the answer"
            }
          ],
          "level": "Revision Checkpoint — Task 5",
          "hints": [
            "Work one requirement at a time and run the program after each small change.",
            "Calculate total Also remember: use mean.",
            "Your first output line should be: 72"
          ]
        }
      ]
    },
    {
      "id": "u1mini01",
      "title": "Guided Mini-Project — Smart Shopping Bill",
      "summary": "Build one useful program in eight beginner-friendly stages.",
      "notebookLM": "",
      "notes": "\n  <h4>Guided Mini-Project — Smart Shopping Bill</h4>\n  <p>You will build this project in eight small stages. Each stage reuses the same shopping idea, but every task focuses on one new piece. The last task joins everything into one complete beginner program.</p>\n  <div class=\"callout\"><strong>Project rule:</strong> do not jump directly to the last task. Complete each level, run it, and understand the output first.</div>\n  <h4>What the finished program will use</h4>\n  <ul><li>clear variables and a price list</li><li>sum(), len(), min(), max() and round()</li><li>arithmetic and assignment operators</li><li>Boolean comparisons</li><li>f-strings, sep and end</li><li>comments and a docstring</li></ul>\n  <h4>Final output shape</h4>\n  <pre><code>================================\nSMART SHOPPING BILL\nCustomer: Asha\nItems: Pen | Notebook | Bottle\nPrices: 20 | 60 | 120\nSubtotal: 200\nDiscount: 20.0\nFinal Total: 180.0\nAverage Price: 66.67\nHighest Price: 120\nLowest Price: 20\nBudget Enough: True\n================================</code></pre>\n\n              <div class=\"callout\"><strong>Visual revision map.</strong> Use this picture before starting the checkpoint activities. Explain every arrow aloud in your own words.</div>\n              \n      <h4>Shopping bill build map</h4>\n      <svg class=\"fig\" viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"A compact map connecting the ideas revised in this checkpoint.\">\n        <text x=\"370\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">Follow the idea from left to right</text>\n        <rect class=\"box\" x=\"20\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"92.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Store items</text><path class=\"arrow\" d=\"M174 98 h22\"/><path class=\"accent\" d=\"M206 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"205\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"277.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Calculate total</text><path class=\"arrow\" d=\"M359 98 h22\"/><path class=\"accent\" d=\"M391 98 l-11 -7 v14 z\"/><rect class=\"box\" x=\"390\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"462.5\" y=\"104\" text-anchor=\"middle\" class=\"lbl\">Apply discount</text><path class=\"arrow\" d=\"M544 98 h22\"/><path class=\"accent\" d=\"M576 98 l-11 -7 v14 z\"/><rect class=\"box box--dark\" x=\"575\" y=\"62\" width=\"145\" height=\"72\" rx=\"10\"/><text x=\"647.5\" y=\"104\" text-anchor=\"middle\" class=\"on-dark\">Print receipt</text>\n        <circle cx=\"92\" cy=\"154\" r=\"8\" class=\"accent\">\n          <animate attributeName=\"cx\" values=\"92;277;462;647;92\" keyTimes=\"0;0.28;0.56;0.84;1\" dur=\"7s\" repeatCount=\"indefinite\"/>\n        </circle>\n        <text x=\"370\" y=\"180\" text-anchor=\"middle\" class=\"figcap\">A compact map connecting the ideas revised in this checkpoint.</text>\n      </svg>\n    \n              \n      <div class=\"w\">\n        <span class=\"w__k\">Checkpoint game — study cards</span>\n        <div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do first?</span><span class=\"w-flip__back\">Read the question and identify the concept.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do before running code?</span><span class=\"w-flip__back\">Predict the result or write the steps on paper.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What should I do after an error?</span><span class=\"w-flip__back\">Read the final error line and fix one issue at a time.</span></button></div>\n      </div>\n    \n            ",
      "mcqs": [
        {
          "q": "Which structure should store several prices together?",
          "options": [
            "A list",
            "One comment",
            "A Boolean only",
            "A file extension"
          ],
          "answer": 0,
          "why": "A list keeps several related values under one variable name."
        },
        {
          "q": "Which expression calculates a 10 percent discount from subtotal?",
          "options": [
            "10 % subtotal",
            "subtotal * 10 / 100",
            "subtotal + 10",
            "subtotal // 100"
          ],
          "answer": 1,
          "why": "Percentage means multiply by the rate and divide by 100."
        },
        {
          "q": "Which comparison checks whether budget can cover final_total?",
          "options": [
            "budget in final_total",
            "budget and final_total",
            "budget >= final_total",
            "budget = final_total"
          ],
          "answer": 2,
          "why": "Greater than or equal to checks whether enough money is available."
        },
        {
          "q": "Which formatting choice is easiest for lines such as Customer: Asha?",
          "options": [
            "A comment",
            "dir()",
            "pip list",
            "An f-string"
          ],
          "answer": 3,
          "why": "f-strings place variables directly inside readable text."
        }
      ],
      "tasks": [
        {
          "id": "u1mini01p01",
          "kind": "code",
          "title": "Mini-Project 1 — Customer and title",
          "brief": "Create customer = \"Asha\". Print SMART SHOPPING BILL and then Customer: Asha.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "SMART SHOPPING BILL\nCustomer: Asha"
            },
            {
              "type": "sourceIncludes",
              "value": "customer",
              "message": "Store the customer name in a variable"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the receipt"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Store the customer name in a variable",
            "Your first output line should be: SMART SHOPPING BILL"
          ]
        },
        {
          "id": "u1mini01p02",
          "kind": "code",
          "title": "Mini-Project 2 — Items and prices",
          "brief": "Create items = [\"Pen\", \"Notebook\", \"Bottle\"] and prices = [20, 60, 120]. Print both lists.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Pen', 'Notebook', 'Bottle']\n[20, 60, 120]"
            },
            {
              "type": "sourceRegex",
              "pattern": "items\\s*=\\s*\\[",
              "message": "Create the items list"
            },
            {
              "type": "sourceRegex",
              "pattern": "prices\\s*=\\s*\\[",
              "message": "Create the prices list"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the receipt"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Follow the starter or instruction one small line at a time. Run the code after the first working line.",
            "Create the items list Also remember: create the prices list.",
            "Your first output line should be: ['Pen', 'Notebook', 'Bottle']"
          ]
        },
        {
          "id": "u1mini01p03",
          "kind": "code",
          "title": "Mini-Project 3 — Basic totals",
          "brief": "Using prices = [20, 60, 120], print the subtotal, number of items and average price rounded to 2 places.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "200\n3\n66.67"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(prices)",
              "message": "Use sum"
            },
            {
              "type": "sourceIncludes",
              "value": "len(prices)",
              "message": "Use len"
            },
            {
              "type": "sourceIncludes",
              "value": "round(",
              "message": "Round the average"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the receipt"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use sum Also remember: use len.",
            "Your first output line should be: 200"
          ]
        },
        {
          "id": "u1mini01p04",
          "kind": "code",
          "title": "Mini-Project 4 — High and low",
          "brief": "Using the same prices list, print the highest and lowest price, then print their difference.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "120\n20\n100"
            },
            {
              "type": "sourceIncludes",
              "value": "max(prices)",
              "message": "Use max"
            },
            {
              "type": "sourceIncludes",
              "value": "min(prices)",
              "message": "Use min"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the receipt"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "First create the required data. Next perform the operation. Print only after the calculation is ready.",
            "Use max Also remember: use min.",
            "Your first output line should be: 120"
          ]
        },
        {
          "id": "u1mini01p05",
          "kind": "code",
          "title": "Mini-Project 5 — Discount calculation",
          "brief": "Create subtotal = 200 and discount_rate = 10. Calculate discount using subtotal * discount_rate / 100, then calculate final_total. Print both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20.0\n180.0"
            },
            {
              "type": "sourceRegex",
              "pattern": "discount\\s*=\\s*subtotal\\s*\\*\\s*discount_rate\\s*/\\s*100",
              "message": "Calculate the discount from variables"
            },
            {
              "type": "sourceRegex",
              "pattern": "final_total\\s*=\\s*subtotal\\s*-\\s*discount",
              "message": "Subtract the discount"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the receipt"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Calculate the discount from variables Also remember: subtract the discount.",
            "Your first output line should be: 20.0"
          ]
        },
        {
          "id": "u1mini01p06",
          "kind": "code",
          "title": "Mini-Project 6 — Budget check",
          "brief": "Create budget = 250 and final_total = 180.0. Print whether the budget is enough, then print the money left.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\n70.0"
            },
            {
              "type": "sourceIncludes",
              "value": ">=",
              "message": "Compare budget with final_total"
            },
            {
              "type": "sourceRegex",
              "pattern": "budget\\s*-\\s*final_total",
              "message": "Calculate the money left"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the receipt"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Read the bottom line of any error. Fix the smallest problem first, then run again.",
            "Compare budget with final_total Also remember: calculate the money left.",
            "Your first output line should be: True"
          ]
        },
        {
          "id": "u1mini01p07",
          "kind": "code",
          "title": "Mini-Project 7 — Formatted receipt section",
          "brief": "Create the customer, items and prices from earlier tasks. Use f-strings plus sep or end to print exactly five lines: Customer: Asha / Items: Pen | Notebook | Bottle / Prices: 20 | 60 | 120 / Subtotal: 200 / Average Price: 66.67.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Customer: Asha\nItems: Pen | Notebook | Bottle\nPrices: 20 | 60 | 120\nSubtotal: 200\nAverage Price: 66.67"
            },
            {
              "type": "sourceRegex",
              "pattern": "f[\"\\']",
              "message": "Use f-strings"
            },
            {
              "type": "sourceIncludes",
              "value": "sep=",
              "message": "Use sep for one joined line"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(prices)",
              "message": "Calculate subtotal from prices"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the receipt"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Break the challenge into three parts: data, calculation or action, and final output.",
            "Use f-strings Also remember: use sep for one joined line.",
            "Your first output line should be: Customer: Asha"
          ]
        },
        {
          "id": "u1mini01p08",
          "kind": "code",
          "title": "Mini-Project 8 — Complete Smart Shopping Bill",
          "brief": "Build the complete 13-line bill shown in the lesson. Include a docstring, at least three useful comments, clear snake_case variables, lists, calculations, one comparison, f-strings, sep and end.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "================================\nSMART SHOPPING BILL\nCustomer: Asha\nItems: Pen | Notebook | Bottle\nPrices: 20 | 60 | 120\nSubtotal: 200\nDiscount: 20.0\nFinal Total: 180.0\nAverage Price: 66.67\nHighest Price: 120\nLowest Price: 20\nBudget Enough: True\n================================"
            },
            {
              "type": "sourceRegex",
              "pattern": "\"\"\"[\\s\\S]*?\"\"\"",
              "message": "Start with a docstring"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 3,
              "message": "Add at least three useful comments"
            },
            {
              "type": "sourceRegex",
              "pattern": "items\\s*=\\s*\\[",
              "message": "Use an items list"
            },
            {
              "type": "sourceRegex",
              "pattern": "prices\\s*=\\s*\\[",
              "message": "Use a prices list"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(prices)",
              "message": "Calculate subtotal from the list"
            },
            {
              "type": "sourceIncludes",
              "value": "len(prices)",
              "message": "Calculate the average using the number of prices"
            },
            {
              "type": "sourceIncludes",
              "value": "max(prices)",
              "message": "Find the highest price"
            },
            {
              "type": "sourceIncludes",
              "value": "min(prices)",
              "message": "Find the lowest price"
            },
            {
              "type": "sourceIncludes",
              "value": ">=",
              "message": "Create the budget check"
            },
            {
              "type": "sourceRegex",
              "pattern": "f[\"\\']",
              "message": "Use f-strings"
            },
            {
              "type": "sourceIncludes",
              "value": "sep=",
              "message": "Use sep at least once"
            },
            {
              "type": "sourceIncludes",
              "value": "end=",
              "message": "Use end at least once"
            },
            {
              "type": "sourceIncludes",
              "value": "print(",
              "message": "Use print() to show the receipt"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Plan every output line before coding. Build and test one section at a time instead of writing everything at once.",
            "Start with a docstring Also remember: add at least three useful comments.",
            "Your first output line should be: ================================"
          ]
        }
      ]
    }
  ],
  "test": {
    "title": "Unit 1 Final Test — Mixed Understanding and Practice",
    "marksPerQuestion": 2,
    "durationMinutes": 60,
    "questions": [
      {
        "q": "A teacher says Python code is easier for humans to read than machine code. Which term describes this?",
        "options": [
          "High-level language",
          "Hardware language",
          "Binary-only language",
          "Database"
        ],
        "answer": 0
      },
      {
        "q": "A company wants one language for automation, websites and data work. Which Python feature supports this choice?",
        "options": [
          "It is Python 2",
          "It is general-purpose",
          "It only runs on phones",
          "It has no libraries"
        ],
        "answer": 1
      },
      {
        "q": "Why might a compiled language be chosen for a device where every millisecond matters?",
        "options": [
          "It uses English words",
          "It is always free",
          "Its translated program can run very quickly",
          "It cannot have errors"
        ],
        "answer": 2
      },
      {
        "q": "Which sign most clearly shows that an online tutorial may be using old Python 2 syntax?",
        "options": [
          "print(\"Hello\")",
          "python --version",
          "import math",
          "print \"Hello\" without brackets"
        ],
        "answer": 3
      },
      {
        "q": "A Windows learner forgot one checkbox during installation. The terminal now says python is not recognized. Which checkbox was it?",
        "options": [
          "Add python.exe to PATH",
          "Create desktop icon",
          "Install documentation",
          "Use admin theme"
        ],
        "answer": 0
      },
      {
        "q": "On a Mac, which command may be needed when python --version does not work?",
        "options": [
          "version python",
          "python3 --version",
          "pip --version only",
          "start python3"
        ],
        "answer": 1
      },
      {
        "q": "Which editor is already installed together with the standard Python installer?",
        "options": [
          "JupyterLab",
          "PyCharm Professional",
          "IDLE",
          "VS Code"
        ],
        "answer": 2
      },
      {
        "q": "Which VS Code extension should a beginner normally choose?",
        "options": [
          "Any extension named Snake",
          "A Java extension",
          "No extension can support Python",
          "Python published by Microsoft"
        ],
        "answer": 3
      },
      {
        "q": "A package is no longer needed. Which terminal action is correct?",
        "options": [
          "pip uninstall package_name",
          "import uninstall",
          "python remove",
          "pip freeze package_name"
        ],
        "answer": 0
      },
      {
        "q": "Which command helps verify that an installed package and its version are present?",
        "options": [
          "package --show-all",
          "pip list",
          "python list",
          "dir(pip)"
        ],
        "answer": 1
      },
      {
        "q": "A virtual environment named lab_env has been created on Windows. Which command enters it?",
        "options": [
          "python lab_env",
          "pip activate lab_env",
          "lab_env\\Scripts\\activate",
          "source lab_env/bin/activate"
        ],
        "answer": 2
      },
      {
        "q": "Which command lets another learner install every dependency listed in requirements.txt?",
        "options": [
          "pip freeze requirements.txt",
          "python requirements.txt",
          "import requirements",
          "pip install -r requirements.txt"
        ],
        "answer": 3
      },
      {
        "q": "What is printed by print(\"Hello\")?",
        "options": [
          "Hello without quotation marks",
          "\"Hello\" including quotes",
          "Nothing",
          "A NameError"
        ],
        "answer": 0
      },
      {
        "q": "Which mode is most suitable for testing one small expression and immediately seeing its value?",
        "options": [
          "Package mode",
          "Interactive shell",
          "A saved PDF",
          "Compiled-only mode"
        ],
        "answer": 1
      },
      {
        "q": "What command runs a saved file called report.py from the correct folder?",
        "options": [
          "open report.py",
          "pip report.py",
          "python report.py",
          "run report"
        ],
        "answer": 2
      },
      {
        "q": "Why can cd Desktop be necessary before running a Desktop file?",
        "options": [
          "It compiles Python",
          "It installs the file",
          "It creates a virtual environment",
          "It moves the terminal into the file’s folder"
        ],
        "answer": 3
      },
      {
        "q": "Which complete line contains an expression inside a statement?",
        "options": [
          "total = 7 + 5",
          "7 + 5 only",
          "# 7 + 5",
          "\"7 + 5\""
        ],
        "answer": 0
      },
      {
        "q": "Which comment is most useful?",
        "options": [
          "# code",
          "# calculate delivery cost for the final bill",
          "# add 10 to x when the line already says x += 10",
          "# comment"
        ],
        "answer": 1
      },
      {
        "q": "A traceback ends with NameError: name total_mrks is not defined. What should be checked first?",
        "options": [
          "Python installation price",
          "Screen resolution",
          "Spelling of the variable",
          "Internet speed"
        ],
        "answer": 2
      },
      {
        "q": "Which debugging method shows changing values while a program runs?",
        "options": [
          "Renaming Python",
          "Deleting all variables",
          "Changing the file extension",
          "Temporary print() statements"
        ],
        "answer": 3
      },
      {
        "q": "Which command asks Python to explain the round function?",
        "options": [
          "help(round)",
          "dir = round",
          "explain(round)",
          "round(help)"
        ],
        "answer": 0
      },
      {
        "q": "What does dir(math) mainly return?",
        "options": [
          "Installed PIP packages",
          "A list of names available inside math",
          "A detailed tutorial only",
          "The square root of math"
        ],
        "answer": 1
      },
      {
        "q": "Which statement uses a Standard Library module correctly?",
        "options": [
          "download datetime",
          "start statistics",
          "import random",
          "pip install random is always required"
        ],
        "answer": 2
      },
      {
        "q": "Which job belongs naturally to the random module?",
        "options": [
          "Checking the current date",
          "Calculating a mean",
          "Creating a virtual environment",
          "Choosing a random game number"
        ],
        "answer": 3
      },
      {
        "q": "Which identifier is legal?",
        "options": [
          "course_1_score",
          "1_course_score",
          "course score",
          "course-score"
        ],
        "answer": 0
      },
      {
        "q": "What does Python treat Student and student as?",
        "options": [
          "Invalid names",
          "Two different identifiers",
          "The same identifier",
          "Two keywords"
        ],
        "answer": 1
      },
      {
        "q": "After name = \"Mira\", what does print(name) show?",
        "options": [
          "\"Mira\"",
          "A SyntaxError",
          "Mira",
          "name"
        ],
        "answer": 2
      },
      {
        "q": "What is the final value of x after x = 10 followed by x = x + 4?",
        "options": [
          "10",
          "4",
          "x + 4",
          "14"
        ],
        "answer": 3
      },
      {
        "q": "Which name best shows a constant by convention?",
        "options": [
          "MAX_SCORE",
          "max_score",
          "MaxScore",
          "max-score"
        ],
        "answer": 0
      },
      {
        "q": "What is the output of type(7.5).__name__?",
        "options": [
          "decimal",
          "float",
          "int",
          "str"
        ],
        "answer": 1
      },
      {
        "q": "Which value is a string?",
        "options": [
          "3.14",
          "None",
          "\"False\"",
          "False"
        ],
        "answer": 2
      },
      {
        "q": "Which value represents no value yet?",
        "options": [
          "0 only",
          "False only",
          "\"None\"",
          "None"
        ],
        "answer": 3
      },
      {
        "q": "What does float(\"19.5\") + 0.5 produce?",
        "options": [
          "20.0",
          "19.50.5",
          "An error",
          "19"
        ],
        "answer": 0
      },
      {
        "q": "Given tools = [\"IDLE\", \"VS Code\", \"Jupyter\"], what is tools[2]?",
        "options": [
          "IndexError",
          "Jupyter",
          "VS Code",
          "IDLE"
        ],
        "answer": 1
      },
      {
        "q": "What is printed by print(\"A\", \"B\", sep=\"-\")?",
        "options": [
          "AB",
          "-A-B-",
          "A-B",
          "A B"
        ],
        "answer": 2
      },
      {
        "q": "Why is int(input(...)) common when asking for a whole number?",
        "options": [
          "input always returns a float",
          "int displays a prompt",
          "It installs integers",
          "input returns text and int converts it"
        ],
        "answer": 3
      },
      {
        "q": "Which line correctly uses an f-string?",
        "options": [
          "print(f\"Total: {total}\")",
          "print(\"Total: total\")",
          "print(f, total)",
          "print(\"Total: {}\")"
        ],
        "answer": 0
      },
      {
        "q": "What is printed when price = 10 and print(f\"Total: {price + 2}\") runs?",
        "options": [
          "An error",
          "Total: 12",
          "Total: price + 2",
          "Total: 102"
        ],
        "answer": 1
      },
      {
        "q": "After running python tool.py red blue, how many items are normally in sys.argv?",
        "options": [
          "1",
          "0",
          "3",
          "2"
        ],
        "answer": 2
      },
      {
        "q": "Which expression converts the first supplied command-line number to an integer?",
        "options": [
          "sys.argv.int(0)",
          "int(sys.argv[0]) for the first user value",
          "argv = integer",
          "int(sys.argv[1])"
        ],
        "answer": 3
      },
      {
        "q": "What is the value of 29 // 4?",
        "options": [
          "7",
          "1",
          "7.25",
          "8"
        ],
        "answer": 0
      },
      {
        "q": "When 29 items are packed in groups of 4, how many remain?",
        "options": [
          "0",
          "1",
          "7",
          "7.25"
        ],
        "answer": 1
      },
      {
        "q": "What is the final value after score = 10 then score += 5 then score *= 2?",
        "options": [
          "20",
          "15",
          "30",
          "25"
        ],
        "answer": 2
      },
      {
        "q": "Which expression checks that age is at least 18 and has_id is true?",
        "options": [
          "age = 18 or has_id",
          "age in 18",
          "not age >= 18",
          "age >= 18 and has_id"
        ],
        "answer": 3
      },
      {
        "q": "What is the result of \"Py\" in \"Python\"?",
        "options": [
          "True",
          "False",
          "Py",
          "An error"
        ],
        "answer": 0
      },
      {
        "q": "What is evaluated first in (4 + 2) * 3?",
        "options": [
          "Everything at once with no order",
          "4 + 2 inside brackets",
          "2 * 3",
          "4 + 6"
        ],
        "answer": 1
      },
      {
        "q": "What is the result of 2 ** 3 ** 2 in Python?",
        "options": [
          "36",
          "256",
          "512",
          "64"
        ],
        "answer": 2
      },
      {
        "q": "Which built-in call returns 25 from -25?",
        "options": [
          "round(-25)",
          "max(-25)",
          "pow(-25)",
          "abs(-25)"
        ],
        "answer": 3
      },
      {
        "q": "What is sum([5, 10, 15])?",
        "options": [
          "30",
          "15",
          "3",
          "51015"
        ],
        "answer": 0
      },
      {
        "q": "Which result is produced by math.floor(6.99)?",
        "options": [
          "5",
          "6",
          "7",
          "6.99"
        ],
        "answer": 1
      },
      {
        "q": "For data [2, 3, 3, 8], which value is the mode?",
        "options": [
          "2",
          "8",
          "3",
          "4"
        ],
        "answer": 2
      },
      {
        "q": "Two classes have the same mean, but one class has marks spread much farther apart. Which statistic will be larger for that class?",
        "options": [
          "Mode necessarily",
          "List length necessarily",
          "File size",
          "Standard deviation"
        ],
        "answer": 3
      }
    ]
  },
  "project": {
    "title": "Unit 1 Project — Smart Student Performance Report",
    "summary": "Build a complete beginner Python program that collects student data, analyses marks and prints a polished report.",
    "brief": "\n    <h4>Your mission</h4>\n    <p>Create a Python program named <code>smart_student_report.py</code>. The program will collect one student's information and five subject marks, analyse the data, and print a clear report card plus a simple study summary.</p>\n\n    <h4>Required files</h4>\n    <ol>\n      <li><code>smart_student_report.py</code></li>\n      <li><code>README.md</code> containing setup, activation and run commands</li>\n      <li><code>requirements.txt</code></li>\n      <li>One screenshot showing a complete successful run</li>\n    </ol>\n\n    <h4>Part A — Code quality</h4>\n    <ol>\n      <li>Start with a three-double-quote <strong>docstring</strong> containing your name, roll number and the purpose of the program.</li>\n      <li>Add at least <strong>five useful single-line comments</strong>. Explain why a section exists instead of repeating the code.</li>\n      <li>Use clear <strong>snake_case</strong> identifiers.</li>\n      <li>Create the constants <code>COLLEGE_NAME</code>, <code>PASS_MARK</code> and <code>SESSION_SIZE</code> using capital letters.</li>\n    </ol>\n\n    <h4>Part B — Input and data</h4>\n    <ol>\n      <li>Use <code>input()</code> to ask for name, roll number, age, favourite subject and five subject marks.</li>\n      <li>Convert age and marks to the correct number types.</li>\n      <li>Store all five marks in one <strong>list</strong>.</li>\n      <li>Use <code>type()</code> at least once while developing the program; keep one useful type check in the final file.</li>\n    </ol>\n\n    <h4>Part C — Calculations</h4>\n    <ol>\n      <li>Use <code>sum()</code>, <code>len()</code>, <code>min()</code> and <code>max()</code>.</li>\n      <li>Import <code>statistics</code> and calculate <code>mean()</code>, <code>median()</code> and <code>mode()</code>.</li>\n      <li>Use <code>round()</code> so decimal results show at most two places.</li>\n      <li>Import <code>math</code> and use <code>math.ceil()</code> to estimate the number of study sessions required.</li>\n      <li>Use arithmetic operators, floor division, modulus, exponentiation and at least one assignment shortcut such as <code>+=</code>.</li>\n    </ol>\n\n    <h4>Part D — Boolean checks</h4>\n    <ol>\n      <li>Create <code>has_passed</code> using a comparison with <code>PASS_MARK</code>.</li>\n      <li>Create <code>all_marks_valid</code> using comparison and logical operators.</li>\n      <li>Use one membership check, such as checking whether <code>\"Python\"</code> appears in the favourite subject.</li>\n      <li>Print the Boolean results directly. Unit 1 does not require an <code>if</code> statement.</li>\n    </ol>\n\n    <h4>Part E — Attractive output</h4>\n    <ol>\n      <li>Use f-strings for the main report.</li>\n      <li>Use <code>sep=</code> and <code>end=</code> at least once.</li>\n      <li>Print a border made from repeated characters.</li>\n      <li>Print at least <strong>18 readable output lines</strong>.</li>\n      <li>The program must run on Python 3 without any error.</li>\n    </ol>\n\n    <h4>Example output shape</h4>\n    <pre><code>============================================\n          SMART STUDENT REPORT\n============================================\nCollege      : AbhyasLab University\nName         : Ananya Verma\nRoll Number  : 26CS014\nAge          : 18\nMarks        : 78 | 85 | 62 | 91 | 70\nTotal        : 386\nMean         : 77.2\nMedian       : 78\nMode         : 78\nHighest      : 91\nLowest       : 62\nPassed       : True\nMarks Valid  : True\nStudy Sessions Needed : 2\n============================================</code></pre>\n\n    <h4>Environment practice</h4>\n    <ol>\n      <li>Create and activate a virtual environment named <code>unit1_env</code>.</li>\n      <li>Run <code>pip list</code>.</li>\n      <li>Run <code>pip freeze &gt; requirements.txt</code>. An empty file is acceptable when only Standard Library modules are used.</li>\n      <li>Run the project from both VS Code and the terminal.</li>\n    </ol>\n\n    <h4>Optional bonus</h4>\n    <ul>\n      <li>Read the student's name from <code>sys.argv[1]</code> when a command-line name is supplied.</li>\n      <li>Install <code>colorama</code>, add coloured terminal headings, and ensure the package appears in <code>requirements.txt</code>.</li>\n      <li>Add a second sample run in the README using different marks.</li>\n    </ul>\n\n    <h4>How to submit</h4>\n    <p>Upload the complete folder to a public GitHub repository, or upload it to Google Drive with access set to <em>Anyone with the link</em>. Open your link in a private browser window before submitting it.</p>\n  "
  }
};
