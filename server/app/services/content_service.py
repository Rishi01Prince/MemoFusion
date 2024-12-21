from models.content import Content
from db.mongodb import get_db

async def create_content(title: str, body: str, team_id: str):
    db = await get_db()
    content = Content(title=title, body=body, team_id=team_id)
    db["contents"].insert_one(content.dict())
    return content

async def get_content(content_id: str):
    db = await get_db()
    content = db["contents"].find_one({"_id": content_id})
    if content:
        return Content(**content)
    return None
