from pydantic import BaseSettings

class Settings(BaseSettings):
    app_name: str = "My FastAPI Application"
    debug: bool = False
    mongodb_url: str
    redis_url: str
    secret_key: str

    class Config:
        env_file = ".env"

settings = Settings()
