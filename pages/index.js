
// EVRIFA COMPLETE WEBSITE STARTER
// Stack: Next.js + Tailwind + Sanity CMS (editable) + Vercel hosting
// Estimated hosting cost: $0–$20/month
// CMS cost: free
// This file represents the main layout + homepage and the structure
// for all site pages.

// -------------------------------------------------
// SITE STRUCTURE
// -------------------------------------------------

/*
Pages included in this starter:

/ (Homepage)
/about
/sites
/sites/[site]
/governance
/documents
/news
/news/[post]
/the-common-ground
/the-common-ground/[post]
/contact

Content to transfer from the current Squarespace site:

Homepage mission/overview content
About
Schedule / Meetings
Agendas and Minutes archive
Board of Directors
Documents library
Kings Creek Commerce Center
Contact page and staff details
Member Localities logos/content
Existing PDFs, budgets, audits, annual reports, and linked governance files

Recommended migration structure in the new CMS:

Homepage
About Page
Meetings Archive
Board Directory
Document Library
Kings Creek Commerce Center Page
Contact Page
Common Ground Archive

Editable content will come from the CMS.

CMS collections:

Sites
Documents
News
Common Ground Articles
Board Members
Meetings
Pages
Member Localities

Migration note:

All existing public pages, text, files, PDFs, meeting records, board information, and contact details from the current site should be imported into the CMS before launch so nothing is lost.

*/

// -------------------------------------------------
// SHARED COMPONENTS
// -------------------------------------------------

