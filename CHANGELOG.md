# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **"Plug-and-Play" Data Mocking:**
  - Added file structure for domain-specific data sets in `public/data_sets/`.
  - Created a central configuration "switch" (`src/config.ts`) to allow designers to easily swap the active data set for their prototype.

## [0.9.0] - 2025-10-08
### Added
- Published the first stable version of `create-bodewell-app` to the NPM registry.

### Changed
- Refactored the `TemplateSwitcher` component to remove code duplication and improve maintainability.

### Removed
- Removed the obsolete `MainLayout.tsx` and `DefaultLayout.tsx` components, which were remnants of the old, hardcoded routing system.

## [0.8.0] - 2025-09-27
### Added
- Implemented the new Sitemap-Driven Architecture, making the app structure modular and easier for designers to modify.
- Routes and navigation are now generated dynamically from a central `sitemap.ts` file.

### Fixed
- Resolved an issue where childless navigation items would render a blank page.
- Corrected duplicate and missing navigation links in the main sidebar.