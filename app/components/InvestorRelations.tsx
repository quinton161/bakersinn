'use client'

import Link from 'next/link'
import styled from 'styled-components'

type IconName =
  | 'chart'
  | 'users'
  | 'globe'
  | 'document'
  | 'download'
  | 'phone'
  | 'governance'
  | 'briefcase'

type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

type CardItem = {
  title: string
  text: string
  icon: IconName
  href?: string
}

type InvestorRelationsProps = {
  slug?: string[]
}

const navItems: NavItem[] = [
  {
    label: 'About',
    href: '/investor-relations/about',
    children: [
      { label: 'Who we are', href: '/investor-relations/about/who-we-are' },
      { label: 'Our team', href: '/investor-relations/about/our-team' },
      {
        label: 'Frequently asked questions',
        href: '/investor-relations/about/frequently-asked-questions',
      },
      {
        label: 'Investment case',
        href: '/investor-relations/about/investment-case',
      },
    ],
  },
  { label: 'News', href: '/investor-relations/news' },
  {
    label: 'Investor Center',
    href: '/investor-relations/investor-center',
    children: [
      {
        label: 'Share performance',
        href: '/investor-relations/investor-center/share-performance',
      },
      {
        label: 'Financial summary',
        href: '/investor-relations/investor-center/financial-summary',
      },
      {
        label: 'Fundamentals',
        href: '/investor-relations/investor-center/fundamentals',
      },
      {
        label: 'Shareholder analysis',
        href: '/investor-relations/investor-center/shareholder-analysis',
      },
      {
        label: 'Annual reports',
        href: '/investor-relations/investor-center/annual-reports',
      },
    ],
  },
  {
    label: 'Governance',
    href: '/investor-relations/governance',
    children: [
      {
        label: 'Governance summary',
        href: '/investor-relations/governance/governance-summary',
      },
      {
        label: 'Board of directors',
        href: '/investor-relations/governance/board-of-directors',
      },
      { label: 'Committees', href: '/investor-relations/governance/committees' },
    ],
  },
  { label: 'Downloads', href: '/investor-relations/downloads' },
  { label: 'Contact', href: '/investor-relations/contact' },
]

const investmentCards: CardItem[] = [
  {
    title: 'African-Focused',
    text: 'As an African-focused restaurant company, Simbisa serves over 56 million customers across 9 African countries in pursuit of its mission to empower its people to deliver best in class restaurant experiences.',
    icon: 'globe',
    href: '/investor-relations/about/investment-case',
  },
  {
    title: 'Culture',
    text: 'Well-known brands, high levels of service and a loyal customer base reflect an understanding of cultural differences associated with eating out in Africa.',
    icon: 'users',
    href: '/investor-relations/about/investment-case',
  },
  {
    title: 'Diversity',
    text: 'Simbisa owns and operates a portfolio of brands targeting consumers across income categories through Casual, Fine Dining and Quick Service Restaurants.',
    icon: 'briefcase',
    href: '/investor-relations/about/investment-case',
  },
]

const announcements = [
  {
    date: 'May 15, 2026',
    title: 'Simbisa Brands - Trading Update for the Third Quarter ended 31 March 2026',
  },
  {
    date: 'February 26, 2026',
    title: 'Simbisa Brands declares an interim dividend of 0,934 US cents per share',
  },
  {
    date: 'February 26, 2026',
    title: 'Simbisa Brands - Unaudited Abridged Financial Results for the HYE 31 December 2025',
  },
]

const downloads = [
  {
    date: 'May 15, 2026',
    title: 'Simbisa Brands - Trading Update for the Third Quarter ended 31 March 2026',
  },
  {
    date: 'February 26, 2026',
    title: 'Simbisa Brands - Unaudited Abridged Financial Results for the HYE 31 December 2025',
  },
  {
    date: 'November 14, 2025',
    title: 'Simbisa Brands - Trading Update for the First Quarter ended 30 September 2025',
  },
  {
    date: '2025',
    title: 'Simbisa Brands Limited - 2025 Annual Report',
  },
]

const performance = [
  {
    title: 'Revenue',
    label: '(US$)',
    value: '182.8 million',
    previous: 'H1 FY25: 157.5 million',
    growth: '16%',
  },
  {
    title: 'Operating profit before depreciation, amortisation and impairment',
    label: '(US$)',
    value: '31.9 million',
    previous: 'H1 FY25: 25.0 million',
    growth: '27%',
  },
  {
    title: 'Profit before tax',
    label: '(US$)',
    value: '20.4 million',
    previous: 'H1 FY25: 11.6 million',
    growth: '76%',
  },
]

