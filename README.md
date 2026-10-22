# SkinPulse Premium

Upgrade the SkinPulse application with a refined premium visual design system and UI architecture.

IMPORTANT CONSTRAINT:
Do NOT introduce any third-party libraries, component frameworks, chart libraries, animation libraries, or UI dependencies. Everything must be implemented using native CSS, HTML, and the existing project stack created earlier.

OBJECTIVE:
Transform the current interface into a premium wellness analytics experience comparable to Apple Health, Oura, or Levels Health.

The UI must feel:
• scientific
• calm
• premium
• modern
• trustworthy
• minimal

Avoid playful startup aesthetics or bright neon tech styles.

DESIGN SYSTEM

Create a cohesive design system with reusable tokens.

COLOR PALETTE

Primary Background
#F7F5F2 (soft cream)

Secondary Background
#EFEAE4 (warm beige)

Card Background
rgba(255,255,255,0.7)

Primary Accent
#5FA8A6 (soft teal)

Secondary Accent
#D6AFAF (muted rose)

Highlight Accent
#B7B3E5 (soft lavender)

Primary Text
#2A2A2A

Secondary Text
#6B6B6B

Border Color
rgba(0,0,0,0.06)

Shadow Color
rgba(0,0,0,0.05)

GLASSMORPHIC CARD SYSTEM

Create reusable card styles:

Standard Card
• rounded corners (20px)
• backdrop blur
• subtle border
• soft shadow
• generous padding

Metric Card
• score display
• label
• subtle gradient background

Feature Card
• icon area
• title
• description

Dashboard Panel
• larger container
• subtle depth
• section header

TYPOGRAPHY SYSTEM

Use a native system font stack only.

Define hierarchy:

Display Title
42px
weight 600

Page Title
28px
weight 600

Section Title
20px
weight 600

Card Title
16px
weight 600

Body Text
14px
weight 400

Micro Text
12px
weight 400

Line spacing should be generous to improve readability.

LAYOUT GRID

Define a responsive grid:

Desktop
max width 1200px
centered container

Dashboard Layout
left sidebar navigation
main content panel
optional right insight panel

Mobile
single column layout
stacked cards

Spacing system

8px base spacing scale:
8
16
24
32
48
64

SIDEBAR NAVIGATION

Design a clean vertical sidebar including:

Logo / Brand name
Dashboard
New Scan
Scan History
Insights (placeholder)
Settings

Sidebar characteristics:

• soft background tint
• subtle hover states
• active page indicator
• icon + label navigation items

BUTTON SYSTEM

Create reusable button styles.

Primary Button
• teal gradient background
• white text
• rounded pill style
• subtle shadow

Secondary Button
• neutral background
• bordered style

Ghost Button
• minimal text button

Hover interactions
• subtle elevation
• slight brightness change

SCAN UPLOAD EXPERIENCE

Upgrade the scan upload interface.

Create a large upload panel:

• dashed border container
• drag-and-drop support
• camera icon placeholder
• instructional text
• image preview after upload

Add guidance panel:

“Tips for Best Scan”

• natural lighting
• no makeup
• neutral face
• camera at eye level

ANALYSIS LOADING EXPERIENCE

Improve the loading screen.

Create a multi-step progress animation.

Steps include:

Preparing Image
Aligning Facial Region
Reading Skin Signals
Generating Skin Metrics
Preparing Your Dashboard

Show animated progress indicators between steps.

Avoid fake scientific claims.

RESULTS PAGE VISUAL DESIGN

Create an elegant analytics layout.

Top Section

Large circular score display:

Skin Health Score
Example: 78 / 100

Use a circular progress visualization built using native CSS or SVG only.

Below the score:

small label:
“Healthy with mild dehydration signals”

METRIC CARDS

Display five metric cards:

Hydration
Texture
Pigmentation
Inflammation
Elasticity

Each card should include:

metric name
score value
small indicator label:

Low
Moderate
Good
Excellent

Cards should be arranged in a responsive grid.

RADAR CHART IMPLEMENTATION

Create a radar chart using only native SVG.

Axes:

Hydration
Texture
Pigmentation
Inflammation
Elasticity

The radar chart should:

• visually represent the five metrics
• animate when results appear
• fit within a card container

FACE SCAN PREVIEW PANEL

Display the uploaded image inside a styled frame.

Include:

Scan Date
Skin Score
Thumbnail

Later phases will overlay heatmaps here.

DASHBOARD PAGE IMPROVEMENTS

Upgrade dashboard layout.

Top section:

Welcome message

Example:
“Good evening, Varun.”

Below:

Skin Score Card
Latest Scan Summary
Quick Scan Button

Lower sections:

Progress Overview (placeholder)
Skin Insights (placeholder)
Recommendations (placeholder)

SCAN HISTORY PAGE

Design a clean table or card grid showing:

Scan Date
Score
Metric Summary
View Details Button

Include empty state:

“No scans yet. Upload your first skin scan to start tracking your skin health.”

MICRO INTERACTIONS

Add subtle UI motion using native CSS transitions.

Examples:

Card hover elevation
Button press animation
Smooth page transitions
Loading pulse effects

Animations must remain subtle and professional.

RESPONSIVE DESIGN

Ensure full responsiveness.

Desktop
• multi column dashboard

Tablet
• reduced columns

Mobile
• stacked layout
• large touch targets
• simplified navigation

ACCESSIBILITY

Ensure:

• readable contrast ratios
• keyboard navigable interface
• clear focus states
• alt text for uploaded images

CODE ORGANIZATION

Create reusable UI components such as:

Card
MetricCard
ScoreCircle
RadarChartSVG
SidebarNav
PageHeader
ButtonPrimary
UploadPanel

Ensure styling is modular and maintainable.

FINAL RESULT

The SkinPulse interface should feel like a polished premium wellness analytics product even before advanced AI analysis is added.

The UI should communicate trust, clarity, and measurable progress.

Do not add any external packages or dependencies.

All visuals must rely only on native web technologies.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9732fba6-042d-4973-b2fa-9365d970eee4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
