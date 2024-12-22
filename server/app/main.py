from fastapi import FastAPI
from .api.endpoints import auth, team, content

app = FastAPI(title="Super Notes API", version="1.0.0")

# # Include routers
# app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
# app.include_router(team.router, prefix="/team", tags=["Team Management"])
# app.include_router(content.router, prefix="/content", tags=["Content Management"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Super Notes API"}