const pageDetails: Record<string, { title: string; intro: string; cards: CardItem[] }> = {
  'about': {
    title: 'About',
    intro: 'Learn who Simbisa Brands is, meet the team, review frequently asked questions and explore the investment case.',
    cards: [
      {
        title: 'Who we are',
        text: 'Simbisa is an African-focused restaurant company serving millions of customers across multiple African countries.',
        icon: 'globe',
        href: '/investor-relations/about/who-we-are',
      },
      {
        title: 'Our team',
        text: 'A strong management team with a track record of building and operating brands across Africa.',
        icon: 'users',
        href: '/investor-relations/about/our-team',
      },
      {
        title: 'FAQ',
        text: 'Frequently asked questions about the company, markets, performance and investor resources.',
        icon: 'document',
        href: '/investor-relations/about/frequently-asked-questions',
      },
      {
        title: 'Investment case',
        text: 'Culturally rich and world-class dining experiences across a diverse portfolio of brands.',
        icon: 'briefcase',
        href: '/investor-relations/about/investment-case',
      },
    ],
  },
  'news': {
    title: 'News',
    intro: 'Stay informed with the most recent Simbisa Brands investor announcements and updates.',
    cards: announcements.map((item) => ({
      title: item.title,
      text: `Published On: ${item.date}`,
      icon: 'document',
      href: '/investor-relations/news',
    })),
  },
  'investor-center': {
    title: 'Investor Center',
    intro: 'Review share performance, financial summaries, fundamentals, shareholder analysis and annual reports.',
    cards: [
      {
        title: 'Share performance',
        text: 'USc 61.16, -4.0800 (-6.25%), End of day: May 22, 2026. Listing: Victoria Falls Stock Exchange.',
        icon: 'chart',
        href: '/investor-relations/investor-center/share-performance',
      },
      {
        title: 'Financial summary',
        text: 'Half Year Ended 31 December 2025 performance highlights and financial summary.',
        icon: 'document',
        href: '/investor-relations/investor-center/financial-summary',
      },
      {
        title: 'Fundamentals',
        text: 'Key company fundamentals and metrics for investor review.',
        icon: 'chart',
        href: '/investor-relations/investor-center/fundamentals',
      },
      {
        title: 'Shareholder analysis',
        text: 'Shareholder analysis information and investor ownership insights.',
        icon: 'users',
        href: '/investor-relations/investor-center/shareholder-analysis',
      },
      {
        title: 'Annual reports',
        text: 'Annual reports and investor documentation downloads.',
        icon: 'download',
        href: '/investor-relations/investor-center/annual-reports',
      },
    ],
  },
  'governance': {
    title: 'Governance',
    intro: 'Governance summary, board of directors and committee information for Simbisa Brands Limited.',
    cards: [
      {
        title: 'Governance summary',
        text: 'A summary of governance structures and accountability.',
        icon: 'governance',
        href: '/investor-relations/governance/governance-summary',
      },
      {
        title: 'Board of directors',
        text: 'Board leadership and oversight for Simbisa Brands Limited.',
        icon: 'users',
        href: '/investor-relations/governance/board-of-directors',
      },
      {
        title: 'Committees',
        text: 'Governance committees and areas of responsibility.',
        icon: 'briefcase',
        href: '/investor-relations/governance/committees',
      },
    ],
  },
  'downloads': {
    title: 'Downloads',
    intro: 'Latest investor downloads, reports, financial results and trading updates.',
    cards: downloads.map((item) => ({
      title: item.title,
      text: `Published On: ${item.date}`,
      icon: 'download',
      href: '/investor-relations/downloads',
    })),
  },
  'contact': {
    title: 'Contact',
    intro: 'Contact details for Simbisa Brands Limited and the transfer secretary.',
    cards: [
      {
        title: 'Simbisa Brands Limited',
        text: 'Edward Building, Corner 1st Street & Nelson Mandela Avenue, Harare, Zimbabwe. +263 242 744 202',
        icon: 'phone',
      },
      {
        title: 'Corpserve Registrars (Pvt) Ltd',
        text: '2nd Floor, ZB Centre, Cnr 1st and Kwame Nkrumah Avenue, P. O Box 2208, Harare, Zimbabwe. +263 242 758193, 750711/2',
        icon: 'phone',
      },
    ],
  },
}

