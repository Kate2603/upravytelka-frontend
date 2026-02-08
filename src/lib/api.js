export async function submitLead(apiBase, payload) {
  const base = (apiBase || '').replace(/\/$/, '');
  if (!base) throw new Error('Не налаштовано API (VITE_API_BASE).');

  const url = `${base}/api/lead`;

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await resp.json().catch(() => ({}));

  if (!resp.ok || data.ok !== true) {
    throw new Error(data?.message || `Помилка (${resp.status})`);
  }

  return data;
}
