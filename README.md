# Custom Medusa Dashboard

This repository contains a **customized Medusa dashboard**. All UI-related customizations and overrides are implemented here, isolated from the core Medusa backend project.

## Overview

The main Medusa project integrates this dashboard automatically via a **postinstall script**. During installation, the script performs the following steps:

1. Clones this repository
2. Builds the customized dashboard
3. Applies the customization to the installed Medusa dashboard package by:

   * Copying only the `src` and `dist` folders
   * Cleaning the Vite cache to ensure changes are properly applied

This approach allows us to keep UI customizations versioned and maintainable without directly modifying the core Medusa repository.

## Version Support ⚠️

> **Important:**
> This custom dashboard currently supports **Medusa v2.10.3 only**.

Compatibility with other Medusa versions is **not guaranteed** at this time.

## Notes

* All UI changes **must be implemented in this repository**
* Backend logic and configuration remain in the main Medusa project
* Any upgrade of Medusa requires validation and potential adjustments to this dashboard