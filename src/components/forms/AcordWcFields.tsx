"use client";

import { useState } from "react";
import {
  CLASS_ROWS,
  CONTACTS,
  COVERAGE_OPTIONS,
  COVERAGE_OTHER,
  EL_FIELDS,
  EL_LIMITS,
  EXPERIENCE,
  EXPLANATION_MAX,
  IDENTIFICATION,
  POLICY_DATES,
  PRIOR_ROWS,
  UW_QUESTIONS,
  WORK_FROM_HOME_COUNT,
  WORK_STATES,
  classFields,
  explanationName,
  priorFields,
  type TextDef,
} from "./acord-wc-spec";

// ACORD 130 intake additions for /quote. Every control is a real named, UNCONTROLLED input (or a
// controlled radio) so the page's FormData(form) picks it up; collapsed <details> keep their inputs
// in the DOM, so nothing is lost when a section is closed. All fields here are OPTIONAL.
// See acord-wc-spec.ts for the rules.

interface Classes {
  inputClass: string;
  labelClass: string;
  mutedTextClass?: string;
  borderClass?: string;
}

const Group = ({ title, note, children, borderClass = "border-adobe" }: { title: string; note?: string; children: React.ReactNode; borderClass?: string }) => (
  <details className={`rounded-xl border ${borderClass} px-4 py-3`}>
    <summary className="cursor-pointer min-h-[44px] flex items-center font-heading font-bold text-sm uppercase tracking-wider">
      {title} <span className="ml-2 text-xs font-normal normal-case opacity-70">(optional)</span>
    </summary>
    {note && <p className="text-xs opacity-70 mt-1">{note}</p>}
    <div className="space-y-4 pt-4">{children}</div>
  </details>
);

