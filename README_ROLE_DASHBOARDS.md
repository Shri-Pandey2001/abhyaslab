# AbhyasLab Role-Based Dashboard Update

This package separates the platform experience by role.

## Role routing

- `student` → existing student learning dashboard in `index.html`
- `faculty` → `faculty.html`
- `ta` → `faculty.html`
- `admin` → `admin.html`

## Replace these existing files

- `index.html`
- `assets/js/api.js`
- `assets/js/config.js`
- `assets/js/supabase-ui.js`
- `assets/css/landing.css`
- `js/supabase-config.js`

## Add these new files

- `admin.html`
- `faculty.html`
- `assets/css/dashboard.css`
- `assets/js/role-router.js`
- `assets/js/admin-dashboard.js`
- `assets/js/faculty-dashboard.js`
- `assets/js/dashboard-common.js`

## Do not change

- `assets/js/app.js`
- `assets/js/content.js`
- `assets/js/unit1.js`
- `assets/js/unit2.js`
- `assets/css/style.css`
- `assets/img/`

## Admin functions already active

The administrator page can currently:

- Create students
- Create faculty
- Create teaching assistants
- Create sections
- Assign faculty or TA to sections
- Sign out securely

Other cards are prepared as placeholders until the Core and AI Edge Functions are deployed.

## One GitHub commit

Use:

`Add role-based admin and faculty dashboards`
