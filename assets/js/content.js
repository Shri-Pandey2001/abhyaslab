/* ==========================================================================
   AbhyasLab — COURSE ASSEMBLY
   Versioned loader for separate unit files.

   REQUIRED SCRIPT ORDER IN index.html
     1. config.js
     2. unit1.js
     3. unit2.js
     4. content.js
     5. api.js
     6. app.js

   TO ADD UNIT 3 LATER
     1. Create assets/js/unit3.js with: const UNIT_3 = { ... };
     2. Load unit3.js above content.js in index.html.
     3. Add UNIT_3 to UNIT_FILES below.
   ========================================================================== */

const COURSE_META = Object.freeze({
  version: "2.0.0",
  buildDate: "2026-07-29",
  message: "AbhyasLab loaded Unit 1 and Unit 2 from separate JavaScript files.",
  expectedUnits: 2
});

const UNIT_FILES = [
  {
    name: "UNIT_1",
    value: typeof UNIT_1 !== "undefined" ? UNIT_1 : null
  },
  {
    name: "UNIT_2",
    value: typeof UNIT_2 !== "undefined" ? UNIT_2 : null
  }
];

const COURSE = UNIT_FILES
  .filter(entry => {
    if (entry.value) return true;
    console.warn(`AbhyasLab: ${entry.name} was not loaded and has been skipped.`);
    return false;
  })
  .map(entry => entry.value);

(function validateCourseStructure() {
  const topicIds = new Set();
  const taskIds = new Set();
  const errors = [];

  COURSE.forEach(unit => {
    if (!unit || !Array.isArray(unit.topics)) {
      errors.push(`${unit && unit.unit ? unit.unit : "Unknown unit"} has no topics array.`);
      return;
    }

    unit.topics.forEach(topic => {
      if (!topic.id) {
        errors.push(`${unit.unit}: one topic is missing an id.`);
      } else if (topicIds.has(topic.id)) {
        errors.push(`Duplicate topic id: ${topic.id}`);
      } else {
        topicIds.add(topic.id);
      }

      (topic.tasks || []).forEach(task => {
        if (!task.id) {
          errors.push(`${topic.id || topic.title}: one task is missing an id.`);
        } else if (taskIds.has(task.id)) {
          errors.push(`Duplicate task id: ${task.id}`);
        } else {
          taskIds.add(task.id);
        }
      });
    });
  });

  if (!COURSE.length) {
    errors.push("No unit files were loaded. Check the script tags in index.html.");
  }

  if (errors.length) {
    console.error("AbhyasLab course validation failed:", errors);
    return;
  }

  const topicCount = COURSE.reduce((total, unit) => total + unit.topics.length, 0);
  const taskCount = COURSE.reduce(
    (total, unit) =>
      total + unit.topics.reduce(
        (unitTotal, topic) => unitTotal + (topic.tasks || []).length,
        0
      ),
    0
  );

  console.info(
    `[AbhyasLab Course v${COURSE_META.version}] ${COURSE_META.message}`,
    {
      units: COURSE.length,
      topics: topicCount,
      tasks: taskCount,
      buildDate: COURSE_META.buildDate
    }
  );
})();
