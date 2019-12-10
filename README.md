# hfjv
### High Frequency Jet Ventilation Database
Database for recording information for IR RFA cases using HFJV
### Features
- Instant form field saving using clean/dirty indicators with form locking
- Charlson Comorbidity calculator
- P-POSSUM Score calculator
- Follow up indicator

### Installation
This is a standard laravel/vue project. You'll need composer and npm installed. Run:

- `composer install`

- `npm install`

- `cp .env.example .env` and edit for correct DB connections

- `php artisan key:generate`

- `php artisan migrate`
