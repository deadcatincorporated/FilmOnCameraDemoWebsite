import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Arrow, ButtonLink, Modal, PageHero, Play, Reveal } from "./components";
import { sessions, useApp } from "./context";
import gregory from "../assets/uploads/gregory-irwin.jpg";
import eliza from "../assets/uploads/eliza.jpg";
import megan from "../assets/uploads/megan-jennings.jpg";
import memberStory from "../assets/uploads/foc-studio-still.jpg";
import emblem from "../assets/uploads/charter-emblem.png";

const heroPhoto =
  "https://images.unsplash.com/photo-1691491918178-8a2e68b44919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=2000";
const crewPhoto =
  "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600";
const cameraPhoto =
  "https://images.unsplash.com/photo-1611652969195-63733071b45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400";

const courses = [
  {
    number: "01",
    title: "Freelance Foundations",
    text: "Build a career that lasts. Contracts, rates, cash flow, taxes and the practical systems behind great creative work.",
    meta: "6 weeks · Online",
    tone: "acid",
  },
  {
    number: "02",
    title: "Lead the Set",
    text: "Tools for clear communication, confident leadership and healthy collaboration under pressure.",
    meta: "4 weeks · Online",
    tone: "lilac",
  },
  {
    number: "03",
    title: "Pitch Your Vision",
    text: "Turn an idea into a compelling treatment, build your voice and present your work with conviction.",
    meta: "3 weeks · Online",
    tone: "orange",
  },
];

