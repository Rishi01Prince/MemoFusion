from motor.motor_asyncio import AsyncIOMotorClient
from core.config import settings

client = AsyncIOMotorClient(settings.mongodb_url)
database = client.get_default_database()

async def get_database():
    return database
