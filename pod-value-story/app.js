const HOURS_PER_MONTH = 160;
const POD_RATE_FIXED = 52;
const AI_FEE_PER_HEAD = 400;
const implementationBlueprint = {
  onboarding: [
    "Access and environment setup (repo, CI, ticketing, cloud).",
    "Baseline measurement of current delivery metrics.",
    "Threat modeling for agent workflows: approved data, prompt locations, executable tool boundaries.",
    "Agent configuration sprint: define agent roles, permissions, and evaluation checks.",
    "Ship first vertical slice to prove the system.",
  ],
  agentConfig: [
    {
      title: "Knowledge Sources",
      detail:
        "Define approved docs, repos, and runbooks; build retrieval indexes scoped per client.",
    },
    {
      title: "Prompt Templates",
      detail:
        "Create client-specific templates for coding conventions, architecture patterns, and review style.",
    },
    {
      title: "Release Procedures",
      detail:
        "Standardize deployment procedures and quality checks so rollout behavior stays consistent.",
    },
  ],
  governanceLead:
    "A pragmatic pattern is risk-tiered autonomy, where permissions are matched to engineering and compliance risk.",
};
const structuralMoat = {
  cards: [
    {
      title: "The Missing Middle",
      body:
        "Tools sell licenses, agencies sell projects, and marketplaces sell individuals. This model sells a managed senior pod with integrated AI orchestration and accountability.",
    },
    {
      title: "The Seniority Thesis",
      body:
        "AI amplifies senior judgment. A 4-5 person senior AI pod can outperform a traditional 10-person structure on throughput and quality ownership.",
    },
    {
      title: "Pricing Advantage",
      body:
        "Move from time-and-materials to outcome-aligned subscriptions. That shifts incentives from billed hours to shipped, verified outcomes.",
    },
  ],
  gapMap: [
    { label: "Tools", start: 2, width: 26, note: "Cursor / Devin" },
    { label: "Talent", start: 72, width: 24, note: "Toptal / Turing" },
    { label: "Enterprise", start: 44, width: 48, note: "EPAM / Globant" },
    { label: "Your Pod", start: 31, width: 36, note: "Nearshore + AI + governance", moat: true },
  ],
  traditionalSize: 10,
  podSize: 5,
};
const incodeksProfile = {
  lead:
    "Incodeks (founded 2017) is the delivery engine behind this hybrid pod model, combining senior engineering talent in the Balkans with international client execution standards.",
  stats: [
    { value: "2017", label: "Founded" },
    { value: "100+", label: "Engineers" },
    { value: "5 Offices", label: "US + Balkans footprint" },
    { value: "Senior-heavy", label: "Team composition" },
  ],
  offices: [
    { city: "San Francisco, USA", x: 16, y: 42, hq: true },
    { city: "Prishtina, Kosovo", x: 73, y: 47 },
    { city: "Ferizaj, Kosovo", x: 75, y: 52 },
    { city: "Prizren, Kosovo", x: 71, y: 57 },
    { city: "Skopje, North Macedonia", x: 79, y: 58 },
  ],
  clients: ["PwC", "Carrefour", "Euroconsumers", "Solenis", "Jacuzzi", "Sani Marc", "Akido Labs"],
  industries: [
    "Water Technology",
    "Retail",
    "Consumer Platforms",
    "Fintech",
    "Digital Media",
    "Pharmatech",
    "Edutech",
  ],
  capabilities: [
    { label: "AI/ML Systems", value: 92 },
    { label: "Voicebots and Chatbots", value: 84 },
    { label: "IoT Platforms", value: 79 },
    { label: "SaaS and Mobile Products", value: 90 },
    { label: "DevOps Infrastructure", value: 86 },
    { label: "Blockchain Solutions", value: 68 },
  ],
};

