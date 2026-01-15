'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  ExternalLink,
  Phone,
  Building2,
  MapPin,
  ArrowRight,
  ShoppingCart,
  Bell,
  User,
  ChevronDown,
  Menu,
} from 'lucide-react';

// ============================================================================
// DATA
// ============================================================================

const legalEntities = [
  { entity: 'Alascom, Inc.', state: 'AK' },
  { entity: 'AT&T Corp.', state: 'NY' },
  { entity: 'AT&T Global Network Services LLC', state: 'DE' },
  { entity: 'AT&T Internet Services', state: 'NV' },
  { entity: 'AT&T Mobility LLC', state: 'DE' },
  { entity: 'AT&T Mobility National Accounts LLC', state: 'DE' },
  { entity: 'AT&T Mobility Puerto Rico Inc.', state: 'DE' },
  { entity: 'AT&T of the Virgin Islands, Inc.', state: 'DE' },
  { entity: 'AT&T Services, Inc.', state: 'DE' },
  { entity: 'AT&T Teleholdings, Inc.', state: 'DE' },
  { entity: 'BellSouth Long Distance, Inc.', state: 'GA' },
  { entity: 'BellSouth Telecommunications, LLC', state: 'GA' },
  { entity: 'Cricket Wireless LLC', state: 'DE' },
  { entity: 'DIRECTV, LLC', state: 'CA' },
  { entity: 'Illinois Bell Telephone Company', state: 'IL' },
  { entity: 'Indiana Bell Telephone Company, Inc.', state: 'IN' },
  { entity: 'Michigan Bell Telephone Company', state: 'MI' },
  { entity: 'Nevada Bell Telephone Company', state: 'NV' },
  { entity: 'New Cingular Wireless PCS, LLC', state: 'DE' },
  { entity: 'Ohio Bell Telephone Company', state: 'OH' },
  { entity: 'Pacific Bell Telephone Company', state: 'CA' },
  { entity: 'Southwestern Bell Telephone Company', state: 'MO' },
  { entity: 'SBC Global Services, Inc.', state: 'TX' },
  { entity: 'SBC Internet Services, Inc.', state: 'DE' },
  { entity: 'SBC Long Distance, LLC', state: 'TX' },
  { entity: 'TCG New York, Inc.', state: 'NY' },
  { entity: 'Teleport Communications America, LLC', state: 'DE' },
  { entity: 'The Southern New England Telephone Company', state: 'CT' },
  { entity: 'Wisconsin Bell, Inc.', state: 'WI' },
  { entity: 'YELLOWPAGES.COM LLC', state: 'DE' },
  { entity: 'Yp Holdings LLC', state: 'DE' },
];

