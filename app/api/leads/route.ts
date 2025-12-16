import { NextResponse } from "next/server";
import { z } from "zod";

import { getSupabaseAdmin } from "@/lib/supabase";

const LeadSchema = z.object({
  nombre: z.string().min(1),
  telefono: z.string().min(1),
  email: z.string().email(),
  direccion: z.string().min(1),
  servicio: z.string().min(1),
  mensaje: z.string().optional().nullable(),

  // Anti-bot / metadata (optional)
  website: z.string().optional().nullable(),
  pageUrl: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
});

type LeadInput = z.infer<typeof LeadSchema>;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const lead: LeadInput = parsed.data;

  // Honeypot: if filled, treat as bot
  if (lead.website && lead.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    const supabase = getSupabaseAdmin();

    const { error } = await supabase.from("leads").insert({
      nombre: lead.nombre,
      telefono: lead.telefono,
      email: lead.email,
      direccion: lead.direccion,
      servicio: lead.servicio,
      mensaje: lead.mensaje ?? null,
      page_url: lead.pageUrl ?? null,
      user_agent: lead.userAgent ?? null,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 },
    );
  }
}
