# Prem AI Video Studio

A $0, static order site that sells **faceless AI-generated videos** (Reels, YouTube Shorts, explainers) made with the open-source [Automated-Video-Generator](https://github.com/itsPremkumar/Automated-Video-Generator) pipeline.

## What it does
- Static landing + pricing + order form (no backend, no build step, no cost).
- Order form opens a **pre-filled WhatsApp chat** to the operator with the customer's script and package.
- Payments via **UPI** (India-friendly, zero gateway fees).
- Deployed free on Vercel Hobby.

## Live
https://aivid-studio-rust.vercel.app

## Setup
1. Edit `index.html`: replace `YOUR_UPI_ID_HERE` with your UPI ID.
2. Edit `script.js`: set `WHATSAPP_NUMBER` to your number in international digits-only format (e.g. `919345568244`).
3. Deploy:
   ```bash
   vercel deploy --prod --yes
   ```

## Files
- `index.html` — landing, pricing, order form
- `style.css` — dark theme
- `script.js` — WhatsApp deep-link builder + UPI copy
- `vercel.json` — static deploy config

## License
MIT
