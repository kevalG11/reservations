import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

// PATCH: Update reservation status
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const reservationId = params.id;
    const { status_id } = await req.json();

    if (!status_id) return NextResponse.json({ success: false, error: 'Missing status_id' }, { status: 400 });

    const { data, error } = await supabase
        .from('Reservations')
        .update({ status_id })
        .eq('id', reservationId);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, data }, { status: 200 });
}