export function AcordWcFields({ inputClass, labelClass, mutedTextClass = "text-mocha", borderClass = "border-adobe" }: Classes) {
  const [ans, setAns] = useState<Record<string, string>>({});
  const setYN = (name: string, value: string) => setAns((p) => ({ ...p, [name]: value }));

  const text = (d: TextDef, key?: string) => (
    <div key={key ?? d.name}>
      <label htmlFor={`acord-${d.name}`} className={labelClass}>{d.label}</label>
      <input
        id={`acord-${d.name}`}
        name={d.name}
        type={d.type ?? "text"}
        inputMode={d.inputMode}
        placeholder={d.placeholder}
        maxLength={d.max}
        autoComplete="off"
        className={inputClass}
      />
    </div>
  );

  const radioWrap = `inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl border ${borderClass} px-4 py-2 text-sm font-semibold`;
  const yesNo = (name: string, label: string, gated = true) => (
    <fieldset key={name} className="space-y-2">
      <legend className={labelClass}>{label}</legend>
      <div className="flex flex-wrap gap-3" role="radiogroup" aria-label={label}>
        {["Yes", "No"].map((o) => (
          <label key={o} className={radioWrap}>
            <input type="radio" name={name} value={o} checked={ans[name] === o} onChange={() => setYN(name, o)} className="h-5 w-5 accent-current" />
            {o}
          </label>
        ))}
      </div>
      {gated && ans[name] === "Yes" && (
        <div>
          <label htmlFor={`acord-${explanationName(name)}`} className={labelClass}>Please explain (short answer)</label>
          <textarea
            id={`acord-${explanationName(name)}`}
            name={explanationName(name)}
            rows={2}
            maxLength={EXPLANATION_MAX}
            className={`${inputClass} resize-none`}
          />
        </div>
      )}
    </fieldset>
  );

  const grid = (children: React.ReactNode) => <div className="grid sm:grid-cols-2 gap-4">{children}</div>;

  return (
    <div className="space-y-4 pt-5 border-t border-adobe">
      <div>
        <h3 className="font-heading font-bold text-sm uppercase tracking-wider">More for your application</h3>
        <p className="text-xs opacity-70 mt-0.5">
          Everything in these sections is optional. The more you fill in, the fewer follow-up questions we need. Never enter a Social Security Number, driver license number or policy number anywhere on this form.
        </p>
      </div>

      <Group title="Business identification" borderClass={borderClass}>
        {grid(<>{IDENTIFICATION.slice(0, 2).map((d) => text(d))}</>)}
        {grid(<>{IDENTIFICATION.slice(2, 4).map((d) => text(d))}</>)}
        {grid(<>{IDENTIFICATION.slice(4).map((d) => text(d))}</>)}
      </Group>

      <Group title="Contacts" note="Who we should call." borderClass={borderClass}>
        {grid(<>{CONTACTS.map((d) => text(d))}</>)}
      </Group>

      <Group title="Policy requested" note="Dates, states and limits you want quoted." borderClass={borderClass}>
        {POLICY_DATES.map((d) => text(d))}
        {text(WORK_STATES)}
        {grid(
          <>
            {EL_FIELDS.map((f) => (
              <div key={f.name}>
                <label htmlFor={`acord-${f.name}`} className={labelClass}>{f.label}</label>
                <select id={`acord-${f.name}`} name={f.name} defaultValue="" className={`${inputClass} bg-white`}>
                  <option value="">Select...</option>
                  {EL_LIMITS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            ))}
          </>,
        )}
        {COVERAGE_OPTIONS.map((q) => yesNo(q.name, q.label, false))}
        {/* wcCoverageOther keeps its name but now carries Yes/blank (ticks the ACORD "Other" box); the words go in wcCoverageOtherDescription (11-char box). */}
        <div>
          <label htmlFor="acord-wcCoverageOtherDescription" className={labelClass}>{COVERAGE_OTHER.label} (a few words)</label>
          <input
            id="acord-wcCoverageOtherDescription"
            name="wcCoverageOtherDescription"
            type="text"
            maxLength={11}
            autoComplete="off"
            onChange={(e) => setYN("wcCoverageOther", e.target.value.trim() ? "Yes" : "")}
            className={inputClass}
          />
          <input type="hidden" name="wcCoverageOther" value={ans["wcCoverageOther"] ?? ""} />
        </div>
      </Group>

      <Group title="Payroll by class and state" note="Add the details behind each class code you listed above. Estimates are fine." borderClass={borderClass}>
        {Array.from({ length: CLASS_ROWS }, (_, i) => i + 1).map((n) => (
          <details key={n} open={n === 1} className={`rounded-xl border ${borderClass} px-4 py-3`}>
            <summary className="cursor-pointer min-h-[44px] flex items-center text-sm font-semibold">Class {n} details</summary>
            <div className="space-y-4 pt-3">
              {grid(<>{classFields(n).slice(0, 2).map((d) => text(d))}</>)}
              {grid(<>{classFields(n).slice(2).map((d) => text(d))}</>)}
            </div>
          </details>
        ))}
      </Group>

      <Group title="Experience mod and past coverage" note="Carrier name, premium and claims for earlier policy years (the most recent year's carrier, expiration and loss details are in Current or prior coverage and Coverage timing and history above). Enter 0 if there were no claims. Do not include policy numbers or claimant names." borderClass={borderClass}>
        {text(EXPERIENCE)}
        {Array.from({ length: PRIOR_ROWS }, (_, i) => i + 1).map((n) => (
          <details key={n} className={`rounded-xl border ${borderClass} px-4 py-3`}>
            <summary className="cursor-pointer min-h-[44px] flex items-center text-sm font-semibold">{n === 1 ? "Most recent policy year (year and premium)" : `Policy year ${n} back`}</summary>
            <div className="space-y-4 pt-3">
              {grid(<>
                {priorFields(n).map((d) => text(d))}
              </>)}
            </div>
          </details>
        ))}
      </Group>

      <Group title="Operations and exposures" note="Yes or No. If you answer Yes, add a one-line explanation." borderClass={borderClass}>
        {/* Canonical yn_/ynExplain_ names (ghostworkerscompinsurance.com donor): the one ACORD 130 question the uw* set lacks. */}
        <fieldset className="space-y-2">
          <legend className={labelClass}>Is any work sublet without certificates of insurance?</legend>
          <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Is any work sublet without certificates of insurance?">
            {["Yes", "No"].map((o) => (
              <label key={o} className={radioWrap}>
                <input type="radio" name="yn_subletWithoutCOI" value={o} checked={ans["yn_subletWithoutCOI"] === o} onChange={() => setYN("yn_subletWithoutCOI", o)} className="h-5 w-5 accent-current" />
                {o}
              </label>
            ))}
          </div>
          {ans["yn_subletWithoutCOI"] === "Yes" && (
            <div>
              <label htmlFor="acord-ynExplain_subletWithoutCOI" className={labelClass}>Please explain (short answer)</label>
              <textarea id="acord-ynExplain_subletWithoutCOI" name="ynExplain_subletWithoutCOI" rows={2} maxLength={EXPLANATION_MAX} className={`${inputClass} resize-none`} />
            </div>
          )}
        </fieldset>
        {UW_QUESTIONS.map((q) => (
          <div key={q.name} className="space-y-3">
            {yesNo(q.name, q.label)}
            {q.name === "uwWorkFromHome" && ans[q.name] === "Yes" && text(WORK_FROM_HOME_COUNT)}
          </div>
        ))}
      </Group>
    </div>
  );
}
