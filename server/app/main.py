# app/main.py
from fastapi import FastAPI
from app.db.mongodb import mongodb
from app.api.endpoints import auth, team, content

app = FastAPI()

@app.on_event("startup")
async def startup_db_client():
    await mongodb.connect()

@app.on_event("shutdown")
async def shutdown_db_client():
    await mongodb.close()

# Include API routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(team.router, prefix="/team", tags=["team"])
app.include_router(content.router, prefix="/content", tags=["content"])
