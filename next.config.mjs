/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // The old profile URL (before the surname was corrected) keeps working.
    return [
      { source: "/team/dario-linus", destination: "/team/dario-ceglia", permanent: true },
      { source: "/ar/team/dario-linus", destination: "/ar/team/dario-ceglia", permanent: true },
    ];
  },
};

export default nextConfig;
