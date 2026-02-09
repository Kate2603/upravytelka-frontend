export async function submitLead(apiBase, payload) {
  const base = String(apiBase || '').replace(/\/$/, '');
  if (!base) throw new Error('API base не налаштовано.');

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
