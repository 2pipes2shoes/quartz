// Splash page cookie management
const SPLASH_COOKIE_NAME = "quartz-visited"
const COOKIE_DURATION_DAYS = 14

// Cookie utility functions
function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

function getCookie(name: string): string | null {
  const nameEQ = name + "="
  const ca = document.cookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === " ") c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

// Create splash overlay
function createSplashOverlay() {
  const overlay = document.createElement("div")
  overlay.id = "splash-overlay"
  overlay.innerHTML = `
    <div class="splash-content">
      <div class="splash-inner">
        <h1>Welcome to the Fusion Framework</h1>
        <p>This message will only apear every few weeks or every time you clear your cookies</p>
        <p>We put a lot of effort into this massive database of techneque</p>
        <p>Please share and use this database for your learning process. Please reach out to Dynamicdancers@gmail.com if you want to use this for classes and teaching.</p>
        <p>Please donate if you are able to here: </p>
        <p>Please hire us to teach at your gathering, venue, or event as well as for private lessons</p>
        <p>We are based in California but travel and teach</p>
        <button id="splash-continue" class="splash-button">Get a cookie that hides this page from you for two weeks</button>
      </div>
    </div>
  `
  
  // Add styles
  const style = document.createElement("style")
  style.textContent = `
    #splash-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      opacity: 0;
      animation: fadeIn 0.5s ease-in-out forwards;
    }
    
    .splash-content {
      background: var(--light, #ffffff);
      background: var(--dark, #1a1a1a);
      border-radius: 12px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      transform: translateY(20px);
      animation: slideUp 0.5s ease-out 0.2s forwards;
      opacity: 0;
    }
    
    .splash-inner h1 {
      margin: 0 0 1rem 0;
      color: var(--dark, #333333);
      color: var(--light, #ffffff);
      font-size: 2rem;
      font-weight: 600;
    }
    
    .splash-inner p {
      margin: 0 0 2rem 0;
      color: var(--dark, #666666);
      color: var(--light, #cccccc);
      font-size: 1.1rem;
      line-height: 1.5;
    }
    
    .splash-button {
      background: var(--secondary, #4a9eff);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .splash-button:hover {
      background: var(--secondary-hover, #3a8eef);
      transform: translateY(-1px);
    }
    
    @keyframes fadeIn {
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeOut {
      to { opacity: 0; }
    }
    
    .splash-fade-out {
      animation: fadeOut 0.3s ease-in-out forwards;
    }
  `
  
  document.head.appendChild(style)
  document.body.appendChild(overlay)
  
  // Handle continue button click
  const continueButton = document.getElementById("splash-continue")
  if (continueButton) {
    continueButton.addEventListener("click", () => {
      // Set the cookie for 2 weeks
      setCookie(SPLASH_COOKIE_NAME, "true", COOKIE_DURATION_DAYS)
      
      // Fade out and remove overlay
      overlay.classList.add("splash-fade-out")
      setTimeout(() => {
        overlay.remove()
        style.remove()
      }, 300)
    })
  }
}

// Main splash logic
function initSplash() {
  // Check if the splash cookie exists
  const hasVisited = getCookie(SPLASH_COOKIE_NAME)
  
  if (!hasVisited) {
    // Show splash page
    createSplashOverlay()
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSplash)
} else {
  initSplash()
}
