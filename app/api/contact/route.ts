import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Faltan campos requeridos." },
      { status: 400 },
    );
  }

  console.log("Nuevo contacto:", body);

  return NextResponse.json({ ok: true });
}
