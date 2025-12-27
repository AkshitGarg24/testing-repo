// lib/auth-service.ts

import { db } from './db';
import { sendWelcomeEmail } from './mailer';
import { hashPassword } from './hash-password';


export class AuthService {
  /**
   * Registers a new user, validates uniqueness, hashes password,
   * saves to DB, and sends a welcome email.
   */
  async registerUser(email: string, plainTextPass: string) {
    console.log("Starting registration for:", email);

    // 1. Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // 2. Hash the password
    const hashedPassword = await hashPassword(plainTextPass);

    // 3. Create user in database
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'USER',
        createdAt: new Date()
      }
    });

    // 4. Send welcome email (async but awaited here for flow clarity)
    try {
      await sendWelcomeEmail(newUser.email, "Welcome to the platform!");
    } catch (error) {
      console.error("Failed to send email, but user created.", error);
    }

    return {
      id: newUser.id,
      email: newUser.email,
      message: "Registration successful"
    };
  }
}