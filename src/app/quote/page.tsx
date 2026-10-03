"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { US_STATES, QUOTE_SERVICE_TYPES, YEARS_OPTIONS, COPY } from "@/lib/content";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, Clock, Zap, MapPin } from "lucide-react";
import { OwnersFieldset } from "@/components/forms/OwnersFieldset";


const trustItems = [
  { icon: ShieldCheck, title: COPY.quote.trustNicheTitle, desc: COPY.quote.trustNicheDesc },
  { icon: Zap, title: "~15-minute quotes", desc: "Real quotes from real markets, fast." },
  { icon: Clock, title: "2-hour claims response", desc: "When a loss hits, you reach a person." },
  { icon: MapPin, title: "All 50 states", desc: "Licensed nationwide — NPN #8608479." },
];

export default function QuotePage() {
  const [ownerFields, setOwnerFields] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "", businessName: "", email: "", phone: "", state: "", serviceType: "", yearsInBusiness: "", message: "", "bot-field": "",
    address: "", city: "", zip: "",
    priorGrossSales: "", priorSubcontractorExpenses: "", priorEmployeeCount: "", priorEmployeePayroll: "",
    estGrossSales: "", estSubcontractorExpenses: "", estEmployeeCount: "", estEmployeePayroll: "", estMaterialCosts: "",
    subsHaveInsurance: "", subsInsuredPercent: "", needUninsuredSubCoverage: "",
    yearBusinessStarted: "", businessDescription: "", classCode1: "", classCode2: "", classCode3: "", classCode4: "", classCode5: "", residentialVsCommercial: "", newVsExistingConstruction: "", largestProjects: "", priorCarrierName: "", priorPolicyNumber: "", priorPolicyExpiration: "", ownerNames: "", ownerDateOfBirth: "", ownerOwnershipPct: "", numberOfEmployees: "", amountOfPayroll: "", hasClericalStaff: "", clericalStaffCount: "", hasSalesStaff: "", salesStaffCount: "", officeVsFieldSplit: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ "form-name": "quote", ...formData, ...ownerFields } as Record<string, string>).toString() });
      setSubmitted(true);
    } catch {
      setError(COPY.quote.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm";
  const labelClass = "block text-sm font-heading font-semibold text-espresso mb-1.5";

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free quote</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {COPY.quote.h1Lead}{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">{COPY.quote.h1Highlight}</span>
              </h1>
              <p className="mt-5 lead">{COPY.quote.lead}</p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay"><item.icon className="h-5 w-5" strokeWidth={2.2} /></span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">Prefer to call?</p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors"><Phone className="h-5 w-5" />{SITE.phone}</a>
                    <p className="text-xs text-cream/60 mt-1">{SITE.hours}</p>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-2">
                {submitted ? (
                  <FadeIn>
                    <div className="p-10 md:p-12 rounded-3xl bg-white border border-adobe shadow-card text-center">
                      <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="h-8 w-8 text-sage" /></div>
                      <h2 className="font-heading font-extrabold text-espresso text-2xl mb-3">Quote request received</h2>
                      <p className="text-mocha mb-2">Thank you! We'll review your operation and reach out within one business day with personalized quotes.</p>
                      <p className="text-sm text-mocha">Need it sooner? Call <a href={SITE.phoneHref} className="text-clay font-heading font-semibold">{SITE.phone}</a>.</p>
                      <Link href="/" className="btn-secondary mt-6 inline-flex">Back to home</Link>
                    </div>
                  </FadeIn>
                ) : (
                  <FadeIn>
                    <form name="quote" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9 space-y-5">
                      <input type="hidden" name="form-name" value="quote" />
                      <input name="bot-field" type="hidden" value={formData["bot-field"]} onChange={handleChange} className="hidden" />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="name" className={labelClass}>Full name *</label><input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} /></div>
                        <div><label htmlFor="businessName" className={labelClass}>Business name *</label><input id="businessName" name="businessName" type="text" required value={formData.businessName} onChange={handleChange} placeholder={COPY.quote.businessPlaceholder} className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="email" className={labelClass}>Email *</label><input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={COPY.quote.emailPlaceholder} className={inputClass} /></div>
                        <div><label htmlFor="phone" className={labelClass}>Phone *</label><input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder={COPY.quote.phonePlaceholder} className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="state" className={labelClass}>Primary state *</label>
                          <select id="state" name="state" required value={formData.state} onChange={handleChange} className={inputClass}><option value="">Select a state…</option>{US_STATES.map((s) => (<option key={s} value={s}>{s}</option>))}</select>
                        </div>
                        <div><label htmlFor="yearsInBusiness" className={labelClass}>Years in business</label>
                          <select id="yearsInBusiness" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} className={inputClass}><option value="">Select…</option>{YEARS_OPTIONS.map((y) => (<option key={y} value={y}>{y}</option>))}</select>
                        </div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Business address</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Where your operation is based.</p>
                        </div>
                        <div><label htmlFor="address" className={labelClass}>Street address</label><input id="address" name="address" type="text" value={formData.address} onChange={handleChange} placeholder="123 Main St, Suite 200" className={inputClass} /></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="city" className={labelClass}>City</label><input id="city" name="city" type="text" value={formData.city} onChange={handleChange} placeholder="Phoenix" className={inputClass} /></div>
                          <div><label htmlFor="zip" className={labelClass}>ZIP code</label><input id="zip" name="zip" type="text" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" value={formData.zip} onChange={handleChange} placeholder="85001" className={inputClass} /></div>
                        </div>
                      </div>

                      <div><label htmlFor="serviceType" className={labelClass}>What do you need? *</label>
                        <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className={inputClass}><option value="">Select coverage…</option>{QUOTE_SERVICE_TYPES.map((s) => (<option key={s} value={s}>{s}</option>))}</select>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Prior year</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Your last completed 12 months. Best estimates are fine.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="priorGrossSales" className={labelClass}>Gross sales</label><input id="priorGrossSales" name="priorGrossSales" type="text" inputMode="numeric" value={formData.priorGrossSales} onChange={handleChange} placeholder="$1,200,000" className={inputClass} /></div>
                          <div><label htmlFor="priorSubcontractorExpenses" className={labelClass}>Subcontractor expenses</label><input id="priorSubcontractorExpenses" name="priorSubcontractorExpenses" type="text" inputMode="numeric" value={formData.priorSubcontractorExpenses} onChange={handleChange} placeholder="$250,000" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="priorEmployeeCount" className={labelClass}>Employee count</label><input id="priorEmployeeCount" name="priorEmployeeCount" type="text" inputMode="numeric" value={formData.priorEmployeeCount} onChange={handleChange} placeholder="8" className={inputClass} /></div>
                          <div><label htmlFor="priorEmployeePayroll" className={labelClass}>Employee payroll</label><input id="priorEmployeePayroll" name="priorEmployeePayroll" type="text" inputMode="numeric" value={formData.priorEmployeePayroll} onChange={handleChange} placeholder="$420,000" className={inputClass} /></div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Next twelve months — estimates</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">What you expect over the coming year.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="estGrossSales" className={labelClass}>Estimated gross sales</label><input id="estGrossSales" name="estGrossSales" type="text" inputMode="numeric" value={formData.estGrossSales} onChange={handleChange} placeholder="$1,500,000" className={inputClass} /></div>
                          <div><label htmlFor="estSubcontractorExpenses" className={labelClass}>Estimated subcontractor expenses</label><input id="estSubcontractorExpenses" name="estSubcontractorExpenses" type="text" inputMode="numeric" value={formData.estSubcontractorExpenses} onChange={handleChange} placeholder="$300,000" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="estEmployeeCount" className={labelClass}>Estimated employee count (year total)</label><input id="estEmployeeCount" name="estEmployeeCount" type="text" inputMode="numeric" value={formData.estEmployeeCount} onChange={handleChange} placeholder="10" className={inputClass} /></div>
                          <div><label htmlFor="estEmployeePayroll" className={labelClass}>Estimated annual employee payroll</label><input id="estEmployeePayroll" name="estEmployeePayroll" type="text" inputMode="numeric" value={formData.estEmployeePayroll} onChange={handleChange} placeholder="$520,000" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="estMaterialCosts" className={labelClass}>Estimated material costs</label><input id="estMaterialCosts" name="estMaterialCosts" type="text" inputMode="numeric" value={formData.estMaterialCosts} onChange={handleChange} placeholder="$180,000" className={inputClass} /></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Subcontractor insurance</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">This drives how your policy is rated — please answer even if you rarely use subs.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="subsHaveInsurance" className={labelClass}>Do your subcontractors have insurance?</label><select id="subsHaveInsurance" name="subsHaveInsurance" value={formData.subsHaveInsurance} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes — all of them">Yes — all of them</option><option value="Some of them">Some of them</option><option value="No">No</option><option value="We don't use subcontractors">We don't use subcontractors</option></select></div>
                          <div><label htmlFor="subsInsuredPercent" className={labelClass}>What percent of your subcontractors have insurance?</label><input id="subsInsuredPercent" name="subsInsuredPercent" type="text" inputMode="numeric" value={formData.subsInsuredPercent} onChange={handleChange} placeholder="75%" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="needUninsuredSubCoverage" className={labelClass}>Do you need coverage for uninsured subcontractors?</label><select id="needUninsuredSubCoverage" name="needUninsuredSubCoverage" value={formData.needUninsuredSubCoverage} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option><option value="Not sure">Not sure</option></select></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Business details</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">What the business does and how long it has been running.</p>
                        </div>
                        <div><label htmlFor="yearBusinessStarted" className={labelClass}>Year business started</label><input id="yearBusinessStarted" name="yearBusinessStarted" type="text" inputMode="numeric" value={formData.yearBusinessStarted} onChange={handleChange} placeholder="2015" className={inputClass} /></div>
                        <div><label htmlFor="businessDescription" className={labelClass}>Description of the business</label><textarea id="businessDescription" name="businessDescription" rows={3} value={formData.businessDescription} onChange={handleChange} placeholder="What the business does, day to day" className={`${inputClass} resize-none`} /></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="residentialVsCommercial" className={labelClass}>Residential vs commercial split</label><input id="residentialVsCommercial" name="residentialVsCommercial" type="text" value={formData.residentialVsCommercial} onChange={handleChange} placeholder="70% residential / 30% commercial" className={inputClass} /></div>
                          <div><label htmlFor="newVsExistingConstruction" className={labelClass}>New vs existing construction</label><input id="newVsExistingConstruction" name="newVsExistingConstruction" type="text" value={formData.newVsExistingConstruction} onChange={handleChange} placeholder="Mostly existing structures" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="largestProjects" className={labelClass}>Largest projects</label><textarea id="largestProjects" name="largestProjects" rows={3} value={formData.largestProjects} onChange={handleChange} placeholder="Three largest jobs in the last year — value and scope" className={`${inputClass} resize-none`} /></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Payroll and class codes</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Employees, payroll and how the work is classified.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="numberOfEmployees" className={labelClass}>Number of employees</label><input id="numberOfEmployees" name="numberOfEmployees" type="text" inputMode="numeric" value={formData.numberOfEmployees} onChange={handleChange} placeholder="8" className={inputClass} /></div>
                          <div><label htmlFor="amountOfPayroll" className={labelClass}>Amount of payroll</label><input id="amountOfPayroll" name="amountOfPayroll" type="text" inputMode="numeric" value={formData.amountOfPayroll} onChange={handleChange} placeholder="$420,000" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="classCode1" className={labelClass}>Class code 1</label><input id="classCode1" name="classCode1" type="text" value={formData.classCode1} onChange={handleChange} placeholder="5403" className={inputClass} /></div>
                          <div><label htmlFor="classCode2" className={labelClass}>Class code 2</label><input id="classCode2" name="classCode2" type="text" value={formData.classCode2} onChange={handleChange} placeholder="5645" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="classCode3" className={labelClass}>Class code 3</label><input id="classCode3" name="classCode3" type="text" value={formData.classCode3} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="classCode4" className={labelClass}>Class code 4</label><input id="classCode4" name="classCode4" type="text" value={formData.classCode4} onChange={handleChange} className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="classCode5" className={labelClass}>Class code 5</label><input id="classCode5" name="classCode5" type="text" value={formData.classCode5} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="officeVsFieldSplit" className={labelClass}>Office vs field split</label><input id="officeVsFieldSplit" name="officeVsFieldSplit" type="text" value={formData.officeVsFieldSplit} onChange={handleChange} placeholder="2 office / 6 field" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="hasClericalStaff" className={labelClass}>Any clerical staff?</label><select id="hasClericalStaff" name="hasClericalStaff" value={formData.hasClericalStaff} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                          <div><label htmlFor="clericalStaffCount" className={labelClass}>Clerical staff — count and payroll</label><input id="clericalStaffCount" name="clericalStaffCount" type="text" value={formData.clericalStaffCount} onChange={handleChange} placeholder="2 clerical, $90,000 payroll" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="hasSalesStaff" className={labelClass}>Any outside sales staff?</label><select id="hasSalesStaff" name="hasSalesStaff" value={formData.hasSalesStaff} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                          <div><label htmlFor="salesStaffCount" className={labelClass}>Sales staff — count and payroll</label><input id="salesStaffCount" name="salesStaffCount" type="text" value={formData.salesStaffCount} onChange={handleChange} placeholder="1 outside sales, $60,000 payroll" className={inputClass} /></div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Current or prior coverage</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Who covers you today, if anyone.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="priorCarrierName" className={labelClass}>Current or prior carrier</label><input id="priorCarrierName" name="priorCarrierName" type="text" value={formData.priorCarrierName} onChange={handleChange} placeholder="Carrier name" className={inputClass} /></div>
                          <div><label htmlFor="priorPolicyNumber" className={labelClass}>Policy number</label><input id="priorPolicyNumber" name="priorPolicyNumber" type="text" value={formData.priorPolicyNumber} onChange={handleChange} placeholder="Policy number" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="priorPolicyExpiration" className={labelClass}>Policy expiration date</label><input id="priorPolicyExpiration" name="priorPolicyExpiration" type="date" value={formData.priorPolicyExpiration} onChange={handleChange} className={inputClass} /></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Owners and officers</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Each owner or officer to be included or excluded.</p>
                        </div>
                        <OwnersFieldset
                          inputClass={inputClass}
                          labelClass={labelClass}
                          buttonClass="btn-secondary min-h-[44px]"
                          accentTextClass="text-clay"
                          mutedTextClass="text-mocha"
                          borderClass="border-adobe"
                          onFieldsChange={setOwnerFields}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass}>Tell us about your operation <span className="text-mocha/60 font-normal">(optional)</span></label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder={COPY.quote.messagePlaceholder} className={`${inputClass} resize-none`} />
                      </div>

                      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                      <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                        {submitting ? "Sending…" : "Request my free quote"}{!submitting && <ArrowRight className="h-5 w-5" />}
                      </button>
                      <p className="text-xs text-center text-mocha/70">No spam. No commitment. We'll only contact you about your quote.</p>
                    </form>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
