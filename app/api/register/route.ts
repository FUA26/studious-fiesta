import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

import { ZodError } from "zod";
import { createUserSchema } from "@/schemas/user-schema";

export async function POST(req: Request) {
  try {
    const { nama, email, password } = createUserSchema.parse(await req.json());

    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        nama,
        email: email.toLowerCase(),
        password: hashed_password,
        nik: "",
        phone: "",
      },
    });

    return NextResponse.json({
      user: {
        name: user.nama,
        email: user.email,
      },
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          status: "error",
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    if (error.code === "P2002") {
      return NextResponse.json(
        {
          status: "fail",
          message: "user with that email already exists",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        status: "error",
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