const regionData = {
  US: {
    currency: "USD",
    subtitle:
      "Lead with validated velocity: ship more with the team clients already have, while preserving senior engineering control over architecture, security, and release gates.",
    defaults: {
      traditionalTeamSize: 9,
      traditionalRate: 100,
      podSize: 5,
      podRate: POD_RATE_FIXED,
      aiFee: 2000,
      velocityMultiplier: 3.5,
    },
    bottlenecks: [
      {
        title: "Roadmap Compression",
        body: "Backlogs expand faster than hiring capacity, forcing tradeoffs between speed and quality.",
      },
      {
        title: "Budget Scrutiny",
        body: "Leadership expects more output per dollar without adding large full-time headcount.",
      },
      {
        title: "AI Trust Gap",
        body: "Teams use coding AI but lack governance to safely move beyond experimentation.",
      },
    ],
    marketSignals: {
      thesis:
        "A new AI-accelerated team category is now credible because software demand remains high while agentic tooling has crossed adoption thresholds.",
      forceOne: {
        title: "Force One: Talent Constraint",
        body:
          "Software demand is shifting, not disappearing. The US still shows structural demand pressure with strong long-term growth projections and high annual openings.",
      },
      forceTwo: {
        title: "Force Two: Agentic AI Maturity",
        body:
          "Agentic tooling has moved from novelty to workflow layer: high developer adoption, meaningful AI-generated code share, and rapid ecosystem growth.",
      },
      implication:
        "The middle model wins: traditional-only teams are too expensive and slow for current roadmap pressure, while pure autonomy is too risky for production ownership.",
      visuals: {
        talentBars: [
          { label: "US annual software openings", display: "129k / year", value: 129 },
          { label: "Projected US role growth (2024-2034)", display: "15%", value: 15 },
          { label: "US unfilled developer roles projection", display: "1.2M", value: 1200 },
        ],
        aiBars: [
          { label: "Developers using/planning AI", display: "84%", value: 84 },
          { label: "Daily AI use", display: "51%", value: 51 },
          { label: "New code AI-generated", display: "41%", value: 41 },
          { label: "Agentic repo growth", display: "+920%", value: 92 },
        ],
        marketRange: {
          label: "Agentic AI market ($B)",
          rows: [
            { period: "2025", min: 7, max: 10 },
            { period: "2030", min: 42, max: 93 },
          ],
          cap: 100,
          footnote: "Estimated CAGR range: 36%-46% (depending on scope definition).",
        },
      },
    },
    proofStats: [
      {
        stat: "84%",
        detail: "of developers use or plan to use AI tools, signaling mature adoption rather than experiment mode.",
      },
      {
        stat: "~41%",
        detail: "of new code can be AI-generated, but output still requires senior validation before production.",
      },
      {
        stat: "86%",
        detail: "failure rate cited for autonomous AI on complex tasks, making pure-agent delivery unsafe for ownership.",
      },
      {
        stat: "3-5x",
        detail: "target throughput narrative for AI-augmented pods when governance and senior orchestration are in place.",
      },
    ],
    comparisonRows: [
      {
        feature: "Velocity",
        traditional: "Stable but slower due to manual cycles.",
        pureAi: "Fast for drafts, inconsistent for end-to-end delivery.",
        pod: "High sustained velocity with bounded automation + human control.",
      },
      {
        feature: "Production Reliability",
        traditional: "Good when senior-heavy, expensive at scale.",
        pureAi: "Unreliable on edge cases and system complexity.",
        pod: "Senior review gates protect architecture and deployment quality.",
      },
      {
        feature: "Security and Compliance",
        traditional: "Depends on process maturity.",
        pureAi: "High risk without strict policy boundaries.",
        pod: "Risk-tiered autonomy with explicit security and release controls.",
      },
      {
        feature: "Commercial Outcome",
        traditional: "Predictable but high cost per output unit.",
        pureAi: "Low direct cost, high hidden rework cost.",
        pod: "Lower cost per throughput unit with accountable outcomes.",
      },
    ],
    objections: [
      {
        question: "Why not just use a pure AI coding agent?",
        answer:
          "Pure agents can accelerate drafts but fail on complex, production-grade tasks. The pod model adds senior decision authority, QA validation, and deployment gates so AI speed translates into real shipped outcomes.",
      },
      {
        question: "Is this just staff augmentation with a new label?",
        answer:
          "No. Staff augmentation sells people. The pod sells an operating system: configured agents, measurable throughput targets, governance tiers, and shared accountability for delivery and reliability.",
      },
      {
        question: "How do we avoid black-box automation risk?",
        answer:
          "By design: architecture, security-sensitive logic, and release approvals stay human-led. AI autonomy is tiered and bounded based on risk, with evidence attached to every change.",
      },
    ],
    executionLoop: [
      "Ingest tickets, code context, and latest PR signals.",
      "Draft task plan, code diffs, tests, and risk flags.",
      "Execute bounded implementation and generate QA evidence.",
      "Run lint, tests, and policy checks before human review.",
    ],
    assuranceLoop: [
      "Tech lead approves architecture and plan boundaries.",
      "Senior engineer + QA review security and regression risk.",
      "DevOps enforces release gates and deployment policies.",
      "Post-deploy monitoring closes the feedback loop.",
    ],
    governance: [
      {
        tier: "Tier 0",
        title: "No Autonomy",
        summary: "Production-sensitive changes stay fully human-driven.",
        details: "Includes regulated logic, sensitive security surfaces, and critical infrastructure paths.",
      },
      {
        tier: "Tier 1",
        title: "Proposal Only",
        summary: "AI drafts options; humans decide final path.",
        details: "Architecture shifts and schema changes require lead approval before implementation.",
      },
      {
        tier: "Tier 2",
        title: "Execute With Review",
        summary: "AI executes bounded coding work with mandatory review.",
        details: "Covers scaffolding, test generation, docs, and low-risk refactors with sign-off.",
      },
      {
        tier: "Tier 3",
        title: "Auto Execute",
        summary: "Automation handles non-critical chores after policy checks.",
        details: "Formatting, low-risk documentation updates, and maintenance tasks can auto-merge with green CI.",
      },
    ],
  },
  DACH: {
    currency: "EUR",
    subtitle:
      "Lead with trust-first acceleration: nearshore delivery with EU-grade controls, traceability, and compliance-ready execution by design.",
    defaults: {
      traditionalTeamSize: 8,
      traditionalRate: 80,
      podSize: 5,
      podRate: POD_RATE_FIXED,
      aiFee: 2000,
      velocityMultiplier: 3.0,
    },
    bottlenecks: [
      {
        title: "Reliability Expectations",
        body: "Buyers prioritize delivery quality, repeatability, and documented engineering discipline.",
      },
      {
        title: "Privacy and Compliance",
        body: "Data handling and governance standards heavily influence vendor selection.",
      },
      {
        title: "Persistent Talent Gaps",
        body: "Specialized engineering capacity remains constrained despite long sales and hiring cycles.",
      },
    ],
    marketSignals: {
      thesis:
        "DACH market conditions support AI-accelerated teams when speed is paired with auditability, privacy controls, and evidence-based delivery governance.",
      forceOne: {
        title: "Force One: Talent Constraint",
        body:
          "Germany and Austria continue to report significant IT talent shortages, while buyer expectations for reliability and documentation remain high.",
      },
      forceTwo: {
        title: "Force Two: Agentic AI Maturity",
        body:
          "Agentic tooling is now mature enough to accelerate execution, but DACH adoption requires strict policy boundaries and human sign-off on high-risk paths.",
      },
      implication:
        "The right category for DACH is governed acceleration: nearshore senior pods using AI under explicit controls, not black-box autonomy.",
      visuals: {
        talentBars: [
          { label: "Germany unfilled IT roles (2025)", display: "109k", value: 109 },
          { label: "Austria open IT roles/month", display: "~20k", value: 20 },
          { label: "Employers reporting shortages", display: "86%", value: 86 },
        ],
        aiBars: [
          { label: "Developers using/planning AI", display: "84%", value: 84 },
          { label: "Daily AI use", display: "51%", value: 51 },
          { label: "New code AI-generated", display: "41%", value: 41 },
          { label: "Agentic repo growth", display: "+920%", value: 92 },
        ],
        marketRange: {
          label: "Agentic AI market ($B)",
          rows: [
            { period: "2025", min: 7, max: 10 },
            { period: "2030", min: 42, max: 93 },
          ],
          cap: 100,
          footnote: "Global growth curve underpins local adoption when governance is explicit.",
        },
      },
    },
    proofStats: [
      {
        stat: "109k",
        detail: "unfilled IT roles reported in Germany (2025), with persistent scarcity pressure.",
      },
      {
        stat: "~20k",
        detail: "open IT positions in Austria per month by multi-source estimates.",
      },
      {
        stat: "6-12 mo",
        detail: "typical enterprise sales cycles, favoring trust-first and audit-friendly vendor posture.",
      },
      {
        stat: "EU-grade",
        detail: "governance positioning (traceability, data handling controls, risk-tiered automation) is a buying requirement, not optional.",
      },
    ],
    comparisonRows: [
      {
        feature: "Delivery Speed",
        traditional: "Reliable but constrained by hiring and handoff overhead.",
        pureAi: "Can draft quickly, weak on accountable delivery paths.",
        pod: "Accelerates build cycles while preserving control points.",
      },
      {
        feature: "Auditability",
        traditional: "Possible but often manual and inconsistent.",
        pureAi: "Weak traceability unless heavily instrumented.",
        pod: "Continuous evidence packs: tests, diff rationale, and gate decisions.",
      },
      {
        feature: "Data and Policy Control",
        traditional: "Depends on team discipline and process.",
        pureAi: "Risk of uncontrolled prompt and data exposure.",
        pod: "Client-specific agent permissions and policy-safe knowledge boundaries.",
      },
      {
        feature: "Buyer Confidence",
        traditional: "Known model, slower ROI narrative.",
        pureAi: "Perceived as black box and high risk.",
        pod: "Balanced model that matches DACH trust and compliance culture.",
      },
    ],
    objections: [
      {
        question: "How is this compliant enough for DACH buyers?",
        answer:
          "The model is built around governance artifacts: controlled knowledge sources, explicit AI permissions, human sign-off on high-risk changes, and traceable release evidence.",
      },
      {
        question: "Why not keep only traditional nearshore teams?",
        answer:
          "Traditional nearshore can be reliable, but the pod adds structured AI acceleration to increase throughput without sacrificing EU-grade controls and documentation quality.",
      },
      {
        question: "Will AI reduce quality over time?",
        answer:
          "Not with this operating model. AI handles bounded execution tasks, while senior engineers own architecture, risk decisions, and final release gates.",
      },
    ],
    executionLoop: [
      "Ingest approved repos, ticket streams, and policy-safe context.",
      "Generate implementation proposals with acceptance criteria.",
      "Run controlled execution for code, tests, and documentation.",
      "Attach audit-ready evidence for each delivery increment.",
    ],
    assuranceLoop: [
      "Tech lead validates architecture and policy constraints.",
      "Senior reviewer + QA verify privacy, security, and quality.",
      "DevOps enforces release controls, traceability, and rollout checks.",
      "Monitoring and post-release validation complete the audit trail.",
    ],
    governance: [
      {
        tier: "Tier 0",
        title: "Strict Human Control",
        summary: "Critical or regulated paths remain human-only.",
        details: "Applies to production secrets, regulated workflows, and high-impact business rules.",
      },
      {
        tier: "Tier 1",
        title: "AI as Advisor",
        summary: "AI proposes; governance board approves.",
        details: "Architecture choices and schema changes require explicit human approval.",
      },
      {
        tier: "Tier 2",
        title: "Controlled Co-Pilot",
        summary: "AI executes within strict guardrails and review gates.",
        details: "Used for scaffolding, tests, docs, and scoped refactors with mandatory review.",
      },
      {
        tier: "Tier 3",
        title: "Policy-Checked Automation",
        summary: "Low-risk work can run automatically after checks.",
        details: "Only non-sensitive updates proceed automatically when CI and policy gates pass.",
      },
    ],
  },
};

