import discord
from discord.ext import commands

# Spécifiez les intents nécessaires
intents = discord.Intents.default()
intents.messages = True
intents.guilds = True
intents.reactions = True

# Créez une instance de bot avec les intents spécifiés
bot = commands.Bot(command_prefix='!', intents=intents)

# Événement de démarrage du bot
@bot.event
async def on_ready():
    print(f'Bot connecté en tant que {bot.user.name}')

# Commande simple
@bot.command(name='hello')
async def hello(ctx):
    await ctx.send('Salut!')

# Commande avec argument
@bot.command(name='repeat')
async def repeat(ctx, *args):
    response = ' '.join(args)
    await ctx.send(response)

# Lancer le bot avec le token
bot.run('MTE3MzYzMDA5OTE4MzExNjM2OQ.G0vkN_.s6T9cxhsoW5Kcce3uFai26O4YO2mBDD5A1iXYw', intents = intents)
