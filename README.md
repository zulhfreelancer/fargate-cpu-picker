## About

A helper library written in TypeScript to support AWS CDK development i.e. building ECS Task Definition. It will suggest the minimum/maximum CPU (vCPU) based on memory/RAM needed to run an ECS task.

## Repositories

- NPM: https://www.npmjs.com/package/fargate-cpu-picker
- GitHub: https://github.com/zulhfreelancer/fargate-cpu-picker

## Setup

You may need to add `DOM` to the `lib` section in your _tsconfig.json_ file like so:

```typescript
{
  "compilerOptions": {
    // code omitted for brevity
    "lib": [
      "es2018",
      "DOM"
    ],
    // code omitted for brevity...
  }
}
```

## Usage

```typescript
import { pick } from "fargate-cpu-picker";

// Return minimum vCPU supported for 0.5GB memory
const minCPU = pick("0.5", "min"); // 256

// Without second parameter, it will fallback to minimum too
const minCPU = pick("0.5"); // 256

// Return maximum vCPU supported for 2GB memory
const maxCPU = pick("2", "max"); // 1024
```

## Previous Releases

If you need to refer at specific version of this package, it's available [here](https://github.com/zulhfreelancer/fargate-cpu-picker/releases). They were created using [np](https://www.npmjs.com/package/np) (it's cool - you should check it out).

## Contribute

Feel free to fork and submit PRs for this project. I'm more than happy to review and merge it. If you have any questions regarding contributing, feel free to reach out to me on [Twitter](https://twitter.com/zulhhandyplast).
