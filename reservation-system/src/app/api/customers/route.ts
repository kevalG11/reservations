import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

// GET: Fetch all customers with pagination
export async function GET(req: Request) {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error } = await supabase
        .from('Customers')
        .select('*')
        .range(from, to);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, data }, { status: 200 });
}

// POST: Create a new customer
export async function POST(req: Request) {
    const { name, email, phone } = await req.json();

    if (!name || !email) {
        return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase.from('Customers').insert([{ name, email, phone }]);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, data }, { status: 201 });
}
