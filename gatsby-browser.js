/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Remove service workers left by older offline-enabled deployments.
export const onClientEntry = () => {
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => registrations.forEach(registration => registration.unregister()))
      .catch(() => {});
  }
};


// Subtle route transitions without adding another animation dependency.
export const onPreRouteUpdate = ({ location, prevLocation }) => {
  if (!prevLocation || location.pathname === prevLocation.pathname) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('route-leaving');
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (!prevLocation || location.pathname === prevLocation.pathname) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.remove('route-leaving');
  document.documentElement.classList.add('route-entering');
  window.setTimeout(() => {
    document.documentElement.classList.remove('route-entering');
  }, 460);
};
