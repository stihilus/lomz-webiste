// Hand-drawn line in the accent blue that follows the mouse (desktop only).
// It stays while the mouse moves and fades out 1s after the mouse stops.
// Points are stored in page coordinates, so the line scrolls with the part of the page it was drawn on.
const IDLE_MS = 1000;
const FADE_MS = 600;
const MAX_POINTS = 1500;
const MIN_STEP = 3;
const MAX_JUMP = 160;

const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (finePointer && !reducedMotion) start();

function start() {
  const canvas = document.createElement('canvas');
  canvas.className = 'cursor-trail';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // A session is everything drawn during one stretch of movement; it fades as a whole once the mouse rests.
  let sessions = [];
  let lastMove = 0;
  let breakNext = true;
  let dirty = false;
  let raf = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(innerWidth * dpr);
    canvas.height = Math.round(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    dirty = true;
    schedule();
  }

  function schedule() {
    if (!raf) raf = requestAnimationFrame(frame);
  }

  // Width and wobble are fixed per point so the line keeps its shape while it is redrawn.
  function point(x, y) {
    return {
      x: x + (Math.random() - 0.5) * 1.2,
      y: y + (Math.random() - 0.5) * 1.2,
      w: 2 + Math.random() * 1.6,
      jx: (Math.random() - 0.5) * 3,
      jy: (Math.random() - 0.5) * 3,
    };
  }

  function onMove(e) {
    const now = performance.now();
    let session = sessions[sessions.length - 1];
    if (!session || session.fadeStart !== null) {
      session = { strokes: [], count: 0, fadeStart: null };
      sessions.push(session);
      breakNext = true;
    }
    let stroke = session.strokes[session.strokes.length - 1];
    const last = stroke && stroke[stroke.length - 1];
    const px = e.clientX + scrollX, py = e.clientY + scrollY;
    const dist = last ? Math.hypot(px - last.x, py - last.y) : Infinity;
    lastMove = now;

    if (breakNext || !stroke || dist > MAX_JUMP) {
      stroke = [];
      session.strokes.push(stroke);
      breakNext = false;
    } else if (dist < MIN_STEP) {
      return;
    }

    stroke.push(point(px, py));
    session.count++;
    while (session.count > MAX_POINTS) {
      session.strokes[0].shift();
      session.count--;
      if (!session.strokes[0].length) session.strokes.shift();
    }
    dirty = true;
    schedule();
  }

  function trace(pts, offset) {
    const px = (p) => p.x + (offset ? p.jx : 0);
    const py = (p) => p.y + (offset ? p.jy : 0);
    ctx.moveTo(px(pts[0]), py(pts[0]));
    for (let i = 1; i < pts.length; i++) {
      const b = pts[i], c = pts[i + 1];
      if (c) ctx.quadraticCurveTo(px(b), py(b), (px(b) + px(c)) / 2, (py(b) + py(c)) / 2);
      else ctx.lineTo(px(b), py(b));
    }
  }

  function drawStroke(pts, alpha) {
    if (pts.length < 2) return;
    // Main line: one curve segment at a time, so the width can vary like a marker.
    ctx.globalAlpha = alpha;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], c = pts[i + 1];
      ctx.beginPath();
      if (i === 1) ctx.moveTo(a.x, a.y);
      else ctx.moveTo((a.x + b.x) / 2, (a.y + b.y) / 2);
      if (c) ctx.quadraticCurveTo(b.x, b.y, (b.x + c.x) / 2, (b.y + c.y) / 2);
      else ctx.lineTo(b.x, b.y);
      ctx.lineWidth = b.w;
      ctx.stroke();
    }
    // A thin, slightly offset second pass, like the doubled strokes in the Takeaways font.
    ctx.globalAlpha = alpha * 0.55;
    ctx.lineWidth = 1;
    ctx.beginPath();
    trace(pts, true);
    ctx.stroke();
  }

  function frame(now) {
    raf = 0;
    const active = sessions[sessions.length - 1];
    if (active && active.fadeStart === null && now - lastMove > IDLE_MS) active.fadeStart = now;
    const before = sessions.length;
    sessions = sessions.filter((s) => s.fadeStart === null || now - s.fadeStart < FADE_MS);
    const fading = sessions.some((s) => s.fadeStart !== null);

    if (dirty || fading || sessions.length !== before) {
      dirty = false;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.translate(-scrollX, -scrollY);
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0000EE';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (const s of sessions) {
        const alpha = s.fadeStart === null ? 1 : 1 - (now - s.fadeStart) / FADE_MS;
        for (const stroke of s.strokes) drawStroke(stroke, alpha);
      }
    }
    if (sessions.length) schedule();
  }

  // Start a new stroke when the mouse leaves the window or enters an embedded piece,
  // so the line never jumps straight across the gap.
  document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget || e.relatedTarget.tagName === 'IFRAME') breakNext = true;
  });
  document.addEventListener('mousemove', onMove, { passive: true });
  addEventListener('resize', resize);
  addEventListener('scroll', () => { if (sessions.length) { dirty = true; schedule(); } }, { passive: true });
  resize();
}
