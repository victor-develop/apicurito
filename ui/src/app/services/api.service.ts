import { Injectable } from "@angular/core";
import { ApiDefinition } from "apicurio-design-studio";
import { StorageService } from "./storage.service";
import { NewApiTemplates } from "../empty/empty-state.data";

@Injectable()
export class ApiService {
  definition: ApiDefinition = null;
  templates: NewApiTemplates = new NewApiTemplates();

  constructor(private storage: StorageService) {}

  createDefinition(content: any) {
    this.definition = new ApiDefinition();

    this.definition.createdBy = "user";
    this.definition.createdOn = new Date();
    this.definition.tags = [];
    this.definition.description = "";
    this.definition.id = "api-1";
    this.definition.spec = content;
    this.definition.type = "OpenAPI30";
    if (content && content.swagger && content.swagger == "2.0") {
      this.definition.type = "OpenAPI20";
    }
  }

  createNewApi(version: string = "3.0.2") {
    let api: any = JSON.parse(this.templates.EMPTY_API_30);
    if (version == "2.0") {
      api = JSON.parse(this.templates.EMPTY_API_20);
    }

    this.createDefinition(api);
  }

  recover() {
    const apiDef: ApiDefinition = this.storage.recover();

    if (apiDef) {
      this.createDefinition(apiDef.spec);
    }
  }

  clearDefinition() {
    this.definition = null;
  }
}
