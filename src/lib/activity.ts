export async function logActivity(_payload: { title?: string; detail?: string; source?: string; name?: string; phone?: string; message?: string }) {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
