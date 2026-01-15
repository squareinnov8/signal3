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

interface LegalEntity {
  entity: string;
  states: string[];
  fallbackState?: string;
  fallbackNote?: string;
}

const legalEntities: LegalEntity[] = [
  {
    entity: 'Alascom, Inc.',
    states: ['AK', 'CA', 'HI', 'WA'],
    fallbackState: 'AK',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Alaska CT Corporation.',
  },
  {
    entity: 'AT&T Billing Southeast, LLC',
    states: ['AL', 'GA', 'NC'],
    fallbackState: 'GA',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Georgia CT Corporation.',
  },
  {
    entity: 'AT&T Billing Southwest, LLC',
    states: ['CA'],
    fallbackState: 'DE',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Delaware CT Corporation.',
  },
  {
    entity: 'AT&T Corp.',
    states: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT Corporation.',
  },
  {
    entity: 'AT&T Customer Services, Inc.',
    states: ['AL', 'CA', 'CO', 'ID', 'IL', 'MN', 'MT', 'NV', 'OK', 'WV'],
    fallbackState: 'IL',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Illinois CT Corporation.',
  },
  {
    entity: 'AT&T Digital Life, Inc.',
    states: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT location.',
  },
  {
    entity: 'AT&T Global Communications Services, Inc.',
    states: ['DE', 'VI'],
    fallbackState: 'DE',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Delaware CT Corporation.',
  },
  {
    entity: 'AT&T Government Solutions, Inc.',
    states: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OR', 'PA', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT Corporation.',
  },
  {
    entity: 'AT&T Management Services, L.P.',
    states: ['DC', 'MO', 'TX'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT Corporation.',
  },
  {
    entity: 'AT&T Mobility Puerto Rico, Inc.',
    states: ['PR'],
    fallbackState: 'DE',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Delaware CT Corporation.',
  },
  {
    entity: 'AT&T Mobility Services, LLC',
    states: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT Corporation.',
  },
  {
    entity: 'AT&T of Puerto Rico, Inc.',
    states: ['NY', 'PR'],
    fallbackState: 'NY',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the New York CT Corporation.',
  },
  {
    entity: 'AT&T of the Virgin Islands, Inc.',
    states: ['DE', 'VI'],
    fallbackState: 'DE',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Delaware CT Corporation.',
  },
  {
    entity: 'AT&T Services, Inc.',
    states: ['AK', 'AL', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'IL', 'IN', 'KS', 'KY', 'LA', 'MD', 'MI', 'MN', 'MO', 'MS', 'NC', 'NJ', 'NV', 'NY', 'OH', 'OK', 'PA', 'SC', 'TN', 'TX', 'VA', 'VT', 'WA', 'WI', 'WV'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT location.',
  },
  {
    entity: 'AT&T Support Services Company, Inc.',
    states: ['CA', 'CO', 'DC', 'DE', 'HI', 'ID', 'KY', 'MD', 'MI', 'NC', 'NJ', 'NY', 'OH', 'TX', 'VA', 'WA', 'WV'],
    fallbackState: 'MI',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Michigan CT location.',
  },
  {
    entity: 'AT&T Technical Services Company, Inc.',
    states: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT location.',
  },
  {
    entity: 'AT&T World Personnel Services, Inc.',
    states: ['DE'],
    fallbackState: 'DE',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Delaware CT Corporation.',
  },
  {
    entity: 'BellSouth Telecommunications, LLC',
    states: ['AL', 'FL', 'GA', 'KY', 'LA', 'MS', 'NC', 'SC', 'TN'],
    fallbackState: 'GA',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Georgia CT Corporation.',
  },
  {
    entity: 'Cricket Wireless LLC',
    states: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT Corporation.',
  },
  {
    entity: 'Illinois Bell Telephone Company',
    states: ['CT', 'IL', 'IN', 'MI', 'OH'],
    fallbackState: 'IL',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Illinois CT Corporation.',
  },
  {
    entity: 'Indiana Bell Telephone Company, Incorporated',
    states: ['IN'],
  },
  {
    entity: 'Michigan Bell Telephone Company',
    states: ['IL', 'IN', 'MI'],
    fallbackState: 'MI',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Michigan CT Corporation.',
  },
  {
    entity: 'Nevada Bell Telephone Company',
    states: ['CA', 'NV'],
    fallbackState: 'NV',
    fallbackNote: 'If the state is not listed above, have the garnishment served to The Corporation Trust Co. of Nevada.',
  },
  {
    entity: 'Pacific Bell Telephone Company',
    states: ['CA', 'MO', 'PA'],
    fallbackState: 'CA',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the California CT Corporation.',
  },
  {
    entity: 'SBC Global Services, Inc.',
    states: ['AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NJ', 'NV', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'TN', 'UT', 'TX', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT Corporation.',
  },
  {
    entity: 'Southwestern Bell Telephone Company, LP',
    states: ['AR', 'KS', 'MO', 'OK', 'TX'],
    fallbackState: 'MO',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Missouri CT Corporation.',
  },
  {
    entity: 'Teleport Communications America, LLC',
    states: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'],
    fallbackState: 'NY',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the New York CT Corporation.',
  },
  {
    entity: 'The Ohio Bell Telephone Company',
    states: ['IN', 'OH'],
    fallbackState: 'OH',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Ohio CT Corporation.',
  },
  {
    entity: 'Wisconsin Bell, Inc.',
    states: ['IN', 'MI', 'WI'],
    fallbackState: 'WI',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Wisconsin CT Corporation.',
  },
  {
    entity: 'Xandr, Inc.',
    states: ['CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'IL', 'MI', 'MO', 'NJ', 'NV', 'NY', 'OR', 'PA', 'TX', 'VA', 'VT', 'WA'],
    fallbackState: 'DE',
    fallbackNote: 'If the state is not listed above, have the garnishment served to the Delaware CT Corporation.',
  },
];

const ctLocations = [
  { abbr: 'AK', agent: 'CT Corporation System', address: '9360 Glacier Highway, Suite 202, Juneau, AK 99801' },
  { abbr: 'AL', agent: 'CT Corporation System', address: '2 North Jackson Street, Suite 605, Montgomery, AL 36104' },
  { abbr: 'AR', agent: 'The Corporation Company', address: '124 West Capitol Ave, Suite 1900, Little Rock, AR 72201' },
  { abbr: 'AZ', agent: 'CT Corporation System', address: '3800 N. Central Avenue, Suite 460, Phoenix, AZ 85012' },
  { abbr: 'CA', agent: 'CT Corporation System', address: '330 N. Brand Blvd., Suite 700, Glendale, CA 91203' },
  { abbr: 'CO', agent: 'The Corporation Co.', address: '7700 E. Arapahoe Road, Suite 220, Centennial, CO 80112' },
  { abbr: 'CT', agent: 'CT Corporation System', address: '67 Burnside Avenue, East Hartford, CT 06108' },
  { abbr: 'DC', agent: 'CT Corporation System', address: '1015 15th Street, NW, Suite 1000, Washington, DC 20005' },
  { abbr: 'DE', agent: 'The Corporation Trust Co.', address: '1209 Orange Street, Wilmington, DE 19801' },
  { abbr: 'FL', agent: 'CT Corporation System', address: '1200 South Pine Island Road, Plantation, FL 33324' },
  { abbr: 'GA', agent: 'CT Corporation System', address: '289 Culver Street, Lawrenceville, GA 30046' },
  { abbr: 'HI', agent: 'The Corporation Co., Inc.', address: '1136 Union Mall, Suite 301, Honolulu, HI 96813' },
  { abbr: 'IA', agent: 'CT Corporation System', address: '400 East Court Avenue, Des Moines, IA 50309' },
  { abbr: 'ID', agent: 'CT Corporation System', address: '921 S. Orchard Street, Suite G, Boise, ID 83705' },
  { abbr: 'IL', agent: 'CT Corporation System', address: '208 So. LaSalle Street, Suite 814, Chicago, IL 60604' },
  { abbr: 'IN', agent: 'CT Corporation System', address: '334 North Senate Avenue, Indianapolis, IN 46204' },
  { abbr: 'KS', agent: 'The Corporation Co., Inc.', address: '112 SW 7th Street, Suite 3C, Topeka, KS 66603' },
  { abbr: 'KY', agent: 'CT Corporation System', address: '306 W. Main Street, Suite 512, Frankfort, KY 40601' },
  { abbr: 'LA', agent: 'CT Corporation System', address: '3867 Plaza Tower Drive, Baton Rouge, LA 70816' },
  { abbr: 'MA', agent: 'CT Corporation System', address: '155 Federal Street, Suite 700, Boston, MA 02110' },
  { abbr: 'MD', agent: 'The Corporation Trust Inc.', address: '2405 York Road, Suite 201, Lutherville Timonium, MD 21093' },
  { abbr: 'ME', agent: 'CT Corporation System', address: '128 State St #3, Augusta, ME 04330' },
  { abbr: 'MI', agent: 'The Corporation Co.', address: '40600 Ann Arbor Road E, Suite 201, Plymouth, MI 48170' },
  { abbr: 'MN', agent: 'CT Corporation System', address: '1010 Dale Street N, St. Paul, MN 55117' },
  { abbr: 'MO', agent: 'CT Corporation System', address: '120 South Central Ave, Clayton, MO 63105' },
  { abbr: 'MS', agent: 'CT Corporation System', address: '645 Lakeland East Drive, Suite 101, Flowood, MS 39232' },
  { abbr: 'MT', agent: 'CT Corporation System', address: '3011 American Way, Missoula, MT 59808' },
  { abbr: 'NC', agent: 'CT Corporation System', address: '160 Mine Lake CT, Suite 200, Raleigh, NC 27615' },
  { abbr: 'ND', agent: 'CT Corporation System', address: '120 W Sweet Avenue, Bismarck, ND 58504' },
  { abbr: 'NE', agent: 'CT Corporation System', address: '5601 South 59th Street, Lincoln, NE 68516' },
  { abbr: 'NH', agent: 'CT Corporation System', address: '2 ½ Beacon Street, Concord, NH 03301' },
  { abbr: 'NJ', agent: 'The Corporation Trust Co.', address: '820 Bear Tavern Road, West Trenton, NJ 08628' },
  { abbr: 'NM', agent: 'CT Corporation System', address: '206 S. Coronado Avenue, Espanola, NM 87532' },
  { abbr: 'NV', agent: 'The Corporation Trust Co. of Nevada', address: '701 S. Carson Street, Suite 200, Carson City, NV 89701' },
  { abbr: 'NY', agent: 'CT Corporation System', address: '28 Liberty Street, New York, NY 10005' },
  { abbr: 'OH', agent: 'CT Corporation System', address: '4400 Easton Commons Way, Suite 125, Columbus, OH 43219' },
  { abbr: 'OK', agent: 'The Corporation Company', address: '1833 South Morgan Road, Oklahoma City, OK 73128' },
  { abbr: 'OR', agent: 'CT Corporation System', address: '780 Commercial Street SE, Suite 100, Salem, OR 97301' },
  { abbr: 'PA', agent: 'CT Corporation System', address: '600 N. 2nd Street, Suite 401, Harrisburg, PA 17101' },
  { abbr: 'PR', agent: 'CT Corporation', address: '361 San Francisco Street, Penthouse, Old San Juan, PR 00901' },
  { abbr: 'RI', agent: 'CT Corporation System', address: '450 Veterans Memorial Highway, Suite 7A, East Providence, RI 02914' },
  { abbr: 'SC', agent: 'CT Corporation System', address: '2 Office Park Court, Suite 103, Columbia, SC 29223' },
  { abbr: 'SD', agent: 'CT Corporation System', address: '319 South Coteau Street, Pierre, SD 57501' },
  { abbr: 'TN', agent: 'CT Corporation System', address: '300 Montvue Road, Knox County, Knoxville, TN 37919' },
  { abbr: 'TX', agent: 'CT Corporation System', address: '1999 Bryan Street, Suite 900, Dallas, TX 75201' },
  { abbr: 'UT', agent: 'CT Corporation System', address: '1108 East South Union Avenue, Midvale, UT 84047' },
  { abbr: 'VA', agent: 'CT Corporation System', address: '4701 Cox Road, Suite 285, Glen Allen, VA 23060' },
  { abbr: 'VI', agent: 'CT Corporation System', address: 'Trident Trust Company (V.I.) Ltd, Waterfront Center, Suite A, 72 Kronprindsens Gade, St. Thomas, USVI 00802' },
  { abbr: 'VT', agent: 'CT Corporation System', address: '17 G W Tatro Drive, Jeffersonville, VT 05464' },
  { abbr: 'WA', agent: 'CT Corporation System', address: '711 Capitol Way S, Suite 204, Olympia, WA 98501' },
  { abbr: 'WI', agent: 'CT Corporation System', address: '301 S. Bedford Street, Suite 1, Madison, WI 53703' },
  { abbr: 'WV', agent: 'CT Corporation System', address: '1627 Quarrier Street, Charleston, WV 25311' },
  { abbr: 'WY', agent: 'CT Corporation System', address: '1908 Thomas Avenue, Cheyenne, WY 82001' },
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
        entity.states.some((state) => state.toLowerCase().includes(query)) ||
        (entity.fallbackState && entity.fallbackState.toLowerCase().includes(query))
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
                CT Corporation within the state served
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
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {entity.entity}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {entity.states.map((state) => (
                        <span
                          key={state}
                          className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800"
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                    {entity.fallbackNote && (
                      <p className="mt-2 text-xs text-gray-500 italic">
                        {entity.fallbackNote}
                      </p>
                    )}
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
        location.abbr.toLowerCase().includes(query) ||
        location.agent.toLowerCase().includes(query) ||
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
                Agent
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredLocations.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
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
                  <td className="px-6 py-4 text-sm text-gray-600">{location.agent}</td>
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
