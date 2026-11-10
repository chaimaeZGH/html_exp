import React, { useState } from 'react';
import { 
  FileText, CheckCircle2, UploadCloud, AlertCircle, Plus, 
  MessageSquare, Bell, ChevronDown, Check, Anchor, Phone,
  Ship, Compass, Users, Key, LayoutDashboard, ArrowUpRight,
  Filter, Search, ShieldCheck, Download
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'sale' | 'trade' | 'rebuild'>('sale');
  const [currentView, setCurrentView] = useState<'submit' | 'dashboard' | 'marketplace' | 'messages' | 'profile'>('submit');
  
  // Vessel form state
  const [vesselName, setVesselName] = useState('Al-Boughaz Explorer');
  const [vesselClass, setVesselClass] = useState('trawler');
  const [yearBuilt, setYearBuilt] = useState('1983');
  const [homePort, setHomePort] = useState('safi');
  const [valuation, setValuation] = useState('280000');
  const [regNumber, setRegNumber] = useState('CAS-84920-TR');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#050b14] text-slate-100 flex flex-col font-sans selection:bg-[#ffbe4d]/30 selection:text-[#ffbe4d]">
      
      {/* Top Banner Navigation & View Preview Switcher */}
      <div className="bg-[#071120] border-b border-white/[0.08] px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#ffbe4d]/20 text-[#ffbe4d] border border-[#ffbe4d]/30 font-semibold uppercase">
            Preview Mode
          </span>
          <span className="text-slate-400 text-xs hidden sm:inline">NaviCraft Client Area (Theme Aligned with visitor.html)</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-1.5 font-medium">
          <span className="text-[#a9b8ca] text-[11px] mr-1 hidden lg:inline">Open Standalone Pages:</span>
          <a 
            href="/visitor.html"
            className="px-2 py-0.5 rounded text-[11px] bg-[#ffbe4d] text-slate-950 font-bold hover:bg-[#f5a524] transition flex items-center gap-1"
          >
            <span>👁</span> Visitor Page
          </a>
          <a 
            href="/client-dashboard.html"
            className="px-2 py-0.5 rounded text-[11px] bg-white/[0.06] text-slate-200 hover:text-white hover:bg-white/[0.1] transition"
          >
            Client Dashboard
          </a>
          <a 
            href="/client-marketplace.html"
            className="px-2 py-0.5 rounded text-[11px] bg-white/[0.06] text-slate-200 hover:text-white hover:bg-white/[0.1] transition"
          >
            Marketplace
          </a>
          <a 
            href="/submit-vessel.html"
            className="px-2 py-0.5 rounded text-[11px] bg-white/[0.06] text-slate-200 hover:text-white hover:bg-white/[0.1] transition"
          >
            Submit Vessel
          </a>
          <a 
            href="/client-messages.html"
            className="px-2 py-0.5 rounded text-[11px] bg-white/[0.06] text-slate-200 hover:text-white hover:bg-white/[0.1] transition"
          >
            Messages
          </a>
          <a 
            href="/client-profile.html"
            className="px-2 py-0.5 rounded text-[11px] bg-white/[0.06] text-slate-200 hover:text-white hover:bg-white/[0.1] transition"
          >
            Profile
          </a>
          <a 
            href="/admin-operations.html"
            className="px-2 py-0.5 rounded text-[11px] bg-white/[0.06] text-slate-200 hover:text-white hover:bg-white/[0.1] transition"
          >
            Admin Operations
          </a>
          <a 
            href="/admin-users-access.html"
            className="px-2 py-0.5 rounded text-[11px] bg-white/[0.06] text-slate-200 hover:text-white hover:bg-white/[0.1] transition"
          >
            Users &amp; Access
          </a>
        </div>
      </div>

      {/* Main Top Header */}
      <header className="border-b border-white/[0.08] bg-[#071120]/95 backdrop-blur-md sticky top-0 z-40 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ffbe4d]/20 to-[#74bdb3]/10 border border-[#ffbe4d]/30 flex items-center justify-center text-[#ffbe4d]">
              <Ship className="w-5 h-5 text-[#ffbe4d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Sora'] font-bold text-lg tracking-tight text-white">NaviCraft</span>
              </div>
              <p className="font-mono text-[9px] tracking-widest text-[#74bdb3] uppercase font-semibold">Marine Engineering</p>
            </div>
          </div>

          {/* User Utilities & Profile */}
          <div className="flex items-center gap-4">
            
            {/* Messages with badge */}
            <button className="relative p-2 rounded-lg bg-[#0b1626] border border-white/[0.06] text-[#a9b8ca] hover:text-white hover:border-[#ffbe4d]/40 transition">
              <MessageSquare className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ffbe4d] text-slate-950 font-bold text-[10px] flex items-center justify-center">2</span>
            </button>

            {/* Notification Bell with badge */}
            <button className="relative p-2 rounded-lg bg-[#0b1626] border border-white/[0.06] text-[#a9b8ca] hover:text-white hover:border-[#ffbe4d]/40 transition">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ffbe4d] text-slate-950 font-bold text-[10px] flex items-center justify-center">2</span>
            </button>

            <div className="h-6 w-px bg-white/[0.08] mx-1"></div>

            {/* Verified User Avatar & Name */}
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#997327] to-[#ffd27a] text-slate-950 font-bold text-xs flex items-center justify-center shadow-inner">
                YE
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs font-semibold text-white group-hover:text-[#ffbe4d] transition leading-tight">Yassine El Amrani</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#74bdb3] flex items-center gap-1">
                  <span>Verified Vessel</span>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#a9b8ca] group-hover:text-white transition" />
            </div>

          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        
        {currentView === 'submit' ? (
          <div>
            {/* Title Section */}
            <div className="mb-6">
              <h1 className="font-['Sora'] text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                Submit Vessel for Verification &amp; Listing
              </h1>

              {/* Kind / Category Switcher */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#a9b8ca] mb-2 font-medium">Kind</label>
                <div className="grid grid-cols-3 max-w-xl rounded-xl border border-white/[0.08] bg-[#071120] p-1 gap-1">
                  <button 
                    type="button" 
                    onClick={() => setActiveTab('sale')}
                    className={`py-2.5 px-4 rounded-lg font-medium text-xs md:text-sm transition ${
                      activeTab === 'sale' 
                        ? 'bg-[#0f1c30] border border-white/20 text-white shadow-sm' 
                        : 'text-[#a9b8ca] hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    [Sale / Listing]
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveTab('trade')}
                    className={`py-2.5 px-4 rounded-lg font-medium text-xs md:text-sm transition ${
                      activeTab === 'trade' 
                        ? 'bg-[#0f1c30] border border-white/20 text-white shadow-sm' 
                        : 'text-[#a9b8ca] hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    [Trade-in]
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveTab('rebuild')}
                    className={`py-2.5 px-4 rounded-lg font-medium text-xs md:text-sm transition ${
                      activeTab === 'rebuild' 
                        ? 'bg-[#0f1c30] border border-white/20 text-white shadow-sm' 
                        : 'text-[#a9b8ca] hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    [Rebuild &amp; Refit]
                  </button>
                </div>
              </div>
            </div>

            {/* 2-Column Split: Vessel Details & Document Upload Desk */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Left Column: Vessel Details */}
              <section className="space-y-4">
                <h2 className="font-['Sora'] text-lg font-semibold text-white tracking-wide">
                  Vessel Details
                </h2>

                <div className="space-y-3.5">
                  {/* Vessel Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Vessel Name</label>
                    <input 
                      type="text" 
                      value={vesselName}
                      onChange={(e) => setVesselName(e.target.value)}
                      placeholder="e.g. Al-Boughaz Explorer" 
                      className="w-full rounded-xl bg-[#071120] border border-white/[0.08] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ffbe4d] focus:ring-1 focus:ring-[#ffbe4d] transition"
                    />
                  </div>

                  {/* Vessel Class Dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Vessel Class</label>
                    <div className="relative">
                      <select 
                        value={vesselClass}
                        onChange={(e) => setVesselClass(e.target.value)}
                        className="w-full rounded-xl bg-[#071120] border border-white/[0.08] px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-[#ffbe4d] focus:ring-1 focus:ring-[#ffbe4d] transition appearance-none cursor-pointer"
                      >
                        <option value="trawler">Commercial Pelagic Trawler</option>
                        <option value="sardine">Coastal Sardine Carrier</option>
                        <option value="motor-yacht">Twin-Engine Motor Yacht</option>
                        <option value="feeder">Coastal Feeder Cargo</option>
                        <option value="catamaran">High-Speed Workboat / Catamaran</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#a9b8ca] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Year Built Dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Year Built</label>
                    <div className="relative">
                      <select 
                        value={yearBuilt}
                        onChange={(e) => setYearBuilt(e.target.value)}
                        className="w-full rounded-xl bg-[#071120] border border-white/[0.08] px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-[#ffbe4d] focus:ring-1 focus:ring-[#ffbe4d] transition appearance-none cursor-pointer"
                      >
                        <option value="2024">2024 (Modern Commission)</option>
                        <option value="2022">2022</option>
                        <option value="2018">2018</option>
                        <option value="2010">2010</option>
                        <option value="1995">1995</option>
                        <option value="1983">1983</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#a9b8ca] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Home Port Dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Home Port</label>
                    <div className="relative">
                      <select 
                        value={homePort}
                        onChange={(e) => setHomePort(e.target.value)}
                        className="w-full rounded-xl bg-[#071120] border border-white/[0.08] px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-[#ffbe4d] focus:ring-1 focus:ring-[#ffbe4d] transition appearance-none cursor-pointer"
                      >
                        <option value="casablanca">Casablanca Yard 04 (MA)</option>
                        <option value="safi">Safi Atlantic Fleet (MA)</option>
                        <option value="tanger">Tanger-Med Maritime Hub (MA)</option>
                        <option value="agadir">Agadir Port Commercial (MA)</option>
                        <option value="algeciras">Algeciras Cross-Strait (ES)</option>
                        <option value="marseille">Marseille Drydock (FR)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#a9b8ca] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Estimated Valuation */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Estimated Valuation</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#a9b8ca] font-medium text-sm">
                        €
                      </div>
                      <input 
                        type="number" 
                        value={valuation}
                        onChange={(e) => setValuation(e.target.value)}
                        placeholder="280000" 
                        className="w-full rounded-xl bg-[#071120] border border-white/[0.08] pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ffbe4d] focus:ring-1 focus:ring-[#ffbe4d] transition font-mono"
                      />
                    </div>
                  </div>

                  {/* Registration / Official Number */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Registration / Official Number</label>
                    <input 
                      type="text" 
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      placeholder="e.g. CAS-84920-TR or IMO 9128471" 
                      className="w-full rounded-xl bg-[#071120] border border-white/[0.08] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ffbe4d] focus:ring-1 focus:ring-[#ffbe4d] transition font-mono text-xs uppercase"
                    />
                  </div>
                </div>
              </section>

              {/* Right Column: Document Upload Desk (Module 6) */}
              <section className="space-y-4">
                
                {/* Header with Module 6 Badge */}
                <div className="flex items-center justify-between">
                  <h2 className="font-['Sora'] text-lg font-semibold text-white tracking-wide">
                    Document Upload Desk
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071120] border border-white/[0.08] text-[11px] font-mono text-[#a9b8ca]">
                    <FileText className="w-3.5 h-3.5 text-[#74bdb3]" />
                    Module 6
                  </span>
                </div>

                <div className="space-y-3.5">
                  
                  {/* Document 1: Title Deed (Status: Uploaded & Validated) */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Title Deed</label>
                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/[0.06] backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white tracking-wide">TitleDeed_Vessel.pdf</div>
                          <div className="font-mono text-[10px] text-emerald-400/80">Validated (2.4 MB) • Ready</div>
                        </div>
                      </div>
                      
                      {/* Green Checkmark Pill */}
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>

                  {/* Document 2: Certificate of Registry (Status: Uploading 75%) */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Certificate of Registry</label>
                    <div className="relative overflow-hidden p-3.5 rounded-xl border border-sky-500/30 bg-[#071120] backdrop-blur-sm">
                      
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center">
                            <UploadCloud className="w-5 h-5 animate-pulse" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white tracking-wide">registry_cert.png</div>
                            <div className="text-[11px] text-[#a9b8ca]">Uploading...</div>
                          </div>
                        </div>
                        
                        <span className="font-mono text-xs font-semibold text-sky-400">75%</span>
                      </div>

                      {/* Progress bar track */}
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-sky-500 to-[#74bdb3] h-1.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Document 3: Survey Report / Photos (Status: Dropzone) */}
                  <div>
                    <label className="block text-xs font-medium text-[#a9b8ca] mb-1.5">Survey Report / Photos</label>
                    <div className="border border-dashed border-white/[0.15] hover:border-[#ffbe4d]/50 bg-[#071120]/60 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer group transition">
                      
                      <div className="w-12 h-12 rounded-xl bg-[#0b1626] border border-white/[0.08] flex items-center justify-center text-[#a9b8ca] group-hover:text-[#ffbe4d] group-hover:scale-105 transition mb-3">
                        <Plus className="w-6 h-6" />
                      </div>

                      <div className="text-xs sm:text-sm font-medium text-slate-300 mb-1">
                        Drag and drop or <span className="text-[#74bdb3] underline group-hover:text-[#ffbe4d] transition">Browse...</span>
                      </div>
                      <div className="text-[11px] text-[#a9b8ca]/70 font-mono">
                        For PDF/PNG/JPG files (max 25MB)
                      </div>
                    </div>
                  </div>

                </div>

                {/* Submit for Verification CTA Button */}
                <div className="pt-4">
                  <button 
                    type="button" 
                    onClick={() => {
                      setSubmitted(true);
                      setTimeout(() => setSubmitted(false), 4000);
                    }}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#ffbe4d] hover:bg-[#f5a524] text-slate-950 font-['Sora'] font-bold text-sm tracking-wide shadow-lg shadow-[#ffbe4d]/10 hover:shadow-[#ffbe4d]/20 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Submitted to Yard Master!</span>
                      </>
                    ) : (
                      <span>Submit for Verification</span>
                    )}
                  </button>

                  {submitted && (
                    <div className="mt-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Vessel submitted to Admin Operations Queue for maritime deed inspection &amp; listing approval.</span>
                    </div>
                  )}
                </div>

              </section>

            </div>
          </div>
        ) : (
          /* Client Dashboard View */
          <div>
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#74bdb3] mb-1">Client Command Deck • Monday 09 November</p>
                <h1 className="font-['Sora'] text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Good afternoon, Yassine.
                </h1>
                <p className="text-xs text-[#a9b8ca] mt-1 max-w-xl">
                  Track every listing, trade-in, and dry-dock project in one place. Your yard master updates each milestone as the work moves forward.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setCurrentView('submit')}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] text-xs font-semibold text-white transition flex items-center gap-2"
                >
                  <Ship className="w-4 h-4 text-[#74bdb3]" />
                  <span>Rebuild &amp; Refit</span>
                </button>
                <button 
                  onClick={() => setCurrentView('submit')}
                  className="px-4 py-2.5 rounded-xl bg-[#ffbe4d] hover:bg-[#f5a524] text-slate-950 text-xs font-['Sora'] font-bold transition flex items-center gap-1.5 shadow-md shadow-[#ffbe4d]/10"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                  <span>Sell a vessel</span>
                </button>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#071120] border border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#a9b8ca]">Active Files</div>
                  <div className="text-2xl font-bold font-['Sora'] text-white mt-1">3</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">4 total submissions on record</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-[#ffbe4d] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#071120] border border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#a9b8ca]">Pipeline Value</div>
                  <div className="text-2xl font-bold font-['Sora'] text-[#ffbe4d] mt-1">$630k</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Listed value + approved budgets</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#071120] border border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#a9b8ca]">Processing Speed</div>
                  <div className="text-2xl font-bold font-['Sora'] text-[#74bdb3] mt-1">21m</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">A project manager is active</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-[#74bdb3] flex items-center justify-center">
                  <Ship className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Submissions & Verification table */}
            <div className="rounded-xl border border-white/[0.08] bg-[#071120] overflow-hidden">
              <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
                <h3 className="font-['Sora'] font-semibold text-sm text-white">My Submissions &amp; Document Verification</h3>
                <span className="font-mono text-xs text-[#74bdb3]">Yard 04 • Live Status</span>
              </div>
              
              <div className="divide-y divide-white/[0.06] text-xs">
                {[
                  { name: 'Tafoukt', specs: '17.2 m • 1983 • Safi', date: '2 months ago', deed: 'verified', reg: 'verified', survey: 'verified' },
                  { name: 'Sirocco Express', specs: '14.2 m • 1981 • Safi', date: '2 months ago', deed: 'verified', reg: 'pending', survey: 'pending' },
                  { name: 'RQ-2074 Feeder', specs: '17.2 m • 1988 • Essaouira', date: '3 days ago', deed: 'verified', reg: 'pending', survey: 'uploading' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-white/[0.02] transition">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0b1626] border border-white/[0.08] flex items-center justify-center text-[#ffbe4d]">
                        <Ship className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{item.name}</div>
                        <div className="font-mono text-slate-400 text-[11px]">{item.specs}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Title Deed
                      </span>
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center gap-1 ${
                        item.reg === 'verified' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-amber-500/10 text-[#ffbe4d] border border-amber-500/30'
                      }`}>
                        <FileText className="w-3 h-3" /> Registry Cert
                      </span>
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center gap-1 ${
                        item.survey === 'verified'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300 border border-white/10'
                      }`}>
                        <FileText className="w-3 h-3" /> Maritime Survey
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Marine Yard Footer */}
      <footer className="w-full border-t border-white/[0.06] bg-[#050b14] py-3.5 px-6 mt-12 text-[11px] font-mono text-[#a9b8ca]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#74bdb3]">⚓</span>
            <span>NAVICRAFT MARINE ENGINEERING</span>
            <span className="text-white/20">•</span>
            <span>YARD 04, CASABLANCA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ffbe4d]">📞</span>
            <span>YARD LINE: <a href="tel:+212522304118" className="text-slate-300 hover:text-[#ffbe4d] transition">+212 522 304 118</a></span>
          </div>
        </div>
      </footer>

    </div>
  );
}
