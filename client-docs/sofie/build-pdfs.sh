#!/bin/bash
# Regenerate Sofie launch PDFs from branded HTML.
# Run from this folder: ./build-pdfs.sh
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="Rhynoflow — Serviceaftale — Dansk Puslespilsforening.pdf" \
  "file://$(pwd)/service-agreement.html"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="Rhynoflow — Databehandleraftale — Dansk Puslespilsforening.pdf" \
  "file://$(pwd)/dpa.html"
echo "Done. PDFs ready to send."
