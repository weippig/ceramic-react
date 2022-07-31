import { CeramicClient } from "@ceramicnetwork/http-client";

export default class CeramicClientHelper {
  private static instance: CeramicClient;

  public static getInstance() {
    if (!this.instance) {
      this.instance = new CeramicClient('https://ceramic-clay.3boxlabs.com');
    }

    return this.instance;
  }
}