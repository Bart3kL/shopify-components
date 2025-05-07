export interface Metric {
  label: string;
  value: string | number;
}

export interface Stats1Props {
  metrics: Metric[];
  footerText: string;
  footerLinkUrl: string;
  footerLinkText: string;
  title: string;
}
