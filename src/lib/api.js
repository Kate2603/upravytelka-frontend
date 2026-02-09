export async function submitLead(apiBase, payload) {
  const base = String(apiBase || '').replace(/\/$/, '');
  const url = `${base}/api/lead`;

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const text = await resp.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = {};
  }

  if (!resp.ok || data.ok !== true) {
    throw new Error(data?.message || `Помилка (${resp.status})`);
  }

  return data;
}
