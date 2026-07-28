/* ==========================================================================
   AbhyasLab — UNIT 2 — CONTROL FLOW AND ITERATIVE STATEMENTS
   Separate unit content file.

   Built from the supplied 63-page Unit 2 PDF and expanded into the same interactive, practice-heavy learning format as Unit 1.

   IMPORTANT
   - Load this file before assets/js/content.js.
   - Keep every topic ID and task ID unique.
   - ADDING-CONTENT.md explains the supported content structure.
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
      "notes": "\n<h4>The computer needs yes-or-no answers</h4>\n<p>In Unit 1, Python followed commands from top to bottom. Now we teach it to make choices. Every choice starts with a value that is either <code>True</code> or <code>False</code>.</p>\n<p>Think of a bedroom light switch: ON or OFF. Python writes those two states as <code>True</code> and <code>False</code>. The first letter must be capital.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"A decision begins with data and ends with a Boolean answer\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Data</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Comparison</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">True / False</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Decision</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">A decision begins with data and ends with a Boolean answer</text></svg>\n<h4>Comparison expressions</h4>\n<table><tr><th>Operator</th><th>Question</th><th>Example</th></tr>\n<tr><td><code>==</code></td><td>Are both values equal?</td><td><code>10 == 10</code> → True</td></tr>\n<tr><td><code>!=</code></td><td>Are they different?</td><td><code>5 != 10</code> → True</td></tr>\n<tr><td><code>&gt;</code></td><td>Is the left side greater?</td><td><code>10 &gt; 5</code> → True</td></tr>\n<tr><td><code>&lt;</code></td><td>Is the left side smaller?</td><td><code>2 &lt; 8</code> → True</td></tr>\n<tr><td><code>&gt;=</code></td><td>Greater or equal?</td><td><code>18 &gt;= 18</code> → True</td></tr>\n<tr><td><code>&lt;=</code></td><td>Smaller or equal?</td><td><code>3 &lt;= 2</code> → False</td></tr></table>\n<div class=\"callout\"><strong>One sign and two signs are different.</strong> <code>score = 50</code> stores 50. <code>score == 50</code> asks a question.</div>\n<h4>Combining questions</h4>\n<ul><li><code>and</code>: both sides must be True.</li><li><code>or</code>: at least one side must be True.</li><li><code>not</code>: flips the answer.</li></ul>\n<pre><code>age = 20\nhas_ticket = True\ncan_enter = (age &gt;= 18) and has_ticket\nprint(can_enter)     # True</code></pre>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">What does this expression produce?</p><pre><code>print((10 == 10) and (5 != 5))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">False</button><button data-o=\"2\">An error</button></div><p class=\"w__why\"><code>10 == 10</code> is True, but <code>5 != 5</code> is False. <code>and</code> needs both sides, so the answer is False.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\"><code>and</code></button><button data-pair=\"p1\"><code>or</code></button><button data-pair=\"p2\"><code>not</code></button><button data-pair=\"p3\"><code>!=</code></button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Ask whether values differ</button><button data-pair=\"p2\">Reverse the Boolean</button><button data-pair=\"p1\">One condition is enough</button><button data-pair=\"p0\">Both conditions must pass</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Python follows a logical order</h4>\n<p>When a sentence contains <code>not</code>, <code>and</code>, and <code>or</code>, Python does not guess. It follows this order:</p>\n<ol><li><code>not</code> first</li><li><code>and</code> second</li><li><code>or</code> last</li></ol>\n<div class=\"callout\"><strong>Best habit:</strong> use parentheses to make your intention obvious, even when you know the order.</div>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Boolean precedence: Python follows this order\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">not</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">and</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">or</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">final answer</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Boolean precedence: Python follows this order</text></svg>\n<h4>Truthy and falsy</h4>\n<p>Every value can be viewed as a Boolean with <code>bool()</code>. Empty things are usually falsy: <code>0</code>, <code>\"\"</code>, <code>[]</code>, and <code>None</code>. Non-empty values are usually truthy, including negative numbers and a string containing one space.</p>\n<table><tr><th>Value</th><th><code>bool(value)</code></th></tr><tr><td><code>0</code></td><td>False</td></tr><tr><td><code>\"\"</code></td><td>False</td></tr><tr><td><code>\" \"</code></td><td>True</td></tr><tr><td><code>-10</code></td><td>True</td></tr></table>\n<h4>Short-circuit evaluation</h4>\n<p>Python stops as soon as the answer is certain. With <code>or</code>, a True left side is enough. With <code>and</code>, a False left side is enough.</p>\n<pre><code>print(True or (100 / 0 == 5))\n# Prints True. The dangerous right side is never reached.</code></pre>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">Which value is falsy?</p><div class=\"w-guess__opts\"><button data-o=\"0\">\"False\"</button><button data-o=\"1\">\" \"</button><button data-o=\"2\">0</button><button data-o=\"3\">-1</button></div><p class=\"w__why\">Only numeric zero is falsy here. A non-empty string is truthy even when its text says False, and a space is still a character.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">True or ...</button><button data-pair=\"p1\">False and ...</button><button data-pair=\"p2\">bool(\"\")</button><button data-pair=\"p3\">bool(\" \")</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">True</button><button data-pair=\"p2\">False</button><button data-pair=\"p1\">Stop: final answer is already False</button><button data-pair=\"p0\">Stop: final answer is already True</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>The first decision: if</h4>\n<p>An <code>if</code> statement is like a bouncer with one rule. If the condition is True, the indented block runs. If it is False, Python skips that block.</p>\n<pre><code>age = 20\nif age &gt;= 18:\n    print(\"Welcome\")\nprint(\"Check complete\")</code></pre>\n<div class=\"callout\"><strong>Two signs of a block:</strong> a colon at the end of the decision line and four spaces of indentation below it.</div>\n<h4>Two roads: if-else</h4><p><code>else</code> is the backup road. Exactly one branch runs.</p>\n<h4>Many roads: if-elif-else</h4><p>Python checks from top to bottom and stops at the first True condition.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Python chooses the first path whose condition is True\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">if?</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">True block</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">elif?</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">else block</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Python chooses the first path whose condition is True</text></svg>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">With score = 85, which grade block runs?</p><pre><code>score = 85\nif score >= 90: A\nelif score >= 80: B\nelif score >= 70: C\nelse: Fail</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">A</button><button data-o=\"1\">B</button><button data-o=\"2\">C</button><button data-o=\"3\">Fail</button></div><p class=\"w__why\">90 is False, then 80 is True. Python runs B and skips the rest.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><div class=\"w-spot__line\"><button data-bad>if age >= 18</button><button >:</button><button >    print(\"Adult\")</button></div>\n    <p class=\"w__why\">The colon must belong at the end of the complete <code>if age &gt;= 18:</code> line. In real code, write it together as one line.</p></div>\n",
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
      "notes": "\n<h4>A decision inside a decision</h4>\n<p>Airport security happens in stages. First your ID is checked. Only after that succeeds is your boarding pass checked. An <strong>nested conditional</strong> is an <code>if</code> inside another branch.</p>\n<pre><code>if has_id:\n    print(\"ID accepted\")\n    if has_boarding_pass:\n        print(\"You may board\")</code></pre>\n<p>Every deeper level moves four more spaces to the right.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"The inner decision is reached only through the outer True path\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Outer if</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Outer True</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Inner if</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Inner result</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">The inner decision is reached only through the outer True path</text></svg>\n<h4>The one-line shortcut</h4>\n<p>A simple if-else that chooses one value can be written as a conditional expression:</p>\n<pre><code>status = \"Adult\" if age &gt;= 18 else \"Minor\"</code></pre>\n<div class=\"callout\"><strong>Use the shortcut only when it stays easy to read.</strong> Complex decisions are clearer as normal multi-line branches.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">What is screen_mode when battery is 15?</p><pre><code>screen_mode = \"Dark Mode\" if battery < 20 else \"Light Mode\"</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Light Mode</button><button data-o=\"1\">Dark Mode</button><button data-o=\"2\">15</button></div><p class=\"w__why\">15 is less than 20, so the value before <code>if</code> is chosen.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">Nested if</button><button data-pair=\"p1\">Ternary expression</button><button data-pair=\"p2\">Extra indentation</button><button data-pair=\"p3\">else value</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Chosen when the condition is False</button><button data-pair=\"p2\">Shows the deeper block</button><button data-pair=\"p1\">A small if-else written on one line</button><button data-pair=\"p0\">A decision inside another decision</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Three beginner traps</h4>\n<ol><li>Missing the colon after <code>if</code>, <code>elif</code>, or <code>else</code>.</li><li>Using <code>=</code> when you mean <code>==</code>.</li><li>Forgetting to indent the block.</li></ol>\n<pre><code># Broken\nif score = 100\nprint(\"Perfect\")\n\n# Fixed\nif score == 100:\n    print(\"Perfect\")</code></pre>\n<h4>Dry-running: become the computer</h4>\n<p>Read one line at a time, write down each variable, test the condition, and cross out the branch that will not run. This is often faster than staring at a red error.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"A dry run turns hidden program state into visible steps\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"62\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Read line</text><path class=\"arrow\" d=\"M120 81 h29\"/><rect class=\"box box--dark\" x=\"154\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"206\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Update box</text><path class=\"arrow\" d=\"M264 81 h29\"/><rect class=\"box\" x=\"298\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"350\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Test condition</text><path class=\"arrow\" d=\"M408 81 h29\"/><rect class=\"box box--dark\" x=\"441\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"494\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Follow one path</text><path class=\"arrow\" d=\"M551 81 h29\"/><rect class=\"box\" x=\"585\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"638\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Record output</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">A dry run turns hidden program state into visible steps</text></svg>\n<table><tr><th>Step</th><th>x before</th><th>condition</th><th>x after</th></tr><tr><td>1</td><td>10</td><td>10 &gt; 8 → True</td><td>15</td></tr></table>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><div class=\"w-spot__line\"><button data-bad>if score = 100</button><button >:</button><button >    print(\"Perfect\")</button></div>\n    <p class=\"w__why\">The condition uses one equals sign. Replace it with <code>score == 100</code>.</p></div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">What is printed after this dry run?</p><pre><code>x = 10\ny = 5\nif x > 8:\n    x = x + y\nelse:\n    x = x - y\nprint(x)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">10</button><button data-o=\"1\">15</button><button data-o=\"2\">5</button></div><p class=\"w__why\">The condition is True, so x becomes 10 + 5 = 15.</p></div>\n",
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
      "notes": "\n<h4>Loops remove repeated typing</h4>\n<p>If a teacher asks you to write the same sentence 100 times, your hand gets tired. A loop tells Python to repeat one block for you.</p>\n<h4>The while loop</h4><p>A <code>while</code> loop repeats while a condition stays True. You must change something inside it so the condition can eventually become False.</p>\n<pre><code>count = 1\nwhile count &lt;= 3:\n    print(\"Lap\", count)\n    count += 1</code></pre>\n<h4>The for loop</h4><p>A <code>for</code> loop takes items from a collection one by one and stops automatically at the end.</p>\n<pre><code>toys = [\"Car\", \"Doll\", \"Block\"]\nfor toy in toys:\n    print(\"Inspecting\", toy)</code></pre>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Both loop types repeat a block, but they know when to stop differently\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"62\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Start</text><path class=\"arrow\" d=\"M120 81 h29\"/><rect class=\"box box--dark\" x=\"154\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"206\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Check / get item</text><path class=\"arrow\" d=\"M264 81 h29\"/><rect class=\"box\" x=\"298\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"350\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Run block</text><path class=\"arrow\" d=\"M408 81 h29\"/><rect class=\"box box--dark\" x=\"441\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"494\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Update / next item</text><path class=\"arrow\" d=\"M551 81 h29\"/><rect class=\"box\" x=\"585\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"638\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Stop</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Both loop types repeat a block, but they know when to stop differently</text></svg>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"A loop returns to its check until the stopping rule is reached\">\n      <path d=\"M120 85 C210 15 490 15 580 85 C490 155 210 155 120 85\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"7 7\" opacity=\".35\"/>\n      <circle r=\"10\" class=\"accent\">\n        <animateMotion dur=\"4s\" repeatCount=\"indefinite\" path=\"M120 85 C210 15 490 15 580 85 C490 155 210 155 120 85\"/>\n      </circle>\n      <text x=\"350\" y=\"88\" text-anchor=\"middle\" class=\"lbl\">A loop returns to its check until the stopping rule is reached</text>\n      <text x=\"350\" y=\"112\" text-anchor=\"middle\" style=\"font-size:12px\">The moving point shows one repeated cycle.</text>\n    </svg>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">Which loop naturally fits every letter in PYTHON?</p><div class=\"w-guess__opts\"><button data-o=\"0\">while</button><button data-o=\"1\">for</button><button data-o=\"2\">if</button></div><p class=\"w__why\">A string is an iterable collection, so a for loop walks through its letters automatically.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">while loop</button><button data-pair=\"p1\">for loop</button><button data-pair=\"p2\">counter update</button><button data-pair=\"p3\">indentation</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Shows the repeated block</button><button data-pair=\"p2\">Prevents a while loop from running forever</button><button data-pair=\"p1\">Visit each item in a collection</button><button data-pair=\"p0\">Repeat while a condition is True</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>A loop inside a loop</h4><p>The inner loop finishes all of its work for every one step of the outer loop. A clock is a good picture: all chosen minute values run for each hour.</p>\n<pre><code>for hour in [1, 2]:\n    for minute in [0, 30]:\n        print(hour, minute)</code></pre>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"The inner loop restarts for each outer-loop item\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Outer item 1</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">All inner items</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Outer item 2</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">All inner items</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">The inner loop restarts for each outer-loop item</text></svg>\n<h4>Infinite loops</h4><p>A while condition that never becomes False is like a scratched record. In a terminal, <code>Ctrl + C</code> asks Python to stop.</p>\n<h4>else with a loop</h4><p>A loop <code>else</code> runs when the loop finishes naturally. Later, when we add <code>break</code>, the else is skipped if the loop is broken early.</p>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">How many outputs come from 2 outer values and 3 inner values?</p><div class=\"w-guess__opts\"><button data-o=\"0\">5</button><button data-o=\"1\">6</button><button data-o=\"2\">8</button></div><p class=\"w__why\">The inner loop runs 3 times for each of 2 outer steps: 2 × 3 = 6.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">Nested loop</button><button data-pair=\"p1\">Infinite loop</button><button data-pair=\"p2\">Loop else</button><button data-pair=\"p3\">Ctrl + C</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Emergency stop in a terminal</button><button data-pair=\"p2\">Runs after natural completion</button><button data-pair=\"p1\">Its condition never becomes False</button><button data-pair=\"p0\">A loop inside another loop</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Loop patterns are reusable plans</h4>\n<p>A loop is a tool. A pattern is a reliable way to organise that tool.</p>\n<h4>Sentinel-controlled</h4><p>Run until a special value such as <code>\"quit\"</code> appears. Use this when you do not know the number of repetitions in advance.</p>\n<h4>Counter-controlled</h4><p>Start a counter, check it, and update it. Use this when the number of repetitions is known.</p>\n<h4>Accumulator</h4><p>Start a running result before the loop. Add or combine one item during each cycle.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Counter, sentinel, and accumulator patterns all need a clear starting state\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"62\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Initial value</text><path class=\"arrow\" d=\"M120 81 h29\"/><rect class=\"box box--dark\" x=\"154\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"206\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Read / generate item</text><path class=\"arrow\" d=\"M264 81 h29\"/><rect class=\"box\" x=\"298\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"350\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Update result</text><path class=\"arrow\" d=\"M408 81 h29\"/><rect class=\"box box--dark\" x=\"441\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"494\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Stop rule</text><path class=\"arrow\" d=\"M551 81 h29\"/><rect class=\"box\" x=\"585\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"638\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Final result</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Counter, sentinel, and accumulator patterns all need a clear starting state</text></svg>\n<pre><code>total = 0\nfor point in [10, 20, 30]:\n    total += point\nprint(total)    # 60</code></pre>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">Where should total = 0 be created?</p><div class=\"w-guess__opts\"><button data-o=\"0\">Inside the loop</button><button data-o=\"1\">Before the loop</button><button data-o=\"2\">After print</button></div><p class=\"w__why\">If it is reset inside the loop, earlier work is lost every time.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">Sentinel</button><button data-pair=\"p1\">Counter</button><button data-pair=\"p2\">Accumulator</button><button data-pair=\"p3\">Initialise before loop</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Preserves work across cycles</button><button data-pair=\"p2\">Builds a running result</button><button data-pair=\"p1\">Tracks a known number of repetitions</button><button data-pair=\"p0\">A special stop value</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>A remote control for loops</h4>\n<p>Normal loops continue item by item. Three keywords let you change that flow.</p>\n<ul><li><code>break</code>: emergency exit; stop the whole loop.</li><li><code>continue</code>: skip the rest of this one iteration and move to the next.</li><li><code>pass</code>: do nothing; keep an intentionally empty block valid.</li></ul>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Loop-control keywords change what happens to the current repetition\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Current item</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">break → exit</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">continue → next</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">pass → keep going</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Loop-control keywords change what happens to the current repetition</text></svg>\n<pre><code>for number in range(1, 6):\n    if number == 3:\n        continue\n    print(number)   # 1, 2, 4, 5</code></pre>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">Which keyword skips only the rotten apple?</p><div class=\"w-guess__opts\"><button data-o=\"0\">break</button><button data-o=\"1\">continue</button><button data-o=\"2\">pass</button></div><p class=\"w__why\">continue skips the current item but keeps the loop alive.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">break</button><button data-pair=\"p1\">continue</button><button data-pair=\"p2\">pass</button><button data-pair=\"p3\">loop else</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Skipped when break is used</button><button data-pair=\"p2\">Placeholder that does nothing</button><button data-pair=\"p1\">Skip this iteration</button><button data-pair=\"p0\">Stop the complete loop</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>assert: a debugging checkpoint</h4>\n<p><code>assert</code> says, “I believe this condition must be True.” If it is False, Python raises <code>AssertionError</code> with an optional message.</p>\n<pre><code>wallet = 50\nassert wallet &gt;= 0, \"Balance cannot be negative\"\nprint(\"Balance accepted\")</code></pre>\n<div class=\"callout\"><strong>Do not use assert for normal user choices.</strong> It is mainly for catching programmer assumptions during development.</div>\n<h4>return: the function delivery</h4>\n<p>A function uses <code>return</code> to hand a result back. The moment return runs, that function ends. Unit 4 will cover functions deeply; here we only compare the control words.</p>\n<pre><code>def add_ten(number):\n    return number + 10\nprint(add_ten(50))</code></pre>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Do nothing → next iteration → exit loop → exit function with a value\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">pass</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">continue</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">break</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">return</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Do nothing → next iteration → exit loop → exit function with a value</text></svg>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">assert</button><button data-pair=\"p1\">return</button><button data-pair=\"p2\">break</button><button data-pair=\"p3\">continue</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Move to the next loop item</button><button data-pair=\"p2\">End a loop</button><button data-pair=\"p1\">Send a value back and end a function</button><button data-pair=\"p0\">Fail early when an assumption is false</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>range() is a number dispenser</h4>\n<p>A range remembers a rule for producing numbers. It does not need to store every number at once.</p>\n<table><tr><th>Form</th><th>Meaning</th><th>Example output</th></tr>\n<tr><td><code>range(stop)</code></td><td>Start at 0, stop before stop</td><td><code>range(5)</code> → 0,1,2,3,4</td></tr>\n<tr><td><code>range(start, stop)</code></td><td>Choose the starting value</td><td><code>range(3,7)</code> → 3,4,5,6</td></tr>\n<tr><td><code>range(start, stop, step)</code></td><td>Choose the jump</td><td><code>range(2,10,2)</code> → 2,4,6,8</td></tr></table>\n<div class=\"callout\"><strong>The stop value is excluded.</strong> Think “walk toward the gate, but do not step through it.”</div>\n<h4>Counting backward</h4><p>The start must be higher than the stop, and the step must be negative.</p>\n<pre><code>for number in range(5, 0, -1):\n    print(number)</code></pre>\n<h4>Range versus list</h4><p><code>range(1_000_000)</code> stores the recipe. <code>list(range(1_000_000))</code> creates all one million number objects. Use a list only when you really need one.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"range generates one value at a time according to its rule\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"62\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">start</text><path class=\"arrow\" d=\"M120 81 h29\"/><rect class=\"box box--dark\" x=\"154\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"206\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">next value</text><path class=\"arrow\" d=\"M264 81 h29\"/><rect class=\"box\" x=\"298\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"350\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">step</text><path class=\"arrow\" d=\"M408 81 h29\"/><rect class=\"box box--dark\" x=\"441\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"494\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">before stop</text><path class=\"arrow\" d=\"M551 81 h29\"/><rect class=\"box\" x=\"585\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"638\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">finished</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">range generates one value at a time according to its rule</text></svg>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"range sends one new number into the loop on every cycle\">\n      <path d=\"M120 85 C210 15 490 15 580 85 C490 155 210 155 120 85\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"7 7\" opacity=\".35\"/>\n      <circle r=\"10\" class=\"accent\">\n        <animateMotion dur=\"4s\" repeatCount=\"indefinite\" path=\"M120 85 C210 15 490 15 580 85 C490 155 210 155 120 85\"/>\n      </circle>\n      <text x=\"350\" y=\"88\" text-anchor=\"middle\" class=\"lbl\">range sends one new number into the loop on every cycle</text>\n      <text x=\"350\" y=\"112\" text-anchor=\"middle\" style=\"font-size:12px\">The moving point shows one repeated cycle.</text>\n    </svg>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">What is produced by range(2, 9, 3)?</p><div class=\"w-guess__opts\"><button data-o=\"0\">2,5,8</button><button data-o=\"1\">2,5,8,11</button><button data-o=\"2\">3,6,9</button></div><p class=\"w__why\">Start at 2, add 3 each time, and stop before 9.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">range(4)</button><button data-pair=\"p1\">range(2,5)</button><button data-pair=\"p2\">range(1,8,2)</button><button data-pair=\"p3\">range(5,0,-1)</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">5,4,3,2,1</button><button data-pair=\"p2\">1,3,5,7</button><button data-pair=\"p1\">2,3,4</button><button data-pair=\"p0\">0,1,2,3</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Iterable versus iterator</h4>\n<p>An <strong>iterable</strong> is a collection that can be visited one item at a time: a list, string, tuple, dictionary, or range. An <strong>iterator</strong> is the active reader that remembers the current position.</p>\n<p>Think of a PEZ dispenser. The loaded tube is the iterable. The spring and head mechanism are the iterator.</p>\n<pre><code>fruits = [\"Apple\", \"Banana\", \"Cherry\"]\nreader = iter(fruits)\nprint(next(reader))    # Apple\nprint(next(reader))    # Banana</code></pre>\n<h4>StopIteration</h4><p>After the last item, a plain <code>next(reader)</code> raises <code>StopIteration</code>. A for loop handles that signal silently and ends normally.</p>\n<div class=\"callout\"><strong>Safe manual option:</strong> <code>next(reader, \"EMPTY\")</code> returns the default text instead of raising an error when the iterator is exhausted.</div>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"A for loop performs these steps automatically behind the scenes\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"62\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">iterable</text><path class=\"arrow\" d=\"M120 81 h29\"/><rect class=\"box box--dark\" x=\"154\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"206\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">iter()</text><path class=\"arrow\" d=\"M264 81 h29\"/><rect class=\"box\" x=\"298\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"350\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">iterator</text><path class=\"arrow\" d=\"M408 81 h29\"/><rect class=\"box box--dark\" x=\"441\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"494\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">next()</text><path class=\"arrow\" d=\"M551 81 h29\"/><rect class=\"box\" x=\"585\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"638\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">StopIteration</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">A for loop performs these steps automatically behind the scenes</text></svg>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">After three next() calls on a three-item list, what does a fourth plain next() do?</p><div class=\"w-guess__opts\"><button data-o=\"0\">Starts again</button><button data-o=\"1\">Returns None</button><button data-o=\"2\">Raises StopIteration</button></div><p class=\"w__why\">The iterator is exhausted; it does not reset itself.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">iterable</button><button data-pair=\"p1\">iterator</button><button data-pair=\"p2\">iter()</button><button data-pair=\"p3\">next()</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Request one item</button><button data-pair=\"p2\">Create the reader</button><button data-pair=\"p1\">Reader that remembers position</button><button data-pair=\"p0\">Collection that can be read item by item</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Computers need a randomness toolbox</h4>\n<p>Python is predictable unless we import the Standard Library module called <code>random</code>.</p>\n<pre><code>import random\nroll = random.randint(1, 6)</code></pre>\n<table><tr><th>Tool</th><th>Result</th></tr><tr><td><code>randint(a,b)</code></td><td>Whole number from a through b, including both ends</td></tr><tr><td><code>random()</code></td><td>Decimal from 0.0 up to, but not including, 1.0</td></tr><tr><td><code>uniform(a,b)</code></td><td>Decimal between a and b</td></tr></table>\n<div class=\"callout\"><strong>Repeatable practice:</strong> <code>random.seed(1)</code> makes the same pseudo-random sequence appear again. Real games normally do not set a fixed seed.</div>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Random values become useful when combined with decisions and loops\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">import random</text><path class=\"arrow\" d=\"M165 81 h18\"/><rect class=\"box box--dark\" x=\"187\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"262\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">choose tool</text><path class=\"arrow\" d=\"M342 81 h18\"/><rect class=\"box\" x=\"363\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"438\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">generate value</text><path class=\"arrow\" d=\"M518 81 h18\"/><rect class=\"box box--dark\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">use in program</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Random values become useful when combined with decisions and loops</text></svg>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">Which tool simulates a 20-sided die?</p><div class=\"w-guess__opts\"><button data-o=\"0\">random.random()</button><button data-o=\"1\">random.randint(1,20)</button><button data-o=\"2\">random.uniform(1,20)</button></div><p class=\"w__why\">A die needs a whole number, and randint includes both 1 and 20.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">randint</button><button data-pair=\"p1\">random</button><button data-pair=\"p2\">uniform</button><button data-pair=\"p3\">seed</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Repeat the same generated sequence</button><button data-pair=\"p2\">Decimal in a chosen interval</button><button data-pair=\"p1\">Decimal from 0.0 to below 1.0</button><button data-pair=\"p0\">Inclusive whole number</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Random choices from collections</h4>\n<p><code>random.choice(sequence)</code> picks one item. <code>random.shuffle(list)</code> changes the order of an existing list.</p>\n<pre><code>import random\ncolours = [\"Red\", \"Blue\", \"Green\"]\nwinner = random.choice(colours)\nrandom.shuffle(colours)</code></pre>\n<div class=\"callout\"><strong>shuffle returns None.</strong> It changes the original list. Write <code>random.shuffle(cards)</code>, then print <code>cards</code>.</div>\n<h4>Randomness plus loops and decisions</h4><p>A coin simulator repeats random generation in a loop. A guessing game combines a secret number, repeated guesses, if-elif-else feedback, and break.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"A guessing game combines every major idea in Unit 2\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"62\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">random secret</text><path class=\"arrow\" d=\"M120 81 h29\"/><rect class=\"box box--dark\" x=\"154\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"206\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">get guess</text><path class=\"arrow\" d=\"M264 81 h29\"/><rect class=\"box\" x=\"298\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"350\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">compare</text><path class=\"arrow\" d=\"M408 81 h29\"/><rect class=\"box box--dark\" x=\"441\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"494\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">feedback</text><path class=\"arrow\" d=\"M551 81 h29\"/><rect class=\"box\" x=\"585\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"638\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">win / repeat</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">A guessing game combines every major idea in Unit 2</text></svg>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">What does shuffle do?</p><div class=\"w-guess__opts\"><button data-o=\"0\">Creates a sorted copy</button><button data-o=\"1\">Changes the existing list order</button><button data-o=\"2\">Picks one item</button></div><p class=\"w__why\">shuffle works in place on the original list.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">choice</button><button data-pair=\"p1\">shuffle</button><button data-pair=\"p2\">loop + randint</button><button data-pair=\"p3\">if / elif</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Respond to the generated value</button><button data-pair=\"p2\">Repeat a simulation</button><button data-pair=\"p1\">Reorder a list in place</button><button data-pair=\"p0\">Pick one item</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Think before typing</h4>\n<p>A large problem feels difficult because too many details arrive at once. <strong>Decomposition</strong> means breaking it into tiny actions that are easy to describe and test.</p>\n<ol><li><strong>Goal:</strong> describe the exact final output.</li><li><strong>Baby steps:</strong> write the actions in plain English.</li><li><strong>Pattern match:</strong> choose a decision, loop, accumulator, or other known tool.</li><li><strong>Translate:</strong> write Python only after the plan is clear.</li></ol>\n<h4>Encapsulation and generalisation</h4>\n<p>Encapsulation hides many steps inside one reusable tool. Generalisation replaces one hard-coded case with variables, so the same idea works for different sizes or values.</p>\n<h4>Pattern printing</h4>\n<p>The outer loop usually controls rows. The inner loop controls items across one row.</p>\n<pre><code>size = 3\nfor row in range(size):\n    for col in range(size):\n        print(\"*\", end=\" \")\n    print()</code></pre>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"A programmer solves the plan before polishing the code\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"62\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:10.5px\">Goal</text><path class=\"arrow\" d=\"M120 81 h18\"/><rect class=\"box box--dark\" x=\"125\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"178\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:10.5px\">Baby steps</text><path class=\"arrow\" d=\"M235 81 h18\"/><rect class=\"box\" x=\"240\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"292\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:10.5px\">Choose pattern</text><path class=\"arrow\" d=\"M350 81 h18\"/><rect class=\"box box--dark\" x=\"355\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"408\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:10.5px\">Write code</text><path class=\"arrow\" d=\"M465 81 h18\"/><rect class=\"box\" x=\"470\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"522\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:10.5px\">Test one case</text><path class=\"arrow\" d=\"M580 81 h18\"/><rect class=\"box box--dark\" x=\"585\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"638\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:10.5px\">Generalise</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">A programmer solves the plan before polishing the code</text></svg>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">In a star square, what usually controls columns?</p><div class=\"w-guess__opts\"><button data-o=\"0\">Outer loop</button><button data-o=\"1\">Inner loop</button><button data-o=\"2\">else block</button></div><p class=\"w__why\">The inner loop prints multiple items across the current row.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">Decomposition</button><button data-pair=\"p1\">Encapsulation</button><button data-pair=\"p2\">Generalisation</button><button data-pair=\"p3\">Nested loops</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Control rows and columns</button><button data-pair=\"p2\">Make one solution work for many inputs</button><button data-pair=\"p1\">Hide many steps behind one tool</button><button data-pair=\"p0\">Break a big problem into small steps</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Digit manipulation</h4>\n<p><code>number % 10</code> grabs the last digit. <code>number // 10</code> removes the last digit. Repeat those two moves in a while loop.</p>\n<pre><code>num = 456\ntotal = 0\nwhile num &gt; 0:\n    total += num % 10\n    num //= 10</code></pre>\n<h4>Prime checking</h4><p>Assume the number is prime, test possible divisors, and break when a divisor leaves remainder zero.</p>\n<h4>Factorial</h4><p>A multiplication accumulator must start at 1, because starting at 0 would make every later product zero.</p>\n<h4>Fibonacci</h4><p>Keep the previous two values and shift them forward after calculating the next one.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Classic algorithms are combinations of small loop patterns\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"62\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Grab / generate value</text><path class=\"arrow\" d=\"M120 81 h29\"/><rect class=\"box box--dark\" x=\"154\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"206\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Test or combine</text><path class=\"arrow\" d=\"M264 81 h29\"/><rect class=\"box\" x=\"298\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"350\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Update accumulator</text><path class=\"arrow\" d=\"M408 81 h29\"/><rect class=\"box box--dark\" x=\"441\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"494\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">Move state forward</text><path class=\"arrow\" d=\"M551 81 h29\"/><rect class=\"box\" x=\"585\" y=\"45\" width=\"105\" height=\"72\" rx=\"8\"/><text x=\"638\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">Repeat</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Classic algorithms are combinations of small loop patterns</text></svg>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">Why does factorial start at 1?</p><div class=\"w-guess__opts\"><button data-o=\"0\">Because range starts at 1</button><button data-o=\"1\">Because multiplying by 0 destroys every product</button><button data-o=\"2\">Because 1 is prime</button></div><p class=\"w__why\">Zero is the absorbing value for multiplication: anything × 0 stays 0.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">% 10</button><button data-pair=\"p1\">// 10</button><button data-pair=\"p2\">factorial accumulator</button><button data-pair=\"p3\">Fibonacci</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Shift two previous values</button><button data-pair=\"p2\">Start at 1</button><button data-pair=\"p1\">Remove last digit</button><button data-pair=\"p0\">Grab last digit</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
      "notes": "\n<h4>Palindrome checking</h4>\n<p>A palindrome reads the same forward and backward. For text, the Unit 3 slicing shortcut <code>[::-1]</code> makes a reversed copy.</p>\n<h4>Armstrong numbers</h4>\n<p>For a three-digit Armstrong number, cube each digit and add the cubes. Keep a safe copy of the original because digit manipulation destroys the working number.</p>\n<pre><code>num = 153\ntemp = num\ntotal = 0\nwhile temp &gt; 0:\n    digit = temp % 10\n    total += digit ** 3\n    temp //= 10</code></pre>\n<h4>Trace tables</h4><p>A trace table records the loop step, current values, condition result, and updated values. It is an accountant’s ledger for program state.</p>\n<h4>Time-complexity intuition</h4><ul><li><code>O(1)</code>: same amount of work.</li><li><code>O(N)</code>: one normal pass; double the data, about double the work.</li><li><code>O(N²)</code>: common with two full nested loops; double both dimensions, about four times the work.</li></ul>\n<svg class=\"fig\" viewBox=\"0 0 700 170\" role=\"img\" aria-label=\"Complexity describes how work grows when the input grows\"><rect class=\"box\" x=\"10\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"85\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">O(1) one action</text><path class=\"arrow\" d=\"M165 81 h105\"/><rect class=\"box box--dark\" x=\"275\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"350\" y=\"84\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">O(N) one loop</text><path class=\"arrow\" d=\"M430 81 h105\"/><rect class=\"box\" x=\"540\" y=\"45\" width=\"150\" height=\"72\" rx=\"8\"/><text x=\"615\" y=\"84\" text-anchor=\"middle\" class=\"\" style=\"font-size:12px\">O(N²) nested loops</text><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"lbl\">Complexity describes how work grows when the input grows</text></svg>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess first</span>\n    <p class=\"w__q\">Two loops each run 10 times. How many inner-body operations?</p><div class=\"w-guess__opts\"><button data-o=\"0\">20</button><button data-o=\"1\">100</button><button data-o=\"2\">1000</button></div><p class=\"w__why\">10 outer steps × 10 inner steps = 100.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><div class=\"w-match__grid\">\n    <div class=\"w-match__col\"><button data-pair=\"p0\">Palindrome</button><button data-pair=\"p1\">Armstrong</button><button data-pair=\"p2\">Trace table</button><button data-pair=\"p3\">O(N²)</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">Typical full nested-loop growth</button><button data-pair=\"p2\">Manual state ledger</button><button data-pair=\"p1\">Powered digits add to original</button><button data-pair=\"p0\">Same forward and backward</button></div></div>\n    <p class=\"w__why\"><strong>All matched.</strong> Explain one pair aloud before moving on.</p></div>\n",
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
