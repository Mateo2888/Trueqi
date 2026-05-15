# Trueqi — Development Setup

## Prerrequisitos

- Node.js >= 20
- Bun >= 1.3
- PostgreSQL (local o Docker)
- Redis (local, Docker, o Upstash cloud)

## Arquitectura de puertos

| App | Puerto | Descripción |
|-----|--------|-------------|
| `apps/api` | 9000 | Backend Medusa + Mercur API |
| `apps/admin-test` | 7000 | Admin Panel (Mercur Dashboard) |
| `apps/vendor` | 7001 | Vendor / Seller Panel |

## Setup inicial (PowerShell en Windows)

### 1. Instalar dependencias

```powershell
# Desde la raíz del monorepo
bun install
```

### 2. Configurar variables de entorno

```powershell
# API backend
Copy-Item apps\api\.env.example apps\api\.env

# Admin panel
Copy-Item apps\admin-test\.env.example apps\admin-test\.env

# Vendor panel
Copy-Item apps\vendor\.env.example apps\vendor\.env
```

Luego editar `apps\api\.env` con tus datos reales:
- `DATABASE_URL` con tu usuario/contraseña de PostgreSQL
- `REDIS_URL` con tu URL de Upstash o Redis local

### 3. Crear la base de datos

```powershell
# En psql o pgAdmin: crear DB llamada "trueqi"
createdb -U postgres trueqi
```

### 4. Correr migraciones

```powershell
cd apps\api
bun run medusa db:migrate
cd ..\..
```

### 5. Crear usuario admin

```powershell
cd apps\api
bun run medusa user -e admin@trueqi.com -p Admin2026!
cd ..\..
```

## Correr en desarrollo (3 terminales)

### Terminal 1 — Backend API

```powershell
cd apps\api
bun run dev
# ✅ API disponible en http://localhost:9000
# ✅ Health check: http://localhost:9000/health
```

### Terminal 2 — Admin Panel

```powershell
cd apps\admin-test
bun run dev
# ✅ Admin disponible en http://localhost:7000
# Login: admin@trueqi.com / Admin2026!
```

### Terminal 3 — Vendor Panel

```powershell
cd apps\vendor
bun run dev
# ✅ Vendor panel disponible en http://localhost:7001
```

## Correr todo desde la raíz (Turbo)

```powershell
# Todas las apps en paralelo
bun run dev

# O individualmente:
bun run dev:api
bun run dev:admin
bun run dev:vendor
```

## Solución de problemas

### `localhost:9000/app` retorna "Cannot GET /app"
Esto es normal. La UI no está embebida en el backend. Usa:
- Admin: http://localhost:7000
- Vendor: http://localhost:7001

### Error de CORS en el browser
Verifica que `apps/api/.env` tenga los puertos correctos en `ADMIN_CORS` y `VENDOR_CORS`.

### Error de conexión a Redis
Si usas Upstash, la URL debe ser `rediss://` (con doble s) para TLS.

### `bun install` falla en workspace packages
Correr `bun install` desde la **raíz** del monorepo, no desde cada app.
