// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth-service';

const authService = new AuthService();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const result = await authService.registerUser(email, password);
    
    return NextResponse.json(result, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}