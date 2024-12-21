# app/db/mongodb.py
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ServerSelectionTimeoutError
from pydantic import BaseSettings

class Settings(BaseSettings):
    mongodb_uri: str

    class Config:
        env_file = ".env"

settings = Settings()

class MongoDB:
    def __init__(self):
        self.client = None
        self.db = None

    async def connect(self):
        try:
            self.client = AsyncIOMotorClient(settings.mongodb_uri)
            self.db = self.client.get_default_database()
            # Attempt to connect to verify connection
            await self.db.command("ping")
        except ServerSelectionTimeoutError:
            raise Exception("Failed to connect to MongoDB")

    async def close(self):
        if self.client:
            self.client.close()

mongodb = MongoDB()
