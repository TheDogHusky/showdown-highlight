import type { ShowdownExtension } from "showdown";

declare function showdownHighlight({ pre: Boolean, auto_detection: Boolean }): ShowdownExtension[];
export = showdownHighlight;
