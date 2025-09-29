# Update Landing Page Colors to Match Logo

## Changes Made
- Updated the color scheme to use the exact colors from the MotorLab logo
- Added CSS variables for consistent color usage throughout the application:
  - Primary color (blue): `#1b1464`
  - Secondary color (orange): `#f7931e`
- Created utility classes for both colors (text, background, border, hover states)
- Applied the new colors to:
  - Header navigation and border
  - Hero section overlay and buttons
  - Navigation indicators and controls
- Added dark mode variants of the colors for better visibility

## Visual Changes
- Header now has a blue border instead of a shadow
- Navigation links now hover in blue instead of orange
- Hero section overlay uses the blue color with transparency
- Call-to-action buttons use the primary blue color
- Accent elements use the secondary orange color

## Implementation Details
- Colors are defined as CSS variables in `globals.css`
- Dark mode adjustments are included
- All color references use the new variables for consistency
- No functionality changes, purely visual updates
