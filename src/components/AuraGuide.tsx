import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, X } from 'lucide-react';
import { fragrances, money, type ScentId } from '../data';
import { PRICES } from '../wearables';
import '../aura-guide.css';

type GuideLink = { label: string; to: string };
type Reply = { question: string; answer: string; links?: GuideLink[]; scentChoices?: boolean };
const topics: (Reply & { id: string })[] = [
  { id: 'scent', question: 'Which fragrance feels like me?', answer: 'Start with a feeling. Choose the presence you are drawn to, and I’ll introduce its matching fragrance.', scentChoices: true },
  { id: 'collection', question: 'Meet the four fragrances', answer: fragrances.map(s => `${s.name} — ${s.character}`).join('\n\n'), links: [{ label: 'Explore the collection', to: '/collection' }] },
  { id: 'wear', question: 'What is AuraWear?', answer: 'AuraWear is our proposed fragrance bracelet: a jewellery band with a replaceable, filled AuraPod. The pod is designed to carry your selected scent. The release mechanism, wear time and materials still require physical prototyping.', links: [{ label: 'Discover AuraWear', to: '/aurawear' }] },
  { id: 'customise', question: 'Can I make it personal?', answer: 'Yes. Choose a bracelet style, metal finish and one of our four fragrances. Add up to three charms, an initial, a dedication or gift presentation. You can also start with a curated design and make it yours.', links: [{ label: 'Open the Atelier', to: '/atelier' }] },
  { id: 'prices', question: 'What are the prices?', answer: `Our indicative concept prices:\n\nPerfume, 30 ml — ${money(PRICES.bottle)}\nBracelet — ${money(PRICES.bracelet)}\nBracelet starter set with a filled pod — ${money(PRICES.starter)}\nAuraPod refill — ${money(PRICES.refill)}\nDiscovery collection — ${money(PRICES.discovery)}\n\nCharms and gift wrap are additional. These prices are proposed for the brand concept.`, links: [{ label: 'View the collection', to: '/collection' }] },
  { id: 'gift', question: 'Help me choose a gift', answer: 'For someone discovering their scent, begin with the four-fragrance discovery collection. For a personal gesture, choose an AuraWear starter set, add a meaningful charm and write a dedication.', links: [{ label: 'Explore gifting', to: '/gifting' }, { label: 'Create a personal bracelet', to: '/atelier' }] },
  { id: 'language', question: 'How can I see a scent?', answer: 'Our Aura Language translates each fragrance’s character into colour, form, texture, motion and typography. Compare Mitti’s warm mineral ripples with Mogra’s airy, luminous loops, then explore how the same identity appears across the collection.', links: [{ label: 'See the Aura Language', to: '/aura-language' }] },
  { id: 'orders', question: 'Can I order today?', answer: 'This is a Brandathon brand concept. You can explore products, create a bracelet and try the bag and checkout. No payment is taken and no physical order is placed. Launch, shipping and return details will be confirmed before commercial sales.' },
];
const feelings: { id: ScentId; label: string }[] = [
  { id: 'kasturi', label: 'Magnetic & intimate' }, { id: 'mitti', label: 'Grounded & nostalgic' },
  { id: 'sandalwood', label: 'Warm & composed' }, { id: 'mogra', label: 'Airy & floral' },
];

export function AuraGuide() {
  const [open, setOpen] = useState(false);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [hidden, setHidden] = useState(document.hidden);
  const launcher = useRef<HTMLButtonElement>(null);
  const closer = useRef<HTMLButtonElement>(null);
  const thread = useRef<HTMLDivElement>(null);
  const close = () => { setOpen(false); launcher.current?.focus(); };

  useEffect(() => {
    const visibility = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', visibility);
    return () => document.removeEventListener('visibilitychange', visibility);
  }, []);
  useEffect(() => {
    if (!open) return;
    closer.current?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); launcher.current?.focus(); }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  useEffect(() => {
    if (open && thread.current) thread.current.scrollTop = thread.current.scrollHeight;
  }, [replies, open]);

  const ask = (reply: Reply) => setReplies(previous => [...previous.slice(-5), reply]);
  const chooseScent = (id: ScentId, label: string) => {
    const scent = fragrances.find(s => s.id === id)!;
    ask({ question: label, answer: `${scent.name} could be your starting point. ${scent.character} ${scent.description}\n\nThis suggestion follows your chosen feeling. A discovery sample can help you decide through smell.`, links: [{ label: `Meet ${scent.name}`, to: `/fragrance/${id}` }, { label: 'Try the full aura journey', to: '/find-your-aura' }] });
  };

  return <aside className={`aura-guide ${open ? 'is-open' : ''} ${hidden ? 'is-paused' : ''}`} aria-label="CENTAURA fragrance guide">
    {open && <section id="aura-guide-panel" className="aura-guide-panel" role="dialog" aria-labelledby="aura-guide-title">
      <header className="aura-guide-heading">
        <img src="/images/aura-guide.jpg" alt="" width="64" height="64" />
        <div><span className="aura-guide-kicker">A LITTLE HELP FROM THE HOUSE</span><h2 id="aura-guide-title">Your Aura Guide</h2><p>A feeling. A fragrance. A little guidance.</p></div>
        <button ref={closer} type="button" className="aura-guide-close" aria-label="Close Aura Guide" onClick={close}><X size={18} /></button>
      </header>
      <div ref={thread} className="aura-guide-thread" role="log" aria-live="polite" aria-relevant="additions" aria-label="Guide conversation">
        <div className="aura-guide-answer aura-guide-welcome">Hello, I’m your Aura Guide. Let’s find something that feels like you. Choose a question below.</div>
        {replies.map((reply, index) => <div className="aura-guide-exchange" key={`${index}-${reply.question}`}>
          <p className="aura-guide-question">{reply.question}</p>
          <div className="aura-guide-answer"><p>{reply.answer}</p>
            {reply.scentChoices && <div className="aura-guide-feelings">{feelings.map(feeling => <button type="button" key={feeling.id} onClick={() => chooseScent(feeling.id, feeling.label)}>{feeling.label}<ChevronRight size={14} /></button>)}</div>}
            {reply.links && <div className="aura-guide-links">{reply.links.map(link => <Link key={link.to} to={link.to} onClick={close}>{link.label}<ArrowUpRight size={14} /></Link>)}</div>}
          </div>
        </div>)}
      </div>
      <div className="aura-guide-topics" aria-label="Questions you can ask"><span className="aura-guide-kicker">WHAT WOULD YOU LIKE TO KNOW?</span><div>{topics.map(topic => <button type="button" key={topic.id} onClick={() => ask(topic)}>{topic.question}</button>)}</div></div>
    </section>}
    <button ref={launcher} type="button" className="aura-guide-launcher" aria-label={open ? 'Close Aura Guide' : 'Open Aura Guide — fragrance questions'} aria-expanded={open} aria-controls="aura-guide-panel" onClick={() => open ? close() : setOpen(true)}>
      <span className="aura-guide-mascot"><img src="/images/aura-guide.jpg" alt="" width="88" height="88" /></span>
      <span className="aura-guide-label">Aura Guide</span>
    </button>
  </aside>;
}
