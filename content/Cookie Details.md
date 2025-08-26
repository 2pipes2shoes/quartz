// Splash page cookie management
const SPLASH_COOKIE_NAME = "quartz-visited"
const COOKIE_DURATION_DAYS = 14

// Cookie utility functions
function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}
