import baseConfig, { restrictEnvAccess } from "@stockton/eslint-config/base";
import nextjsConfig from "@stockton/eslint-config/nextjs";
import reactConfig from "@stockton/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
