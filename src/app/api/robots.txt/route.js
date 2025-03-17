export async function GET() {
    const robotsTxt = `User-agent: *
  Disallow:
  Sitemap: https://www.connectingdotserp.com/sitemap.xml`;
  
    return new Response(robotsTxt, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  