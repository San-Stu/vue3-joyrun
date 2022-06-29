interface Params {
  projectKey: string
}

declare class JYMonitor {
  static projectKey: string;
  static logError: Function;
  constructor({ projectKey }: Params) {
    JYMonitor.projectKey = projectKey
  }
}
