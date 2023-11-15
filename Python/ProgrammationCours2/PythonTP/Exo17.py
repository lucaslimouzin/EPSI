nombre = int(input("Entrez un nombre : "))
for i in range (1,nombre +1):
    line = ""
    for j in range(1,nombre+1):
        line = line + str(j * i) + " "
    print(line)