let currentRegion = "US";

const dom = {
  heroSubtitle: document.getElementById("heroSubtitle"),
  bottleneckCards: document.getElementById("bottleneckCards"),
  marketThesis: document.getElementById("marketThesis"),
  forceCards: document.getElementById("forceCards"),
  talentBars: document.getElementById("talentBars"),
  aiBars: document.getElementById("aiBars"),
  marketRange: document.getElementById("marketRange"),
  marketImplication: document.getElementById("marketImplication"),
  incodeksLead: document.getElementById("incodeksLead"),
  incodeksStats: document.getElementById("incodeksStats"),
  officeMap: document.getElementById("officeMap"),
  officeList: document.getElementById("officeList"),
  clientChips: document.getElementById("clientChips"),
  industryChips: document.getElementById("industryChips"),
  capabilityBars: document.getElementById("capabilityBars"),
  onboardingTimeline: document.getElementById("onboardingTimeline"),
  agentConfigList: document.getElementById("agentConfigList"),
  governanceDesignLead: document.getElementById("governanceDesignLead"),
  governanceDesignList: document.getElementById("governanceDesignList"),
  moatCards: document.getElementById("moatCards"),
  moatGapMap: document.getElementById("moatGapMap"),
  traditionalTeamBar: document.getElementById("traditionalTeamBar"),
  seniorPodBar: document.getElementById("seniorPodBar"),
  proofStats: document.getElementById("proofStats"),
  modelCompare: document.getElementById("modelCompare"),
  objectionsList: document.getElementById("objectionsList"),
  executionLoop: document.getElementById("executionLoop"),
  assuranceLoop: document.getElementById("assuranceLoop"),
  governanceTiers: document.getElementById("governanceTiers"),
  roi: {
    traditionalTeamSize: document.getElementById("traditionalTeamSize"),
    traditionalRate: document.getElementById("traditionalRate"),
    podSize: document.getElementById("podSize"),
    podRate: document.getElementById("podRate"),
    aiFee: document.getElementById("aiFee"),
    velocityMultiplier: document.getElementById("velocityMultiplier"),
    traditionalCost: document.getElementById("traditionalCost"),
    podCost: document.getElementById("podCost"),
    monthlySavings: document.getElementById("monthlySavings"),
    efficiencyCost: document.getElementById("efficiencyCost"),
    velocityGain: document.getElementById("velocityGain"),
    explainTraditional: document.getElementById("roiExplainTraditional"),
    explainPod: document.getElementById("roiExplainPod"),
    explainSavings: document.getElementById("roiExplainSavings"),
    explainEfficiency: document.getElementById("roiExplainEfficiency"),
    fixedAssumptions: document.getElementById("roiFixedAssumptions"),
    costBars: document.getElementById("roiCostBars"),
    efficiencyBars: document.getElementById("roiEfficiencyBars"),
    savingsRing: document.getElementById("roiSavingsRing"),
    savingsPct: document.getElementById("roiSavingsPct"),
    savingsNarrative: document.getElementById("roiSavingsNarrative"),
  },
};

