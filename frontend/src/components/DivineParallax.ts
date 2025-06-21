/**
 * DIVINE PARALLAX - HAND OF GOD (Next.js TypeScript Version)
 * Simplified scroll-controlled hand emergence effect
 */

interface ParallaxElements {
  handImage: HTMLElement | null;
  handGlow: HTMLElement | null;
  heroText: HTMLElement | null;
}

class DivineParallax {
  private scrollY: number = 0;
  private targetScrollY: number = 0;
  private currentScrollY: number = 0;
  private ticking: boolean = false;
  private windowHeight: number = window.innerHeight;
  private windowWidth: number = window.innerWidth;
  private lerpFactor: number = 0.12;
  private heroTextShown: boolean = false;
  
  private elements: ParallaxElements = {
    handImage: null,
    handGlow: null,
    heroText: null
  };

  constructor() {
    this.init();
  }

  private init(): void {
    this.cacheElements();
    this.setupEventListeners();
    this.initializeHandPosition();
    this.startParallaxLoop();
  }

  private cacheElements(): void {
    this.elements = {
      handImage: document.querySelector('.hand-image'),
      handGlow: document.querySelector('.hand-glow'),
      heroText: document.querySelector('.hero-text-container')
    };
  }

  private setupEventListeners(): void {
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  private handleScroll(): void {
    this.targetScrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!this.ticking) {
      this.requestTick();
    }
  }

  private handleResize(): void {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }

  private requestTick(): void {
    if (!this.ticking) {
      requestAnimationFrame(this.updateParallax.bind(this));
      this.ticking = true;
    }
  }

  private startParallaxLoop(): void {
    const animate = () => {
      this.updateParallax();
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }

  private updateParallax(): void {
    // Smooth interpolation
    this.currentScrollY = this.lerp(this.currentScrollY, this.targetScrollY, this.lerpFactor);
    
    // Calculate scroll progress - slower emergence for more gradual movement
    // Reduced scroll speed by 50% (multiply by 0.50)
    const scrollProgress = (this.currentScrollY / this.windowHeight) * 0.50;
    const emergenceProgress = Math.min(scrollProgress * 1.2, 1); // Changed from 2.0 to 1.5 for slower movement
    
    // Update divine hand position based on scroll
    this.updateDivineHand(emergenceProgress);
    
    // Check if hand animation is complete and show hero text
    this.updateHeroText(emergenceProgress);
    
    this.ticking = false;
  }

  private updateDivineHand(emergenceProgress: number): void {
    if (!this.elements.handImage) return;
    
    // Hand emergence from top-left corner based on scroll
    const startX = -this.windowWidth * 0.3;  // Start off-screen left
    const startY = -this.windowHeight * 0.8; // Start well above screen
    
    // End positions - slightly extended more downward
    const endX = this.windowWidth * 0.15;    // Emerge to center-left
    const endY = this.windowHeight * 0.35;   // Changed from 0.15 to 0.25 for slightly more downward movement
    
    // Smooth interpolation between start and end positions
    const currentX = this.lerp(startX, endX, emergenceProgress);
    const currentY = this.lerp(startY, endY, emergenceProgress);
    
    // Scale effect based on emergence
    const scale = 0.6 + (emergenceProgress * 0.3); // From 60% to 90%
    
    // Apply scroll-based transform
    this.elements.handImage.style.transform = 
      `translate(${currentX}px, ${currentY}px) scale(${scale})`;
    
    // Divine glow follows hand position
    if (this.elements.handGlow) {
      const glowIntensity = 0.2 + (emergenceProgress * 0.25);
      
      this.elements.handGlow.style.opacity = glowIntensity.toString();
      this.elements.handGlow.style.transform = 
        `translate(${currentX - 50}px, ${currentY - 50}px) scale(${scale * 1.1})`;
    }
  }

  private updateHeroText(emergenceProgress: number): void {
    if (!this.elements.heroText) return;
    
    // Show "God's Hand" title immediately (scroll progress 0 and above)
    this.elements.heroText.classList.add('show-title');
    
    // Show scroll indicator only at scroll progress 0
    if (this.currentScrollY <= 10) { // Small threshold for scroll detection
      this.elements.heroText.classList.add('show-scroll-indicator');
    } else {
      this.elements.heroText.classList.remove('show-scroll-indicator');
    }
    
    // Start showing phrase when hand is halfway through (60% progress)
    if (emergenceProgress >= 0.6) {
      this.elements.heroText.classList.add('show-phrase');
    } else {
      this.elements.heroText.classList.remove('show-phrase');
    }
    
    // Apply dynamic positioning based on emergence progress
    const titleElement = this.elements.heroText.querySelector('.hero-title') as HTMLElement;
    const subtitleElement = this.elements.heroText.querySelector('.hero-subtitle') as HTMLElement;
    
    if (titleElement) {
      // Title starts centered, then moves up as phrase appears (only after 60% progress)
      const titleOffset = emergenceProgress >= 0.6 ? 
        Math.min((emergenceProgress - 0.6) * 100, 40) : 0; // Move up max 40px
      
      titleElement.style.transform = `translateY(-${titleOffset}px)`;
    }
    
    if (subtitleElement && emergenceProgress >= 0.6) {
      // Phrase fades in from below
      const phraseOpacity = Math.min((emergenceProgress - 0.6) * 2.5, 1);
      const phraseOffset = Math.max(30 - (emergenceProgress - 0.6) * 75, 0); // Slide up from 30px
      
      subtitleElement.style.opacity = phraseOpacity.toString();
      subtitleElement.style.transform = `translateY(${phraseOffset}px)`;
    }
  }

  private initializeHandPosition(): void {
    // Set initial hand position off-screen
    if (this.elements.handImage) {
      const startX = -this.windowWidth * 0.3;
      const startY = -this.windowHeight * 0.8;
      const initialScale = 0.6;
      
      this.elements.handImage.style.transform = 
        `translate(${startX}px, ${startY}px) scale(${initialScale})`;
      this.elements.handImage.style.opacity = '1';
    }
    
    // Set initial glow position
    if (this.elements.handGlow) {
      const startX = -this.windowWidth * 0.3;
      const startY = -this.windowHeight * 0.8;
      
      this.elements.handGlow.style.transform = 
        `translate(${startX - 50}px, ${startY - 50}px) scale(${0.6 * 1.1})`;
      this.elements.handGlow.style.opacity = '0.2';
    }
  }

  // Utility function for smooth interpolation
  private lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
  }
}

export default DivineParallax; 