const subPageCopy: Record<string, { title: string; intro: string; body: string }> = {
  'about/who-we-are': {
    title: 'Who we are',
    intro: 'African-focused restaurant company serving over 56 million customers across 9 African countries.',
    body: 'Simbisa Brands operates a portfolio of restaurant brands targeting consumers across income categories and restaurant formats.',
  },
  'about/our-team': {
    title: 'Our team',
    intro: 'A leadership team with deep operational knowledge of African restaurant markets.',
    body: 'The team supports brands, customer service, strategic locations, cost discipline and supplier engagement across the group.',
  },
  'about/frequently-asked-questions': {
    title: 'Frequently asked questions',
    intro: 'Common investor questions about Simbisa Brands, markets and investor resources.',
    body: 'This page is ready for detailed FAQs about the Victoria Falls Stock Exchange listing, reports, dividends and shareholder information.',
  },
  'about/investment-case': {
    title: 'Investment case',
    intro: 'Investing in culturally rich and world-class dining experiences.',
    body: 'The investment case is anchored by an African-focused footprint, cultural understanding and diversity across restaurant formats and income categories.',
  },
  'investor-center/share-performance': {
    title: 'Share performance',
    intro: 'USc 61.16, -4.0800 (-6.25%), End of day: May 22, 2026.',
    body: 'Listing: Victoria Falls Stock Exchange. Share performance information is presented from the Investor Relations page.',
  },
  'investor-center/financial-summary': {
    title: 'Financial summary',
    intro: 'Half Year Ended 31 December 2025 financial summary.',
    body: 'Revenue grew by 16%, operating profit before depreciation, amortisation and impairment grew by 27%, and profit before tax grew by 76%.',
  },
  'investor-center/fundamentals': {
    title: 'Fundamentals',
    intro: 'Key fundamentals for investors reviewing Simbisa Brands Limited.',
    body: 'The group focuses on resilient, sustainable and customer-centric growth supported by restaurant volumes, spend and operational discipline.',
  },
  'investor-center/shareholder-analysis': {
    title: 'Shareholder analysis',
    intro: 'Shareholder analysis resources for investors.',
    body: 'This page is structured for ownership, investor categories and shareholder information.',
  },
  'investor-center/annual-reports': {
    title: 'Annual reports',
    intro: 'Annual reports and downloadable investor resources.',
    body: 'Includes Simbisa Brands Limited - 2025 Annual Report and related investor documentation.',
  },
  'governance/governance-summary': {
    title: 'Governance summary',
    intro: 'A summary of governance standards and accountability.',
    body: 'Governance supports board oversight, committees, transparency and investor confidence.',
  },
  'governance/board-of-directors': {
    title: 'Board of directors',
    intro: 'Board leadership and strategic oversight.',
    body: 'This page is ready for board member profiles, roles and governance details.',
  },
  'governance/committees': {
    title: 'Committees',
    intro: 'Board committees and delegated responsibilities.',
    body: 'This page is structured for committee names, members and mandates.',
  },
}

const Shell = styled.div`
  --ir-blue: #0b2344;
  --ir-navy: #07162b;
  --ir-gold: #d5a94d;
  --ir-soft: #f5f7fb;
  --ir-ink: #1d2838;

  background: #fff;
  color: var(--ir-ink);
  font-family: 'Open Sans Simbisa', Arial, sans-serif;
`

const Hero = styled.section`
  background:
    radial-gradient(circle at 88% 12%, rgba(213, 169, 77, 0.25), transparent 28%),
    linear-gradient(135deg, var(--ir-navy), var(--ir-blue));
  color: #fff;
  padding: 72px 0 58px;
`

const Container = styled.div`
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
`

const Eyebrow = styled.p`
  color: var(--ir-gold);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.18em;
  margin-bottom: 18px;
  text-transform: uppercase;
`

const Title = styled.h1`
  font-family: 'Ronnia', Arial, sans-serif;
  font-size: clamp(48px, 8vw, 92px);
  font-weight: 300;
  line-height: 0.96;
  margin-bottom: 20px;
`

const Intro = styled.p`
  color: rgba(255, 255, 255, 0.82);
  font-size: 17px;
  line-height: 1.75;
  max-width: 780px;
`

const IrNav = styled.nav`
  background: #fff;
  border-bottom: 1px solid #e3e8f0;
  position: sticky;
  top: 58px;
  z-index: 20;
`

