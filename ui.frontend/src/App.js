import { Page, withModel } from "@adobe/aem-react-editable-components";
import React from "react";
import AuthProvider from "./hooks/Auth";

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <AuthProvider>
        <div>
          {this.childComponents}
          {this.childPages}
        </div>
      </AuthProvider>
    );
  }
}

export default withModel(App);
