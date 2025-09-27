# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.8.0] - 2025-09-27
### Added
- Implemented the new Sitemap-Driven Architecture, making the app structure modular and easier for designers to modify.
- Routes and navigation are now generated dynamically from a central `sitemap.ts` file.

### Fixed
- Resolved an issue where childless navigation items would render a blank page.
- Corrected duplicate and missing navigation links in the main sidebar.