const ctLocations = [
  { state: 'AL', abbr: 'AL', address: '2 N. Jackson St., Suite 605, Montgomery, AL 36104' },
  { state: 'AK', abbr: 'AK', address: '9360 Glacier Highway, Suite 202, Juneau, AK 99801' },
  { state: 'AZ', abbr: 'AZ', address: '3800 N. Central Ave., Suite 460, Phoenix, AZ 85012' },
  { state: 'AR', abbr: 'AR', address: '124 W. Capitol Ave., Suite 1900, Little Rock, AR 72201' },
  { state: 'CA', abbr: 'CA', address: '330 N. Brand Blvd., Suite 700, Glendale, CA 91203' },
  { state: 'CO', abbr: 'CO', address: '7700 E. Arapahoe Road, Suite 220, Centennial, CO 80112' },
  { state: 'CT', abbr: 'CT', address: '67 Burnside Avenue, East Hartford, CT 06108' },
  { state: 'DE', abbr: 'DE', address: '1209 Orange Street, Wilmington, DE 19801' },
  { state: 'DC', abbr: 'DC', address: '1015 15th Street N.W., Suite 1000, Washington, DC 20005' },
  { state: 'FL', abbr: 'FL', address: '1200 South Pine Island Rd., Suite 250, Plantation, FL 33324' },
  { state: 'GA', abbr: 'GA', address: '289 S. Culver Street, Lawrenceville, GA 30046' },
  { state: 'HI', abbr: 'HI', address: '1003 Bishop Street, Suite 1600, Honolulu, HI 96813' },
  { state: 'ID', abbr: 'ID', address: '1111 W. Jefferson St., Suite 530, Boise, ID 83702' },
  { state: 'IL', abbr: 'IL', address: '208 So. LaSalle Street, Suite 814, Chicago, IL 60604' },
  { state: 'IN', abbr: 'IN', address: '334 N. Senate Avenue, Indianapolis, IN 46204' },
  { state: 'IA', abbr: 'IA', address: '505 5th Avenue, Suite 729, Des Moines, IA 50309' },
  { state: 'KS', abbr: 'KS', address: '112 SW 7th St., Suite 3C, Topeka, KS 66603' },
  { state: 'KY', abbr: 'KY', address: '306 W. Main Street, Suite 512, Frankfort, KY 40601' },
  { state: 'LA', abbr: 'LA', address: '3867 Plaza Tower Drive, Baton Rouge, LA 70816' },
  { state: 'ME', abbr: 'ME', address: '45 Memorial Circle, Suite 302, Augusta, ME 04330' },
  { state: 'MD', abbr: 'MD', address: '7 St. Paul Street, Suite 820, Baltimore, MD 21202' },
  { state: 'MA', abbr: 'MA', address: '155 Federal Street, Suite 700, Boston, MA 02110' },
  { state: 'MI', abbr: 'MI', address: '40600 Ann Arbor Road East, Suite 201, Plymouth, MI 48170' },
  { state: 'MN', abbr: 'MN', address: '1010 Dale Street North, St. Paul, MN 55117' },
  { state: 'MS', abbr: 'MS', address: '645 Lakeland East Drive, Suite 101, Flowood, MS 39232' },
  { state: 'MO', abbr: 'MO', address: '120 South Central Avenue, Clayton, MO 63105' },
  { state: 'MT', abbr: 'MT', address: '3553 Claremont Drive, Helena, MT 59601' },
  { state: 'NE', abbr: 'NE', address: '1327 H Street, Suite 101, Lincoln, NE 68508' },
  { state: 'NV', abbr: 'NV', address: '701 S. Carson Street, Suite 200, Carson City, NV 89701' },
  { state: 'NH', abbr: 'NH', address: '11 Ferry Street, Suite 310, Concord, NH 03301' },
  { state: 'NJ', abbr: 'NJ', address: '820 Bear Tavern Road, Suite 312, Ewing, NJ 08628' },
  { state: 'NM', abbr: 'NM', address: '206 S. Coronado Avenue, Espanola, NM 87532' },
  { state: 'NY', abbr: 'NY', address: '28 Liberty Street, New York, NY 10005' },
  { state: 'NC', abbr: 'NC', address: '150 Fayetteville Street, Box 1011, Raleigh, NC 27601' },
  { state: 'ND', abbr: 'ND', address: '314 E. Thayer Avenue, Suite 1, Bismarck, ND 58501' },
  { state: 'OH', abbr: 'OH', address: '4400 Easton Commons, Suite 125, Columbus, OH 43219' },
  { state: 'OK', abbr: 'OK', address: '1833 S. Morgan Road, Oklahoma City, OK 73128' },
  { state: 'OR', abbr: 'OR', address: '780 Commercial Street SE, Suite 100, Salem, OR 97301' },
  { state: 'PA', abbr: 'PA', address: '600 N. 2nd Street, Suite 401, Harrisburg, PA 17101' },
  { state: 'PR', abbr: 'PR', address: 'American Airlines Building, 1509 Lopez Landron Street, San Juan, PR 00911' },
  { state: 'RI', abbr: 'RI', address: '100 Midway Place, Suite 3, Cranston, RI 02920' },
  { state: 'SC', abbr: 'SC', address: '2 Office Park Court, Suite 103, Columbia, SC 29223' },
  { state: 'SD', abbr: 'SD', address: '319 S. Coteau, Pierre, SD 57501' },
  { state: 'TN', abbr: 'TN', address: '300 Montvue Road, Knoxville, TN 37919' },
  { state: 'TX', abbr: 'TX', address: '1999 Bryan Street, Suite 900, Dallas, TX 75201' },
  { state: 'UT', abbr: 'UT', address: '215 South State Street, Suite 800, Salt Lake City, UT 84111' },
  { state: 'VT', abbr: 'VT', address: '30 Main Street, Suite 207, Burlington, VT 05401' },
  { state: 'VA', abbr: 'VA', address: '4701 Cox Road, Suite 285, Glen Allen, VA 23060' },
  { state: 'VI', abbr: 'VI', address: 'Hibiscus Alley, Charlotte Amalie, St. Thomas, VI 00801' },
  { state: 'WA', abbr: 'WA', address: '711 Capitol Way S., Suite 204, Olympia, WA 98501' },
  { state: 'WV', abbr: 'WV', address: '1018 Kanawha Blvd., E., Suite 700, Charleston, WV 25301' },
  { state: 'WI', abbr: 'WI', address: '301 S. Bedford Street, Suite 1, Madison, WI 53703' },
  { state: 'WY', abbr: 'WY', address: '1712 Pioneer Avenue, Suite 500, Cheyenne, WY 82001' },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function IconWithBadge({
  children,
  count,
  showBadge = true,
}: {
  children: React.ReactNode;
  count?: number;
  showBadge?: boolean;
}) {
  return (
    <span className="relative inline-flex">
      {children}
      {showBadge && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
          {count !== undefined ? (count > 9 ? '9+' : count) : ''}
        </span>
      )}
    </span>
  );
}

function MarketplaceHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container-marketing flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">For Business</span>
            <span className="text-gray-600">Support</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">1-888-722-1787</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-marketing">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/patterns/use-cases/att-garnishments" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AT&T Legal</span>
            </Link>

            {/* Primary nav */}
            <nav className="hidden items-center gap-6 lg:flex">
              <Link href="#entities" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                Legal Entities
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#locations" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                CT Locations
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.attgarnishments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
              >
                Original Site
                <ExternalLink className="h-4 w-4" />
              </Link>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:flex">
              <Search className="h-5 w-5" />
            </button>
            <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
              <IconWithBadge count={3}>
                <Bell className="h-5 w-5" />
              </IconWithBadge>
            </button>
            <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
            <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container-marketing">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <Building2 className="h-4 w-4" />
            Legal Service Information
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Proper Service of AT&T Garnishments
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            All garnishments must be served to CT Corporation as registered agent for AT&T entities.
            Search below to find the correct entity and service address for your jurisdiction.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.attgarnishments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Visit Original Site
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#entities"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              View Legal Entities
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span>AT&T OneStop: <strong>1-888-722-1787</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />
    </div>
  );
}

function LegalEntitiesTable({ searchQuery }: { searchQuery: string }) {
  const filteredEntities = useMemo(() => {
    if (!searchQuery.trim()) return legalEntities;
    const query = searchQuery.toLowerCase();
    return legalEntities.filter(
      (entity) =>
        entity.entity.toLowerCase().includes(query) ||
        entity.state.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Legal Entity
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Default Service State
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEntities.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-6 py-8 text-center text-gray-500">
                  No entities found matching &quot;{searchQuery}&quot;
                </td>
              </tr>
            ) : (
              filteredEntities.map((entity, index) => (
                <tr
                  key={entity.entity}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                >
                  <td className="px-6 py-4 text-sm text-gray-900">{entity.entity}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      {entity.state}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-600">
        Showing {filteredEntities.length} of {legalEntities.length} entities
      </div>
    </div>
  );
}

function CTLocationsTable({ searchQuery }: { searchQuery: string }) {
  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) return ctLocations;
    const query = searchQuery.toLowerCase();
    return ctLocations.filter(
      (location) =>
        location.state.toLowerCase().includes(query) ||
        location.abbr.toLowerCase().includes(query) ||
        location.address.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                State
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                CT Corporation Address
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredLocations.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-6 py-8 text-center text-gray-500">
                  No locations found matching &quot;{searchQuery}&quot;
                </td>
              </tr>
            ) : (
              filteredLocations.map((location, index) => (
                <tr
                  key={location.abbr}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                >
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-gray-900">{location.abbr}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{location.address}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-600">
        Showing {filteredLocations.length} of {ctLocations.length} locations
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 py-12">
      <div className="container-marketing">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">AT&T Legal</span>
          </div>
          <p className="text-sm text-gray-400">
            This is a Signal3 design system demonstration.{' '}
            <a
              href="https://www.attgarnishments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              View original site
            </a>
          </p>
          <Link
            href="/patterns/use-cases"
            className="text-sm text-gray-400 hover:text-white"
          >
            Back to Use Cases
          </Link>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function ATTGarnishmentsPage() {
  const [entitySearch, setEntitySearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <HeroSection />

      <main className="container-marketing py-16">
        {/* Legal Entities Section */}
        <section id="entities" className="scroll-mt-24">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Legal Entities</h2>
              <p className="mt-1 text-gray-600">
                AT&T legal entities and their default service states
              </p>
            </div>
            <div className="w-full sm:w-80">
              <SearchInput
                value={entitySearch}
                onChange={setEntitySearch}
                placeholder="Search entities or states..."
              />
            </div>
          </div>
          <LegalEntitiesTable searchQuery={entitySearch} />
        </section>

        {/* CT Locations Section */}
        <section id="locations" className="mt-16 scroll-mt-24">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">CT Corporation Locations</h2>
              <p className="mt-1 text-gray-600">
                Service addresses for CT Corporation by state
              </p>
            </div>
            <div className="w-full sm:w-80">
              <SearchInput
                value={locationSearch}
                onChange={setLocationSearch}
                placeholder="Search states or addresses..."
              />
            </div>
          </div>
          <CTLocationsTable searchQuery={locationSearch} />
        </section>

        {/* Important Notice */}
        <section className="mt-16 rounded-xl border border-amber-200 bg-amber-50 p-8">
          <h3 className="text-lg font-semibold text-amber-900">Important Notice</h3>
          <p className="mt-2 text-amber-800">
            All wage garnishments issued to AT&T must be served upon CT Corporation, the
            registered agent for all AT&T entities. For questions, contact AT&T&apos;s OneStop at{' '}
            <strong>1-888-722-1787</strong>.
          </p>
          <p className="mt-4 text-sm text-amber-700">
            This page is a demonstration of Signal3 design system components.{' '}
            <a
              href="https://www.attgarnishments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              View the official AT&T garnishments website
            </a>{' '}
            for authoritative information.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
