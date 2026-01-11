# MDRE & SSAT Labs Website

This repository contains the source code for the MDRE (Movement Diagnosis and Rehabilitation Engineering) and SSAT (Sport Science and Athletics Training) Labs website at National Taiwan University of Science and Technology (NTUST).

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository and navigate into the directory:
   ```bash
   git clone <repository-url>
   cd mdre-ssat
   ```

2. Remove the existing lock file to ensure clean dependency installation.
   
   On macOS/Linux:
   ```bash
   rm package-lock.json
   ```
   
   On Windows (PowerShell):
   ```powershell
   Remove-Item package-lock.json
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the application.

### Building for Production

To build the application for production:

```bash
npm run build
```

To start the production server:


### Dependencies

The project relies on the following key technologies and libraries:

- **Framework**: [Next.js](https://nextjs.org/) (v14.0.4)
- **UI Library**: [React](https://react.dev/) (v18)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Utilities**: `clsx`, `tailwind-merge`