function Header({ nav }) {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <div className="flex items-center gap-4">
          <img src="/logo.png" className="h-10" />

          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-[#1f57a4]">EVRIFA</div>
            <div className="text-sm text-slate-600">Eastern Virginia Regional Industrial Facility Authority</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-7 text-sm">
          {nav.map((item) => (
            <a key={item.label} href={item.link} className="hover:text-[#1f57a4]">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="bg-[#1f57a4] text-white px-4 py-2 rounded-full text-sm">
          Start a Project
        </a>

      </div>
    </header>
  );
}


function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        <div>
          <img src="/logo.png" className="h-10 mb-4" />
          <p className="text-white/70 text-sm">
            The Eastern Virginia Regional Industrial Facility Authority works with regional partners to develop industrial sites and attract investment.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>

          <div className="space-y-2 text-sm text-white/70">
            <a href="/about">About</a>
            <a href="/sites">Industrial Sites</a>
            <a href="/governance">Governance</a>
            <a href="/documents">Documents</a>
            <a href="/news">News</a>
            <a href="/the-common-ground">The Common Ground</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-sm text-white/70">
            Eastern Virginia Regional Industrial Facility Authority
          </p>

          <a href="/contact" className="inline-block mt-4 bg-white text-[#1f57a4] px-4 py-2 rounded-full">
            Contact EVRIFA
          </a>
        </div>

      </div>

    </footer>
  );
}


// -------------------------------------------------
// HOMEPAGE
// -------------------------------------------------

export default function Home() {

  const nav = [
    { label: "About", link: "/about" },
    { label: "Sites", link: "/sites" },
    { label: "Governance", link: "/governance" },
    { label: "Documents", link: "/documents" },
    { label: "News", link: "/news" },
    { label: "The Common Ground", link: "/the-common-ground" },
    { label: "Contact", link: "/contact" },
  ];

  const stats = [
    { value: "5", label: "Industrial Sites" },
    { value: "6", label: "Member Localities" },
    { value: "24/7", label: "Project Support" },
    { value: "100%", label: "Transparency" },
  ];

  return (

    <div className="bg-[#eef2f7] min-h-screen">

      <Header nav={nav} />

      {/* HERO */}

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-20">

        <div>

          <div className="uppercase text-xs tracking-widest text-[#1f57a4] font-semibold">
            Regional Economic Development
          </div>

          <h1 className="text-5xl font-black mt-3 leading-tight">
            Industrial development in Eastern Virginia.
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            EVRIFA partners with regional localities to develop strategic industrial sites and support major investment across Eastern Virginia.
          </p>

          <div className="flex gap-4 mt-8">

            <a href="/sites" className="bg-[#1f57a4] text-white px-6 py-3 rounded-full">
              Explore Industrial Sites
            </a>

            <a href="/governance" className="border border-slate-300 px-6 py-3 rounded-full">
              Governance
            </a>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            {stats.map((stat) => (

              <div key={stat.label} className="bg-white rounded-2xl p-4 shadow">

                <div className="text-3xl font-bold text-[#1f57a4]">
                  {stat.value}
                </div>

                <div className="text-sm text-slate-600">
                  {stat.label}
                </div>

              </div>

            ))}

          </div>

        </div>


        <div className="rounded-3xl bg-gradient-to-br from-[#1f57a4] to-[#2f83c5] text-white p-8">

          <div className="uppercase text-xs tracking-widest text-white/70">
            Featured Development Site
          </div>

          <h2 className="text-3xl font-bold mt-3">
            Franklin Industrial Megasite
          </h2>

          <p className="mt-4 text-white/80">
            Strategic industrial megasite with rail, highway access, and utility capacity for advanced manufacturing investment.
          </p>

        </div>

      </section>


      {/* FEATURE MODULES */}

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">

        {[
          {
            title: "Industrial Sites",
            text: "Explore EVRIFA's portfolio of industrial development sites.",
            link: "/sites"
          },

          {
            title: "Governance Center",
            text: "Board members, meetings, policies, and public records.",
            link: "/governance"
          },

          {
            title: "Public Documents",
            text: "Access procurement, reports, bylaws, and official notices.",
            link: "/documents"
          },

          {
            title: "News & Announcements",
            text: "Updates and announcements from EVRIFA.",
            link: "/news"
          },

          {
            title: "The Common Ground",
            text: "A dedicated newsletter archive where each newsletter article is saved as an individual, searchable post.",
            link: "/the-common-ground"
          }

        ].map((card) => (

          <a key={card.title} href={card.link} className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">

            <h3 className="text-2xl font-bold">{card.title}</h3>

            <p className="mt-3 text-slate-600">{card.text}</p>

          </a>

        ))}

      </section>


      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-[#1f57a4] to-[#2f83c5] rounded-3xl p-12 text-white">

          <h2 className="text-4xl font-bold">
            Start an Industrial Development Conversation
          </h2>

          <p className="mt-4 text-white/80">
            Contact EVRIFA to discuss regional development opportunities.
          </p>

          <a href="/contact" className="inline-block mt-6 bg-white text-[#1f57a4] px-6 py-3 rounded-full">
            Contact EVRIFA
          </a>

        </div>

      </section>


      <Footer />

    </div>
  );
}


// -------------------------------------------------
// CMS CONTENT TYPES (SANITY)
// -------------------------------------------------

/*

SITE

Title
Slug
Description
Acreage
County
Utilities
Rail Access
Images
Documents

DOCUMENT

Title
Category
File
Date

NEWS

Title
Body
Date
Featured Image

PAGE

Title
Slug
Hero Title
Hero Intro
Body Sections
Featured Links

MEMBER LOCALITY

Name
Logo
Description
Website URL

BOARD MEMBER

Name
Role
Photo
Bio

MEETING

Title
Meeting Type
Date
Time
Location
Agenda File
Minutes File
Packet File
Related Documents

COMMON GROUND ARTICLE

Title
Slug
Publish Date
Author
Excerpt
Body
Featured Image
Category
Related Files
Newsletter Issue

Each Common Ground article should publish as its own post page so newsletters become a long-term searchable archive instead of a single PDF dump.

*/


// -------------------------------------------------
// DEPLOYMENT (VERY SIMPLE)
// -------------------------------------------------

/*

1. Create GitHub account

2. Upload this project

3. Go to vercel.com

4. Click "Import Project"

5. Select repository

6. Deploy


DOMAIN

Squarespace → Domain Settings

Change DNS → point to Vercel


EDIT CONTENT

Login to CMS dashboard

Add or update:

Sites
Documents
News
Common Ground Articles
Board Members
Meetings
Member Localities

MIGRATION CHECKLIST

1. Export/copy homepage, about, meetings, agendas/minutes, board, documents, Kings Creek Commerce Center, and contact content
2. Download every linked PDF and governance file from the current site
3. Import board members and executive committee information
4. Import meeting schedule history and future meetings
5. Import agendas, minutes, packets, budgets, audits, annual reports, and financial statements
6. Import contact information and member localities
7. Rebuild Kings Creek Commerce Center as a proper editable site page
8. Create The Common Ground archive and load each article as an individual post
9. Confirm every old URL has a matching new page or a redirect
10. QA every public page before switching DNS from Squarespace

LAUNCH PACKAGE YOU NEED

1. Logo files
2. Current PDFs and governance files
3. Photos of sites / regional imagery
4. Staff-approved copy for homepage and about page
5. First batch of Common Ground articles
6. Access to Squarespace domain settings for DNS change
7. GitHub account
8. Vercel account
9. Sanity account

TOTAL MONTHLY COST

Hosting: $0–20
CMS: free
Domain: already owned

*/
