import { useEffect } from 'react';

const SOURCE_ID = 'mindmatch-quiz';

const safeMathMax = (...values) => {
  return values.reduce((max, value) => {
    const numeric = Number(value);
    if (Number.isFinite(numeric)) {
      return Math.max(max, numeric);
    }
    return max;
  }, 0);
};

const computeDocumentSize = () => {
  const { body, documentElement } = document;

  if (!body || !documentElement) {
    return { height: window.innerHeight, width: window.innerWidth };
  }

  const height = safeMathMax(
    body.scrollHeight,
    documentElement.scrollHeight,
    body.offsetHeight,
    documentElement.offsetHeight,
    body.clientHeight,
    documentElement.clientHeight
  );

  const width = safeMathMax(
    body.scrollWidth,
    documentElement.scrollWidth,
    body.offsetWidth,
    documentElement.offsetWidth,
    body.clientWidth,
    documentElement.clientWidth
  );

  return { height, width };
};

export function useEmbedViewportSync() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const isEmbedded = window.parent && window.parent !== window;

    if (!isEmbedded) {
      return undefined;
    }

    let frameRequest = null;

    const postDimensions = () => {
      if (frameRequest) {
        cancelAnimationFrame(frameRequest);
      }

      frameRequest = requestAnimationFrame(() => {
        const { height, width } = computeDocumentSize();

        window.parent.postMessage(
          {
            source: SOURCE_ID,
            type: 'content-dimensions',
            payload: {
              height,
              width
            }
          },
          '*'
        );
      });
    };

    const { body, documentElement } = document;

    const disconnectors = [];

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(postDimensions);
      disconnectors.push(() => resizeObserver.disconnect());

      if (documentElement) {
        resizeObserver.observe(documentElement);
      }
      if (body) {
        resizeObserver.observe(body);
      }
    }

    let mutationObserver;

    if (typeof MutationObserver !== 'undefined' && body) {
      mutationObserver = new MutationObserver(() => {
        postDimensions();
      });

      mutationObserver.observe(body, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
      });
    }

    const handleResize = () => {
      postDimensions();
    };

    const handleOrientationChange = () => {
      setTimeout(postDimensions, 200);
    };

    postDimensions();

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange, {
      passive: true
    });

    return () => {
      if (frameRequest) {
        cancelAnimationFrame(frameRequest);
      }
      disconnectors.forEach((disconnect) => disconnect());
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);
}

export default useEmbedViewportSync;
