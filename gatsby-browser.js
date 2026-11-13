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
