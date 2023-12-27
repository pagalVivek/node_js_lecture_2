import asyncio

async def hello():
    i = 2
    while True:
        print('hello')
        i = i + 1
        if i < 8 :
            break
async def bye():
    i = 2
    while True:
        print('bye')
        i = i + 1
        if i < 8 :
            break
await hello()
await bye()