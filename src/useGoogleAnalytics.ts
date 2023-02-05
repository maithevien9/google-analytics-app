import { useEffect } from 'react';
import ReactGA from 'react-ga';

export const useGoogleAnalytics = (trackingCode: string) => {
  useEffect(() => {
    ReactGA.initialize(trackingCode);

    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [trackingCode]);
};
