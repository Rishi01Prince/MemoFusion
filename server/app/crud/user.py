# app/crud/user.py
from app.models.user import UserModel
from app.db.mongodb import mongodb
from bson import ObjectId

async def create_user(user: UserModel) -> UserModel:
    user_dict = user.dict()
    user_dict["_id"] = ObjectId()
    await mongodb.db["users"].insert_one(user_dict)
    return user

async def get_user_by_email(email: str) -> UserModel:
    user_dict = await mongodb.db["users"].find_one({"email": email})
    if user_dict:
        return UserModel(**user_dict)
    return None
