export const cn = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(' ');

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
