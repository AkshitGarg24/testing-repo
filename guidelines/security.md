# Security & Logging Policy

1. **No Console Logs:** `console.log` is strictly forbidden in production code. Use the `Logger` utility.
2. **Secrets:** Never hardcode API keys or secrets in the code. Use `process.env`.
3. **SQL Injection:** When using Prisma, never use `$queryRawUnsafe`.