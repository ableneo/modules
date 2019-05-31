{
  "compileOnSave": false,
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    // "inlineSourceMap": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,

    "jsx": "react",
    "strict": true /* Enable all strict type-checking options. */,

    /* Strict Type-Checking Options */
    "noImplicitAny": false /* Raise error on expressions and declarations with an implied 'any' type. */,
    "strictNullChecks": true /* Enable strict null checks. */,
    "strictFunctionTypes": true /* Enable strict checking of function types. */,
    "strictPropertyInitialization": true /* Enable strict checking of property initialization in classes. */,
    "noImplicitThis": true /* Raise error on 'this' expressions with an implied 'any' type. */,
    "alwaysStrict": true /* Parse in strict mode and emit "use strict" for each source file. */,

    /* Additional Checks */
    "noUnusedLocals": true /* Report errors on unused locals. */,
    "noUnusedParameters": false /* Report errors on unused parameters. */,
    "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
    "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,

    /* Debugging Options */
    "traceResolution": false /* Report module resolution log messages. */,
    "listEmittedFiles": false /* Print names of generated files part of the compilation. */,
    "listFiles": false /* Print names of files part of the compilation. */,
    "pretty": true /* Stylize errors and messages using color and context. */,

    /* Experimental Options */
    // "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
    // "emitDecoratorMetadata": true /* Enables experimental support for emitting type metadata for decorators. */,
    "downlevelIteration": true,

    "outDir": "dist",
    "rootDir": "src",
    "declaration": true,
    "typeRoots": ["../../node_modules/@types", "node_modules/@types"],

    "lib": ["dom", "dom.iterable", "esnext"]
  },
  "include": ["./src/**/*.tsx", "./src/**/*.ts"],
  "exclude": ["node_modules"]
}
