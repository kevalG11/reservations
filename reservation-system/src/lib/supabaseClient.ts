// src/lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';
import { sendEmail } from './emailService'; // Assuming you have emailService.ts set up as instructed earlier

const supabaseUrl = 'https://xxxslguqnzwkamoaenvn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHNsZ3Vxbnp3a2Ftb2FlbnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMTQ0ODYsImV4cCI6MjA1ODg5MDQ4Nn0.Q5q2hQD3V_46LB4_AXhezhpvJ7GL_J2x6IWa49WTiQo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Real-Time Event Listeners for Supabase
supabase
  .channel('reservations')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'reservations' }, (payload) => {
    const reservation = payload.new;
    console.log('New reservation created: ', reservation);

    sendEmail(
      reservation.email,
      'Reservation Confirmed',
      `<p>Your reservation for ${reservation.date} at ${reservation.time} has been confirmed.</p>
      <p>Guests: ${reservation.guests}</p>
      <p>Table: ${reservation.table}</p>
      <p>Special Requests: ${reservation.special_requests || 'None'}</p>`
    );
  })
  .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'reservations' }, (payload) => {
    const reservation = payload.new;
    console.log('Reservation updated: ', reservation);

    sendEmail(
      reservation.email,
      'Reservation Updated',
      `<p>Your reservation has been updated to:</p>
      <p>Date: ${reservation.date}</p>
      <p>Time: ${reservation.time}</p>
      <p>Guests: ${reservation.guests}</p>
      <p>Table: ${reservation.table}</p>
      <p>Special Requests: ${reservation.special_requests || 'None'}</p>`
    );
  })
  .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'reservations' }, (payload) => {
    const reservation = payload.old;
    console.log('Reservation deleted: ', reservation);

    sendEmail(
      reservation.email,
      'Reservation Canceled',
      `<p>Your reservation for ${reservation.date} at ${reservation.time} has been canceled.</p>`
    );
  })
  .subscribe();
