export async function GET() {
  const robotsTxt = `User-agent: *
Disallow: /919004002941
Disallow: /wa.me/919004002941
Disallow: https://connectingdotserp.com/adminlogin
Disallow: https://connectingdotserp.com/dashboard
Sitemap: https://www.connectingdotserp.com/sitemap.xml`;

  return new Response(robotsTxt, {
      headers: {
          "Content-Type": "text/plain",
      },
  });
}
