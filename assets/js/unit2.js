/* ==========================================================================
   AbhyasLab — UNIT 2
   Control Flow and Iterative Statements — Expanded Practice Edition.

   This file is intentionally separate from Unit 1 so future changes can be
   made without touching another unit. It includes detailed explanations,
   worked examples, inline SVG diagrams, animations, learning games, staged
   coding practice, revision checkpoints, a guided mini-project, final test,
   and final project submission.
   ========================================================================== */

const UNIT_2 = {
  "unit": "Unit 2",
  "unitTitle": "Control Flow and Iterative Statements — Practice Edition",
  "topics": [
    {
      "id": "u2t01",
      "title": "Boolean Logic — Values, Comparisons and Operators",
      "summary": "Build True/False questions and combine them into useful decisions.",
      "notebookLM": "",
      "notes": "\n      <h4>Welcome to Unit 2</h4>\n      <p>In Unit 1 your programs ran straight down the page, line by line, doing exactly the\n      same thing every time.</p>\n      <p>Real life is not like that. <em>If</em> it rains you take an umbrella. <em>If</em> it\n      is sunny you take sunglasses. From now on your programs will make decisions.</p>\n      <p>But before a computer can decide anything, it needs to know one thing:\n      <strong>is this true, or is this false?</strong></p>\n\n      <h4>The light switch</h4>\n      <p>A switch in your room is either completely ON or completely OFF. There is nothing in\n      between.</p>\n      <p>A <strong>Boolean</strong> value works the same way. It holds one of exactly two things:</p>\n      <ul>\n        <li><code>True</code> — the light is on</li>\n        <li><code>False</code> — the light is off</li>\n      </ul>\n\n      <div class=\"callout\">\n        <strong>Capital letters matter.</strong> <code>True</code> and <code>False</code> work.\n        <code>true</code> and <code>false</code> give you a <code>NameError</code>. Python has\n        never heard of them.\n      </div>\n\n      <h4>The bouncer with a measuring tape</h4>\n      <p>A sign at a ride says <em>you must be 120 cm tall to ride</em>. A worker measures you,\n      compares your height to the sign, and says yes or no.</p>\n      <p>A <strong>comparison</strong> is a question you ask Python. The answer is always\n      <code>True</code> or <code>False</code> — never anything else.</p>\n\n      <table>\n        <tr><th>Symbol</th><th>Question</th><th>Example</th><th>Answer</th></tr>\n        <tr><td><code>==</code></td><td>exactly equal?</td><td><code>10 == 10</code></td><td>True</td></tr>\n        <tr><td><code>!=</code></td><td>not equal?</td><td><code>5 != 10</code></td><td>True</td></tr>\n        <tr><td><code>&gt;</code></td><td>bigger?</td><td><code>10 &gt; 5</code></td><td>True</td></tr>\n        <tr><td><code>&lt;</code></td><td>smaller?</td><td><code>2 &lt; 8</code></td><td>True</td></tr>\n        <tr><td><code>&gt;=</code></td><td>bigger or the same?</td><td><code>18 &gt;= 18</code></td><td>True</td></tr>\n        <tr><td><code>&lt;=</code></td><td>smaller or the same?</td><td><code>9 &lt;= 4</code></td><td>False</td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>One sign or two?</strong> <code>age = 18</code> <em>puts</em> 18 into a box.\n        <code>age == 18</code> <em>asks</em> whether age is 18. Mixing these up is the number\n        one mistake in this whole unit.\n      </div>\n\n      <h4>Joining questions together</h4>\n      <p>One question is often not enough. A cinema wants a ticket <em>and</em> an ID.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"Truth tables for and, or and not.\">\n        <text x=\"120\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">and — needs both</text>\n        <rect class=\"box\" x=\"8\" y=\"36\" width=\"224\" height=\"128\" rx=\"7\"/>\n        <text x=\"30\" y=\"62\" class=\"mono\" style=\"font-size:12px\">True  and True  = True</text>\n        <text x=\"30\" y=\"86\" class=\"mono\" style=\"font-size:12px\">True  and False = False</text>\n        <text x=\"30\" y=\"110\" class=\"mono\" style=\"font-size:12px\">False and True  = False</text>\n        <text x=\"30\" y=\"134\" class=\"mono\" style=\"font-size:12px\">False and False = False</text>\n\n        <text x=\"350\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">or — needs one</text>\n        <rect class=\"box\" x=\"238\" y=\"36\" width=\"224\" height=\"128\" rx=\"7\"/>\n        <text x=\"260\" y=\"62\" class=\"mono\" style=\"font-size:12px\">True  or True  = True</text>\n        <text x=\"260\" y=\"86\" class=\"mono\" style=\"font-size:12px\">True  or False = True</text>\n        <text x=\"260\" y=\"110\" class=\"mono\" style=\"font-size:12px\">False or True  = True</text>\n        <text x=\"260\" y=\"134\" class=\"mono\" style=\"font-size:12px\">False or False = False</text>\n\n        <text x=\"580\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">not — flips it</text>\n        <rect class=\"box box--dark\" x=\"468\" y=\"36\" width=\"224\" height=\"128\" rx=\"7\"/>\n        <text x=\"490\" y=\"80\" class=\"mono on-dark\" style=\"font-size:12px\">not True  = False</text>\n        <text x=\"490\" y=\"112\" class=\"mono on-dark\" style=\"font-size:12px\">not False = True</text>\n      </svg>\n\n      <h4>Boolean expressions</h4>\n      <p>Put comparisons and logical words together and you get a\n      <strong>Boolean expression</strong> — one long question with one short answer.</p>\n      <pre><code>age = 20\nhas_ticket = True\n\ncan_enter = (age > 18) and (has_ticket == True)\nprint(can_enter)      # True</code></pre>\n\n      <div class=\"callout\">\n        <strong>A neater way.</strong> <code>has_ticket == True</code> works, but\n        <code>has_ticket</code> on its own already <em>is</em> True or False. Experienced\n        programmers write <code>if age > 18 and has_ticket:</code> — shorter and easier to read.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What is the final answer?</p>\n        <pre><code>print((5 > 2) or (10 == 100))</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">False</button>\n          <button data-o=\"1\">True</button>\n          <button data-o=\"2\">An error</button>\n        </div>\n        <p class=\"w__why\">The second half is False, but <code>or</code> only needs one side to\n        be True — and 5 really is bigger than 2. So the whole thing is True.</p>\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">This line crashes. Tap the problem.</p>\n        <div class=\"w-spot__line\">\n          <button>is_raining</button><button>=</button><button data-bad>true</button>\n        </div>\n        <p class=\"w__why\">Small <strong>t</strong>. Python's Boolean is <code>True</code> with a\n        capital T. Lowercase <code>true</code> is treated as a variable name that does not\n        exist, so you get a <code>NameError</code>.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">What is each expression worth?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>15 >= 16</code></button>\n            <button data-pair=\"b\"><code>(10 == 10) and (5 != 5)</code></button>\n            <button data-pair=\"c\"><code>False or True</code></button>\n            <button data-pair=\"d\"><code>not (100 > 1)</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">True</button>\n            <button data-pair=\"a\">False — 15 is smaller</button>\n            <button data-pair=\"d\">False — it flips a True</button>\n            <button data-pair=\"b\">False — the second half fails</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Work out each side first, then apply the\n        <code>and</code>, <code>or</code> or <code>not</code> at the end.</p>\n      </div>\n    \n      <h4>Decision Lab: three small questions become one answer</h4>\n      <p>Suppose a school event allows entry only when a student has a valid ID, has paid the fee,\n      and is not blocked. Do not try to read the whole condition in one breath. Solve each small\n      question first, then join the answers.</p>\n      <pre><code>has_id = True\nfee_paid = True\nis_blocked = False\n\ncan_enter = has_id and fee_paid and not is_blocked\nprint(can_enter)     # True</code></pre>\n      <p>Python first sees three Boolean values. The word <code>not</code> changes\n      <code>is_blocked</code> from False to True. After that, all three parts are True, so the final\n      result is True.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 210\" role=\"img\" aria-label=\"Three Boolean checks enter an AND gate and produce one final answer.\">\n        <rect class=\"box\" x=\"20\" y=\"20\" width=\"160\" height=\"42\" rx=\"8\"/><text x=\"100\" y=\"47\" text-anchor=\"middle\" class=\"mono\">has_id = True</text>\n        <rect class=\"box\" x=\"20\" y=\"84\" width=\"160\" height=\"42\" rx=\"8\"/><text x=\"100\" y=\"111\" text-anchor=\"middle\" class=\"mono\">fee_paid = True</text>\n        <rect class=\"box\" x=\"20\" y=\"148\" width=\"160\" height=\"42\" rx=\"8\"/><text x=\"100\" y=\"175\" text-anchor=\"middle\" class=\"mono\">not blocked = True</text>\n        <path class=\"arrow\" d=\"M180 41 C250 41 250 105 310 105\"/><path class=\"arrow\" d=\"M180 105 H310\"/><path class=\"arrow\" d=\"M180 169 C250 169 250 105 310 105\"/>\n        <rect class=\"box box--dark\" x=\"310\" y=\"70\" width=\"150\" height=\"70\" rx=\"12\"/>\n        <text x=\"385\" y=\"112\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-weight:800\">AND GATE</text>\n        <path class=\"arrow\" d=\"M460 105 H540\"/><path class=\"accent\" d=\"M550 105 l-14 -8 v16 z\"/>\n        <rect class=\"box\" x=\"550\" y=\"76\" width=\"125\" height=\"58\" rx=\"9\">\n          <animate attributeName=\"stroke-width\" values=\"1;4;1\" dur=\"1.6s\" repeatCount=\"indefinite\"/>\n        </rect>\n        <text x=\"612\" y=\"111\" text-anchor=\"middle\" class=\"mono\">True</text>\n      </svg>\n      <span class=\"figcap\">A long Boolean expression is only a group of small yes/no questions.</span>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Gatekeeper game</span>\n        <p class=\"w__q\">A user may log in when the password is correct AND the account is active. What prints?</p>\n        <pre><code>password_ok = True\naccount_active = False\nprint(password_ok and account_active)</code></pre>\n        <div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">Nothing</button><button data-o=\"2\">False</button></div>\n        <p class=\"w__why\">The <code>and</code> operator needs both sides. One side is False, so the final answer is False.</p>\n      </div>\n",
      "mcqs": [
        {
          "q": "Which two Boolean values does Python use?",
          "options": [
            "On and Off",
            "True and False",
            "Yes and No",
            "1 and 2"
          ],
          "answer": 1,
          "why": "Python uses the exact capitalised words True and False."
        },
        {
          "q": "What does 8 >= 8 produce?",
          "options": [
            "True",
            "False",
            "8",
            "An error"
          ],
          "answer": 0,
          "why": "Greater-than-or-equal includes equality, so 8 qualifies."
        },
        {
          "q": "Which operator asks whether two values are different?",
          "options": [
            "==",
            "!=",
            "=",
            "=!"
          ],
          "answer": 1,
          "why": "!= means not equal."
        },
        {
          "q": "What is the result of True and False?",
          "options": [
            "True",
            "False",
            "None",
            "0"
          ],
          "answer": 1,
          "why": "and requires both sides to be True."
        },
        {
          "q": "What is the result of False or True?",
          "options": [
            "True",
            "False",
            "An error",
            "None"
          ],
          "answer": 0,
          "why": "or needs only one True side."
        },
        {
          "q": "What does not False become?",
          "options": [
            "False",
            "True",
            "0",
            "None"
          ],
          "answer": 1,
          "why": "not flips a Boolean."
        },
        {
          "q": "Which line asks a question rather than storing a value?",
          "options": [
            "score = 50",
            "score == 50",
            "score += 50",
            "print = score"
          ],
          "answer": 1,
          "why": "Two equals signs compare; one equals sign assigns."
        }
      ],
      "tasks": [
        {
          "id": "u2t01p01",
          "kind": "code",
          "title": "Boolean light switch",
          "brief": "Create <code>is_raining = True</code> and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceRegex",
              "pattern": "is_raining\\s*=\\s*True",
              "message": "Store the Boolean True in is_raining"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Store the Boolean True in is_raining",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t01p02",
          "kind": "code",
          "title": "Age comparison",
          "brief": "Create <code>my_age = 15</code>. Print whether it is greater than or equal to 16.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": ">=",
              "message": "Use the >= comparison"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the >= comparison",
            "Your output should begin with: False"
          ]
        },
        {
          "id": "u2t01p03",
          "kind": "code",
          "title": "VIP door logic",
          "brief": "Print the result of <code>(10 == 10) and (5 != 5)</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": "and",
              "message": "Combine both comparisons with and"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Combine both comparisons with and",
            "Your output should begin with: False"
          ]
        },
        {
          "id": "u2t01p04",
          "kind": "code",
          "title": "Coupon or sale",
          "brief": "Create <code>has_coupon = False</code> and <code>on_sale = True</code>. Print whether either one gives a discount.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "or",
              "message": "Use the or operator"
            },
            {
              "type": "sourceIncludes",
              "value": "has_coupon",
              "message": "Create has_coupon"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the or operator",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t01p05",
          "kind": "code",
          "title": "Fix the Boolean spelling",
          "brief": "Repair the code so it prints True.",
          "starter": "is_ready = true\nprint(is_ready)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceRegex",
              "pattern": "is_ready\\s*=\\s*True",
              "message": "Use capital-T True"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use capital-T True",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t01p06",
          "kind": "code",
          "title": "The flipper",
          "brief": "Use <code>not</code> to flip the result of <code>100 &gt; 1</code>. Print the result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": "not",
              "message": "Use not to reverse the answer"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use not to reverse the answer",
            "Your output should begin with: False"
          ]
        },
        {
          "id": "u2t01p07",
          "kind": "code",
          "title": "Concert entry challenge",
          "brief": "Create age 19, has_ticket True, and is_banned False. Print one Boolean expression that is True only when the person is old enough, has a ticket, and is not banned.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\band\\b",
              "count": 2,
              "message": "Join all three checks with and"
            },
            {
              "type": "sourceIncludes",
              "value": "not",
              "message": "Use not with is_banned"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Join all three checks with and",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t01p08",
          "kind": "code",
          "title": "Mini build — eligibility card",
          "brief": "Create <code>age = 20</code>, <code>has_id = True</code>, and <code>fee_paid = True</code>. Print exactly four lines: age check, ID check, fee check, and final eligibility.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nTrue\nTrue\nTrue"
            },
            {
              "type": "stdoutLineCount",
              "value": 4,
              "message": "Print exactly four lines"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 4,
              "message": "Use four print statements"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\band\\b",
              "count": 1,
              "message": "Use and for final eligibility"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Print exactly four lines",
            "Your output should begin with: True"
          ]
        }
      ]
    },
    {
      "id": "u2t02",
      "title": "Boolean Logic — Precedence, Truthy Values and Short-Circuiting",
      "summary": "Understand how Python evaluates larger Boolean expressions.",
      "notebookLM": "",
      "notes": "\n      <h4>Who goes first?</h4>\n      <p>In maths you always multiply before you add. Boolean logic has its own order too.</p>\n      <table>\n        <tr><th>Order</th><th>Operator</th></tr>\n        <tr><td>1st</td><td><code>not</code></td></tr>\n        <tr><td>2nd</td><td><code>and</code></td></tr>\n        <tr><td>3rd</td><td><code>or</code></td></tr>\n      </table>\n\n      <p>Watch Python untangle a messy line, step by step:</p>\n      <pre><code>False or not False and False\n\n# step 1 — not first:   not False becomes True\n#          False or True and False\n\n# step 2 — and next:    True and False becomes False\n#          False or False\n\n# step 3 — or last:     False</code></pre>\n\n      <div class=\"callout\">\n        <strong>Do not memorise this.</strong> Use brackets instead. <code>(a and b) or c</code>\n        is never confusing, and never wrong. Professional programmers add brackets they do not\n        strictly need, just so the next reader does not have to think.\n      </div>\n\n      <h4>The empty wallet</h4>\n      <p>If somebody asks \"do you have money?\" and you show an empty wallet, the answer is\n      basically <em>no</em>. Show a wallet with even one ten-rupee note and the answer is\n      <em>yes</em>.</p>\n      <p>Python does the same thing with every piece of data. Even things that are not\n      Booleans are secretly treated as True or False.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"Empty things are falsy, things with something in them are truthy.\">\n        <text x=\"175\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Falsy — empty things</text>\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"334\" height=\"126\" rx=\"8\"/>\n        <text x=\"34\" y=\"70\" class=\"mono\" style=\"font-size:13px\">0</text>\n        <text x=\"130\" y=\"70\" class=\"mono\" style=\"font-size:13px\">\"\"</text>\n        <text x=\"226\" y=\"70\" class=\"mono\" style=\"font-size:13px\">[]</text>\n        <text x=\"34\" y=\"104\" class=\"mono\" style=\"font-size:13px\">0.0</text>\n        <text x=\"130\" y=\"104\" class=\"mono\" style=\"font-size:13px\">None</text>\n        <text x=\"226\" y=\"104\" class=\"mono\" style=\"font-size:13px\">False</text>\n        <text x=\"175\" y=\"146\" text-anchor=\"middle\" style=\"font-size:12px\">Python treats every one of these as False</text>\n\n        <text x=\"525\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">Truthy — things with something in them</text>\n        <rect class=\"box box--dark\" x=\"358\" y=\"38\" width=\"334\" height=\"126\" rx=\"8\"/>\n        <text x=\"384\" y=\"70\" class=\"mono on-dark\" style=\"font-size:13px\">1</text>\n        <text x=\"470\" y=\"70\" class=\"mono on-dark\" style=\"font-size:13px\">-10</text>\n        <text x=\"566\" y=\"70\" class=\"mono on-dark\" style=\"font-size:13px\">\"Hello\"</text>\n        <text x=\"384\" y=\"104\" class=\"mono on-dark\" style=\"font-size:13px\">0.5</text>\n        <text x=\"470\" y=\"104\" class=\"mono on-dark\" style=\"font-size:13px\">[1, 2]</text>\n        <text x=\"566\" y=\"104\" class=\"mono accent\" style=\"font-size:13px\">\" \"</text>\n        <text x=\"525\" y=\"146\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Python treats every one of these as True</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>The sneaky one.</strong> A single space, <code>\" \"</code>, is\n        <strong>truthy</strong>. It looks empty, but a space is a real character, so the string\n        is not empty. Only <code>\"\"</code> with absolutely nothing between the quotes is falsy.\n      </div>\n\n      <p>You can check any value yourself with <code>bool()</code>:</p>\n      <pre><code>print(bool(\"Apple\"))   # True\nprint(bool(0))         # False\nprint(bool(\"\"))        # False\nprint(bool(\" \"))       # True  ← the sneaky one</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">Careful with this one.</p>\n        <pre><code>print(bool(\" \"))</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">False, it looks empty</button>\n          <button data-o=\"1\">An error</button>\n          <button data-o=\"2\">True, a space is a real character</button>\n        </div>\n        <p class=\"w__why\">The string holds one character — a space. It is not empty, so it is\n        truthy. This catches people out when checking whether a user typed anything.</p>\n      </div>\n\n      <h4>Finding your keys</h4>\n      <p>You are looking for your keys in three pockets. You check the first pocket and there\n      they are. Do you carry on searching the other two? Of course not. You stop.</p>\n      <p>Python does exactly this, and it is called <strong>short-circuit evaluation</strong>.</p>\n\n      <ul>\n        <li>With <code>or</code>: as soon as Python sees a True, it stops reading. The answer\n        cannot change.</li>\n        <li>With <code>and</code>: as soon as Python sees a False, it stops reading. The answer\n        cannot change.</li>\n      </ul>\n\n      <p>Here is the proof, and it is a surprising one:</p>\n      <pre><code>print(True or (100 / 0 == 5))</code></pre>\n      <p>Dividing by zero normally crashes a program. But the left side is already True, so\n      Python never even looks at the right side. No crash. It prints <code>True</code>.</p>\n\n      <div class=\"callout\">\n        <strong>Why this matters.</strong> Short-circuiting is not just a speed trick — it is\n        how you write safe checks. <code>if age != 0 and 100 / age &gt; 5:</code> never divides\n        by zero, because the moment <code>age != 0</code> is False, Python stops.\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Truthy or falsy?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>0</code></button>\n            <button data-pair=\"b\"><code>\"False\"</code></button>\n            <button data-pair=\"c\"><code>[]</code></button>\n            <button data-pair=\"d\"><code>-7</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\">Truthy — any number except zero</button>\n            <button data-pair=\"a\">Falsy — zero is empty</button>\n            <button data-pair=\"b\">Truthy — it is a string with letters in it</button>\n            <button data-pair=\"c\">Falsy — an empty list</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>Watch the second one.</strong> <code>\"False\"</code> in quotes\n        is a piece of <em>text</em>, five letters long, so it is truthy. Only the Boolean\n        <code>False</code> without quotes is falsy.</p>\n      </div>\n    \n      <h4>Read Boolean logic in layers</h4>\n      <p>When a line contains <code>not</code>, <code>and</code>, and <code>or</code>, use three passes.\n      First solve <code>not</code>. Second solve <code>and</code>. Last solve <code>or</code>. Parentheses\n      are even better because they show the intended groups clearly.</p>\n      <pre><code>result = False or not False and True\n# Pass 1: False or True and True\n# Pass 2: False or True\n# Pass 3: True</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"Boolean precedence pipeline from not to and to or.\">\n        <rect class=\"box\" x=\"20\" y=\"55\" width=\"170\" height=\"70\" rx=\"10\"/><text x=\"105\" y=\"82\" text-anchor=\"middle\" class=\"lbl\">1. NOT</text><text x=\"105\" y=\"106\" text-anchor=\"middle\" class=\"mono\">flip one value</text>\n        <path class=\"arrow\" d=\"M190 90 H250\"/><circle cx=\"222\" cy=\"90\" r=\"6\" class=\"accent\"><animate attributeName=\"cx\" values=\"198;242;198\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle>\n        <rect class=\"box\" x=\"250\" y=\"55\" width=\"170\" height=\"70\" rx=\"10\"/><text x=\"335\" y=\"82\" text-anchor=\"middle\" class=\"lbl\">2. AND</text><text x=\"335\" y=\"106\" text-anchor=\"middle\" class=\"mono\">both must pass</text>\n        <path class=\"arrow\" d=\"M420 90 H480\"/>\n        <rect class=\"box box--dark\" x=\"480\" y=\"55\" width=\"190\" height=\"70\" rx=\"10\"/><text x=\"575\" y=\"82\" text-anchor=\"middle\" class=\"on-dark\">3. OR</text><text x=\"575\" y=\"106\" text-anchor=\"middle\" class=\"mono on-dark\">one is enough</text>\n      </svg>\n\n      <h4>Short-circuiting is also a safety tool</h4>\n      <p>Python can use the first condition to protect a risky second condition. In the example below,\n      division happens only when <code>number</code> is not zero.</p>\n      <pre><code>number = 0\nsafe = number != 0 and (100 / number > 5)\nprint(safe)     # False, with no crash</code></pre>\n      <div class=\"callout\"><strong>Beginner rule:</strong> place the safe, cheap check first. Place the risky or expensive check second.</div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Truthy or falsy sorting game</span>\n        <p class=\"w__q\">Match each value to the way Python sees it.</p>\n        <div class=\"w-match__grid\"><div class=\"w-match__col\">\n          <button data-pair=\"a\"><code>0</code></button><button data-pair=\"b\"><code>\" \"</code></button><button data-pair=\"c\"><code>[]</code></button><button data-pair=\"d\"><code>-7</code></button>\n        </div><div class=\"w-match__col\">\n          <button data-pair=\"d\">Truthy non-zero number</button><button data-pair=\"a\">Falsy number</button><button data-pair=\"b\">Truthy string with one character</button><button data-pair=\"c\">Falsy empty collection</button>\n        </div></div><p class=\"w__why\">Empty values and zero are usually falsy. Non-empty values and non-zero numbers are usually truthy.</p>\n      </div>\n",
      "mcqs": [
        {
          "q": "Which logical operator is evaluated first?",
          "options": [
            "and",
            "or",
            "not",
            "=="
          ],
          "answer": 2,
          "why": "not has the highest logical priority."
        },
        {
          "q": "Which order is correct?",
          "options": [
            "or, and, not",
            "not, and, or",
            "and, not, or",
            "not, or, and"
          ],
          "answer": 1,
          "why": "Python evaluates not, then and, then or."
        },
        {
          "q": "Which value is falsy?",
          "options": [
            "100",
            "\"Hello\"",
            "0",
            "\"False\""
          ],
          "answer": 2,
          "why": "Numeric zero is falsy."
        },
        {
          "q": "What is bool(\" \")?",
          "options": [
            "True",
            "False",
            "None",
            "An error"
          ],
          "answer": 0,
          "why": "A single space makes the string non-empty."
        },
        {
          "q": "What is bool([])?",
          "options": [
            "True",
            "False",
            "[]",
            "An error"
          ],
          "answer": 1,
          "why": "An empty list is falsy."
        },
        {
          "q": "Why does True or (10 / 0) not crash?",
          "options": [
            "Division by zero is allowed",
            "or short-circuits after True",
            "10 / 0 becomes False",
            "Parentheses hide the error"
          ],
          "answer": 1,
          "why": "The left side already guarantees True, so Python never evaluates the right side."
        },
        {
          "q": "Why are parentheses useful in Boolean expressions?",
          "options": [
            "They make code slower",
            "They make grouping and intention clear",
            "They convert values to strings",
            "They are required around every comparison"
          ],
          "answer": 1,
          "why": "Parentheses remove ambiguity for readers and prevent precedence mistakes."
        }
      ],
      "tasks": [
        {
          "id": "u2t02p01",
          "kind": "code",
          "title": "Precedence first look",
          "brief": "Without parentheses, print <code>True or False and False</code>.",
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
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use and",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t02p02",
          "kind": "code",
          "title": "Truthy number",
          "brief": "Use <code>bool()</code> to print the Boolean value of 99.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "bool(",
              "message": "Use bool()"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use bool()",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t02p03",
          "kind": "code",
          "title": "Empty string test",
          "brief": "Use <code>bool()</code> to print the Boolean value of an empty string.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceRegex",
              "pattern": "bool\\([\"\\']{2}\\)",
              "message": "Pass an empty string into bool()"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Pass an empty string into bool()",
            "Your output should begin with: False"
          ]
        },
        {
          "id": "u2t02p04",
          "kind": "code",
          "title": "The space trick",
          "brief": "Use <code>bool()</code> on a string containing one space and print the answer.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceRegex",
              "pattern": "bool\\([\"\\']\\s[\"\\']\\)",
              "message": "Use a one-space string"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a one-space string",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t02p05",
          "kind": "code",
          "title": "Repair the grouping",
          "brief": "The programmer wants the answer False. Add parentheses to make <code>or</code> happen before <code>and</code>.",
          "starter": "print(True or False and False)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\(\\s*True\\s+or\\s+False\\s*\\)\\s+and\\s+False",
              "message": "Group True or False first"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Group True or False first",
            "Your output should begin with: False"
          ]
        },
        {
          "id": "u2t02p06",
          "kind": "code",
          "title": "Safe short circuit",
          "brief": "Write the exact safe expression that prints True without evaluating division by zero: <code>True or (100 / 0 == 5)</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "100 / 0",
              "message": "Keep the dangerous expression on the right"
            },
            {
              "type": "sourceIncludes",
              "value": "or",
              "message": "Use or"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Keep the dangerous expression on the right",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t02p07",
          "kind": "code",
          "title": "Truthy inventory challenge",
          "brief": "Create <code>cart = [\"Book\"]</code> and <code>coupon = \"\"</code>. Print whether the cart has something AND the coupon is empty, using <code>bool()</code> and <code>not</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "bool\\(",
              "count": 2,
              "message": "Use bool() on both values"
            },
            {
              "type": "sourceIncludes",
              "value": "not",
              "message": "Use not for the empty coupon"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use bool() on both values",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t02p08",
          "kind": "code",
          "title": "Mini build — login readiness",
          "brief": "Create <code>username = \"Asha\"</code>, <code>password = \"\"</code>, and <code>server_online = True</code>. Print three Boolean lines: username present, password present, and final readiness. Final readiness must use parentheses and short-circuit-friendly <code>and</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse\nFalse"
            },
            {
              "type": "stdoutLineCount",
              "value": 3,
              "message": "Print exactly three lines"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "bool\\(",
              "count": 2,
              "message": "Use bool() for username and password"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\([^\\n]*and[^\\n]*\\)",
              "message": "Group the final and expression"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Print exactly three lines",
            "Your output should begin with: True"
          ]
        }
      ]
    },
    {
      "id": "u2t03",
      "title": "Conditional Statements — if, else and elif",
      "summary": "Choose one path from one, two, or many possible paths.",
      "notebookLM": "",
      "notes": "\n      <h4>The bouncer at the door</h4>\n      <p>A bouncer stands at a club with one rule: <em>if you are 18 or older, you may come\n      in.</em> If you are 17 he says nothing at all. He just ignores you.</p>\n      <p>An <code>if</code> statement runs a block of code <strong>only when</strong> a\n      condition is True. When it is False, Python skips the whole block as though it were not\n      there.</p>\n\n      <pre><code>age = 20\n\nif age >= 18:\n    print(\"Welcome to the club!\")\n\nprint(\"Have a nice day.\")</code></pre>\n\n      <h4>The two rules you must never forget</h4>\n      <ol>\n        <li>The <code>if</code> line ends with a <strong>colon</strong> <code>:</code></li>\n        <li>Everything belonging inside is <strong>indented</strong> — pushed right with Tab</li>\n      </ol>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 175\" role=\"img\" aria-label=\"The colon opens the block and the indentation shows what is inside it.\">\n        <text class=\"mono\" x=\"30\" y=\"52\" style=\"font-size:17px\">if age &gt;= 18</text>\n        <text class=\"mono accent\" x=\"188\" y=\"52\" style=\"font-size:17px\">:</text>\n        <text class=\"mono\" x=\"30\" y=\"86\" style=\"font-size:17px\">    print(\"Welcome!\")</text>\n        <text class=\"mono\" x=\"30\" y=\"120\" style=\"font-size:17px\">print(\"Have a nice day.\")</text>\n\n        <path class=\"good\" stroke=\"#D67F19\" d=\"M196 40 v-16 h150\"/>\n        <text x=\"352\" y=\"28\" class=\"lbl\">the colon opens the block</text>\n\n        <path class=\"good\" d=\"M28 96 h-14 v-22 h14\"/>\n        <text x=\"356\" y=\"86\" style=\"font-size:12px\">indented — runs only if the answer was True</text>\n\n        <text x=\"356\" y=\"120\" style=\"font-size:12px\">not indented — always runs, whatever happened</text>\n      </svg>\n\n      <h4>The fork in the road</h4>\n      <p>What if the bouncer should say something to the people he turns away?</p>\n      <p><code>else</code> is the backup plan. It means: <em>if the question was False, do\n      this instead.</em></p>\n\n      <pre><code>weather = \"Raining\"\n\nif weather == \"Sunny\":\n    print(\"Wear sunglasses!\")\nelse:\n    print(\"Take an umbrella!\")</code></pre>\n\n      <div class=\"callout\">\n        <strong><code>else</code> never gets a question.</strong> It is just\n        <code>else:</code> — no condition, no comparison. It catches everything the\n        <code>if</code> did not.\n      </div>\n\n      <h4>More than two choices — elif</h4>\n      <p>Grading a test is not a yes-or-no decision. 90 or more is an A. Otherwise, 80 or more\n      is a B. Otherwise, 70 or more is a C. Otherwise you failed.</p>\n      <p>Python shortens \"else if\" to <strong><code>elif</code></strong>. You may chain as many\n      as you like.</p>\n\n      <pre><code>score = 85\n\nif score >= 90:\n    print(\"You got an A!\")\nelif score >= 80:\n    print(\"You got a B!\")\nelif score >= 70:\n    print(\"You got a C!\")\nelse:\n    print(\"You failed.\")</code></pre>\n\n      <div class=\"callout\">\n        <strong>Python stops at the first True.</strong> Here 85 is not 90 or more, so it moves\n        on. 85 <em>is</em> 80 or more — so it prints B and <strong>skips the rest of the chain\n        completely</strong>. It never even looks at the 70 test.\n      </div>\n\n      <p>That is why <strong>order matters</strong>. Put the checks in the wrong order and the\n      chain breaks:</p>\n      <pre><code># WRONG — everybody who passes gets a C\nif score >= 70:\n    print(\"C\")\nelif score >= 90:\n    print(\"A\")      # can never be reached!</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this print?</p>\n        <pre><code>score = 95\nif score >= 70:\n    print(\"C\")\nelif score >= 90:\n    print(\"A\")</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">A</button>\n          <button data-o=\"1\">C</button>\n          <button data-o=\"2\">Both C and A</button>\n        </div>\n        <p class=\"w__why\">95 is 70 or more, so the very first test passes. Python prints C and\n        jumps straight past the rest of the chain. The A branch can never run. Always put the\n        strictest test first.</p>\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">This line gives a SyntaxError. Tap the problem.</p>\n        <div class=\"w-spot__line\">\n          <button>if</button><button>score</button><button data-bad>=</button><button>100</button><button>:</button>\n        </div>\n        <p class=\"w__why\">One equals sign <em>puts</em> a value in a box. To <em>ask</em> a\n        question you need two: <code>if score == 100:</code>. Python catches this one for you,\n        which is kinder than most languages.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">What is each part for?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>if</code></button>\n            <button data-pair=\"b\"><code>elif</code></button>\n            <button data-pair=\"c\"><code>else</code></button>\n            <button data-pair=\"d\">The colon <code>:</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">The catch-all — no question attached</button>\n            <button data-pair=\"a\">The first question asked</button>\n            <button data-pair=\"d\">Opens the block on every one of them</button>\n            <button data-pair=\"b\">Another question, asked only if the earlier ones failed</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> A chain always starts with one\n        <code>if</code>, may have any number of <code>elif</code>s, and ends with at most one\n        <code>else</code>.</p>\n      </div>\n    \n      <h4>A condition creates a fork in the road</h4>\n      <p>Python reads the condition first. It then enters only one matching block. Indentation shows\n      which statements belong to that block.</p>\n      <pre><code>temperature = 28\n\nif temperature >= 35:\n    print(\"Very hot\")\nelif temperature >= 20:\n    print(\"Comfortable\")\nelse:\n    print(\"Cold\")</code></pre>\n      <p>The output is <code>Comfortable</code>. Python stops at the first True condition. It does not\n      continue looking for another answer inside the same chain.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 240\" role=\"img\" aria-label=\"Decision tree showing if, elif and else branches.\">\n        <rect class=\"box box--dark\" x=\"260\" y=\"15\" width=\"180\" height=\"55\" rx=\"10\"/><text x=\"350\" y=\"49\" text-anchor=\"middle\" class=\"on-dark\">temperature?</text>\n        <path class=\"arrow\" d=\"M350 70 V105 M350 105 H115 V135 M350 105 H350 V135 M350 105 H585 V135\"/>\n        <text x=\"160\" y=\"100\" class=\"lbl\">≥ 35</text><text x=\"372\" y=\"100\" class=\"lbl\">≥ 20</text><text x=\"596\" y=\"100\" class=\"lbl\">else</text>\n        <rect class=\"box\" x=\"35\" y=\"135\" width=\"160\" height=\"65\" rx=\"9\"/><text x=\"115\" y=\"174\" text-anchor=\"middle\">Very hot</text>\n        <rect class=\"box\" x=\"270\" y=\"135\" width=\"160\" height=\"65\" rx=\"9\"><animate attributeName=\"stroke-width\" values=\"1;4;1\" dur=\"1.6s\" repeatCount=\"indefinite\"/></rect><text x=\"350\" y=\"174\" text-anchor=\"middle\">Comfortable</text>\n        <rect class=\"box\" x=\"505\" y=\"135\" width=\"160\" height=\"65\" rx=\"9\"/><text x=\"585\" y=\"174\" text-anchor=\"middle\">Cold</text>\n      </svg>\n\n      <div class=\"w w-spot\"><span class=\"w__k\">Indentation detective</span><p class=\"w__q\">Tap the line that does not belong at the left edge.</p>\n        <div class=\"w-spot__line\"><button><code>if score &gt;= 50:</code></button><button data-bad><code>print(\"Pass\")</code></button><button><code>print(\"Finished\")</code></button></div>\n        <p class=\"w__why\"><code>print(\"Pass\")</code> must be indented because it belongs inside the <code>if</code> block. The final print may stay outside.</p>\n      </div>\n",
      "mcqs": [
        {
          "q": "What must end every if, elif, and else line?",
          "options": [
            "A semicolon",
            "A colon",
            "A period",
            "A comma"
          ],
          "answer": 1,
          "why": "A colon opens the indented block."
        },
        {
          "q": "How does Python know which lines belong inside a branch?",
          "options": [
            "Capital letters",
            "Indentation",
            "Brackets around every line",
            "The word End"
          ],
          "answer": 1,
          "why": "Indentation groups the block."
        },
        {
          "q": "What happens after the first True branch in an if-elif-else chain?",
          "options": [
            "Python checks every later branch",
            "Python runs it and skips the rest",
            "Python prints True automatically",
            "The program stops forever"
          ],
          "answer": 1,
          "why": "Only the first matching branch runs."
        },
        {
          "q": "When is else used?",
          "options": [
            "When every earlier condition is False",
            "Before if",
            "Only with loops",
            "To repeat code"
          ],
          "answer": 0,
          "why": "else is the final fallback."
        }
      ],
      "tasks": [
        {
          "id": "u2t03p01",
          "kind": "code",
          "title": "Basic password check",
          "brief": "Create <code>password = \"secret123\"</code>. If it matches, print <code>Access Granted</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Access Granted"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Use an if statement"
            },
            {
              "type": "sourceIncludes",
              "value": "==",
              "message": "Compare with =="
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use an if statement",
            "Your output should begin with: Access Granted"
          ]
        },
        {
          "id": "u2t03p02",
          "kind": "code",
          "title": "Ticket checker",
          "brief": "Create <code>has_ticket = False</code>. Print <code>Enjoy the movie</code> when true; otherwise print <code>You must buy a ticket</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "You must buy a ticket"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Use an else branch"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use an else branch",
            "Your output should begin with: You must buy a ticket"
          ]
        },
        {
          "id": "u2t03p03",
          "kind": "code",
          "title": "Temperature gauge",
          "brief": "Set <code>temp = 30</code>. If above 80 print <code>It's hot</code>; elif above 60 print <code>It's nice</code>; else print <code>It's cold</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "It's cold"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Use an elif branch"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Use a final else"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use an elif branch",
            "Your output should begin with: It's cold"
          ]
        },
        {
          "id": "u2t03p04",
          "kind": "code",
          "title": "Odd or even",
          "brief": "Create <code>number = 17</code>. Use if-else and modulus to print <code>Odd</code> or <code>Even</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Odd"
            },
            {
              "type": "sourceIncludes",
              "value": "% 2",
              "message": "Use modulus by 2"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Use if-else"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use modulus by 2",
            "Your output should begin with: Odd"
          ]
        },
        {
          "id": "u2t03p05",
          "kind": "code",
          "title": "Fix the missing colon",
          "brief": "Repair the code.",
          "starter": "age = 20\nif age >= 18\n    print(\"Adult\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Adult"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+age\\s*>=\\s*18\\s*:",
              "message": "Add a colon to the if line"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Add a colon to the if line",
            "Your output should begin with: Adult"
          ]
        },
        {
          "id": "u2t03p06",
          "kind": "code",
          "title": "Fix the branch order",
          "brief": "The score is 95, but the program prints B. Reorder the conditions so it prints A.",
          "starter": "score = 95\nif score >= 80:\n    print(\"B\")\nelif score >= 90:\n    print(\"A\")\nelse:\n    print(\"C\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+score\\s*>=\\s*90",
              "message": "Check the stricter 90 condition first"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Check the stricter 90 condition first",
            "Your output should begin with: A"
          ]
        },
        {
          "id": "u2t03p07",
          "kind": "code",
          "title": "Number guesser challenge",
          "brief": "Set <code>secret_number = 7</code> and <code>guess = 9</code>. Print <code>You win!</code>, <code>Too high!</code>, or <code>Too low!</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Too high!"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Use elif for the high check"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 3,
              "message": "Write all three possible messages"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use elif for the high check",
            "Your output should begin with: Too high!"
          ]
        },
        {
          "id": "u2t03p08",
          "kind": "code",
          "title": "Mini build — simple grade reporter",
          "brief": "Set <code>score = 76</code>. Print exactly <code>Grade: C</code> using an if-elif-else chain: A for 90+, B for 80+, C for 70+, D for 60+, otherwise F.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Grade: C"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "elif",
              "count": 3,
              "message": "Use at least three elif branches"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Include the F fallback"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use at least three elif branches",
            "Your output should begin with: Grade: C"
          ]
        }
      ]
    },
    {
      "id": "u2t04",
      "title": "Conditional Statements — Nested Decisions and Ternary Expressions",
      "summary": "Place decisions inside decisions and use a clear one-line shortcut.",
      "notebookLM": "",
      "notes": "\n      <h4>Airport security</h4>\n      <p>At the airport, a guard checks your ID. <strong>Only if</strong> you pass that check\n      do you move on to the bag scanner. Fail the first check and you never even reach the\n      second one.</p>\n      <p>A <strong>nested conditional</strong> is an <code>if</code> inside another\n      <code>if</code>. You indent it one extra level.</p>\n\n      <pre><code>has_id = True\nhas_pass = True\n\nif has_id:\n    print(\"ID accepted. Move to bag check.\")\n\n    if has_pass:\n        print(\"You may board the plane!\")\n    else:\n        print(\"You cannot board without a pass.\")\n\nelse:\n    print(\"No ID — stop right there!\")</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 210\" role=\"img\" aria-label=\"The outer check must pass before the inner check is even reached.\">\n        <rect class=\"box box--dark\" x=\"8\" y=\"30\" width=\"684\" height=\"164\" rx=\"10\"/>\n        <text x=\"34\" y=\"60\" class=\"mono on-dark\" style=\"font-size:13px\">if has_id:</text>\n        <text x=\"34\" y=\"84\" class=\"mono accent\" style=\"font-size:12px\">    print(\"ID accepted\")</text>\n\n        <rect x=\"52\" y=\"96\" width=\"620\" height=\"62\" rx=\"7\" fill=\"rgba(242,160,61,.14)\" stroke=\"#D67F19\" stroke-width=\"2\"/>\n        <text x=\"72\" y=\"120\" class=\"mono on-dark\" style=\"font-size:13px\">    if has_pass:</text>\n        <text x=\"72\" y=\"144\" class=\"mono accent\" style=\"font-size:12px\">        print(\"You may board!\")</text>\n\n        <text x=\"360\" y=\"182\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">The inner box is only ever opened when the outer one passes</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Watch your Tab key.</strong> Every level of nesting is one more indent. Two\n        levels deep means eight spaces. Get it wrong and Python attaches your code to the wrong\n        <code>if</code> — which usually runs without an error and gives the wrong answer, the\n        worst kind of bug.\n      </div>\n\n      <h4>The drive-thru shortcut</h4>\n      <p>A normal <code>if-else</code> that just picks between two values takes four lines:</p>\n      <pre><code>age = 15\nif age >= 18:\n    status = \"Adult\"\nelse:\n    status = \"Minor\"</code></pre>\n\n      <p>Python has a shortcut called a <strong>conditional expression</strong>, or\n      <strong>ternary operator</strong>. The whole thing fits on one line, and it reads almost\n      like English:</p>\n      <pre><code>status = \"Adult\" if age >= 18 else \"Minor\"</code></pre>\n\n      <p>The shape is always the same:</p>\n      <pre><code>value_if_true  if  condition  else  value_if_false</code></pre>\n\n      <div class=\"callout\">\n        <strong>Use it for small choices only.</strong> Picking between two words or two\n        numbers — perfect. Anything with three branches, or that needs to <em>do</em> something\n        rather than just pick a value, belongs in a normal <code>if</code>.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What is printed?</p>\n        <pre><code>battery = 15\nmode = \"Dark\" if battery < 20 else \"Light\"\nprint(mode)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Dark</button>\n          <button data-o=\"1\">Light</button>\n          <button data-o=\"2\">15</button>\n        </div>\n        <p class=\"w__why\">Read it left to right: take \"Dark\" <em>if</em> the battery is under\n        20, <em>else</em> take \"Light\". 15 is under 20, so <code>mode</code> becomes \"Dark\".</p>\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">This ternary is written in the wrong order. Tap the part that is out of place.</p>\n        <div class=\"w-spot__line\">\n          <button data-bad>if age &gt;= 18</button><button>\"Adult\"</button><button>else</button><button>\"Minor\"</button>\n        </div>\n        <p class=\"w__why\">The <em>value</em> comes first, then the condition. It should read\n        <code>\"Adult\" if age &gt;= 18 else \"Minor\"</code>. Many other languages put the\n        condition first, which is why this trips people up.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which tool for which job?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Pick between two words and store it</button>\n            <button data-pair=\"b\">Check the ID, then check the bag</button>\n            <button data-pair=\"c\">Grade a test into A, B, C or F</button>\n            <button data-pair=\"d\">Do one thing only when a check passes</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">A long if-elif-else chain</button>\n            <button data-pair=\"a\">A ternary on one line</button>\n            <button data-pair=\"d\">A plain if with no else</button>\n            <button data-pair=\"b\">A nested if</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Choosing the right shape makes code much\n        easier for the next person to read — and that next person is usually you, next month.</p>\n      </div>\n    \n      <h4>Nested decisions are decisions inside decisions</h4>\n      <p>Use nesting when the second question only makes sense after the first answer is True. Airport\n      security is a good example: the boarding-pass check happens only after the identity check.</p>\n      <pre><code>has_id = True\nhas_pass = False\n\nif has_id:\n    print(\"ID accepted\")\n    if has_pass:\n        print(\"Board the plane\")\n    else:\n        print(\"Get a boarding pass\")\nelse:\n    print(\"Identity check failed\")</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 235\" role=\"img\" aria-label=\"Nested decision path with ID check followed by boarding pass check.\">\n        <rect class=\"box box--dark\" x=\"40\" y=\"75\" width=\"150\" height=\"60\" rx=\"10\"/><text x=\"115\" y=\"111\" text-anchor=\"middle\" class=\"on-dark\">Has ID?</text>\n        <path class=\"arrow\" d=\"M190 105 H285\"/><text x=\"225\" y=\"96\" class=\"lbl\">YES</text>\n        <rect class=\"box box--dark\" x=\"285\" y=\"75\" width=\"165\" height=\"60\" rx=\"10\"/><text x=\"367\" y=\"111\" text-anchor=\"middle\" class=\"on-dark\">Has pass?</text>\n        <path class=\"arrow\" d=\"M450 105 H545\"/><text x=\"482\" y=\"96\" class=\"lbl\">YES</text>\n        <rect class=\"box\" x=\"545\" y=\"75\" width=\"130\" height=\"60\" rx=\"10\"/><text x=\"610\" y=\"111\" text-anchor=\"middle\">Board</text>\n        <path class=\"arrow\" d=\"M115 135 V190 H285\"/><text x=\"130\" y=\"179\" class=\"lbl\">NO</text><text x=\"295\" y=\"195\">Stop at security</text>\n        <path class=\"arrow\" d=\"M367 135 V190 H500\"/><text x=\"382\" y=\"179\" class=\"lbl\">NO</text><text x=\"510\" y=\"195\">Get a pass</text>\n      </svg>\n\n      <h4>When a ternary expression is a good choice</h4>\n      <p>Use it for one small value choice. Do not squeeze a large decision tree into one line.</p>\n      <pre><code>age = 16\nstatus = \"Adult\" if age >= 18 else \"Minor\"\nprint(status)</code></pre>\n      <div class=\"w w-flip\"><span class=\"w__k\">Long way or short way?</span><div class=\"w-flip\">\n        <button class=\"w-flip__card\"><span class=\"w-flip__front\">One value, two simple choices</span><span class=\"w-flip__back\">A ternary expression is clear and useful.</span></button>\n        <button class=\"w-flip__card\"><span class=\"w-flip__front\">Several actions and nested checks</span><span class=\"w-flip__back\">Use normal <code>if</code>, <code>elif</code>, and <code>else</code> blocks.</span></button>\n      </div></div>\n",
      "mcqs": [
        {
          "q": "What is a nested conditional?",
          "options": [
            "A loop inside a list",
            "An if statement inside another decision block",
            "Three elif statements",
            "A condition with no body"
          ],
          "answer": 1,
          "why": "Nested means one decision is placed inside another."
        },
        {
          "q": "How do you show the inner if belongs inside the outer if?",
          "options": [
            "Add another level of indentation",
            "Use square brackets",
            "Write both on one line",
            "Add the word nested"
          ],
          "answer": 0,
          "why": "Each deeper block is indented again."
        },
        {
          "q": "What is the main use of a conditional expression?",
          "options": [
            "Repeat code",
            "Write a simple value-selecting if-else on one line",
            "Import a module",
            "Stop a loop"
          ],
          "answer": 1,
          "why": "It is a compact form for a small if-else."
        },
        {
          "q": "Which form is correct?",
          "options": [
            "value = if condition \"A\" else \"B\"",
            "value = \"A\" if condition else \"B\"",
            "if value = \"A\" else \"B\"",
            "value = condition ? \"A\" : \"B\""
          ],
          "answer": 1,
          "why": "Python reads: true value if condition else false value."
        }
      ],
      "tasks": [
        {
          "id": "u2t04p01",
          "kind": "code",
          "title": "Treasure vault",
          "brief": "Create <code>has_key = True</code> and <code>door_unlocked = True</code>. Use a nested if to print <code>You found the treasure!</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "You found the treasure!"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bif\\b",
              "count": 2,
              "message": "Use two if statements"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\n\\s{8}print",
              "message": "Indent the inner output two levels"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use two if statements",
            "Your output should begin with: You found the treasure!"
          ]
        },
        {
          "id": "u2t04p02",
          "kind": "code",
          "title": "VIP nested check",
          "brief": "Set age 20 and is_vip True. Print <code>Adult</code>, then inside that decision print <code>Free Drinks!</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Adult\nFree Drinks!"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bif\\b",
              "count": 2,
              "message": "Use a nested if"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a nested if",
            "Your output should begin with: Adult"
          ]
        },
        {
          "id": "u2t04p03",
          "kind": "code",
          "title": "Rain shortcut",
          "brief": "Set <code>is_raining = True</code>. In one conditional-expression line, store <code>Stay inside</code> or <code>Go outside</code> in <code>action</code>. Print action.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Stay inside"
            },
            {
              "type": "sourceRegex",
              "pattern": "action\\s*=.+\\sif\\s.+\\selse\\s.+",
              "message": "Use a one-line conditional expression"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a one-line conditional expression",
            "Your output should begin with: Stay inside"
          ]
        },
        {
          "id": "u2t04p04",
          "kind": "code",
          "title": "Battery mode",
          "brief": "Set battery to 15. Use a ternary expression to store <code>Dark Mode</code> below 20, otherwise <code>Light Mode</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Dark Mode"
            },
            {
              "type": "sourceIncludes",
              "value": " if ",
              "message": "Use the conditional-expression form"
            },
            {
              "type": "sourceIncludes",
              "value": " else ",
              "message": "Include the false value"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the conditional-expression form",
            "Your output should begin with: Dark Mode"
          ]
        },
        {
          "id": "u2t04p05",
          "kind": "code",
          "title": "Fix the nesting",
          "brief": "Repair the indentation so boarding is checked only after the ID passes.",
          "starter": "has_id = True\nhas_pass = True\nif has_id:\nprint(\"ID accepted\")\nif has_pass:\nprint(\"Boarding allowed\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ID accepted\nBoarding allowed"
            },
            {
              "type": "sourceRegex",
              "pattern": "if has_id:\\n\\s{4}print[^\\n]*\\n\\s{4}if has_pass:\\n\\s{8}print",
              "message": "Indent the inner if and its print correctly"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Indent the inner if and its print correctly",
            "Your output should begin with: ID accepted"
          ]
        },
        {
          "id": "u2t04p06",
          "kind": "code",
          "title": "Fix the ternary order",
          "brief": "Repair the line so age 15 produces Minor.",
          "starter": "age = 15\nstatus = age >= 18 if \"Adult\" else \"Minor\"\nprint(status)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Minor"
            },
            {
              "type": "sourceRegex",
              "pattern": "status\\s*=\\s*[\"\\']Adult[\"\\']\\s+if\\s+age\\s*>=\\s*18\\s+else\\s+[\"\\']Minor[\"\\']",
              "message": "Put the true value before if and false value after else"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Put the true value before if and false value after else",
            "Your output should begin with: Minor"
          ]
        },
        {
          "id": "u2t04p07",
          "kind": "code",
          "title": "Airport challenge",
          "brief": "Use nested decisions with <code>has_id = True</code>, <code>has_pass = False</code>. Print <code>ID accepted</code> and then <code>Boarding pass missing</code>. Include an outer else for missing ID.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ID accepted\nBoarding pass missing"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "else:",
              "count": 2,
              "message": "Use an inner and outer else"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bif\\b",
              "count": 2,
              "message": "Use two decision levels"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use an inner and outer else",
            "Your output should begin with: ID accepted"
          ]
        },
        {
          "id": "u2t04p08",
          "kind": "code",
          "title": "Mini build — account access",
          "brief": "Create <code>account_active = True</code>, <code>pin_correct = True</code>, and <code>balance = 50</code>. Use nested decisions to print exactly <code>Login accepted</code>, then <code>Withdrawal allowed</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Login accepted\nWithdrawal allowed"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bif\\b",
              "count": 3,
              "message": "Check account, PIN, and balance"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\n\\s{12}print",
              "message": "Use three indentation levels for the final output"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Check account, PIN, and balance",
            "Your output should begin with: Login accepted"
          ]
        }
      ]
    },
    {
      "id": "u2t05",
      "title": "Conditional Statements — Debugging and Dry-Running",
      "summary": "Find missing symbols, wrong comparisons, bad indentation, and logic-path mistakes.",
      "notebookLM": "",
      "notes": "\n      <h4>Trap 1 — the missing colon</h4>\n      <p>Every <code>if</code>, <code>elif</code> and <code>else</code> line ends with a colon.\n      Forget it and Python stops immediately with a <code>SyntaxError</code>.</p>\n      <pre><code>if x > 5        # wrong\nif x > 5:       # right</code></pre>\n\n      <h4>Trap 2 — one equals sign instead of two</h4>\n      <p>From Unit 1: <code>=</code> puts something in a box, <code>==</code> asks a question.</p>\n      <pre><code>if score = 100:     # wrong — crashes\nif score == 100:    # right — asks a question</code></pre>\n\n      <h4>Trap 3 — forgetting to indent</h4>\n      <p>After a colon, Python expects the next line to be pushed right. If it is not, Python\n      does not know what belongs inside the decision.</p>\n      <pre><code>if lives == 0:\nprint(\"Game Over\")     # IndentationError</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"The three most common mistakes: missing colon, single equals, and missing indentation.\">\n        <rect class=\"box\" x=\"8\" y=\"34\" width=\"216\" height=\"130\" rx=\"8\"/>\n        <text x=\"116\" y=\"62\" text-anchor=\"middle\" style=\"font-size:13px;font-weight:700\">Missing colon</text>\n        <text x=\"116\" y=\"92\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">if x &gt; 5</text>\n        <text x=\"116\" y=\"126\" text-anchor=\"middle\" class=\"mono\" fill=\"#CF4A3C\" style=\"font-size:11.5px\">SyntaxError</text>\n\n        <rect class=\"box\" x=\"242\" y=\"34\" width=\"216\" height=\"130\" rx=\"8\"/>\n        <text x=\"350\" y=\"62\" text-anchor=\"middle\" style=\"font-size:13px;font-weight:700\">One equals sign</text>\n        <text x=\"350\" y=\"92\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">if score = 100:</text>\n        <text x=\"350\" y=\"126\" text-anchor=\"middle\" class=\"mono\" fill=\"#CF4A3C\" style=\"font-size:11.5px\">SyntaxError</text>\n\n        <rect class=\"box\" x=\"476\" y=\"34\" width=\"216\" height=\"130\" rx=\"8\"/>\n        <text x=\"584\" y=\"62\" text-anchor=\"middle\" style=\"font-size:13px;font-weight:700\">No indent</text>\n        <text x=\"584\" y=\"92\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">print(\"Game Over\")</text>\n        <text x=\"584\" y=\"126\" text-anchor=\"middle\" class=\"mono\" fill=\"#CF4A3C\" style=\"font-size:11.5px\">IndentationError</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>The good news.</strong> All three of these crash <em>loudly</em>, on the right\n        line, before anything else happens. Python is being kind. The bugs that really hurt are\n        the ones that run perfectly and quietly give you the wrong answer — and for those you\n        need the next skill.\n      </div>\n\n      <h4>Dry-running — playing computer</h4>\n      <p>Before you put a real mouse in a maze, you trace the path with your finger on the\n      plan to check there are no dead ends.</p>\n      <p><strong>Dry-running</strong> means stepping away from the keyboard, taking a pen and\n      paper, and pretending <em>you</em> are the computer. You read one line at a time and\n      write down what every variable holds.</p>\n\n      <p>Trace this:</p>\n      <pre><code>1  x = 10\n2  y = 5\n3  if x > 8:\n4      x = x + y\n5  else:\n6      x = x - y\n7  print(x)</code></pre>\n\n      <table>\n        <tr><th>Line</th><th>What happens</th><th>x</th><th>y</th></tr>\n        <tr><td>1</td><td>put 10 in x</td><td>10</td><td>—</td></tr>\n        <tr><td>2</td><td>put 5 in y</td><td>10</td><td>5</td></tr>\n        <tr><td>3</td><td>is 10 &gt; 8? yes → step inside</td><td>10</td><td>5</td></tr>\n        <tr><td>4</td><td>10 + 5</td><td><strong>15</strong></td><td>5</td></tr>\n        <tr><td>5-6</td><td>skipped, the if was true</td><td>15</td><td>5</td></tr>\n        <tr><td>7</td><td>print</td><td colspan=\"2\"><strong>15</strong></td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>This is the single best debugging skill you can build.</strong> It costs\n        nothing, needs no software, and works in exams where you have no computer at all. Every\n        good programmer does it, usually without noticing.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Dry-run it</span>\n        <p class=\"w__q\">Trace this on paper first. What is printed?</p>\n        <pre><code>money = 20\nif money >= 50:\n    money = money - 10\nelif money >= 10:\n    money = money - 5\nelse:\n    money = 0\nprint(money)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">20</button>\n          <button data-o=\"1\">15</button>\n          <button data-o=\"2\">0</button>\n        </div>\n        <p class=\"w__why\">20 is not 50 or more, so the first branch is skipped. 20 <em>is</em>\n        10 or more, so the elif runs: 20 − 5 = 15. The else never happens.</p>\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Dry-run it</span>\n        <p class=\"w__q\">Now a nested one. What is printed?</p>\n        <pre><code>a = 10\nb = 20\nif a == 10:\n    if b < 30:\n        print(\"Path 1\")\n    else:\n        print(\"Path 2\")\nelse:\n    print(\"Path 3\")</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Path 1</button>\n          <button data-o=\"1\">Path 2</button>\n          <button data-o=\"2\">Path 3</button>\n        </div>\n        <p class=\"w__why\">a is 10, so we step inside. b is 20, which is under 30, so the inner\n        if passes too. Path 1. The outer else is never reached because the outer if succeeded.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which error does each mistake produce?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>if weather == \"Snow\"</code></button>\n            <button data-pair=\"b\"><code>if lives == 0:</code><br><code>print(\"Over\")</code></button>\n            <button data-pair=\"c\"><code>if name = \"John\":</code></button>\n            <button data-pair=\"d\"><code>print(totl)</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\">NameError</button>\n            <button data-pair=\"a\">SyntaxError — no colon</button>\n            <button data-pair=\"c\">SyntaxError — one equals sign</button>\n            <button data-pair=\"b\">IndentationError</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Learn to recognise these four messages and\n        you will fix most first-year bugs in seconds instead of minutes.</p>\n      </div>\n    \n      <h4>Debugging method: read the error, then inspect the line above</h4>\n      <p>A syntax message often points near the place where Python finally became confused. The true\n      mistake may be one line earlier, such as a missing colon.</p>\n      <pre><code>weather = \"Snow\"\nif weather == \"Snow\"      # missing colon here\n    print(\"Build a snowman\")</code></pre>\n      <p>Fix one problem at a time. Add the colon first. Run again. Then fix any next message.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"Four-step debugging loop.\">\n        <circle cx=\"110\" cy=\"90\" r=\"55\" class=\"box\"/><text x=\"110\" y=\"86\" text-anchor=\"middle\" class=\"lbl\">1. READ</text><text x=\"110\" y=\"107\" text-anchor=\"middle\" class=\"mono\">the error</text>\n        <circle cx=\"270\" cy=\"90\" r=\"55\" class=\"box\"/><text x=\"270\" y=\"86\" text-anchor=\"middle\" class=\"lbl\">2. FIND</text><text x=\"270\" y=\"107\" text-anchor=\"middle\" class=\"mono\">the line</text>\n        <circle cx=\"430\" cy=\"90\" r=\"55\" class=\"box\"/><text x=\"430\" y=\"86\" text-anchor=\"middle\" class=\"lbl\">3. FIX</text><text x=\"430\" y=\"107\" text-anchor=\"middle\" class=\"mono\">one thing</text>\n        <circle cx=\"590\" cy=\"90\" r=\"55\" class=\"box box--dark\"/><text x=\"590\" y=\"86\" text-anchor=\"middle\" class=\"on-dark\">4. RUN</text><text x=\"590\" y=\"107\" text-anchor=\"middle\" class=\"mono on-dark\">again</text>\n        <path class=\"arrow\" d=\"M165 90 H215 M325 90 H375 M485 90 H535\"/>\n      </svg>\n\n      <h4>Mini trace table</h4>\n      <table><tr><th>Step</th><th>Condition</th><th>New value</th></tr><tr><td>Start</td><td>money = 20</td><td>20</td></tr><tr><td>if</td><td>20 ≥ 50 is False</td><td>20</td></tr><tr><td>elif</td><td>20 ≥ 10 is True</td><td>15</td></tr><tr><td>print</td><td>chain finished</td><td>15</td></tr></table>\n      <div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Play computer</span><p class=\"w__q\">What is printed?</p><pre><code>x = 4\nif x &gt; 5:\n    x = x + 10\nelse:\n    x = x * 3\nprint(x)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">4</button><button data-o=\"1\">12</button><button data-o=\"2\">14</button></div><p class=\"w__why\">The condition is False, so the else block changes x to 4 × 3 = 12.</p></div>\n",
      "mcqs": [
        {
          "q": "Why does if name = \"John\": fail?",
          "options": [
            "John is forbidden",
            "= assigns instead of comparing",
            "The colon is wrong",
            "Strings cannot be compared"
          ],
          "answer": 1,
          "why": "A condition needs ==, not assignment =."
        },
        {
          "q": "What is dry-running?",
          "options": [
            "Running without Wi-Fi",
            "Tracing code step by step as if you were Python",
            "Deleting variables",
            "Skipping the output"
          ],
          "answer": 1,
          "why": "A dry run records the path and variable changes manually."
        },
        {
          "q": "What usually causes IndentationError after an if line?",
          "options": [
            "The block was not pushed right",
            "A module was not imported",
            "A number is too large",
            "The variable is lowercase"
          ],
          "answer": 0,
          "why": "Python requires an indented body."
        },
        {
          "q": "What should you inspect first after a conditional gives the wrong result?",
          "options": [
            "Only the colour theme",
            "Values, condition order, and chosen branch",
            "Internet speed",
            "File size"
          ],
          "answer": 1,
          "why": "Logic bugs come from state, comparisons, and branch order."
        }
      ],
      "tasks": [
        {
          "id": "u2t05p01",
          "kind": "code",
          "title": "Fix the colon",
          "brief": "Repair the program.",
          "starter": "weather = \"Snow\"\nif weather == \"Snow\"\n    print(\"Build a snowman!\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Build a snowman!"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+weather\\s*==\\s*[\"\\']Snow[\"\\']\\s*:",
              "message": "Add the missing colon"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Add the missing colon",
            "Your output should begin with: Build a snowman!"
          ]
        },
        {
          "id": "u2t05p02",
          "kind": "code",
          "title": "Fix the indentation",
          "brief": "Indent the output correctly.",
          "starter": "lives = 0\nif lives == 0:\nprint(\"Game Over\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Game Over"
            },
            {
              "type": "sourceRegex",
              "pattern": "if lives == 0:\\n\\s{4}print",
              "message": "Indent print under if"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Indent print under if",
            "Your output should begin with: Game Over"
          ]
        },
        {
          "id": "u2t05p03",
          "kind": "code",
          "title": "Dry-run challenge 1",
          "brief": "Write the given branch program and print its final money value.",
          "starter": "money = 20\n# Add the if-elif-else from the instruction\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Use the middle branch"
            },
            {
              "type": "sourceIncludes",
              "value": "money = money - 5",
              "message": "Subtract 5 in the 10+ branch"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the middle branch",
            "Your output should begin with: 15"
          ]
        },
        {
          "id": "u2t05p04",
          "kind": "code",
          "title": "Dry-run nested path",
          "brief": "Create a = 10 and b = 20. Use nested if statements to print <code>Path 1</code> when a is 10 and b is below 30.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Path 1"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bif\\b",
              "count": 2,
              "message": "Use a nested if"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a nested if",
            "Your output should begin with: Path 1"
          ]
        },
        {
          "id": "u2t05p05",
          "kind": "code",
          "title": "Fix assignment versus comparison",
          "brief": "Repair the condition.",
          "starter": "score = 100\nif score = 100:\n    print(\"Perfect\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Perfect"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+score\\s*==\\s*100\\s*:",
              "message": "Use == in the condition"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use == in the condition",
            "Your output should begin with: Perfect"
          ]
        },
        {
          "id": "u2t05p06",
          "kind": "code",
          "title": "Fix unreachable grade",
          "brief": "The program should print A for 92. Repair the condition order.",
          "starter": "score = 92\nif score >= 60:\n    print(\"Pass\")\nelif score >= 90:\n    print(\"A\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+score\\s*>=\\s*90",
              "message": "Put the strictest condition first"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Put the strictest condition first",
            "Your output should begin with: A"
          ]
        },
        {
          "id": "u2t05p07",
          "kind": "code",
          "title": "Trace and verify",
          "brief": "Set x=4, y=3. If x is even, multiply x by y; otherwise add y. Print x. Include a comment showing your predicted answer before the decision.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "12"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 1,
              "message": "Write a prediction comment"
            },
            {
              "type": "sourceIncludes",
              "value": "% 2",
              "message": "Test evenness with modulus"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Write a prediction comment",
            "Your output should begin with: 12"
          ]
        },
        {
          "id": "u2t05p08",
          "kind": "code",
          "title": "Mini build — repaired speed checker",
          "brief": "Create speed=80 and limit=65. Use a correctly formatted if-else to print <code>Speeding ticket</code> or <code>Safe speed</code>, then print <code>Check complete</code> outside the decision.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Speeding ticket\nCheck complete"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Include both paths"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\nprint\\([\"\\']Check complete",
              "message": "Keep the final message outside the branch"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Include both paths",
            "Your output should begin with: Speeding ticket"
          ]
        }
      ]
    },
    {
      "id": "u2cp01",
      "title": "Revision Checkpoint 1 — Boolean Logic and Decisions",
      "summary": "Mix Boolean values, condition order, nesting, ternary expressions, and common fixes.",
      "notebookLM": "",
      "notes": "<h4>Stop, mix, and remember</h4><p>Mix Boolean values, condition order, nesting, ternary expressions, and common fixes.</p>\n    <div class=\"callout\"><strong>Checkpoint rule:</strong> Try each question without opening an earlier chapter. A wrong answer is a map showing what to revise.</div>\n    <svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Four ways to prove that the idea is really yours\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Recall</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Predict</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Fix</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Build</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Four ways to prove that the idea is really yours</text></svg>\n    <div class=\"w\"><span class=\"w__k\">Tap to reveal</span><div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What if I get something wrong?</span><span class=\"w-flip__back\">Read the explanation, retry the idea, and write one small example.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Should I rush?</span><span class=\"w-flip__back\">No. Dry-run the code before pressing Run.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What unlocks next?</span><span class=\"w-flip__back\">Clear the quiz and complete every checkpoint task.</span></button></div></div>",
      "mcqs": [
        {
          "q": "A variable contains numeric 0. What does bool(0) return?",
          "options": [
            "True",
            "False",
            "None",
            "Error"
          ],
          "answer": 1,
          "why": "Numeric zero is falsy."
        },
        {
          "q": "Which expression is True?",
          "options": [
            "5 > 9",
            "10 != 10",
            "8 <= 8",
            "not True"
          ],
          "answer": 2,
          "why": "8 is equal to 8, so <= is True."
        },
        {
          "q": "Which operator runs before and?",
          "options": [
            "or",
            "not",
            "== never runs",
            "else"
          ],
          "answer": 1,
          "why": "not is evaluated before and."
        },
        {
          "q": "What does an elif chain do after finding a True condition?",
          "options": [
            "Checks every remaining condition",
            "Runs that block and skips the rest",
            "Returns None",
            "Starts again"
          ],
          "answer": 1,
          "why": "Only the first matching branch runs."
        },
        {
          "q": "Which line is a correct ternary expression?",
          "options": [
            "x = \"Yes\" if ready else \"No\"",
            "if ready x = \"Yes\" else \"No\"",
            "x = ready ? \"Yes\" : \"No\"",
            "x if = ready"
          ],
          "answer": 0,
          "why": "Python puts the true value first, then if condition else false value."
        },
        {
          "q": "What is wrong with if score = 10:?",
          "options": [
            "Nothing",
            "= assigns; == compares",
            "The colon",
            "Numbers cannot be compared"
          ],
          "answer": 1,
          "why": "A condition needs ==."
        },
        {
          "q": "What helps find a logic bug without running code?",
          "options": [
            "Dry-running",
            "Installing random",
            "Changing the font",
            "Deleting comments"
          ],
          "answer": 0,
          "why": "Dry-running tracks state and path on paper."
        },
        {
          "q": "What does bool(\" \") return?",
          "options": [
            "False",
            "True",
            "None",
            "Error"
          ],
          "answer": 1,
          "why": "A space is a real character, so the string is non-empty."
        }
      ],
      "tasks": [
        {
          "id": "u2cp01p01",
          "kind": "code",
          "title": "Boolean repair",
          "brief": "Fix the spelling and comparison so the output is True.",
          "starter": "ready = true\nprint(ready = True)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceRegex",
              "pattern": "ready\\s*=\\s*True",
              "message": "Use capital-T True"
            },
            {
              "type": "sourceRegex",
              "pattern": "print\\(ready\\s*==\\s*True\\)",
              "message": "Compare inside print with =="
            }
          ],
          "level": "Revision Checkpoint — Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use capital-T True",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2cp01p02",
          "kind": "code",
          "title": "Branch prediction",
          "brief": "Create score=84 and use an if-elif-else grade chain to print B.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "B"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Use an elif branch"
            }
          ],
          "level": "Revision Checkpoint — Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use an elif branch",
            "Your output should begin with: B"
          ]
        },
        {
          "id": "u2cp01p03",
          "kind": "code",
          "title": "Nested fix",
          "brief": "Repair the nested access check.",
          "starter": "has_id = True\nhas_pass = True\nif has_id:\nprint(\"ID OK\")\nif has_pass:\nprint(\"Enter\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ID OK\nEnter"
            },
            {
              "type": "sourceRegex",
              "pattern": "if has_id:\\n\\s{4}print[^\\n]*\\n\\s{4}if has_pass:\\n\\s{8}print",
              "message": "Use correct nested indentation"
            }
          ],
          "level": "Revision Checkpoint — Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use correct nested indentation",
            "Your output should begin with: ID OK"
          ]
        },
        {
          "id": "u2cp01p04",
          "kind": "code",
          "title": "Truthy login",
          "brief": "Create username=\"Ravi\", password=\"\", online=True. Print one final Boolean that is False because the password is empty.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "bool\\(",
              "count": 2,
              "message": "Check both text values with bool()"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\band\\b",
              "count": 2,
              "message": "Combine all three requirements"
            }
          ],
          "level": "Revision Checkpoint — Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Check both text values with bool()",
            "Your output should begin with: False"
          ]
        },
        {
          "id": "u2cp01p05",
          "kind": "code",
          "title": "Checkpoint mini build — cinema gate",
          "brief": "Set age=17, has_ticket=True, parent_present=True. Use comparisons and logical operators to decide if the person may enter: age 18+ OR parent present, and a ticket is required. Use if-else to print <code>Entry allowed</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Entry allowed"
            },
            {
              "type": "sourceIncludes",
              "value": "or",
              "message": "Use the age-or-parent rule"
            },
            {
              "type": "sourceIncludes",
              "value": "and",
              "message": "Require the ticket too"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Include the denied path"
            }
          ],
          "level": "Revision Checkpoint — Task 5",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the age-or-parent rule",
            "Your output should begin with: Entry allowed"
          ]
        }
      ]
    },
    {
      "id": "u2t06",
      "title": "Looping Statements — while and for",
      "summary": "Repeat actions using a condition or by visiting each item.",
      "notebookLM": "",
      "notes": "\n      <h4>Why loops exist</h4>\n      <p>A teacher tells you to write \"I will not talk in class\" on the board 100 times. Your\n      hand aches by number 30.</p>\n      <p>Programmers are lazy in the best possible way. To print that sentence 100 times we do\n      not write <code>print()</code> a hundred times. We tell the computer:\n      <em>do this one thing, 100 times</em>.</p>\n\n      <h4>The treadmill — a while loop</h4>\n      <p>You step on a treadmill and say: \"I will keep running <em>while</em> my heart rate is\n      under 150.\" The moment it reaches 150, you stop.</p>\n      <p>A <code>while</code> loop repeats a block <strong>as long as a condition stays\n      True</strong>. The moment it turns False, the loop ends.</p>\n\n      <pre><code>count = 1\n\nwhile count <= 3:\n    print(\"Running lap\", count)\n    count += 1        # ← without this line the loop NEVER stops\n\nprint(\"Done running!\")</code></pre>\n\n      <div class=\"callout\">\n        <strong>The most important line is the last one inside.</strong> If you never change\n        the variable the condition is testing, the answer stays True forever and the loop runs\n        until the computer gives up. We will look at that properly in the next topic.\n      </div>\n\n      <h4>The assembly line — a for loop</h4>\n      <p>You work at a toy factory. A box of toys arrives. You pick up the first toy, check\n      it, put it down. Then the second. Then the third. When the box is empty, you stop —\n      without anybody telling you how many toys there were.</p>\n      <p>A <code>for</code> loop walks through a collection one item at a time and stops by\n      itself at the end.</p>\n\n      <pre><code>toys = [\"Car\", \"Doll\", \"Block\"]\n\nfor toy in toys:\n    print(\"Checking the:\", toy)\n\nprint(\"The box is empty!\")</code></pre>\n\n      <p>It works on text too — a string is just a collection of letters:</p>\n      <pre><code>for letter in \"CAT\":\n    print(letter)\n\n# C\n# A\n# T</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 215\" role=\"img\" aria-label=\"A while loop repeats until its condition turns false; a for loop walks through each item and stops at the end.\">\n        <text x=\"168\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">while — repeat until it stops being true</text>\n        <rect class=\"box box--dark\" x=\"8\" y=\"38\" width=\"320\" height=\"140\" rx=\"8\"/>\n        <text x=\"32\" y=\"70\" class=\"mono on-dark\" style=\"font-size:12px\">count = 1</text>\n        <text x=\"32\" y=\"94\" class=\"mono on-dark\" style=\"font-size:12px\">while count &lt;= 3:</text>\n        <text x=\"32\" y=\"118\" class=\"mono accent\" style=\"font-size:12px\">    print(count)</text>\n        <text x=\"32\" y=\"142\" class=\"mono accent\" style=\"font-size:12px\">    count += 1</text>\n        <text x=\"168\" y=\"200\" text-anchor=\"middle\" style=\"font-size:12px\">You control when it ends</text>\n\n        <text x=\"532\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">for — one item at a time</text>\n        <rect class=\"box box--dark\" x=\"372\" y=\"38\" width=\"320\" height=\"140\" rx=\"8\"/>\n        <text x=\"396\" y=\"70\" class=\"mono on-dark\" style=\"font-size:12px\">toys = [\"Car\", \"Doll\"]</text>\n        <text x=\"396\" y=\"94\" class=\"mono on-dark\" style=\"font-size:12px\">for toy in toys:</text>\n        <text x=\"396\" y=\"118\" class=\"mono accent\" style=\"font-size:12px\">    print(toy)</text>\n        <text x=\"532\" y=\"200\" text-anchor=\"middle\" style=\"font-size:12px\">It ends by itself, at the end of the box</text>\n      </svg>\n\n      <h4>Which one should you use?</h4>\n      <table>\n        <tr><th>Use a for loop when…</th><th>Use a while loop when…</th></tr>\n        <tr>\n          <td>You have a list, a string, or a range to walk through</td>\n          <td>You do not know how many times — you only know when to stop</td>\n        </tr>\n        <tr>\n          <td>You know how many times before you start</td>\n          <td>You are waiting for something to happen</td>\n        </tr>\n        <tr>\n          <td>Example: greet every guest on a list</td>\n          <td>Example: keep asking until the password is right</td>\n        </tr>\n      </table>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">How many lines does this print?</p>\n        <pre><code>for letter in \"PYTHON\":\n    print(letter)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">1 — the whole word</button>\n          <button data-o=\"1\">5</button>\n          <button data-o=\"2\">6 — one per letter</button>\n        </div>\n        <p class=\"w__why\">A <code>for</code> loop treats a string as a collection of letters, so\n        it runs once for each: P, Y, T, H, O, N. Six lines.</p>\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">This loop is supposed to print 1, 2, 3 — but it never stops. Tap the missing piece.</p>\n        <div class=\"w-spot__line\">\n          <button>x = 1</button><button>while x &lt;= 3:</button><button>print(x)</button><button data-bad>(nothing here)</button>\n        </div>\n        <p class=\"w__why\">There is no <code>x += 1</code>. <code>x</code> stays 1 forever, so\n        <code>x &lt;= 3</code> is always True and the loop never ends. Every while loop needs\n        something inside it that eventually makes the condition false.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>You are safe here.</strong> If you do write an endless loop in the boxes below,\n        this page stops it after 5 seconds and tells you what happened. On your own machine\n        it would run forever — press <strong>Ctrl + C</strong> to stop it.\n      </div>\n    \n      <h4>Choose a loop by asking one question</h4>\n      <p><strong>Do I know the items or the number of repetitions?</strong> Use a <code>for</code> loop.\n      <strong>Do I only know the condition for continuing?</strong> Use a <code>while</code> loop.</p>\n      <pre><code># Known collection\nfor name in [\"Asha\", \"Ravi\", \"Meera\"]:\n    print(\"Welcome\", name)\n\n# Unknown number of tries\npassword = \"\"\nwhile password != \"python\":\n    password = input(\"Password: \")</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 210\" role=\"img\" aria-label=\"A loop repeats a code block and returns to its condition.\">\n        <rect class=\"box box--dark\" x=\"240\" y=\"20\" width=\"220\" height=\"55\" rx=\"10\"/><text x=\"350\" y=\"54\" text-anchor=\"middle\" class=\"on-dark\">Condition or next item</text>\n        <path class=\"arrow\" d=\"M350 75 V115\"/>\n        <rect class=\"box\" x=\"240\" y=\"115\" width=\"220\" height=\"55\" rx=\"10\"/><text x=\"350\" y=\"149\" text-anchor=\"middle\">Run the indented block</text>\n        <path class=\"arrow\" d=\"M240 142 H120 V47 H240\"/>\n        <circle cx=\"120\" cy=\"95\" r=\"7\" class=\"accent\"><animate attributeName=\"cy\" values=\"145;48;145\" dur=\"2s\" repeatCount=\"indefinite\"/></circle>\n        <path class=\"arrow\" d=\"M460 47 H610\"/><text x=\"520\" y=\"36\" class=\"lbl\">finished</text>\n        <text x=\"610\" y=\"52\" class=\"mono\">next line</text>\n      </svg>\n\n      <div class=\"callout\"><strong>Safe while-loop recipe:</strong> starting value → condition → useful work → update. Missing the update often creates an endless loop.</div>\n      <div class=\"w w-match\"><span class=\"w__k\">Pick the natural loop</span><p class=\"w__q\">Match the job to the better starting choice.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"a\">Visit every letter in PYTHON</button><button data-pair=\"b\">Keep asking until the PIN is correct</button><button data-pair=\"c\">Print exactly five laps</button></div><div class=\"w-match__col\"><button data-pair=\"b\"><code>while</code></button><button data-pair=\"a\"><code>for</code> over a string</button><button data-pair=\"c\"><code>for</code> with <code>range(5)</code></button></div></div><p class=\"w__why\">Use <code>for</code> for known items or counts. Use <code>while</code> when a condition decides when to stop.</p></div>\n",
      "mcqs": [
        {
          "q": "Why do programmers use loops?",
          "options": [
            "To repeat a block without copying it many times",
            "To make code slower",
            "To create only variables",
            "To import modules"
          ],
          "answer": 0,
          "why": "Loops remove repeated code."
        },
        {
          "q": "When does a while loop stop?",
          "options": [
            "After exactly ten runs",
            "When its condition becomes False",
            "At the end of any list",
            "When print runs"
          ],
          "answer": 1,
          "why": "while checks its condition before each cycle."
        },
        {
          "q": "Which loop naturally processes every item in a list?",
          "options": [
            "if",
            "for",
            "else",
            "assert"
          ],
          "answer": 1,
          "why": "for loops iterate through collections."
        },
        {
          "q": "What commonly causes a while loop to run forever?",
          "options": [
            "Updating the counter",
            "Never changing the condition-related variable",
            "Using print",
            "Using a list"
          ],
          "answer": 1,
          "why": "If the condition never becomes False, the loop cannot stop."
        }
      ],
      "tasks": [
        {
          "id": "u2t06p01",
          "kind": "code",
          "title": "Blastoff sequence",
          "brief": "Start countdown at 5. Use a while loop to print 5 through 1, then print Blastoff!",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5\n4\n3\n2\n1\nBlastoff!"
            },
            {
              "type": "sourceIncludes",
              "value": "while ",
              "message": "Use a while loop"
            },
            {
              "type": "sourceIncludes",
              "value": "-=",
              "message": "Decrease the countdown"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a while loop",
            "Your output should begin with: 5"
          ]
        },
        {
          "id": "u2t06p02",
          "kind": "code",
          "title": "Name printer",
          "brief": "Use a for loop to print each letter of PYTHON on its own line.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "P\nY\nT\nH\nO\nN"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+\\w+\\s+in\\s+[\"\\']PYTHON[\"\\']\\s*:",
              "message": "Loop directly through the string"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Loop directly through the string",
            "Your output should begin with: P"
          ]
        },
        {
          "id": "u2t06p03",
          "kind": "code",
          "title": "Guest list",
          "brief": "Create guests = [\"Alice\", \"Bob\", \"Charlie\"]. Greet each with <code>Welcome, NAME</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Welcome, Alice\nWelcome, Bob\nWelcome, Charlie"
            },
            {
              "type": "sourceIncludes",
              "value": "for ",
              "message": "Use a for loop"
            },
            {
              "type": "sourceIncludes",
              "value": "guests",
              "message": "Loop through guests"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a for loop",
            "Your output should begin with: Welcome, Alice"
          ]
        },
        {
          "id": "u2t06p04",
          "kind": "code",
          "title": "Multiplication table",
          "brief": "Set number=7 and multiplier=1. Use while to print 7, 14, 21, 28, 35.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "7\n14\n21\n28\n35"
            },
            {
              "type": "sourceIncludes",
              "value": "while ",
              "message": "Use while"
            },
            {
              "type": "sourceIncludes",
              "value": "multiplier += 1",
              "message": "Increase the multiplier"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use while",
            "Your output should begin with: 7"
          ]
        },
        {
          "id": "u2t06p05",
          "kind": "code",
          "title": "Fix the infinite counter",
          "brief": "Repair the loop so it prints 1, 2, 3 and stops.",
          "starter": "x = 1\nwhile x <= 3:\n    print(x)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2\n3"
            },
            {
              "type": "sourceRegex",
              "pattern": "x\\s*\\+=\\s*1",
              "message": "Increase x inside the loop"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Increase x inside the loop",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t06p06",
          "kind": "code",
          "title": "Fix the indentation",
          "brief": "Repair the for-loop body.",
          "starter": "foods = [\"Rice\", \"Soup\"]\nfor food in foods:\nprint(food)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Rice\nSoup"
            },
            {
              "type": "sourceRegex",
              "pattern": "for food in foods:\\n\\s{4}print",
              "message": "Indent print under the for loop"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Indent print under the for loop",
            "Your output should begin with: Rice"
          ]
        },
        {
          "id": "u2t06p07",
          "kind": "code",
          "title": "Sum with a loop challenge",
          "brief": "Create numbers=[2,4,6,8]. Start total at 0, use a for loop to add every value, and print 20.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*=\\s*0",
              "message": "Start an accumulator at zero"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=",
              "message": "Add each item to total"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Start an accumulator at zero",
            "Your output should begin with: 20"
          ]
        },
        {
          "id": "u2t06p08",
          "kind": "code",
          "title": "Mini build — five-day tracker",
          "brief": "Create steps=[3000,5000,7000,4000,6000]. Use a for loop to print <code>Day N: X steps</code> for days 1-5, using a separate day counter starting at 1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Day 1: 3000 steps\nDay 2: 5000 steps\nDay 3: 7000 steps\nDay 4: 4000 steps\nDay 5: 6000 steps"
            },
            {
              "type": "sourceRegex",
              "pattern": "day\\s*=\\s*1",
              "message": "Start day at 1"
            },
            {
              "type": "sourceRegex",
              "pattern": "day\\s*\\+=\\s*1",
              "message": "Increase day in the loop"
            },
            {
              "type": "sourceIncludes",
              "value": "for ",
              "message": "Loop through the steps list"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Start day at 1",
            "Your output should begin with: Day 1: 3000 steps"
          ]
        }
      ]
    },
    {
      "id": "u2t07",
      "title": "Looping Statements — Nested Loops, Infinite Loops and Loop else",
      "summary": "Repeat repeated work safely and understand natural loop completion.",
      "notebookLM": "",
      "notes": "\n      <h4>The digital clock</h4>\n      <p>Look at a clock. The minutes tick 00, 01, 02 … all the way to 59. Only when the\n      minutes have finished a full cycle does the hour change by one.</p>\n      <p>A <strong>nested loop</strong> is a loop inside another loop, and it behaves exactly\n      like that clock.</p>\n\n      <div class=\"callout\">\n        <strong>The rule.</strong> The inner loop finishes <em>all</em> of its rounds for\n        <em>every single</em> round of the outer loop.\n      </div>\n\n      <pre><code>for hour in [\"1 PM\", \"2 PM\"]:\n    print(\"Hour:\", hour)\n\n    for minute in [\"00\", \"30\"]:\n        print(\"   Minute:\", minute)</code></pre>\n\n      <p>That prints six lines, not four:</p>\n      <pre><code>Hour: 1 PM\n   Minute: 00\n   Minute: 30\nHour: 2 PM\n   Minute: 00\n   Minute: 30</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 200\" role=\"img\" aria-label=\"The outer loop runs twice and the inner loop runs fully inside each of those rounds.\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">2 outer rounds × 2 inner rounds = 4 inner runs</text>\n\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"334\" height=\"140\" rx=\"8\"/>\n        <text x=\"175\" y=\"66\" text-anchor=\"middle\" style=\"font-size:13px;font-weight:700\">Outer round 1</text>\n        <rect x=\"32\" y=\"80\" width=\"286\" height=\"34\" rx=\"6\" fill=\"rgba(242,160,61,.18)\" stroke=\"#D67F19\" stroke-width=\"1.8\"/>\n        <text x=\"175\" y=\"102\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">inner: 00</text>\n        <rect x=\"32\" y=\"122\" width=\"286\" height=\"34\" rx=\"6\" fill=\"rgba(242,160,61,.18)\" stroke=\"#D67F19\" stroke-width=\"1.8\"/>\n        <text x=\"175\" y=\"144\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">inner: 30</text>\n\n        <rect class=\"box\" x=\"358\" y=\"38\" width=\"334\" height=\"140\" rx=\"8\"/>\n        <text x=\"525\" y=\"66\" text-anchor=\"middle\" style=\"font-size:13px;font-weight:700\">Outer round 2</text>\n        <rect x=\"382\" y=\"80\" width=\"286\" height=\"34\" rx=\"6\" fill=\"rgba(242,160,61,.18)\" stroke=\"#D67F19\" stroke-width=\"1.8\"/>\n        <text x=\"525\" y=\"102\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">inner: 00</text>\n        <rect x=\"382\" y=\"122\" width=\"286\" height=\"34\" rx=\"6\" fill=\"rgba(242,160,61,.18)\" stroke=\"#D67F19\" stroke-width=\"1.8\"/>\n        <text x=\"525\" y=\"144\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">inner: 30</text>\n      </svg>\n\n      <p>It works with <code>while</code> loops too, and you can even mix the two. A gym\n      routine of 3 sets with 5 push-ups each:</p>\n      <pre><code>sets = 1\nwhile sets <= 3:\n    print(f\"Set {sets}\")\n\n    reps = 1\n    while reps <= 5:\n        print(f\"   Push-up {reps}\")\n        reps += 1        # ← the inner counter\n\n    sets += 1            # ← the outer counter</code></pre>\n\n      <div class=\"callout\">\n        <strong>Two counters, two resets.</strong> Notice that <code>reps = 1</code> sits\n        <em>inside</em> the outer loop. If you put it at the very top instead, the second set\n        would start where the first one stopped, and you would only ever do five push-ups in\n        total.\n      </div>\n\n      <h4>The broken record</h4>\n      <p>A scratched record plays the same two seconds of a song forever. That is an\n      <strong>infinite loop</strong>.</p>\n      <p>It happens when a <code>while</code> condition never becomes False — almost always\n      because you forgot to change the variable.</p>\n\n      <pre><code>battery = 100\nwhile battery > 0:\n    print(\"Playing game!\")\n    # battery never goes down, so this runs forever</code></pre>\n\n      <div class=\"callout\">\n        <strong>How to escape one.</strong> In a real terminal, press <strong>Ctrl + C</strong>\n        to force it to stop. In the boxes on this page, your program is stopped automatically\n        after five seconds and you get a clear message.\n      </div>\n\n      <p>Not every endless loop is a bug, though. <code>while True:</code> is a normal, useful\n      pattern — as long as something inside it eventually breaks out. You will meet that in\n      Topic 9.</p>\n\n      <h4>The search party — else on a loop</h4>\n      <p>You are searching a forest for a lost dog. Two things can happen:</p>\n      <ul>\n        <li>You find the dog and stop searching.</li>\n        <li>You search the whole forest, find nothing, and say <em>\"I checked everywhere.\"</em></li>\n      </ul>\n      <p>Python lets you attach an <code>else</code> to a loop. It runs <strong>only if the\n      loop finished naturally</strong>, without being stopped early.</p>\n\n      <pre><code>for item in [\"Apple\", \"Banana\", \"Cherry\"]:\n    print(\"Checking:\", item)\nelse:\n    print(\"I checked every item!\")</code></pre>\n\n      <div class=\"callout\">\n        <strong>This surprises everybody.</strong> A loop's <code>else</code> has nothing to do\n        with an <code>if</code>'s <code>else</code>. Read it as <em>\"and afterwards, if nothing\n        interrupted us…\"</em>.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">How many lines does this print in total?</p>\n        <pre><code>for a in [1, 2, 3]:\n    for b in [\"x\", \"y\"]:\n        print(a, b)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">5</button>\n          <button data-o=\"1\">6</button>\n          <button data-o=\"2\">3</button>\n        </div>\n        <p class=\"w__why\">3 outer rounds × 2 inner rounds = 6. The inner loop runs completely\n        every single time the outer one takes one step. Multiply, do not add.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">What causes what?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Forgetting to change the counter</button>\n            <button data-pair=\"b\">A loop inside a loop</button>\n            <button data-pair=\"c\"><code>else</code> attached to a loop</button>\n            <button data-pair=\"d\">Ctrl + C</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">Runs only if nothing stopped the loop early</button>\n            <button data-pair=\"a\">An infinite loop</button>\n            <button data-pair=\"d\">Force-stops a runaway program in the terminal</button>\n            <button data-pair=\"b\">Inner rounds multiply by outer rounds</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Nested loops are powerful and expensive —\n        a 1000-item loop inside another 1000-item loop is a million rounds.</p>\n      </div>\n    \n      <h4>Nested loops build rows and columns</h4>\n      <p>The outer loop chooses a row. For that one row, the inner loop visits every column. Only\n      after the inner loop finishes does the outer loop move to the next row.</p>\n      <pre><code>for row in range(1, 3):\n    for col in range(1, 4):\n        print(row, col)</code></pre>\n      <p>This prints six pairs because 2 rows × 3 columns = 6 iterations of the inner work.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 230\" role=\"img\" aria-label=\"Animated cursor travelling across a two by three grid.\">\n        <text x=\"80\" y=\"35\" class=\"lbl\">Outer loop chooses the row</text>\n        <g transform=\"translate(180,55)\">\n          <rect class=\"box\" x=\"0\" y=\"0\" width=\"100\" height=\"60\"/><rect class=\"box\" x=\"110\" y=\"0\" width=\"100\" height=\"60\"/><rect class=\"box\" x=\"220\" y=\"0\" width=\"100\" height=\"60\"/>\n          <rect class=\"box\" x=\"0\" y=\"70\" width=\"100\" height=\"60\"/><rect class=\"box\" x=\"110\" y=\"70\" width=\"100\" height=\"60\"/><rect class=\"box\" x=\"220\" y=\"70\" width=\"100\" height=\"60\"/>\n          <circle r=\"12\" class=\"accent\"><animate attributeName=\"cx\" values=\"50;160;270;50;160;270;50\" dur=\"4s\" repeatCount=\"indefinite\"/><animate attributeName=\"cy\" values=\"30;30;30;100;100;100;30\" dur=\"4s\" repeatCount=\"indefinite\"/></circle>\n        </g>\n        <text x=\"350\" y=\"215\" text-anchor=\"middle\" class=\"mono\">Inner loop moves across each row</text>\n      </svg>\n\n      <h4>Loop else in one sentence</h4>\n      <p>The <code>else</code> block runs when the loop finishes normally. A <code>break</code> means\n      the search ended early, so the loop's else block is skipped.</p>\n      <div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Search result game</span><p class=\"w__q\">What is the last line printed?</p><pre><code>for item in [\"pen\", \"book\"]:\n    print(item)\nelse:\n    print(\"Checked all\")</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Checked all</button><button data-o=\"1\">book</button><button data-o=\"2\">Nothing</button></div><p class=\"w__why\">No break interrupted the loop, so it completed normally and the else block ran.</p></div>\n",
      "mcqs": [
        {
          "q": "How do nested loops run?",
          "options": [
            "At exactly the same instant",
            "The inner loop completes for each outer step",
            "The outer loop completes before the inner starts",
            "Python ignores the inner loop"
          ],
          "answer": 1,
          "why": "The full inner cycle repeats for every outer item."
        },
        {
          "q": "What causes an infinite while loop?",
          "options": [
            "A condition that never becomes False",
            "A list with many items",
            "A print statement",
            "A negative number"
          ],
          "answer": 0,
          "why": "The stopping condition is never reached."
        },
        {
          "q": "When does loop else normally run?",
          "options": [
            "Only after a natural loop finish",
            "Before the loop",
            "Every iteration",
            "Only after an error"
          ],
          "answer": 0,
          "why": "It follows successful completion without break."
        },
        {
          "q": "If outer runs 3 times and inner runs 4 times, how many inner-body runs occur?",
          "options": [
            "7",
            "12",
            "4",
            "3"
          ],
          "answer": 1,
          "why": "3 × 4 = 12."
        }
      ],
      "tasks": [
        {
          "id": "u2t07p01",
          "kind": "code",
          "title": "Coordinate grid",
          "brief": "Use nested for loops with x_values=[1,2] and y_values=[\"A\",\"B\"]. Print <code>1 A</code>, <code>1 B</code>, <code>2 A</code>, <code>2 B</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1 A\n1 B\n2 A\n2 B"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Use two for loops"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use two for loops",
            "Your output should begin with: 1 A"
          ]
        },
        {
          "id": "u2t07p02",
          "kind": "code",
          "title": "Workout calendar",
          "brief": "Use nested while loops for weeks 1-2 and days 1-3. Print <code>Week X, Day Y</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Week 1, Day 1\nWeek 1, Day 2\nWeek 1, Day 3\nWeek 2, Day 1\nWeek 2, Day 2\nWeek 2, Day 3"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bwhile\\b",
              "count": 2,
              "message": "Use two while loops"
            },
            {
              "type": "sourceRegex",
              "pattern": "days?\\s*=\\s*1",
              "message": "Reset the day counter for each week"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use two while loops",
            "Your output should begin with: Week 1, Day 1"
          ]
        },
        {
          "id": "u2t07p03",
          "kind": "code",
          "title": "Natural completion",
          "brief": "Loop through [1,2,3], print each number, then use loop else to print <code>All numbers processed</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2\n3\nAll numbers processed"
            },
            {
              "type": "sourceRegex",
              "pattern": "for[^\\n]+:\\n(?:.|\\n)*?else:",
              "message": "Attach else to the for loop"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Attach else to the for loop",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t07p04",
          "kind": "code",
          "title": "Two-by-three stars",
          "brief": "Use nested loops to print exactly two rows of three stars as <code>* * *</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "* * *\n* * *"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Use nested for loops"
            },
            {
              "type": "sourceIncludes",
              "value": "end=",
              "message": "Keep stars on one row with end="
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use nested for loops",
            "Your output should begin with: * * *"
          ]
        },
        {
          "id": "u2t07p05",
          "kind": "code",
          "title": "Fix the endless battery",
          "brief": "Repair the loop so it prints 3, 2, 1 and stops.",
          "starter": "battery = 3\nwhile battery > 0:\n    print(battery)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3\n2\n1"
            },
            {
              "type": "sourceRegex",
              "pattern": "battery\\s*-=\\s*1",
              "message": "Decrease battery inside the loop"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Decrease battery inside the loop",
            "Your output should begin with: 3"
          ]
        },
        {
          "id": "u2t07p06",
          "kind": "code",
          "title": "Fix the inner reset",
          "brief": "The code should print six day lines. Move the day reset to the correct place.",
          "starter": "week = 1\nday = 1\nwhile week <= 2:\n    while day <= 3:\n        print(week, day)\n        day += 1\n    week += 1\n",
          "checks": [
            {
              "type": "stdoutLineCount",
              "value": 6,
              "message": "Print all six combinations"
            },
            {
              "type": "sourceRegex",
              "pattern": "while week <= 2:\\n\\s{4}day\\s*=\\s*1",
              "message": "Reset day inside the outer loop"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Print all six combinations",
            "Run a small part first, inspect the output, and then complete the rest."
          ]
        },
        {
          "id": "u2t07p07",
          "kind": "code",
          "title": "Nested total challenge",
          "brief": "Use nested loops over rows=[1,2] and cols=[10,20,30]. Add every row+col combination to total and print 129.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "129"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Use nested loops"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=\\s*row\\s*\\+\\s*col",
              "message": "Accumulate row + col"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use nested loops",
            "Your output should begin with: 129"
          ]
        },
        {
          "id": "u2t07p08",
          "kind": "code",
          "title": "Mini build — seat map",
          "brief": "Use nested loops to create two rows A and B, each with seats 1-3. Print exactly <code>Seat A1</code> through <code>Seat B3</code>. After natural completion, print <code>Map complete</code> using loop else.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Seat A1\nSeat A2\nSeat A3\nSeat B1\nSeat B2\nSeat B3\nMap complete"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Use nested loops"
            },
            {
              "type": "sourceRegex",
              "pattern": "else:\\n\\s{4}print\\([\"\\']Map complete",
              "message": "Use a loop else for completion"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use nested loops",
            "Your output should begin with: Seat A1"
          ]
        }
      ]
    },
    {
      "id": "u2t08",
      "title": "Looping Statements — Sentinel, Counter and Accumulator Patterns",
      "summary": "Use standard loop plans to stop, count, and build running results.",
      "notebookLM": "",
      "notes": "\n      <h4>Three shapes, endless uses</h4>\n      <p>Once you have written a few hundred loops you notice they nearly all follow one of\n      three patterns. Learn these three and you can build almost anything.</p>\n\n      <h4>1. The counter-controlled loop</h4>\n      <p>A rollercoaster holds exactly 10 people. You count them on — 1, 2, 3 — and at 10 you\n      stop.</p>\n      <p>Use this when you <strong>know the number before you start</strong>. Set a counter,\n      test it, and change it inside.</p>\n      <pre><code>tickets = 0\n\nwhile tickets < 5:\n    print(\"Ticket sold!\")\n    tickets += 1</code></pre>\n\n      <h4>2. The sentinel-controlled loop</h4>\n      <p>A bouncer lets people in all night. But the moment somebody says the secret word\n      \"Pineapple\", he closes the club.</p>\n      <p>A <strong>sentinel value</strong> is a special value that means <em>stop</em>. Use\n      this when you have <strong>no idea how many rounds</strong> you need — you only know\n      what will end it.</p>\n      <pre><code>while True:\n    answer = input(\"Type 'stop' to finish: \")\n\n    if answer == \"stop\":\n        print(\"Goodbye!\")\n        break        # rips you straight out of the loop</code></pre>\n\n      <h4>3. The accumulator</h4>\n      <p>You walk round the house collecting loose coins. You start with an empty piggy bank,\n      and every coin you find goes in. At the end you count it.</p>\n      <p>An <strong>accumulator</strong> is a variable created <em>before</em> the loop that\n      grows <em>inside</em> it.</p>\n      <pre><code>total = 0                 # empty piggy bank, BEFORE the loop\npoints = [10, 20, 30]\n\nfor point in points:\n    total = total + point # add to the running total\n\nprint(\"Final score:\", total)   # 60</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"An accumulator starts empty before the loop and grows with each round.\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">total = 0 &nbsp;→&nbsp; add 10 &nbsp;→&nbsp; add 20 &nbsp;→&nbsp; add 30</text>\n\n        <rect class=\"box\" x=\"8\" y=\"40\" width=\"150\" height=\"66\" rx=\"7\"/>\n        <text x=\"83\" y=\"80\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:16px\">0</text>\n        <text x=\"83\" y=\"126\" text-anchor=\"middle\" class=\"lbl\">before</text>\n\n        <path class=\"arrow\" d=\"M166 74 h34\"/><path class=\"accent\" d=\"M210 74 l-12 -7 v14 z\"/>\n        <rect class=\"box\" x=\"218\" y=\"40\" width=\"150\" height=\"66\" rx=\"7\"/>\n        <text x=\"293\" y=\"80\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:16px\">10</text>\n        <text x=\"293\" y=\"126\" text-anchor=\"middle\" class=\"lbl\">round 1</text>\n\n        <path class=\"arrow\" d=\"M376 74 h34\"/><path class=\"accent\" d=\"M420 74 l-12 -7 v14 z\"/>\n        <rect class=\"box\" x=\"428\" y=\"40\" width=\"118\" height=\"66\" rx=\"7\"/>\n        <text x=\"487\" y=\"80\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:16px\">30</text>\n        <text x=\"487\" y=\"126\" text-anchor=\"middle\" class=\"lbl\">round 2</text>\n\n        <path class=\"arrow\" d=\"M554 74 h26\"/><path class=\"accent\" d=\"M590 74 l-12 -7 v14 z\"/>\n        <rect x=\"598\" y=\"40\" width=\"94\" height=\"66\" rx=\"7\" fill=\"rgba(242,160,61,.18)\" stroke=\"#D67F19\" stroke-width=\"2.2\"/>\n        <text x=\"645\" y=\"80\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:16px\">60</text>\n        <text x=\"645\" y=\"126\" text-anchor=\"middle\" class=\"lbl\">round 3</text>\n\n        <text x=\"350\" y=\"172\" text-anchor=\"middle\" style=\"font-size:12.5px\">Create it before the loop. Grow it inside. Read it after.</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Where the accumulator goes matters enormously.</strong> Put\n        <code>total = 0</code> <em>inside</em> the loop and it resets to zero every round — you\n        end up with just the last number instead of the sum. This is a very common bug.\n      </div>\n\n      <h4>Accumulating text</h4>\n      <p>Accumulators are not only for numbers. You can glue strings together the same way:</p>\n      <pre><code>word = \"\"                      # empty string to start\nletters = [\"C\", \"A\", \"T\"]\n\nfor letter in letters:\n    word += letter\n\nprint(word)                    # CAT</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">A classic bug. What does this print?</p>\n        <pre><code>for n in [10, 20, 30]:\n    total = 0\n    total = total + n\nprint(total)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">60</button>\n          <button data-o=\"1\">0</button>\n          <button data-o=\"2\">30</button>\n        </div>\n        <p class=\"w__why\"><code>total = 0</code> is inside the loop, so it is wiped clean every\n        round. On the last round it becomes 0 + 30 = 30, and that is all that survives. Move\n        that line above the loop and you get 60.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which pattern fits each job?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Print exactly 10 tickets</button>\n            <button data-pair=\"b\">Keep asking until the user types quit</button>\n            <button data-pair=\"c\">Add up every price in a shopping list</button>\n            <button data-pair=\"d\">Build a word out of separate letters</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">Number accumulator</button>\n            <button data-pair=\"a\">Counter-controlled loop</button>\n            <button data-pair=\"d\">String accumulator</button>\n            <button data-pair=\"b\">Sentinel-controlled loop</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Nearly every loop you write for the rest of\n        this course will be one of these, or two of them combined.</p>\n      </div>\n    \n      <h4>Three loop patterns, three different jobs</h4>\n      <table><tr><th>Pattern</th><th>What controls it?</th><th>Typical example</th></tr><tr><td>Counter</td><td>A number of repetitions</td><td>Sell exactly 10 tickets</td></tr><tr><td>Sentinel</td><td>A special stop value</td><td>Keep reading until the user types quit</td></tr><tr><td>Accumulator</td><td>A running result</td><td>Add all shopping prices</td></tr></table>\n      <pre><code>prices = [25, 40, 15]\ntotal = 0\nfor price in prices:\n    total += price\nprint(total)     # 80</code></pre>\n      <p>The accumulator starts before the loop. If you create <code>total = 0</code> inside the loop,\n      it is reset during every repetition and cannot remember the earlier values.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 200\" role=\"img\" aria-label=\"Counter, sentinel and accumulator machines.\">\n        <rect class=\"box\" x=\"18\" y=\"38\" width=\"205\" height=\"125\" rx=\"12\"/><text x=\"120\" y=\"68\" text-anchor=\"middle\" class=\"lbl\">COUNTER</text><text x=\"120\" y=\"100\" text-anchor=\"middle\" class=\"mono\">1, 2, 3, 4...</text><text x=\"120\" y=\"130\" text-anchor=\"middle\">known count</text>\n        <rect class=\"box box--dark\" x=\"248\" y=\"38\" width=\"205\" height=\"125\" rx=\"12\"/><text x=\"350\" y=\"68\" text-anchor=\"middle\" class=\"on-dark\">SENTINEL</text><text x=\"350\" y=\"100\" text-anchor=\"middle\" class=\"mono on-dark\">until \"quit\"</text><text x=\"350\" y=\"130\" text-anchor=\"middle\" class=\"on-dark\">special stop value</text>\n        <rect class=\"box\" x=\"478\" y=\"38\" width=\"205\" height=\"125\" rx=\"12\"/><text x=\"580\" y=\"68\" text-anchor=\"middle\" class=\"lbl\">ACCUMULATOR</text><text x=\"580\" y=\"100\" text-anchor=\"middle\" class=\"mono\">0 → 25 → 65 → 80</text><text x=\"580\" y=\"130\" text-anchor=\"middle\">running result</text>\n      </svg>\n\n      <div class=\"w w-flip\"><span class=\"w__k\">Pattern memory cards</span><div class=\"w-flip\">\n        <button class=\"w-flip__card\"><span class=\"w-flip__front\">I know it must run 8 times.</span><span class=\"w-flip__back\">Counter-controlled loop.</span></button>\n        <button class=\"w-flip__card\"><span class=\"w-flip__front\">I stop when the user types END.</span><span class=\"w-flip__back\">Sentinel-controlled loop.</span></button>\n        <button class=\"w-flip__card\"><span class=\"w-flip__front\">I keep a running total.</span><span class=\"w-flip__back\">Accumulator pattern.</span></button>\n      </div></div>\n",
      "mcqs": [
        {
          "q": "What is a sentinel value?",
          "options": [
            "A special value that signals stop",
            "A random number",
            "A syntax error",
            "A loop counter only"
          ],
          "answer": 0,
          "why": "A sentinel ends an otherwise unknown-length process."
        },
        {
          "q": "Which pattern fits exactly ten repetitions?",
          "options": [
            "Sentinel-controlled",
            "Counter-controlled",
            "Infinite-only",
            "String slicing"
          ],
          "answer": 1,
          "why": "A counter is ideal when the repetition count is known."
        },
        {
          "q": "Where should a numeric accumulator normally start?",
          "options": [
            "Inside every cycle",
            "Before the loop",
            "After the output",
            "Inside else only"
          ],
          "answer": 1,
          "why": "It must survive across all cycles."
        },
        {
          "q": "What starting value is common for a sum accumulator?",
          "options": [
            "0",
            "1",
            "-1",
            "None"
          ],
          "answer": 0,
          "why": "Zero is the additive identity."
        }
      ],
      "tasks": [
        {
          "id": "u2t08p01",
          "kind": "code",
          "title": "Coin collector",
          "brief": "Start wallet=0 and loop through [1,5,10,25], adding every coin. Print 41.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "41"
            },
            {
              "type": "sourceRegex",
              "pattern": "wallet\\s*=\\s*0",
              "message": "Initialise wallet before the loop"
            },
            {
              "type": "sourceRegex",
              "pattern": "wallet\\s*\\+=",
              "message": "Accumulate each coin"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Initialise wallet before the loop",
            "Your output should begin with: 41"
          ]
        },
        {
          "id": "u2t08p02",
          "kind": "code",
          "title": "Word builder",
          "brief": "Start secret_word as empty text. Loop through [\"C\",\"A\",\"T\"] and build CAT.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "CAT"
            },
            {
              "type": "sourceRegex",
              "pattern": "secret_word\\s*=\\s*[\"\\'][\"\\']",
              "message": "Start with an empty string"
            },
            {
              "type": "sourceRegex",
              "pattern": "secret_word\\s*\\+=",
              "message": "Accumulate each letter"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Start with an empty string",
            "Your output should begin with: CAT"
          ]
        },
        {
          "id": "u2t08p03",
          "kind": "code",
          "title": "100-metre counter",
          "brief": "Start meters_run=0. While below 100, add 10 and print <code>Currently at X meters</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutLineCount",
              "value": 10,
              "message": "Print ten progress lines"
            },
            {
              "type": "stdoutContains",
              "value": "Currently at 100 meters"
            },
            {
              "type": "sourceRegex",
              "pattern": "meters_run\\s*\\+=\\s*10",
              "message": "Increase by ten"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Print ten progress lines",
            "Run a small part first, inspect the output, and then complete the rest."
          ]
        },
        {
          "id": "u2t08p04",
          "kind": "code",
          "title": "Counter plus accumulator",
          "brief": "Use while with number 1-5 and total starting at 0. Print the sum 15.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "while ",
              "message": "Use a counter-controlled while loop"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=\\s*number",
              "message": "Add the counter to total"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a counter-controlled while loop",
            "Your output should begin with: 15"
          ]
        },
        {
          "id": "u2t08p05",
          "kind": "code",
          "title": "Fix the resetting total",
          "brief": "Move the accumulator so the output becomes 60.",
          "starter": "points = [10, 20, 30]\nfor point in points:\n    total = 0\n    total += point\nprint(total)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "60"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*=\\s*0\\nfor point",
              "message": "Initialise total before the loop"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Initialise total before the loop",
            "Your output should begin with: 60"
          ]
        },
        {
          "id": "u2t08p06",
          "kind": "code",
          "title": "Sentinel simulation",
          "brief": "Loop through commands=[\"play\",\"pause\",\"quit\",\"play\"]. Print each command until quit, then stop. Expected output: play, pause.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "play\npause"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop at the sentinel"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+command\\s*==\\s*[\"\\']quit[\"\\']",
              "message": "Check for quit"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Stop at the sentinel",
            "Your output should begin with: play"
          ]
        },
        {
          "id": "u2t08p07",
          "kind": "code",
          "title": "Average challenge",
          "brief": "Use an accumulator and a counter over marks=[70,80,90]. Print <code>Total: 240</code> and <code>Average: 80.0</code>. Do not use sum() or len().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Total: 240\nAverage: 80.0"
            },
            {
              "type": "sourceNotIncludes",
              "value": "sum(",
              "message": "Build the total yourself"
            },
            {
              "type": "sourceNotIncludes",
              "value": "len(",
              "message": "Count items yourself"
            },
            {
              "type": "sourceRegex",
              "pattern": "count\\s*\\+=\\s*1",
              "message": "Increase a counter"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Build the total yourself",
            "Your output should begin with: Total: 240"
          ]
        },
        {
          "id": "u2t08p08",
          "kind": "code",
          "title": "Mini build — daily sales report",
          "brief": "Use sales=[120,80,150,50]. In one loop calculate total sales, number of days, and number of days at least 100. Print exactly: Total: 400 / Days: 4 / Target days: 2 on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Total: 400\nDays: 4\nTarget days: 2"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=\\s*sale",
              "message": "Accumulate sales"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\+=\\s*1",
              "count": 2,
              "message": "Maintain both counters"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Check the daily target"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Accumulate sales",
            "Your output should begin with: Total: 400"
          ]
        }
      ]
    },
    {
      "id": "u2cp02",
      "title": "Revision Checkpoint 2 — Loop Foundations and Patterns",
      "summary": "Review while, for, nesting, infinite-loop prevention, sentinels, counters, and accumulators.",
      "notebookLM": "",
      "notes": "<h4>Stop, mix, and remember</h4><p>Review while, for, nesting, infinite-loop prevention, sentinels, counters, and accumulators.</p>\n    <div class=\"callout\"><strong>Checkpoint rule:</strong> Try each question without opening an earlier chapter. A wrong answer is a map showing what to revise.</div>\n    <svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Four ways to prove that the idea is really yours\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Recall</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Predict</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Fix</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Build</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Four ways to prove that the idea is really yours</text></svg>\n    <div class=\"w\"><span class=\"w__k\">Tap to reveal</span><div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What if I get something wrong?</span><span class=\"w-flip__back\">Read the explanation, retry the idea, and write one small example.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Should I rush?</span><span class=\"w-flip__back\">No. Dry-run the code before pressing Run.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What unlocks next?</span><span class=\"w-flip__back\">Clear the quiz and complete every checkpoint task.</span></button></div></div>",
      "mcqs": [
        {
          "q": "Which loop is best when the number of repetitions is unknown but the user may type quit?",
          "options": [
            "Counter",
            "Sentinel-controlled",
            "Nested-only",
            "for range(1)"
          ],
          "answer": 1,
          "why": "A sentinel marks the stop event."
        },
        {
          "q": "What must change in a while loop?",
          "options": [
            "Something related to its condition",
            "The file name",
            "The Python version",
            "Every string"
          ],
          "answer": 0,
          "why": "The condition must be able to become False."
        },
        {
          "q": "How many inner runs occur for 4 outer and 2 inner steps?",
          "options": [
            "6",
            "8",
            "4",
            "2"
          ],
          "answer": 1,
          "why": "4 × 2 = 8."
        },
        {
          "q": "Why is total=0 usually outside the loop?",
          "options": [
            "To avoid resetting accumulated work",
            "Because variables are forbidden inside loops",
            "To make it a string",
            "Because print requires it"
          ],
          "answer": 0,
          "why": "Inside would erase the running total each cycle."
        },
        {
          "q": "When does a loop else run?",
          "options": [
            "After natural completion",
            "Every iteration",
            "Before the loop",
            "Only after SyntaxError"
          ],
          "answer": 0,
          "why": "It follows natural completion."
        },
        {
          "q": "What keyboard shortcut stops a runaway terminal loop?",
          "options": [
            "Ctrl + C",
            "Ctrl + P",
            "Alt + F4 only",
            "Shift + 1"
          ],
          "answer": 0,
          "why": "Ctrl + C sends an interrupt."
        },
        {
          "q": "Which loop automatically walks through letters in a word?",
          "options": [
            "for",
            "if",
            "assert",
            "else"
          ],
          "answer": 0,
          "why": "A for loop iterates through a string."
        },
        {
          "q": "What is a counter?",
          "options": [
            "A variable tracking repetitions",
            "A type of error",
            "A random module",
            "A Boolean operator"
          ],
          "answer": 0,
          "why": "It records how many cycles have happened."
        }
      ],
      "tasks": [
        {
          "id": "u2cp02p01",
          "kind": "code",
          "title": "Loop fix",
          "brief": "Repair the counter so 1-4 print once.",
          "starter": "n = 1\nwhile n <= 4:\n    print(n)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2\n3\n4"
            },
            {
              "type": "sourceRegex",
              "pattern": "n\\s*\\+=\\s*1",
              "message": "Increase n"
            }
          ],
          "level": "Revision Checkpoint — Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Increase n",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2cp02p02",
          "kind": "code",
          "title": "Nested combinations",
          "brief": "Use nested loops over [\"A\",\"B\"] and [1,2]. Print A1, A2, B1, B2.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A1\nA2\nB1\nB2"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Use nested for loops"
            }
          ],
          "level": "Revision Checkpoint — Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use nested for loops",
            "Your output should begin with: A1"
          ]
        },
        {
          "id": "u2cp02p03",
          "kind": "code",
          "title": "Accumulator repair",
          "brief": "Fix the location of total so it prints 10.",
          "starter": "for n in [1,2,3,4]:\n    total = 0\n    total += n\nprint(total)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*=\\s*0\\nfor",
              "message": "Move total before the loop"
            }
          ],
          "level": "Revision Checkpoint — Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Move total before the loop",
            "Your output should begin with: 10"
          ]
        },
        {
          "id": "u2cp02p04",
          "kind": "code",
          "title": "Sentinel search",
          "brief": "Loop over [\"red\",\"blue\",\"stop\",\"green\"], print colours until stop.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "red\nblue"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Break on stop"
            }
          ],
          "level": "Revision Checkpoint — Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Break on stop",
            "Your output should begin with: red"
          ]
        },
        {
          "id": "u2cp02p05",
          "kind": "code",
          "title": "Checkpoint mini build — score tracker",
          "brief": "Use scores=[10,20,-1,30]. Treat -1 as sentinel. Before it, count scores and add them. Print <code>Count: 2</code> and <code>Total: 30</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Count: 2\nTotal: 30"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop at -1"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=",
              "message": "Accumulate scores"
            },
            {
              "type": "sourceRegex",
              "pattern": "count\\s*\\+=\\s*1",
              "message": "Count scores"
            }
          ],
          "level": "Revision Checkpoint — Task 5",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Stop at -1",
            "Your output should begin with: Count: 2"
          ]
        }
      ]
    },
    {
      "id": "u2t09",
      "title": "Loop Control Statements — break, continue and pass",
      "summary": "Stop a loop, skip one iteration, or leave a safe placeholder.",
      "notebookLM": "",
      "notes": "\n      <h4>The remote control</h4>\n      <p>You are watching a playlist of ten videos. Usually you let it run. Sometimes a video\n      is boring so you hit <em>skip</em>. Sometimes dinner is ready so you hit <em>stop</em>.</p>\n      <p>Python has three keywords that work like that remote.</p>\n\n      <h4>break — the emergency exit</h4>\n      <p>You are lost in a maze. You find the exit door. You do not carry on wandering — you\n      walk out and never look back.</p>\n      <p><code>break</code> destroys the loop it is inside, instantly.</p>\n\n      <pre><code>for number in [1, 2, 3, 4, 5]:\n    if number == 3:\n        print(\"Found it. Leaving.\")\n        break\n    print(\"Looking at:\", number)\n\nprint(\"Finished.\")</code></pre>\n      <pre><code>Looking at: 1\nLooking at: 2\nFound it. Leaving.\nFinished.</code></pre>\n\n      <h4>continue — the skip button</h4>\n      <p>You are checking a box of apples. One is rotten. You do not throw away the whole box\n      — that would be <code>break</code>. You throw away that one apple and carry on.</p>\n      <p><code>continue</code> abandons the current round and jumps straight back to the top\n      for the next one.</p>\n\n      <pre><code>for number in [1, 2, 3, 4, 5]:\n    if number == 3:\n        print(\"Skipping 3.\")\n        continue\n    print(\"Processing:\", number)</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 195\" role=\"img\" aria-label=\"break leaves the loop completely, continue jumps back to the top for the next round.\">\n        <text x=\"168\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">break — out of the building</text>\n        <rect class=\"box box--dark\" x=\"8\" y=\"36\" width=\"320\" height=\"122\" rx=\"8\"/>\n        <text x=\"32\" y=\"66\" class=\"mono on-dark\" style=\"font-size:12px\">1  2  3  4  5</text>\n        <path class=\"arrow\" d=\"M40 82 h34\"/><path class=\"arrow\" d=\"M74 82 h34\"/>\n        <path class=\"accent\" d=\"M120 82 l-14 -8 v16 z\"/>\n        <text x=\"150\" y=\"88\" class=\"mono\" fill=\"#FF9A8E\" style=\"font-size:12px\">STOP</text>\n        <text x=\"168\" y=\"126\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">4 and 5 are never even looked at</text>\n\n        <text x=\"532\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">continue — back to the top</text>\n        <rect class=\"box box--dark\" x=\"372\" y=\"36\" width=\"320\" height=\"122\" rx=\"8\"/>\n        <text x=\"396\" y=\"66\" class=\"mono on-dark\" style=\"font-size:12px\">1  2  3  4  5</text>\n        <path class=\"good\" stroke=\"#3FD0B8\" d=\"M470 76 q22 -22 44 0\"/>\n        <text x=\"492\" y=\"104\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:11px\">skip 3</text>\n        <text x=\"532\" y=\"126\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">4 and 5 still run normally</text>\n      </svg>\n\n      <h4>pass — the \"under construction\" sign</h4>\n      <p>A town planner leaves an empty square on the map with a sign saying <em>to be\n      decided</em>. Nothing is built yet, but the space has to exist for the map to make\n      sense.</p>\n      <p>Python does not allow an empty <code>if</code> or an empty loop — it crashes.\n      <code>pass</code> is a placeholder that means <em>nothing here yet, carry on</em>.</p>\n\n      <pre><code>command = \"Quit\"\n\nif command == \"Play\":\n    print(\"Starting game...\")\nelif command == \"Pause\":\n    pass                    # I will write this tomorrow\nelse:\n    print(\"Exiting game.\")</code></pre>\n\n      <div class=\"callout\">\n        <strong>Three very different things.</strong><br>\n        <code>break</code> — kill the whole loop.<br>\n        <code>continue</code> — abandon this round only.<br>\n        <code>pass</code> — do absolutely nothing, and carry on to the next line as normal.\n      </div>\n\n      <h4>break with while True</h4>\n      <p>Now the sentinel pattern from the last topic makes sense. <code>while True:</code>\n      would run forever — <code>break</code> is what lets you out.</p>\n      <pre><code>while True:\n    guess = input(\"Password: \")\n\n    if guess == \"secret123\":\n        print(\"Access granted\")\n        break\n    print(\"Try again\")</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this print, in order?</p>\n        <pre><code>for letter in \"PYTHON\":\n    if letter == \"H\":\n        continue\n    if letter == \"O\":\n        break\n    print(letter)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">P Y T</button>\n          <button data-o=\"1\">P Y T N</button>\n          <button data-o=\"2\">P Y T H O N</button>\n        </div>\n        <p class=\"w__why\">P, Y, T print normally. H hits <code>continue</code> so it is\n        skipped. O hits <code>break</code> so the loop dies — and N is never reached at all.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which keyword says which sentence?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">\"I found it — stop the whole search!\"</button>\n            <button data-pair=\"b\">\"Skip this one, move to the next.\"</button>\n            <button data-pair=\"c\">\"Nothing here yet, but do not crash.\"</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\"><code>pass</code></button>\n            <button data-pair=\"a\"><code>break</code></button>\n            <button data-pair=\"b\"><code>continue</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>Correct.</strong> A useful memory hook: <em>break</em> breaks\n        the loop, <em>continue</em> continues to the next round, <em>pass</em> passes right\n        over.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>One more thing about break.</strong> If a loop is stopped by\n        <code>break</code>, its <code>else</code> block from Topic 7 does <em>not</em> run.\n        That is exactly the search-party idea: you only say \"I checked everywhere\" when nothing\n        interrupted you.\n      </div>\n    \n      <h4>The loop remote control</h4>\n      <p>These three words do very different things. Say their meanings aloud before using them:</p>\n      <ul><li><code>break</code>: leave the whole loop.</li><li><code>continue</code>: skip only this iteration.</li><li><code>pass</code>: do nothing; keep the placeholder valid.</li></ul>\n      <pre><code>for number in range(1, 7):\n    if number == 2:\n        continue\n    if number == 5:\n        break\n    print(number)\n# prints 1, 3, 4</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 205\" role=\"img\" aria-label=\"Break exits, continue skips, and pass stays in place.\">\n        <path class=\"arrow\" d=\"M30 102 H670\"/>\n        <circle cx=\"150\" cy=\"102\" r=\"55\" class=\"box\"/><text x=\"150\" y=\"98\" text-anchor=\"middle\" class=\"lbl\">CONTINUE</text><text x=\"150\" y=\"120\" text-anchor=\"middle\" class=\"mono\">skip one</text>\n        <circle cx=\"350\" cy=\"102\" r=\"55\" class=\"box\"/><text x=\"350\" y=\"98\" text-anchor=\"middle\" class=\"lbl\">PASS</text><text x=\"350\" y=\"120\" text-anchor=\"middle\" class=\"mono\">do nothing</text>\n        <circle cx=\"550\" cy=\"102\" r=\"55\" class=\"box box--dark\"/><text x=\"550\" y=\"98\" text-anchor=\"middle\" class=\"on-dark\">BREAK</text><text x=\"550\" y=\"120\" text-anchor=\"middle\" class=\"mono on-dark\">exit loop</text>\n        <path class=\"accent\" d=\"M615 85 l45 -28 v56 z\"><animate attributeName=\"opacity\" values=\".25;1;.25\" dur=\"1.2s\" repeatCount=\"indefinite\"/></path>\n      </svg>\n\n      <div class=\"w w-match\"><span class=\"w__k\">Remote-control game</span><p class=\"w__q\">Match each intention to its keyword.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"a\">The target was found. End the search.</button><button data-pair=\"b\">Ignore this damaged item only.</button><button data-pair=\"c\">Leave an unfinished block valid for now.</button></div><div class=\"w-match__col\"><button data-pair=\"c\"><code>pass</code></button><button data-pair=\"a\"><code>break</code></button><button data-pair=\"b\"><code>continue</code></button></div></div><p class=\"w__why\">Break exits, continue skips, and pass is an empty placeholder.</p></div>\n",
      "mcqs": [
        {
          "q": "What does break do?",
          "options": [
            "Skips one item",
            "Stops the entire nearest loop",
            "Does nothing",
            "Returns a function value"
          ],
          "answer": 1,
          "why": "break exits the loop immediately."
        },
        {
          "q": "What does continue do?",
          "options": [
            "Stops the program",
            "Skips the rest of the current iteration",
            "Creates a placeholder",
            "Repeats the same item"
          ],
          "answer": 1,
          "why": "It jumps to the next loop cycle."
        },
        {
          "q": "Why use pass?",
          "options": [
            "To reserve an empty block without an error",
            "To stop a loop",
            "To import data",
            "To compare values"
          ],
          "answer": 0,
          "why": "pass is a valid no-operation placeholder."
        },
        {
          "q": "What happens to loop else when break runs?",
          "options": [
            "It always runs",
            "It is skipped",
            "It becomes an if",
            "It runs twice"
          ],
          "answer": 1,
          "why": "Loop else means natural completion, so break prevents it."
        }
      ],
      "tasks": [
        {
          "id": "u2t09p01",
          "kind": "code",
          "title": "Fire alarm break",
          "brief": "Loop 1 through 10. Print numbers below 7; at 7 print <code>Fire alarm!</code> and break.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2\n3\n4\n5\n6\nFire alarm!"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Use break at 7"
            },
            {
              "type": "sourceIncludes",
              "value": "range(1, 11)",
              "message": "Use range 1 to 10"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use break at 7",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t09p02",
          "kind": "code",
          "title": "Allergy continue",
          "brief": "Loop through Apple, Peanut, Banana, Orange. For Peanut print <code>Allergic! Skipping!</code>; otherwise print <code>Eating FOOD</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Eating Apple\nAllergic! Skipping!\nEating Banana\nEating Orange"
            },
            {
              "type": "sourceIncludes",
              "value": "continue",
              "message": "Skip Peanut with continue"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Skip Peanut with continue",
            "Your output should begin with: Eating Apple"
          ]
        },
        {
          "id": "u2t09p03",
          "kind": "code",
          "title": "Lazy placeholder",
          "brief": "Write an if statement for 10 > 5 with pass inside. After it, print <code>Program continues</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Program continues"
            },
            {
              "type": "sourceIncludes",
              "value": "pass",
              "message": "Use pass in the empty branch"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use pass in the empty branch",
            "Your output should begin with: Program continues"
          ]
        },
        {
          "id": "u2t09p04",
          "kind": "code",
          "title": "Even number printer",
          "brief": "Loop 1-10. Continue when a number is odd; print only even numbers.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2\n4\n6\n8\n10"
            },
            {
              "type": "sourceIncludes",
              "value": "continue",
              "message": "Skip odd numbers"
            },
            {
              "type": "sourceIncludes",
              "value": "% 2",
              "message": "Use modulus"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Skip odd numbers",
            "Your output should begin with: 2"
          ]
        },
        {
          "id": "u2t09p05",
          "kind": "code",
          "title": "Fix break position",
          "brief": "The output should be 1 and 2 only. Repair the break logic.",
          "starter": "for number in [1,2,3,4]:\n    print(number)\n    break\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+number\\s*==\\s*3\\s*:\\n\\s{8}break",
              "message": "Break only when number is 3"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Break only when number is 3",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t09p06",
          "kind": "code",
          "title": "Fix continue position",
          "brief": "The code should print 1,2,4,5. Repair it.",
          "starter": "for number in range(1, 6):\n    continue\n    if number == 3:\n        print(number)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2\n4\n5"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+number\\s*==\\s*3\\s*:\\n\\s{8}continue",
              "message": "Continue only for 3"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Continue only for 3",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t09p07",
          "kind": "code",
          "title": "Search challenge",
          "brief": "Search [4,8,15,16,23,42] for the first number above 20. Print <code>Found: 23</code> and stop.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Found: 23"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop after the first match"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+number\\s*>\\s*20",
              "message": "Check for above 20"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Stop after the first match",
            "Your output should begin with: Found: 23"
          ]
        },
        {
          "id": "u2t09p08",
          "kind": "code",
          "title": "Mini build — clean data processor",
          "brief": "Loop through data=[10,None,-5,20,0,30]. Use continue to skip None and negatives, break at 0, and print accepted positive values. Output: 10 then 20.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10\n20"
            },
            {
              "type": "sourceIncludes",
              "value": "continue",
              "message": "Skip invalid entries"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop at zero"
            },
            {
              "type": "sourceIncludes",
              "value": "is None",
              "message": "Check None safely"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Skip invalid entries",
            "Your output should begin with: 10"
          ]
        }
      ]
    },
    {
      "id": "u2t10",
      "title": "Loop Control Statements — assert and Introduction to return",
      "summary": "Catch impossible states and understand how functions send answers back.",
      "notebookLM": "",
      "notes": "\n      <h4>assert — the bouncer's checklist</h4>\n      <p>A bouncer looks at an ID and says: <em>\"I claim this person is over 18.\"</em> If he is\n      right, everybody carries on. If he is wrong, everything stops immediately.</p>\n      <p><code>assert</code> is a debugging tool. It tells Python: <em>I am certain this is\n      true. Check it. If it is false, crash right now.</em></p>\n\n      <pre><code>wallet = -50\n\nassert wallet >= 0, \"Wallet cannot be negative!\"\n\nprint(\"Buying item...\")     # never reached</code></pre>\n\n      <p>The message after the comma is optional, but always write one. Compare:</p>\n      <table>\n        <tr><th>Without a message</th><th>With a message</th></tr>\n        <tr><td><code>AssertionError</code></td><td><code>AssertionError: Wallet cannot be negative!</code></td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>Why crash on purpose?</strong> Because a program that stops at the exact moment\n        something goes wrong is far easier to fix than one that limps on and produces a\n        nonsense answer three hundred lines later. Fail loudly, fail early.\n      </div>\n\n      <h4>return — the delivery driver</h4>\n      <p>You phone a pizza shop and place an order. They do the work in their kitchen, and a\n      driver <em>returns</em> the finished pizza to your hands.</p>\n      <p>When you build your own tools — <strong>functions</strong>, which you will study\n      properly in Unit 4 — <code>return</code> is how the tool hands back its answer.</p>\n\n      <pre><code>def add_ten(number):\n    answer = number + 10\n    return answer\n\nfinal_score = add_ten(50)\nprint(final_score)        # 60</code></pre>\n\n      <div class=\"callout\">\n        <strong>return kills the function instantly.</strong> The moment Python reaches it, the\n        function stops dead and hands back its value — exactly like <code>break</code>, but for\n        a function instead of a loop. Any lines after it never run.\n      </div>\n\n      <h4>The cheat sheet</h4>\n      <table>\n        <tr><th>Keyword</th><th>Nickname</th><th>Works inside</th><th>What it does</th></tr>\n        <tr><td><code>pass</code></td><td>The ghost</td><td>anywhere</td><td>Nothing at all. A placeholder.</td></tr>\n        <tr><td><code>continue</code></td><td>The skip button</td><td>loops only</td><td>Abandons this round, starts the next.</td></tr>\n        <tr><td><code>break</code></td><td>The emergency exit</td><td>loops only</td><td>Kills the whole loop.</td></tr>\n        <tr><td><code>return</code></td><td>The delivery driver</td><td>functions only</td><td>Hands back a value and kills the function.</td></tr>\n      </table>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 175\" role=\"img\" aria-label=\"pass does nothing, continue skips a round, break ends the loop, return ends a function.\">\n        <rect class=\"box\" x=\"8\" y=\"34\" width=\"164\" height=\"116\" rx=\"8\"/>\n        <text x=\"90\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:13px\">pass</text>\n        <text x=\"90\" y=\"90\" text-anchor=\"middle\" style=\"font-size:11.5px\">does nothing</text>\n        <text x=\"90\" y=\"112\" text-anchor=\"middle\" style=\"font-size:11.5px\">code carries on</text>\n        <text x=\"90\" y=\"136\" text-anchor=\"middle\" class=\"lbl\">anywhere</text>\n\n        <rect class=\"box\" x=\"180\" y=\"34\" width=\"164\" height=\"116\" rx=\"8\"/>\n        <text x=\"262\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:13px\">continue</text>\n        <text x=\"262\" y=\"90\" text-anchor=\"middle\" style=\"font-size:11.5px\">skips this round</text>\n        <text x=\"262\" y=\"112\" text-anchor=\"middle\" style=\"font-size:11.5px\">loop keeps going</text>\n        <text x=\"262\" y=\"136\" text-anchor=\"middle\" class=\"lbl\">loops only</text>\n\n        <rect class=\"box\" x=\"352\" y=\"34\" width=\"164\" height=\"116\" rx=\"8\"/>\n        <text x=\"434\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:13px\">break</text>\n        <text x=\"434\" y=\"90\" text-anchor=\"middle\" style=\"font-size:11.5px\">kills the loop</text>\n        <text x=\"434\" y=\"112\" text-anchor=\"middle\" style=\"font-size:11.5px\">moves past it</text>\n        <text x=\"434\" y=\"136\" text-anchor=\"middle\" class=\"lbl\">loops only</text>\n\n        <rect class=\"box box--dark\" x=\"524\" y=\"34\" width=\"168\" height=\"116\" rx=\"8\"/>\n        <text x=\"608\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:13px\">return</text>\n        <text x=\"608\" y=\"90\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:11.5px\">hands back a value</text>\n        <text x=\"608\" y=\"112\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:11.5px\">kills the function</text>\n        <text x=\"608\" y=\"136\" text-anchor=\"middle\" class=\"lbl\">functions only</text>\n      </svg>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this print?</p>\n        <pre><code>def check(n):\n    return n * 2\n    print(\"Done!\")\n\nprint(check(5))</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">10 then Done!</button>\n          <button data-o=\"1\">10 only</button>\n          <button data-o=\"2\">Done! only</button>\n        </div>\n        <p class=\"w__why\"><code>return</code> kills the function on the spot. The\n        <code>print(\"Done!\")</code> line sits after it and can never run — it is\n        <em>unreachable code</em>. Some editors will grey it out to warn you.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which keyword would you reach for?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">\"This should never be negative — stop if it is.\"</button>\n            <button data-pair=\"b\">\"Hand this answer back to whoever called me.\"</button>\n            <button data-pair=\"c\">\"Get me out of this loop right now.\"</button>\n            <button data-pair=\"d\">\"I will fill this in tomorrow.\"</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\"><code>break</code></button>\n            <button data-pair=\"a\"><code>assert</code></button>\n            <button data-pair=\"d\"><code>pass</code></button>\n            <button data-pair=\"b\"><code>return</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> These four little words appear in almost\n        every real Python program you will ever read.</p>\n      </div>\n    \n      <h4>Assertions are promises written inside the program</h4>\n      <p>An assertion says, “At this point, this condition must be True.” If it is False, Python stops\n      with an <code>AssertionError</code>. Use assertions to find programmer mistakes, not to replace\n      normal user-input checks.</p>\n      <pre><code>items_in_cart = 3\nassert items_in_cart >= 0, \"Cart count cannot be negative\"\nprint(\"Cart is valid\")</code></pre>\n\n      <h4>Return sends a result back to the caller</h4>\n      <pre><code>def double(number):\n    answer = number * 2\n    return answer\n\nresult = double(6)\nprint(result)      # 12</code></pre>\n      <p>The function stops as soon as it reaches <code>return</code>. Any statements after that return\n      inside the same path are not executed.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 195\" role=\"img\" aria-label=\"A function receives an input and returns an output.\">\n        <rect class=\"box\" x=\"25\" y=\"66\" width=\"145\" height=\"60\" rx=\"10\"/><text x=\"97\" y=\"102\" text-anchor=\"middle\" class=\"mono\">input: 6</text>\n        <path class=\"arrow\" d=\"M170 96 H260\"/>\n        <rect class=\"box box--dark\" x=\"260\" y=\"40\" width=\"180\" height=\"112\" rx=\"14\"/><text x=\"350\" y=\"78\" text-anchor=\"middle\" class=\"on-dark\">double()</text><text x=\"350\" y=\"108\" text-anchor=\"middle\" class=\"mono on-dark\">6 × 2</text>\n        <path class=\"arrow\" d=\"M440 96 H530\"/><circle cx=\"480\" cy=\"96\" r=\"7\" class=\"accent\"><animate attributeName=\"cx\" values=\"448;522;448\" dur=\"1.6s\" repeatCount=\"indefinite\"/></circle>\n        <rect class=\"box\" x=\"530\" y=\"66\" width=\"145\" height=\"60\" rx=\"10\"/><text x=\"602\" y=\"102\" text-anchor=\"middle\" class=\"mono\">return: 12</text>\n      </svg>\n\n      <div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Function delivery game</span><p class=\"w__q\">What is printed?</p><pre><code>def label(score):\n    return \"Pass\" if score &gt;= 50 else \"Retry\"\nprint(label(72))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">72</button><button data-o=\"1\">Pass</button><button data-o=\"2\">Retry</button></div><p class=\"w__why\">The condition is True, so the function returns the text Pass.</p></div>\n",
      "mcqs": [
        {
          "q": "What is assert mainly used for?",
          "options": [
            "Debugging assumptions",
            "Repeating a loop",
            "Formatting text",
            "Generating random values"
          ],
          "answer": 0,
          "why": "assert catches impossible or invalid program states during development."
        },
        {
          "q": "What happens when an assert condition is False?",
          "options": [
            "Nothing",
            "AssertionError is raised",
            "The value becomes True",
            "The loop continues"
          ],
          "answer": 1,
          "why": "A failed assertion stops that run with an error."
        },
        {
          "q": "Where is return used?",
          "options": [
            "Inside a custom function",
            "Only in lists",
            "At the top of every file",
            "Only in while loops"
          ],
          "answer": 0,
          "why": "return belongs to a function body."
        },
        {
          "q": "What happens after return executes?",
          "options": [
            "The function continues",
            "The function ends and sends back a value",
            "The nearest loop restarts",
            "Python imports a module"
          ],
          "answer": 1,
          "why": "return ends the function immediately."
        }
      ],
      "tasks": [
        {
          "id": "u2t10p01",
          "kind": "code",
          "title": "Safe assertion",
          "brief": "Set age=20. Assert age >= 18 with message <code>Not old enough</code>, then print <code>Age accepted</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Age accepted"
            },
            {
              "type": "sourceIncludes",
              "value": "assert",
              "message": "Use assert"
            },
            {
              "type": "sourceIncludes",
              "value": "Not old enough",
              "message": "Include the custom message"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use assert",
            "Your output should begin with: Age accepted"
          ]
        },
        {
          "id": "u2t10p02",
          "kind": "code",
          "title": "Silent pass",
          "brief": "Loop through [1,2,3]. If number is 2, use pass; otherwise print the number.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n3"
            },
            {
              "type": "sourceIncludes",
              "value": "pass",
              "message": "Use pass in the number-2 branch"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Print in the else branch"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use pass in the number-2 branch",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t10p03",
          "kind": "code",
          "title": "First return",
          "brief": "Create function <code>add_ten(number)</code> that returns number + 10. Print add_ten(50).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "60"
            },
            {
              "type": "sourceRegex",
              "pattern": "def\\s+add_ten\\s*\\(",
              "message": "Define add_ten"
            },
            {
              "type": "sourceIncludes",
              "value": "return",
              "message": "Return the answer"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Define add_ten",
            "Your output should begin with: 60"
          ]
        },
        {
          "id": "u2t10p04",
          "kind": "code",
          "title": "Return stops the function",
          "brief": "Create function <code>status()</code> that returns <code>Done</code>. Put a print after return inside the function; prove it never appears by printing only the returned value.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Done"
            },
            {
              "type": "sourceIncludes",
              "value": "return",
              "message": "Return before the unreachable print"
            },
            {
              "type": "sourceRegex",
              "pattern": "return\\s+[\"\\']Done[\"\\']\\n\\s+print",
              "message": "Place a print after return"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Return before the unreachable print",
            "Your output should begin with: Done"
          ]
        },
        {
          "id": "u2t10p05",
          "kind": "code",
          "title": "Fix the failed assertion",
          "brief": "The final output should be <code>Balance accepted</code>. Repair the starting balance, not the assertion.",
          "starter": "wallet_balance = -50\nassert wallet_balance >= 0, \"Balance cannot be negative\"\nprint(\"Balance accepted\")\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Balance accepted"
            },
            {
              "type": "sourceRegex",
              "pattern": "wallet_balance\\s*=\\s*(?:0|[1-9]\\d*)",
              "message": "Use a non-negative balance"
            },
            {
              "type": "sourceIncludes",
              "value": "assert wallet_balance >= 0",
              "message": "Keep the assertion"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a non-negative balance",
            "Your output should begin with: Balance accepted"
          ]
        },
        {
          "id": "u2t10p06",
          "kind": "code",
          "title": "Fix missing return",
          "brief": "Repair the function so it prints 12.",
          "starter": "def double(number):\n    answer = number * 2\n\nprint(double(6))\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "12"
            },
            {
              "type": "sourceRegex",
              "pattern": "return\\s+answer",
              "message": "Return answer from the function"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Return answer from the function",
            "Your output should begin with: 12"
          ]
        },
        {
          "id": "u2t10p07",
          "kind": "code",
          "title": "Control-word comparison",
          "brief": "Loop through PYTHON. Continue at H, break at O, print every other letter.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "P\nY\nT"
            },
            {
              "type": "sourceIncludes",
              "value": "continue",
              "message": "Skip H"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop at O"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Skip H",
            "Your output should begin with: P"
          ]
        },
        {
          "id": "u2t10p08",
          "kind": "code",
          "title": "Mini build — validated discount function",
          "brief": "Define <code>discounted(price)</code>. Assert price >= 0, then return price * 0.9. Print discounted(200) as 180.0.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "180.0"
            },
            {
              "type": "sourceRegex",
              "pattern": "def\\s+discounted\\s*\\(",
              "message": "Define discounted"
            },
            {
              "type": "sourceIncludes",
              "value": "assert price >= 0",
              "message": "Validate price"
            },
            {
              "type": "sourceRegex",
              "pattern": "return\\s+price\\s*\\*\\s*0\\.9",
              "message": "Return the discounted value"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Define discounted",
            "Your output should begin with: 180.0"
          ]
        }
      ]
    },
    {
      "id": "u2t11",
      "title": "Understanding range()",
      "summary": "Generate efficient number sequences with start, stop, and step.",
      "notebookLM": "",
      "notes": "\n      <h4>The ticket machine</h4>\n      <p>At a bank you pull a ticket from a little machine. It does not hand you a printed list\n      of a hundred numbers — it just gives you the next one whenever you ask.</p>\n      <p><code>range()</code> is that machine. It produces a sequence of numbers, and it is\n      used with <code>for</code> loops more than anything else in Python.</p>\n\n      <h4>One number — the stop point</h4>\n      <p>Give <code>range()</code> a single number and Python assumes it is where to\n      <strong>stop</strong>. It starts at <strong>0</strong> and stops <em>just before</em>\n      your number.</p>\n      <pre><code>for n in range(5):\n    print(n)\n\n# 0\n# 1\n# 2\n# 3\n# 4      ← five numbers, but 5 itself never appears</code></pre>\n\n      <div class=\"callout\">\n        <strong>The number you give is never included.</strong> <code>range(5)</code> gives you\n        five numbers: 0, 1, 2, 3, 4. This catches everybody at first. Say it out loud: \"stop\n        <em>before</em> 5\".\n      </div>\n\n      <h4>Two numbers — start and stop</h4>\n      <pre><code>for n in range(10, 15):\n    print(n)\n\n# 10, 11, 12, 13, 14</code></pre>\n\n      <h4>Three numbers — start, stop and step</h4>\n      <p>The third number is how far to jump each time.</p>\n      <pre><code>for n in range(0, 10, 2):\n    print(n)\n\n# 0, 2, 4, 6, 8</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 165\" role=\"img\" aria-label=\"range takes start, stop and step, and never includes the stop number.\">\n        <text class=\"mono\" x=\"180\" y=\"52\" style=\"font-size:24px\">range(0, 10, 2)</text>\n\n        <path class=\"good\" d=\"M254 62 v12 H274 v-12\"/>\n        <text x=\"264\" y=\"94\" text-anchor=\"middle\" class=\"lbl\">start</text>\n        <text x=\"264\" y=\"114\" text-anchor=\"middle\" style=\"font-size:11.5px\">where it begins</text>\n\n        <path class=\"good\" stroke=\"#D67F19\" d=\"M296 62 v26 H330 v-26\"/>\n        <text x=\"384\" y=\"106\" class=\"lbl\">stop</text>\n        <text x=\"384\" y=\"126\" style=\"font-size:11.5px\">it stops just BEFORE this</text>\n\n        <path class=\"good\" d=\"M354 62 v40 H374 v-40\"/>\n        <text x=\"470\" y=\"146\" class=\"lbl\">step — how far to jump</text>\n\n        <rect class=\"box box--dark\" x=\"480\" y=\"34\" width=\"212\" height=\"52\" rx=\"7\"/>\n        <text x=\"586\" y=\"66\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:14px\">0 2 4 6 8</text>\n      </svg>\n\n      <h4>Counting backwards</h4>\n      <p>A negative step counts down. Two rules must both be obeyed:</p>\n      <ol>\n        <li>The start must be <strong>bigger</strong> than the stop.</li>\n        <li>The step must be <strong>negative</strong>.</li>\n      </ol>\n      <pre><code>for n in range(5, 0, -1):\n    print(n)\n\n# 5, 4, 3, 2, 1</code></pre>\n\n      <div class=\"callout\">\n        <strong>If you get nothing at all</strong>, you have almost certainly broken one of\n        those two rules. <code>range(5, 0)</code> with no negative step produces an empty\n        sequence — no error, just silence, which is confusing the first time.\n      </div>\n\n      <h4>A recipe, not a cake</h4>\n      <p>A list <code>[0, 1, 2, 3, 4]</code> is a baked cake sitting on the counter — it takes\n      up real space in memory.</p>\n      <p>A <code>range(5)</code> is just the <em>recipe</em>. It stores the rules (start, stop,\n      step) and makes each number only when asked. <code>range(1000000)</code> takes almost no\n      memory at all.</p>\n\n      <pre><code>x = range(5)\nprint(type(x))          # &lt;class 'range'&gt;\nprint(x)                # range(0, 5)   ← not the numbers!\n\nmy_list = list(range(5))\nprint(my_list)          # [0, 1, 2, 3, 4]</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">How many numbers does this print, and what is the last one?</p>\n        <pre><code>for n in range(3, 8):\n    print(n)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">5 numbers, last is 8</button>\n          <button data-o=\"1\">6 numbers, last is 8</button>\n          <button data-o=\"2\">5 numbers, last is 7</button>\n        </div>\n        <p class=\"w__why\">Starts at 3, stops <em>before</em> 8. So 3, 4, 5, 6, 7 — five\n        numbers, ending at 7. A quick trick: the count is always stop minus start.</p>\n      </div>\n\n      <div class=\"w w-spot\">\n        <span class=\"w__k\">Spot the mistake</span>\n        <p class=\"w__q\">This is meant to count down from 10 to 1, but prints nothing. Tap the problem.</p>\n        <div class=\"w-spot__line\">\n          <button>range(10,</button><button>0,</button><button data-bad>1)</button>\n        </div>\n        <p class=\"w__why\">The step must be <code>-1</code> to count down. With a positive step\n        and a start bigger than the stop, Python produces an empty sequence and the loop simply\n        never runs — no error, no output.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which range gives which numbers?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\"><code>range(4)</code></button>\n            <button data-pair=\"b\"><code>range(1, 5)</code></button>\n            <button data-pair=\"c\"><code>range(1, 10, 2)</code></button>\n            <button data-pair=\"d\"><code>range(3, 0, -1)</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\">3, 2, 1</button>\n            <button data-pair=\"a\">0, 1, 2, 3</button>\n            <button data-pair=\"c\">1, 3, 5, 7, 9</button>\n            <button data-pair=\"b\">1, 2, 3, 4</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> In every single one, the stop number itself\n        is missing from the output. That is the rule that never changes.</p>\n      </div>\n    \n      <h4>Range is a number recipe</h4>\n      <p>Read a three-part range as <strong>start, stop-before, step</strong>. The stop value is not\n      included. This one rule explains most beginner range mistakes.</p>\n      <pre><code>list(range(2, 11, 2))\n# [2, 4, 6, 8, 10]</code></pre>\n      <p>The sequence starts at 2. It adds 2 each time. The next value after 10 would be 12, which has\n      already crossed the stop value 11, so the sequence ends.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 180\" role=\"img\" aria-label=\"Number line showing range from 2 to before 11 in steps of 2.\">\n        <path class=\"arrow\" d=\"M45 105 H655\"/>\n        <g class=\"mono\"><text x=\"90\" y=\"140\">2</text><text x=\"195\" y=\"140\">4</text><text x=\"300\" y=\"140\">6</text><text x=\"405\" y=\"140\">8</text><text x=\"505\" y=\"140\">10</text><text x=\"610\" y=\"140\">11 stop</text></g>\n        <g class=\"accent\"><circle cx=\"95\" cy=\"105\" r=\"9\"/><circle cx=\"200\" cy=\"105\" r=\"9\"/><circle cx=\"305\" cy=\"105\" r=\"9\"/><circle cx=\"410\" cy=\"105\" r=\"9\"/><circle cx=\"515\" cy=\"105\" r=\"9\"/></g>\n        <circle cy=\"105\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><animate attributeName=\"cx\" values=\"95;200;305;410;515;95\" dur=\"4s\" repeatCount=\"indefinite\"/></circle>\n        <line x1=\"610\" y1=\"80\" x2=\"610\" y2=\"125\" stroke=\"currentColor\" stroke-dasharray=\"5 5\"/>\n      </svg>\n\n      <div class=\"callout\"><strong>Reverse range checklist:</strong> the start must be larger than the stop, and the step must be negative.</div>\n      <div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Range prediction</span><p class=\"w__q\">What is the last number printed?</p><pre><code>for n in range(10, 2, -2):\n    print(n)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">2</button><button data-o=\"1\">4</button><button data-o=\"2\">4</button></div><p class=\"w__why\">The sequence is 10, 8, 6, 4. The stop value 2 is excluded.</p></div>\n",
      "mcqs": [
        {
          "q": "What does range(10) generate?",
          "options": [
            "1 through 10",
            "0 through 10",
            "0 through 9",
            "10 down to 0"
          ],
          "answer": 2,
          "why": "One-argument range starts at 0 and excludes 10."
        },
        {
          "q": "In range(2,20,2), what is the third number?",
          "options": [
            "Start",
            "Stop",
            "Step",
            "Number of loops after stopping"
          ],
          "answer": 2,
          "why": "The third argument controls the jump."
        },
        {
          "q": "Why is a range memory-efficient?",
          "options": [
            "It stores only the generation rule",
            "It deletes numbers immediately from Python",
            "It works only with text",
            "It is always empty"
          ],
          "answer": 0,
          "why": "A range produces values when requested."
        },
        {
          "q": "Which counts 5 down to 1?",
          "options": [
            "range(5,1)",
            "range(5,0,-1)",
            "range(1,5,-1)",
            "range(5,-1,1)"
          ],
          "answer": 1,
          "why": "Reverse counting needs a negative step and an excluded stop of 0."
        }
      ],
      "tasks": [
        {
          "id": "u2t11p01",
          "kind": "code",
          "title": "Basic counter",
          "brief": "Use one-argument range to print 0 through 8.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0\n1\n2\n3\n4\n5\n6\n7\n8"
            },
            {
              "type": "sourceIncludes",
              "value": "range(9)",
              "message": "Use range(9)"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use range(9)",
            "Your output should begin with: 0"
          ]
        },
        {
          "id": "u2t11p02",
          "kind": "code",
          "title": "Teen years",
          "brief": "Use two-argument range to print 13 through 19 inclusive.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "13\n14\n15\n16\n17\n18\n19"
            },
            {
              "type": "sourceIncludes",
              "value": "range(13, 20)",
              "message": "Stop before 20"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Stop before 20",
            "Your output should begin with: 13"
          ]
        },
        {
          "id": "u2t11p03",
          "kind": "code",
          "title": "Odd numbers",
          "brief": "Use three-argument range to print 1,3,5,7,9.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n3\n5\n7\n9"
            },
            {
              "type": "sourceRegex",
              "pattern": "range\\(1\\s*,\\s*10\\s*,\\s*2\\)",
              "message": "Use start 1, stop 10, step 2"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use start 1, stop 10, step 2",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t11p04",
          "kind": "code",
          "title": "Blastoff",
          "brief": "Use range to count 10 down to 1, then print Blastoff!",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nBlastoff!"
            },
            {
              "type": "sourceRegex",
              "pattern": "range\\(10\\s*,\\s*0\\s*,\\s*-1\\)",
              "message": "Use a negative step"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a negative step",
            "Your output should begin with: 10"
          ]
        },
        {
          "id": "u2t11p05",
          "kind": "code",
          "title": "Fix the missing final number",
          "brief": "The program should print 1 through 5. Fix the stop value.",
          "starter": "for number in range(1, 5):\n    print(number)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2\n3\n4\n5"
            },
            {
              "type": "sourceRegex",
              "pattern": "range\\(1\\s*,\\s*6\\)",
              "message": "Remember that the stop value is excluded"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Remember that the stop value is excluded",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t11p06",
          "kind": "code",
          "title": "Force a physical list",
          "brief": "Create <code>hundred_list</code> as a list containing 1 through 100. Print its first value, last value, and length.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n100\n100"
            },
            {
              "type": "sourceRegex",
              "pattern": "hundred_list\\s*=\\s*list\\(range\\(1\\s*,\\s*101\\)\\)",
              "message": "Convert range(1, 101) with list()"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Print the list length"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Convert range(1, 101) with list()",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t11p07",
          "kind": "code",
          "title": "Step challenge",
          "brief": "Print 20,15,10,5 using one range call.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20\n15\n10\n5"
            },
            {
              "type": "sourceRegex",
              "pattern": "range\\(20\\s*,\\s*0\\s*,\\s*-5\\)",
              "message": "Count down by 5"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Count down by 5",
            "Your output should begin with: 20"
          ]
        },
        {
          "id": "u2t11p08",
          "kind": "code",
          "title": "Mini build — timetable slots",
          "brief": "Use range to print exactly <code>Slot 1: 9:00</code>, <code>Slot 2: 10:00</code>, <code>Slot 3: 11:00</code>, <code>Slot 4: 12:00</code>. Do not use a list of times.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Slot 1: 9:00\nSlot 2: 10:00\nSlot 3: 11:00\nSlot 4: 12:00"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "range\\(",
              "count": 1,
              "message": "Generate the hours with range"
            },
            {
              "type": "sourceNotIncludes",
              "value": "[9",
              "message": "Do not hard-code a list of hours"
            },
            {
              "type": "sourceRegex",
              "pattern": "enumerate|slot\\s*=\\s*1",
              "message": "Track the slot number"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Generate the hours with range",
            "Your output should begin with: Slot 1: 9:00"
          ]
        }
      ]
    },
    {
      "id": "u2t12",
      "title": "Iterators — iter(), next() and StopIteration",
      "summary": "See the hidden reader used by every for loop.",
      "notebookLM": "",
      "notes": "\n      <h4>The sweet dispenser</h4>\n      <p>Picture one of those plastic sweet dispensers where you tip the head back and one\n      sweet pops out.</p>\n      <ul>\n        <li>The <strong>tube full of sweets</strong> is the data. It just sits there.</li>\n        <li>The <strong>spring inside</strong> keeps track of which sweet is next.</li>\n        <li>Every tip of the head hands you exactly <strong>one</strong> sweet.</li>\n        <li>When it is empty, tipping the head does nothing.</li>\n      </ul>\n      <p>That is precisely how Python reads through lists, strings and ranges.</p>\n\n      <h4>Iterable — the loaded tube</h4>\n      <p>An <strong>iterable</strong> is any collection that can be read one item at a time.\n      Lists, strings, tuples, dictionaries and ranges are all iterables.</p>\n      <p>Simple test: if you can put it in a <code>for</code> loop, it is an iterable.</p>\n\n      <h4>Iterator — the spring</h4>\n      <p>An <strong>iterator</strong> is the active mechanism that points at the data and\n      remembers which item is next.</p>\n\n      <h4>iter() loads it, next() pulls from it</h4>\n      <pre><code>my_list = [\"Apple\", \"Banana\", \"Cherry\"]\n\nmy_iter = iter(my_list)          # load the spring\n\nprint(next(my_iter))             # Apple\nprint(next(my_iter))             # Banana\nprint(next(my_iter))             # Cherry</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"iter turns a list into an iterator, and each call to next hands back one item until it is empty.\">\n        <text x=\"110\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">the iterable</text>\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"204\" height=\"106\" rx=\"8\"/>\n        <text x=\"110\" y=\"72\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">\"Apple\"</text>\n        <text x=\"110\" y=\"96\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">\"Banana\"</text>\n        <text x=\"110\" y=\"120\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">\"Cherry\"</text>\n\n        <path class=\"arrow\" d=\"M222 90 h44\"/><path class=\"accent\" d=\"M276 90 l-13 -7 v14 z\"/>\n        <text x=\"244\" y=\"76\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:11px\">iter()</text>\n\n        <text x=\"384\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">the iterator</text>\n        <rect class=\"box box--dark\" x=\"284\" y=\"38\" width=\"200\" height=\"106\" rx=\"8\"/>\n        <text x=\"384\" y=\"82\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">remembers</text>\n        <text x=\"384\" y=\"106\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">which one is next</text>\n\n        <path class=\"arrow\" d=\"M494 90 h44\"/><path class=\"accent\" d=\"M548 90 l-13 -7 v14 z\"/>\n        <text x=\"516\" y=\"76\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:11px\">next()</text>\n\n        <rect class=\"box\" x=\"556\" y=\"38\" width=\"136\" height=\"106\" rx=\"8\"/>\n        <text x=\"624\" y=\"82\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:13px\">one item</text>\n        <text x=\"624\" y=\"106\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:13px\">at a time</text>\n\n        <text x=\"350\" y=\"176\" text-anchor=\"middle\" style=\"font-size:12px\">Ask once too often and Python raises StopIteration</text>\n      </svg>\n\n      <h4>StopIteration — the empty dispenser</h4>\n      <p>Tip an empty dispenser and you get air. Ask an empty iterator for another item and\n      Python raises a special error called <strong>StopIteration</strong>.</p>\n\n      <pre><code>my_iter = iter([\"Apple\"])\n\nprint(next(my_iter))    # Apple\nprint(next(my_iter))    # StopIteration — crash!</code></pre>\n\n      <h4>The secret of the for loop</h4>\n      <div class=\"callout\">\n        <strong>This is the whole reason we learn this.</strong> A <code>for</code> loop is not\n        magic. Behind the scenes Python calls <code>iter()</code> on your collection, then calls\n        <code>next()</code> again and again. When <code>StopIteration</code> arrives, the loop\n        does not crash — it quietly catches it and says \"finished\", then moves on.\n      </div>\n\n      <p>These two pieces of code do exactly the same thing:</p>\n      <table>\n        <tr><th>What you write</th><th>What Python actually does</th></tr>\n        <tr>\n          <td><pre><code>for x in my_list:\n    print(x)</code></pre></td>\n          <td><pre><code>it = iter(my_list)\nwhile True:\n    try:\n        x = next(it)\n    except StopIteration:\n        break\n    print(x)</code></pre></td>\n        </tr>\n      </table>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What happens on the last line?</p>\n        <pre><code>it = iter([3, 2])\nprint(next(it))\nprint(next(it))\nprint(next(it))</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">It starts again from 3</button>\n          <button data-o=\"1\">3, then 2, then a StopIteration crash</button>\n          <button data-o=\"2\">3, 2, None</button>\n        </div>\n        <p class=\"w__why\">An iterator only moves forwards, and never resets. Two items means two\n        successful calls. The third finds nothing left and raises StopIteration.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Match each piece to its job.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">A list, a string, a range</button>\n            <button data-pair=\"b\"><code>iter()</code></button>\n            <button data-pair=\"c\"><code>next()</code></button>\n            <button data-pair=\"d\"><code>StopIteration</code></button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">Hands back the next item</button>\n            <button data-pair=\"a\">An iterable — the loaded tube</button>\n            <button data-pair=\"d\">The signal that nothing is left</button>\n            <button data-pair=\"b\">Turns an iterable into an iterator</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Every <code>for</code> loop you have\n        written in this unit has been doing exactly this, silently, the whole time.</p>\n      </div>\n    \n      <h4>Iterable and iterator are related, but not identical</h4>\n      <p>An <strong>iterable</strong> is the source collection. An <strong>iterator</strong> is the\n      moving reader that remembers the current position.</p>\n      <pre><code>colours = [\"red\", \"blue\", \"green\"]\nreader = iter(colours)\n\nprint(next(reader))   # red\nprint(next(reader))   # blue</code></pre>\n      <p>The list has not moved. The iterator's internal pointer has moved.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 210\" role=\"img\" aria-label=\"Iterator pointer moving through three list items.\">\n        <text x=\"40\" y=\"34\" class=\"lbl\">Iterable</text>\n        <rect class=\"box\" x=\"130\" y=\"55\" width=\"145\" height=\"65\" rx=\"8\"/><text x=\"202\" y=\"94\" text-anchor=\"middle\">red</text>\n        <rect class=\"box\" x=\"285\" y=\"55\" width=\"145\" height=\"65\" rx=\"8\"/><text x=\"357\" y=\"94\" text-anchor=\"middle\">blue</text>\n        <rect class=\"box\" x=\"440\" y=\"55\" width=\"145\" height=\"65\" rx=\"8\"/><text x=\"512\" y=\"94\" text-anchor=\"middle\">green</text>\n        <path class=\"accent\" d=\"M202 155 l-15 25 h30 z\"><animate attributeName=\"d\" values=\"M202 155 l-15 25 h30 z;M357 155 l-15 25 h30 z;M512 155 l-15 25 h30 z;M202 155 l-15 25 h30 z\" dur=\"4s\" repeatCount=\"indefinite\"/></path>\n        <text x=\"620\" y=\"95\" class=\"mono\">next()</text>\n      </svg>\n\n      <h4>Why a for loop does not show StopIteration</h4>\n      <p>Behind the scenes, the loop calls <code>next()</code> repeatedly. When no item remains,\n      <code>StopIteration</code> is raised. The for loop catches that signal and ends cleanly.</p>\n      <div class=\"w w-flip\"><span class=\"w__k\">Dispenser cards</span><div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">The full box of items</span><span class=\"w-flip__back\">Iterable</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">The reader that remembers “next”</span><span class=\"w-flip__back\">Iterator</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">The signal that nothing remains</span><span class=\"w-flip__back\"><code>StopIteration</code></span></button></div></div>\n",
      "mcqs": [
        {
          "q": "What is an iterable?",
          "options": [
            "A collection that can be read one item at a time",
            "Only an error",
            "A Boolean expression",
            "A random number"
          ],
          "answer": 0,
          "why": "Lists, strings, tuples, dictionaries, and ranges are iterables."
        },
        {
          "q": "What does an iterator remember?",
          "options": [
            "The current reading position",
            "Only the file name",
            "Every error ever raised",
            "The computer password"
          ],
          "answer": 0,
          "why": "It tracks which item should come next."
        },
        {
          "q": "Which function asks an iterator for one item?",
          "options": [
            "iter()",
            "next()",
            "list()",
            "item()"
          ],
          "answer": 1,
          "why": "next() advances and returns one item."
        },
        {
          "q": "What happens after an exhausted iterator receives next()?",
          "options": [
            "It restarts",
            "It raises StopIteration",
            "It returns the first item",
            "It becomes a list"
          ],
          "answer": 1,
          "why": "Exhaustion is signalled by StopIteration."
        }
      ],
      "tasks": [
        {
          "id": "u2t12p01",
          "kind": "code",
          "title": "Create an iterable",
          "brief": "Create <code>countdown = [3,2,1]</code> and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[3, 2, 1]"
            },
            {
              "type": "sourceRegex",
              "pattern": "countdown\\s*=\\s*\\[\\s*3\\s*,\\s*2\\s*,\\s*1\\s*\\]",
              "message": "Create the countdown list"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create the countdown list",
            "Your output should begin with: [3, 2, 1]"
          ]
        },
        {
          "id": "u2t12p02",
          "kind": "code",
          "title": "Load the dispenser",
          "brief": "Create countdown_iterator with iter(countdown). Print its type.",
          "starter": "countdown = [3, 2, 1]\n",
          "checks": [
            {
              "type": "stdoutContains",
              "value": "list_iterator"
            },
            {
              "type": "sourceRegex",
              "pattern": "countdown_iterator\\s*=\\s*iter\\(countdown\\)",
              "message": "Create the iterator with iter()"
            },
            {
              "type": "sourceIncludes",
              "value": "type(",
              "message": "Print its type"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create the iterator with iter()",
            "Run a small part first, inspect the output, and then complete the rest."
          ]
        },
        {
          "id": "u2t12p03",
          "kind": "code",
          "title": "Manual extraction",
          "brief": "Create the iterator and use next() once to print 3.",
          "starter": "countdown = [3, 2, 1]\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3"
            },
            {
              "type": "sourceIncludes",
              "value": "next(",
              "message": "Pull one item with next()"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Pull one item with next()",
            "Your output should begin with: 3"
          ]
        },
        {
          "id": "u2t12p04",
          "kind": "code",
          "title": "Drain the dispenser safely",
          "brief": "Print 3,2,1 with next(), then call <code>next(iterator, \"EMPTY\")</code> and print EMPTY.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3\n2\n1\nEMPTY"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "next\\(",
              "count": 4,
              "message": "Call next four times"
            },
            {
              "type": "sourceIncludes",
              "value": "\"EMPTY\"",
              "message": "Use a safe default after exhaustion"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Call next four times",
            "Your output should begin with: 3"
          ]
        },
        {
          "id": "u2t12p05",
          "kind": "code",
          "title": "Fix iterator reuse",
          "brief": "The program should print A then B. Use one iterator instead of creating a fresh one each time.",
          "starter": "letters = [\"A\", \"B\"]\nprint(next(iter(letters)))\nprint(next(iter(letters)))\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A\nB"
            },
            {
              "type": "sourceRegex",
              "pattern": "reader\\s*=\\s*iter\\(letters\\)",
              "message": "Save one iterator in reader"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "next\\(reader\\)",
              "count": 2,
              "message": "Advance the same reader twice"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Save one iterator in reader",
            "Your output should begin with: A"
          ]
        },
        {
          "id": "u2t12p06",
          "kind": "code",
          "title": "Range iterator",
          "brief": "Turn range(3) into an iterator and manually print 0,1,2.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0\n1\n2"
            },
            {
              "type": "sourceRegex",
              "pattern": "iter\\(range\\(3\\)\\)",
              "message": "Create an iterator from range(3)"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "next\\(",
              "count": 3,
              "message": "Pull all three values manually"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create an iterator from range(3)",
            "Your output should begin with: 0"
          ]
        },
        {
          "id": "u2t12p07",
          "kind": "code",
          "title": "Iterator state challenge",
          "brief": "Create an iterator over [10,20,30,40]. Pull two values without printing, then print the next value. It must be 30.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "30"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "next\\(",
              "count": 3,
              "message": "Advance the same iterator three times"
            },
            {
              "type": "sourceRegex",
              "pattern": "reader\\s*=\\s*iter",
              "message": "Store one iterator"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Advance the same iterator three times",
            "Your output should begin with: 30"
          ]
        },
        {
          "id": "u2t12p08",
          "kind": "code",
          "title": "Mini build — manual queue",
          "brief": "Create queue=[\"Asha\",\"Ravi\",\"Mina\"], make one iterator, and print <code>Serving: NAME</code> for all three using three next() calls. Then print <code>Queue empty</code> using a default next value.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Serving: Asha\nServing: Ravi\nServing: Mina\nQueue empty"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "next\\(",
              "count": 4,
              "message": "Use four next calls"
            },
            {
              "type": "sourceRegex",
              "pattern": "next\\([^,]+,\\s*[\"\\']Queue empty[\"\\']\\)",
              "message": "Use a default for exhaustion"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use four next calls",
            "Your output should begin with: Serving: Asha"
          ]
        }
      ]
    },
    {
      "id": "u2cp03",
      "title": "Revision Checkpoint 3 — Loop Control, range and Iterators",
      "summary": "Combine break, continue, pass, assert, return, range rules, and iterator state.",
      "notebookLM": "",
      "notes": "<h4>Stop, mix, and remember</h4><p>Combine break, continue, pass, assert, return, range rules, and iterator state.</p>\n    <div class=\"callout\"><strong>Checkpoint rule:</strong> Try each question without opening an earlier chapter. A wrong answer is a map showing what to revise.</div>\n    <svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Four ways to prove that the idea is really yours\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Recall</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Predict</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Fix</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Build</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Four ways to prove that the idea is really yours</text></svg>\n    <div class=\"w\"><span class=\"w__k\">Tap to reveal</span><div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What if I get something wrong?</span><span class=\"w-flip__back\">Read the explanation, retry the idea, and write one small example.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Should I rush?</span><span class=\"w-flip__back\">No. Dry-run the code before pressing Run.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What unlocks next?</span><span class=\"w-flip__back\">Clear the quiz and complete every checkpoint task.</span></button></div></div>",
      "mcqs": [
        {
          "q": "Which keyword exits a loop completely?",
          "options": [
            "pass",
            "continue",
            "break",
            "return"
          ],
          "answer": 2,
          "why": "break is the loop emergency exit."
        },
        {
          "q": "Which keyword skips only the current iteration?",
          "options": [
            "continue",
            "assert",
            "break",
            "else"
          ],
          "answer": 0,
          "why": "continue jumps to the next loop cycle."
        },
        {
          "q": "What does range(3,8) produce?",
          "options": [
            "3,4,5,6,7",
            "3,4,5,6,7,8",
            "0,1,2",
            "8,7,6,5,4,3"
          ],
          "answer": 0,
          "why": "The stop value 8 is excluded."
        },
        {
          "q": "Which range counts down by two from 8 to 2?",
          "options": [
            "range(8,1,-2)",
            "range(8,2,-2)",
            "range(2,8,2)",
            "range(8,0,2)"
          ],
          "answer": 0,
          "why": "8,6,4,2 requires stop 1 and step -2."
        },
        {
          "q": "What does iter() return?",
          "options": [
            "An active iterator",
            "A Boolean",
            "Always a list",
            "A random number"
          ],
          "answer": 0,
          "why": "iter creates or obtains an iterator."
        },
        {
          "q": "What error signals iterator exhaustion?",
          "options": [
            "NameError",
            "StopIteration",
            "LoopError",
            "IndexWarning"
          ],
          "answer": 1,
          "why": "StopIteration means no items remain."
        },
        {
          "q": "Why use assert?",
          "options": [
            "Catch a false assumption during debugging",
            "Stop every loop normally",
            "Shuffle a list",
            "Format an f-string"
          ],
          "answer": 0,
          "why": "assert checks a programmer assumption."
        },
        {
          "q": "What does pass do?",
          "options": [
            "Nothing; it is a placeholder",
            "Stops a loop",
            "Skips one iteration",
            "Returns a value"
          ],
          "answer": 0,
          "why": "pass is a no-operation statement."
        }
      ],
      "tasks": [
        {
          "id": "u2cp03p01",
          "kind": "code",
          "title": "Remote control mix",
          "brief": "Loop through 1-6, skip 2, stop at 5, and print all other earlier numbers.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n3\n4"
            },
            {
              "type": "sourceIncludes",
              "value": "continue",
              "message": "Skip 2"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop at 5"
            }
          ],
          "level": "Revision Checkpoint — Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Skip 2",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2cp03p02",
          "kind": "code",
          "title": "Range repair",
          "brief": "Fix the range so output is 9,6,3.",
          "starter": "for n in range(9, 3, 3):\n    print(n)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "9\n6\n3"
            },
            {
              "type": "sourceRegex",
              "pattern": "range\\(9\\s*,\\s*0\\s*,\\s*-3\\)",
              "message": "Use stop 0 and step -3"
            }
          ],
          "level": "Revision Checkpoint — Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use stop 0 and step -3",
            "Your output should begin with: 9"
          ]
        },
        {
          "id": "u2cp03p03",
          "kind": "code",
          "title": "Iterator repair",
          "brief": "Fix the repeated first item problem.",
          "starter": "data = [5, 6, 7]\nprint(next(iter(data)))\nprint(next(iter(data)))\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5\n6"
            },
            {
              "type": "sourceRegex",
              "pattern": "reader\\s*=\\s*iter\\(data\\)",
              "message": "Save one iterator"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "next\\(reader\\)",
              "count": 2,
              "message": "Advance the same reader"
            }
          ],
          "level": "Revision Checkpoint — Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Save one iterator",
            "Your output should begin with: 5"
          ]
        },
        {
          "id": "u2cp03p04",
          "kind": "code",
          "title": "Safe assertion and return",
          "brief": "Define <code>square(n)</code>, assert n >= 0, return n*n, and print square(6).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "36"
            },
            {
              "type": "sourceIncludes",
              "value": "assert n >= 0",
              "message": "Validate n"
            },
            {
              "type": "sourceRegex",
              "pattern": "return\\s+n\\s*\\*\\s*n",
              "message": "Return the square"
            }
          ],
          "level": "Revision Checkpoint — Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Validate n",
            "Your output should begin with: 36"
          ]
        },
        {
          "id": "u2cp03p05",
          "kind": "code",
          "title": "Checkpoint mini build — safe manual counter",
          "brief": "Create an iterator from range(5,0,-1). Use five next calls to print the countdown. Use one final default next call to print Done.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5\n4\n3\n2\n1\nDone"
            },
            {
              "type": "sourceRegex",
              "pattern": "iter\\(range\\(5\\s*,\\s*0\\s*,\\s*-1\\)\\)",
              "message": "Build the reverse range iterator"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "next\\(",
              "count": 6,
              "message": "Use six next calls"
            }
          ],
          "level": "Revision Checkpoint — Task 5",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Build the reverse range iterator",
            "Your output should begin with: 5"
          ]
        }
      ]
    },
    {
      "id": "u2t13",
      "title": "Random Numbers — randint, random and uniform",
      "summary": "Generate repeatable whole-number and decimal simulations.",
      "notebookLM": "",
      "notes": "\n      <h4>Computers hate surprises</h4>\n      <p>Board games and video games need chance. You roll a dice, flip a coin, shuffle a deck.</p>\n      <p>A computer is the opposite of that. It does exactly the same thing every single time.\n      To make it behave unpredictably we have to bring in a special toolbox.</p>\n\n      <pre><code>import random</code></pre>\n      <p>That line goes at the very top of your file. After it, every tool is\n      <code>random.</code> followed by its name.</p>\n\n      <h4>randint() — pulling a number out of a hat</h4>\n      <p>Give it a start and a stop, and it hands back a random whole number between them.</p>\n\n      <div class=\"callout\">\n        <strong>randint includes BOTH ends.</strong> This is different from\n        <code>range()</code>, which leaves the stop out. <code>random.randint(1, 6)</code> can\n        give you 1, 2, 3, 4, 5 <em>or</em> 6 — exactly what a dice needs.\n      </div>\n\n      <pre><code>import random\n\nroll = random.randint(1, 6)\nprint(f\"You rolled a {roll}!\")</code></pre>\n\n      <h4>random() — a plain decimal</h4>\n      <p>The most basic tool. No numbers go inside the brackets. It gives you a decimal from\n      0.0 up to (but never reaching) 1.0.</p>\n      <pre><code>import random\n\nchance = random.random()\nprint(chance)          # something like 0.4582917...</code></pre>\n\n      <h4>uniform() — a decimal between two points</h4>\n      <p>Like <code>randint</code>, but for decimals.</p>\n      <pre><code>import random\n\ntemp = random.uniform(10.0, 20.0)\nprint(f\"The temperature is {temp} degrees.\")</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 185\" role=\"img\" aria-label=\"randint gives whole numbers, random gives a decimal from zero to one, uniform gives a decimal between two points.\">\n        <rect class=\"box\" x=\"8\" y=\"34\" width=\"216\" height=\"128\" rx=\"8\"/>\n        <text x=\"116\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12.5px\">randint(1, 6)</text>\n        <text x=\"116\" y=\"90\" text-anchor=\"middle\" style=\"font-size:12px\">whole numbers</text>\n        <text x=\"116\" y=\"112\" text-anchor=\"middle\" style=\"font-size:12px\">both ends included</text>\n        <text x=\"116\" y=\"140\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">4</text>\n\n        <rect class=\"box\" x=\"242\" y=\"34\" width=\"216\" height=\"128\" rx=\"8\"/>\n        <text x=\"350\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12.5px\">random()</text>\n        <text x=\"350\" y=\"90\" text-anchor=\"middle\" style=\"font-size:12px\">a decimal</text>\n        <text x=\"350\" y=\"112\" text-anchor=\"middle\" style=\"font-size:12px\">0.0 up to 1.0</text>\n        <text x=\"350\" y=\"140\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:12px\">0.4582917</text>\n\n        <rect class=\"box box--dark\" x=\"476\" y=\"34\" width=\"216\" height=\"128\" rx=\"8\"/>\n        <text x=\"584\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12.5px\">uniform(10, 20)</text>\n        <text x=\"584\" y=\"90\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">a decimal</text>\n        <text x=\"584\" y=\"112\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">between two points</text>\n        <text x=\"584\" y=\"140\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:12px\">14.7213</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Not truly random.</strong> Computers cannot actually be unpredictable. They use\n        a clever formula, started from something like the current time, to produce numbers that\n        <em>look</em> random. Programmers call this <em>pseudo-random</em>. It is perfect for\n        games and simulations — but never use it for passwords or security.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">Which numbers can <code>random.randint(1, 6)</code> give you?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">1, 2, 3, 4, 5 — not 6</button>\n          <button data-o=\"1\">1, 2, 3, 4, 5 and 6</button>\n          <button data-o=\"2\">0, 1, 2, 3, 4, 5</button>\n        </div>\n        <p class=\"w__why\">Unlike <code>range()</code>, <code>randint</code> includes both ends.\n        That is exactly why it suits a dice. Mixing the two rules up is a favourite exam trap.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which tool for which job?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Roll a 20-sided dice</button>\n            <button data-pair=\"b\">A random chance between 0 and 1</button>\n            <button data-pair=\"c\">A random temperature between 20.5 and 35.5</button>\n            <button data-pair=\"d\">Flip a coin</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\"><code>random.uniform(20.5, 35.5)</code></button>\n            <button data-pair=\"a\"><code>random.randint(1, 20)</code></button>\n            <button data-pair=\"d\"><code>random.randint(1, 2)</code></button>\n            <button data-pair=\"b\"><code>random.random()</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Whole number, use <code>randint</code>.\n        Decimal between two points, use <code>uniform</code>. Plain chance, use\n        <code>random()</code>.</p>\n      </div>\n\n      <div class=\"callout\">\n        <strong>Checking random code.</strong> The tasks below cannot check for one exact\n        answer — the whole point is that it changes. Instead they check that your output is a\n        number of the right kind, in the right range. Run them a few times and watch it change.\n      </div>\n    \n      <h4>Random tools have different output shapes</h4>\n      <table><tr><th>Tool</th><th>Possible result</th><th>End points</th></tr><tr><td><code>randint(1, 6)</code></td><td>whole number</td><td>1 and 6 are both possible</td></tr><tr><td><code>random()</code></td><td>decimal from 0.0</td><td>1.0 is not included</td></tr><tr><td><code>uniform(10, 20)</code></td><td>decimal in a chosen interval</td><td>used for measured values</td></tr></table>\n      <pre><code>import random\n\ndice = random.randint(1, 6)\nprobability = random.random()\ntemperature = random.uniform(18.0, 30.0)</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 205\" role=\"img\" aria-label=\"Dice and decimal gauges representing random integer and floating point values.\">\n        <rect class=\"box box--dark\" x=\"70\" y=\"45\" width=\"150\" height=\"150\" rx=\"22\"><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 145 120;8 145 120;-8 145 120;0 145 120\" dur=\"1.8s\" repeatCount=\"indefinite\"/></rect>\n        <circle cx=\"115\" cy=\"90\" r=\"10\" fill=\"white\"/><circle cx=\"175\" cy=\"90\" r=\"10\" fill=\"white\"/><circle cx=\"145\" cy=\"120\" r=\"10\" fill=\"white\"/><circle cx=\"115\" cy=\"150\" r=\"10\" fill=\"white\"/><circle cx=\"175\" cy=\"150\" r=\"10\" fill=\"white\"/>\n        <text x=\"400\" y=\"55\" class=\"lbl\">random decimal</text><rect class=\"box\" x=\"330\" y=\"80\" width=\"300\" height=\"35\" rx=\"17\"/><rect x=\"340\" y=\"90\" width=\"180\" height=\"15\" rx=\"7\" class=\"accent\"><animate attributeName=\"width\" values=\"15;260;120;15\" dur=\"2.8s\" repeatCount=\"indefinite\"/></rect><text x=\"330\" y=\"145\" class=\"mono\">0.0</text><text x=\"600\" y=\"145\" class=\"mono\">1.0</text>\n      </svg>\n\n      <div class=\"w w-match\"><span class=\"w__k\">Choose the random tool</span><p class=\"w__q\">Match the requirement to the best function.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"a\">Roll a six-sided die</button><button data-pair=\"b\">Create a probability</button><button data-pair=\"c\">Choose a decimal temperature</button></div><div class=\"w-match__col\"><button data-pair=\"c\"><code>uniform()</code></button><button data-pair=\"a\"><code>randint()</code></button><button data-pair=\"b\"><code>random()</code></button></div></div><p class=\"w__why\">Use randint for whole-number ranges, random for 0-to-1 decimals, and uniform for a chosen decimal interval.</p></div>\n",
      "mcqs": [
        {
          "q": "What must appear before using random tools?",
          "options": [
            "start random",
            "import random",
            "random.on()",
            "pip install random"
          ],
          "answer": 1,
          "why": "random is in the Standard Library and must be imported."
        },
        {
          "q": "Which function simulates a six-sided die?",
          "options": [
            "random.randint(1,6)",
            "random.random(1,6)",
            "random.uniform()",
            "random.choice(6)"
          ],
          "answer": 0,
          "why": "randint returns an inclusive whole number."
        },
        {
          "q": "What does random.random() return?",
          "options": [
            "A whole number 0 or 1",
            "A decimal from 0.0 to below 1.0",
            "Any text",
            "A list"
          ],
          "answer": 1,
          "why": "It produces a float in [0.0, 1.0)."
        },
        {
          "q": "How does uniform differ from randint?",
          "options": [
            "uniform returns decimals; randint returns whole numbers",
            "uniform returns text",
            "randint excludes endpoints",
            "There is no difference"
          ],
          "answer": 0,
          "why": "uniform is for floating-point values."
        }
      ],
      "tasks": [
        {
          "id": "u2t13p01",
          "kind": "code",
          "title": "Open the toolbox",
          "brief": "Import random, set seed 1, roll randint(1,2), and print the result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1"
            },
            {
              "type": "sourceIncludes",
              "value": "import random",
              "message": "Import the module"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(1)",
              "message": "Use seed 1"
            },
            {
              "type": "sourceIncludes",
              "value": "random.randint(1, 2)",
              "message": "Generate 1 or 2"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Import the module",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t13p02",
          "kind": "code",
          "title": "100-sided die",
          "brief": "Set seed 2 and print one randint from 1 to 100.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "8"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(2)",
              "message": "Use seed 2"
            },
            {
              "type": "sourceRegex",
              "pattern": "random\\.randint\\(1\\s*,\\s*100\\)",
              "message": "Roll 1 through 100"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use seed 2",
            "Your output should begin with: 8"
          ]
        },
        {
          "id": "u2t13p03",
          "kind": "code",
          "title": "Three dice",
          "brief": "Set seed 3. Use a for loop to print three six-sided rolls.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2\n5\n5"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(3)",
              "message": "Use seed 3"
            },
            {
              "type": "sourceIncludes",
              "value": "for ",
              "message": "Roll in a loop"
            },
            {
              "type": "sourceRegex",
              "pattern": "randint\\(1\\s*,\\s*6\\)",
              "message": "Use a six-sided range"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use seed 3",
            "Your output should begin with: 2"
          ]
        },
        {
          "id": "u2t13p04",
          "kind": "code",
          "title": "Basic decimal",
          "brief": "Set seed 4, store random.random() in probability, and print whether it is between 0 and 1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "random.random()",
              "message": "Generate the probability"
            },
            {
              "type": "sourceRegex",
              "pattern": "0\\s*<=\\s*probability\\s*<\\s*1",
              "message": "Check the valid interval"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Generate the probability",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t13p05",
          "kind": "code",
          "title": "Fix the missing import",
          "brief": "Repair the code so it prints 1.",
          "starter": "random.seed(1)\nprint(random.randint(1, 2))\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1"
            },
            {
              "type": "sourceRegex",
              "pattern": "^import random",
              "message": "Import random first"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Import random first",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t13p06",
          "kind": "code",
          "title": "Temperature interval",
          "brief": "Set seed 5. Generate temp with uniform(70.5,90.5). Print whether it is inside that inclusive range.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceRegex",
              "pattern": "random\\.uniform\\(70\\.5\\s*,\\s*90\\.5\\)",
              "message": "Use uniform for the temperature"
            },
            {
              "type": "sourceRegex",
              "pattern": "70\\.5\\s*<=\\s*temp\\s*<=\\s*90\\.5",
              "message": "Check the interval"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use uniform for the temperature",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2t13p07",
          "kind": "code",
          "title": "Dice total challenge",
          "brief": "Set seed 5. Roll a die three times in a loop, accumulate the values, and print 14.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "14"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(5)",
              "message": "Use seed 5"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=\\s*random\\.randint",
              "message": "Accumulate each roll"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use seed 5",
            "Your output should begin with: 14"
          ]
        },
        {
          "id": "u2t13p08",
          "kind": "code",
          "title": "Mini build — deterministic weather station",
          "brief": "Set seed 5. Generate a uniform temperature from 70.5 to 90.5. Print exactly two lines: <code>Temperature valid: True</code> and <code>Hot day: True</code>, where hot means above 80.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Temperature valid: True\nHot day: True"
            },
            {
              "type": "sourceIncludes",
              "value": "random.uniform",
              "message": "Generate a decimal temperature"
            },
            {
              "type": "sourceRegex",
              "pattern": "temp\\s*>\\s*80",
              "message": "Check the hot-day rule"
            },
            {
              "type": "stdoutLineCount",
              "value": 2,
              "message": "Print exactly two lines"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Generate a decimal temperature",
            "Your output should begin with: Temperature valid: True"
          ]
        }
      ]
    },
    {
      "id": "u2t14",
      "title": "Random Numbers — choice, shuffle and Guessing Games",
      "summary": "Use randomness with lists, loops, decisions, and game state.",
      "notebookLM": "",
      "notes": "\n      <h4>choice() — a name out of the bowl</h4>\n      <p>A teacher writes five names on slips of paper, drops them in a bowl, and pulls one\n      out.</p>\n      <p><code>random.choice()</code> takes a list and hands back exactly one random item.</p>\n\n      <pre><code>import random\n\ncolours = [\"Red\", \"Blue\", \"Green\", \"Yellow\"]\nwinner = random.choice(colours)\n\nprint(f\"The winning colour is: {winner}\")</code></pre>\n\n      <h4>shuffle() — mixing the deck</h4>\n      <p>Before a card game you shuffle. <code>random.shuffle()</code> mixes a list up.</p>\n\n      <pre><code>import random\n\nplaylist = [\"Song A\", \"Song B\", \"Song C\"]\nrandom.shuffle(playlist)\n\nprint(playlist)</code></pre>\n\n      <div class=\"callout\">\n        <strong>shuffle changes the original.</strong> It does not hand you back a new mixed\n        list — it rearranges the one you gave it, permanently. That is why you never write\n        <code>playlist = random.shuffle(playlist)</code>; doing so throws your list away and\n        leaves you with <code>None</code>.\n      </div>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 175\" role=\"img\" aria-label=\"choice picks one item out of a list; shuffle rearranges the whole list in place.\">\n        <text x=\"168\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">choice — take one out</text>\n        <rect class=\"box\" x=\"8\" y=\"38\" width=\"320\" height=\"106\" rx=\"8\"/>\n        <text x=\"60\" y=\"76\" class=\"mono\" style=\"font-size:12px\">Red</text>\n        <text x=\"140\" y=\"76\" class=\"mono\" style=\"font-size:12px\">Blue</text>\n        <text x=\"228\" y=\"76\" class=\"mono\" style=\"font-size:12px\">Green</text>\n        <rect x=\"120\" y=\"92\" width=\"76\" height=\"34\" rx=\"6\" fill=\"rgba(242,160,61,.2)\" stroke=\"#D67F19\" stroke-width=\"2\"/>\n        <text x=\"158\" y=\"115\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12px\">Blue</text>\n\n        <text x=\"532\" y=\"26\" text-anchor=\"middle\" class=\"lbl\">shuffle — mix them all up</text>\n        <rect class=\"box box--dark\" x=\"372\" y=\"38\" width=\"320\" height=\"106\" rx=\"8\"/>\n        <text x=\"400\" y=\"76\" class=\"mono on-dark\" style=\"font-size:12px\">A  B  C</text>\n        <path class=\"arrow\" d=\"M480 70 h44\"/><path class=\"accent\" d=\"M534 70 l-13 -7 v14 z\"/>\n        <text x=\"580\" y=\"76\" class=\"mono accent\" style=\"font-size:12px\">C  A  B</text>\n        <text x=\"532\" y=\"118\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:11.5px\">the original list itself is changed</text>\n      </svg>\n\n      <h4>Random numbers inside loops</h4>\n      <p>Put a random tool inside a loop and you can simulate anything — five coin flips, a\n      hundred dice rolls, a whole tournament.</p>\n      <pre><code>import random\n\nfor flip in range(5):\n    coin = random.randint(1, 2)\n    if coin == 1:\n        print(\"Heads!\")\n    else:\n        print(\"Tails!\")</code></pre>\n\n      <h4>Putting the whole unit together</h4>\n      <p>Here is a real game. Look at how much of Unit 2 is in these few lines: a random\n      number, a <code>while</code> loop, an <code>if-elif-else</code> chain, and a\n      <code>break</code>.</p>\n\n      <pre><code>import random\n\nprint(\"Welcome to the Guessing Game!\")\nsecret = random.randint(1, 10)\n\nwhile True:\n    guess = int(input(\"Guess a number from 1 to 10: \"))\n\n    if guess == secret:\n        print(\"You win!\")\n        break\n    elif guess > secret:\n        print(\"Too high! Try again.\")\n    else:\n        print(\"Too low! Try again.\")</code></pre>\n\n      <p>Now add lives, and it becomes a proper game with a way to lose:</p>\n      <pre><code>import random\n\nsecret = random.randint(1, 10)\nlives = 3\n\nwhile lives > 0:\n    guess = int(input(\"Your guess: \"))\n\n    if guess == secret:\n        print(\"You win!\")\n        break\n\n    lives -= 1\n    print(f\"Wrong. {lives} lives left.\")\n\nelse:\n    print(f\"Game over! It was {secret}.\")</code></pre>\n\n      <div class=\"callout\">\n        <strong>Look at that <code>else</code>.</strong> It belongs to the <code>while</code>,\n        not to an <code>if</code>. It runs only when the loop ends because lives ran out — never\n        when the player wins and breaks out. That is the search-party idea from Topic 7 doing\n        real work.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">A very common bug. What does this print?</p>\n        <pre><code>import random\ncards = [1, 2, 3]\ncards = random.shuffle(cards)\nprint(cards)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">A shuffled list like [3, 1, 2]</button>\n          <button data-o=\"1\">The original [1, 2, 3]</button>\n          <button data-o=\"2\">None</button>\n        </div>\n        <p class=\"w__why\"><code>shuffle</code> rearranges the list in place and hands back\n        nothing at all. Assigning its result overwrites your list with <code>None</code>. Just\n        call <code>random.shuffle(cards)</code> on its own line.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which tool for which job?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Pick one lucky winner from a list</button>\n            <button data-pair=\"b\">Mix up a deck of cards</button>\n            <button data-pair=\"c\">Roll a dice fifty times</button>\n            <button data-pair=\"d\">Let the player keep guessing until right</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\"><code>randint</code> inside a <code>for</code> loop</button>\n            <button data-pair=\"a\"><code>random.choice()</code></button>\n            <button data-pair=\"d\">A <code>while</code> loop with <code>break</code></button>\n            <button data-pair=\"b\"><code>random.shuffle()</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Between them these four ideas cover almost\n        every small game you could want to build this year.</p>\n      </div>\n    \n      <h4>Choice selects one item; shuffle changes the whole order</h4>\n      <pre><code>import random\n\nstudents = [\"Asha\", \"Ravi\", \"Meera\", \"Kabir\"]\nwinner = random.choice(students)\nrandom.shuffle(students)\n\nprint(winner)\nprint(students)</code></pre>\n      <p><code>choice()</code> returns one item and leaves the list order unchanged.\n      <code>shuffle()</code> changes the existing list itself and returns <code>None</code>.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 220\" role=\"img\" aria-label=\"Cards moving positions during a shuffle.\">\n        <g><rect class=\"box\" x=\"70\" y=\"65\" width=\"120\" height=\"95\" rx=\"10\"/><text x=\"130\" y=\"118\" text-anchor=\"middle\">A</text><animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0;300 0;0 0\" dur=\"3s\" repeatCount=\"indefinite\"/></g>\n        <g><rect class=\"box box--dark\" x=\"290\" y=\"65\" width=\"120\" height=\"95\" rx=\"10\"/><text x=\"350\" y=\"118\" text-anchor=\"middle\" class=\"on-dark\">B</text><animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0;-180 0;0 0\" dur=\"3s\" repeatCount=\"indefinite\"/></g>\n        <g><rect class=\"box\" x=\"510\" y=\"65\" width=\"120\" height=\"95\" rx=\"10\"/><text x=\"570\" y=\"118\" text-anchor=\"middle\">C</text><animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0;-120 0;0 0\" dur=\"3s\" repeatCount=\"indefinite\"/></g>\n        <text x=\"350\" y=\"205\" text-anchor=\"middle\" class=\"mono\">shuffle changes the original order</text>\n      </svg>\n\n      <h4>Game loop checklist</h4><ol><li>Create the secret value before the loop.</li><li>Ask for a guess inside the loop.</li><li>Use if/elif/else for feedback.</li><li>Update lives after a wrong answer.</li><li>Break on success or when lives reach zero.</li></ol>\n      <div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guessing-game logic</span><p class=\"w__q\">Where should the random secret number normally be created?</p><div class=\"w-guess__opts\"><button data-o=\"0\">Inside the loop before every guess</button><button data-o=\"1\">Once, before the loop</button><button data-o=\"2\">After the game ends</button></div><p class=\"w__why\">Create it once before the loop. Otherwise the target may change after every incorrect guess.</p></div>\n",
      "mcqs": [
        {
          "q": "Which function picks one item from a list?",
          "options": [
            "random.pick",
            "random.choice",
            "random.shuffle",
            "random.one"
          ],
          "answer": 1,
          "why": "choice selects one element."
        },
        {
          "q": "What does random.shuffle do?",
          "options": [
            "Returns a new sorted list",
            "Changes the existing list order",
            "Deletes random items",
            "Returns one item"
          ],
          "answer": 1,
          "why": "shuffle modifies the list in place."
        },
        {
          "q": "Why is guessing input placed inside a loop?",
          "options": [
            "To ask again until the game ends",
            "Because input only works in loops",
            "To hide the secret automatically",
            "To import random"
          ],
          "answer": 0,
          "why": "Each wrong guess needs another cycle."
        },
        {
          "q": "What normally ends the guessing loop after a correct answer?",
          "options": [
            "continue",
            "break",
            "pass",
            "assert"
          ],
          "answer": 1,
          "why": "break exits the loop."
        }
      ],
      "tasks": [
        {
          "id": "u2t14p01",
          "kind": "code",
          "title": "Magic 8-ball",
          "brief": "Set seed 1, create responses [\"Yes\",\"No\",\"Maybe\"], use choice, and print the selected response.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Yes"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(1)",
              "message": "Use seed 1"
            },
            {
              "type": "sourceIncludes",
              "value": "random.choice",
              "message": "Pick with choice"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use seed 1",
            "Your output should begin with: Yes"
          ]
        },
        {
          "id": "u2t14p02",
          "kind": "code",
          "title": "Card dealer",
          "brief": "Set seed 1, shuffle [1,2,3,4,5], and print the changed list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[3, 4, 5, 1, 2]"
            },
            {
              "type": "sourceIncludes",
              "value": "random.shuffle",
              "message": "Shuffle the existing list"
            },
            {
              "type": "sourceRegex",
              "pattern": "print\\(cards\\)",
              "message": "Print the list after shuffling"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Shuffle the existing list",
            "Your output should begin with: [3, 4, 5, 1, 2]"
          ]
        },
        {
          "id": "u2t14p03",
          "kind": "code",
          "title": "Multiple dice rolls",
          "brief": "Set seed 5. Use range(3) to print <code>You rolled 5</code>, then 3, then 6.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "You rolled 5\nYou rolled 3\nYou rolled 6"
            },
            {
              "type": "sourceIncludes",
              "value": "range(3)",
              "message": "Run exactly three rolls"
            },
            {
              "type": "sourceIncludes",
              "value": "random.randint",
              "message": "Generate each roll"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Run exactly three rolls",
            "Your output should begin with: You rolled 5"
          ]
        },
        {
          "id": "u2t14p04",
          "kind": "code",
          "title": "Random winner",
          "brief": "Set seed 6, choose one name from Asha, Ravi, Mina, and print <code>Winner: Mina</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Winner: Mina"
            },
            {
              "type": "sourceIncludes",
              "value": "random.choice",
              "message": "Choose one name"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(6)",
              "message": "Use seed 6"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Choose one name",
            "Your output should begin with: Winner: Mina"
          ]
        },
        {
          "id": "u2t14p05",
          "kind": "code",
          "title": "Fix shuffle assignment",
          "brief": "Repair the code so it prints a shuffled list, not None.",
          "starter": "import random\nrandom.seed(1)\ncards = [1,2,3,4,5]\ncards = random.shuffle(cards)\nprint(cards)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[3, 4, 5, 1, 2]"
            },
            {
              "type": "sourceNotRegex",
              "pattern": "cards\\s*=\\s*random\\.shuffle",
              "message": "Do not assign the result of shuffle"
            },
            {
              "type": "sourceRegex",
              "pattern": "random\\.shuffle\\(cards\\)",
              "message": "Shuffle cards in place"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Do not assign the result of shuffle",
            "Your output should begin with: [3, 4, 5, 1, 2]"
          ]
        },
        {
          "id": "u2t14p06",
          "kind": "code",
          "title": "Coin-count simulation",
          "brief": "Set seed 2. Flip ten times with randint(1,2). Count 1 as heads and 2 as tails. Print <code>Heads: 7</code> and <code>Tails: 3</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Heads: 7\nTails: 3"
            },
            {
              "type": "sourceIncludes",
              "value": "range(10)",
              "message": "Flip ten times"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Classify each flip"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\+=\\s*1",
              "count": 2,
              "message": "Maintain both counters"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Flip ten times",
            "Your output should begin with: Heads: 7"
          ]
        },
        {
          "id": "u2t14p07",
          "kind": "code",
          "title": "Guess feedback challenge",
          "brief": "Set secret=7 and guesses=[3,9,7]. Loop through guesses, print Too low!, Too high!, then You win!, and break.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Too low!\nToo high!\nYou win!"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "End after the correct guess"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Use three-way feedback"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "End after the correct guess",
            "Your output should begin with: Too low!"
          ]
        },
        {
          "id": "u2t14p08",
          "kind": "code",
          "title": "Mini build — three-life guessing simulator",
          "brief": "Set secret=6, guesses=[2,9,6], lives=3. For each guess, print Too low or Too high and reduce lives; on correct guess print <code>Correct with 1 life left</code> and break.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Too low\nToo high\nCorrect with 1 life left"
            },
            {
              "type": "sourceRegex",
              "pattern": "lives\\s*-=\\s*1",
              "message": "Remove a life after each wrong guess"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop after success"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Use high/low/correct branches"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Remove a life after each wrong guess",
            "Your output should begin with: Too low"
          ]
        }
      ]
    },
    {
      "id": "u2t15",
      "title": "Problem-Solving Patterns — Decomposition and Pattern Printing",
      "summary": "Plan solutions, generalise them, and build row-column patterns.",
      "notebookLM": "",
      "notes": "\n      <h4>Teaching an alien to make a sandwich</h4>\n      <p>An alien lands in your kitchen. You say: \"make me a sandwich.\" It just stares at you.</p>\n      <p>\"Make a sandwich\" is far too big. You have to break it into baby steps:</p>\n      <ol>\n        <li>Open the bread packet.</li>\n        <li>Take out two slices.</li>\n        <li>Put them on a plate.</li>\n        <li>Open the jam jar. And so on.</li>\n      </ol>\n      <p>That breaking-apart is called <strong>decomposition</strong>, and it is the single\n      most important skill in programming.</p>\n\n      <h4>The four steps — do these before you type</h4>\n      <table>\n        <tr><th>Step</th><th>Ask yourself</th></tr>\n        <tr><td>1. The goal</td><td>What exactly should the final output look like?</td></tr>\n        <tr><td>2. Decomposition</td><td>In plain English, what are the tiny steps?</td></tr>\n        <tr><td>3. Pattern matching</td><td>Which tool fits? Repeating → a loop. Choosing → an if.</td></tr>\n        <tr><td>4. Translate</td><td><em>Now</em> turn your English into Python.</td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>Never start at step 4.</strong> Typing first and thinking later is why students\n        stare at broken code for an hour. Ten minutes with a pen saves an hour at the keyboard.\n      </div>\n\n      <h4>Encapsulation — the coffee machine</h4>\n      <p>You press one button and get coffee. You do not grind beans, heat water and push it\n      through a filter yourself. All that complexity is hidden inside the box.</p>\n      <p><strong>Encapsulation</strong> means wrapping a long, messy block of code inside one\n      simple tool — a function — so your brain only has to hold one idea at a time.</p>\n\n      <h4>Generalisation — the adjustable spanner</h4>\n      <p>A mechanic could carry fifty spanners for fifty bolt sizes. Or carry one adjustable\n      spanner that fits them all.</p>\n      <p><strong>Generalisation</strong> means writing code that is not locked to one number.</p>\n      <pre><code># locked to one size\nfor row in range(3):\n    ...\n\n# adjustable — works for any size\nsize = 5\nfor row in range(size):\n    ...</code></pre>\n\n      <h4>Drawing shapes with nested loops</h4>\n      <p><strong>The problem:</strong> print a square of stars, 3 rows tall and 3 wide.</p>\n      <p><strong>Think it through first:</strong></p>\n      <ol>\n        <li>I need 3 rows going down. That sounds like a loop.</li>\n        <li>Inside every row I need 3 stars going across. That sounds like another loop.</li>\n        <li>So: the outer loop moves down the rows, the inner loop draws across.</li>\n      </ol>\n\n      <pre><code>size = 3\n\nfor row in range(size):\n    for col in range(size):\n        print(\"* \", end=\"\")     # stay on this line!\n    print()                     # now move to the next line</code></pre>\n\n      <pre><code>* * *\n* * *\n* * *</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"The outer loop controls the rows going down, the inner loop draws the stars going across.\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">outer loop = rows &nbsp;·&nbsp; inner loop = columns</text>\n\n        <path class=\"arrow\" d=\"M60 52 v96\"/><path class=\"accent\" d=\"M60 158 l-7 -13 h14 z\"/>\n        <text x=\"34\" y=\"104\" text-anchor=\"middle\" class=\"lbl\" transform=\"rotate(-90 34 104)\">outer</text>\n\n        <path class=\"arrow\" d=\"M96 40 h180\"/><path class=\"accent\" d=\"M286 40 l-13 -7 v14 z\"/>\n        <text x=\"186\" y=\"30\" text-anchor=\"middle\" class=\"lbl\">inner</text>\n\n        <text x=\"110\" y=\"72\" class=\"mono accent\" style=\"font-size:18px\">*  *  *</text>\n        <text x=\"110\" y=\"106\" class=\"mono accent\" style=\"font-size:18px\">*  *  *</text>\n        <text x=\"110\" y=\"140\" class=\"mono accent\" style=\"font-size:18px\">*  *  *</text>\n\n        <rect class=\"box box--dark\" x=\"340\" y=\"46\" width=\"352\" height=\"110\" rx=\"8\"/>\n        <text x=\"364\" y=\"76\" class=\"mono on-dark\" style=\"font-size:12px\">for row in range(3):</text>\n        <text x=\"364\" y=\"100\" class=\"mono on-dark\" style=\"font-size:12px\">    for col in range(3):</text>\n        <text x=\"364\" y=\"124\" class=\"mono accent\" style=\"font-size:12px\">        print(\"* \", end=\"\")</text>\n        <text x=\"364\" y=\"146\" class=\"mono accent\" style=\"font-size:12px\">    print()</text>\n      </svg>\n\n      <div class=\"callout\">\n        <strong>Those two prints do very different jobs.</strong> The indented one with\n        <code>end=\"\"</code> draws a star and stays put. The one outside the inner loop is empty\n        — its only job is to press Enter and start the next row. Forget it and every star lands\n        on one enormous line.\n      </div>\n\n      <h4>Number patterns</h4>\n      <p><strong>The problem:</strong> row 1 shows <code>1</code>, row 2 shows\n      <code>1 2</code>, row 3 shows <code>1 2 3</code>.</p>\n      <p><strong>The insight:</strong> the inner loop's length is not fixed — it depends on\n      which row we are currently on.</p>\n\n      <pre><code>size = 3\n\nfor row in range(1, size + 1):\n    for col in range(1, row + 1):     # ← depends on row!\n        print(col, end=\" \")\n    print()</code></pre>\n\n      <div class=\"w w-guess\" data-answer=\"0\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What goes wrong here?</p>\n        <pre><code>for row in range(2):\n    for col in range(3):\n        print(\"*\", end=\"\")</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">All six stars land on one line</button>\n          <button data-o=\"1\">Two rows of three stars</button>\n          <button data-o=\"2\">Nothing prints</button>\n        </div>\n        <p class=\"w__why\">The empty <code>print()</code> at the end of the outer loop is\n        missing, so nothing ever moves to a new line. You get <code>******</code> in one long\n        row.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Match the idea to its real-world picture.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Decomposition</button>\n            <button data-pair=\"b\">Encapsulation</button>\n            <button data-pair=\"c\">Generalisation</button>\n            <button data-pair=\"d\">The inner loop</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">An adjustable spanner</button>\n            <button data-pair=\"a\">Baby steps for the alien</button>\n            <button data-pair=\"d\">Draws across one line</button>\n            <button data-pair=\"b\">A coffee machine with one button</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> These three habits are what separate a\n        student who can copy code from one who can write it.</p>\n      </div>\n    \n      <h4>Good programmers solve the plan before they solve the code</h4>\n      <p>For a program that prints a shopping receipt, the plan might be:</p><ol><li>Collect the item prices.</li><li>Start a total at zero.</li><li>Loop through the prices and add each one.</li><li>Decide whether a discount applies.</li><li>Print the final receipt.</li></ol>\n      <p>Only after the steps are clear should you translate them into Python.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 205\" role=\"img\" aria-label=\"Problem solving pipeline from goal to decomposition to pattern to Python.\">\n        <rect class=\"box\" x=\"15\" y=\"70\" width=\"145\" height=\"65\" rx=\"10\"/><text x=\"87\" y=\"108\" text-anchor=\"middle\">1. Goal</text>\n        <path class=\"arrow\" d=\"M160 102 H195\"/>\n        <rect class=\"box\" x=\"195\" y=\"70\" width=\"145\" height=\"65\" rx=\"10\"/><text x=\"267\" y=\"98\" text-anchor=\"middle\">2. Baby</text><text x=\"267\" y=\"118\" text-anchor=\"middle\">steps</text>\n        <path class=\"arrow\" d=\"M340 102 H375\"/>\n        <rect class=\"box\" x=\"375\" y=\"70\" width=\"145\" height=\"65\" rx=\"10\"/><text x=\"447\" y=\"98\" text-anchor=\"middle\">3. Pick a</text><text x=\"447\" y=\"118\" text-anchor=\"middle\">pattern</text>\n        <path class=\"arrow\" d=\"M520 102 H555\"/>\n        <rect class=\"box box--dark\" x=\"555\" y=\"70\" width=\"130\" height=\"65\" rx=\"10\"/><text x=\"620\" y=\"108\" text-anchor=\"middle\" class=\"on-dark\">4. Code</text>\n        <circle cx=\"178\" cy=\"102\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"168;187;168\" dur=\"1s\" repeatCount=\"indefinite\"/></circle>\n      </svg>\n\n      <h4>Patterns are reusable ideas</h4><ul><li>Repeated rows and columns → nested loops.</li><li>Running total → accumulator.</li><li>Choose between paths → conditional.</li><li>Unknown number of attempts → while loop.</li><li>Known count → for loop with range.</li></ul>\n      <div class=\"w w-match\"><span class=\"w__k\">Toolbox game</span><p class=\"w__q\">Match the problem clue to the likely tool.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"a\">Repeat until correct</button><button data-pair=\"b\">Print a 4 × 4 square</button><button data-pair=\"c\">Keep a running sum</button><button data-pair=\"d\">Choose pass or fail</button></div><div class=\"w-match__col\"><button data-pair=\"d\">if/else</button><button data-pair=\"b\">nested loops</button><button data-pair=\"a\">while loop</button><button data-pair=\"c\">accumulator</button></div></div><p class=\"w__why\">Problem words often point directly to the programming pattern.</p></div>\n",
      "mcqs": [
        {
          "q": "What is decomposition?",
          "options": [
            "Breaking a large problem into small steps",
            "Deleting all code",
            "Creating an infinite loop",
            "Changing text to numbers"
          ],
          "answer": 0,
          "why": "Decomposition makes each step understandable and testable."
        },
        {
          "q": "What is a good analogy for generalisation?",
          "options": [
            "An adjustable wrench",
            "A permanent marker",
            "A locked box",
            "One exact-size key only"
          ],
          "answer": 0,
          "why": "An adjustable tool works across many cases."
        },
        {
          "q": "In a pattern program, what does the inner loop usually control?",
          "options": [
            "Rows from top to bottom",
            "Items across the current row",
            "The Python version",
            "The file name"
          ],
          "answer": 1,
          "why": "The inner loop handles columns or repeated symbols on one line."
        },
        {
          "q": "What should happen before writing Python for a new problem?",
          "options": [
            "Describe the goal and baby steps",
            "Import every module",
            "Write random code",
            "Optimise time complexity first"
          ],
          "answer": 0,
          "why": "Planning prevents confusion and rework."
        }
      ],
      "tasks": [
        {
          "id": "u2t15p01",
          "kind": "code",
          "title": "Plan as comments",
          "brief": "Write three comment lines describing how to ask for a birth year, calculate age using 2026, and print the answer. Then use fixed <code>birth_year = 2006</code> to print 20.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "(^|\\n)\\s*#",
              "count": 3,
              "message": "Write at least three planning comments"
            },
            {
              "type": "sourceIncludes",
              "value": "2026 - birth_year",
              "message": "Translate the age calculation"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Write at least three planning comments",
            "Your output should begin with: 20"
          ]
        },
        {
          "id": "u2t15p02",
          "kind": "code",
          "title": "Two-by-five rectangle",
          "brief": "Use nested loops to print two rows of five stars exactly as <code>* * * * *</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "* * * * *\n* * * * *"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Use nested loops"
            },
            {
              "type": "sourceIncludes",
              "value": "end=",
              "message": "Keep stars on one row"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use nested loops",
            "Your output should begin with: * * * * *"
          ]
        },
        {
          "id": "u2t15p03",
          "kind": "code",
          "title": "Number square",
          "brief": "Use nested loops to print a 3x3 square of the number 5.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5 5 5\n5 5 5\n5 5 5"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "range\\(3\\)",
              "count": 2,
              "message": "Use two loops of size 3"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use two loops of size 3",
            "Your output should begin with: 5 5 5"
          ]
        },
        {
          "id": "u2t15p04",
          "kind": "code",
          "title": "Generalised square",
          "brief": "Set <code>user_size = 4</code>. Use that variable in both range calls to print a 4x4 square of #.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutLineCount",
              "value": 4,
              "message": "Print four rows"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "range\\(user_size\\)",
              "count": 2,
              "message": "Use user_size in both loops"
            },
            {
              "type": "sourceRegex",
              "pattern": "user_size\\s*=\\s*4",
              "message": "Set the chosen size"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Print four rows",
            "Run a small part first, inspect the output, and then complete the rest."
          ]
        },
        {
          "id": "u2t15p05",
          "kind": "code",
          "title": "Fix the new-line position",
          "brief": "The output should be a 2x3 rectangle, not six one-character rows. Move print() to the correct level.",
          "starter": "for row in range(2):\n    for col in range(3):\n        print(\"*\", end=\"\")\n        print()\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "***\n***"
            },
            {
              "type": "sourceRegex",
              "pattern": "for col[^\\n]+:\\n\\s{8}print\\([^\\n]+end=[^\\n]+\\)\\n\\s{4}print\\(\\)",
              "message": "Place the blank print after the inner loop"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Place the blank print after the inner loop",
            "Your output should begin with: ***"
          ]
        },
        {
          "id": "u2t15p06",
          "kind": "code",
          "title": "Descending triangle",
          "brief": "Use nested loops and a reverse range to print: <code>* * *</code>, then <code>* *</code>, then <code>*</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "* * *\n* *\n*"
            },
            {
              "type": "sourceRegex",
              "pattern": "range\\(3\\s*,\\s*0\\s*,\\s*-1\\)",
              "message": "Count rows backward"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Use nested loops"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Count rows backward",
            "Your output should begin with: * * *"
          ]
        },
        {
          "id": "u2t15p07",
          "kind": "code",
          "title": "Number triangle challenge",
          "brief": "Print three rows: 1 / 1 2 / 1 2 3 using nested range loops.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n1 2\n1 2 3"
            },
            {
              "type": "sourceRegex",
              "pattern": "range\\(1\\s*,\\s*row\\s*\\+\\s*1\\)",
              "message": "Let the inner stop depend on the row"
            },
            {
              "type": "sourceRegex",
              "pattern": "range\\(1\\s*,\\s*4\\)",
              "message": "Generate rows 1 to 3"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Let the inner stop depend on the row",
            "Your output should begin with: 1"
          ]
        },
        {
          "id": "u2t15p08",
          "kind": "code",
          "title": "Mini build — two pattern modes",
          "brief": "Set <code>mode = \"triangle\"</code> and <code>size = 3</code>. If mode is square, print a size×size star square; elif triangle, print 1,2,3 stars by row; else print Unknown mode. Expected output is the triangle.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "*\n**\n***"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Support both named modes"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Use nested loops for the selected pattern"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "range\\(size\\)",
              "count": 1,
              "message": "Use the size variable"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Support both named modes",
            "Your output should begin with: *"
          ]
        }
      ]
    },
    {
      "id": "u2t16",
      "title": "Problem-Solving Patterns — Digits, Prime Numbers, Factorial and Fibonacci",
      "summary": "Combine loops, flags, counters, and accumulators into classic algorithms.",
      "notebookLM": "",
      "notes": "\n      <h4>1. Pulling a number apart</h4>\n      <p><strong>The problem:</strong> take 456 and add its digits together to get 15.</p>\n      <p><strong>Think it through:</strong></p>\n      <ol>\n        <li>How do I grab the last digit? <code>456 % 10</code> gives me the remainder — <strong>6</strong>.</li>\n        <li>How do I add it up? An accumulator, from Topic 8.</li>\n        <li>How do I get rid of it? <code>456 // 10</code> chops it off, leaving <strong>45</strong>.</li>\n        <li>Repeat while the number is still bigger than 0.</li>\n      </ol>\n\n      <pre><code>num = 456\ntotal = 0\n\nwhile num > 0:\n    last = num % 10      # grab   → 6\n    total += last        # keep   → 6\n    num = num // 10      # chop   → 45\n\nprint(total)             # 15</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 175\" role=\"img\" aria-label=\"Modulus grabs the last digit, floor division chops it off, and this repeats until nothing is left.\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">grab with % 10 &nbsp;·&nbsp; chop with // 10</text>\n\n        <rect class=\"box\" x=\"8\" y=\"40\" width=\"140\" height=\"60\" rx=\"7\"/>\n        <text x=\"78\" y=\"78\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:17px\">456</text>\n        <text x=\"78\" y=\"122\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12px\">grab 6</text>\n\n        <path class=\"arrow\" d=\"M156 70 h34\"/><path class=\"accent\" d=\"M200 70 l-12 -7 v14 z\"/>\n\n        <rect class=\"box\" x=\"208\" y=\"40\" width=\"140\" height=\"60\" rx=\"7\"/>\n        <text x=\"278\" y=\"78\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:17px\">45</text>\n        <text x=\"278\" y=\"122\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12px\">grab 5</text>\n\n        <path class=\"arrow\" d=\"M356 70 h34\"/><path class=\"accent\" d=\"M400 70 l-12 -7 v14 z\"/>\n\n        <rect class=\"box\" x=\"408\" y=\"40\" width=\"140\" height=\"60\" rx=\"7\"/>\n        <text x=\"478\" y=\"78\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:17px\">4</text>\n        <text x=\"478\" y=\"122\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:12px\">grab 4</text>\n\n        <path class=\"arrow\" d=\"M556 70 h34\"/><path class=\"accent\" d=\"M600 70 l-12 -7 v14 z\"/>\n\n        <rect x=\"608\" y=\"40\" width=\"84\" height=\"60\" rx=\"7\" fill=\"rgba(242,160,61,.18)\" stroke=\"#D67F19\" stroke-width=\"2.2\"/>\n        <text x=\"650\" y=\"78\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:17px\">0</text>\n        <text x=\"650\" y=\"122\" text-anchor=\"middle\" class=\"lbl\">stop</text>\n      </svg>\n\n      <h4>2. Is it prime?</h4>\n      <p>A prime number divides cleanly only by 1 and itself.</p>\n      <p><strong>Think it through:</strong> to test 7, try dividing it by 2, 3, 4, 5 and 6. If\n      <em>any</em> of them leaves no remainder, it is not prime.</p>\n\n      <pre><code>num = 7\nis_prime = True          # innocent until proven guilty\n\nfor i in range(2, num):\n    if num % i == 0:     # found a clean divide\n        is_prime = False # guilty!\n        break            # no need to keep looking\n\nif is_prime and num > 1:\n    print(\"Prime!\")\nelse:\n    print(\"Not prime.\")</code></pre>\n\n      <div class=\"callout\">\n        <strong>Two details that matter.</strong> The <code>break</code> stops the search the\n        moment we have our answer — no point testing the rest. And <code>num &gt; 1</code>\n        matters because 1 is <em>not</em> prime, but the loop never runs for it, so\n        <code>is_prime</code> would wrongly stay True.\n      </div>\n\n      <h4>3. Factorial</h4>\n      <p>5 factorial, written 5!, means 5 × 4 × 3 × 2 × 1 = 120.</p>\n      <pre><code>num = 5\nfactorial = 1            # MUST start at 1\n\nfor i in range(1, num + 1):\n    factorial = factorial * i\n\nprint(factorial)         # 120</code></pre>\n\n      <div class=\"callout\">\n        <strong>Start at 1, not 0.</strong> An adding accumulator starts at 0. A\n        <em>multiplying</em> one must start at 1 — because anything times zero stays zero\n        forever, and your answer would always be 0.\n      </div>\n\n      <h4>4. Fibonacci</h4>\n      <p>Each number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, 13 …</p>\n      <p><strong>Think it through:</strong> keep two variables, add them to get the next, then\n      shuffle everything forward one place.</p>\n\n      <pre><code>a = 0\nb = 1\nprint(a)\nprint(b)\n\nfor i in range(5):\n    next_num = a + b\n    print(next_num)\n\n    a = b            # shift\n    b = next_num     # shift</code></pre>\n\n      <div class=\"callout\">\n        <strong>The shifting is the whole trick.</strong> Get the order wrong — setting\n        <code>b</code> before <code>a</code> — and you overwrite the value you still needed. Dry-run\n        it on paper if it does not click.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Guess the output</span>\n        <p class=\"w__q\">What does this print?</p>\n        <pre><code>print(892 % 10)\nprint(892 // 10)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">89 then 2</button>\n          <button data-o=\"1\">2 then 89</button>\n          <button data-o=\"2\">8 then 92</button>\n        </div>\n        <p class=\"w__why\"><code>%</code> grabs the leftover — the last digit, 2.\n        <code>//</code> divides and chops the decimal away, leaving 89. Together they let you\n        walk through any number one digit at a time.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Which starting value does each accumulator need?</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Adding up digits</button>\n            <button data-pair=\"b\">Working out a factorial</button>\n            <button data-pair=\"c\">Building a word from letters</button>\n            <button data-pair=\"d\">Assuming a number is prime</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"d\"><code>True</code></button>\n            <button data-pair=\"a\"><code>0</code></button>\n            <button data-pair=\"c\"><code>\"\"</code></button>\n            <button data-pair=\"b\"><code>1</code></button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> Choosing the wrong starting value is one of\n        the sneakiest bugs there is, because the code runs perfectly and just gives a wrong\n        answer.</p>\n      </div>\n    \n      <h4>One loop pattern can solve many number problems</h4>\n      <p>Digit sum, digit count, and number reversal all repeat the same two actions:</p><ol><li>Use <code>% 10</code> to take the final digit.</li><li>Use <code>// 10</code> to remove that digit.</li></ol>\n      <pre><code>number = 482\nwhile number > 0:\n    digit = number % 10\n    print(digit)\n    number //= 10\n# 2, then 8, then 4</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 205\" role=\"img\" aria-label=\"Digit 482 is repeatedly split into last digit and remaining number.\">\n        <rect class=\"box box--dark\" x=\"20\" y=\"70\" width=\"120\" height=\"65\" rx=\"10\"/><text x=\"80\" y=\"109\" text-anchor=\"middle\" class=\"mono on-dark\">482</text>\n        <path class=\"arrow\" d=\"M140 102 H205\"/>\n        <rect class=\"box\" x=\"205\" y=\"35\" width=\"145\" height=\"55\" rx=\"9\"/><text x=\"277\" y=\"68\" text-anchor=\"middle\" class=\"mono\">482 % 10 = 2</text>\n        <rect class=\"box\" x=\"205\" y=\"115\" width=\"145\" height=\"55\" rx=\"9\"/><text x=\"277\" y=\"148\" text-anchor=\"middle\" class=\"mono\">482 // 10 = 48</text>\n        <path class=\"arrow\" d=\"M350 142 H430\"/>\n        <rect class=\"box box--dark\" x=\"430\" y=\"115\" width=\"105\" height=\"55\" rx=\"9\"/><text x=\"482\" y=\"148\" text-anchor=\"middle\" class=\"mono on-dark\">48</text>\n        <path class=\"arrow\" d=\"M535 142 H620\"/><text x=\"630\" y=\"147\" class=\"mono\">repeat</text>\n      </svg>\n\n      <h4>Algorithm starting values matter</h4><ul><li>A sum starts at 0.</li><li>A product such as factorial starts at 1.</li><li>A prime flag often starts at True and changes only when a divisor is found.</li><li>Fibonacci starts with two remembered values, usually 0 and 1.</li></ul>\n      <div class=\"w w-flip\"><span class=\"w__k\">Algorithm cards</span><div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">Factorial accumulator starts at?</span><span class=\"w-flip__back\">1, because multiplying by 0 would destroy the result.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Prime test stops early when?</span><span class=\"w-flip__back\">When a divisor with remainder 0 is found.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Fibonacci must remember?</span><span class=\"w-flip__back\">The previous two values.</span></button></div></div>\n",
      "mcqs": [
        {
          "q": "Which operation grabs the last digit of 892?",
          "options": [
            "/ 10",
            "% 10",
            "// 10",
            "** 2"
          ],
          "answer": 1,
          "why": "The remainder after division by 10 is the last digit."
        },
        {
          "q": "How does a basic prime tester look for a divisor?",
          "options": [
            "Try modulus with candidate numbers",
            "Multiply by every smaller number",
            "Reverse the digits",
            "Use random.choice"
          ],
          "answer": 0,
          "why": "A zero remainder proves divisibility."
        },
        {
          "q": "What must a factorial accumulator start at?",
          "options": [
            "0",
            "1",
            "-1",
            "None"
          ],
          "answer": 1,
          "why": "Starting at zero would keep the product zero."
        },
        {
          "q": "What creates the next Fibonacci value?",
          "options": [
            "Previous + current",
            "Current × 2",
            "Current % 10",
            "A random number"
          ],
          "answer": 0,
          "why": "Each term is the sum of the previous two."
        }
      ],
      "tasks": [
        {
          "id": "u2t16p01",
          "kind": "code",
          "title": "Digit chopper",
          "brief": "Set x=73. Use floor division by 10 to make x become 7, then print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "7"
            },
            {
              "type": "sourceRegex",
              "pattern": "x\\s*(?://=|=\\s*x\\s*//)\\s*10",
              "message": "Use floor division by 10"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use floor division by 10",
            "Your output should begin with: 7"
          ]
        },
        {
          "id": "u2t16p02",
          "kind": "code",
          "title": "Sum digits",
          "brief": "Use a while loop to sum the digits of 456 and print 15.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "% 10",
              "message": "Grab each last digit"
            },
            {
              "type": "sourceIncludes",
              "value": "// 10",
              "message": "Remove each last digit"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=",
              "message": "Use an accumulator"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Grab each last digit",
            "Your output should begin with: 15"
          ]
        },
        {
          "id": "u2t16p03",
          "kind": "code",
          "title": "Prime tester — composite",
          "brief": "Set num=15. Use a loop and Boolean flag to print <code>Not prime</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Not prime"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+\\w+\\s+in\\s+range\\(2\\s*,\\s*num\\)",
              "message": "Test divisors from 2"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop after finding a divisor"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Test divisors from 2",
            "Your output should begin with: Not prime"
          ]
        },
        {
          "id": "u2t16p04",
          "kind": "code",
          "title": "Prime tester — prime",
          "brief": "Use the same general algorithm with num=13 and print <code>Prime</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Prime"
            },
            {
              "type": "sourceIncludes",
              "value": "%",
              "message": "Test remainders"
            },
            {
              "type": "sourceIncludes",
              "value": "is_prime",
              "message": "Use a Boolean flag"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Test remainders",
            "Your output should begin with: Prime"
          ]
        },
        {
          "id": "u2t16p05",
          "kind": "code",
          "title": "Factorial of 4",
          "brief": "Use range and a multiplication accumulator to print 24.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "24"
            },
            {
              "type": "sourceRegex",
              "pattern": "factorial\\s*=\\s*1",
              "message": "Start the product at 1"
            },
            {
              "type": "sourceRegex",
              "pattern": "factorial\\s*\\*=",
              "message": "Multiply into the accumulator"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Start the product at 1",
            "Your output should begin with: 24"
          ]
        },
        {
          "id": "u2t16p06",
          "kind": "code",
          "title": "Fix the factorial start",
          "brief": "Repair the program so it prints 120.",
          "starter": "num = 5\nfactorial = 0\nfor i in range(1, num + 1):\n    factorial *= i\nprint(factorial)\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "120"
            },
            {
              "type": "sourceRegex",
              "pattern": "factorial\\s*=\\s*1",
              "message": "Start at 1, not 0"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Start at 1, not 0",
            "Your output should begin with: 120"
          ]
        },
        {
          "id": "u2t16p07",
          "kind": "code",
          "title": "Fibonacci challenge",
          "brief": "Print the first seven Fibonacci numbers on one line separated by spaces: <code>0 1 1 2 3 5 8</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0 1 1 2 3 5 8"
            },
            {
              "type": "sourceRegex",
              "pattern": "a\\s*,\\s*b\\s*=\\s*b\\s*,\\s*a\\s*\\+\\s*b",
              "message": "Shift both values together"
            },
            {
              "type": "sourceIncludes",
              "value": "for ",
              "message": "Generate the remaining terms in a loop"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Shift both values together",
            "Your output should begin with: 0 1 1 2 3 5 8"
          ]
        },
        {
          "id": "u2t16p08",
          "kind": "code",
          "title": "Mini build — number analyser",
          "brief": "Set num=1234. In one while loop calculate and print: <code>Digit sum: 10</code>, <code>Digits: 4</code>, and <code>Reversed: 4321</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Digit sum: 10\nDigits: 4\nReversed: 4321"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\+=",
              "count": 2,
              "message": "Accumulate sum and count"
            },
            {
              "type": "sourceIncludes",
              "value": "% 10",
              "message": "Grab the last digit"
            },
            {
              "type": "sourceRegex",
              "pattern": "reversed_num\\s*=\\s*reversed_num\\s*\\*\\s*10\\s*\\+\\s*digit",
              "message": "Build the reversed number"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Accumulate sum and count",
            "Your output should begin with: Digit sum: 10"
          ]
        }
      ]
    },
    {
      "id": "u2t17",
      "title": "Problem-Solving Patterns — Palindromes, Armstrong Numbers, Tracing and Complexity",
      "summary": "Test special numbers, trace state, and estimate how loop work grows.",
      "notebookLM": "",
      "notes": "\n      <h4>Palindromes</h4>\n      <p>A palindrome reads the same forwards and backwards: <em>madam</em>, <em>racecar</em>,\n      <em>12321</em>.</p>\n      <p>Python has a lovely shortcut for reversing text — <code>[::-1]</code>. You will learn\n      exactly how it works in Unit 3; for now just use it.</p>\n\n      <pre><code>original = \"12321\"\nbackwards = original[::-1]\n\nif original == backwards:\n    print(\"It is a palindrome!\")\nelse:\n    print(\"Not a palindrome.\")</code></pre>\n\n      <h4>Armstrong numbers</h4>\n      <p>Take every digit, raise it to the power of how many digits there are, and add them up.\n      If you get the original number back, it is an Armstrong number.</p>\n      <p>153 has three digits: 1³ + 5³ + 3³ = 1 + 125 + 27 = <strong>153</strong>. It is one.</p>\n\n      <pre><code>num = 153\ntemp = num           # a safe copy!\ntotal = 0\n\nwhile temp > 0:\n    digit = temp % 10\n    total += digit ** 3\n    temp = temp // 10\n\nif total == num:\n    print(\"Armstrong Number!\")\nelse:\n    print(\"Not an Armstrong number.\")</code></pre>\n\n      <div class=\"callout\">\n        <strong>Why the copy matters.</strong> Chopping digits destroys the number. If you chop\n        <code>num</code> itself, by the end it is 0 and you have nothing left to compare\n        against. Always work on <code>temp</code> and keep <code>num</code> untouched.\n      </div>\n\n      <h4>Trace tables — the accountant's ledger</h4>\n      <p>An accountant does not guess how much money a business has. They write every penny\n      down, line by line.</p>\n      <p>When your loop gives a wrong answer, staring at the screen will not help. Draw a\n      <strong>trace table</strong> instead: a chart tracking every variable through every round.</p>\n\n      <pre><code>x = 0\nfor i in range(1, 4):\n    x = x + i</code></pre>\n\n      <table>\n        <tr><th>Round</th><th>i</th><th>x before</th><th>x after</th></tr>\n        <tr><td>1</td><td>1</td><td>0</td><td><strong>1</strong></td></tr>\n        <tr><td>2</td><td>2</td><td>1</td><td><strong>3</strong></td></tr>\n        <tr><td>3</td><td>3</td><td>3</td><td><strong>6</strong></td></tr>\n      </table>\n\n      <p>The final answer is 6 — and you knew it before running a single line.</p>\n\n      <div class=\"callout\">\n        <strong>Do this in exams.</strong> Almost every paper has a \"what is the output\" loop\n        question. A four-row table takes ninety seconds and turns a guess into a certainty.\n      </div>\n\n      <h4>How slow is my program?</h4>\n      <p>Finding \"Apple\" in a dictionary is quick. Reading the whole dictionary is not.\n      <strong>Time complexity</strong> is how computer scientists describe the way a program\n      slows down as the data grows.</p>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 195\" role=\"img\" aria-label=\"Constant time stays flat, linear time doubles with the data, quadratic time from nested loops grows four times.\">\n        <rect class=\"box\" x=\"8\" y=\"34\" width=\"216\" height=\"132\" rx=\"8\"/>\n        <text x=\"116\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:13px\">O(1)</text>\n        <text x=\"116\" y=\"86\" text-anchor=\"middle\" style=\"font-size:12px\">constant</text>\n        <path class=\"good\" d=\"M32 132 h168\" stroke=\"#1E7F72\" stroke-width=\"2.5\"/>\n        <text x=\"116\" y=\"156\" text-anchor=\"middle\" style=\"font-size:11.5px\">same speed, always</text>\n\n        <rect class=\"box\" x=\"242\" y=\"34\" width=\"216\" height=\"132\" rx=\"8\"/>\n        <text x=\"350\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:13px\">O(N)</text>\n        <text x=\"350\" y=\"86\" text-anchor=\"middle\" style=\"font-size:12px\">one loop</text>\n        <path class=\"good\" d=\"M266 138 L434 100\" stroke=\"#D67F19\" stroke-width=\"2.5\"/>\n        <text x=\"350\" y=\"156\" text-anchor=\"middle\" style=\"font-size:11.5px\">twice the data, twice as long</text>\n\n        <rect class=\"box box--dark\" x=\"476\" y=\"34\" width=\"216\" height=\"132\" rx=\"8\"/>\n        <text x=\"584\" y=\"62\" text-anchor=\"middle\" class=\"mono accent\" style=\"font-size:13px\">O(N²)</text>\n        <text x=\"584\" y=\"86\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">nested loops</text>\n        <path class=\"good\" d=\"M500 140 Q600 138 668 96\" stroke=\"#CF4A3C\" stroke-width=\"2.5\"/>\n        <text x=\"584\" y=\"156\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:11.5px\">twice the data, FOUR times as long</text>\n      </svg>\n\n      <table>\n        <tr><th>Name</th><th>What it means</th><th>Comes from</th></tr>\n        <tr><td>O(1)</td><td>Same speed whatever the size</td><td>A single <code>print()</code></td></tr>\n        <tr><td>O(N)</td><td>Double the data, double the time</td><td>One loop over the data</td></tr>\n        <tr><td>O(N²)</td><td>Double the data, <em>four times</em> the time</td><td>A loop inside a loop</td></tr>\n      </table>\n\n      <div class=\"callout\">\n        <strong>Why you should care already.</strong> With 10 items, a nested loop does 100\n        rounds — instant. With 10,000 items it does 100 million. The code is identical; only\n        the data grew. This is why \"it worked on my small test file\" is such a common story.\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"1\">\n        <span class=\"w__k\">Trace it</span>\n        <p class=\"w__q\">Draw the table on paper. What is the final value?</p>\n        <pre><code>total = 10\nfor i in range(1, 3):\n    total = total - i\nprint(total)</code></pre>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">10</button>\n          <button data-o=\"1\">7</button>\n          <button data-o=\"2\">4</button>\n        </div>\n        <p class=\"w__why\"><code>range(1, 3)</code> gives 1 and 2 — only two rounds, because 3 is\n        never included. Round 1: 10 − 1 = 9. Round 2: 9 − 2 = 7.</p>\n      </div>\n\n      <div class=\"w w-guess\" data-answer=\"2\">\n        <span class=\"w__k\">Guess the answer</span>\n        <p class=\"w__q\">A single loop over 10 items takes 1 second. Roughly how long does a\n        nested loop over the same 10 items take?</p>\n        <div class=\"w-guess__opts\">\n          <button data-o=\"0\">Also 1 second</button>\n          <button data-o=\"1\">2 seconds</button>\n          <button data-o=\"2\">About 10 seconds</button>\n        </div>\n        <p class=\"w__why\">10 × 10 = 100 rounds instead of 10, so roughly ten times the work.\n        Now imagine 1,000 items: one loop does 1,000 rounds, the nested one does a million.</p>\n      </div>\n\n      <div class=\"w w-match\">\n        <span class=\"w__k\">Match the pairs</span>\n        <p class=\"w__q\">Match each idea to its description.</p>\n        <div class=\"w-match__grid\">\n          <div class=\"w-match__col\">\n            <button data-pair=\"a\">Palindrome</button>\n            <button data-pair=\"b\">Armstrong number</button>\n            <button data-pair=\"c\">Trace table</button>\n            <button data-pair=\"d\">O(N²)</button>\n          </div>\n          <div class=\"w-match__col\">\n            <button data-pair=\"c\">A ledger tracking variables round by round</button>\n            <button data-pair=\"a\">Reads the same both ways</button>\n            <button data-pair=\"d\">Comes from nesting one loop inside another</button>\n            <button data-pair=\"b\">Digits raised to the power of how many there are</button>\n          </div>\n        </div>\n        <p class=\"w__why\"><strong>All four.</strong> That is the end of Unit 2. Next comes the\n        test — 30 questions, 60 marks — and then your project.</p>\n      </div>\n    \n      <h4>Compare the original with a transformed value</h4>\n      <p>Palindrome and Armstrong checks both preserve the original value, create or calculate a\n      second value, and compare them at the end.</p>\n      <pre><code>word = \"level\"\nreversed_word = word[::-1]\nprint(word == reversed_word)     # True</code></pre>\n\n      <svg class=\"fig\" viewBox=\"0 0 700 210\" role=\"img\" aria-label=\"The word LEVEL reflected in a mirror reads the same backward.\">\n        <text x=\"110\" y=\"115\" class=\"mono\" style=\"font-size:34px;letter-spacing:8px\">LEVEL</text>\n        <line x1=\"350\" y1=\"35\" x2=\"350\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"4\"/>\n        <text x=\"590\" y=\"115\" text-anchor=\"end\" class=\"mono\" style=\"font-size:34px;letter-spacing:8px\">LEVEL</text>\n        <path class=\"arrow\" d=\"M290 155 H165\"/><path class=\"arrow\" d=\"M410 155 H535\"/>\n        <text x=\"350\" y=\"200\" text-anchor=\"middle\" class=\"lbl\">same in both directions</text>\n      </svg>\n\n      <h4>Trace tables turn guessing into evidence</h4>\n      <table><tr><th>Iteration</th><th>i</th><th>x before</th><th>x after</th></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>2</td><td>2</td><td>1</td><td>3</td></tr><tr><td>3</td><td>3</td><td>3</td><td>6</td></tr></table>\n      <h4>Complexity intuition</h4><p>One loop over N items performs about N steps: O(N). A loop inside that loop performs about N × N steps: O(N²). This is not a stopwatch result; it describes how work grows as the input grows.</p>\n      <div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Growth game</span><p class=\"w__q\">Both loops run 20 times. About how many inner actions happen?</p><div class=\"w-guess__opts\"><button data-o=\"0\">20</button><button data-o=\"1\">40</button><button data-o=\"2\">400</button></div><p class=\"w__why\">The outer loop runs 20 times, and each time the inner loop runs 20 times: 20 × 20 = 400.</p></div>\n",
      "mcqs": [
        {
          "q": "What is a palindrome?",
          "options": [
            "A value that reads the same forward and backward",
            "A number divisible only by 1",
            "Any even number",
            "A loop error"
          ],
          "answer": 0,
          "why": "madam and 12321 are examples."
        },
        {
          "q": "Why keep a copy when testing an Armstrong number by digit chopping?",
          "options": [
            "The working loop destroys its number",
            "Copies run faster",
            "Python forbids comparing one variable",
            "The random module needs it"
          ],
          "answer": 0,
          "why": "Repeated //10 eventually turns the working number into zero."
        },
        {
          "q": "What is the purpose of a trace table?",
          "options": [
            "Track variable changes step by step",
            "Make code run faster automatically",
            "Store passwords",
            "Generate random values"
          ],
          "answer": 0,
          "why": "It exposes the program state during each cycle."
        },
        {
          "q": "What commonly produces O(N²) work?",
          "options": [
            "One print",
            "Two full nested loops",
            "One variable assignment",
            "One comparison"
          ],
          "answer": 1,
          "why": "N outer cycles times N inner cycles gives N² operations."
        }
      ],
      "tasks": [
        {
          "id": "u2t17p01",
          "kind": "code",
          "title": "Palindrome test",
          "brief": "Set word=\"madam\". Use [::-1] and if-else to print <code>Palindrome</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Palindrome"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Create a reversed copy with slicing"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Compare the two versions"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create a reversed copy with slicing",
            "Your output should begin with: Palindrome"
          ]
        },
        {
          "id": "u2t17p02",
          "kind": "code",
          "title": "Non-palindrome test",
          "brief": "Set word=\"python\" and print <code>Not palindrome</code> with the same approach.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Not palindrome"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Reverse the text"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Use the false path"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Reverse the text",
            "Your output should begin with: Not palindrome"
          ]
        },
        {
          "id": "u2t17p03",
          "kind": "code",
          "title": "Armstrong 153",
          "brief": "Use digit manipulation and an accumulator to print <code>Armstrong Number</code> for 153.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Armstrong Number"
            },
            {
              "type": "sourceIncludes",
              "value": "digit ** 3",
              "message": "Cube each digit"
            },
            {
              "type": "sourceIncludes",
              "value": "temp //= 10",
              "message": "Remove each digit"
            },
            {
              "type": "sourceRegex",
              "pattern": "temp\\s*=\\s*num",
              "message": "Keep a working copy"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Cube each digit",
            "Your output should begin with: Armstrong Number"
          ]
        },
        {
          "id": "u2t17p04",
          "kind": "code",
          "title": "Armstrong 100",
          "brief": "Run the same general logic for 100 and print <code>Not Armstrong</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Not Armstrong"
            },
            {
              "type": "sourceIncludes",
              "value": "% 10",
              "message": "Extract digits"
            },
            {
              "type": "sourceIncludes",
              "value": "** 3",
              "message": "Cube them"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Extract digits",
            "Your output should begin with: Not Armstrong"
          ]
        },
        {
          "id": "u2t17p05",
          "kind": "code",
          "title": "Trace-table result",
          "brief": "Translate this trace into code: total starts 10; for i in range(1,3), subtract i. Print the final 7.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "7"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+i\\s+in\\s+range\\(1\\s*,\\s*3\\)",
              "message": "Use the two-step range"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*-=\\s*i",
              "message": "Update total each step"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the two-step range",
            "Your output should begin with: 7"
          ]
        },
        {
          "id": "u2t17p06",
          "kind": "code",
          "title": "Linear operation counter",
          "brief": "Loop through range(10), add 1 to operations each time, and print <code>O(N) operations: 10</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "O(N) operations: 10"
            },
            {
              "type": "sourceIncludes",
              "value": "range(10)",
              "message": "Use one ten-step loop"
            },
            {
              "type": "sourceRegex",
              "pattern": "operations\\s*\\+=\\s*1",
              "message": "Count operations"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use one ten-step loop",
            "Your output should begin with: O(N) operations: 10"
          ]
        },
        {
          "id": "u2t17p07",
          "kind": "code",
          "title": "Quadratic operation counter",
          "brief": "Use nested range(10) loops to count operations and print <code>O(N^2) operations: 100</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "O(N^2) operations: 100"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "range\\(10\\)",
              "count": 2,
              "message": "Use two ten-step loops"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "\\bfor\\b",
              "count": 2,
              "message": "Nest the loops"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use two ten-step loops",
            "Your output should begin with: O(N^2) operations: 100"
          ]
        },
        {
          "id": "u2t17p08",
          "kind": "code",
          "title": "Mini build — special-number report",
          "brief": "For values=[11,44,45,153], print one line per value in this exact form: <code>11: palindrome=True</code>, etc. Treat values as text for palindrome checks; additionally print <code>153: armstrong=True</code> as a fifth line using digit logic.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "11: palindrome=True\n44: palindrome=True\n45: palindrome=False\n153: palindrome=False\n153: armstrong=True"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Use string reversal for palindromes"
            },
            {
              "type": "sourceIncludes",
              "value": "% 10",
              "message": "Use digit extraction for Armstrong"
            },
            {
              "type": "sourceIncludes",
              "value": "** 3",
              "message": "Cube Armstrong digits"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use string reversal for palindromes",
            "Your output should begin with: 11: palindrome=True"
          ]
        }
      ]
    },
    {
      "id": "u2cp04",
      "title": "Revision Checkpoint 4 — Randomness and Problem-Solving Algorithms",
      "summary": "Mix random simulations, pattern loops, digit work, prime logic, factorial, and special-number checks.",
      "notebookLM": "",
      "notes": "<h4>Stop, mix, and remember</h4><p>Mix random simulations, pattern loops, digit work, prime logic, factorial, and special-number checks.</p>\n    <div class=\"callout\"><strong>Checkpoint rule:</strong> Try each question without opening an earlier chapter. A wrong answer is a map showing what to revise.</div>\n    <svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Four ways to prove that the idea is really yours\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Recall</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Predict</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Fix</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Build</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Four ways to prove that the idea is really yours</text></svg>\n    <div class=\"w\"><span class=\"w__k\">Tap to reveal</span><div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">What if I get something wrong?</span><span class=\"w-flip__back\">Read the explanation, retry the idea, and write one small example.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Should I rush?</span><span class=\"w-flip__back\">No. Dry-run the code before pressing Run.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">What unlocks next?</span><span class=\"w-flip__back\">Clear the quiz and complete every checkpoint task.</span></button></div></div>",
      "mcqs": [
        {
          "q": "Which tool picks one list item?",
          "options": [
            "shuffle",
            "choice",
            "uniform",
            "assert"
          ],
          "answer": 1,
          "why": "random.choice selects one element."
        },
        {
          "q": "Which operation removes the last decimal digit from a positive integer?",
          "options": [
            "% 10",
            "// 10",
            "/ 10",
            "** 10"
          ],
          "answer": 1,
          "why": "Floor division by 10 chops the last digit."
        },
        {
          "q": "Why does a factorial accumulator begin at 1?",
          "options": [
            "Zero would destroy every product",
            "range requires it",
            "One is always the answer",
            "Python forbids zero"
          ],
          "answer": 0,
          "why": "Anything multiplied by zero stays zero."
        },
        {
          "q": "Which pattern prints rows and columns?",
          "options": [
            "Nested loops",
            "One assert",
            "One assignment",
            "Only random.choice"
          ],
          "answer": 0,
          "why": "Outer and inner loops control two dimensions."
        },
        {
          "q": "What does shuffle return for assignment purposes?",
          "options": [
            "A new shuffled list",
            "None; it modifies the list",
            "One random item",
            "The list length"
          ],
          "answer": 1,
          "why": "shuffle works in place."
        },
        {
          "q": "What is O(N) intuition?",
          "options": [
            "Work grows roughly with the number of items",
            "Work never changes",
            "Work squares for one print",
            "The program is wrong"
          ],
          "answer": 0,
          "why": "A single full pass is linear."
        },
        {
          "q": "What is the last digit of 347 using %10?",
          "options": [
            "3",
            "4",
            "7",
            "34"
          ],
          "answer": 2,
          "why": "347 % 10 is 7."
        },
        {
          "q": "Which word is a palindrome?",
          "options": [
            "python",
            "level",
            "computer",
            "random"
          ],
          "answer": 1,
          "why": "level reads the same in both directions."
        }
      ],
      "tasks": [
        {
          "id": "u2cp04p01",
          "kind": "code",
          "title": "Random simulation",
          "brief": "Set seed 3 and print three dice rolls; then print their total 12.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2\n5\n5\nTotal: 12"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(3)",
              "message": "Use seed 3"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=",
              "message": "Accumulate rolls"
            }
          ],
          "level": "Revision Checkpoint — Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use seed 3",
            "Your output should begin with: 2"
          ]
        },
        {
          "id": "u2cp04p02",
          "kind": "code",
          "title": "Pattern repair",
          "brief": "Fix the indentation to print 12 / 12.",
          "starter": "for row in range(2):\n    for col in range(1, 3):\n        print(col, end=\"\")\n        print()\n",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "12\n12"
            },
            {
              "type": "sourceRegex",
              "pattern": "for col[^\\n]+:\\n\\s{8}print[^\\n]+\\n\\s{4}print\\(\\)",
              "message": "New line after inner loop"
            }
          ],
          "level": "Revision Checkpoint — Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "New line after inner loop",
            "Your output should begin with: 12"
          ]
        },
        {
          "id": "u2cp04p03",
          "kind": "code",
          "title": "Digit algorithm",
          "brief": "Sum the digits of 902 and print 11.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "11"
            },
            {
              "type": "sourceIncludes",
              "value": "% 10",
              "message": "Extract digits"
            },
            {
              "type": "sourceRegex",
              "pattern": "//=?\\s*10",
              "message": "Remove digits"
            }
          ],
          "level": "Revision Checkpoint — Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Extract digits",
            "Your output should begin with: 11"
          ]
        },
        {
          "id": "u2cp04p04",
          "kind": "code",
          "title": "Prime and factorial",
          "brief": "Print whether 7 is prime on line 1, then print 5! on line 2: <code>True</code> and <code>120</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\n120"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop divisor search early"
            },
            {
              "type": "sourceRegex",
              "pattern": "factorial\\s*=\\s*1",
              "message": "Start product at 1"
            }
          ],
          "level": "Revision Checkpoint — Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Stop divisor search early",
            "Your output should begin with: True"
          ]
        },
        {
          "id": "u2cp04p05",
          "kind": "code",
          "title": "Checkpoint mini build — algorithm dashboard",
          "brief": "For num=153, print exactly: <code>Digit sum: 9</code>, <code>Palindrome: False</code>, <code>Armstrong: True</code>. Use a working copy for digit calculations.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Digit sum: 9\nPalindrome: False\nArmstrong: True"
            },
            {
              "type": "sourceIncludes",
              "value": "% 10",
              "message": "Extract digits"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Check the palindrome"
            },
            {
              "type": "sourceIncludes",
              "value": "** 3",
              "message": "Calculate Armstrong total"
            }
          ],
          "level": "Revision Checkpoint — Task 5",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Extract digits",
            "Your output should begin with: Digit sum: 9"
          ]
        }
      ]
    },
    {
      "id": "u2mini01",
      "title": "Guided Mini-Project — Number Guessing Game Simulator",
      "summary": "Build a complete guessing-game flow in eight tested stages.",
      "notebookLM": "",
      "notes": "\n<h4>Build one game in eight safe stages</h4>\n<p>This guided project combines the full Unit 2 path: a secret value, repeated guesses, comparisons, if-elif-else feedback, lives, break, loop completion, and a final report.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Each stage adds one tested idea to the same game\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"75\" height=\"72\" rx=\"8\"/><text x=\"48\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:9px\">Title and data</text><path class=\"arrow\" d=\"M90 81 h18\"/><rect class=\"box box--dark\" x=\"96\" y=\"45\" width=\"75\" height=\"72\" rx=\"8\"/><text x=\"134\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:9px\">One comparison</text><path class=\"arrow\" d=\"M176 81 h18\"/><rect class=\"box\" x=\"183\" y=\"45\" width=\"75\" height=\"72\" rx=\"8\"/><text x=\"220\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:9px\">Guess loop</text><path class=\"arrow\" d=\"M263 81 h18\"/><rect class=\"box box--dark\" x=\"269\" y=\"45\" width=\"75\" height=\"72\" rx=\"8\"/><text x=\"307\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:9px\">High / low feedback</text><path class=\"arrow\" d=\"M349 81 h18\"/><rect class=\"box\" x=\"356\" y=\"45\" width=\"75\" height=\"72\" rx=\"8\"/><text x=\"393\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:9px\">Lives</text><path class=\"arrow\" d=\"M436 81 h18\"/><rect class=\"box box--dark\" x=\"442\" y=\"45\" width=\"75\" height=\"72\" rx=\"8\"/><text x=\"480\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:9px\">break</text><path class=\"arrow\" d=\"M522 81 h18\"/><rect class=\"box\" x=\"529\" y=\"45\" width=\"75\" height=\"72\" rx=\"8\"/><text x=\"566\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:9px\">Random secret</text><path class=\"arrow\" d=\"M609 81 h18\"/><rect class=\"box box--dark\" x=\"615\" y=\"45\" width=\"75\" height=\"72\" rx=\"8\"/><text x=\"652\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:9px\">Complete game</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Each stage adds one tested idea to the same game</text></svg>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Wrong guesses repeat; the correct guess leaves the cycle\">\n      <path d=\"M120 85 C210 15 490 15 580 85 C490 155 210 155 120 85\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"7 7\" opacity=\".35\"/>\n      <circle r=\"10\" class=\"accent\">\n        <animateMotion dur=\"4s\" repeatCount=\"indefinite\" path=\"M120 85 C210 15 490 15 580 85 C490 155 210 155 120 85\"/>\n      </circle>\n      <text x=\"350\" y=\"88\" text-anchor=\"middle\" class=\"lbl\">Wrong guesses repeat; the correct guess leaves the cycle</text>\n      <text x=\"350\" y=\"112\" text-anchor=\"middle\" style=\"font-size:12px\">The moving point shows one repeated cycle.</text>\n    </svg>\n<div class=\"callout\"><strong>Why fixed guesses first?</strong> Automatic checking needs repeatable data. The final submitted project can replace the list with <code>input()</code>.</div>\n<div class=\"w\"><span class=\"w__k\">Tap to reveal</span><div class=\"w-flip\"><button class=\"w-flip__card\"><span class=\"w-flip__front\">Stage 1–2</span><span class=\"w-flip__back\">Make the data and one decision work.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Stage 3–4</span><span class=\"w-flip__back\">Add a loop and high/low feedback.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Stage 5–6</span><span class=\"w-flip__back\">Track lives and stop at the right moment.</span></button><button class=\"w-flip__card\"><span class=\"w-flip__front\">Stage 7–8</span><span class=\"w-flip__back\">Add seeded randomness, then assemble the complete simulator.</span></button></div></div>\n",
      "mcqs": [
        {
          "q": "What should be built first in a larger game?",
          "options": [
            "A small working stage",
            "Every feature at once",
            "The README only",
            "Random colours"
          ],
          "answer": 0,
          "why": "Small stages make errors easier to find."
        },
        {
          "q": "Why use a fixed seed during automated practice?",
          "options": [
            "To make results repeatable",
            "To remove all loops",
            "To make numbers larger",
            "To skip import"
          ],
          "answer": 0,
          "why": "Repeatable output can be checked reliably."
        },
        {
          "q": "Which keyword ends the guessing loop after success?",
          "options": [
            "continue",
            "break",
            "pass",
            "assert"
          ],
          "answer": 1,
          "why": "break exits the loop."
        },
        {
          "q": "Why keep lives outside the loop?",
          "options": [
            "So the value is not reset every guess",
            "Because variables cannot be inside loops",
            "To make it a string",
            "Because range requires it"
          ],
          "answer": 0,
          "why": "Lives must preserve the earlier wrong guesses."
        }
      ],
      "tasks": [
        {
          "id": "u2mini01p01",
          "kind": "code",
          "title": "Stage 1 — Game title and data",
          "brief": "Create <code>secret = 6</code> and <code>guess = 2</code>. Print <code>NUMBER GUESSING GAME</code>, then both values on separate labelled lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "NUMBER GUESSING GAME\nSecret: 6\nGuess: 2"
            },
            {
              "type": "sourceRegex",
              "pattern": "secret\\s*=\\s*6",
              "message": "Create the secret"
            },
            {
              "type": "sourceRegex",
              "pattern": "guess\\s*=\\s*2",
              "message": "Create the guess"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create the secret",
            "Your output should begin with: NUMBER GUESSING GAME"
          ]
        },
        {
          "id": "u2mini01p02",
          "kind": "code",
          "title": "Stage 2 — One comparison",
          "brief": "With secret 6 and guess 2, use if-elif-else to print <code>Too low</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Too low"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Use three-way feedback"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Include the low path"
            }
          ],
          "level": "Level 1 — Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use three-way feedback",
            "Your output should begin with: Too low"
          ]
        },
        {
          "id": "u2mini01p03",
          "kind": "code",
          "title": "Stage 3 — Repeated guesses",
          "brief": "Create guesses=[2,9,6]. Loop and print each as <code>Guess: X</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Guess: 2\nGuess: 9\nGuess: 6"
            },
            {
              "type": "sourceIncludes",
              "value": "for ",
              "message": "Loop through the guesses list"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Loop through the guesses list",
            "Your output should begin with: Guess: 2"
          ]
        },
        {
          "id": "u2mini01p04",
          "kind": "code",
          "title": "Stage 4 — Feedback loop",
          "brief": "For secret 6 and guesses [2,9,6], print Too low, Too high, Correct. Do not stop yet.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Too low\nToo high\nCorrect"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Compare high and low"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "print\\(",
              "count": 3,
              "message": "Provide all feedback messages"
            }
          ],
          "level": "Level 2 — Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Compare high and low",
            "Your output should begin with: Too low"
          ]
        },
        {
          "id": "u2mini01p05",
          "kind": "code",
          "title": "Stage 5 — Add lives",
          "brief": "Start lives=3. For guesses [2,9,6], reduce lives only after wrong guesses. Print lives after every guess: 2,1,1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2\n1\n1"
            },
            {
              "type": "sourceRegex",
              "pattern": "lives\\s*-=\\s*1",
              "message": "Remove a life only after wrong guesses"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+guess\\s*!=\\s*secret",
              "message": "Protect lives on a correct guess"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Remove a life only after wrong guesses",
            "Your output should begin with: 2"
          ]
        },
        {
          "id": "u2mini01p06",
          "kind": "code",
          "title": "Stage 6 — Stop on success",
          "brief": "Use break after the correct guess. Add a fourth guess 1 after 6 and prove it never runs by printing only 2,9,6.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2\n9\n6"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Break after success"
            },
            {
              "type": "sourceRegex",
              "pattern": "if\\s+guess\\s*==\\s*secret\\s*:\\n(?:.|\\n)*?break",
              "message": "Place break in the correct branch"
            }
          ],
          "level": "Level 3 — Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Break after success",
            "Your output should begin with: 2"
          ]
        },
        {
          "id": "u2mini01p07",
          "kind": "code",
          "title": "Stage 7 — Repeatable random secret",
          "brief": "Import random, set seed 7, and generate secret with randint(1,10). Print <code>Secret generated: 6</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Secret generated: 6"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(7)",
              "message": "Use seed 7"
            },
            {
              "type": "sourceRegex",
              "pattern": "random\\.randint\\(1\\s*,\\s*10\\)",
              "message": "Generate a 1-10 secret"
            }
          ],
          "level": "Level 4 — Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use seed 7",
            "Your output should begin with: Secret generated: 6"
          ]
        },
        {
          "id": "u2mini01p08",
          "kind": "code",
          "title": "Stage 8 — Complete guessing simulator",
          "brief": "Use seed 7, secret randint(1,10), guesses=[2,9,6], and lives=3. Print the exact game report shown in the expected-output hint. Use high/low feedback, reduce lives for wrong guesses, break on success, then print Game won.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "NUMBER GUESSING GAME\nGuess 2: Too low | Lives: 2\nGuess 9: Too high | Lives: 1\nGuess 6: Correct! | Lives: 1\nGame won"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed(7)",
              "message": "Use the repeatable secret"
            },
            {
              "type": "sourceIncludes",
              "value": "break",
              "message": "Stop on success"
            },
            {
              "type": "sourceRegex",
              "pattern": "lives\\s*-=\\s*1",
              "message": "Remove lives for wrong guesses"
            },
            {
              "type": "sourceIncludes",
              "value": "elif",
              "message": "Use high/low/correct branches"
            }
          ],
          "level": "Level 5 — Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the repeatable secret",
            "Expected first line: NUMBER GUESSING GAME. Final line: Game won."
          ]
        }
      ]
    }
  ],
  "test": {
    "title": "Unit 2 Final Test — Control Flow and Iterative Statements",
    "marksPerQuestion": 2,
    "durationMinutes": 75,
    "questions": [
      {
        "q": "Which exact spelling is a Python Boolean value?",
        "options": [
          "True",
          "TRUE",
          "true",
          "Yes"
        ],
        "answer": 0
      },
      {
        "q": "What does 5 != 7 evaluate to?",
        "options": [
          "False",
          "True",
          "2",
          "Error"
        ],
        "answer": 1
      },
      {
        "q": "Which operator requires both conditions to pass?",
        "options": [
          "or",
          "not",
          "and",
          "!="
        ],
        "answer": 2
      },
      {
        "q": "Which operator reverses a Boolean answer?",
        "options": [
          "and",
          "or",
          "==",
          "not"
        ],
        "answer": 3
      },
      {
        "q": "A form field contains empty text. How is it treated in a Boolean context?",
        "options": [
          "Falsy",
          "Truthy",
          "A number",
          "An error"
        ],
        "answer": 0
      },
      {
        "q": "What is bool([0])?",
        "options": [
          "False",
          "True",
          "0",
          "Error"
        ],
        "answer": 1
      },
      {
        "q": "In not A and B or C, which logical operation is performed before and/or?",
        "options": [
          "or",
          "and",
          "not",
          "else"
        ],
        "answer": 2
      },
      {
        "q": "Why can True or (1/0) finish safely?",
        "options": [
          "Division by zero becomes 0",
          "Parentheses remove errors",
          "True changes 1/0 to False",
          "or short-circuits after True"
        ],
        "answer": 3
      },
      {
        "q": "What punctuation ends an if line?",
        "options": [
          "A colon :",
          "A semicolon ;",
          "A comma ,",
          "A period ."
        ],
        "answer": 0
      },
      {
        "q": "What groups statements inside an if block?",
        "options": [
          "Capital letters",
          "Indentation",
          "Square brackets",
          "The word End"
        ],
        "answer": 1
      },
      {
        "q": "What runs when every earlier if/elif condition is False?",
        "options": [
          "continue",
          "assert",
          "else",
          "range"
        ],
        "answer": 2
      },
      {
        "q": "In an if-elif chain, how many matching branches normally run?",
        "options": [
          "Every True branch",
          "Always two branches",
          "No branch",
          "Only the first True branch"
        ],
        "answer": 3
      },
      {
        "q": "An airport checks a boarding pass only after an ID passes. Which structure models this?",
        "options": [
          "A nested conditional",
          "A loop with no condition",
          "A random choice",
          "A list inside a string"
        ],
        "answer": 0
      },
      {
        "q": "Which is a valid conditional expression?",
        "options": [
          "label = if ready \"Yes\" else \"No\"",
          "label = \"Yes\" if ready else \"No\"",
          "ready ? \"Yes\" : \"No\"",
          "label if = ready"
        ],
        "answer": 1
      },
      {
        "q": "Which symbol compares equality?",
        "options": [
          "=",
          "!=",
          "==",
          ">="
        ],
        "answer": 2
      },
      {
        "q": "A student traces x and y on paper before running the program. Which technique is this?",
        "options": [
          "Offline installation",
          "Code deletion",
          "Speed testing",
          "Dry-running"
        ],
        "answer": 3
      },
      {
        "q": "Why use a loop?",
        "options": [
          "Repeat a block without copying it many times",
          "Make every variable global",
          "Avoid all conditions",
          "Install modules"
        ],
        "answer": 0
      },
      {
        "q": "When does while condition stop repeating?",
        "options": [
          "After exactly ten cycles",
          "When its condition becomes False",
          "At the end of any string",
          "Only after break"
        ],
        "answer": 1
      },
      {
        "q": "Which loop naturally visits every list item?",
        "options": [
          "if",
          "assert",
          "for",
          "pass"
        ],
        "answer": 2
      },
      {
        "q": "What must happen to a while-loop counter?",
        "options": [
          "It must stay constant",
          "It must become text",
          "It must be imported",
          "It must update toward the stopping condition"
        ],
        "answer": 3
      },
      {
        "q": "With 3 outer and 4 inner iterations, how many inner-body runs occur?",
        "options": [
          "12",
          "7",
          "4",
          "3"
        ],
        "answer": 0
      },
      {
        "q": "What is an infinite loop?",
        "options": [
          "A loop over a long list",
          "A loop whose stopping condition is never reached",
          "A loop with comments",
          "Any nested loop"
        ],
        "answer": 1
      },
      {
        "q": "A for loop reaches its end without break. Which attached block may now execute?",
        "options": [
          "The first if block",
          "An assertion handler",
          "The loop else block",
          "The import block"
        ],
        "answer": 2
      },
      {
        "q": "Which terminal shortcut interrupts a runaway program?",
        "options": [
          "Ctrl + S",
          "Ctrl + V",
          "Alt + Enter",
          "Ctrl + C"
        ],
        "answer": 3
      },
      {
        "q": "The word quit ends an unknown-length input loop. What role does quit play?",
        "options": [
          "It is the sentinel value",
          "It is the accumulator",
          "It is the iterator",
          "It is the random seed"
        ],
        "answer": 0
      },
      {
        "q": "Which pattern fits exactly 20 repetitions?",
        "options": [
          "Sentinel-controlled loop",
          "Counter-controlled loop",
          "Infinite loop",
          "Iterator exhaustion"
        ],
        "answer": 1
      },
      {
        "q": "Where should total = 0 normally be created?",
        "options": [
          "Inside every iteration",
          "After printing",
          "Before the accumulation loop",
          "Inside a loop else"
        ],
        "answer": 2
      },
      {
        "q": "What does an accumulator do?",
        "options": [
          "Stops the loop immediately",
          "Imports a module",
          "Creates random values",
          "Builds a running result"
        ],
        "answer": 3
      },
      {
        "q": "A search finds its target and must leave the loop immediately. Which keyword is required?",
        "options": [
          "break",
          "continue",
          "pass",
          "return"
        ],
        "answer": 0
      },
      {
        "q": "A damaged item should be ignored while inspection continues with the next item. Which keyword?",
        "options": [
          "break",
          "continue",
          "return",
          "assert"
        ],
        "answer": 1
      },
      {
        "q": "A branch is planned but its code is not written yet. Which placeholder keeps the syntax valid?",
        "options": [
          "break",
          "continue",
          "pass",
          "return"
        ],
        "answer": 2
      },
      {
        "q": "What happens to loop else after break?",
        "options": [
          "It runs twice",
          "It becomes elif",
          "It runs before break",
          "It is skipped"
        ],
        "answer": 3
      },
      {
        "q": "What is assert used for?",
        "options": [
          "Checking a programmer assumption during debugging",
          "Generating ranges",
          "Formatting output",
          "Choosing random items"
        ],
        "answer": 0
      },
      {
        "q": "What happens when an assertion condition is False?",
        "options": [
          "The condition becomes True",
          "AssertionError is raised",
          "The loop restarts",
          "Nothing happens"
        ],
        "answer": 1
      },
      {
        "q": "Where is return primarily used?",
        "options": [
          "Only inside lists",
          "Only inside while loops",
          "Inside a function",
          "Before import"
        ],
        "answer": 2
      },
      {
        "q": "What does return do?",
        "options": [
          "Skips one loop item",
          "Shuffles a list",
          "Creates an iterator",
          "Sends a value back and ends the function"
        ],
        "answer": 3
      },
      {
        "q": "What values come from range(4)?",
        "options": [
          "0, 1, 2, 3",
          "1, 2, 3, 4",
          "0, 1, 2, 3, 4",
          "4 only"
        ],
        "answer": 0
      },
      {
        "q": "What values come from range(3, 7)?",
        "options": [
          "3, 4, 5, 6, 7",
          "3, 4, 5, 6",
          "0, 1, 2",
          "7, 6, 5, 4"
        ],
        "answer": 1
      },
      {
        "q": "In range(2, 10, 2), what does the last 2 mean?",
        "options": [
          "Start at 2",
          "Stop at 2",
          "Step by 2",
          "Run twice"
        ],
        "answer": 2
      },
      {
        "q": "Which range counts 5,4,3,2,1?",
        "options": [
          "range(5, 1)",
          "range(1, 5, -1)",
          "range(5, 0, 1)",
          "range(5, 0, -1)"
        ],
        "answer": 3
      },
      {
        "q": "Why does range use less memory than a large list?",
        "options": [
          "It stores a generation rule rather than all values",
          "It cannot produce numbers",
          "It deletes Python memory",
          "It only works once"
        ],
        "answer": 0
      },
      {
        "q": "A list can be visited one item at a time by a for loop. What category does it belong to?",
        "options": [
          "Assertion",
          "Iterable",
          "Accumulator",
          "Conditional expression"
        ],
        "answer": 1
      },
      {
        "q": "What does iter() create or obtain?",
        "options": [
          "A random float",
          "A list copy always",
          "An iterator",
          "A condition"
        ],
        "answer": 2
      },
      {
        "q": "What does next() do?",
        "options": [
          "Restarts the iterator",
          "Sorts the collection",
          "Returns every item",
          "Returns the next iterator item and advances position"
        ],
        "answer": 3
      },
      {
        "q": "What signals that an iterator has no items left?",
        "options": [
          "StopIteration",
          "IndexWarning",
          "EmptyLoop",
          "NameError always"
        ],
        "answer": 0
      },
      {
        "q": "Which line opens the random-number toolbox?",
        "options": [
          "start random",
          "import random",
          "random.on()",
          "pip install randint"
        ],
        "answer": 1
      },
      {
        "q": "Which tool returns an inclusive whole number in a chosen interval?",
        "options": [
          "random.random()",
          "random.uniform(a, b)",
          "random.randint(a, b)",
          "random.shuffle(list)"
        ],
        "answer": 2
      },
      {
        "q": "What interval describes random.random()?",
        "options": [
          "1.0 through 10.0",
          "Only 0 or 1",
          "Any integer",
          "0.0 up to but not including 1.0"
        ],
        "answer": 3
      },
      {
        "q": "Which tool gives a random decimal between chosen endpoints?",
        "options": [
          "random.uniform(a, b)",
          "random.randint(a, b)",
          "range(a, b)",
          "next(a, b)"
        ],
        "answer": 0
      },
      {
        "q": "Which tool picks one random list item?",
        "options": [
          "random.shuffle(list)",
          "random.choice(list)",
          "random.random()",
          "random.seed(list)"
        ],
        "answer": 1
      },
      {
        "q": "What does random.shuffle(list) return for assignment?",
        "options": [
          "A new shuffled list",
          "One chosen item",
          "None; it changes the list in place",
          "The old list length"
        ],
        "answer": 2
      },
      {
        "q": "Why put guesses inside a loop?",
        "options": [
          "Because input is illegal outside loops",
          "To hide the secret automatically",
          "To import random repeatedly",
          "Allow repeated attempts until success or failure"
        ],
        "answer": 3
      },
      {
        "q": "What does decomposition mean?",
        "options": [
          "Break a big problem into smaller steps",
          "Convert every value to text",
          "Delete repeated code without planning",
          "Create nested loops immediately"
        ],
        "answer": 0
      },
      {
        "q": "What does generalisation do?",
        "options": [
          "Makes code use only one hard-coded value",
          "Makes one solution work for different values or sizes",
          "Hides every variable",
          "Stops all loops"
        ],
        "answer": 1
      },
      {
        "q": "In pattern printing, what does the inner loop usually control?",
        "options": [
          "The number of files",
          "The Python installation",
          "Columns or symbols across one row",
          "Only the final message"
        ],
        "answer": 2
      },
      {
        "q": "Which operation extracts the last digit of a positive integer?",
        "options": [
          "// 10",
          "/ 10",
          "** 10",
          "% 10"
        ],
        "answer": 3
      },
      {
        "q": "Which operation removes the last digit of a positive integer?",
        "options": [
          "// 10",
          "% 10",
          "* 10",
          "+ 10"
        ],
        "answer": 0
      },
      {
        "q": "Why must a factorial accumulator start at 1?",
        "options": [
          "range refuses 0",
          "Starting at 0 would keep the product 0",
          "1 is always factorial",
          "Python requires positive variables"
        ],
        "answer": 1
      },
      {
        "q": "How is the next Fibonacci number found?",
        "options": [
          "Multiply the previous value by 2",
          "Take modulus 10",
          "Add the previous two values",
          "Choose it randomly"
        ],
        "answer": 2
      },
      {
        "q": "What commonly creates O(N^2) work?",
        "options": [
          "One assignment",
          "One print statement",
          "One Boolean value",
          "Two full nested loops"
        ],
        "answer": 3
      }
    ]
  },
  "project": {
    "title": "Unit 2 Project — Python Control-Flow Arcade",
    "summary": "Build one menu-driven Python program that combines decisions, loops, randomness, ranges, and problem-solving algorithms.",
    "brief": "\n    <h4>Your mission</h4>\n    <p>Create a terminal application called <strong>Python Control-Flow Arcade</strong>. The program should keep showing a menu until the user chooses Quit.</p>\n\n    <h4>Main menu</h4>\n    <pre><code>==============================\nPYTHON CONTROL-FLOW ARCADE\n1. Number Guessing Game\n2. Dice Simulator\n3. Pattern Printer\n4. Number Detective\n5. Quit\n==============================</code></pre>\n\n    <h4>Required behaviour</h4>\n    <ol>\n      <li>Use a <code>while</code> loop to keep the menu running.</li>\n      <li>Use <code>if-elif-else</code> to open the selected activity.</li>\n      <li>Use <code>break</code> to leave an activity or quit the arcade.</li>\n      <li>Use <code>continue</code> for at least one invalid or skipped input.</li>\n      <li>Use meaningful comments and clear variable names.</li>\n    </ol>\n\n    <h4>Activity 1 — Number Guessing Game</h4>\n    <ul>\n      <li>Generate a secret integer from 1 to 100 with the <code>random</code> module.</li>\n      <li>Give the player five lives.</li>\n      <li>After every guess, print Too high, Too low, or Correct.</li>\n      <li>Stop on a correct answer or when no lives remain.</li>\n      <li>Count how many guesses were used.</li>\n    </ul>\n\n    <h4>Activity 2 — Dice Simulator</h4>\n    <ul>\n      <li>Ask how many dice rolls are required.</li>\n      <li>Use <code>range()</code> and <code>random.randint(1, 6)</code>.</li>\n      <li>Print every roll and accumulate the total.</li>\n      <li>Print the highest roll, lowest roll, and average.</li>\n    </ul>\n\n    <h4>Activity 3 — Pattern Printer</h4>\n    <ul>\n      <li>Let the user choose square, increasing triangle, or decreasing triangle.</li>\n      <li>Ask for a size from 2 to 10.</li>\n      <li>Use nested loops. Do not hard-code completed pattern lines.</li>\n    </ul>\n\n    <h4>Activity 4 — Number Detective</h4>\n    <p>Ask for one positive integer and report:</p>\n    <ul>\n      <li>Odd or even</li>\n      <li>Digit count and digit sum</li>\n      <li>Reversed number</li>\n      <li>Palindrome status</li>\n      <li>Prime status</li>\n      <li>Factorial when the number is 10 or below</li>\n      <li>Armstrong status for a three-digit number</li>\n    </ul>\n\n    <h4>Final session report</h4>\n    <p>When the user quits, print how many menu activities were completed and how many total loop iterations or attempts were recorded. Use counters and accumulators rather than hard-coded totals.</p>\n\n    <h4>Safety and testing</h4>\n    <ul>\n      <li>Prevent accidental infinite loops by updating every while-loop control value.</li>\n      <li>Use a sentinel or clear Quit option.</li>\n      <li>Test each activity separately before joining them.</li>\n      <li>Include at least five sample runs in a README file, including one invalid menu choice.</li>\n    </ul>\n\n    <h4>Optional bonus</h4>\n    <ul>\n      <li>Add a difficulty choice to the guessing game.</li>\n      <li>Use <code>assert</code> for internal assumptions such as positive lives.</li>\n      <li>Use a loop <code>else</code> in a search or prime-checking section.</li>\n      <li>Add a seeded demo mode that always produces the same secret and dice rolls.</li>\n    </ul>\n\n    <h4>Submission</h4>\n    <p>Upload the project folder to a public GitHub repository, or to Google Drive with access set to <em>Anyone with the link</em>. Include the Python file and README, test the public link in a private browser window, and submit that link below.</p>\n  "
  }
};
