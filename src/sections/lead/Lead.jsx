import React, { useMemo, useState } from 'react';
import Section from '../../components/ui/Section.jsx';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';
import Toast from '../../components/ui/Toast.jsx';
import { Grid2 } from '../../components/ui/Grid.jsx';
import { submitLead } from '../../lib/api.js';
import styles from './Lead.module.css';

// У проді: VITE_API_BASE = https://<render-domain>
// У локалі (якщо не задано) — працює з localhost бекенду
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080';

function buildMessage(payload) {
  const dt = new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date());

  return `Заявка на консультацію (Управителька)
Дата/час: ${dt}

Клієнт: ${payload.name}
Контакт: ${payload.contact}

Тип нерухомості: ${payload.type}
Локація: ${payload.location}
Коли почати: ${payload.timeline}

Запит:
${payload.needs}

Побажання:
— хочу передати нерухомість під управління "під ключ" у Харкові, з контролем оренди та оплатою комунальних без боргів.`;
}

function validate(form) {
  const e = [];
  if (form.name.trim().length < 2) e.push('Вкажіть ім’я (мінімум 2 символи).');
  if (form.contact.trim().length < 5)
    e.push('Вкажіть контакт (мінімум 5 символів).');
  if (form.location.trim().length < 2)
    e.push('Вкажіть район або коротко адресу.');
  if (form.needs.trim().length < 10)
    e.push('Опишіть запит (мінімум 10 символів).');
  return e;
}

export default function Lead() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    type: 'Квартира',
    location: '',
    needs: '',
    timeline: 'Якнайшвидше',
    website: '', // honeypot
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const preview = useMemo(() => buildMessage(form), [form]);

  function setField(key, value) {
    setForm(p => ({ ...p, [key]: value }));
  }

  async function copyPreview() {
    try {
      await navigator.clipboard.writeText(preview);
      setStatus({
        type: 'ok',
        text: 'Скопійовано ✅ Можете вставити текст у Telegram та надіслати Катерині.',
      });
    } catch {
      setStatus({
        type: 'error',
        text: 'Не вдалося скопіювати. Скопіюйте вручну з поля праворуч.',
      });
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: 'idle', text: '' });

    // honeypot: якщо заповнили — тихо “успішно”
    if (String(form.website || '').trim()) {
      setStatus({ type: 'ok', text: 'Дякуємо! Заявку прийнято ✅' });
      return;
    }

    const errors = validate(form);
    if (errors.length) {
      setStatus({ type: 'error', text: errors.join(' ') });
      return;
    }

    setSending(true);
    try {
      const payload = {
        ...form,
        message: preview,
        source: 'landing-upravytelka',
      };

      await submitLead(API_BASE, payload);

      setStatus({
        type: 'ok',
        text: 'Заявку відправлено ✅ Катерина скоро з вами зв’яжеться.',
      });

      setForm({
        name: '',
        contact: '',
        type: 'Квартира',
        location: '',
        needs: '',
        timeline: 'Якнайшвидше',
        website: '',
      });
    } catch (err) {
      setStatus({
        type: 'error',
        text: err?.message || 'Помилка відправки',
      });
    } finally {
      setSending(false);
    }
  }

  const toastType =
    status.type === 'idle' ? 'idle' : status.type === 'ok' ? 'ok' : 'error';

  return (
    <Section
      id="lead"
      title="Заявка на консультацію"
      subtitle="Заповніть форму — я отримаю заявку в Telegram і зв’яжуся з вами."
    >
      <Grid2 className={styles.grid}>
        <Card>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.honeypot} aria-hidden="true">
              <label>
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={e => setField('website', e.target.value)}
                />
              </label>
            </div>

            <label className={styles.label}>
              <span className={styles.labelText}>Ваше ім’я</span>
              <input
                className={styles.input}
                value={form.name}
                onChange={e => setField('name', e.target.value)}
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Телефон або месенджер</span>
              <input
                className={styles.input}
                value={form.contact}
                onChange={e => setField('contact', e.target.value)}
                placeholder="Напр.: +380… або @username"
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Тип нерухомості</span>
              <select
                className={styles.input}
                value={form.type}
                onChange={e => setField('type', e.target.value)}
              >
                <option value="Квартира">Квартира</option>
                <option value="Будинок">Будинок</option>
                <option value="Комерційна нерухомість">
                  Комерційна нерухомість
                </option>
                <option value="Інше">Інше</option>
              </select>
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Район / адреса (коротко)</span>
              <input
                className={styles.input}
                value={form.location}
                onChange={e => setField('location', e.target.value)}
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Що потрібно зробити</span>
              <textarea
                className={styles.textarea}
                value={form.needs}
                onChange={e => setField('needs', e.target.value)}
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Коли хочете почати</span>
              <select
                className={styles.input}
                value={form.timeline}
                onChange={e => setField('timeline', e.target.value)}
              >
                <option value="Якнайшвидше">Якнайшвидше</option>
                <option value="Протягом 1–2 тижнів">Протягом 1–2 тижнів</option>
                <option value="Протягом місяця">Протягом місяця</option>
                <option value="Планую заздалегідь">Планую заздалегідь</option>
              </select>
            </label>

            <div className={styles.actions}>
              <Button variant="primary" type="submit" disabled={sending}>
                {sending ? 'Відправляю...' : 'Відправити заявку'}
              </Button>

              <Button type="button" onClick={copyPreview}>
                Скопіювати текст
              </Button>

              <Button
                as="a"
                href="https://t.me/Kitivell"
                variant="ghost"
                target="_blank"
                rel="noreferrer"
              >
                Відкрити Telegram
              </Button>
            </div>

            <div className={styles.toastWrap}>
              <Toast type={toastType}>
                {status.type === 'idle' ? '' : status.text}
              </Toast>
            </div>

            <div className={styles.hint}>
              Заявка відправляється напряму Катерині в Telegram через сервер.
            </div>
          </form>
        </Card>

        <Card>
          <h3 className={styles.previewTitle}>Попередній перегляд</h3>
          <textarea className={styles.previewArea} readOnly value={preview} />
          <div className={styles.previewHint}>
            Якщо хочете — просто скопіюйте й надішліть у Telegram:{' '}
            <a
              className={styles.tgLink}
              href="https://t.me/Kitivell"
              target="_blank"
              rel="noreferrer"
            >
              t.me/Kitivell
            </a>
          </div>
        </Card>
      </Grid2>
    </Section>
  );
}
