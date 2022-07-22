import { css } from "@emotion/react";

export const SMALL_WIDTH = "600px";
export const MEDIUM_WIDTH = "960px";

export const Breakpoints = {
  모바일: `(max-width: ${SMALL_WIDTH}px)`,
  태블릿: `(max-width: ${MEDIUM_WIDTH}px) and (min-width: ${SMALL_WIDTH + 1}px)`,
  데스크탑: `(min-width: ${MEDIUM_WIDTH + 1}px)`,
} as const;

export const MediaQueries = (breakpoint) => `@media screen and ${breakpoint}`;

export const HideOn = (mediaQuery) =>
  css`
    ${mediaQuery} {
      display: none;
    }
  `;
