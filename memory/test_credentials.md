# Test Credentials
# Agent writes here when creating/modifying auth credentials (admin accounts, test users).
# Testing agent reads this before auth tests. Fork/continuation agents read on startup.

## MO LABS Admin Inbox
- URL: /admin
- Admin key (test credential): `ml-admin-7f3a9c2e`
- Unlocking the inbox lists all contact/beta-access form submissions (stored in MongoDB `contact_submissions`).
- Owner email on file: molabs5555@gmail.com — ACTIVE: every contact/beta form submission triggers an email notification to this address via the managed Resend integration (sender display name "M.O. LABS"). Submissions are also stored in MongoDB regardless of email delivery.
