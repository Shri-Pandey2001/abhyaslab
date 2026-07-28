/* ==========================================================================
   AbhyasLab — UNIT 2
   Control Flow and Iterative Statements.
   Every "Part" from the syllabus is its own topic here.
   ========================================================================== */

const UNIT_2 = {
  unit: "Unit 2",
  unitTitle: "Control Flow and Loops",
  topics: [

  /* ============================== TOPIC 1 ============================== */
  {
    id: "u2t01",
    title: "Boolean Values and Comparisons",
    summary: "Teaching the computer to answer yes or no. Everything in this unit starts here.",
    notebookLM: "",
    notes: `
      <h4>Welcome to Unit 2</h4>
      <p>In Unit 1 your programs ran straight down the page, line by line, doing exactly the
      same thing every time.</p>
      <p>Real life is not like that. <em>If</em> it rains you take an umbrella. <em>If</em> it
      is sunny you take sunglasses. From now on your programs will make decisions.</p>
      <p>But before a computer can decide anything, it needs to know one thing:
      <strong>is this true, or is this false?</strong></p>

      <h4>The light switch</h4>
      <p>A switch in your room is either completely ON or completely OFF. There is nothing in
      between.</p>
      <p>A <strong>Boolean</strong> value works the same way. It holds one of exactly two things:</p>
      <ul>
        <li><code>True</code> — the light is on</li>
        <li><code>False</code> — the light is off</li>
      </ul>

      <div class="callout">
        <strong>Capital letters matter.</strong> <code>True</code> and <code>False</code> work.
        <code>true</code> and <code>false</code> give you a <code>NameError</code>. Python has
        never heard of them.
      </div>

      <h4>The bouncer with a measuring tape</h4>
      <p>A sign at a ride says <em>you must be 120 cm tall to ride</em>. A worker measures you,
      compares your height to the sign, and says yes or no.</p>
      <p>A <strong>comparison</strong> is a question you ask Python. The answer is always
      <code>True</code> or <code>False</code> — never anything else.</p>

      <table>
        <tr><th>Symbol</th><th>Question</th><th>Example</th><th>Answer</th></tr>
        <tr><td><code>==</code></td><td>exactly equal?</td><td><code>10 == 10</code></td><td>True</td></tr>
        <tr><td><code>!=</code></td><td>not equal?</td><td><code>5 != 10</code></td><td>True</td></tr>
        <tr><td><code>&gt;</code></td><td>bigger?</td><td><code>10 &gt; 5</code></td><td>True</td></tr>
        <tr><td><code>&lt;</code></td><td>smaller?</td><td><code>2 &lt; 8</code></td><td>True</td></tr>
        <tr><td><code>&gt;=</code></td><td>bigger or the same?</td><td><code>18 &gt;= 18</code></td><td>True</td></tr>
        <tr><td><code>&lt;=</code></td><td>smaller or the same?</td><td><code>9 &lt;= 4</code></td><td>False</td></tr>
      </table>

      <div class="callout">
        <strong>One sign or two?</strong> <code>age = 18</code> <em>puts</em> 18 into a box.
        <code>age == 18</code> <em>asks</em> whether age is 18. Mixing these up is the number
        one mistake in this whole unit.
      </div>

      <h4>Joining questions together</h4>
      <p>One question is often not enough. A cinema wants a ticket <em>and</em> an ID.</p>

      <svg class="fig" viewBox="0 0 700 180" role="img" aria-label="Truth tables for and, or and not.">
        <text x="120" y="26" text-anchor="middle" class="lbl">and — needs both</text>
        <rect class="box" x="8" y="36" width="224" height="128" rx="7"/>
        <text x="30" y="62" class="mono" style="font-size:12px">True  and True  = True</text>
        <text x="30" y="86" class="mono" style="font-size:12px">True  and False = False</text>
        <text x="30" y="110" class="mono" style="font-size:12px">False and True  = False</text>
        <text x="30" y="134" class="mono" style="font-size:12px">False and False = False</text>

        <text x="350" y="26" text-anchor="middle" class="lbl">or — needs one</text>
        <rect class="box" x="238" y="36" width="224" height="128" rx="7"/>
        <text x="260" y="62" class="mono" style="font-size:12px">True  or True  = True</text>
        <text x="260" y="86" class="mono" style="font-size:12px">True  or False = True</text>
        <text x="260" y="110" class="mono" style="font-size:12px">False or True  = True</text>
        <text x="260" y="134" class="mono" style="font-size:12px">False or False = False</text>

        <text x="580" y="26" text-anchor="middle" class="lbl">not — flips it</text>
        <rect class="box box--dark" x="468" y="36" width="224" height="128" rx="7"/>
        <text x="490" y="80" class="mono on-dark" style="font-size:12px">not True  = False</text>
        <text x="490" y="112" class="mono on-dark" style="font-size:12px">not False = True</text>
      </svg>

      <h4>Boolean expressions</h4>
      <p>Put comparisons and logical words together and you get a
      <strong>Boolean expression</strong> — one long question with one short answer.</p>
      <pre><code>age = 20
has_ticket = True

can_enter = (age > 18) and (has_ticket == True)
print(can_enter)      # True</code></pre>

      <div class="callout">
        <strong>A neater way.</strong> <code>has_ticket == True</code> works, but
        <code>has_ticket</code> on its own already <em>is</em> True or False. Experienced
        programmers write <code>if age > 18 and has_ticket:</code> — shorter and easier to read.
      </div>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What is the final answer?</p>
        <pre><code>print((5 > 2) or (10 == 100))</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">False</button>
          <button data-o="1">True</button>
          <button data-o="2">An error</button>
        </div>
        <p class="w__why">The second half is False, but <code>or</code> only needs one side to
        be True — and 5 really is bigger than 2. So the whole thing is True.</p>
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">This line crashes. Tap the problem.</p>
        <div class="w-spot__line">
          <button>is_raining</button><button>=</button><button data-bad>true</button>
        </div>
        <p class="w__why">Small <strong>t</strong>. Python's Boolean is <code>True</code> with a
        capital T. Lowercase <code>true</code> is treated as a variable name that does not
        exist, so you get a <code>NameError</code>.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">What is each expression worth?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>15 >= 16</code></button>
            <button data-pair="b"><code>(10 == 10) and (5 != 5)</code></button>
            <button data-pair="c"><code>False or True</code></button>
            <button data-pair="d"><code>not (100 > 1)</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">True</button>
            <button data-pair="a">False — 15 is smaller</button>
            <button data-pair="d">False — it flips a True</button>
            <button data-pair="b">False — the second half fails</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Work out each side first, then apply the
        <code>and</code>, <code>or</code> or <code>not</code> at the end.</p>
      </div>
    `,
    mcqs: [
      { q: "How must Boolean values be typed in Python?",
        options: ["true and false", "TRUE and FALSE", "True and False", "T and F"],
        answer: 2,
        why: "Capital first letter, small rest. Anything else is treated as a variable name Python has never heard of, and you get a NameError." },

      { q: "What is the answer to (5 > 2) or (10 == 100)?",
        options: ["False", "True", "100", "An error"],
        answer: 1,
        why: "or only needs one side to be True. The first half is true, so the whole expression is True even though the second half fails." },

      { q: "You want to check that score is NOT equal to 0. Which symbol?",
        options: ["==", "<>", "!=", "not="],
        answer: 2,
        why: "!= means \"not equal to\". The <> form was old Python 2 and no longer works." },

      { q: "What does (True) and (False) give?",
        options: ["True", "False", "Both", "An error"],
        answer: 1,
        why: "and demands that both sides are true. One failure makes the whole thing False." }
    ],
    tasks: [
      { id: "u2t01a", kind: "code",
        title: "Task 1.1 — The basic switch",
        brief: "Make a variable is_raining holding the Boolean value for yes. Print it.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "True" },
          { type: "sourceIncludes", value: "is_raining", message: "Name your variable is_raining" }
        ] },

      { id: "u2t01b", kind: "code",
        title: "Task 1.2 — The age check",
        brief: "Make my_age = 15. Print whether my_age is greater than or equal to 16. It should print False.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "False" },
          { type: "sourceIncludes", value: ">=", message: "Use the >= operator" }
        ] },

      { id: "u2t01c", kind: "code",
        title: "Task 1.3 — Coupon or sale",
        brief: "Make has_coupon = False and on_sale = True. Print whether the shopper gets a discount, using or.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "True" },
          { type: "sourceIncludes", value: "or", message: "Use the or operator" },
          { type: "sourceIncludes", value: "has_coupon", message: "Create has_coupon" }
        ] },

      { id: "u2t01d", kind: "code",
        title: "Task 1.4 — The flipper",
        brief: "Use not to flip the answer of (100 > 1), and print it.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "False" },
          { type: "sourceIncludes", value: "not", message: "Use the not operator" }
        ] }
    ]
  },

  /* ============================== TOPIC 2 ============================== */
  {
    id: "u2t02",
    title: "Truthy, Falsy and Short-Circuits",
    summary: "How Python secretly turns everything into yes or no, and how it saves itself work.",
    notebookLM: "",
    notes: `
      <h4>Who goes first?</h4>
      <p>In maths you always multiply before you add. Boolean logic has its own order too.</p>
      <table>
        <tr><th>Order</th><th>Operator</th></tr>
        <tr><td>1st</td><td><code>not</code></td></tr>
        <tr><td>2nd</td><td><code>and</code></td></tr>
        <tr><td>3rd</td><td><code>or</code></td></tr>
      </table>

      <p>Watch Python untangle a messy line, step by step:</p>
      <pre><code>False or not False and False

# step 1 — not first:   not False becomes True
#          False or True and False

# step 2 — and next:    True and False becomes False
#          False or False

# step 3 — or last:     False</code></pre>

      <div class="callout">
        <strong>Do not memorise this.</strong> Use brackets instead. <code>(a and b) or c</code>
        is never confusing, and never wrong. Professional programmers add brackets they do not
        strictly need, just so the next reader does not have to think.
      </div>

      <h4>The empty wallet</h4>
      <p>If somebody asks "do you have money?" and you show an empty wallet, the answer is
      basically <em>no</em>. Show a wallet with even one ten-rupee note and the answer is
      <em>yes</em>.</p>
      <p>Python does the same thing with every piece of data. Even things that are not
      Booleans are secretly treated as True or False.</p>

      <svg class="fig" viewBox="0 0 700 180" role="img" aria-label="Empty things are falsy, things with something in them are truthy.">
        <text x="175" y="26" text-anchor="middle" class="lbl">Falsy — empty things</text>
        <rect class="box" x="8" y="38" width="334" height="126" rx="8"/>
        <text x="34" y="70" class="mono" style="font-size:13px">0</text>
        <text x="130" y="70" class="mono" style="font-size:13px">""</text>
        <text x="226" y="70" class="mono" style="font-size:13px">[]</text>
        <text x="34" y="104" class="mono" style="font-size:13px">0.0</text>
        <text x="130" y="104" class="mono" style="font-size:13px">None</text>
        <text x="226" y="104" class="mono" style="font-size:13px">False</text>
        <text x="175" y="146" text-anchor="middle" style="font-size:12px">Python treats every one of these as False</text>

        <text x="525" y="26" text-anchor="middle" class="lbl">Truthy — things with something in them</text>
        <rect class="box box--dark" x="358" y="38" width="334" height="126" rx="8"/>
        <text x="384" y="70" class="mono on-dark" style="font-size:13px">1</text>
        <text x="470" y="70" class="mono on-dark" style="font-size:13px">-10</text>
        <text x="566" y="70" class="mono on-dark" style="font-size:13px">"Hello"</text>
        <text x="384" y="104" class="mono on-dark" style="font-size:13px">0.5</text>
        <text x="470" y="104" class="mono on-dark" style="font-size:13px">[1, 2]</text>
        <text x="566" y="104" class="mono accent" style="font-size:13px">" "</text>
        <text x="525" y="146" text-anchor="middle" class="on-dark" style="font-size:12px">Python treats every one of these as True</text>
      </svg>

      <div class="callout">
        <strong>The sneaky one.</strong> A single space, <code>" "</code>, is
        <strong>truthy</strong>. It looks empty, but a space is a real character, so the string
        is not empty. Only <code>""</code> with absolutely nothing between the quotes is falsy.
      </div>

      <p>You can check any value yourself with <code>bool()</code>:</p>
      <pre><code>print(bool("Apple"))   # True
print(bool(0))         # False
print(bool(""))        # False
print(bool(" "))       # True  ← the sneaky one</code></pre>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">Careful with this one.</p>
        <pre><code>print(bool(" "))</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">False, it looks empty</button>
          <button data-o="1">An error</button>
          <button data-o="2">True, a space is a real character</button>
        </div>
        <p class="w__why">The string holds one character — a space. It is not empty, so it is
        truthy. This catches people out when checking whether a user typed anything.</p>
      </div>

      <h4>Finding your keys</h4>
      <p>You are looking for your keys in three pockets. You check the first pocket and there
      they are. Do you carry on searching the other two? Of course not. You stop.</p>
      <p>Python does exactly this, and it is called <strong>short-circuit evaluation</strong>.</p>

      <ul>
        <li>With <code>or</code>: as soon as Python sees a True, it stops reading. The answer
        cannot change.</li>
        <li>With <code>and</code>: as soon as Python sees a False, it stops reading. The answer
        cannot change.</li>
      </ul>

      <p>Here is the proof, and it is a surprising one:</p>
      <pre><code>print(True or (100 / 0 == 5))</code></pre>
      <p>Dividing by zero normally crashes a program. But the left side is already True, so
      Python never even looks at the right side. No crash. It prints <code>True</code>.</p>

      <div class="callout">
        <strong>Why this matters.</strong> Short-circuiting is not just a speed trick — it is
        how you write safe checks. <code>if age != 0 and 100 / age &gt; 5:</code> never divides
        by zero, because the moment <code>age != 0</code> is False, Python stops.
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Truthy or falsy?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>0</code></button>
            <button data-pair="b"><code>"False"</code></button>
            <button data-pair="c"><code>[]</code></button>
            <button data-pair="d"><code>-7</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">Truthy — any number except zero</button>
            <button data-pair="a">Falsy — zero is empty</button>
            <button data-pair="b">Truthy — it is a string with letters in it</button>
            <button data-pair="c">Falsy — an empty list</button>
          </div>
        </div>
        <p class="w__why"><strong>Watch the second one.</strong> <code>"False"</code> in quotes
        is a piece of <em>text</em>, five letters long, so it is truthy. Only the Boolean
        <code>False</code> without quotes is falsy.</p>
      </div>
    `,
    mcqs: [
      { q: "Which logical operator is worked out FIRST?",
        options: ["and", "not", "or", "+"],
        answer: 1,
        why: "not, then and, then or. Brackets beat all three, which is why using them saves you from remembering this." },

      { q: "Which of these is a Falsy value?",
        options: ["The number 100", "The string \"Hello\"", "The number 0", "The string \"False\""],
        answer: 2,
        why: "Zero is falsy. \"False\" in quotes is a five-letter string, so it is truthy — a favourite exam trick." },

      { q: "What does short-circuit evaluation mean?",
        options: ["Python shuts the computer down if the code is wrong",
                  "Python stops reading a logical line as soon as it knows the answer",
                  "Python skips lines at random",
                  "Python deletes falsy values"],
        answer: 1,
        why: "Once the answer cannot change, Python stops. This is why True or (1/0) does not crash." },

      { q: "What does bool(\" \") give — a string with one space?",
        options: ["False", "True", "None", "An error"],
        answer: 1,
        why: "A space is a real character, so the string is not empty, so it is truthy. Only \"\" is falsy." }
    ],
    tasks: [
      { id: "u2t02a", kind: "code",
        title: "Task 2.1 — Order of operations",
        brief: "Without using any brackets, print the answer to: True or False and False",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "True" },
          { type: "sourceRegex", pattern: "print\\([^()]*\\)", message: "Do not use brackets inside the print" }
        ] },

      { id: "u2t02b", kind: "code",
        title: "Task 2.2 — Truthy or falsy",
        brief: "Using bool(), print the Boolean value of these four, one per line, in this order: 99 then \"\" then \" \" then 0",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "True\nFalse\nTrue\nFalse" },
          { type: "sourceMinMatches", pattern: "bool\\(", count: 4, message: "Use bool() four times" }
        ] },

      { id: "u2t02c", kind: "code",
        title: "Task 2.3 — The short-circuit proof",
        brief: "Print the answer to: True or (100 / 0 == 5)  — it will NOT crash. Work out why before you run it.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "True" },
          { type: "sourceIncludes", value: "100 / 0", message: "Include the divide-by-zero, to prove Python never reads it" }
        ] }
    ]
  },

  /* ============================== TOPIC 3 ============================== */
  {
    id: "u2t03",
    title: "if, else and elif",
    summary: "The moment your programs stop being lists and start being decisions.",
    notebookLM: "",
    notes: `
      <h4>The bouncer at the door</h4>
      <p>A bouncer stands at a club with one rule: <em>if you are 18 or older, you may come
      in.</em> If you are 17 he says nothing at all. He just ignores you.</p>
      <p>An <code>if</code> statement runs a block of code <strong>only when</strong> a
      condition is True. When it is False, Python skips the whole block as though it were not
      there.</p>

      <pre><code>age = 20

if age >= 18:
    print("Welcome to the club!")

print("Have a nice day.")</code></pre>

      <h4>The two rules you must never forget</h4>
      <ol>
        <li>The <code>if</code> line ends with a <strong>colon</strong> <code>:</code></li>
        <li>Everything belonging inside is <strong>indented</strong> — pushed right with Tab</li>
      </ol>

      <svg class="fig" viewBox="0 0 700 175" role="img" aria-label="The colon opens the block and the indentation shows what is inside it.">
        <text class="mono" x="30" y="52" style="font-size:17px">if age &gt;= 18</text>
        <text class="mono accent" x="188" y="52" style="font-size:17px">:</text>
        <text class="mono" x="30" y="86" style="font-size:17px">    print("Welcome!")</text>
        <text class="mono" x="30" y="120" style="font-size:17px">print("Have a nice day.")</text>

        <path class="good" stroke="#D67F19" d="M196 40 v-16 h150"/>
        <text x="352" y="28" class="lbl">the colon opens the block</text>

        <path class="good" d="M28 96 h-14 v-22 h14"/>
        <text x="356" y="86" style="font-size:12px">indented — runs only if the answer was True</text>

        <text x="356" y="120" style="font-size:12px">not indented — always runs, whatever happened</text>
      </svg>

      <h4>The fork in the road</h4>
      <p>What if the bouncer should say something to the people he turns away?</p>
      <p><code>else</code> is the backup plan. It means: <em>if the question was False, do
      this instead.</em></p>

      <pre><code>weather = "Raining"

if weather == "Sunny":
    print("Wear sunglasses!")
else:
    print("Take an umbrella!")</code></pre>

      <div class="callout">
        <strong><code>else</code> never gets a question.</strong> It is just
        <code>else:</code> — no condition, no comparison. It catches everything the
        <code>if</code> did not.
      </div>

      <h4>More than two choices — elif</h4>
      <p>Grading a test is not a yes-or-no decision. 90 or more is an A. Otherwise, 80 or more
      is a B. Otherwise, 70 or more is a C. Otherwise you failed.</p>
      <p>Python shortens "else if" to <strong><code>elif</code></strong>. You may chain as many
      as you like.</p>

      <pre><code>score = 85

if score >= 90:
    print("You got an A!")
elif score >= 80:
    print("You got a B!")
elif score >= 70:
    print("You got a C!")
else:
    print("You failed.")</code></pre>

      <div class="callout">
        <strong>Python stops at the first True.</strong> Here 85 is not 90 or more, so it moves
        on. 85 <em>is</em> 80 or more — so it prints B and <strong>skips the rest of the chain
        completely</strong>. It never even looks at the 70 test.
      </div>

      <p>That is why <strong>order matters</strong>. Put the checks in the wrong order and the
      chain breaks:</p>
      <pre><code># WRONG — everybody who passes gets a C
if score >= 70:
    print("C")
elif score >= 90:
    print("A")      # can never be reached!</code></pre>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this print?</p>
        <pre><code>score = 95
if score >= 70:
    print("C")
elif score >= 90:
    print("A")</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">A</button>
          <button data-o="1">C</button>
          <button data-o="2">Both C and A</button>
        </div>
        <p class="w__why">95 is 70 or more, so the very first test passes. Python prints C and
        jumps straight past the rest of the chain. The A branch can never run. Always put the
        strictest test first.</p>
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">This line gives a SyntaxError. Tap the problem.</p>
        <div class="w-spot__line">
          <button>if</button><button>score</button><button data-bad>=</button><button>100</button><button>:</button>
        </div>
        <p class="w__why">One equals sign <em>puts</em> a value in a box. To <em>ask</em> a
        question you need two: <code>if score == 100:</code>. Python catches this one for you,
        which is kinder than most languages.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">What is each part for?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>if</code></button>
            <button data-pair="b"><code>elif</code></button>
            <button data-pair="c"><code>else</code></button>
            <button data-pair="d">The colon <code>:</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">The catch-all — no question attached</button>
            <button data-pair="a">The first question asked</button>
            <button data-pair="d">Opens the block on every one of them</button>
            <button data-pair="b">Another question, asked only if the earlier ones failed</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> A chain always starts with one
        <code>if</code>, may have any number of <code>elif</code>s, and ends with at most one
        <code>else</code>.</p>
      </div>
    `,
    mcqs: [
      { q: "What must go at the end of an if, elif or else line?",
        options: ["A semicolon ;", "A full stop .", "A colon :", "A hash #"],
        answer: 2,
        why: "The colon opens the block. Forget it and Python gives you a SyntaxError straight away." },

      { q: "How does Python know which lines are inside the if?",
        options: ["They are highlighted in red",
                  "They are indented — pushed to the right",
                  "They are in capital letters",
                  "You write End after them"],
        answer: 1,
        why: "Indentation is the law in Python. Other languages use curly brackets; Python uses space." },

      { q: "In an if-elif-else chain, what happens as soon as one condition is True?",
        options: ["It runs that block and skips the whole rest of the chain",
                  "It runs that block and keeps checking the others anyway",
                  "It crashes",
                  "It prints True"],
        answer: 0,
        why: "First match wins, then Python leaves. That is why the order of your tests matters so much." },

      { q: "Why does if score = 100: crash?",
        options: ["100 is too big",
                  "It is missing a colon",
                  "One equals sign assigns a value; asking a question needs two",
                  "It is not indented"],
        answer: 2,
        why: "= puts something in a box. == asks whether two things match. Inside an if you almost always want ==." }
    ],
    tasks: [
      { id: "u2t03a", kind: "code",
        title: "Task 3.1 — The password check",
        brief: "Make password = \"secret123\". Write an if statement that prints Access Granted when it matches exactly.",
        starter: 'password = "secret123"\n',
        checks: [
          { type: "stdoutEquals", value: "Access Granted" },
          { type: "sourceRegex", pattern: "if\\s+.*==", message: "Use an if with ==" }
        ] },

      { id: "u2t03b", kind: "code",
        title: "Task 3.2 — The ticket checker",
        brief: "Make has_ticket = False. Write an if-else: if True print Enjoy the movie, otherwise print You must buy a ticket.",
        starter: 'has_ticket = False\n',
        checks: [
          { type: "stdoutEquals", value: "You must buy a ticket" },
          { type: "sourceIncludes", value: "else", message: "Use an else branch" }
        ] },

      { id: "u2t03c", kind: "code",
        title: "Task 3.3 — The temperature gauge",
        brief: "Make temp = 30. Chain: over 80 print It's hot, else over 60 print It's nice, otherwise print It's cold.",
        starter: 'temp = 30\n',
        checks: [
          { type: "stdoutEquals", value: "It's cold" },
          { type: "sourceIncludes", value: "elif", message: "Use elif for the middle branch" }
        ] },

      { id: "u2t03d", kind: "code",
        title: "Task 3.4 — Odd or even",
        brief: "Make number = 14. Using the modulus operator from Unit 1, print Even or Odd.",
        starter: 'number = 14\n',
        checks: [
          { type: "stdoutEquals", value: "Even" },
          { type: "sourceIncludes", value: "%", message: "Use the % operator" },
          { type: "sourceIncludes", value: "if", message: "Use an if statement" }
        ] }
    ]
  },

  /* ============================== TOPIC 4 ============================== */
  {
    id: "u2t04",
    title: "Nested Conditions and the One-Line if",
    summary: "Decisions inside decisions, and the shortcut that fits on a single line.",
    notebookLM: "",
    notes: `
      <h4>Airport security</h4>
      <p>At the airport, a guard checks your ID. <strong>Only if</strong> you pass that check
      do you move on to the bag scanner. Fail the first check and you never even reach the
      second one.</p>
      <p>A <strong>nested conditional</strong> is an <code>if</code> inside another
      <code>if</code>. You indent it one extra level.</p>

      <pre><code>has_id = True
has_pass = True

if has_id:
    print("ID accepted. Move to bag check.")

    if has_pass:
        print("You may board the plane!")
    else:
        print("You cannot board without a pass.")

else:
    print("No ID — stop right there!")</code></pre>

      <svg class="fig" viewBox="0 0 700 210" role="img" aria-label="The outer check must pass before the inner check is even reached.">
        <rect class="box box--dark" x="8" y="30" width="684" height="164" rx="10"/>
        <text x="34" y="60" class="mono on-dark" style="font-size:13px">if has_id:</text>
        <text x="34" y="84" class="mono accent" style="font-size:12px">    print("ID accepted")</text>

        <rect x="52" y="96" width="620" height="62" rx="7" fill="rgba(242,160,61,.14)" stroke="#D67F19" stroke-width="2"/>
        <text x="72" y="120" class="mono on-dark" style="font-size:13px">    if has_pass:</text>
        <text x="72" y="144" class="mono accent" style="font-size:12px">        print("You may board!")</text>

        <text x="360" y="182" text-anchor="middle" class="on-dark" style="font-size:12px">The inner box is only ever opened when the outer one passes</text>
      </svg>

      <div class="callout">
        <strong>Watch your Tab key.</strong> Every level of nesting is one more indent. Two
        levels deep means eight spaces. Get it wrong and Python attaches your code to the wrong
        <code>if</code> — which usually runs without an error and gives the wrong answer, the
        worst kind of bug.
      </div>

      <h4>The drive-thru shortcut</h4>
      <p>A normal <code>if-else</code> that just picks between two values takes four lines:</p>
      <pre><code>age = 15
if age >= 18:
    status = "Adult"
else:
    status = "Minor"</code></pre>

      <p>Python has a shortcut called a <strong>conditional expression</strong>, or
      <strong>ternary operator</strong>. The whole thing fits on one line, and it reads almost
      like English:</p>
      <pre><code>status = "Adult" if age >= 18 else "Minor"</code></pre>

      <p>The shape is always the same:</p>
      <pre><code>value_if_true  if  condition  else  value_if_false</code></pre>

      <div class="callout">
        <strong>Use it for small choices only.</strong> Picking between two words or two
        numbers — perfect. Anything with three branches, or that needs to <em>do</em> something
        rather than just pick a value, belongs in a normal <code>if</code>.
      </div>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What is printed?</p>
        <pre><code>battery = 15
mode = "Dark" if battery < 20 else "Light"
print(mode)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">Dark</button>
          <button data-o="1">Light</button>
          <button data-o="2">15</button>
        </div>
        <p class="w__why">Read it left to right: take "Dark" <em>if</em> the battery is under
        20, <em>else</em> take "Light". 15 is under 20, so <code>mode</code> becomes "Dark".</p>
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">This ternary is written in the wrong order. Tap the part that is out of place.</p>
        <div class="w-spot__line">
          <button data-bad>if age &gt;= 18</button><button>"Adult"</button><button>else</button><button>"Minor"</button>
        </div>
        <p class="w__why">The <em>value</em> comes first, then the condition. It should read
        <code>"Adult" if age &gt;= 18 else "Minor"</code>. Many other languages put the
        condition first, which is why this trips people up.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which tool for which job?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Pick between two words and store it</button>
            <button data-pair="b">Check the ID, then check the bag</button>
            <button data-pair="c">Grade a test into A, B, C or F</button>
            <button data-pair="d">Do one thing only when a check passes</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">A long if-elif-else chain</button>
            <button data-pair="a">A ternary on one line</button>
            <button data-pair="d">A plain if with no else</button>
            <button data-pair="b">A nested if</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Choosing the right shape makes code much
        easier for the next person to read — and that next person is usually you, next month.</p>
      </div>
    `,
    mcqs: [
      { q: "What is a nested conditional?",
        options: ["A conditional about birds",
                  "An if statement placed inside another if statement",
                  "An if statement the computer ignores",
                  "Using elif three times"],
        answer: 1,
        why: "One decision inside another. The inner one is only ever reached when the outer one passes." },

      { q: "How do you nest an if inside another if?",
        options: ["Put it in brackets", "Indent it one extra level to the right",
                  "Write it on the same line", "Put a # in front"],
        answer: 1,
        why: "Each level of nesting is one more indent. Python uses that space to work out what belongs to what." },

      { q: "What is the main benefit of a ternary operator?",
        options: ["It runs millions of times faster",
                  "It fits a simple if-else onto one readable line",
                  "It fixes your errors",
                  "It hides your code"],
        answer: 1,
        why: "It is about readability, not speed. Four lines become one when all you are doing is choosing between two values." },

      { q: "Which is the correct ternary?",
        options: ["if age >= 18 \"Adult\" else \"Minor\"",
                  "\"Adult\" if age >= 18 else \"Minor\"",
                  "if age >= 18 then \"Adult\" else \"Minor\"",
                  "\"Adult\" else \"Minor\" if age >= 18"],
        answer: 1,
        why: "Value first, then the condition, then else, then the other value. Python has no then keyword at all." }
    ],
    tasks: [
      { id: "u2t04a", kind: "code",
        title: "Task 4.1 — The treasure vault",
        brief: "Make has_key = True and door_unlocked = True. Nest one if inside another so that only when BOTH are true it prints: You found the treasure!",
        starter: 'has_key = True\ndoor_unlocked = True\n',
        checks: [
          { type: "stdoutEquals", value: "You found the treasure!" },
          { type: "sourceMinMatches", pattern: "^\\s*if\\s", count: 2, message: "Use two if statements, one nested inside the other" },
          { type: "sourceRegex", pattern: "^\\s{4,}if\\s", message: "The second if must be indented inside the first" }
        ] },

      { id: "u2t04b", kind: "code",
        title: "Task 4.2 — Ternary translation",
        brief: "Make is_raining = True. In ONE line using a ternary, set action to Stay inside when it is raining, else Go outside. Then print action.",
        starter: 'is_raining = True\n',
        checks: [
          { type: "stdoutEquals", value: "Stay inside" },
          { type: "sourceRegex", pattern: "if.*else", message: "Use a one-line ternary: value if condition else value" },
          { type: "sourceRegex", pattern: "^\\s*action\\s*=.*if.*else", message: "The whole choice must be on the action = line" }
        ] },

      { id: "u2t04c", kind: "code",
        title: "Task 4.3 — Battery saver",
        brief: "Make battery = 15. Use a ternary to set screen_mode to Dark Mode when the battery is under 20, else Light Mode. Print screen_mode.",
        starter: 'battery = 15\n',
        checks: [
          { type: "stdoutEquals", value: "Dark Mode" },
          { type: "sourceRegex", pattern: "^\\s*screen_mode\\s*=.*if.*else", message: "Use a ternary on the screen_mode line" }
        ] }
    ]
  },

  /* ============================== TOPIC 5 ============================== */
  {
    id: "u2t05",
    title: "Common Mistakes and Dry-Running",
    summary: "The three traps everybody falls into, and the paper-and-pencil skill that saves you.",
    notebookLM: "",
    notes: `
      <h4>Trap 1 — the missing colon</h4>
      <p>Every <code>if</code>, <code>elif</code> and <code>else</code> line ends with a colon.
      Forget it and Python stops immediately with a <code>SyntaxError</code>.</p>
      <pre><code>if x > 5        # wrong
if x > 5:       # right</code></pre>

      <h4>Trap 2 — one equals sign instead of two</h4>
      <p>From Unit 1: <code>=</code> puts something in a box, <code>==</code> asks a question.</p>
      <pre><code>if score = 100:     # wrong — crashes
if score == 100:    # right — asks a question</code></pre>

      <h4>Trap 3 — forgetting to indent</h4>
      <p>After a colon, Python expects the next line to be pushed right. If it is not, Python
      does not know what belongs inside the decision.</p>
      <pre><code>if lives == 0:
print("Game Over")     # IndentationError</code></pre>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="The three most common mistakes: missing colon, single equals, and missing indentation.">
        <rect class="box" x="8" y="34" width="216" height="130" rx="8"/>
        <text x="116" y="62" text-anchor="middle" style="font-size:13px;font-weight:700">Missing colon</text>
        <text x="116" y="92" text-anchor="middle" class="mono" style="font-size:12px">if x &gt; 5</text>
        <text x="116" y="126" text-anchor="middle" class="mono" fill="#CF4A3C" style="font-size:11.5px">SyntaxError</text>

        <rect class="box" x="242" y="34" width="216" height="130" rx="8"/>
        <text x="350" y="62" text-anchor="middle" style="font-size:13px;font-weight:700">One equals sign</text>
        <text x="350" y="92" text-anchor="middle" class="mono" style="font-size:12px">if score = 100:</text>
        <text x="350" y="126" text-anchor="middle" class="mono" fill="#CF4A3C" style="font-size:11.5px">SyntaxError</text>

        <rect class="box" x="476" y="34" width="216" height="130" rx="8"/>
        <text x="584" y="62" text-anchor="middle" style="font-size:13px;font-weight:700">No indent</text>
        <text x="584" y="92" text-anchor="middle" class="mono" style="font-size:12px">print("Game Over")</text>
        <text x="584" y="126" text-anchor="middle" class="mono" fill="#CF4A3C" style="font-size:11.5px">IndentationError</text>
      </svg>

      <div class="callout">
        <strong>The good news.</strong> All three of these crash <em>loudly</em>, on the right
        line, before anything else happens. Python is being kind. The bugs that really hurt are
        the ones that run perfectly and quietly give you the wrong answer — and for those you
        need the next skill.
      </div>

      <h4>Dry-running — playing computer</h4>
      <p>Before you put a real mouse in a maze, you trace the path with your finger on the
      plan to check there are no dead ends.</p>
      <p><strong>Dry-running</strong> means stepping away from the keyboard, taking a pen and
      paper, and pretending <em>you</em> are the computer. You read one line at a time and
      write down what every variable holds.</p>

      <p>Trace this:</p>
      <pre><code>1  x = 10
2  y = 5
3  if x > 8:
4      x = x + y
5  else:
6      x = x - y
7  print(x)</code></pre>

      <table>
        <tr><th>Line</th><th>What happens</th><th>x</th><th>y</th></tr>
        <tr><td>1</td><td>put 10 in x</td><td>10</td><td>—</td></tr>
        <tr><td>2</td><td>put 5 in y</td><td>10</td><td>5</td></tr>
        <tr><td>3</td><td>is 10 &gt; 8? yes → step inside</td><td>10</td><td>5</td></tr>
        <tr><td>4</td><td>10 + 5</td><td><strong>15</strong></td><td>5</td></tr>
        <tr><td>5-6</td><td>skipped, the if was true</td><td>15</td><td>5</td></tr>
        <tr><td>7</td><td>print</td><td colspan="2"><strong>15</strong></td></tr>
      </table>

      <div class="callout">
        <strong>This is the single best debugging skill you can build.</strong> It costs
        nothing, needs no software, and works in exams where you have no computer at all. Every
        good programmer does it, usually without noticing.
      </div>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Dry-run it</span>
        <p class="w__q">Trace this on paper first. What is printed?</p>
        <pre><code>money = 20
if money >= 50:
    money = money - 10
elif money >= 10:
    money = money - 5
else:
    money = 0
print(money)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">20</button>
          <button data-o="1">15</button>
          <button data-o="2">0</button>
        </div>
        <p class="w__why">20 is not 50 or more, so the first branch is skipped. 20 <em>is</em>
        10 or more, so the elif runs: 20 − 5 = 15. The else never happens.</p>
      </div>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Dry-run it</span>
        <p class="w__q">Now a nested one. What is printed?</p>
        <pre><code>a = 10
b = 20
if a == 10:
    if b < 30:
        print("Path 1")
    else:
        print("Path 2")
else:
    print("Path 3")</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">Path 1</button>
          <button data-o="1">Path 2</button>
          <button data-o="2">Path 3</button>
        </div>
        <p class="w__why">a is 10, so we step inside. b is 20, which is under 30, so the inner
        if passes too. Path 1. The outer else is never reached because the outer if succeeded.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which error does each mistake produce?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>if weather == "Snow"</code></button>
            <button data-pair="b"><code>if lives == 0:</code><br><code>print("Over")</code></button>
            <button data-pair="c"><code>if name = "John":</code></button>
            <button data-pair="d"><code>print(totl)</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">NameError</button>
            <button data-pair="a">SyntaxError — no colon</button>
            <button data-pair="c">SyntaxError — one equals sign</button>
            <button data-pair="b">IndentationError</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Learn to recognise these four messages and
        you will fix most first-year bugs in seconds instead of minutes.</p>
      </div>
    `,
    mcqs: [
      { q: "Why does if name = \"John\": crash?",
        options: ["John is not allowed", "It is missing a colon",
                  "It uses one equals sign, which assigns, instead of two, which asks",
                  "It is not indented"],
        answer: 2,
        why: "A single = puts a value into a variable. Inside an if you need == to compare." },

      { q: "What does dry-running a program mean?",
        options: ["Running it without internet",
                  "Tracing the code step by step on paper, acting like the computer",
                  "Deleting all the variables",
                  "Saving it to a pen drive"],
        answer: 1,
        why: "Pen, paper, one line at a time, writing down every variable as it changes. It works in exams too, where there is no computer." },

      { q: "You get an IndentationError on line 4. What did you forget?",
        options: ["To press Tab and push the line to the right",
                  "To put a colon at the end",
                  "To use a capital letter",
                  "To import a module"],
        answer: 0,
        why: "After a colon Python expects the next line to be indented. Without it, nothing is inside the decision." },

      { q: "Which of these bugs is the HARDEST to find?",
        options: ["A missing colon", "A missing indent",
                  "Code that runs fine but quietly gives the wrong answer",
                  "Using = instead of =="],
        answer: 2,
        why: "The first, second and fourth all crash loudly on the right line. A wrong answer with no error is the one that needs dry-running." }
    ],
    tasks: [
      { id: "u2t05a", kind: "code",
        title: "Task 5.1 — Fix the missing colon",
        brief: "This crashes. Add what is missing so it prints: Build a snowman!",
        starter: 'weather = "Snow"\nif weather == "Snow"\n    print("Build a snowman!")\n',
        checks: [
          { type: "stdoutEquals", value: "Build a snowman!" }
        ] },

      { id: "u2t05b", kind: "code",
        title: "Task 5.2 — Fix the indentation",
        brief: "This crashes with an IndentationError. Fix it so it prints: Game Over",
        starter: 'lives = 0\nif lives == 0:\nprint("Game Over")\n',
        checks: [
          { type: "stdoutEquals", value: "Game Over" }
        ] },

      { id: "u2t05c", kind: "code",
        title: "Task 5.3 — Fix the equals sign",
        brief: "This crashes. Fix the comparison so it prints: Perfect score",
        starter: 'score = 100\nif score = 100:\n    print("Perfect score")\n',
        checks: [
          { type: "stdoutEquals", value: "Perfect score" },
          { type: "sourceIncludes", value: "==", message: "Use == to compare" }
        ] },

      { id: "u2t05d", kind: "code",
        title: "Task 5.4 — Write one perfectly",
        brief: "Make speed = 80. Write a clean if-else: over 65 prints Speeding ticket, otherwise prints Safe speed. Colon and indent must be perfect.",
        starter: 'speed = 80\n',
        checks: [
          { type: "stdoutEquals", value: "Speeding ticket" },
          { type: "sourceIncludes", value: "else", message: "Include an else branch" }
        ] }
    ]
  },

  /* ============================== TOPIC 6 ============================== */
  {
    id: "u2t06",
    title: "while and for Loops",
    summary: "If conditions are the brain of programming, loops are the muscle.",
    notebookLM: "",
    notes: `
      <h4>Why loops exist</h4>
      <p>A teacher tells you to write "I will not talk in class" on the board 100 times. Your
      hand aches by number 30.</p>
      <p>Programmers are lazy in the best possible way. To print that sentence 100 times we do
      not write <code>print()</code> a hundred times. We tell the computer:
      <em>do this one thing, 100 times</em>.</p>

      <h4>The treadmill — a while loop</h4>
      <p>You step on a treadmill and say: "I will keep running <em>while</em> my heart rate is
      under 150." The moment it reaches 150, you stop.</p>
      <p>A <code>while</code> loop repeats a block <strong>as long as a condition stays
      True</strong>. The moment it turns False, the loop ends.</p>

      <pre><code>count = 1

while count <= 3:
    print("Running lap", count)
    count += 1        # ← without this line the loop NEVER stops

print("Done running!")</code></pre>

      <div class="callout">
        <strong>The most important line is the last one inside.</strong> If you never change
        the variable the condition is testing, the answer stays True forever and the loop runs
        until the computer gives up. We will look at that properly in the next topic.
      </div>

      <h4>The assembly line — a for loop</h4>
      <p>You work at a toy factory. A box of toys arrives. You pick up the first toy, check
      it, put it down. Then the second. Then the third. When the box is empty, you stop —
      without anybody telling you how many toys there were.</p>
      <p>A <code>for</code> loop walks through a collection one item at a time and stops by
      itself at the end.</p>

      <pre><code>toys = ["Car", "Doll", "Block"]

for toy in toys:
    print("Checking the:", toy)

print("The box is empty!")</code></pre>

      <p>It works on text too — a string is just a collection of letters:</p>
      <pre><code>for letter in "CAT":
    print(letter)

# C
# A
# T</code></pre>

      <svg class="fig" viewBox="0 0 700 215" role="img" aria-label="A while loop repeats until its condition turns false; a for loop walks through each item and stops at the end.">
        <text x="168" y="26" text-anchor="middle" class="lbl">while — repeat until it stops being true</text>
        <rect class="box box--dark" x="8" y="38" width="320" height="140" rx="8"/>
        <text x="32" y="70" class="mono on-dark" style="font-size:12px">count = 1</text>
        <text x="32" y="94" class="mono on-dark" style="font-size:12px">while count &lt;= 3:</text>
        <text x="32" y="118" class="mono accent" style="font-size:12px">    print(count)</text>
        <text x="32" y="142" class="mono accent" style="font-size:12px">    count += 1</text>
        <text x="168" y="200" text-anchor="middle" style="font-size:12px">You control when it ends</text>

        <text x="532" y="26" text-anchor="middle" class="lbl">for — one item at a time</text>
        <rect class="box box--dark" x="372" y="38" width="320" height="140" rx="8"/>
        <text x="396" y="70" class="mono on-dark" style="font-size:12px">toys = ["Car", "Doll"]</text>
        <text x="396" y="94" class="mono on-dark" style="font-size:12px">for toy in toys:</text>
        <text x="396" y="118" class="mono accent" style="font-size:12px">    print(toy)</text>
        <text x="532" y="200" text-anchor="middle" style="font-size:12px">It ends by itself, at the end of the box</text>
      </svg>

      <h4>Which one should you use?</h4>
      <table>
        <tr><th>Use a for loop when…</th><th>Use a while loop when…</th></tr>
        <tr>
          <td>You have a list, a string, or a range to walk through</td>
          <td>You do not know how many times — you only know when to stop</td>
        </tr>
        <tr>
          <td>You know how many times before you start</td>
          <td>You are waiting for something to happen</td>
        </tr>
        <tr>
          <td>Example: greet every guest on a list</td>
          <td>Example: keep asking until the password is right</td>
        </tr>
      </table>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">How many lines does this print?</p>
        <pre><code>for letter in "PYTHON":
    print(letter)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">1 — the whole word</button>
          <button data-o="1">5</button>
          <button data-o="2">6 — one per letter</button>
        </div>
        <p class="w__why">A <code>for</code> loop treats a string as a collection of letters, so
        it runs once for each: P, Y, T, H, O, N. Six lines.</p>
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">This loop is supposed to print 1, 2, 3 — but it never stops. Tap the missing piece.</p>
        <div class="w-spot__line">
          <button>x = 1</button><button>while x &lt;= 3:</button><button>print(x)</button><button data-bad>(nothing here)</button>
        </div>
        <p class="w__why">There is no <code>x += 1</code>. <code>x</code> stays 1 forever, so
        <code>x &lt;= 3</code> is always True and the loop never ends. Every while loop needs
        something inside it that eventually makes the condition false.</p>
      </div>

      <div class="callout">
        <strong>You are safe here.</strong> If you do write an endless loop in the boxes below,
        this page stops it after 5 seconds and tells you what happened. On your own machine
        it would run forever — press <strong>Ctrl + C</strong> to stop it.
      </div>
    `,
    mcqs: [
      { q: "Why do programmers use loops?",
        options: ["To make the computer slower",
                  "To repeat a block of code without typing it out again and again",
                  "To check for errors",
                  "To create variables"],
        answer: 1,
        why: "One block of code, run as many times as you need. Less typing, fewer mistakes, and it works for 3 items or 3 million." },

      { q: "How does a while loop know when to stop?",
        options: ["When it reaches the end of a list",
                  "When the user presses Escape",
                  "When its condition finally becomes False",
                  "It stops automatically after 10 rounds"],
        answer: 2,
        why: "It tests the condition before every single round. The first time the answer is False, the loop ends." },

      { q: "You want to do something to every letter in \"APPLE\". Which loop fits best?",
        options: ["A while loop", "A for loop", "An if loop", "An infinite loop"],
        answer: 1,
        why: "A for loop walks through a collection and stops by itself. A while loop would work but you would have to count the letters yourself." },

      { q: "What is missing from: x = 1 / while x <= 3: / print(x)",
        options: ["A colon", "Something inside that changes x",
                  "An else block", "An import"],
        answer: 1,
        why: "Without x += 1 the condition stays True forever. This is the most common loop bug there is." }
    ],
    tasks: [
      { id: "u2t06a", kind: "code",
        title: "Task 6.1 — The blastoff",
        brief: "Make countdown = 5. Use a while loop to print 5, 4, 3, 2, 1 each on its own line, then print Blastoff! after the loop.",
        starter: 'countdown = 5\n',
        checks: [
          { type: "stdoutEquals", value: "5\n4\n3\n2\n1\nBlastoff!" },
          { type: "sourceIncludes", value: "while", message: "Use a while loop" }
        ] },

      { id: "u2t06b", kind: "code",
        title: "Task 6.2 — The letter printer",
        brief: "Use a for loop to print each letter of the word PYTHON on its own line.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "P\nY\nT\nH\nO\nN" },
          { type: "sourceIncludes", value: "for", message: "Use a for loop" }
        ] },

      { id: "u2t06c", kind: "code",
        title: "Task 6.3 — The guest list",
        brief: "A list is given. Use a for loop to greet each guest, printing exactly: Welcome to the party, Alice  (and so on).",
        starter: 'guests = ["Alice", "Bob", "Charlie"]\n',
        checks: [
          { type: "stdoutEquals", value: "Welcome to the party, Alice\nWelcome to the party, Bob\nWelcome to the party, Charlie" },
          { type: "sourceIncludes", value: "for", message: "Use a for loop" }
        ] },

      { id: "u2t06d", kind: "code",
        title: "Task 6.4 — Fix the endless loop",
        brief: "This loop never stops. Add the one line it needs so it prints 1, 2, 3 and then ends.",
        starter: 'x = 1\nwhile x <= 3:\n    print(x)\n',
        checks: [
          { type: "stdoutEquals", value: "1\n2\n3" }
        ] }
    ]
  },

  /* ============================== TOPIC 7 ============================== */
  {
    id: "u2t07",
    title: "Nested Loops and Endless Loops",
    summary: "Loops inside loops, the broken record, and the loop that gets an else.",
    notebookLM: "",
    notes: `
      <h4>The digital clock</h4>
      <p>Look at a clock. The minutes tick 00, 01, 02 … all the way to 59. Only when the
      minutes have finished a full cycle does the hour change by one.</p>
      <p>A <strong>nested loop</strong> is a loop inside another loop, and it behaves exactly
      like that clock.</p>

      <div class="callout">
        <strong>The rule.</strong> The inner loop finishes <em>all</em> of its rounds for
        <em>every single</em> round of the outer loop.
      </div>

      <pre><code>for hour in ["1 PM", "2 PM"]:
    print("Hour:", hour)

    for minute in ["00", "30"]:
        print("   Minute:", minute)</code></pre>

      <p>That prints six lines, not four:</p>
      <pre><code>Hour: 1 PM
   Minute: 00
   Minute: 30
Hour: 2 PM
   Minute: 00
   Minute: 30</code></pre>

      <svg class="fig" viewBox="0 0 700 200" role="img" aria-label="The outer loop runs twice and the inner loop runs fully inside each of those rounds.">
        <text x="350" y="24" text-anchor="middle" class="lbl">2 outer rounds × 2 inner rounds = 4 inner runs</text>

        <rect class="box" x="8" y="38" width="334" height="140" rx="8"/>
        <text x="175" y="66" text-anchor="middle" style="font-size:13px;font-weight:700">Outer round 1</text>
        <rect x="32" y="80" width="286" height="34" rx="6" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="1.8"/>
        <text x="175" y="102" text-anchor="middle" class="mono" style="font-size:12px">inner: 00</text>
        <rect x="32" y="122" width="286" height="34" rx="6" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="1.8"/>
        <text x="175" y="144" text-anchor="middle" class="mono" style="font-size:12px">inner: 30</text>

        <rect class="box" x="358" y="38" width="334" height="140" rx="8"/>
        <text x="525" y="66" text-anchor="middle" style="font-size:13px;font-weight:700">Outer round 2</text>
        <rect x="382" y="80" width="286" height="34" rx="6" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="1.8"/>
        <text x="525" y="102" text-anchor="middle" class="mono" style="font-size:12px">inner: 00</text>
        <rect x="382" y="122" width="286" height="34" rx="6" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="1.8"/>
        <text x="525" y="144" text-anchor="middle" class="mono" style="font-size:12px">inner: 30</text>
      </svg>

      <p>It works with <code>while</code> loops too, and you can even mix the two. A gym
      routine of 3 sets with 5 push-ups each:</p>
      <pre><code>sets = 1
while sets <= 3:
    print(f"Set {sets}")

    reps = 1
    while reps <= 5:
        print(f"   Push-up {reps}")
        reps += 1        # ← the inner counter

    sets += 1            # ← the outer counter</code></pre>

      <div class="callout">
        <strong>Two counters, two resets.</strong> Notice that <code>reps = 1</code> sits
        <em>inside</em> the outer loop. If you put it at the very top instead, the second set
        would start where the first one stopped, and you would only ever do five push-ups in
        total.
      </div>

      <h4>The broken record</h4>
      <p>A scratched record plays the same two seconds of a song forever. That is an
      <strong>infinite loop</strong>.</p>
      <p>It happens when a <code>while</code> condition never becomes False — almost always
      because you forgot to change the variable.</p>

      <pre><code>battery = 100
while battery > 0:
    print("Playing game!")
    # battery never goes down, so this runs forever</code></pre>

      <div class="callout">
        <strong>How to escape one.</strong> In a real terminal, press <strong>Ctrl + C</strong>
        to force it to stop. In the boxes on this page, your program is stopped automatically
        after five seconds and you get a clear message.
      </div>

      <p>Not every endless loop is a bug, though. <code>while True:</code> is a normal, useful
      pattern — as long as something inside it eventually breaks out. You will meet that in
      Topic 9.</p>

      <h4>The search party — else on a loop</h4>
      <p>You are searching a forest for a lost dog. Two things can happen:</p>
      <ul>
        <li>You find the dog and stop searching.</li>
        <li>You search the whole forest, find nothing, and say <em>"I checked everywhere."</em></li>
      </ul>
      <p>Python lets you attach an <code>else</code> to a loop. It runs <strong>only if the
      loop finished naturally</strong>, without being stopped early.</p>

      <pre><code>for item in ["Apple", "Banana", "Cherry"]:
    print("Checking:", item)
else:
    print("I checked every item!")</code></pre>

      <div class="callout">
        <strong>This surprises everybody.</strong> A loop's <code>else</code> has nothing to do
        with an <code>if</code>'s <code>else</code>. Read it as <em>"and afterwards, if nothing
        interrupted us…"</em>.
      </div>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">How many lines does this print in total?</p>
        <pre><code>for a in [1, 2, 3]:
    for b in ["x", "y"]:
        print(a, b)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">5</button>
          <button data-o="1">6</button>
          <button data-o="2">3</button>
        </div>
        <p class="w__why">3 outer rounds × 2 inner rounds = 6. The inner loop runs completely
        every single time the outer one takes one step. Multiply, do not add.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">What causes what?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Forgetting to change the counter</button>
            <button data-pair="b">A loop inside a loop</button>
            <button data-pair="c"><code>else</code> attached to a loop</button>
            <button data-pair="d">Ctrl + C</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Runs only if nothing stopped the loop early</button>
            <button data-pair="a">An infinite loop</button>
            <button data-pair="d">Force-stops a runaway program in the terminal</button>
            <button data-pair="b">Inner rounds multiply by outer rounds</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Nested loops are powerful and expensive —
        a 1000-item loop inside another 1000-item loop is a million rounds.</p>
      </div>
    `,
    mcqs: [
      { q: "In a nested loop, how do the two loops run?",
        options: ["At the same time",
                  "The inner loop finishes all its rounds during every single round of the outer loop",
                  "The outer loop finishes before the inner one starts",
                  "Python ignores the inner loop"],
        answer: 1,
        why: "Like a clock: the minutes complete a full cycle before the hour moves once. Total rounds are outer times inner." },

      { q: "What causes an infinite loop?",
        options: ["Using a for loop on a long list",
                  "Forgetting to indent",
                  "A while condition that never becomes False",
                  "Typing the word infinity"],
        answer: 2,
        why: "Usually a counter you forgot to change inside the loop, so the condition stays True forever." },

      { q: "When does an else attached to a loop actually run?",
        options: ["If the loop crashes",
                  "If the condition was False from the start",
                  "Only when the loop finishes all its rounds without being stopped early",
                  "Continuously"],
        answer: 2,
        why: "Read it as \"and afterwards, if nothing interrupted us\". Something that stops the loop early skips the else entirely." },

      { q: "A for loop over 4 items contains a loop over 5 items. How many times does the inner body run?",
        options: ["9", "5", "4", "20"],
        answer: 3,
        why: "4 × 5 = 20. Nested loops multiply, which is why they get slow so quickly with big data." }
    ],
    tasks: [
      { id: "u2t07a", kind: "code",
        title: "Task 7.1 — The coordinate grid",
        brief: "Nest two for loops. The outer over [1, 2], the inner over [\"A\", \"B\"]. Print each combination like: 1 A",
        starter: 'x_values = [1, 2]\ny_values = ["A", "B"]\n',
        checks: [
          { type: "stdoutEquals", value: "1 A\n1 B\n2 A\n2 B" },
          { type: "sourceMinMatches", pattern: "^\\s*for\\s", count: 2, message: "Use two for loops, one inside the other" }
        ] },

      { id: "u2t07b", kind: "code",
        title: "Task 7.2 — The workout plan",
        brief: "Nested while loops. Weeks 1 to 2 on the outside, days 1 to 3 on the inside. Print each as: Week 1, Day 1",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "Week 1, Day 1\nWeek 1, Day 2\nWeek 1, Day 3\nWeek 2, Day 1\nWeek 2, Day 2\nWeek 2, Day 3" },
          { type: "sourceMinMatches", pattern: "while", count: 2, message: "Use two while loops" }
        ] },

      { id: "u2t07c", kind: "code",
        title: "Task 7.3 — The safe search",
        brief: "Loop through [1, 2, 3] printing Processing each time. Attach an else to the loop that prints: All done",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "Processing\nProcessing\nProcessing\nAll done" },
          { type: "sourceIncludes", value: "else", message: "Attach an else to the loop" }
        ] },

      { id: "u2t07d", kind: "code",
        title: "Task 7.4 — Rescue the runaway",
        brief: "This battery loop never ends. Make the battery drop by 25 each round so it prints Playing! exactly four times.",
        starter: 'battery = 100\nwhile battery > 0:\n    print("Playing!")\n',
        checks: [
          { type: "stdoutEquals", value: "Playing!\nPlaying!\nPlaying!\nPlaying!" }
        ] }
    ]
  },

  /* ============================== TOPIC 8 ============================== */
  {
    id: "u2t08",
    title: "Loop Patterns",
    summary: "The three shapes almost every real loop takes: counter, sentinel and accumulator.",
    notebookLM: "",
    notes: `
      <h4>Three shapes, endless uses</h4>
      <p>Once you have written a few hundred loops you notice they nearly all follow one of
      three patterns. Learn these three and you can build almost anything.</p>

      <h4>1. The counter-controlled loop</h4>
      <p>A rollercoaster holds exactly 10 people. You count them on — 1, 2, 3 — and at 10 you
      stop.</p>
      <p>Use this when you <strong>know the number before you start</strong>. Set a counter,
      test it, and change it inside.</p>
      <pre><code>tickets = 0

while tickets < 5:
    print("Ticket sold!")
    tickets += 1</code></pre>

      <h4>2. The sentinel-controlled loop</h4>
      <p>A bouncer lets people in all night. But the moment somebody says the secret word
      "Pineapple", he closes the club.</p>
      <p>A <strong>sentinel value</strong> is a special value that means <em>stop</em>. Use
      this when you have <strong>no idea how many rounds</strong> you need — you only know
      what will end it.</p>
      <pre><code>while True:
    answer = input("Type 'stop' to finish: ")

    if answer == "stop":
        print("Goodbye!")
        break        # rips you straight out of the loop</code></pre>

      <h4>3. The accumulator</h4>
      <p>You walk round the house collecting loose coins. You start with an empty piggy bank,
      and every coin you find goes in. At the end you count it.</p>
      <p>An <strong>accumulator</strong> is a variable created <em>before</em> the loop that
      grows <em>inside</em> it.</p>
      <pre><code>total = 0                 # empty piggy bank, BEFORE the loop
points = [10, 20, 30]

for point in points:
    total = total + point # add to the running total

print("Final score:", total)   # 60</code></pre>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="An accumulator starts empty before the loop and grows with each round.">
        <text x="350" y="24" text-anchor="middle" class="lbl">total = 0 &nbsp;→&nbsp; add 10 &nbsp;→&nbsp; add 20 &nbsp;→&nbsp; add 30</text>

        <rect class="box" x="8" y="40" width="150" height="66" rx="7"/>
        <text x="83" y="80" text-anchor="middle" class="mono" style="font-size:16px">0</text>
        <text x="83" y="126" text-anchor="middle" class="lbl">before</text>

        <path class="arrow" d="M166 74 h34"/><path class="accent" d="M210 74 l-12 -7 v14 z"/>
        <rect class="box" x="218" y="40" width="150" height="66" rx="7"/>
        <text x="293" y="80" text-anchor="middle" class="mono" style="font-size:16px">10</text>
        <text x="293" y="126" text-anchor="middle" class="lbl">round 1</text>

        <path class="arrow" d="M376 74 h34"/><path class="accent" d="M420 74 l-12 -7 v14 z"/>
        <rect class="box" x="428" y="40" width="118" height="66" rx="7"/>
        <text x="487" y="80" text-anchor="middle" class="mono" style="font-size:16px">30</text>
        <text x="487" y="126" text-anchor="middle" class="lbl">round 2</text>

        <path class="arrow" d="M554 74 h26"/><path class="accent" d="M590 74 l-12 -7 v14 z"/>
        <rect x="598" y="40" width="94" height="66" rx="7" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="2.2"/>
        <text x="645" y="80" text-anchor="middle" class="mono accent" style="font-size:16px">60</text>
        <text x="645" y="126" text-anchor="middle" class="lbl">round 3</text>

        <text x="350" y="172" text-anchor="middle" style="font-size:12.5px">Create it before the loop. Grow it inside. Read it after.</text>
      </svg>

      <div class="callout">
        <strong>Where the accumulator goes matters enormously.</strong> Put
        <code>total = 0</code> <em>inside</em> the loop and it resets to zero every round — you
        end up with just the last number instead of the sum. This is a very common bug.
      </div>

      <h4>Accumulating text</h4>
      <p>Accumulators are not only for numbers. You can glue strings together the same way:</p>
      <pre><code>word = ""                      # empty string to start
letters = ["C", "A", "T"]

for letter in letters:
    word += letter

print(word)                    # CAT</code></pre>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">A classic bug. What does this print?</p>
        <pre><code>for n in [10, 20, 30]:
    total = 0
    total = total + n
print(total)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">60</button>
          <button data-o="1">0</button>
          <button data-o="2">30</button>
        </div>
        <p class="w__why"><code>total = 0</code> is inside the loop, so it is wiped clean every
        round. On the last round it becomes 0 + 30 = 30, and that is all that survives. Move
        that line above the loop and you get 60.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which pattern fits each job?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Print exactly 10 tickets</button>
            <button data-pair="b">Keep asking until the user types quit</button>
            <button data-pair="c">Add up every price in a shopping list</button>
            <button data-pair="d">Build a word out of separate letters</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Number accumulator</button>
            <button data-pair="a">Counter-controlled loop</button>
            <button data-pair="d">String accumulator</button>
            <button data-pair="b">Sentinel-controlled loop</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Nearly every loop you write for the rest of
        this course will be one of these, or two of them combined.</p>
      </div>
    `,
    mcqs: [
      { q: "What is a sentinel value?",
        options: ["A guard against viruses",
                  "A special value, like the word quit, that tells a loop to stop",
                  "A formula for speed",
                  "An error message"],
        answer: 1,
        why: "You use it when you do not know how many rounds are needed — only what will end them." },

      { q: "You know a loop must run exactly 10 times. Which pattern?",
        options: ["An infinite loop", "A sentinel-controlled loop",
                  "A counter-controlled loop", "An accumulator"],
        answer: 2,
        why: "Set a counter, test it in the condition, change it inside. When you know the number in advance, this is the shape." },

      { q: "Where must you create the accumulator variable, like total = 0?",
        options: ["Outside and before the loop", "Inside the loop",
                  "After the loop ends", "In the else block"],
        answer: 0,
        why: "Inside the loop it gets reset every round and you lose the running total. Before the loop is the only correct place." },

      { q: "For a MULTIPLYING accumulator, what must the starting value be?",
        options: ["0", "1", "-1", "10"],
        answer: 1,
        why: "Anything times zero stays zero forever. Multiplying accumulators must start at 1. Adding accumulators start at 0." }
    ],
    tasks: [
      { id: "u2t08a", kind: "code",
        title: "Task 8.1 — The coin collector",
        brief: "Make wallet = 0 before the loop. Add every coin in the list to it, then print the final total.",
        starter: 'coins_found = [1, 5, 10, 25]\n',
        checks: [
          { type: "stdoutEquals", value: "41" },
          { type: "sourceIncludes", value: "wallet", message: "Use a variable called wallet" },
          { type: "sourceIncludes", value: "for", message: "Use a for loop" }
        ] },

      { id: "u2t08b", kind: "code",
        title: "Task 8.2 — The word builder",
        brief: "Start with an empty string. Loop through the letters and glue them together. Print the finished word.",
        starter: 'letters = ["C", "A", "T"]\n',
        checks: [
          { type: "stdoutEquals", value: "CAT" },
          { type: "sourceIncludes", value: "for", message: "Use a for loop" },
          { type: "sourceRegex", pattern: '=\\s*""|=\\s*\'\'', message: "Start with an empty string before the loop" }
        ] },

      { id: "u2t08c", kind: "code",
        title: "Task 8.3 — The 100-metre dash",
        brief: "Make meters_run = 0. While it is under 100, add 10 and print: Currently at 10 meters (and so on, up to 100).",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "Currently at 10 meters\nCurrently at 20 meters\nCurrently at 30 meters\nCurrently at 40 meters\nCurrently at 50 meters\nCurrently at 60 meters\nCurrently at 70 meters\nCurrently at 80 meters\nCurrently at 90 meters\nCurrently at 100 meters" },
          { type: "sourceIncludes", value: "while", message: "Use a while loop" }
        ] },

      { id: "u2t08d", kind: "code",
        title: "Task 8.4 — Counter plus accumulator",
        brief: "Add up 1 + 2 + 3 + 4 + 5 using a while loop with a counter and an accumulator. Print only the final total.",
        starter: 'total = 0\nnumber = 1\n',
        checks: [
          { type: "stdoutEquals", value: "15" },
          { type: "sourceIncludes", value: "while", message: "Use a while loop" }
        ] }
    ]
  },

  /* ============================== TOPIC 9 ============================== */
  {
    id: "u2t09",
    title: "break, continue and pass",
    summary: "The remote control for your loops: stop, skip, or do nothing at all.",
    notebookLM: "",
    notes: `
      <h4>The remote control</h4>
      <p>You are watching a playlist of ten videos. Usually you let it run. Sometimes a video
      is boring so you hit <em>skip</em>. Sometimes dinner is ready so you hit <em>stop</em>.</p>
      <p>Python has three keywords that work like that remote.</p>

      <h4>break — the emergency exit</h4>
      <p>You are lost in a maze. You find the exit door. You do not carry on wandering — you
      walk out and never look back.</p>
      <p><code>break</code> destroys the loop it is inside, instantly.</p>

      <pre><code>for number in [1, 2, 3, 4, 5]:
    if number == 3:
        print("Found it. Leaving.")
        break
    print("Looking at:", number)

print("Finished.")</code></pre>
      <pre><code>Looking at: 1
Looking at: 2
Found it. Leaving.
Finished.</code></pre>

      <h4>continue — the skip button</h4>
      <p>You are checking a box of apples. One is rotten. You do not throw away the whole box
      — that would be <code>break</code>. You throw away that one apple and carry on.</p>
      <p><code>continue</code> abandons the current round and jumps straight back to the top
      for the next one.</p>

      <pre><code>for number in [1, 2, 3, 4, 5]:
    if number == 3:
        print("Skipping 3.")
        continue
    print("Processing:", number)</code></pre>

      <svg class="fig" viewBox="0 0 700 195" role="img" aria-label="break leaves the loop completely, continue jumps back to the top for the next round.">
        <text x="168" y="24" text-anchor="middle" class="lbl">break — out of the building</text>
        <rect class="box box--dark" x="8" y="36" width="320" height="122" rx="8"/>
        <text x="32" y="66" class="mono on-dark" style="font-size:12px">1  2  3  4  5</text>
        <path class="arrow" d="M40 82 h34"/><path class="arrow" d="M74 82 h34"/>
        <path class="accent" d="M120 82 l-14 -8 v16 z"/>
        <text x="150" y="88" class="mono" fill="#FF9A8E" style="font-size:12px">STOP</text>
        <text x="168" y="126" text-anchor="middle" class="on-dark" style="font-size:12px">4 and 5 are never even looked at</text>

        <text x="532" y="24" text-anchor="middle" class="lbl">continue — back to the top</text>
        <rect class="box box--dark" x="372" y="36" width="320" height="122" rx="8"/>
        <text x="396" y="66" class="mono on-dark" style="font-size:12px">1  2  3  4  5</text>
        <path class="good" stroke="#3FD0B8" d="M470 76 q22 -22 44 0"/>
        <text x="492" y="104" text-anchor="middle" class="mono accent" style="font-size:11px">skip 3</text>
        <text x="532" y="126" text-anchor="middle" class="on-dark" style="font-size:12px">4 and 5 still run normally</text>
      </svg>

      <h4>pass — the "under construction" sign</h4>
      <p>A town planner leaves an empty square on the map with a sign saying <em>to be
      decided</em>. Nothing is built yet, but the space has to exist for the map to make
      sense.</p>
      <p>Python does not allow an empty <code>if</code> or an empty loop — it crashes.
      <code>pass</code> is a placeholder that means <em>nothing here yet, carry on</em>.</p>

      <pre><code>command = "Quit"

if command == "Play":
    print("Starting game...")
elif command == "Pause":
    pass                    # I will write this tomorrow
else:
    print("Exiting game.")</code></pre>

      <div class="callout">
        <strong>Three very different things.</strong><br>
        <code>break</code> — kill the whole loop.<br>
        <code>continue</code> — abandon this round only.<br>
        <code>pass</code> — do absolutely nothing, and carry on to the next line as normal.
      </div>

      <h4>break with while True</h4>
      <p>Now the sentinel pattern from the last topic makes sense. <code>while True:</code>
      would run forever — <code>break</code> is what lets you out.</p>
      <pre><code>while True:
    guess = input("Password: ")

    if guess == "secret123":
        print("Access granted")
        break
    print("Try again")</code></pre>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this print, in order?</p>
        <pre><code>for letter in "PYTHON":
    if letter == "H":
        continue
    if letter == "O":
        break
    print(letter)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">P Y T</button>
          <button data-o="1">P Y T N</button>
          <button data-o="2">P Y T H O N</button>
        </div>
        <p class="w__why">P, Y, T print normally. H hits <code>continue</code> so it is
        skipped. O hits <code>break</code> so the loop dies — and N is never reached at all.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which keyword says which sentence?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">"I found it — stop the whole search!"</button>
            <button data-pair="b">"Skip this one, move to the next."</button>
            <button data-pair="c">"Nothing here yet, but do not crash."</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c"><code>pass</code></button>
            <button data-pair="a"><code>break</code></button>
            <button data-pair="b"><code>continue</code></button>
          </div>
        </div>
        <p class="w__why"><strong>Correct.</strong> A useful memory hook: <em>break</em> breaks
        the loop, <em>continue</em> continues to the next round, <em>pass</em> passes right
        over.</p>
      </div>

      <div class="callout">
        <strong>One more thing about break.</strong> If a loop is stopped by
        <code>break</code>, its <code>else</code> block from Topic 7 does <em>not</em> run.
        That is exactly the search-party idea: you only say "I checked everywhere" when nothing
        interrupted you.
      </div>
    `,
    mcqs: [
      { q: "What does break do?",
        options: ["Skips one round and moves to the next",
                  "Pauses for 5 seconds",
                  "Stops the loop completely and moves on to the rest of the program",
                  "Runs the loop forever"],
        answer: 2,
        why: "The emergency exit. The loop is over instantly, and any remaining items are never looked at." },

      { q: "What is the difference between break and continue?",
        options: ["They do the same thing",
                  "break stops the whole loop; continue only skips the current round",
                  "continue stops the whole loop; break skips one round",
                  "break is for maths, continue is for text"],
        answer: 1,
        why: "break leaves the building. continue goes back to the top for the next item." },

      { q: "Why does pass exist?",
        options: ["To pass data between variables",
                  "As an empty placeholder, so code does not crash before you write the real logic",
                  "To pass a test",
                  "To speed up the computer"],
        answer: 1,
        why: "Python refuses to run an empty if or an empty loop. pass fills the space and does nothing at all." },

      { q: "A loop is stopped by break. Does its else block run?",
        options: ["Yes, always", "No — else only runs when the loop finishes naturally",
                  "Only for while loops", "Only for for loops"],
        answer: 1,
        why: "That is the whole point of a loop's else. It means \"nothing interrupted us\", and break is an interruption." }
    ],
    tasks: [
      { id: "u2t09a", kind: "code",
        title: "Task 9.1 — The fire alarm",
        brief: "Loop over the numbers 1 to 10 using range(1, 11). Print each number, but when you reach 7 print Fire alarm! and break out.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "1\n2\n3\n4\n5\n6\nFire alarm!" },
          { type: "sourceIncludes", value: "break", message: "Use break" }
        ] },

      { id: "u2t09b", kind: "code",
        title: "Task 9.2 — The allergy",
        brief: "Loop through the foods. For Peanut, print Allergic! Skipping! and continue. For every other food print: Eating Apple  (and so on).",
        starter: 'foods = ["Apple", "Peanut", "Banana", "Orange"]\n',
        checks: [
          { type: "stdoutEquals", value: "Eating Apple\nAllergic! Skipping!\nEating Banana\nEating Orange" },
          { type: "sourceIncludes", value: "continue", message: "Use continue" }
        ] },

      { id: "u2t09c", kind: "code",
        title: "Task 9.3 — Even numbers only",
        brief: "Loop through 1 to 10 with range(1, 11). If a number is ODD, use continue. Otherwise print it.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "2\n4\n6\n8\n10" },
          { type: "sourceIncludes", value: "continue", message: "Use continue" },
          { type: "sourceIncludes", value: "%", message: "Use % to test for odd numbers" }
        ] },

      { id: "u2t09d", kind: "code",
        title: "Task 9.4 — The silent placeholder",
        brief: "Loop through [1, 2, 3]. When the number is 2, use pass so nothing happens. Otherwise print the number.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "1\n3" },
          { type: "sourceIncludes", value: "pass", message: "Use the pass keyword" }
        ] }
    ]
  },

  /* ============================== TOPIC 10 ============================== */
  {
    id: "u2t10",
    title: "assert, return and the Cheat Sheet",
    summary: "A checkpoint that catches your own mistakes, and a first look at functions.",
    notebookLM: "",
    notes: `
      <h4>assert — the bouncer's checklist</h4>
      <p>A bouncer looks at an ID and says: <em>"I claim this person is over 18."</em> If he is
      right, everybody carries on. If he is wrong, everything stops immediately.</p>
      <p><code>assert</code> is a debugging tool. It tells Python: <em>I am certain this is
      true. Check it. If it is false, crash right now.</em></p>

      <pre><code>wallet = -50

assert wallet >= 0, "Wallet cannot be negative!"

print("Buying item...")     # never reached</code></pre>

      <p>The message after the comma is optional, but always write one. Compare:</p>
      <table>
        <tr><th>Without a message</th><th>With a message</th></tr>
        <tr><td><code>AssertionError</code></td><td><code>AssertionError: Wallet cannot be negative!</code></td></tr>
      </table>

      <div class="callout">
        <strong>Why crash on purpose?</strong> Because a program that stops at the exact moment
        something goes wrong is far easier to fix than one that limps on and produces a
        nonsense answer three hundred lines later. Fail loudly, fail early.
      </div>

      <h4>return — the delivery driver</h4>
      <p>You phone a pizza shop and place an order. They do the work in their kitchen, and a
      driver <em>returns</em> the finished pizza to your hands.</p>
      <p>When you build your own tools — <strong>functions</strong>, which you will study
      properly in Unit 4 — <code>return</code> is how the tool hands back its answer.</p>

      <pre><code>def add_ten(number):
    answer = number + 10
    return answer

final_score = add_ten(50)
print(final_score)        # 60</code></pre>

      <div class="callout">
        <strong>return kills the function instantly.</strong> The moment Python reaches it, the
        function stops dead and hands back its value — exactly like <code>break</code>, but for
        a function instead of a loop. Any lines after it never run.
      </div>

      <h4>The cheat sheet</h4>
      <table>
        <tr><th>Keyword</th><th>Nickname</th><th>Works inside</th><th>What it does</th></tr>
        <tr><td><code>pass</code></td><td>The ghost</td><td>anywhere</td><td>Nothing at all. A placeholder.</td></tr>
        <tr><td><code>continue</code></td><td>The skip button</td><td>loops only</td><td>Abandons this round, starts the next.</td></tr>
        <tr><td><code>break</code></td><td>The emergency exit</td><td>loops only</td><td>Kills the whole loop.</td></tr>
        <tr><td><code>return</code></td><td>The delivery driver</td><td>functions only</td><td>Hands back a value and kills the function.</td></tr>
      </table>

      <svg class="fig" viewBox="0 0 700 175" role="img" aria-label="pass does nothing, continue skips a round, break ends the loop, return ends a function.">
        <rect class="box" x="8" y="34" width="164" height="116" rx="8"/>
        <text x="90" y="62" text-anchor="middle" class="mono accent" style="font-size:13px">pass</text>
        <text x="90" y="90" text-anchor="middle" style="font-size:11.5px">does nothing</text>
        <text x="90" y="112" text-anchor="middle" style="font-size:11.5px">code carries on</text>
        <text x="90" y="136" text-anchor="middle" class="lbl">anywhere</text>

        <rect class="box" x="180" y="34" width="164" height="116" rx="8"/>
        <text x="262" y="62" text-anchor="middle" class="mono accent" style="font-size:13px">continue</text>
        <text x="262" y="90" text-anchor="middle" style="font-size:11.5px">skips this round</text>
        <text x="262" y="112" text-anchor="middle" style="font-size:11.5px">loop keeps going</text>
        <text x="262" y="136" text-anchor="middle" class="lbl">loops only</text>

        <rect class="box" x="352" y="34" width="164" height="116" rx="8"/>
        <text x="434" y="62" text-anchor="middle" class="mono accent" style="font-size:13px">break</text>
        <text x="434" y="90" text-anchor="middle" style="font-size:11.5px">kills the loop</text>
        <text x="434" y="112" text-anchor="middle" style="font-size:11.5px">moves past it</text>
        <text x="434" y="136" text-anchor="middle" class="lbl">loops only</text>

        <rect class="box box--dark" x="524" y="34" width="168" height="116" rx="8"/>
        <text x="608" y="62" text-anchor="middle" class="mono accent" style="font-size:13px">return</text>
        <text x="608" y="90" text-anchor="middle" class="on-dark" style="font-size:11.5px">hands back a value</text>
        <text x="608" y="112" text-anchor="middle" class="on-dark" style="font-size:11.5px">kills the function</text>
        <text x="608" y="136" text-anchor="middle" class="lbl">functions only</text>
      </svg>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this print?</p>
        <pre><code>def check(n):
    return n * 2
    print("Done!")

print(check(5))</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">10 then Done!</button>
          <button data-o="1">10 only</button>
          <button data-o="2">Done! only</button>
        </div>
        <p class="w__why"><code>return</code> kills the function on the spot. The
        <code>print("Done!")</code> line sits after it and can never run — it is
        <em>unreachable code</em>. Some editors will grey it out to warn you.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which keyword would you reach for?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">"This should never be negative — stop if it is."</button>
            <button data-pair="b">"Hand this answer back to whoever called me."</button>
            <button data-pair="c">"Get me out of this loop right now."</button>
            <button data-pair="d">"I will fill this in tomorrow."</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c"><code>break</code></button>
            <button data-pair="a"><code>assert</code></button>
            <button data-pair="d"><code>pass</code></button>
            <button data-pair="b"><code>return</code></button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> These four little words appear in almost
        every real Python program you will ever read.</p>
      </div>
    `,
    mcqs: [
      { q: "What is assert for?",
        options: ["Making the computer faster",
                  "A checkpoint that crashes the program if a condition is False, so bugs are caught early",
                  "Adding two numbers",
                  "Asking for a password"],
        answer: 1,
        why: "It states something you believe must be true. If it is not, the program stops right there instead of limping on with bad data." },

      { q: "Where is return used?",
        options: ["Inside a while loop", "Inside an if statement",
                  "Inside a function, to hand back an answer", "At the top of a file"],
        answer: 2,
        why: "return belongs to functions. Using it outside one is a SyntaxError." },

      { q: "You want a loop to stop immediately. Which keyword?",
        options: ["continue", "return", "pass", "break"],
        answer: 3,
        why: "break is the emergency exit for loops. return would only work inside a function." },

      { q: "What happens to code written after a return inside a function?",
        options: ["It runs first", "It runs afterwards", "It never runs", "It causes a crash"],
        answer: 2,
        why: "return ends the function on the spot. Anything below it is unreachable code that can never execute." }
    ],
    tasks: [
      { id: "u2t10a", kind: "code",
        title: "Task 10.1 — The silent placeholder",
        brief: "Loop through [1, 2, 3]. When the number is 2, use pass. Otherwise print the number.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "1\n3" },
          { type: "sourceIncludes", value: "pass", message: "Use pass" }
        ] },

      { id: "u2t10b", kind: "code",
        title: "Task 10.2 — Your first function",
        brief: "Write a function called add_ten that takes a number and returns it plus 10. Then print the result of calling it with 50.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "60" },
          { type: "sourceIncludes", value: "def add_ten", message: "Create a function called add_ten" },
          { type: "sourceIncludes", value: "return", message: "Use return to hand back the answer" }
        ] },

      { id: "u2t10c", kind: "code",
        title: "Task 10.3 — The assert that passes",
        brief: "Make age = 20. Write an assert checking age is 18 or more, with the message You are not old enough!. Then print Welcome. It should NOT crash.",
        starter: 'age = 20\n',
        checks: [
          { type: "stdoutEquals", value: "Welcome" },
          { type: "sourceIncludes", value: "assert", message: "Use the assert keyword" },
          { type: "sourceIncludes", value: "not old enough", message: "Include the custom message" }
        ] },

      { id: "u2t10d", kind: "code",
        title: "Task 10.4 — break and continue together",
        brief: "Loop through the word PYTHON. Skip the letter H with continue. Stop completely at the letter O with break. Print every other letter.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "P\nY\nT" },
          { type: "sourceIncludes", value: "continue", message: "Use continue" },
          { type: "sourceIncludes", value: "break", message: "Use break" }
        ] }
    ]
  },

  /* ============================== TOPIC 11 ============================== */
  {
    id: "u2t11",
    title: "The range() Function",
    summary: "The ticket machine that hands you numbers, one at a time, exactly as many as you need.",
    notebookLM: "",
    notes: `
      <h4>The ticket machine</h4>
      <p>At a bank you pull a ticket from a little machine. It does not hand you a printed list
      of a hundred numbers — it just gives you the next one whenever you ask.</p>
      <p><code>range()</code> is that machine. It produces a sequence of numbers, and it is
      used with <code>for</code> loops more than anything else in Python.</p>

      <h4>One number — the stop point</h4>
      <p>Give <code>range()</code> a single number and Python assumes it is where to
      <strong>stop</strong>. It starts at <strong>0</strong> and stops <em>just before</em>
      your number.</p>
      <pre><code>for n in range(5):
    print(n)

# 0
# 1
# 2
# 3
# 4      ← five numbers, but 5 itself never appears</code></pre>

      <div class="callout">
        <strong>The number you give is never included.</strong> <code>range(5)</code> gives you
        five numbers: 0, 1, 2, 3, 4. This catches everybody at first. Say it out loud: "stop
        <em>before</em> 5".
      </div>

      <h4>Two numbers — start and stop</h4>
      <pre><code>for n in range(10, 15):
    print(n)

# 10, 11, 12, 13, 14</code></pre>

      <h4>Three numbers — start, stop and step</h4>
      <p>The third number is how far to jump each time.</p>
      <pre><code>for n in range(0, 10, 2):
    print(n)

# 0, 2, 4, 6, 8</code></pre>

      <svg class="fig" viewBox="0 0 700 165" role="img" aria-label="range takes start, stop and step, and never includes the stop number.">
        <text class="mono" x="180" y="52" style="font-size:24px">range(0, 10, 2)</text>

        <path class="good" d="M254 62 v12 H274 v-12"/>
        <text x="264" y="94" text-anchor="middle" class="lbl">start</text>
        <text x="264" y="114" text-anchor="middle" style="font-size:11.5px">where it begins</text>

        <path class="good" stroke="#D67F19" d="M296 62 v26 H330 v-26"/>
        <text x="384" y="106" class="lbl">stop</text>
        <text x="384" y="126" style="font-size:11.5px">it stops just BEFORE this</text>

        <path class="good" d="M354 62 v40 H374 v-40"/>
        <text x="470" y="146" class="lbl">step — how far to jump</text>

        <rect class="box box--dark" x="480" y="34" width="212" height="52" rx="7"/>
        <text x="586" y="66" text-anchor="middle" class="mono accent" style="font-size:14px">0 2 4 6 8</text>
      </svg>

      <h4>Counting backwards</h4>
      <p>A negative step counts down. Two rules must both be obeyed:</p>
      <ol>
        <li>The start must be <strong>bigger</strong> than the stop.</li>
        <li>The step must be <strong>negative</strong>.</li>
      </ol>
      <pre><code>for n in range(5, 0, -1):
    print(n)

# 5, 4, 3, 2, 1</code></pre>

      <div class="callout">
        <strong>If you get nothing at all</strong>, you have almost certainly broken one of
        those two rules. <code>range(5, 0)</code> with no negative step produces an empty
        sequence — no error, just silence, which is confusing the first time.
      </div>

      <h4>A recipe, not a cake</h4>
      <p>A list <code>[0, 1, 2, 3, 4]</code> is a baked cake sitting on the counter — it takes
      up real space in memory.</p>
      <p>A <code>range(5)</code> is just the <em>recipe</em>. It stores the rules (start, stop,
      step) and makes each number only when asked. <code>range(1000000)</code> takes almost no
      memory at all.</p>

      <pre><code>x = range(5)
print(type(x))          # &lt;class 'range'&gt;
print(x)                # range(0, 5)   ← not the numbers!

my_list = list(range(5))
print(my_list)          # [0, 1, 2, 3, 4]</code></pre>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">How many numbers does this print, and what is the last one?</p>
        <pre><code>for n in range(3, 8):
    print(n)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">5 numbers, last is 8</button>
          <button data-o="1">6 numbers, last is 8</button>
          <button data-o="2">5 numbers, last is 7</button>
        </div>
        <p class="w__why">Starts at 3, stops <em>before</em> 8. So 3, 4, 5, 6, 7 — five
        numbers, ending at 7. A quick trick: the count is always stop minus start.</p>
      </div>

      <div class="w w-spot">
        <span class="w__k">Spot the mistake</span>
        <p class="w__q">This is meant to count down from 10 to 1, but prints nothing. Tap the problem.</p>
        <div class="w-spot__line">
          <button>range(10,</button><button>0,</button><button data-bad>1)</button>
        </div>
        <p class="w__why">The step must be <code>-1</code> to count down. With a positive step
        and a start bigger than the stop, Python produces an empty sequence and the loop simply
        never runs — no error, no output.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which range gives which numbers?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a"><code>range(4)</code></button>
            <button data-pair="b"><code>range(1, 5)</code></button>
            <button data-pair="c"><code>range(1, 10, 2)</code></button>
            <button data-pair="d"><code>range(3, 0, -1)</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="d">3, 2, 1</button>
            <button data-pair="a">0, 1, 2, 3</button>
            <button data-pair="c">1, 3, 5, 7, 9</button>
            <button data-pair="b">1, 2, 3, 4</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> In every single one, the stop number itself
        is missing from the output. That is the rule that never changes.</p>
      </div>
    `,
    mcqs: [
      { q: "What does range(10) generate?",
        options: ["1 to 10", "0 to 10", "0 to 9", "10, 9, 8 …"],
        answer: 2,
        why: "It starts at 0 and stops just before 10, giving ten numbers: 0 up to 9." },

      { q: "In range(2, 20, 2), what does the third number mean?",
        options: ["The starting number", "The step — how far to jump each time",
                  "Seconds to pause", "The stopping point"],
        answer: 1,
        why: "Start, stop, step. A step of 2 gives every second number." },

      { q: "Why does Python use range objects instead of building huge lists?",
        options: ["Lists only hold text",
                  "A range uses almost no memory — it stores the rules and makes numbers one at a time",
                  "Lists cannot be used in loops",
                  "Ranges look nicer"],
        answer: 1,
        why: "A recipe instead of a baked cake. range(1000000) is tiny; the equivalent list would take megabytes." },

      { q: "You write range(10, 0, 1) and get no output. Why?",
        options: ["The step should be -1 to count down",
                  "range only takes two numbers",
                  "You need a list() around it",
                  "10 is too big"],
        answer: 0,
        why: "To count down, the start must be bigger than the stop AND the step must be negative. With a positive step here, the sequence is empty and the loop never runs." }
    ],
    tasks: [
      { id: "u2t11a", kind: "code",
        title: "Task 11.1 — The basic counter",
        brief: "Use a one-number range to print 0 through 8, each on its own line.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "0\n1\n2\n3\n4\n5\n6\n7\n8" },
          { type: "sourceIncludes", value: "range(", message: "Use range()" }
        ] },

      { id: "u2t11b", kind: "code",
        title: "Task 11.2 — The teen years",
        brief: "Use a two-number range to print 13 through 19 inclusive. Think carefully about the stop number.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "13\n14\n15\n16\n17\n18\n19" },
          { type: "sourceRegex", pattern: "range\\(\\s*13\\s*,\\s*20\\s*\\)", message: "Use range(13, 20) — remember the stop is not included" }
        ] },

      { id: "u2t11c", kind: "code",
        title: "Task 11.3 — Odd numbers",
        brief: "Use a three-number range to print every odd number from 1 to 9.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "1\n3\n5\n7\n9" },
          { type: "sourceRegex", pattern: "range\\([^)]*,[^)]*,[^)]*\\)", message: "Use all three numbers in range()" }
        ] },

      { id: "u2t11d", kind: "code",
        title: "Task 11.4 — Blastoff",
        brief: "Use a three-number range to count backwards from 10 down to 1, then print Blastoff! after the loop.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nBlastoff!" },
          { type: "sourceIncludes", value: "-1", message: "Use a negative step" }
        ] },

      { id: "u2t11e", kind: "code",
        title: "Task 11.5 — Recipe into cake",
        brief: "Make a real list of the numbers 1 to 10 by wrapping a range in list(). Print the list on one line.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" },
          { type: "sourceIncludes", value: "list(", message: "Use list() to force it into a real list" }
        ] }
    ]
  },

  /* ============================== TOPIC 12 ============================== */
  {
    id: "u2t12",
    title: "Iterators — How for Loops Really Work",
    summary: "Look under the bonnet. Every for loop you have written was doing this all along.",
    notebookLM: "",
    notes: `
      <h4>The sweet dispenser</h4>
      <p>Picture one of those plastic sweet dispensers where you tip the head back and one
      sweet pops out.</p>
      <ul>
        <li>The <strong>tube full of sweets</strong> is the data. It just sits there.</li>
        <li>The <strong>spring inside</strong> keeps track of which sweet is next.</li>
        <li>Every tip of the head hands you exactly <strong>one</strong> sweet.</li>
        <li>When it is empty, tipping the head does nothing.</li>
      </ul>
      <p>That is precisely how Python reads through lists, strings and ranges.</p>

      <h4>Iterable — the loaded tube</h4>
      <p>An <strong>iterable</strong> is any collection that can be read one item at a time.
      Lists, strings, tuples, dictionaries and ranges are all iterables.</p>
      <p>Simple test: if you can put it in a <code>for</code> loop, it is an iterable.</p>

      <h4>Iterator — the spring</h4>
      <p>An <strong>iterator</strong> is the active mechanism that points at the data and
      remembers which item is next.</p>

      <h4>iter() loads it, next() pulls from it</h4>
      <pre><code>my_list = ["Apple", "Banana", "Cherry"]

my_iter = iter(my_list)          # load the spring

print(next(my_iter))             # Apple
print(next(my_iter))             # Banana
print(next(my_iter))             # Cherry</code></pre>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="iter turns a list into an iterator, and each call to next hands back one item until it is empty.">
        <text x="110" y="26" text-anchor="middle" class="lbl">the iterable</text>
        <rect class="box" x="8" y="38" width="204" height="106" rx="8"/>
        <text x="110" y="72" text-anchor="middle" class="mono" style="font-size:12px">"Apple"</text>
        <text x="110" y="96" text-anchor="middle" class="mono" style="font-size:12px">"Banana"</text>
        <text x="110" y="120" text-anchor="middle" class="mono" style="font-size:12px">"Cherry"</text>

        <path class="arrow" d="M222 90 h44"/><path class="accent" d="M276 90 l-13 -7 v14 z"/>
        <text x="244" y="76" text-anchor="middle" class="mono accent" style="font-size:11px">iter()</text>

        <text x="384" y="26" text-anchor="middle" class="lbl">the iterator</text>
        <rect class="box box--dark" x="284" y="38" width="200" height="106" rx="8"/>
        <text x="384" y="82" text-anchor="middle" class="on-dark" style="font-size:12px">remembers</text>
        <text x="384" y="106" text-anchor="middle" class="on-dark" style="font-size:12px">which one is next</text>

        <path class="arrow" d="M494 90 h44"/><path class="accent" d="M548 90 l-13 -7 v14 z"/>
        <text x="516" y="76" text-anchor="middle" class="mono accent" style="font-size:11px">next()</text>

        <rect class="box" x="556" y="38" width="136" height="106" rx="8"/>
        <text x="624" y="82" text-anchor="middle" class="mono" style="font-size:13px">one item</text>
        <text x="624" y="106" text-anchor="middle" class="mono" style="font-size:13px">at a time</text>

        <text x="350" y="176" text-anchor="middle" style="font-size:12px">Ask once too often and Python raises StopIteration</text>
      </svg>

      <h4>StopIteration — the empty dispenser</h4>
      <p>Tip an empty dispenser and you get air. Ask an empty iterator for another item and
      Python raises a special error called <strong>StopIteration</strong>.</p>

      <pre><code>my_iter = iter(["Apple"])

print(next(my_iter))    # Apple
print(next(my_iter))    # StopIteration — crash!</code></pre>

      <h4>The secret of the for loop</h4>
      <div class="callout">
        <strong>This is the whole reason we learn this.</strong> A <code>for</code> loop is not
        magic. Behind the scenes Python calls <code>iter()</code> on your collection, then calls
        <code>next()</code> again and again. When <code>StopIteration</code> arrives, the loop
        does not crash — it quietly catches it and says "finished", then moves on.
      </div>

      <p>These two pieces of code do exactly the same thing:</p>
      <table>
        <tr><th>What you write</th><th>What Python actually does</th></tr>
        <tr>
          <td><pre><code>for x in my_list:
    print(x)</code></pre></td>
          <td><pre><code>it = iter(my_list)
while True:
    try:
        x = next(it)
    except StopIteration:
        break
    print(x)</code></pre></td>
        </tr>
      </table>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What happens on the last line?</p>
        <pre><code>it = iter([3, 2])
print(next(it))
print(next(it))
print(next(it))</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">It starts again from 3</button>
          <button data-o="1">3, then 2, then a StopIteration crash</button>
          <button data-o="2">3, 2, None</button>
        </div>
        <p class="w__why">An iterator only moves forwards, and never resets. Two items means two
        successful calls. The third finds nothing left and raises StopIteration.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Match each piece to its job.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">A list, a string, a range</button>
            <button data-pair="b"><code>iter()</code></button>
            <button data-pair="c"><code>next()</code></button>
            <button data-pair="d"><code>StopIteration</code></button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">Hands back the next item</button>
            <button data-pair="a">An iterable — the loaded tube</button>
            <button data-pair="d">The signal that nothing is left</button>
            <button data-pair="b">Turns an iterable into an iterator</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Every <code>for</code> loop you have
        written in this unit has been doing exactly this, silently, the whole time.</p>
      </div>
    `,
    mcqs: [
      { q: "What is the difference between an iterable and an iterator?",
        options: ["They are the same thing",
                  "An iterable is the collection; an iterator is the tool that remembers your place and hands items over",
                  "Iterators are for maths, iterables for text",
                  "An iterable is a type of error"],
        answer: 1,
        why: "The tube of sweets is the iterable. The spring that remembers which one is next is the iterator." },

      { q: "Which function pulls the next item out of an iterator?",
        options: ["pull()", "get()", "next()", "forward()"],
        answer: 2,
        why: "next() hands over one item and remembers where it stopped." },

      { q: "What happens if you call next() with nothing left?",
        options: ["It starts again from the beginning", "It prints None",
                  "Python raises StopIteration", "It gives a random item"],
        answer: 2,
        why: "StopIteration. A for loop catches this quietly, which is exactly how it knows when to end." },

      { q: "What does a for loop secretly use?",
        options: ["A while loop and a counter",
                  "iter() to load the data and next() over and over until StopIteration",
                  "The range() function",
                  "A list of numbers"],
        answer: 1,
        why: "That is the entire mechanism. Once you know it, for loops stop feeling like magic." }
    ],
    tasks: [
      { id: "u2t12a", kind: "code",
        title: "Task 12.1 — Load the dispenser",
        brief: "Make a list called countdown holding 3, 2, 1. Turn it into an iterator called countdown_iter, then print the first item using next().",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "3" },
          { type: "sourceIncludes", value: "iter(", message: "Use iter()" },
          { type: "sourceIncludes", value: "next(", message: "Use next()" }
        ] },

      { id: "u2t12b", kind: "code",
        title: "Task 12.2 — Drain it completely",
        brief: "Using the same list, pull out and print all three items with three separate next() calls.",
        starter: 'countdown = [3, 2, 1]\ncountdown_iter = iter(countdown)\n',
        checks: [
          { type: "stdoutEquals", value: "3\n2\n1" },
          { type: "sourceMinMatches", pattern: "next\\(", count: 3, message: "Use next() three times" }
        ] },

      { id: "u2t12c", kind: "code",
        title: "Task 12.3 — Build a for loop by hand",
        brief: "Without using a for loop, use iter() and a while True loop with next() to print every letter of CAT. Catch StopIteration with try/except and break out.",
        starter: 'word = "CAT"\nit = iter(word)\n\nwhile True:\n    try:\n        # pull the next letter and print it\n        pass\n    except StopIteration:\n        break\n',
        checks: [
          { type: "stdoutEquals", value: "C\nA\nT" },
          { type: "sourceIncludes", value: "next(", message: "Use next()" },
          { type: "sourceIncludes", value: "StopIteration", message: "Catch StopIteration" }
        ] }
    ]
  },

  /* ============================== TOPIC 13 ============================== */
  {
    id: "u2t13",
    title: "Random Numbers",
    summary: "Teaching a very predictable machine how to roll a dice.",
    notebookLM: "",
    notes: `
      <h4>Computers hate surprises</h4>
      <p>Board games and video games need chance. You roll a dice, flip a coin, shuffle a deck.</p>
      <p>A computer is the opposite of that. It does exactly the same thing every single time.
      To make it behave unpredictably we have to bring in a special toolbox.</p>

      <pre><code>import random</code></pre>
      <p>That line goes at the very top of your file. After it, every tool is
      <code>random.</code> followed by its name.</p>

      <h4>randint() — pulling a number out of a hat</h4>
      <p>Give it a start and a stop, and it hands back a random whole number between them.</p>

      <div class="callout">
        <strong>randint includes BOTH ends.</strong> This is different from
        <code>range()</code>, which leaves the stop out. <code>random.randint(1, 6)</code> can
        give you 1, 2, 3, 4, 5 <em>or</em> 6 — exactly what a dice needs.
      </div>

      <pre><code>import random

roll = random.randint(1, 6)
print(f"You rolled a {roll}!")</code></pre>

      <h4>random() — a plain decimal</h4>
      <p>The most basic tool. No numbers go inside the brackets. It gives you a decimal from
      0.0 up to (but never reaching) 1.0.</p>
      <pre><code>import random

chance = random.random()
print(chance)          # something like 0.4582917...</code></pre>

      <h4>uniform() — a decimal between two points</h4>
      <p>Like <code>randint</code>, but for decimals.</p>
      <pre><code>import random

temp = random.uniform(10.0, 20.0)
print(f"The temperature is {temp} degrees.")</code></pre>

      <svg class="fig" viewBox="0 0 700 185" role="img" aria-label="randint gives whole numbers, random gives a decimal from zero to one, uniform gives a decimal between two points.">
        <rect class="box" x="8" y="34" width="216" height="128" rx="8"/>
        <text x="116" y="62" text-anchor="middle" class="mono accent" style="font-size:12.5px">randint(1, 6)</text>
        <text x="116" y="90" text-anchor="middle" style="font-size:12px">whole numbers</text>
        <text x="116" y="112" text-anchor="middle" style="font-size:12px">both ends included</text>
        <text x="116" y="140" text-anchor="middle" class="mono" style="font-size:12px">4</text>

        <rect class="box" x="242" y="34" width="216" height="128" rx="8"/>
        <text x="350" y="62" text-anchor="middle" class="mono accent" style="font-size:12.5px">random()</text>
        <text x="350" y="90" text-anchor="middle" style="font-size:12px">a decimal</text>
        <text x="350" y="112" text-anchor="middle" style="font-size:12px">0.0 up to 1.0</text>
        <text x="350" y="140" text-anchor="middle" class="mono" style="font-size:12px">0.4582917</text>

        <rect class="box box--dark" x="476" y="34" width="216" height="128" rx="8"/>
        <text x="584" y="62" text-anchor="middle" class="mono accent" style="font-size:12.5px">uniform(10, 20)</text>
        <text x="584" y="90" text-anchor="middle" class="on-dark" style="font-size:12px">a decimal</text>
        <text x="584" y="112" text-anchor="middle" class="on-dark" style="font-size:12px">between two points</text>
        <text x="584" y="140" text-anchor="middle" class="mono on-dark" style="font-size:12px">14.7213</text>
      </svg>

      <div class="callout">
        <strong>Not truly random.</strong> Computers cannot actually be unpredictable. They use
        a clever formula, started from something like the current time, to produce numbers that
        <em>look</em> random. Programmers call this <em>pseudo-random</em>. It is perfect for
        games and simulations — but never use it for passwords or security.
      </div>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">Which numbers can <code>random.randint(1, 6)</code> give you?</p>
        <div class="w-guess__opts">
          <button data-o="0">1, 2, 3, 4, 5 — not 6</button>
          <button data-o="1">1, 2, 3, 4, 5 and 6</button>
          <button data-o="2">0, 1, 2, 3, 4, 5</button>
        </div>
        <p class="w__why">Unlike <code>range()</code>, <code>randint</code> includes both ends.
        That is exactly why it suits a dice. Mixing the two rules up is a favourite exam trap.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which tool for which job?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Roll a 20-sided dice</button>
            <button data-pair="b">A random chance between 0 and 1</button>
            <button data-pair="c">A random temperature between 20.5 and 35.5</button>
            <button data-pair="d">Flip a coin</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c"><code>random.uniform(20.5, 35.5)</code></button>
            <button data-pair="a"><code>random.randint(1, 20)</code></button>
            <button data-pair="d"><code>random.randint(1, 2)</code></button>
            <button data-pair="b"><code>random.random()</code></button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Whole number, use <code>randint</code>.
        Decimal between two points, use <code>uniform</code>. Plain chance, use
        <code>random()</code>.</p>
      </div>

      <div class="callout">
        <strong>Checking random code.</strong> The tasks below cannot check for one exact
        answer — the whole point is that it changes. Instead they check that your output is a
        number of the right kind, in the right range. Run them a few times and watch it change.
      </div>
    `,
    mcqs: [
      { q: "What must go at the top of your file before using random tools?",
        options: ["start random", "import random", "open random_tools", "random.on()"],
        answer: 1,
        why: "import random. It is part of the Standard Library, so nothing needs downloading with pip." },

      { q: "Which tool simulates rolling a 20-sided dice?",
        options: ["random.decimal(1, 20)", "random.random()",
                  "random.randint(1, 20)", "random.uniform(1, 20)"],
        answer: 2,
        why: "randint gives whole numbers and includes both ends, so 1 and 20 are both possible." },

      { q: "What is the difference between randint() and uniform()?",
        options: ["randint gives whole numbers; uniform gives decimals",
                  "uniform gives whole numbers; randint gives decimals",
                  "randint only works with 10",
                  "There is no difference"],
        answer: 0,
        why: "Same idea, different type. randint for dice and counting, uniform for measurements and prices." },

      { q: "How is randint(1, 6) different from range(1, 6)?",
        options: ["They are identical",
                  "randint can give 6; range stops at 5",
                  "range can give 6; randint stops at 5",
                  "Neither can give 6"],
        answer: 1,
        why: "randint includes both ends. range always stops just before its last number. Getting these two confused is extremely common." }
    ],
    tasks: [
      { id: "u2t13a", kind: "code",
        title: "Task 13.1 — Roll a dice",
        brief: "Import random and print a single random whole number between 1 and 6. Run it a few times and watch it change.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "import random", message: "Import the random module" },
          { type: "sourceIncludes", value: "randint", message: "Use random.randint()" },
          { type: "stdoutRegex", pattern: "^[1-6]$", message: "Output must be a single number from 1 to 6" }
        ] },

      { id: "u2t13b", kind: "code",
        title: "Task 13.2 — The 100-sided dice",
        brief: "Print a random whole number between 1 and 100.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "randint", message: "Use random.randint()" },
          { type: "stdoutRegex", pattern: "^([1-9][0-9]?|100)$", message: "Output must be a number from 1 to 100" }
        ] },

      { id: "u2t13c", kind: "code",
        title: "Task 13.3 — The plain decimal",
        brief: "Use random.random() to make a decimal between 0.0 and 1.0, store it in probability, and print it.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "random.random()", message: "Use random.random()" },
          { type: "sourceIncludes", value: "probability", message: "Store it in a variable called probability" },
          { type: "stdoutRegex", pattern: "^0\\.\\d+$|^0\\.0$", message: "Output must be a decimal between 0 and 1" }
        ] },

      { id: "u2t13d", kind: "code",
        title: "Task 13.4 — The weather station",
        brief: "Use random.uniform() for a temperature between 70.5 and 90.5. Print it with an f-string exactly like: Today's temperature is 78.42",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "uniform", message: "Use random.uniform()" },
          { type: "sourceRegex", pattern: 'f"|f\'', message: "Use an f-string" },
          { type: "stdoutRegex", pattern: "^Today's temperature is (7[0-9]|8[0-9]|90)\\.", message: "Output should read: Today's temperature is <number>" }
        ] }
    ]
  },

  /* ============================== TOPIC 14 ============================== */
  {
    id: "u2t14",
    title: "Choosing, Shuffling and Building a Game",
    summary: "Pick a winner, shuffle a deck, and put the whole unit together into a real game.",
    notebookLM: "",
    notes: `
      <h4>choice() — a name out of the bowl</h4>
      <p>A teacher writes five names on slips of paper, drops them in a bowl, and pulls one
      out.</p>
      <p><code>random.choice()</code> takes a list and hands back exactly one random item.</p>

      <pre><code>import random

colours = ["Red", "Blue", "Green", "Yellow"]
winner = random.choice(colours)

print(f"The winning colour is: {winner}")</code></pre>

      <h4>shuffle() — mixing the deck</h4>
      <p>Before a card game you shuffle. <code>random.shuffle()</code> mixes a list up.</p>

      <pre><code>import random

playlist = ["Song A", "Song B", "Song C"]
random.shuffle(playlist)

print(playlist)</code></pre>

      <div class="callout">
        <strong>shuffle changes the original.</strong> It does not hand you back a new mixed
        list — it rearranges the one you gave it, permanently. That is why you never write
        <code>playlist = random.shuffle(playlist)</code>; doing so throws your list away and
        leaves you with <code>None</code>.
      </div>

      <svg class="fig" viewBox="0 0 700 175" role="img" aria-label="choice picks one item out of a list; shuffle rearranges the whole list in place.">
        <text x="168" y="26" text-anchor="middle" class="lbl">choice — take one out</text>
        <rect class="box" x="8" y="38" width="320" height="106" rx="8"/>
        <text x="60" y="76" class="mono" style="font-size:12px">Red</text>
        <text x="140" y="76" class="mono" style="font-size:12px">Blue</text>
        <text x="228" y="76" class="mono" style="font-size:12px">Green</text>
        <rect x="120" y="92" width="76" height="34" rx="6" fill="rgba(242,160,61,.2)" stroke="#D67F19" stroke-width="2"/>
        <text x="158" y="115" text-anchor="middle" class="mono accent" style="font-size:12px">Blue</text>

        <text x="532" y="26" text-anchor="middle" class="lbl">shuffle — mix them all up</text>
        <rect class="box box--dark" x="372" y="38" width="320" height="106" rx="8"/>
        <text x="400" y="76" class="mono on-dark" style="font-size:12px">A  B  C</text>
        <path class="arrow" d="M480 70 h44"/><path class="accent" d="M534 70 l-13 -7 v14 z"/>
        <text x="580" y="76" class="mono accent" style="font-size:12px">C  A  B</text>
        <text x="532" y="118" text-anchor="middle" class="on-dark" style="font-size:11.5px">the original list itself is changed</text>
      </svg>

      <h4>Random numbers inside loops</h4>
      <p>Put a random tool inside a loop and you can simulate anything — five coin flips, a
      hundred dice rolls, a whole tournament.</p>
      <pre><code>import random

for flip in range(5):
    coin = random.randint(1, 2)
    if coin == 1:
        print("Heads!")
    else:
        print("Tails!")</code></pre>

      <h4>Putting the whole unit together</h4>
      <p>Here is a real game. Look at how much of Unit 2 is in these few lines: a random
      number, a <code>while</code> loop, an <code>if-elif-else</code> chain, and a
      <code>break</code>.</p>

      <pre><code>import random

print("Welcome to the Guessing Game!")
secret = random.randint(1, 10)

while True:
    guess = int(input("Guess a number from 1 to 10: "))

    if guess == secret:
        print("You win!")
        break
    elif guess > secret:
        print("Too high! Try again.")
    else:
        print("Too low! Try again.")</code></pre>

      <p>Now add lives, and it becomes a proper game with a way to lose:</p>
      <pre><code>import random

secret = random.randint(1, 10)
lives = 3

while lives > 0:
    guess = int(input("Your guess: "))

    if guess == secret:
        print("You win!")
        break

    lives -= 1
    print(f"Wrong. {lives} lives left.")

else:
    print(f"Game over! It was {secret}.")</code></pre>

      <div class="callout">
        <strong>Look at that <code>else</code>.</strong> It belongs to the <code>while</code>,
        not to an <code>if</code>. It runs only when the loop ends because lives ran out — never
        when the player wins and breaks out. That is the search-party idea from Topic 7 doing
        real work.
      </div>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the output</span>
        <p class="w__q">A very common bug. What does this print?</p>
        <pre><code>import random
cards = [1, 2, 3]
cards = random.shuffle(cards)
print(cards)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">A shuffled list like [3, 1, 2]</button>
          <button data-o="1">The original [1, 2, 3]</button>
          <button data-o="2">None</button>
        </div>
        <p class="w__why"><code>shuffle</code> rearranges the list in place and hands back
        nothing at all. Assigning its result overwrites your list with <code>None</code>. Just
        call <code>random.shuffle(cards)</code> on its own line.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which tool for which job?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Pick one lucky winner from a list</button>
            <button data-pair="b">Mix up a deck of cards</button>
            <button data-pair="c">Roll a dice fifty times</button>
            <button data-pair="d">Let the player keep guessing until right</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c"><code>randint</code> inside a <code>for</code> loop</button>
            <button data-pair="a"><code>random.choice()</code></button>
            <button data-pair="d">A <code>while</code> loop with <code>break</code></button>
            <button data-pair="b"><code>random.shuffle()</code></button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Between them these four ideas cover almost
        every small game you could want to build this year.</p>
      </div>
    `,
    mcqs: [
      { q: "You have a list of names and want one random winner. Which tool?",
        options: ["random.pick()", "random.choice()", "random.shuffle()", "random.winner()"],
        answer: 1,
        why: "choice() takes a list and hands back exactly one item from it." },

      { q: "What does random.shuffle() do to a list?",
        options: ["Deletes half the items", "Adds random numbers",
                  "Permanently mixes up the order of the existing list",
                  "Sorts it alphabetically"],
        answer: 2,
        why: "It rearranges the list in place and returns nothing, which is why you never assign its result." },

      { q: "In the guessing game, why is input() inside the while loop?",
        options: ["So the player is asked again and again until they get it right",
                  "Because input() only works in loops",
                  "To make it run faster",
                  "To hide the secret number"],
        answer: 0,
        why: "Put it above the loop and the player gets one guess, checked over and over forever." },

      { q: "What is wrong with: cards = random.shuffle(cards)?",
        options: ["Nothing, it is correct",
                  "shuffle returns nothing, so cards becomes None",
                  "shuffle needs two arguments",
                  "You cannot shuffle numbers"],
        answer: 1,
        why: "It changes the list in place and hands back None. Assigning that destroys your list." }
    ],
    tasks: [
      { id: "u2t14a", kind: "code",
        title: "Task 14.1 — The magic 8-ball",
        brief: "Make a list called responses holding Yes, No and Maybe. Use random.choice() to print one of them.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "random.choice", message: "Use random.choice()" },
          { type: "sourceIncludes", value: "responses", message: "Name your list responses" },
          { type: "stdoutRegex", pattern: "^(Yes|No|Maybe)$", message: "Output must be Yes, No or Maybe" }
        ] },

      { id: "u2t14b", kind: "code",
        title: "Task 14.2 — The card dealer",
        brief: "Make a list cards holding 1 to 5. Shuffle it, then print the list. Careful — do NOT assign the result of shuffle.",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "random.shuffle", message: "Use random.shuffle()" },
          { type: "stdoutRegex", pattern: "^\\[[1-5], [1-5], [1-5], [1-5], [1-5]\\]$", message: "Output should be the five numbers in some order" }
        ] },

      { id: "u2t14c", kind: "code",
        title: "Task 14.3 — Three dice rolls",
        brief: "Use a for loop running 3 times. Each round, roll a dice from 1 to 6 and print exactly: You rolled a 4",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "range(3)", message: "Loop exactly three times with range(3)" },
          { type: "sourceIncludes", value: "randint", message: "Use random.randint()" },
          { type: "stdoutRegex", pattern: "^You rolled a [1-6]\\nYou rolled a [1-6]\\nYou rolled a [1-6]$", message: "Three lines, each: You rolled a <1-6>" }
        ] },

      { id: "u2t14d", kind: "code",
        title: "Task 14.4 — Count the heads",
        brief: "Flip a coin 10 times using a loop and randint(1, 2). Count how many times you got 1, using an accumulator. Print only: Heads: 4  (whatever your number is).",
        starter: '',
        checks: [
          { type: "sourceIncludes", value: "randint", message: "Use random.randint()" },
          { type: "sourceIncludes", value: "for", message: "Use a for loop" },
          { type: "stdoutRegex", pattern: "^Heads: ([0-9]|10)$", message: "One line reading: Heads: <a number from 0 to 10>" }
        ] }
    ]
  },

  /* ============================== TOPIC 15 ============================== */
  {
    id: "u2t15",
    title: "Thinking Like a Programmer",
    summary: "Break the problem apart before you touch the keyboard. Then draw shapes with loops.",
    notebookLM: "",
    notes: `
      <h4>Teaching an alien to make a sandwich</h4>
      <p>An alien lands in your kitchen. You say: "make me a sandwich." It just stares at you.</p>
      <p>"Make a sandwich" is far too big. You have to break it into baby steps:</p>
      <ol>
        <li>Open the bread packet.</li>
        <li>Take out two slices.</li>
        <li>Put them on a plate.</li>
        <li>Open the jam jar. And so on.</li>
      </ol>
      <p>That breaking-apart is called <strong>decomposition</strong>, and it is the single
      most important skill in programming.</p>

      <h4>The four steps — do these before you type</h4>
      <table>
        <tr><th>Step</th><th>Ask yourself</th></tr>
        <tr><td>1. The goal</td><td>What exactly should the final output look like?</td></tr>
        <tr><td>2. Decomposition</td><td>In plain English, what are the tiny steps?</td></tr>
        <tr><td>3. Pattern matching</td><td>Which tool fits? Repeating → a loop. Choosing → an if.</td></tr>
        <tr><td>4. Translate</td><td><em>Now</em> turn your English into Python.</td></tr>
      </table>

      <div class="callout">
        <strong>Never start at step 4.</strong> Typing first and thinking later is why students
        stare at broken code for an hour. Ten minutes with a pen saves an hour at the keyboard.
      </div>

      <h4>Encapsulation — the coffee machine</h4>
      <p>You press one button and get coffee. You do not grind beans, heat water and push it
      through a filter yourself. All that complexity is hidden inside the box.</p>
      <p><strong>Encapsulation</strong> means wrapping a long, messy block of code inside one
      simple tool — a function — so your brain only has to hold one idea at a time.</p>

      <h4>Generalisation — the adjustable spanner</h4>
      <p>A mechanic could carry fifty spanners for fifty bolt sizes. Or carry one adjustable
      spanner that fits them all.</p>
      <p><strong>Generalisation</strong> means writing code that is not locked to one number.</p>
      <pre><code># locked to one size
for row in range(3):
    ...

# adjustable — works for any size
size = 5
for row in range(size):
    ...</code></pre>

      <h4>Drawing shapes with nested loops</h4>
      <p><strong>The problem:</strong> print a square of stars, 3 rows tall and 3 wide.</p>
      <p><strong>Think it through first:</strong></p>
      <ol>
        <li>I need 3 rows going down. That sounds like a loop.</li>
        <li>Inside every row I need 3 stars going across. That sounds like another loop.</li>
        <li>So: the outer loop moves down the rows, the inner loop draws across.</li>
      </ol>

      <pre><code>size = 3

for row in range(size):
    for col in range(size):
        print("* ", end="")     # stay on this line!
    print()                     # now move to the next line</code></pre>

      <pre><code>* * *
* * *
* * *</code></pre>

      <svg class="fig" viewBox="0 0 700 190" role="img" aria-label="The outer loop controls the rows going down, the inner loop draws the stars going across.">
        <text x="350" y="24" text-anchor="middle" class="lbl">outer loop = rows &nbsp;·&nbsp; inner loop = columns</text>

        <path class="arrow" d="M60 52 v96"/><path class="accent" d="M60 158 l-7 -13 h14 z"/>
        <text x="34" y="104" text-anchor="middle" class="lbl" transform="rotate(-90 34 104)">outer</text>

        <path class="arrow" d="M96 40 h180"/><path class="accent" d="M286 40 l-13 -7 v14 z"/>
        <text x="186" y="30" text-anchor="middle" class="lbl">inner</text>

        <text x="110" y="72" class="mono accent" style="font-size:18px">*  *  *</text>
        <text x="110" y="106" class="mono accent" style="font-size:18px">*  *  *</text>
        <text x="110" y="140" class="mono accent" style="font-size:18px">*  *  *</text>

        <rect class="box box--dark" x="340" y="46" width="352" height="110" rx="8"/>
        <text x="364" y="76" class="mono on-dark" style="font-size:12px">for row in range(3):</text>
        <text x="364" y="100" class="mono on-dark" style="font-size:12px">    for col in range(3):</text>
        <text x="364" y="124" class="mono accent" style="font-size:12px">        print("* ", end="")</text>
        <text x="364" y="146" class="mono accent" style="font-size:12px">    print()</text>
      </svg>

      <div class="callout">
        <strong>Those two prints do very different jobs.</strong> The indented one with
        <code>end=""</code> draws a star and stays put. The one outside the inner loop is empty
        — its only job is to press Enter and start the next row. Forget it and every star lands
        on one enormous line.
      </div>

      <h4>Number patterns</h4>
      <p><strong>The problem:</strong> row 1 shows <code>1</code>, row 2 shows
      <code>1 2</code>, row 3 shows <code>1 2 3</code>.</p>
      <p><strong>The insight:</strong> the inner loop's length is not fixed — it depends on
      which row we are currently on.</p>

      <pre><code>size = 3

for row in range(1, size + 1):
    for col in range(1, row + 1):     # ← depends on row!
        print(col, end=" ")
    print()</code></pre>

      <div class="w w-guess" data-answer="0">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What goes wrong here?</p>
        <pre><code>for row in range(2):
    for col in range(3):
        print("*", end="")</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">All six stars land on one line</button>
          <button data-o="1">Two rows of three stars</button>
          <button data-o="2">Nothing prints</button>
        </div>
        <p class="w__why">The empty <code>print()</code> at the end of the outer loop is
        missing, so nothing ever moves to a new line. You get <code>******</code> in one long
        row.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Match the idea to its real-world picture.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Decomposition</button>
            <button data-pair="b">Encapsulation</button>
            <button data-pair="c">Generalisation</button>
            <button data-pair="d">The inner loop</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">An adjustable spanner</button>
            <button data-pair="a">Baby steps for the alien</button>
            <button data-pair="d">Draws across one line</button>
            <button data-pair="b">A coffee machine with one button</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> These three habits are what separate a
        student who can copy code from one who can write it.</p>
      </div>
    `,
    mcqs: [
      { q: "What does decomposition mean?",
        options: ["Deleting old code",
                  "Breaking a big problem into tiny, easy steps",
                  "Turning all variables into numbers",
                  "Creating an infinite loop"],
        answer: 1,
        why: "Teaching the alien to make a sandwich. Solve it in English first, then translate to Python." },

      { q: "Which is the best picture of generalisation?",
        options: ["A single-use plastic spoon", "A dictionary",
                  "An adjustable spanner that fits many sizes", "A permanent marker"],
        answer: 2,
        why: "Code that works for any size, instead of being locked to the one number you happened to test with." },

      { q: "In a pattern-printing program, what does the INNER loop usually control?",
        options: ["Moving down row by row", "Drawing across the columns on one line",
                  "The speed", "Stopping the program"],
        answer: 1,
        why: "Outer goes down, inner goes across. Remembering which is which saves a lot of confusion." },

      { q: "Why do you need an empty print() after the inner loop?",
        options: ["To leave a blank line between rows",
                  "To move down to the next line, because end=\"\" stopped it",
                  "To clear the screen",
                  "It is not needed"],
        answer: 1,
        why: "end=\"\" tells print not to move down. Something has to, or the whole shape lands on one line." }
    ],
    tasks: [
      { id: "u2t15a", kind: "code",
        title: "Task 15.1 — The rectangle",
        brief: "Use nested loops to print a rectangle of stars, 2 rows tall and 5 wide. Use \"* \" with a space after it.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "* * * * *\n* * * * *" },
          { type: "sourceIncludes", value: 'end=""', message: 'Use end="" on the inner print' }
        ] },

      { id: "u2t15b", kind: "code",
        title: "Task 15.2 — The number square",
        brief: "Print a 3 by 3 square, but with the number 5 in every place instead of a star. Use \"5 \" with a space after it.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "5 5 5\n5 5 5\n5 5 5" },
          { type: "sourceMinMatches", pattern: "for ", count: 2, message: "Use two for loops" }
        ] },

      { id: "u2t15c", kind: "code",
        title: "Task 15.3 — The growing triangle",
        brief: "Print a triangle of numbers with 4 rows. Row 1 is 1, row 2 is 1 2, row 3 is 1 2 3, row 4 is 1 2 3 4. Put a space after each number.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "1\n1 2\n1 2 3\n1 2 3 4" },
          { type: "sourceRegex", pattern: "range\\([^)]*row[^)]*\\)", message: "The inner range should depend on the current row" }
        ] },

      { id: "u2t15d", kind: "code",
        title: "Task 15.4 — The shrinking triangle",
        brief: "Print an upside-down star triangle with 3 rows: three stars, then two, then one. Use \"* \" with a space after each.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "* * *\n* *\n*" },
          { type: "sourceIncludes", value: "-1", message: "Count the rows backwards with a negative step" }
        ] }
    ]
  },

  /* ============================== TOPIC 16 ============================== */
  {
    id: "u2t16",
    title: "Classic Number Algorithms",
    summary: "Digit chopping, primes, factorials and Fibonacci — the four every CS student must know.",
    notebookLM: "",
    notes: `
      <h4>1. Pulling a number apart</h4>
      <p><strong>The problem:</strong> take 456 and add its digits together to get 15.</p>
      <p><strong>Think it through:</strong></p>
      <ol>
        <li>How do I grab the last digit? <code>456 % 10</code> gives me the remainder — <strong>6</strong>.</li>
        <li>How do I add it up? An accumulator, from Topic 8.</li>
        <li>How do I get rid of it? <code>456 // 10</code> chops it off, leaving <strong>45</strong>.</li>
        <li>Repeat while the number is still bigger than 0.</li>
      </ol>

      <pre><code>num = 456
total = 0

while num > 0:
    last = num % 10      # grab   → 6
    total += last        # keep   → 6
    num = num // 10      # chop   → 45

print(total)             # 15</code></pre>

      <svg class="fig" viewBox="0 0 700 175" role="img" aria-label="Modulus grabs the last digit, floor division chops it off, and this repeats until nothing is left.">
        <text x="350" y="24" text-anchor="middle" class="lbl">grab with % 10 &nbsp;·&nbsp; chop with // 10</text>

        <rect class="box" x="8" y="40" width="140" height="60" rx="7"/>
        <text x="78" y="78" text-anchor="middle" class="mono" style="font-size:17px">456</text>
        <text x="78" y="122" text-anchor="middle" class="mono accent" style="font-size:12px">grab 6</text>

        <path class="arrow" d="M156 70 h34"/><path class="accent" d="M200 70 l-12 -7 v14 z"/>

        <rect class="box" x="208" y="40" width="140" height="60" rx="7"/>
        <text x="278" y="78" text-anchor="middle" class="mono" style="font-size:17px">45</text>
        <text x="278" y="122" text-anchor="middle" class="mono accent" style="font-size:12px">grab 5</text>

        <path class="arrow" d="M356 70 h34"/><path class="accent" d="M400 70 l-12 -7 v14 z"/>

        <rect class="box" x="408" y="40" width="140" height="60" rx="7"/>
        <text x="478" y="78" text-anchor="middle" class="mono" style="font-size:17px">4</text>
        <text x="478" y="122" text-anchor="middle" class="mono accent" style="font-size:12px">grab 4</text>

        <path class="arrow" d="M556 70 h34"/><path class="accent" d="M600 70 l-12 -7 v14 z"/>

        <rect x="608" y="40" width="84" height="60" rx="7" fill="rgba(242,160,61,.18)" stroke="#D67F19" stroke-width="2.2"/>
        <text x="650" y="78" text-anchor="middle" class="mono accent" style="font-size:17px">0</text>
        <text x="650" y="122" text-anchor="middle" class="lbl">stop</text>
      </svg>

      <h4>2. Is it prime?</h4>
      <p>A prime number divides cleanly only by 1 and itself.</p>
      <p><strong>Think it through:</strong> to test 7, try dividing it by 2, 3, 4, 5 and 6. If
      <em>any</em> of them leaves no remainder, it is not prime.</p>

      <pre><code>num = 7
is_prime = True          # innocent until proven guilty

for i in range(2, num):
    if num % i == 0:     # found a clean divide
        is_prime = False # guilty!
        break            # no need to keep looking

if is_prime and num > 1:
    print("Prime!")
else:
    print("Not prime.")</code></pre>

      <div class="callout">
        <strong>Two details that matter.</strong> The <code>break</code> stops the search the
        moment we have our answer — no point testing the rest. And <code>num &gt; 1</code>
        matters because 1 is <em>not</em> prime, but the loop never runs for it, so
        <code>is_prime</code> would wrongly stay True.
      </div>

      <h4>3. Factorial</h4>
      <p>5 factorial, written 5!, means 5 × 4 × 3 × 2 × 1 = 120.</p>
      <pre><code>num = 5
factorial = 1            # MUST start at 1

for i in range(1, num + 1):
    factorial = factorial * i

print(factorial)         # 120</code></pre>

      <div class="callout">
        <strong>Start at 1, not 0.</strong> An adding accumulator starts at 0. A
        <em>multiplying</em> one must start at 1 — because anything times zero stays zero
        forever, and your answer would always be 0.
      </div>

      <h4>4. Fibonacci</h4>
      <p>Each number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, 13 …</p>
      <p><strong>Think it through:</strong> keep two variables, add them to get the next, then
      shuffle everything forward one place.</p>

      <pre><code>a = 0
b = 1
print(a)
print(b)

for i in range(5):
    next_num = a + b
    print(next_num)

    a = b            # shift
    b = next_num     # shift</code></pre>

      <div class="callout">
        <strong>The shifting is the whole trick.</strong> Get the order wrong — setting
        <code>b</code> before <code>a</code> — and you overwrite the value you still needed. Dry-run
        it on paper if it does not click.
      </div>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Guess the output</span>
        <p class="w__q">What does this print?</p>
        <pre><code>print(892 % 10)
print(892 // 10)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">89 then 2</button>
          <button data-o="1">2 then 89</button>
          <button data-o="2">8 then 92</button>
        </div>
        <p class="w__why"><code>%</code> grabs the leftover — the last digit, 2.
        <code>//</code> divides and chops the decimal away, leaving 89. Together they let you
        walk through any number one digit at a time.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Which starting value does each accumulator need?</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Adding up digits</button>
            <button data-pair="b">Working out a factorial</button>
            <button data-pair="c">Building a word from letters</button>
            <button data-pair="d">Assuming a number is prime</button>
          </div>
          <div class="w-match__col">
            <button data-pair="d"><code>True</code></button>
            <button data-pair="a"><code>0</code></button>
            <button data-pair="c"><code>""</code></button>
            <button data-pair="b"><code>1</code></button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> Choosing the wrong starting value is one of
        the sneakiest bugs there is, because the code runs perfectly and just gives a wrong
        answer.</p>
      </div>
    `,
    mcqs: [
      { q: "If number = 892, which operation grabs the 2 on its own?",
        options: ["number / 10", "number % 10", "number // 10", "number ** 2"],
        answer: 1,
        why: "% gives the remainder after dividing by 10, which is always the last digit." },

      { q: "In a prime check, what does the loop actually do?",
        options: ["Checks if the number is odd or even",
                  "Tries dividing the number by every smaller number, looking for a remainder of 0",
                  "Multiplies the number by 10",
                  "Checks whether it is negative"],
        answer: 1,
        why: "One clean divide means it is not prime, and break stops the search immediately." },

      { q: "For a MULTIPLYING accumulator like a factorial, what must the start value be?",
        options: ["0", "-1", "1", "10"],
        answer: 2,
        why: "Anything times 0 stays 0. Start at 1 and the multiplication works properly." },

      { q: "In the Fibonacci code, why do we write a = b before b = next_num?",
        options: ["It looks tidier",
                  "Doing it the other way would overwrite the value we still need",
                  "Python demands alphabetical order",
                  "It does not matter"],
        answer: 1,
        why: "Set b first and the old b is lost, so a gets the wrong value. Order matters when you shuffle variables." }
    ],
    tasks: [
      { id: "u2t16a", kind: "code",
        title: "Task 16.1 — Chop a digit off",
        brief: "Make x = 73. Use floor division to chop the 3 off so x becomes 7, then print x.",
        starter: 'x = 73\n',
        checks: [
          { type: "stdoutEquals", value: "7" },
          { type: "sourceIncludes", value: "//", message: "Use floor division //" }
        ] },

      { id: "u2t16b", kind: "code",
        title: "Task 16.2 — Add up the digits",
        brief: "Make num = 456. Use a while loop with % and // to add all its digits together. Print only the total.",
        starter: 'num = 456\n',
        checks: [
          { type: "stdoutEquals", value: "15" },
          { type: "sourceIncludes", value: "%", message: "Use % to grab each digit" },
          { type: "sourceIncludes", value: "//", message: "Use // to chop each digit off" }
        ] },

      { id: "u2t16c", kind: "code",
        title: "Task 16.3 — Factorial of 4",
        brief: "Use a for loop to work out 4 × 3 × 2 × 1. Print only the answer.",
        starter: '',
        checks: [
          { type: "stdoutEquals", value: "24" },
          { type: "sourceIncludes", value: "for", message: "Use a for loop" }
        ] },

      { id: "u2t16d", kind: "code",
        title: "Task 16.4 — The prime tester",
        brief: "Make num = 15. Test whether it is prime using a for loop and break. Print Prime! or Not prime.",
        starter: 'num = 15\n',
        checks: [
          { type: "stdoutEquals", value: "Not prime" },
          { type: "sourceIncludes", value: "break", message: "Use break once you have your answer" }
        ] },

      { id: "u2t16e", kind: "code",
        title: "Task 16.5 — Reverse a number",
        brief: "Make num = 123. Using a while loop with % and //, print each digit backwards on its own line: 3, then 2, then 1.",
        starter: 'num = 123\n',
        checks: [
          { type: "stdoutEquals", value: "3\n2\n1" },
          { type: "sourceIncludes", value: "while", message: "Use a while loop" }
        ] }
    ]
  },

  /* ============================== TOPIC 17 ============================== */
  {
    id: "u2t17",
    title: "Palindromes, Armstrong Numbers and Trace Tables",
    summary: "Two more classics, the accountant's ledger for your code, and why nested loops get slow.",
    notebookLM: "",
    notes: `
      <h4>Palindromes</h4>
      <p>A palindrome reads the same forwards and backwards: <em>madam</em>, <em>racecar</em>,
      <em>12321</em>.</p>
      <p>Python has a lovely shortcut for reversing text — <code>[::-1]</code>. You will learn
      exactly how it works in Unit 3; for now just use it.</p>

      <pre><code>original = "12321"
backwards = original[::-1]

if original == backwards:
    print("It is a palindrome!")
else:
    print("Not a palindrome.")</code></pre>

      <h4>Armstrong numbers</h4>
      <p>Take every digit, raise it to the power of how many digits there are, and add them up.
      If you get the original number back, it is an Armstrong number.</p>
      <p>153 has three digits: 1³ + 5³ + 3³ = 1 + 125 + 27 = <strong>153</strong>. It is one.</p>

      <pre><code>num = 153
temp = num           # a safe copy!
total = 0

while temp > 0:
    digit = temp % 10
    total += digit ** 3
    temp = temp // 10

if total == num:
    print("Armstrong Number!")
else:
    print("Not an Armstrong number.")</code></pre>

      <div class="callout">
        <strong>Why the copy matters.</strong> Chopping digits destroys the number. If you chop
        <code>num</code> itself, by the end it is 0 and you have nothing left to compare
        against. Always work on <code>temp</code> and keep <code>num</code> untouched.
      </div>

      <h4>Trace tables — the accountant's ledger</h4>
      <p>An accountant does not guess how much money a business has. They write every penny
      down, line by line.</p>
      <p>When your loop gives a wrong answer, staring at the screen will not help. Draw a
      <strong>trace table</strong> instead: a chart tracking every variable through every round.</p>

      <pre><code>x = 0
for i in range(1, 4):
    x = x + i</code></pre>

      <table>
        <tr><th>Round</th><th>i</th><th>x before</th><th>x after</th></tr>
        <tr><td>1</td><td>1</td><td>0</td><td><strong>1</strong></td></tr>
        <tr><td>2</td><td>2</td><td>1</td><td><strong>3</strong></td></tr>
        <tr><td>3</td><td>3</td><td>3</td><td><strong>6</strong></td></tr>
      </table>

      <p>The final answer is 6 — and you knew it before running a single line.</p>

      <div class="callout">
        <strong>Do this in exams.</strong> Almost every paper has a "what is the output" loop
        question. A four-row table takes ninety seconds and turns a guess into a certainty.
      </div>

      <h4>How slow is my program?</h4>
      <p>Finding "Apple" in a dictionary is quick. Reading the whole dictionary is not.
      <strong>Time complexity</strong> is how computer scientists describe the way a program
      slows down as the data grows.</p>

      <svg class="fig" viewBox="0 0 700 195" role="img" aria-label="Constant time stays flat, linear time doubles with the data, quadratic time from nested loops grows four times.">
        <rect class="box" x="8" y="34" width="216" height="132" rx="8"/>
        <text x="116" y="62" text-anchor="middle" class="mono accent" style="font-size:13px">O(1)</text>
        <text x="116" y="86" text-anchor="middle" style="font-size:12px">constant</text>
        <path class="good" d="M32 132 h168" stroke="#1E7F72" stroke-width="2.5"/>
        <text x="116" y="156" text-anchor="middle" style="font-size:11.5px">same speed, always</text>

        <rect class="box" x="242" y="34" width="216" height="132" rx="8"/>
        <text x="350" y="62" text-anchor="middle" class="mono accent" style="font-size:13px">O(N)</text>
        <text x="350" y="86" text-anchor="middle" style="font-size:12px">one loop</text>
        <path class="good" d="M266 138 L434 100" stroke="#D67F19" stroke-width="2.5"/>
        <text x="350" y="156" text-anchor="middle" style="font-size:11.5px">twice the data, twice as long</text>

        <rect class="box box--dark" x="476" y="34" width="216" height="132" rx="8"/>
        <text x="584" y="62" text-anchor="middle" class="mono accent" style="font-size:13px">O(N²)</text>
        <text x="584" y="86" text-anchor="middle" class="on-dark" style="font-size:12px">nested loops</text>
        <path class="good" d="M500 140 Q600 138 668 96" stroke="#CF4A3C" stroke-width="2.5"/>
        <text x="584" y="156" text-anchor="middle" class="on-dark" style="font-size:11.5px">twice the data, FOUR times as long</text>
      </svg>

      <table>
        <tr><th>Name</th><th>What it means</th><th>Comes from</th></tr>
        <tr><td>O(1)</td><td>Same speed whatever the size</td><td>A single <code>print()</code></td></tr>
        <tr><td>O(N)</td><td>Double the data, double the time</td><td>One loop over the data</td></tr>
        <tr><td>O(N²)</td><td>Double the data, <em>four times</em> the time</td><td>A loop inside a loop</td></tr>
      </table>

      <div class="callout">
        <strong>Why you should care already.</strong> With 10 items, a nested loop does 100
        rounds — instant. With 10,000 items it does 100 million. The code is identical; only
        the data grew. This is why "it worked on my small test file" is such a common story.
      </div>

      <div class="w w-guess" data-answer="1">
        <span class="w__k">Trace it</span>
        <p class="w__q">Draw the table on paper. What is the final value?</p>
        <pre><code>total = 10
for i in range(1, 3):
    total = total - i
print(total)</code></pre>
        <div class="w-guess__opts">
          <button data-o="0">10</button>
          <button data-o="1">7</button>
          <button data-o="2">4</button>
        </div>
        <p class="w__why"><code>range(1, 3)</code> gives 1 and 2 — only two rounds, because 3 is
        never included. Round 1: 10 − 1 = 9. Round 2: 9 − 2 = 7.</p>
      </div>

      <div class="w w-guess" data-answer="2">
        <span class="w__k">Guess the answer</span>
        <p class="w__q">A single loop over 10 items takes 1 second. Roughly how long does a
        nested loop over the same 10 items take?</p>
        <div class="w-guess__opts">
          <button data-o="0">Also 1 second</button>
          <button data-o="1">2 seconds</button>
          <button data-o="2">About 10 seconds</button>
        </div>
        <p class="w__why">10 × 10 = 100 rounds instead of 10, so roughly ten times the work.
        Now imagine 1,000 items: one loop does 1,000 rounds, the nested one does a million.</p>
      </div>

      <div class="w w-match">
        <span class="w__k">Match the pairs</span>
        <p class="w__q">Match each idea to its description.</p>
        <div class="w-match__grid">
          <div class="w-match__col">
            <button data-pair="a">Palindrome</button>
            <button data-pair="b">Armstrong number</button>
            <button data-pair="c">Trace table</button>
            <button data-pair="d">O(N²)</button>
          </div>
          <div class="w-match__col">
            <button data-pair="c">A ledger tracking variables round by round</button>
            <button data-pair="a">Reads the same both ways</button>
            <button data-pair="d">Comes from nesting one loop inside another</button>
            <button data-pair="b">Digits raised to the power of how many there are</button>
          </div>
        </div>
        <p class="w__why"><strong>All four.</strong> That is the end of Unit 2. Next comes the
        test — 30 questions, 60 marks — and then your project.</p>
      </div>
    `,
    mcqs: [
      { q: "What is a palindrome?",
        options: ["A number divisible only by 1",
                  "A word or sequence that reads the same forwards and backwards",
                  "A formula for circles",
                  "A kind of error"],
        answer: 1,
        why: "madam, racecar, 12321. In Python you can reverse text with the [::-1] shortcut and compare." },

      { q: "Why draw a trace table?",
        options: ["To make the program run faster",
                  "To draw shapes on screen",
                  "To slow your brain down and track how variables change, so you can find logic bugs",
                  "To store passwords"],
        answer: 2,
        why: "It is how you find the bugs that do not crash — the ones that quietly give a wrong answer." },

      { q: "What usually causes O(N²) time?",
        options: ["A single print statement", "Using variables",
                  "Nested loops — a loop inside a loop", "Using the math module"],
        answer: 2,
        why: "Every extra item multiplies the work. Fine for 10 items, painful for 10,000." },

      { q: "In the Armstrong check, why copy num into temp first?",
        options: ["It runs faster",
                  "Chopping digits destroys the number, and you need the original to compare against at the end",
                  "Python needs two variables",
                  "It is just a style choice"],
        answer: 1,
        why: "By the end of the loop temp is 0. Without the copy you would have nothing left to compare your total to." }
    ],
    tasks: [
      { id: "u2t17a", kind: "code",
        title: "Task 17.1 — The palindrome test",
        brief: "Make word = \"madam\". Reverse it with [::-1] and print It is a palindrome! or Not a palindrome.",
        starter: 'word = "madam"\n',
        checks: [
          { type: "stdoutEquals", value: "It is a palindrome!" },
          { type: "sourceIncludes", value: "[::-1]", message: "Use the [::-1] reversing shortcut" }
        ] },

      { id: "u2t17b", kind: "code",
        title: "Task 17.2 — Find the odd one out",
        brief: "Three values are given: 11, 44 and 45. Print only the one that is NOT a palindrome. (Hint: str() turns a number into text.)",
        starter: 'values = [11, 44, 45]\n',
        checks: [
          { type: "stdoutEquals", value: "45" },
          { type: "sourceIncludes", value: "[::-1]", message: "Use the [::-1] shortcut" },
          { type: "sourceIncludes", value: "str(", message: "Use str() to turn each number into text" }
        ] },

      { id: "u2t17c", kind: "code",
        title: "Task 17.3 — The Armstrong test",
        brief: "Make num = 153. Use a safe copy and a while loop to test it. Print Armstrong Number! or Not an Armstrong number.",
        starter: 'num = 153\n',
        checks: [
          { type: "stdoutEquals", value: "Armstrong Number!" },
          { type: "sourceIncludes", value: "while", message: "Use a while loop" },
          { type: "sourceIncludes", value: "**", message: "Raise each digit to a power" }
        ] },

      { id: "u2t17d", kind: "code",
        title: "Task 17.4 — Prove your trace table",
        brief: "Trace this on paper first, then write it and check you were right. total starts at 10, subtract i for i in range(1, 3), print the result.",
        starter: 'total = 10\n',
        checks: [
          { type: "stdoutEquals", value: "7" },
          { type: "sourceIncludes", value: "range(1, 3)", message: "Use range(1, 3)" }
        ] }
    ]
  }

  ],

  /* ============================== UNIT TEST ==============================
     30 questions, 2 marks each, 60 marks total. */
  test: {
    title: "Unit 2 Test",
    marksPerQuestion: 2,
    durationMinutes: 45,
    questions: [
      { q: "How must Boolean values be typed in Python?",
        options: ["true and false", "TRUE and FALSE", "True and False", "T and F"], answer: 2 },

      { q: "What is the answer to (5 > 2) or (10 == 100)?",
        options: ["False", "True", "100", "An error"], answer: 1 },

      { q: "Which symbol means \"not equal to\"?",
        options: ["==", "<>", "!=", "not="], answer: 2 },

      { q: "Which logical operator is worked out FIRST?",
        options: ["and", "not", "or", "=="], answer: 1 },

      { q: "Which of these is a Falsy value?",
        options: ["100", "\"Hello\"", "0", "\"False\""], answer: 2 },

      { q: "What does bool(\" \") give, for a string holding one space?",
        options: ["False", "True", "None", "An error"], answer: 1 },

      { q: "What does short-circuit evaluation mean?",
        options: ["Python shuts down on an error",
                  "Python stops reading a logical line once the answer cannot change",
                  "Python skips lines at random",
                  "Python deletes falsy values"], answer: 1 },

      { q: "What must go at the end of an if line?",
        options: ["A semicolon", "A full stop", "A colon", "A hash"], answer: 2 },

      { q: "How does Python know which lines are inside an if?",
        options: ["They are in red", "They are indented", "They are capitalised", "You write End"], answer: 1 },

      { q: "In an if-elif-else chain, what happens at the first True condition?",
        options: ["It runs that block and skips the rest of the chain",
                  "It runs that block and keeps checking",
                  "It crashes", "It prints True"], answer: 0 },

      { q: "Why does if score = 100: crash?",
        options: ["100 is too big", "It is missing a colon",
                  "One equals sign assigns; asking a question needs two", "It is not indented"], answer: 2 },

      { q: "Which is a correctly written ternary?",
        options: ["if age >= 18 \"Adult\" else \"Minor\"",
                  "\"Adult\" if age >= 18 else \"Minor\"",
                  "if age >= 18 then \"Adult\"",
                  "\"Adult\" else \"Minor\" if age >= 18"], answer: 1 },

      { q: "What does dry-running mean?",
        options: ["Running without internet",
                  "Tracing the code on paper, acting like the computer",
                  "Deleting variables", "Saving to a pen drive"], answer: 1 },

      { q: "How does a while loop know when to stop?",
        options: ["At the end of a list", "When Escape is pressed",
                  "When its condition becomes False", "After 10 rounds"], answer: 2 },

      { q: "Which loop is best for doing something to every letter in a word?",
        options: ["A while loop", "A for loop", "An if loop", "An infinite loop"], answer: 1 },

      { q: "What causes an infinite loop?",
        options: ["A long list", "Forgetting to indent",
                  "A while condition that never becomes False", "Typing infinity"], answer: 2 },

      { q: "A for loop over 4 items contains a loop over 5 items. How many times does the inner body run?",
        options: ["9", "5", "20", "4"], answer: 2 },

      { q: "When does an else attached to a loop run?",
        options: ["If the loop crashes", "If the condition was False from the start",
                  "Only when the loop finishes without being stopped early", "Always"], answer: 2 },

      { q: "Where must an accumulator variable be created?",
        options: ["Outside and before the loop", "Inside the loop",
                  "After the loop", "In the else block"], answer: 0 },

      { q: "For a multiplying accumulator like a factorial, the start value must be:",
        options: ["0", "1", "-1", "10"], answer: 1 },

      { q: "What does break do?",
        options: ["Skips one round", "Pauses the program",
                  "Stops the loop completely", "Restarts the loop"], answer: 2 },

      { q: "What does continue do?",
        options: ["Stops the loop", "Skips the rest of this round and starts the next",
                  "Does nothing", "Returns a value"], answer: 1 },

      { q: "Why does pass exist?",
        options: ["To pass data between variables",
                  "As an empty placeholder so the code does not crash",
                  "To speed things up", "To end a function"], answer: 1 },

      { q: "Where is return used?",
        options: ["In a while loop", "In an if statement",
                  "Inside a function, to hand back an answer", "At the top of a file"], answer: 2 },

      { q: "What does range(10) generate?",
        options: ["1 to 10", "0 to 10", "0 to 9", "10 down to 1"], answer: 2 },

      { q: "In range(2, 20, 2), what is the third number?",
        options: ["The start", "The step", "A pause", "The stop"], answer: 1 },

      { q: "Which range counts backwards from 5 to 1?",
        options: ["range(5, 0)", "range(5, 0, -1)", "range(1, 5)", "range(0, 5, -1)"], answer: 1 },

      { q: "What happens if you call next() on an empty iterator?",
        options: ["It restarts", "It prints None",
                  "Python raises StopIteration", "It returns 0"], answer: 2 },

      { q: "How is random.randint(1, 6) different from range(1, 6)?",
        options: ["They are identical", "randint can give 6; range stops at 5",
                  "range can give 6; randint stops at 5", "Neither gives 6"], answer: 1 },

      { q: "What usually causes O(N squared) time complexity?",
        options: ["A single print", "Using variables",
                  "Nested loops", "Importing a module"], answer: 2 }
    ]
  },

  /* ============================= UNIT PROJECT ============================= */
  project: {
    title: "Unit 2 Project — The Number Game Arcade",
    summary: "One playable Python program that uses every idea from Unit 2. Put it on GitHub or Drive and submit the link.",
    brief: `
      <h4>What to build</h4>
      <p>One Python file called <code>arcade.py</code>. When it runs, the player guesses a
      secret number, has a limited number of lives, and gets a score summary at the end.</p>
      <p>This project uses almost everything from Unit 2 together: random numbers, a while
      loop, an if-elif-else chain, break, an accumulator, a nested loop and a trophy pattern.</p>

      <h4>What it must contain</h4>
      <ol>
        <li>A <strong>docstring</strong> at the top with your name, roll number and what the file does.</li>

        <li>At least <strong>four comments</strong> starting with <code>#</code>, each saying
        <em>why</em>, not repeating the obvious.</li>

        <li><code>import random</code>, and a secret number made with
        <strong><code>random.randint()</code></strong>.</li>

        <li>A <strong>constant</strong> in ALL CAPITALS, such as <code>MAX_LIVES</code> or
        <code>UPPER_LIMIT</code>.</li>

        <li>A <strong>while loop</strong> that keeps asking until the player wins or runs out
        of lives.</li>

        <li><code>input()</code> converted with <code>int()</code>, and an
        <strong>if-elif-else chain</strong> telling the player <em>Too high</em>,
        <em>Too low</em>, or <em>Correct</em>.</li>

        <li>A <strong><code>break</code></strong> when the player wins.</li>

        <li>An <strong>accumulator</strong> counting how many guesses were used.</li>

        <li>A <strong><code>continue</code></strong> used somewhere sensible — for example,
        skipping a guess that is outside the allowed range without costing a life.</li>

        <li>An <strong><code>else</code> attached to the while loop</strong> that runs only when
        the lives run out, revealing the secret number.</li>

        <li>A <strong>nested loop</strong> that prints a trophy or a border pattern out of
        characters when the player wins.</li>

        <li>At least one <strong>f-string</strong>, and one use of <code>end=</code> or
        <code>sep=</code>.</li>

        <li>It must run on Python 3 with <strong>no errors</strong>, and it must not be
        possible to get stuck in an endless loop.</li>
      </ol>

      <h4>Roughly what a winning game should look like</h4>
      <pre><code>=== WELCOME TO THE NUMBER ARCADE ===
You have 5 lives. Guess a number from 1 to 20.

Your guess: 10
Too low! 4 lives left.
Your guess: 15
Too high! 3 lives left.
Your guess: 13
Correct!

* * * * *
 * * * *
  * * *
   * *
    *

You won in 3 guesses with 3 lives to spare.</code></pre>

      <h4>And a losing game</h4>
      <pre><code>Your guess: 2
Too low! 0 lives left.

Out of lives! The number was 13.
You used 5 guesses.</code></pre>

      <h4>How it will be marked</h4>
      <ul>
        <li><strong>It runs, and it is actually playable</strong> — checked first.</li>
        <li>Every item on the list above is present.</li>
        <li>The loop always ends. No way to get trapped.</li>
        <li>Comments explain reasons, and names use snake_case.</li>
        <li>The output is tidy and the messages make sense to a player.</li>
      </ul>

      <div class="callout">
        <strong>Play it before you submit.</strong> Win once. Lose once. Type something silly
        and see what happens. A game that crashes when the player types a letter instead of a
        number is a game that has not been tested.
      </div>

      <h4>How to submit</h4>
      <p>Push the file to a <strong>public GitHub repository</strong>, or upload it to
      <strong>Google Drive</strong> with sharing set to <em>Anyone with the link</em>. Paste
      that link below.</p>
      <p>Open your own link in a private browsing window first. If it does not open there, it
      will not open for your teacher either.</p>
    `
  }
};
