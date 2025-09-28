import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function ApiDocs() {
  return (
    <SwaggerUI
      url="/openapi/supOS-en.yaml"          
      defaultModelsExpandDepth={-1}    // ✅ 不显示 Schemas 区块   
      deepLinking={true}               // 支持 URL 锚点跳转
    />
  );
}
