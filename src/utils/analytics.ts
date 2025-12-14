/// <reference types="vite/client" />
import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      anonymizeIp: true, // Privacy-friendly
    },
    gtagOptions: {
      send_page_view: false, // We'll manually track page views
    },
  });
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path, title: path });
};

export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Custom events for your portfolio
export const trackProjectView = (projectName: string) => {
  trackEvent('Projects', 'View Project', projectName);
};

export const trackProjectExpand = (projectName: string) => {
  trackEvent('Projects', 'Expand Project', projectName);
};

export const trackFilterChange = (filter: string) => {
  trackEvent('Projects', 'Filter Change', filter);
};

export const trackExternalLink = (linkType: string, destination: string) => {
  trackEvent('External Link', linkType, destination);
};

export const trackSectionView = (section: string) => {
  trackEvent('Navigation', 'Section View', section);
};

export const trackResumeDownload = () => {
  trackEvent('Resume', 'Download', 'PDF');
};
