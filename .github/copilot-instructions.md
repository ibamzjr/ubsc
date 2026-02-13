## Purpose

Quick, repository-specific instructions to help AI coding agents be productive in this Laravel application.

## Big picture

- This is a Laravel 12 skeleton app (PHP ^8.2). Core layout:
  - HTTP entry: `public/index.php` -> `bootstrap/app.php` -> service providers in `app/Providers`.
  - Routing: `routes/web.php` (and other route files if added).
  - Controllers: `app/Http/Controllers`.
  - Models / Eloquent: `app/Models` (check `User.php`).
  - Views / frontend: `resources/views`, assets under `resources/js` and `resources/css` built with Vite (`vite.config.js`).

## Typical developer workflows (commands that actually work here)

- Project bootstrap (one-liner):
  - `composer run-script setup` — installs PHP deps, copies `.env`, generates app key, runs migrations, installs JS deps and builds assets.
- Development (hot reload):
  - `composer run-script dev` — starts `php artisan serve`, `queue:listen`, `pail` (logging helper) and `vite` concurrently.
  - Or run pieces individually: `php artisan serve` and `npm run dev`.
- Build assets: `npm run build` (uses Vite).
- Tests: `composer run-script test` or `php artisan test` (phpunit.xml is configured to use sqlite :memory: and sets queue/session/mail to in-memory modes).

## Project-specific conventions & gotchas

- Autoloading: PSR-4 mapping `App\` -> `app/` (see `composer.json`). New classes should follow this namespace.
- Tests: `phpunit.xml` forces testing env values (DB_CONNECTION=sqlite, DB_DATABASE=:memory:, QUEUE_CONNECTION=sync). Expect tests to run without external DB.
- Example oddity to watch for: `app/Models/User.php` uses a `protected function casts(): array` implementation instead of the typical `$casts` property. This is nonstandard — when adding new attribute casts prefer `$casts = [...]` unless other models follow the same pattern (search `app/Models` first).
- Background jobs & logging: production-like dev workflow uses `php artisan queue:listen` and `laravel/pail` (present in composer.json) — logs/pulse tooling may be in use; follow existing patterns when adding queue workers.

## Integration points / external deps

- PHP packages are in `composer.json` (Laravel framework, pail, pint, sail, tinker). Confirm PHP 8.2 when running locally.
- Frontend: Vite + Tailwind + axios (`package.json`). Assets live in `resources/*` and are referenced by `vite` in blade templates.
- DB migrations and seeds: `database/migrations`, `database/seeders`, `database/factories`.

## Where to make common changes

- Register application services / bindings: `app/Providers/AppServiceProvider.php` (use `register()` for bindings and `boot()` for bootstrapping).
- Add routes: `routes/web.php` (or `routes/api.php` if you add an API entry).
- Add controllers: `app/Http/Controllers` and reference them from routes.
- Add models: `app/Models` and factories in `database/factories`.

## Testing & verification examples

- Run the unit/feature suite: `composer test` (this calls `php artisan test`). Because `phpunit.xml` configures an in-memory sqlite DB, most tests won't require a DB file.
- To run a single test class: `php artisan test --filter TestClassName` or `./vendor/bin/phpunit tests/Feature/YourTest.php`.

## Editing guidance for AI agents

- Prefer small, focused edits and run the test suite after changes. The project provides `composer test` for CI-like validation.
- When modifying models, check whether other models use the nonstandard `casts()` function; if not, convert to the `$casts` property and update tests accordingly.
- When adding routes or controllers, update `routes/web.php` and add a basic feature test under `tests/Feature` demonstrating the route returns 200.

## Files to reference for patterns

- `composer.json` — scripts (setup/dev/test), PHP / package constraints.
- `phpunit.xml` — test environment values (sqlite, in-memory DB, sync queues).
- `app/Models/User.php` — shows model pattern to inspect across repo.
- `routes/web.php`, `app/Providers/AppServiceProvider.php`, `resources/js` and `resources/views` — common edit points.

If anything in this summary is unclear or you want the agent to emphasize other areas (CI, deployment, secrets), tell me which area to expand and I'll iterate.
