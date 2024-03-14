import { AppConfig } from "../app.config";

export function initializer(appConfig: AppConfig): () => Promise<void> {
    return (): Promise<void> => {
      return new Promise(async (resolve, reject) => {
        try {
          await appConfig.listaUrlApi();
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    };
  }