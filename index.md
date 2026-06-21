---
title: Home
---

<div class="hero">
  <div class="container">
    <div class="heroGrid">
      <div class="card heroCard reveal">
        <div class="kicker">
          <span class="dot" aria-hidden="true"></span>
          Practical explanations for how modern web apps are built
        </div>

        <h1>Understand the systems behind modern web applications.</h1>
        <p class="lead">
          WebApplications.ca is a concise reference for frontend, UI engineering, API design, and the patterns that make web products reliable at scale.
          Built for developers, designers who ship, and teams that want clarity instead of hype.
        </p>

        <div class="heroActions">
          <a class="btn primary" href="#paths">{% include icons.html name="down" %} Explore paths</a>
          <a class="btn" href="#guides">{% include icons.html name="book" %} Featured guides</a>
          <span class="pill">Jekyll-friendly layout</span>
        </div>

        <div class="search" id="searchArea">
          <div class="searchbar" role="search">
            {% include icons.html name="search" %}
            <input id="searchInput" type="search" placeholder="Search topics: authentication, caching, performance, design systems…" aria-label="Search topics">
          </div>
          <div class="hint">
            Tip: this theme is built around hubs (role pages + concept pages). Later, wire this search to Pagefind or Lunr.js.
          </div>
        </div>
      </div>

      <aside class="card sideCard reveal" aria-label="Start here">
        <div class="sideTitle">
          <strong>Start here</strong>
          <span class="pill">Curated</span>
        </div>

        <div class="miniList">
          <a class="miniItem" href="#guides" data-tags="architecture constraints tradeoffs systems">
            <div class="meta">Guide • 8 min</div>
            <div class="title">How web apps fail in production (and why)</div>
            <div class="desc">A calm map of bottlenecks: state, caching, auth, dependency drift, and observability.</div>
          </a>

          <a class="miniItem" href="#patterns" data-tags="auth session cookies jwt oauth">
            <div class="meta">Pattern • 6 min</div>
            <div class="title">Session vs token auth</div>
            <div class="desc">When cookies are the right default, and when tokens make sense.</div>
          </a>

          <a class="miniItem" href="#roles" data-tags="frontend ui developer design systems accessibility">
            <div class="meta">Role hub • 5 min</div>
            <div class="title">UI developer as a systems role</div>
            <div class="desc">Why UI work is architecture: component boundaries, tokens, and governance.</div>
          </a>
        </div>
      </aside>
    </div>
  </div>
</div>