export function Home() {
  const [slide, setSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const slides = [
    {
      label: "Founder",
      title: "Gregory Irwin",
      copy: "Founder of Focus on Camera, bringing 45+ years of film experience into every conversation.",
      image: gregory,
      imageClass: "portrait-slide",
      link: "IMDb credits",
      href: "https://www.imdb.com/name/nm0410389/",
      external: true,
    },
    {
      label: "About FOC",
      title: "The career beyond the craft",
      copy: "A learning community for film students, emerging crew and working freelancers.",
      image: crewPhoto,
      link: "More information",
      href: "/about",
    },
    {
      label: "Overview",
      title: "Inside FOC",
      copy: "An original FOC Studio still. Video overview placeholder.",
      image: memberStory,
      link: "Play overview",
      href: "#video",
    },
  ];
  const current = slides[slide];

  return (
    <>
      <section className="home-hero">
        <img className="hero-background" src={heroPhoto} alt="Film crew collaborating on set" />
        <div className="hero-overlay" />
        <div className="film-grain" />
        <div className="page-width home-hero-inner">
          <div className="hero-copy">
            <p className="section-kicker acid-text">Learn the work behind the work</p>
            <h1>
              Build a career
              <br />
              that <span>cuts.</span>
            </h1>
            <p>
              FOC is an international learning community for freelance film and entertainment
              professionals. Build on your training with the business skills you’ll use between jobs
              and on set.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/membership">Become a member</ButtonLink>
              <ButtonLink to="/about" tone="outline">
                More information
              </ButtonLink>
            </div>
          </div>
          <div className="hero-carousel" aria-live="polite">
            <img
              key={current.image}
              className={`carousel-image ${current.imageClass || ""}`}
              src={current.image}
              alt={
                slide === 0
                  ? "Portrait of Focus on Camera founder Gregory Irwin"
                  : slide === 1
                    ? "Film crew working together on a soundstage"
                    : "Focus on Camera Studio video overview still"
              }
            />
            <div className="carousel-shade" />
            {slide === 2 && (
              <button
                className="play-button"
                onClick={() => setVideoOpen(true)}
                aria-label="Play FOC overview"
              >
                <Play />
              </button>
            )}
            <div className="carousel-copy">
              <span>{current.label}</span>
              <h2>{current.title}</h2>
              <p>{current.copy}</p>
              {current.external ? (
                <a href={current.href} target="_blank" rel="noreferrer">
                  {current.link} <Arrow diagonal />
                </a>
              ) : current.href === "#video" ? (
                <button onClick={() => setVideoOpen(true)}>
                  {current.link} <Arrow />
                </button>
              ) : (
                <Link to={current.href}>
                  {current.link} <Arrow />
                </Link>
              )}
            </div>
            <div className="carousel-dots" aria-label="Hero carousel slides">
              {slides.map((item, index) => (
                <button
                  key={item.label}
                  className={index === slide ? "active" : ""}
                  onClick={() => setSlide(index)}
                  aria-label={`Show slide ${index + 1}: ${item.label}`}
                  aria-current={index === slide}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>Business skills for creative people</span>
          <i />
          <span>Learn anywhere</span>
          <i />
          <span>Work better together</span>
          <i />
          <span>Business skills for creative people</span>
          <i />
          <span>Learn anywhere</span>
          <i />
          <span>Work better together</span>
        </div>
      </div>

      <Reveal>
        <section className="page-width why-grid">
          <div>
            <p className="section-kicker">Why FOC</p>
            <img src={cameraPhoto} alt="Camera operator working behind a cinema camera" />
          </div>
          <div>
            <h2 className="display-title">
              Film school taught you the craft. <em>We teach you the career.</em>
            </h2>
            <div className="stats-grid">
              <div>
                <strong>Practical</strong>
                <p>Business skills grounded in the realities of freelance film work.</p>
              </div>
              <div>
                <strong>Shared</strong>
                <p>Experience and perspective from people who understand life on set.</p>
              </div>
              <div>
                <strong>Useful</strong>
                <p>Conversations about rates, relationships and building a sustainable career.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="dark-section">
        <div className="page-width">
          <Reveal className="section-heading">
            <div>
              <p className="section-kicker acid-text">The programme</p>
              <h2 className="display-title">Skills for the whole picture.</h2>
            </div>
            <p>
              Short, practical courses made around the reality of freelance life. Learn live, apply
              immediately, stay connected.
            </p>
          </Reveal>
          <div className="course-grid">
            {courses.map((course) => (
              <article className={`course-card ${course.tone}`} key={course.number}>
                <div>
                  <span>Course / {course.number}</span>
                  <span className="round-icon">
                    <Arrow diagonal />
                  </span>
                </div>
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                  <small>{course.meta}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="community-feature">
          <img src={cameraPhoto} alt="Filmmaker operating a professional camera" />
          <div>
            <p className="section-kicker acid-text">Made for each other</p>
            <blockquote>
              “It’s the first place I’ve found people who understand both the creative work and the
              life around it.”
            </blockquote>
            <p className="quote-caption">FOC community member</p>
            <ButtonLink to="/member/community" tone="light">
              Enter Community
            </ButtonLink>
          </div>
        </section>
      </Reveal>

      <section className="page-width pathways">
        <p className="section-kicker">Inside Focus on Camera</p>
        <div className="pathway-grid">
          {[
            ["Studio", "Watch practical conversations and Irwin Insights.", "/member/studio"],
            ["Live", "Join sessions about the realities of freelance work.", "/member/live"],
            ["Charter 150", "Preview founding-member access and benefits.", "/charter-150"],
          ].map(([title, copy, to], index) => (
            <Link to={to} className="pathway-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow diagonal />
            </Link>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div className="page-width">
          <p className="section-kicker">The next call is yours</p>
          <h2>Make your working life part of your training.</h2>
          <ButtonLink to="/membership" tone="light">
            Join the community
          </ButtonLink>
        </div>
      </section>

      <Modal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        label="FOC overview video placeholder"
      >
        <img className="modal-media" src={memberStory} alt="FOC Studio overview still" />
        <p className="section-kicker">Video placeholder</p>
        <h2>Inside Focus on Camera</h2>
        <p>
          This prototype uses an original FOC Studio still in place of unavailable overview footage.
        </p>
      </Modal>
    </>
  );
}

export function About() {
  const pillars = [
    ["Community", "Candid peer discussion about the work around the work."],
    ["Studio", "Practical films, conversations and founder-led insights."],
    ["Live", "Shared rooms for rates, conditions and career questions."],
    ["Academy", "Structured learning designed around freelance realities."],
    ["Partners", "A future directory built only on confirmed relationships."],
  ];
  return (
    <>
      <PageHero
        kicker="About Focus on Camera"
        title="The career is a craft,"
        accent="too."
        intro="FOC helps film students, emerging crew and working freelancers build the business confidence that training often leaves out."
      />
      <section className="page-width audience-grid">
        {[
          [
            "Film students",
            "Prepare for a first set job, read the room and understand what the day asks of you.",
          ],
          [
            "Emerging crew",
            "Discuss rates clearly, ask better questions and build a professional reputation.",
          ],
          [
            "Working freelancers",
            "Strengthen industry relationships and share hard-won knowledge across departments.",
          ],
        ].map(([title, copy], index) => (
          <Reveal className="audience-card" key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </Reveal>
        ))}
      </section>
      <section className="founder-section">
        <div className="page-width founder-grid">
          <div className="founder-portrait">
            <img src={gregory} alt="Gregory Irwin, founder of Focus on Camera" />
            <span>Founder / 45+ years in film</span>
          </div>
          <div>
            <p className="section-kicker acid-text">A note from the founder</p>
            <h2 className="display-title">Experience should travel.</h2>
            <p className="large-copy">
              Gregory Irwin founded Focus on Camera to make the conversations that shape a working
              life more accessible: how to show up, how to keep learning, and how to sustain a
              career between jobs and on set.
            </p>
            <a
              className="text-link"
              href="https://www.imdb.com/name/nm0410389/"
              target="_blank"
              rel="noreferrer"
            >
              View Gregory’s IMDb credits <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <section className="page-width pillars-section">
        <p className="section-kicker">Five connected pillars</p>
        <h2 className="display-title">One working community.</h2>
        <div className="pillars-list">
          {pillars.map(([name, copy], index) => (
            <div key={name}>
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function Membership() {
  const navigate = useNavigate();
  const { setAccess } = useApp();
  const choosePublic = () => {
    setAccess("Public");
    navigate("/member");
  };
  return (
    <>
      <PageHero
        kicker="Membership"
        title="Choose how you"
        accent="step inside."
        intro="Start with the public community or preview the fuller founding-member experience. No invented prices and no payment details."
      />
      <section className="page-width membership-grid">
        <article className="membership-card public-card">
          <p className="section-kicker">Public</p>
          <h2>Open access</h2>
          <p>For anyone building a more informed working life in film and entertainment.</p>
          <ul>
            <li>Join Community discussions</li>
            <li>Watch selected Studio previews</li>
            <li>Save Public Live sessions to My Calendar</li>
          </ul>
          <button className="button button-outline-dark" onClick={choosePublic}>
            Continue with Public <Arrow />
          </button>
        </article>
        <article className="membership-card charter-card">
          <img src={emblem} alt="Gold FOC Charter 150 founding member emblem" />
          <p className="section-kicker">Charter 150</p>
          <h2>Founding access</h2>
          <p>A prominent preview of the deeper FOC experience for founding members.</p>
          <ul>
            <li>Founding member badge</li>
            <li>Charter-only Studio content</li>
            <li>Founding member roundtables</li>
            <li>Everything included in Public</li>
          </ul>
          <ButtonLink to="/charter-150">Explore Charter 150</ButtonLink>
        </article>
      </section>
    </>
  );
}

export function Charter() {
  return (
    <>
      <section className="charter-hero">
        <div className="film-grain" />
        <div className="page-width charter-hero-grid">
          <div>
            <p className="section-kicker">Charter 150</p>
            <h1>The founding frame.</h1>
            <p>
              Preview a closer seat inside Focus on Camera: more Studio access, a visible founding
              member badge and roundtables shaped around the realities of freelance work.
            </p>
            <ButtonLink to="/checkout" tone="light">
              Preview Charter access
            </ButtonLink>
          </div>
          <img src={emblem} alt="Gold FOC Charter 150 founding member emblem" />
        </div>
      </section>
      <section className="page-width charter-benefits">
        {[
          [
            "01",
            "Founding member badge",
            "A clear mark of early participation across the member area.",
          ],
          [
            "02",
            "Charter Studio",
            "Open the full prototype rows, including titles marked Charter 150.",
          ],
          [
            "03",
            "Founding roundtables",
            "Smaller Live conversations for questions that benefit from the room.",
          ],
        ].map(([num, title, copy]) => (
          <article key={num}>
            <span>{num}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export function Checkout() {
  const navigate = useNavigate();
  const { setAccess } = useApp();
  const preview = () => {
    setAccess("Charter 150");
    navigate("/member");
  };
  return (
    <>
      <PageHero
        kicker="Demo checkout"
        title="Review your"
        accent="preview."
        intro="This is a simulated access step. There are no payment fields, charges or invented prices."
      />
      <section className="page-width checkout-grid">
        <div className="checkout-note">
          <p className="section-kicker">Prototype access</p>
          <h2>No payment required.</h2>
          <p>
            Continue to explore how Charter 150 content, member badges and founding roundtables
            appear inside the member experience.
          </p>
        </div>
        <aside className="order-summary">
          <img src={emblem} alt="" />
          <span>Order summary</span>
          <h2>Charter 150 preview</h2>
          <ul>
            <li>
              Founding member badge <span>Included</span>
            </li>
            <li>
              Charter Studio titles <span>Included</span>
            </li>
            <li>
              Founding roundtables <span>Included</span>
            </li>
          </ul>
          <button className="button button-acid" onClick={preview}>
            Preview Charter access <Arrow />
          </button>
          <small>Simulated access only. No payment is processed.</small>
        </aside>
      </section>
    </>
  );
}

export function MemberOverview() {
  const links = [
    ["Studio", "Watch Focus on Chats", "/member/studio", "acid"],
    ["Community", "Join the conversation", "/member/community", "blue"],
    ["Live", "See the next room", "/member/live", "orange"],
    ["My Calendar", "Keep the dates", "/member/calendar", "lilac"],
  ];
  return (
    <main className="member-page">
      <section className="page-width member-welcome">
        <p className="section-kicker">Overview</p>
        <h1>
          Keep the <em>conversation</em> moving.
        </h1>
        <div className="focus-feature">
          <div>
            <span>Featured in Studio</span>
            <h2>Focus on Chats</h2>
            <p>Working professionals talk honestly about decisions, detours and life on set.</p>
            <ButtonLink to="/member/studio">Watch in Studio</ButtonLink>
          </div>
          <img src={memberStory} alt="Focus on Chats guest speaking from their home studio" />
        </div>
        <div className="overview-links">
          {links.map(([title, copy, to, tone]) => (
            <Link to={to} className={`overview-card ${tone}`} key={title}>
              <span>{title}</span>
              <h3>{copy}</h3>
              <Arrow diagonal />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

type FeedPost = {
  id: string;
  author: string;
  tag: string;
  age: string;
  title: string;
  body: string;
  votes: number;
  comments: number;
};

const feedPosts: FeedPost[] = [
  {
    id: "first-set",
    author: "Eliza",
    tag: "First set",
    age: "2h",
    title: "What do you wish you knew before your first set job?",
    body: "I’m collecting the practical things no course seems to tell you. What would have made that first call time easier?",
    votes: 84,
    comments: 27,
  },
  {
    id: "rates",
    author: "Camera dept.",
    tag: "Rates",
    age: "5h",
    title: "How do you prepare for a rate conversation?",
    body: "Looking for language that is direct, professional and leaves room for a real discussion.",
    votes: 61,
    comments: 18,
  },
  {
    id: "relationships",
    author: "FOC member",
    tag: "Career",
    age: "1d",
    title: "Keeping in touch without making every message an ask",
    body: "What habits have helped you build genuine working relationships between jobs?",
    votes: 46,
    comments: 12,
  },
];

function VoteControl({ initial }: { initial: number }) {
  const [vote, setVote] = useState(0);
  return (
    <div className="vote-control" aria-label="Post voting">
      <button
        className={vote === 1 ? "active" : ""}
        onClick={() => setVote(vote === 1 ? 0 : 1)}
        aria-label="Upvote"
      >
        ▲
      </button>
      <strong>{initial + vote}</strong>
      <button
        className={vote === -1 ? "active" : ""}
        onClick={() => setVote(vote === -1 ? 0 : -1)}
        aria-label="Downvote"
      >
        ▼
      </button>
    </div>
  );
}

function PostCard({ post }: { post: FeedPost }) {
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);
  return (
    <article className="post-card">
      <VoteControl initial={post.votes} />
      <div className="post-content">
        <div className="post-meta">
          {post.id === "first-set" && <img src={eliza} alt="Eliza" />}
          <span>{post.author}</span>
          <span>· {post.age}</span>
          <b>{post.tag}</b>
        </div>
        <Link to={post.id === "first-set" ? "/member/community/first-set" : "/member/community"}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.body}</p>
        <div className="post-actions">
          <Link to={post.id === "first-set" ? "/member/community/first-set" : "/member/community"}>
            {post.comments} comments
          </Link>
          <button onClick={() => setShared(true)}>{shared ? "Link copied" : "Share"}</button>
          <button onClick={() => setSaved((value) => !value)}>{saved ? "Saved" : "Save"}</button>
        </div>
      </div>
    </article>
  );
}

export function Community() {
  const [sort, setSort] = useState("Hot");
  const [filter, setFilter] = useState("All topics");
  const [composer, setComposer] = useState(false);
  const filtered = useMemo(() => {
    const posts = feedPosts.filter((post) => filter === "All topics" || post.tag === filter);
    if (sort === "New") return [...posts].reverse();
    if (sort === "Top") return [...posts].sort((a, b) => b.votes - a.votes);
    return posts;
  }, [filter, sort]);
  return (
    <main className="member-page">
      <section className="page-width community-page">
        <div className="member-title-row">
          <div>
            <p className="section-kicker">Community</p>
            <h1>Ask the room.</h1>
          </div>
          <button className="button button-acid" onClick={() => setComposer((value) => !value)}>
            New post <Arrow />
          </button>
        </div>
        {composer && (
          <form className="new-post" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="post-title">Start a discussion</label>
            <input id="post-title" placeholder="What do you want to ask?" />
            <textarea placeholder="Add context for the community…" />
            <button className="button button-blue" onClick={() => setComposer(false)}>
              Post demo
            </button>
          </form>
        )}
        <div className="feed-toolbar">
          <div>
            {["Hot", "New", "Top"].map((item) => (
              <button
                className={sort === item ? "active" : ""}
                onClick={() => setSort(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <label>
            <span>Topic</span>
            <select value={filter} onChange={(event) => setFilter(event.target.value)}>
              {["All topics", "First set", "Rates", "Career"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="community-layout">
          <div className="post-feed">
            {filtered.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
          <aside className="community-aside">
            <p className="section-kicker">In this room</p>
            <h2>Useful, specific, generous.</h2>
            <p>Share experience without pretending there is only one way to build a career.</p>
            <Link to="/member/live">
              Continue in Live <Arrow />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Reply({
  name,
  children,
  nested = false,
  avatar,
}: {
  name: string;
  children: React.ReactNode;
  nested?: boolean;
  avatar?: string;
}) {
  const [replying, setReplying] = useState(false);
  return (
    <div className={`reply ${nested ? "nested" : ""}`}>
      <div className="reply-head">
        {avatar && <img src={avatar} alt="" />}
        <strong>{name}</strong>
        <span>· 1h</span>
      </div>
      <p>{children}</p>
      <div className="reply-actions">
        <VoteControl initial={nested ? 12 : 31} />
        <button onClick={() => setReplying((value) => !value)}>Reply</button>
      </div>
      {replying && (
        <div className="inline-reply">
          <textarea aria-label={`Reply to ${name}`} placeholder={`Reply to ${name}…`} />
          <button className="button button-acid" onClick={() => setReplying(false)}>
            Add reply
          </button>
        </div>
      )}
    </div>
  );
}

export function Thread() {
  const [comment, setComment] = useState("");
  const [posted, setPosted] = useState(false);
  return (
    <main className="member-page">
      <section className="page-width thread-page">
        <Link className="back-link" to="/member/community">
          ← Back to Community
        </Link>
        <PostCard post={feedPosts[0]} />
        <div className="comment-composer">
          <img src={eliza} alt="Eliza" />
          <div>
            <label htmlFor="comment">Add to the conversation</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="Share something useful…"
            />
            <button
              className="button button-blue"
              disabled={!comment.trim()}
              onClick={() => {
                setPosted(true);
                setComment("");
              }}
            >
              Add comment
            </button>
            {posted && <small>Your demo reply was added.</small>}
          </div>
        </div>
        <div className="reply-list">
          <Reply name="Mara, production">
            Learn the names of the people around you, carry a notebook and never be afraid to ask
            where you can safely stand.
          </Reply>
          <Reply name="Eliza" nested avatar={eliza}>
            Yes — and ask which walkie channel your department uses before the day gets busy.
          </Reply>
          <Reply name="Tomas, camera">
            Being early is not about impressing anyone. It gives you time to understand the shape of
            the day before the pressure arrives.
          </Reply>
        </div>
      </section>
    </main>
  );
}

type Episode = { title: string; access: "Public" | "Charter 150"; image?: string; color: string };
const studioRows: { title: string; episodes: Episode[] }[] = [
  {
    title: "20 Things I Wish I Knew at 20",
    episodes: [
      { title: "Your First Call Time", access: "Public", image: memberStory, color: "blue" },
      { title: "Read the Room", access: "Charter 150", color: "acid" },
      { title: "The Long Game", access: "Charter 150", color: "orange" },
    ],
  },
  {
    title: "Focus on Chats",
    episodes: [
      { title: "Between the Jobs", access: "Public", image: memberStory, color: "orange" },
      { title: "Working Relationships", access: "Charter 150", color: "lilac" },
      { title: "A Better Rate Talk", access: "Charter 150", color: "blue" },
    ],
  },
  {
    title: "Irwin Insights",
    episodes: [
      { title: "Show Up Ready", access: "Public", image: gregory, color: "acid" },
      { title: "Experience Travels", access: "Charter 150", color: "blue" },
      { title: "What the Set Remembers", access: "Charter 150", color: "orange" },
    ],
  },
];

export function Studio() {
  const { access } = useApp();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const locked = episode?.access === "Charter 150" && access === "Public";
  return (
    <main className="member-page studio-page">
      <section className="page-width">
        <div className="member-title-row">
          <div>
            <p className="section-kicker">Studio</p>
            <h1>Watch the work behind the work.</h1>
          </div>
          <p className="member-subcopy">
            Browse horizontally. Open any title for its episode preview.
          </p>
        </div>
        {studioRows.map((row) => (
          <section className="studio-row" key={row.title}>
            <div className="row-title">
              <h2>{row.title}</h2>
              <span>Swipe / scroll</span>
            </div>
            <div className="episode-scroller">
              {row.episodes.map((item) => (
                <button
                  className={`episode-card ${item.color}`}
                  onClick={() => setEpisode(item)}
                  key={item.title}
                >
                  {item.image && <img src={item.image} alt="" />}
                  <div className="episode-overlay" />
                  <span>{item.access === "Public" ? "Public preview" : "Charter 150"}</span>
                  <h3>{item.title}</h3>
                  <span className="episode-play">
                    <Play />
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </section>
      <Modal open={!!episode} onClose={() => setEpisode(null)} label="Episode preview">
        {episode?.image ? (
          <img className="modal-media" src={episode.image} alt={`${episode.title} episode still`} />
        ) : (
          <div className={`type-poster ${episode?.color}`}>{episode?.title}</div>
        )}
        <p className="section-kicker">{episode?.access}</p>
        <h2>{episode?.title}</h2>
        {locked ? (
          <>
            <p>This title is part of the Charter 150 Studio preview.</p>
            <ButtonLink to="/charter-150">Explore Charter 150</ButtonLink>
          </>
        ) : (
          <p>This prototype opens an episode preview. No video footage has been invented.</p>
        )}
      </Modal>
    </main>
  );
}

export function Live() {
  const { access, saved, toggleSaved } = useApp();
  const [rsvp, setRsvp] = useState(false);
  const past = sessions[0];
  return (
    <main className="member-page live-page">
      <section className="page-width">
        <div className="member-title-row">
          <div>
            <p className="section-kicker">Live</p>
            <h1>Be in the room.</h1>
          </div>
          <p className="member-subcopy">
            Sessions for practical questions, honest experience and shared context.
          </p>
        </div>
        <article className="pinned-event">
          <div className="event-date">
            <span>Nov</span>
            <strong>07</strong>
            <small>Past event</small>
          </div>
          <div className="event-main">
            <div className="event-tags">
              <span>Live room</span>
              <span>Past session</span>
            </div>
            <h2>{past.title}</h2>
            <p>
              A practical conversation about discussing pay and working conditions with clarity,
              context and respect.
            </p>
            <div className="event-host">
              <img src={megan} alt="Megan Jennings" />
              <span>
                Hosted by <strong>Megan Jennings</strong>
                <br />
                November 7 · 7:00 PM CET · 9 attendees
              </span>
            </div>
          </div>
          <div className="event-actions">
            <button className="button button-acid" onClick={() => setRsvp(true)}>
              {rsvp ? "Demo RSVP saved" : "Demo RSVP"} <Arrow />
            </button>
            <button className="text-button" onClick={() => toggleSaved(past.id)}>
              {saved.includes(past.id) ? "Remove from My Calendar" : "Save to My Calendar"}
            </button>
          </div>
        </article>
        <div className="upcoming-heading">
          <h2>Upcoming sessions</h2>
          <Link to="/member/calendar">
            Open My Calendar <Arrow />
          </Link>
        </div>
        <div className="upcoming-grid">
          {sessions.slice(1).map((session) => (
            <article className="upcoming-event" key={session.id}>
              <span>{session.tag}</span>
              <h3>{session.title}</h3>
              <p>
                {session.date} · {session.time}
              </p>
              {session.tag === "Charter roundtable" && access === "Public" ? (
                <ButtonLink to="/charter-150" tone="outline">
                  Explore Charter access
                </ButtonLink>
              ) : (
                <button
                  className="button button-outline-dark"
                  onClick={() => toggleSaved(session.id)}
                >
                  {saved.includes(session.id) ? "Saved to My Calendar" : "Save to My Calendar"}
                </button>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function Calendar() {
  const { saved, toggleSaved } = useApp();
  const [monthOffset, setMonthOffset] = useState(0);
  const base = new Date(2026, 6, 1);
  const current = new Date(base.getFullYear(), base.getMonth() + monthOffset, 1);
  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = (current.getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate();
  const calendarCells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: days }, (_, index) => index + 1),
  ];
  const savedSessions = sessions.filter((session) => saved.includes(session.id));
  const markers = useMemo(
    () =>
      savedSessions
        .filter((session) => {
          const date = new Date(`${session.date}T12:00:00`);
          return date.getFullYear() === year && date.getMonth() === month;
        })
        .map((session) => Number(session.date.slice(-2))),
    [savedSessions, month, year],
  );
  return (
    <main className="member-page calendar-page">
      <section className="page-width">
        <div className="member-title-row">
          <div>
            <p className="section-kicker">My Calendar</p>
            <h1>Keep the dates.</h1>
          </div>
          <ButtonLink to="/member/live" tone="outline">
            Browse Live
          </ButtonLink>
        </div>
        <div className="calendar-layout">
          <div className="calendar-card">
            <div className="calendar-head">
              <button
                onClick={() => setMonthOffset((value) => value - 1)}
                aria-label="Previous month"
              >
                ←
              </button>
              <h2>{current.toLocaleString("en", { month: "long", year: "numeric" })}</h2>
              <button onClick={() => setMonthOffset((value) => value + 1)} aria-label="Next month">
                →
              </button>
            </div>
            <div className="calendar-grid calendar-weekdays">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="calendar-grid">
              {calendarCells.map((day, index) => (
                <div
                  className={!day ? "empty" : markers.includes(day) ? "marked" : ""}
                  key={`${day}-${index}`}
                >
                  {day && <span>{day}</span>}
                  {day && markers.includes(day) && <i />}
                </div>
              ))}
            </div>
          </div>
          <aside className="saved-list">
            <p className="section-kicker">Saved sessions</p>
            {savedSessions.length ? (
              savedSessions.map((session) => (
                <article key={session.id}>
                  <span>{session.tag}</span>
                  <h3>{session.title}</h3>
                  <p>
                    {session.date} · {session.time}
                  </p>
                  <button onClick={() => toggleSaved(session.id)}>Remove</button>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <h3>No saved sessions</h3>
                <p>Save an eligible session from Live and it will appear here.</p>
                <Link to="/member/live">
                  Browse Live <Arrow />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}

export function Academy() {
  return (
    <main className="construction-page member-page">
      <section className="page-width">
        <span className="construction-number">04</span>
        <p className="section-kicker">Academy</p>
        <h1>
          Under <em>construction.</em>
        </h1>
        <p>
          Structured Academy learning is being framed. In the meantime, continue with Studio films
          and Live rooms.
        </p>
        <div>
          <ButtonLink to="/member/studio">Explore Studio</ButtonLink>
          <ButtonLink to="/member/live" tone="outline">
            Browse Live
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}

export function Partners() {
  return (
    <main className="member-page">
      <section className="page-width partners-page">
        <p className="section-kicker">Partners</p>
        <h1>A useful directory, built on confirmed relationships.</h1>
        <div className="directory-placeholder">
          <div>
            <span>Directory placeholder</span>
            <h2>Partner profiles will appear here.</h2>
            <p>
              We only show partner logos for confirmed relationships, so this prototype
              intentionally includes none.
            </p>
          </div>
          <div className="directory-lines">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <ButtonLink to="/member/community">Ask the Community</ButtonLink>
      </section>
    </main>
  );
}

export function NotFound() {
  return (
    <main className="not-found">
      <p className="section-kicker">404</p>
      <h1>Out of frame.</h1>
      <ButtonLink to="/">Back home</ButtonLink>
    </main>
  );
}
