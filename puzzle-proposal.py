from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.styles import ParagraphStyle

WIDTH, HEIGHT = A4
OUT = "/Users/dengawak/Created Apps/Rhynoflow-Website/Rhynoflow-Proposal-DanishPuzzling.pdf"

# Colors
GREEN = HexColor('#00c853')
DARK = HexColor('#1a1a1a')
MUTED = HexColor('#666666')
LIGHT_BG = HexColor('#f7f7f7')
BORDER = HexColor('#e0e0e0')
WHITE = HexColor('#ffffff')
GREEN_SOFT = HexColor('#e8f8ef')

c = canvas.Canvas(OUT, pagesize=A4)

# ─── HEADER BAR ───
c.setFillColor(DARK)
c.rect(0, HEIGHT - 55, WIDTH, 55, fill=1, stroke=0)
c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 20)
c.drawString(28, HEIGHT - 38, "Rhyno")
c.setFillColor(GREEN)
c.drawString(28 + c.stringWidth("Rhyno", "Helvetica-Bold", 20), HEIGHT - 38, "flow")
c.setFillColor(HexColor('#999999'))
c.setFont("Helvetica", 9)
c.drawRightString(WIDTH - 28, HEIGHT - 33, "Your admin, charged through.")
c.drawRightString(WIDTH - 28, HEIGHT - 44, "rhynoflow-dk.netlify.app")

# ─── TITLE SECTION ───
y = HEIGHT - 88
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 18)
c.drawString(28, y, "Proposal for the Danish Puzzling Association")
y -= 18
c.setFillColor(MUTED)
c.setFont("Helvetica", 10)
c.drawString(28, y, "Prepared for Sofie & the Board  |  March 2026  |  Forening Tier")

# ─── THE CHALLENGE ───
y -= 30
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 12)
c.drawString(28, y, "The Challenge")
y -= 5
c.setStrokeColor(GREEN)
c.setLineWidth(2)
c.line(28, y, 95, y)
y -= 14
c.setFont("Helvetica", 9)
c.setFillColor(MUTED)
lines = [
    "With 600 members, 2-4 events per cycle, and admin spread across the board, things slip through.",
    "Event announcements go out late. Member emails pile up. Payment tracking is manual.",
    "",
    "Rhynoflow automates the repetitive admin inside your Google account — so the board can",
    "focus on puzzles, not paperwork."
]
for line in lines:
    c.drawString(28, y, line)
    y -= 13

# ─── 5 CORE AUTOMATIONS ───
y -= 12
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 12)
c.drawString(28, y, "5 Automations Built for Your Association")
y -= 5
c.setStrokeColor(GREEN)
c.line(28, y, 175, y)
y -= 8

automations = [
    ("1. Morning Briefing", "Daily email to key board members at 6:30 AM.",
     "Today's calendar, unread inbox summary, upcoming deadlines, draft emails waiting. Everyone starts the day knowing what needs attention."),

    ("2. Member Email Automation", "Stop typing the same replies to 600 members.",
     "Competition signup confirmations, event reminders (auto-sent 7/3/1 days before), welcome emails for new members, and renewal nudges — all from your Gmail."),

    ("3. Deadline & Event Alerts", "Never miss a registration deadline or venue booking.",
     "Tracks every deadline in a shared Google Sheet. Board members get alerts at 7, 3, and 1 day before. WJPC deadlines, venue bookings, funding apps — all covered."),

    ("4. Payment Tracking", "MobilePay and bank transfers logged automatically.",
     "Payments logged to a Google Sheet with fees deducted. See who's paid, who hasn't, and get monthly revenue summaries — no manual spreadsheet work."),

    ("5. Board Communication", "Keep the board aligned without endless email chains.",
     "Weekly summary every Friday: what happened, what's coming, who's handling what. Board meeting agendas auto-generated from the deadline tracker."),
]

for title, subtitle, desc in automations:
    card_h = 44
    c.setFillColor(GREEN_SOFT)
    c.roundRect(28, y - card_h + 8, WIDTH - 56, card_h, 5, fill=1, stroke=0)

    c.setFillColor(DARK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(36, y, title)
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(36 + c.stringWidth(title, "Helvetica-Bold", 10) + 6, y, subtitle)

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    words = desc.split()
    line = ""
    ly = y - 14
    for word in words:
        test = line + word + " "
        if c.stringWidth(test, "Helvetica", 8) > WIDTH - 90:
            c.drawString(36, ly, line.strip())
            ly -= 11
            line = word + " "
        else:
            line = test
    if line.strip():
        c.drawString(36, ly, line.strip())

    y -= card_h + 6

# ─── PRICING ───
y -= 10
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 12)
c.drawString(28, y, "Pricing — Forening Tier")
y -= 5
c.setStrokeColor(GREEN)
c.line(28, y, 125, y)
y -= 18

# Price box
box_h = 65
box_w = WIDTH - 56
c.setFillColor(WHITE)
c.setStrokeColor(BORDER)
c.setLineWidth(1)
c.roundRect(28, y - box_h + 5, box_w, box_h, 8, fill=1, stroke=1)

# Left side — price
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 22)
c.drawString(40, y - 8, "1,000 DKK")
c.setFont("Helvetica", 11)
c.setFillColor(MUTED)
c.drawString(40 + c.stringWidth("1,000 DKK", "Helvetica-Bold", 22) + 4, y - 6, "/month")

c.setFont("Helvetica", 9)
c.drawString(40, y - 24, "Setup: 3,000 DKK (one-time)  |  Yearly: 10,200 DKK/year (save 15%)")

# Launch offer badge
c.setFillColor(GREEN)
c.roundRect(40, y - 50, 245, 20, 4, fill=1, stroke=0)
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 9)
c.drawString(50, y - 45, "LAUNCH OFFER: Sign up before May 1 — setup is free")

# Right side — what's included
rx = WIDTH / 2 + 30
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 8)
c.drawString(rx, y - 3, "INCLUDES:")
c.setFont("Helvetica", 8)
items = ["Morning Briefing", "Member email automation", "Deadline & event alerts",
         "Payment tracking", "Board communication", "Weekly summary"]
iy = y - 14
for item in items:
    c.setFillColor(GREEN)
    c.drawString(rx, iy, "\u2713")
    c.setFillColor(MUTED)
    c.drawString(rx + 10, iy, item)
    iy -= 10

# ─── NEXT STEPS ───
y -= box_h + 14
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 12)
c.drawString(28, y, "Next Steps")
y -= 5
c.setStrokeColor(GREEN)
c.line(28, y, 85, y)
y -= 18

steps = [
    ("01", "Discovery call (30 min)", "We look at your actual inbox, calendar, and workflows together. You show us where time gets wasted."),
    ("02", "We build it in your Google account", "All 5 automations installed and configured for how your board actually works. Takes about 1 week."),
    ("03", "You wake up and it's running", "Morning briefings arrive. Emails get drafted. Deadlines get tracked. The board just reviews and approves."),
]

for num, title, desc in steps:
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(32, y, num)
    c.setFillColor(DARK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(58, y + 2, title)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(58, y - 10, desc)
    y -= 30

# ─── FOOTER ───
c.setFillColor(LIGHT_BG)
c.rect(0, 0, WIDTH, 38, fill=1, stroke=0)
c.setFillColor(MUTED)
c.setFont("Helvetica", 8)
c.drawString(28, 16, "Rhynoflow  |  hello@rhynoflow.dk  |  rhynoflow-dk.netlify.app")
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 8)
c.drawRightString(WIDTH - 28, 16, "Built in Copenhagen. For clubs and associations everywhere.")

c.save()
print("PDF created:", OUT)
