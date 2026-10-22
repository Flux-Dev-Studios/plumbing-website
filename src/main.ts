import './styles.css'

type Service = { title: string; slug: string; description: string; details: string; image: string; icon: 'tap' | 'drain' | 'heat' | 'bath' | 'pipe' | 'check' }

// Add the business's real phone/WhatsApp number before publishing contact links.
const business = {
  name: 'DBEST WATER SOLUTIONS',
  phoneDisplay: '',
  phoneHref: '',
  whatsappNumber: '',
  serviceArea: 'Lagos and nearby areas',
}

const services: Service[] = [
  { title: 'Leak repairs', slug: 'leak-repairs', description: 'Find the source, fix it properly, and help protect your home from water damage.', details: 'A small leak can waste water and damage walls, cabinets, floors, and ceilings. We trace visible leaks around taps, toilets, fixtures, and accessible pipework, explain what we find, and recommend a repair that suits the problem. If the source is hidden, we can help identify the next steps before any larger work begins.', image: 'https://images.pexels.com/photos/32588548/pexels-photo-32588548.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: 'tap' },
  { title: 'Blocked drains', slug: 'blocked-drains', description: 'Clear stubborn blockages and get your sinks, showers and drains flowing again.', details: 'Slow drainage, standing water, and unpleasant smells can point to a blockage. We assess the affected fixture and accessible drainwork, clear common obstructions, and share practical advice to help reduce repeat problems. For deeper or shared drainage issues, we will explain what further investigation may be needed.', image: 'https://c.pxhere.com/images/9a/a4/5a4457336b64e2c2119a9648c265-1708346.jpg!d', icon: 'drain' },
  { title: 'Water heaters', slug: 'water-heaters', description: 'Installation, maintenance and repairs to get your hot water back on track.', details: 'If your water is not heating consistently, your unit is making unusual noises, or you are planning a replacement, we can assess the setup and talk through suitable options. Our work includes water heater troubleshooting, maintenance, and installation planning, with clear guidance on the scope before work starts.', image: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: 'heat' },
  { title: 'Bathroom plumbing', slug: 'bathroom-plumbing', description: 'Fittings, fixtures and pipework for bathroom updates big and small.', details: 'From replacing a basin tap to connecting fixtures during a bathroom refresh, careful plumbing makes the room work reliably every day. We help with taps, toilets, showers, basins, and associated pipework, coordinating the plumbing details around your space and the work you have planned.', image: 'photo-1620626011761-996317b8d101', icon: 'bath' },
  { title: 'Pipe installation', slug: 'pipe-installation', description: 'New connections and replacement pipework, planned around your property.', details: 'New appliances, renovations, and ageing pipework can call for new plumbing connections. We review the route and requirements, install or replace accessible pipework, and check the finished connections. We will discuss access and any preparation needed for the property before the job is scheduled.', image: 'photo-1607472586893-edb57bdc0e39', icon: 'pipe' },
  { title: 'Plumbing inspections', slug: 'plumbing-inspections', description: 'A closer look at your plumbing, with clear next steps and no guesswork.', details: 'An inspection can help you understand a recurring issue or check visible plumbing before a renovation or property handover. We review accessible fixtures and pipework, note signs of leaks or wear, and explain practical next steps. An inspection is visual and does not replace specialist testing where concealed pipes or structural damage are involved.', image: 'photo-1621905251189-08b45d6a269e', icon: 'check' },
]

const iconPaths = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  right: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.2a2 2 0 0 1-.6 1.7L7.1 10.5a16 16 0 0 0 6.4 6.4l1.9-1.9a2 2 0 0 1 1.7-.6l3.2.5a2 2 0 0 1 1.7 2Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  whatsapp: '<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 9c.7 2 2 3.3 4 4l1-1 2 1c-.4 1.4-1.5 2-3 1.5-3-.8-5.1-3-5.7-5.4C7 7.7 7.5 7 9 7Z"/>',
  tap: '<path d="M12 22a8 8 0 0 0 8-8c0-4.5-8-13-8-13S4 9.5 4 14a8 8 0 0 0 8 8Z"/><path d="M9 14h6"/>',
  drain: '<path d="M4 4v7a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v1"/><path d="M2 4h4m12 16h4M9 4v4m6-4v4"/>',
  heat: '<path d="M12 22a7 7 0 0 0 7-7c0-3-2-5-4-7 0 3-2 4-2 4 0-5-3-8-6-10 1 5-2 8-2 13a7 7 0 0 0 7 7Z"/><path d="M12 22a3 3 0 0 0 3-3c0-1.4-1-2.4-2-3.5 0 1.5-1 2-1 2-1-2-2-3-3-4 0 2-1 3-1 5.5a4 4 0 0 0 4 3Z"/>',
  bath: '<path d="M4 12V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2m-5 4h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Zm3 8v2m10-2v2"/><path d="M9 8h4"/>',
  pipe: '<path d="M4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v2"/><path d="M2 4h4m12 16h4m-9-6v4"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
}

