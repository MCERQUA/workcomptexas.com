#!/usr/bin/env bash
# Generate all images for workcomptexas.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/workcomptexas.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — WORK COMP TEXAS — Texas contractor workers comp ===

gen "hero.jpg" \
  "Photorealistic professional photo of a Texas construction contractor in a hard hat and safety vest reviewing workers compensation documents and insurance certificates on a commercial construction site job trailer desk, laptop open, big blue Texas sky through the window, confident expression, commercial business photography, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic aerial view of a large commercial construction site in Texas with multiple contractor crews working on a multi-story building frame, cranes, scaffolding, big Texas sky, professional commercial construction photography, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a friendly professional insurance agent at a clean modern office desk, smiling, in business casual attire, papers and a laptop in front of him, warm professional lighting, trustworthy expression, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide professional photo of a Texas general contractor in a hard hat shaking hands with an insurance agent at a construction site office, Texas flag in the background, sunny day, both smiling, professional commercial photography, clean and trustworthy, no text, no watermark" 4 1216 640

gen "general-contractor-wc.jpg" \
  "Photorealistic photo of a Texas general contractor in a hard hat and safety vest reviewing blueprints and workers compensation documents at a large commercial construction site, multiple workers visible in background, professional photography, no text" 4

gen "subcontractor-wc.jpg" \
  "Photorealistic photo of a Texas subcontractor electrician in a hard hat and tool belt reviewing an insurance certificate with a general contractor at a commercial building site, professional photography, no text" 4

gen "texas-wc-opt-out.jpg" \
  "Photorealistic photo of a Texas business owner at a desk reviewing legal documents about workers compensation opt-out and non-subscriber status, professional office setting, Texas map visible on wall, clean professional lighting, no text" 4

gen "non-subscriber-insurance.jpg" \
  "Photorealistic photo of a Texas small business owner reviewing occupational accident insurance documents with an insurance agent at a professional office, warm professional lighting, no text" 4

gen "construction-wc.jpg" \
  "Photorealistic photo of Texas construction workers in hard hats and safety vests working on a large commercial building frame, steel structure, blue Texas sky, professional commercial construction photography, no text" 4

gen "small-business-wc.jpg" \
  "Photorealistic photo of a small Texas contractor business owner reviewing workers compensation documents in a small construction office, hard hat on desk, professional photography, no text" 4

gen "roofing-wc.jpg" \
  "Photorealistic photo of a Texas roofing contractor crew in hard hats and safety harnesses working on a residential roof, suburban Texas neighborhood below, clear blue Texas sky, professional safety-focused photography, no text" 4

gen "hvac-wc.jpg" \
  "Photorealistic photo of a Texas HVAC technician in a uniform on a commercial rooftop servicing an air conditioning unit, commercial building rooftop setting, professional photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