const IrNavInner = styled(Container)`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 14px 0;

  a {
    border: 1px solid #dbe2ec;
    border-radius: 999px;
    color: var(--ir-blue);
    flex: 0 0 auto;
    font-size: 13px;
    font-weight: 800;
    padding: 9px 16px;
    text-decoration: none;
  }

  a:hover {
    background: var(--ir-blue);
    border-color: var(--ir-blue);
    color: #fff;
  }
`

const Section = styled.section`
  padding: 64px 0;
`

const LightSection = styled(Section)`
  background: var(--ir-soft);
`

const SectionHeader = styled.div`
  margin-bottom: 30px;

  h2 {
    color: var(--ir-blue);
    font-family: 'Ronnia', Arial, sans-serif;
    font-size: clamp(32px, 5vw, 58px);
    font-weight: 300;
    line-height: 1;
    margin-bottom: 12px;
  }

  p {
    color: #5d6a7b;
    line-height: 1.7;
    max-width: 760px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
`

const Card = styled.article`
  background: #fff;
  border: 1px solid #e1e7f0;
  border-radius: 18px;
  box-shadow: 0 18px 38px rgba(7, 22, 43, 0.07);
  padding: 26px;

  h3 {
    color: var(--ir-blue);
    font-family: 'Ronnia', Arial, sans-serif;
    font-size: 25px;
    line-height: 1.08;
    margin: 16px 0 10px;
  }

  p {
    color: #5d6a7b;
    font-size: 14px;
    line-height: 1.7;
  }

  a {
    color: var(--ir-blue);
    display: inline-flex;
    font-size: 13px;
    font-weight: 800;
    margin-top: 16px;
    text-decoration: none;
  }
`