const icon = (name: keyof typeof iconPaths, size = 20): string => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`
const logoMark = `<svg class="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect width="48" height="48" rx="13" fill="#17344E"/><path d="M11 12h11.5a12 12 0 0 1 0 24H11V12Z" stroke="#F7F8F5" stroke-width="4" stroke-linejoin="round"/><path d="M34 18c-.8 1.3-5.5 7.1-5.5 11a5.5 5.5 0 0 0 11 0c0-3.9-4.7-9.7-5.5-11Z" fill="#7CC6FF"/><path d="M16 24h8" stroke="#7CC6FF" stroke-width="3" stroke-linecap="round"/></svg>`
const contactHref = business.phoneHref || '#contact'
const phoneLabel = business.phoneDisplay || 'Contact us'
const whatsappHref = business.whatsappNumber ? `https://wa.me/${business.whatsappNumber}` : '#contact'
const serviceImageUrl = (image: string, width: number): string => image.startsWith('http') ? image : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=85`

const root = document.querySelector<HTMLDivElement>('#root')
if (!root) throw new Error('App root was not found.')

const servicePage = window.location.pathname.match(/^\/services\/([^/]+)\/?$/)
const selectedService = servicePage && services.find((service) => service.slug === servicePage[1])
if (selectedService) {
  root.innerHTML = `<header class="site-header"><div class="container nav-wrap"><a class="brand" href="/#top">${logoMark}<span>${business.name}<small>PLUMBING SERVICES</small></span></a><a class="button button-green" href="/#contact">${icon('phone', 15)} Contact us</a></div></header><main class="service-detail"><div class="container"><a class="detail-back" href="/#services">${icon('right', 15)} All services</a><div class="detail-layout"><div class="detail-copy"><div class="eyebrow">DBEST WATER SOLUTIONS SERVICE</div><h1>${selectedService.title}</h1><p class="detail-intro">${selectedService.description}</p><p>${selectedService.details}</p><h2>How we can help</h2><ul><li>Understand the issue and inspect the accessible plumbing.</li><li>Explain the recommended work and agree on next steps.</li><li>Complete the repair or installation with care for your home.</li></ul><a class="button button-green" href="/#contact">Ask about ${selectedService.title.toLowerCase()} ${icon('right', 15)}</a></div><div class="detail-image"><img src="${serviceImageUrl(selectedService.image, 1200)}" alt="${selectedService.title} plumbing service"><span>${selectedService.title}</span></div></div></div></main><footer><div class="container footer-bottom"><span>© 2026 ${business.name}. All rights reserved.</span><a href="/#services">Back to services ↑</a></div></footer>`
} else {
root.innerHTML = `
  <header class="site-header" id="top"><div class="container nav-wrap"><a class="brand" href="#top">${logoMark}<span>${business.name}<small>PLUMBING SERVICES</small></span></a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false">${icon('menu', 22)}</button><nav class="nav-links" aria-label="Main navigation"><a href="#services">Services</a><a href="#about">About us</a><a href="#areas">Areas we serve</a><a href="#contact">Contact</a><a class="button button-green nav-cta" href="${contactHref}">${icon('phone', 15)} ${phoneLabel}</a></nav></div></header>
  <main>
    <section class="hero"><div class="container hero-layout"><div class="hero-copy"><h1>Plumbing help,<br><em>made simple.</em></h1><p>From leaking taps and blocked drains to new installations, DBEST WATER SOLUTIONS makes it easy to get careful, dependable plumbing help for your home or business.</p><div class="hero-actions"><a class="button button-green" href="#services">Explore our services ${icon('right', 16)}</a></div><div class="hero-points"><span>${icon('check', 15)} Repairs & installations</span><span>${icon('check', 15)} Clear quotes before work</span><span>${icon('pin', 15)} Serving ${business.serviceArea}</span></div></div></div></section>
    <section class="quick-trust"><div class="container quick-trust-inner"><div>${icon('shield', 20)}<span><b>Careful workmanship</b><small>Thoughtful from start to finish</small></span></div><div>${icon('check', 20)}<span><b>Upfront communication</b><small>Know what to expect</small></span></div><div>${icon('pin', 20)}<span><b>Local service</b><small>${business.serviceArea}</small></span></div></div></section>
    <section class="services section-pad" id="services"><div class="container"><div class="section-head"><div><div class="eyebrow">HOW CAN WE HELP?</div><h2>Good plumbing makes<br>a house feel <em>like home.</em></h2></div><p>Tell us what needs attention. We’ll help you find the right next step.</p></div><div class="service-carousel" aria-label="Our plumbing services" tabindex="0"><div class="service-track">${services.map((service, index) => `<a href="/services/${service.slug}" class="service-card" style="--order:${index}"><span class="service-number">0${index + 1}</span><img class="service-image" src="${serviceImageUrl(service.image, 700)}" alt="" loading="lazy"><span class="service-icon">${icon(service.icon, 25)}</span><h3>${service.title}</h3><p>${service.description}</p><span class="service-link">Learn about this service ${icon('right', 14)}</span></a>`).join('')}</div></div></div></section>
    <section class="about-section" id="about"><div class="container about-layout"><div class="about-image"><img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=85" alt="Plumbing pipework being carefully repaired"><span class="image-caption">A little care goes a long way.</span></div><div class="about-copy"><div class="eyebrow">A BETTER KIND OF PLUMBING SERVICE</div><h2>We believe good service should feel <em>simple.</em></h2><p>Plumbing work can be stressful. We make the process easier with clear communication, practical advice and respect for your space.</p><div class="promise-list"><div><span>${icon('check', 14)}</span><p><b>We listen first</b><small>We take time to understand what is happening.</small></p></div><div><span>${icon('check', 14)}</span><p><b>We explain the options</b><small>Clear recommendations before work begins.</small></p></div><div><span>${icon('check', 14)}</span><p><b>We leave things tidy</b><small>Your home deserves care at every step.</small></p></div></div><a class="button button-dark" href="#contact">Talk to our team ${icon('right', 15)}</a></div></div></section>
    <section class="service-area" id="areas"><div class="container area-layout"><div><div class="eyebrow">CLOSE TO HOME</div><h2>Local help across<br><em>${business.serviceArea}.</em></h2><p>Tell us where you’re based and what you need. We’ll confirm if we can help in your area.</p><a class="area-link" href="#contact">Check availability in your area ${icon('right', 15)}</a></div><div class="area-card"><span class="area-pin">${icon('pin', 23)}</span><b>Service coverage</b><p>${business.serviceArea}</p><small>Coverage can vary by service and availability.</small><div class="area-coverage"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div></section>
    <section class="process-section section-pad" id="process"><div class="container"><div class="section-head"><div><div class="eyebrow">A CLEAR, SIMPLE PROCESS</div><h2>From first message<br>to <em>sorted.</em></h2></div><p>Know what to expect at each step, from explaining the issue to agreeing on the work.</p></div><div class="process-grid"><article class="process-card"><span class="process-number">01</span><span class="process-icon">${icon('phone', 21)}</span><h3>Tell us what’s happening</h3><p>Call or send a message with the issue, your area and when you need help.</p></article><article class="process-card"><span class="process-number">02</span><span class="process-icon">${icon('check', 21)}</span><h3>Discuss the next step</h3><p>We’ll understand the problem, explain the options and talk through the quote before work starts.</p></article><article class="process-card"><span class="process-number">03</span><span class="process-icon">${icon('shield', 21)}</span><h3>Get the work done</h3><p>Once you’re happy to proceed, we’ll carry out the agreed repair or installation with care.</p></article></div></div></section>
    <section class="contact-cta-strip"><div class="container contact-cta-inner"><div><span class="eyebrow">NEED A HAND?</span><h2>Let’s talk through your plumbing issue.</h2><p>Tell us what’s going on and we’ll help you find the right next step.</p></div><div class="contact-cta-actions"><a class="button button-green" href="${contactHref}">${icon('phone', 15)} Call ${phoneLabel}</a><a class="contact-cta-whatsapp" href="${whatsappHref}" target="_blank" rel="noreferrer">${icon('whatsapp', 16)} WhatsApp us</a></div></div></section>
    <section class="contact-section section-pad" id="contact"><div class="container contact-layout"><div class="contact-copy"><div class="eyebrow">LET&#39;S GET IT SORTED</div><h2>Plumbing sorted.<br><em>Peace of mind.</em></h2><p>Tell us what&#39;s happening. We&#39;ll help you find the next step and a time that works for you.</p><a class="contact-main-link" href="${contactHref}"><span>CALL OUR TEAM</span><strong>${phoneLabel}</strong>${icon('arrow', 17)}</a><a class="contact-message-link" href="${whatsappHref}" target="_blank" rel="noreferrer">${icon('whatsapp', 17)} WhatsApp</a><div class="contact-area-note">${icon('pin', 16)}<span><b>Serving your neighbourhood</b><small>Homes and businesses across ${business.serviceArea}</small></span></div></div><div class="quote-card"><h3>Request a callback</h3><p>Share a few details and our team will be in touch.</p><form id="quote-form"><label>Your name<input name="name" placeholder="Your name" required></label><label>Best number to reach you<input name="phone" type="tel" placeholder="080 0000 0000" required></label><label>What do you need help with?<select name="service" required><option value="">Choose a service</option>${services.map((service) => `<option>${service.title}</option>`).join('')}<option>Something else</option></select></label><label>Your area (optional)<input name="area" placeholder="e.g. Ikeja"></label><label>A little more detail (optional)<textarea name="details" rows="3" placeholder="Tell us what&#39;s happening..."></textarea></label><button class="button button-green submit-quote" type="submit">Request a callback ${icon('right', 15)}</button><small class="form-disclaimer">Your request opens a WhatsApp message when our number is configured.</small></form></div></div></section>
    <section class="faq-section"><div class="container faq-layout"><div><div class="eyebrow">GOOD TO KNOW</div><h2>Before you<br>get in <em>touch.</em></h2></div><div class="faq-list"><details open><summary>What should I include when I contact you?</summary><p>Tell us what is happening, where you are, and when you need help. A photo can also be useful when you message us.</p></details><details><summary>Can you help with urgent plumbing issues?</summary><p>Contact us by phone or WhatsApp and tell us what has happened. We’ll confirm our availability and the best next step.</p></details><details><summary>Will I know the cost before work starts?</summary><p>We’ll discuss the work and quote with you before any agreed job begins.</p></details></div></div></section>
  </main>
  <footer><div class="container footer-main"><a class="brand brand-footer" href="#top">${logoMark}<span>${business.name}<small>PLUMBING SERVICES</small></span></a><p>Friendly plumbing help, close to home.</p><nav><a href="#services">Services</a><a href="#about">About</a><a href="#areas">Service area</a><a href="#contact">Contact</a></nav><a href="${contactHref}" class="footer-phone">${icon('phone', 15)} ${phoneLabel}</a></div><div class="container footer-bottom"><span>© 2026 ${business.name}. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
  <div class="mobile-contact-bar"><a href="${contactHref}">${icon('phone', 17)} Call us</a><a href="${whatsappHref}" target="_blank" rel="noreferrer">${icon('whatsapp', 18)} WhatsApp</a></div><div class="toast" id="toast" role="status" aria-live="polite"></div>