<section id="paths">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>Learning paths</h2>
        <p>Choose a path. Each one is a small map of core concepts, patterns, and reference pages.</p>
      </div>
      <a class="btn" href="#about">How it works {% include icons.html name="chevron" %}</a>
    </div>

    <div class="tiles">
      <a class="tile reveal" href="#guides" style="--glow: rgba(37,99,235,.55)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a1),var(--a3))"></span>Web foundations</span>
          <span class="pill">Path</span>
        </div>
        <h3>Modern frontend in practice</h3>
        <p>Rendering models, state, performance budgets, accessibility, and what ships reliably.</p>
        <div class="links">
          <span class="chip">Rendering</span><span class="chip">State</span><span class="chip">a11y</span><span class="chip">Perf</span>
        </div>
      </a>

      <a class="tile reveal" href="#patterns" style="--glow: rgba(124,58,237,.55)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a2),var(--a1))"></span>Backend & APIs</span>
          <span class="pill">Path</span>
        </div>
        <h3>APIs that stay sane at scale</h3>
        <p>Versioning, auth, pagination, idempotency, rate limits, docs, and error design.</p>
        <div class="links">
          <span class="chip">REST</span><span class="chip">GraphQL</span><span class="chip">Auth</span><span class="chip">Docs</span>
        </div>
      </a>

      <a class="tile reveal" href="#roles" style="--glow: rgba(6,182,212,.55)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a3),var(--a4))"></span>UI engineering</span>
          <span class="pill">Path</span>
        </div>
        <h3>Design systems without chaos</h3>
        <p>Tokens, components, governance, contribution flow, and avoiding CSS archaeology.</p>
        <div class="links">
          <span class="chip">Tokens</span><span class="chip">Components</span><span class="chip">Docs</span><span class="chip">QA</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section id="roles">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>Role hubs</h2>
        <p>High-signal landing pages you can map to your role domains later (frontenddeveloper.ca, uideveloper.ca, apideveloper.ca).</p>
      </div>
      <span class="pill">Domain-ready</span>
    </div>

    <div class="featured">
      <a class="featureCard reveal" href="#" data-title="Frontend Developer" data-tags="frontend developer ui performance accessibility">
        <div class="featureTop">
          <span class="tag">frontenddeveloper.ca</span>
          <span class="pill">Hub</span>
        </div>
        <h3>Frontend Developer</h3>
        <p>Performance, state boundaries, UX clarity, and shipping constraints.</p>
        <div class="meta">
          <span class="kpi">• Core skills: HTML/CSS/JS</span>
          <span class="kpi">• Systems: state, caching</span>
        </div>
      </a>

      <a class="featureCard reveal" href="#" data-title="UI Developer" data-tags="ui developer design systems components css tokens accessibility">
        <div class="featureTop">
          <span class="tag">uideveloper.ca</span>
          <span class="pill">Hub</span>
        </div>
        <h3>UI Developer</h3>
        <p>Component architecture, design tokens, accessibility, and consistent interfaces.</p>
        <div class="meta">
          <span class="kpi">• Systems: tokens, theming</span>
          <span class="kpi">• Outputs: libraries, docs</span>
        </div>
      </a>

      <a class="featureCard reveal" href="#" data-title="API Developer" data-tags="api developer rest graphql auth versioning documentation">
        <div class="featureTop">
          <span class="tag">apideveloper.ca</span>
          <span class="pill">Hub</span>
        </div>
        <h3>API Developer</h3>
        <p>Contracts, auth, versioning, and keeping integrations stable.</p>
        <div class="meta">
          <span class="kpi">• Contracts: schemas</span>
          <span class="kpi">• Ops: logs, traces</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section id="guides">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>Featured guides</h2>
        <p>Editorial-style entries: fewer, better pages. Each guide links out to deeper references and your other projects.</p>
      </div>
      <span class="pill" id="resultsPill">Search: off</span>
    </div>

    <div class="featured" id="featureGrid">
      <a class="featureCard reveal" href="#" data-title="Auth Models" data-tags="auth oauth session cookies jwt security">
        <div class="featureTop">
          <span class="tag">Security</span>
          <span class="pill">Guide</span>
        </div>
        <h3>Authentication models that don’t surprise you</h3>
        <p>Sessions, cookies, tokens, OAuth, and defaults that fail safely.</p>
        <div class="meta">
          <span class="kpi">• When to use cookies</span>
          <span class="kpi">• Token pitfalls</span>
        </div>
      </a>

      <a class="featureCard reveal" href="#" data-title="Caching" data-tags="caching cdn invalidation etag performance">
        <div class="featureTop">
          <span class="tag">Performance</span>
          <span class="pill">Guide</span>
        </div>
        <h3>Caching is an architecture decision</h3>
        <p>CDNs, ETags, stale-while-revalidate, and avoiding cache roulette.</p>
        <div class="meta">
          <span class="kpi">• CDN strategy</span>
          <span class="kpi">• Invalidation rules</span>
        </div>
      </a>

      <a class="featureCard reveal" href="#" data-title="Design Systems" data-tags="design system tokens components governance ui">
        <div class="featureTop">
          <span class="tag">UI Engineering</span>
          <span class="pill">Guide</span>
        </div>
        <h3>Design systems as governance, not decoration</h3>
        <p>Tokens, component ownership, contribution workflow, and versioning the UI.</p>
        <div class="meta">
          <span class="kpi">• Tokens as contracts</span>
          <span class="kpi">• Review gates</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section id="patterns">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>Patterns library</h2>
        <p>Short references that answer what this is and when it breaks. Ideal for interlinking.</p>
      </div>
      <a class="btn" href="#searchArea">Search patterns {% include icons.html name="chevron" %}</a>
    </div>

    <div class="tiles">
      <a class="tile reveal" href="#" style="--glow: rgba(34,197,94,.50)" data-tags="idempotency retries payments api">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a4),var(--a3))"></span>API pattern</span>
          <span class="pill">Reference</span>
        </div>
        <h3>Idempotency keys</h3>
        <p>Stop duplicate writes when clients retry. Especially important for payments and mutations.</p>
        <div class="links"><span class="chip">Retries</span><span class="chip">Payments</span><span class="chip">Safety</span></div>
      </a>

      <a class="tile reveal" href="#" style="--glow: rgba(249,115,22,.45)" data-tags="pagination cursor offset api performance">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a5),var(--a1))"></span>API pattern</span>
          <span class="pill">Reference</span>
        </div>
        <h3>Pagination: cursor vs offset</h3>
        <p>Why offset pagination becomes expensive and inconsistent, and when cursors win.</p>
        <div class="links"><span class="chip">Cursor</span><span class="chip">Offset</span><span class="chip">Stability</span></div>
      </a>

      <a class="tile reveal" href="#" style="--glow: rgba(37,99,235,.45)" data-tags="performance budgets lighthouse web vitals">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a1),var(--a3))"></span>Frontend pattern</span>
          <span class="pill">Reference</span>
        </div>
        <h3>Performance budgets</h3>
        <p>Make performance a constraint. Define budgets and test them continuously.</p>
        <div class="links"><span class="chip">Web Vitals</span><span class="chip">CI</span><span class="chip">Budgets</span></div>
      </a>
    </div>

    <div style="height:14px"></div>

    <div class="strip reveal" id="newsletter">
      <div>
        <strong>Get the high-signal updates.</strong>
        <span>One short email when new guides or hubs are published. No spam, no noise.</span>
      </div>
      <form class="stripForm" data-mock-subscribe>
        <input type="email" placeholder="Email address" aria-label="Email address">
        <button class="btn primary" type="submit">Subscribe</button>
      </form>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>About the structure</h2>
        <p>Hub-first: role hubs introduce the job, guides explain mechanics, and references answer narrow questions.</p>
      </div>
    </div>

    <div class="tiles">
      <div class="tile reveal" style="--glow: rgba(124,58,237,.40)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a2),var(--a3))"></span>Navigation model</span>
          <span class="pill">Jekyll</span>
        </div>
        <h3>Hubs → guides → references</h3>
        <p>Keep it readable and maintainable with a small knowledge graph instead of endless categories.</p>
        <div class="links"><span class="chip">Collections</span><span class="chip">Tags</span><span class="chip">Related</span></div>
      </div>

      <div class="tile reveal" style="--glow: rgba(6,182,212,.38)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a3),var(--a4))"></span>Search</span>
          <span class="pill">Later</span>
        </div>
        <h3>Wire real search when you’re ready</h3>
        <p>Start with tags and hubs. Add Pagefind or Lunr.js once you have enough content to justify it.</p>
        <div class="links"><span class="chip">Pagefind</span><span class="chip">Lunr</span><span class="chip">Tags</span></div>
      </div>

      <div class="tile reveal" style="--glow: rgba(34,197,94,.34)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a4),var(--a1))"></span>Interconnect</span>
          <span class="pill">Ecosystem</span>
        </div>
        <h3>Link to your other projects</h3>
        <p>Each hub can link to BoldOutlook articles, Awesome Lists, or tools without feeling like a link farm.</p>
        <div class="links"><span class="chip">BoldOutlook</span><span class="chip">Awesome Lists</span><span class="chip">Tools</span></div>
      </div>
    </div>
  </div>
</section>
