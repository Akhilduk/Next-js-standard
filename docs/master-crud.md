# Master CRUD

## Purpose
Master tables store low-churn reference data that powers business workflows (e.g., departments, designations).

## Current Masters
- Departments (`/masters/departments`)
- Designations (`/masters/designations`)

## CRUD Standards
- Validate payloads strictly.
- Enforce unique code constraints.
- Track create/update actor in audit logs.
- Expose paginated APIs for larger datasets.

## UI Standards
- Table list with filters and pagination.
- Inline status/validation feedback.
- Bulk upload/download optional for operations teams.