`
}

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle')
const nav = document.querySelector<HTMLElement>('.nav-links')
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true'
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  menuButton.innerHTML = icon(open ? 'close' : 'menu', 22)
  nav?.classList.toggle('open', open)
})
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open')
  menuButton?.setAttribute('aria-expanded', 'false')
  if (menuButton) menuButton.innerHTML = icon('menu', 22)
}))

document.querySelectorAll<HTMLAnchorElement>('.service-link').forEach((link) => link.addEventListener('click', () => {
  const select = document.querySelector<HTMLSelectElement>('#quote-form select[name="service"]')
  if (select) select.value = link.dataset.service ?? ''
}))

function showToast(message: string): void {
  const toast = document.querySelector<HTMLDivElement>('#toast')
  if (!toast) return
  toast.textContent = message
  toast.classList.add('visible')
  window.setTimeout(() => toast.classList.remove('visible'), 4200)
}

document.querySelector<HTMLFormElement>('#quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.currentTarget as HTMLFormElement
  const values = new FormData(form)
  const name = String(values.get('name') ?? '')
  const message = `Hello ${business.name}, my name is ${name}. I need help with ${values.get('service')} in ${values.get('area')}. My phone number is ${values.get('phone')}. Details: ${values.get('details')}`
  if (business.whatsappNumber) {
    window.open(`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    form.reset()
  } else {
    showToast('Quote form is ready. Add DBEST WATER SOLUTIONS’ WhatsApp number to send requests directly.')
  }
})
