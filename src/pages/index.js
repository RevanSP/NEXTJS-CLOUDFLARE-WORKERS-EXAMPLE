import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT.JS CLOUDFLARE WORKERS</title>
      </Head>
      <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <header className="p-6 flex flex-col justify-center items-center">
            <Image
              unoptimized
              src="https://raw.githubusercontent.com/andregans/code_logotype/refs/heads/main/Next%20JS%20Logotype.png"
              alt="Next.js on Cloudflare Workers Logo"
              width={0}
              sizes="100vw"
              height={0}
              className="w-56"
            />
            <h1 className="text-3xl font-bold text-center text-secondary mt-4">
              Next.js on Cloudflare Workers
            </h1>
          </header>
        </div>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            CLONE REPOSITORY
          </h2>
          <ol className="list-decimal pl-6 text-white mb-4">
            <li>
              <code className="bg-[#222] px-1 rounded">
                git clone
                https://github.com/RevanSP/NEXTJS-CLOUDFLARE-WORKERS-EXAMPLE.git
              </code>
            </li>
            <li>
              <code className="bg-[#222] px-1 rounded">
                cd NEXTJS-CLOUDFLARE-WORKERS-EXAMPLE
              </code>
            </li>
            <li>
              <code className="bg-[#222] px-1 rounded">bun install</code>
            </li>
          </ol>
        </section>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            TESTING YOUR API
          </h2>
          <p className="mb-4">
            To test your newly created REST API, visit the{" "}
            <code className="bg-[#222] px-1 rounded">/api/hello</code> route on
            Cloudflare Workers.
          </p>
          <p className="mb-4">
            Example URL:{" "}
            <code className="bg-[#222] px-1 rounded">
              https://nextjs-cloudflare-workers.revanspstudy28.workers.dev/api/hello
            </code>
          </p>
          <p className="mb-4">Expected JSON response:</p>
          <pre className="p-4 rounded-lg text-xs bg-[#222] overflow-x-auto">
            {`{
  "name": "John Doe"
}`}
          </pre>
        </section>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            CLOUDFLARE WORKERS FEATURES SETUP
          </h2>
          <p className="mb-4">
            This project uses OpenNext and Cloudflare Workers for deployment.
            Here are the key configuration files and their features:
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-secondary">
              open-next.config.ts
            </h3>
            <p className="mb-2">
              This file configures OpenNext for Cloudflare Workers deployment:
            </p>
            <pre className="p-4 rounded-lg text-xs overflow-x-auto bg-[#222]">
              {`import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});`}
            </pre>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-secondary">
              wrangler.jsonc
            </h3>
            <p className="mb-2">
              The Wrangler configuration file includes several important
              features:
            </p>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>Node.js compatibility mode enabled</li>
              <li>Global fetch API support</li>
              <li>Assets binding for static files</li>
              <li>R2 bucket support (configurable)</li>
              <li>
                You can set your Worker name by modifying the{" "}
                <code className="bg-[#222] px-1 rounded">name</code> field.
              </li>
            </ul>
            <pre className="p-4 rounded-lg text-xs overflow-x-auto bg-[#222]">
              {`{
  "$schema": "node_modules/wrangler/config-schema.json",
  "main": ".open-next/worker.js",
  "name": "nextjs-cloudflare-workers",
  "compatibility_date": "2024-12-30",
  "compatibility_flags": [
    "nodejs_compat",
    "global_fetch_strictly_public"
  ],
  "r2_buckets": [],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  }
}`}
            </pre>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-secondary">
              Incremental Static Regeneration (ISR)
            </h3>
            <p className="mb-2">
              To enable ISR functionality in your Next.js application on
              Cloudflare Workers, you need to configure Cloudflare R2 storage:
            </p>
            <ol className="list-decimal pl-6 text-white mb-4">
              <li>Create an R2 bucket in your Cloudflare account</li>
              <li>Add the R2 bucket configuration to your wrangler.jsonc:</li>
            </ol>
            <pre className="p-4 rounded-lg bg-[#222] text-xs overflow-x-auto">
              {`{
  "r2_buckets": [
    {
      "binding": "BUCKET",
      "bucket_name": "your-bucket-name"
    }
  ]
}`}
            </pre>
            <p className="mt-4 text-white">
              The R2 bucket is used to store and serve regenerated pages for
              ISR. Without R2 storage configured, ISR features will not work
              properly on Cloudflare Workers.
            </p>
          </div>
        </section>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            SETTING SECRETS WITH WRANGLER CLI
          </h2>
          <p className="mb-4">
            To securely store sensitive data like API keys, use the Wrangler CLI
            secret feature. For example, to set a secret named{" "}
            <code>API_KEY</code>, run:
          </p>
          <pre className="p-4 rounded-lg bg-[#222] text-xs overflow-x-auto">
            {`bunx wrangler secret put API_KEY`}
          </pre>
          <p className="my-4">
            After running the command, you will see a prompt like:
          </p>
          <pre className="p-4 rounded-lg bg-[#222] text-xs overflow-x-auto">
            {`⛅️ wrangler 4.24.3 (update available 4.25.0)
─────────────────────────────────────────────
√ Enter a secret value: ... ********************************
🌀 Creating the secret for the Worker "your-worker-name"
✨ Success! Uploaded secret API_KEY`}
          </pre>
          <p className="my-4">
            You’ll be asked to input the secret’s value directly in the terminal
            (input is hidden for security). Once successful, the secret will be
            available to your Worker as an environment variable.
          </p>
          <p className="mb-4">
            Access the secret in your Worker code like this:
          </p>
          <pre className="p-4 rounded-lg bg-[#222] text-xs overflow-x-auto">
            {`const apiKey = env.API_KEY;`}
          </pre>
          <p className="mb-4">
            Remember to configure your <code>wrangler.toml</code> file properly
            to bind environment variables to your Worker.
          </p>
        </section>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            CREATE & UPDATE DEPLOYMENT
          </h2>
          <p className="mb-4">
            Create and after making changes to your project, you can redeploy it
            to Cloudflare Workers by simply running:
          </p>
          <code className="bg-[#222] px-1 rounded">bun run deploy</code>
          <p className="mt-4">
            This command will rebuild and update your existing deployment with
            the latest changes.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-secondary">
              CONFIGURE BUILD & DEPLOY COMMANDS IN CLOUDFLARE DASHBOARD
            </h3>
            <p className="mb-4">
              You can also set these commands directly in the Cloudflare Workers
              Dashboard:
            </p>
            <ol className="list-decimal pl-6 text-white mb-4">
              <li>
                Go to <strong>Workers & Pages</strong> from the Cloudflare
                Dashboard
              </li>
              <li>Click on your deployed Worker</li>
              <li>
                Navigate to <strong>Settings</strong> &gt;{" "}
                <strong>Build Configuration</strong>
              </li>
              <li>Fill in the fields as follows:</li>
            </ol>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>
                <code>Build Command</code>:{" "}
                <code className="bg-[#222] px-1 rounded">bun run build</code>
              </li>
              <li>
                <code>Deploy Command</code>:{" "}
                <code className="bg-[#222] px-1 rounded">bun run deploy</code>
              </li>
              <li>
                <code>Non-production Branch Deploy Command</code>:{" "}
                <code className="bg-[#222] px-1 rounded">bun run deploy</code>
              </li>
            </ul>
            <p className="text-white">
              This ensures that deployments are handled automatically when you
              push changes to your repository.
            </p>
          </div>
        </section>
        <footer className="mt-12 text-center text-gray-600">
          <p>ReiiV. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}