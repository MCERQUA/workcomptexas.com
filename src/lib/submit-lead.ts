const LEADS_WEBHOOK =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=workcomptexas.com";

/**
 * Write a lead, failing loudly. Path 1: the leads webhook (JSON body; it drops multipart bodies and answers
 * HTTP 200 {"stored":false} when it kept nothing). That counts as success ONLY if res.ok AND json.ok === true
 * AND stored !== false. Otherwise path 2: Netlify Forms (urlencoded POST to /__forms.html with form-name).
 * Returns true if either path accepted the lead; the caller shows an error only when this returns false.
 * Success on path 1 returns immediately, so a lead is never delivered twice.
 */
export async function submitLead(
  formName: string,
  fields: Record<string, string>
): Promise<boolean> {
  try {
    const res = await fetch(LEADS_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form_name: formName,
        source: "workcomptexas.com",
        ...fields,
      }),
    });
    if (res.ok) {
      const j = await res.json().catch(() => null);
      if (j && j.ok === true && j.stored !== false) return true;
    }
  } catch {
    // fall through to Netlify Forms
  }
  try {
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": formName, ...fields }).toString(),
    });
    return res.ok;
  } catch {
    return false;
  }
}
