# Next.js 14+ Coding Standards

1. **Server Components First:** All components should be Server Components by default. Only add `"use client"` when absolutely necessary (e.g., `onClick`, `useState`).
2. **Image Optimization:** Never use the standard HTML `<img>` tag. You MUST use `next/image`.
3. **Data Fetching:** Do not use `useEffect` for initial data fetching. Use async/await in Server Components.
4. **Icons:** We strictly use `lucide-react` for icons. Do not import icons from other libraries like `react-icons`.