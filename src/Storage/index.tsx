/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default class AppStorage {
  private static instance: AppStorage;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(): AppStorage {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }

  setItem(key: string, data: any): void {
    try {
      const value = JSON.stringify(data);
      return localStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  }

  getItem(key: string): any | null {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      return localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }
}
