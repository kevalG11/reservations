import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

// PATCH: Update reservation details
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const reservationId = params.id;
    const updates = await req.json();

    const { data, error } = await supabase
        .from('Reservations')
        .update(updates)
        .eq('id', reservationId);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, data }, { status: 200 });
}

// DELETE: Remove a reservation
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const reservationId = params.id;

    const { data, error } = await supabase
        .from('Reservations')
        .delete()
        .eq('id', reservationId);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, data }, { status: 200 });
}
