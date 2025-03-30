import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

// PATCH: Update customer details
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const customerId = params.id;
    const updates = await req.json();

    const { data, error } = await supabase
        .from('Customers')
        .update(updates)
        .eq('id', customerId);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, data }, { status: 200 });
}

// DELETE: Remove a customer with this
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const customerId = params.id;

    const { data, error } = await supabase
        .from('Customers')
        .delete()
        .eq('id', customerId);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, data }, { status: 200 });
}
