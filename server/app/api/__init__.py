# api/__init__.py

from fastapi import APIRouter
from .endpoints import auth, team, content

router = APIRouter()
router.include_router(auth.router, prefix="/auth", tags=["auth"])
router.include_router(team.router, prefix="/teams", tags=["teams"])
router.include_router(content.router, prefix="/contents", tags=["contents"])
