import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";

export async function checkRateLimit(req: Request) {
    if (
      process.env.NODE_ENV !== "development" &&
      process.env.KV_REST_API_URL &&
      process.env.KV_REST_API_TOKEN
    ) {
      const ip = req.headers.get("x-forwarded-for");
      console.log('IP:', ip);
      
      const ratelimit = new Ratelimit({
        redis: kv,
        limiter: Ratelimit.slidingWindow(50, "1 d"),
      });
  
      const { success, limit, reset, remaining } = await ratelimit.limit(
        `chathn_ratelimit_${ip}`,
      );
      console.log('Ratelimit:', { success, limit, reset, remaining });
  
      if (!success) {
        return new Response("You have reached your request limit for the day.", {
          status: 429,
          headers: {
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
          },
        });
      }
    }
    return null;
  }