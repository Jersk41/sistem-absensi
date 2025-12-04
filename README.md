# Sistem Absensi

Aplikasi web modern untuk manajemen absensi dengan antarmuka yang responsif dan intuitif. Dibangun dengan Laravel 12, React, dan TypeScript.

## 📋 Deskripsi Projek

Sistem Absensi adalah aplikasi web yang dirancang untuk memudahkan manajemen kehadiran pengguna. Aplikasi ini menyediakan:

- **Manajemen Pengguna**: Kelola data pengguna dengan antarmuka yang user-friendly
- **Dashboard**: Tampilan ringkas informasi absensi secara real-time
- **Pengaturan**: Kustomisasi preferensi dan tema aplikasi
- **Responsif**: Desain yang beradaptasi sempurna di semua ukuran layar
- **Modern UI**: Interface menggunakan Shadcn/ui dengan Tailwind CSS

## 🛠️ Tech Stack

### Backend
- **Framework**: Laravel 12
- **Database**: MySQL 8.1
- **Language**: PHP 8.2+
- **Testing**: Pest PHP

### Frontend
- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **UI Library**: Shadcn/ui
- **Styling**: Tailwind CSS 4
- **State Management**: Inertia.js

### Tools & DevTools
- **Linting**: ESLint
- **Formatting**: Prettier
- **Docker**: Docker & Docker Compose

## 📦 Fitur Utama

- ✅ Autentikasi & Otorisasi
- ✅ Manajemen User (CRUD)
- ✅ Dashboard dengan Analytics
- ✅ Pengaturan Tampilan & Tema
- ✅ Responsive Design
- ✅ Data Pagination
- ✅ Form Validation
- ✅ Error Handling

## 🚀 Cara Install

### Prasyarat
- PHP 8.2 atau lebih tinggi
- Composer
- Node.js 18+ dan npm
- Docker & Docker Compose (opsional)

### Langkah Instalasi

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd sistem-absensi
   ```

2. **Install Backend Dependencies**
   ```bash
   composer install
   ```

3. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

4. **Setup Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Konfigurasi Database**
   - Edit file `.env` dan sesuaikan konfigurasi database Anda
   - Jika menggunakan Docker: `docker-compose up -d`
   - Jika menggunakan database lokal: Pastikan MySQL sudah berjalan

6. **Jalankan Migrasi Database**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

7. **Jalankan Aplikasi**
   ```bash
   npm run dev
   ```
   
   Atau gunakan perintah kombinasi untuk menjalankan server, queue, dan Vite secara bersamaan:
   ```bash
   composer run dev
   ```

8. **Buka Aplikasi**
   Akses aplikasi di `http://localhost:8000`

## 🐳 Setup dengan Docker

Jika Anda ingin menggunakan Docker:

```bash
# Start Docker containers
docker-compose up -d

# Akses container Laravel
docker-compose exec <service-name> php artisan migrate
docker-compose exec <service-name> php artisan db:seed
```

## 📝 Perintah Penting

### Development
```bash
# Menjalankan development server dengan hot reload
npm run dev

# Build untuk production
npm run build

# Build SSR
npm run build:ssr

# Format kode
npm run format

# Check format
npm run format:check

# Linting & fix
npm run lint

# Type checking
npm run types
```

### Laravel Artisan
```bash
# Jalankan development server
php artisan serve

# Jalankan migrations
php artisan migrate

# Seeding database
php artisan db:seed

# Jalankan tests
php artisan test

# Buka Tinker
php artisan tinker

# SSR Server
php artisan inertia:start-ssr
```

## 🧪 Testing

```bash
# Jalankan semua test
composer test

# Jalankan test spesifik
php artisan test tests/Feature/DashboardTest.php
```

## 📂 Struktur Project

```
sistem-absensi/
├── app/                          # Kode Laravel (Controllers, Models, etc)
│   ├── Http/
│   │   ├── Controllers/          # Route handlers
│   │   ├── Middleware/           # Middleware
│   │   └── Requests/             # Form requests & validation
│   └── Models/                   # Eloquent models
├── resources/
│   ├── js/                       # React components & pages
│   │   ├── app.tsx              # Entry point React
│   │   ├── components/           # Reusable components
│   │   ├── hooks/                # Custom React hooks
│   │   ├── layouts/              # Page layouts
│   │   ├── lib/                  # Utilities & helpers
│   │   ├── pages/                # Page components
│   │   └── types/                # TypeScript types
│   ├── css/                      # Styling
│   └── views/                    # Blade templates
├── database/
│   ├── migrations/               # Database migrations
│   ├── seeders/                  # Database seeders
│   └── factories/                # Model factories
├── routes/                       # Route definitions
├── config/                       # Konfigurasi aplikasi
├── storage/                      # File storage
└── tests/                        # Unit & feature tests
```

## 🔐 Keamanan

- Authentication dengan Laravel Sanctum
- CSRF protection
- SQL injection prevention via Eloquent ORM
- XSS protection melalui React
- Environment variables untuk sensitive data

## 📞 Kontribusi

Untuk berkontribusi ke proyek ini:

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detail.

## 📸 Screenshots

![Project Screenshot](https://github.com/user-attachments/assets/bf251943-4799-4098-8768-67ae74801bc8)

## 👤 Author

**Jersk41**

- Repository: [sistem-absensi](https://github.com/Jersk41/sistem-absensi)

