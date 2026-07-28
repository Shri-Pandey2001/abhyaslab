/* ==========================================================================
   AbhyasLab — COURSE ASSEMBLY
   One file per unit. This file just puts them in order.

   TO ADD A NEW UNIT
     1. Copy unit2.js to unit3.js and edit the content inside it.
     2. Rename the variable at the top to UNIT_3.
     3. Add a <script> tag for it in index.html, above this file.
     4. Add UNIT_3 to the list below.

   A unit that has not been uploaded yet is skipped instead of breaking the
   whole site, so a half-finished upload still leaves a working page.
   ========================================================================== */

const COURSE = [
  typeof UNIT_1 !== "undefined" ? UNIT_1 : null,
  typeof UNIT_2 !== "undefined" ? UNIT_2 : null
].filter(Boolean);

if (!COURSE.length) {
  console.error("AbhyasLab: no unit files loaded. Check the <script> tags in index.html.");
}
