import discord
from discord.ext import commands
from discord_slash import SlashCommand

# Créer une instance du bot avec un préfixe
bot = commands.Bot(command_prefix='!')
slash = SlashCommand(bot, sync_commands=True)

# Événement de démarrage du bot
@bot.event
async def on_ready():
    print(f'Bot connecté en tant que {bot.user.name}')

# Commande slash simple
@slash.slash(name="hello", description="Salut!")
async def hello(ctx):
    await ctx.send('Salut!')

# Commande slash avec argument
@slash.slash(name="repeat", description="Répéter un message")
async def repeat(ctx, message: str):
    await ctx.send(message)

# Lancer le bot avec le token
bot.run('MTE3MzYzMDA5OTE4MzExNjM2OQ.GZOfmK.YZ6o8Cu2aDVlimbByFuymb6uAwOH32uCflkfQ8')
