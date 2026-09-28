const buttons = document.querySelectorAll('.role');
const cards = document.querySelectorAll('.project-card');
const projectCounter = document.querySelector('.section-heading .mono');

const updateProjectCounter = () => {
  if (!projectCounter) return;

  const visibleCards = Array.from(cards).filter(card => !card.classList.contains('hidden'));
  const count = visibleCards.length;
  projectCounter.textContent = `01 — ${String(count).padStart(2, '0')}`;
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    cards.forEach(card => {
      const tags = card.dataset.tags.split(' ');
      card.classList.toggle('hidden', filter !== 'all' && !tags.includes(filter));
    });

    updateProjectCounter();
  });
});

updateProjectCounter();

const projectDetails = [
  {
    slug: 'booking-reviews-scraper-webui',
    category: 'Data / automation',
    year: '2025',
    title: 'Booking Reviews Scraper Web UI',
    summary: 'A Python tool for scraping and analyzing hotel reviews from Booking.com through a Streamlit interface built for technical and non-technical users.',
    description: 'This project combines an automated scraper with a dashboard for exploring filtered review data, summarizing hotel statistics, and exporting results for reporting. It focuses on practical review analysis rather than just raw extraction, giving users a faster way to inspect quality signals across multiple hotels.',
    technologies: ['Python', 'Streamlit', 'HTTPX', 'BeautifulSoup', 'SQLAlchemy', 'SQLite', 'Pandas', 'Plotly'],
    challenge: 'Booking.com review data is spread across multiple pages, filters, and hotel-specific contexts, so the project needed a reliable fetch pipeline plus a clear interface for browsing and analyzing large review volumes.',
    problemSolved: 'The app makes hotel review collection and analysis repeatable by automating scraping, normalizing the data, and delivering dashboard-style tools for filtering, summarizing, and exporting results.',
    links: [
      { label: 'Project preview', href: 'https://github.com/b-dev-25/Booking_reviews_scraper_webui', isExternal: true }
    ],
    screenshots: []
  },
  {
    slug: 'khamsat-jobs',
    category: 'Data / automation',
    year: '2025',
    title: 'Khamsat Jobs',
    summary: 'A jobs scraping and storage system built around Khamsat data collection, duplicate filtering, and a searchable web interface for browsing opportunities.',
    description: 'The project focuses on collecting job listings from Khamsat, parsing them into usable records, and exposing the results in a web application for review. It is designed to reduce the manual work of finding, storing, and filtering job offers from a large marketplace feed.',
    technologies: ['Python', 'HTTPX', 'BeautifulSoup', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'Scraping'],
    challenge: 'The listing source is dynamic and heavily structured around community posts, so the project needed a custom extraction layer plus duplicate handling to avoid stale or repeated job entries.',
    problemSolved: 'The solution automates collection, filters out existing records, and provides a searchable job board that helps users work with the dataset without manual cleanup.',
    links: [
    ],
    screenshots: []
  },
  {
    slug: 'tele-fetcher',
    category: 'Data / automation',
    year: '2024',
    title: 'Tele Fetcher',
    summary: 'A Telegram monitoring script that scans selected channels and user accounts for job keywords and forwards matching messages to the user.',
    description: 'This project automates the process of monitoring Telegram sources for relevant hiring posts. It reads target accounts from a config list, checks recent messages, filters by keywords, and forwards the results to the user account with a small delay to avoid spam-like behavior.',
    technologies: ['Python', 'Telethon', 'Asyncio', 'Telegram API', 'Message filtering', 'Automation'],
    challenge: 'The script had to handle authentication, access permissions, message fetching, keyword matching, and rate-limited sending while keeping the workflow predictable and safe for a real Telegram account.',
    problemSolved: 'It turns a manual, time-consuming monitoring task into an automated job alert pipeline that surfaces only relevant vacancies from targeted Telegram sources.',
    links: [
      { label: 'Project preview', href: 'https://youtu.be/VCsHtocGuRM?si=zjCh7f1R0VbOHGyy', isExternal: true }
    ],
    screenshots: []
  },
  {
    slug: 'ielts-simulator',
    category: 'Web / learning',
    year: '2026',
    title: 'IELTS Simulator',
    summary: 'A Django-based IELTS exam platform for practicing listening, reading, writing, and speaking tasks with question banks, scoring, and admin tooling.',
    description: 'The project is a full exam simulation system built to support IELTS-style practice with modular question sets, source materials, scoring flows, and admin management. It blends structured educational content with a usable learning workflow so learners can complete tests and track progress inside a single application.',
    technologies: ['Django', 'Python', 'SQLite', 'Tailwind', 'User auth', 'Question models', 'Admin dashboard'],
    challenge: 'The project needed to model IELTS-style content accurately across multiple modules while supporting authentication, media resources, question grouping, and admin-led management without breaking the learning flow.',
    problemSolved: 'It creates a consistent exam environment for students and administrators, reducing manual handling of questions and making practice sessions more organized and scalable.',
    links: [
      
    ],
    screenshots: []
  },
  {
    slug: 'dfs-multi-optimizers',
    category: 'Data / optimization',
    year: '2025',
    title: 'DFS Multi Optimizers',
    summary: 'A Streamlit app for generating optimized DraftKings fantasy sports lineups across MLB, NBA, and NFL using uploaded player data and configurable constraints.',
    description: 'This project turns raw DraftKings data into usable lineup recommendations using optimization logic. Users upload an Excel file, choose the sport, tune constraints such as salary cap, lineup diversity, team stacking, and player exclusions, and then generate optimized lineups for contest entry.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'PuLP', 'Excel parsing', 'Optimization', 'Fantasy sports'],
    challenge: 'The biggest challenge was balancing contest constraints and sport-specific strategies while keeping the workflow simple enough for real-world use with uploaded DraftKings files and multiple sport rulesets.',
    problemSolved: 'The app simplifies lineup building for everyday fantasy decisions by combining data parsing, optimization, and export workflows into one interface, reducing the manual complexity of building competitive lineups.',
    links: [
      { label: 'Project preview', href: 'https://github.com/b-dev-25/DFS_multi_optimizers', isExternal: false }
    ],
    screenshots: []
  },
  {
    slug: 'sabeel-redesign',
    category: 'UI / UX',
    year: '2023',
    title: 'Sabeel Redesign',
    summary: 'A full mobile app redesign focused on increasing clarity, usability, and product trust through a more refined interface system and consistent user flows.',
    description: 'This project is a complete mobile UX redesign for Sabeel, centered on simplifying the experience across key journeys and making the product feel more premium, easier to navigate, and easier to understand. The work focuses on hierarchy, layout clarity, interaction consistency, and a more polished visual language across the app.',
    technologies: ['Figma', 'Mobile UX', 'UI Design', 'Design system', 'Wireframes', 'User flows', 'Prototyping'],
    challenge: 'The primary challenge was restructuring a dense app experience into a clearer mobile interface without losing the product’s purpose or key functionality. It needed a stronger visual hierarchy, smoother navigation patterns, and more intuitive product storytelling.',
    problemSolved: 'The redesign creates a more coherent and trustworthy mobile experience by improving content structure, reinforcing important actions, and giving the app a cleaner, more conversion-friendly interface that better supports users from first view to task completion.',
    links: [
      { label: 'Figma prototype', href: 'https://www.figma.com/design/XpSrJN8pAjqYfxjH4MSC9W/Sabeel--Copy-?node-id=0-1&t=G8o8LuQL9XjRtVJT-1', isExternal: true }
    ],
    screenshots: []
  },
  {
    slug: 'kanaba-furniture-app',
    category: 'UI / UX',
    year: '2024',
    title: 'Kanaba Furniture App',
    summary: 'A furniture shopping app concept created from scratch to make product discovery, browsing, and purchase decisions feel more modern and intuitive on mobile.',
    description: 'This project was built as a full mobile product concept from the ground up, focusing on how users explore furniture collections, compare options, and move from inspiration to products they can confidently buy. The goal was to create a comfortable, premium shopping experience that feels more human and less cluttered than a standard marketplace flow.',
    technologies: ['Figma', 'Mobile UX', 'UI Design', 'App flows', 'Design system', 'Prototyping', 'E-commerce UX'],
    challenge: 'Furniture shopping is highly visual and often decision-heavy, so the app needed to help users browse large catalogs, understand product style, and feel confident choosing items without overwhelming them with noise or confusing layouts.',
    problemSolved: 'The design creates a cleaner, more guided product journey by improving discovery, making collections feel easier to navigate, and reinforcing trust through a more polished mobile shopping experience.',
    links: [
      { label: 'Figma prototype', href: 'https://www.figma.com/design/ohJlmcnwkR2VdBaTTSs8U3/Kanaba---furniture-store-app?node-id=231-7716&t=n2l1If2Owt6jh6jf-1', isExternal: true }
      
    ],
    screenshots: []
  },
  {
    slug: 'frontend-experiments',
    category: 'Frontend',
    year: '2022',
    title: 'Frontend Experiments',
    summary: 'A collection of smaller interface challenges focused on responsive layouts, reusable UI patterns, and polished frontend implementation.',
    description: 'This portfolio section groups together the Frontend Mentor challenge work and the Kanban challenge to represent a continuous practice stream in UI implementation, spacing systems, and responsive design. Each experiment reinforces a different interaction or layout pattern while keeping a consistent visual language.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive design', 'Component thinking', 'UI polish'],
    challenge: 'The goal was to build a broad set of frontend exercises quickly while refining layout balance, accessibility, and interaction quality across different design systems and challenge levels.',
    problemSolved: 'The collection improves frontend consistency and practical problem-solving by turning small design challenges into repeatable patterns that support more confident implementation across future client and portfolio work.',
    collection: [
      'Kanban',
      'Article Preview Component',
      'Bento Grid',
      'Blog Preview Card',
      'Four Card Feature',
      'Meet Landing Page',
      'Newsletter Sign-Up Form',
      'Password Generator App',
      'Product Preview Card',
      'QR Code Challenge',
      'Recipe Page',
      'Results Summary Component',
      'Social Links Profile',
      'Testimonials Grid',
      'Time Tracking Dashboard',
      'Tip Calculator'
    ],
    links: [{ label: 'Preview', href: 'https://www.frontendmentor.io/profile/Basselfathy', isExternal: true }],
    screenshots: []
  }
];