function money(value, region = currentRegion) {
  const currency = regionData[region]?.currency || "USD";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

function readInputs() {
  return {
    traditionalTeamSize: Number(dom.roi.traditionalTeamSize.value),
    traditionalRate: Number(dom.roi.traditionalRate.value),
    podSize: Number(dom.roi.podSize.value),
    podRate: Number(dom.roi.podRate.value),
    aiFee: Number(dom.roi.aiFee.value),
    velocityMultiplier: Number(dom.roi.velocityMultiplier.value),
  };
}

function renderBottlenecks(region) {
  dom.bottleneckCards.innerHTML = "";
  regionData[region].bottlenecks.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${index * 90}ms`;
    card.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    dom.bottleneckCards.appendChild(card);
  });
}

function renderBars(target, rows, alt = false) {
  target.innerHTML = "";
  const maxValue = Math.max(...rows.map((r) => r.value), 1);

  rows.forEach((row) => {
    const item = document.createElement("div");
    item.className = "bar-item";

    const width = Math.max(8, Math.round((row.value / maxValue) * 100));
    const displayValue = row.display ?? `${row.value}%`;
    item.innerHTML = `
      <header><span>${row.label}</span><strong>${displayValue}</strong></header>
      <div class="track"><div class="fill ${alt ? "alt" : ""}" style="width:${width}%"></div></div>
    `;

    target.appendChild(item);
  });
}

function renderMarketRange(target, range) {
  target.innerHTML = `<div><strong>${range.label}</strong></div>`;

  range.rows.forEach((row) => {
    const left = (row.min / range.cap) * 100;
    const width = ((row.max - row.min) / range.cap) * 100;

    const wrapper = document.createElement("div");
    wrapper.className = "range-row";
    wrapper.innerHTML = `
      <span>${row.period}</span>
      <div class="range-track">
        <div class="range-segment" style="left:${left}%; width:${Math.max(width, 3)}%"></div>
      </div>
      <strong>${row.min}-${row.max}</strong>
    `;
    target.appendChild(wrapper);
  });

  const note = document.createElement("div");
  note.style.marginTop = "0.4rem";
  note.textContent = range.footnote;
  target.appendChild(note);
}

function renderMarketSignals(region) {
  const signals = regionData[region].marketSignals;

  dom.marketThesis.textContent = signals.thesis;
  dom.forceCards.innerHTML = "";

  [signals.forceOne, signals.forceTwo].forEach((force) => {
    const card = document.createElement("article");
    card.className = "force-card";
    card.innerHTML = `<h3>${force.title}</h3><p>${force.body}</p>`;
    dom.forceCards.appendChild(card);
  });

  renderBars(dom.talentBars, signals.visuals.talentBars, false);
  renderBars(dom.aiBars, signals.visuals.aiBars, true);
  renderMarketRange(dom.marketRange, signals.visuals.marketRange);
  dom.marketImplication.textContent = `So what: ${signals.implication}`;
}

function renderRoiVisuals(metrics) {
  const {
    traditionalCost,
    podCost,
    monthlySavings,
    velocityMultiplier,
    podEfficiency,
  } = metrics;

  const traditionalEfficiency = traditionalCost;

  renderBars(
    dom.roi.costBars,
    [
      { label: "Traditional monthly cost", display: money(traditionalCost), value: traditionalCost },
      { label: "Pod monthly cost", display: money(podCost), value: podCost },
      { label: "Monthly savings", display: money(Math.max(monthlySavings, 0)), value: Math.max(monthlySavings, 0) },
    ],
    false,
  );

  renderBars(
    dom.roi.efficiencyBars,
    [
      {
        label: "Traditional cost per throughput unit",
        display: money(traditionalEfficiency),
        value: traditionalEfficiency,
      },
      {
        label: `Pod cost per throughput unit (${velocityMultiplier.toFixed(1)}x)`,
        display: money(podEfficiency),
        value: podEfficiency,
      },
    ],
    true,
  );

  const savingsPct = traditionalCost > 0 ? Math.max(0, Math.min(100, (monthlySavings / traditionalCost) * 100)) : 0;
  dom.roi.savingsRing.style.setProperty("--pct", `${savingsPct.toFixed(1)}%`);
  dom.roi.savingsPct.textContent = `${savingsPct.toFixed(1)}%`;
  dom.roi.savingsNarrative.textContent =
    monthlySavings >= 0
      ? `${money(monthlySavings)} saved each month vs traditional delivery.`
      : `${money(Math.abs(monthlySavings))} higher monthly cost than traditional delivery.`;
}

function renderHybridProof(region) {
  const data = regionData[region];

  dom.proofStats.innerHTML = "";
  data.proofStats.forEach((row) => {
    const card = document.createElement("article");
    card.className = "proof-stat";
    card.innerHTML = `<strong>${row.stat}</strong><p>${row.detail}</p>`;
    dom.proofStats.appendChild(card);
  });

  dom.modelCompare.innerHTML = "";
  const headers = ["Evaluation Axis", "Traditional Team", "Pure AI", "Hybrid Pod"];
  headers.forEach((header) => {
    const cell = document.createElement("div");
    cell.className = "cell head";
    cell.textContent = header;
    dom.modelCompare.appendChild(cell);
  });

  data.comparisonRows.forEach((row) => {
    const cells = [
      { text: row.feature, klass: "cell feature" },
      { text: row.traditional, klass: "cell" },
      { text: row.pureAi, klass: "cell" },
      { text: row.pod, klass: "cell pod-win" },
    ];

    cells.forEach((item) => {
      const cell = document.createElement("div");
      cell.className = item.klass;
      cell.textContent = item.text;
      dom.modelCompare.appendChild(cell);
    });
  });

  dom.objectionsList.innerHTML = "";
  data.objections.forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "objection";
    entry.innerHTML = `<h4>${item.question}</h4><p>${item.answer}</p>`;
    dom.objectionsList.appendChild(entry);
  });
}

function renderImplementationBlueprint(region) {
  const stageLabels = ["Environment Setup", "Baseline", "Threat Model", "Config Sprint", "Proof Slice"];
  const weekLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 4"];
  const palette = ["#0d8f7a", "#2e8fcb", "#7c6bd1", "#e7662d", "#b34a7c"];

  dom.onboardingTimeline.innerHTML = "";
  implementationBlueprint.onboarding.forEach((step, index) => {
    const card = document.createElement("article");
    card.className = "timeline-step";
    card.style.setProperty("--step-color", palette[index % palette.length]);
    card.innerHTML = `
      <header>
        <span class="timeline-badge">${index + 1}</span>
        <div>
          <strong>${weekLabels[index]}</strong>
          <small class="timeline-meta">${stageLabels[index]}</small>
        </div>
      </header>
      <p>${step}</p>
    `;
    dom.onboardingTimeline.appendChild(card);
  });

  dom.agentConfigList.innerHTML = "";
  implementationBlueprint.agentConfig.forEach((item) => {
    const li = document.createElement("li");
    li.className = "config-item";
    li.innerHTML = `<strong>${item.title}</strong><p>${item.detail}</p>`;
    dom.agentConfigList.appendChild(li);
  });

  dom.governanceDesignLead.textContent = implementationBlueprint.governanceLead;
  dom.governanceDesignList.innerHTML = "";
  regionData[region].governance.forEach((tier) => {
    const li = document.createElement("li");
    li.className = "governance-chip";
    li.innerHTML = `<span>${tier.tier}</span><strong>${tier.title}</strong><p>${tier.summary}</p>`;
    dom.governanceDesignList.appendChild(li);
  });
}

function renderStructuralMoat() {
  dom.moatCards.innerHTML = "";
  structuralMoat.cards.forEach((cardData) => {
    const card = document.createElement("article");
    card.className = "moat-card";
    card.innerHTML = `<h3>${cardData.title}</h3><p>${cardData.body}</p>`;
    dom.moatCards.appendChild(card);
  });

  dom.moatGapMap.innerHTML = "";
  structuralMoat.gapMap.forEach((row) => {
    const line = document.createElement("div");
    line.className = "gap-row";
    line.innerHTML = `
      <label>${row.label}</label>
      <div class="gap-track">
        <div class="gap-segment ${row.moat ? "moat" : ""}" style="left:${row.start}%; width:${row.width}%"></div>
      </div>
      <span>${row.note}</span>
    `;
    dom.moatGapMap.appendChild(line);
  });

  dom.traditionalTeamBar.style.width = "100%";
  dom.seniorPodBar.style.width = `${(structuralMoat.podSize / structuralMoat.traditionalSize) * 100}%`;
}

function renderIncodeksProfile() {
  dom.incodeksLead.textContent = incodeksProfile.lead;

  dom.incodeksStats.innerHTML = "";
  incodeksProfile.stats.forEach((item) => {
    const card = document.createElement("article");
    card.className = "incodeks-stat";
    card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    dom.incodeksStats.appendChild(card);
  });

  const countryMaps = [
    {
      country: "USA",
      officesLabel: "San Francisco",
      shape: "M18 88 L38 66 L86 58 L120 70 L130 88 L112 106 L72 116 L30 112 Z",
      pins: [{ name: "San Francisco", x: 30, y: 90 }],
    },
    {
      country: "Kosovo",
      officesLabel: "Prishtina, Ferizaj, Prizren",
      shape: "M30 78 L58 62 L88 66 L104 80 L98 102 L72 114 L44 106 L26 92 Z",
      pins: [
        { name: "Prishtina", x: 63, y: 74 },
        { name: "Ferizaj", x: 68, y: 88 },
        { name: "Prizren", x: 53, y: 94 },
      ],
    },
    {
      country: "North Macedonia",
      officesLabel: "Skopje",
      shape: "M26 82 L54 66 L90 72 L106 90 L94 106 L58 112 L30 102 L22 92 Z",
      pins: [{ name: "Skopje", x: 66, y: 78 }],
    },
  ];

  const mapMarkup = countryMaps
    .map((country) => {
      const pins = country.pins
        .map(
          (pin) => `
            <button type="button" class="country-pin" style="left:${pin.x}px; top:${pin.y}px;" aria-label="${pin.name}">
              <span class="pin-head"></span>
              <span class="pin-stem"></span>
              <span class="pin-tooltip">${pin.name}</span>
            </button>
          `,
        )
        .join("");

      return `
        <article class="country-map-card">
          <header>
            <strong>${country.country}</strong>
            <span>${country.officesLabel}</span>
          </header>
          <div class="country-map-canvas">
            <svg viewBox="0 0 150 130" preserveAspectRatio="xMidYMid meet" aria-label="${country.country} map">
              <path d="${country.shape}" class="country-shape"></path>
            </svg>
            <div class="country-pins">${pins}</div>
          </div>
        </article>
      `;
    })
    .join("");

  dom.officeMap.innerHTML = `<div class="country-maps">${mapMarkup}</div>`;

  dom.officeList.innerHTML = "";
  incodeksProfile.offices.forEach((office) => {
    const item = document.createElement("div");
    item.className = "office-item";
    item.textContent = office.city;
    dom.officeList.appendChild(item);
  });

  dom.clientChips.innerHTML = "";
  incodeksProfile.clients.forEach((client) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = client;
    dom.clientChips.appendChild(chip);
  });

  dom.industryChips.innerHTML = "";
  incodeksProfile.industries.forEach((industry) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = industry;
    dom.industryChips.appendChild(chip);
  });

  renderBars(dom.capabilityBars, incodeksProfile.capabilities, false);
}

function renderLoop(target, items) {
  target.innerHTML = "";
  items.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    target.appendChild(li);
  });
}

function renderGovernance(region) {
  dom.governanceTiers.innerHTML = "";
  regionData[region].governance.forEach((row, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tier-btn";
    button.setAttribute("aria-expanded", index === 0 ? "true" : "false");

    const contentId = `tier-content-${index}`;
    button.setAttribute("aria-controls", contentId);

    button.innerHTML = `
      <header>
        <span class="tier-title">${row.tier}: ${row.title}</span>
        <span>${row.summary}</span>
      </header>
      <div id="${contentId}" class="tier-content ${index === 0 ? "" : "hidden"}">${row.details}</div>
    `;

    button.addEventListener("click", () => {
      const content = button.querySelector(".tier-content");
      const isHidden = content.classList.contains("hidden");
      content.classList.toggle("hidden", !isHidden);
      button.setAttribute("aria-expanded", String(isHidden));
    });

    dom.governanceTiers.appendChild(button);
  });
}

function setDefaults(region) {
  const defaults = regionData[region].defaults;
  Object.keys(defaults).forEach((key) => {
    dom.roi[key].value = defaults[key];
  });
  syncDerivedRoiInputs();
}

function syncDerivedRoiInputs() {
  const traditionalTeamSize = Math.max(1, Number(dom.roi.traditionalTeamSize.value) || 1);
  dom.roi.podSize.value = traditionalTeamSize;
  dom.roi.podRate.value = POD_RATE_FIXED;
  dom.roi.aiFee.value = traditionalTeamSize * AI_FEE_PER_HEAD;
}

function calculate() {
  syncDerivedRoiInputs();

  const {
    traditionalTeamSize,
    traditionalRate,
    velocityMultiplier,
  } = readInputs();
  const podSize = traditionalTeamSize;
  const podRate = POD_RATE_FIXED;
  const aiFee = podSize * AI_FEE_PER_HEAD;

  const traditionalCost = traditionalTeamSize * traditionalRate * HOURS_PER_MONTH;
  const podCost = podSize * podRate * HOURS_PER_MONTH + aiFee;
  const monthlySavings = traditionalCost - podCost;
  const podEfficiency = podCost / Math.max(velocityMultiplier, 1);

  dom.roi.traditionalCost.textContent = money(traditionalCost);
  dom.roi.podCost.textContent = money(podCost);
  dom.roi.monthlySavings.textContent = money(monthlySavings);
  dom.roi.efficiencyCost.textContent = money(podEfficiency);
  dom.roi.velocityGain.textContent = `${velocityMultiplier.toFixed(1)}x`;
  dom.roi.explainTraditional.textContent =
    `${traditionalTeamSize} x ${money(traditionalRate)} x ${HOURS_PER_MONTH}h = ${money(traditionalCost)}`;
  dom.roi.explainPod.textContent =
    `${podSize} x ${money(POD_RATE_FIXED)} x ${HOURS_PER_MONTH}h + (${podSize} x ${money(AI_FEE_PER_HEAD)}) = ${money(podCost)}`;
  dom.roi.explainSavings.textContent =
    `${money(traditionalCost)} - ${money(podCost)} = ${money(monthlySavings)}`;
  dom.roi.explainEfficiency.textContent =
    `${money(podCost)} / ${velocityMultiplier.toFixed(1)} throughput = ${money(podEfficiency)}`;
  dom.roi.fixedAssumptions.textContent =
    `Fixed assumptions: pod rate is locked at ${money(POD_RATE_FIXED)}/hour and AI platform fee is auto-calculated as ${money(AI_FEE_PER_HEAD)} x pod size. `;

  const metrics = {
    traditionalCost,
    podCost,
    monthlySavings,
    velocityMultiplier,
    podEfficiency,
  };
  renderRoiVisuals(metrics);
  return metrics;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildDeckHtml(region, metrics) {
  const data = regionData[region];
  const slides = [
    {
      title: "Slide 1 - Positioning",
      body: `AI-Augmented Engineering Pods for ${region}: ${data.subtitle}`,
    },
    {
      title: "Slide 2 - Market Signals",
      body: `${data.marketSignals.thesis}\n\n${data.marketSignals.forceOne.title}: ${data.marketSignals.forceOne.body}\n\n${data.marketSignals.forceTwo.title}: ${data.marketSignals.forceTwo.body}\n\nImplication: ${data.marketSignals.implication}`,
    },
    {
      title: "Slide 3 - Buyer Pain",
      body: data.bottlenecks.map((b) => `- ${b.title}: ${b.body}`).join("\n"),
    },
    {
      title: "Slide 4 - Why Hybrid Wins",
      body: data.proofStats.map((p) => `- ${p.stat}: ${p.detail}`).join("\n"),
    },
    {
      title: "Slide 5 - Structural Advantages",
      body: `${structuralMoat.cards
        .map((c) => `- ${c.title}: ${c.body}`)
        .join("\n")}\n\n${data.comparisonRows
        .map((row) => `${row.feature}\n  Traditional: ${row.traditional}\n  Pure AI: ${row.pureAi}\n  Hybrid Pod: ${row.pod}`)
        .join("\n\n")}`,
    },
    {
      title: "Slide 6 - Delivery System",
      body: `${data.executionLoop.map((l, i) => `${i + 1}. ${l}`).join("\n")}\n\n${data.assuranceLoop
        .map((l, i) => `${i + 1}. ${l}`)
        .join("\n")}\n\nOnboarding (2-4 weeks):\n${implementationBlueprint.onboarding
        .map((s, i) => `${i + 1}. ${s}`)
        .join("\n")}\n\nAgent configuration:\n${implementationBlueprint.agentConfig
        .map((s) => `- ${s.title}: ${s.detail}`)
        .join("\n")}`,
    },
    {
      title: "Slide 7 - Delivery Partner: Incodeks",
      body: `${incodeksProfile.lead}\n\nScale and footprint:\n${incodeksProfile.stats
        .map((s) => `- ${s.value} ${s.label}`)
        .join("\n")}\n\nReference clients: ${incodeksProfile.clients.join(", ")}`,
    },
    {
      title: "Slide 8 - Economics",
      body: `Traditional monthly cost: ${money(metrics.traditionalCost, region)}\nPod monthly cost: ${money(metrics.podCost, region)}\nMonthly savings: ${money(metrics.monthlySavings, region)}\nVelocity gain: ${metrics.velocityMultiplier.toFixed(1)}x`,
    },
    {
      title: "Slide 9 - Pilot Offer",
      body:
        "2-4 week evaluation sprint: baseline metrics, configure governance, ship one vertical slice, and report measurable throughput, quality, and risk outcomes.",
    },
  ];

  const slideMarkup = slides
    .map(
      (slide) => `
      <section class="slide">
        <h2>${escapeHtml(slide.title)}</h2>
        <pre>${escapeHtml(slide.body)}</pre>
      </section>
    `,
    )
    .join("\n");

  return `<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title>Pod Value Story Deck - ${region}</title>
<style>
body { margin: 0; font-family: 'Trebuchet MS', sans-serif; background: #f3eee5; color: #18212a; }
.slide { page-break-after: always; min-height: 95vh; padding: 52px; border-bottom: 2px solid #d7cdbc; }
h2 { font-family: Cambria, serif; margin: 0 0 20px; }
pre { white-space: pre-wrap; font-size: 20px; line-height: 1.45; }
</style>
</head>
<body>
${slideMarkup}
</body>
</html>`;
}

function buildBriefHtml(region, metrics) {
  const data = regionData[region];

  return `<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title>Pod One-Page Brief - ${region}</title>
<style>
body { margin: 0; font-family: 'Trebuchet MS', sans-serif; background: #fffef9; color: #1b242d; }
.sheet { width: min(900px, 92vw); margin: 0 auto; padding: 28px; }
h1, h2 { font-family: Cambria, serif; margin: 0; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.box { border: 1px solid #d8ccba; border-radius: 10px; padding: 10px; }
ul { margin: 8px 0 0; }
@media print { .sheet { width: 100%; padding: 16px; } }
</style>
</head>
<body>
  <main class="sheet">
    <h1>AI-Augmented Engineering Pod Brief (${region})</h1>
    <p>${escapeHtml(data.subtitle)}</p>

    <div class="grid">
      <section class="box">
        <h2>Market Signals</h2>
        <ul>
          <li>${escapeHtml(data.marketSignals.forceOne.title)}: ${escapeHtml(data.marketSignals.forceOne.body)}</li>
          <li>${escapeHtml(data.marketSignals.forceTwo.title)}: ${escapeHtml(data.marketSignals.forceTwo.body)}</li>
          <li>Implication: ${escapeHtml(data.marketSignals.implication)}</li>
        </ul>
      </section>
      <section class="box">
        <h2>Economic Snapshot</h2>
        <ul>
          <li>Traditional monthly cost: ${money(metrics.traditionalCost, region)}</li>
          <li>Pod monthly cost: ${money(metrics.podCost, region)}</li>
          <li>Monthly savings: ${money(metrics.monthlySavings, region)}</li>
          <li>Velocity gain: ${metrics.velocityMultiplier.toFixed(1)}x</li>
        </ul>
      </section>
      <section class="box">
        <h2>Model Advantage and Moat</h2>
        <ul>
          ${structuralMoat.cards.map((card) => `<li>${escapeHtml(card.title)}: ${escapeHtml(card.body)}</li>`).join("")}
          ${data.comparisonRows.map((row) => `<li>${escapeHtml(row.feature)}: ${escapeHtml(row.pod)}</li>`).join("")}
        </ul>
      </section>
      <section class="box">
        <h2>Start Offer</h2>
        <p>2-4 week onboarding sprint: access setup, baseline metrics, threat modeling, agent role configuration, then first vertical slice delivery with governance evidence.</p>
      </section>
      <section class="box">
        <h2>Built by Incodeks</h2>
        <ul>
          <li>${escapeHtml(incodeksProfile.lead)}</li>
          <li>Footprint: ${escapeHtml(incodeksProfile.offices.map((o) => o.city).join("; "))}</li>
          <li>Reference clients: ${escapeHtml(incodeksProfile.clients.join(", "))}</li>
        </ul>
      </section>
    </div>
  </main>
</body>
</html>`;
}

function downloadFile(filename, content, mimeType = "text/html") {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderRegion(region) {
  currentRegion = region;
  dom.heroSubtitle.textContent = regionData[region].subtitle;

  document.querySelectorAll(".region-btn").forEach((button) => {
    const isActive = button.dataset.region === region;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  setDefaults(region);
  renderBottlenecks(region);
  renderMarketSignals(region);
  renderLoop(dom.executionLoop, regionData[region].executionLoop);
  renderLoop(dom.assuranceLoop, regionData[region].assuranceLoop);
  renderStructuralMoat();
  renderIncodeksProfile();
  renderImplementationBlueprint(region);
  renderHybridProof(region);
  renderGovernance(region);
  calculate();
}

function setupEvents() {
  document.querySelectorAll(".region-btn").forEach((button) => {
    button.addEventListener("click", () => renderRegion(button.dataset.region));
  });

  dom.roi.traditionalTeamSize.addEventListener("input", () => {
    syncDerivedRoiInputs();
    calculate();
  });

  document.getElementById("roiForm").addEventListener("input", () => {
    calculate();
  });
}

setupEvents();
renderRegion("US");


