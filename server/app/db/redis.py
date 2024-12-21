import aioredis
from core.config import settings

redis = aioredis.from_url(settings.redis_url, decode_responses=True)

async def get_redis():
    return redis