const IconBadge = styled.div`
  align-items: center;
  background: rgba(213, 169, 77, 0.16);
  border-radius: 999px;
  color: var(--ir-blue);
  display: inline-flex;
  height: 46px;
  justify-content: center;
  width: 46px;

  svg {
    height: 22px;
    width: 22px;
  }
`

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`

const Metric = styled.article`
  background: var(--ir-blue);
  border-radius: 18px;
  color: #fff;
  padding: 28px;

  span {
    color: var(--ir-gold);
    display: block;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  h3 {
    font-family: 'Ronnia', Arial, sans-serif;
    font-size: 38px;
    font-weight: 300;
    margin-bottom: 8px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    line-height: 1.6;
  }
`

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const LinkList = styled.div`
  display: grid;
  gap: 12px;

  a {
    align-items: center;
    background: #fff;
    border: 1px solid #e1e7f0;
    border-radius: 14px;
    color: var(--ir-blue);
    display: flex;
    font-weight: 800;
    justify-content: space-between;
    padding: 16px 18px;
    text-decoration: none;
  }
`

const FooterNote = styled.div`
  background: var(--ir-navy);
  color: rgba(255, 255, 255, 0.78);
  padding: 28px 0;

  p {
    font-size: 13px;
    line-height: 1.7;
  }
`

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    chart: 'M4 19V5m0 14h16M8 16v-5m4 5V8m4 8v-7',
    users: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 19a5 5 0 0 1 10 0m1.5 0a4 4 0 0 1 6.5-3.1',
    globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-8-9h16M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
    document: 'M7 3h7l4 4v14H7V3Zm7 0v5h5M9 12h6M9 16h6',
    download: 'M12 3v11m0 0 4-4m-4 4-4-4M5 19h14',
    phone: 'M6 4h4l1 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 1v4a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2Z',
    governance: 'M12 3 4 7l8 4 8-4-8-4Zm-6 8v7m6-7v7m6-7v7M4 21h16',
    briefcase: 'M9 7V5h6v2m-10 0h14v12H5V7Zm0 5h14',
  }

  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d={paths[name]} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconBadge>
  )
}

function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <Grid>
      {items.map((item) => (
        <Card key={item.title}>
          <Icon name={item.icon} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.href && <Link href={item.href}>Learn more</Link>}
        </Card>
      ))}
    </Grid>
  )
}

function getPage(slug?: string[]) {
  if (!slug || slug.length === 0) {
    return undefined
  }

  const key = slug.join('/')
  const top = slug[0]
  return subPageCopy[key] || pageDetails[key] || pageDetails[top]
}

export default function InvestorRelations({ slug }: InvestorRelationsProps) {
  const page = getPage(slug)
  const isHome = !slug || slug.length === 0

  return (
    <Shell>
      <Hero>
        <Container>
          <Eyebrow>Simbisa Brands Investor Relations</Eyebrow>
          <Title>{page?.title || 'Half Year Ended 31 December 2025'}</Title>
          <Intro>
            {page?.intro ||
              'The Group delivered 16% revenue growth in H1 FY2026 compared to the prior year, underpinned by a 10% increase in customer volumes and a 6% improvement in real average spend.'}
          </Intro>
        </Container>
      </Hero>

      <IrNav>
        <IrNavInner>
          <Link href="/investor-relations">IR Home</Link>
          {navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </IrNavInner>
      </IrNav>

      {isHome ? (
        <>
          <Section>
            <Container>
              <Split>
                <Card>
                  <Icon name="chart" />
                  <h3>Share performance</h3>
                  <p>
                    USc 61.16, -4.0800 (-6.25%). End of day: May 22, 2026.
                    Listing: Victoria Falls Stock Exchange.
                  </p>
                  <Link href="/investor-relations/investor-center/share-performance">
                    View share performance
                  </Link>
                </Card>
                <Card>
                  <Icon name="document" />
                  <h3>Featured reports</h3>
                  <p>
                    Simbisa Brands Limited - 2025 Annual Report and interim
                    dividend announcement.
                  </p>
                  <Link href="/investor-relations/downloads">View downloads</Link>
                </Card>
              </Split>
            </Container>
          </Section>

          <LightSection>
            <Container>
              <SectionHeader>
                <h2>Why invest in Simbisa Brands?</h2>
                <p>Investing in culturally rich and world-class dining experiences.</p>
              </SectionHeader>
              <CardGrid items={investmentCards} />
            </Container>
          </LightSection>

          <Section>
            <Container>
              <SectionHeader>
                <h2>Latest Investor Announcements</h2>
                <p>Stay informed with the most recent updates.</p>
              </SectionHeader>
              <CardGrid items={pageDetails.news.cards} />
            </Container>
          </Section>

          <LightSection>
            <Container>
              <SectionHeader>
                <h2>Performance Highlights</h2>
                <p>Half Year Ended 31 December 2025.</p>
              </SectionHeader>
              <Metrics>
                {performance.map((item) => (
                  <Metric key={item.title}>
                    <span>
                      {item.title} {item.label}
                    </span>
                    <h3>{item.value}</h3>
                    <p>
                      {item.previous}
                      <br />
                      Growth: {item.growth}
                    </p>
                  </Metric>
                ))}
              </Metrics>
            </Container>
          </LightSection>

          <Section>
            <Container>
              <SectionHeader>
                <h2>Latest downloads</h2>
                <p>Financial results, trading updates and reports.</p>
              </SectionHeader>
              <CardGrid items={pageDetails.downloads.cards} />
            </Container>
          </Section>
        </>
      ) : (
        <Section>
          <Container>
            {'cards' in page! ? (
              <CardGrid items={page!.cards} />
            ) : (
              <Card>
                <Icon name="document" />
                <h3>{page!.title}</h3>
                <p>{page!.body}</p>
              </Card>
            )}
          </Container>
        </Section>
      )}

      <LightSection>
        <Container>
          <SectionHeader>
            <h2>All Investor Relations links</h2>
            <p>Every main and submenu link from the Investor Relations site is represented here.</p>
          </SectionHeader>
          <Grid>
            {navItems.map((group) => (
              <Card key={group.label}>
                <Icon name={group.label === 'Governance' ? 'governance' : 'document'} />
                <h3>{group.label}</h3>
                <LinkList>
                  <Link href={group.href}>{group.label}</Link>
                  {group.children?.map((child) => (
                    <Link href={child.href} key={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </LinkList>
              </Card>
            ))}
          </Grid>
        </Container>
      </LightSection>

      <Section>
        <Container>
          <SectionHeader>
            <h2>Contact Info</h2>
            <p>Investor contact information and transfer secretary details.</p>
          </SectionHeader>
          <CardGrid items={pageDetails.contact.cards} />
        </Container>
      </Section>

      <FooterNote>
        <Container>
          <p>
            +263 242 744 202 | Copyright 2026 Simbisa Brands Limited | All
            Rights Reserved | Privacy | Terms & Conditions | Powered by
            AfricanFinancials Investor Relations
          </p>
        </Container>
      </FooterNote>
    </Shell>
  )
}
