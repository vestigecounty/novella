/**
 * AssetPreloader.js
 * Utility to preload images for upcoming scenes and sprites
 */

export class AssetPreloader {
  constructor() {
    this.preloadedImages = new Set();
  }

  /**
   * Extract assets (scenes and sprites) from upcoming content
   * @param {Object} ast - The parsed AST
   * @param {number} currentSectionIndex - Current section index
   * @param {number} currentContentIndex - Current content index
   * @returns {Array} Array of image paths to preload
   */
  extractUpcomingAssets(ast, currentSectionIndex, currentContentIndex) {
    const assets = new Set();

    // Current section - get remaining content
    const currentSection = ast.sections[currentSectionIndex];
    if (currentSection) {
      // Get upcoming content in current section
      for (
        let i = currentContentIndex + 1;
        i < currentSection.content.length;
        i++
      ) {
        const item = currentSection.content[i];
        if (item.type === "sprite") {
          const spritePath = item.pose
            ? `/sprites/${item.character}-${item.pose}.png`
            : `/sprites/${item.character}.png`;
          assets.add(spritePath);
        }
      }

      // Add scene from current section metadata
      if (currentSection.metadata?.scene) {
        const scenePath = `/scenes/${currentSection.metadata.scene}.jpg`;
        assets.add(scenePath);
      }
    }

    // Next section - get scene and first sprites
    if (currentSectionIndex + 1 < ast.sections.length) {
      const nextSection = ast.sections[currentSectionIndex + 1];
      if (nextSection) {
        // Add scene from next section
        if (nextSection.metadata?.scene) {
          const scenePath = `/scenes/${nextSection.metadata.scene}.jpg`;
          assets.add(scenePath);
        }

        // Add sprites from next section (up to first dialogue)
        for (const item of nextSection.content) {
          if (item.type === "sprite") {
            const spritePath = item.pose
              ? `/sprites/${item.character}-${item.pose}.png`
              : `/sprites/${item.character}.png`;
            assets.add(spritePath);
          } else if (item.type === "dialogue" || item.type === "choice") {
            // Stop at first dialogue or choice
            break;
          }
        }
      }
    }

    return Array.from(assets);
  }

  /**
   * Preload an image
   * @param {string} imagePath - Path to the image
   * @returns {Promise} Promise that resolves when image loads
   */
  preloadImage(imagePath) {
    return new Promise((resolve, reject) => {
      // Skip if already preloaded
      if (this.preloadedImages.has(imagePath)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        this.preloadedImages.add(imagePath);
        resolve();
      };
      img.onerror = () => {
        // Don't reject on error, just log it
        console.warn(`Failed to preload image: ${imagePath}`);
        resolve();
      };
      img.src = imagePath;
    });
  }

  /**
   * Preload multiple images
   * @param {Array} imagePaths - Array of image paths
   * @returns {Promise} Promise that resolves when all images are preloaded
   */
  async preloadImages(imagePaths) {
    const promises = imagePaths.map((path) => this.preloadImage(path));
    return Promise.all(promises);
  }

  /**
   * Clear preloaded images cache
   */
  clear() {
    this.preloadedImages.clear();
  }

  /**
   * Check if image is preloaded
   * @param {string} imagePath - Path to check
   * @returns {boolean}
   */
  isPreloaded(imagePath) {
    return this.preloadedImages.has(imagePath);
  }

  /**
   * Get count of preloaded images
   * @returns {number}
   */
  getPreloadedCount() {
    return this.preloadedImages.size;
  }
}

export default AssetPreloader;
