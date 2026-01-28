# Feature Flags Simple Project

A web application built with PHP, React, and TypeScript.

## Requirements

- Docker
- Docker Compose

## Getting Started

1. **Clone the repository:**
   ```bash 
   git clone https://github.com/your-username/your-repo.git cd your-repo
   ```
2. **Copy environment files (if needed):**
In this case I have added the `.env` files for simplicity, (I know I should not have for a production ready project). Feel free to change the values there.
3. **Start the application with Docker Compose:**
    ```bash
    docker compose up --build 
    ```
4. **Access the application:**
    - Web (admin): [http://localhost:8000](http://localhost:8000)
      - use the user `admin@admin.com` with password `admin` to log in.
    - Web Frontend: [http://localhost:3000](http://localhost:3000)

## Useful Commands

- **Stop containers:**
```bash
docker compose down
```
- **Rebuild containers:**
```bash
docker compose up --build
```
## Notes

- Ensure Docker and Docker Compose are installed on your system.
- The application will automatically run database migrations and seeders on startup.
- Update environment variables in `.env` as needed.
- Next has a revalidate cache time set to 30 seconds for development purposes. (This can be changed in `./frontend/.env`).
- The value of the `x-filter` (to be explained further in the project) header can be changed in `./frontend/.env`.
---

### How does this work?
This project demonstrates a simple feature flag system using a combination of PHP (Laravel) for the backend and React with TypeScript for the frontend. The feature flags are stored in a database and can be toggled via an admin interface.
The frontend fetches the feature flags and conditionally renders components based on their status.

There are three ways to enable/disable feature flags via the admin panel:
* Via the `enabled` toggle switch.
* Via the `enabled_at` and `disabled_at` datetime fields. (Due to time constraints these fields have no validation, so be careful when setting them).
* Via the `filters` field. This is a simple `string` field which makes a feature enabled once the value of the `x-filter` header matches the value of the `filters` field. (This is a simple implementation for demonstration purposes).

Hence a feature flag will be considered enabled if:
* The `enabled` field is set to `true`.
* The current datetime is after the `enabled_at` datetime (if set) and before the `disabled_at` datetime (if set).
* The value of the `x-filter` header matches the value of the `filters` field (if set).

There's a cache mechanism implemented in the backend to reduce database queries. The cache is invalidated whenever a feature flag is updated via the admin panel.
The TTL of the cache is set to the earliest `disabled_at` datetime of the enabled feature flags, or a default of 1 day if none are set.

### To Keep in mind
* For simplicity and due to time constraints, there are no validations on the datetime fields.
* The `filters` field is a simple string match for demonstration purposes. In a real-world this could be set to a header present in the client request.
* The CRUD operations over the Reports are not covered in the API, these are just mocks implemented client side.
  * As these are not implemented in the backend, any changes made to the reports in the frontend will not persist after a page reload.
  * Also validations of the feature flags when creating/editing reports are not implemented. Of course these would be implemented in a real world scenario.
* Error handling and security measures are minimal for demonstration purposes.
