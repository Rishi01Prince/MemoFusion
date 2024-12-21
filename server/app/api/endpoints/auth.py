# app/api/endpoints/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.user import UserCreate, UserRead
from app.crud.user import create_user, get_user_by_email
from app.core.security import get_password_hash, verify_password, create_access_token