const modal = document.querySelector('#project-modal');
const modalContent = document.querySelector('#project-modal-content');
const modalCloseButton = document.querySelector('.project-modal__close');

const renderProjectDetails = (project) => {
  const techMarkup = project.technologies.map(technology => `<span>${technology}</span>`).join('');
  const linksMarkup = project.links.map(link => `<a href="${link.href}" ${link.isExternal ? 'target="_blank" rel="noreferrer"' : ''}>${link.label} →</a>`).join('');
  const screenshotsMarkup = project.screenshots && project.screenshots.length
    ? project.screenshots.map(() => '<div class="media-placeholder">Preview</div>').join('')
    : '<div class="media-placeholder">No screenshots yet</div>';

  const collectionMarkup = project.collection && project.collection.length
    ? `<div class="detail-block">
        <h4>Included challenges</h4>
        <ul class="project-detail__list">
          ${project.collection.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>`
    : '';

  return `
    <article class="project-detail-card">
      <div class="project-detail__top">
        <span class="project-detail__badge">${project.category}</span>
        <span class="project-detail__meta">${project.year}</span>
      </div>

      <div class="project-detail__grid">
        <div class="project-detail__main">
          <h3 id="project-modal-title">${project.title}</h3>
          <p class="project-detail__summary">${project.summary}</p>
          <p class="project-detail__summary">${project.description}</p>

          <div class="project-detail__tech">${techMarkup}</div>
          <div class="project-detail__links">${linksMarkup}</div>
        </div>

        <div class="project-detail__aside">
          <div class="detail-block">
            <h4>Challenges</h4>
            <p>${project.challenge}</p>
          </div>

          <div class="detail-block">
            <h4>What it solves</h4>
            <p>${project.problemSolved}</p>
          </div>

          ${collectionMarkup}

          <div class="detail-block detail-block--media">
            <h4>Links / screenshots</h4>
            <div class="media-grid">${screenshotsMarkup}</div>
          </div>
        </div>
      </div>
    </article>
  `;
};

const setProjectModalState = (isOpen, project = null) => {
  if (!modal) return;
  modal.classList.toggle('is-open', isOpen);
  modal.setAttribute('aria-hidden', String(!isOpen));

  if (isOpen && project) {
    modalContent.innerHTML = renderProjectDetails(project);
  }
};

const openProjectModal = (slug) => {
  const selectedProject = projectDetails.find(project => project.slug === slug);
  if (selectedProject) {
    setProjectModalState(true, selectedProject);
  }
};

const closeProjectModal = () => setProjectModalState(false);

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', closeProjectModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeProjectModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && modal.classList.contains('is-open')) {
    closeProjectModal();
  }
});

cards.forEach(card => {
  const slug = card.dataset.project;

  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      event.preventDefault();
    }
    openProjectModal(slug);
  });
});

cards.forEach(card => {
  const link = card.querySelector('a');
  if (link) {
    link.setAttribute('href', '#');
  }
});
